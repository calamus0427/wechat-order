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
      enableBackToTop: true,
      scrollFlag: false
    }, _this.watch = {
      toView: function toView(newView, oldView) {
        if (newView == oldView) {
          this.scrollFlag = true;
        } else {
          this.scrollFlag = false;
        }
        console.log("watch", newView, oldView);
      }
    }, _this.computed = {
      isCollectList: function isCollectList() {
        return this.type === 'collect';
      }
    }, _this.methods = {
      touchstart: function touchstart(e) {
        console.log("start", e);
        this.scrollFlag = true;
      },
      touchmove: function touchmove(e) {
        console.log("move", e);
      },
      touchcancel: function touchcancel(e) {
        this.scrollFlag = false;
      },
      scroll: function scroll(e) {
        // console.log("scroll",this.scrollFlag)
        // this.scrollFlag = true ;
        if (this.scrollFlag) {
          var sit = parseInt(e.detail.scrollTop / 185) + 1;
          this.$emit('scroll', sit);
        }
        // console.log("e",e)    
        // let sit = parseInt(e.detail.scrollTop / 183) ;
        //   this.$emit('scroll', sit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiY29tcG9uZW50cyIsIlN0YXJzIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInR3b1dheSIsImNob29zZUxpc3QiLCJ0aXRsZSIsIlN0cmluZyIsInN0YXIiLCJsb2FkaW5nIiwiQm9vbGVhbiIsIm5vTW9yZSIsImNhdExpc3QiLCJkZWFsTGlzdCIsInRvVmlldyIsImRhdGEiLCJjZXNoaSIsInN0YXIxIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiYW5pbWF0aW9uU2Nyb2xsIiwiZW5hYmxlQmFja1RvVG9wIiwic2Nyb2xsRmxhZyIsIndhdGNoIiwibmV3VmlldyIsIm9sZFZpZXciLCJjb25zb2xlIiwibG9nIiwiY29tcHV0ZWQiLCJpc0NvbGxlY3RMaXN0IiwibWV0aG9kcyIsInRvdWNoc3RhcnQiLCJlIiwidG91Y2htb3ZlIiwidG91Y2hjYW5jZWwiLCJzY3JvbGwiLCJzaXQiLCJwYXJzZUludCIsImRldGFpbCIsInNjcm9sbFRvcCIsIiRlbWl0Iiwic3VidHJhY3QiLCJpbmRleCIsIml0ZW0iLCJpIiwiZmluZEVsZW0iLCJpZCIsImoiLCJzdW0iLCJzcGxpY2UiLCJwbHVzIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwicHVzaCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLFUsR0FBYTtBQUNYQyxhQUFPQTtBQURJLEssUUFHYkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVMsRUFGTDtBQUdKQyxnQkFB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aEIsQ0FBcUJWLElBQXJCO0FBQ0QsU0FGRCxNQUVLO0FBQ0gsZUFBS3hDLFVBQUwsQ0FBZ0J5QyxDQUFoQixFQUFtQkksR0FBbkI7QUFDRDtBQUNGO0FBM0RPLEs7Ozs7RUFyRjBCTSxlQUFLQyxTOztrQkFBdEJoRSxRIiwiZmlsZSI6ImZvb2RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IFN0YXJzIGZyb20gJy4vc3RhcnMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9vZExpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIFN0YXJzOiBTdGFyc1xuICAgIH1cbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgY2hvb3NlTGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ+aOqOiNkOi/veeVquihqCdcbiAgICAgIH0sXG4gICAgICBzdGFyOntcbiAgICAgICAgZGVmYXVsdDonJ1xuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBub01vcmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogW3R5cGUg5YiX6KGo57G75Z6L77ya5bi46KeE5YiX6KGoL+aUtuiXj+WIl+ihqF1cbiAgICAgICAqIEB0eXBlIHtsaXN0L2NvbGxlY3R9XG4gICAgICAgKi9cbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnbGlzdCdcbiAgICAgIH0sXG4gICAgICBjYXRMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgZGVhbExpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICB0b1ZpZXc6e1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY2VzaGk6JzExMScsXG4gICAgICBzdGFyMToxLFxuICAgICAgaWNvbl9leWU6ICcvaW1hZ2VzL2ljb24vYWRkQmVmb3JlLmpwZycsXG4gICAgICBpY29uX2V5ZV9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vYWRkQWZ0ZXIuanBnJyxcbiAgICAgIGljb25fc3RhcjogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXJAMngucG5nJyxcbiAgICAgIGljb25fc3Rhcl9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyLWFjdGl2ZUAyeC5wbmcnLFxuICAgICAgYW5pbWF0aW9uU2Nyb2xsOnRydWUsXG4gICAgICBlbmFibGVCYWNrVG9Ub3A6dHJ1ZSxcbiAgICAgIHNjcm9sbEZsYWc6ZmFsc2VcbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICAgIHRvVmlldyhuZXdWaWV3LG9sZFZpZXcpe1xuICAgICAgICBpZihuZXdWaWV3ID09IG9sZFZpZXcpe1xuICAgICAgICAgIHRoaXMuc2Nyb2xsRmxhZyA9IHRydWUgO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLnNjcm9sbEZsYWcgPSBmYWxzZSA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ3YXRjaFwiLG5ld1ZpZXcsb2xkVmlldyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBpc0NvbGxlY3RMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnY29sbGVjdCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG91Y2hzdGFydChlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydFwiLGUpXG4gICAgICAgIHRoaXMuc2Nyb2xsRmxhZyA9IHRydWUgO1xuICAgICAgfSxcbiAgICAgIHRvdWNobW92ZShlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3ZlXCIsZSlcbiAgICAgIH0sXG4gICAgICB0b3VjaGNhbmNlbChlKXtcbiAgICAgICAgdGhpcy5zY3JvbGxGbGFnID0gZmFsc2UgO1xuICAgICB9LFxuICAgICAgc2Nyb2xsKGUpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNjcm9sbFwiLHRoaXMuc2Nyb2xsRmxhZylcbiAgICAgICAgICAvLyB0aGlzLnNjcm9sbEZsYWcgPSB0cnVlIDtcbiAgICAgICAgaWYodGhpcy5zY3JvbGxGbGFnKXtcbiAgICAgICAgICBsZXQgc2l0ID0gcGFyc2VJbnQoZS5kZXRhaWwuc2Nyb2xsVG9wIC8gMTg1KSsxIDtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGwnLCBzaXQpO1xuICAgICAgICB9ICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlXCIsZSkgICAgXG4gICAgICAgIC8vIGxldCBzaXQgPSBwYXJzZUludChlLmRldGFpbC5zY3JvbGxUb3AgLyAxODMpIDtcbiAgICAgICAgLy8gICB0aGlzLiRlbWl0KCdzY3JvbGwnLCBzaXQpO1xuICAgICAgfSxcbiAgICAgIC8v5YeP5bCR5ZWG5ZOBXG4gICAgICBzdWJ0cmFjdChpbmRleCxpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzXCIsaW5kZXgsaXRlbSk7XG4gICAgICAgIHZhciBpID0gdGhpcy5maW5kRWxlbSh0aGlzLmNob29zZUxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICB2YXIgaiA9IHRoaXMuZmluZEVsZW0odGhpcy5saXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJqXCIsailcbiAgICAgICAgaWYoaiA+PSAwKXtcbiAgICAgICAgICBpZih0aGlzLmxpc3Rbal0uc3VtIDwgMSl7XG4gICAgICAgICAgICB0aGlzLmxpc3Rbal0uc3VtID09IDBcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubGlzdFtpXS5zdW0gLS0gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihpID49IDApe1xuICAgICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gPT0gMSl7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3Quc3BsaWNlKGksMSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtIC0tIDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvL+WinuWKoOWVhuWTgVxuICAgICAgcGx1cyhpbmRleCxpdGVtKXtcblxuICAgICAgICBpdGVtLnByaWNlID0gcGFyc2VGbG9hdChpdGVtLnByaWNlKTtcbiAgICAgICAgaXRlbS5zdW0gPSAxIDtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbmRFbGVtKHRoaXMuY2hvb3NlTGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgIHZhciBqID0gdGhpcy5maW5kRWxlbSh0aGlzLmxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImpcIixqKVxuICAgICAgICBpZihqID49IDApe1xuICAgICAgICAgIHRoaXMubGlzdFtqXS5zdW0gKytcbiAgICAgICAgfVxuICAgICAgICBpZihpIDwgMCl7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gKysgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=