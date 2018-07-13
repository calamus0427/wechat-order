package com.lentech.weixin.miniapp.service;

public interface TemplateMsgService {

	void sendTemplateMsgByOrder(String openid,String outTradeNo, String page, String templateType);

}
