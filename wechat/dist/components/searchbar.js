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
        default: '',
        twoWay: true
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
      search: function search() {},
      searchResult: function searchResult() {
        console.log(this.inputVal);
        this.$emit('search', this.inputVal);
      },
      clearInput: function clearInput(cb) {
        var _this2 = this;

        setTimeout(function () {
          _this2.inputVal = '';
          _this2.$apply();
        });
        this.$emit('clear', this.inputVal);
      },
      inputTyping: function inputTyping(e) {
        this.inputVal = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJpbnB1dFZhbCIsInR3b1dheSIsImRhdGEiLCJpbnB1dFNob3dlZCIsImNvbXB1dGVkIiwiY29tcHV0ZWRQbGFjZWhvbGRlciIsIm1ldGhvZHMiLCJzaG93SW5wdXQiLCJpc1Nob3ciLCIkYXBwbHkiLCJzZWFyY2giLCJzZWFyY2hSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCJjbGVhcklucHV0IiwiY2IiLCJzZXRUaW1lb3V0IiwiaW5wdXRUeXBpbmciLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMsbUJBQWE7QUFDWEMsY0FBTUMsTUFESztBQUVYQyxpQkFBUztBQUZFLE9BRFA7QUFLTkMsZ0JBQVM7QUFDUEgsY0FBTUMsTUFEQztBQUVQQyxpQkFBUSxFQUZEO0FBR1BFLGdCQUFRO0FBSEQ7QUFMSCxLLFFBWVJDLEksR0FBTztBQUNMQyxtQkFBYTtBQURSLEssUUFJUEMsUSxHQUFXO0FBQ1RDLHlCQURTLGlDQUNhO0FBQ3BCLGVBQU8sS0FBS0wsUUFBTCxJQUFpQixLQUFLSixXQUE3QjtBQUNEO0FBSFEsSyxRQU1YVSxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsTUFESCxFQUNXO0FBQ2pCLGFBQUtMLFdBQUwsR0FBbUJLLFdBQVcsTUFBOUI7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FKTztBQUtSQyxZQUxRLG9CQUtFLENBRVQsQ0FQTztBQVFSQyxrQkFSUSwwQkFRUTtBQUNWQyxnQkFBUUMsR0FBUixDQUFZLEtBQUtiLFFBQWpCO0FBQ0EsYUFBS2MsS0FBTCxDQUFXLFFBQVgsRUFBcUIsS0FBS2QsUUFBMUI7QUFDTCxPQVhPO0FBWVJlLGdCQVpRLHNCQVlJQyxFQVpKLEVBWVE7QUFBQTs7QUFDZEMsbUJBQVcsWUFBTTtBQUNmLGlCQUFLakIsUUFBTCxHQUFnQixFQUFoQjtBQUNBLGlCQUFLUyxNQUFMO0FBQ0QsU0FIRDtBQUlBLGFBQUtLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLEtBQUtkLFFBQXpCO0FBQ0QsT0FsQk87QUFtQlJrQixpQkFuQlEsdUJBbUJLQyxDQW5CTCxFQW1CUTtBQUNkLGFBQUtuQixRQUFMLEdBQWdCbUIsRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNEO0FBckJPLEs7Ozs7RUF2QjJCQyxlQUFLQyxTOztrQkFBdkI3QixTIiwiZmlsZSI6InNlYXJjaGJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ+aQnOe0oidcbiAgICAgIH0sXG4gICAgICBpbnB1dFZhbDp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDonJyxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlucHV0U2hvd2VkOiBmYWxzZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgY29tcHV0ZWRQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWwgfHwgdGhpcy5wbGFjZWhvbGRlclxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzaG93SW5wdXQgKGlzU2hvdykge1xuICAgICAgICB0aGlzLmlucHV0U2hvd2VkID0gaXNTaG93ID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHNlYXJjaCAoKSB7XG5cbiAgICAgIH0sXG4gICAgICBzZWFyY2hSZXN1bHQgKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbnB1dFZhbCk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLmlucHV0VmFsKTtcbiAgICAgIH0sXG4gICAgICBjbGVhcklucHV0IChjYikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlucHV0VmFsID0gJydcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NsZWFyJywgdGhpcy5pbnB1dFZhbCk7XG4gICAgICB9LFxuICAgICAgaW5wdXRUeXBpbmcgKGUpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=