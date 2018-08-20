package com.lentech.weixin.miniapp.service;

import com.lentech.weixin.miniapp.bean.model.template.WxMaTemplateMessage;

/**
 * <pre>
 * 消息发送接口
 * </pre>
 *
 * @author <a href="https://github.com/binarywang">Binary Wang</a>
 */
public interface WxMsgService {
  String KEFU_MESSAGE_SEND_URL = "https://api.weixin.qq.com/cgi-bin/message/custom/send";
  String TEMPLATE_MSG_SEND_URL = "https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN";


  /**
   * <pre>
   * 发送模板消息
   * 详情请见: <a href="https://mp.weixin.qq.com/debug/wxadoc/dev/api/notice.html#接口说明">发送模板消息</a>
   * 接口url格式：https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN
   * </pre>
   */
  void sendTemplateMsg(WxMaTemplateMessage templateMessage) ;
}
