package com.lentech.weixin.miniapp.bean.RequestDto;
import javax.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import com.lentech.weixin.miniapp.bean.BaseBean;


import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
/**
 * 
 * 患者建档入参
 * 患者建档  dto
 * @author Administrator
 *
 */
@Data
@Builder(toBuilder = true)
@EqualsAndHashCode(callSuper=false)
public class RecordDto extends BaseBean{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	//姓名
	@NotBlank(message = "姓名不能为空")
	private String name;
	//身份证
	@NotBlank(message = "身份证不能为空")
	@Pattern(regexp="^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$", message="身份证格式错误")
	private String idCard;
	//手机号码
	@NotBlank(message = "手机号不能为空")
	@Length(min = 11, max = 11, message = "手机号格式错误")
	@Pattern(regexp="^((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\\d{8}$", message="手机号格式错误")
	private String phone;
	//验证码
	@NotBlank(message = "验证码不能为空")
	private String vftCode;
}
