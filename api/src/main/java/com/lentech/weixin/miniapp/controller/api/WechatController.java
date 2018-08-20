package com.lentech.weixin.miniapp.controller.api;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lentech.weixin.miniapp.bean.model.WxUser;
import com.lentech.weixin.miniapp.common.aop.LoggerManage;
import com.lentech.weixin.miniapp.common.core.config.Audience;
import com.lentech.weixin.miniapp.common.core.config.Token;
import com.lentech.weixin.miniapp.common.enums.ResultStatus;
import com.lentech.weixin.miniapp.common.filter.UserTokennterceptor;
import com.lentech.weixin.miniapp.common.resultGenerator.CommonResult;
import com.lentech.weixin.miniapp.common.resultGenerator.CresultGeneratorUtils;
import com.lentech.weixin.miniapp.common.utils.JwtHelper;
import com.lentech.weixin.miniapp.common.utils.StrUtil;
import com.lentech.weixin.miniapp.service.WeiXinService;

/**
 * 小程序登录
 * 
 * @author 殷雷雷
 *
 */
@RestController
@RequestMapping(value="/api/v1/wechat")
public class WechatController {
	@Resource
	 private WeiXinService weiXinService;
	 @Resource
	 private Audience audience;
	 @Resource	
	   /**
	 * 登陆接口
	 */
	@GetMapping("/login")
	@LoggerManage(description="微信登录")
	public CommonResult login(String code) {
		if(StrUtil.isBlank(code)) {
			return CresultGeneratorUtils.error(ResultStatus.Code_isBlank);
		}else {

           WxUser session = weiXinService.getSessionInfo(code);	         
           String jwtToken = JwtHelper.createJWT(session.getOpenid(),                		
           		session.getUnionid(),
           		session.getSessionKey(),
                   audience.getClientId(),
                   audience.getName(),
                   audience.getExpiresSecond()*1000,
                   audience.getBase64Secret());
           String result_str = UserTokennterceptor.TOKEN_PREFIX + jwtToken;	
           Token token =new Token(); 
           token.setAccessToken(result_str);         
           return CresultGeneratorUtils.seccess(token);
          
       
		}
	}
   /**
    * 获取微信AccessToken
    */
   @GetMapping("/getAccessToken")
 	@LoggerManage(description="获取AccessToken")
   public CommonResult getAccessToken() {
   	String accessToken=weiXinService.getAccessToken();
		return CresultGeneratorUtils.seccess(accessToken); 
   }

}
