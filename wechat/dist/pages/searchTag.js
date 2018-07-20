'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _animeList = require('./../components/animeList.js');

var _animeList2 = _interopRequireDefault(_animeList);

var _pannelTag = require('./../components/pannelTag.js');

var _pannelTag2 = _interopRequireDefault(_pannelTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_wepy$page) {
  _inherits(Search, _wepy$page);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.$repeat = {}, _this.$props = { "SearchBar": { "type": "result", "placeholder": "搜索" } }, _this.$events = {}, _this.components = {
      SearchBar: _searchbar2.default,
      animeList: _animeList2.default,
      pannelTag: _pannelTag2.default
    }, _this.mixins = [], _this.data = {
      // inputVal:'111',
      title: '搜索结果',
      search: ''
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'onLoad',
    value: function onLoad(query) {
      var inputVal = query.inputVal;
      console.log("query", query);
      this.search = query;
    }
  }]);

  return Search;
}(_wepy2.default.page);

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaFRhZy5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2VhcmNoQmFyIiwiYW5pbWVMaXN0IiwicGFubmVsVGFnIiwibWl4aW5zIiwiZGF0YSIsInRpdGxlIiwic2VhcmNoIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwicXVlcnkiLCJpbnB1dFZhbCIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUlxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLFFBQU8sUUFBUixFQUFpQixlQUFjLElBQS9CLEVBQWIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsaUJBQVVBLG1CQURGO0FBRVJDLGlCQUFVQSxtQkFGRjtBQUdSQyxpQkFBVUE7QUFIRixLLFFBTVZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMO0FBQ0FDLGFBQU0sTUFGRDtBQUdMQyxjQUFPO0FBSEYsSyxRQU1QQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7OEJBR0EsQ0FDUjs7OzJCQUNNQyxLLEVBQU87QUFDWixVQUFNQyxXQUFXRCxNQUFNQyxRQUF2QjtBQUNBQyxjQUFRQyxHQUFSLENBQVksT0FBWixFQUFvQkgsS0FBcEI7QUFDQSxXQUFLSixNQUFMLEdBQWNJLEtBQWQ7QUFDRDs7OztFQXBDaUNJLGVBQUtDLEk7O2tCQUFwQnRCLE0iLCJmaWxlIjoic2VhcmNoVGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXG4gIGltcG9ydCBhbmltZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hbmltZUxpc3QnXG4gIGltcG9ydCBwYW5uZWxUYWcgZnJvbSAnLi4vY29tcG9uZW50cy9wYW5uZWxUYWcnXG5cblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aQnOe0oidcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlNlYXJjaEJhclwiOntcInR5cGVcIjpcInJlc3VsdFwiLFwicGxhY2Vob2xkZXJcIjpcIuaQnOe0olwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTZWFyY2hCYXI6U2VhcmNoQmFyLFxuICAgICAgYW5pbWVMaXN0OmFuaW1lTGlzdCxcbiAgICAgIHBhbm5lbFRhZzpwYW5uZWxUYWdcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIC8vIGlucHV0VmFsOicxMTEnLFxuICAgICAgdGl0bGU6J+aQnOe0oue7k+aenCcsXG4gICAgICBzZWFyY2g6JydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cbiAgICBvblJlYWR5KCl7XG4gICAgfVxuICAgIG9uTG9hZChxdWVyeSkge1xuICAgICAgY29uc3QgaW5wdXRWYWwgPSBxdWVyeS5pbnB1dFZhbDtcbiAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlcIixxdWVyeSlcbiAgICAgIHRoaXMuc2VhcmNoID0gcXVlcnkgO1xuICAgIH1cbiAgfVxuIl19