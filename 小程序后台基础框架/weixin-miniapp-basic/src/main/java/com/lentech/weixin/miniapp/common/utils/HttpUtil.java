//package com.lentech.weixin.miniapp.common.utils;
//
//import java.io.File;
//import java.io.IOException;
//import java.util.Map;
//import java.util.Objects;
//
//import org.apache.commons.codec.Charsets;
//import org.apache.commons.collections.MapUtils;
//import org.apache.http.HttpStatus;
//import org.apache.http.client.HttpRequestRetryHandler;
//import org.apache.http.client.config.RequestConfig;
//import org.apache.http.client.methods.CloseableHttpResponse;
//import org.apache.http.client.methods.HttpDelete;
//import org.apache.http.client.methods.HttpGet;
//import org.apache.http.client.methods.HttpPost;
//import org.apache.http.client.methods.HttpPut;
//import org.apache.http.client.methods.HttpRequestBase;
//import org.apache.http.entity.StringEntity;
//import org.apache.http.impl.client.BasicCookieStore;
//import org.apache.http.impl.client.CloseableHttpClient;
//import org.apache.http.impl.client.HttpClients;
//import org.apache.http.impl.client.StandardHttpRequestRetryHandler;
//import org.apache.http.util.EntityUtils;
//
//
//public class HttpUtil {
//    private static final int TIMEOUT = 30 * 1000;
//
//    private static CloseableHttpClient httpClient;
//    static {
//        RequestConfig requestConfig = RequestConfig.custom()
//                .setSocketTimeout(TIMEOUT)
//                .setConnectTimeout(TIMEOUT)
//                .setConnectionRequestTimeout(TIMEOUT)
//                .build();
//        BasicCookieStore cookieStore = new BasicCookieStore();
//        HttpRequestRetryHandler retryHandler = new StandardHttpRequestRetryHandler();
//
//        httpClient = HttpClients.custom()
//                .setDefaultRequestConfig(requestConfig)
//                .setDefaultCookieStore(cookieStore)
//                .setRetryHandler(retryHandler)
//                .build();
//    }
//
//    public static String get(String requestUrl) {
//        return get(requestUrl, null);
//    }
//
//    public static String get(String requestUrl, Map<String, String> headers) {
//        HttpGet request = new HttpGet(requestUrl);
//        setRequestHeader(request, headers);
//        return executeRequest(request);
//    }
//
//    public static String post(String requestUrl, Object params) {
//        return post(requestUrl, params, null);
//    }
//
//    public static String post(String requestUrl, Object params, Map<String, String> headers) {
//        HttpPost request = new HttpPost(requestUrl);
//        setRequestHeader(request, headers);
//        String entityBody;
//        if (params instanceof String) {
//            entityBody = (String) params;
//        } else {
//            entityBody = JsonUtil.serialize(params);
//        }
//        request.setEntity(new StringEntity(entityBody, Charsets.UTF_8));
//        return executeRequest(request);
//    }
//
//    public static String delete(String requestUrl) {
//        return delete(requestUrl, null);
//    }
//
//    public static String delete(String requestUrl, Map<String, String> headers) {
//        HttpDelete request = new HttpDelete(requestUrl);
//        setRequestHeader(request, headers);
//        return executeRequest(request);
//    }
//
//    public static String put(String requestUrl, Object params) {
//        return put(requestUrl, params, null);
//    }
//
//    public static String put(String requestUrl, Object params, Map<String, String> headers) {
//        HttpPut request = new HttpPut(requestUrl);
//        setRequestHeader(request, headers);
//        request.setEntity(new StringEntity(JsonUtil.serialize(params), Charsets.UTF_8));
//        return executeRequest(request);
//    }
//
//    public static String upload(String requestUrl, String fileFlag, File file) {
//        HttpPost request = new HttpPost(requestUrl);
//        request.setEntity(MultipartEntityBuilder.create().addBinaryBody(fileFlag, file).build());
//        return executeRequest(request);
//    }
//
//    private static void setRequestHeader(HttpRequestBase request, Map<String, String> headers) {
//        if (MapUtils.isNotEmpty(headers)) {
//            headers.forEach(request::setHeader);
//        }
//    }
//
//    private static String executeRequest(HttpRequestBase request) {
//        String resultEntity = "";
//        CloseableHttpResponse response = null;
//        try {
//            response = httpClient.execute(request);
//            int statusCode = response.getStatusLine().getStatusCode();
//            if (statusCode != HttpStatus.SC_OK
//                    && statusCode != HttpStatus.SC_CREATED) {
//                log.warn("the response status is abnormal: {}", statusCode);
//                return resultEntity;
//            }
//            resultEntity = EntityUtils.toString(response.getEntity(), Charsets.UTF_8);
//        } catch (IOException e) {
//            log.error("execute http request error", e);
//        } finally {
//            if (!Objects.isNull(response)) {
//                try {
//                    response.close();
//                } catch (IOException e) {
//                    log.error("close http response error", e);
//                }
//            }
//        }
//        return resultEntity;
//    }
//}
