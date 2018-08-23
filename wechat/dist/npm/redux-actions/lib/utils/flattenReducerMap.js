'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPlainObject = require('./isPlainObject.js');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isMap = require('./isMap.js');

var _isMap2 = _interopRequireDefault(_isMap);

var _hasGeneratorInterface = require('./hasGeneratorInterface.js');

var _hasGeneratorInterface2 = _interopRequireDefault(_hasGeneratorInterface);

var _flattenWhenNode = require('./flattenWhenNode.js');

var _flattenWhenNode2 = _interopRequireDefault(_flattenWhenNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _flattenWhenNode2.default)(function (node) {
  return ((0, _isPlainObject2.default)(node) || (0, _isMap2.default)(node)) && !(0, _hasGeneratorInterface2.default)(node);
});