package com.lentech.weixin.miniapp.common.utils.json;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.lentech.weixin.miniapp.bean.model.template.WxMaTemplateMessage;



public class WxGsonBuilder {
  private static final GsonBuilder INSTANCE = new GsonBuilder();

  static {
    INSTANCE.disableHtmlEscaping();
    INSTANCE.registerTypeAdapter(WxMaTemplateMessage.class, new WxTemplateMessageGsonAdapter());
  }

  public static Gson create() {
    return INSTANCE.create();
  }

}
