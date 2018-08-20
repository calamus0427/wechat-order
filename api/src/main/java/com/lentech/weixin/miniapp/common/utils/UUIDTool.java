package com.lentech.weixin.miniapp.common.utils;

import java.util.UUID;
public class UUIDTool {

	 /**  
     * 自动生成32位的UUid，对应数据库的主键id进行插入用。  
     * @return  
     */  
    public static String getUUID() {           
        return UUID.randomUUID().toString().replace("-", "");  
    }  
    public static void main(String[] args) {
		System.out.println(getUUID());
	}
}
