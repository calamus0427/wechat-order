package com.lentech.weixin.miniapp.common.utils.weixin;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.SortedMap;
import java.util.TreeMap;

public class PayCommonUtil {
	/** 
     * 是否签名正确,规则是:按参数名称a-z排序,遇到空值的参数不参加签名。 
     * @return boolean 
     */  
    public static boolean isTenpaySign(String characterEncoding, SortedMap<Object, Object> packageParams, String API_KEY) {  
        StringBuffer sb = new StringBuffer();  
        @SuppressWarnings("rawtypes")
		Set es = packageParams.entrySet();  
        Iterator<?> it = es.iterator();  
        while(it.hasNext()) {  
            @SuppressWarnings("rawtypes")
			Map.Entry entry = (Map.Entry)it.next();  
            String k = (String)entry.getKey();  
            String v = (String)entry.getValue();  
            if(!"sign".equals(k) && null != v && !"".equals(v)) {  
                sb.append(k + "=" + v + "&");  
            }  
        }  
          
        sb.append("key=" + API_KEY);  
          
        //算出摘要  
        String mysign = MD5Util.MD5Encode(sb.toString(), characterEncoding).toLowerCase(); 
        System.out.println(mysign);
        String tenpaySign = ((String)packageParams.get("sign")).toLowerCase();  
        System.out.println(tenpaySign);
        //System.out.println(tenpaySign + "    " + mysign);  
        return tenpaySign.equals(mysign);  
    }  
  
    /** 
     * @author 
     * @date 2016-4-22 
     * @Description：sign签名 
     * @param characterEncoding 
     *            编码格式 
     * @param parameters 
     *            请求参数 
     * @return 
     */  
    public static String createSign(String characterEncoding, SortedMap<Object, Object> packageParams, String API_KEY) {  
        StringBuffer sb = new StringBuffer();  
        @SuppressWarnings("rawtypes")
		Set es = packageParams.entrySet();  
        @SuppressWarnings("rawtypes")
		Iterator it = es.iterator();  
        while (it.hasNext()) {  
            @SuppressWarnings("rawtypes")
			Map.Entry entry = (Map.Entry) it.next();  
            String k = (String) entry.getKey();  
            String v = (String) entry.getValue();  
            if (null != v && !"".equals(v) && !"sign".equals(k) && !"key".equals(k)) {  
                sb.append(k + "=" + v + "&");  
            }  
        }  
        sb.append("key=" + API_KEY);  
        String sign = MD5Util.MD5Encode(sb.toString(), characterEncoding).toUpperCase();  
        return sign;  
    }  
  
    /** 
     * @author 
     * @date 2016-4-22 
     * @Description：将请求参数转换为xml格式的string 
     * @param parameters 
     *            请求参数 
     * @return 
     */  
    public static String getRequestXml(SortedMap<Object, Object> parameters) {  
        StringBuffer sb = new StringBuffer();  
        sb.append("<xml>");  
        @SuppressWarnings("rawtypes")
		Set es = parameters.entrySet();  
        @SuppressWarnings("rawtypes")
		Iterator it = es.iterator();  
        while (it.hasNext()) {  
            @SuppressWarnings("rawtypes")
			Map.Entry entry = (Map.Entry) it.next();  
            String k = (String) entry.getKey();  
            String v = (String) entry.getValue();  
            if ("attach".equalsIgnoreCase(k) || "body".equalsIgnoreCase(k) || "sign".equalsIgnoreCase(k)) {  
                sb.append("<" + k + ">" + "<![CDATA[" + v + "]]></" + k + ">");  
            } else {  
                sb.append("<" + k + ">" + v + "</" + k + ">");  
            }  
        }  
        sb.append("</xml>");  
        return sb.toString();  
    }  
  
    /** 
     * 取出一个指定长度大小的随机正整数. 
     *  
     * @param length 
     *            int 设定所取出随机数的长度。length小于11 
     * @return int 返回生成的随机数。 
     */  
    public static int buildRandom(int length) {  
        int num = 1;  
        double random = Math.random();  
        if (random < 0.1) {  
            random = random + 0.1;  
        }  
        for (int i = 0; i < length; i++) {  
            num = num * 10;  
        }  
        return (int) ((random * num));  
    }  
  
    /** 
     * 获取当前时间 yyyyMMddHHmmss 
     *  
     * @return String 
     */  
    public static String getCurrTime() {  
        Date now = new Date();  
        SimpleDateFormat outFormat = new SimpleDateFormat("yyyyMMddHHmmss");  
        String s = outFormat.format(now);  
        return s;  
    }  
    public static void main(String[] args) {
    	SortedMap<Object,Object> packageParams = new TreeMap<Object,Object>();
    	 packageParams.put("appid", "wxbc0e4ebaf4561446");  
    	 packageParams.put("attach", "殷雷雷:3522765"); 
    	 packageParams.put("bank_type", "CMB_DEBIT"); 
    	 packageParams.put("cash_fee", "1"); 
    	 packageParams.put("fee_type", "CNY"); 
    	 packageParams.put("is_subscribe", "Y"); 
    	 packageParams.put("mch_id", "1301178801"); 
    	 packageParams.put("nonce_str", "a3d237ca7a79440e8e21bab2c6a56908");
    	 packageParams.put("openid", "ocYfvvwfVgPvzd8P60HuXgw-Es-Q"); 
    	 packageParams.put("out_trade_no", "130117880120170421105653538"); 
    	 packageParams.put("result_code", "SUCCESS"); 
    	 packageParams.put("return_code", "SUCCESS"); 
    	 packageParams.put("sign", "5811918A58D3DB4153A278D93CAC2764"); 
    	 packageParams.put("sub_mch_id", "1439530102"); 
    	 packageParams.put("time_end", "20170421105720"); 
    	 packageParams.put("total_fee", "1");
    	 packageParams.put("trade_type", "JSAPI");
    	 packageParams.put("transaction_id", "4004102001201704217779267090");
    	 System.out.println(isTenpaySign("UTF-8", packageParams,"ED706C29D11842548909EFBDA2A148B4"));
	}
}
