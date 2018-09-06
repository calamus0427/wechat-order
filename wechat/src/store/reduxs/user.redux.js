const AUTH_SUCCESS = 'LOGOUT_SUCCESS'  // redux type
 
const initState = {  // 默认仓库数据
    isAuth: false,
    name: '' // 用户名字
 
}
 
export function userReducer(state = initState, action) {  // userdeux 规则
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...initState, isAuth: true, ...action.payload}
        default:
            return state
    }
}
 
export function authSuccess(data) { // redux action
    return {
        type: AUTH_SUCCESS,
        payload: data
    }
}