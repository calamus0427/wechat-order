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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsIm1peGlucyIsImJhc2UiLCJodHRwIiwicHJvcHMiLCJmbGFnIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ0d29XYXkiLCJjaG9vc2VMaXN0IiwiT2JqZWN0IiwibGlzdCIsImNhdExpc3QiLCJkZWFsTGlzdCIsImRhdGEiLCJwcmljZSIsImZpbml0ZVN0YXJ0IiwiY29sb3JMaXN0IiwibWVzc2FnZSIsImFkZHJlc3MiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiY29tcHV0ZWQiLCJjYXJ0RGVmYXVsdExlbiIsImxlbiIsImZpbHRlciIsIml0ZW0iLCJjYXQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdExpc3QiLCJpZCIsImZvb2QiLCJmb29kU3VtbWFyeSIsImFyciIsIm1hcCIsInB1c2giLCJzdW0iLCJyZWR1Y2UiLCJyZXN1bHQiLCJpbmRleCIsInBhcnNlRmxvYXQiLCJzdW1QcmljZSIsImZpbml0ZSIsIm1ldGhvZHMiLCJzaG93TGlzdCIsImNsb3NlTGlzdCIsImNsZWFyQ2F0Iiwic3VidHJhY3QiLCJpIiwiZmluZEVsZW0iLCJqIiwic3BsaWNlIiwicGx1cyIsImFjY291bnQiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiSlNPTiIsInN0cmluZ2lmeSIsImNob29zZWRUaW1lIiwiZm9vZExpc3QiLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVMsS0FGTDtBQUdKQyxnQkFBUTtBQUhKLE9BREE7QUFNTkMsa0JBQVc7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QyxtQkFBTyxXQURJO0FBRVhDLGtCQUFNLE1BRks7QUFHWEMsc0JBQVU7QUFIQyxXQUFiO0FBS0QsU0FORCxNQU1NLElBQUcsS0FBS2hCLE1BQUwsR0FBYyxDQUFqQixFQUFtQjtBQUN2QlksYUFBR0MsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLG1CQURJO0FBRVhDLGtCQUFNLE1BRks7QUFHWEMsc0JBQVU7QUFIQyxXQUFiO0FBS0QsU0FOSyxNQU1EO0FBQ0gsY0FBSTVDLFVBQVU2QyxLQUFLQyxTQUFMLENBQWUsS0FBSzlDLE9BQXBCLENBQWQ7QUFDQSxjQUFJK0MsY0FBY0YsS0FBS0MsU0FBTCxDQUFlLE1BQWYsQ0FBbEI7QUFDQSxjQUFJbkIsV0FBV2tCLEtBQUtDLFNBQUwsQ0FBZSxLQUFLbkIsUUFBcEIsQ0FBZjtBQUNBLGNBQUlxQixXQUFXSCxLQUFLQyxTQUFMLENBQWUsS0FBS3ZELFVBQXBCLENBQWY7QUFDQWlELGFBQUdTLFVBQUgsQ0FBYztBQUNWQyxpQkFBSywyQkFBMkJsRCxPQUEzQixHQUFxQyxlQUFyQyxHQUF1RCtDLFdBQXZELEdBQW9FLFlBQXBFLEdBQW1GcEIsUUFBbkYsR0FBOEYsWUFBOUYsR0FBNkdxQjtBQUR4RyxXQUFkO0FBR0Q7QUFFRjtBQXZFTyxLOzs7Ozs0QkF5RUYsQ0FDUDs7OzhCQUVTLENBRVQ7Ozs4QkFFUTtBQUNQbkMsY0FBUUMsR0FBUixDQUFZLElBQVo7QUFDRDs7OztFQTlMK0JxQyxlQUFLQyxTOztrQkFBbEJ2RSxJIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FydCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGZsYWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICBjaG9vc2VMaXN0OntcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgbGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNhdExpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBkZWFsTGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY2FydDp7XG4gICAgICAgIHByaWNlOjM5XG4gICAgICB9LFxuICAgICAgZmluaXRlU3RhcnQ6ODAsXG4gICAgICAvLyBmb29kU3VtbWFyeToyLFxuICAgICAgY29sb3JMaXN0OlsncmVkJywnZ3JlZW4nXSxcbiAgICAgIG1lc3NhZ2U6e1xuICAgICAgICBhZGRyZXNzOifopb/lronova/ku7blm60nLFxuICAgICAgICBuYW1lOiflhbDmraPpvpknLFxuICAgICAgICBzZXg6J21hbGUnLFxuICAgICAgICB0ZWw6JzAwMDAwMDAwMDAnLFxuICAgICAgICBjYW50ZWU6J+S4gOmjn+WggidcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICAvL+aYr+WQpuacieWNleWTgeWKoOWFpei0reeJqei9plxuICAgICAgY2FydERlZmF1bHRMZW4oKXtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuY2hvb3NlTGlzdC5maWx0ZXIoKGl0ZW0pPT57XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uY2F0ICE9IDIgO1xuICAgICAgICB9KS5sZW5ndGhcbiAgICAgICAgY29uc29sZS5sb2coXCIxMTExXCIsbGVuKVxuICAgICAgICByZXR1cm4gbGVuID4gMFxuICAgICAgfSxcbiAgICAgICBkZWZhdWx0TGlzdCgpeyAgICAgICBcbiAgICAgICAgICB2YXIgZGF0YSA9IFt7XG4gICAgICAgICAgICBuYW1lOlwi54Ot5o6o6L6j6LSnXCIsXG4gICAgICAgICAgICBpZDonMScsXG4gICAgICAgICAgICBmb29kOlt7XG4gICAgICAgICAgICAgICduYW1lJzon6YW46L6j6bOV6bG8JyxcbiAgICAgICAgICAgICAgJ2lkJzonJyxcbiAgICAgICAgICAgICAgJ3ByaWNlJzoyMC41LFxuICAgICAgICAgICAgICAnc3VtJzonMydcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSx7XG4gICAgICAgICAgICBuYW1lOlwi5aWX6aSQ6I+c5ZOBXCIsXG4gICAgICAgICAgICBpZDonMicsXG4gICAgICAgICAgICBmb29kOlt7XG4gICAgICAgICAgICAgICduYW1lJzon5a2V5aaH5aWX6aSQJyxcbiAgICAgICAgICAgICAgJ2lkJzonJyxcbiAgICAgICAgICAgICAgJ3ByaWNlJzoyMC41LFxuICAgICAgICAgICAgICAnc3VtJzonMSdcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfV1cbiAgICAgICAgcmV0dXJuIGRhdGEgO1xuICAgICAgfSxcbiAgICAgIGZvb2RTdW1tYXJ5KCl7XG4gICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdC5sZW5ndGggIT0gMCApe1xuICAgICAgICAgIGxldCBhcnIgPSBbXSA7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0Lm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0uc3VtKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgbGV0IHN1bSA9IGFyci5yZWR1Y2UoKHJlc3VsdCxpdGVtLGluZGV4LGFycikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyZXN1bHQpK3BhcnNlRmxvYXQoaXRlbSkgXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gc3VtXG4gICAgICAgIH0gICAgICBcbiAgICAgICAgcmV0dXJuIFwiMFwiXG4gICAgICB9LFxuICAgICAgc3VtUHJpY2UoKXtcbiAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0Lmxlbmd0aCAhPSAwICl7XG4gICAgICAgICAgbGV0IGFyciA9IFtdIDtcbiAgICAgICAgICB0aGlzLmNob29zZUxpc3QubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgYXJyLnB1c2goaXRlbS5wcmljZSAqIGl0ZW0uc3VtKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgbGV0IHN1bSA9IGFyci5yZWR1Y2UoKHJlc3VsdCxpdGVtLGluZGV4LGFycikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyZXN1bHQpK3BhcnNlRmxvYXQoaXRlbSkgXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gc3VtXG4gICAgICAgIH0gICAgICBcbiAgICAgICAgcmV0dXJuIFwiMFwiXG4gICAgICB9LFxuICAgICAgZmluaXRlKCl7XG4gICAgICAgIHJldHVybiAgdGhpcy5maW5pdGVTdGFydCAtIHRoaXMuc3VtUHJpY2UgPCAwID8gMCA6dGhpcy5maW5pdGVTdGFydCAtIHRoaXMuc3VtUHJpY2UgO1xuICAgICAgfSxcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd0xpc3QoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93XCIpO1xuICAgICAgICB0aGlzLmZsYWcgPSAhdGhpcy5mbGFnO1xuICAgICAgfSxcbiAgICAgIGNsb3NlTGlzdCgpe1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBjbGVhckNhdCgpe1xuICAgICAgICB0aGlzLmNob29zZUxpc3QgPSBbXSA7XG4gICAgICB9LFxuICAgICAgICAgICAgLy/lh4/lsJHllYblk4FcbiAgICAgIHN1YnRyYWN0KGluZGV4LGl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNcIixpbmRleCxpdGVtKTtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbmRFbGVtKHRoaXMuY2hvb3NlTGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgIHZhciBqID0gdGhpcy5maW5kRWxlbSh0aGlzLmxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImpcIixqKVxuICAgICAgICBpZihqID49IDApe1xuICAgICAgICAgIGlmKHRoaXMubGlzdFtqXS5zdW0gPCAxKXtcbiAgICAgICAgICAgIHRoaXMubGlzdFtqXS5zdW0gPT0gMFxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5saXN0W2ldLnN1bSAtLSA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGkgPj0gMCl7XG4gICAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0W2ldLnN1bSA9PSAxKXtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gLS0gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8v5aKe5Yqg5ZWG5ZOBXG4gICAgICBwbHVzKGluZGV4LGl0ZW0pe1xuICAgICAgICBpdGVtLnByaWNlID0gcGFyc2VGbG9hdChpdGVtLnByaWNlKTtcbiAgICAgICAgaXRlbS5zdW0gPSAxIDtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbmRFbGVtKHRoaXMuY2hvb3NlTGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgIHZhciBqID0gdGhpcy5maW5kRWxlbSh0aGlzLmxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImpcIixqKVxuICAgICAgICBpZihqID49IDApe1xuICAgICAgICAgIHRoaXMubGlzdFtqXS5zdW0gKytcbiAgICAgICAgfVxuICAgICAgICBpZihpIDwgMCl7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gKysgO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWNjb3VudCgpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3QubGVuZ3RoID09IDApe1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+ivt+iHs+WwkemAieaLqeS4gOagt+iPnOWTgScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZmluaXRlID4gMCl7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn6LSt54mp6I+c5Y2V5pyq5ruh6Laz6LW36YCB5Lu377yM6K+35YaN5oyR6YCJ5LiL5Y2VJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdmFyIG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm1lc3NhZ2UpXG4gICAgICAgICAgdmFyIGNob29zZWRUaW1lID0gSlNPTi5zdHJpbmdpZnkoXCLnq4vljbPpgIHlh7pcIikgO1xuICAgICAgICAgIHZhciBzdW1QcmljZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3VtUHJpY2UpIDtcbiAgICAgICAgICB2YXIgZm9vZExpc3QgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNob29zZUxpc3QpO1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3N1Ym1pdD9tZXNzYWdlPVwiICsgbWVzc2FnZSArIFwiJmNob29zZWRUaW1lPVwiICsgY2hvb3NlZFRpbWUgK1wiJnN1bVByaWNlPVwiICsgc3VtUHJpY2UgKyBcIiZmb29kTGlzdD1cIiArIGZvb2RMaXN0XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcblxuICAgIH1cblxuICAgIGFjY291bnQoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwi57uT566XXCIpXG4gICAgfVxuXG5cbiAgfVxuIl19