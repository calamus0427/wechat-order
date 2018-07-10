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

var animeList = function (_wepy$component) {
  _inherits(animeList, _wepy$component);

  function animeList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, animeList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = animeList.__proto__ || Object.getPrototypeOf(animeList)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Stars": { "xmlns:v-bind": "", "v-bind:star.once": "item.stars" } }, _this.$events = {}, _this.components = {
      Stars: _stars2.default
    }, _this.mixins = [_base2.default, _http2.default], _this.props = {
      list: {
        type: Object,
        default: [{
          'name': '命运石之门',
          'image': ['http://p79mwfmry.bkt.clouddn.com/%E7%9F%B3%E5%A4%B4%E9%97%A8.jpg', '', ''],
          'description': '一切都是命运石之门的选择',
          'content': '',
          'tag': ['致郁', '时间穿越', '神作'],
          'stars': '5',
          'createTime': '2013-04-20',
          'flag': '1',
          'author': '',
          'type': 'game',
          'company': '',
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

  return animeList;
}(_wepy2.default.component);

exports.default = animeList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1lTGlzdC5qcyJdLCJuYW1lcyI6WyJhbmltZUxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTdGFycyIsIm1peGlucyIsImJhc2UiLCJodHRwIiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJ0aXRsZSIsIlN0cmluZyIsInN0YXIiLCJsb2FkaW5nIiwiQm9vbGVhbiIsIm5vTW9yZSIsImRhdGEiLCJpY29uX2V5ZSIsImljb25fZXllX2FjdGl2ZSIsImNvbXB1dGVkIiwiaXNDb2xsZWN0TGlzdCIsIm1ldGhvZHMiLCJ0b1N0YXIiLCJib29rIiwiaW5kZXgiLCJpc0NvbGxlY3QiLCJjb2xsZWN0ZWQiLCJuZXdUeXBlIiwibmV3VHlwZVRleHQiLCIkcG9zdCIsInVybCIsImJvb2tfaWRzIiwiaWQiLCJzdWNjZXNzIiwiY29kZSIsImlzT2JqZWN0Iiwid3giLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJmYWlsIiwiaW1hZ2UiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFlBQXRDLEVBQVQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsYUFBT0E7QUFEQyxLLFFBR1ZDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTLENBQ1A7QUFDRSxrQkFBTyxPQURUO0FBRUUsbUJBQVEsQ0FBQyxrRUFBRCxFQUFvRSxFQUFwRSxFQUF1RSxFQUF2RSxDQUZWO0FBR0UseUJBQWMsY0FIaEI7QUFJRSxxQkFBVSxFQUpaO0FBS0UsaUJBQU0sQ0FBQyxJQUFELEVBQU0sTUFBTixFQUFhLElBQWIsQ0FMUjtBQU1FLG1CQUFRLEdBTlY7QUFPRSx3QkFBYSxZQVBmO0FBUUUsa0JBQU8sR0FSVDtBQVNFLG9CQUFTLEVBVFg7QUFVRSxrQkFBTyxNQVZUO0FBV0UscUJBQVUsRUFYWjtBQVlFLGdCQUFLO0FBWlAsU0FETztBQUZMLE9BREE7QUFvQk5DLGFBQU87QUFDTEgsY0FBTUksTUFERDtBQUVMRixpQkFBUztBQUZKLE9BcEJEO0FBd0JORyxZQUFLO0FBQ0hILGlCQUFRO0FBREwsT0F4QkM7QUEyQk5JLGVBQVM7QUFDUE4sY0FBTU8sT0FEQztBQUVQTCxpQkFBUztBQUZGLE9BM0JIO0FBK0JOTSxjQUFRO0FBQ05SLGNBQU1PLE9BREE7QUFFTkwsaUJBQVM7QUFGSCxPQS9CRjtBQW1DTjs7OztBQUlBRixZQUFNO0FBQ0pBLGNBQU1JLE1BREY7QUFFSkYsaUJBQVM7QUFGTDtBQXZDQSxLLFFBNkNSTyxJLEdBQU87QUFDTEMsZ0JBQVUsNEJBREw7QUFFTEMsdUJBQWlCO0FBRlosSyxRQUtQQyxRLEdBQVc7QUFDVEMsbUJBRFMsMkJBQ087QUFDZCxlQUFPLEtBQUtiLElBQUwsS0FBYyxTQUFyQjtBQUNEO0FBSFEsSyxRQU1YYyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsSUFEQyxFQUNLQyxLQURMLEVBQ1k7QUFBQTs7QUFDbEI7QUFDQSxZQUFNQyxZQUFZWCxRQUFRUyxRQUFRLENBQUNBLEtBQUtHLFNBQXRCLENBQWxCO0FBQ0EsWUFBTUMsVUFBVUYsWUFBWSxDQUFaLEdBQWdCLENBQWhDO0FBQ0EsWUFBTUcsY0FBY0QsVUFBVSxJQUFWLEdBQWlCLElBQXJDO0FBQ0E7QUFDQSxhQUFLRSxLQUFMLENBQVc7QUFDVEMsZUFBSyxFQURJO0FBRVRkLGdCQUFNO0FBQ0plLHNCQUFVLENBQUNSLEtBQUtTLEVBQU4sQ0FETjtBQUVKekIsa0JBQU1vQjtBQUZGO0FBRkcsU0FBWCxFQU1HO0FBQ0RNLG1CQUFTLHdCQUFrQjtBQUFBLGdCQUFoQkMsSUFBZ0IsU0FBaEJBLElBQWdCO0FBQUEsZ0JBQVZsQixJQUFVLFNBQVZBLElBQVU7O0FBQ3pCO0FBQ0EsZ0JBQUksT0FBS21CLFFBQUwsQ0FBYyxPQUFLN0IsSUFBTCxDQUFVa0IsS0FBVixDQUFkLENBQUosRUFBcUM7QUFDbkMscUJBQUtsQixJQUFMLENBQVVrQixLQUFWLEVBQWlCRSxTQUFqQixHQUE2QkMsT0FBN0I7QUFDRDtBQUNEUyxlQUFHQyxTQUFILENBQWE7QUFDWDNCLHFCQUFVa0IsV0FBVix1QkFEVztBQUVYVSxvQkFBTSxTQUZLO0FBR1hDLHdCQUFVO0FBSEMsYUFBYjtBQUtELFdBWEE7QUFZREMsZ0JBQU0scUJBQWtCO0FBQUEsZ0JBQWhCTixJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxnQkFBVmxCLElBQVUsU0FBVkEsSUFBVTs7QUFDdEI7QUFDQTtBQUNBO0FBQ0FvQixlQUFHQyxTQUFILENBQWE7QUFDWDNCLHFCQUFVa0IsV0FBVixtQ0FEVztBQUVYVSxvQkFBTSxTQUZLO0FBR1hHLHFCQUFPLDhCQUhJO0FBSVhGLHdCQUFVO0FBSkMsYUFBYjtBQU1EO0FBdEJBLFNBTkg7QUE4QkQ7QUFyQ08sSzs7OztFQWhFMkJHLGVBQUtDLFM7O2tCQUF2Qi9DLFMiLCJmaWxlIjoiYW5pbWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IFN0YXJzIGZyb20gJy4vc3RhcnMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYW5pbWVMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTdGFyc1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3Rhci5vbmNlXCI6XCJpdGVtLnN0YXJzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFN0YXJzOiBTdGFyc1xuICAgIH1cbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ25hbWUnOiflkb3ov5Dnn7PkuYvpl6gnLFxuICAgICAgICAgICAgJ2ltYWdlJzpbJ2h0dHA6Ly9wNzltd2ZtcnkuYmt0LmNsb3VkZG4uY29tLyVFNyU5RiVCMyVFNSVBNCVCNCVFOSU5NyVBOC5qcGcnLCcnLCcnXSxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6J+S4gOWIh+mDveaYr+WRvei/kOefs+S5i+mXqOeahOmAieaLqScsXG4gICAgICAgICAgICAnY29udGVudCc6JycsXG4gICAgICAgICAgICAndGFnJzpbJ+iHtOmDgScsJ+aXtumXtOepv+i2iicsJ+elnuS9nCddLFxuICAgICAgICAgICAgJ3N0YXJzJzonNScsXG4gICAgICAgICAgICAnY3JlYXRlVGltZSc6JzIwMTMtMDQtMjAnLFxuICAgICAgICAgICAgJ2ZsYWcnOicxJyxcbiAgICAgICAgICAgICdhdXRob3InOicnLFxuICAgICAgICAgICAgJ3R5cGUnOidnYW1lJyxcbiAgICAgICAgICAgICdjb21wYW55JzonJyxcbiAgICAgICAgICAgICdpZCc6JydcbiAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ+aOqOiNkOi/veeVquihqCdcbiAgICAgIH0sXG4gICAgICBzdGFyOntcbiAgICAgICAgZGVmYXVsdDonJ1xuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBub01vcmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogW3R5cGUg5YiX6KGo57G75Z6L77ya5bi46KeE5YiX6KGoL+aUtuiXj+WIl+ihqF1cbiAgICAgICAqIEB0eXBlIHtsaXN0L2NvbGxlY3R9XG4gICAgICAgKi9cbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnbGlzdCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaWNvbl9leWU6ICcvaW1hZ2VzL2ljb24vYWRkQmVmb3JlLmpwZycsXG4gICAgICBpY29uX2V5ZV9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vYWRkQWZ0ZXIuanBnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaXNDb2xsZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2NvbGxlY3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvU3Rhcihib29rLCBpbmRleCkge1xuICAgICAgICAvLyDlsIbopoHlj5HnlJ/nmoTmlLbol4/liqjkvZxcbiAgICAgICAgY29uc3QgaXNDb2xsZWN0ID0gQm9vbGVhbihib29rICYmICtib29rLmNvbGxlY3RlZClcbiAgICAgICAgY29uc3QgbmV3VHlwZSA9IGlzQ29sbGVjdCA/IDAgOiAxXG4gICAgICAgIGNvbnN0IG5ld1R5cGVUZXh0ID0gbmV3VHlwZSA/ICfmt7vliqAnIDogJ+WPlua2iCdcbiAgICAgICAgLy8g5pS26JeP5pys5LmmXG4gICAgICAgIHRoaXMuJHBvc3Qoe1xuICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYm9va19pZHM6IFtib29rLmlkXSxcbiAgICAgICAgICAgIHR5cGU6IG5ld1R5cGVcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7XG4gICAgICAgICAgICAvLyDph43nva7mnKzkuabmlLbol4/nirbmgIFcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KHRoaXMubGlzdFtpbmRleF0pKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uY29sbGVjdGVkID0gbmV3VHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IGAke25ld1R5cGVUZXh0feaUtuiXj++8gWAsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7XG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOiwg+ivleS7o+eggSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAvLyB0aGlzLmJvb2suY29sbGVjdGVkID0gbmV3VHlwZVxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDosIPor5Xku6PnoIEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IGAke25ld1R5cGVUZXh0feaUtuiXj+Wksei0pe+8gWAsXG4gICAgICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ljb24vaWNvbi1jYW5jZWwucG5nJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19