import http from '@/utils/http'

/**********人员相关接口*********/

/**
 * 下单
 *
 * @export
 * @param {any} params
 * @returns
 */
export function orderUser () {
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
export function getUserList () {
    return http.post(
      '/user/get_users'
    )
  }


 /**
 * 获取全部人员分类列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getUserCatList () {
    return http.post(
      '/user/get_user_cat'
    )
  }


 /**
 * 编辑人员
 *
 * @export
 * @param {any} params
 * @returns
 */
export function EditUser () {
    return http.post(
      '/user/edit'
    )
  }

 /**
 * 编辑人员状态
 *
 * @export
 * @param {any} params
 * @returns
 */
export function UpdateUser () {
    return http.post(
      '/user/update'
    )
  }


/**
 * 新增人员
 *
 * @export
 * @param {any} params
 * @returns
 */
export function AddUser () {
    return http.post(
      '/user/add'
    )
  }


 /**
 * 删除人员
 *
 * @export
 * @param {any} params
 * @returns
 */
export function DelUser () {
    return http.post(
      '/user/del'
    )
  }


/**
 * 新增人员分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function AddUserCat () {
    return http.post(
      '/user/cat/add'
    )
  }


/**
 * 编辑人员分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function EditUserCat () {
    return http.post(
      '/user/cat/edit'
    )
  }

 /**
 * 修改人员分类状态
 *
 * @export
 * @param {any} params
 * @returns
 */
export function UpdateUserCat () {
    return http.post(
      '/user/cat/update'
    )
  }

 /**
 * 删除人员分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function DelUserCat () {
    return http.post(
      '/user/cat/del'
    )
  }
