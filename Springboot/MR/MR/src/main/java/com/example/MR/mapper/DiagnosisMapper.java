package com.example.MR.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.example.MR.entity.ImgTb;
import com.example.MR.entity.ResultTb;

@Mapper
public interface DiagnosisMapper {
	// 업로드 페이지(이미지 업로드)
	@Insert("INSERT INTO IMG_TB(XRAY_CODE, PT_CODE, XRAY_DATE, XRAY_IMG_PATH, DT_CODE) "
			+ "VALUES (#{xrayCode}, #{ptCode}, Current_timestamp, #{xrayImgPath}, #{dtCode})")
	public void imgUpload(ImgTb it);
	
	// 검색해서 들어가면 다이콤 영상까지 포함해서 들어가게
	// 촬영기록 같은 경우에는 프론트 쪽에서 반복문을 돌려서 뽑아내야한다.
	@Select("SELECT * FROM IMG_TB "
			+ "WHERE PT_CODE = #{ptCode}")
	public ArrayList<ImgTb> imgList(String ptCode);
	
	// 다이콤에 대한 결과 반환
	@Select("SELECT * FROM RESULT_TB r "
			+ "JOIN IMG_TB i ON r.PT_CODE = i.PT_CODE " 
			+ "WHERE i.XRAY_CODE = #{xray_code}")
	public ArrayList<ResultTb> resultList(String xray_code);
	
	
	// 의사진단입력란(값이 존재하는지 확인)
	@Select("SELECT DT_OPINION FROM IMG_TB WHERE XRAY_CODE = #{xrayCode}")
	public String checkOpinion(String xrayCode);
	
	// 값이 존재한다면
	@Update("UPDATE IMG_TB SET DT_OPINION = #{dtOpinion} WHERE XRAY_CODE = #{xrayCode}")
	public void updateOpinion(@Param("xrayCode") String xrayCode, @Param("dtOpinion") String dtOpinion);
}
