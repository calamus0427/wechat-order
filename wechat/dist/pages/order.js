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
    }, _this.$repeat = {}, _this.$props = { "SideTab": { "v-bind:tab.sync": "categories" }, "foodList": { "v-bind:toView.sync": "selectView", "class": "goods-box", "v-bind:list.sync": "foodList", "v-bind:chooseList.sync": "choosedList", "v-bind:catList.sync": "categoriesList", "v-bind:dealList.sync": "dealList" }, "SearchBar": { "type": "tag", "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText", "xmlns:v-on": "" }, "Cart": { "v-bind:flag.sync": "cartShow", "v-bind:chooseList.sync": "choosedList", "v-bind:list.sync": "foodList", "v-bind:catList.sync": "categoriesList", "v-bind:dealList.sync": "dealList" } }, _this.$events = { "SideTab": { "v-on:change": "switchTab" }, "SearchBar": { "v-on:search": "searchFood", "v-on:clear": "clearSearch" }, "Cart": { "v-on:clear": "clear" } }, _this.components = {
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
      starSortIcon: 'icon-dianzan'
    }, _this.computed = {
      selectView: function selectView() {
        var text = 'a' + this.selectedId;
        return text;
      }
    }, _this.methods = {
      // 点击分类
      switchTab: function switchTab(selectedId) {
        console.log(selectedId);
        this.selectedId = selectedId;
      },
      searchFood: function searchFood(res) {
        console.log("search", res);
        if (res) {
          this.foodList = this.foodList.filter(function (item) {
            return item.name.indexOf(res) > -1;
          });
        } else {
          console.log("11111");
          this.getFoodList();
        }
      },
      clearSearch: function clearSearch(res) {
        this.getFoodList();
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
        console.log("1", this.currentPriceSort);
        this.foodList = this.foodList.sort(function (a, b) {
          return flag == 1 ? a.price > b.price : a.price < b.price;
        });
        this.priceSortIcon = flag == 1 ? 'icon-paixu-shuliangshengxu' : 'icon-paixu-shuliangjiangxu';
        this.currentPriceSort = flag == 1 ? 2 : 1;
        this.currentSortRule = 'price';

        console.log("2", this.currentPriceSort);
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
                  res.data.map(function (item) {
                    item.sum = 0;
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
                  console.log("11", res);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzTGlzdCIsInNlbGVjdGVkSWQiLCJjaG9vc2VkTGlzdCIsImRlYWxMaXN0IiwiY3VycmVudFByaWNlU29ydCIsImN1cnJlbnRTdGFyU29ydCIsImN1cnJlbnRTb3J0UnVsZSIsInByaWNlU29ydEljb24iLCJzdGFyU29ydEljb24iLCJjb21wdXRlZCIsInNlbGVjdFZpZXciLCJ0ZXh0IiwibWV0aG9kcyIsInN3aXRjaFRhYiIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hGb29kIiwicmVzIiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJpbmRleE9mIiwiZ2V0Rm9vZExpc3QiLCJjbGVhclNlYXJjaCIsImNsZWFyIiwiY2xvc2VMaXN0Iiwic29ydFByaWNlIiwiZmxhZyIsInNvcnQiLCJhIiwiYiIsInByaWNlIiwic29ydFN0YXIiLCJzdGFyIiwiZXZlbnRzIiwiaW5pdFBhZ2UiLCJnZXRDYXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwicmVxdWVzdCIsInRoZW4iLCJtYXAiLCJzdW0iLCJjYXQiLCIkYXBwbHkiLCJsaXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsQ0FBQ0MsY0FB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biAgaW1wb3J0IFNpZGVUYWIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlX3RhYidcbiAgaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlTGlzdCdcbiAgaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcbiAgaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJ0J1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBmb29kTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb2RMaXN0J1xuICBpbXBvcnQgaWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXG5cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBvcmRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuoumkkOacjeWKoSdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlNpZGVUYWJcIjp7XCJ2LWJpbmQ6dGFiLnN5bmNcIjpcImNhdGVnb3JpZXNcIn0sXCJmb29kTGlzdFwiOntcInYtYmluZDp0b1ZpZXcuc3luY1wiOlwic2VsZWN0Vmlld1wiLFwiY2xhc3NcIjpcImdvb2RzLWJveFwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiZm9vZExpc3RcIixcInYtYmluZDpjaG9vc2VMaXN0LnN5bmNcIjpcImNob29zZWRMaXN0XCIsXCJ2LWJpbmQ6Y2F0TGlzdC5zeW5jXCI6XCJjYXRlZ29yaWVzTGlzdFwiLFwidi1iaW5kOmRlYWxMaXN0LnN5bmNcIjpcImRlYWxMaXN0XCJ9LFwiU2VhcmNoQmFyXCI6e1widHlwZVwiOlwidGFnXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlaG9sZGVyLm9uY2VcIjpcInNlYXJjaFRleHRcIixcInhtbG5zOnYtb25cIjpcIlwifSxcIkNhcnRcIjp7XCJ2LWJpbmQ6ZmxhZy5zeW5jXCI6XCJjYXJ0U2hvd1wiLFwidi1iaW5kOmNob29zZUxpc3Quc3luY1wiOlwiY2hvb3NlZExpc3RcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImZvb2RMaXN0XCIsXCJ2LWJpbmQ6Y2F0TGlzdC5zeW5jXCI6XCJjYXRlZ29yaWVzTGlzdFwiLFwidi1iaW5kOmRlYWxMaXN0LnN5bmNcIjpcImRlYWxMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcIlNpZGVUYWJcIjp7XCJ2LW9uOmNoYW5nZVwiOlwic3dpdGNoVGFiXCJ9LFwiU2VhcmNoQmFyXCI6e1widi1vbjpzZWFyY2hcIjpcInNlYXJjaEZvb2RcIixcInYtb246Y2xlYXJcIjpcImNsZWFyU2VhcmNoXCJ9LFwiQ2FydFwiOntcInYtb246Y2xlYXJcIjpcImNsZWFyXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTaWRlVGFiOlNpZGVUYWIsXG4gICAgICBpbWFnZUxpc3Q6aW1hZ2VMaXN0LFxuICAgICAgZm9vZExpc3Q6Zm9vZExpc3QsXG4gICAgICBTZWFyY2hCYXI6U2VhcmNoQmFyLFxuICAgICAgQ2FydDpDYXJ0LFxuICAgICAgaWNvbjppY29uXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbml0OnRydWUsXG4gICAgICBjYXJ0U2hvdzpmYWxzZSxcbiAgICAgIHNlYXJjaFRleHQ6J+ivt+i+k+WFpeWVhuWTgeWQjeensCcsXG4gICAgICBjYXRlZ29yaWVzOiB7fSxcbiAgICAgIGNhdGVnb3JpZXNMaXN0OltdLFxuICAgICAgZm9vZExpc3Q6W10sXG4gICAgICBzZWxlY3RlZElkOjEsXG4gICAgICBjaG9vc2VkTGlzdDpbXSwgLy/otK3nianovabpgInkuK3nmoToj5zlk4FcbiAgICAgIGRlYWxMaXN0OltdLCAvL2RlYWwgY2FydCBkYXRhXG4gICAgICBjdXJyZW50UHJpY2VTb3J0OjEsXG4gICAgICBjdXJyZW50U3RhclNvcnQ6MSxcbiAgICAgIGN1cnJlbnRTb3J0UnVsZTonJyxcbiAgICAgIHByaWNlU29ydEljb246J2ljb24tcGFpeHUtc2h1bGlhbmdzaGVuZ3h1JyxcbiAgICAgIHN0YXJTb3J0SWNvbjonaWNvbi1kaWFuemFuJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgc2VsZWN0Vmlldygpe1xuICAgICAgICBsZXQgdGV4dCA9ICAnYScrdGhpcy5zZWxlY3RlZElkIFxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8g54K55Ye75YiG57G7XG4gICAgICBzd2l0Y2hUYWIoc2VsZWN0ZWRJZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZElkKVxuICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSBzZWxlY3RlZElkO1xuICAgICAgfSxcbiAgICAgIHNlYXJjaEZvb2QocmVzKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hcIixyZXMpO1xuICAgICAgICBpZihyZXMpe1xuICAgICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LmZpbHRlcigoaXRlbSk9PntcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUuaW5kZXhPZihyZXMpID4gLTE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiMTExMTFcIilcbiAgICAgICAgICB0aGlzLmdldEZvb2RMaXN0KClcbiAgICAgICAgfSAgICAgXG4gICAgICB9LFxuICAgICAgY2xlYXJTZWFyY2gocmVzKXtcbiAgICAgICAgICB0aGlzLmdldEZvb2RMaXN0KClcbiAgICAgIH0sXG4gICAgICBjbGVhcigpe1xuICAgICAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKVxuICAgICAgfSxcbiAgICAgIGNsb3NlTGlzdCgpe1xuICAgICAgICB0aGlzLmNhcnRTaG93ID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgLy8g5Lu35qC85LyY5YWIXG4gICAgICBzb3J0UHJpY2UoKXtcbiAgICAgICAgbGV0IGZsYWcgPSB0aGlzLmN1cnJlbnRQcmljZVNvcnQgO1xuICAgICAgICBjb25zb2xlLmxvZyhcIjFcIix0aGlzLmN1cnJlbnRQcmljZVNvcnQpXG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LnNvcnQoKGEsYik9PntcbiAgICAgICAgICByZXR1cm4gZmxhZyA9PSAxID8gYS5wcmljZSA+IGIucHJpY2UgOiBhLnByaWNlIDwgYi5wcmljZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJpY2VTb3J0SWNvbiA9IGZsYWcgPT0gMSA/ICdpY29uLXBhaXh1LXNodWxpYW5nc2hlbmd4dScgOiAnaWNvbi1wYWl4dS1zaHVsaWFuZ2ppYW5neHUnIDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJpY2VTb3J0ID0gKGZsYWcgPT0gMSkgPyAyIDogMSA7XG4gICAgICAgIHRoaXMuY3VycmVudFNvcnRSdWxlID0gJ3ByaWNlJztcblxuICAgICAgICBjb25zb2xlLmxvZyhcIjJcIix0aGlzLmN1cnJlbnRQcmljZVNvcnQpXG5cbiAgICAgIH0sXG4gICAgICAvLyDlpb3or4TkvJjlhYhcbiAgICAgIHNvcnRTdGFyKCl7XG4gICAgICAgIGxldCBmbGFnID0gdGhpcy5jdXJyZW50U3RhclNvcnQgO1xuICAgICAgICB0aGlzLmZvb2RMaXN0ID0gdGhpcy5mb29kTGlzdC5zb3J0KChhLGIpPT57XG4gICAgICAgICAgcmV0dXJuIGZsYWcgPT0gMSA/IGEuc3RhciA8IGIuc3RhciA6YS5zdGFyID4gYi5zdGFyO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFyU29ydEljb24gPSBmbGFnID09IDEgPyAnaWNvbi1kaWFuemFuJyA6ICdpY29uLXotbm9saWtlJyA7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXJTb3J0ID0gZmxhZyA9PSAxID8gMiA6IDEgO1xuICAgICAgICB0aGlzLmN1cnJlbnRTb3J0UnVsZSA9ICdzdGFyJztcblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgIH1cbiAgICBpbml0UGFnZSgpe1xuICAgICAgdGhpcy5nZXRGb29kTGlzdCgpO1xuICAgICAgdGhpcy5nZXRDYXQoKTtcbiAgICB9XG4gICAgc2VhcmNoKCl7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2VhcmNoVGFnJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBhc3luYyBnZXRGb29kTGlzdCgpe1xuICAgICAgdmFyIHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Zvb2QvZ2V0X2Zvb2RcIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZm9vZD0+PlwiLHJlcy5kYXRhKTtcbiAgICAgICAgcmVzLmRhdGEubWFwKChpdGVtKT0+e1xuICAgICAgICAgIGl0ZW0uc3VtID0gMCA7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSByZXMuZGF0YVxuICAgICAgICB0aGlzLmZvb2RMaXN0ID0gdGhpcy5mb29kTGlzdC5zb3J0KChhLGIpPT57XG4gICAgICAgICAgcmV0dXJuIGEuY2F0ID4gYi5jYXQ7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRoaXMuZm9vZExpc3QgPSByZXMuZGF0YS5maWx0ZXIoKGl0ZW0pPT57cmV0dXJuIGl0ZW0uY2F0ID09IHRoaXMuc2VsZWN0ZWRJZH0pO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q2F0KCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZm9vZC9nZXRfZm9vZF9jYXRcIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTFcIixyZXMpXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5saXN0ID0gcmVzLmRhdGE7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc0xpc3QgPSByZXMuZGF0YSA7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zZWxlY3RlZElkID0gdGhpcy5zZWxlY3RlZElkO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==