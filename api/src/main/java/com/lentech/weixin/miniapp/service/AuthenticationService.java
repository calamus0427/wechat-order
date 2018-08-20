package com.lentech.weixin.miniapp.service;

import com.lentech.weixin.miniapp.common.resultGenerator.CommonResult;

public interface AuthenticationService {
	public CommonResult getCategory(String accessToken);
	public CommonResult getRealnameinfo(String accessToken, String auth_token);

}
