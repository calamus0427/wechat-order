'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_wepy$component) {
  _inherits(SearchBar, _wepy$component);

  function SearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      placeholder: {
        type: String,
        default: '搜索'
      },
      inputVal: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'tag'
      }
    }, _this.data = {
      inputShowed: false
    }, _this.computed = {
      computedPlaceholder: function computedPlaceholder() {
        return this.inputVal || this.placeholder;
      }
    }, _this.methods = {
      showInput: function showInput(isShow) {
        this.inputShowed = isShow === 'true';
        this.$apply();
      },
      search: function search() {
        wx.navigateTo({
          url: '/pages/searchTag?inputVal=' + this.inputVal
        });
      },
      searchResult: function searchResult() {
        wx.navigateTo({
          url: '/pages/search?inputVal=' + this.inputVal
        });
      },
      clearInput: function clearInput(cb) {
        var _this2 = this;

        setTimeout(function () {
          _this2.inputVal = '';
          _this2.$apply();
        });
      },
      inputTyping: function inputTyping(e) {
        this.inputVal = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJpbnB1dFZhbCIsImRhdGEiLCJpbnB1dFNob3dlZCIsImNvbXB1dGVkIiwiY29tcHV0ZWRQbGFjZWhvbGRlciIsIm1ldGhvZHMiLCJzaG93SW5wdXQiLCJpc1Nob3ciLCIkYXBwbHkiLCJzZWFyY2giLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWFyY2hSZXN1bHQiLCJjbGVhcklucHV0IiwiY2IiLCJzZXRUaW1lb3V0IiwiaW5wdXRUeXBpbmciLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMsbUJBQWE7QUFDWEMsY0FBTUMsTUFESztBQUVYQyxpQkFBUztBQUZFLE9BRFA7QUFLTkMsZ0JBQVM7QUFDUEgsY0FBTUMsTUFEQztBQUVQQyxpQkFBUTtBQUZELE9BTEg7QUFTTkYsWUFBSztBQUNIQSxjQUFLQyxNQURGO0FBRUhDLGlCQUFRO0FBRkw7QUFUQyxLLFFBZVJFLEksR0FBTztBQUNMQyxtQkFBYTtBQURSLEssUUFJUEMsUSxHQUFXO0FBQ1RDLHlCQURTLGlDQUNhO0FBQ3BCLGVBQU8sS0FBS0osUUFBTCxJQUFpQixLQUFLSixXQUE3QjtBQUNEO0FBSFEsSyxRQU1YUyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsTUFESCxFQUNXO0FBQ2pCLGFBQUtMLFdBQUwsR0FBbUJLLFdBQVcsTUFBOUI7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FKTztBQUtSQyxZQUxRLG9CQUtFO0FBQ0pDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLLCtCQUE2QixLQUFLWjtBQUQzQixTQUFkO0FBR0wsT0FUTztBQVVSYSxrQkFWUSwwQkFVUTtBQUNWSCxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSyw0QkFBMEIsS0FBS1o7QUFEeEIsU0FBZDtBQUdMLE9BZE87QUFlUmMsZ0JBZlEsc0JBZUlDLEVBZkosRUFlUTtBQUFBOztBQUNkQyxtQkFBVyxZQUFNO0FBQ2YsaUJBQUtoQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsaUJBQUtRLE1BQUw7QUFDRCxTQUhEO0FBSUQsT0FwQk87QUFxQlJTLGlCQXJCUSx1QkFxQktDLENBckJMLEVBcUJRO0FBQ2QsYUFBS2xCLFFBQUwsR0FBZ0JrQixFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBQ0Q7QUF2Qk8sSzs7OztFQTFCMkJDLGVBQUtDLFM7O2tCQUF2QjVCLFMiLCJmaWxlIjoic2VhcmNoYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAn5pCc57SiJ1xuICAgICAgfSxcbiAgICAgIGlucHV0VmFsOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OicnXG4gICAgICB9LFxuICAgICAgdHlwZTp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICBkZWZhdWx0Oid0YWcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlucHV0U2hvd2VkOiBmYWxzZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgY29tcHV0ZWRQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWwgfHwgdGhpcy5wbGFjZWhvbGRlclxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzaG93SW5wdXQgKGlzU2hvdykge1xuICAgICAgICB0aGlzLmlucHV0U2hvd2VkID0gaXNTaG93ID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHNlYXJjaCAoKSB7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3NlYXJjaFRhZz9pbnB1dFZhbD0nK3RoaXMuaW5wdXRWYWxcbiAgICAgICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgc2VhcmNoUmVzdWx0ICgpIHtcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvc2VhcmNoP2lucHV0VmFsPScrdGhpcy5pbnB1dFZhbFxuICAgICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBjbGVhcklucHV0IChjYikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlucHV0VmFsID0gJydcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgaW5wdXRUeXBpbmcgKGUpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=