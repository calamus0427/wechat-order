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
        if (this.chooseList) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsInByb3BzIiwiZmxhZyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidHdvV2F5IiwiY2hvb3NlTGlzdCIsIk9iamVjdCIsImRhdGEiLCJwcmljZSIsImNvbG9yTGlzdCIsImNvbXB1dGVkIiwibGlzdCIsIm5hbWUiLCJpZCIsImZvb2QiLCJmb29kU3VtbWFyeSIsImxlbmd0aCIsImxpbWlzIiwiYXJyIiwibWFwIiwiaXRlbSIsInB1c2giLCJyZWR1Y2UiLCJyZXN1bHQiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwic2hvd0xpc3QiLCJjbG9zZUxpc3QiLCJjbGVhckNhdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxLQUZMO0FBR0pDLGdCQUFRO0FBSEosT0FEQTtBQU1OQyxrQkFBVztBQUNQSixjQUFNSyxNQURDO0FBRVBILGlCQUFTLEVBRkY7QUFHUEMsZ0JBQVE7QUFIRDtBQU5MLEssUUFhUkcsSSxHQUFPO0FBQ0xULFlBQUs7QUFDSFUsZUFBTTtBQURILE9BREE7QUFJTDtBQUNBQyxpQkFBVSxDQUFDLEtBQUQsRUFBTyxPQUFQO0FBTEwsSyxRQVFQQyxRLEdBQVc7QUFDUkMsVUFEUSxrQkFDRjtBQUNMLFlBQUlKLE9BQU8sQ0FBQztBQUNWSyxnQkFBSyxNQURLO0FBRVZDLGNBQUcsR0FGTztBQUdWQyxnQkFBSyxDQUFDO0FBQ0osb0JBQU8sTUFESDtBQUVKLGtCQUFLLEVBRkQ7QUFHSixxQkFBUSxJQUhKO0FBSUosbUJBQU07QUFKRixXQUFEO0FBSEssU0FBRCxFQVNUO0FBQ0FGLGdCQUFLLE1BREw7QUFFQUMsY0FBRyxHQUZIO0FBR0FDLGdCQUFLLENBQUM7QUFDSixvQkFBTyxNQURIO0FBRUosa0JBQUssRUFGRDtBQUdKLHFCQUFRLElBSEo7QUFJSixtQkFBTTtBQUpGLFdBQUQ7QUFITCxTQVRTLENBQVg7QUFtQkEsZUFBT1AsSUFBUDtBQUNILE9BdEJVO0FBdUJUUSxpQkF2QlMseUJBdUJJO0FBQ1gsWUFBRyxLQUFLVixVQUFSLEVBQW1CO0FBQ2pCLGlCQUFRLEtBQUtBLFVBQUwsQ0FBZ0JXLE1BQXhCO0FBQ0Q7QUFDRCxlQUFRLEdBQVI7QUFDRCxPQTVCUTtBQTZCVEMsV0E3QlMsbUJBNkJGO0FBQ0wsWUFBRyxLQUFLWixVQUFSLEVBQW1CO0FBQ2pCLGNBQUlhLE1BQU0sRUFBVjtBQUNBLGVBQUtiLFVBQUwsQ0FBZ0JjLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBUTtBQUMxQkYsZ0JBQUlHLElBQUosQ0FBU0QsS0FBS1osS0FBZDtBQUNELFdBRkQ7QUFHQVUsY0FBSUksTUFBSixDQUFXLFVBQUNDLE1BQUQsRUFBUUgsSUFBUixFQUFhSSxLQUFiLEVBQW1CTixHQUFuQixFQUEyQjtBQUNsQyxtQkFBT0ssU0FBT0gsSUFBZCxDQURrQyxDQUNmO0FBQ3RCLFdBRkQ7QUFHQUssa0JBQVFDLEdBQVIsQ0FBWVIsR0FBWjtBQUNBLGlCQUFPQSxHQUFQO0FBQ0Q7QUFDRCxlQUFPLEdBQVA7QUFDRDtBQTFDUSxLLFFBNkNYUyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDRTtBQUNSSCxnQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxhQUFLMUIsSUFBTCxHQUFZLENBQUMsS0FBS0EsSUFBbEI7QUFDRCxPQUpPO0FBS1I2QixlQUxRLHVCQUtHO0FBQ1QsYUFBSzdCLElBQUwsR0FBWSxLQUFaO0FBQ0QsT0FQTztBQVFSOEIsY0FSUSxzQkFRRTtBQUNSLGFBQUtuQixJQUFMLEdBQVksRUFBWjtBQUNEO0FBVk8sSzs7Ozs7NEJBWUYsQ0FDUDs7OzhCQUVTLENBRVQ7Ozs4QkFFUTtBQUNQYyxjQUFRQyxHQUFSLENBQVksSUFBWjtBQUNEOzs7O0VBeEYrQkssZUFBS0MsUzs7a0JBQWxCbEMsSSIsImZpbGUiOiJjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FydCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGZsYWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICBjaG9vc2VMaXN0OntcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNhcnQ6e1xuICAgICAgICBwcmljZTozOVxuICAgICAgfSxcbiAgICAgIC8vIGZvb2RTdW1tYXJ5OjIsXG4gICAgICBjb2xvckxpc3Q6WydyZWQnLCdncmVlbiddXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICAgbGlzdCgpeyAgICAgICBcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xuICAgICAgICAgIG5hbWU6XCLljZXngrnoj5zlk4FcIixcbiAgICAgICAgICBpZDonMScsXG4gICAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICAgJ25hbWUnOifphbjovqPps5XpsbwnLFxuICAgICAgICAgICAgJ2lkJzonJyxcbiAgICAgICAgICAgICdwcmljZSc6MjAuNSxcbiAgICAgICAgICAgICdzdW0nOiczJ1xuICAgICAgICAgIH1dXG4gICAgICAgIH0se1xuICAgICAgICAgIG5hbWU6XCLlpZfppJDoj5zlk4FcIixcbiAgICAgICAgICBpZDonMicsXG4gICAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICAgJ25hbWUnOiflrZXlpoflpZfppJAnLFxuICAgICAgICAgICAgJ2lkJzonJyxcbiAgICAgICAgICAgICdwcmljZSc6MjAuNSxcbiAgICAgICAgICAgICdzdW0nOicxJ1xuICAgICAgICAgIH1dXG4gICAgICAgIH1dIFxuICAgICAgICByZXR1cm4gZGF0YSA7XG4gICAgfSxcbiAgICAgIGZvb2RTdW1tYXJ5KCl7XG4gICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdCl7XG4gICAgICAgICAgcmV0dXJuICB0aGlzLmNob29zZUxpc3QubGVuZ3RoO1xuICAgICAgICB9ICAgXG4gICAgICAgIHJldHVybiAgJzAnO1xuICAgICAgfSxcbiAgICAgIGxpbWlzKCl7XG4gICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdCl7XG4gICAgICAgICAgbGV0IGFyciA9IFtdIDtcbiAgICAgICAgICB0aGlzLmNob29zZUxpc3QubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgYXJyLnB1c2goaXRlbS5wcmljZSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFyci5yZWR1Y2UoKHJlc3VsdCxpdGVtLGluZGV4LGFycikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0K2l0ZW0gLy/mnIDnu4jnu5PmnpzkuLoxMFxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2coYXJyKVxuICAgICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgfSAgICAgIFxuICAgICAgICByZXR1cm4gXCIwXCJcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dMaXN0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy5mbGFnID0gIXRoaXMuZmxhZztcbiAgICAgIH0sXG4gICAgICBjbG9zZUxpc3QoKXtcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgY2xlYXJDYXQoKXtcbiAgICAgICAgdGhpcy5saXN0ID0gW10gO1xuICAgICAgfVxuICAgIH1cbiAgICBuTG9hZCgpIHtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuXG4gICAgfVxuXG4gICAgYWNjb3VudCgpe1xuICAgICAgY29uc29sZS5sb2coXCLnu5PnrpdcIilcbiAgICB9XG5cblxuICB9XG4iXX0=