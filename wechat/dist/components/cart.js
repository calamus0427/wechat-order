'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cart.__proto__ || Object.getPrototypeOf(cart)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.props = {
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
      list: {
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
      finiteStart: 80,
      // foodSummary:2,
      colorList: ['red', 'green'],
      message: {
        address: '西安软件园',
        name: '兰正龙',
        sex: 'male',
        tel: '0000000000',
        cantee: '一食堂'
      }
    }, _this.computed = {
      defaultList: function defaultList() {
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
        if (this.chooseList.length != 0) {
          var arr = [];
          this.chooseList.map(function (item) {
            arr.push(item.sum);
          });
          var sum = arr.reduce(function (result, item, index, arr) {
            return parseFloat(result) + parseFloat(item);
          });
          return sum;
        }
        return "0";
      },
      sumPrice: function sumPrice() {
        if (this.chooseList.length != 0) {
          var arr = [];
          this.chooseList.map(function (item) {
            arr.push(item.price * item.sum);
          });
          var sum = arr.reduce(function (result, item, index, arr) {
            return parseFloat(result) + parseFloat(item);
          });
          return sum;
        }
        return "0";
      },
      finite: function finite() {
        return this.finiteStart - this.sumPrice < 0 ? 0 : this.finiteStart - this.sumPrice;
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
      },

      //减少商品
      subtract: function subtract(index, item) {
        console.log("s", index, item);
        var i = this.findElem(this.chooseList, "id", item.id);
        var j = this.findElem(this.list, "id", item.id);
        console.log("j", j);
        if (j >= 0) {
          if (this.list[j].sum < 1) {
            this.list[j].sum == 0;
          } else {
            this.list[i].sum--;
          }
        }
        if (i >= 0) {
          if (this.chooseList[i].sum == 1) {
            this.chooseList.splice(i, 1);
          } else {
            this.chooseList[i].sum--;
          }
        }
      },

      //增加商品
      plus: function plus(index, item) {
        item.price = parseFloat(item.price);
        item.sum = 1;
        var i = this.findElem(this.chooseList, "id", item.id);
        var j = this.findElem(this.list, "id", item.id);
        console.log("j", j);
        if (j >= 0) {
          this.list[j].sum++;
        }
        if (i < 0) {
          this.chooseList.push(item);
        } else {
          this.chooseList[i].sum++;
        }
      },
      account: function account() {
        if (this.chooseList.length == 0) {
          wx.showToast({
            title: '请至少选择一样菜品',
            icon: 'none',
            duration: 2000
          });
        } else if (this.finite > 0) {
          wx.showToast({
            title: '购物菜单未满足起送价，请再挑选下单',
            icon: 'none',
            duration: 2000
          });
        } else {
          var message = JSON.stringify(this.message);
          var choosedTime = JSON.stringify("立即送出");
          var sumPrice = JSON.stringify(this.sumPrice);
          var foodList = JSON.stringify(this.chooseList);
          wx.navigateTo({
            url: "/pages/submit?message=" + message + "&choosedTime=" + choosedTime + "&sumPrice=" + sumPrice + "&foodList=" + foodList
          });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsIm1peGlucyIsImJhc2UiLCJodHRwIiwicHJvcHMiLCJmbGFnIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ0d29XYXkiLCJjaG9vc2VMaXN0IiwiT2JqZWN0IiwibGlzdCIsImNhdExpc3QiLCJkZWFsTGlzdCIsImRhdGEiLCJwcmljZSIsImZpbml0ZVN0YXJ0IiwiY29sb3JMaXN0IiwibWVzc2FnZSIsImFkZHJlc3MiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiY29tcHV0ZWQiLCJkZWZhdWx0TGlzdCIsImlkIiwiZm9vZCIsImZvb2RTdW1tYXJ5IiwibGVuZ3RoIiwiYXJyIiwibWFwIiwiaXRlbSIsInB1c2giLCJzdW0iLCJyZWR1Y2UiLCJyZXN1bHQiLCJpbmRleCIsInBhcnNlRmxvYXQiLCJzdW1QcmljZSIsImZpbml0ZSIsIm1ldGhvZHMiLCJzaG93TGlzdCIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUxpc3QiLCJjbGVhckNhdCIsInN1YnRyYWN0IiwiaSIsImZpbmRFbGVtIiwiaiIsInNwbGljZSIsInBsdXMiLCJhY2NvdW50Iiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJjaG9vc2VkVGltZSIsImZvb2RMaXN0IiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTLEtBRkw7QUFHSkMsZ0JBQVE7QUFISixPQURBO0FBTU5DLGtCQUFXO0FBQ1BKLGNBQU1LLE1BREM7QUFFUEgsaUJBQVMsRUFGRjtBQUdQ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QSxjQUFJMkMsY0FBY0YsS0FBS0MsU0FBTCxDQUFlLE1BQWYsQ0FBbEI7QUFDQSxjQUFJckIsV0FBV29CLEtBQUtDLFNBQUwsQ0FBZSxLQUFLckIsUUFBcEIsQ0FBZjtBQUNBLGNBQUl1QixXQUFXSCxLQUFLQyxTQUFMLENBQWUsS0FBS25ELFVBQXBCLENBQWY7QUFDQTZDLGFBQUdTLFVBQUgsQ0FBYztBQUNWQyxpQkFBSywyQkFBMkI5QyxPQUEzQixHQUFxQyxlQUFyQyxHQUF1RDJDLFdBQXZELEdBQW9FLFlBQXBFLEdBQW1GdEIsUUFBbkYsR0FBOEYsWUFBOUYsR0FBNkd1QjtBQUR4RyxXQUFkO0FBR0Q7QUFFRjtBQXZFTyxLOzs7Ozs0QkF5RUYsQ0FDUDs7OzhCQUVTLENBRVQ7Ozs4QkFFUTtBQUNQbkIsY0FBUUMsR0FBUixDQUFZLElBQVo7QUFDRDs7OztFQXRMK0JxQixlQUFLQyxTOztrQkFBbEJuRSxJIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FydCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGZsYWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICBjaG9vc2VMaXN0OntcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgbGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNhdExpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBkZWFsTGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY2FydDp7XG4gICAgICAgIHByaWNlOjM5XG4gICAgICB9LFxuICAgICAgZmluaXRlU3RhcnQ6ODAsXG4gICAgICAvLyBmb29kU3VtbWFyeToyLFxuICAgICAgY29sb3JMaXN0OlsncmVkJywnZ3JlZW4nXSxcbiAgICAgIG1lc3NhZ2U6e1xuICAgICAgICBhZGRyZXNzOifopb/lronova/ku7blm60nLFxuICAgICAgICBuYW1lOiflhbDmraPpvpknLFxuICAgICAgICBzZXg6J21hbGUnLFxuICAgICAgICB0ZWw6JzAwMDAwMDAwMDAnLFxuICAgICAgICBjYW50ZWU6J+S4gOmjn+WggidcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICAgZGVmYXVsdExpc3QoKXsgICAgICAgXG4gICAgICAgICAgdmFyIGRhdGEgPSBbe1xuICAgICAgICAgICAgbmFtZTpcIueDreaOqOi+o+i0p1wiLFxuICAgICAgICAgICAgaWQ6JzEnLFxuICAgICAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICAgICAnbmFtZSc6J+mFuOi+o+mzlemxvCcsXG4gICAgICAgICAgICAgICdpZCc6JycsXG4gICAgICAgICAgICAgICdwcmljZSc6MjAuNSxcbiAgICAgICAgICAgICAgJ3N1bSc6JzMnXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0se1xuICAgICAgICAgICAgbmFtZTpcIuWll+mkkOiPnOWTgVwiLFxuICAgICAgICAgICAgaWQ6JzInLFxuICAgICAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICAgICAnbmFtZSc6J+WtleWmh+Wll+mkkCcsXG4gICAgICAgICAgICAgICdpZCc6JycsXG4gICAgICAgICAgICAgICdwcmljZSc6MjAuNSxcbiAgICAgICAgICAgICAgJ3N1bSc6JzEnXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1dXG4gICAgICAgIHJldHVybiBkYXRhIDtcbiAgICAgIH0sXG4gICAgICBmb29kU3VtbWFyeSgpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3QubGVuZ3RoICE9IDAgKXtcbiAgICAgICAgICBsZXQgYXJyID0gW10gO1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICBhcnIucHVzaChpdGVtLnN1bSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxldCBzdW0gPSBhcnIucmVkdWNlKChyZXN1bHQsaXRlbSxpbmRleCxhcnIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocmVzdWx0KStwYXJzZUZsb2F0KGl0ZW0pIFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHN1bVxuICAgICAgICB9ICAgICAgXG4gICAgICAgIHJldHVybiBcIjBcIlxuICAgICAgfSxcbiAgICAgIHN1bVByaWNlKCl7XG4gICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdC5sZW5ndGggIT0gMCApe1xuICAgICAgICAgIGxldCBhcnIgPSBbXSA7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0Lm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0ucHJpY2UgKiBpdGVtLnN1bSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxldCBzdW0gPSBhcnIucmVkdWNlKChyZXN1bHQsaXRlbSxpbmRleCxhcnIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocmVzdWx0KStwYXJzZUZsb2F0KGl0ZW0pIFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHN1bVxuICAgICAgICB9ICAgICAgXG4gICAgICAgIHJldHVybiBcIjBcIlxuICAgICAgfSxcbiAgICAgIGZpbml0ZSgpe1xuICAgICAgICByZXR1cm4gIHRoaXMuZmluaXRlU3RhcnQgLSB0aGlzLnN1bVByaWNlIDwgMCA/IDAgOnRoaXMuZmluaXRlU3RhcnQgLSB0aGlzLnN1bVByaWNlIDtcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dMaXN0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy5mbGFnID0gIXRoaXMuZmxhZztcbiAgICAgIH0sXG4gICAgICBjbG9zZUxpc3QoKXtcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgY2xlYXJDYXQoKXtcbiAgICAgICAgdGhpcy5jaG9vc2VMaXN0ID0gW10gO1xuICAgICAgfSxcbiAgICAgICAgICAgIC8v5YeP5bCR5ZWG5ZOBXG4gICAgICBzdWJ0cmFjdChpbmRleCxpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzXCIsaW5kZXgsaXRlbSk7XG4gICAgICAgIHZhciBpID0gdGhpcy5maW5kRWxlbSh0aGlzLmNob29zZUxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICB2YXIgaiA9IHRoaXMuZmluZEVsZW0odGhpcy5saXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJqXCIsailcbiAgICAgICAgaWYoaiA+PSAwKXtcbiAgICAgICAgICBpZih0aGlzLmxpc3Rbal0uc3VtIDwgMSl7XG4gICAgICAgICAgICB0aGlzLmxpc3Rbal0uc3VtID09IDBcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubGlzdFtpXS5zdW0gLS0gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihpID49IDApe1xuICAgICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gPT0gMSl7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3Quc3BsaWNlKGksMSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtIC0tIDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvL+WinuWKoOWVhuWTgVxuICAgICAgcGx1cyhpbmRleCxpdGVtKXtcbiAgICAgICAgaXRlbS5wcmljZSA9IHBhcnNlRmxvYXQoaXRlbS5wcmljZSk7XG4gICAgICAgIGl0ZW0uc3VtID0gMSA7XG4gICAgICAgIHZhciBpID0gdGhpcy5maW5kRWxlbSh0aGlzLmNob29zZUxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICB2YXIgaiA9IHRoaXMuZmluZEVsZW0odGhpcy5saXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJqXCIsailcbiAgICAgICAgaWYoaiA+PSAwKXtcbiAgICAgICAgICB0aGlzLmxpc3Rbal0uc3VtICsrXG4gICAgICAgIH1cbiAgICAgICAgaWYoaSA8IDApe1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtICsrIDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFjY291bnQoKXtcbiAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0Lmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfor7foh7PlsJHpgInmi6nkuIDmoLfoj5zlk4EnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZSBpZih0aGlzLmZpbml0ZSA+IDApe1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+i0reeJqeiPnOWNleacqua7oei2s+i1t+mAgeS7t++8jOivt+WGjeaMkemAieS4i+WNlScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHZhciBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5tZXNzYWdlKVxuICAgICAgICAgIHZhciBjaG9vc2VkVGltZSA9IEpTT04uc3RyaW5naWZ5KFwi56uL5Y2z6YCB5Ye6XCIpIDtcbiAgICAgICAgICB2YXIgc3VtUHJpY2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN1bVByaWNlKSA7XG4gICAgICAgICAgdmFyIGZvb2RMaXN0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jaG9vc2VMaXN0KTtcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9zdWJtaXQ/bWVzc2FnZT1cIiArIG1lc3NhZ2UgKyBcIiZjaG9vc2VkVGltZT1cIiArIGNob29zZWRUaW1lICtcIiZzdW1QcmljZT1cIiArIHN1bVByaWNlICsgXCImZm9vZExpc3Q9XCIgKyBmb29kTGlzdFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIG5Mb2FkKCkge1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG5cbiAgICB9XG5cbiAgICBhY2NvdW50KCl7XG4gICAgICBjb25zb2xlLmxvZyhcIue7k+eul1wiKVxuICAgIH1cblxuXG4gIH1cbiJdfQ==