package com.lentech.weixin.miniapp.common.exception;


/**
 * 自定义异常
 * 支付通知同一笔订单重复回调
 *
 */
public class RepeatNotifyExecption extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	 public RepeatNotifyExecption(String string) {
	        super(string);
	    }

}