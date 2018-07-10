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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookList = function (_wepy$component) {
  _inherits(BookList, _wepy$component);

  function BookList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BookList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BookList.__proto__ || Object.getPrototypeOf(BookList)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.props = {
      list: {
        type: Object,
        default: [{
          'title': '命运石之门',
          'image': ['http://p79mwfmry.bkt.clouddn.com/%E7%9F%B3%E5%A4%B4%E9%97%A8.jpg', '', ''],
          'description': '一切都是命运石之门的选择',
          'content': '',
          'tag': ['致郁', '时间穿越', '神作'],
          'stars': '5',
          'createTime': '2013-04-20',
          'flag': '1',
          'author': '',
          'type': 'game',
          'company': ''
        }]
      },
      title: {
        type: String,
        default: '推荐追番表'
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
      icon_eye: '/images/icon/icon-eye@2x.png',
      icon_eye_active: '/images/icon/icon-eye-active@2x.png',
      icon_star: '/images/icon/icon-star@2x.png',
      icon_star_active: '/images/icon/icon-star-active@2x.png'
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

  return BookList;
}(_wepy2.default.component);

exports.default = BookList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tMaXN0LmpzIl0sIm5hbWVzIjpbIkJvb2tMaXN0IiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInRpdGxlIiwiU3RyaW5nIiwibG9hZGluZyIsIkJvb2xlYW4iLCJub01vcmUiLCJkYXRhIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiY29tcHV0ZWQiLCJpc0NvbGxlY3RMaXN0IiwibWV0aG9kcyIsInRvU3RhciIsImJvb2siLCJpbmRleCIsImlzQ29sbGVjdCIsImNvbGxlY3RlZCIsIm5ld1R5cGUiLCJuZXdUeXBlVGV4dCIsIiRwb3N0IiwidXJsIiwiYm9va19pZHMiLCJpZCIsInN1Y2Nlc3MiLCJjb2RlIiwiaXNPYmplY3QiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImZhaWwiLCJpbWFnZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxDQUNQO0FBQ0UsbUJBQVEsT0FEVjtBQUVFLG1CQUFRLENBQUMsa0VBQUQsRUFBb0UsRUFBcEUsRUFBdUUsRUFBdkUsQ0FGVjtBQUdFLHlCQUFjLGNBSGhCO0FBSUUscUJBQVUsRUFKWjtBQUtFLGlCQUFNLENBQUMsSUFBRCxFQUFNLE1BQU4sRUFBYSxJQUFiLENBTFI7QUFNRSxtQkFBUSxHQU5WO0FBT0Usd0JBQWEsWUFQZjtBQVFFLGtCQUFPLEdBUlQ7QUFTRSxvQkFBUyxFQVRYO0FBVUUsa0JBQU8sTUFWVDtBQVdFLHFCQUFVO0FBWFosU0FETztBQUZMLE9BREE7QUFtQk5DLGFBQU87QUFDTEgsY0FBTUksTUFERDtBQUVMRixpQkFBUztBQUZKLE9BbkJEO0FBdUJORyxlQUFTO0FBQ1BMLGNBQU1NLE9BREM7QUFFUEosaUJBQVM7QUFGRixPQXZCSDtBQTJCTkssY0FBUTtBQUNOUCxjQUFNTSxPQURBO0FBRU5KLGlCQUFTO0FBRkgsT0EzQkY7QUErQk47Ozs7QUFJQUYsWUFBTTtBQUNKQSxjQUFNSSxNQURGO0FBRUpGLGlCQUFTO0FBRkw7QUFuQ0EsSyxRQXlDUk0sSSxHQUFPO0FBQ0xDLGdCQUFVLDhCQURMO0FBRUxDLHVCQUFpQixxQ0FGWjtBQUdMQyxpQkFBVywrQkFITjtBQUlMQyx3QkFBa0I7QUFKYixLLFFBT1BDLFEsR0FBVztBQUNUQyxtQkFEUywyQkFDTztBQUNkLGVBQU8sS0FBS2QsSUFBTCxLQUFjLFNBQXJCO0FBQ0Q7QUFIUSxLLFFBTVhlLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxJQURDLEVBQ0tDLEtBREwsRUFDWTtBQUFBOztBQUNsQjtBQUNBLFlBQU1DLFlBQVliLFFBQVFXLFFBQVEsQ0FBQ0EsS0FBS0csU0FBdEIsQ0FBbEI7QUFDQSxZQUFNQyxVQUFVRixZQUFZLENBQVosR0FBZ0IsQ0FBaEM7QUFDQSxZQUFNRyxjQUFjRCxVQUFVLElBQVYsR0FBaUIsSUFBckM7QUFDQTtBQUNBLGFBQUtFLEtBQUwsQ0FBVztBQUNUQyxlQUFLLEVBREk7QUFFVGhCLGdCQUFNO0FBQ0ppQixzQkFBVSxDQUFDUixLQUFLUyxFQUFOLENBRE47QUFFSjFCLGtCQUFNcUI7QUFGRjtBQUZHLFNBQVgsRUFNRztBQUNETSxtQkFBUyx3QkFBa0I7QUFBQSxnQkFBaEJDLElBQWdCLFNBQWhCQSxJQUFnQjtBQUFBLGdCQUFWcEIsSUFBVSxTQUFWQSxJQUFVOztBQUN6QjtBQUNBLGdCQUFJLE9BQUtxQixRQUFMLENBQWMsT0FBSzlCLElBQUwsQ0FBVW1CLEtBQVYsQ0FBZCxDQUFKLEVBQXFDO0FBQ25DLHFCQUFLbkIsSUFBTCxDQUFVbUIsS0FBVixFQUFpQkUsU0FBakIsR0FBNkJDLE9BQTdCO0FBQ0Q7QUFDRFMsZUFBR0MsU0FBSCxDQUFhO0FBQ1g1QixxQkFBVW1CLFdBQVYsdUJBRFc7QUFFWFUsb0JBQU0sU0FGSztBQUdYQyx3QkFBVTtBQUhDLGFBQWI7QUFLRCxXQVhBO0FBWURDLGdCQUFNLHFCQUFrQjtBQUFBLGdCQUFoQk4sSUFBZ0IsU0FBaEJBLElBQWdCO0FBQUEsZ0JBQVZwQixJQUFVLFNBQVZBLElBQVU7O0FBQ3RCO0FBQ0E7QUFDQTtBQUNBc0IsZUFBR0MsU0FBSCxDQUFhO0FBQ1g1QixxQkFBVW1CLFdBQVYsbUNBRFc7QUFFWFUsb0JBQU0sU0FGSztBQUdYRyxxQkFBTyw4QkFISTtBQUlYRix3QkFBVTtBQUpDLGFBQWI7QUFNRDtBQXRCQSxTQU5IO0FBOEJEO0FBckNPLEs7Ozs7RUF4RDBCRyxlQUFLQyxTOztrQkFBdEIzQyxRIiwiZmlsZSI6ImJvb2tMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RpdGxlJzon5ZG96L+Q55+z5LmL6ZeoJyxcbiAgICAgICAgICAgICdpbWFnZSc6WydodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8lRTclOUYlQjMlRTUlQTQlQjQlRTklOTclQTguanBnJywnJywnJ10sXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOifkuIDliIfpg73mmK/lkb3ov5Dnn7PkuYvpl6jnmoTpgInmi6knLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOicnLFxuICAgICAgICAgICAgJ3RhZyc6Wyfoh7Tpg4EnLCfml7bpl7Tnqb/otoonLCfnpZ7kvZwnXSxcbiAgICAgICAgICAgICdzdGFycyc6JzUnLFxuICAgICAgICAgICAgJ2NyZWF0ZVRpbWUnOicyMDEzLTA0LTIwJyxcbiAgICAgICAgICAgICdmbGFnJzonMScsXG4gICAgICAgICAgICAnYXV0aG9yJzonJyxcbiAgICAgICAgICAgICd0eXBlJzonZ2FtZScsXG4gICAgICAgICAgICAnY29tcGFueSc6JydcbiAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ+aOqOiNkOi/veeVquihqCdcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm9Nb3JlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFt0eXBlIOWIl+ihqOexu+Wei++8muW4uOinhOWIl+ihqC/mlLbol4/liJfooahdXG4gICAgICAgKiBAdHlwZSB7bGlzdC9jb2xsZWN0fVxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGljb25fZXllOiAnL2ltYWdlcy9pY29uL2ljb24tZXllQDJ4LnBuZycsXG4gICAgICBpY29uX2V5ZV9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vaWNvbi1leWUtYWN0aXZlQDJ4LnBuZycsXG4gICAgICBpY29uX3N0YXI6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyQDJ4LnBuZycsXG4gICAgICBpY29uX3N0YXJfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2ljb24tc3Rhci1hY3RpdmVAMngucG5nJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaXNDb2xsZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2NvbGxlY3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvU3Rhcihib29rLCBpbmRleCkge1xuICAgICAgICAvLyDlsIbopoHlj5HnlJ/nmoTmlLbol4/liqjkvZxcbiAgICAgICAgY29uc3QgaXNDb2xsZWN0ID0gQm9vbGVhbihib29rICYmICtib29rLmNvbGxlY3RlZClcbiAgICAgICAgY29uc3QgbmV3VHlwZSA9IGlzQ29sbGVjdCA/IDAgOiAxXG4gICAgICAgIGNvbnN0IG5ld1R5cGVUZXh0ID0gbmV3VHlwZSA/ICfmt7vliqAnIDogJ+WPlua2iCdcbiAgICAgICAgLy8g5pS26JeP5pys5LmmXG4gICAgICAgIHRoaXMuJHBvc3Qoe1xuICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYm9va19pZHM6IFtib29rLmlkXSxcbiAgICAgICAgICAgIHR5cGU6IG5ld1R5cGVcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7XG4gICAgICAgICAgICAvLyDph43nva7mnKzkuabmlLbol4/nirbmgIFcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KHRoaXMubGlzdFtpbmRleF0pKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uY29sbGVjdGVkID0gbmV3VHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IGAke25ld1R5cGVUZXh0feaUtuiXj++8gWAsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7XG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOiwg+ivleS7o+eggSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAvLyB0aGlzLmJvb2suY29sbGVjdGVkID0gbmV3VHlwZVxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDosIPor5Xku6PnoIEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IGAke25ld1R5cGVUZXh0feaUtuiXj+Wksei0pe+8gWAsXG4gICAgICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ljb24vaWNvbi1jYW5jZWwucG5nJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19