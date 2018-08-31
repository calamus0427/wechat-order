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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiY29tcG9uZW50cyIsIlN0YXJzIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInR3b1dheSIsImNob29zZUxpc3QiLCJ0aXRsZSIsIlN0cmluZyIsInN0YXIiLCJsb2FkaW5nIiwiQm9vbGVhbiIsIm5vTW9yZSIsImNhdExpc3QiLCJkZWFsTGlzdCIsInRvVmlldyIsImRhdGEiLCJjZXNoaSIsInN0YXIxIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiY29tcHV0ZWQiLCJpc0NvbGxlY3RMaXN0IiwibWV0aG9kcyIsInN1YnRyYWN0IiwiaW5kZXgiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImkiLCJmaW5kRWxlbSIsImlkIiwiaiIsInN1bSIsInNwbGljZSIsInBsdXMiLCJwcmljZSIsInBhcnNlRmxvYXQiLCJwdXNoIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsVSxHQUFhO0FBQ1hDLGFBQU9BO0FBREksSyxRQUdiQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxFQUZMO0FBR0pDLGdCQUFRO0FBSEosT0FEQTtBQU1OQyxrQkFBVztBQUNUSixjQUFNQyxNQURHO0FBRVRDLGlCQUFTLEVBRkE7QUFHVEMsZ0JBQVE7QUFIQyxPQU5MO0FBV05FLGFBQU87QUFDTEwsY0FBTU0sTUFERDtBQUVMSixpQkFBUztBQUZKLE9BWEQ7QUFlTkssWUFBSztBQUNITCxpQkFBUTtBQURMLE9BZkM7QUFrQk5NLGVBQVM7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TUFFSztBQUNILGVBQUt0QixVQUFMLENBQWdCeUIsQ0FBaEIsRUFBbUJJLEdBQW5CO0FBQ0Q7QUFDRjtBQXRDTyxLOzs7O0VBdkUwQk0sZUFBS0MsUzs7a0JBQXRCaEQsUSIsImZpbGUiOiJmb29kTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBTdGFycyBmcm9tICcuL3N0YXJzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvb2RMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBTdGFyczogU3RhcnNcbiAgICB9XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgcHJvcHMgPSB7XG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNob29zZUxpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICfmjqjojZDov73nlarooagnXG4gICAgICB9LFxuICAgICAgc3Rhcjp7XG4gICAgICAgIGRlZmF1bHQ6JydcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm9Nb3JlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFt0eXBlIOWIl+ihqOexu+Wei++8muW4uOinhOWIl+ihqC/mlLbol4/liJfooahdXG4gICAgICAgKiBAdHlwZSB7bGlzdC9jb2xsZWN0fVxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXG4gICAgICB9LFxuICAgICAgY2F0TGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRlYWxMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgdG9WaWV3OntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNlc2hpOicxMTEnLFxuICAgICAgc3RhcjE6MSxcbiAgICAgIGljb25fZXllOiAnL2ltYWdlcy9pY29uL2FkZEJlZm9yZS5qcGcnLFxuICAgICAgaWNvbl9leWVfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2FkZEFmdGVyLmpwZycsXG4gICAgICBpY29uX3N0YXI6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyQDJ4LnBuZycsXG4gICAgICBpY29uX3N0YXJfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2ljb24tc3Rhci1hY3RpdmVAMngucG5nJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaXNDb2xsZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2NvbGxlY3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8v5YeP5bCR5ZWG5ZOBXG4gICAgICBzdWJ0cmFjdChpbmRleCxpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzXCIsaW5kZXgsaXRlbSk7XG4gICAgICAgIHZhciBpID0gdGhpcy5maW5kRWxlbSh0aGlzLmNob29zZUxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICB2YXIgaiA9IHRoaXMuZmluZEVsZW0odGhpcy5saXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJqXCIsailcbiAgICAgICAgaWYoaiA+PSAwKXtcbiAgICAgICAgICBpZih0aGlzLmxpc3Rbal0uc3VtIDwgMSl7XG4gICAgICAgICAgICB0aGlzLmxpc3Rbal0uc3VtID09IDBcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubGlzdFtpXS5zdW0gLS0gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihpID49IDApe1xuICAgICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gPT0gMSl7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3Quc3BsaWNlKGksMSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtIC0tIDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvL+WinuWKoOWVhuWTgVxuICAgICAgcGx1cyhpbmRleCxpdGVtKXtcblxuICAgICAgICBpdGVtLnByaWNlID0gcGFyc2VGbG9hdChpdGVtLnByaWNlKTtcbiAgICAgICAgaXRlbS5zdW0gPSAxIDtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbmRFbGVtKHRoaXMuY2hvb3NlTGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgIHZhciBqID0gdGhpcy5maW5kRWxlbSh0aGlzLmxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImpcIixqKVxuICAgICAgICBpZihqID49IDApe1xuICAgICAgICAgIHRoaXMubGlzdFtqXS5zdW0gKytcbiAgICAgICAgfVxuICAgICAgICBpZihpIDwgMCl7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gKysgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=