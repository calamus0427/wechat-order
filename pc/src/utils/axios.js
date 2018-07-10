import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import storage from '../utils/storage.js'
import router from '../router/index'
import store from '../store/store.js'
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = "http://66.112.214.33"
// axios.defaults.baseURL = "";
// axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// axios.defaults.transformRequest = [function(param) {
//   let ret = "";
//       for (let it in param) {
//         ret +=
//           encodeURIComponent(it) + "=" + encodeURIComponent(param[it]) + "&";
//       }
//       ret = ret.slice(0, ret.length - 1);
//       return ret;
// }];


// 请求拦截器
// http request 请求拦截器，有token值则配置上token值
axios.interceptors.request.use(
    config => {
        var token = storage.getStorage('user') == null ? '' : storage.getStorage('user').token
        if (token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            config.headers.Authorization = token;
            // config.headers.token = token;
            // console.log("re", config.method == "OPTIONS")
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 服务器响应拦截器，这里拦截401（未登录）错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    store.dispatch('logout').then(() => {
                        router.push('/login');
                        storage.removeStorage("user")
                    })
                    break;
                case 403:
                    store.dispatch('logout').then(() => {
                        router.push('/login');
                        storage.removeStorage("user")
                    })
                    break;
            }
        }
        return Promise.reject(error.response)
    });
export default axios;