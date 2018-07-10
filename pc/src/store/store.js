import Vue from 'vue'
import Vuex from 'vuex'
import storage from '../utils/storage.js'
Vue.use(Vuex)
const login = {
  state: {
    'user':{
      'name' : storage.getStorage('user') == null ? ''  : storage.getStorage('user').username,
      'company' : storage.getStorage('user') == null ? ''  : storage.getStorage('user').company,
      'email' : storage.getStorage('user') == null ? ''  : storage.getStorage('user').email,
      'phone' : storage.getStorage('user') == null ? ''  : storage.getStorage('user').phone,
      'realName' : storage.getStorage('user') == null ? ''  : storage.getStorage('user').realName,
      'avatar' : storage.getStorage('user') == null ? ''  : storage.getStorage('user').avatar,
      'auth':[],
      'status':'',
      'uid':'',
      'token' : storage.getStorage('user') == null ? ''  : storage.getStorage('user').token
    }
  },
  mutations: {
    login(state, payload) {
      state.user = payload
    },
    logout(state) {
      state.user = undefined
    }
  },
  actions: {
    login(context, payload) {
      context.commit('login', payload)
    },
    logout(context) {
      context.commit('logout')
    }
  },
  getters: {

  }
}

const route = {
  state: {
    'appId':'1'
  },
  mutations: {

  },
  actions: {

  }
}


const store = new Vuex.Store({
  modules: {
    login : login,
    route : route
  }
})

export default store
