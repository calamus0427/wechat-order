import http from '@/utils/http'

/**********菜品相关接口*********/

/**
 * 下单
 *
 * @export
 * @param {any} params
 * @returns
 */
export function orderFood (params) {
    return http.post(
      '/order_food',
      params
    )
  }


 /**
 * 获取全部菜品列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getFoodList (params) {
    return http.post(
      '/food/get_food',
      params
    )
  }


 /**
 * 获取全部菜品分类列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getFoodCatList (params) {
    return http.post(
      '/food/get_food_cat',
      params
    )
  }


 /**
 * 编辑菜品
 *
 * @export
 * @param {any} params
 * @returns
 */
export function EditFood (params) {
    return http.post(
      '/food/edit',
      params
    )
  }

 /**
 * 编辑菜品状态
 *
 * @export
 * @param {any} params
 * @returns
 */
export function UpdateFood (params) {
    return http.post(
      '/food/update',
      params
    )
  }


/**
 * 新增菜品
 *
 * @export
 * @param {any} params
 * @returns
 */
export function AddFood (params) {
    return http.post(
      '/food/add',
      params
    )
  }


 /**
 * 删除菜品
 *
 * @export
 * @param {any} params
 * @returns
 */
export function DelFood (params) {
    return http.post(
      '/food/del',
      params
    )
  }


/**
 * 新增菜品分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function AddFoodCat (params) {
    return http.post(
      '/food/cat/add',
      params
    )
  }


/**
 * 编辑菜品分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function EditFoodCat (params) {
    return http.post(
      '/food/cat/edit',
      params
    )
  }

 /**
 * 修改菜品分类状态
 *
 * @export
 * @param {any} params
 * @returns
 */
export function UpdateFoodCat (params) {
    return http.post(
      '/food/cat/update',
      params
    )
  }

 /**
 * 删除菜品分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function DelFoodCat (params) {
    return http.post(
      '/food/cat/del',
      params
    )
  }
