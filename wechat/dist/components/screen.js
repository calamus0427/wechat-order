'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_wepy$component) {
  _inherits(Screen, _wepy$component);

  function Screen() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Screen);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Screen.__proto__ || Object.getPrototypeOf(Screen)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      position: {
        type: String,
        default: 'bottom'
      }
    }, _this.computed = {
      style_position: function style_position() {
        return ['bottom', 'top'].indexOf(this.position) > -1 ? this.position : 'bottom';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Screen;
}(_wepy2.default.component);

exports.default = Screen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbi5qcyJdLCJuYW1lcyI6WyJTY3JlZW4iLCJtaXhpbnMiLCJiYXNlIiwicHJvcHMiLCJwb3NpdGlvbiIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJzdHlsZV9wb3NpdGlvbiIsImluZGV4T2YiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEMsUUFDVEMsSyxHQUFRO0FBQ05DLGdCQUFVO0FBQ1JDLGNBQU1DLE1BREU7QUFFUkMsaUJBQVM7QUFGRDtBQURKLEssUUFPUkMsUSxHQUFXO0FBQ1RDLG9CQURTLDRCQUNRO0FBQ2YsZUFBTyxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCQyxPQUFsQixDQUEwQixLQUFLTixRQUEvQixJQUEyQyxDQUFDLENBQTVDLEdBQWdELEtBQUtBLFFBQXJELEdBQWdFLFFBQXZFO0FBQ0Q7QUFIUSxLOzs7O0VBVHVCTyxlQUFLQyxTOztrQkFBcEJaLE0iLCJmaWxlIjoic2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlLmpzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBtaXhpbnMgPSBbYmFzZV1cbiAgICBwcm9wcyA9IHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2JvdHRvbSdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHN0eWxlX3Bvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZih0aGlzLnBvc2l0aW9uKSA+IC0xID8gdGhpcy5wb3NpdGlvbiA6ICdib3R0b20nXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=