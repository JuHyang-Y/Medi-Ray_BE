import sys
sys.path.append('./MONAI')
from monai.visualize import GradCAM
from monai.visualize import CAM

import os
import numpy as np
import pandas as pd
import random
import matplotlib.pyplot as plt
import cv2

import json
import time
import pathlib
from datetime import datetime
import math
import warnings

from config import parse_arguments
from datasets import DiseaseDataset
from models.resnet import resnet50, resnet152
from models.vgg import vgg16,vgg16_bn
# from models.densenet import densenet121
from utils_folder.utils import AverageMeter, ProgressMeter
from utils_folder.eval_metric import *

import torch
import torch.nn as nn
import torchvision
import torch.backends.cudnn as cudnn
import torch.nn.functional as F

from tensorboardX import SummaryWriter

import torchvision; torchvision.version
import torchvision.models as models


# 배열로 변환하는 헬퍼 함수
fn_tonumpy = lambda x: x.to('cpu').detach().numpy().transpose(0, 2, 3, 1)

def evaluate_cam(args, loader, model, device, num_classes, class_list, log_dir):
    model.eval()  # 평가 모드로 전환
    save_dir = os.path.join(log_dir, 'grad_cam')  # 저장 디렉토리
    os.makedirs(save_dir, exist_ok=True)

    for iter_, (imgs, labels) in enumerate(loader):
        print(f"[INFO] Processing batch {iter_ + 1}/{len(loader)}")

        # 데이터를 device로 전송
        imgs = imgs.to(device)
        labels = labels.to(device, dtype=torch.long)

        # 모델 예측 수행
        outputs = model(imgs)
        outputs = torch.sigmoid(outputs)  # 시그모이드로 예측값을 확률로 변환
        outputs_list = outputs.cpu().detach().numpy().tolist()  # 텐서를 리스트로 변환

        # 예측 결과를 딕셔너리로 변환
        outputs_dict = {class_list[i]: round(outputs_list[0][i] * 100, 1) for i in range(num_classes)}

        # JSON 파일 저장
        output_json_path = os.path.join(save_dir, f"outputs_batch_{iter_}.json")
        with open(output_json_path, "w") as json_file:
            json.dump(outputs_dict, json_file, indent=4)
        print(f"[INFO] JSON saved: {output_json_path}")

        # GradCAM 객체 생성
        cam = GradCAM(nn_module=model, target_layers='layer4')

        # GradCAM 결과 생성
        result = cam(x=imgs, class_idx=None, retain_graph=False).squeeze()
        result = 1 - result  # 히트맵 반전
        heatmap = np.uint8(255 * result)  # 0~255 사이 값으로 변환
        heatmap = cv2.applyColorMap(heatmap, cv2.COLORMAP_JET)  # 컬러맵 적용

        # Threshold 적용
        _, heatmap_thresh = cv2.threshold(heatmap, 128, 255, cv2.THRESH_TOZERO)
        heatmap_thresh = heatmap_thresh / 255  # 정규화

        # 이미지를 Numpy 배열로 변환
        gt_imgs = fn_tonumpy(imgs)
        original_img = np.repeat(gt_imgs[0][:, :, 0:1], 3, axis=-1)  # 원본 이미지 확장
        superimposed_img = heatmap_thresh * 0.7 + gt_imgs[0] * 0.3
        superimposed_img /= 1.3  # 밝기 조절

        # 히트맵 저장
        cam_image_path = os.path.join(save_dir, f"batch_{iter_}_cam.jpg")
        cv2.imwrite(cam_image_path, (superimposed_img * 255).astype(np.uint8))
        print(f"[INFO] CAM image saved: {cam_image_path}")

        # GradCAM 시각화
        plt.figure(figsize=(12, 6))
        plt.subplot(1, 2, 1)
        plt.imshow(original_img, cmap='gray')
        plt.title('Original Image')
        plt.axis('off')

        plt.subplot(1, 2, 2)
        plt.imshow(superimposed_img[..., ::-1])  # OpenCV와 Matplotlib 채널 순서 조정
        plt.title('Superimposed Image')
        plt.axis('off')

        # 실제 라벨과 예측 라벨을 출력
        actual_labels = labels[0].cpu().numpy()
        pred_labels = (outputs > 0.5).int()[0].cpu().numpy()
        actual_labels_str = ', '.join([class_list[i] for i in range(num_classes) if actual_labels[i] == 1])
        pred_labels_str = ', '.join([class_list[i] for i in range(num_classes) if pred_labels[i] == 1])

        plt.suptitle(f'Actual Labels: {actual_labels_str}\nPredicted Labels: {pred_labels_str}')
        plt.show()

        # 디버깅 정보 출력
        print(f"[INFO] Actual Labels: {actual_labels}")
        print(f"[INFO] Predicted Labels: {pred_labels}")




def main():
    ##### Initial Settings

    filename = '/adamw_weight_updated_imagnet_uni_224_bs128_1e-4'
    class Args:
        def __init__(self):
            self.num_class = 14  # 클래스 수
            self.backbone = 'resnet50'  # 백본 모델 선택
            self.log_dir = './runs' + filename  # 로그 디렉토리
            self.img_size = 224  # 이미지 크기
            self.bits = 8  # 비트 수
            self.seed = 50  # 랜덤 시드
            self.w = 4  # 워커 수
            self.resume = True  # 재개 여부
            self.pretrained = './runs' + filename + '/best.pth.tar'  # 프리트레인 모델 경로

    args = Args()

    # 입력받을 png 경로
    img_path = ""

    # 클래스 리스트 정의
    class_list = ['Atelectasis', 'Cardiomegaly', 'Consolidation', 'Edema', 
                   'Enlarged Cardiomediastinum', 'Fracture', 'Lung Lesion',
                   'Lung Opacity', 'No Finding', 'Pleural Effusion', 'Pleural Other',
                   'Pneumonia', 'Pneumothorax', 'Support Devices']

    # Device 설정
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    print('[*] device: ', device)

    # Log directory 설정
    pathlib.Path(args.log_dir).mkdir(parents=True, exist_ok=True)

    # 랜덤 시드 설정
    if args.seed is not None:
        random.seed(args.seed)
        torch.manual_seed(args.seed)
        np.random.seed(args.seed)
        torch.cuda.manual_seed(args.seed)
        torch.backends.cudnn.deterministic = True
        torch.backends.cudnn.benchmark = False

    # 모델 선택 및 로드
    print('[*] build network... backbone: {}'.format(args.backbone))
    if args.backbone == 'resnet50':
        model = resnet50(num_classes=args.num_class)
    elif args.backbone == 'vit':
        vit = models.vit_b_16(pretrained=True)
        head_in_features = vit.heads.head.in_features
        vit.heads.head = nn.Linear(head_in_features, 14)
        model = vit
    else:
        raise ValueError('Have to set the backbone network in [resnet, vgg, densenet]')

    model = model.to(device)

    if args.resume:
        checkpoint = torch.load(args.pretrained)
        pretrained_dict = checkpoint['state_dict']
        pretrained_dict = {key.replace("module.", ""): value for key, value in pretrained_dict.items()}
        model.load_state_dict(pretrained_dict)
        print("Load model completed")
    else:
        raise ValueError('Have to input a pretrained network path')

    ##### Dataset & Dataloader
    print('[*] prepare datasets & dataloader...')
    
    # 선택된 이미지와 라벨로 Dataset 생성
    test_datasets = DiseaseDataset('./selected_data.json', 'test', args.img_size, args.bits, args)
    test_loader = torch.utils.data.DataLoader(test_datasets, batch_size=1,
                                               num_workers=args.w, pin_memory=True, drop_last=True)

    ##### Train & Test
    print('[*] start a test')
    evaluate_cam(args, test_loader, model, device, args.num_class, class_list, args.log_dir)

if __name__ == '__main__':
    main()
