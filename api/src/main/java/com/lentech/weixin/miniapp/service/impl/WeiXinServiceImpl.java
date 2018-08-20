package com.lentech.weixin.miniapp.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.lentech.weixin.miniapp.bean.model.WxPhoneNumberInfo;
import com.lentech.weixin.miniapp.bean.model.WxUser;
import com.lentech.weixin.miniapp.common.utils.HttpRequest;
import com.lentech.weixin.miniapp.common.utils.weixin.WxMaCryptUtils;
import com.lentech.weixin.miniapp.service.WeiXinService;

import net.sf.json.JSONObject;

@Service
public class WeiXinServiceImpl extends BaseService implements WeiXinService{

	@Value("${wechat.miniapp.appid}")
	private String appid;
	@Value("${wechat.miniapp.secret}")
	private String secret;
	@Value("${wechat.miniapp.token.url}")
	private String tokenUrl;
	/*
	 * 获取用户信息
	 */
	public static final String JSCODE_TO_SESSION_URL = "https://api.weixin.qq.com/sns/jscode2session";
	@Override
	public String getAccessToken() {
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("appid", appid));
		params.add(new BasicNameValuePair("appsecret", secret));
		String result = HttpRequest.sendHttpPost(tokenUrl, params, "utf-8");
		logger.error("获取微信:" + result);
		JSONObject json = JSONObject.fromObject(result);
		if("0".equals(json.getString("Code"))) {
			return json.getString("AccessToken");
		}else {
			return null;
		}
	}

	@Override
	public WxUser getSessionInfo(String code) {	
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("appid", appid));
		params.add(new BasicNameValuePair("secret", secret));
		params.add(new BasicNameValuePair("js_code", code));
		String result = HttpRequest.sendHttpPost(JSCODE_TO_SESSION_URL, params, "utf-8");
		logger.error("获取微信登录信息:" + result);
		JSONObject json = JSONObject.fromObject(result);		
		WxUser  wxUser=WxUser.builder()
				.openid(json.getString("openid"))
				.sessionKey(json.getString("session_key"))
				.build();
		try {
		wxUser.setUnionid(json.getString("unionid"));
		} catch (Exception e) {
			wxUser.setUnionid("");
		}
		return wxUser;
	}

	@Override
	public WxPhoneNumberInfo getPhoneNoInfo(String sessionKey, String encryptedData, String iv) {
		WxPhoneNumberInfo wxPhoneNumberInfo=new WxPhoneNumberInfo();
		String retulstStr=WxMaCryptUtils.decrypt(sessionKey, encryptedData, iv);
		JSONObject json=JSONObject.fromObject(retulstStr);
		wxPhoneNumberInfo.setCountryCode(json.getString("countryCode"));
		wxPhoneNumberInfo.setPhoneNumber(json.getString("phoneNumber"));
		wxPhoneNumberInfo.setPurePhoneNumber(json.getString("purePhoneNumber"));
		return wxPhoneNumberInfo;
	}

}
