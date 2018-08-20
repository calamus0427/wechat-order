package com.lentech.weixin.miniapp.common.resultGenerator;

import java.io.Serializable;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JacksonXmlRootElement(localName = "commonResult")
public class CommonResult implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
    // 响应业务状态

    @JacksonXmlProperty(localName = "status")
    private Integer status;

    // 响应消息
   
    @JacksonXmlProperty(localName = "message")
    private String message;

    // 响应中的数据
    
    @JacksonXmlProperty(localName = "data")
    private Object data;

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}
	public CommonResult(){
		super();
	}
	public CommonResult(String message,Object data){
		this.data=data;
		this.message=message;
	}

	@Override
	public String toString() {
		return "CommonResult [status=" + status + ", message=" + message + ", data=" + data + "]";
	}
 
     
}