'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('./../../lodash.curry/index.js');

var _lodash2 = _interopRequireDefault(_lodash);

var _createAction = require('./createAction.js');

var _createAction2 = _interopRequireDefault(_createAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (type, payloadCreator) {
  return (0, _lodash2.default)((0, _createAction2.default)(type, payloadCreator), payloadCreator.length);
};