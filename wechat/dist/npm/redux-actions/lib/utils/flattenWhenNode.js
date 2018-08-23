'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./../constants.js');

var _isMap = require('./isMap.js');

var _isMap2 = _interopRequireDefault(_isMap);

var _ownKeys = require('./ownKeys.js');

var _ownKeys2 = _interopRequireDefault(_ownKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function get(key, x) {
  return (0, _isMap2.default)(x) ? x.get(key) : x[key];
}

exports.default = function (predicate) {
  return function flatten(map) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === undefined ? _constants.DEFAULT_NAMESPACE : _ref$namespace,
        prefix = _ref.prefix;

    var partialFlatMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var partialFlatActionType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    function connectNamespace(type) {
      var _ref2;

      if (!partialFlatActionType) return type;
      var types = type.toString().split(_constants.ACTION_TYPE_DELIMITER);
      var partials = partialFlatActionType.split(_constants.ACTION_TYPE_DELIMITER);
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(partials.map(function (p) {
        return types.map(function (t) {
          return '' + p + namespace + t;
        });
      }))).join(_constants.ACTION_TYPE_DELIMITER);
    }

    function connectPrefix(type) {
      if (partialFlatActionType || !prefix) {
        return type;
      }

      return '' + prefix + namespace + type;
    }

    (0, _ownKeys2.default)(map).forEach(function (type) {
      var nextNamespace = connectPrefix(connectNamespace(type));
      var mapValue = get(type, map);

      if (predicate(mapValue)) {
        flatten(mapValue, { namespace: namespace, prefix: prefix }, partialFlatMap, nextNamespace);
      } else {
        partialFlatMap[nextNamespace] = mapValue;
      }
    });

    return partialFlatMap;
  };
};