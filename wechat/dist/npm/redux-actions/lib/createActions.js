'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createActions;

var _identity = require('./../../lodash/identity.js');

var _identity2 = _interopRequireDefault(_identity);

var _isPlainObject = require('./../../lodash/isPlainObject.js');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isArray = require('./../../lodash/isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _last = require('./../../lodash/last.js');

var _last2 = _interopRequireDefault(_last);

var _isString = require('./../../lodash/isString.js');

var _isString2 = _interopRequireDefault(_isString);

var _isFunction = require('./../../lodash/isFunction.js');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isNil = require('./../../lodash/isNil.js');

var _isNil2 = _interopRequireDefault(_isNil);

var _invariant = require('./../../invariant/browser.js');

var _invariant2 = _interopRequireDefault(_invariant);

var _camelCase = require('./utils/camelCase.js');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _arrayToObject = require('./utils/arrayToObject.js');

var _arrayToObject2 = _interopRequireDefault(_arrayToObject);

var _flattenActionMap = require('./utils/flattenActionMap.js');

var _flattenActionMap2 = _interopRequireDefault(_flattenActionMap);

var _unflattenActionCreators = require('./utils/unflattenActionCreators.js');

var _unflattenActionCreators2 = _interopRequireDefault(_unflattenActionCreators);

var _createAction = require('./createAction.js');

var _createAction2 = _interopRequireDefault(_createAction);

var _constants = require('./constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createActions(actionMap) {
  for (var _len = arguments.length, identityActions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    identityActions[_key - 1] = arguments[_key];
  }

  var options = (0, _isPlainObject2.default)((0, _last2.default)(identityActions)) ? identityActions.pop() : {};
  (0, _invariant2.default)(identityActions.every(_isString2.default) && ((0, _isString2.default)(actionMap) || (0, _isPlainObject2.default)(actionMap)), 'Expected optional object followed by string action types');
  if ((0, _isString2.default)(actionMap)) {
    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
  }
  return _extends({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));
}

function actionCreatorsFromActionMap(actionMap, options) {
  var flatActionMap = (0, _flattenActionMap2.default)(actionMap, options);
  var flatActionCreators = actionMapToActionCreators(flatActionMap);
  return (0, _unflattenActionCreators2.default)(flatActionCreators, options);
}

function actionMapToActionCreators(actionMap) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      prefix = _ref.prefix,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === undefined ? _constants.DEFAULT_NAMESPACE : _ref$namespace;

  function isValidActionMapValue(actionMapValue) {
    if ((0, _isFunction2.default)(actionMapValue) || (0, _isNil2.default)(actionMapValue)) {
      return true;
    }

    if ((0, _isArray2.default)(actionMapValue)) {
      var _actionMapValue = _slicedToArray(actionMapValue, 2),
          _actionMapValue$ = _actionMapValue[0],
          payload = _actionMapValue$ === undefined ? _identity2.default : _actionMapValue$,
          meta = _actionMapValue[1];

      return (0, _isFunction2.default)(payload) && (0, _isFunction2.default)(meta);
    }

    return false;
  }

  return (0, _arrayToObject2.default)(Object.keys(actionMap), function (partialActionCreators, type) {
    var actionMapValue = actionMap[type];
    (0, _invariant2.default)(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ('functions for ' + type));
    var prefixedType = prefix ? '' + prefix + namespace + type : type;
    var actionCreator = (0, _isArray2.default)(actionMapValue) ? _createAction2.default.apply(undefined, [prefixedType].concat(_toConsumableArray(actionMapValue))) : (0, _createAction2.default)(prefixedType, actionMapValue);
    return _extends({}, partialActionCreators, _defineProperty({}, type, actionCreator));
  });
}

function actionCreatorsFromIdentityActions(identityActions, options) {
  var actionMap = (0, _arrayToObject2.default)(identityActions, function (partialActionMap, type) {
    return _extends({}, partialActionMap, _defineProperty({}, type, _identity2.default));
  });
  var actionCreators = actionMapToActionCreators(actionMap, options);
  return (0, _arrayToObject2.default)(Object.keys(actionCreators), function (partialActionCreators, type) {
    return _extends({}, partialActionCreators, _defineProperty({}, (0, _camelCase2.default)(type), actionCreators[type]));
  });
}