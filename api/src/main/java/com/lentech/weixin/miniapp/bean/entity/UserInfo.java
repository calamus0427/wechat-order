package com.lentech.weixin.miniapp.bean.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


/**
 * 用户表
 * @author 殷雷雷
 *
 */





@Entity
//联合约束
@Table(name="P_USER_INFO",uniqueConstraints = {@UniqueConstraint(columnNames={"`USER_NAME`","`ID_CARD_NO`", "`CHANNEL_SOURCE`"})})
public class UserInfo extends BaseEntity{
	



	@Builder
	public UserInfo(Date createTime, Date updateTime, Integer userId, String userName, String idCardNo, String sex,
			String birthday, String channelSource, String status) {
		super(createTime, updateTime);
		this.userId = userId;
		this.userName = userName;
		this.idCardNo = idCardNo;
		this.sex = sex;
		this.birthday = birthday;
		this.channelSource = channelSource;
		this.status = status;
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id  
	@GeneratedValue  
	@Column(name="`USER_ID`",updatable = false,columnDefinition="int COMMENT '用户编码主键'")
	private Integer userId;
	@Column(name="`USER_NAME`",nullable=false,columnDefinition="varchar(50) COMMENT '用户姓名'")
	private  String userName;
	@Column(name="`ID_CARD_NO`",nullable=false,columnDefinition="varchar(50) COMMENT '身份证号'")
	private  String idCardNo;	
	@Column(name="`SEX`",columnDefinition="varchar(2)  COMMENT '性别1：男、2：女、3：未知'")
	private  String sex="3";
	@Column(name="`BIRTHDAY`",columnDefinition="varchar(20) COMMENT '出生日期'")
	private  String birthday;
	@Column(name="`CHANNEL_SOURCE`",nullable=false,columnDefinition="varchar(2)  COMMENT '渠道来源默认1：精宸'")
	private  String channelSource="1";
	@Column(name="`STATUS`",columnDefinition="varchar(2)  COMMENT '状态1：有效、0：无效'")
	private  String status="1";

	
	
	public static void main(String[] args) {
		UserInfo userInfo= UserInfo.builder().userName("123").createTime(new Date()).build();
		System.out.println(userInfo.toString());
	}
}
