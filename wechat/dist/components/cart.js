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
      },
      catList: {
        type: Object,
        default: [],
        twoWay: true
      },
      dealList: {
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
          name: "热推辣货",
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
      sumPrice: function sumPrice() {
        if (this.chooseList.length != 0) {
          var arr = [];
          this.chooseList.map(function (item) {
            arr.push(item.price * item.sum);
          });
          var sum = arr.reduce(function (result, item, index, arr) {
            return parseFloat(result) + parseFloat(item); //最终结果为10
          });
          return sum;
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
        this.chooseList = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsInByb3BzIiwiZmxhZyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidHdvV2F5IiwiY2hvb3NlTGlzdCIsIk9iamVjdCIsImNhdExpc3QiLCJkZWFsTGlzdCIsImRhdGEiLCJwcmljZSIsImNvbG9yTGlzdCIsImNvbXB1dGVkIiwibGlzdCIsIm5hbWUiLCJpZCIsImZvb2QiLCJmb29kU3VtbWFyeSIsImxlbmd0aCIsInN1bVByaWNlIiwiYXJyIiwibWFwIiwiaXRlbSIsInB1c2giLCJzdW0iLCJyZWR1Y2UiLCJyZXN1bHQiLCJpbmRleCIsInBhcnNlRmxvYXQiLCJtZXRob2RzIiwic2hvd0xpc3QiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VMaXN0IiwiY2xlYXJDYXQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVMsS0FGTDtBQUdKQyxnQkFBUTtBQUhKLE9BREE7QUFNTkMsa0JBQVc7QUFDUEosY0FBTUssTUFEQztBQUVQSCxpQkFBUyxFQUZGO0FBR1BDLGdCQUFRO0FBSEQsT0FOTDtBQVdORyxlQUFRO0FBQ05OLGNBQU1LLE1BREE7QUFFTkgsaUJBQVMsRUFGSDtBQUdOQyxnQkFBUTtBQUhGLE9BWEY7QUFnQk5JLGdCQUFTO0FBQ1BQLGNBQU1LLE1BREM7QUFFUEgsaUJBQVMsRUFGRjtBQUdQQyxnQkFBUTtBQUhEO0FBaEJILEssUUF1QlJLLEksR0FBTztBQUNMWCxZQUFLO0FBQ0hZLGVBQU07QUFESCxPQURBO0FBSUw7QUFDQUMsaUJBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUDtBQUxMLEssUUFRUEMsUSxHQUFXO0FBQ1JDLFVBRFEsa0JBQ0Y7QUFDSCxZQUFJSixPQUFPLENBQUM7QUFDVkssZ0JBQUssTUFESztBQUVWQyxjQUFHLEdBRk87QUFHVkMsZ0JBQUssQ0FBQztBQUNKLG9CQUFPLE1BREg7QUFFSixrQkFBSyxFQUZEO0FBR0oscUJBQVEsSUFISjtBQUlKLG1CQUFNO0FBSkYsV0FBRDtBQUhLLFNBQUQsRUFTVDtBQUNBRixnQkFBSyxNQURMO0FBRUFDLGNBQUcsR0FGSDtBQUdBQyxnQkFBSyxDQUFDO0FBQ0osb0JBQU8sTUFESDtBQUVKLGtCQUFLLEVBRkQ7QUFHSixxQkFBUSxJQUhKO0FBSUosbUJBQU07QUFKRixXQUFEO0FBSEwsU0FUUyxDQUFYO0FBbUJGLGVBQU9QLElBQVA7QUFDSCxPQXRCVTtBQXVCVFEsaUJBdkJTLHlCQXVCSTtBQUNYLFlBQUcsS0FBS1osVUFBUixFQUFtQjtBQUNqQixpQkFBUSxLQUFLQSxVQUFMLENBQWdCYSxNQUF4QjtBQUNEO0FBQ0QsZUFBUSxHQUFSO0FBQ0QsT0E1QlE7QUE2QlRDLGNBN0JTLHNCQTZCQztBQUNSLFlBQUcsS0FBS2QsVUFBTCxDQUFnQmEsTUFBaEIsSUFBMEIsQ0FBN0IsRUFBZ0M7QUFDOUIsY0FBSUUsTUFBTSxFQUFWO0FBQ0EsZUFBS2YsVUFBTCxDQUFnQmdCLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBUTtBQUMxQkYsZ0JBQUlHLElBQUosQ0FBU0QsS0FBS1osS0FBTCxHQUFhWSxLQUFLRSxHQUEzQjtBQUNELFdBRkQ7QUFHQSxjQUFJQSxNQUFNSixJQUFJSyxNQUFKLENBQVcsVUFBQ0MsTUFBRCxFQUFRSixJQUFSLEVBQWFLLEtBQWIsRUFBbUJQLEdBQW5CLEVBQTJCO0FBQzVDLG1CQUFPUSxXQUFXRixNQUFYLElBQW1CRSxXQUFXTixJQUFYLENBQTFCLENBRDRDLENBQ0Q7QUFDOUMsV0FGUyxDQUFWO0FBR0EsaUJBQU9FLEdBQVA7QUFDRDtBQUNELGVBQU8sR0FBUDtBQUNEO0FBekNRLEssUUE0Q1hLLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNFO0FBQ1JDLGdCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLGFBQUtoQyxJQUFMLEdBQVksQ0FBQyxLQUFLQSxJQUFsQjtBQUNELE9BSk87QUFLUmlDLGVBTFEsdUJBS0c7QUFDVCxhQUFLakMsSUFBTCxHQUFZLEtBQVo7QUFDRCxPQVBPO0FBUVJrQyxjQVJRLHNCQVFFO0FBQ1IsYUFBSzdCLFVBQUwsR0FBa0IsRUFBbEI7QUFDRDtBQVZPLEs7Ozs7OzRCQVlGLENBQ1A7Ozs4QkFFUyxDQUVUOzs7OEJBRVE7QUFDUDBCLGNBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7Ozs7RUFqRytCRyxlQUFLQyxTOztrQkFBbEJ0QyxJIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjYXJ0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgZmxhZzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgIGNob29zZUxpc3Q6e1xuICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBjYXRMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgZGVhbExpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNhcnQ6e1xuICAgICAgICBwcmljZTozOVxuICAgICAgfSxcbiAgICAgIC8vIGZvb2RTdW1tYXJ5OjIsXG4gICAgICBjb2xvckxpc3Q6WydyZWQnLCdncmVlbiddXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICAgbGlzdCgpeyAgICAgICBcbiAgICAgICAgICB2YXIgZGF0YSA9IFt7XG4gICAgICAgICAgICBuYW1lOlwi54Ot5o6o6L6j6LSnXCIsXG4gICAgICAgICAgICBpZDonMScsXG4gICAgICAgICAgICBmb29kOlt7XG4gICAgICAgICAgICAgICduYW1lJzon6YW46L6j6bOV6bG8JyxcbiAgICAgICAgICAgICAgJ2lkJzonJyxcbiAgICAgICAgICAgICAgJ3ByaWNlJzoyMC41LFxuICAgICAgICAgICAgICAnc3VtJzonMydcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSx7XG4gICAgICAgICAgICBuYW1lOlwi5aWX6aSQ6I+c5ZOBXCIsXG4gICAgICAgICAgICBpZDonMicsXG4gICAgICAgICAgICBmb29kOlt7XG4gICAgICAgICAgICAgICduYW1lJzon5a2V5aaH5aWX6aSQJyxcbiAgICAgICAgICAgICAgJ2lkJzonJyxcbiAgICAgICAgICAgICAgJ3ByaWNlJzoyMC41LFxuICAgICAgICAgICAgICAnc3VtJzonMSdcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfV1cbiAgICAgICAgcmV0dXJuIGRhdGEgO1xuICAgIH0sXG4gICAgICBmb29kU3VtbWFyeSgpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3Qpe1xuICAgICAgICAgIHJldHVybiAgdGhpcy5jaG9vc2VMaXN0Lmxlbmd0aDtcbiAgICAgICAgfSAgIFxuICAgICAgICByZXR1cm4gICcwJztcbiAgICAgIH0sXG4gICAgICBzdW1QcmljZSgpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3QubGVuZ3RoICE9IDAgKXtcbiAgICAgICAgICBsZXQgYXJyID0gW10gO1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICBhcnIucHVzaChpdGVtLnByaWNlICogaXRlbS5zdW0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICBsZXQgc3VtID0gYXJyLnJlZHVjZSgocmVzdWx0LGl0ZW0saW5kZXgsYXJyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHJlc3VsdCkrcGFyc2VGbG9hdChpdGVtKSAvL+acgOe7iOe7k+aenOS4ujEwXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gc3VtXG4gICAgICAgIH0gICAgICBcbiAgICAgICAgcmV0dXJuIFwiMFwiXG4gICAgICB9LFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzaG93TGlzdCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dcIik7XG4gICAgICAgIHRoaXMuZmxhZyA9ICF0aGlzLmZsYWc7XG4gICAgICB9LFxuICAgICAgY2xvc2VMaXN0KCl7XG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGNsZWFyQ2F0KCl7XG4gICAgICAgIHRoaXMuY2hvb3NlTGlzdCA9IFtdIDtcbiAgICAgIH1cbiAgICB9XG4gICAgbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcblxuICAgIH1cblxuICAgIGFjY291bnQoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwi57uT566XXCIpXG4gICAgfVxuXG5cbiAgfVxuIl19