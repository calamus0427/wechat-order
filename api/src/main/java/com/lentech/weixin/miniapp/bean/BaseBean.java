package com.lentech.weixin.miniapp.bean;

import com.lentech.weixin.miniapp.common.utils.JsonUtil;



public abstract class BaseBean implements BaseModel{
	 /**
	 * bean 基类
	 * BaseBean
	 */
	private static final long serialVersionUID = 1L;

	    @Override
	    public String toJsonString() {
	        return JsonUtil.toJson(this);
	    }
}
