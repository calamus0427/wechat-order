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

var _ads = require('./../components/ads.js');

var _ads2 = _interopRequireDefault(_ads);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Old = function (_wepy$page) {
  _inherits(Old, _wepy$page);

  function Old() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Old);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Old.__proto__ || Object.getPrototypeOf(Old)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '订餐服务'
    }, _this.$repeat = {}, _this.$props = { "SideTab": { "v-bind:tab.once": "categories", "xmlns:v-on": "" }, "SearchBar": { "type": "tag", "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText" } }, _this.$events = { "SideTab": { "v-on:change": "switchTab" } }, _this.components = {
      SideTab: _side_tab2.default,
      imageList: _imageList2.default,
      SearchBar: _searchbar2.default,
      Ads: _ads2.default
    }, _this.mixins = [], _this.data = {
      init: true,
      categories: {
        'list': [{ 'id': '1', 'title': '催泪' }, { 'id': '2', 'title': '搞笑' }, { 'id': '3', 'title': '治愈' }, { 'id': '4', 'title': '致郁' }, { 'id': '5', 'title': '国产' }, { 'id': '6', 'title': '耽美' }, { 'id': '7', 'title': '百合' }, { 'id': '8', 'title': '泡面' }, { 'id': '9', 'title': '卖萌' }, { 'id': '10', 'title': '穿越' }, { 'id': '11', 'title': '推理' }, { 'id': '12', 'title': '番茄酱' }, { 'id': '13', 'title': '后宫' }, { 'id': '14', 'title': '机甲' }],
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

  _createClass(Old, [{
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
            'list': [{ 'id': '1', 'title': '催泪' }, { 'id': '2', 'title': '搞笑' }, { 'id': '3', 'title': '治愈' }, { 'id': '4', 'title': '致郁' }, { 'id': '5', 'title': '国产' }, { 'id': '6', 'title': '耽美' }, { 'id': '7', 'title': '百合' }, { 'id': '8', 'title': '泡面' }, { 'id': '9', 'title': '卖萌' }, { 'id': '10', 'title': '穿越' }, { 'id': '11', 'title': '推理' }, { 'id': '12', 'title': '番茄酱' }, { 'id': '13', 'title': '后宫' }, { 'id': '14', 'title': '机甲' }],
            'selectedId': '1'
          };
        }
      });
    }
  }]);

  return Old;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Old , 'pages/old'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZC5qcyJdLCJuYW1lcyI6WyJPbGQiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTaWRlVGFiIiwiaW1hZ2VMaXN0IiwiU2VhcmNoQmFyIiwiQWRzIiwiZGF0YSIsImluaXQiLCJjYXRlZ29yaWVzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2VsZWN0ZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJpbml0UGFnZSIsImdldEFuaW1lVGFnIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmVxdWVzdCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFJcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsbUJBQWtCLFlBQW5CLEVBQWdDLGNBQWEsRUFBN0MsRUFBWCxFQUE0RCxhQUFZLEVBQUMsUUFBTyxLQUFSLEVBQWMsZ0JBQWUsRUFBN0IsRUFBZ0MsMkJBQTBCLFlBQTFELEVBQXhFLEUsUUFDVEMsTyxHQUFVLEVBQUMsV0FBVSxFQUFDLGVBQWMsV0FBZixFQUFYLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGVBQVFBLGtCQURBO0FBRVJDLGlCQUFVQSxtQkFGRjtBQUdSQyxpQkFBVUEsbUJBSEY7QUFJUkMsV0FBSUE7QUFKSSxLLFFBT1ZaLE0sR0FBUyxFLFFBRVRhLEksR0FBTztBQUNMQyxZQUFLLElBREE7QUFFTEMsa0JBQVk7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ImZpbGUiOiJvbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFNpZGVUYWIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlX3RhYidcbiAgaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlTGlzdCdcbiAgaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcbiAgaW1wb3J0IEFkcyBmcm9tICcuLi9jb21wb25lbnRzL2FkcydcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuXG5cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBPbGQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLppJDmnI3liqEnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTaWRlVGFiXCI6e1widi1iaW5kOnRhYi5vbmNlXCI6XCJjYXRlZ29yaWVzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJTZWFyY2hCYXJcIjp7XCJ0eXBlXCI6XCJ0YWdcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwifX07XHJcbiRldmVudHMgPSB7XCJTaWRlVGFiXCI6e1widi1vbjpjaGFuZ2VcIjpcInN3aXRjaFRhYlwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2lkZVRhYjpTaWRlVGFiLFxuICAgICAgaW1hZ2VMaXN0OmltYWdlTGlzdCxcbiAgICAgIFNlYXJjaEJhcjpTZWFyY2hCYXIsXG4gICAgICBBZHM6QWRzXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbml0OnRydWUsXG4gICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgICAgICAgJ2xpc3QnOltcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicxJywndGl0bGUnOiflgqzms6onfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicyJywndGl0bGUnOifmkJ7nrJEnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOiczJywndGl0bGUnOifmsrvmhIgnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic0JywndGl0bGUnOifoh7Tpg4EnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic1JywndGl0bGUnOiflm73kuqcnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic2JywndGl0bGUnOifogL3nvo4nfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic3JywndGl0bGUnOifnmb7lkIgnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic4JywndGl0bGUnOifms6HpnaInfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic5JywndGl0bGUnOifljZbokIwnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicxMCcsJ3RpdGxlJzon56m/6LaKJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMTEnLCd0aXRsZSc6J+aOqOeQhid9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzEyJywndGl0bGUnOifnlarojITphbEnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicxMycsJ3RpdGxlJzon5ZCO5a6rJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMTQnLCd0aXRsZSc6J+acuueUsid9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgJ3NlbGVjdGVkSWQnOicxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvLyDngrnlh7vliIbnsbtcbiAgICAgIHN3aXRjaFRhYihzZWxlY3RlZElkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkSWQpXG4gICAgICAgIC8vIHRoaXMudGFiLmNhdGVnb3J5SWQgPSBzZWxlY3RlZElkO1xuICAgICAgICAvLyB0aGlzLnJlbG9hZCgpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgdGhpcy5pbml0UGFnZSgpXG4gICAgfVxuICAgIGluaXRQYWdlKCl7XG4gICAgICB0aGlzLmdldEFuaW1lVGFnKClcbiAgICB9XG4gICAgc2VhcmNoKCl7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2VhcmNoVGFnJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBnZXRBbmltZVRhZygpe1xuXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmNhbGFtdXMueHl6L2FwaS9nZXRBbmltZVRhZy5waHAnLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunueahOaOpeWPo+WcsOWdgFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDoocmVzKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsXCIscmVzKVxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0ge1xuICAgICAgICAgICAgICAgICdsaXN0JzpbXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMScsJ3RpdGxlJzon5YKs5rOqJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMicsJ3RpdGxlJzon5pCe56yRJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMycsJ3RpdGxlJzon5rK75oSIJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNCcsJ3RpdGxlJzon6Ie06YOBJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNScsJ3RpdGxlJzon5Zu95LqnJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNicsJ3RpdGxlJzon6IC9576OJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonNycsJ3RpdGxlJzon55m+5ZCIJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonOCcsJ3RpdGxlJzon5rOh6Z2iJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonOScsJ3RpdGxlJzon5Y2W6JCMJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMTAnLCd0aXRsZSc6J+epv+i2iid9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzExJywndGl0bGUnOifmjqjnkIYnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicxMicsJ3RpdGxlJzon55Wq6IyE6YWxJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMTMnLCd0aXRsZSc6J+WQjuWuqyd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzE0JywndGl0bGUnOifmnLrnlLInfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICdzZWxlY3RlZElkJzonMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuIl19