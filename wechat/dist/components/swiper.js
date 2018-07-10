'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      list: {
        type: Object,
        default: []
      },
      height: {
        type: [String, Number],
        default: '240rpx'
      },
      dots: {
        type: Boolean,
        default: true
      }
    }, _this.data = {
      autoplay: true,
      indicatorColor: 'rgba(255, 255, 255, 0.6)',
      indicatorActiveColor: 'rgba(255, 255, 255, 1)'
    }, _this.computed = {
      indicatorDots: function indicatorDots() {
        return Boolean(this.list.length > 1 && this.dots);
      },
      style_height: function style_height() {
        var h = this.height;
        return this.isNumber(+h) ? h + 'rpx' : this.isMatchHeight(h) ? h : '240rpx';
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: 'isMatchHeight',
    value: function isMatchHeight(str) {
      return this.isString(str) ? /\d+(r?px|em)$/.test(str) : false;
    }
  }]);

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJtaXhpbnMiLCJiYXNlIiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJoZWlnaHQiLCJTdHJpbmciLCJOdW1iZXIiLCJkb3RzIiwiQm9vbGVhbiIsImRhdGEiLCJhdXRvcGxheSIsImluZGljYXRvckNvbG9yIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJjb21wdXRlZCIsImluZGljYXRvckRvdHMiLCJsZW5ndGgiLCJzdHlsZV9oZWlnaHQiLCJoIiwiaXNOdW1iZXIiLCJpc01hdGNoSGVpZ2h0IiwibWV0aG9kcyIsInN0ciIsImlzU3RyaW5nIiwidGVzdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLGNBQVE7QUFDTkgsY0FBTSxDQUFDSSxNQUFELEVBQVNDLE1BQVQsQ0FEQTtBQUVOSCxpQkFBUztBQUZILE9BTEY7QUFTTkksWUFBTTtBQUNKTixjQUFNTyxPQURGO0FBRUpMLGlCQUFTO0FBRkw7QUFUQSxLLFFBZVJNLEksR0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLHNCQUFnQiwwQkFGWDtBQUdMQyw0QkFBc0I7QUFIakIsSyxRQU1QQyxRLEdBQVc7QUFDVEMsbUJBRFMsMkJBQ087QUFDZCxlQUFPTixRQUFRLEtBQUtSLElBQUwsQ0FBVWUsTUFBVixHQUFtQixDQUFuQixJQUF3QixLQUFLUixJQUFyQyxDQUFQO0FBQ0QsT0FIUTtBQUlUUyxrQkFKUywwQkFJTTtBQUNiLFlBQU1DLElBQUksS0FBS2IsTUFBZjtBQUNBLGVBQU8sS0FBS2MsUUFBTCxDQUFjLENBQUNELENBQWYsSUFBdUJBLENBQXZCLFdBQWdDLEtBQUtFLGFBQUwsQ0FBbUJGLENBQW5CLElBQXdCQSxDQUF4QixHQUE0QixRQUFuRTtBQUNEO0FBUFEsSyxRQVVYRyxPLEdBQVUsRTs7Ozs7a0NBR0lDLEcsRUFBSztBQUNqQixhQUFPLEtBQUtDLFFBQUwsQ0FBY0QsR0FBZCxJQUFxQixnQkFBZ0JFLElBQWhCLENBQXFCRixHQUFyQixDQUFyQixHQUFpRCxLQUF4RDtBQUNEOzs7O0VBdENvQ0csZUFBS0MsUzs7a0JBQXZCN0IsUyIsImZpbGUiOiJzd2lwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UuanMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIG1peGlucyA9IFtiYXNlXVxuICAgIHByb3BzID0ge1xuICAgICAgbGlzdDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiB7XG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgIGRlZmF1bHQ6ICcyNDBycHgnXG4gICAgICB9LFxuICAgICAgZG90czoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgaW5kaWNhdG9yQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgaW5kaWNhdG9yQWN0aXZlQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaW5kaWNhdG9yRG90cygpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5saXN0Lmxlbmd0aCA+IDEgJiYgdGhpcy5kb3RzKVxuICAgICAgfSxcbiAgICAgIHN0eWxlX2hlaWdodCgpIHtcbiAgICAgICAgY29uc3QgaCA9IHRoaXMuaGVpZ2h0XG4gICAgICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKCtoKSA/IGAke2h9cnB4YCA6IHRoaXMuaXNNYXRjaEhlaWdodChoKSA/IGggOiAnMjQwcnB4J1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgaXNNYXRjaEhlaWdodChzdHIpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzU3RyaW5nKHN0cikgPyAvXFxkKyhyP3B4fGVtKSQvLnRlc3Qoc3RyKSA6IGZhbHNlXG4gICAgfVxuICB9XG4iXX0=