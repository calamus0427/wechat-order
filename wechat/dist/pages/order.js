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
    }, _this.$repeat = {}, _this.$props = { "SideTab": { "v-bind:tab.once": "categories", "xmlns:v-on": "" }, "SearchBar": { "type": "tag", "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText" } }, _this.$events = { "SideTab": { "v-on:change": "switchTab" } }, _this.components = {
      SideTab: _side_tab2.default,
      imageList: _imageList2.default,
      foodList: _foodList2.default,
      SearchBar: _searchbar2.default,
      Cart: _cart2.default,
      icon: _icon2.default
    }, _this.mixins = [], _this.data = {
      init: true,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsInNlYXJjaFRleHQiLCJjYXRlZ29yaWVzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2VsZWN0ZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJpbml0UGFnZSIsImdldEFuaW1lVGFnIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmVxdWVzdCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLG1CQUFrQixZQUFuQixFQUFnQyxjQUFhLEVBQTdDLEVBQVgsRUFBNEQsYUFBWSxFQUFDLFFBQU8sS0FBUixFQUFjLGdCQUFlLEVBQTdCLEVBQWdDLDJCQUEwQixZQUExRCxFQUF4RSxFLFFBQ1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxlQUFjLFdBQWYsRUFBWCxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxlQUFRQSxrQkFEQTtBQUVSQyxpQkFBVUEsbUJBRkY7QUFHUkMsZ0JBQVNBLGtCQUhEO0FBSVJDLGlCQUFVQSxtQkFKRjtBQUtSQyxZQUFLQSxjQUxHO0FBTVJDLFlBQUtBO0FBTkcsSyxRQVNWZCxNLEdBQVMsRSxRQUVUZSxJLEdBQU87QUFDTEMsWUFBSyxJQURBO0FBRUxDLGtCQUFXLGFBRk47QUFHTEMsa0JBQVk7QUFDRixnQkFBTyxDQUNMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxNQUFsQixFQURLLEVBRUwsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBRkssRUFHTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFISyxFQUlMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQUpLLEVBS0wsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBTEssRUFNTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFOSyxFQU9MLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQVBLLEVBUUwsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLEdBQWxCLEVBUkssRUFTTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsTUFBbEIsRUFUSyxDQURMO0FBWUEsc0JBQWE7QUFaYjtBQUhQLEssUUFtQlBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSO0FBQ0FDLGVBRlEscUJBRUVDLFVBRkYsRUFFYztBQUNwQkMsZ0JBQVFDLEdBQVIsQ0FBWUYsVUFBWjtBQUNBO0FBQ0E7QUFDRDtBQU5PLEssUUFVVkcsTSxHQUFTLEU7Ozs7OzZCQUlBLENBQ1I7Ozs4QkFDUztBQUNSLFdBQUtDLFFBQUw7QUFDRDs7OytCQUNTO0FBQ1IsV0FBS0MsV0FBTDtBQUNEOzs7NkJBQ087QUFDTkMsU0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGFBQUs7QUFESyxPQUFkO0FBR0Q7OztrQ0FDWTtBQUFBOztBQUVURixTQUFHRyxPQUFILENBQVc7QUFDVEQsYUFBSyw2Q0FESSxFQUMyQztBQUNwREUsaUJBQVMsaUJBQUNDLEdBQUQsRUFBUTtBQUNmVixrQkFBUUMsR0FBUixDQUFZUyxHQUFaO0FBQ0EsaUJBQUtmLFVBQUwsR0FBa0JlLElBQUlsQixJQUF0QjtBQUNELFNBTFE7QUFNVG1CLGNBQUssY0FBQ0QsR0FBRCxFQUFPO0FBQ1ZWLGtCQUFRQyxHQUFSLENBQVksTUFBWixFQUFtQlMsR0FBbkI7QUFDQSxpQkFBS2YsVUFBTCxHQUFrQjtBQUNkLG9CQUFPLENBQ0wsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLE1BQWxCLEVBREssRUFFTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFGSyxFQUdMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQUhLLEVBSUwsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBSkssRUFLTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFMSyxFQU1MLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQU5LLEVBT0wsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBUEssRUFRTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsR0FBbEIsRUFSSyxFQVNMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxNQUFsQixFQVRLLENBRE87QUFZWiwwQkFBYTtBQVpELFdBQWxCO0FBY0Q7QUF0QlEsT0FBWDtBQXdCSDs7OztFQS9GZ0NpQixlQUFLQyxJOztrQkFBbkJyQyxLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBTaWRlVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZV90YWInXG4gIGltcG9ydCBpbWFnZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZUxpc3QnXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXG4gIGltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2FydCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgZm9vZExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb29kTGlzdCdcbiAgaW1wb3J0IGljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLppJDmnI3liqEnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTaWRlVGFiXCI6e1widi1iaW5kOnRhYi5vbmNlXCI6XCJjYXRlZ29yaWVzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJTZWFyY2hCYXJcIjp7XCJ0eXBlXCI6XCJ0YWdcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwifX07XHJcbiRldmVudHMgPSB7XCJTaWRlVGFiXCI6e1widi1vbjpjaGFuZ2VcIjpcInN3aXRjaFRhYlwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2lkZVRhYjpTaWRlVGFiLFxuICAgICAgaW1hZ2VMaXN0OmltYWdlTGlzdCxcbiAgICAgIGZvb2RMaXN0OmZvb2RMaXN0LFxuICAgICAgU2VhcmNoQmFyOlNlYXJjaEJhcixcbiAgICAgIENhcnQ6Q2FydCxcbiAgICAgIGljb246aWNvblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5pdDp0cnVlLFxuICAgICAgc2VhcmNoVGV4dDon6K+36L6T5YWl5ZWG5a625oiW6ICF5ZWG5ZOB5ZCN56ewJyxcbiAgICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgICAgICAgICAgICAnbGlzdCc6W1xuICAgICAgICAgICAgICAgICAgeydpZCc6JzEnLCd0aXRsZSc6J+eDreaOqOi+o+i0pyd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzInLCd0aXRsZSc6J+eCkuiPnCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzMnLCd0aXRsZSc6J+eblumlrSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzQnLCd0aXRsZSc6J+mdouadoSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzUnLCd0aXRsZSc6J+mluuWtkCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzYnLCd0aXRsZSc6J+aLjOiPnCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzcnLCd0aXRsZSc6J+Wwj+WQgyd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzgnLCd0aXRsZSc6J+eypSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzknLCd0aXRsZSc6J+WkluWKoOiwg+aWmSd9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgJ3NlbGVjdGVkSWQnOicxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvLyDngrnlh7vliIbnsbtcbiAgICAgIHN3aXRjaFRhYihzZWxlY3RlZElkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkSWQpXG4gICAgICAgIC8vIHRoaXMudGFiLmNhdGVnb3J5SWQgPSBzZWxlY3RlZElkO1xuICAgICAgICAvLyB0aGlzLnJlbG9hZCgpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgdGhpcy5pbml0UGFnZSgpXG4gICAgfVxuICAgIGluaXRQYWdlKCl7XG4gICAgICB0aGlzLmdldEFuaW1lVGFnKClcbiAgICB9XG4gICAgc2VhcmNoKCl7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2VhcmNoVGFnJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBnZXRBbmltZVRhZygpe1xuXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmNhbGFtdXMueHl6L2FwaS9nZXRBbmltZVRhZy5waHAnLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunueahOaOpeWPo+WcsOWdgFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDoocmVzKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsXCIscmVzKVxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0ge1xuICAgICAgICAgICAgICAgICdsaXN0JzpbXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMScsJ3RpdGxlJzon54Ot5o6o6L6j6LSnJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMicsJ3RpdGxlJzon54KS6I+cJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMycsJ3RpdGxlJzon55uW6aWtJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNCcsJ3RpdGxlJzon6Z2i5p2hJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNScsJ3RpdGxlJzon6aW65a2QJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNicsJ3RpdGxlJzon5ouM6I+cJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNycsJ3RpdGxlJzon5bCP5ZCDJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonOCcsJ3RpdGxlJzon57KlJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonOScsJ3RpdGxlJzon5aSW5Yqg6LCD5paZJ31cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAnc2VsZWN0ZWRJZCc6JzEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==