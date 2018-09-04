import http from '@/utils/http'

/**********人员相关接口*********/

/**
 * 下单
 *
 * @export
 * @param {any} params
 * @returns
 */
export function orderUser (params) {
    return http.post(
      '/order_user'
    )
  }


 /**
 * 获取全部人员列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getUserList (params) {
    return http.post(
      '/user/get_users',
      params
    )
  }


 /**
 * 获取全部人员分类列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getUserCatList (params) {
    return http.post(
      '/user/get_user_cat',
      params
    )
  }


 /**
 * 编辑人员
 *
 * @export
 * @param {any} params
 * @returns
 */
export function EditUser (params) {
    return http.post(
      '/user/edit',
      params
    )
  }

 /**
 * 编辑人员状态
 *
 * @export
 * @param {any} params
 * @returns
 */
export function UpdateUser (params) {
    return http.post(
      '/user/update',
      params
    )
  }


/**
 * 新增人员
 *
 * @export
 * @param {any} params
 * @returns
 */
export function AddUser (params) {
    return http.post(
      '/user/add',
      params
    )
  }


 /**
 * 删除人员
 *
 * @export
 * @param {any} params
 * @returns
 */
export function DelUser (params) {
    return http.post(
      '/user/del',
      params
    )
  }


/**
 * 新增人员分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function AddUserCat (params) {
    return http.post(
      '/user/cat/add',
      params
    )
  }


/**
 * 编辑人员分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function EditUserCat (params) {
    return http.post(
      '/user/cat/edit',
      params
    )
  }

 /**
 * 修改人员分类状态
 *
 * @export
 * @param {any} params
 * @returns
 */
export function UpdateUserCat (params) {
    return http.post(
      '/user/cat/update',
      params
    )
  }

 /**
 * 删除人员分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function DelUserCat (params) {
    return http.post(
      '/user/cat/del',
      params
    )
  }
