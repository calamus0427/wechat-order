'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.userReducer = userReducer;
exports.authSuccess = authSuccess;
var AUTH_SUCCESS = 'LOGOUT_SUCCESS'; // redux type

var initState = { // 默认仓库数据
    isAuth: false,
    name: '' // 用户名字

};

function userReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];
    // userdeux 规则
    switch (action.type) {
        case AUTH_SUCCESS:
            return _extends({}, initState, { isAuth: true }, action.payload);
        default:
            return state;
    }
}

function authSuccess(data) {
    // redux action
    return {
        type: AUTH_SUCCESS,
        payload: data
    };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIucmVkdXguanMiXSwibmFtZXMiOlsidXNlclJlZHVjZXIiLCJhdXRoU3VjY2VzcyIsIkFVVEhfU1VDQ0VTUyIsImluaXRTdGF0ZSIsImlzQXV0aCIsIm5hbWUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFRZ0JBLFcsR0FBQUEsVztRQVNBQyxXLEdBQUFBLFc7QUFqQmhCLElBQU1DLGVBQWUsZ0JBQXJCLEMsQ0FBdUM7O0FBRXZDLElBQU1DLFlBQVksRUFBRztBQUNqQkMsWUFBUSxLQURNO0FBRWRDLFVBQU0sRUFGUSxDQUVMOztBQUZLLENBQWxCOztBQU1PLFNBQVNMLFdBQVQsR0FBZ0Q7QUFBQSxRQUEzQk0sS0FBMkIsdUVBQW5CSCxTQUFtQjtBQUFBLFFBQVJJLE1BQVE7QUFBRztBQUN0RCxZQUFRQSxPQUFPQyxJQUFmO0FBQ0ksYUFBS04sWUFBTDtBQUNJLGdDQUFXQyxTQUFYLElBQXNCQyxRQUFRLElBQTlCLElBQXVDRyxPQUFPRSxPQUE5QztBQUNKO0FBQ0ksbUJBQU9ILEtBQVA7QUFKUjtBQU1IOztBQUVNLFNBQVNMLFdBQVQsQ0FBcUJTLElBQXJCLEVBQTJCO0FBQUU7QUFDaEMsV0FBTztBQUNIRixjQUFNTixZQURIO0FBRUhPLGlCQUFTQztBQUZOLEtBQVA7QUFJSCIsImZpbGUiOiJ1c2VyLnJlZHV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVVUSF9TVUNDRVNTID0gJ0xPR09VVF9TVUNDRVNTJyAgLy8gcmVkdXggdHlwZVxuIFxuY29uc3QgaW5pdFN0YXRlID0geyAgLy8g6buY6K6k5LuT5bqT5pWw5o2uXG4gICAgaXNBdXRoOiBmYWxzZSxcbiAgICBuYW1lOiAnJyAvLyDnlKjmiLflkI3lrZdcbiBcbn1cbiBcbmV4cG9ydCBmdW5jdGlvbiB1c2VyUmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7ICAvLyB1c2VyZGV1eCDop4TliJlcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQVVUSF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5pbml0U3RhdGUsIGlzQXV0aDogdHJ1ZSwgLi4uYWN0aW9uLnBheWxvYWR9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG4gXG5leHBvcnQgZnVuY3Rpb24gYXV0aFN1Y2Nlc3MoZGF0YSkgeyAvLyByZWR1eCBhY3Rpb25cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBVVRIX1NVQ0NFU1MsXG4gICAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9XG59Il19