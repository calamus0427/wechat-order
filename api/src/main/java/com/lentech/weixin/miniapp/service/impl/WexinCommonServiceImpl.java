package com.lentech.weixin.miniapp.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.lentech.weixin.miniapp.bean.model.WxPhoneNumberInfo;
import com.lentech.weixin.miniapp.bean.model.WxUser;
import com.lentech.weixin.miniapp.common.exception.NotLogException;
import com.lentech.weixin.miniapp.common.resultGenerator.CommonResult;
import com.lentech.weixin.miniapp.common.resultGenerator.CresultGeneratorUtils;
import com.lentech.weixin.miniapp.common.utils.HttpRequest;
import com.lentech.weixin.miniapp.service.WexinCommonService;
import net.sf.json.JSONObject;

@Service
public class WexinCommonServiceImpl extends BaseService implements WexinCommonService{

	@Value("${wechat.miniapp.appid}")
	private String appid;
	@Value("${wechat.miniapp.secret}")
	private String secret;
	@Value("${wechat.miniapp.token.url}")
	private String tokenUrl;
	@Value("${wechat.miniapp.decryPhoneNumber.url}")
	private String decryPhoneNumberUrl;
	@Value("${wechat.miniapp.realnameinfoUrl.url}")
	private String realnameinfoUrl;
	/*
	 * 获取用户信息
	 */
	public static final String JSCODE_TO_SESSION_URL = "https://api.weixin.qq.com/sns/jscode2session";
	
	@Override
	public CommonResult getAccessToken() {
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("appid", appid));
		params.add(new BasicNameValuePair("appsecret", secret));
		String result = HttpRequest.sendHttpPost(tokenUrl, params, "utf-8");
		logger.error("获取微信AccessToken:" + result);
		JSONObject json = JSONObject.fromObject(result);
		if("0".equals(json.getString("Code"))) {
			return CresultGeneratorUtils.seccess(json.getString("AccessToken"));
		}else {
			return CresultGeneratorUtils.error(-1,"AccessToken失败");
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
	public CommonResult getPhoneNoInfo(String sessionKey, String encryptedData, String iv) {
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("sessionKey", sessionKey));
		params.add(new BasicNameValuePair("encryptedData", encryptedData));
		params.add(new BasicNameValuePair("ivStr", iv));
		String result = HttpRequest.sendHttpPost(decryPhoneNumberUrl, params, "utf-8");		
		JSONObject json=JSONObject.fromObject(result);
		logger.error("手机号码解密:" + result);		
		try {
			WxPhoneNumberInfo wxPhoneNumberInfo=new WxPhoneNumberInfo();
			wxPhoneNumberInfo.setCountryCode(json.getString("countryCode"));
			wxPhoneNumberInfo.setPhoneNumber(json.getString("phoneNumber"));
			wxPhoneNumberInfo.setPurePhoneNumber(json.getString("purePhoneNumber"));
			return CresultGeneratorUtils.seccess(wxPhoneNumberInfo);
		} catch (Exception e) {
			throw new NotLogException();
		}
	}

	@Override
	public CommonResult getCategory() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CommonResult getRealnameinfo(String auth_token) {
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("appid", appid));
		params.add(new BasicNameValuePair("authToken", auth_token));
		String result = HttpRequest.sendHttpPost(realnameinfoUrl, params, "utf-8");		
		logger.error("获取实名信息结果:" + result);
		JSONObject json=JSONObject.fromObject(result);		
		if("0".equals(json.getString("errcode"))) {
			JSONObject respJSON=new JSONObject();
			respJSON.put("realName", json.getString("patientName"));
			respJSON.put("idCard", json.getString("idCard"));
		    return CresultGeneratorUtils.seccess(respJSON);
		}else {
			return CresultGeneratorUtils.error(-1,"获取实名信息失败");
		}
	}
	
}
