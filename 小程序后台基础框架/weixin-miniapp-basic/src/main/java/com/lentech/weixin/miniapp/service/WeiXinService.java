package com.lentech.weixin.miniapp.service;


import com.lentech.weixin.miniapp.bean.model.WxPhoneNumberInfo;
import com.lentech.weixin.miniapp.bean.model.WxUser;

public interface WeiXinService {

	String getAccessToken();

	WxUser getSessionInfo(String code);

	WxPhoneNumberInfo getPhoneNoInfo(String sessionKey, String encryptedData, String iv);
	
}
