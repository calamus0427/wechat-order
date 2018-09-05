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
      console.log(options, options.list);
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
                  console.log("food=>>", res.data);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzTGlzdCIsInNlbGVjdGVkSWQiLCJjaG9vc2VkTGlzdCIsImRlYWxMaXN0IiwiY3VycmVudFByaWNlU29ydCIsImN1cnJlbnRTdGFyU29ydCIsImN1cnJlbnRTb3J0UnVsZSIsInByaWNlU29ydEljb24iLCJzdGFyU29ydEljb24iLCJzZWxlY3RWaWV3IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2Nyb2xsU2l0IiwicmVzIiwiY2F0Iiwic2VhcmNoRm9vZCIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiaW5kZXhPZiIsImZpbHRlciIsImdldEZvb2RMaXN0IiwiY2xlYXJTZWFyY2giLCJjbGVhciIsImNsb3NlTGlzdCIsInNvcnRQcmljZSIsImZsYWciLCJzb3J0IiwiYSIsImIiLCJwcmljZSIsInNvcnRTdGFyIiwic3RhciIsImV2ZW50cyIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsImluaXRQYWdlIiwiZ2V0Q2F0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2VweSIsInJlcXVlc3QiLCJ0aGVuIiwic3VtIiwiZmxpdGVyIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7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a0JHLElBQWxCLENBQXVCLFVBQUNoQyxHQUFELEVBQVM7QUFDOUJzQiwwQkFBUUMsR0FBUixDQUFZLElBQVosRUFBaUJ2QixHQUFqQjtBQUNBLHlCQUFLZixVQUFMLENBQWdCdUMsSUFBaEIsR0FBdUJ4QixJQUFJbkIsSUFBM0I7QUFDQSx5QkFBS0ssY0FBTCxHQUFzQmMsSUFBSW5CLElBQTFCO0FBQ0EseUJBQUtJLFVBQUwsQ0FBZ0JFLFVBQWhCLEdBQTZCLE9BQUtBLFVBQWxDO0FBQ0EseUJBQUtnRCxNQUFMO0FBQ0QsaUJBTkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1SStCTCxlQUFLTSxJOztrQkFBbkJ2RSxLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBTaWRlVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZV90YWInXG4gIGltcG9ydCBpbWFnZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZUxpc3QnXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXG4gIGltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2FydCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgZm9vZExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb29kTGlzdCdcbiAgaW1wb3J0IGljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLppJDmnI3liqEnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTaWRlVGFiXCI6e1widi1iaW5kOnRhYi5zeW5jXCI6XCJjYXRlZ29yaWVzXCJ9LFwiZm9vZExpc3RcIjp7XCJ2LWJpbmQ6dG9WaWV3LnN5bmNcIjpcInNlbGVjdFZpZXdcIixcImNsYXNzXCI6XCJnb29kcy1ib3hcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImZvb2RMaXN0XCIsXCJ2LWJpbmQ6Y2hvb3NlTGlzdC5zeW5jXCI6XCJjaG9vc2VkTGlzdFwiLFwidi1iaW5kOmNhdExpc3Quc3luY1wiOlwiY2F0ZWdvcmllc0xpc3RcIixcInYtYmluZDpkZWFsTGlzdC5zeW5jXCI6XCJkZWFsTGlzdFwifSxcIlNlYXJjaEJhclwiOntcInR5cGVcIjpcInRhZ1wiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZWhvbGRlci5vbmNlXCI6XCJzZWFyY2hUZXh0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJDYXJ0XCI6e1widi1iaW5kOmZsYWcuc3luY1wiOlwiY2FydFNob3dcIixcInYtYmluZDpjaG9vc2VMaXN0LnN5bmNcIjpcImNob29zZWRMaXN0XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJmb29kTGlzdFwiLFwidi1iaW5kOmNhdExpc3Quc3luY1wiOlwiY2F0ZWdvcmllc0xpc3RcIixcInYtYmluZDpkZWFsTGlzdC5zeW5jXCI6XCJkZWFsTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJTaWRlVGFiXCI6e1widi1vbjpjaGFuZ2VcIjpcInN3aXRjaFRhYlwifSxcImZvb2RMaXN0XCI6e1widi1vbjpzY3JvbGxcIjpcInNjcm9sbFNpdFwifSxcIlNlYXJjaEJhclwiOntcInYtb246c2VhcmNoXCI6XCJzZWFyY2hGb29kXCIsXCJ2LW9uOmNsZWFyXCI6XCJjbGVhclNlYXJjaFwifSxcIkNhcnRcIjp7XCJ2LW9uOmNsZWFyXCI6XCJjbGVhclwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2lkZVRhYjpTaWRlVGFiLFxuICAgICAgaW1hZ2VMaXN0OmltYWdlTGlzdCxcbiAgICAgIGZvb2RMaXN0OmZvb2RMaXN0LFxuICAgICAgU2VhcmNoQmFyOlNlYXJjaEJhcixcbiAgICAgIENhcnQ6Q2FydCxcbiAgICAgIGljb246aWNvblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5pdDp0cnVlLFxuICAgICAgY2FydFNob3c6ZmFsc2UsXG4gICAgICBzZWFyY2hUZXh0Oifor7fovpPlhaXllYblk4HlkI3np7AnLFxuICAgICAgY2F0ZWdvcmllczoge30sXG4gICAgICBjYXRlZ29yaWVzTGlzdDpbXSxcbiAgICAgIGZvb2RMaXN0OltdLFxuICAgICAgc2VsZWN0ZWRJZDoxLFxuICAgICAgY2hvb3NlZExpc3Q6W10sIC8v6LSt54mp6L2m6YCJ5Lit55qE6I+c5ZOBXG4gICAgICBkZWFsTGlzdDpbXSwgLy9kZWFsIGNhcnQgZGF0YVxuICAgICAgY3VycmVudFByaWNlU29ydDoxLFxuICAgICAgY3VycmVudFN0YXJTb3J0OjEsXG4gICAgICBjdXJyZW50U29ydFJ1bGU6JycsXG4gICAgICBwcmljZVNvcnRJY29uOidpY29uLXBhaXh1LXNodWxpYW5nc2hlbmd4dScsXG4gICAgICBzdGFyU29ydEljb246J2ljb24tZGlhbnphbicsXG4gICAgICBzZWxlY3RWaWV3OidhMSdcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8g54K55Ye75YiG57G7XG4gICAgICBzd2l0Y2hUYWIoc2VsZWN0ZWRJZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSBzZWxlY3RlZElkO1xuICAgICAgICB0aGlzLnNlbGVjdFZpZXcgPSAgICdhJytzZWxlY3RlZElkIFxuICAgICAgfSxcbiAgICAgIHNjcm9sbFNpdChyZXMpe1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc2VsZWN0ZWRJZCA9IHRoaXMuZm9vZExpc3RbcmVzXS5jYXQ7XG4gICAgICB9LFxuICAgICAgc2VhcmNoRm9vZChyZXMpe1xuICAgICAgICBpZihyZXMpe1xuICAgICAgICAgICB0aGlzLmZvb2RMaXN0Lm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgICBpZihpdGVtLm5hbWUuaW5kZXhPZihyZXMpID4gLTEpe1xuICAgICAgICAgICAgICAgaXRlbS5maWx0ZXIgPSBmYWxzZSA7XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICBpdGVtLmZpbHRlciA9IHRydWUgO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5nZXRGb29kTGlzdCgpXG4gICAgICAgIH0gICAgIFxuICAgICAgfSxcbiAgICAgIGNsZWFyU2VhcmNoKHJlcyl7XG4gICAgICAgICAgdGhpcy5mb29kTGlzdC5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICAgaXRlbS5maWx0ZXIgPSBmYWxzZSA7XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY2xlYXIoKXtcbiAgICAgICAgICB0aGlzLmdldEZvb2RMaXN0KClcbiAgICAgIH0sXG4gICAgICBjbG9zZUxpc3QoKXtcbiAgICAgICAgdGhpcy5jYXJ0U2hvdyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIOS7t+agvOS8mOWFiFxuICAgICAgc29ydFByaWNlKCl7XG4gICAgICAgIGxldCBmbGFnID0gdGhpcy5jdXJyZW50UHJpY2VTb3J0IDtcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHRoaXMuZm9vZExpc3Quc29ydCgoYSxiKT0+e1xuICAgICAgICAgIHJldHVybiBmbGFnID09IDEgPyBhLnByaWNlID4gYi5wcmljZSA6IGEucHJpY2UgPCBiLnByaWNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcmljZVNvcnRJY29uID0gZmxhZyA9PSAxID8gJ2ljb24tcGFpeHUtc2h1bGlhbmdzaGVuZ3h1JyA6ICdpY29uLXBhaXh1LXNodWxpYW5namlhbmd4dScgO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcmljZVNvcnQgPSAoZmxhZyA9PSAxKSA/IDIgOiAxIDtcbiAgICAgICAgdGhpcy5jdXJyZW50U29ydFJ1bGUgPSAncHJpY2UnO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc2VsZWN0ZWRJZCA9IHRoaXMuZm9vZExpc3RbMF0uY2F0O1xuXG4gICAgICB9LFxuICAgICAgLy8g5aW96K+E5LyY5YWIXG4gICAgICBzb3J0U3Rhcigpe1xuICAgICAgICBsZXQgZmxhZyA9IHRoaXMuY3VycmVudFN0YXJTb3J0IDtcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHRoaXMuZm9vZExpc3Quc29ydCgoYSxiKT0+e1xuICAgICAgICAgIHJldHVybiBmbGFnID09IDEgPyBhLnN0YXIgPCBiLnN0YXIgOmEuc3RhciA+IGIuc3RhcjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhclNvcnRJY29uID0gZmxhZyA9PSAxID8gJ2ljb24tZGlhbnphbicgOiAnaWNvbi16LW5vbGlrZScgO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGFyU29ydCA9IGZsYWcgPT0gMSA/IDIgOiAxIDtcbiAgICAgICAgdGhpcy5jdXJyZW50U29ydFJ1bGUgPSAnc3Rhcic7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zZWxlY3RlZElkID0gdGhpcy5mb29kTGlzdFswXS5jYXQ7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgY29uc29sZS5sb2cob3B0aW9ucyxvcHRpb25zLmxpc3QpXG4gICAgICBpZihvcHRpb25zLmxpc3Qpe1xuICAgICAgICBcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLmluaXRQYWdlKClcbiAgICAgIH1cbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcbiAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKTtcbiAgICAgIHRoaXMuZ2V0Q2F0KCk7XG4gICAgfVxuICAgIHNlYXJjaCgpe1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3NlYXJjaFRhZydcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Rm9vZExpc3QoKXtcbiAgICAgIHZhciB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9mb29kL2dldF9mb29kXCJcbiAgICAgIHdlcHkucmVxdWVzdCh1cmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZvb2Q9Pj5cIixyZXMuZGF0YSk7XG4gICAgICAgIHJlcy5kYXRhLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICBpdGVtLnN1bSA9IDAgO1xuICAgICAgICAgIGl0ZW0uZmxpdGVyID0gdHJ1ZSA7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSByZXMuZGF0YVxuICAgICAgICB0aGlzLmZvb2RMaXN0ID0gdGhpcy5mb29kTGlzdC5zb3J0KChhLGIpPT57XG4gICAgICAgICAgcmV0dXJuIGEuY2F0ID4gYi5jYXQ7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRoaXMuZm9vZExpc3QgPSByZXMuZGF0YS5maWx0ZXIoKGl0ZW0pPT57cmV0dXJuIGl0ZW0uY2F0ID09IHRoaXMuc2VsZWN0ZWRJZH0pO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q2F0KCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZm9vZC9nZXRfZm9vZF9jYXRcIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTFcIixyZXMpXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5saXN0ID0gcmVzLmRhdGE7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc0xpc3QgPSByZXMuZGF0YSA7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zZWxlY3RlZElkID0gdGhpcy5zZWxlY3RlZElkO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==