package com.lentech.weixin.miniapp.common.utils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpRequestRetryHandler;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.client.StandardHttpRequestRetryHandler;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import net.sf.json.JSONObject;

public class HttpRequest {
	private static final int TIMEOUT = 60 * 1000;
	private static CloseableHttpClient httpClient;
	static {
		RequestConfig requestConfig = RequestConfig.custom().setSocketTimeout(TIMEOUT).setConnectTimeout(TIMEOUT)
				.setConnectionRequestTimeout(TIMEOUT).build();
		BasicCookieStore cookieStore = new BasicCookieStore();
		HttpRequestRetryHandler retryHandler = new StandardHttpRequestRetryHandler();

		httpClient = HttpClients.custom().setDefaultRequestConfig(requestConfig).setDefaultCookieStore(cookieStore)
				.setRetryHandler(retryHandler).build();
	}

	public static String sendHttpPost(String url, String paramName, String param, String charSet) {
		String response = "";
		HttpPost httpPost = new HttpPost(url);
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair(paramName, param));
		UrlEncodedFormEntity entity = null;
		try {
			entity = new UrlEncodedFormEntity(params, charSet);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		httpPost.setEntity(entity);
		try {
			HttpResponse httpResponse = httpClient.execute(httpPost);
			if (httpResponse.getStatusLine().getStatusCode() == 200) {
				System.out.println("请求和响应成功");
				HttpEntity httpEntity = httpResponse.getEntity();
				response = EntityUtils.toString(httpEntity);
				System.out.println(response);
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return response;

	}

	public static String sendHttpPost(String url, List<NameValuePair> params, String charSet) {
		String response = "";
		HttpPost httpPost = new HttpPost(url);
		UrlEncodedFormEntity entity = null;
		if (null != params) {
			try {
				entity = new UrlEncodedFormEntity(params, charSet);
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		httpPost.setEntity(entity);
		try {
			HttpResponse httpResponse = httpClient.execute(httpPost);
			if (httpResponse.getStatusLine().getStatusCode() == 200) {
				HttpEntity httpEntity = httpResponse.getEntity();
				response = EntityUtils.toString(httpEntity);
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return response;

	}

	public static String sendHttpPost(String url, List<NameValuePair> params, Map<String, String> header, String body,
			String charSet) {
		String response = "";
		HttpPost httpPost = new HttpPost(url);
		if (null != header) {
			for (String key : header.keySet()) {
				httpPost.addHeader(key, header.get(key));
			}
		}
		if (null != params) {
			UrlEncodedFormEntity entity = null;
			try {
				entity = new UrlEncodedFormEntity(params, charSet);
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
			httpPost.setEntity(entity);
		}
		if (null != body) {
			StringEntity stringEntity = new StringEntity(body, charSet);// 解决中文乱码问题
			stringEntity.setContentEncoding(charSet);
			stringEntity.setContentType("application/json");
			httpPost.setEntity(stringEntity);
		}
		try {
			HttpResponse httpResponse = httpClient.execute(httpPost);
			if (httpResponse.getStatusLine().getStatusCode() == 200) {
				HttpEntity httpEntity = httpResponse.getEntity();
				response = EntityUtils.toString(httpEntity);
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return response;

	}

	public static String sendHttpPost2(String url, Map<String, String> params, Map<String, String> header, String body,
			String charSet) {
		String response = "";
		HttpPost httpPost = new HttpPost(url);
		if (null != header) {
			for (String key : header.keySet()) {
				httpPost.addHeader(key, header.get(key));
			}
		}
		if (null != params) {
			url=url+"?";
			try {
				url=url+createLinkStringByGet(params);
				 httpPost = new HttpPost(url);
			} catch (UnsupportedEncodingException e) {
			}
		}
		if (null != body) {
			StringEntity stringEntity = new StringEntity(body, charSet);// 解决中文乱码问题
			stringEntity.setContentEncoding(charSet);
			stringEntity.setContentType("application/json");
			httpPost.setEntity(stringEntity);
		}
		try {
			HttpResponse httpResponse = httpClient.execute(httpPost);
			if (httpResponse.getStatusLine().getStatusCode() == 200) {
				HttpEntity httpEntity = httpResponse.getEntity();
				response = EntityUtils.toString(httpEntity);
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return response;


	}

	/**
	 * 把数组所有元素排序，并按照“参数=参数值”的模式用“&”字符拼接成字符串
	 * 
	 * @param params
	 *            需要排序并参与字符拼接的参数组
	 * @return 拼接后字符串
	 * @throws UnsupportedEncodingException
	 */
	public static String createLinkStringByGet(Map<String, String> params) throws UnsupportedEncodingException {
		List<String> keys = new ArrayList<String>(params.keySet());
		Collections.sort(keys);
		String prestr = "";
		for (int i = 0; i < keys.size(); i++) {
			String key = keys.get(i);
			String value = params.get(key);
			value = URLEncoder.encode(value, "UTF-8");
			if (i == keys.size() - 1) {// 拼接时，不包括最后一个&字符
				prestr = prestr + key + "=" + value;
			} else {
				prestr = prestr + key + "=" + value + "&";
			}
		}
		return prestr;
	}

	public static void main(String[] args) {
		 String url="http://www.leantech.cn/api/sendPhoneMsg";
		//String url = "http://www.leantech.cn/api/sendPhoneMsg?PhoneNumbers=18729217077&signName=精宸科技&TemplateCode=SMS_136856113";
		Map<String, String> params = new HashMap<String, String>();
		params.put("PhoneNumbers", "18729217077");	
		params.put("signName", "精宸科技");
		params.put("TemplateCode", "SMS_136856113");
		
		Map<String, String> header = new HashMap<String, String>();
		header.put("token", "111");
		header.put("Content-Type", "application/json");
		JSONObject body = new JSONObject();
		body.put("name", "殷雷雷");
		body.put("card", "057158");
		body.put("hospital", "安医二附院");
		String result = sendHttpPost2(url, params, header, body.toString(), "utf-8");
		System.out.println("result=" + result);
	}
}
