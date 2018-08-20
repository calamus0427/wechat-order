package com.lentech.weixin.miniapp.common.utils;

import java.io.IOException;
import java.util.Map;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import static com.lentech.weixin.miniapp.common.utils.BeanUtil.requireNonNull;
import static com.lentech.weixin.miniapp.common.utils.StrUtil.isBlank;
public class JsonUtil {
	@SuppressWarnings({ "unchecked" })
	public static Map<String, Object> Json2Map(String json) {
		Map<String, Object> result = null;
		// write your code here
		ObjectMapper mapper = new ObjectMapper(); // can reuse, share globally
		try {
			result = mapper.readValue(json, Map.class);
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return result;
	}

	public static <T> T Json2Obj(String json, TypeReference<T> tr) {
		T obj = null;
		// write your code here
		ObjectMapper mapper = new ObjectMapper(); // can reuse, share globally
		try {
			obj = mapper.readValue(json, tr);
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return obj;
	}
	
	/**
	 * @param obj
	 * @return
	 */
	public static String Obj2Json(Object obj) {
		try {
			ObjectMapper objectMapper = new ObjectMapper();
			String json = objectMapper.writeValueAsString(obj);

			return json;
		} catch (IOException e) {
			e.printStackTrace();

			return "";
		}
	}
    public static final SerializerFeature[] DEFAULT_FORMAT = {SerializerFeature.WriteDateUseDateFormat, SerializerFeature.WriteEnumUsingToString,
            SerializerFeature.WriteNonStringKeyAsString, SerializerFeature.QuoteFieldNames, SerializerFeature.SkipTransientField,
            SerializerFeature.SortField, SerializerFeature.PrettyFormat};

    private JsonUtil() {
    }

    public static Object getStringFromJSONObject(final String json, final String key) {
        requireNonNull(json, "json is null");
        return JSON.parseObject(json).getString(key);
    }

    public static JSONObject getJSONFromString(final String jsonString) {
        if (isBlank(jsonString)) {
            return new JSONObject();
        }
        return JSON.parseObject(jsonString);
    }

    public static <T> T toBean(String jsonStr, Class<T> beanClass) {
        requireNonNull(jsonStr, "jsonStr is null");
        JSONObject jo = JSON.parseObject(jsonStr);
        jo.put(JSON.DEFAULT_TYPE_KEY, beanClass.getName());
        return JSON.parseObject(jo.toJSONString(), beanClass);
    }

    public static <T> String toJson(T obj) {
        requireNonNull(obj, "obj is null");
        return JSON.toJSONString(obj, DEFAULT_FORMAT);
    }

    public static String toJson(Map<String, Object> map) {
        requireNonNull(map, "map is null");
        return JSON.toJSONString(map, DEFAULT_FORMAT);
    }

    public static String prettyFormatJson(String jsonString) {
        requireNonNull(jsonString, "jsonString is null");
        return JSON.toJSONString(getJSONFromString(jsonString), true);
    }

    public static Map<String, Object> toMap(String jsonString) {
        requireNonNull(jsonString, "jsonString is null");
        return getJSONFromString(jsonString);
    }
}
