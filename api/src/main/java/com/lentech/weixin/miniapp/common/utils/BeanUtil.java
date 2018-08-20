package com.lentech.weixin.miniapp.common.utils;


public final class BeanUtil {

    private BeanUtil() {
    }

    
    public static boolean isNull(Object object) {
        return null == object;
    }

    
    public static boolean nonNull(Object object) {
        return null != object;
    }

    
    public static Object requireNonNull(Object object, String errorMessage) {
        if (null == object) {
            throw new NullPointerException(errorMessage);
        }
        return object;
    }
}