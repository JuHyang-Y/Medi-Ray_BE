package com.example.MR.entity;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ResultTb {
	private String xrayCode;
	private String ptCode;
	private double atelectasisProb;
	private double cardiomegalyProb;
	private double consolidationProb;
	private double edemaProb;
	private double enargedCardioProb;
	private double fractureProb;
	private double lungLesionProb;
	private double lungOpacityProb;
	private double noFindingProb;
	private double pleuralEffusionProb;
	private double pneumoniaProb;
	private double pneumothoraxProb;
	private double pleuralOtherProb;
	private double otherProb;
}
