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

var Stars = function (_wepy$component) {
  _inherits(Stars, _wepy$component);

  function Stars() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Stars);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Stars.__proto__ || Object.getPrototypeOf(Stars)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      star: {
        type: String,
        default: '5'
      }
    }, _this.data = {
      icon_star: '/images/icon/icon-star@2x.png',
      icon_star_active: '/images/icon/icon-star-active@2x.png'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Stars;
}(_wepy2.default.component);

exports.default = Stars;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJzLmpzIl0sIm5hbWVzIjpbIlN0YXJzIiwicHJvcHMiLCJzdGFyIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJkYXRhIiwiaWNvbl9zdGFyIiwiaWNvbl9zdGFyX2FjdGl2ZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFLO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsaUJBQVE7QUFGTDtBQURDLEssUUFNUkMsSSxHQUFPO0FBQ0xDLGlCQUFXLCtCQUROO0FBRUxDLHdCQUFrQjtBQUZiLEs7Ozs7RUFQMEJDLGVBQUtDLFM7O2tCQUFuQlYsSyIsImZpbGUiOiJzdGFycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJzIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgc3Rhcjp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDonNSdcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGljb25fc3RhcjogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXJAMngucG5nJyxcbiAgICAgIGljb25fc3Rhcl9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyLWFjdGl2ZUAyeC5wbmcnXG4gICAgfVxuICB9XG4iXX0=