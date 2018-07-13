package com.lentech.weixin.miniapp.common.core.handler;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lentech.weixin.miniapp.common.enums.ResultStatus;
import com.lentech.weixin.miniapp.common.exception.ClientbrowserException;
import com.lentech.weixin.miniapp.common.exception.CommonException;
import com.lentech.weixin.miniapp.common.exception.NotLogException;
import com.lentech.weixin.miniapp.common.resultGenerator.CommonResult;
import com.lentech.weixin.miniapp.common.resultGenerator.CresultGeneratorUtils;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	
	 @ExceptionHandler(value = ClientbrowserException.class)
	 @ResponseBody
	 public CommonResult defaultErrorHandle(ClientbrowserException e) {
		 return CresultGeneratorUtils.error(-1, e.getMessage());
	 }

	/**
	 * 未登录
	 * @param e
	 * @return
	 */
	 @ExceptionHandler(value = NotLogException.class)
	 @ResponseBody
	 public CommonResult defaultErrorHandler(NotLogException e){
		 return CresultGeneratorUtils.error(ResultStatus.no_login);
	    }
	  /**
     * 系统异常处理，比如：404,500
     * @param req
     * @param resp
     * @param e
     * @return
     * @throws Exception
     */
    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public CommonResult defaultErrorHandler(Exception e) throws Exception {
        if (e instanceof org.springframework.web.servlet.NoHandlerFoundException) {
        	return CresultGeneratorUtils.error(ResultStatus.http_status_not_found);
        } else {
        	return CresultGeneratorUtils.error(ResultStatus.http_status_internal_server_error);
        }
      
    }
	
	  /**
     * 公共异常
     * @param req
     * @param resp
     * @param e
     * @return
     * @throws Exception
     */
    @ExceptionHandler(value = CommonException.class)
    @ResponseBody
    public CommonResult defaultErrorHandler(CommonException e) throws Exception {
       return CresultGeneratorUtils.error(-1, e.getMessage());
      
    }

}
