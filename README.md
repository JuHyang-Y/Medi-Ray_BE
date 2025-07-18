# 📘 Medi-Ray 프로젝트 소개
## 📢 주제 및 목표
+ 주제 : **ViT(Vision Transformer;비전 트랜스포머)를 활용한 흉부 방사선 폐 진단 서비스**
+ 목표
  + **ViT** 모델을 이용한 높은 효율성
  + **Dicom 형식의 대규모 공개 데이터셋(MIMIC-CXR Database v2.1.0 4.7TB) 활용**으로 데이터 투명성 제공
  + **Multi-Label Classification**을 통한 최대 14가지 비정상 소견을 진단 및 보조
  + 의사의 편의성 향상을 위해  **Canvas API**로 흉부 x-ray에 직접 붓 그림이나 사각형을 그릴 수 있는 기능 제공
## 📆 프로젝트 기간 
+ 계획/분석/설계 : 24.09.23 - 24.10.18
+ 구현 : 24.10.18 - 24.11.25
## ⛰️ 결과
+ 인공지능사관학교 최종 성과물 발표 장려상 수상  
+ 2024 AI 활용 사회문제 해결 아이디어 공모전 우수상 수상
  
→ **전체 프로젝트에 대한 설명 github 주소** : [Medi-Ray](https://github.com/JIWOONG12/Medi-Ray)  
  
       
# 📄 BE part 정리  
## 📚 사용 기술
<div> 
  <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> 
  <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> 
  <img src="https://img.shields.io/badge/fastapi-009688?style=for-the-badge&logo=fastapi&logoColor=white">
  <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white">
  <br>

  <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

## 🪟 UI/UX 화면
### 초기 화면
![image](https://github.com/user-attachments/assets/6776682c-c19a-4029-9fb8-835848d43fbb)
### 로그인 화면
![image](https://github.com/user-attachments/assets/4fd04436-15d1-46e5-8f94-800f974229c0)
### 회원가입 화면
<img src="https://github.com/user-attachments/assets/ce4ed0ce-a0b8-4c56-bd6c-d4895fdc5373" />
### 메인화면
<img src="https://github.com/user-attachments/assets/641fdae3-00e6-4e0b-a323-efa4072dbdb9" />
### 회사소개 및 아코디언 실행 화면
<img src="https://github.com/user-attachments/assets/5b67b562-47b4-4941-9fac-3e68902118bc" />
### 마이페이지 화면
<img src="https://github.com/user-attachments/assets/7d88cc34-bc8c-4883-9d72-ed777fd70995" />
### DICOM 업로드 화면
**업로드 화면**
<img src="https://github.com/user-attachments/assets/804b845a-3ad4-4629-8842-f4f2bc65b38a" />
**업로드 후 화면**
<img src="https://github.com/user-attachments/assets/4c36335a-9004-45df-8afd-8138e7e9b073" />
### 환자 검색 화면
<img src="https://github.com/user-attachments/assets/69bec279-6c6d-4c11-a7b3-4e118514247b" />
### 진단 화면
**진단 화면**
<img src="https://github.com/user-attachments/assets/cde4eb42-e800-4e04-98be-d6bded75e81a" />
**Heatmap 실행화면**
<img src="https://github.com/user-attachments/assets/959a808d-9a5c-4adb-aa97-8d85245b5b30" />

## 📌 개발환경
+ **GPU**
  + Pytorch 2.3.1(Python 3.10.13, CUDA 11.8, cuDNN 8.9.7)
+ **Spring Boot**
  + 3.3.4
  + Maven
  + JavaJDK 17
  + Project Metadata 다 기본값(Packaging : Jar)
+ **FastAPI**
  + 0.115.0
  + python 3.10.13 → torch 2.4.1+cpu/ultralytics 8.3.9
+ **MariaDB**
  + 10.5
 
## ✏️ 시스템 아키텍처 & API 문서
### 시스템 아키텍처
![image](https://github.com/user-attachments/assets/85982069-141e-4ebe-94cc-23ce20919ff2)
![image](https://github.com/user-attachments/assets/873e0903-c74a-431d-bf39-ec71af63fcd8)

### API 문서
+ [API 명세서](https://docs.google.com/spreadsheets/d/1gWSqK_wsTl03aVV3zX7HH4mJWQ9vPX0HMhkupyEhzwc/edit?usp=sharing) ~~이렇게 적는 게 맞나..?~~

## 📝 참고사항
+ Spring Boot
  + frontend 부분 안에 포함하고 있음
+ FastAPI
  + [pytorch_grad_cam](https://github.com/jacobgil/pytorch-grad-cam/tree/master)은 github 에서 다운 받아서 사용
+ DICOM Metadata
  + 기존 데이터에는 **환자코드만 존재**하기 때문에 시현을 위해 이름, ID, 생년월일, 성별을 임의로 지정해줌

  
## 👷 주요 업무
+ **Backend 개발**
  + Spring Boot와 MariaDB, FastAPI를 연동하고 데이터 관리 로직 설계 및 구현
  + Spring Security를 이용하여 인증되지 않은 사용자 접근 불가하도록 설계
+ **데이터 관리**
  + HeidiSQL을 이용해 데이터베이스 테이블 관리 및 CRUD 기능 개발
+ **프론트 기능 개선**
  + CanvasAPI 랜더링 문제 해결
