package com.example.MR.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.MR.entity.PatientTb;
import com.example.MR.mapper.DiagnosisMapper;
import com.example.MR.mapper.MRMapper;

@RestController
public class DiagnosisController {
	
	@Autowired
    private MRMapper mapper;
	private DiagnosisMapper dmapper;
	
	// 진단_검색페이지 엔드포인트
	@GetMapping("/diagnosis/search")
	@ResponseBody
	public List<PatientTb> diagnosis(@RequestParam("inputValue") String inputValue) {
	    return mapper.patientList(inputValue); // 여러 결과를 반환
	}

    
    // 진단_xray페이지
	// 기존 의견 조회
    @GetMapping("/xray/dtOpinion")
    public ResponseEntity<String> getOpinion(@RequestParam String xrayCode) {
        String existingOpinion = dmapper.checkOpinion(xrayCode);
        if (existingOpinion != null) {
            return ResponseEntity.ok(existingOpinion);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("의견이 없습니다.");
        }
    }

    // 의견 업데이트
    @PostMapping("/xray/dtOpinion")
    public ResponseEntity<String> UpdateOpinion(@RequestParam String xrayCode, @RequestParam String dtOpinion) {
    	String existingOpinion = dmapper.checkOpinion(xrayCode);

        if (existingOpinion != null) {
            // 기존 데이터가 있으면 업데이트
            dmapper.updateOpinion(xrayCode, dtOpinion);
            return ResponseEntity.ok("의견이 업데이트되었습니다.");
        } else {
            // 기존 데이터가 없으면 업데이트 불가 메시지 반환
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("업데이트할 의견이 존재하지 않습니다.");
        }
           
    }

}
