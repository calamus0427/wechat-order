package com.lentech.weixin.miniapp.common.exception;

/**
 * 浏览器客户端异常
 * @author 殷雷雷
 *
 */
public class ClientbrowserException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ClientbrowserException(String msg) {
		super(msg);
	}
}