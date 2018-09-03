import http from '@/utils/http'

/**********菜品相关接口*********/

/**
 * 下单
 *
 * @export
 * @param {any} params
 * @returns
 */
export function orderFood () {
    return http.post(
      '/order_food'
    )
  }


 /**
 * 获取全部菜品列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getFoodList () {
    return http.post(
      '/food/get_food'
    )
  }


 /**
 * 获取全部菜品分类列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getFoodCatList () {
    return http.post(
      '/food/get_food_cat'
    )
  }


 /**
 * 编辑菜品
 *
 * @export
 * @param {any} params
 * @returns
 */
export function EditFood () {
    return http.post(
      '/food/edit'
    )
  }

 /**
 * 编辑菜品状态
 *
 * @export
 * @param {any} params
 * @returns
 */
export function UpdateFood () {
    return http.post(
      '/food/update'
    )
  }


/**
 * 新增菜品
 *
 * @export
 * @param {any} params
 * @returns
 */
export function AddFood () {
    return http.post(
      '/food/add'
    )
  }


 /**
 * 删除菜品
 *
 * @export
 * @param {any} params
 * @returns
 */
export function DelFood () {
    return http.post(
      '/food/del'
    )
  }


/**
 * 新增菜品分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function AddFoodCat () {
    return http.post(
      '/food/cat/add'
    )
  }


/**
 * 编辑菜品分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function EditFoodCat () {
    return http.post(
      '/food/cat/edit'
    )
  }

 /**
 * 修改菜品分类状态
 *
 * @export
 * @param {any} params
 * @returns
 */
export function UpdateFoodCat () {
    return http.post(
      '/food/cat/update'
    )
  }

 /**
 * 删除菜品分类
 *
 * @export
 * @param {any} params
 * @returns
 */
export function DelFoodCat () {
    return http.post(
      '/food/cat/del'
    )
  }
