package com.lentech.weixin.miniapp.common.enums;



public enum ResultStatus {
	// -1参数错误
    FAIL(-1, "common fail"),
    // 0为成功
    SUCCESS(0, "success"),
    // --- 4xx Client Error ---
    http_status_bad_request(400, "Bad Request"),
    http_status_unauthorized(401, "Unauthorized"),
    http_status_payment_required(402, "Payment Required"),
    http_status_forbidden(403, "Forbidden"),
    http_status_not_found(404, "资源不存在"),
    http_status_method_not_allowed(405, "Method Not Allowed"),
    http_status_not_acceptable(406, "Not Acceptable"),
    http_status_proxy_authentication_required(407, "Proxy Authentication Required"),
    http_status_request_timeout(408, "Request Timeout"),
    http_status_conflict(409, "Conflict"),
    http_status_gone(410, "Gone"),
    http_status_length_required(411, "Length Required"),
    http_status_precondition_failed(412, "Precondition Failed"),
    http_status_payload_too_large(413, "Payload Too Large"),
    http_status_uri_too_long(414, "URI Too Long"),
    http_status_unsupported_media_type(415, "Unsupported Media Type"),
    http_status_requested_range_not_satisfiable(416, "Requested range not satisfiable"),
    http_status_expectation_failed(417, "Expectation Failed"),
    http_status_im_a_teapot(418, "I'm a teapot"),
    http_status_unprocessable_entity(422, "Unprocessable Entity"),
    http_status_locked(423, "Locked"),
    http_status_failed_dependency(424, "Failed Dependency"),
    http_status_upgrade_required(426, "Upgrade Required"),
    http_status_precondition_required(428, "Precondition Required"),
    http_status_too_many_requests(429, "Too Many Requests"),
    http_status_request_header_fields_too_large(431, "Request Header Fields Too Large"),

    // --- 5xx Server Error ---
    http_status_internal_server_error(500, "系统错误"),
    http_status_fail_AccessToken(501, "获取AccessToken失败"),
    http_status_bad_gateway(502, "Bad Gateway"),
    http_status_service_unavailable(503, "Service Unavailable"),
    http_status_gateway_timeout(504, "Gateway Timeout"),
    http_status_http_version_not_supported(505, "HTTP Version not supported"),
    http_status_variant_also_negotiates(506, "Variant Also Negotiates"),
    http_status_insufficient_storage(507, "Insufficient Storage"),
    http_status_loop_detected(508, "Loop Detected"),
    http_status_bandwidth_limit_exceeded(509, "Bandwidth Limit Exceeded"),
    http_status_not_extended(510, "Not Extended"),
    http_status_network_authentication_required(511, "Network Authentication Required"),

    // --- 8xx common error ---
    EXCEPTION(800, "exception"),
    INVALID_PARAM(801, "invalid.param"),
    INVALID_PRIVI(802, "invalid.privi"),

    // --- 9xx 微信实名认证返回错误码 ---
    wechat_94001(94001,"缺少 cert_serialno 参数"),
    wechat_94002(94002,"用户未注册微信支付"),
    wechat_94003(94003,"签名不正确"),
    wechat_94004(94004,"用户无实名信息"),
    wechat_94005(94005,"非法的用户 token"),
    wechat_94006(94006,"appid未授权获得实名信息"),
    wechat_94007(94007,"appid与 mchid无绑定关系"),
    wechat_94008(94008,"非法timestamp参数"),
    wechat_94009(94009,"非法cert_serialno参数,该参数长度为 40"),
    wechat_94010(94010,"非法商户号"),
    //1000以内是系统错误，
    no_login(1000,"没有登录"),
    user_check_failed(1001,"微信用户校验失败"),
    Code_invalid(1002,"授权失败,无效的code"),
    Code_isBlank(1003,"授权失败,code为空"),
    ;
	

    private Integer code;
    private String msg;

    ResultStatus(Integer code, String msg){
        this.code = code;
        this.msg = msg;
    }
    public Integer getErrorCode(){
        return code;
    }

    public String getErrorMsg(){
        return msg;
    }

    public  static ResultStatus getResultStatus(int code) {
    	 for(ResultStatus err : ResultStatus.values()){    		
            if(err.getErrorCode()==code) {
            	return err;
            }
         }
    	return ResultStatus.http_status_internal_server_error;
    }    
}
