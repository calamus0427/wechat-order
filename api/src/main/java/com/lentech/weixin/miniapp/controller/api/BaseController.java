package com.lentech.weixin.miniapp.controller.api;




import org.apache.log4j.Logger;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.lentech.weixin.miniapp.bean.model.WxUser;
import com.lentech.weixin.miniapp.common.utils.StrUtil;
import java.io.UnsupportedEncodingException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * BaseController
 * @author yinleilei
 *
 */
public class BaseController {

    protected Logger logger = Logger.getLogger(this.getClass());
    
    public  static  final String LOGIN_KEY="WEIXIN_LOGIN_INFO";
    
    /**
     * 获取HttpServletRequest 
     * @return HttpServletResponse
     */
    protected HttpServletRequest getRequest() {
        return ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
    }
    /**
     * 获取HttpServletResponse 
     * @return HttpServletResponse
     */
    protected HttpServletResponse getResponse() {
    	return ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getResponse();
    }
    /**
     * 获取HttpSession 
     * @return HttpSession
     */
    protected HttpSession getSession() {
        return this.getRequest().getSession();
    }
    /**
     * 获取ContextPath 
     * @return String 
     */
    protected String getContextPath() {
    	return this.getRequest().getContextPath();
    }
    protected String getBasePath() {
    	String path = getContextPath();  
    	String basePath = this.getRequest().getScheme()+"://"+this.getRequest().getServerName()+":"+this.getRequest().getServerPort()+path;  
    	return basePath;
    } 
    /** 
     * 获取当前登录人
     */  
    protected WxUser getLoginUser() {
    	return (WxUser) this.getRequest().getAttribute(LOGIN_KEY);
    }
    

    /** 
     * 把浏览器参数转化放到Map集合中 
     * @param request 
     * @return 
     * @throws UnsupportedEncodingException 
     */  
    protected Map<String, String> getParam() {  
        Map<String, String> paramMap = new HashMap<String, String>();  
        String method = getRequest().getMethod();  
        Enumeration<?> keys = getRequest().getParameterNames();  
        while (keys.hasMoreElements()) {  
            Object key = keys.nextElement();  
            if(key!=null){  
                if (key instanceof String) {  
                    String value = getRequest().getParameter(key.toString());  
                    if("GET".equals(method)){//前台encodeURIComponent('我们');转码后到后台还是ISO-8859-1，所以还需要转码  
                         try {  
                            value =new String(value.getBytes("ISO-8859-1"),"UTF-8");  
                        } catch (UnsupportedEncodingException e) {  
                            e.printStackTrace();  
                        }      
                    }  
                    paramMap.put(key.toString(), value);  
                }  
            }   
        }  
        return paramMap;  
    }
    /** 
     * 获取ip地址
     * @param request 
     * @return ip
     * 
     */  
    protected String getUserIp() {
        String value = this.getRequest().getHeader("X-Real-IP");
        if (StrUtil.isBlank(value) && !"unknown".equalsIgnoreCase(value)) {
            return value;
        } else {
            return this.getRequest().getRemoteAddr();
        }
    }
  
}
