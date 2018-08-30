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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RMaXN0LmpzIl0sIm5hbWVzIjpbImZvb2RMaXN0IiwiY29tcG9uZW50cyIsIlN0YXJzIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInR3b1dheSIsImNob29zZUxpc3QiLCJ0aXRsZSIsIlN0cmluZyIsInN0YXIiLCJsb2FkaW5nIiwiQm9vbGVhbiIsIm5vTW9yZSIsImNhdExpc3QiLCJkZWFsTGlzdCIsImRhdGEiLCJjZXNoaSIsInN0YXIxIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiY29tcHV0ZWQiLCJpc0NvbGxlY3RMaXN0IiwibWV0aG9kcyIsInN1YnRyYWN0IiwiaW5kZXgiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImkiLCJpZCIsInN1bSIsInNwbGljZSIsInBsdXMiLCJwdXNoIiwibWFwIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwiJGFwcGx5Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsVSxHQUFhO0FBQ1hDLGFBQU9BO0FBREksSyxRQUdiQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxFQUZMO0FBR0pDLGdCQUFRO0FBSEosT0FEQTtBQU1OQyxrQkFBVztBQUNUSixjQUFNQyxNQURHO0FBRVRDLGlCQUFTLEVBRkE7QUFHVEMsZ0JBQVE7QUFIQyxPQU5MO0FBV05FLGFBQU87QUFDTEwsY0FBTU0sTUFERDtBQUVMSixpQkFBUztBQUZKLE9BWEQ7QUFlTkssWUFBSztBQUNITCxpQkFBUTtBQURMLE9BZkM7QUFrQk5NLGVBQVM7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QUFYO0FBQ0QsZUFIRDtBQUlBLG1CQUFLTyxNQUFMO0FBQ0w7QUFDRjtBQUNGOztBQUVEWixnQkFBUUMsR0FBUixDQUFZLFFBQVosRUFBcUIsS0FBS3ZCLFVBQTFCO0FBRUQ7QUEzQ08sSzs7OztFQWxFMEJtQyxlQUFLQyxTOztrQkFBdEJoRCxRIiwiZmlsZSI6ImZvb2RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IFN0YXJzIGZyb20gJy4vc3RhcnMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9vZExpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIFN0YXJzOiBTdGFyc1xuICAgIH1cbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgY2hvb3NlTGlzdDp7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ+aOqOiNkOi/veeVquihqCdcbiAgICAgIH0sXG4gICAgICBzdGFyOntcbiAgICAgICAgZGVmYXVsdDonJ1xuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBub01vcmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogW3R5cGUg5YiX6KGo57G75Z6L77ya5bi46KeE5YiX6KGoL+aUtuiXj+WIl+ihqF1cbiAgICAgICAqIEB0eXBlIHtsaXN0L2NvbGxlY3R9XG4gICAgICAgKi9cbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnbGlzdCdcbiAgICAgIH0sXG4gICAgICBjYXRMaXN0OntcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgZGVhbExpc3Q6e1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY2VzaGk6JzExMScsXG4gICAgICBzdGFyMToxLFxuICAgICAgaWNvbl9leWU6ICcvaW1hZ2VzL2ljb24vYWRkQmVmb3JlLmpwZycsXG4gICAgICBpY29uX2V5ZV9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vYWRkQWZ0ZXIuanBnJyxcbiAgICAgIGljb25fc3RhcjogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXJAMngucG5nJyxcbiAgICAgIGljb25fc3Rhcl9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyLWFjdGl2ZUAyeC5wbmcnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBpc0NvbGxlY3RMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnY29sbGVjdCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy/lh4/lsJHllYblk4FcbiAgICAgIHN1YnRyYWN0KGluZGV4LGl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNcIixpbmRleCxpdGVtKTtcbiAgICAgICAgaWYodGhpcy5jaG9vc2VMaXN0Lmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHRoaXMuY2hvb3NlTGlzdC5sZW5ndGggOyBpICsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdFtpXS5pZCA9PSBpdGVtLmlkICl7XG4gICAgICAgICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdFtpXS5zdW0gPT0gMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VMaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtIC0tIDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8v5aKe5Yqg5ZWG5ZOBXG4gICAgICBwbHVzKGluZGV4LGl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhcInA9PlwiLGluZGV4LGl0ZW0pO1xuICAgICAgICBpZih0aGlzLmNob29zZUxpc3QubGVuZ3RoID09IDAgKXtcbiAgICAgICAgICB0aGlzLmNob29zZUxpc3QucHVzaChpdGVtKSA7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNob29zZUxpc3QubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnByaWNlID0gcGFyc2VGbG9hdChpdGVtLnByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdW0gPSAxIDtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHRoaXMuY2hvb3NlTGlzdC5sZW5ndGggOyBpICsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hvb3NlTGlzdFtpXS5pZCA9PT0gaXRlbS5pZCApe1xuICAgICAgICAgICAgICB0aGlzLmNob29zZUxpc3RbaV0uc3VtICsrIDtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0aGlzLmNob29zZUxpc3QucHVzaChpdGVtKSA7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNob29zZUxpc3QubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnByaWNlID0gcGFyc2VGbG9hdChpdGVtLnByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdW0gPSAxIDtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJwdXNoPT5cIix0aGlzLmNob29zZUxpc3QpO1xuXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=