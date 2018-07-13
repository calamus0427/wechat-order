package com.lentech.weixin.miniapp.bean.entity;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.lentech.weixin.miniapp.bean.BaseBean;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;




//JPA基类标识  
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor
@AllArgsConstructor
public class  BaseEntity extends BaseBean{	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	// 创建时间不能修改
	
	@Column(name="CREATE_TIME")
	@CreatedDate //创建时自动更新时间
	private Date createTime;
	
	@Column(name="UPDATE_TIME")
	@LastModifiedDate //修改时自动更新修改时间
	private  Date updateTime;
}
