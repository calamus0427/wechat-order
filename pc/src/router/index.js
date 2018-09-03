import Vue from 'vue'
import Router from 'vue-router'

//欢迎页
import welcome from '../pages/welcome/welcome.vue'
//登录页
import login from '../pages/login/login.vue'
//注册页
import signin from '../pages/login/signin.vue'
//开发首页
import index from '../pages/index.vue'
//错误页面
import code404 from '../pages/error/404.vue'
//文档页面
import ducument from '../pages/document/index.vue'

//菜品管理
//分类管理
import Classification from '../pages/food/cat.vue'
// 菜品管理
import food from '../pages/food/index.vue'


// 套餐管理
import foodPackage from '../pages/food/package.vue'

//统计
import statistics from '../pages/statistics/index.vue'
import text from '../pages/text.vue'

//食堂人员管理
import user from '../pages/user/user.vue'
import userCat from '../pages/user/userCat.vue'

//食堂信息管理
import info from '../pages/user/settingInfo.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: '首页',
            redirect: 'login',
            component: index,
            children: [{
                    path: '/food',
                    name: '菜品管理',
                    component: food,
                    meta: {
                        requireAuth: true
                    }
                }, {
                    path: '/Classification',
                    name: '菜品分类管理',
                    component: Classification,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/foodPackage',
                    name: '套餐管理',
                    component: foodPackage,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/statistics',
                    name: '数据统计',
                    component: statistics,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/info',
                    name: '食堂信息管理',
                    component: info,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/user',
                    name: '食堂人员管理',
                    component: user,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/user_cat',
                    name: '人员角色管理',
                    component: userCat,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/welcome',
                    name: '欢迎',
                    component: welcome
                },
            ]
        },
        {
            path: '/text',
            name: 'text',
            component: text
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: { requireAuth: true }
        },
        {
            path: '/signin',
            name: 'signin',
            component: signin,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/ducument',
            name: 'ducument',
            component: ducument
        },
        {
            path: '/error',
            name: 'code404',
            component: code404
        },
        {
            path: "*",
            redirect: "/error"
        }
    ]
})