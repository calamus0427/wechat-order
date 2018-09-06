'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var address = function (_wepy$page) {
  _inherits(address, _wepy$page);

  function address() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, address);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = address.__proto__ || Object.getPrototypeOf(address)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [], _this.config = {
      navigationBarTitleText: '订单成功'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      message: {},
      time: '',
      sumPrice: ''
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(address, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.message = JSON.parse(options.message);
      this.time = JSON.parse(options.choosedTime);
      this.sumPrice = JSON.parse(options.sumPrice);
    }
  }, {
    key: 'back',
    value: function back() {
      wx.navigateTo({
        url: "/pages/order"
      });
    }
  }]);

  return address;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(address , 'pages/status'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy5qcyJdLCJuYW1lcyI6WyJhZGRyZXNzIiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibWVzc2FnZSIsInRpbWUiLCJzdW1QcmljZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIm9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJjaG9vc2VkVGltZSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUyxFLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliSCxNLEdBQVMsRSxRQUVUSSxJLEdBQU87QUFDSEMsZUFBUSxFQURMO0FBRUhDLFlBQUssRUFGRjtBQUdIQyxnQkFBUztBQUhOLEssUUFNUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzJCQUlGQyxPLEVBQVM7QUFDZCxXQUFLTixPQUFMLEdBQWVPLEtBQUtDLEtBQUwsQ0FBV0YsUUFBUU4sT0FBbkIsQ0FBZjtBQUNBLFdBQUtDLElBQUwsR0FBWU0sS0FBS0MsS0FBTCxDQUFXRixRQUFRRyxXQUFuQixDQUFaO0FBQ0EsV0FBS1AsUUFBTCxHQUFnQkssS0FBS0MsS0FBTCxDQUFXRixRQUFRSixRQUFuQixDQUFoQjtBQUNEOzs7MkJBRUs7QUFDSlEsU0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGFBQUs7QUFESyxPQUFkO0FBR0Q7Ozs7RUF2Q2tDQyxlQUFLQyxJOztrQkFBckJwQixPIiwiZmlsZSI6InN0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGFkZHJlc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtdXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuouWNleaIkOWKnydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgICBtZXNzYWdlOnt9LFxuICAgICAgICB0aW1lOicnLFxuICAgICAgICBzdW1QcmljZTonJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBKU09OLnBhcnNlKG9wdGlvbnMubWVzc2FnZSk7XG4gICAgICB0aGlzLnRpbWUgPSBKU09OLnBhcnNlKG9wdGlvbnMuY2hvb3NlZFRpbWUpO1xuICAgICAgdGhpcy5zdW1QcmljZSA9IEpTT04ucGFyc2Uob3B0aW9ucy5zdW1QcmljZSk7XG4gICAgfVxuXG4gICAgYmFjaygpe1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBcIi9wYWdlcy9vcmRlclwiXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19