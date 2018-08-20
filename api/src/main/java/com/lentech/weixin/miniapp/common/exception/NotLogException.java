package com.lentech.weixin.miniapp.common.exception;

/**
 * 自定义异常 
 * 用户未登录(oppenid为空)
 * @author Administrator
 *
 */
public class NotLogException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	 public NotLogException() {
	        super("");
	    }

}
