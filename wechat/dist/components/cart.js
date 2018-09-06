'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
        console.log("cartsubtract click", "item=>", item, "foodList=>", this.list, "chooseList=>", this.chooseList);

        var i = this.findElem(this.chooseList, "id", item.id);
        var j = this.findElem(this.list, "id", item.id);

        console.log("listj", j, "choose", i);

        if (i > -1 && j > -1) {
          if (this.list[j].sum <= 1) {
            this.list[j].sum = 0;
            this.chooseList.splice(i, 1);
          } else {
            console.log("cart!<=1");

            this.list[j].sum--;
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
          var list = JSON.stringify(this.list);

          wx.navigateTo({
            url: "/pages/submit?message=" + message + "&choosedTime=" + choosedTime + "&sumPrice=" + sumPrice + "&foodList=" + foodList + "&list=" + list
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return cart;
}(_wepy2.default.component);

exports.default = cart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsIm1peGlucyIsImJhc2UiLCJodHRwIiwicHJvcHMiLCJmbGFnIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ0d29XYXkiLCJjaG9vc2VMaXN0IiwiT2JqZWN0IiwibGlzdCIsImNhdExpc3QiLCJkZWFsTGlzdCIsImRhdGEiLCJwcmljZSIsImZpbml0ZVN0YXJ0IiwiY29sb3JMaXN0IiwibWVzc2FnZSIsImFkZHJlc3MiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiY29tcHV0ZWQiLCJjYXJ0RGVmYXVsdExlbiIsImxlbiIsImZpbHRlciIsIml0ZW0iLCJjYXQiLCJsZW5ndGgiLCJkZWZhdWx0TGlzdCIsImlkIiwiZm9vZCIsImZvb2RTdW1tYXJ5IiwiYXJyIiwibWFwIiwicHVzaCIsInN1bSIsInJlZHVjZSIsInJlc3VsdCIsImluZGV4IiwicGFyc2VGbG9hdCIsInN1bVByaWNlIiwiZmluaXRlIiwibWV0aG9kcyIsInNob3dMaXN0IiwiY2xvc2VMaXN0IiwiY2xlYXJDYXQiLCIkZW1pdCIsInN1YnRyYWN0IiwiY29uc29sZSIsImxvZyIsImkiLCJmaW5kRWxlbSIsImoiLCJzcGxpY2UiLCJwbHVzIiwiYWNjb3VudCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJKU09OIiwic3RyaW5naWZ5IiwiY2hvb3NlZFRpbWUiLCJmb29kTGlzdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVMsS0FGTDtBQUdKQyxnQkFBUTtBQUhKLE9BREE7QUFNTkMs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QUFiO0FBS0QsU0FORCxNQU1NLElBQUcsS0FBS25CLE1BQUwsR0FBYyxDQUFqQixFQUFtQjtBQUN2QmUsYUFBR0MsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLG1CQURJO0FBRVhDLGtCQUFNLE1BRks7QUFHWEMsc0JBQVU7QUFIQyxXQUFiO0FBS0QsU0FOSyxNQU1EO0FBQ0gsY0FBSTdDLFVBQVU4QyxLQUFLQyxTQUFMLENBQWUsS0FBSy9DLE9BQXBCLENBQWQ7QUFDQSxjQUFJZ0QsY0FBY0YsS0FBS0MsU0FBTCxDQUFlLE1BQWYsQ0FBbEI7QUFDQSxjQUFJdEIsV0FBV3FCLEtBQUtDLFNBQUwsQ0FBZSxLQUFLdEIsUUFBcEIsQ0FBZjtBQUNBLGNBQUl3QixXQUFXSCxLQUFLQyxTQUFMLENBQWUsS0FBS3hELFVBQXBCLENBQWY7QUFDQSxjQUFJRSxPQUFPcUQsS0FBS0MsU0FBTCxDQUFlLEtBQUt0RCxJQUFwQixDQUFYOztBQUVBZ0QsYUFBR1MsVUFBSCxDQUFjO0FBQ1ZDLGlCQUFLLDJCQUEyQm5ELE9BQTNCLEdBQXFDLGVBQXJDLEdBQXVEZ0QsV0FBdkQsR0FBb0UsWUFBcEUsR0FBbUZ2QixRQUFuRixHQUE4RixZQUE5RixHQUE2R3dCLFFBQTdHLEdBQXlILFFBQXpILEdBQW9JeEQ7QUFEL0gsV0FBZDtBQUdDO0FBQ0Y7QUExRUssSzs7OztFQTNHc0IyRCxlQUFLQyxTOztrQkFBbEJ4RSxJIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FydCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGZsYWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICBjaG9vc2VMaXN0OntcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgbGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNhdExpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBkZWFsTGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY2FydDp7XG4gICAgICAgIHByaWNlOjM5XG4gICAgICB9LFxuICAgICAgZmluaXRlU3RhcnQ6ODAsXG4gICAgICAvLyBmb29kU3VtbWFyeToyLFxuICAgICAgY29sb3JMaXN0OlsncmVkJywnZ3JlZW4nXSxcbiAgICAgIG1lc3NhZ2U6e1xuICAgICAgICBhZGRyZXNzOifopb/lronova/ku7blm60nLFxuICAgICAgICBuYW1lOiflhbDmraPpvpknLFxuICAgICAgICBzZXg6J21hbGUnLFxuICAgICAgICB0ZWw6JzAwMDAwMDAwMDAnLFxuICAgICAgICBjYW50ZWU6J+S4gOmjn+WggidcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICAvL+aYr+WQpuacieWNleWTgeWKoOWFpei0reeJqei9plxuICAgICAgY2FydERlZmF1bHRMZW4oKXtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuY2hvb3NlTGlzdC5maWx0ZXIoKGl0ZW0pPT57XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uY2F0ICE9IDIgO1xuICAgICAgICB9KS5sZW5ndGhcbiAgICAgICAgcmV0dXJuIGxlbiA+IDBcbiAgICAgIH0sXG4gICAgICAgZGVmYXVsdExpc3QoKXsgICAgICAgXG4gICAgICAgICAgdmFyIGRhdGEgPSBbe1xuICAgICAgICAgICAgbmFtZTpcIueDreaOqOi+o+i0p1wiLFxuICAgICAgICAgICAgaWQ6JzEnLFxuICAgICAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICAgICAnbmFtZSc6J+mFuOi+o+mzlemxvCcsXG4gICAgICAgICAgICAgICdpZCc6JycsXG4gICAgICAgICAgICAgICdwcmljZSc6MjAuNSxcbiAgICAgICAgICAgICAgJ3N1bSc6JzMnXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0se1xuICAgICAgICAgICAgbmFtZTpcIuWll+mkkOiPnOWTgVwiLFxuICAgICAgICAgICAgaWQ6JzInLFxuICAgICAgICAgICAgZm9vZDpbe1xuICAgICAgICAgICAgICAnbmFtZSc6J+WtleWmh+Wll+mkkCcsXG4gICAgICAgICAgICAgICdpZCc6JycsXG4gICAgICAgICAgICAgICdwcmljZSc6MjAuNSxcbiAgICAgICAgICAgICAgJ3N1bSc6JzEnXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1dXG4gICAgICAgIHJldHVybiBkYXRhIDtcbiAgICAgIH0sXG4gICAgICBmb29kU3VtbWFyeSgpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3QubGVuZ3RoICE9IDAgKXtcbiAgICAgICAgICBsZXQgYXJyID0gW10gO1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICBhcnIucHVzaChpdGVtLnN1bSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxldCBzdW0gPSBhcnIucmVkdWNlKChyZXN1bHQsaXRlbSxpbmRleCxhcnIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocmVzdWx0KStwYXJzZUZsb2F0KGl0ZW0pIFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHN1bVxuICAgICAgICB9ICAgICAgXG4gICAgICAgIHJldHVybiBcIjBcIlxuICAgICAgfSxcbiAgICAgIHN1bVByaWNlKCl7XG4gICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdC5sZW5ndGggIT0gMCApe1xuICAgICAgICAgIGxldCBhcnIgPSBbXSA7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0Lm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0ucHJpY2UgKiBpdGVtLnN1bSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxldCBzdW0gPSBhcnIucmVkdWNlKChyZXN1bHQsaXRlbSxpbmRleCxhcnIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocmVzdWx0KStwYXJzZUZsb2F0KGl0ZW0pIFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHN1bVxuICAgICAgICB9ICAgICAgXG4gICAgICAgIHJldHVybiBcIjBcIlxuICAgICAgfSxcbiAgICAgIGZpbml0ZSgpe1xuICAgICAgICByZXR1cm4gIHRoaXMuZmluaXRlU3RhcnQgLSB0aGlzLnN1bVByaWNlIDwgMCA/IDAgOnRoaXMuZmluaXRlU3RhcnQgLSB0aGlzLnN1bVByaWNlIDtcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dMaXN0KCl7XG4gICAgICAgIHRoaXMuZmxhZyA9ICF0aGlzLmZsYWc7XG4gICAgICB9LFxuICAgICAgY2xvc2VMaXN0KCl7XG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGNsZWFyQ2F0KCl7XG4gICAgICAgIHRoaXMuY2hvb3NlTGlzdCA9IFtdIDtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xlYXInKTsgICAgICAgIFxuICAgICAgfSxcbiAgICAgICAgICAgIC8v5YeP5bCR5ZWG5ZOBXG4gICAgICBzdWJ0cmFjdChpbmRleCxpdGVtKXtcbiAgICAgICBjb25zb2xlLmxvZyhcImNhcnRzdWJ0cmFjdCBjbGlja1wiLFwiaXRlbT0+XCIsaXRlbSxcImZvb2RMaXN0PT5cIix0aGlzLmxpc3QsXCJjaG9vc2VMaXN0PT5cIix0aGlzLmNob29zZUxpc3QpXG5cbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZmluZEVsZW0odGhpcy5jaG9vc2VMaXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgY29uc3QgaiA9IHRoaXMuZmluZEVsZW0odGhpcy5saXN0LFwiaWRcIixpdGVtLmlkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RqXCIsaixcImNob29zZVwiLGkpXG5cbiAgICAgICAgaWYoaSA+IC0xICYmIGogPiAtMSl7XG4gICAgICAgICAgICAgIGlmKHRoaXMubGlzdFtqXS5zdW0gPD0gMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W2pdLnN1bSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhcnQhPD0xXCIpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmxpc3Rbal0uc3VtIC0tIDtcbiAgICAgICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtIC0tIDtcbiAgICAgICAgICAgICAgfSAgICAgXG4gICAgICAgIH1cblxuXG5cbiAgICAgIH0sXG4gICAgICAvL+WinuWKoOWVhuWTgVxuICAgICAgcGx1cyhpbmRleCxpdGVtKXtcbiAgICAgICAgaXRlbS5wcmljZSA9IHBhcnNlRmxvYXQoaXRlbS5wcmljZSk7XG4gICAgICAgIGl0ZW0uc3VtID0gMSA7XG4gICAgICAgIHZhciBpID0gdGhpcy5maW5kRWxlbSh0aGlzLmNob29zZUxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICB2YXIgaiA9IHRoaXMuZmluZEVsZW0odGhpcy5saXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgaWYoaiA+PSAwKXtcbiAgICAgICAgICB0aGlzLmxpc3Rbal0uc3VtICsrXG4gICAgICAgIH1cbiAgICAgICAgaWYoaSA8IDApe1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtICsrIDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFjY291bnQoKXtcbiAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0Lmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfor7foh7PlsJHpgInmi6nkuIDmoLfoj5zlk4EnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZSBpZih0aGlzLmZpbml0ZSA+IDApe1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+i0reeJqeiPnOWNleacqua7oei2s+i1t+mAgeS7t++8jOivt+WGjeaMkemAieS4i+WNlScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHZhciBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5tZXNzYWdlKVxuICAgICAgICAgIHZhciBjaG9vc2VkVGltZSA9IEpTT04uc3RyaW5naWZ5KFwi56uL5Y2z6YCB5Ye6XCIpIDtcbiAgICAgICAgICB2YXIgc3VtUHJpY2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN1bVByaWNlKSA7XG4gICAgICAgICAgdmFyIGZvb2RMaXN0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jaG9vc2VMaXN0KTtcbiAgICAgICAgICB2YXIgbGlzdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdCk7XG5cbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9zdWJtaXQ/bWVzc2FnZT1cIiArIG1lc3NhZ2UgKyBcIiZjaG9vc2VkVGltZT1cIiArIGNob29zZWRUaW1lICtcIiZzdW1QcmljZT1cIiArIHN1bVByaWNlICsgXCImZm9vZExpc3Q9XCIgKyBmb29kTGlzdCArICBcIiZsaXN0PVwiICsgbGlzdFxuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19