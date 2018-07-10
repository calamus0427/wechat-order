'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPlainObject = require('./../../../lodash/isPlainObject.js');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _flattenWhenNode = require('./flattenWhenNode.js');

var _flattenWhenNode2 = _interopRequireDefault(_flattenWhenNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _flattenWhenNode2.default)(_isPlainObject2.default);