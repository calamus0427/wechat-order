package com.lentech.weixin.miniapp.common.core.config;

import java.io.Serializable;

/**
 * 
 * @author Administrator
 *
 */
public class Token implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// 接口访问凭证
    private String accessToken;
    // 凭证有效期，单位：秒
    private int expiresIn;    
    // 是否已经实名认证
    private boolean registered=false;
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	public int getExpiresIn() {
		return expiresIn;
	}
	public void setExpiresIn(int expiresIn) {
		this.expiresIn = expiresIn;
	}
	public boolean getRegistered() {
		return registered;
	}
	public void setRegistered(boolean registered) {
		this.registered = registered;
	}
    
    





    
}
