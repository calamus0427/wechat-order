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
        if (this.chooseList.length != 0) {
          for (var i = 0; i < this.chooseList.length; i++) {
            if (this.chooseList[i].id == item.id) {
              if (this.chooseList[i].sum == 1) {
                this.chooseList.splice(i, 1);
              } else {
                this.chooseList[i].sum--;
              }
            }
          }
        }
      },

      //增加商品
      plus: function plus(index, item) {
        item.price = parseFloat(item.price);
        item.sum = 1;
        var i = this.findElem(this.chooseList, "id", item.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydCIsIm1peGlucyIsImJhc2UiLCJodHRwIiwicHJvcHMiLCJmbGFnIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ0d29XYXkiLCJjaG9vc2VMaXN0IiwiT2JqZWN0IiwiY2F0TGlzdCIsImRlYWxMaXN0IiwiZGF0YSIsInByaWNlIiwiZmluaXRlU3RhcnQiLCJjb2xvckxpc3QiLCJtZXNzYWdlIiwiYWRkcmVzcyIsIm5hbWUiLCJzZXgiLCJ0ZWwiLCJjYW50ZWUiLCJjb21wdXRlZCIsImxpc3QiLCJpZCIsImZvb2QiLCJmb29kU3VtbWFyeSIsImxlbmd0aCIsImFyciIsIm1hcCIsIml0ZW0iLCJwdXNoIiwic3VtIiwicmVkdWNlIiwicmVzdWx0IiwiaW5kZXgiLCJwYXJzZUZsb2F0Iiwic3VtUHJpY2UiLCJmaW5pdGUiLCJtZXRob2RzIiwic2hvd0xpc3QiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VMaXN0IiwiY2xlYXJDYXQiLCJzdWJ0cmFjdCIsImkiLCJzcGxpY2UiLCJwbHVzIiwiZmluZEVsZW0iLCJhY2NvdW50Iiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJjaG9vc2VkVGltZSIsImZvb2RMaXN0IiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTLEtBRkw7QUFHSkMsZ0JBQVE7QUFISixPQURBO0FBTU5DLGtCQUFXO0FBQ1BKLGNBQU1LLE1BREM7QUFFUEgsaUJBQVMsRUFGRjtBQUdQQyxnQkFBUTtBQUhELE9BTkw7QUFXTkcsZUFBUTtBQUNOTixjQUFNSyxNQURBO0FBRU5ILGlCQUFTLEVBRkg7QUFHTkMsZ0JBQVE7QUFIRixPQVhGO0FBZ0JOSSxnQkFBUztBQUNQUCxjQUFNSyxNQURDO0FBRVBILGlCQUFTLEVBRkY7QUFHUEMsZ0JBQVE7QUFIRDtBQWhCSCxLLFFBdUJSSyxJLEdBQU87QUFDTGQsWUFBSztBQUNIZSxlQUFNO0FBREgsT0FEQTtBQUlMQyxtQkFBWSxFQUpQO0FBS0w7QUFDQUMsaUJBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQU5MO0FBT0xDLGVBQVE7QUFDTkMsaUJBQVEsT0FERjtBQUVOQyxjQUFLLEtBRkM7QUFHTkMsYUFBSSxNQUhFO0FBSU5DLGFBQUksWUFKRTtBQUtOQyxnQkFBTztBQUxEO0FBUEgsSyxRQWdCUEMsUSxHQUFXO0FBQ1JDLFVBRFEsa0JBQ0Y7QUFDSCxZQUFJWCxPQUFPLENBQUM7QUFDVk0sZ0JBQUssTUFESztBQUVWTSxjQUFHLEdBRk87QUFHVkMsZ0JBQUssQ0FBQztBQUNKLG9CQUFPLE1BREg7QUFFSixrQkFBSyxFQUZEO0FBR0oscUJBQVEsSUFISjtBQUlKLG1CQUFNO0FBSkYsV0FBRDtBQUhLLFNBQUQsRUFTVDtBQUNBUCxnQkFBSyxNQURMO0FBRUFNLGNBQUcsR0FGSDtBQUdBQyxnQkFBSyxDQUFDO0FBQ0osb0JBQU8sTUFESDtBQUVKLGtCQUFLLEVBRkQ7QUFHSixxQkFBUSxJQUhKO0FBSUosbUJBQU07QUFKRixXQUFEO0FBSEwsU0FUUyxDQUFYO0FBbUJGLGVBQU9iLElBQVA7QUFDSCxPQXRCVTtBQXVCVGMsaUJBdkJTLHlCQXVCSTtBQUNYLFlBQUcsS0FBS2xCLFVBQUwsQ0FBZ0JtQixNQUFoQixJQUEwQixDQUE3QixFQUFnQztBQUM5QixjQUFJQyxNQUFNLEVBQVY7QUFDQSxlQUFLcEIsVUFBTCxDQUFnQnFCLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBUTtBQUMxQkYsZ0JBQUlHLElBQUosQ0FBU0QsS0FBS0UsR0FBZDtBQUNELFdBRkQ7QUFHQSxjQUFJQSxNQUFNSixJQUFJSyxNQUFKLENBQVcsVUFBQ0MsTUFBRCxFQUFRSixJQUFSLEVBQWFLLEtBQWIsRUFBbUJQLEdBQW5CLEVBQTJCO0FBQzVDLG1CQUFPUSxXQUFXRixNQUFYLElBQW1CRSxXQUFXTixJQUFYLENBQTFCO0FBQ0gsV0FGUyxDQUFWO0FBR0EsaUJBQU9FLEdBQVA7QUFDRDtBQUNELGVBQU8sR0FBUDtBQUNELE9BbkNRO0FBb0NUSyxjQXBDUyxzQkFvQ0M7QUFDUixZQUFHLEtBQUs3QixVQUFMLENBQWdCbUIsTUFBaEIsSUFBMEIsQ0FBN0IsRUFBZ0M7QUFDOUIsY0FBSUMsTUFBTSxFQUFWO0FBQ0EsZUFBS3BCLFVBQUwsQ0FBZ0JxQixHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQVE7QUFDMUJGLGdCQUFJRyxJQUFKLENBQVNELEtBQUtqQixLQUFMLEdBQWFpQixLQUFLRSxHQUEzQjtBQUNELFdBRkQ7QUFHQSxjQUFJQSxNQUFNSixJQUFJSyxNQUFKLENBQVcsVUFBQ0MsTUFBRCxFQUFRSixJQUFSLEVBQWFLLEtBQWIsRUFBbUJQLEdBQW5CLEVBQTJCO0FBQzVDLG1CQUFPUSxXQUFXRixNQUFYLElBQW1CRSxXQUFXTixJQUFYLENBQTFCO0FBQ0gsV0FGUyxDQUFWO0FBR0EsaUJBQU9FLEdBQVA7QUFDRDtBQUNELGVBQU8sR0FBUDtBQUNELE9BaERRO0FBaURUTSxZQWpEUyxvQkFpREQ7QUFDTixlQUFRLEtBQUt4QixXQUFMLEdBQW1CLEtBQUt1QixRQUF4QixHQUFtQyxDQUFuQyxHQUF1QyxDQUF2QyxHQUEwQyxLQUFLdkIsV0FBTCxHQUFtQixLQUFLdUIsUUFBMUU7QUFDRDtBQW5EUSxLLFFBc0RYRSxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDRTtBQUNSQyxnQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxhQUFLdkMsSUFBTCxHQUFZLENBQUMsS0FBS0EsSUFBbEI7QUFDRCxPQUpPO0FBS1J3QyxlQUxRLHVCQUtHO0FBQ1QsYUFBS3hDLElBQUwsR0FBWSxLQUFaO0FBQ0QsT0FQTztBQVFSeUMsY0FSUSxzQkFRRTtBQUNSLGFBQUtwQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0QsT0FWTzs7QUFXRjtBQUNOcUMsY0FaUSxvQkFZQ1YsS0FaRCxFQVlPTCxJQVpQLEVBWVk7QUFDbEJXLGdCQUFRQyxHQUFSLENBQVksR0FBWixFQUFnQlAsS0FBaEIsRUFBc0JMLElBQXRCO0FBQ0EsWUFBRyxLQUFLdEIsVUFBTCxDQUFnQm1CLE1BQWhCLElBQTBCLENBQTdCLEVBQStCO0FBQzdCLGVBQUksSUFBSW1CLElBQUksQ0FBWixFQUFnQkEsSUFBSSxLQUFLdEMsVUFBTCxDQUFnQm1CLE1BQXBDLEVBQTZDbUIsR0FBN0MsRUFBa0Q7QUFDaEQsZ0JBQUcsS0FBS3RDLFVBQUwsQ0FBZ0JzQyxDQUFoQixFQUFtQnRCLEVBQW5CLElBQXlCTSxLQUFLTixFQUFqQyxFQUFxQztBQUNuQyxrQkFBRyxLQUFLaEIsVUFBTCxDQUFnQnNDLENBQWhCLEVBQW1CZCxHQUFuQixJQUEwQixDQUE3QixFQUErQjtBQUM3QixxQkFBS3hCLFVBQUwsQ0FBZ0J1QyxNQUFoQixDQUF1QkQsQ0FBdkIsRUFBeUIsQ0FBekI7QUFDRCxlQUZELE1BRUs7QUFDSCxxQkFBS3RDLFVBQUwsQ0FBZ0JzQyxDQUFoQixFQUFtQmQsR0FBbkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGLE9BekJPOztBQTBCUjtBQUNBZ0IsVUEzQlEsZ0JBMkJIYixLQTNCRyxFQTJCR0wsSUEzQkgsRUEyQlE7QUFDZEEsYUFBS2pCLEtBQUwsR0FBYXVCLFdBQVdOLEtBQUtqQixLQUFoQixDQUFiO0FBQ0FpQixhQUFLRSxHQUFMLEdBQVcsQ0FBWDtBQUNBLFlBQUljLElBQUksS0FBS0csUUFBTCxDQUFjLEtBQUt6QyxVQUFuQixFQUE4QixJQUE5QixFQUFtQ3NCLEtBQUtOLEVBQXhDLENBQVI7QUFDRSxZQUFHc0IsSUFBSSxDQUFQLEVBQVM7QUFDUCxlQUFLdEMsVUFBTCxDQUFnQnVCLElBQWhCLENBQXFCRCxJQUFyQjtBQUNELFNBRkQsTUFFSztBQUNILGVBQUt0QixVQUFMLENBQWdCc0MsQ0FBaEIsRUFBbUJkLEdBQW5CO0FBQ0Q7QUFDSixPQXBDTztBQXFDUmtCLGFBckNRLHFCQXFDQztBQUNQLFlBQUcsS0FBSzFDLFVBQUwsQ0FBZ0JtQixNQUFoQixJQUEwQixDQUE3QixFQUErQjtBQUM3QndCLGFBQUdDLFNBQUgsQ0FBYTtBQUNYQyxtQkFBTyxXQURJO0FBRVhDLGtCQUFNLE1BRks7QUFHWEMsc0JBQVU7QUFIQyxXQUFiO0FBS0QsU0FORCxNQU1NLElBQUcsS0FBS2pCLE1BQUwsR0FBYyxDQUFqQixFQUFtQjtBQUN2QmEsYUFBR0MsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLG1CQURJO0FBRVhDLGtCQUFNLE1BRks7QUFHWEMsc0JBQVU7QUFIQyxXQUFiO0FBS0QsU0FOSyxNQU1EO0FBQ0gsY0FBSXZDLFVBQVV3QyxLQUFLQyxTQUFMLENBQWUsS0FBS3pDLE9BQXBCLENBQWQ7QUFDQSxjQUFJMEMsY0FBY0YsS0FBS0MsU0FBTCxDQUFlLE1BQWYsQ0FBbEI7QUFDQSxjQUFJcEIsV0FBV21CLEtBQUtDLFNBQUwsQ0FBZSxLQUFLcEIsUUFBcEIsQ0FBZjtBQUNBLGNBQUlzQixXQUFXSCxLQUFLQyxTQUFMLENBQWUsS0FBS2pELFVBQXBCLENBQWY7QUFDQTJDLGFBQUdTLFVBQUgsQ0FBYztBQUNWQyxpQkFBSywyQkFBMkI3QyxPQUEzQixHQUFxQyxlQUFyQyxHQUF1RDBDLFdBQXZELEdBQW9FLFlBQXBFLEdBQW1GckIsUUFBbkYsR0FBOEYsWUFBOUYsR0FBNkdzQjtBQUR4RyxXQUFkO0FBR0Q7QUFFRjtBQTVETyxLOzs7Ozs0QkE4REYsQ0FDUDs7OzhCQUVTLENBRVQ7Ozs4QkFFUTtBQUNQbEIsY0FBUUMsR0FBUixDQUFZLElBQVo7QUFDRDs7OztFQXRLK0JvQixlQUFLQyxTOztrQkFBbEJqRSxJIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FydCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGZsYWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICBjaG9vc2VMaXN0OntcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgY2F0TGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRlYWxMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYXJ0OntcbiAgICAgICAgcHJpY2U6MzlcbiAgICAgIH0sXG4gICAgICBmaW5pdGVTdGFydDo4MCxcbiAgICAgIC8vIGZvb2RTdW1tYXJ5OjIsXG4gICAgICBjb2xvckxpc3Q6WydyZWQnLCdncmVlbiddLFxuICAgICAgbWVzc2FnZTp7XG4gICAgICAgIGFkZHJlc3M6J+ilv+Wuiei9r+S7tuWbrScsXG4gICAgICAgIG5hbWU6J+WFsOato+m+mScsXG4gICAgICAgIHNleDonbWFsZScsXG4gICAgICAgIHRlbDonMDAwMDAwMDAwMCcsXG4gICAgICAgIGNhbnRlZTon5LiA6aOf5aCCJ1xuICAgICAgfSxcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgICBsaXN0KCl7ICAgICAgIFxuICAgICAgICAgIHZhciBkYXRhID0gW3tcbiAgICAgICAgICAgIG5hbWU6XCLng63mjqjovqPotKdcIixcbiAgICAgICAgICAgIGlkOicxJyxcbiAgICAgICAgICAgIGZvb2Q6W3tcbiAgICAgICAgICAgICAgJ25hbWUnOifphbjovqPps5XpsbwnLFxuICAgICAgICAgICAgICAnaWQnOicnLFxuICAgICAgICAgICAgICAncHJpY2UnOjIwLjUsXG4gICAgICAgICAgICAgICdzdW0nOiczJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgIG5hbWU6XCLlpZfppJDoj5zlk4FcIixcbiAgICAgICAgICAgIGlkOicyJyxcbiAgICAgICAgICAgIGZvb2Q6W3tcbiAgICAgICAgICAgICAgJ25hbWUnOiflrZXlpoflpZfppJAnLFxuICAgICAgICAgICAgICAnaWQnOicnLFxuICAgICAgICAgICAgICAncHJpY2UnOjIwLjUsXG4gICAgICAgICAgICAgICdzdW0nOicxJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XVxuICAgICAgICByZXR1cm4gZGF0YSA7XG4gICAgfSxcbiAgICAgIGZvb2RTdW1tYXJ5KCl7XG4gICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdC5sZW5ndGggIT0gMCApe1xuICAgICAgICAgIGxldCBhcnIgPSBbXSA7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0Lm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0uc3VtKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgbGV0IHN1bSA9IGFyci5yZWR1Y2UoKHJlc3VsdCxpdGVtLGluZGV4LGFycikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyZXN1bHQpK3BhcnNlRmxvYXQoaXRlbSkgXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gc3VtXG4gICAgICAgIH0gICAgICBcbiAgICAgICAgcmV0dXJuIFwiMFwiXG4gICAgICB9LFxuICAgICAgc3VtUHJpY2UoKXtcbiAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0Lmxlbmd0aCAhPSAwICl7XG4gICAgICAgICAgbGV0IGFyciA9IFtdIDtcbiAgICAgICAgICB0aGlzLmNob29zZUxpc3QubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgYXJyLnB1c2goaXRlbS5wcmljZSAqIGl0ZW0uc3VtKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgbGV0IHN1bSA9IGFyci5yZWR1Y2UoKHJlc3VsdCxpdGVtLGluZGV4LGFycikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyZXN1bHQpK3BhcnNlRmxvYXQoaXRlbSkgXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gc3VtXG4gICAgICAgIH0gICAgICBcbiAgICAgICAgcmV0dXJuIFwiMFwiXG4gICAgICB9LFxuICAgICAgZmluaXRlKCl7XG4gICAgICAgIHJldHVybiAgdGhpcy5maW5pdGVTdGFydCAtIHRoaXMuc3VtUHJpY2UgPCAwID8gMCA6dGhpcy5maW5pdGVTdGFydCAtIHRoaXMuc3VtUHJpY2UgO1xuICAgICAgfSxcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd0xpc3QoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93XCIpO1xuICAgICAgICB0aGlzLmZsYWcgPSAhdGhpcy5mbGFnO1xuICAgICAgfSxcbiAgICAgIGNsb3NlTGlzdCgpe1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBjbGVhckNhdCgpe1xuICAgICAgICB0aGlzLmNob29zZUxpc3QgPSBbXSA7XG4gICAgICB9LFxuICAgICAgICAgICAgLy/lh4/lsJHllYblk4FcbiAgICAgIHN1YnRyYWN0KGluZGV4LGl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNcIixpbmRleCxpdGVtKTtcbiAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0Lmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHRoaXMuY2hvb3NlTGlzdC5sZW5ndGggOyBpICsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdFtpXS5pZCA9PSBpdGVtLmlkICl7XG4gICAgICAgICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gPT0gMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtIC0tIDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8v5aKe5Yqg5ZWG5ZOBXG4gICAgICBwbHVzKGluZGV4LGl0ZW0pe1xuICAgICAgICBpdGVtLnByaWNlID0gcGFyc2VGbG9hdChpdGVtLnByaWNlKTtcbiAgICAgICAgaXRlbS5zdW0gPSAxIDtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbmRFbGVtKHRoaXMuY2hvb3NlTGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgICAgaWYoaSA8IDApe1xuICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtICsrIDtcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWNjb3VudCgpe1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3QubGVuZ3RoID09IDApe1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+ivt+iHs+WwkemAieaLqeS4gOagt+iPnOWTgScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZmluaXRlID4gMCl7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn6LSt54mp6I+c5Y2V5pyq5ruh6Laz6LW36YCB5Lu377yM6K+35YaN5oyR6YCJ5LiL5Y2VJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdmFyIG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm1lc3NhZ2UpXG4gICAgICAgICAgdmFyIGNob29zZWRUaW1lID0gSlNPTi5zdHJpbmdpZnkoXCLnq4vljbPpgIHlh7pcIikgO1xuICAgICAgICAgIHZhciBzdW1QcmljZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3VtUHJpY2UpIDtcbiAgICAgICAgICB2YXIgZm9vZExpc3QgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNob29zZUxpc3QpO1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3N1Ym1pdD9tZXNzYWdlPVwiICsgbWVzc2FnZSArIFwiJmNob29zZWRUaW1lPVwiICsgY2hvb3NlZFRpbWUgK1wiJnN1bVByaWNlPVwiICsgc3VtUHJpY2UgKyBcIiZmb29kTGlzdD1cIiArIGZvb2RMaXN0XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcblxuICAgIH1cblxuICAgIGFjY291bnQoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwi57uT566XXCIpXG4gICAgfVxuXG5cbiAgfVxuIl19