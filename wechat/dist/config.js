'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
// var host = 'http://127.0.0.1:3000';
var host = 'https://wxapp.thunf.cn';

// 下面的地址配合云端 Demo 工作
var service = exports.service = {
  // 列表接口 GET
  list: host + '/bookmall/list',

  // 筛选页接口 GET 
  tags: host + '/bookmall/tags',

  // 假装有收藏接口 POST
  collect: host + '/bookmall/list',

  // 主域
  host: host
};

exports.default = {
  service: service
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJob3N0Iiwic2VydmljZSIsImxpc3QiLCJ0YWdzIiwiY29sbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQSxJQUFJQSxPQUFPLHdCQUFYOztBQUVBO0FBQ08sSUFBTUMsNEJBQVU7QUFDckI7QUFDQUMsUUFBU0YsSUFBVCxtQkFGcUI7O0FBSXJCO0FBQ0FHLFFBQVNILElBQVQsbUJBTHFCOztBQU9yQjtBQUNBSSxXQUFZSixJQUFaLG1CQVJxQjs7QUFVckI7QUFDQUE7QUFYcUIsQ0FBaEI7O2tCQWNRO0FBQ2JDO0FBRGEsQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgICAgICAg5bCP56iL5bqP6YWN572u5paH5Lu2XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vLyDln5/lkI1cbi8vIHZhciBob3N0ID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCc7XG52YXIgaG9zdCA9ICdodHRwczovL3d4YXBwLnRodW5mLmNuJztcblxuLy8g5LiL6Z2i55qE5Zyw5Z2A6YWN5ZCI5LqR56uvIERlbW8g5bel5L2cXG5leHBvcnQgY29uc3Qgc2VydmljZSA9IHtcbiAgLy8g5YiX6KGo5o6l5Y+jIEdFVFxuICBsaXN0OiBgJHtob3N0fS9ib29rbWFsbC9saXN0YCxcblxuICAvLyDnrZvpgInpobXmjqXlj6MgR0VUIFxuICB0YWdzOiBgJHtob3N0fS9ib29rbWFsbC90YWdzYCxcblxuICAvLyDlgYfoo4XmnInmlLbol4/mjqXlj6MgUE9TVFxuICBjb2xsZWN0OiBgJHtob3N0fS9ib29rbWFsbC9saXN0YCxcblxuICAvLyDkuLvln59cbiAgaG9zdFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNlcnZpY2Vcbn0iXX0=