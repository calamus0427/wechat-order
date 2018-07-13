package com.lentech.weixin.miniapp.common.core.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * his 接口服务配置
 * @author 殷雷雷
 *
 */
@Component
@ConfigurationProperties(prefix = "his.properties")
public class HisConfig {

	private String url;
	private String czyh;
	private String accesskey;
	private String yydm;
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getCzyh() {
		return czyh;
	}
	public void setCzyh(String czyh) {
		this.czyh = czyh;
	}
	public String getAccesskey() {
		return accesskey;
	}
	public void setAccesskey(String accesskey) {
		this.accesskey = accesskey;
	}
	public String getYydm() {
		return yydm;
	}
	public void setYydm(String yydm) {
		this.yydm = yydm;
	}
	@Override
	public String toString() {
		return "HisConfig [url=" + url + ", czyh=" + czyh + ", accesskey=" + accesskey + ", yydm=" + yydm + "]";
	}
	
	
}
