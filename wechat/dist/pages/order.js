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

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _wepyRedux.getStore)();

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
    key: 'onShow',
    value: function onShow() {
      console.log("user", store, "111", _wepy2.default.$instance.globalData);
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
                url = "http://http://yapi.demo.qunar.com/mock/16780//food/get_food";

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
                url = "http://http://yapi.demo.qunar.com/mock/16780//food/get_food_cat";

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwib3JkZXIiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTaWRlVGFiIiwiaW1hZ2VMaXN0IiwiZm9vZExpc3QiLCJTZWFyY2hCYXIiLCJDYXJ0IiwiaWNvbiIsImRhdGEiLCJpbml0IiwiY2FydFNob3ciLCJzZWFyY2hUZXh0IiwiY2F0ZWdvcmllcyIsImNhdGVnb3JpZXNMaXN0Iiwic2VsZWN0ZWRJZCIsImNob29zZWRMaXN0IiwiZGVhbExpc3QiLCJjdXJyZW50UHJpY2VTb3J0IiwiY3VycmVudFN0YXJTb3J0IiwiY3VycmVudFNvcnRSdWxlIiwicHJpY2VTb3J0SWNvbiIsInN0YXJTb3J0SWNvbiIsInNlbGVjdFZpZXciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzd2l0Y2hUYWIiLCJzY3JvbGxTaXQiLCJyZXMiLCJjYXQiLCJzZWFyY2hGb29kIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJpbmRleE9mIiwiZmlsdGVyIiwiZ2V0Rm9vZExpc3QiLCJjbGVhclNlYXJjaCIsImNsZWFyIiwiY2xvc2VMaXN0Iiwic29ydFByaWNlIiwiZmxhZyIsInNvcnQiLCJhIiwiYiIsInByaWNlIiwic29ydFN0YXIiLCJzdGFyIiwiZXZlbnRzIiwib3B0aW9ucyIsImxpc3QiLCJpbml0UGFnZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImdldENhdCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInJlcXVlc3QiLCJ0aGVuIiwic3VtIiwiZmxpdGVyIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7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Y0lMLG1CLEdBQU0saUU7O0FBQ1ZOLCtCQUFLTyxPQUFMLENBQWFELEdBQWIsRUFBa0JFLElBQWxCLENBQXVCLFVBQUNsQyxHQUFELEVBQVM7QUFDOUIseUJBQUtmLFVBQUwsQ0FBZ0JxQyxJQUFoQixHQUF1QnRCLElBQUluQixJQUEzQjtBQUNBLHlCQUFLSyxjQUFMLEdBQXNCYyxJQUFJbkIsSUFBMUI7QUFDQSx5QkFBS0ksVUFBTCxDQUFnQkUsVUFBaEIsR0FBNkIsT0FBS0EsVUFBbEM7QUFDQSx5QkFBS2tELE1BQUw7QUFDRCxpQkFMRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNJK0JYLGVBQUtZLEk7O2tCQUFuQnpFLEsiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFNpZGVUYWIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlX3RhYidcbiAgaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlTGlzdCdcbiAgaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcbiAgaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJ0J1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBmb29kTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb2RMaXN0J1xuICBpbXBvcnQgaWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXG5cbmltcG9ydCB7IGdldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcblxuY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLppJDmnI3liqEnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTaWRlVGFiXCI6e1widi1iaW5kOnRhYi5zeW5jXCI6XCJjYXRlZ29yaWVzXCJ9LFwiZm9vZExpc3RcIjp7XCJ2LWJpbmQ6dG9WaWV3LnN5bmNcIjpcInNlbGVjdFZpZXdcIixcImNsYXNzXCI6XCJnb29kcy1ib3hcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImZvb2RMaXN0XCIsXCJ2LWJpbmQ6Y2hvb3NlTGlzdC5zeW5jXCI6XCJjaG9vc2VkTGlzdFwiLFwidi1iaW5kOmNhdExpc3Quc3luY1wiOlwiY2F0ZWdvcmllc0xpc3RcIixcInYtYmluZDpkZWFsTGlzdC5zeW5jXCI6XCJkZWFsTGlzdFwifSxcIlNlYXJjaEJhclwiOntcInR5cGVcIjpcInRhZ1wiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZWhvbGRlci5vbmNlXCI6XCJzZWFyY2hUZXh0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJDYXJ0XCI6e1widi1iaW5kOmZsYWcuc3luY1wiOlwiY2FydFNob3dcIixcInYtYmluZDpjaG9vc2VMaXN0LnN5bmNcIjpcImNob29zZWRMaXN0XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJmb29kTGlzdFwiLFwidi1iaW5kOmNhdExpc3Quc3luY1wiOlwiY2F0ZWdvcmllc0xpc3RcIixcInYtYmluZDpkZWFsTGlzdC5zeW5jXCI6XCJkZWFsTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJTaWRlVGFiXCI6e1widi1vbjpjaGFuZ2VcIjpcInN3aXRjaFRhYlwifSxcImZvb2RMaXN0XCI6e1widi1vbjpzY3JvbGxcIjpcInNjcm9sbFNpdFwifSxcIlNlYXJjaEJhclwiOntcInYtb246c2VhcmNoXCI6XCJzZWFyY2hGb29kXCIsXCJ2LW9uOmNsZWFyXCI6XCJjbGVhclNlYXJjaFwifSxcIkNhcnRcIjp7XCJ2LW9uOmNsZWFyXCI6XCJjbGVhclwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2lkZVRhYjpTaWRlVGFiLFxuICAgICAgaW1hZ2VMaXN0OmltYWdlTGlzdCxcbiAgICAgIGZvb2RMaXN0OmZvb2RMaXN0LFxuICAgICAgU2VhcmNoQmFyOlNlYXJjaEJhcixcbiAgICAgIENhcnQ6Q2FydCxcbiAgICAgIGljb246aWNvblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5pdDp0cnVlLFxuICAgICAgY2FydFNob3c6ZmFsc2UsXG4gICAgICBzZWFyY2hUZXh0Oifor7fovpPlhaXllYblk4HlkI3np7AnLFxuICAgICAgY2F0ZWdvcmllczoge30sXG4gICAgICBjYXRlZ29yaWVzTGlzdDpbXSxcbiAgICAgIGZvb2RMaXN0OltdLFxuICAgICAgc2VsZWN0ZWRJZDoxLFxuICAgICAgY2hvb3NlZExpc3Q6W10sIC8v6LSt54mp6L2m6YCJ5Lit55qE6I+c5ZOBXG4gICAgICBkZWFsTGlzdDpbXSwgLy9kZWFsIGNhcnQgZGF0YVxuICAgICAgY3VycmVudFByaWNlU29ydDoxLFxuICAgICAgY3VycmVudFN0YXJTb3J0OjEsXG4gICAgICBjdXJyZW50U29ydFJ1bGU6JycsXG4gICAgICBwcmljZVNvcnRJY29uOidpY29uLXBhaXh1LXNodWxpYW5nc2hlbmd4dScsXG4gICAgICBzdGFyU29ydEljb246J2ljb24tZGlhbnphbicsXG4gICAgICBzZWxlY3RWaWV3OidhMSdcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8g54K55Ye75YiG57G7XG4gICAgICBzd2l0Y2hUYWIoc2VsZWN0ZWRJZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSBzZWxlY3RlZElkO1xuICAgICAgICB0aGlzLnNlbGVjdFZpZXcgPSAgICdhJytzZWxlY3RlZElkIFxuICAgICAgfSxcbiAgICAgIHNjcm9sbFNpdChyZXMpe1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc2VsZWN0ZWRJZCA9IHRoaXMuZm9vZExpc3RbcmVzXS5jYXQ7XG4gICAgICB9LFxuICAgICAgc2VhcmNoRm9vZChyZXMpe1xuICAgICAgICBpZihyZXMpe1xuICAgICAgICAgICB0aGlzLmZvb2RMaXN0Lm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgICBpZihpdGVtLm5hbWUuaW5kZXhPZihyZXMpID4gLTEpe1xuICAgICAgICAgICAgICAgaXRlbS5maWx0ZXIgPSBmYWxzZSA7XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICBpdGVtLmZpbHRlciA9IHRydWUgO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5nZXRGb29kTGlzdCgpXG4gICAgICAgIH0gICAgIFxuICAgICAgfSxcbiAgICAgIGNsZWFyU2VhcmNoKHJlcyl7XG4gICAgICAgICAgdGhpcy5mb29kTGlzdC5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICAgaXRlbS5maWx0ZXIgPSBmYWxzZSA7XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY2xlYXIoKXtcbiAgICAgICAgICB0aGlzLmdldEZvb2RMaXN0KClcbiAgICAgIH0sXG4gICAgICBjbG9zZUxpc3QoKXtcbiAgICAgICAgdGhpcy5jYXJ0U2hvdyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIOS7t+agvOS8mOWFiFxuICAgICAgc29ydFByaWNlKCl7XG4gICAgICAgIGxldCBmbGFnID0gdGhpcy5jdXJyZW50UHJpY2VTb3J0IDtcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHRoaXMuZm9vZExpc3Quc29ydCgoYSxiKT0+e1xuICAgICAgICAgIHJldHVybiBmbGFnID09IDEgPyBhLnByaWNlID4gYi5wcmljZSA6IGEucHJpY2UgPCBiLnByaWNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcmljZVNvcnRJY29uID0gZmxhZyA9PSAxID8gJ2ljb24tcGFpeHUtc2h1bGlhbmdzaGVuZ3h1JyA6ICdpY29uLXBhaXh1LXNodWxpYW5namlhbmd4dScgO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcmljZVNvcnQgPSAoZmxhZyA9PSAxKSA/IDIgOiAxIDtcbiAgICAgICAgdGhpcy5jdXJyZW50U29ydFJ1bGUgPSAncHJpY2UnO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc2VsZWN0ZWRJZCA9IHRoaXMuZm9vZExpc3RbMF0uY2F0O1xuXG4gICAgICB9LFxuICAgICAgLy8g5aW96K+E5LyY5YWIXG4gICAgICBzb3J0U3Rhcigpe1xuICAgICAgICBsZXQgZmxhZyA9IHRoaXMuY3VycmVudFN0YXJTb3J0IDtcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHRoaXMuZm9vZExpc3Quc29ydCgoYSxiKT0+e1xuICAgICAgICAgIHJldHVybiBmbGFnID09IDEgPyBhLnN0YXIgPCBiLnN0YXIgOmEuc3RhciA+IGIuc3RhcjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhclNvcnRJY29uID0gZmxhZyA9PSAxID8gJ2ljb24tZGlhbnphbicgOiAnaWNvbi16LW5vbGlrZScgO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGFyU29ydCA9IGZsYWcgPT0gMSA/IDIgOiAxIDtcbiAgICAgICAgdGhpcy5jdXJyZW50U29ydFJ1bGUgPSAnc3Rhcic7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zZWxlY3RlZElkID0gdGhpcy5mb29kTGlzdFswXS5jYXQ7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgaWYob3B0aW9ucy5saXN0KXtcbiAgICAgICAgXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5pbml0UGFnZSgpXG4gICAgICB9XG4gICAgfVxuICAgIG9uU2hvdygpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlclwiLHN0b3JlLFwiMTExXCIsd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YSlcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcbiAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKTtcbiAgICAgIHRoaXMuZ2V0Q2F0KCk7XG4gICAgfVxuICAgIHNlYXJjaCgpe1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3NlYXJjaFRhZydcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Rm9vZExpc3QoKXtcbiAgICAgIHZhciB1cmwgPSBcImh0dHA6Ly9odHRwOi8veWFwaS5kZW1vLnF1bmFyLmNvbS9tb2NrLzE2NzgwLy9mb29kL2dldF9mb29kXCJcbiAgICAgIHdlcHkucmVxdWVzdCh1cmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXMuZGF0YS5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgaXRlbS5zdW0gPSAwIDtcbiAgICAgICAgICBpdGVtLmZsaXRlciA9IHRydWUgO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmZvb2RMaXN0ID0gcmVzLmRhdGFcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHRoaXMuZm9vZExpc3Quc29ydCgoYSxiKT0+e1xuICAgICAgICAgIHJldHVybiBhLmNhdCA+IGIuY2F0O1xuICAgICAgICB9KVxuICAgICAgICAvLyB0aGlzLmZvb2RMaXN0ID0gcmVzLmRhdGEuZmlsdGVyKChpdGVtKT0+e3JldHVybiBpdGVtLmNhdCA9PSB0aGlzLnNlbGVjdGVkSWR9KTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGdldENhdCgpe1xuICAgICAgdmFyIHVybCA9IFwiaHR0cDovL2h0dHA6Ly95YXBpLmRlbW8ucXVuYXIuY29tL21vY2svMTY3ODAvL2Zvb2QvZ2V0X2Zvb2RfY2F0XCJcbiAgICAgIHdlcHkucmVxdWVzdCh1cmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMubGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNMaXN0ID0gcmVzLmRhdGEgO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc2VsZWN0ZWRJZCA9IHRoaXMuc2VsZWN0ZWRJZDtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=