/**
 * EXTEND PATTERN
 */
const stringNumber = /^[0-9]*$/
const normalNumber = /^\d+(\.\d+)?$/
const account = /^[a-zA-Z0-9_-]{4,}$/
const cellPhone = /^1[34578]\d{9}$/
const complexPassword = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
const qq = /^[a-zA-Z0-9_-]{4,16}$/
const dictTypeCode = /^[0-9a-zA-Z_]{1,10}$/
const dictOther = /^[\s\S]{1,30}$/
const dictNum = /^[0-9]{1,3}$/
const paramsOther = /^[\s\S]{1,50}$/
const vehicleNumber = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
export default {
  stringNumber,
  normalNumber,
  account,
  cellPhone,
  complexPassword,
  qq,
  dictTypeCode,
  dictOther,
  dictNum,
  paramsOther,
  vehicleNumber
}
