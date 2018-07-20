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
    }, _this.$repeat = {}, _this.$props = { "animeList": { "xmlns:v-bind": "", "v-bind:title.once": "title" } }, _this.$events = {}, _this.components = {
      SearchBar: _searchbar2.default,
      animeList: _animeList2.default
    }, _this.mixins = [], _this.data = {
      // inputVal:'111',
      title: '搜索结果',
      search: ''
    }, _this.computed = {
      inputVal: function inputVal() {
        var _this2 = this;

        setTimeout(function () {
          console.log(_this2.search);
          return _this2.search;
        }, 2000);
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'onLoad',
    value: function onLoad(query) {
      var inputVal = query.inputVal;
      console.log("query", query);
      this.search = query.inputVal;
    }
  }]);

  return Search;
}(_wepy2.default.page);

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2VhcmNoQmFyIiwiYW5pbWVMaXN0IiwibWl4aW5zIiwiZGF0YSIsInRpdGxlIiwic2VhcmNoIiwiY29tcHV0ZWQiLCJpbnB1dFZhbCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImV2ZW50cyIsInF1ZXJ5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQWIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsaUJBQVVBLG1CQURGO0FBRVJDLGlCQUFVQTtBQUZGLEssUUFLVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0w7QUFDQUMsYUFBTSxNQUZEO0FBR0xDLGNBQU87QUFIRixLLFFBTVBDLFEsR0FBVztBQUNUQyxjQURTLHNCQUNDO0FBQUE7O0FBQ1JDLG1CQUFXLFlBQU07QUFDZkMsa0JBQVFDLEdBQVIsQ0FBWSxPQUFLTCxNQUFqQjtBQUNBLGlCQUFPLE9BQUtBLE1BQVo7QUFDRCxTQUhELEVBR0csSUFISDtBQUlEO0FBTlEsSyxRQVNYTSxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7OEJBR0EsQ0FDUjs7OzJCQUNNQyxLLEVBQU87QUFDWixVQUFNTixXQUFXTSxNQUFNTixRQUF2QjtBQUNBRSxjQUFRQyxHQUFSLENBQVksT0FBWixFQUFvQkcsS0FBcEI7QUFDQSxXQUFLUixNQUFMLEdBQWNRLE1BQU1OLFFBQXBCO0FBQ0Q7Ozs7RUF6Q2lDTyxlQUFLQyxJOztrQkFBcEJ0QixNIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyJ1xuICBpbXBvcnQgYW5pbWVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvYW5pbWVMaXN0J1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCc57SiJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYW5pbWVMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTZWFyY2hCYXI6U2VhcmNoQmFyLFxuICAgICAgYW5pbWVMaXN0OmFuaW1lTGlzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgLy8gaW5wdXRWYWw6JzExMScsXG4gICAgICB0aXRsZTon5pCc57Si57uT5p6cJyxcbiAgICAgIHNlYXJjaDonJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaW5wdXRWYWwoKXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2gpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoO1xuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuICAgIG9uUmVhZHkoKXtcbiAgICB9XG4gICAgb25Mb2FkKHF1ZXJ5KSB7XG4gICAgICBjb25zdCBpbnB1dFZhbCA9IHF1ZXJ5LmlucHV0VmFsO1xuICAgICAgY29uc29sZS5sb2coXCJxdWVyeVwiLHF1ZXJ5KVxuICAgICAgdGhpcy5zZWFyY2ggPSBxdWVyeS5pbnB1dFZhbCA7XG4gICAgfVxuICB9XG4iXX0=