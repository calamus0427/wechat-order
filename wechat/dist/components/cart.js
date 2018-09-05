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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsIm1peGlucyIsImJhc2UiLCJodHRwIiwicHJvcHMiLCJmbGFnIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ0d29XYXkiLCJjaG9vc2VMaXN0IiwiT2JqZWN0IiwibGlzdCIsImNhdExpc3QiLCJkZWFsTGlzdCIsImRhdGEiLCJwcmljZSIsImZpbml0ZVN0YXJ0IiwiY29sb3JMaXN0IiwibWVzc2FnZSIsImFkZHJlc3MiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiY29tcHV0ZWQiLCJjYXJ0RGVmYXVsdExlbiIsImxlbiIsImZpbHRlciIsIml0ZW0iLCJjYXQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdExpc3QiLCJpZCIsImZvb2QiLCJmb29kU3VtbWFyeSIsImFyciIsIm1hcCIsInB1c2giLCJzdW0iLCJyZWR1Y2UiLCJyZXN1bHQiLCJpbmRleCIsInBhcnNlRmxvYXQiLCJzdW1QcmljZSIsImZpbml0ZSIsIm1ldGhvZHMiLCJzaG93TGlzdCIsImNsb3NlTGlzdCIsImNsZWFyQ2F0IiwiJGVtaXQiLCJzdWJ0cmFjdCIsImkiLCJmaW5kRWxlbSIsImoiLCJzcGxpY2UiLCJwbHVzIiwiYWNjb3VudCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJKU09OIiwic3RyaW5naWZ5IiwiY2hvb3NlZFRpbWUiLCJmb29kTGlzdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVMsS0FGTDtBQUdKQyxnQkFBUTtBQUhKLE9BREE7QUFNTkMs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QStCO0FBQzdCNkIsYUFBR0MsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLFdBREk7QUFFWEMsa0JBQU0sTUFGSztBQUdYQyxzQkFBVTtBQUhDLFdBQWI7QUFLRCxTQU5ELE1BTU0sSUFBRyxLQUFLakIsTUFBTCxHQUFjLENBQWpCLEVBQW1CO0FBQ3ZCYSxhQUFHQyxTQUFILENBQWE7QUFDWEMsbUJBQU8sbUJBREk7QUFFWEMsa0JBQU0sTUFGSztBQUdYQyxzQkFBVTtBQUhDLFdBQWI7QUFLRCxTQU5LLE1BTUQ7QUFDSCxjQUFJN0MsVUFBVThDLEtBQUtDLFNBQUwsQ0FBZSxLQUFLL0MsT0FBcEIsQ0FBZDtBQUNBLGNBQUlnRCxjQUFjRixLQUFLQyxTQUFMLENBQWUsTUFBZixDQUFsQjtBQUNBLGNBQUlwQixXQUFXbUIsS0FBS0MsU0FBTCxDQUFlLEtBQUtwQixRQUFwQixDQUFmO0FBQ0EsY0FBSXNCLFdBQVdILEtBQUtDLFNBQUwsQ0FBZSxLQUFLeEQsVUFBcEIsQ0FBZjtBQUNBLGNBQUlFLE9BQU9xRCxLQUFLQyxTQUFMLENBQWUsS0FBS3RELElBQXBCLENBQVg7O0FBRUFnRCxhQUFHUyxVQUFILENBQWM7QUFDVkMsaUJBQUssMkJBQTJCbkQsT0FBM0IsR0FBcUMsZUFBckMsR0FBdURnRCxXQUF2RCxHQUFvRSxZQUFwRSxHQUFtRnJCLFFBQW5GLEdBQThGLFlBQTlGLEdBQTZHc0IsUUFBN0csR0FBeUgsUUFBekgsR0FBb0l4RDtBQUQvSCxXQUFkO0FBR0M7QUFDRjtBQXpFSyxLOzs7O0VBNUdzQjJELGVBQUtDLFM7O2tCQUFsQnhFLEkiLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG5cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjYXJ0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIHByb3BzID0ge1xuICAgICAgZmxhZzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgIGNob29zZUxpc3Q6e1xuICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBsaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgY2F0TGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRlYWxMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYXJ0OntcbiAgICAgICAgcHJpY2U6MzlcbiAgICAgIH0sXG4gICAgICBmaW5pdGVTdGFydDo4MCxcbiAgICAgIC8vIGZvb2RTdW1tYXJ5OjIsXG4gICAgICBjb2xvckxpc3Q6WydyZWQnLCdncmVlbiddLFxuICAgICAgbWVzc2FnZTp7XG4gICAgICAgIGFkZHJlc3M6J+ilv+Wuiei9r+S7tuWbrScsXG4gICAgICAgIG5hbWU6J+WFsOato+m+mScsXG4gICAgICAgIHNleDonbWFsZScsXG4gICAgICAgIHRlbDonMDAwMDAwMDAwMCcsXG4gICAgICAgIGNhbnRlZTon5LiA6aOf5aCCJ1xuICAgICAgfSxcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIC8v5piv5ZCm5pyJ5Y2V5ZOB5Yqg5YWl6LSt54mp6L2mXG4gICAgICBjYXJ0RGVmYXVsdExlbigpe1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5jaG9vc2VMaXN0LmZpbHRlcigoaXRlbSk9PntcbiAgICAgICAgICByZXR1cm4gaXRlbS5jYXQgIT0gMiA7XG4gICAgICAgIH0pLmxlbmd0aFxuICAgICAgICBjb25zb2xlLmxvZyhcIjExMTFcIixsZW4pXG4gICAgICAgIHJldHVybiBsZW4gPiAwXG4gICAgICB9LFxuICAgICAgIGRlZmF1bHRMaXN0KCl7ICAgICAgIFxuICAgICAgICAgIHZhciBkYXRhID0gW3tcbiAgICAgICAgICAgIG5hbWU6XCLng63mjqjovqPotKdcIixcbiAgICAgICAgICAgIGlkOicxJyxcbiAgICAgICAgICAgIGZvb2Q6W3tcbiAgICAgICAgICAgICAgJ25hbWUnOifphbjovqPps5XpsbwnLFxuICAgICAgICAgICAgICAnaWQnOicnLFxuICAgICAgICAgICAgICAncHJpY2UnOjIwLjUsXG4gICAgICAgICAgICAgICdzdW0nOiczJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgIG5hbWU6XCLlpZfppJDoj5zlk4FcIixcbiAgICAgICAgICAgIGlkOicyJyxcbiAgICAgICAgICAgIGZvb2Q6W3tcbiAgICAgICAgICAgICAgJ25hbWUnOiflrZXlpoflpZfppJAnLFxuICAgICAgICAgICAgICAnaWQnOicnLFxuICAgICAgICAgICAgICAncHJpY2UnOjIwLjUsXG4gICAgICAgICAgICAgICdzdW0nOicxJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XVxuICAgICAgICByZXR1cm4gZGF0YSA7XG4gICAgICB9LFxuICAgICAgZm9vZFN1bW1hcnkoKXtcbiAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0Lmxlbmd0aCAhPSAwICl7XG4gICAgICAgICAgbGV0IGFyciA9IFtdIDtcbiAgICAgICAgICB0aGlzLmNob29zZUxpc3QubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgYXJyLnB1c2goaXRlbS5zdW0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICBsZXQgc3VtID0gYXJyLnJlZHVjZSgocmVzdWx0LGl0ZW0saW5kZXgsYXJyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHJlc3VsdCkrcGFyc2VGbG9hdChpdGVtKSBcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBzdW1cbiAgICAgICAgfSAgICAgIFxuICAgICAgICByZXR1cm4gXCIwXCJcbiAgICAgIH0sXG4gICAgICBzdW1QcmljZSgpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3QubGVuZ3RoICE9IDAgKXtcbiAgICAgICAgICBsZXQgYXJyID0gW10gO1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICBhcnIucHVzaChpdGVtLnByaWNlICogaXRlbS5zdW0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICBsZXQgc3VtID0gYXJyLnJlZHVjZSgocmVzdWx0LGl0ZW0saW5kZXgsYXJyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHJlc3VsdCkrcGFyc2VGbG9hdChpdGVtKSBcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBzdW1cbiAgICAgICAgfSAgICAgIFxuICAgICAgICByZXR1cm4gXCIwXCJcbiAgICAgIH0sXG4gICAgICBmaW5pdGUoKXtcbiAgICAgICAgcmV0dXJuICB0aGlzLmZpbml0ZVN0YXJ0IC0gdGhpcy5zdW1QcmljZSA8IDAgPyAwIDp0aGlzLmZpbml0ZVN0YXJ0IC0gdGhpcy5zdW1QcmljZSA7XG4gICAgICB9LFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzaG93TGlzdCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dcIik7XG4gICAgICAgIHRoaXMuZmxhZyA9ICF0aGlzLmZsYWc7XG4gICAgICB9LFxuICAgICAgY2xvc2VMaXN0KCl7XG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGNsZWFyQ2F0KCl7XG4gICAgICAgIHRoaXMuY2hvb3NlTGlzdCA9IFtdIDtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xlYXInKTsgICAgICAgIFxuICAgICAgfSxcbiAgICAgICAgICAgIC8v5YeP5bCR5ZWG5ZOBXG4gICAgICBzdWJ0cmFjdChpbmRleCxpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzXCIsaW5kZXgsaXRlbSk7XG4gICAgICAgIHZhciBpID0gdGhpcy5maW5kRWxlbSh0aGlzLmNob29zZUxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICB2YXIgaiA9IHRoaXMuZmluZEVsZW0odGhpcy5saXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJqXCIsailcbiAgICAgICAgaWYoaiA+PSAwKXtcbiAgICAgICAgICBpZih0aGlzLmxpc3Rbal0uc3VtIDwgMSl7XG4gICAgICAgICAgICB0aGlzLmxpc3Rbal0uc3VtID09IDBcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubGlzdFtpXS5zdW0gLS0gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihpID49IDApe1xuICAgICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gPT0gMSl7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3Quc3BsaWNlKGksMSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtIC0tIDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvL+WinuWKoOWVhuWTgVxuICAgICAgcGx1cyhpbmRleCxpdGVtKXtcbiAgICAgICAgaXRlbS5wcmljZSA9IHBhcnNlRmxvYXQoaXRlbS5wcmljZSk7XG4gICAgICAgIGl0ZW0uc3VtID0gMSA7XG4gICAgICAgIHZhciBpID0gdGhpcy5maW5kRWxlbSh0aGlzLmNob29zZUxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICB2YXIgaiA9IHRoaXMuZmluZEVsZW0odGhpcy5saXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJqXCIsailcbiAgICAgICAgaWYoaiA+PSAwKXtcbiAgICAgICAgICB0aGlzLmxpc3Rbal0uc3VtICsrXG4gICAgICAgIH1cbiAgICAgICAgaWYoaSA8IDApe1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtICsrIDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFjY291bnQoKXtcbiAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0Lmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfor7foh7PlsJHpgInmi6nkuIDmoLfoj5zlk4EnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZSBpZih0aGlzLmZpbml0ZSA+IDApe1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+i0reeJqeiPnOWNleacqua7oei2s+i1t+mAgeS7t++8jOivt+WGjeaMkemAieS4i+WNlScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHZhciBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5tZXNzYWdlKVxuICAgICAgICAgIHZhciBjaG9vc2VkVGltZSA9IEpTT04uc3RyaW5naWZ5KFwi56uL5Y2z6YCB5Ye6XCIpIDtcbiAgICAgICAgICB2YXIgc3VtUHJpY2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN1bVByaWNlKSA7XG4gICAgICAgICAgdmFyIGZvb2RMaXN0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jaG9vc2VMaXN0KTtcbiAgICAgICAgICB2YXIgbGlzdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdCk7XG5cbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9zdWJtaXQ/bWVzc2FnZT1cIiArIG1lc3NhZ2UgKyBcIiZjaG9vc2VkVGltZT1cIiArIGNob29zZWRUaW1lICtcIiZzdW1QcmljZT1cIiArIHN1bVByaWNlICsgXCImZm9vZExpc3Q9XCIgKyBmb29kTGlzdCArICBcIiZsaXN0PVwiICsgbGlzdFxuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19