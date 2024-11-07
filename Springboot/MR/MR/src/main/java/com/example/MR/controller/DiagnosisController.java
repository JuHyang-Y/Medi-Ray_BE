package com.example.MR.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.MR.entity.ImgTb;
import com.example.MR.entity.PatientTb;
import com.example.MR.mapper.DiagnosisMapper;
import com.example.MR.mapper.MRMapper;

@RestController
@RequestMapping("/diagnosis")
public class DiagnosisController {

    @Autowired
    private MRMapper mapper;
    @Autowired
    private DiagnosisMapper dmapper;

    // 환자 검색
    @GetMapping("/search")
    @ResponseBody
    public List<PatientTb> diagnosis(@RequestParam("inputValue") String inputValue) {
        return mapper.patientList(inputValue); // 여러 결과를 반환
    }

    // 기존 의사소견 조회
    @GetMapping("/xray/dtOpinion")
    public ResponseEntity<String> getOpinion(@RequestParam String xrayCode) {
        try {
            String existingOpinion = dmapper.checkOpinion(xrayCode);
            if (existingOpinion != null) {
                return ResponseEntity.ok(existingOpinion);
            } else {
                return ResponseEntity.ok("");
            }
        } catch (Exception e) {
            e.printStackTrace(); 
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("서버 오류가 발생했습니다.");
        }
    }

    // 의사소견 업데이트
    @PostMapping("/xray/doUpload")
    public ResponseEntity<String> UpdateOpinion(@RequestParam String xrayCode, @RequestParam String dtOpinion) {
        if (dmapper.updateOpinion(xrayCode, dtOpinion) > 0) {
            return ResponseEntity.ok("의견이 업데이트되었습니다.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("업데이트할 의견이 존재하지 않습니다.");
        }
    }
    
    // 촬영리스트 불러오기
    @GetMapping("/xray/dateList")
    public ArrayList<ImgTb> dateList(@RequestParam("ptCode") String ptCode) {
        return dmapper.imgList(ptCode);
    }
    
    // 촬영리스트 클릭하면 해당 페이지로 이동하기
    @GetMapping("/xray/imgDate")
    public ArrayList<ImgTb> imgDate(@RequestParam String ptCode, @RequestParam String xrayDate){
        return dmapper.imgDate(ptCode, xrayDate);
    }

    // 이미지 가져오기
    private static final String UPLOAD_DIR = "C:/Users/USER/dicom"; 

    @GetMapping("/xray/getImage")
    public ResponseEntity<Resource> getImage(@RequestParam("xrayDate") String xrayDate) {
        try {
            String filePath = UPLOAD_DIR + "/" + xrayDate + ".png";
            Resource resource = new FileSystemResource(filePath);

            if (!resource.exists()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.CONTENT_TYPE, "image/png");
            return new ResponseEntity<>(resource, headers, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
