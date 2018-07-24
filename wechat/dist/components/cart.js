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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cart.__proto__ || Object.getPrototypeOf(cart)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      cart: {
        price: 39
      },
      list: [{
        name: "单点菜品",
        id: '1',
        food: [{
          'name': '酸辣鳕鱼',
          'price': 20.5
        }, {
          'name': '酸辣鳕鱼',
          'price': 20.5
        }, {
          'name': '酸辣鳕鱼',
          'price': 20.5
        }]
      }, {
        name: "套餐菜品",
        id: '2',
        food: [{
          'name': '孕妇套餐',
          'price': 20.5
        }]
      }]
    }, _this.computed = {
      limis: function limis() {
        return this.cart.price;
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return cart;
}(_wepy2.default.component);

exports.default = cart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsInByb3BzIiwiZGF0YSIsInByaWNlIiwibGlzdCIsIm5hbWUiLCJpZCIsImZvb2QiLCJjb21wdXRlZCIsImxpbWlzIiwibWV0aG9kcyIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUSxFLFFBR1JDLEksR0FBTztBQUNMRixZQUFLO0FBQ0hHLGVBQU07QUFESCxPQURBO0FBSUxDLFlBQUssQ0FBQztBQUNKQyxjQUFLLE1BREQ7QUFFSkMsWUFBRyxHQUZDO0FBR0pDLGNBQUssQ0FBQztBQUNKLGtCQUFPLE1BREg7QUFFSixtQkFBUTtBQUZKLFNBQUQsRUFHSDtBQUNBLGtCQUFPLE1BRFA7QUFFQSxtQkFBUTtBQUZSLFNBSEcsRUFNSDtBQUNBLGtCQUFPLE1BRFA7QUFFQSxtQkFBUTtBQUZSLFNBTkc7QUFIRCxPQUFELEVBYUg7QUFDQUYsY0FBSyxNQURMO0FBRUFDLFlBQUcsR0FGSDtBQUdBQyxjQUFLLENBQUM7QUFDSixrQkFBTyxNQURIO0FBRUosbUJBQVE7QUFGSixTQUFEO0FBSEwsT0FiRztBQUpBLEssUUEyQlBDLFEsR0FBVztBQUNUQyxXQURTLG1CQUNGO0FBQ0wsZUFBTyxLQUFLVCxJQUFMLENBQVVHLEtBQWpCO0FBQ0Q7QUFIUSxLLFFBTVhPLE8sR0FBVSxFOzs7O0VBckNzQkMsZUFBS0MsUzs7a0JBQWxCWixJIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjYXJ0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYXJ0OntcbiAgICAgICAgcHJpY2U6MzlcbiAgICAgIH0sXG4gICAgICBsaXN0Olt7XG4gICAgICAgIG5hbWU6XCLljZXngrnoj5zlk4FcIixcbiAgICAgICAgaWQ6JzEnLFxuICAgICAgICBmb29kOlt7XG4gICAgICAgICAgJ25hbWUnOifphbjovqPps5XpsbwnLFxuICAgICAgICAgICdwcmljZSc6MjAuNVxuICAgICAgICB9LHtcbiAgICAgICAgICAnbmFtZSc6J+mFuOi+o+mzlemxvCcsXG4gICAgICAgICAgJ3ByaWNlJzoyMC41XG4gICAgICAgIH0se1xuICAgICAgICAgICduYW1lJzon6YW46L6j6bOV6bG8JyxcbiAgICAgICAgICAncHJpY2UnOjIwLjVcbiAgICAgICAgfV1cbiAgICAgIH0se1xuICAgICAgICBuYW1lOlwi5aWX6aSQ6I+c5ZOBXCIsXG4gICAgICAgIGlkOicyJyxcbiAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICduYW1lJzon5a2V5aaH5aWX6aSQJyxcbiAgICAgICAgICAncHJpY2UnOjIwLjVcbiAgICAgICAgfV1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBsaW1pcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0LnByaWNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cblxuICB9XG4iXX0=