import axios from 'axios'
// import { getToken } from './auth'
// import store from '@/store'
// import { Message, MessageBox } from 'element-ui'
import { BASE_PER_FIX_URL } from './request.js'
// Per fix url
const basePerfix = BASE_PER_FIX_URL

// request interceptors
// axios.interceptors.request.use(config => {
//   // 配置全局请求token
//   if (store.getters.token) {
//     config.headers['Authorization'] = store.getters.token
//   }
//   return config
// }, error => Promise.reject(error))

// response interceptors
// axios.interceptors.response.use(response => {
//   // do sth befor response

//   return response
// }, error => {
//   if (error.response) {
//     switch (error.response.status) {
//       // 401 code
//       case 401:
//         logoutWithResponse()
//     }
//   }
//   return Promise.reject(error.response.data)
// })

//
// function logoutWithResponse () {
//   MessageBox.alert('您的登录已过期，点击确认后重新登录.', '提醒', {
//     confirmButtonText: '确定',
//     callback: action => {
//       commonLogout(store.getters.token).then(res => {
//         store.dispatch('userLogout').then(() => {
//           location.reload()
//         })
//       })
//     }
//   })
// }

// check response code
function checkResponseStatus (response) {
  // if (response.status === 200 || response.status === 304) {
  //   return response.data
  // }
  return response
}
function cactchError (error) {
  if (error.status === 400 || error.status === 404 || error.status === 500) {
    return Message({
      message: `服务器访问出错. Error:${error.error},Message:${error.message}`,
      type: 'error',
      duration: 5000
    })
  }
}

// check server response
function checkResponseCode (response) {
  // const header = response.head
  // if (header && header.success === 'true') {
  //   return response.data || {error: false}
  // } else {
  //   if (header.code === '401') {
  //     logoutWithResponse()
  //   } else {
  //     Message({
  //       message: header.msg,
  //       type: 'error',
  //       duration: 2000
  //     })
  //     return { error: true }
  //   }
  // }
  return response.data || {error: false}
}

/*
 * 这里定义的接口都应该符合RESTFul规范
*/
export default {
  // normal method
  get (url, params) {
    if (!url) return
    return axios.get(basePerfix + url, params)
      .then(checkResponseStatus)
      .then(checkResponseCode)
      .catch(cactchError)
  },
  // post request
  post (url, data) {
    if (!url) return
    return axios.post(basePerfix + url, data)
      .then(checkResponseStatus)
      .then(checkResponseCode)
      .catch(cactchError)
  },
  // update request for All data
  put (url, data) {

  },
  // update request path data
  patch (url, data) {

  },
  // delete request
  delete (url, data) {

  },
  // head
  head (url, data) {

  }

}
