package com.lentech.weixin.miniapp.service;

import com.lentech.weixin.miniapp.common.resultGenerator.CommonResult;

public interface WaitingDiagnosisService {

	CommonResult queryWaiting(Integer cardId);

}
