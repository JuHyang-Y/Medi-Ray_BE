package com.example.MR.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.MR.entity.DoctorTb;
import com.example.MR.mapper.MRMapper;

@Service
public class UserService {

    private final MRMapper mapper;
    private final PasswordEncoder passwordEncoder; // PasswordEncoder를 주입받습니다.

    @Autowired
    // 생성자 주입을 통해 MRMapper와 PasswordEncoder를 주입합니다
    public UserService(MRMapper mapper, PasswordEncoder passwordEncoder) {
        this.mapper = mapper;
        this.passwordEncoder = passwordEncoder;
    }

    // 사용자 등록 메서드
    public void registerUser(String dtCode, String dtId, String rawPassword, String dtName, String division, String dtTelno) {
        // 1. 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(rawPassword);
        System.out.println("암호화된 비밀번호:--------------------------------- " + encodedPassword); // 암호화된 비밀번호 로그 출력

        // 2. DoctorTb 객체 생성 및 데이터 설정 (생성자를 사용하여 초기화)
        DoctorTb doctor = new DoctorTb(dtCode, dtId, encodedPassword, dtName, division, dtTelno);

        // 3. 데이터베이스에 사용자 등록
        mapper.registDoctor(doctor);
    }

	public void registerUser(DoctorTb dt) {
		this.registerUser(dt.getDtCode(), dt.getDT_ID(), dt.getDT_PW(), dt.getDtName(), dt.getDivision(), dt.getDtTelno());
	}
}
