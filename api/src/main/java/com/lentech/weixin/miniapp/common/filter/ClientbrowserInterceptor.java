package com.lentech.weixin.miniapp.common.filter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.lentech.weixin.miniapp.common.exception.ClientbrowserException;
/**
 * 
 * 客户端浏览器拦截(拦截不是微信浏览器的用户)
 * @author 殷雷雷
 *
 */
public class ClientbrowserInterceptor implements HandlerInterceptor{

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		String userAgent=request.getHeader("user-agent").toLowerCase();
		if(!(userAgent.indexOf("micromessenger") > 0)) {
			throw new ClientbrowserException("请在微信端打开");
   	}
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

}
