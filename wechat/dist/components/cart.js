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
      list: {
        type: String,
        default: [{
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
        }],
        twoWay: true
      }
    }, _this.data = {
      cart: {
        price: 39
      },
      colorList: ['red', 'green']
    }, _this.computed = {
      limis: function limis() {
        return this.cart.price;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsInByb3BzIiwiZmxhZyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidHdvV2F5IiwibGlzdCIsIm5hbWUiLCJpZCIsImZvb2QiLCJkYXRhIiwicHJpY2UiLCJjb2xvckxpc3QiLCJjb21wdXRlZCIsImxpbWlzIiwibWV0aG9kcyIsInNob3dMaXN0IiwiY29uc29sZSIsImxvZyIsImNsb3NlTGlzdCIsImNsZWFyQ2F0Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTLEtBRkw7QUFHSkMsZ0JBQVE7QUFISixPQURBO0FBTVJDLFlBQU07QUFDRkosY0FBTUMsTUFESjtBQUVGQyxpQkFBUSxDQUFDO0FBQ1RHLGdCQUFLLE1BREk7QUFFVEMsY0FBRyxHQUZNO0FBR1RDLGdCQUFLLENBQUM7QUFDSixvQkFBTyxNQURIO0FBRUoscUJBQVE7QUFGSixXQUFELEVBR0g7QUFDQSxvQkFBTyxNQURQO0FBRUEscUJBQVE7QUFGUixXQUhHLEVBTUg7QUFDQSxvQkFBTyxNQURQO0FBRUEscUJBQVE7QUFGUixXQU5HO0FBSEksU0FBRCxFQWFSO0FBQ0FGLGdCQUFLLE1BREw7QUFFQUMsY0FBRyxHQUZIO0FBR0FDLGdCQUFLLENBQUM7QUFDSixvQkFBTyxNQURIO0FBRUoscUJBQVE7QUFGSixXQUFEO0FBSEwsU0FiUSxDQUZOO0FBdUJGSixnQkFBUTtBQXZCTjtBQU5FLEssUUFpQ1JLLEksR0FBTztBQUNMWCxZQUFLO0FBQ0hZLGVBQU07QUFESCxPQURBO0FBSUxDLGlCQUFVLENBQUMsS0FBRCxFQUFPLE9BQVA7QUFKTCxLLFFBT1BDLFEsR0FBVztBQUNUQyxXQURTLG1CQUNGO0FBQ0wsZUFBTyxLQUFLZixJQUFMLENBQVVZLEtBQWpCO0FBQ0Q7QUFIUSxLLFFBTVhJLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNFO0FBQ1JDLGdCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLGFBQUtqQixJQUFMLEdBQVksQ0FBQyxLQUFLQSxJQUFsQjtBQUNELE9BSk87QUFLUmtCLGVBTFEsdUJBS0c7QUFDVCxhQUFLbEIsSUFBTCxHQUFZLEtBQVo7QUFDRCxPQVBPO0FBUVJtQixjQVJRLHNCQVFFO0FBQ1IsYUFBS2QsSUFBTCxHQUFZLEVBQVo7QUFDRDtBQVZPLEs7Ozs7OzRCQVlGLENBQ1A7Ozs4QkFFUyxDQUVUOzs7OEJBRVE7QUFDUFcsY0FBUUMsR0FBUixDQUFZLElBQVo7QUFDRDs7OztFQXBFK0JHLGVBQUtDLFM7O2tCQUFsQnZCLEkiLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhcnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBmbGFnOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0Olt7XG4gICAgICAgIG5hbWU6XCLljZXngrnoj5zlk4FcIixcbiAgICAgICAgaWQ6JzEnLFxuICAgICAgICBmb29kOlt7XG4gICAgICAgICAgJ25hbWUnOifphbjovqPps5XpsbwnLFxuICAgICAgICAgICdwcmljZSc6MjAuNVxuICAgICAgICB9LHtcbiAgICAgICAgICAnbmFtZSc6J+mFuOi+o+mzlemxvCcsXG4gICAgICAgICAgJ3ByaWNlJzoyMC41XG4gICAgICAgIH0se1xuICAgICAgICAgICduYW1lJzon6YW46L6j6bOV6bG8JyxcbiAgICAgICAgICAncHJpY2UnOjIwLjVcbiAgICAgICAgfV1cbiAgICAgIH0se1xuICAgICAgICBuYW1lOlwi5aWX6aSQ6I+c5ZOBXCIsXG4gICAgICAgIGlkOicyJyxcbiAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICduYW1lJzon5a2V5aaH5aWX6aSQJyxcbiAgICAgICAgICAncHJpY2UnOjIwLjVcbiAgICAgICAgfV1cbiAgICAgIH1dICxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYXJ0OntcbiAgICAgICAgcHJpY2U6MzlcbiAgICAgIH0sXG4gICAgICBjb2xvckxpc3Q6WydyZWQnLCdncmVlbiddXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBsaW1pcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0LnByaWNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dMaXN0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy5mbGFnID0gIXRoaXMuZmxhZztcbiAgICAgIH0sXG4gICAgICBjbG9zZUxpc3QoKXtcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgY2xlYXJDYXQoKXtcbiAgICAgICAgdGhpcy5saXN0ID0gW10gO1xuICAgICAgfVxuICAgIH1cbiAgICBuTG9hZCgpIHtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuXG4gICAgfVxuXG4gICAgYWNjb3VudCgpe1xuICAgICAgY29uc29sZS5sb2coXCLnu5PnrpdcIilcbiAgICB9XG5cblxuICB9XG4iXX0=