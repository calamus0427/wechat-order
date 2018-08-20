package com.lentech.weixin.miniapp.common.core.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 获取实名认证配置
 * @author Administrator
 *
 */
@Component
@ConfigurationProperties(prefix = "wechat.realnameinfo.properties")
public class RealnameinfoConfig {

	/**
	 * 商户号
	 */
	private String mch_id;
	/**
	 * 证书序列号
	 */
	private String cert_serialno;
	/**
	 * 私钥
	 */
	private String privateKey;
	public String getMch_id() {
		return mch_id;
	}
	public void setMch_id(String mch_id) {
		this.mch_id = mch_id;
	}
	public String getCert_serialno() {
		return cert_serialno;
	}
	public void setCert_serialno(String cert_serialno) {
		this.cert_serialno = cert_serialno;
	}
	public String getPrivateKey() {
		return privateKey;
	}
	public void setPrivateKey(String privateKey) {
		this.privateKey = privateKey;
	}
	@Override
	public String toString() {
		return "RealnameinfoConfig [mch_id=" + mch_id + ", cert_serialno=" + cert_serialno + ", privateKey="
				+ privateKey + "]";
	}
	
	
}
