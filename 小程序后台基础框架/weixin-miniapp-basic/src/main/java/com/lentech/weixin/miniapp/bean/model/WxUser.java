package com.lentech.weixin.miniapp.bean.model;


import com.lentech.weixin.miniapp.bean.BaseBean;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 微信用户相关信息
 * @author Administrator
 *
 */
@Data
@Builder(toBuilder = true)
@EqualsAndHashCode(callSuper=false)
public class WxUser extends BaseBean {
	 /**
	 * 
	 */
	private static final long serialVersionUID = 1L;	
	private String sessionKey;
	private String openid;
	private String unionid;
	
}
