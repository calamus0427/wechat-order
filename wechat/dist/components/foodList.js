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
        if (this.chooseList.length != 0) {
          for (var i = 0; i < this.chooseList.length; i++) {
            if (this.chooseList[i].id == item.id) {
              if (this.chooseList[i].sum == 1) {
                this.chooseList.splice(i, 1);
              } else {
                this.chooseList[i].sum--;
              }
            }
          }
        }
      },

      //增加商品
      plus: function plus(index, item) {
        item.price = parseFloat(item.price);
        item.sum = 1;
        var i = this.findElem(this.chooseList, "id", item.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiY29tcG9uZW50cyIsIlN0YXJzIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInR3b1dheSIsImNob29zZUxpc3QiLCJ0aXRsZSIsIlN0cmluZyIsInN0YXIiLCJsb2FkaW5nIiwiQm9vbGVhbiIsIm5vTW9yZSIsImNhdExpc3QiLCJkZWFsTGlzdCIsImRhdGEiLCJjZXNoaSIsInN0YXIxIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiY29tcHV0ZWQiLCJpc0NvbGxlY3RMaXN0IiwibWV0aG9kcyIsInN1YnRyYWN0IiwiaW5kZXgiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImkiLCJpZCIsInN1bSIsInNwbGljZSIsInBsdXMiLCJwcmljZSIsInBhcnNlRmxvYXQiLCJmaW5kRWxlbSIsInB1c2giLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxVLEdBQWE7QUFDWEMsYUFBT0E7QUFESSxLLFFBR2JDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTLEVBRkw7QUFHSkMsZ0JBQVE7QUFISixPQURBO0FBTU5DLGtCQUFXO0FBQ1RKLGNBQU1DLE1BREc7QUFFVEMsaUJBQVMsRUFGQTtBQUdUQyxnQkFBUTtBQUhDLE9BTkw7QUFXTkUsYUFBTztBQUNMTCxjQUFNTSxNQUREO0FBRUxKLGlCQUFTO0FBRkosT0FYRDtBQWVOSyxZQUFLO0FBQ0hMLGlCQUFRO0FBREwsT0FmQztBQWtCTk0sZUFBUztBQUNQUixjQUFNUyxPQURDO0FBRVBQLGlCQUFTO0FBRkYsT0FsQkg7QUFzQk5RLGNBQVE7QUFDTlYsY0FBTVMsT0FEQTtBQUVOUCxpQkFBUztBQUZILE9BdEJGO0FBMEJOOzs7O0FBSUFGLFlBQU07QUFDSkEsY0FBTU0sTUFERjtBQUVKSixpQkFBUztBQUZMLE9BOUJBO0FBa0NOUyxlQUFRO0FBQ05YLGNBQU1DLE1BREE7QUFFTkMsaUJBQVMsRUFGSDtBQUdOQyxnQkFBUTtBQUhGLE9BbENGO0FBdUNOUyxnQkFBUztBQUNQWixjQUFNQyxNQURDO0FBRVBDLGlCQUFTLEVBRkY7QUFHUEMsZ0JBQVE7QUFIRDtBQXZDSCxLLFFBOENSVSxJLEdBQU87QUFDTEMsYUFBTSxLQUREO0FBRUxDLGFBQU0sQ0FGRDtBQUdMQyxnQkFBVSw0QkFITDtBQUlMQyx1QkFBaUIsMkJBSlo7QUFLTEMsaUJBQVcsK0JBTE47QUFNTEMsd0JBQWtCO0FBTmIsSyxRQVNQQyxRLEdBQVc7QUFDVEMsbUJBRFMsMkJBQ087QUFDZCxlQUFPLEtBQUtyQixJQUFMLEtBQWMsU0FBckI7QUFDRDtBQUhRLEssUUFNWHNCLE8sR0FBVTtBQUNSO0FBQ0FDLGNBRlEsb0JBRUNDLEtBRkQsRUFFT0MsSUFGUCxFQUVZO0FBQ2xCQyxnQkFBUUMsR0FBUixDQUFZLEdBQVosRUFBZ0JILEtBQWhCLEVBQXNCQyxJQUF0QjtBQUNBLFlBQUcsS0FBS3JCLFVBQUwsQ0FBZ0J3QixNQUFoQixJQUEwQixDQUE3QixFQUErQjtBQUM3QixlQUFJLElBQUlDLElBQUksQ0FBWixFQUFnQkEsSUFBSSxLQUFLekIsVUFBTCxDQUFnQndCLE1BQXBDLEVBQTZDQyxHQUE3QyxFQUFrRDtBQUNoRCxnQkFBRyxLQUFLekIsVUFBTCxDQUFnQnlCLENBQWhCLEVBQW1CQyxFQUFuQixJQUF5QkwsS0FBS0ssRUFBakMsRUFBcUM7QUFDbkMsa0JBQUcsS0FBSzFCLFVBQUwsQ0FBZ0J5QixDQUFoQixFQUFtQkUsR0FBbkIsSUFBMEIsQ0FBN0IsRUFBK0I7QUFDN0IscUJBQUszQixVQUFMLENBQWdCNEIsTUFBaEIsQ0FBdUJILENBQXZCLEVBQXlCLENBQXpCO0FBQ0QsZUFGRCxNQUVLO0FBQ0gscUJBQUt6QixVQUFMLENBQWdCeUIsQ0FBaEIsRUFBbUJFLEdBQW5CO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRixPQWZPOztBQWdCUjtBQUNBRSxVQWpCUSxnQkFpQkhULEtBakJHLEVBaUJHQyxJQWpCSCxFQWlCUTtBQUNkQSxhQUFLUyxLQUFMLEdBQWFDLFdBQVdWLEtBQUtTLEtBQWhCLENBQWI7QUFDQVQsYUFBS00sR0FBTCxHQUFXLENBQVg7QUFDQSxZQUFJRixJQUFJLEtBQUtPLFFBQUwsQ0FBYyxLQUFLaEMsVUFBbkIsRUFBOEIsSUFBOUIsRUFBbUNxQixLQUFLSyxFQUF4QyxDQUFSO0FBQ0UsWUFBR0QsSUFBSSxDQUFQLEVBQVM7QUFDUCxlQUFLekIsVUFBTCxDQUFnQmlDLElBQWhCLENBQXFCWixJQUFyQjtBQUNELFNBRkQsTUFFSztBQUNILGVBQUtyQixVQUFMLENBQWdCeUIsQ0FBaEIsRUFBbUJFLEdBQW5CO0FBQ0Q7QUFDSjtBQTFCTyxLOzs7O0VBbEUwQk8sZUFBS0MsUzs7a0JBQXRCL0MsUSIsImZpbGUiOiJmb29kTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBTdGFycyBmcm9tICcuL3N0YXJzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvb2RMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBTdGFyczogU3RhcnNcbiAgICB9XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgcHJvcHMgPSB7XG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNob29zZUxpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICfmjqjojZDov73nlarooagnXG4gICAgICB9LFxuICAgICAgc3Rhcjp7XG4gICAgICAgIGRlZmF1bHQ6JydcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm9Nb3JlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFt0eXBlIOWIl+ihqOexu+Wei++8muW4uOinhOWIl+ihqC/mlLbol4/liJfooahdXG4gICAgICAgKiBAdHlwZSB7bGlzdC9jb2xsZWN0fVxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXG4gICAgICB9LFxuICAgICAgY2F0TGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRlYWxMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNlc2hpOicxMTEnLFxuICAgICAgc3RhcjE6MSxcbiAgICAgIGljb25fZXllOiAnL2ltYWdlcy9pY29uL2FkZEJlZm9yZS5qcGcnLFxuICAgICAgaWNvbl9leWVfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2FkZEFmdGVyLmpwZycsXG4gICAgICBpY29uX3N0YXI6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyQDJ4LnBuZycsXG4gICAgICBpY29uX3N0YXJfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2ljb24tc3Rhci1hY3RpdmVAMngucG5nJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaXNDb2xsZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2NvbGxlY3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8v5YeP5bCR5ZWG5ZOBXG4gICAgICBzdWJ0cmFjdChpbmRleCxpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzXCIsaW5kZXgsaXRlbSk7XG4gICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdC5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCB0aGlzLmNob29zZUxpc3QubGVuZ3RoIDsgaSArKyl7XG4gICAgICAgICAgICBpZih0aGlzLmNob29zZUxpc3RbaV0uaWQgPT0gaXRlbS5pZCApe1xuICAgICAgICAgICAgICBpZih0aGlzLmNob29zZUxpc3RbaV0uc3VtID09IDEpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0W2ldLnN1bSAtLSA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvL+WinuWKoOWVhuWTgVxuICAgICAgcGx1cyhpbmRleCxpdGVtKXtcbiAgICAgICAgaXRlbS5wcmljZSA9IHBhcnNlRmxvYXQoaXRlbS5wcmljZSk7XG4gICAgICAgIGl0ZW0uc3VtID0gMSA7XG4gICAgICAgIHZhciBpID0gdGhpcy5maW5kRWxlbSh0aGlzLmNob29zZUxpc3QsXCJpZFwiLGl0ZW0uaWQpO1xuICAgICAgICAgIGlmKGkgPCAwKXtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0W2ldLnN1bSArKyA7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19