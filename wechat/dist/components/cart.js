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
      //是否有单品加入购物车
      cartDefaultLen: function cartDefaultLen() {
        var len = this.chooseList.filter(function (item) {
          return item.cat != 2;
        }).length;
        console.log("1111", len);
        return len > 0;
      },
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
        this.$emit('clear');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsIm1peGlucyIsImJhc2UiLCJodHRwIiwicHJvcHMiLCJmbGFnIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ0d29XYXkiLCJjaG9vc2VMaXN0IiwiT2JqZWN0IiwibGlzdCIsImNhdExpc3QiLCJkZWFsTGlzdCIsImRhdGEiLCJwcmljZSIsImZpbml0ZVN0YXJ0IiwiY29sb3JMaXN0IiwibWVzc2FnZSIsImFkZHJlc3MiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiY29tcHV0ZWQiLCJjYXJ0RGVmYXVsdExlbiIsImxlbiIsImZpbHRlciIsIml0ZW0iLCJjYXQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdExpc3QiLCJpZCIsImZvb2QiLCJmb29kU3VtbWFyeSIsImFyciIsIm1hcCIsInB1c2giLCJzdW0iLCJyZWR1Y2UiLCJyZXN1bHQiLCJpbmRleCIsInBhcnNlRmxvYXQiLCJzdW1QcmljZSIsImZpbml0ZSIsIm1ldGhvZHMiLCJzaG93TGlzdCIsImNsb3NlTGlzdCIsImNsZWFyQ2F0IiwiJGVtaXQiLCJzdWJ0cmFjdCIsImkiLCJmaW5kRWxlbSIsImoiLCJzcGxpY2UiLCJwbHVzIiwiYWNjb3VudCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJKU09OIiwic3RyaW5naWZ5IiwiY2hvb3NlZFRpbWUiLCJmb29kTGlzdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxLQUZMO0FBR0pDLGdCQUFRO0FBSEosT0FEQTtBQU1O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RUFBK0I7QUFDN0I2QixhQUFHQyxTQUFILENBQWE7QUFDWEMsbUJBQU8sV0FESTtBQUVYQyxrQkFBTSxNQUZLO0FBR1hDLHNCQUFVO0FBSEMsV0FBYjtBQUtELFNBTkQsTUFNTSxJQUFHLEtBQUtqQixNQUFMLEdBQWMsQ0FBakIsRUFBbUI7QUFDdkJhLGFBQUdDLFNBQUgsQ0FBYTtBQUNYQyxtQkFBTyxtQkFESTtBQUVYQyxrQkFBTSxNQUZLO0FBR1hDLHNCQUFVO0FBSEMsV0FBYjtBQUtELFNBTkssTUFNRDtBQUNILGNBQUk3QyxVQUFVOEMsS0FBS0MsU0FBTCxDQUFlLEtBQUsvQyxPQUFwQixDQUFkO0FBQ0EsY0FBSWdELGNBQWNGLEtBQUtDLFNBQUwsQ0FBZSxNQUFmLENBQWxCO0FBQ0EsY0FBSXBCLFdBQVdtQixLQUFLQyxTQUFMLENBQWUsS0FBS3BCLFFBQXBCLENBQWY7QUFDQSxjQUFJc0IsV0FBV0gsS0FBS0MsU0FBTCxDQUFlLEtBQUt4RCxVQUFwQixDQUFmO0FBQ0FrRCxhQUFHUyxVQUFILENBQWM7QUFDVkMsaUJBQUssMkJBQTJCbkQsT0FBM0IsR0FBcUMsZUFBckMsR0FBdURnRCxXQUF2RCxHQUFvRSxZQUFwRSxHQUFtRnJCLFFBQW5GLEdBQThGLFlBQTlGLEdBQTZHc0I7QUFEeEcsV0FBZDtBQUdEO0FBRUY7QUF4RU8sSzs7Ozs7NEJBMEVGLENBQ1A7Ozs4QkFFUyxDQUVUOzs7OEJBRVE7QUFDUHBDLGNBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7Ozs7RUEvTCtCc0MsZUFBS0MsUzs7a0JBQWxCeEUsSSIsImZpbGUiOiJjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhcnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgcHJvcHMgPSB7XG4gICAgICBmbGFnOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgY2hvb3NlTGlzdDp7XG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBjYXRMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgZGVhbExpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNhcnQ6e1xuICAgICAgICBwcmljZTozOVxuICAgICAgfSxcbiAgICAgIGZpbml0ZVN0YXJ0OjgwLFxuICAgICAgLy8gZm9vZFN1bW1hcnk6MixcbiAgICAgIGNvbG9yTGlzdDpbJ3JlZCcsJ2dyZWVuJ10sXG4gICAgICBtZXNzYWdlOntcbiAgICAgICAgYWRkcmVzczon6KW/5a6J6L2v5Lu25ZutJyxcbiAgICAgICAgbmFtZTon5YWw5q2j6b6ZJyxcbiAgICAgICAgc2V4OidtYWxlJyxcbiAgICAgICAgdGVsOicwMDAwMDAwMDAwJyxcbiAgICAgICAgY2FudGVlOifkuIDpo5/loIInXG4gICAgICB9LFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgLy/mmK/lkKbmnInljZXlk4HliqDlhaXotK3nianovaZcbiAgICAgIGNhcnREZWZhdWx0TGVuKCl7XG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmNob29zZUxpc3QuZmlsdGVyKChpdGVtKT0+e1xuICAgICAgICAgIHJldHVybiBpdGVtLmNhdCAhPSAyIDtcbiAgICAgICAgfSkubGVuZ3RoXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTExMVwiLGxlbilcbiAgICAgICAgcmV0dXJuIGxlbiA+IDBcbiAgICAgIH0sXG4gICAgICAgZGVmYXVsdExpc3QoKXsgICAgICAgXG4gICAgICAgICAgdmFyIGRhdGEgPSBbe1xuICAgICAgICAgICAgbmFtZTpcIueDreaOqOi+o+i0p1wiLFxuICAgICAgICAgICAgaWQ6JzEnLFxuICAgICAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICAgICAnbmFtZSc6J+mFuOi+o+mzlemxvCcsXG4gICAgICAgICAgICAgICdpZCc6JycsXG4gICAgICAgICAgICAgICdwcmljZSc6MjAuNSxcbiAgICAgICAgICAgICAgJ3N1bSc6JzMnXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0se1xuICAgICAgICAgICAgbmFtZTpcIuWll+mkkOiPnOWTgVwiLFxuICAgICAgICAgICAgaWQ6JzInLFxuICAgICAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICAgICAnbmFtZSc6J+WtleWmh+Wll+mkkCcsXG4gICAgICAgICAgICAgICdpZCc6JycsXG4gICAgICAgICAgICAgICdwcmljZSc6MjAuNSxcbiAgICAgICAgICAgICAgJ3N1bSc6JzEnXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1dXG4gICAgICAgIHJldHVybiBkYXRhIDtcbiAgICAgIH0sXG4gICAgICBmb29kU3VtbWFyeSgpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3QubGVuZ3RoICE9IDAgKXtcbiAgICAgICAgICBsZXQgYXJyID0gW10gO1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICBhcnIucHVzaChpdGVtLnN1bSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxldCBzdW0gPSBhcnIucmVkdWNlKChyZXN1bHQsaXRlbSxpbmRleCxhcnIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocmVzdWx0KStwYXJzZUZsb2F0KGl0ZW0pIFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHN1bVxuICAgICAgICB9ICAgICAgXG4gICAgICAgIHJldHVybiBcIjBcIlxuICAgICAgfSxcbiAgICAgIHN1bVByaWNlKCl7XG4gICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdC5sZW5ndGggIT0gMCApe1xuICAgICAgICAgIGxldCBhcnIgPSBbXSA7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0Lm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0ucHJpY2UgKiBpdGVtLnN1bSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxldCBzdW0gPSBhcnIucmVkdWNlKChyZXN1bHQsaXRlbSxpbmRleCxhcnIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocmVzdWx0KStwYXJzZUZsb2F0KGl0ZW0pIFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHN1bVxuICAgICAgICB9ICAgICAgXG4gICAgICAgIHJldHVybiBcIjBcIlxuICAgICAgfSxcbiAgICAgIGZpbml0ZSgpe1xuICAgICAgICByZXR1cm4gIHRoaXMuZmluaXRlU3RhcnQgLSB0aGlzLnN1bVByaWNlIDwgMCA/IDAgOnRoaXMuZmluaXRlU3RhcnQgLSB0aGlzLnN1bVByaWNlIDtcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dMaXN0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy5mbGFnID0gIXRoaXMuZmxhZztcbiAgICAgIH0sXG4gICAgICBjbG9zZUxpc3QoKXtcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgY2xlYXJDYXQoKXtcbiAgICAgICAgdGhpcy5jaG9vc2VMaXN0ID0gW10gO1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGVhcicpOyAgICAgICAgXG4gICAgICB9LFxuICAgICAgICAgICAgLy/lh4/lsJHllYblk4FcbiAgICAgIHN1YnRyYWN0KGluZGV4LGl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNcIixpbmRleCxpdGVtKTtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbmRFbGVtKHRoaXMuY2hvb3NlTGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgIHZhciBqID0gdGhpcy5maW5kRWxlbSh0aGlzLmxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImpcIixqKVxuICAgICAgICBpZihqID49IDApe1xuICAgICAgICAgIGlmKHRoaXMubGlzdFtqXS5zdW0gPCAxKXtcbiAgICAgICAgICAgIHRoaXMubGlzdFtqXS5zdW0gPT0gMFxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5saXN0W2ldLnN1bSAtLSA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGkgPj0gMCl7XG4gICAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0W2ldLnN1bSA9PSAxKXtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gLS0gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8v5aKe5Yqg5ZWG5ZOBXG4gICAgICBwbHVzKGluZGV4LGl0ZW0pe1xuICAgICAgICBpdGVtLnByaWNlID0gcGFyc2VGbG9hdChpdGVtLnByaWNlKTtcbiAgICAgICAgaXRlbS5zdW0gPSAxIDtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbmRFbGVtKHRoaXMuY2hvb3NlTGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgIHZhciBqID0gdGhpcy5maW5kRWxlbSh0aGlzLmxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImpcIixqKVxuICAgICAgICBpZihqID49IDApe1xuICAgICAgICAgIHRoaXMubGlzdFtqXS5zdW0gKytcbiAgICAgICAgfVxuICAgICAgICBpZihpIDwgMCl7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gKysgO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWNjb3VudCgpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3QubGVuZ3RoID09IDApe1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+ivt+iHs+WwkemAieaLqeS4gOagt+iPnOWTgScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZmluaXRlID4gMCl7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn6LSt54mp6I+c5Y2V5pyq5ruh6Laz6LW36YCB5Lu377yM6K+35YaN5oyR6YCJ5LiL5Y2VJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdmFyIG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm1lc3NhZ2UpXG4gICAgICAgICAgdmFyIGNob29zZWRUaW1lID0gSlNPTi5zdHJpbmdpZnkoXCLnq4vljbPpgIHlh7pcIikgO1xuICAgICAgICAgIHZhciBzdW1QcmljZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3VtUHJpY2UpIDtcbiAgICAgICAgICB2YXIgZm9vZExpc3QgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNob29zZUxpc3QpO1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3N1Ym1pdD9tZXNzYWdlPVwiICsgbWVzc2FnZSArIFwiJmNob29zZWRUaW1lPVwiICsgY2hvb3NlZFRpbWUgK1wiJnN1bVByaWNlPVwiICsgc3VtUHJpY2UgKyBcIiZmb29kTGlzdD1cIiArIGZvb2RMaXN0XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcblxuICAgIH1cblxuICAgIGFjY291bnQoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwi57uT566XXCIpXG4gICAgfVxuXG5cbiAgfVxuIl19