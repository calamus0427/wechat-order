package com.lentech.weixin.miniapp.common.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

/**
 * 
 * @author yinleilei
 *
 */
public class XmlUtils {
	/***
	 * 获取父节点下制定节点的值
	 * @param xmlStr xml字符串
	 * @param nodeName 节点名字
	 * @return 节点值
	 * xml 格式如下：
	 * <?xml version="1.0" encoding="utf-8"?>
		<Response>
		  <ResultCode>0</ResultCode>
		  <ResultContent>成功</ResultContent>
		  <Departments>
		    <Department>
		      <DepartmentID>6</DepartmentID>
		      <DepartmentCode>妇科门诊</DepartmentCode>
		      <DepartmentName>妇科门诊</DepartmentName>
		    </Department>
		    <Department>
		      <DepartmentID>9</DepartmentID>
		      <DepartmentCode>产科门诊</DepartmentCode>
		      <DepartmentName>产科门诊</DepartmentName>
		    </Department>   
		  </Departments>
		</Response>
	 */
	public static String getnodeValueByNodeName(String xmlStr,String nodeName){
		String value="";
		 Document document = null;
		 
		try {
			 document=DocumentHelper.parseText(xmlStr); 
			 Element rootEle = document.getRootElement(); 
			 Element response = rootEle.element(nodeName);
			 value=response.getTextTrim();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return value;
	}
	
	/***
	 * xmlstr xml字符串 适用格式：
	 * 
	 * <?xml version="1.0" encoding="utf-8"?>
		<Response>
		  <ResultCode>0</ResultCode>
		  <ResultContent>成功</ResultContent>
		  <Departments>
		    <Department>
		      <DepartmentID>6</DepartmentID>
		      <DepartmentCode>妇科门诊</DepartmentCode>
		      <DepartmentName>妇科门诊</DepartmentName>
		    </Department>
		    <Department>
		      <DepartmentID>9</DepartmentID>
		      <DepartmentCode>产科门诊</DepartmentCode>
		      <DepartmentName>产科门诊</DepartmentName>
		    </Department>   
		  </Departments>
		</Response>
	 *paterNodeName:父节点名字：Departments
	 *itemsNodeName：子节点名字：itemsNodeName
	 */
	public static List<Map<String,Object>> ConverXmlStringToLsitMap(String xmlstr,String paterNodeName,String itemsNodeName){
		    List<Map<String,Object>> resultMap=new ArrayList<Map<String,Object>>();
		    //第一步:将请求的数据和商户自己的密钥拼成一个字符串,  
		    Document document = null;  
		    try {  
		        document=DocumentHelper.parseText(xmlstr); 
		        Element rootEle = document.getRootElement();  
			    System.out.println("根节点名称："+rootEle.getName());//获取根节点 
			    Element response = rootEle.element(paterNodeName);
			    Iterator<?> iter = response.elementIterator(itemsNodeName); // 获取根节点下的子节点item  
			    while(iter.hasNext()){ 
			    	
			    	 Map<String, Object> xmlMap= new HashMap<String, Object>(); 
			        Element recordEle = (Element) iter.next(); 
			        @SuppressWarnings("unchecked")
					List<Element> listAttr=recordEle.elements();//当前节点的所有属性的list 
			        for(Element attr:listAttr){//遍历当前节点的所有属性  
		        	      String name=attr.getName();//属性名称  
		        	      String value=attr.getTextTrim();//属性的值  
		        	      xmlMap.put(name, value);
		        	      
		        	  }
			        resultMap.add(xmlMap);
			       
			       
			    } 
		    } catch (DocumentException e) {  
		    	System.out.println(e.getMessage());
		    }   
		     
		    return resultMap;
	}
	/**  
     * Map转换成Xml  
     * @param map  
     * @return  
     */  
    public static String map2Xmlstring(Map<String,Object> map){  
        StringBuffer sb = new StringBuffer("");  
        sb.append("<xml>");  
          
        Set<String> set = map.keySet();  
        for(Iterator<String> it=set.iterator(); it.hasNext();){  
            String key = it.next();  
            Object value = map.get(key);  
            sb.append("<").append(key).append(">");  
            sb.append(value);  
            sb.append("</").append(key).append(">");  
        }  
        sb.append("</xml>");  
        return sb.toString();  
    }  
	/**  
     * Xml string转换成Map  
     * @param xmlStr  
     * @return  
     */  
    public static Map<String,Object> xmlString2Map(String xmlStr){  
        Map<String,Object> map = new HashMap<String,Object>();  
        Document doc;  
        try {  
            doc = DocumentHelper.parseText(xmlStr);  
            Element el = doc.getRootElement();  
            map = recGetXmlElementValue(el,map);  
        } catch (DocumentException e) {  
            e.printStackTrace();  
        }  
        return map;  
    }  
   /**  
    * 循环解析xml  
    * @param ele  
    * @param map  
    * @return  
    */  
   @SuppressWarnings({ "unchecked" })  
   private static Map<String, Object> recGetXmlElementValue(Element ele, Map<String, Object> map){  
       List<Element> eleList = ele.elements();  
       if (eleList.size() == 0) {  
           map.put(ele.getName(), ele.getTextTrim());  
           return map;  
       } else {  
           for (Iterator<Element> iter = eleList.iterator(); iter.hasNext();) {  
               Element innerEle = iter.next();  
               recGetXmlElementValue(innerEle, map);  
           }  
           return map;  
       }  
   }  
	public static void main(String[] args) {
		 String str="<response>\r\n" + 
		 		"      <code>0000</code>\r\n" + 
		 		"      <msg>下单成功</msg>\r\n" + 
		 		"      <out_trade_no>130117880120170726135402634</out_trade_no>\r\n" + 
		 		"      <sub_openid>null</sub_openid>\r\n" + 
		 		"      <total_fee>100</total_fee>\r\n" + 
		 		"      <real_pay_fee>100</real_pay_fee>\r\n" + 
		 		"      <trade_no>4004102001201707262748630141</trade_no>\r\n" + 
		 		"      <trade_time>20170726135404</trade_time>\r\n" + 
		 		"      <trade_status>TRADE_SUCCESS</trade_status>\r\n" + 
		 		"</response>";
			
//		System.out.println(ConverXmlStringToLsitMap(str,"Departments","Department").size());
//		System.out.println(getnodeValueByNodeName(str,"ResultCode"));
		 System.out.println(xmlString2Map(str).get("123") );
	}

}
