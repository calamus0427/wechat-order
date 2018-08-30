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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cart.__proto__ || Object.getPrototypeOf(cart)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      flag: {
        type: String,
        default: false,
        twoWay: true
      },
      chooseList: {
        type: Object,
        default: [],
        twoWay: true
      }
    }, _this.data = {
      cart: {
        price: 39
      },
      // foodSummary:2,
      colorList: ['red', 'green']
    }, _this.computed = {
      list: function list() {
        var data = [{
          name: "单点菜品",
          id: '1',
          food: [{
            'name': '酸辣鳕鱼',
            'id': '',
            'price': 20.5,
            'sum': '3'
          }]
        }, {
          name: "套餐菜品",
          id: '2',
          food: [{
            'name': '孕妇套餐',
            'id': '',
            'price': 20.5,
            'sum': '1'
          }]
        }];
        return data;
      },
      foodSummary: function foodSummary() {
        if (this.chooseList) {
          return this.chooseList.length;
        }
        return '0';
      },
      limis: function limis() {
        if (this.chooseList.length != 0) {
          var arr = [];
          this.chooseList.map(function (item) {
            arr.push(item.price);
          });
          arr.reduce(function (result, item, index, arr) {
            return result + item; //最终结果为10
          });
          console.log(arr);
          return arr;
        }
        return "0";
      }
    }, _this.methods = {
      showList: function showList() {
        console.log("show");
        this.flag = !this.flag;
      },
      closeList: function closeList() {
        this.flag = false;
      },
      clearCat: function clearCat() {
        this.list = [];
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsInByb3BzIiwiZmxhZyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidHdvV2F5IiwiY2hvb3NlTGlzdCIsIk9iamVjdCIsImRhdGEiLCJwcmljZSIsImNvbG9yTGlzdCIsImNvbXB1dGVkIiwibGlzdCIsIm5hbWUiLCJpZCIsImZvb2QiLCJmb29kU3VtbWFyeSIsImxlbmd0aCIsImxpbWlzIiwiYXJyIiwibWFwIiwiaXRlbSIsInB1c2giLCJyZWR1Y2UiLCJyZXN1bHQiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwic2hvd0xpc3QiLCJjbG9zZUxpc3QiLCJjbGVhckNhdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxLQUZMO0FBR0pDLGdCQUFRO0FBSEosT0FEQTtBQU1OQyxrQkFBVztBQUNQSixjQUFNSyxNQURDO0FBRVBILGlCQUFTLEVBRkY7QUFHUEMsZ0JBQVE7QUFIRDtBQU5MLEssUUFhUkcsSSxHQUFPO0FBQ0xULFlBQUs7QUFDSFUsZUFBTTtBQURILE9BREE7QUFJTDtBQUNBQyxpQkFBVSxDQUFDLEtBQUQsRUFBTyxPQUFQO0FBTEwsSyxRQVFQQyxRLEdBQVc7QUFDUkMsVUFEUSxrQkFDRjtBQUNMLFlBQUlKLE9BQU8sQ0FBQztBQUNWSyxnQkFBSyxNQURLO0FBRVZDLGNBQUcsR0FGTztBQUdWQyxnQkFBSyxDQUFDO0FBQ0osb0JBQU8sTUFESDtBQUVKLGtCQUFLLEVBRkQ7QUFHSixxQkFBUSxJQUhKO0FBSUosbUJBQU07QUFKRixXQUFEO0FBSEssU0FBRCxFQVNUO0FBQ0FGLGdCQUFLLE1BREw7QUFFQUMsY0FBRyxHQUZIO0FBR0FDLGdCQUFLLENBQUM7QUFDSixvQkFBTyxNQURIO0FBRUosa0JBQUssRUFGRDtBQUdKLHFCQUFRLElBSEo7QUFJSixtQkFBTTtBQUpGLFdBQUQ7QUFITCxTQVRTLENBQVg7QUFtQkEsZUFBT1AsSUFBUDtBQUNILE9BdEJVO0FBdUJUUSxpQkF2QlMseUJBdUJJO0FBQ1gsWUFBRyxLQUFLVixVQUFSLEVBQW1CO0FBQ2pCLGlCQUFRLEtBQUtBLFVBQUwsQ0FBZ0JXLE1BQXhCO0FBQ0Q7QUFDRCxlQUFRLEdBQVI7QUFDRCxPQTVCUTtBQTZCVEMsV0E3QlMsbUJBNkJGO0FBQ0wsWUFBRyxLQUFLWixVQUFMLENBQWdCVyxNQUFoQixJQUEwQixDQUE3QixFQUFnQztBQUM5QixjQUFJRSxNQUFNLEVBQVY7QUFDQSxlQUFLYixVQUFMLENBQWdCYyxHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQVE7QUFDMUJGLGdCQUFJRyxJQUFKLENBQVNELEtBQUtaLEtBQWQ7QUFDRCxXQUZEO0FBR0FVLGNBQUlJLE1BQUosQ0FBVyxVQUFDQyxNQUFELEVBQVFILElBQVIsRUFBYUksS0FBYixFQUFtQk4sR0FBbkIsRUFBMkI7QUFDbEMsbUJBQU9LLFNBQU9ILElBQWQsQ0FEa0MsQ0FDZjtBQUN0QixXQUZEO0FBR0FLLGtCQUFRQyxHQUFSLENBQVlSLEdBQVo7QUFDQSxpQkFBT0EsR0FBUDtBQUNEO0FBQ0QsZUFBTyxHQUFQO0FBQ0Q7QUExQ1EsSyxRQTZDWFMsTyxHQUFVO0FBQ1JDLGNBRFEsc0JBQ0U7QUFDUkgsZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsYUFBSzFCLElBQUwsR0FBWSxDQUFDLEtBQUtBLElBQWxCO0FBQ0QsT0FKTztBQUtSNkIsZUFMUSx1QkFLRztBQUNULGFBQUs3QixJQUFMLEdBQVksS0FBWjtBQUNELE9BUE87QUFRUjhCLGNBUlEsc0JBUUU7QUFDUixhQUFLbkIsSUFBTCxHQUFZLEVBQVo7QUFDRDtBQVZPLEs7Ozs7OzRCQVlGLENBQ1A7Ozs4QkFFUyxDQUVUOzs7OEJBRVE7QUFDUGMsY0FBUUMsR0FBUixDQUFZLElBQVo7QUFDRDs7OztFQXhGK0JLLGVBQUtDLFM7O2tCQUFsQmxDLEkiLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhcnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBmbGFnOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgY2hvb3NlTGlzdDp7XG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYXJ0OntcbiAgICAgICAgcHJpY2U6MzlcbiAgICAgIH0sXG4gICAgICAvLyBmb29kU3VtbWFyeToyLFxuICAgICAgY29sb3JMaXN0OlsncmVkJywnZ3JlZW4nXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgIGxpc3QoKXsgICAgICAgXG4gICAgICAgIHZhciBkYXRhID0gW3tcbiAgICAgICAgICBuYW1lOlwi5Y2V54K56I+c5ZOBXCIsXG4gICAgICAgICAgaWQ6JzEnLFxuICAgICAgICAgIGZvb2Q6W3tcbiAgICAgICAgICAgICduYW1lJzon6YW46L6j6bOV6bG8JyxcbiAgICAgICAgICAgICdpZCc6JycsXG4gICAgICAgICAgICAncHJpY2UnOjIwLjUsXG4gICAgICAgICAgICAnc3VtJzonMydcbiAgICAgICAgICB9XVxuICAgICAgICB9LHtcbiAgICAgICAgICBuYW1lOlwi5aWX6aSQ6I+c5ZOBXCIsXG4gICAgICAgICAgaWQ6JzInLFxuICAgICAgICAgIGZvb2Q6W3tcbiAgICAgICAgICAgICduYW1lJzon5a2V5aaH5aWX6aSQJyxcbiAgICAgICAgICAgICdpZCc6JycsXG4gICAgICAgICAgICAncHJpY2UnOjIwLjUsXG4gICAgICAgICAgICAnc3VtJzonMSdcbiAgICAgICAgICB9XVxuICAgICAgICB9XSBcbiAgICAgICAgcmV0dXJuIGRhdGEgO1xuICAgIH0sXG4gICAgICBmb29kU3VtbWFyeSgpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3Qpe1xuICAgICAgICAgIHJldHVybiAgdGhpcy5jaG9vc2VMaXN0Lmxlbmd0aDtcbiAgICAgICAgfSAgIFxuICAgICAgICByZXR1cm4gICcwJztcbiAgICAgIH0sXG4gICAgICBsaW1pcygpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3QubGVuZ3RoICE9IDAgKXtcbiAgICAgICAgICBsZXQgYXJyID0gW10gO1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICBhcnIucHVzaChpdGVtLnByaWNlKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYXJyLnJlZHVjZSgocmVzdWx0LGl0ZW0saW5kZXgsYXJyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQraXRlbSAvL+acgOe7iOe7k+aenOS4ujEwXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhhcnIpXG4gICAgICAgICAgcmV0dXJuIGFyclxuICAgICAgICB9ICAgICAgXG4gICAgICAgIHJldHVybiBcIjBcIlxuICAgICAgfSxcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd0xpc3QoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93XCIpO1xuICAgICAgICB0aGlzLmZsYWcgPSAhdGhpcy5mbGFnO1xuICAgICAgfSxcbiAgICAgIGNsb3NlTGlzdCgpe1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBjbGVhckNhdCgpe1xuICAgICAgICB0aGlzLmxpc3QgPSBbXSA7XG4gICAgICB9XG4gICAgfVxuICAgIG5Mb2FkKCkge1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG5cbiAgICB9XG5cbiAgICBhY2NvdW50KCl7XG4gICAgICBjb25zb2xlLmxvZyhcIue7k+eul1wiKVxuICAgIH1cblxuXG4gIH1cbiJdfQ==