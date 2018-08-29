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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = foodList.__proto__ || Object.getPrototypeOf(foodList)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Stars": { "xmlns:v-bind": "", "v-bind:star.once": "item.star" } }, _this.$events = {}, _this.components = {
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
      }
    }, _this.data = {
      ceshi: '111',
      icon_eye: '/images/icon/addBefore.jpg',
      icon_eye_active: '/images/icon/addAfter.jpg'
    }, _this.computed = {
      isCollectList: function isCollectList() {
        return this.type === 'collect';
      }
    }, _this.methods = {
      toStar: function toStar(book, index) {
        var _this2 = this;

        // 将要发生的收藏动作
        var isCollect = Boolean(book && +book.collected);
        var newType = isCollect ? 0 : 1;
        var newTypeText = newType ? '添加' : '取消';
        // 收藏本书
        this.$post({
          url: '',
          data: {
            book_ids: [book.id],
            type: newType
          }
        }, {
          success: function success(_ref2) {
            var code = _ref2.code,
                data = _ref2.data;

            // 重置本书收藏状态
            if (_this2.isObject(_this2.list[index])) {
              _this2.list[index].collected = newType;
            }
            wx.showToast({
              title: newTypeText + '\u6536\u85CF\uFF01',
              icon: 'success',
              duration: 1000
            });
          },
          fail: function fail(_ref3) {
            var code = _ref3.code,
                data = _ref3.data;

            // =============================== 调试代码 ===============================
            // this.book.collected = newType
            // =============================== 调试代码 ===============================
            wx.showToast({
              title: newTypeText + '\u6536\u85CF\u5931\u8D25\uFF01',
              icon: 'loading',
              image: '/images/icon/icon-cancel.png',
              duration: 1000
            });
          }
        });
      },
      subtract: function subtract(item) {
        console.log("s", item);
      },
      plus: function plus(item) {
        console.log("p=>", item);
        console.log("push=>", this.chooseList);

        this.chooseList.push(item);
        this.$apply();
        console.log("push=>", this.chooseList);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return foodList;
}(_wepy2.default.component);

exports.default = foodList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3RhcnMiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwidHdvV2F5IiwiY2hvb3NlTGlzdCIsInRpdGxlIiwiU3RyaW5nIiwic3RhciIsImxvYWRpbmciLCJCb29sZWFuIiwibm9Nb3JlIiwiZGF0YSIsImNlc2hpIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJjb21wdXRlZCIsImlzQ29sbGVjdExpc3QiLCJtZXRob2RzIiwidG9TdGFyIiwiYm9vayIsImluZGV4IiwiaXNDb2xsZWN0IiwiY29sbGVjdGVkIiwibmV3VHlwZSIsIm5ld1R5cGVUZXh0IiwiJHBvc3QiLCJ1cmwiLCJib29rX2lkcyIsImlkIiwic3VjY2VzcyIsImNvZGUiLCJpc09iamVjdCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiZmFpbCIsImltYWdlIiwic3VidHJhY3QiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInBsdXMiLCJwdXNoIiwiJGFwcGx5Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNwQkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixXQUF0QyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGFBQU9BO0FBREMsSyxRQUdWQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxFQUZMO0FBR0pDLGdCQUFRO0FBSEosT0FEQTtBQU1OQyxrQkFBVztBQUNUSixjQUFNQyxNQURHO0FBRVRDLGlCQUFTLEVBRkE7QUFHVEMsZ0JBQVE7QUFIQyxPQU5MO0FBV05FLGFBQU87QUFDTEwsY0FBTU0sTUFERDtBQUVMSixpQkFBUztBQUZKLE9BWEQ7QUFlTkssWUFBSztBQUNITCxpQkFBUTtBQURMLE9BZkM7QUFrQk5NLGVBQVM7QUFDUFIsY0FBTVMsT0FEQztBQUVQUCxpQkFBUztBQUZGLE9BbEJIO0FBc0JOUSxjQUFRO0FBQ05WLGNBQU1TLE9BREE7QUFFTlAsaUJBQVM7QUFGSCxPQXRCRjtBQTBCTjs7OztBQUlBRixZQUFNO0FBQ0pBLGNBQU1NLE1BREY7QUFFSkosaUJBQVM7QUFGTDtBQTlCQSxLLFFBb0NSUyxJLEdBQU87QUFDTEMsYUFBTSxLQUREO0FBRUxDLGdCQUFVLDRCQUZMO0FBR0xDLHVCQUFpQjtBQUhaLEssUUFNUEMsUSxHQUFXO0FBQ1RDLG1CQURTLDJCQUNPO0FBQ2QsZUFBTyxLQUFLaEIsSUFBTCxLQUFjLFNBQXJCO0FBQ0Q7QUFIUSxLLFFBTVhpQixPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsSUFEQyxFQUNLQyxLQURMLEVBQ1k7QUFBQTs7QUFDbEI7QUFDQSxZQUFNQyxZQUFZWixRQUFRVSxRQUFRLENBQUNBLEtBQUtHLFNBQXRCLENBQWxCO0FBQ0EsWUFBTUMsVUFBVUYsWUFBWSxDQUFaLEdBQWdCLENBQWhDO0FBQ0EsWUFBTUcsY0FBY0QsVUFBVSxJQUFWLEdBQWlCLElBQXJDO0FBQ0E7QUFDQSxhQUFLRSxLQUFMLENBQVc7QUFDVEMsZUFBSyxFQURJO0FBRVRmLGdCQUFNO0FBQ0pnQixzQkFBVSxDQUFDUixLQUFLUyxFQUFOLENBRE47QUFFSjVCLGtCQUFNdUI7QUFGRjtBQUZHLFNBQVgsRUFNRztBQUNETSxtQkFBUyx3QkFBa0I7QUFBQSxnQkFBaEJDLElBQWdCLFNBQWhCQSxJQUFnQjtBQUFBLGdCQUFWbkIsSUFBVSxTQUFWQSxJQUFVOztBQUN6QjtBQUNBLGdCQUFJLE9BQUtvQixRQUFMLENBQWMsT0FBS2hDLElBQUwsQ0FBVXFCLEtBQVYsQ0FBZCxDQUFKLEVBQXFDO0FBQ25DLHFCQUFLckIsSUFBTCxDQUFVcUIsS0FBVixFQUFpQkUsU0FBakIsR0FBNkJDLE9BQTdCO0FBQ0Q7QUFDRFMsZUFBR0MsU0FBSCxDQUFhO0FBQ1g1QixxQkFBVW1CLFdBQVYsdUJBRFc7QUFFWFUsb0JBQU0sU0FGSztBQUdYQyx3QkFBVTtBQUhDLGFBQWI7QUFLRCxXQVhBO0FBWURDLGdCQUFNLHFCQUFrQjtBQUFBLGdCQUFoQk4sSUFBZ0IsU0FBaEJBLElBQWdCO0FBQUEsZ0JBQVZuQixJQUFVLFNBQVZBLElBQVU7O0FBQ3RCO0FBQ0E7QUFDQTtBQUNBcUIsZUFBR0MsU0FBSCxDQUFhO0FBQ1g1QixxQkFBVW1CLFdBQVYsbUNBRFc7QUFFWFUsb0JBQU0sU0FGSztBQUdYRyxxQkFBTyw4QkFISTtBQUlYRix3QkFBVTtBQUpDLGFBQWI7QUFNRDtBQXRCQSxTQU5IO0FBOEJELE9BckNPO0FBc0NSRyxjQXRDUSxvQkFzQ0NDLElBdENELEVBc0NNO0FBQ1pDLGdCQUFRQyxHQUFSLENBQVksR0FBWixFQUFnQkYsSUFBaEI7QUFDRCxPQXhDTztBQXlDUkcsVUF6Q1EsZ0JBeUNISCxJQXpDRyxFQXlDRTtBQUNSQyxnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBa0JGLElBQWxCO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksUUFBWixFQUFxQixLQUFLckMsVUFBMUI7O0FBRUEsYUFBS0EsVUFBTCxDQUFnQnVDLElBQWhCLENBQXFCSixJQUFyQjtBQUNBLGFBQUtLLE1BQUw7QUFDQUosZ0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXFCLEtBQUtyQyxVQUExQjtBQUVEO0FBakRPLEs7Ozs7RUF4RDBCeUMsZUFBS0MsUzs7a0JBQXRCekQsUSIsImZpbGUiOiJmb29kTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBTdGFycyBmcm9tICcuL3N0YXJzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvb2RMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTdGFyc1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3Rhci5vbmNlXCI6XCJpdGVtLnN0YXJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU3RhcnM6IFN0YXJzXG4gICAgfVxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIHByb3BzID0ge1xuICAgICAgbGlzdDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBjaG9vc2VMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAn5o6o6I2Q6L+955Wq6KGoJ1xuICAgICAgfSxcbiAgICAgIHN0YXI6e1xuICAgICAgICBkZWZhdWx0OicnXG4gICAgICB9LFxuICAgICAgbG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG5vTW9yZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBbdHlwZSDliJfooajnsbvlnovvvJrluLjop4TliJfooagv5pS26JeP5YiX6KGoXVxuICAgICAgICogQHR5cGUge2xpc3QvY29sbGVjdH1cbiAgICAgICAqL1xuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdsaXN0J1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjZXNoaTonMTExJyxcbiAgICAgIGljb25fZXllOiAnL2ltYWdlcy9pY29uL2FkZEJlZm9yZS5qcGcnLFxuICAgICAgaWNvbl9leWVfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2FkZEFmdGVyLmpwZydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGlzQ29sbGVjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdjb2xsZWN0J1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1N0YXIoYm9vaywgaW5kZXgpIHtcbiAgICAgICAgLy8g5bCG6KaB5Y+R55Sf55qE5pS26JeP5Yqo5L2cXG4gICAgICAgIGNvbnN0IGlzQ29sbGVjdCA9IEJvb2xlYW4oYm9vayAmJiArYm9vay5jb2xsZWN0ZWQpXG4gICAgICAgIGNvbnN0IG5ld1R5cGUgPSBpc0NvbGxlY3QgPyAwIDogMVxuICAgICAgICBjb25zdCBuZXdUeXBlVGV4dCA9IG5ld1R5cGUgPyAn5re75YqgJyA6ICflj5bmtognXG4gICAgICAgIC8vIOaUtuiXj+acrOS5plxuICAgICAgICB0aGlzLiRwb3N0KHtcbiAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGJvb2tfaWRzOiBbYm9vay5pZF0sXG4gICAgICAgICAgICB0eXBlOiBuZXdUeXBlXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge1xuICAgICAgICAgICAgLy8g6YeN572u5pys5Lmm5pS26JeP54q25oCBXG4gICAgICAgICAgICBpZiAodGhpcy5pc09iamVjdCh0aGlzLmxpc3RbaW5kZXhdKSkge1xuICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLmNvbGxlY3RlZCA9IG5ld1R5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBgJHtuZXdUeXBlVGV4dH3mlLbol4/vvIFgLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge1xuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDosIPor5Xku6PnoIEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgLy8gdGhpcy5ib29rLmNvbGxlY3RlZCA9IG5ld1R5cGVcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6LCD6K+V5Luj56CBID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBgJHtuZXdUeXBlVGV4dH3mlLbol4/lpLHotKXvvIFgLFxuICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9pY29uL2ljb24tY2FuY2VsLnBuZycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBzdWJ0cmFjdChpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzXCIsaXRlbSlcbiAgICAgIH0sXG4gICAgICBwbHVzKGl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhcInA9PlwiLGl0ZW0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInB1c2g9PlwiLHRoaXMuY2hvb3NlTGlzdCk7XG5cbiAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnB1c2goaXRlbSkgO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInB1c2g9PlwiLHRoaXMuY2hvb3NlTGlzdCk7XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==