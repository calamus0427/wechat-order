// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/main.css'
import './assets/layout.css'
import storage from './utils/storage.js'
Vue.prototype.$storage = storage;
import request from './utils/request.js'
Vue.prototype.$request = request;
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$Qs = Qs;
Vue.use(iView)
import Vuex from 'vuex'

import 'es6-promise/auto'

import ZkTable from 'vue-table-with-tree-grid'

Vue.use(ZkTable)

import store from './store/store.js'
import './utils/login.js'
import './utils/axios.js'
import './utils/utils.js'

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    storage,
    components: { App },
    template: '<App/>'
})