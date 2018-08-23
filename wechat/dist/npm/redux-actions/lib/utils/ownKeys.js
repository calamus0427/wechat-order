'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ownKeys;

var _isMap = require('./isMap.js');

var _isMap2 = _interopRequireDefault(_isMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object) {
  if ((0, _isMap2.default)(object)) {
    return Array.from(object.keys());
  }

  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    return Reflect.ownKeys(object);
  }

  var keys = Object.getOwnPropertyNames(object);

  if (typeof Object.getOwnPropertySymbols === 'function') {
    keys = keys.concat(Object.getOwnPropertySymbols(object));
  }

  return keys;
}