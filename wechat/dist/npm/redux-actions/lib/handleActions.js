'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleActions;

var _isPlainObject = require('./../../lodash/isPlainObject.js');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isMap = require('./../../lodash/isMap.js');

var _isMap2 = _interopRequireDefault(_isMap);

var _reduceReducers = require('./../../reduce-reducers/dist/index.js');

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

var _invariant = require('./../../invariant/browser.js');

var _invariant2 = _interopRequireDefault(_invariant);

var _handleAction = require('./handleAction.js');

var _handleAction2 = _interopRequireDefault(_handleAction);

var _ownKeys = require('./utils/ownKeys.js');

var _ownKeys2 = _interopRequireDefault(_ownKeys);

var _flattenReducerMap = require('./utils/flattenReducerMap.js');

var _flattenReducerMap2 = _interopRequireDefault(_flattenReducerMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function get(key, x) {
  return (0, _isMap2.default)(x) ? x.get(key) : x[key];
}

function handleActions(handlers, defaultState) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  (0, _invariant2.default)((0, _isPlainObject2.default)(handlers) || (0, _isMap2.default)(handlers), 'Expected handlers to be a plain object.');
  var flattenedReducerMap = (0, _flattenReducerMap2.default)(handlers, options);
  var reducers = (0, _ownKeys2.default)(flattenedReducerMap).map(function (type) {
    return (0, _handleAction2.default)(type, get(type, flattenedReducerMap), defaultState);
  });
  var reducer = _reduceReducers2.default.apply(undefined, _toConsumableArray(reducers));
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];
    return reducer(state, action);
  };
}