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
        console.log("p", item);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return foodList;
}(_wepy2.default.component);

exports.default = foodList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3RhcnMiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwidHdvV2F5IiwiY2hvb3NlTGlzdCIsInRpdGxlIiwiU3RyaW5nIiwic3RhciIsImxvYWRpbmciLCJCb29sZWFuIiwibm9Nb3JlIiwiZGF0YSIsImNlc2hpIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJjb21wdXRlZCIsImlzQ29sbGVjdExpc3QiLCJtZXRob2RzIiwidG9TdGFyIiwiYm9vayIsImluZGV4IiwiaXNDb2xsZWN0IiwiY29sbGVjdGVkIiwibmV3VHlwZSIsIm5ld1R5cGVUZXh0IiwiJHBvc3QiLCJ1cmwiLCJib29rX2lkcyIsImlkIiwic3VjY2VzcyIsImNvZGUiLCJpc09iamVjdCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiZmFpbCIsImltYWdlIiwic3VidHJhY3QiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInBsdXMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFdBQXRDLEVBQVQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsYUFBT0E7QUFEQyxLLFFBR1ZDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTLEVBRkw7QUFHSkMsZ0JBQVE7QUFISixPQURBO0FBTU5DLGtCQUFXO0FBQ1RKLGNBQU1DLE1BREc7QUFFVEMsaUJBQVMsRUFGQTtBQUdUQyxnQkFBUTtBQUhDLE9BTkw7QUFXTkUsYUFBTztBQUNMTCxjQUFNTSxNQUREO0FBRUxKLGlCQUFTO0FBRkosT0FYRDtBQWVOSyxZQUFLO0FBQ0hMLGlCQUFRO0FBREwsT0FmQztBQWtCTk0sZUFBUztBQUNQUixjQUFNUyxPQURDO0FBRVBQLGlCQUFTO0FBRkYsT0FsQkg7QUFzQk5RLGNBQVE7QUFDTlYsY0FBTVMsT0FEQTtBQUVOUCxpQkFBUztBQUZILE9BdEJGO0FBMEJOOzs7O0FBSUFGLFlBQU07QUFDSkEsY0FBTU0sTUFERjtBQUVKSixpQkFBUztBQUZMO0FBOUJBLEssUUFvQ1JTLEksR0FBTztBQUNMQyxhQUFNLEtBREQ7QUFFTEMsZ0JBQVUsNEJBRkw7QUFHTEMsdUJBQWlCO0FBSFosSyxRQU1QQyxRLEdBQVc7QUFDVEMsbUJBRFMsMkJBQ087QUFDZCxlQUFPLEtBQUtoQixJQUFMLEtBQWMsU0FBckI7QUFDRDtBQUhRLEssUUFNWGlCLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxJQURDLEVBQ0tDLEtBREwsRUFDWTtBQUFBOztBQUNsQjtBQUNBLFlBQU1DLFlBQVlaLFFBQVFVLFFBQVEsQ0FBQ0EsS0FBS0csU0FBdEIsQ0FBbEI7QUFDQSxZQUFNQyxVQUFVRixZQUFZLENBQVosR0FBZ0IsQ0FBaEM7QUFDQSxZQUFNRyxjQUFjRCxVQUFVLElBQVYsR0FBaUIsSUFBckM7QUFDQTtBQUNBLGFBQUtFLEtBQUwsQ0FBVztBQUNUQyxlQUFLLEVBREk7QUFFVGYsZ0JBQU07QUFDSmdCLHNCQUFVLENBQUNSLEtBQUtTLEVBQU4sQ0FETjtBQUVKNUIsa0JBQU11QjtBQUZGO0FBRkcsU0FBWCxFQU1HO0FBQ0RNLG1CQUFTLHdCQUFrQjtBQUFBLGdCQUFoQkMsSUFBZ0IsU0FBaEJBLElBQWdCO0FBQUEsZ0JBQVZuQixJQUFVLFNBQVZBLElBQVU7O0FBQ3pCO0FBQ0EsZ0JBQUksT0FBS29CLFFBQUwsQ0FBYyxPQUFLaEMsSUFBTCxDQUFVcUIsS0FBVixDQUFkLENBQUosRUFBcUM7QUFDbkMscUJBQUtyQixJQUFMLENBQVVxQixLQUFWLEVBQWlCRSxTQUFqQixHQUE2QkMsT0FBN0I7QUFDRDtBQUNEUyxlQUFHQyxTQUFILENBQWE7QUFDWDVCLHFCQUFVbUIsV0FBVix1QkFEVztBQUVYVSxvQkFBTSxTQUZLO0FBR1hDLHdCQUFVO0FBSEMsYUFBYjtBQUtELFdBWEE7QUFZREMsZ0JBQU0scUJBQWtCO0FBQUEsZ0JBQWhCTixJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxnQkFBVm5CLElBQVUsU0FBVkEsSUFBVTs7QUFDdEI7QUFDQTtBQUNBO0FBQ0FxQixlQUFHQyxTQUFILENBQWE7QUFDWDVCLHFCQUFVbUIsV0FBVixtQ0FEVztBQUVYVSxvQkFBTSxTQUZLO0FBR1hHLHFCQUFPLDhCQUhJO0FBSVhGLHdCQUFVO0FBSkMsYUFBYjtBQU1EO0FBdEJBLFNBTkg7QUE4QkQsT0FyQ087QUFzQ1JHLGNBdENRLG9CQXNDQ0MsSUF0Q0QsRUFzQ007QUFDcEJDLGdCQUFRQyxHQUFSLENBQVksR0FBWixFQUFnQkYsSUFBaEI7QUFDTyxPQXhDTztBQXlDUkcsVUF6Q1EsZ0JBeUNISCxJQXpDRyxFQXlDRTtBQUNoQkMsZ0JBQVFDLEdBQVIsQ0FBWSxHQUFaLEVBQWdCRixJQUFoQjtBQUVPO0FBNUNPLEs7Ozs7RUF4RDBCSSxlQUFLQyxTOztrQkFBdEJ2RCxRIiwiZmlsZSI6ImZvb2RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IFN0YXJzIGZyb20gJy4vc3RhcnMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9vZExpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN0YXJzXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdGFyLm9uY2VcIjpcIml0ZW0uc3RhclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTdGFyczogU3RhcnNcbiAgICB9XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgcHJvcHMgPSB7XG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNob29zZUxpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICfmjqjojZDov73nlarooagnXG4gICAgICB9LFxuICAgICAgc3Rhcjp7XG4gICAgICAgIGRlZmF1bHQ6JydcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm9Nb3JlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFt0eXBlIOWIl+ihqOexu+Wei++8muW4uOinhOWIl+ihqC/mlLbol4/liJfooahdXG4gICAgICAgKiBAdHlwZSB7bGlzdC9jb2xsZWN0fVxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNlc2hpOicxMTEnLFxuICAgICAgaWNvbl9leWU6ICcvaW1hZ2VzL2ljb24vYWRkQmVmb3JlLmpwZycsXG4gICAgICBpY29uX2V5ZV9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vYWRkQWZ0ZXIuanBnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaXNDb2xsZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2NvbGxlY3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvU3Rhcihib29rLCBpbmRleCkge1xuICAgICAgICAvLyDlsIbopoHlj5HnlJ/nmoTmlLbol4/liqjkvZxcbiAgICAgICAgY29uc3QgaXNDb2xsZWN0ID0gQm9vbGVhbihib29rICYmICtib29rLmNvbGxlY3RlZClcbiAgICAgICAgY29uc3QgbmV3VHlwZSA9IGlzQ29sbGVjdCA/IDAgOiAxXG4gICAgICAgIGNvbnN0IG5ld1R5cGVUZXh0ID0gbmV3VHlwZSA/ICfmt7vliqAnIDogJ+WPlua2iCdcbiAgICAgICAgLy8g5pS26JeP5pys5LmmXG4gICAgICAgIHRoaXMuJHBvc3Qoe1xuICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYm9va19pZHM6IFtib29rLmlkXSxcbiAgICAgICAgICAgIHR5cGU6IG5ld1R5cGVcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7XG4gICAgICAgICAgICAvLyDph43nva7mnKzkuabmlLbol4/nirbmgIFcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KHRoaXMubGlzdFtpbmRleF0pKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uY29sbGVjdGVkID0gbmV3VHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IGAke25ld1R5cGVUZXh0feaUtuiXj++8gWAsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7XG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOiwg+ivleS7o+eggSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAvLyB0aGlzLmJvb2suY29sbGVjdGVkID0gbmV3VHlwZVxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDosIPor5Xku6PnoIEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IGAke25ld1R5cGVUZXh0feaUtuiXj+Wksei0pe+8gWAsXG4gICAgICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ljb24vaWNvbi1jYW5jZWwucG5nJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHN1YnRyYWN0KGl0ZW0pe1xuY29uc29sZS5sb2coXCJzXCIsaXRlbSlcbiAgICAgIH0sXG4gICAgICBwbHVzKGl0ZW0pe1xuY29uc29sZS5sb2coXCJwXCIsaXRlbSlcblxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19