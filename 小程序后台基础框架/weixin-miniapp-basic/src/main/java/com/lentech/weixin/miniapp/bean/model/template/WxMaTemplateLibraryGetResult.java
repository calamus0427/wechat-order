package com.lentech.weixin.miniapp.bean.model.template;

import com.google.gson.annotations.SerializedName;
import com.lentech.weixin.miniapp.bean.BaseBean;
import com.lentech.weixin.miniapp.common.utils.json.WxGsonBuilder;
import java.util.List;


public class WxMaTemplateLibraryGetResult  extends BaseBean{

  private static final long serialVersionUID = -190847592776636744L;
  private String id;
  private String title;
  @SerializedName("keyword_list")
  private List<KeywordInfo> keywordList;


  public static class KeywordInfo{

    @SerializedName("keyword_id")
    private int keywordId;
    private String name;
    private String example;
	public int getKeywordId() {
		return keywordId;
	}
	public void setKeywordId(int keywordId) {
		this.keywordId = keywordId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getExample() {
		return example;
	}
	public void setExample(String example) {
		this.example = example;
	}
    
    
  }

  
  
  
  public String getId() {
	return id;
}




public void setId(String id) {
	this.id = id;
}




public String getTitle() {
	return title;
}




public void setTitle(String title) {
	this.title = title;
}




public List<KeywordInfo> getKeywordList() {
	return keywordList;
}




public void setKeywordList(List<KeywordInfo> keywordList) {
	this.keywordList = keywordList;
}




public static WxMaTemplateLibraryGetResult fromJson(String json){
    return WxGsonBuilder.create().fromJson(json, WxMaTemplateLibraryGetResult.class);
  }
  
}
