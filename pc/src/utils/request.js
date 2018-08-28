/*
    路径配置
*/

var url = {
    'beta': {
        "weixinLogin":"http://localhost:8080/wexin_login",
        "getFood":"http://localhost:8080/food/get_food",
        "orderFood":"http://localhost:8080/food/order_food",
        "getUser":"http://localhost:8080/user/get_users",
        "getUserCat":"http://localhost:8080/user/get_user_cat",
        "getInfo":"http://localhost:8080/get_info",
        "getFoodCat":"http://localhost:8080/food/get_food_cat",
    },
    'dev': {
        "weixinLogin":"http://yapi.demo.qunar.com/mock/16780/wexin_login",
        "foodList":"http://yapi.demo.qunar.com/mock/16780/get_food",
        "orderFood":"http://yapi.demo.qunar.com/mock/16780/order_food",
        "getUser":"http://yapi.demo.qunar.com/mock/16780/get_user",
        "getUserTag":"http://yapi.demo.qunar.com/mock/16780/get_user_tag",
        "getInfo":"http://yapi.demo.qunar.com/mock/16780/get_info",
        "getFoodTag":"http://yapi.demo.qunar.com/mock/16780/get_food_tag",
    }

}
export default url.beta