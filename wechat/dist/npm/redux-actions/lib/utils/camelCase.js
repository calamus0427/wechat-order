'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('./../../../lodash.camelcase/index.js');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var namespacer = '/';

exports.default = function (type) {
  return type.indexOf(namespacer) === -1 ? (0, _lodash2.default)(type) : type.split(namespacer).map(function (part) {
    return (0, _lodash2.default)(part);
  }).join(namespacer);
};