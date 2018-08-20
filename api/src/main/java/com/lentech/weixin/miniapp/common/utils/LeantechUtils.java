package com.lentech.weixin.miniapp.common.utils;

import java.math.BigDecimal;



public class LeantechUtils {
	public static BigDecimal ConvertResponseDecimal(BigDecimal d) {
		return d.multiply(new BigDecimal(100)).setScale(0);
	}

	public static void main(String[] args) {
		 System.out.println(new BigDecimal("12345.00").toString());		
	}
}
