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
          this.foodList = this.foodList.filter(function (item) {
            return item.name.indexOf(res) > -1;
          });
        } else {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzTGlzdCIsInNlbGVjdGVkSWQiLCJjaG9vc2VkTGlzdCIsImRlYWxMaXN0IiwiY3VycmVudFByaWNlU29ydCIsImN1cnJlbnRTdGFyU29ydCIsImN1cnJlbnRTb3J0UnVsZSIsInByaWNlU29ydEljb24iLCJzdGFyU29ydEljb24iLCJzZWxlY3RWaWV3IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2Nyb2xsU2l0IiwicmVzIiwiY2F0Iiwic2VhcmNoRm9vZCIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwiaW5kZXhPZiIsImdldEZvb2RMaXN0IiwiY2xlYXJTZWFyY2giLCJjbGVhciIsImNsb3NlTGlzdCIsInNvcnRQcmljZSIsImZsYWciLCJzb3J0IiwiYSIsImIiLCJwcmljZSIsInNvcnRTdGFyIiwic3RhciIsImV2ZW50cyIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsImluaXRQYWdlIiwiZ2V0Q2F0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2VweSIsInJlcXVlc3QiLCJ0aGVuIiwibWFwIiwic3VtIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxN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eUJBQUtJLFVBQUwsQ0FBZ0JFLFVBQWhCLEdBQTZCLE9BQUtBLFVBQWxDO0FBQ0EseUJBQUsrQyxNQUFMO0FBQ0QsaUJBTkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFySStCTCxlQUFLTSxJOztrQkFBbkJ0RSxLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBTaWRlVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZV90YWInXG4gIGltcG9ydCBpbWFnZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZUxpc3QnXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXG4gIGltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2FydCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgZm9vZExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb29kTGlzdCdcbiAgaW1wb3J0IGljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLppJDmnI3liqEnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTaWRlVGFiXCI6e1widi1iaW5kOnRhYi5zeW5jXCI6XCJjYXRlZ29yaWVzXCJ9LFwiZm9vZExpc3RcIjp7XCJ2LWJpbmQ6dG9WaWV3LnN5bmNcIjpcInNlbGVjdFZpZXdcIixcImNsYXNzXCI6XCJnb29kcy1ib3hcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImZvb2RMaXN0XCIsXCJ2LWJpbmQ6Y2hvb3NlTGlzdC5zeW5jXCI6XCJjaG9vc2VkTGlzdFwiLFwidi1iaW5kOmNhdExpc3Quc3luY1wiOlwiY2F0ZWdvcmllc0xpc3RcIixcInYtYmluZDpkZWFsTGlzdC5zeW5jXCI6XCJkZWFsTGlzdFwifSxcIlNlYXJjaEJhclwiOntcInR5cGVcIjpcInRhZ1wiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZWhvbGRlci5vbmNlXCI6XCJzZWFyY2hUZXh0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJDYXJ0XCI6e1widi1iaW5kOmZsYWcuc3luY1wiOlwiY2FydFNob3dcIixcInYtYmluZDpjaG9vc2VMaXN0LnN5bmNcIjpcImNob29zZWRMaXN0XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJmb29kTGlzdFwiLFwidi1iaW5kOmNhdExpc3Quc3luY1wiOlwiY2F0ZWdvcmllc0xpc3RcIixcInYtYmluZDpkZWFsTGlzdC5zeW5jXCI6XCJkZWFsTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJTaWRlVGFiXCI6e1widi1vbjpjaGFuZ2VcIjpcInN3aXRjaFRhYlwifSxcImZvb2RMaXN0XCI6e1widi1vbjpzY3JvbGxcIjpcInNjcm9sbFNpdFwifSxcIlNlYXJjaEJhclwiOntcInYtb246c2VhcmNoXCI6XCJzZWFyY2hGb29kXCIsXCJ2LW9uOmNsZWFyXCI6XCJjbGVhclNlYXJjaFwifSxcIkNhcnRcIjp7XCJ2LW9uOmNsZWFyXCI6XCJjbGVhclwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2lkZVRhYjpTaWRlVGFiLFxuICAgICAgaW1hZ2VMaXN0OmltYWdlTGlzdCxcbiAgICAgIGZvb2RMaXN0OmZvb2RMaXN0LFxuICAgICAgU2VhcmNoQmFyOlNlYXJjaEJhcixcbiAgICAgIENhcnQ6Q2FydCxcbiAgICAgIGljb246aWNvblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5pdDp0cnVlLFxuICAgICAgY2FydFNob3c6ZmFsc2UsXG4gICAgICBzZWFyY2hUZXh0Oifor7fovpPlhaXllYblk4HlkI3np7AnLFxuICAgICAgY2F0ZWdvcmllczoge30sXG4gICAgICBjYXRlZ29yaWVzTGlzdDpbXSxcbiAgICAgIGZvb2RMaXN0OltdLFxuICAgICAgc2VsZWN0ZWRJZDoxLFxuICAgICAgY2hvb3NlZExpc3Q6W10sIC8v6LSt54mp6L2m6YCJ5Lit55qE6I+c5ZOBXG4gICAgICBkZWFsTGlzdDpbXSwgLy9kZWFsIGNhcnQgZGF0YVxuICAgICAgY3VycmVudFByaWNlU29ydDoxLFxuICAgICAgY3VycmVudFN0YXJTb3J0OjEsXG4gICAgICBjdXJyZW50U29ydFJ1bGU6JycsXG4gICAgICBwcmljZVNvcnRJY29uOidpY29uLXBhaXh1LXNodWxpYW5nc2hlbmd4dScsXG4gICAgICBzdGFyU29ydEljb246J2ljb24tZGlhbnphbicsXG4gICAgICBzZWxlY3RWaWV3OidhMSdcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8g54K55Ye75YiG57G7XG4gICAgICBzd2l0Y2hUYWIoc2VsZWN0ZWRJZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSBzZWxlY3RlZElkO1xuICAgICAgICB0aGlzLnNlbGVjdFZpZXcgPSAgICdhJytzZWxlY3RlZElkIFxuICAgICAgfSxcbiAgICAgIHNjcm9sbFNpdChyZXMpe1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc2VsZWN0ZWRJZCA9IHRoaXMuZm9vZExpc3RbcmVzXS5jYXQ7XG4gICAgICB9LFxuICAgICAgc2VhcmNoRm9vZChyZXMpe1xuICAgICAgICBpZihyZXMpe1xuICAgICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LmZpbHRlcigoaXRlbSk9PntcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUuaW5kZXhPZihyZXMpID4gLTE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKVxuICAgICAgICB9ICAgICBcbiAgICAgIH0sXG4gICAgICBjbGVhclNlYXJjaChyZXMpe1xuICAgICAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKVxuICAgICAgfSxcbiAgICAgIGNsZWFyKCl7XG4gICAgICAgICAgdGhpcy5nZXRGb29kTGlzdCgpXG4gICAgICB9LFxuICAgICAgY2xvc2VMaXN0KCl7XG4gICAgICAgIHRoaXMuY2FydFNob3cgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICAvLyDku7fmoLzkvJjlhYhcbiAgICAgIHNvcnRQcmljZSgpe1xuICAgICAgICBsZXQgZmxhZyA9IHRoaXMuY3VycmVudFByaWNlU29ydCA7XG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LnNvcnQoKGEsYik9PntcbiAgICAgICAgICByZXR1cm4gZmxhZyA9PSAxID8gYS5wcmljZSA+IGIucHJpY2UgOiBhLnByaWNlIDwgYi5wcmljZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJpY2VTb3J0SWNvbiA9IGZsYWcgPT0gMSA/ICdpY29uLXBhaXh1LXNodWxpYW5nc2hlbmd4dScgOiAnaWNvbi1wYWl4dS1zaHVsaWFuZ2ppYW5neHUnIDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJpY2VTb3J0ID0gKGZsYWcgPT0gMSkgPyAyIDogMSA7XG4gICAgICAgIHRoaXMuY3VycmVudFNvcnRSdWxlID0gJ3ByaWNlJztcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnNlbGVjdGVkSWQgPSB0aGlzLmZvb2RMaXN0WzBdLmNhdDtcblxuICAgICAgfSxcbiAgICAgIC8vIOWlveivhOS8mOWFiFxuICAgICAgc29ydFN0YXIoKXtcbiAgICAgICAgbGV0IGZsYWcgPSB0aGlzLmN1cnJlbnRTdGFyU29ydCA7XG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LnNvcnQoKGEsYik9PntcbiAgICAgICAgICByZXR1cm4gZmxhZyA9PSAxID8gYS5zdGFyIDwgYi5zdGFyIDphLnN0YXIgPiBiLnN0YXI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJTb3J0SWNvbiA9IGZsYWcgPT0gMSA/ICdpY29uLWRpYW56YW4nIDogJ2ljb24tei1ub2xpa2UnIDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhclNvcnQgPSBmbGFnID09IDEgPyAyIDogMSA7XG4gICAgICAgIHRoaXMuY3VycmVudFNvcnRSdWxlID0gJ3N0YXInO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc2VsZWN0ZWRJZCA9IHRoaXMuZm9vZExpc3RbMF0uY2F0O1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMsb3B0aW9ucy5saXN0KVxuICAgICAgaWYob3B0aW9ucy5saXN0KXtcbiAgICAgICAgXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5pbml0UGFnZSgpXG4gICAgICB9XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgfVxuICAgIGluaXRQYWdlKCl7XG4gICAgICB0aGlzLmdldEZvb2RMaXN0KCk7XG4gICAgICB0aGlzLmdldENhdCgpO1xuICAgIH1cbiAgICBzZWFyY2goKXtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9zZWFyY2hUYWcnXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGdldEZvb2RMaXN0KCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZm9vZC9nZXRfZm9vZFwiXG4gICAgICB3ZXB5LnJlcXVlc3QodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmb29kPT4+XCIscmVzLmRhdGEpO1xuICAgICAgICByZXMuZGF0YS5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgaXRlbS5zdW0gPSAwIDtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHJlcy5kYXRhXG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LnNvcnQoKGEsYik9PntcbiAgICAgICAgICByZXR1cm4gYS5jYXQgPiBiLmNhdDtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gdGhpcy5mb29kTGlzdCA9IHJlcy5kYXRhLmZpbHRlcigoaXRlbSk9PntyZXR1cm4gaXRlbS5jYXQgPT0gdGhpcy5zZWxlY3RlZElkfSk7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9KVxuICAgIH1cbiAgICBhc3luYyBnZXRDYXQoKXtcbiAgICAgIHZhciB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9mb29kL2dldF9mb29kX2NhdFwiXG4gICAgICB3ZXB5LnJlcXVlc3QodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCIxMVwiLHJlcylcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLmxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzTGlzdCA9IHJlcy5kYXRhIDtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnNlbGVjdGVkSWQgPSB0aGlzLnNlbGVjdGVkSWQ7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19