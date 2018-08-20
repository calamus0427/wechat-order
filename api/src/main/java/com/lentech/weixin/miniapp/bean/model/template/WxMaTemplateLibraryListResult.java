package com.lentech.weixin.miniapp.bean.model.template;
import com.google.gson.annotations.SerializedName;
import com.lentech.weixin.miniapp.bean.BaseBean;
import com.lentech.weixin.miniapp.common.utils.json.WxGsonBuilder;
import java.util.List;


public class WxMaTemplateLibraryListResult  extends BaseBean{
  private static final long serialVersionUID = -2780782521447602209L;

  @SerializedName("total_count")
  private int totalCount;
  private List<TemplateItem> list;

  public static WxMaTemplateLibraryListResult fromJson(String json){
    return WxGsonBuilder.create().fromJson(json, WxMaTemplateLibraryListResult.class);
  }

 
  public static class TemplateItem{

    private String id;
    private String title;
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
    
    
  }

public int getTotalCount() {
	return totalCount;
}

public void setTotalCount(int totalCount) {
	this.totalCount = totalCount;
}

public List<TemplateItem> getList() {
	return list;
}

public void setList(List<TemplateItem> list) {
	this.list = list;
}
  
}
