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
      icon_star_active: '/images/icon/icon-star-active@2x.png',
      animationScroll: true,
      enableBackToTop: true
    }, _this.computed = {
      isCollectList: function isCollectList() {
        return this.type === 'collect';
      }
    }, _this.methods = {
      scroll: function scroll(e) {
        // console.log(e)
        var sit = parseInt(e.detail.scrollTop / 180);
        this.$emit('scroll', sit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiY29tcG9uZW50cyIsIlN0YXJzIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInR3b1dheSIsImNob29zZUxpc3QiLCJ0aXRsZSIsIlN0cmluZyIsInN0YXIiLCJsb2FkaW5nIiwiQm9vbGVhbiIsIm5vTW9yZSIsImNhdExpc3QiLCJkZWFsTGlzdCIsInRvVmlldyIsImRhdGEiLCJjZXNoaSIsInN0YXIxIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiYW5pbWF0aW9uU2Nyb2xsIiwiZW5hYmxlQmFja1RvVG9wIiwiY29tcHV0ZWQiLCJpc0NvbGxlY3RMaXN0IiwibWV0aG9kcyIsInNjcm9sbCIsImUiLCJzaXQiLCJwYXJzZUludCIsImRldGFpbCIsInNjcm9sbFRvcCIsIiRlbWl0Iiwic3VidHJhY3QiLCJpbmRleCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiaSIsImZpbmRFbGVtIiwiaWQiLCJqIiwic3VtIiwic3BsaWNlIiwicGx1cyIsInByaWNlIiwicGFyc2VGbG9hdCIsInB1c2giLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxVLEdBQWE7QUFDWEMsYUFBT0E7QUFESSxLLFFBR2JDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTLEVBRkw7QUFHSkMsZ0JBQVE7QUFISixPQURBO0FBTU5DLGtCQUFXO0FBQ1RKLGNBQU1DLE1BREc7QUFFVEMsaUJBQVMsRUFGQTtBQUdUQyxnQkFBUTtBQUhDLE9BTkw7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QVI7QUFDQSxZQUFJQyxJQUFJLEtBQUtGLFFBQUwsQ0FBYyxLQUFLeEMsSUFBbkIsRUFBd0IsSUFBeEIsRUFBNkJvQyxLQUFLSyxFQUFsQyxDQUFSO0FBQ0FKLGdCQUFRQyxHQUFSLENBQVksR0FBWixFQUFnQkksQ0FBaEI7QUFDQSxZQUFHQSxLQUFLLENBQVIsRUFBVTtBQUNSLGVBQUsxQyxJQUFMLENBQVUwQyxDQUFWLEVBQWFDLEdBQWI7QUFDRDtBQUNELFlBQUdKLElBQUksQ0FBUCxFQUFTO0FBQ1AsZUFBS2xDLFVBQUwsQ0FBZ0IyQyxJQUFoQixDQUFxQlosSUFBckI7QUFDRCxTQUZELE1BRUs7QUFDSCxlQUFLL0IsVUFBTCxDQUFnQmtDLENBQWhCLEVBQW1CSSxHQUFuQjtBQUNEO0FBQ0Y7QUE1Q08sSzs7OztFQXpFMEJNLGVBQUtDLFM7O2tCQUF0QnpELFEiLCJmaWxlIjoiZm9vZExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuICBpbXBvcnQgU3RhcnMgZnJvbSAnLi9zdGFycydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBmb29kTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgU3RhcnM6IFN0YXJzXG4gICAgfVxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIHByb3BzID0ge1xuICAgICAgbGlzdDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBjaG9vc2VMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAn5o6o6I2Q6L+955Wq6KGoJ1xuICAgICAgfSxcbiAgICAgIHN0YXI6e1xuICAgICAgICBkZWZhdWx0OicnXG4gICAgICB9LFxuICAgICAgbG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG5vTW9yZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBbdHlwZSDliJfooajnsbvlnovvvJrluLjop4TliJfooagv5pS26JeP5YiX6KGoXVxuICAgICAgICogQHR5cGUge2xpc3QvY29sbGVjdH1cbiAgICAgICAqL1xuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdsaXN0J1xuICAgICAgfSxcbiAgICAgIGNhdExpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBkZWFsTGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRvVmlldzp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjZXNoaTonMTExJyxcbiAgICAgIHN0YXIxOjEsXG4gICAgICBpY29uX2V5ZTogJy9pbWFnZXMvaWNvbi9hZGRCZWZvcmUuanBnJyxcbiAgICAgIGljb25fZXllX2FjdGl2ZTogJy9pbWFnZXMvaWNvbi9hZGRBZnRlci5qcGcnLFxuICAgICAgaWNvbl9zdGFyOiAnL2ltYWdlcy9pY29uL2ljb24tc3RhckAyeC5wbmcnLFxuICAgICAgaWNvbl9zdGFyX2FjdGl2ZTogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXItYWN0aXZlQDJ4LnBuZycsXG4gICAgICBhbmltYXRpb25TY3JvbGw6dHJ1ZSxcbiAgICAgIGVuYWJsZUJhY2tUb1RvcDp0cnVlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBpc0NvbGxlY3RMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnY29sbGVjdCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2Nyb2xsKGUpe1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgbGV0IHNpdCA9IHBhcnNlSW50KGUuZGV0YWlsLnNjcm9sbFRvcCAvIDE4MCkgO1xuICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGwnLCBzaXQpO1xuICAgICAgICAgIFxuICAgICAgfSxcbiAgICAgIC8v5YeP5bCR5ZWG5ZOBXG4gICAgICBzdWJ0cmFjdChpbmRleCxpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzXCIsaW5kZXgsaXRlbSk7XG4gICAgICAgIHZhciBpID0gdGhpcy5maW5kRWxlbSh0aGlzLmNob29zZUxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICB2YXIgaiA9IHRoaXMuZmluZEVsZW0odGhpcy5saXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJqXCIsailcbiAgICAgICAgaWYoaiA+PSAwKXtcbiAgICAgICAgICBpZih0aGlzLmxpc3Rbal0uc3VtIDwgMSl7XG4gICAgICAgICAgICB0aGlzLmxpc3Rbal0uc3VtID09IDBcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubGlzdFtpXS5zdW0gLS0gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihpID49IDApe1xuICAgICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gPT0gMSl7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3Quc3BsaWNlKGksMSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtIC0tIDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvL+WinuWKoOWVhuWTgVxuICAgICAgcGx1cyhpbmRleCxpdGVtKXtcblxuICAgICAgICBpdGVtLnByaWNlID0gcGFyc2VGbG9hdChpdGVtLnByaWNlKTtcbiAgICAgICAgaXRlbS5zdW0gPSAxIDtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbmRFbGVtKHRoaXMuY2hvb3NlTGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgIHZhciBqID0gdGhpcy5maW5kRWxlbSh0aGlzLmxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImpcIixqKVxuICAgICAgICBpZihqID49IDApe1xuICAgICAgICAgIHRoaXMubGlzdFtqXS5zdW0gKytcbiAgICAgICAgfVxuICAgICAgICBpZihpIDwgMCl7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gKysgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=