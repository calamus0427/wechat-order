'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = require('./../../../lodash/camelCase.js');

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var namespacer = '/';

exports.default = function (type) {
  return type.indexOf(namespacer) === -1 ? (0, _camelCase2.default)(type) : type.split(namespacer).map(_camelCase2.default).join(namespacer);
};