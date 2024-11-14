package com.example.MR.controller;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MR.entity.DoctorTb;
import com.example.MR.mapper.MRMapper;


@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
    private MRMapper mapper;
	
	// 로그인 후 사용자 이름 가져오기
    @GetMapping("/get-name")
    public ResponseEntity<String> getName(Authentication authentication) {
        String dtId = authentication.getName();  // Spring Security에서 인증된 사용자 ID 가져오기

        // dtId로 데이터베이스에서 정보 조회
        ArrayList<DoctorTb> doctors = mapper.dtSelect(dtId);
        
        if (!doctors.isEmpty()) {
            DoctorTb doctor = doctors.get(0);  // 첫 번째 결과에서 dtName 추출
            return ResponseEntity.ok(doctor.getDtName());  // dtName만 반환
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 사용자를 찾을 수 없습니다.");
        }
    }
    
    // 마이페이지(정보 불러오기)
    @GetMapping("/mypage")
    public ResponseEntity<DoctorTb> getUserDetails(Authentication authentication) {
    	String dtId = authentication.getName();  // 인증된 사용자 ID 가져오기
    	ArrayList<DoctorTb> doctorDetails = mapper.dtSelect(dtId);
        if (!doctorDetails.isEmpty()) {
            return ResponseEntity.ok(doctorDetails.get(0));  // 첫 번째 의사 정보 반환
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    
    // 마이페이지(비밀번호 변경)
    @PutMapping("/changepw")
    public ResponseEntity<Integer> changePassword(@RequestBody Map<String, String> requestData, Authentication authentication) {
        String dtPw = requestData.get("DT_PW");  // JSON에서 비밀번호 가져오기
        String dtId = authentication.getName();  // 인증된 사용자 ID 가져오기

        try {
            mapper.updateDoctorPw(dtId, dtPw);
            return ResponseEntity.ok(1);  // 성공 시 1 반환
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(0);  // 실패 시 0 반환
        }
    }
    
    
    // 마이페이지(의사소속 변경)
    @PutMapping("/changedv")
    public ResponseEntity<Integer> changeDivision(@RequestBody Map<String, String> requestData, Authentication authentication) {
        String division = requestData.get("division");  // JSON에서 비밀번호 가져오기
        String dtId = authentication.getName();  // 인증된 사용자 ID 가져오기

        try {
            mapper.updateDivision(dtId, division);
            return ResponseEntity.ok(1);  // 성공 시 1 반환
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(0);  // 실패 시 0 반환
        }
    }
}