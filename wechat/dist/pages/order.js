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
      Ads: _ads2.default,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQWRzIiwiaWNvbiIsImRhdGEiLCJpbml0Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzd2l0Y2hUYWIiLCJzZWxlY3RlZElkIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsImluaXRQYWdlIiwiZ2V0QW5pbWVUYWciLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsbUJBQWtCLFlBQW5CLEVBQWdDLGNBQWEsRUFBN0MsRUFBWCxFQUE0RCxhQUFZLEVBQUMsUUFBTyxLQUFSLEVBQWMsZ0JBQWUsRUFBN0IsRUFBZ0MsMkJBQTBCLFlBQTFELEVBQXhFLEUsUUFDVEMsTyxHQUFVLEVBQUMsV0FBVSxFQUFDLGVBQWMsV0FBZixFQUFYLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGVBQVFBLGtCQURBO0FBRVJDLGlCQUFVQSxtQkFGRjtBQUdSQyxnQkFBU0Esa0JBSEQ7QUFJUkMsaUJBQVVBLG1CQUpGO0FBS1JDLFdBQUlBLGFBTEk7QUFNUkMsWUFBS0E7QUFORyxLLFFBU1ZkLE0sR0FBUyxFLFFBRVRlLEksR0FBTztBQUNMQyxZQUFLLElBREE7QUFFTEMsa0JBQVcsYUFGTjtBQUdMQyxrQkFBWTtBQUNGLGdCQUFPLENBQ0wsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLE1BQWxCLEVBREssRUFFTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFGSyxFQUdMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQUhLLEVBSUwsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBSkssRUFLTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFMSyxFQU1MLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQU5LLEVBT0wsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBUEssRUFRTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsR0FBbEIsRUFSSyxFQVNMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxNQUFsQixFQVRLLENBREw7QUFZQSxzQkFBYTtBQVpiO0FBSFAsSyxRQW1CUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVO0FBQ1I7QUFDQUMsZUFGUSxxQkFFRUMsVUFGRixFQUVjO0FBQ3BCQyxnQkFBUUMsR0FBUixDQUFZRixVQUFaO0FBQ0E7QUFDQTtBQUNEO0FBTk8sSyxRQVVWRyxNLEdBQVMsRTs7Ozs7NkJBSUEsQ0FDUjs7OzhCQUNTO0FBQ1IsV0FBS0MsUUFBTDtBQUNEOzs7K0JBQ1M7QUFDUixXQUFLQyxXQUFMO0FBQ0Q7Ozs2QkFDTztBQUNOQyxTQUFHQyxVQUFILENBQWM7QUFDVkMsYUFBSztBQURLLE9BQWQ7QUFHRDs7O2tDQUNZO0FBQUE7O0FBRVRGLFNBQUdHLE9BQUgsQ0FBVztBQUNURCxhQUFLLDZDQURJLEVBQzJDO0FBQ3BERSxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFRO0FBQ2ZWLGtCQUFRQyxHQUFSLENBQVlTLEdBQVo7QUFDQSxpQkFBS2YsVUFBTCxHQUFrQmUsSUFBSWxCLElBQXRCO0FBQ0QsU0FMUTtBQU1UbUIsY0FBSyxjQUFDRCxHQUFELEVBQU87QUFDVlYsa0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW1CUyxHQUFuQjtBQUNBLGlCQUFLZixVQUFMLEdBQWtCO0FBQ2Qsb0JBQU8sQ0FDTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsTUFBbEIsRUFESyxFQUVMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQUZLLEVBR0wsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBSEssRUFJTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFKSyxFQUtMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxJQUFsQixFQUxLLEVBTUwsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLElBQWxCLEVBTkssRUFPTCxFQUFDLE1BQUssR0FBTixFQUFVLFNBQVEsSUFBbEIsRUFQSyxFQVFMLEVBQUMsTUFBSyxHQUFOLEVBQVUsU0FBUSxHQUFsQixFQVJLLEVBU0wsRUFBQyxNQUFLLEdBQU4sRUFBVSxTQUFRLE1BQWxCLEVBVEssQ0FETztBQVlaLDBCQUFhO0FBWkQsV0FBbEI7QUFjRDtBQXRCUSxPQUFYO0FBd0JIOzs7O0VBL0ZnQ2lCLGVBQUtDLEk7O2tCQUFuQnJDLEsiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFNpZGVUYWIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlX3RhYidcbiAgaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlTGlzdCdcbiAgaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcbiAgaW1wb3J0IEFkcyBmcm9tICcuLi9jb21wb25lbnRzL2FkcydcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgZm9vZExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb29kTGlzdCdcbiAgaW1wb3J0IGljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLppJDmnI3liqEnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTaWRlVGFiXCI6e1widi1iaW5kOnRhYi5vbmNlXCI6XCJjYXRlZ29yaWVzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJTZWFyY2hCYXJcIjp7XCJ0eXBlXCI6XCJ0YWdcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwifX07XHJcbiRldmVudHMgPSB7XCJTaWRlVGFiXCI6e1widi1vbjpjaGFuZ2VcIjpcInN3aXRjaFRhYlwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2lkZVRhYjpTaWRlVGFiLFxuICAgICAgaW1hZ2VMaXN0OmltYWdlTGlzdCxcbiAgICAgIGZvb2RMaXN0OmZvb2RMaXN0LFxuICAgICAgU2VhcmNoQmFyOlNlYXJjaEJhcixcbiAgICAgIEFkczpBZHMsXG4gICAgICBpY29uOmljb25cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGluaXQ6dHJ1ZSxcbiAgICAgIHNlYXJjaFRleHQ6J+ivt+i+k+WFpeWVhuWutuaIluiAheWVhuWTgeWQjeensCcsXG4gICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgICAgICAgJ2xpc3QnOltcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicxJywndGl0bGUnOifng63mjqjovqPotKcnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicyJywndGl0bGUnOifngpLoj5wnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOiczJywndGl0bGUnOifnm5bppa0nfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic0JywndGl0bGUnOifpnaLmnaEnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic1JywndGl0bGUnOifppbrlrZAnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic2JywndGl0bGUnOifmi4zoj5wnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic3JywndGl0bGUnOiflsI/lkIMnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic4JywndGl0bGUnOifnsqUnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOic5JywndGl0bGUnOiflpJbliqDosIPmlpknfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICdzZWxlY3RlZElkJzonMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8g54K55Ye75YiG57G7XG4gICAgICBzd2l0Y2hUYWIoc2VsZWN0ZWRJZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZElkKVxuICAgICAgICAvLyB0aGlzLnRhYi5jYXRlZ29yeUlkID0gc2VsZWN0ZWRJZDtcbiAgICAgICAgLy8gdGhpcy5yZWxvYWQoKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgIH1cbiAgICBpbml0UGFnZSgpe1xuICAgICAgdGhpcy5nZXRBbmltZVRhZygpXG4gICAgfVxuICAgIHNlYXJjaCgpe1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3NlYXJjaFRhZydcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZ2V0QW5pbWVUYWcoKXtcblxuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5jYWxhbXVzLnh5ei9hcGkvZ2V0QW5pbWVUYWcucGhwJywgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhIDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6KHJlcyk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbFwiLHJlcylcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHtcbiAgICAgICAgICAgICAgICAnbGlzdCc6W1xuICAgICAgICAgICAgICAgICAgeydpZCc6JzEnLCd0aXRsZSc6J+eDreaOqOi+o+i0pyd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzInLCd0aXRsZSc6J+eCkuiPnCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzMnLCd0aXRsZSc6J+eblumlrSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzQnLCd0aXRsZSc6J+mdouadoSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzUnLCd0aXRsZSc6J+mluuWtkCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzYnLCd0aXRsZSc6J+aLjOiPnCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzcnLCd0aXRsZSc6J+Wwj+WQgyd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzgnLCd0aXRsZSc6J+eypSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzknLCd0aXRsZSc6J+WkluWKoOiwg+aWmSd9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgJ3NlbGVjdGVkSWQnOicxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=