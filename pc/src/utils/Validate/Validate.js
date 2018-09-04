import regPattern from './pattern'
/**
 * 针对ELEMENT UI 基础的验证规则 扩展项目常用验证内容
 * Author: zhou qi
 * Date: 2018/05/16
 */

/**
 * Validate normal string number
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const strNumber = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.stringNumber.test(Number(value))) {
      errors.push(new Error('只能输入数字'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate normal string number
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const normalNumber = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.normalNumber.test(Number(value))) {
      errors.push(new Error('请输入正确的数字'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate normal account
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const account = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.account.test(value)) {
      errors.push(new Error('大于4位的字母数字或下划线'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate cellPhone
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const cellPhone = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.cellPhone.test(value)) {
      errors.push(new Error('手机号填写有误'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate complex password
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const complexPassword = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.complexPassword.test(value)) {
      errors.push(new Error('%s至少6位且包含大写,小写数字和特殊字符'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate QQ
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const tencentQQ = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.qq.test(value)) {
      errors.push(new Error('必须符合字母数字下划线规则'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate dictTypeCode
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const dictTypeCode = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.dictTypeCode.test(value)) {
      errors.push(new Error('必须符合字母数字下划线规则'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate dictTypeCode
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const dictOther = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.dictOther.test(value)) {
      errors.push(new Error('必须符合字母数字下划线规则'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate dictTypeCode
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const dictNum = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.dictNum.test(value)) {
      errors.push(new Error('必须符合仅能输入3位以内数字规则'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate dictTypeCode
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const paramsOther = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.paramsOther.test(value)) {
      errors.push(new Error('必须符合字母数字下划线规则'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate dictTypeCode
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const isVehicleNumber = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.vehicleNumber.test(value)) {
      errors.push(new Error('车牌号码有误'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}
export default {
  strNumber,
  normalNumber,
  account,
  cellPhone,
  complexPassword,
  tencentQQ,
  dictTypeCode,
  dictOther,
  dictNum,
  paramsOther,
  isVehicleNumber
}
