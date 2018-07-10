'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineActions;

var _isString = require('./../../lodash/isString.js');

var _isString2 = _interopRequireDefault(_isString);

var _isFunction = require('./../../lodash/isFunction.js');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isEmpty = require('./../../lodash/isEmpty.js');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _toString = require('./../../lodash/toString.js');

var _toString2 = _interopRequireDefault(_toString);

var _isSymbol = require('./../../lodash/isSymbol.js');

var _isSymbol2 = _interopRequireDefault(_isSymbol);

var _invariant = require('./../../invariant/browser.js');

var _invariant2 = _interopRequireDefault(_invariant);

var _constants = require('./constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidActionType(type) {
  return (0, _isString2.default)(type) || (0, _isFunction2.default)(type) || (0, _isSymbol2.default)(type);
}

function isValidActionTypes(types) {
  if ((0, _isEmpty2.default)(types)) {
    return false;
  }
  return types.every(isValidActionType);
}

function combineActions() {
  for (var _len = arguments.length, actionsTypes = Array(_len), _key = 0; _key < _len; _key++) {
    actionsTypes[_key] = arguments[_key];
  }

  (0, _invariant2.default)(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(_toString2.default).join(_constants.ACTION_TYPE_DELIMITER);
  return { toString: function toString() {
      return combinedActionType;
    } };
}