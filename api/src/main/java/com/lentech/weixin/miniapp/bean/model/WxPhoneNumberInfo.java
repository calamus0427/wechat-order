package com.lentech.weixin.miniapp.bean.model;

import java.io.Serializable;

/**
 * 微信手机号相关信息
 * @author Administrator
 *
 */
public class WxPhoneNumberInfo implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	private String phoneNumber;
	private String purePhoneNumber;
	private String countryCode;
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getPurePhoneNumber() {
		return purePhoneNumber;
	}
	public void setPurePhoneNumber(String purePhoneNumber) {
		this.purePhoneNumber = purePhoneNumber;
	}
	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	
	
}
