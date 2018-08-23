/*
    路径配置
*/

var url = {
    'dev': {
        "weixinLogin":"http://yapi.demo.qunar.com/mock/16780/wexin_login",
        "foodList":"http://yapi.demo.qunar.com/mock/16780/get_food",
        "orderFood":"http://yapi.demo.qunar.com/mock/16780/order_food",
        "getUser":"http://yapi.demo.qunar.com/mock/16780/get_user",
        "getUserTag":"http://yapi.demo.qunar.com/mock/16780/get_user_tag",
        "getInfo":"http://yapi.demo.qunar.com/mock/16780/get_info",
        "getFoodTag":"http://yapi.demo.qunar.com/mock/16780/get_food_tag",
    },
    'prod': {}

}
export default url.dev