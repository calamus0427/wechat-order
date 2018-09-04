import http from '@/utils/http'

/**
 * 获取医院信息
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getHospitalInfo (params) {
    return http.post(
      '/get_info',
      params
    )
  }