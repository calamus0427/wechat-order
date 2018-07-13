package com.lentech.weixin.miniapp.service.impl;

import javax.annotation.Resource;


import org.springframework.stereotype.Service;

import com.lentech.weixin.miniapp.common.core.config.RealnameinfoConfig;
import com.lentech.weixin.miniapp.common.enums.ResultStatus;
import com.lentech.weixin.miniapp.common.resultGenerator.CommonResult;
import com.lentech.weixin.miniapp.common.resultGenerator.CresultGeneratorUtils;
import com.lentech.weixin.miniapp.common.utils.StrUtil;
import com.lentech.weixin.miniapp.common.utils.weixin.RealnameinfoUtils;
import com.lentech.weixin.miniapp.common.utils.weixin.WeixinUtil;
import com.lentech.weixin.miniapp.service.AuthenticationService;


import net.sf.json.JSONObject;

@Service
public class AuthenticationServiceImpl extends BaseService implements AuthenticationService{
	
	
	/**
	 * 获取实名信息商户配置
	 */
	@Resource
	private RealnameinfoConfig realnameinfoConfig;

	/**
	 * 获取授权小程序帐号的可选类目
	 */
	final String GET_CATEGORY_URL="https://api.weixin.qq.com/wxa/get_category?access_token=TOKEN";
	/**
	 * 根据小程序返回的 auth_token 获取用户加密过后的实名消息
	 */
	final String GET_REALNAMEINFO_URL="https://api.weixin.qq.com/cgi-bin/wxopen/getrealnameinfo?access_token=TOKEN";
	
	@Override
	public CommonResult getCategory(String accessToken) {
		// TODO Auto-generated method stub
		String requestUrl=GET_CATEGORY_URL.replace("TOKEN", accessToken);
		JSONObject jSONObject=WeixinUtil.httpRequest(requestUrl, "GET", null);
		if(0==jSONObject.getInt("errcode"))
		{
			return CresultGeneratorUtils.seccess(jSONObject.get("category_list"));
		}else {
			logger.info(jSONObject.toString());
			return CresultGeneratorUtils.error(ResultStatus.http_status_internal_server_error);
		}
	}

	@Override
	public CommonResult getRealnameinfo(String accessToken, String auth_token) {
	
		try {
			//时间戳
			long  timestamp=RealnameinfoUtils.getTimestamp();
			String requestUrl=GET_REALNAMEINFO_URL.replace("TOKEN", accessToken);
			//签名原文
			String contentStr="cert_serialno="+realnameinfoConfig.getCert_serialno()+"&timestamp="+timestamp;
			//签名
			String signatureStr=RealnameinfoUtils.sign(contentStr, realnameinfoConfig.getPrivateKey());
			JSONObject paramJson=new JSONObject();
			paramJson.put("auth_token", auth_token);
			paramJson.put("mch_id", realnameinfoConfig.getMch_id());
			paramJson.put("cert_serialno", realnameinfoConfig.getCert_serialno());
			paramJson.put("timestamp", timestamp);
			paramJson.put("sign", signatureStr);
			JSONObject resultJson=WeixinUtil.httpRequest(requestUrl, "POST", paramJson.toString());
			if(0==resultJson.getInt("errcode")) {
				String userName = RealnameinfoUtils.decrypt(resultJson.getString("encryted_real_name"), realnameinfoConfig.getPrivateKey(), RealnameinfoUtils.ENCODING_GBK);
				String idCard=RealnameinfoUtils.decrypt(resultJson.getString("encryted_credential_id"), realnameinfoConfig.getPrivateKey(), RealnameinfoUtils.ENCODING_UTF_8);
				JSONObject respJSON=new JSONObject();
				respJSON.put("realName", StrUtil.getUTF8StringFromGBKString(userName));
				respJSON.put("idCard", idCard);
				return CresultGeneratorUtils.seccess(respJSON);
			}else {
				logger.error("获取实名信息异常："+resultJson.toString());
				return CresultGeneratorUtils.error(ResultStatus.getResultStatus(resultJson.getInt("errcode")));
			}
			
		} catch (Exception e) {
		
			return CresultGeneratorUtils.error(ResultStatus.http_status_internal_server_error);
		}
		
	}

}
