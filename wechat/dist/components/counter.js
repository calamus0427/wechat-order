'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _counter = require('./../store/types/counter.js');

var _actions = require('./../store/actions/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = (_dec = (0, _wepyRedux.connect)({
  stateNum: function stateNum(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  }
}, {
  incNum: _counter.INCREMENT,
  decNum: _counter.DECREMENT,
  asyncInc: _actions.asyncInc
}), _dec(_class = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component)) || _class);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.props = {
    num: {
      type: [Number, String],
      coerce: function coerce(v) {
        return +v;
      },
      default: 50
    }
  };
  this.data = {};
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.watch = {
    num: function num(curVal, oldVal) {
      console.log('\u65E7\u503C\uFF1A' + oldVal + '\uFF0C\u65B0\u503C\uFF1A' + curVal);
    }
  };
  this.methods = {
    plus: function plus() {
      this.num = this.num + 1;
      console.log(this.$name + ' plus tap');

      this.$emit('index-emit', 1, 2, 3);
    },
    minus: function minus() {
      this.num = this.num - 1;
      console.log(this.$name + ' minus tap');
    }
  };
};

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsInN0YXRlTnVtIiwic3RhdGUiLCJjb3VudGVyIiwibnVtIiwiYXN5bmNOdW0iLCJpbmNOdW0iLCJJTkNSRU1FTlQiLCJkZWNOdW0iLCJERUNSRU1FTlQiLCJhc3luY0luYyIsIndlcHkiLCJjb21wb25lbnQiLCJwcm9wcyIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsImRhdGEiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwid2F0Y2giLCJjdXJWYWwiLCJvbGRWYWwiLCJtZXRob2RzIiwicGx1cyIsIiRlbWl0IiwibWludXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFlcUJBLE8sV0FicEIsd0JBQVE7QUFDUEMsVUFETyxvQkFDR0MsS0FESCxFQUNVO0FBQ2YsV0FBT0EsTUFBTUMsT0FBTixDQUFjQyxHQUFyQjtBQUNELEdBSE07QUFJUEMsVUFKTyxvQkFJR0gsS0FKSCxFQUlVO0FBQ2YsV0FBT0EsTUFBTUMsT0FBTixDQUFjRSxRQUFyQjtBQUNEO0FBTk0sQ0FBUixFQU9FO0FBQ0RDLFVBQVFDLGtCQURQO0FBRURDLFVBQVFDLGtCQUZQO0FBR0RDO0FBSEMsQ0FQRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFhb0NDLGVBQUtDLFM7Ozs7O09BQ3hDQyxLLEdBQVE7QUFDTlQsU0FBSztBQUNIVSxZQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLGNBQVEsZ0JBQVVDLENBQVYsRUFBYTtBQUNuQixlQUFPLENBQUNBLENBQVI7QUFDRCxPQUpFO0FBS0hDLGVBQVM7QUFMTjtBQURDLEc7T0FVUkMsSSxHQUFPLEU7T0FFUEMsTSxHQUFTO0FBQ1AsdUJBQW1CLDBCQUFhO0FBQUE7O0FBQzlCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBQyxjQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSixPQUFPSyxJQUE1QyxjQUF5REwsT0FBT00sTUFBUCxDQUFjRixLQUF2RTtBQUNEO0FBSk0sRztPQU9URyxLLEdBQVE7QUFDTnpCLE9BRE0sZUFDRDBCLE1BREMsRUFDT0MsTUFEUCxFQUNlO0FBQ25CUCxjQUFRQyxHQUFSLHdCQUFrQk0sTUFBbEIsZ0NBQStCRCxNQUEvQjtBQUNEO0FBSEssRztPQU1SRSxPLEdBQVU7QUFDUkMsUUFEUSxrQkFDQTtBQUNOLFdBQUs3QixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FvQixjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLFdBQXpCOztBQUVBLFdBQUtRLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0QsS0FOTztBQU9SQyxTQVBRLG1CQU9DO0FBQ1AsV0FBSy9CLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7QUFDQW9CLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsWUFBekI7QUFDRDtBQVZPLEc7OztrQkExQlMxQixPIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCB7IElOQ1JFTUVOVCwgREVDUkVNRU5UIH0gZnJvbSAnLi4vc3RvcmUvdHlwZXMvY291bnRlcidcbiAgaW1wb3J0IHsgYXN5bmNJbmMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJ1xuXG4gIEBjb25uZWN0KHtcbiAgICBzdGF0ZU51bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bVxuICAgIH0sXG4gICAgYXN5bmNOdW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5hc3luY051bVxuICAgIH1cbiAgfSwge1xuICAgIGluY051bTogSU5DUkVNRU5ULFxuICAgIGRlY051bTogREVDUkVNRU5ULFxuICAgIGFzeW5jSW5jXG4gIH0pXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIG51bToge1xuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICBjb2VyY2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuICt2XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6IDUwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgICAgJ2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgbnVtIChjdXJWYWwsIG9sZFZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhg5pen5YC877yaJHtvbGRWYWx977yM5paw5YC877yaJHtjdXJWYWx9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgcGx1cyAoKSB7XG4gICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gKyAxXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHBsdXMgdGFwJylcblxuICAgICAgICB0aGlzLiRlbWl0KCdpbmRleC1lbWl0JywgMSwgMiwgMylcbiAgICAgIH0sXG4gICAgICBtaW51cyAoKSB7XG4gICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gLSAxXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIG1pbnVzIHRhcCcpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=