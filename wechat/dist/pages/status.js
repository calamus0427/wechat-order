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
      console.log("11", options);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy5qcyJdLCJuYW1lcyI6WyJhZGRyZXNzIiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibWVzc2FnZSIsInRpbWUiLCJzdW1QcmljZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwiY2hvb3NlZFRpbWUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVMsRSxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkgsTSxHQUFTLEUsUUFFVEksSSxHQUFPO0FBQ0hDLGVBQVEsRUFETDtBQUVIQyxZQUFLLEVBRkY7QUFHSEMsZ0JBQVM7QUFITixLLFFBTVBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OzsyQkFJRkMsTyxFQUFTO0FBQ2RDLGNBQVFDLEdBQVIsQ0FBWSxJQUFaLEVBQWlCRixPQUFqQjtBQUNBLFdBQUtOLE9BQUwsR0FBZVMsS0FBS0MsS0FBTCxDQUFXSixRQUFRTixPQUFuQixDQUFmO0FBQ0EsV0FBS0MsSUFBTCxHQUFZUSxLQUFLQyxLQUFMLENBQVdKLFFBQVFLLFdBQW5CLENBQVo7QUFDQSxXQUFLVCxRQUFMLEdBQWdCTyxLQUFLQyxLQUFMLENBQVdKLFFBQVFKLFFBQW5CLENBQWhCO0FBQ0Q7OzsyQkFFSztBQUNKVSxTQUFHQyxVQUFILENBQWM7QUFDVkMsYUFBSztBQURLLE9BQWQ7QUFHRDs7OztFQXhDa0NDLGVBQUtDLEk7O2tCQUFyQnRCLE8iLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWRkcmVzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW11cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i5Y2V5oiQ5YqfJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIG1lc3NhZ2U6e30sXG4gICAgICAgIHRpbWU6JycsXG4gICAgICAgIHN1bVByaWNlOicnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiMTFcIixvcHRpb25zKVxuICAgICAgdGhpcy5tZXNzYWdlID0gSlNPTi5wYXJzZShvcHRpb25zLm1lc3NhZ2UpO1xuICAgICAgdGhpcy50aW1lID0gSlNPTi5wYXJzZShvcHRpb25zLmNob29zZWRUaW1lKTtcbiAgICAgIHRoaXMuc3VtUHJpY2UgPSBKU09OLnBhcnNlKG9wdGlvbnMuc3VtUHJpY2UpO1xuICAgIH1cblxuICAgIGJhY2soKXtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogXCIvcGFnZXMvb3JkZXJcIlxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==