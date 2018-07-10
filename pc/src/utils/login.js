import Vue from 'vue'
import router from '../router/index.js'
import storage from './storage.js'
import Vuex from 'vuex'
import store from '../store/store.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

//登录token验证
// router.beforeEach((to, from, next) => {
// let token = storage.getStorage('user') == null
//     ? ''
//     : storage.getStorage('user').token;
//   if(to.meta.requireAuth){
//     if (!Boolean(token)) {
//         if (to.path == '/login' || to.path == '/'){
//           next()
//         }else{
//           next({path: '/'})
//         }
//     }else{
//         next()
//       }
//   }else{
//     next()
//   }
// })