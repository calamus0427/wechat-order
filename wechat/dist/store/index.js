'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configStore;

var _redux = require('./../npm/redux/lib/index.js');

var _reduxPromise = require('./../npm/redux-promise/lib/index.js');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require('./reducers/index.js');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configStore() {
  var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxPromise2.default));
  return store;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbmZpZ1N0b3JlIiwic3RvcmUiLCJyb290UmVkdWNlciIsInByb21pc2VNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFJd0JBLFc7O0FBSnhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLFdBQVQsR0FBd0I7QUFDckMsTUFBTUMsUUFBUSx3QkFBWUMsa0JBQVosRUFBeUIsNEJBQWdCQyxzQkFBaEIsQ0FBekIsQ0FBZDtBQUNBLFNBQU9GLEtBQVA7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBwcm9taXNlTWlkZGxld2FyZSBmcm9tICdyZWR1eC1wcm9taXNlJ1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ1N0b3JlICgpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHByb21pc2VNaWRkbGV3YXJlKSlcbiAgcmV0dXJuIHN0b3JlXG59Il19