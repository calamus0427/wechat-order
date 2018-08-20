package com.lentech.weixin.miniapp.common.aop;


import java.io.UnsupportedEncodingException;
import java.util.Arrays;
import java.util.Enumeration;


import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/**
 * 日志aop切面
 * @author yinleilei
 *
 */
@Aspect
@Service
@Component
public class LoggerAdvice {
	
	private Logger logger = Logger.getLogger(this.getClass());

	@Before("within(com.lentech.weixin.miniapp..*) && @annotation(loggerManage)")
	public void addBeforeLogger(JoinPoint joinPoint, LoggerManage loggerManage) {
		// 接收到请求，记录请求内容
		ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
		HttpServletRequest request = attributes.getRequest();
        StringBuffer String=new StringBuffer();
        String method = request.getMethod();  
        Enumeration<?> keys = request.getParameterNames();  
        while (keys.hasMoreElements()) {  
            Object key = keys.nextElement();  
            if(key!=null){  
                if (key instanceof String) {  
                    String value = request.getParameter(key.toString());  
                    if("GET".equals(method)){//前台encodeURIComponent('我们');转码后到后台还是ISO-8859-1，所以还需要转码  
                         try {  
                            value =new String(value.getBytes("ISO-8859-1"),"UTF-8");  
                        } catch (UnsupportedEncodingException e) {  
                            e.printStackTrace();  
                        }      
                    }  
                    String.append(key.toString()+"="+value+"&");
                }  
            }   
        }
		logger.info("执行 " + loggerManage.description() + " 开始");
		logger.info("请求地址 : " + request.getRequestURL().toString());
		logger.info("请求方式 : " + request.getMethod());
		logger.info("请求IP: " + request.getRemoteAddr());
		logger.info("请求方法 : " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName());
		logger.info("请求参数 : " + Arrays.toString(joinPoint.getArgs()));
		logger.info("请求参数 : " + String.toString());
	}
	
	@AfterReturning(pointcut="within(com.lentech.weixin.miniapp..*) && @annotation(loggerManage)",returning="object")
	public void addAfterReturningLogger(JoinPoint joinPoint, LoggerManage loggerManage,Object object) {
		if(null==object) {
			logger.info("response={} " + object);
		}else {
			logger.info("response={} " + object.toString());
		}
		
		logger.info("执行 " + loggerManage.description() + " 结束");
	}
	
	@AfterThrowing(pointcut = "within(com.lentech.weixin.miniapp..*) && @annotation(loggerManage)", throwing = "ex")
	public void addAfterThrowingLogger(JoinPoint joinPoint, LoggerManage loggerManage, Exception ex) {
		logger.error("执行 " + loggerManage.description()+ " 异常,异常原因："+ex.getMessage());
	}
}
