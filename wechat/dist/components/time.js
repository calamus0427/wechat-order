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
        console.log(time);
        this.currentTime = time;
        console.log(this.currentTime);
      },
      submitTime: function submitTime() {
        console.log(this.currentTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUuanMiXSwibmFtZXMiOlsiY2FydCIsInByb3BzIiwiZmxhZyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidHdvV2F5IiwiY3VycmVudFRpbWUiLCJkYXRhIiwiY29tcHV0ZWQiLCJsaXN0IiwiZGVmYXVsdFRpbWUiLCJpIiwiRGF0ZSIsImdldEhvdXJzIiwibWV0aG9kcyIsImNob29zZSIsInRpbWUiLCJjb25zb2xlIiwibG9nIiwic3VibWl0VGltZSIsInRpbWVGb3JtYXRlIiwiZCIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxLQUZMO0FBR0pDLGdCQUFRO0FBSEosT0FEQTtBQU1SQyxtQkFBWTtBQUNWSixjQUFNQyxNQURJO0FBRVZDLGlCQUFTLE1BRkM7QUFHVkMsZ0JBQVE7QUFIRTtBQU5KLEssUUFhUkUsSSxHQUFPLEUsUUFHUEMsUSxHQUFXO0FBQ1RDLFVBRFMsa0JBQ0g7QUFDSixZQUFJQyxjQUFjLEVBQWxCO0FBQ0VBLG9CQUFZLENBQVosSUFBaUIsTUFBakI7QUFDQSxhQUFJLElBQUlDLElBQUksQ0FBWixFQUFnQkEsS0FBSSxDQUFwQixFQUF3QkEsR0FBeEIsRUFBNkI7QUFDM0IsY0FBRyxJQUFJQyxJQUFKLEdBQVdDLFFBQVgsS0FBc0JGLENBQXRCLElBQTJCLEVBQTlCLEVBQWlDO0FBQy9CRCx3QkFBWUMsQ0FBWixJQUFpQixRQUFRLElBQUlDLElBQUosR0FBV0MsUUFBWCxLQUFzQkYsQ0FBdEIsR0FBeUIsRUFBakMsSUFBdUMsS0FBeEQ7QUFDRCxXQUZELE1BRUs7QUFDSEQsd0JBQVlDLENBQVosSUFBaUIsSUFBSUMsSUFBSixHQUFXQyxRQUFYLEtBQXNCRixDQUF0QixHQUEwQixLQUEzQztBQUNEO0FBQ0Y7QUFDSCxlQUFPRCxXQUFQO0FBQ0Q7QUFaUSxLLFFBZVhJLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxJQURDLEVBQ0k7QUFDVkMsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLGFBQUtWLFdBQUwsR0FBbUJVLElBQW5CO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksS0FBS1osV0FBakI7QUFDRCxPQUxPO0FBTVJhLGdCQU5RLHdCQU1JO0FBQ1ZGLGdCQUFRQyxHQUFSLENBQVksS0FBS1osV0FBakI7QUFDQSxhQUFLTCxJQUFMLEdBQVksS0FBWjtBQUNELE9BVE87QUFVUm1CLGlCQVZRLHVCQVVJQyxDQVZKLEVBVU07QUFDWixZQUFJTCxPQUFLSyxFQUFFUixRQUFGLEtBQWUsR0FBZixHQUFxQlEsRUFBRUMsVUFBRixFQUFyQixHQUFzQyxHQUF0QyxHQUE0Q0QsRUFBRUUsVUFBRixFQUFyRDtBQUNBLGVBQU9QLElBQVA7QUFDRDtBQWJPLEs7Ozs7RUFoQ3NCUSxlQUFLQyxTOztrQkFBbEIxQixJIiwiZmlsZSI6InRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjYXJ0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgZmxhZzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIGN1cnJlbnRUaW1lOntcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICfnq4vljbPpgIHlh7onLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBsaXN0KCl7XG4gICAgICAgIGxldCBkZWZhdWx0VGltZSA9IFtdO1xuICAgICAgICAgIGRlZmF1bHRUaW1lWzBdID0gJ+eri+WNs+mAgeWHuic7XG4gICAgICAgICAgZm9yKGxldCBpID0gMSA7IGkgPD0zIDsgaSArKyl7XG4gICAgICAgICAgICBpZihuZXcgRGF0ZSgpLmdldEhvdXJzKCkraSA+PSAyNCl7XG4gICAgICAgICAgICAgIGRlZmF1bHRUaW1lW2ldID0gJ+asoeaXpScgKyAobmV3IERhdGUoKS5nZXRIb3VycygpK2kgLTE2KSArICc6MDAnO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGRlZmF1bHRUaW1lW2ldID0gbmV3IERhdGUoKS5nZXRIb3VycygpK2kgKyAnOjAwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0VGltZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hvb3NlKHRpbWUpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aW1lKVxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGltZSA7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFRpbWUpXG4gICAgICB9LFxuICAgICAgc3VibWl0VGltZSgpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRUaW1lKSBcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICB0aW1lRm9ybWF0ZShkKXtcbiAgICAgICAgdmFyIHRpbWU9ZC5nZXRIb3VycygpICsgJzonICsgZC5nZXRNaW51dGVzKCkgKyAnOicgKyBkLmdldFNlY29uZHMoKTsgXG4gICAgICAgIHJldHVybiB0aW1lO1xuICAgICAgfVxuICAgIH07XG5cblxuICB9XG4iXX0=