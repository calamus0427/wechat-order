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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = foodList.__proto__ || Object.getPrototypeOf(foodList)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Stars": { "xmlns:v-bind": "", "v-bind:star.once": "item.stars" } }, _this.$events = {}, _this.components = {
      Stars: _stars2.default
    }, _this.mixins = [_base2.default, _http2.default], _this.props = {
      list: {
        type: Object,
        default: [{
          'name': '特色油炸鳕鱼，麻辣口味鳕鱼',
          'image': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3856289508,2200725606&fm=200&gp=0.jpg',
          'description': '包含半斤鳕鱼，口味有超辣，正常辣，微辣，请备注选择',
          'price': 39,
          'stars': '5',
          'shoped': '5',
          'id': ''
        }]
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return foodList;
}(_wepy2.default.component);

exports.default = foodList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3RhcnMiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwidGl0bGUiLCJTdHJpbmciLCJzdGFyIiwibG9hZGluZyIsIkJvb2xlYW4iLCJub01vcmUiLCJkYXRhIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJjb21wdXRlZCIsImlzQ29sbGVjdExpc3QiLCJtZXRob2RzIiwidG9TdGFyIiwiYm9vayIsImluZGV4IiwiaXNDb2xsZWN0IiwiY29sbGVjdGVkIiwibmV3VHlwZSIsIm5ld1R5cGVUZXh0IiwiJHBvc3QiLCJ1cmwiLCJib29rX2lkcyIsImlkIiwic3VjY2VzcyIsImNvZGUiLCJpc09iamVjdCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiZmFpbCIsImltYWdlIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNwQkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixZQUF0QyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGFBQU9BO0FBREMsSyxRQUdWQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxDQUNQO0FBQ0Usa0JBQU8sZUFEVDtBQUVFLG1CQUFRLGlHQUZWO0FBR0UseUJBQWMsMkJBSGhCO0FBSUUsbUJBQVEsRUFKVjtBQUtFLG1CQUFRLEdBTFY7QUFNRSxvQkFBUyxHQU5YO0FBT0UsZ0JBQUs7QUFQUCxTQURPO0FBRkwsT0FEQTtBQWVOQyxhQUFPO0FBQ0xILGNBQU1JLE1BREQ7QUFFTEYsaUJBQVM7QUFGSixPQWZEO0FBbUJORyxZQUFLO0FBQ0hILGlCQUFRO0FBREwsT0FuQkM7QUFzQk5JLGVBQVM7QUFDUE4sY0FBTU8sT0FEQztBQUVQTCxpQkFBUztBQUZGLE9BdEJIO0FBMEJOTSxjQUFRO0FBQ05SLGNBQU1PLE9BREE7QUFFTkwsaUJBQVM7QUFGSCxPQTFCRjtBQThCTjs7OztBQUlBRixZQUFNO0FBQ0pBLGNBQU1JLE1BREY7QUFFSkYsaUJBQVM7QUFGTDtBQWxDQSxLLFFBd0NSTyxJLEdBQU87QUFDTEMsZ0JBQVUsNEJBREw7QUFFTEMsdUJBQWlCO0FBRlosSyxRQUtQQyxRLEdBQVc7QUFDVEMsbUJBRFMsMkJBQ087QUFDZCxlQUFPLEtBQUtiLElBQUwsS0FBYyxTQUFyQjtBQUNEO0FBSFEsSyxRQU1YYyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsSUFEQyxFQUNLQyxLQURMLEVBQ1k7QUFBQTs7QUFDbEI7QUFDQSxZQUFNQyxZQUFZWCxRQUFRUyxRQUFRLENBQUNBLEtBQUtHLFNBQXRCLENBQWxCO0FBQ0EsWUFBTUMsVUFBVUYsWUFBWSxDQUFaLEdBQWdCLENBQWhDO0FBQ0EsWUFBTUcsY0FBY0QsVUFBVSxJQUFWLEdBQWlCLElBQXJDO0FBQ0E7QUFDQSxhQUFLRSxLQUFMLENBQVc7QUFDVEMsZUFBSyxFQURJO0FBRVRkLGdCQUFNO0FBQ0plLHNCQUFVLENBQUNSLEtBQUtTLEVBQU4sQ0FETjtBQUVKekIsa0JBQU1vQjtBQUZGO0FBRkcsU0FBWCxFQU1HO0FBQ0RNLG1CQUFTLHdCQUFrQjtBQUFBLGdCQUFoQkMsSUFBZ0IsU0FBaEJBLElBQWdCO0FBQUEsZ0JBQVZsQixJQUFVLFNBQVZBLElBQVU7O0FBQ3pCO0FBQ0EsZ0JBQUksT0FBS21CLFFBQUwsQ0FBYyxPQUFLN0IsSUFBTCxDQUFVa0IsS0FBVixDQUFkLENBQUosRUFBcUM7QUFDbkMscUJBQUtsQixJQUFMLENBQVVrQixLQUFWLEVBQWlCRSxTQUFqQixHQUE2QkMsT0FBN0I7QUFDRDtBQUNEUyxlQUFHQyxTQUFILENBQWE7QUFDWDNCLHFCQUFVa0IsV0FBVix1QkFEVztBQUVYVSxvQkFBTSxTQUZLO0FBR1hDLHdCQUFVO0FBSEMsYUFBYjtBQUtELFdBWEE7QUFZREMsZ0JBQU0scUJBQWtCO0FBQUEsZ0JBQWhCTixJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxnQkFBVmxCLElBQVUsU0FBVkEsSUFBVTs7QUFDdEI7QUFDQTtBQUNBO0FBQ0FvQixlQUFHQyxTQUFILENBQWE7QUFDWDNCLHFCQUFVa0IsV0FBVixtQ0FEVztBQUVYVSxvQkFBTSxTQUZLO0FBR1hHLHFCQUFPLDhCQUhJO0FBSVhGLHdCQUFVO0FBSkMsYUFBYjtBQU1EO0FBdEJBLFNBTkg7QUE4QkQ7QUFyQ08sSzs7OztFQTNEMEJHLGVBQUtDLFM7O2tCQUF0Qi9DLFEiLCJmaWxlIjoiZm9vZExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuICBpbXBvcnQgU3RhcnMgZnJvbSAnLi9zdGFycydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBmb29kTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU3RhcnNcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnN0YXIub25jZVwiOlwiaXRlbS5zdGFyc1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTdGFyczogU3RhcnNcbiAgICB9XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgcHJvcHMgPSB7XG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICduYW1lJzon54m56Imy5rK554K46bOV6bG877yM6bq76L6j5Y+j5ZGz6bOV6bG8JyxcbiAgICAgICAgICAgICdpbWFnZSc6J2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zODU2Mjg5NTA4LDIyMDA3MjU2MDYmZm09MjAwJmdwPTAuanBnJyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6J+WMheWQq+WNiuaWpOmzlemxvO+8jOWPo+WRs+aciei2hei+o++8jOato+W4uOi+o++8jOW+rui+o++8jOivt+Wkh+azqOmAieaLqScsXG4gICAgICAgICAgICAncHJpY2UnOjM5LFxuICAgICAgICAgICAgJ3N0YXJzJzonNScsXG4gICAgICAgICAgICAnc2hvcGVkJzonNScsXG4gICAgICAgICAgICAnaWQnOicnXG4gICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICfmjqjojZDov73nlarooagnXG4gICAgICB9LFxuICAgICAgc3Rhcjp7XG4gICAgICAgIGRlZmF1bHQ6JydcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm9Nb3JlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFt0eXBlIOWIl+ihqOexu+Wei++8muW4uOinhOWIl+ihqC/mlLbol4/liJfooahdXG4gICAgICAgKiBAdHlwZSB7bGlzdC9jb2xsZWN0fVxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGljb25fZXllOiAnL2ltYWdlcy9pY29uL2FkZEJlZm9yZS5qcGcnLFxuICAgICAgaWNvbl9leWVfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2FkZEFmdGVyLmpwZydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGlzQ29sbGVjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdjb2xsZWN0J1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1N0YXIoYm9vaywgaW5kZXgpIHtcbiAgICAgICAgLy8g5bCG6KaB5Y+R55Sf55qE5pS26JeP5Yqo5L2cXG4gICAgICAgIGNvbnN0IGlzQ29sbGVjdCA9IEJvb2xlYW4oYm9vayAmJiArYm9vay5jb2xsZWN0ZWQpXG4gICAgICAgIGNvbnN0IG5ld1R5cGUgPSBpc0NvbGxlY3QgPyAwIDogMVxuICAgICAgICBjb25zdCBuZXdUeXBlVGV4dCA9IG5ld1R5cGUgPyAn5re75YqgJyA6ICflj5bmtognXG4gICAgICAgIC8vIOaUtuiXj+acrOS5plxuICAgICAgICB0aGlzLiRwb3N0KHtcbiAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGJvb2tfaWRzOiBbYm9vay5pZF0sXG4gICAgICAgICAgICB0eXBlOiBuZXdUeXBlXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge1xuICAgICAgICAgICAgLy8g6YeN572u5pys5Lmm5pS26JeP54q25oCBXG4gICAgICAgICAgICBpZiAodGhpcy5pc09iamVjdCh0aGlzLmxpc3RbaW5kZXhdKSkge1xuICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLmNvbGxlY3RlZCA9IG5ld1R5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBgJHtuZXdUeXBlVGV4dH3mlLbol4/vvIFgLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge1xuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDosIPor5Xku6PnoIEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgLy8gdGhpcy5ib29rLmNvbGxlY3RlZCA9IG5ld1R5cGVcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6LCD6K+V5Luj56CBID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBgJHtuZXdUeXBlVGV4dH3mlLbol4/lpLHotKXvvIFgLFxuICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9pY29uL2ljb24tY2FuY2VsLnBuZycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==