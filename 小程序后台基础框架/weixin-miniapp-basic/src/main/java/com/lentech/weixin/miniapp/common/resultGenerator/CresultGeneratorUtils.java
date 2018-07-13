package com.lentech.weixin.miniapp.common.resultGenerator;



import com.lentech.weixin.miniapp.common.enums.ResultStatus;

/**
 * api统一返回结果构建
 * @author 殷雷雷
 *
 */
public class CresultGeneratorUtils {
	
	public static CommonResult seccess() {
		CommonResult CommonResult=new CommonResult();
		CommonResult.setStatus(ResultStatus.SUCCESS.getErrorCode());
		CommonResult.setMessage(ResultStatus.SUCCESS.getErrorMsg());
		return CommonResult;
	}

	public static CommonResult seccess(Object data) {
		CommonResult CommonResult=new CommonResult();
		CommonResult.setStatus(ResultStatus.SUCCESS.getErrorCode());
		CommonResult.setMessage(ResultStatus.SUCCESS.getErrorMsg());
		CommonResult.setData(data);
		return CommonResult;
	}
	public static CommonResult error(ResultStatus resultStatus) {
		CommonResult CommonResult=new CommonResult();
		CommonResult.setStatus(resultStatus.getErrorCode());
		CommonResult.setMessage(resultStatus.getErrorMsg());		
		return CommonResult;
	}
	public static CommonResult error(int code,String msg) {
		CommonResult CommonResult=new CommonResult();
		CommonResult.setStatus(code);
		CommonResult.setMessage(msg);		
		return CommonResult;
	}
	public static CommonResult error(ResultStatus resultStatus,Object data ) {
		CommonResult CommonResult=new CommonResult();
		CommonResult.setStatus(resultStatus.getErrorCode());
		CommonResult.setMessage(resultStatus.getErrorMsg());		
		CommonResult.setData(data);
		return CommonResult;
	}
}
