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
        default: [{
          'name': '特色油炸鳕鱼，麻辣口味鳕鱼',
          'img': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3856289508,2200725606&fm=200&gp=0.jpg',
          'des': '包含半斤鳕鱼，口味有超辣，正常辣，微辣，请备注选择',
          'price': 39,
          'stars': '5',
          'shoped': '5',
          'id': ''
        }],
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return foodList;
}(_wepy2.default.component);

exports.default = foodList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3RhcnMiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwidHdvV2F5IiwiY2hvb3NlTGlzdCIsInRpdGxlIiwiU3RyaW5nIiwic3RhciIsImxvYWRpbmciLCJCb29sZWFuIiwibm9Nb3JlIiwiZGF0YSIsImNlc2hpIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJjb21wdXRlZCIsImlzQ29sbGVjdExpc3QiLCJtZXRob2RzIiwidG9TdGFyIiwiYm9vayIsImluZGV4IiwiaXNDb2xsZWN0IiwiY29sbGVjdGVkIiwibmV3VHlwZSIsIm5ld1R5cGVUZXh0IiwiJHBvc3QiLCJ1cmwiLCJib29rX2lkcyIsImlkIiwic3VjY2VzcyIsImNvZGUiLCJpc09iamVjdCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiZmFpbCIsImltYWdlIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNwQkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixXQUF0QyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGFBQU9BO0FBREMsSyxRQUdWQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxDQUNQO0FBQ0Usa0JBQU8sZUFEVDtBQUVFLGlCQUFNLGlHQUZSO0FBR0UsaUJBQU0sMkJBSFI7QUFJRSxtQkFBUSxFQUpWO0FBS0UsbUJBQVEsR0FMVjtBQU1FLG9CQUFTLEdBTlg7QUFPRSxnQkFBSztBQVBQLFNBRE8sQ0FGTDtBQWFGQyxnQkFBUTtBQWJOLE9BREE7QUFnQk5DLGtCQUFXO0FBQ1RKLGNBQU1DLE1BREc7QUFFVEMsaUJBQVMsRUFGQTtBQUdUQyxnQkFBUTtBQUhDLE9BaEJMO0FBcUJORSxhQUFPO0FBQ0xMLGNBQU1NLE1BREQ7QUFFTEosaUJBQVM7QUFGSixPQXJCRDtBQXlCTkssWUFBSztBQUNITCxpQkFBUTtBQURMLE9BekJDO0FBNEJOTSxlQUFTO0FBQ1BSLGNBQU1TLE9BREM7QUFFUFAsaUJBQVM7QUFGRixPQTVCSDtBQWdDTlEsY0FBUTtBQUNOVixjQUFNUyxPQURBO0FBRU5QLGlCQUFTO0FBRkgsT0FoQ0Y7QUFvQ047Ozs7QUFJQUYsWUFBTTtBQUNKQSxjQUFNTSxNQURGO0FBRUpKLGlCQUFTO0FBRkw7QUF4Q0EsSyxRQThDUlMsSSxHQUFPO0FBQ0xDLGFBQU0sS0FERDtBQUVMQyxnQkFBVSw0QkFGTDtBQUdMQyx1QkFBaUI7QUFIWixLLFFBTVBDLFEsR0FBVztBQUNUQyxtQkFEUywyQkFDTztBQUNkLGVBQU8sS0FBS2hCLElBQUwsS0FBYyxTQUFyQjtBQUNEO0FBSFEsSyxRQU1YaUIsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLElBREMsRUFDS0MsS0FETCxFQUNZO0FBQUE7O0FBQ2xCO0FBQ0EsWUFBTUMsWUFBWVosUUFBUVUsUUFBUSxDQUFDQSxLQUFLRyxTQUF0QixDQUFsQjtBQUNBLFlBQU1DLFVBQVVGLFlBQVksQ0FBWixHQUFnQixDQUFoQztBQUNBLFlBQU1HLGNBQWNELFVBQVUsSUFBVixHQUFpQixJQUFyQztBQUNBO0FBQ0EsYUFBS0UsS0FBTCxDQUFXO0FBQ1RDLGVBQUssRUFESTtBQUVUZixnQkFBTTtBQUNKZ0Isc0JBQVUsQ0FBQ1IsS0FBS1MsRUFBTixDQUROO0FBRUo1QixrQkFBTXVCO0FBRkY7QUFGRyxTQUFYLEVBTUc7QUFDRE0sbUJBQVMsd0JBQWtCO0FBQUEsZ0JBQWhCQyxJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxnQkFBVm5CLElBQVUsU0FBVkEsSUFBVTs7QUFDekI7QUFDQSxnQkFBSSxPQUFLb0IsUUFBTCxDQUFjLE9BQUtoQyxJQUFMLENBQVVxQixLQUFWLENBQWQsQ0FBSixFQUFxQztBQUNuQyxxQkFBS3JCLElBQUwsQ0FBVXFCLEtBQVYsRUFBaUJFLFNBQWpCLEdBQTZCQyxPQUE3QjtBQUNEO0FBQ0RTLGVBQUdDLFNBQUgsQ0FBYTtBQUNYNUIscUJBQVVtQixXQUFWLHVCQURXO0FBRVhVLG9CQUFNLFNBRks7QUFHWEMsd0JBQVU7QUFIQyxhQUFiO0FBS0QsV0FYQTtBQVlEQyxnQkFBTSxxQkFBa0I7QUFBQSxnQkFBaEJOLElBQWdCLFNBQWhCQSxJQUFnQjtBQUFBLGdCQUFWbkIsSUFBVSxTQUFWQSxJQUFVOztBQUN0QjtBQUNBO0FBQ0E7QUFDQXFCLGVBQUdDLFNBQUgsQ0FBYTtBQUNYNUIscUJBQVVtQixXQUFWLG1DQURXO0FBRVhVLG9CQUFNLFNBRks7QUFHWEcscUJBQU8sOEJBSEk7QUFJWEYsd0JBQVU7QUFKQyxhQUFiO0FBTUQ7QUF0QkEsU0FOSDtBQThCRDtBQXJDTyxLOzs7O0VBbEUwQkcsZUFBS0MsUzs7a0JBQXRCbEQsUSIsImZpbGUiOiJmb29kTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBTdGFycyBmcm9tICcuL3N0YXJzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvb2RMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTdGFyc1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3Rhci5vbmNlXCI6XCJpdGVtLnN0YXJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU3RhcnM6IFN0YXJzXG4gICAgfVxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIHByb3BzID0ge1xuICAgICAgbGlzdDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnbmFtZSc6J+eJueiJsuayueeCuOmzlemxvO+8jOm6u+i+o+WPo+WRs+mzlemxvCcsXG4gICAgICAgICAgICAnaW1nJzonaHR0cHM6Ly9zczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTM4NTYyODk1MDgsMjIwMDcyNTYwNiZmbT0yMDAmZ3A9MC5qcGcnLFxuICAgICAgICAgICAgJ2Rlcyc6J+WMheWQq+WNiuaWpOmzlemxvO+8jOWPo+WRs+aciei2hei+o++8jOato+W4uOi+o++8jOW+rui+o++8jOivt+Wkh+azqOmAieaLqScsXG4gICAgICAgICAgICAncHJpY2UnOjM5LFxuICAgICAgICAgICAgJ3N0YXJzJzonNScsXG4gICAgICAgICAgICAnc2hvcGVkJzonNScsXG4gICAgICAgICAgICAnaWQnOicnXG4gICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgY2hvb3NlTGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ+aOqOiNkOi/veeVquihqCdcbiAgICAgIH0sXG4gICAgICBzdGFyOntcbiAgICAgICAgZGVmYXVsdDonJ1xuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBub01vcmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogW3R5cGUg5YiX6KGo57G75Z6L77ya5bi46KeE5YiX6KGoL+aUtuiXj+WIl+ihqF1cbiAgICAgICAqIEB0eXBlIHtsaXN0L2NvbGxlY3R9XG4gICAgICAgKi9cbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnbGlzdCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY2VzaGk6JzExMScsXG4gICAgICBpY29uX2V5ZTogJy9pbWFnZXMvaWNvbi9hZGRCZWZvcmUuanBnJyxcbiAgICAgIGljb25fZXllX2FjdGl2ZTogJy9pbWFnZXMvaWNvbi9hZGRBZnRlci5qcGcnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBpc0NvbGxlY3RMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnY29sbGVjdCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9TdGFyKGJvb2ssIGluZGV4KSB7XG4gICAgICAgIC8vIOWwhuimgeWPkeeUn+eahOaUtuiXj+WKqOS9nFxuICAgICAgICBjb25zdCBpc0NvbGxlY3QgPSBCb29sZWFuKGJvb2sgJiYgK2Jvb2suY29sbGVjdGVkKVxuICAgICAgICBjb25zdCBuZXdUeXBlID0gaXNDb2xsZWN0ID8gMCA6IDFcbiAgICAgICAgY29uc3QgbmV3VHlwZVRleHQgPSBuZXdUeXBlID8gJ+a3u+WKoCcgOiAn5Y+W5raIJ1xuICAgICAgICAvLyDmlLbol4/mnKzkuaZcbiAgICAgICAgdGhpcy4kcG9zdCh7XG4gICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBib29rX2lkczogW2Jvb2suaWRdLFxuICAgICAgICAgICAgdHlwZTogbmV3VHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHtcbiAgICAgICAgICAgIC8vIOmHjee9ruacrOS5puaUtuiXj+eKtuaAgVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QodGhpcy5saXN0W2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5jb2xsZWN0ZWQgPSBuZXdUeXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogYCR7bmV3VHlwZVRleHR95pS26JeP77yBYCxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHtcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6LCD6K+V5Luj56CBID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgIC8vIHRoaXMuYm9vay5jb2xsZWN0ZWQgPSBuZXdUeXBlXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOiwg+ivleS7o+eggSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogYCR7bmV3VHlwZVRleHR95pS26JeP5aSx6LSl77yBYCxcbiAgICAgICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaWNvbi9pY29uLWNhbmNlbC5wbmcnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=