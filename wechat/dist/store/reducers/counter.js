'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _counter = require('./../types/counter.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _counter.INCREMENT, function (state) {
  return _extends({}, state, {
    num: state.num + 1
  });
}), _defineProperty(_handleActions, _counter.DECREMENT, function (state) {
  return _extends({}, state, {
    num: state.num - 1
  });
}), _defineProperty(_handleActions, _counter.ASYNC_INCREMENT, function (state, action) {
  return _extends({}, state, {
    asyncNum: state.asyncNum + action.payload
  });
}), _handleActions), {
  num: 0,
  asyncNum: 0
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiSU5DUkVNRU5UIiwic3RhdGUiLCJudW0iLCJERUNSRU1FTlQiLCJBU1lOQ19JTkNSRU1FTlQiLCJhY3Rpb24iLCJhc3luY051bSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztrQkFFZSx1RkFDWkEsa0JBRFksWUFDQUMsS0FEQSxFQUNPO0FBQ2xCLHNCQUNLQSxLQURMO0FBRUVDLFNBQUtELE1BQU1DLEdBQU4sR0FBWTtBQUZuQjtBQUlELENBTlksbUNBT1pDLGtCQVBZLFlBT0FGLEtBUEEsRUFPTztBQUNsQixzQkFDS0EsS0FETDtBQUVFQyxTQUFLRCxNQUFNQyxHQUFOLEdBQVk7QUFGbkI7QUFJRCxDQVpZLG1DQWFaRSx3QkFiWSxZQWFNSCxLQWJOLEVBYWFJLE1BYmIsRUFhcUI7QUFDaEMsc0JBQ0tKLEtBREw7QUFFRUssY0FBVUwsTUFBTUssUUFBTixHQUFpQkQsT0FBT0U7QUFGcEM7QUFJRCxDQWxCWSxvQkFtQlo7QUFDREwsT0FBSyxDQURKO0FBRURJLFlBQVU7QUFGVCxDQW5CWSxDIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcbmltcG9ydCB7IElOQ1JFTUVOVCwgREVDUkVNRU5ULCBBU1lOQ19JTkNSRU1FTlQgfSBmcm9tICcuLi90eXBlcy9jb3VudGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcbiAgW0lOQ1JFTUVOVF0gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbnVtOiBzdGF0ZS5udW0gKyAxXG4gICAgfVxuICB9LFxuICBbREVDUkVNRU5UXSAoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBudW06IHN0YXRlLm51bSAtIDFcbiAgICB9XG4gIH0sXG4gIFtBU1lOQ19JTkNSRU1FTlRdIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgYXN5bmNOdW06IHN0YXRlLmFzeW5jTnVtICsgYWN0aW9uLnBheWxvYWRcbiAgICB9XG4gIH1cbn0sIHtcbiAgbnVtOiAwLFxuICBhc3luY051bTogMFxufSkiXX0=