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

var cart = function (_wepy$component) {
  _inherits(cart, _wepy$component);

  function cart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cart.__proto__ || Object.getPrototypeOf(cart)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      flag: {
        type: String,
        default: false,
        twoWay: true
      },
      currentTime: {
        type: String,
        default: '立即送出',
        twoWay: true
      }
    }, _this.data = {}, _this.computed = {
      list: function list() {
        var defaultTime = [];
        defaultTime[0] = '立即送出';
        for (var i = 1; i <= 3; i++) {
          if (new Date().getHours() + i >= 24) {
            defaultTime[i] = '次日' + (new Date().getHours() + i - 16) + ':00';
          } else {
            defaultTime[i] = new Date().getHours() + i + ':00';
          }
        }
        return defaultTime;
      }
    }, _this.methods = {
      choose: function choose(time) {
        this.currentTime = time;
      },
      submitTime: function submitTime() {
        this.flag = false;
      },
      timeFormate: function timeFormate(d) {
        var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        return time;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return cart;
}(_wepy2.default.component);

exports.default = cart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUuanMiXSwibmFtZXMiOlsiY2FydCIsInByb3BzIiwiZmxhZyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidHdvV2F5IiwiY3VycmVudFRpbWUiLCJkYXRhIiwiY29tcHV0ZWQiLCJsaXN0IiwiZGVmYXVsdFRpbWUiLCJpIiwiRGF0ZSIsImdldEhvdXJzIiwibWV0aG9kcyIsImNob29zZSIsInRpbWUiLCJzdWJtaXRUaW1lIiwidGltZUZvcm1hdGUiLCJkIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTLEtBRkw7QUFHSkMsZ0JBQVE7QUFISixPQURBO0FBTVJDLG1CQUFZO0FBQ1ZKLGNBQU1DLE1BREk7QUFFVkMsaUJBQVMsTUFGQztBQUdWQyxnQkFBUTtBQUhFO0FBTkosSyxRQWFSRSxJLEdBQU8sRSxRQUdQQyxRLEdBQVc7QUFDVEMsVUFEUyxrQkFDSDtBQUNKLFlBQUlDLGNBQWMsRUFBbEI7QUFDRUEsb0JBQVksQ0FBWixJQUFpQixNQUFqQjtBQUNBLGFBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWdCQSxLQUFJLENBQXBCLEVBQXdCQSxHQUF4QixFQUE2QjtBQUMzQixjQUFHLElBQUlDLElBQUosR0FBV0MsUUFBWCxLQUFzQkYsQ0FBdEIsSUFBMkIsRUFBOUIsRUFBaUM7QUFDL0JELHdCQUFZQyxDQUFaLElBQWlCLFFBQVEsSUFBSUMsSUFBSixHQUFXQyxRQUFYLEtBQXNCRixDQUF0QixHQUF5QixFQUFqQyxJQUF1QyxLQUF4RDtBQUNELFdBRkQsTUFFSztBQUNIRCx3QkFBWUMsQ0FBWixJQUFpQixJQUFJQyxJQUFKLEdBQVdDLFFBQVgsS0FBc0JGLENBQXRCLEdBQTBCLEtBQTNDO0FBQ0Q7QUFDRjtBQUNILGVBQU9ELFdBQVA7QUFDRDtBQVpRLEssUUFlWEksTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLElBREMsRUFDSTtBQUNWLGFBQUtWLFdBQUwsR0FBbUJVLElBQW5CO0FBQ0QsT0FITztBQUlSQyxnQkFKUSx3QkFJSTtBQUNWLGFBQUtoQixJQUFMLEdBQVksS0FBWjtBQUNELE9BTk87QUFPUmlCLGlCQVBRLHVCQU9JQyxDQVBKLEVBT007QUFDWixZQUFJSCxPQUFLRyxFQUFFTixRQUFGLEtBQWUsR0FBZixHQUFxQk0sRUFBRUMsVUFBRixFQUFyQixHQUFzQyxHQUF0QyxHQUE0Q0QsRUFBRUUsVUFBRixFQUFyRDtBQUNBLGVBQU9MLElBQVA7QUFDRDtBQVZPLEs7Ozs7RUFoQ3NCTSxlQUFLQyxTOztrQkFBbEJ4QixJIiwiZmlsZSI6InRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjYXJ0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgZmxhZzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIGN1cnJlbnRUaW1lOntcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICfnq4vljbPpgIHlh7onLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBsaXN0KCl7XG4gICAgICAgIGxldCBkZWZhdWx0VGltZSA9IFtdO1xuICAgICAgICAgIGRlZmF1bHRUaW1lWzBdID0gJ+eri+WNs+mAgeWHuic7XG4gICAgICAgICAgZm9yKGxldCBpID0gMSA7IGkgPD0zIDsgaSArKyl7XG4gICAgICAgICAgICBpZihuZXcgRGF0ZSgpLmdldEhvdXJzKCkraSA+PSAyNCl7XG4gICAgICAgICAgICAgIGRlZmF1bHRUaW1lW2ldID0gJ+asoeaXpScgKyAobmV3IERhdGUoKS5nZXRIb3VycygpK2kgLTE2KSArICc6MDAnO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGRlZmF1bHRUaW1lW2ldID0gbmV3IERhdGUoKS5nZXRIb3VycygpK2kgKyAnOjAwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0VGltZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hvb3NlKHRpbWUpe1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGltZSA7XG4gICAgICB9LFxuICAgICAgc3VibWl0VGltZSgpe1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIHRpbWVGb3JtYXRlKGQpe1xuICAgICAgICB2YXIgdGltZT1kLmdldEhvdXJzKCkgKyAnOicgKyBkLmdldE1pbnV0ZXMoKSArICc6JyArIGQuZ2V0U2Vjb25kcygpOyBcbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgICB9XG4gICAgfTtcblxuXG4gIH1cbiJdfQ==