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

var _stars = require('./stars.js');

var _stars2 = _interopRequireDefault(_stars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var foodList = function (_wepy$component) {
  _inherits(foodList, _wepy$component);

  function foodList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, foodList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = foodList.__proto__ || Object.getPrototypeOf(foodList)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      Stars: _stars2.default
    }, _this.mixins = [_base2.default, _http2.default], _this.props = {
      list: {
        type: Object,
        default: [],
        twoWay: true
      },
      chooseList: {
        type: Object,
        default: [],
        twoWay: true
      },
      title: {
        type: String,
        default: '推荐追番表'
      },
      star: {
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
      noMore: {
        type: Boolean,
        default: true
      },
      /**
       * [type 列表类型：常规列表/收藏列表]
       * @type {list/collect}
       */
      type: {
        type: String,
        default: 'list'
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
      },
      toView: {
        type: String,
        default: '',
        twoWay: true
      }
    }, _this.data = {
      ceshi: '111',
      star1: 1,
      icon_eye: '/images/icon/addBefore.jpg',
      icon_eye_active: '/images/icon/addAfter.jpg',
      icon_star: '/images/icon/icon-star@2x.png',
      icon_star_active: '/images/icon/icon-star-active@2x.png'
    }, _this.computed = {
      isCollectList: function isCollectList() {
        return this.type === 'collect';
      }
    }, _this.methods = {
      scroll: function scroll(e) {
        console.log(e);
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return foodList;
}(_wepy2.default.component);

exports.default = foodList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiY29tcG9uZW50cyIsIlN0YXJzIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInR3b1dheSIsImNob29zZUxpc3QiLCJ0aXRsZSIsIlN0cmluZyIsInN0YXIiLCJsb2FkaW5nIiwiQm9vbGVhbiIsIm5vTW9yZSIsImNhdExpc3QiLCJkZWFsTGlzdCIsInRvVmlldyIsImRhdGEiLCJjZXNoaSIsInN0YXIxIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiY29tcHV0ZWQiLCJpc0NvbGxlY3RMaXN0IiwibWV0aG9kcyIsInNjcm9sbCIsImUiLCJjb25zb2xlIiwibG9nIiwic3VidHJhY3QiLCJpbmRleCIsIml0ZW0iLCJpIiwiZmluZEVsZW0iLCJpZCIsImoiLCJzdW0iLCJzcGxpY2UiLCJwbHVzIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwicHVzaCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLFUsR0FBYTtBQUNYQyxhQUFPQTtBQURJLEssUUFHYkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVMsRUFGTDtBQUdKQyxnQkFBUTtBQUhKLE9BREE7QUFNTkMsa0JBQVc7QUFDVEosY0FBTUMsTUFERztBQUVUQyxpQkFBUyxFQUZBO0FBR1RDLGdCQUFRO0FBSEMsT0FOTDtBQVdORSxhQUFPO0FBQ0xMLGNBQU1NLE1BREQ7QUFFTEosaUJBQVM7QUFGSixPQVhEO0FBZU5LLFlBQUs7QUFDSEwsaUJBQVE7QUFETCxPQWZD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O0FBQ0QsWUFBR0osSUFBSSxDQUFQLEVBQVM7QUFDUCxlQUFLM0IsVUFBTCxDQUFnQm9DLElBQWhCLENBQXFCVixJQUFyQjtBQUNELFNBRkQsTUFFSztBQUNILGVBQUsxQixVQUFMLENBQWdCMkIsQ0FBaEIsRUFBbUJJLEdBQW5CO0FBQ0Q7QUFDRjtBQXpDTyxLOzs7O0VBdkUwQk0sZUFBS0MsUzs7a0JBQXRCbEQsUSIsImZpbGUiOiJmb29kTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBTdGFycyBmcm9tICcuL3N0YXJzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvb2RMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBTdGFyczogU3RhcnNcbiAgICB9XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgcHJvcHMgPSB7XG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNob29zZUxpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICfmjqjojZDov73nlarooagnXG4gICAgICB9LFxuICAgICAgc3Rhcjp7XG4gICAgICAgIGRlZmF1bHQ6JydcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm9Nb3JlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFt0eXBlIOWIl+ihqOexu+Wei++8muW4uOinhOWIl+ihqC/mlLbol4/liJfooahdXG4gICAgICAgKiBAdHlwZSB7bGlzdC9jb2xsZWN0fVxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXG4gICAgICB9LFxuICAgICAgY2F0TGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRlYWxMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgdG9WaWV3OntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNlc2hpOicxMTEnLFxuICAgICAgc3RhcjE6MSxcbiAgICAgIGljb25fZXllOiAnL2ltYWdlcy9pY29uL2FkZEJlZm9yZS5qcGcnLFxuICAgICAgaWNvbl9leWVfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2FkZEFmdGVyLmpwZycsXG4gICAgICBpY29uX3N0YXI6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyQDJ4LnBuZycsXG4gICAgICBpY29uX3N0YXJfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2ljb24tc3Rhci1hY3RpdmVAMngucG5nJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaXNDb2xsZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2NvbGxlY3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNjcm9sbChlKXtcbmNvbnNvbGUubG9nKGUpXG4gICAgICB9LFxuICAgICAgLy/lh4/lsJHllYblk4FcbiAgICAgIHN1YnRyYWN0KGluZGV4LGl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNcIixpbmRleCxpdGVtKTtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbmRFbGVtKHRoaXMuY2hvb3NlTGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgIHZhciBqID0gdGhpcy5maW5kRWxlbSh0aGlzLmxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImpcIixqKVxuICAgICAgICBpZihqID49IDApe1xuICAgICAgICAgIGlmKHRoaXMubGlzdFtqXS5zdW0gPCAxKXtcbiAgICAgICAgICAgIHRoaXMubGlzdFtqXS5zdW0gPT0gMFxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5saXN0W2ldLnN1bSAtLSA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGkgPj0gMCl7XG4gICAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0W2ldLnN1bSA9PSAxKXtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gLS0gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8v5aKe5Yqg5ZWG5ZOBXG4gICAgICBwbHVzKGluZGV4LGl0ZW0pe1xuXG4gICAgICAgIGl0ZW0ucHJpY2UgPSBwYXJzZUZsb2F0KGl0ZW0ucHJpY2UpO1xuICAgICAgICBpdGVtLnN1bSA9IDEgO1xuICAgICAgICB2YXIgaSA9IHRoaXMuZmluZEVsZW0odGhpcy5jaG9vc2VMaXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgdmFyIGogPSB0aGlzLmZpbmRFbGVtKHRoaXMubGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwialwiLGopXG4gICAgICAgIGlmKGogPj0gMCl7XG4gICAgICAgICAgdGhpcy5saXN0W2pdLnN1bSArK1xuICAgICAgICB9XG4gICAgICAgIGlmKGkgPCAwKXtcbiAgICAgICAgICB0aGlzLmNob29zZUxpc3QucHVzaChpdGVtKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0W2ldLnN1bSArKyA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==