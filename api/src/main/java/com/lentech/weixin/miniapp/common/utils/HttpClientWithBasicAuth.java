package com.lentech.weixin.miniapp.common.utils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;  
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.auth.AuthScope;  
import org.apache.http.auth.UsernamePasswordCredentials;  
import org.apache.http.client.ClientProtocolException;  
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCredentialsProvider;  
import org.apache.http.impl.client.CloseableHttpClient;  
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicHeader;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;
  
public class HttpClientWithBasicAuth {  
      
    private static HttpClientBuilder httpClientBuilder;  
    private static CloseableHttpClient closeableHttpClient;  
  

	public static String sendHttpPost(String url, List<NameValuePair> params, String charSet) {

	       
        if( closeableHttpClient == null ){  
            createCloseableHttpClientWithBasicAuth();  
        }  
        String result = "";  
        HttpPost httpPost = null;
        HttpResponse httpResponse = null; 
        httpPost =new HttpPost(url);
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
//        	httpPost.setHeader("Content-Type", "application/xml;charset=UTF-8");  
            httpResponse = closeableHttpClient.execute(httpPost);  
            HttpEntity httpEntity = httpResponse.getEntity();
            result = EntityUtils.toString(httpEntity);
        } catch (ClientProtocolException e) { 
        	System.out.println(e.getMessage());
            
        } catch (IOException e) {  
          	System.out.println(e.getMessage());
        }  
              
        return result;  
    

	}
    
    public static String doGetMethod(String URI,String jsonStr){
       
        if( closeableHttpClient == null ){  
            //createCloseableHttpClient();  
            createCloseableHttpClientWithBasicAuth();  
        }  
        String result = "";  
        HttpPost httpPost = null;
        HttpResponse httpResponse = null;  
        HttpEntity entity = null; 
       httpPost =new HttpPost(URI);
        try {  
        	 StringEntity StringEntity=new StringEntity(jsonStr,"utf-8");
        	 StringEntity.setContentType("text/json");
             StringEntity.setContentEncoding(new BasicHeader(HTTP.CONTENT_TYPE, "application/json;charset=UTF-8"));
        	httpPost.setHeader("Content-Type", "application/json;charset=UTF-8");  
       	    httpPost.setEntity(StringEntity);
            httpResponse = closeableHttpClient.execute(httpPost);  
            entity = httpResponse.getEntity();  
            if( entity != null ){  
                result = EntityUtils.toString(entity);  
            }  
        } catch (ClientProtocolException e) { 
        	System.out.println(e.getMessage());
            
        } catch (IOException e) {  
          	System.out.println(e.getMessage());
        }  
              
        return result;  
    }  
      
      
    public static void closeHttpClient(){  
        if( closeableHttpClient != null ){  
            try {  
                closeableHttpClient.close();  
            } catch (IOException e) {  
                e.printStackTrace();  
            }  
        }  
    }  
      
    public static void createCloseableHttpClient(){  
        if( closeableHttpClient == null ){  
            // 创建HttpClientBuilder  
            httpClientBuilder = HttpClientBuilder.create();  
            // HttpClient  
            closeableHttpClient = httpClientBuilder.build();  
        }  
    }  
      
    public static void createCloseableHttpClientWithBasicAuth(){  
        if( closeableHttpClient == null){  
            // 创建HttpClientBuilder  
            httpClientBuilder = HttpClientBuilder.create();  
            // 设置BasicAuth  
            CredentialsProvider provider = new BasicCredentialsProvider();  
            // Create the authentication scope  
            AuthScope scope = new AuthScope(AuthScope.ANY_HOST, AuthScope.ANY_PORT, AuthScope.ANY_REALM);  
            // Create credential pair，在此处填写用户名和密码  
            UsernamePasswordCredentials credentials = new UsernamePasswordCredentials("glyy", "123456");  
            // Inject the credentials  
            provider.setCredentials(scope, credentials);  
            // Set the default credentials provider  
            httpClientBuilder.setDefaultCredentialsProvider(provider);  
            // HttpClient  
            closeableHttpClient = httpClientBuilder.build();  
        }  
    } 
    public static void main(String args[])  {  
        String URI = "http://218.94.114.58:7005/mqManage/getMq/"; 
        List<NameValuePair> params = new ArrayList<NameValuePair>();
        String msg="<ESBEntry><AccessControl><UserName>HLWYYTYGLPT</UserName><Password>123456</Password><SysFlag>1</SysFlag><Fid>BS02001</Fid></AccessControl><MessageHeader> <Fid>BS02001</Fid><SourceSysCode>S60</SourceSysCode> <TargetSysCode>S00</TargetSysCode><MsgDate>2018-03-27 15:19:58</MsgDate></MessageHeader><RequestOption><triggerData>0</triggerData> <dataAmount>500</dataAmount></RequestOption><MsgInfo flag=\"1\"><Msg/> <distinct value=\"0\"/> <query item=\"DEPT_INDEX_NO\" compy=\" = \" value=\" 1 \" splice=\"AND\"/></MsgInfo><GroupInfo flag=\"0\"><AS ID=\"\" linkField=\"\"/></GroupInfo></ESBEntry>";
	      params.add(new BasicNameValuePair("msg",msg));	     
	      String result=sendHttpPost(URI, params, "utf-8");      
        System.out.println(result); 
        System.out.println(XmlJsonConversionUtil.xmlToJSONObject(result));
    }  
}
