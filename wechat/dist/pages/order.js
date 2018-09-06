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
    }, _this.$repeat = {}, _this.$props = { "SideTab": { "v-bind:tab.sync": "categories" }, "foodList": { "v-bind:toView.sync": "selectView", "class": "goods-box", "v-bind:list.sync": "foodList", "v-bind:chooseList.sync": "choosedList", "v-bind:catList.sync": "categoriesList", "v-bind:dealList.sync": "dealList" }, "SearchBar": { "type": "tag", "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText", "xmlns:v-on": "" }, "Cart": { "v-bind:flag.sync": "cartShow", "v-bind:chooseList.sync": "choosedList", "v-bind:list.sync": "foodList", "v-bind:catList.sync": "categoriesList", "v-bind:dealList.sync": "dealList" } }, _this.$events = { "SideTab": { "v-on:change": "switchTab" }, "foodList": { "v-on:scroll": "scrollSit" }, "SearchBar": { "v-on:search": "searchFood", "v-on:clear": "clearSearch" }, "Cart": { "v-on:clear": "clear" } }, _this.components = {
      SideTab: _side_tab2.default,
      imageList: _imageList2.default,
      foodList: _foodList2.default,
      SearchBar: _searchbar2.default,
      Cart: _cart2.default,
      icon: _icon2.default
    }, _this.mixins = [], _this.data = {
      init: true,
      cartShow: false,
      searchText: '请输入商品名称',
      categories: {},
      categoriesList: [],
      foodList: [],
      selectedId: 1,
      choosedList: [], //购物车选中的菜品
      dealList: [], //deal cart data
      currentPriceSort: 1,
      currentStarSort: 1,
      currentSortRule: '',
      priceSortIcon: 'icon-paixu-shuliangshengxu',
      starSortIcon: 'icon-dianzan',
      selectView: 'a1'
    }, _this.computed = {}, _this.methods = {
      // 点击分类
      switchTab: function switchTab(selectedId) {
        this.selectedId = selectedId;
        this.selectView = 'a' + selectedId;
      },
      scrollSit: function scrollSit(res) {
        this.categories.selectedId = this.foodList[res].cat;
      },
      searchFood: function searchFood(res) {
        if (res) {
          this.foodList.map(function (item) {
            if (item.name.indexOf(res) > -1) {
              item.filter = false;
            } else {
              item.filter = true;
            }
          });
        } else {
          this.getFoodList();
        }
      },
      clearSearch: function clearSearch(res) {
        this.foodList.map(function (item) {
          item.filter = false;
        });
      },
      clear: function clear() {
        this.getFoodList();
      },
      closeList: function closeList() {
        this.cartShow = false;
      },

      // 价格优先
      sortPrice: function sortPrice() {
        var flag = this.currentPriceSort;
        this.foodList = this.foodList.sort(function (a, b) {
          return flag == 1 ? a.price > b.price : a.price < b.price;
        });
        this.priceSortIcon = flag == 1 ? 'icon-paixu-shuliangshengxu' : 'icon-paixu-shuliangjiangxu';
        this.currentPriceSort = flag == 1 ? 2 : 1;
        this.currentSortRule = 'price';
        this.categories.selectedId = this.foodList[0].cat;
      },

      // 好评优先
      sortStar: function sortStar() {
        var flag = this.currentStarSort;
        this.foodList = this.foodList.sort(function (a, b) {
          return flag == 1 ? a.star < b.star : a.star > b.star;
        });
        this.starSortIcon = flag == 1 ? 'icon-dianzan' : 'icon-z-nolike';
        this.currentStarSort = flag == 1 ? 2 : 1;
        this.currentSortRule = 'star';
        this.categories.selectedId = this.foodList[0].cat;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(order, [{
    key: 'onLoad',
    value: function onLoad(options) {
      if (options.list) {} else {
        this.initPage();
      }
    }
  }, {
    key: 'onReady',
    value: function onReady() {}
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
                  res.data.map(function (item) {
                    item.sum = 0;
                    item.fliter = true;
                  });
                  _this2.foodList = res.data;
                  _this2.foodList = _this2.foodList.sort(function (a, b) {
                    return a.cat > b.cat;
                  });
                  // this.foodList = res.data.filter((item)=>{return item.cat == this.selectedId});
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
                  _this3.categories.list = res.data;
                  _this3.categoriesList = res.data;
                  _this3.categories.selectedId = _this3.selectedId;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzTGlzdCIsInNlbGVjdGVkSWQiLCJjaG9vc2VkTGlzdCIsImRlYWxMaXN0IiwiY3VycmVudFByaWNlU29ydCIsImN1cnJlbnRTdGFyU29ydCIsImN1cnJlbnRTb3J0UnVsZSIsInByaWNlU29ydEljb24iLCJzdGFyU29ydEljb24iLCJzZWxlY3RWaWV3IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2Nyb2xsU2l0IiwicmVzIiwiY2F0Iiwic2VhcmNoRm9vZCIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiaW5kZXhPZiIsImZpbHRlciIsImdldEZvb2RMaXN0IiwiY2xlYXJTZWFyY2giLCJjbGVhciIsImNsb3NlTGlzdCIsInNvcnRQcmljZSIsImZsYWciLCJzb3J0IiwiYSIsImIiLCJwcmljZSIsInNvcnRTdGFyIiwic3RhciIsImV2ZW50cyIsIm9wdGlvbnMiLCJsaXN0IiwiaW5pdFBhZ2UiLCJnZXRDYXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwicmVxdWVzdCIsInRoZW4iLCJzdW0iLCJmbGl0ZXIiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUyxD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QixJQUExQjtBQUNBLHlCQUFLSSxVQUFMLENBQWdCRSxVQUFoQixHQUE2QixPQUFLQSxVQUFsQztBQUNBLHlCQUFLOEMsTUFBTDtBQUNELGlCQUxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUkrQkwsZUFBS00sSTs7a0JBQW5CckUsSyIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgU2lkZVRhYiBmcm9tICcuLi9jb21wb25lbnRzL3NpZGVfdGFiJ1xuICBpbXBvcnQgaW1hZ2VMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VMaXN0J1xuICBpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyJ1xuICBpbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnQnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGZvb2RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vZExpc3QnXG4gIGltcG9ydCBpY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i6aSQ5pyN5YqhJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU2lkZVRhYlwiOntcInYtYmluZDp0YWIuc3luY1wiOlwiY2F0ZWdvcmllc1wifSxcImZvb2RMaXN0XCI6e1widi1iaW5kOnRvVmlldy5zeW5jXCI6XCJzZWxlY3RWaWV3XCIsXCJjbGFzc1wiOlwiZ29vZHMtYm94XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJmb29kTGlzdFwiLFwidi1iaW5kOmNob29zZUxpc3Quc3luY1wiOlwiY2hvb3NlZExpc3RcIixcInYtYmluZDpjYXRMaXN0LnN5bmNcIjpcImNhdGVnb3JpZXNMaXN0XCIsXCJ2LWJpbmQ6ZGVhbExpc3Quc3luY1wiOlwiZGVhbExpc3RcIn0sXCJTZWFyY2hCYXJcIjp7XCJ0eXBlXCI6XCJ0YWdcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwiQ2FydFwiOntcInYtYmluZDpmbGFnLnN5bmNcIjpcImNhcnRTaG93XCIsXCJ2LWJpbmQ6Y2hvb3NlTGlzdC5zeW5jXCI6XCJjaG9vc2VkTGlzdFwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiZm9vZExpc3RcIixcInYtYmluZDpjYXRMaXN0LnN5bmNcIjpcImNhdGVnb3JpZXNMaXN0XCIsXCJ2LWJpbmQ6ZGVhbExpc3Quc3luY1wiOlwiZGVhbExpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiU2lkZVRhYlwiOntcInYtb246Y2hhbmdlXCI6XCJzd2l0Y2hUYWJcIn0sXCJmb29kTGlzdFwiOntcInYtb246c2Nyb2xsXCI6XCJzY3JvbGxTaXRcIn0sXCJTZWFyY2hCYXJcIjp7XCJ2LW9uOnNlYXJjaFwiOlwic2VhcmNoRm9vZFwiLFwidi1vbjpjbGVhclwiOlwiY2xlYXJTZWFyY2hcIn0sXCJDYXJ0XCI6e1widi1vbjpjbGVhclwiOlwiY2xlYXJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFNpZGVUYWI6U2lkZVRhYixcbiAgICAgIGltYWdlTGlzdDppbWFnZUxpc3QsXG4gICAgICBmb29kTGlzdDpmb29kTGlzdCxcbiAgICAgIFNlYXJjaEJhcjpTZWFyY2hCYXIsXG4gICAgICBDYXJ0OkNhcnQsXG4gICAgICBpY29uOmljb25cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGluaXQ6dHJ1ZSxcbiAgICAgIGNhcnRTaG93OmZhbHNlLFxuICAgICAgc2VhcmNoVGV4dDon6K+36L6T5YWl5ZWG5ZOB5ZCN56ewJyxcbiAgICAgIGNhdGVnb3JpZXM6IHt9LFxuICAgICAgY2F0ZWdvcmllc0xpc3Q6W10sXG4gICAgICBmb29kTGlzdDpbXSxcbiAgICAgIHNlbGVjdGVkSWQ6MSxcbiAgICAgIGNob29zZWRMaXN0OltdLCAvL+i0reeJqei9pumAieS4reeahOiPnOWTgVxuICAgICAgZGVhbExpc3Q6W10sIC8vZGVhbCBjYXJ0IGRhdGFcbiAgICAgIGN1cnJlbnRQcmljZVNvcnQ6MSxcbiAgICAgIGN1cnJlbnRTdGFyU29ydDoxLFxuICAgICAgY3VycmVudFNvcnRSdWxlOicnLFxuICAgICAgcHJpY2VTb3J0SWNvbjonaWNvbi1wYWl4dS1zaHVsaWFuZ3NoZW5neHUnLFxuICAgICAgc3RhclNvcnRJY29uOidpY29uLWRpYW56YW4nLFxuICAgICAgc2VsZWN0VmlldzonYTEnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8vIOeCueWHu+WIhuexu1xuICAgICAgc3dpdGNoVGFiKHNlbGVjdGVkSWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gc2VsZWN0ZWRJZDtcbiAgICAgICAgdGhpcy5zZWxlY3RWaWV3ID0gICAnYScrc2VsZWN0ZWRJZCBcbiAgICAgIH0sXG4gICAgICBzY3JvbGxTaXQocmVzKXtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnNlbGVjdGVkSWQgPSB0aGlzLmZvb2RMaXN0W3Jlc10uY2F0O1xuICAgICAgfSxcbiAgICAgIHNlYXJjaEZvb2QocmVzKXtcbiAgICAgICAgaWYocmVzKXtcbiAgICAgICAgICAgdGhpcy5mb29kTGlzdC5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICAgaWYoaXRlbS5uYW1lLmluZGV4T2YocmVzKSA+IC0xKXtcbiAgICAgICAgICAgICAgIGl0ZW0uZmlsdGVyID0gZmFsc2UgO1xuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgaXRlbS5maWx0ZXIgPSB0cnVlIDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKVxuICAgICAgICB9ICAgICBcbiAgICAgIH0sXG4gICAgICBjbGVhclNlYXJjaChyZXMpe1xuICAgICAgICAgIHRoaXMuZm9vZExpc3QubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgIGl0ZW0uZmlsdGVyID0gZmFsc2UgO1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNsZWFyKCl7XG4gICAgICAgICAgdGhpcy5nZXRGb29kTGlzdCgpXG4gICAgICB9LFxuICAgICAgY2xvc2VMaXN0KCl7XG4gICAgICAgIHRoaXMuY2FydFNob3cgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICAvLyDku7fmoLzkvJjlhYhcbiAgICAgIHNvcnRQcmljZSgpe1xuICAgICAgICBsZXQgZmxhZyA9IHRoaXMuY3VycmVudFByaWNlU29ydCA7XG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LnNvcnQoKGEsYik9PntcbiAgICAgICAgICByZXR1cm4gZmxhZyA9PSAxID8gYS5wcmljZSA+IGIucHJpY2UgOiBhLnByaWNlIDwgYi5wcmljZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJpY2VTb3J0SWNvbiA9IGZsYWcgPT0gMSA/ICdpY29uLXBhaXh1LXNodWxpYW5nc2hlbmd4dScgOiAnaWNvbi1wYWl4dS1zaHVsaWFuZ2ppYW5neHUnIDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJpY2VTb3J0ID0gKGZsYWcgPT0gMSkgPyAyIDogMSA7XG4gICAgICAgIHRoaXMuY3VycmVudFNvcnRSdWxlID0gJ3ByaWNlJztcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnNlbGVjdGVkSWQgPSB0aGlzLmZvb2RMaXN0WzBdLmNhdDtcblxuICAgICAgfSxcbiAgICAgIC8vIOWlveivhOS8mOWFiFxuICAgICAgc29ydFN0YXIoKXtcbiAgICAgICAgbGV0IGZsYWcgPSB0aGlzLmN1cnJlbnRTdGFyU29ydCA7XG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LnNvcnQoKGEsYik9PntcbiAgICAgICAgICByZXR1cm4gZmxhZyA9PSAxID8gYS5zdGFyIDwgYi5zdGFyIDphLnN0YXIgPiBiLnN0YXI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJTb3J0SWNvbiA9IGZsYWcgPT0gMSA/ICdpY29uLWRpYW56YW4nIDogJ2ljb24tei1ub2xpa2UnIDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhclNvcnQgPSBmbGFnID09IDEgPyAyIDogMSA7XG4gICAgICAgIHRoaXMuY3VycmVudFNvcnRSdWxlID0gJ3N0YXInO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc2VsZWN0ZWRJZCA9IHRoaXMuZm9vZExpc3RbMF0uY2F0O1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIGlmKG9wdGlvbnMubGlzdCl7XG4gICAgICAgIFxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgIH1cbiAgICBpbml0UGFnZSgpe1xuICAgICAgdGhpcy5nZXRGb29kTGlzdCgpO1xuICAgICAgdGhpcy5nZXRDYXQoKTtcbiAgICB9XG4gICAgc2VhcmNoKCl7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2VhcmNoVGFnJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBhc3luYyBnZXRGb29kTGlzdCgpe1xuICAgICAgdmFyIHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Zvb2QvZ2V0X2Zvb2RcIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHJlcy5kYXRhLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICBpdGVtLnN1bSA9IDAgO1xuICAgICAgICAgIGl0ZW0uZmxpdGVyID0gdHJ1ZSA7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSByZXMuZGF0YVxuICAgICAgICB0aGlzLmZvb2RMaXN0ID0gdGhpcy5mb29kTGlzdC5zb3J0KChhLGIpPT57XG4gICAgICAgICAgcmV0dXJuIGEuY2F0ID4gYi5jYXQ7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRoaXMuZm9vZExpc3QgPSByZXMuZGF0YS5maWx0ZXIoKGl0ZW0pPT57cmV0dXJuIGl0ZW0uY2F0ID09IHRoaXMuc2VsZWN0ZWRJZH0pO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q2F0KCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZm9vZC9nZXRfZm9vZF9jYXRcIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5saXN0ID0gcmVzLmRhdGE7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc0xpc3QgPSByZXMuZGF0YSA7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zZWxlY3RlZElkID0gdGhpcy5zZWxlY3RlZElkO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==