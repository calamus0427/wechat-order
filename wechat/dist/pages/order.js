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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
    }, _this.$repeat = {}, _this.$props = { "SideTab": { "v-bind:tab.sync": "categories", "xmlns:v-on": "" }, "foodList": { "v-bind:list.sync": "foodList", "v-bind:chooseList.sync": "catList" }, "SearchBar": { "type": "tag", "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText" }, "Cart": { "v-bind:flag.sync": "cartShow", "v-bind:list.sync": "catList" } }, _this.$events = { "SideTab": { "v-on:change": "switchTab" } }, _this.components = {
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
      categories: {},
      foodList: [],
      catList: []
    }, _this.computed = {}, _this.methods = {
      // 点击分类
      switchTab: function switchTab(selectedId) {
        console.log(selectedId);
        // this.tab.categoryId = selectedId;
        // this.reload();
      },
      closeList: function closeList() {
        this.cartShow = false;
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
      this.getFoodList();
      this.getCat();
    }
  }, {
    key: 'search',
    value: function search() {
      wx.navigateTo({
        url: '/pages/searchTag'
      });
    }
  }, {
    key: 'getFoodList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "http://localhost:8080/food/get_food";

                _wepy2.default.request(url).then(function (res) {
                  console.log("food=>>", res.data);
                  _this2.foodList = res.data;
                  _this2.$apply();
                });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFoodList() {
        return _ref2.apply(this, arguments);
      }

      return getFoodList;
    }()
  }, {
    key: 'getCat',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        var url;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "http://localhost:8080/food/get_food_cat";

                _wepy2.default.request(url).then(function (res) {
                  console.log("11", res);
                  _this3.categories.list = res.data;
                  _this3.categories.selectedId = 1;
                  _this3.$apply();
                });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCat() {
        return _ref3.apply(this, arguments);
      }

      return getCat;
    }()
  }]);

  return order;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(order , 'pages/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRMaXN0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2VsZWN0ZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUxpc3QiLCJldmVudHMiLCJpbml0UGFnZSIsImdldEZvb2RMaXN0IiwiZ2V0Q2F0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2VweSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzIiwiJGFwcGx5IiwibGlzdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsbUJBQWtCLFlBQW5CLEVBQWdDLGNBQWEsRUFBN0MsRUFBWCxFQUE0RCxZQUFXLEVBQUMsb0JBQW1CLFVBQXBCLEVBQStCLDBCQUF5QixTQUF4RCxFQUF2RSxFQUEwSSxhQUFZLEVBQUMsUUFBTyxLQUFSLEVBQWMsZ0JBQWUsRUFBN0IsRUFBZ0MsMkJBQTBCLFlBQTFELEVBQXRKLEVBQThOLFFBQU8sRUFBQyxvQkFBbUIsVUFBcEIsRUFBK0Isb0JBQW1CLFNBQWxELEVBQXJPLEUsUUFDVEMsTyxHQUFVLEVBQUMsV0FBVSxFQUFDLGVBQWMsV0FBZixFQUFYLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGVBQVFBLGtCQURBO0FBRVJDLGlCQUFVQSxtQkFGRjtBQUdSQyxnQkFBU0Esa0JBSEQ7QUFJUkMsaUJBQVVBLG1CQUpGO0FBS1JDLFlBQUtBLGNBTEc7QUFNUkMsWUFBS0E7QUFORyxLLFFBU1ZkLE0sR0FBUyxFLFFBRVRlLEksR0FBTztBQUNMQyxZQUFLLElBREE7QUFFTEMsZ0JBQVMsS0FGSjtBQUdMQyxrQkFBVyxhQUhOO0FBSUxDLGtCQUFZLEVBSlA7QUFLTFIsZ0JBQVMsRUFMSjtBQU1MUyxlQUFRO0FBTkgsSyxRQVNQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVU7QUFDUjtBQUNBQyxlQUZRLHFCQUVFQyxVQUZGLEVBRWM7QUFDcEJDLGdCQUFRQyxHQUFSLENBQVlGLFVBQVo7QUFDQTtBQUNBO0FBQ0QsT0FOTztBQU9SRyxlQVBRLHVCQU9HO0FBQ1QsYUFBS1YsUUFBTCxHQUFnQixLQUFoQjtBQUNEO0FBVE8sSyxRQWFWVyxNLEdBQVMsRTs7Ozs7NkJBSUEsQ0FDUjs7OzhCQUNTO0FBQ1IsV0FBS0MsUUFBTDtBQUNEOzs7K0JBQ1M7QUFDUixXQUFLQyxXQUFMO0FBQ0EsV0FBS0MsTUFBTDtBQUNEOzs7NkJBQ087QUFDTkMsU0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGFBQUs7QUFESyxPQUFkO0FBR0Q7Ozs7Ozs7Ozs7OztBQUVLQSxtQixHQUFNLHFDOztBQUNWQywrQkFBS0MsT0FBTCxDQUFhRixHQUFiLEVBQWtCRyxJQUFsQixDQUF1QixVQUFDQyxHQUFELEVBQVM7QUFDOUJiLDBCQUFRQyxHQUFSLENBQVksU0FBWixFQUFzQlksSUFBSXZCLElBQTFCO0FBQ0EseUJBQUtKLFFBQUwsR0FBZ0IyQixJQUFJdkIsSUFBcEI7QUFDQSx5QkFBS3dCLE1BQUw7QUFDRCxpQkFKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0lMLG1CLEdBQU0seUM7O0FBQ1ZDLCtCQUFLQyxPQUFMLENBQWFGLEdBQWIsRUFBa0JHLElBQWxCLENBQXVCLFVBQUNDLEdBQUQsRUFBUztBQUM5QmIsMEJBQVFDLEdBQVIsQ0FBWSxJQUFaLEVBQWlCWSxHQUFqQjtBQUNBLHlCQUFLbkIsVUFBTCxDQUFnQnFCLElBQWhCLEdBQXVCRixJQUFJdkIsSUFBM0I7QUFDQSx5QkFBS0ksVUFBTCxDQUFnQkssVUFBaEIsR0FBNkIsQ0FBN0I7QUFDQSx5QkFBS2UsTUFBTDtBQUNELGlCQUxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekUrQkosZUFBS00sSTs7a0JBQW5CMUMsSyIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgU2lkZVRhYiBmcm9tICcuLi9jb21wb25lbnRzL3NpZGVfdGFiJ1xuICBpbXBvcnQgaW1hZ2VMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VMaXN0J1xuICBpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyJ1xuICBpbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnQnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGZvb2RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vZExpc3QnXG4gIGltcG9ydCBpY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i6aSQ5pyN5YqhJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU2lkZVRhYlwiOntcInYtYmluZDp0YWIuc3luY1wiOlwiY2F0ZWdvcmllc1wiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwiZm9vZExpc3RcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJmb29kTGlzdFwiLFwidi1iaW5kOmNob29zZUxpc3Quc3luY1wiOlwiY2F0TGlzdFwifSxcIlNlYXJjaEJhclwiOntcInR5cGVcIjpcInRhZ1wiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZWhvbGRlci5vbmNlXCI6XCJzZWFyY2hUZXh0XCJ9LFwiQ2FydFwiOntcInYtYmluZDpmbGFnLnN5bmNcIjpcImNhcnRTaG93XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJjYXRMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcIlNpZGVUYWJcIjp7XCJ2LW9uOmNoYW5nZVwiOlwic3dpdGNoVGFiXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTaWRlVGFiOlNpZGVUYWIsXG4gICAgICBpbWFnZUxpc3Q6aW1hZ2VMaXN0LFxuICAgICAgZm9vZExpc3Q6Zm9vZExpc3QsXG4gICAgICBTZWFyY2hCYXI6U2VhcmNoQmFyLFxuICAgICAgQ2FydDpDYXJ0LFxuICAgICAgaWNvbjppY29uXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbml0OnRydWUsXG4gICAgICBjYXJ0U2hvdzpmYWxzZSxcbiAgICAgIHNlYXJjaFRleHQ6J+ivt+i+k+WFpeWVhuWutuaIluiAheWVhuWTgeWQjeensCcsXG4gICAgICBjYXRlZ29yaWVzOiB7fSxcbiAgICAgIGZvb2RMaXN0OltdLFxuICAgICAgY2F0TGlzdDpbXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8vIOeCueWHu+WIhuexu1xuICAgICAgc3dpdGNoVGFiKHNlbGVjdGVkSWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRJZClcbiAgICAgICAgLy8gdGhpcy50YWIuY2F0ZWdvcnlJZCA9IHNlbGVjdGVkSWQ7XG4gICAgICAgIC8vIHRoaXMucmVsb2FkKCk7XG4gICAgICB9LFxuICAgICAgY2xvc2VMaXN0KCl7XG4gICAgICAgIHRoaXMuY2FydFNob3cgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlKClcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcbiAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKTtcbiAgICAgIHRoaXMuZ2V0Q2F0KCk7XG4gICAgfVxuICAgIHNlYXJjaCgpe1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3NlYXJjaFRhZydcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Rm9vZExpc3QoKXtcbiAgICAgIHZhciB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9mb29kL2dldF9mb29kXCJcbiAgICAgIHdlcHkucmVxdWVzdCh1cmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZvb2Q9Pj5cIixyZXMuZGF0YSlcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q2F0KCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZm9vZC9nZXRfZm9vZF9jYXRcIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTFcIixyZXMpXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5saXN0ID0gcmVzLmRhdGE7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zZWxlY3RlZElkID0gMTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=