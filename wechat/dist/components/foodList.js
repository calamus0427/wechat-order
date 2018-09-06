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
      }
    }, _this.computed = {
      isCollectList: function isCollectList() {
        return this.type === 'collect';
      }
    }, _this.methods = {
      touchstart: function touchstart(e) {
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
        // let sit = parseInt(e.detail.scrollTop / 183) ;
        //   this.$emit('scroll', sit);
      },

      //减少商品
      subtract: function subtract(index, item) {
        console.log("subtract click", "item=>", item, "foodList=>", this.list, "chooseList=>", this.chooseList);

        var i = this.findElem(this.chooseList, "id", item.id);
        var j = this.findElem(this.list, "id", item.id);

        console.log("listj", j, "choose", i);
        if (i > -1 && j > -1) {
          if (this.list[j].sum <= 1) {
            this.list[j].sum = 0;
            this.chooseList.splice(i, 1);
          } else {
            console.log("!<=1");

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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return foodList;
}(_wepy2.default.component);

exports.default = foodList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiY29tcG9uZW50cyIsIlN0YXJzIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInR3b1dheSIsImNob29zZUxpc3QiLCJ0aXRsZSIsIlN0cmluZyIsInN0YXIiLCJsb2FkaW5nIiwiQm9vbGVhbiIsIm5vTW9yZSIsImNhdExpc3QiLCJkZWFsTGlzdCIsInRvVmlldyIsImRhdGEiLCJjZXNoaSIsInN0YXIxIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiYW5pbWF0aW9uU2Nyb2xsIiwiZW5hYmxlQmFja1RvVG9wIiwic2Nyb2xsRmxhZyIsIndhdGNoIiwibmV3VmlldyIsIm9sZFZpZXciLCJjb21wdXRlZCIsImlzQ29sbGVjdExpc3QiLCJtZXRob2RzIiwidG91Y2hzdGFydCIsImUiLCJ0b3VjaG1vdmUiLCJjb25zb2xlIiwibG9nIiwidG91Y2hjYW5jZWwiLCJzY3JvbGwiLCJzaXQiLCJwYXJzZUludCIsImRldGFpbCIsInNjcm9sbFRvcCIsIiRlbWl0Iiwic3VidHJhY3QiLCJpbmRleCIsIml0ZW0iLCJpIiwiZmluZEVsZW0iLCJpZCIsImoiLCJzdW0iLCJzcGxpY2UiLCJwbHVzIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwicHVzaCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLFUsR0FBYTtBQUNYQyxhQUFPQTtBQURJLEssUUFHYkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVMsRUFGTDtBQUdKQyxnQkFB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aEUsUSIsImZpbGUiOiJmb29kTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBTdGFycyBmcm9tICcuL3N0YXJzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvb2RMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBTdGFyczogU3RhcnNcbiAgICB9XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgcHJvcHMgPSB7XG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNob29zZUxpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICfmjqjojZDov73nlarooagnXG4gICAgICB9LFxuICAgICAgc3Rhcjp7XG4gICAgICAgIGRlZmF1bHQ6JydcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm9Nb3JlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFt0eXBlIOWIl+ihqOexu+Wei++8muW4uOinhOWIl+ihqC/mlLbol4/liJfooahdXG4gICAgICAgKiBAdHlwZSB7bGlzdC9jb2xsZWN0fVxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXG4gICAgICB9LFxuICAgICAgY2F0TGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRlYWxMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgdG9WaWV3OntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNlc2hpOicxMTEnLFxuICAgICAgc3RhcjE6MSxcbiAgICAgIGljb25fZXllOiAnL2ltYWdlcy9pY29uL2FkZEJlZm9yZS5qcGcnLFxuICAgICAgaWNvbl9leWVfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2FkZEFmdGVyLmpwZycsXG4gICAgICBpY29uX3N0YXI6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyQDJ4LnBuZycsXG4gICAgICBpY29uX3N0YXJfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2ljb24tc3Rhci1hY3RpdmVAMngucG5nJyxcbiAgICAgIGFuaW1hdGlvblNjcm9sbDp0cnVlLFxuICAgICAgZW5hYmxlQmFja1RvVG9wOnRydWUsXG4gICAgICBzY3JvbGxGbGFnOmZhbHNlXG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgICB0b1ZpZXcobmV3VmlldyxvbGRWaWV3KXtcbiAgICAgICAgaWYobmV3VmlldyA9PSBvbGRWaWV3KXtcbiAgICAgICAgICB0aGlzLnNjcm9sbEZsYWcgPSB0cnVlIDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5zY3JvbGxGbGFnID0gZmFsc2UgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBpc0NvbGxlY3RMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnY29sbGVjdCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG91Y2hzdGFydChlKXtcbiAgICAgICAgdGhpcy5zY3JvbGxGbGFnID0gdHJ1ZSA7XG4gICAgICB9LFxuICAgICAgdG91Y2htb3ZlKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmVcIixlKVxuICAgICAgfSxcbiAgICAgIHRvdWNoY2FuY2VsKGUpe1xuICAgICAgICB0aGlzLnNjcm9sbEZsYWcgPSBmYWxzZSA7XG4gICAgIH0sXG4gICAgICBzY3JvbGwoZSl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2Nyb2xsXCIsdGhpcy5zY3JvbGxGbGFnKVxuICAgICAgICAgIC8vIHRoaXMuc2Nyb2xsRmxhZyA9IHRydWUgO1xuICAgICAgICBpZih0aGlzLnNjcm9sbEZsYWcpe1xuICAgICAgICAgIGxldCBzaXQgPSBwYXJzZUludChlLmRldGFpbC5zY3JvbGxUb3AgLyAxODUpKzEgO1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ3Njcm9sbCcsIHNpdCk7XG4gICAgICAgIH0gICAgIFxuICAgICAgICAvLyBsZXQgc2l0ID0gcGFyc2VJbnQoZS5kZXRhaWwuc2Nyb2xsVG9wIC8gMTgzKSA7XG4gICAgICAgIC8vICAgdGhpcy4kZW1pdCgnc2Nyb2xsJywgc2l0KTtcbiAgICAgIH0sXG4gICAgICAvL+WHj+WwkeWVhuWTgVxuICAgICAgc3VidHJhY3QoaW5kZXgsaXRlbSl7XG4gICAgICAgY29uc29sZS5sb2coXCJzdWJ0cmFjdCBjbGlja1wiLFwiaXRlbT0+XCIsaXRlbSxcImZvb2RMaXN0PT5cIix0aGlzLmxpc3QsXCJjaG9vc2VMaXN0PT5cIix0aGlzLmNob29zZUxpc3QpXG5cbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZmluZEVsZW0odGhpcy5jaG9vc2VMaXN0LFwiaWRcIixpdGVtLmlkKTtcbiAgICAgICAgY29uc3QgaiA9IHRoaXMuZmluZEVsZW0odGhpcy5saXN0LFwiaWRcIixpdGVtLmlkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RqXCIsaixcImNob29zZVwiLGkpXG4gICAgICAgIGlmKGkgPiAtMSAmJiBqID4gLTEpe1xuICAgICAgICAgICAgICBpZih0aGlzLmxpc3Rbal0uc3VtIDw9IDEpe1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFtqXS5zdW0gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIhPD0xXCIpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmxpc3Rbal0uc3VtIC0tIDtcbiAgICAgICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtIC0tIDtcbiAgICAgICAgICAgICAgfSAgICAgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvL+WinuWKoOWVhuWTgVxuICAgICAgcGx1cyhpbmRleCxpdGVtKXtcblxuICAgICAgICBpdGVtLnByaWNlID0gcGFyc2VGbG9hdChpdGVtLnByaWNlKTtcbiAgICAgICAgaXRlbS5zdW0gPSAxIDtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbmRFbGVtKHRoaXMuY2hvb3NlTGlzdCxcImlkXCIsaXRlbS5pZCk7XG4gICAgICAgIHZhciBqID0gdGhpcy5maW5kRWxlbSh0aGlzLmxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICBpZihqID49IDApe1xuICAgICAgICAgIHRoaXMubGlzdFtqXS5zdW0gKytcbiAgICAgICAgfVxuICAgICAgICBpZihpIDwgMCl7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gKysgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=