package com.lentech.weixin.miniapp.bean.model.template;

import com.google.gson.annotations.SerializedName;
import com.lentech.weixin.miniapp.bean.BaseBean;
import com.lentech.weixin.miniapp.common.utils.json.WxGsonBuilder;
import java.util.List;


public class WxMaTemplateListResult  extends BaseBean{

  private static final long serialVersionUID = -7430535579782184537L;
  private List<TemplateInfo> list;

  public static WxMaTemplateListResult fromJson(String json){
    return WxGsonBuilder.create().fromJson(json, WxMaTemplateListResult.class);
  }


  public static class TemplateInfo{

    @SerializedName("template_id")
    private String templateId;
    private String title;
    private String content;
    private String example;
	public String getTemplateId() {
		return templateId;
	}
	public void setTemplateId(String templateId) {
		this.templateId = templateId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getExample() {
		return example;
	}
	public void setExample(String example) {
		this.example = example;
	}
    
    
  }

public List<TemplateInfo> getList() {
	return list;
}

public void setList(List<TemplateInfo> list) {
	this.list = list;
}
  
}
