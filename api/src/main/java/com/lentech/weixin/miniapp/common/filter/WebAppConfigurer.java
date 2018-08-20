package com.lentech.weixin.miniapp.common.filter;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 拦截器
 * 微信小程序登录拦截
 * @author   殷雷雷
 *
 */
@Configuration
public class WebAppConfigurer extends WebMvcConfigurerAdapter{
	
	@Override
    public void addInterceptors(InterceptorRegistry registry){
		
		//浏览器客户端拦截
        // 多个拦截器组成一个拦截器链
        // addPathPatterns 添加拦截规则
        // excludePathPatterns 排除拦截
        registry.addInterceptor(
        new ClientbrowserInterceptor())
        .addPathPatterns("/api/v1/**")
        //druid监控免拦截
        .excludePathPatterns("/druid/**");
        super.addInterceptors(registry);
		//用户登录拦截
        // 多个拦截器组成一个拦截器链
        // addPathPatterns 添加拦截规则
        // excludePathPatterns 排除拦截
		//api涉及用户相关需拦截
        registry.addInterceptor(
        		new UserTokennterceptor())
        .addPathPatterns("/api/v1/**")
        .excludePathPatterns("/api/v1/wechat/**") 
        .excludePathPatterns("/api/v1/common/**") 
        .excludePathPatterns("/druid/**");
        super.addInterceptors(registry);
    }
}
