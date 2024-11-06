package com.example.MR.controller;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MR.entity.DoctorTb;
import com.example.MR.mapper.MRMapper;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
    private MRMapper mapper;
	
	// 로그인 후 사용자 이름 가져오기
    @GetMapping("/get-name")
    public ResponseEntity<String> getName(HttpSession session) {
    	// 세션에서 dtCode 가져오기
        String dtId = (String) session.getAttribute("dtId");

        if (dtId != null) {
            // dtId로 데이터베이스에서 정보 조회
            ArrayList<DoctorTb> doctors = mapper.dtSelect(dtId);
            
            if (!doctors.isEmpty()) {
                DoctorTb doctor = doctors.get(0);  // 첫 번째 결과에서 dtName 추출
                return ResponseEntity.ok(doctor.getDtName());  // dtName만 반환
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 사용자를 찾을 수 없습니다.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인되지 않았습니다.");
        }
    }
    
    // 마이페이지(정보 불러오기)
    @GetMapping("/mypage")
    public ResponseEntity<DoctorTb> getUserDetails(HttpSession session) {
        String dtId = (String) session.getAttribute("dtId");
        if (dtId != null) {
            ArrayList<DoctorTb> doctorDetails = mapper.dtSelect(dtId);
            if (!doctorDetails.isEmpty()) {
                return ResponseEntity.ok(doctorDetails.get(0));  // 첫 번째 의사 정보 반환
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
    
    // 마이페이지(비밀번호 변경)
    @PutMapping("/changepw")
    public ResponseEntity<Integer> changePassword(@RequestBody Map<String, String> requestData, HttpSession session) {
        String dtPw = requestData.get("dtPw");  // JSON에서 비밀번호 가져오기
        String dtId = (String) session.getAttribute("dtId");

        if (dtId != null) {
            try {
                mapper.updateDoctorPw(dtId, dtPw);
                return ResponseEntity.ok(1);  // 성공 시 1 반환
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(0);  // 실패 시 0 반환
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(0);  // 로그인되지 않았을 경우
        }
    }
    // 마이페이지(의사소속 변경)
    @PutMapping("/changedv")
    public ResponseEntity<Integer> changeDivision(@RequestBody Map<String, String> requestData, HttpSession session) {
        String division = requestData.get("division");  // JSON에서 비밀번호 가져오기
        String dtId = (String) session.getAttribute("dtId");

        if (dtId != null) {
            try {
                mapper.updateDivision(dtId, division);
                return ResponseEntity.ok(1);  // 성공 시 1 반환
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(0);  // 실패 시 0 반환
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(0);  // 로그인되지 않았을 경우
        }
    }
}
