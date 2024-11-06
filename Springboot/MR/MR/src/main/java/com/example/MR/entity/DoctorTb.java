package com.example.MR.entity;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DoctorTb {
    private String dtCode;
    private String dtId;
    private String dtPw;
    private String dtName;
    private String division;
    private String dtTelno;
}