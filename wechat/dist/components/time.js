'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cart = function (_wepy$component) {
  _inherits(cart, _wepy$component);

  function cart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cart.__proto__ || Object.getPrototypeOf(cart)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      flag: {
        type: String,
        default: false,
        twoWay: true
      }
    }, _this.data = {
      list: ['立即送出', '19:00', '20:00', '21:00'],
      currentTime: '立即送出'
    }, _this.computed = {}, _this.methods = {
      choose: function choose(time) {
        console.log(time);
        this.currentTime = time;
        console.log(this.currentTime);
      },
      submitTime: function submitTime() {
        console.log(this.currentTime);
        this.flag = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return cart;
}(_wepy2.default.component);

exports.default = cart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUuanMiXSwibmFtZXMiOlsiY2FydCIsInByb3BzIiwiZmxhZyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidHdvV2F5IiwiZGF0YSIsImxpc3QiLCJjdXJyZW50VGltZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNob29zZSIsInRpbWUiLCJjb25zb2xlIiwibG9nIiwic3VibWl0VGltZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVMsS0FGTDtBQUdKQyxnQkFBUTtBQUhKO0FBREEsSyxRQVFSQyxJLEdBQU87QUFDTEMsWUFBSyxDQUFDLE1BQUQsRUFBUSxPQUFSLEVBQWdCLE9BQWhCLEVBQXdCLE9BQXhCLENBREE7QUFFTEMsbUJBQVk7QUFGUCxLLFFBS1BDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxJQURDLEVBQ0k7QUFDVkMsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLGFBQUtKLFdBQUwsR0FBbUJJLElBQW5CO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksS0FBS04sV0FBakI7QUFDRCxPQUxPO0FBTVJPLGdCQU5RLHdCQU1JO0FBQ1ZGLGdCQUFRQyxHQUFSLENBQVksS0FBS04sV0FBakI7QUFDQSxhQUFLUCxJQUFMLEdBQVksS0FBWjtBQUNEO0FBVE8sSzs7OztFQWxCc0JlLGVBQUtDLFM7O2tCQUFsQmxCLEkiLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhcnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBmbGFnOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbGlzdDpbJ+eri+WNs+mAgeWHuicsJzE5OjAwJywnMjA6MDAnLCcyMTowMCddLFxuICAgICAgY3VycmVudFRpbWU6J+eri+WNs+mAgeWHuidcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjaG9vc2UodGltZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpbWUpXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aW1lIDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VGltZSlcbiAgICAgIH0sXG4gICAgICBzdWJtaXRUaW1lKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFRpbWUpXG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfTtcblxuXG4gIH1cbiJdfQ==