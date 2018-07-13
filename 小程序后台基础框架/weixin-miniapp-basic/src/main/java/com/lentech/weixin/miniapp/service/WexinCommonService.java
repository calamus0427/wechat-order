package com.lentech.weixin.miniapp.service;

import com.lentech.weixin.miniapp.bean.model.WxUser;
import com.lentech.weixin.miniapp.common.resultGenerator.CommonResult;

public interface WexinCommonService {
	CommonResult getAccessToken();
	WxUser getSessionInfo(String code);
	CommonResult getPhoneNoInfo(String sessionKey, String encryptedData, String iv);
    CommonResult getCategory();
	CommonResult getRealnameinfo(String auth_token);
}
