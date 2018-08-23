'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _side_tab = require('./../components/side_tab.js');

var _side_tab2 = _interopRequireDefault(_side_tab);

var _imageList = require('./../components/imageList.js');

var _imageList2 = _interopRequireDefault(_imageList);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _cart = require('./../components/cart.js');

var _cart2 = _interopRequireDefault(_cart);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _foodList = require('./../components/foodList.js');

var _foodList2 = _interopRequireDefault(_foodList);

var _icon = require('./../components/icon.js');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var order = function (_wepy$page) {
  _inherits(order, _wepy$page);

  function order() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = order.__proto__ || Object.getPrototypeOf(order)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '订餐服务'
    }, _this.$repeat = {}, _this.$props = { "SideTab": { "v-bind:tab.once": "categories", "xmlns:v-on": "" }, "SearchBar": { "type": "tag", "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText" }, "Cart": { "v-bind:flag.sync": "cartShow" } }, _this.$events = { "SideTab": { "v-on:change": "switchTab" } }, _this.components = {
      SideTab: _side_tab2.default,
      imageList: _imageList2.default,
      foodList: _foodList2.default,
      SearchBar: _searchbar2.default,
      Cart: _cart2.default,
      icon: _icon2.default
    }, _this.mixins = [], _this.data = {
      init: true,
      cartShow: false,
      searchText: '请输入商家或者商品名称',
      categories: {
        'list': [{ 'id': '1', 'title': '热推辣货' }, { 'id': '2', 'title': '炒菜' }, { 'id': '3', 'title': '盖饭' }, { 'id': '4', 'title': '面条' }, { 'id': '5', 'title': '饺子' }, { 'id': '6', 'title': '拌菜' }, { 'id': '7', 'title': '小吃' }, { 'id': '8', 'title': '粥' }, { 'id': '9', 'title': '外加调料' }],
        'selectedId': '1'
      }
    }, _this.computed = {}, _this.methods = {
      // 点击分类
      switchTab: function switchTab(selectedId) {
        console.log(selectedId);
        // this.tab.categoryId = selectedId;
        // this.reload();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(order, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      this.initPage();
    }
  }, {
    key: 'initPage',
    value: function initPage() {
      this.getAnimeTag();
    }
  }, {
    key: 'search',
    value: function search() {
      wx.navigateTo({
        url: '/pages/searchTag'
      });
    }
  }, {
    key: 'getAnimeTag',
    value: function getAnimeTag() {
      var _this2 = this;

      wx.request({
        url: 'https://www.calamus.xyz/api/getAnimeTag.php', //仅为示例，并非真实的接口地址
        success: function success(res) {
          console.log(res);
          _this2.categories = res.data;
        },
        fail: function fail(res) {
          console.log("fail", res);
          _this2.categories = {
            'list': [{ 'id': '1', 'title': '热推辣货' }, { 'id': '2', 'title': '炒菜' }, { 'id': '3', 'title': '盖饭' }, { 'id': '4', 'title': '面条' }, { 'id': '5', 'title': '饺子' }, { 'id': '6', 'title': '拌菜' }, { 'id': '7', 'title': '小吃' }, { 'id': '8', 'title': '粥' }, { 'id': '9', 'title': '外加调料' }],
            'selectedId': '1'
          };
        }
      });
    }
  }]);

  return order;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(order , 'pages/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzd2l0Y2hUYWIiLCJzZWxlY3RlZElkIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsImluaXRQYWdlIiwiZ2V0QW5pbWVUYWciLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsbUJBQWtCLFlBQW5CLEVBQWdDLGNBQWEsRUFBN0MsRUFBWCxFQUE0RCxhQUFZLEVBQUMsUUFBTyxLQUFSLEVBQWMsZ0JBQWUsRUFBN0IsRUFBZ0MsMkJBQTBCLFlBQTFELEVBQXhFLEVBQWdKLFFBQU8sRUFBQyxvQkFBbUIsVUFBcEIsRUFBdkosRSxRQUNUQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsZUFBYyxXQUFmLEVBQVgsRSxRQUNUQyxVLEdBQWE7QUFDUkMsZUFBUUEsa0JBREE7QUFFUkMsaUJBQVVBLG1CQUZGO0FBR1JDLGdCQUFTQSxrQkFIRDtBQUlSQyxpQkFBVUEsbUJBSkY7QUFLUkMsWUFBS0EsY0FMRztBQU1SQyxZQUFLQTtBQU5HLEssUUFTVmQsTSxHQUFTLEUsUUFFVGUsSSxHQUFPO0FBQ0xDLFlBQUssSUFEQTtBQUVMQyxnQkFBUyxLQUZKO0FBR0xDLGtCQUFXLGFBSE47QUFJTEMsa0JBQVk7QUFDRixnQkFBTyxDQUNMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxNQUFsQixFQURLLEVBRUwsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBRkssRUFHTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFISyxFQUlMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQUpLLEVBS0wsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBTEssRUFNTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFOSyxFQU9MLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQVBLLEVBUUwsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLEdBQWxCLEVBUkssRUFTTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsTUFBbEIsRUFUSyxDQURMO0FBWUEsc0JBQWE7QUFaYjtBQUpQLEssUUFvQlBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSO0FBQ0FDLGVBRlEscUJBRUVDLFVBRkYsRUFFYztBQUNwQkMsZ0JBQVFDLEdBQVIsQ0FBWUYsVUFBWjtBQUNBO0FBQ0E7QUFDRDtBQU5PLEssUUFVVkcsTSxHQUFTLEU7Ozs7OzZCQUlBLENBQ1I7Ozs4QkFDUztBQUNSLFdBQUtDLFFBQUw7QUFDRDs7OytCQUNTO0FBQ1IsV0FBS0MsV0FBTDtBQUNEOzs7NkJBQ087QUFDTkMsU0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGFBQUs7QUFESyxPQUFkO0FBR0Q7OztrQ0FDWTtBQUFBOztBQUVURixTQUFHRyxPQUFILENBQVc7QUFDVEQsYUFBSyw2Q0FESSxFQUMyQztBQUNwREUsaUJBQVMsaUJBQUNDLEdBQUQsRUFBUTtBQUNmVixrQkFBUUMsR0FBUixDQUFZUyxHQUFaO0FBQ0EsaUJBQUtmLFVBQUwsR0FBa0JlLElBQUluQixJQUF0QjtBQUNELFNBTFE7QUFNVG9CLGNBQUssY0FBQ0QsR0FBRCxFQUFPO0FBQ1ZWLGtCQUFRQyxHQUFSLENBQVksTUFBWixFQUFtQlMsR0FBbkI7QUFDQSxpQkFBS2YsVUFBTCxHQUFrQjtBQUNkLG9CQUFPLENBQ0wsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLE1BQWxCLEVBREssRUFFTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFGSyxFQUdMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQUhLLEVBSUwsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBSkssRUFLTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFMSyxFQU1MLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQU5LLEVBT0wsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBUEssRUFRTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsR0FBbEIsRUFSSyxFQVNMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxNQUFsQixFQVRLLENBRE87QUFZWiwwQkFBYTtBQVpELFdBQWxCO0FBY0Q7QUF0QlEsT0FBWDtBQXdCSDs7OztFQWhHZ0NpQixlQUFLQyxJOztrQkFBbkJ0QyxLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBTaWRlVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZV90YWInXG4gIGltcG9ydCBpbWFnZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZUxpc3QnXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXG4gIGltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2FydCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgZm9vZExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb29kTGlzdCdcbiAgaW1wb3J0IGljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLppJDmnI3liqEnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTaWRlVGFiXCI6e1widi1iaW5kOnRhYi5vbmNlXCI6XCJjYXRlZ29yaWVzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJTZWFyY2hCYXJcIjp7XCJ0eXBlXCI6XCJ0YWdcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwifSxcIkNhcnRcIjp7XCJ2LWJpbmQ6ZmxhZy5zeW5jXCI6XCJjYXJ0U2hvd1wifX07XHJcbiRldmVudHMgPSB7XCJTaWRlVGFiXCI6e1widi1vbjpjaGFuZ2VcIjpcInN3aXRjaFRhYlwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2lkZVRhYjpTaWRlVGFiLFxuICAgICAgaW1hZ2VMaXN0OmltYWdlTGlzdCxcbiAgICAgIGZvb2RMaXN0OmZvb2RMaXN0LFxuICAgICAgU2VhcmNoQmFyOlNlYXJjaEJhcixcbiAgICAgIENhcnQ6Q2FydCxcbiAgICAgIGljb246aWNvblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5pdDp0cnVlLFxuICAgICAgY2FydFNob3c6ZmFsc2UsXG4gICAgICBzZWFyY2hUZXh0Oifor7fovpPlhaXllYblrrbmiJbogIXllYblk4HlkI3np7AnLFxuICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgICAgICdsaXN0JzpbXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMScsJ3RpdGxlJzon54Ot5o6o6L6j6LSnJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMicsJ3RpdGxlJzon54KS6I+cJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMycsJ3RpdGxlJzon55uW6aWtJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNCcsJ3RpdGxlJzon6Z2i5p2hJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNScsJ3RpdGxlJzon6aW65a2QJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNicsJ3RpdGxlJzon5ouM6I+cJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNycsJ3RpdGxlJzon5bCP5ZCDJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonOCcsJ3RpdGxlJzon57KlJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonOScsJ3RpdGxlJzon5aSW5Yqg6LCD5paZJ31cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAnc2VsZWN0ZWRJZCc6JzEnXG4gICAgICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8vIOeCueWHu+WIhuexu1xuICAgICAgc3dpdGNoVGFiKHNlbGVjdGVkSWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRJZClcbiAgICAgICAgLy8gdGhpcy50YWIuY2F0ZWdvcnlJZCA9IHNlbGVjdGVkSWQ7XG4gICAgICAgIC8vIHRoaXMucmVsb2FkKCk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlKClcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcbiAgICAgIHRoaXMuZ2V0QW5pbWVUYWcoKVxuICAgIH1cbiAgICBzZWFyY2goKXtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9zZWFyY2hUYWcnXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGdldEFuaW1lVGFnKCl7XG5cbiAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuY2FsYW11cy54eXovYXBpL2dldEFuaW1lVGFnLnBocCcsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YSA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOihyZXMpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxcIixyZXMpXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB7XG4gICAgICAgICAgICAgICAgJ2xpc3QnOltcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicxJywndGl0bGUnOifng63mjqjovqPotKcnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicyJywndGl0bGUnOifngpLoj5wnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOiczJywndGl0bGUnOifnm5bppa0nfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic0JywndGl0bGUnOifpnaLmnaEnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic1JywndGl0bGUnOifppbrlrZAnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic2JywndGl0bGUnOifmi4zoj5wnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic3JywndGl0bGUnOiflsI/lkIMnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic4JywndGl0bGUnOifnsqUnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic5JywndGl0bGUnOiflpJbliqDosIPmlpknfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICdzZWxlY3RlZElkJzonMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuIl19