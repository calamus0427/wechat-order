package com.lentech.weixin.miniapp.common.utils;



import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.xml.XMLSerializer;

/**
 * 
 * xml json 相互转换工具类
 * 
 * @author 殷雷雷
 *
 */
public class XmlJsonConversionUtil {

	/**
	 * xml字符串转json对象
	 * @param xmlStr xml字符串
	 * @return JSONObject
	 * 注意:通过json-lib 把xml转化为json时,空节点都会转化为空数组,即[],这是非常不好的,
	 * 所以需要把[]转化为空字符串:jsonStr.replace("[]", "\"\"")
	 */
	public static JSONObject xmlToJSONObject(String xmlStr) {
		try {
			XMLSerializer xmlSerializer = new XMLSerializer();
			String result = xmlSerializer.read(xmlStr).toString();
			result = result.replace("[]", "\"\"");  
			return  JSONObject.fromObject(result);
		} catch (Exception e) {
			return null;
		}
	}
	/**
	 * json字符串 转xml字符串
	 * @param jsonStr json字符串
	 * @param rootName xml根节点
	 * @return xmlString
	 */
	public static String jsonTOXml(String json,String rootName) {
		XMLSerializer xmlSerializer = new XMLSerializer();
		// 根节点名称
		xmlSerializer.setRootName(rootName);
		// 不对类型进行设置
		xmlSerializer.setTypeHintsEnabled(false);
		String xmlStr = "";
		if (json.contains("[") && json.contains("]")) {
		// jsonArray
		JSONArray jobj = JSONArray.fromObject(json);
		xmlStr = xmlSerializer.write(jobj);
		} else {
		// jsonObject
		JSONObject jobj = JSONObject.fromObject(json);
		xmlStr = xmlSerializer.write(jobj);
		}		
		return xmlStr.replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", ""); 
	}
	 public static void main(String[] args) {  
		  StringBuffer param = new StringBuffer();
		  param.append("<request>");
		  param.append("<msg_head>");
		  param.append("<create_ip>192.168.1.120</create_ip>");
		  param.append("<notice_port>80</notice_port>");
		  param.append("<merchant_id>610234010005</merchant_id>");
		  param.append("<scenes_pay>1</scenes_pay>");
		  param.append("<service_name>refund_order</service_name>");
		  param.append("</msg_head>");
		  param.append("<msg_body>");
		  param.append("<out_trade_no>1301178801201806051401009611545</out_trade_no>");
		  param.append("<total_fee>2200</total_fee>");
		  param.append("<refund_fee>2200</refund_fee>");
		  param.append("<refund_reason>挂号退费</refund_reason>");
		  param.append("<trade_type>inapay_weixin_jsapi</trade_type>");
		  param.append("</msg_body>");
		  param.append("</request>");
		  JSONObject resultObj=xmlToJSONObject(param.toString());
		  System.out.println(resultObj.toString());
		  String xmlResult=jsonTOXml(resultObj.toString(),"request");
		  System.out.println(param.toString());
		  System.out.println(xmlResult);
		System.out.println(xmlResult.equals(param.toString()));
	 }
}
