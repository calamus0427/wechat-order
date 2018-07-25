'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      colorList: ['red', 'green'],
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

  _createClass(cart, [{
    key: 'nLoad',
    value: function nLoad() {}
  }, {
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'account',
    value: function account() {
      console.log("结算");
    }
  }]);

  return cart;
}(_wepy2.default.component);

exports.default = cart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsInByb3BzIiwiZGF0YSIsInByaWNlIiwiY29sb3JMaXN0IiwibGlzdCIsIm5hbWUiLCJpZCIsImZvb2QiLCJjb21wdXRlZCIsImxpbWlzIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUSxFLFFBR1JDLEksR0FBTztBQUNMRixZQUFLO0FBQ0hHLGVBQU07QUFESCxPQURBO0FBSUxDLGlCQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FKTDtBQUtMQyxZQUFLLENBQUM7QUFDSkMsY0FBSyxNQUREO0FBRUpDLFlBQUcsR0FGQztBQUdKQyxjQUFLLENBQUM7QUFDSixrQkFBTyxNQURIO0FBRUosbUJBQVE7QUFGSixTQUFELEVBR0g7QUFDQSxrQkFBTyxNQURQO0FBRUEsbUJBQVE7QUFGUixTQUhHLEVBTUg7QUFDQSxrQkFBTyxNQURQO0FBRUEsbUJBQVE7QUFGUixTQU5HO0FBSEQsT0FBRCxFQWFIO0FBQ0FGLGNBQUssTUFETDtBQUVBQyxZQUFHLEdBRkg7QUFHQUMsY0FBSyxDQUFDO0FBQ0osa0JBQU8sTUFESDtBQUVKLG1CQUFRO0FBRkosU0FBRDtBQUhMLE9BYkc7QUFMQSxLLFFBNEJQQyxRLEdBQVc7QUFDVEMsV0FEUyxtQkFDRjtBQUNMLGVBQU8sS0FBS1YsSUFBTCxDQUFVRyxLQUFqQjtBQUNEO0FBSFEsSyxRQU1YUSxPLEdBQVUsRTs7Ozs7NEJBRUYsQ0FDUDs7OzhCQUVTLENBRVQ7Ozs4QkFFUTtBQUNQQyxjQUFRQyxHQUFSLENBQVksSUFBWjtBQUNEOzs7O0VBakQrQkMsZUFBS0MsUzs7a0JBQWxCZixJIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjYXJ0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYXJ0OntcbiAgICAgICAgcHJpY2U6MzlcbiAgICAgIH0sXG4gICAgICBjb2xvckxpc3Q6WydyZWQnLCdncmVlbiddLFxuICAgICAgbGlzdDpbe1xuICAgICAgICBuYW1lOlwi5Y2V54K56I+c5ZOBXCIsXG4gICAgICAgIGlkOicxJyxcbiAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICduYW1lJzon6YW46L6j6bOV6bG8JyxcbiAgICAgICAgICAncHJpY2UnOjIwLjVcbiAgICAgICAgfSx7XG4gICAgICAgICAgJ25hbWUnOifphbjovqPps5XpsbwnLFxuICAgICAgICAgICdwcmljZSc6MjAuNVxuICAgICAgICB9LHtcbiAgICAgICAgICAnbmFtZSc6J+mFuOi+o+mzlemxvCcsXG4gICAgICAgICAgJ3ByaWNlJzoyMC41XG4gICAgICAgIH1dXG4gICAgICB9LHtcbiAgICAgICAgbmFtZTpcIuWll+mkkOiPnOWTgVwiLFxuICAgICAgICBpZDonMicsXG4gICAgICAgIGZvb2Q6W3tcbiAgICAgICAgICAnbmFtZSc6J+WtleWmh+Wll+mkkCcsXG4gICAgICAgICAgJ3ByaWNlJzoyMC41XG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbGltaXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydC5wcmljZVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIG5Mb2FkKCkge1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG5cbiAgICB9XG5cbiAgICBhY2NvdW50KCl7XG4gICAgICBjb25zb2xlLmxvZyhcIue7k+eul1wiKVxuICAgIH1cblxuXG4gIH1cbiJdfQ==