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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJpbnB1dFZhbCIsInR3b1dheSIsImRhdGEiLCJpbnB1dFNob3dlZCIsImNvbXB1dGVkIiwiY29tcHV0ZWRQbGFjZWhvbGRlciIsIm1ldGhvZHMiLCJzaG93SW5wdXQiLCJpc1Nob3ciLCIkYXBwbHkiLCJzZWFyY2giLCJzZWFyY2hSZXN1bHQiLCIkZW1pdCIsImNsZWFySW5wdXQiLCJjYiIsInNldFRpbWVvdXQiLCJpbnB1dFR5cGluZyIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxtQkFBYTtBQUNYQyxjQUFNQyxNQURLO0FBRVhDLGlCQUFTO0FBRkUsT0FEUDtBQUtOQyxnQkFBUztBQUNQSCxjQUFNQyxNQURDO0FBRVBDLGlCQUFRLEVBRkQ7QUFHUEUsZ0JBQVE7QUFIRDtBQUxILEssUUFZUkMsSSxHQUFPO0FBQ0xDLG1CQUFhO0FBRFIsSyxRQUlQQyxRLEdBQVc7QUFDVEMseUJBRFMsaUNBQ2E7QUFDcEIsZUFBTyxLQUFLTCxRQUFMLElBQWlCLEtBQUtKLFdBQTdCO0FBQ0Q7QUFIUSxLLFFBTVhVLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxNQURILEVBQ1c7QUFDakIsYUFBS0wsV0FBTCxHQUFtQkssV0FBVyxNQUE5QjtBQUNBLGFBQUtDLE1BQUw7QUFDRCxPQUpPO0FBS1JDLFlBTFEsb0JBS0UsQ0FFVCxDQVBPO0FBUVJDLGtCQVJRLDBCQVFRO0FBQ1YsYUFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUIsS0FBS1osUUFBMUI7QUFDTCxPQVZPO0FBV1JhLGdCQVhRLHNCQVdJQyxFQVhKLEVBV1E7QUFBQTs7QUFDZEMsbUJBQVcsWUFBTTtBQUNmLGlCQUFLZixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsaUJBQUtTLE1BQUw7QUFDRCxTQUhEO0FBSUEsYUFBS0csS0FBTCxDQUFXLE9BQVgsRUFBb0IsS0FBS1osUUFBekI7QUFDRCxPQWpCTztBQWtCUmdCLGlCQWxCUSx1QkFrQktDLENBbEJMLEVBa0JRO0FBQ2QsYUFBS2pCLFFBQUwsR0FBZ0JpQixFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBQ0Q7QUFwQk8sSzs7OztFQXZCMkJDLGVBQUtDLFM7O2tCQUF2QjNCLFMiLCJmaWxlIjoic2VhcmNoYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAn5pCc57SiJ1xuICAgICAgfSxcbiAgICAgIGlucHV0VmFsOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OicnLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5wdXRTaG93ZWQ6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBjb21wdXRlZFBsYWNlaG9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFZhbCB8fCB0aGlzLnBsYWNlaG9sZGVyXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dJbnB1dCAoaXNTaG93KSB7XG4gICAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSBpc1Nob3cgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgc2VhcmNoICgpIHtcblxuICAgICAgfSxcbiAgICAgIHNlYXJjaFJlc3VsdCAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLmlucHV0VmFsKTtcbiAgICAgIH0sXG4gICAgICBjbGVhcklucHV0IChjYikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlucHV0VmFsID0gJydcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NsZWFyJywgdGhpcy5pbnB1dFZhbCk7XG4gICAgICB9LFxuICAgICAgaW5wdXRUeXBpbmcgKGUpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=