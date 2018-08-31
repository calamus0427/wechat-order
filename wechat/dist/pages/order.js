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
    }, _this.$repeat = {}, _this.$props = { "SideTab": { "v-bind:tab.sync": "categories" }, "foodList": { "v-bind:list.sync": "foodList", "v-bind:chooseList.sync": "choosedList", "v-bind:catList.sync": "categoriesList", "v-bind:dealList.sync": "dealList" }, "SearchBar": { "type": "tag", "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText", "xmlns:v-on": "" }, "Cart": { "v-bind:flag.sync": "cartShow", "v-bind:chooseList.sync": "choosedList", "v-bind:catList.sync": "categoriesList", "v-bind:dealList.sync": "dealList" } }, _this.$events = { "SideTab": { "v-on:change": "switchTab" }, "SearchBar": { "v-on:search": "searchFood", "v-on:clear": "clearSearch" } }, _this.components = {
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
    }, _this.computed = {}, _this.methods = {
      // 点击分类
      switchTab: function switchTab(selectedId) {
        console.log(selectedId);
        this.selectedId = selectedId;
        this.getFoodList();
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
                  _this2.foodList = res.data.filter(function (item) {
                    return item.cat == _this2.selectedId;
                  });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzTGlzdCIsInNlbGVjdGVkSWQiLCJjaG9vc2VkTGlzdCIsImRlYWxMaXN0IiwiY3VycmVudFByaWNlU29ydCIsImN1cnJlbnRTdGFyU29ydCIsImN1cnJlbnRTb3J0UnVsZSIsInByaWNlU29ydEljb24iLCJzdGFyU29ydEljb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzd2l0Y2hUYWIiLCJjb25zb2xlIiwibG9nIiwiZ2V0Rm9vZExpc3QiLCJzZWFyY2hGb29kIiwicmVzIiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJpbmRleE9mIiwiY2xlYXJTZWFyY2giLCJjbG9zZUxpc3QiLCJzb3J0UHJpY2UiLCJmbGFnIiwic29ydCIsImEiLCJiIiwicHJpY2UiLCJzb3J0U3RhciIsInN0YXIiLCJldmVudHMiLCJpbml0UGFnZSIsImdldENhdCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJyZXF1ZXN0IiwidGhlbiIsImNhdCIsIiRhcHBseSIsImxpc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdC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O0FBQUMsMkJBQU9BLEtBQUtzQixHQUFMLElBQVksT0FBS3ZDLFVBQXhCO0FBQW1DLG1CQUE1RCxDQUFoQjtBQUNBLHlCQUFLd0MsTUFBTDtBQUNELGlCQUpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPSUwsbUIsR0FBTSx5Qzs7QUFDVkMsK0JBQUtDLE9BQUwsQ0FBYUYsR0FBYixFQUFrQkcsSUFBbEIsQ0FBdUIsVUFBQ3ZCLEdBQUQsRUFBUztBQUM5QkosMEJBQVFDLEdBQVIsQ0FBWSxJQUFaLEVBQWlCRyxHQUFqQjtBQUNBLHlCQUFLakIsVUFBTCxDQUFnQjJDLElBQWhCLEdBQXVCMUIsSUFBSXJCLElBQTNCO0FBQ0EseUJBQUtLLGNBQUwsR0FBc0JnQixJQUFJckIsSUFBMUI7QUFDQSx5QkFBS0ksVUFBTCxDQUFnQkUsVUFBaEIsR0FBNkIsT0FBS0EsVUFBbEM7QUFDQSx5QkFBS3dDLE1BQUw7QUFDRCxpQkFORDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZIK0JKLGVBQUtNLEk7O2tCQUFuQmhFLEsiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFNpZGVUYWIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlX3RhYidcbiAgaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlTGlzdCdcbiAgaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcbiAgaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJ0J1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBmb29kTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb2RMaXN0J1xuICBpbXBvcnQgaWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXG5cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBvcmRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuoumkkOacjeWKoSdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlNpZGVUYWJcIjp7XCJ2LWJpbmQ6dGFiLnN5bmNcIjpcImNhdGVnb3JpZXNcIn0sXCJmb29kTGlzdFwiOntcInYtYmluZDpsaXN0LnN5bmNcIjpcImZvb2RMaXN0XCIsXCJ2LWJpbmQ6Y2hvb3NlTGlzdC5zeW5jXCI6XCJjaG9vc2VkTGlzdFwiLFwidi1iaW5kOmNhdExpc3Quc3luY1wiOlwiY2F0ZWdvcmllc0xpc3RcIixcInYtYmluZDpkZWFsTGlzdC5zeW5jXCI6XCJkZWFsTGlzdFwifSxcIlNlYXJjaEJhclwiOntcInR5cGVcIjpcInRhZ1wiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZWhvbGRlci5vbmNlXCI6XCJzZWFyY2hUZXh0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJDYXJ0XCI6e1widi1iaW5kOmZsYWcuc3luY1wiOlwiY2FydFNob3dcIixcInYtYmluZDpjaG9vc2VMaXN0LnN5bmNcIjpcImNob29zZWRMaXN0XCIsXCJ2LWJpbmQ6Y2F0TGlzdC5zeW5jXCI6XCJjYXRlZ29yaWVzTGlzdFwiLFwidi1iaW5kOmRlYWxMaXN0LnN5bmNcIjpcImRlYWxMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcIlNpZGVUYWJcIjp7XCJ2LW9uOmNoYW5nZVwiOlwic3dpdGNoVGFiXCJ9LFwiU2VhcmNoQmFyXCI6e1widi1vbjpzZWFyY2hcIjpcInNlYXJjaEZvb2RcIixcInYtb246Y2xlYXJcIjpcImNsZWFyU2VhcmNoXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTaWRlVGFiOlNpZGVUYWIsXG4gICAgICBpbWFnZUxpc3Q6aW1hZ2VMaXN0LFxuICAgICAgZm9vZExpc3Q6Zm9vZExpc3QsXG4gICAgICBTZWFyY2hCYXI6U2VhcmNoQmFyLFxuICAgICAgQ2FydDpDYXJ0LFxuICAgICAgaWNvbjppY29uXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbml0OnRydWUsXG4gICAgICBjYXJ0U2hvdzpmYWxzZSxcbiAgICAgIHNlYXJjaFRleHQ6J+ivt+i+k+WFpeWVhuWTgeWQjeensCcsXG4gICAgICBjYXRlZ29yaWVzOiB7fSxcbiAgICAgIGNhdGVnb3JpZXNMaXN0OltdLFxuICAgICAgZm9vZExpc3Q6W10sXG4gICAgICBzZWxlY3RlZElkOjEsXG4gICAgICBjaG9vc2VkTGlzdDpbXSwgLy/otK3nianovabpgInkuK3nmoToj5zlk4FcbiAgICAgIGRlYWxMaXN0OltdLCAvL2RlYWwgY2FydCBkYXRhXG4gICAgICBjdXJyZW50UHJpY2VTb3J0OjEsXG4gICAgICBjdXJyZW50U3RhclNvcnQ6MSxcbiAgICAgIGN1cnJlbnRTb3J0UnVsZTonJyxcbiAgICAgIHByaWNlU29ydEljb246J2ljb24tcGFpeHUtc2h1bGlhbmdzaGVuZ3h1JyxcbiAgICAgIHN0YXJTb3J0SWNvbjonaWNvbi1kaWFuemFuJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8vIOeCueWHu+WIhuexu1xuICAgICAgc3dpdGNoVGFiKHNlbGVjdGVkSWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRJZClcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gc2VsZWN0ZWRJZDtcbiAgICAgICAgdGhpcy5nZXRGb29kTGlzdCgpO1xuICAgICAgfSxcbiAgICAgIHNlYXJjaEZvb2QocmVzKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hcIixyZXMpO1xuICAgICAgICBpZihyZXMpe1xuICAgICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LmZpbHRlcigoaXRlbSk9PntcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUuaW5kZXhPZihyZXMpID4gLTE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiMTExMTFcIilcbiAgICAgICAgICB0aGlzLmdldEZvb2RMaXN0KClcbiAgICAgICAgfSAgICAgXG4gICAgICB9LFxuICAgICAgY2xlYXJTZWFyY2gocmVzKXtcbiAgICAgICAgICB0aGlzLmdldEZvb2RMaXN0KClcbiAgICAgIH0sXG4gICAgICBjbG9zZUxpc3QoKXtcbiAgICAgICAgdGhpcy5jYXJ0U2hvdyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIOS7t+agvOS8mOWFiFxuICAgICAgc29ydFByaWNlKCl7XG4gICAgICAgIGxldCBmbGFnID0gdGhpcy5jdXJyZW50UHJpY2VTb3J0IDtcbiAgICAgICAgY29uc29sZS5sb2coXCIxXCIsdGhpcy5jdXJyZW50UHJpY2VTb3J0KVxuICAgICAgICB0aGlzLmZvb2RMaXN0ID0gdGhpcy5mb29kTGlzdC5zb3J0KChhLGIpPT57XG4gICAgICAgICAgcmV0dXJuIGZsYWcgPT0gMSA/IGEucHJpY2UgPiBiLnByaWNlIDogYS5wcmljZSA8IGIucHJpY2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByaWNlU29ydEljb24gPSBmbGFnID09IDEgPyAnaWNvbi1wYWl4dS1zaHVsaWFuZ3NoZW5neHUnIDogJ2ljb24tcGFpeHUtc2h1bGlhbmdqaWFuZ3h1JyA7XG4gICAgICAgIHRoaXMuY3VycmVudFByaWNlU29ydCA9IChmbGFnID09IDEpID8gMiA6IDEgO1xuICAgICAgICB0aGlzLmN1cnJlbnRTb3J0UnVsZSA9ICdwcmljZSc7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCIyXCIsdGhpcy5jdXJyZW50UHJpY2VTb3J0KVxuXG4gICAgICB9LFxuICAgICAgLy8g5aW96K+E5LyY5YWIXG4gICAgICBzb3J0U3Rhcigpe1xuICAgICAgICBsZXQgZmxhZyA9IHRoaXMuY3VycmVudFN0YXJTb3J0IDtcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHRoaXMuZm9vZExpc3Quc29ydCgoYSxiKT0+e1xuICAgICAgICAgIHJldHVybiBmbGFnID09IDEgPyBhLnN0YXIgPCBiLnN0YXIgOmEuc3RhciA+IGIuc3RhcjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhclNvcnRJY29uID0gZmxhZyA9PSAxID8gJ2ljb24tZGlhbnphbicgOiAnaWNvbi16LW5vbGlrZScgO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGFyU29ydCA9IGZsYWcgPT0gMSA/IDIgOiAxIDtcbiAgICAgICAgdGhpcy5jdXJyZW50U29ydFJ1bGUgPSAnc3Rhcic7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlKClcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcbiAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKTtcbiAgICAgIHRoaXMuZ2V0Q2F0KCk7XG4gICAgfVxuICAgIHNlYXJjaCgpe1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3NlYXJjaFRhZydcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Rm9vZExpc3QoKXtcbiAgICAgIHZhciB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9mb29kL2dldF9mb29kXCJcbiAgICAgIHdlcHkucmVxdWVzdCh1cmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZvb2Q9Pj5cIixyZXMuZGF0YSk7XG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSByZXMuZGF0YS5maWx0ZXIoKGl0ZW0pPT57cmV0dXJuIGl0ZW0uY2F0ID09IHRoaXMuc2VsZWN0ZWRJZH0pO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q2F0KCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZm9vZC9nZXRfZm9vZF9jYXRcIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTFcIixyZXMpXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5saXN0ID0gcmVzLmRhdGE7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc0xpc3QgPSByZXMuZGF0YSA7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zZWxlY3RlZElkID0gdGhpcy5zZWxlY3RlZElkO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==