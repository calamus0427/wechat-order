package com.lentech.weixin.miniapp.controller.api.core;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lentech.weixin.miniapp.common.resultGenerator.CommonResult;
import com.lentech.weixin.miniapp.common.resultGenerator.CresultGeneratorUtils;
import com.lentech.weixin.miniapp.common.utils.HttpRequest;
import com.lentech.weixin.miniapp.common.utils.XmlUtils;
import com.lentech.weixin.miniapp.controller.api.BaseController;
import com.yin.sign.utils.SignException;
import com.yin.sign.utils.Signature;

@RestController
@RequestMapping(value="/api/v1/core/pay")
public class TestOrderPayController extends BaseController{

	@RequestMapping(value="/createOrder")
	public CommonResult pay() {

		
		String private_key="MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBALhuiBaCStBo1kWtQCrWtdabxRTejDnpH++Jdw5yU6PT6OfmZfBp9kPR5m/B0Idwk7tJByLS13k2n7oJNWE7v/odEu5YLeA2BeMGqHKn9iD71mvCPeP3T5SOmCFjbCcFqM8CZgg/CQqiZIvCXw6Yrds+aM2TY/gSb+gIm1wo7qhFAgMBAAECgYA2qYvsH/HMk0XuoMrD5589XC2tYcht4Yp1lGiU/42KoOQG12KfPsiekTebJ/aGLfebKqnSyGrUojv1B4Wqq+rZ1STTfQu8m3EMwqVcbykBMlP0iUQDnCjfl9CEh+6upkj+9ZcH3cq/GMSxfe3CNZlqLtkEblt/tjpKy9/PuPnqgQJBAO6zFVdcdjVak/teH7IaPBAnEwuLupQ0OzjH9YTG+Xj/sdirEukx3cvQoeQf7OkRdtkW15tb9FlxDEi5V4pUmVcCQQDFzItgkIx9v3HKGkHR8Fgeb/5/H6Vg1WUikc0TiDOZbFA2g7473mLGgGDEG7P82SBiv1xbJIIDTUoqceQ9eR3DAkEAlmezR9PUDDRh0F7zm9baB9eHMZw+2Ym700Bz3NE/etWq63qINPYd6oIwsDzJm+ZMO+gfvR4I7p7D/cMDfP9niwJBAKHVwm/GtPwpyDs4koPnpuF4dnyictgwoOfQ7T6+4KD16wc/cUVgpeaNoR6zH+eP6xyAP1tfGnUDJtxlhP36+6sCQQCfj8V32l9WSZJXiy75Qp6Yl/3Me20CAPDOhPkjMDBLgq7MMM4mJSjOE5QsJlRM8vqijLbgz51zVO1dgOTR8ORB";
		//String url="https://www.leanpay.com.cn/oauth-pay/commonsPay/checksign/610234010005";
		String url="http://leanpay.net/oauth-pay/commonsPay/checksign/610261010002";
		StringBuffer param = new StringBuffer();
		  param.append("<request>");
		  param.append("<msg_head>");
		  param.append("<create_ip>"+this.getUserIp()+"</create_ip>");
		  param.append("<notice_port>80</notice_port>");
		  param.append("<merchant_id>610261010002</merchant_id>");
		  param.append("<scenes_pay></scenes_pay>");
		  param.append("<service_name>create_order</service_name>");
		  param.append("</msg_head>");
		  param.append("<msg_body>");
		  param.append("<openid>ocYfvvwfVgPvzd8P60HuXgw-Es-Q</openid>");//oppenid 统一 ocYfvvwfVgPvzd8P60HuXgw-Es-Q请勿修改 负责下单失败
		  param.append("<total_fee>1</total_fee>");//订单金额 单位分 1元传100
		  param.append("<body>订单标题</body>");//订单标题
		  param.append("<trade_type>inapay_weixin_jsapi</trade_type>");
		  param.append("<notify_url></notify_url>");//支付通知地址 不用改(模拟支付不需要支付通知)
		  param.append("</msg_body>");
		  param.append("</request>");
		  //签名字符串
		try {			
			//签名
			String signStr=Signature.rsaSign(param.toString(), private_key, "UTF-8");	
			System.out.println(signStr);
	    	List<NameValuePair> params = new ArrayList<NameValuePair>();
		      params.add(new BasicNameValuePair("signStr",signStr));
		      params.add(new BasicNameValuePair("xmlParamStr",param.toString()));
		      String result=HttpRequest.sendHttpPost(url, params, "utf-8");	
		     	
		      System.out.println("下单结果"+result);
		      Map<String, Object> map = XmlUtils.xmlString2Map(result);		     				
				// 入库挂号记录
				return CresultGeneratorUtils.seccess(map);
		      
		} catch (SignException e) {
			return CresultGeneratorUtils.error(-1,"下单失败");
		}
	
	}
	public static void main(String[] args) {
		String private_key="MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBALhuiBaCStBo1kWtQCrWtdabxRTejDnpH++Jdw5yU6PT6OfmZfBp9kPR5m/B0Idwk7tJByLS13k2n7oJNWE7v/odEu5YLeA2BeMGqHKn9iD71mvCPeP3T5SOmCFjbCcFqM8CZgg/CQqiZIvCXw6Yrds+aM2TY/gSb+gIm1wo7qhFAgMBAAECgYA2qYvsH/HMk0XuoMrD5589XC2tYcht4Yp1lGiU/42KoOQG12KfPsiekTebJ/aGLfebKqnSyGrUojv1B4Wqq+rZ1STTfQu8m3EMwqVcbykBMlP0iUQDnCjfl9CEh+6upkj+9ZcH3cq/GMSxfe3CNZlqLtkEblt/tjpKy9/PuPnqgQJBAO6zFVdcdjVak/teH7IaPBAnEwuLupQ0OzjH9YTG+Xj/sdirEukx3cvQoeQf7OkRdtkW15tb9FlxDEi5V4pUmVcCQQDFzItgkIx9v3HKGkHR8Fgeb/5/H6Vg1WUikc0TiDOZbFA2g7473mLGgGDEG7P82SBiv1xbJIIDTUoqceQ9eR3DAkEAlmezR9PUDDRh0F7zm9baB9eHMZw+2Ym700Bz3NE/etWq63qINPYd6oIwsDzJm+ZMO+gfvR4I7p7D/cMDfP9niwJBAKHVwm/GtPwpyDs4koPnpuF4dnyictgwoOfQ7T6+4KD16wc/cUVgpeaNoR6zH+eP6xyAP1tfGnUDJtxlhP36+6sCQQCfj8V32l9WSZJXiy75Qp6Yl/3Me20CAPDOhPkjMDBLgq7MMM4mJSjOE5QsJlRM8vqijLbgz51zVO1dgOTR8ORB";
		String url="http://leanpay.net/oauth-pay/commonsPay/checksign/610261010002";
		StringBuffer param = new StringBuffer();
		  param.append("<request>");
		  param.append("<msg_head>");
		  param.append("<create_ip>127.0.0.1</create_ip>");
		  param.append("<notice_port>80</notice_port>");
		  param.append("<merchant_id>610261010002</merchant_id>");
		  param.append("<scenes_pay></scenes_pay>");
		  param.append("<service_name>create_order</service_name>");
		  param.append("</msg_head>");
		  param.append("<msg_body>");		  
		  param.append("<openid>ocYfvvwfVgPvzd8P60HuXgw-Es-Q</openid>");
		  param.append("<total_fee>1</total_fee>");//订单金额 单位分  1元传100
		  param.append("<body>订单标题</body>");
		  param.append("<trade_type>inapay_weixin_jsapi</trade_type>");
		  param.append("<notify_url>https://blog.csdn.net/djd1234567/article/details/51332267</notify_url>");//支付回调地址
		  param.append("</msg_body>");
		  param.append("</request>");
		  //签名字符串
		try {			
			//签名
			String signStr=Signature.rsaSign(param.toString(), private_key, "UTF-8");	
			System.out.println(signStr);
	    	List<NameValuePair> params = new ArrayList<NameValuePair>();
		      params.add(new BasicNameValuePair("signStr",signStr));
		      params.add(new BasicNameValuePair("xmlParamStr",param.toString()));
		      String result=HttpRequest.sendHttpPost(url, params, "utf-8");	
		     	
		      System.out.println("下单结果"+result);
		      Map<String, Object> map = XmlUtils.xmlString2Map(result);		     				
				// 入库挂号记录
			
		      
		} catch (SignException e) {
			
		}
	}
}
