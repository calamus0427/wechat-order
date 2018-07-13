package com.lentech.weixin.miniapp.common.core.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 支付配置信息
 * @author Administrator
 *
 */
@Component
@ConfigurationProperties(prefix = "ina.service")
public class PayConfig {

	 /**
     * 服务地址
     */
	private String url;
	 /**
     * 商户号
     */
	private String merchantId;
	 /**
     * 私钥
     */
	private String privateKey;
	/**
     * 支付回调验签key
     */
	private String api_key;
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getMerchantId() {
		return merchantId;
	}
	public void setMerchantId(String merchantId) {
		this.merchantId = merchantId;
	}
	public String getPrivateKey() {
		return privateKey;
	}
	public void setPrivateKey(String privateKey) {
		this.privateKey = privateKey;
	}
	public String getApi_key() {
		return api_key;
	}
	public void setApi_key(String api_key) {
		this.api_key = api_key;
	}
	@Override
	public String toString() {
		return "PayConfig [url=" + url + ", merchantId=" + merchantId + ", privateKey=" + privateKey + ", api_key="
				+ api_key + "]";
	}
	
	
	
}
