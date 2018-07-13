package com.lentech.weixin.miniapp.service.impl;


import java.util.ArrayList;
import java.util.List;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.lentech.weixin.miniapp.bean.model.template.WxMaTemplateMessage;
import com.lentech.weixin.miniapp.common.utils.HttpRequest;

import com.lentech.weixin.miniapp.service.WxMsgService;
import net.sf.json.JSONObject;




@Service
public class WxMaMsgServiceImpl extends BaseService implements WxMsgService {
  private static final JsonParser JSON_PARSER = new JsonParser();

    @Value("${wechat.miniapp.appid}")
	private String appid;
	@Value("${wechat.miniapp.secret}")
	private String secret;
	@Value("${wechat.miniapp.token.url}")
	private String tokenUrl;

  @Override
  public void sendTemplateMsg(WxMaTemplateMessage templateMessage)  {
	  

		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("appid", appid));
		params.add(new BasicNameValuePair("appsecret", secret));
		String result = HttpRequest.sendHttpPost(tokenUrl, params, "utf-8");
		logger.error("获取微信AccessToken:" + result);
		logger.error("moban:" + templateMessage.toJson());
		JSONObject json = JSONObject.fromObject(result);
		if("0".equals(json.getString("Code"))) {
			String AccessToken=json.getString("AccessToken");
			 String responseContent = HttpRequest.sendHttpPost2(TEMPLATE_MSG_SEND_URL.replace("ACCESS_TOKEN", AccessToken), null, null, templateMessage.toJson(), "utf-8");
			 JsonObject jsonObject = JSON_PARSER.parse(responseContent).getAsJsonObject();
			System.out.println(jsonObject);
		}else {
			
		}
	  
   
  }

}
