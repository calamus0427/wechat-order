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
      icon_eye: '/images/icon/addBefore.jpg',
      icon_eye_active: '/images/icon/addAfter.jpg'
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
        console.log("p=>", index, item);
        if (this.chooseList.length == 0) {
          this.chooseList.push(item);
          this.chooseList.map(function (item) {
            item.price = parseFloat(item.price);
            item.sum = 1;
          });
          this.$apply();
        } else {
          for (var i = 0; i < this.chooseList.length; i++) {
            if (this.chooseList[i].id === item.id) {
              this.chooseList[i].sum++;
            } else {
              this.chooseList.push(item);
              this.chooseList.map(function (item) {
                item.price = parseFloat(item.price);
                item.sum = 1;
              });
              this.$apply();
            }
          }
        }

        console.log("push=>", this.chooseList);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return foodList;
}(_wepy2.default.component);

exports.default = foodList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3RhcnMiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwidHdvV2F5IiwiY2hvb3NlTGlzdCIsInRpdGxlIiwiU3RyaW5nIiwic3RhciIsImxvYWRpbmciLCJCb29sZWFuIiwibm9Nb3JlIiwiY2F0TGlzdCIsImRlYWxMaXN0IiwiZGF0YSIsImNlc2hpIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJjb21wdXRlZCIsImlzQ29sbGVjdExpc3QiLCJtZXRob2RzIiwic3VidHJhY3QiLCJpbmRleCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiaSIsImlkIiwic3VtIiwic3BsaWNlIiwicGx1cyIsInB1c2giLCJtYXAiLCJwcmljZSIsInBhcnNlRmxvYXQiLCIkYXBwbHkiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFdBQXRDLEVBQVQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsYUFBT0E7QUFEQyxLLFFBR1ZDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTLEVBRkw7QUFHSkMsZ0JBQVE7QUFISixPQURBO0FBTU5DLGtCQUFXO0FBQ1RKLGNBQU1DLE1BREc7QUFFVEMsaUJBQVMsRUFGQTtBQUdUQyxnQkFBUTtBQUhDLE9BTkw7QUFXTkUsYUFB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QWhCLENBQWI7QUFDQVgscUJBQUtNLEdBQUwsR0FBVyxDQUFYO0FBQ0QsZUFIRDtBQUlBLG1CQUFLTyxNQUFMO0FBQ0w7QUFDRjtBQUNGOztBQUVEWixnQkFBUUMsR0FBUixDQUFZLFFBQVosRUFBcUIsS0FBS3BCLFVBQTFCO0FBRUQ7QUEzQ08sSzs7OztFQWxFMEJnQyxlQUFLQyxTOztrQkFBdEJoRCxRIiwiZmlsZSI6ImZvb2RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IFN0YXJzIGZyb20gJy4vc3RhcnMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9vZExpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN0YXJzXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdGFyLm9uY2VcIjpcIml0ZW0uc3RhclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTdGFyczogU3RhcnNcbiAgICB9XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgcHJvcHMgPSB7XG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNob29zZUxpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICfmjqjojZDov73nlarooagnXG4gICAgICB9LFxuICAgICAgc3Rhcjp7XG4gICAgICAgIGRlZmF1bHQ6JydcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm9Nb3JlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFt0eXBlIOWIl+ihqOexu+Wei++8muW4uOinhOWIl+ihqC/mlLbol4/liJfooahdXG4gICAgICAgKiBAdHlwZSB7bGlzdC9jb2xsZWN0fVxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXG4gICAgICB9LFxuICAgICAgY2F0TGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRlYWxMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNlc2hpOicxMTEnLFxuICAgICAgaWNvbl9leWU6ICcvaW1hZ2VzL2ljb24vYWRkQmVmb3JlLmpwZycsXG4gICAgICBpY29uX2V5ZV9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vYWRkQWZ0ZXIuanBnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaXNDb2xsZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2NvbGxlY3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8v5YeP5bCR5ZWG5ZOBXG4gICAgICBzdWJ0cmFjdChpbmRleCxpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzXCIsaW5kZXgsaXRlbSk7XG4gICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdC5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCB0aGlzLmNob29zZUxpc3QubGVuZ3RoIDsgaSArKyl7XG4gICAgICAgICAgICBpZih0aGlzLmNob29zZUxpc3RbaV0uaWQgPT0gaXRlbS5pZCApe1xuICAgICAgICAgICAgICBpZih0aGlzLmNob29zZUxpc3RbaV0uc3VtID09IDEpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvb3NlTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0W2ldLnN1bSAtLSA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvL+WinuWKoOWVhuWTgVxuICAgICAgcGx1cyhpbmRleCxpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJwPT5cIixpbmRleCxpdGVtKTtcbiAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0Lmxlbmd0aCA9PSAwICl7XG4gICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnB1c2goaXRlbSkgO1xuICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0Lm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wcmljZSA9IHBhcnNlRmxvYXQoaXRlbS5wcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3VtID0gMSA7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCB0aGlzLmNob29zZUxpc3QubGVuZ3RoIDsgaSArKyl7XG4gICAgICAgICAgICBpZih0aGlzLmNob29zZUxpc3RbaV0uaWQgPT09IGl0ZW0uaWQgKXtcbiAgICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0W2ldLnN1bSArKyA7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnB1c2goaXRlbSkgO1xuICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0Lm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wcmljZSA9IHBhcnNlRmxvYXQoaXRlbS5wcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3VtID0gMSA7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHVzaD0+XCIsdGhpcy5jaG9vc2VMaXN0KTtcblxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19