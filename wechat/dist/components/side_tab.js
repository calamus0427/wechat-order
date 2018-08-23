'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideTab = function (_wepy$component) {
  _inherits(SideTab, _wepy$component);

  function SideTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SideTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideTab.__proto__ || Object.getPrototypeOf(SideTab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tab: {
        twoWay: true
      }
    }, _this.data = {}, _this.methods = {
      switchTab: function switchTab(selectedId) {
        this.tab.selectedId = selectedId;
        this.$emit('change', selectedId);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SideTab, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SideTab;
}(_wepy2.default.component);

exports.default = SideTab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVfdGFiLmpzIl0sIm5hbWVzIjpbIlNpZGVUYWIiLCJwcm9wcyIsInRhYiIsInR3b1dheSIsImRhdGEiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2VsZWN0ZWRJZCIsIiRlbWl0IiwiZXZlbnRzIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxLLEdBQVE7QUFDTkMsV0FBSztBQUNIQyxnQkFBUTtBQURMO0FBREMsSyxRQUtSQyxJLEdBQU8sRSxRQUNQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsVUFERixFQUNjO0FBQ3BCLGFBQUtMLEdBQUwsQ0FBU0ssVUFBVCxHQUFzQkEsVUFBdEI7QUFDQSxhQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkQsVUFBckI7QUFDRDtBQUpPLEssUUFNVkUsTSxHQUFTLEU7Ozs7OzZCQUNBLENBQ1I7Ozs7RUFma0NDLGVBQUtDLFM7O2tCQUFyQlgsTyIsImZpbGUiOiJzaWRlX3RhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlVGFiIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgdGFiOiB7XG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gICAgZGF0YSA9IHt9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzd2l0Y2hUYWIoc2VsZWN0ZWRJZCkge1xuICAgICAgICB0aGlzLnRhYi5zZWxlY3RlZElkID0gc2VsZWN0ZWRJZDtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgc2VsZWN0ZWRJZCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBldmVudHMgPSB7fTtcbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=