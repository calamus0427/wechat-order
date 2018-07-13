package com.lentech.weixin.miniapp.bean.model.template;

import com.google.gson.annotations.SerializedName;
import com.lentech.weixin.miniapp.bean.BaseBean;
import com.lentech.weixin.miniapp.common.utils.json.WxGsonBuilder;


public class WxMaTemplateAddResult extends BaseBean{

  private static final long serialVersionUID = 872250961973834465L;

  @SerializedName("template_id")
  private String templateId;

  public static WxMaTemplateAddResult fromJson(String json){
    return WxGsonBuilder.create().fromJson(json, WxMaTemplateAddResult.class);
  }
}
