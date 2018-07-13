package com.lentech.weixin.miniapp.common.utils;

import java.io.UnsupportedEncodingException;

public final class StrUtil {

  
    private StrUtil() {
    }

   
    public static boolean isBlank(String str) {
        return null == str || "".equals(str.trim());
    }

   
    public static boolean isNotBlank(String str) {
        return !isBlank(str);
    }

    public static boolean hasBlank(String... strs) {
        if (null == strs || 0 == strs.length) {
            return true;
        } else {
            for (String str : strs) {
                if (isBlank(str)) {
                    return true;
                }
            }
        }
        return false;
    }
    public static String getUTF8StringFromGBKString(String gbkStr) {  
    	          try {  
    	            return new String(getUTF8BytesFromGBKString(gbkStr), "UTF-8");  
    	         } catch (UnsupportedEncodingException e) {  
    	             throw new InternalError();  
    	       }  
    	     }  
    	        
    	      public static byte[] getUTF8BytesFromGBKString(String gbkStr) {  
    	        int n = gbkStr.length();  
    	         byte[] utfBytes = new byte[3 * n];  
    	         int k = 0;  
    	         for (int i = 0; i < n; i++) {  
                 int m = gbkStr.charAt(i);  
    	             if (m < 128 && m >= 0) {  
    	                 utfBytes[k++] = (byte) m;  
    	                continue;  
    	             }  
    	            utfBytes[k++] = (byte) (0xe0 | (m >> 12));  
                utfBytes[k++] = (byte) (0x80 | ((m >> 6) & 0x3f));  
    	             utfBytes[k++] = (byte) (0x80 | (m & 0x3f));  
             }  
    	         if (k < utfBytes.length) {  
    	             byte[] tmp = new byte[k];  
    	             System.arraycopy(utfBytes, 0, tmp, 0, k);  
    	             return tmp;  
    	         }  
    	         return utfBytes;  
    	     } 
}
