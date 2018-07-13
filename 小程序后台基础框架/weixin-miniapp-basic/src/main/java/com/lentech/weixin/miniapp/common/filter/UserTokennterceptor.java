package com.lentech.weixin.miniapp.common.filter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.BeanFactory;

import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.lentech.weixin.miniapp.bean.model.WxUser;
import com.lentech.weixin.miniapp.common.core.config.Audience;
import com.lentech.weixin.miniapp.common.exception.NotLogException;
import com.lentech.weixin.miniapp.common.utils.JwtHelper;
import com.lentech.weixin.miniapp.common.utils.StrUtil;
import com.lentech.weixin.miniapp.controller.api.BaseController;






  
/**
 * 微信小程序 openid拦截器
 *
 * @author 殷雷雷
 */
public class UserTokennterceptor implements HandlerInterceptor {
  
	public static final String TOKEN_PREFIX = "Bearer_";       // Token前缀
	public static final String HEADER_STRING = "authorization";// 存放Token的Header Key
	
	
	@Resource
	 private Audience audience;

	 @Override
	    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
	            throws Exception {
	    	String userToken=request.getHeader(HEADER_STRING);
	    	if(StrUtil.isBlank(userToken)|| !userToken.startsWith(TOKEN_PREFIX)) {
	    		
	    		throw new NotLogException();
	    		
	    	}else {
	    		 final String token = userToken.substring(TOKEN_PREFIX.length());
	    		try {
	                if(audience == null){
	                    BeanFactory factory = WebApplicationContextUtils.getRequiredWebApplicationContext(request.getServletContext());
	                    audience = (Audience) factory.getBean("audience");
	                }
	                WxUser wxUser = JwtHelper.parseJWTWxMaJscode2SessionResult(token,audience.getBase64Secret());
	                if(wxUser == null){
	                	throw new NotLogException();
	                }
	                request.setAttribute(BaseController.LOGIN_KEY, wxUser);
	            } catch (final Exception e) {
	            	throw new NotLogException();
	            	
	            }
	    	}
	        return true; 
	            
	    	 
	    }
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
      
    }
  
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {

    }
  
}