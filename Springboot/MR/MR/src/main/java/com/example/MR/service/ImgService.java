package com.example.MR.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.MR.mapper.DiagnosisMapper;

@Service
@Transactional
public class ImgService {
	@Autowired
	private DiagnosisMapper dmapper;
	
	public int deleteRelatedData(String xrayCode) {
		if(dmapper.DeleteImg(xrayCode) == 1 && dmapper.DeleteResult(xrayCode)==1) {
			return 1;
		}else {
			return 0;
		}
        
        
    }
}
