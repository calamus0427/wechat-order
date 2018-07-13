package com.lentech.weixin.miniapp.common.utils;


import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ListMapSoftUtils {

	/**
	 * 
	 * @param list 数据源
	 * @param soft 排序的key
	 * @param top  取前几条数据 0 代表全部
	 * @return
	 */
	public static List<Map<String, Object>> soft(List<Map<String, Object>> list,String soft, int top){
		List<Map<String, Object>> tempList=list;
		if(tempList.size()>0) {
			
	        Collections.sort(tempList, new Comparator<Map<String, Object>>() {
	            public int compare(Map<String, Object> o1, Map<String, Object> o2) {	            	
	                return ((Integer) o1.get(soft)).compareTo((Integer) o2.get(soft));
	            }
	        });
	        if(top>tempList.size()) {
	        	  return list.subList(0, tempList.size());
	        }else{
	        	return list.subList(0, top);
	        }
	      
		}else{
			return tempList;
		}
        
	}
	public static void main(String[] args) {
		List<Map<String, Object>> list =new ArrayList<>();
		Map<String, Object> aa=new HashMap<>();
		aa.put("total", 123);
		aa.put("id", 12);
		aa.put("count",12);
		aa.put("merchant_name", "222");
		Map<String, Object> bb=new HashMap<>();
		bb.put("total", 11);
		bb.put("id", 11);
		bb.put("count",11);
		bb.put("merchant_name", "111");
		list.add(aa);
		list.add(bb);
		System.out.println(soft(list, "id", 3));
	}
}
