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
      currentStarSort: 1
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
            return item.name == res;
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
      sortPrice: function sortPrice() {
        var flag = this.currentPriceSort;
        console.log("1", this.currentPriceSort);
        this.foodList = this.foodList.sort(function (a, b) {
          return flag == 1 ? a.price > b.price : a.price < b.price;
        });
        this.currentPriceSort = flag == 1 ? 2 : 1;
        console.log("2", this.currentPriceSort);
      },
      sortStar: function sortStar() {
        var flag = this.currentStarSort;
        this.foodList = this.foodList.sort(function (a, b) {
          return flag == 1 ? a.star < b.star : a.star > b.star;
        });
        this.currentStarSort = flag == 1 ? 2 : 1;
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
                    return item.id == _this2.selectedId;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzTGlzdCIsInNlbGVjdGVkSWQiLCJjaG9vc2VkTGlzdCIsImRlYWxMaXN0IiwiY3VycmVudFByaWNlU29ydCIsImN1cnJlbnRTdGFyU29ydCIsImNvbXB1dGVkIiwibWV0aG9kcyIsInN3aXRjaFRhYiIsImNvbnNvbGUiLCJsb2ciLCJnZXRGb29kTGlzdCIsInNlYXJjaEZvb2QiLCJyZXMiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsImNsZWFyU2VhcmNoIiwiY2xvc2VMaXN0Iiwic29ydFByaWNlIiwiZmxhZyIsInNvcnQiLCJhIiwiYiIsInByaWNlIiwic29ydFN0YXIiLCJzdGFyIiwiZXZlbnRzIiwiaW5pdFBhZ2UiLCJnZXRDYXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwicmVxdWVzdCIsInRoZW4iLCJpZCIsIiRhcHBseSIsImxpc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLG1CQUFrQixZ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Q0EseUJBQUtJLFVBQUwsQ0FBZ0JFLFVBQWhCLEdBQTZCLE9BQUtBLFVBQWxDO0FBQ0EseUJBQUtvQyxNQUFMO0FBQ0QsaUJBTkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1RytCSixlQUFLTSxJOztrQkFBbkI1RCxLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBTaWRlVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZV90YWInXG4gIGltcG9ydCBpbWFnZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZUxpc3QnXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXG4gIGltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2FydCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgZm9vZExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb29kTGlzdCdcbiAgaW1wb3J0IGljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLppJDmnI3liqEnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTaWRlVGFiXCI6e1widi1iaW5kOnRhYi5zeW5jXCI6XCJjYXRlZ29yaWVzXCJ9LFwiZm9vZExpc3RcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJmb29kTGlzdFwiLFwidi1iaW5kOmNob29zZUxpc3Quc3luY1wiOlwiY2hvb3NlZExpc3RcIixcInYtYmluZDpjYXRMaXN0LnN5bmNcIjpcImNhdGVnb3JpZXNMaXN0XCIsXCJ2LWJpbmQ6ZGVhbExpc3Quc3luY1wiOlwiZGVhbExpc3RcIn0sXCJTZWFyY2hCYXJcIjp7XCJ0eXBlXCI6XCJ0YWdcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwiQ2FydFwiOntcInYtYmluZDpmbGFnLnN5bmNcIjpcImNhcnRTaG93XCIsXCJ2LWJpbmQ6Y2hvb3NlTGlzdC5zeW5jXCI6XCJjaG9vc2VkTGlzdFwiLFwidi1iaW5kOmNhdExpc3Quc3luY1wiOlwiY2F0ZWdvcmllc0xpc3RcIixcInYtYmluZDpkZWFsTGlzdC5zeW5jXCI6XCJkZWFsTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJTaWRlVGFiXCI6e1widi1vbjpjaGFuZ2VcIjpcInN3aXRjaFRhYlwifSxcIlNlYXJjaEJhclwiOntcInYtb246c2VhcmNoXCI6XCJzZWFyY2hGb29kXCIsXCJ2LW9uOmNsZWFyXCI6XCJjbGVhclNlYXJjaFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2lkZVRhYjpTaWRlVGFiLFxuICAgICAgaW1hZ2VMaXN0OmltYWdlTGlzdCxcbiAgICAgIGZvb2RMaXN0OmZvb2RMaXN0LFxuICAgICAgU2VhcmNoQmFyOlNlYXJjaEJhcixcbiAgICAgIENhcnQ6Q2FydCxcbiAgICAgIGljb246aWNvblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5pdDp0cnVlLFxuICAgICAgY2FydFNob3c6ZmFsc2UsXG4gICAgICBzZWFyY2hUZXh0Oifor7fovpPlhaXllYblk4HlkI3np7AnLFxuICAgICAgY2F0ZWdvcmllczoge30sXG4gICAgICBjYXRlZ29yaWVzTGlzdDpbXSxcbiAgICAgIGZvb2RMaXN0OltdLFxuICAgICAgc2VsZWN0ZWRJZDoxLFxuICAgICAgY2hvb3NlZExpc3Q6W10sIC8v6LSt54mp6L2m6YCJ5Lit55qE6I+c5ZOBXG4gICAgICBkZWFsTGlzdDpbXSwgLy9kZWFsIGNhcnQgZGF0YVxuICAgICAgY3VycmVudFByaWNlU29ydDoxLFxuICAgICAgY3VycmVudFN0YXJTb3J0OjFcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvLyDngrnlh7vliIbnsbtcbiAgICAgIHN3aXRjaFRhYihzZWxlY3RlZElkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkSWQpXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJZCA9IHNlbGVjdGVkSWQ7XG4gICAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKTtcbiAgICAgIH0sXG4gICAgICBzZWFyY2hGb29kKHJlcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoXCIscmVzKTtcbiAgICAgICAgaWYocmVzKXtcbiAgICAgICAgICB0aGlzLmZvb2RMaXN0ID0gdGhpcy5mb29kTGlzdC5maWx0ZXIoKGl0ZW0pPT57XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lID09IHJlcztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgY29uc29sZS5sb2coXCIxMTExMVwiKVxuICAgICAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKVxuICAgICAgICB9ICAgICBcbiAgICAgIH0sXG4gICAgICBjbGVhclNlYXJjaChyZXMpe1xuICAgICAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKVxuICAgICAgfSxcbiAgICAgIGNsb3NlTGlzdCgpe1xuICAgICAgICB0aGlzLmNhcnRTaG93ID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgc29ydFByaWNlKCl7XG4gICAgICAgIGxldCBmbGFnID0gdGhpcy5jdXJyZW50UHJpY2VTb3J0IDtcbiAgICAgICAgY29uc29sZS5sb2coXCIxXCIsdGhpcy5jdXJyZW50UHJpY2VTb3J0KVxuICAgICAgICB0aGlzLmZvb2RMaXN0ID0gdGhpcy5mb29kTGlzdC5zb3J0KChhLGIpPT57XG4gICAgICAgICAgcmV0dXJuIGZsYWcgPT0gMSA/IGEucHJpY2UgPiBiLnByaWNlIDogYS5wcmljZSA8IGIucHJpY2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcmljZVNvcnQgPSAoZmxhZyA9PSAxKSA/IDIgOiAxIDtcbiAgICAgICAgY29uc29sZS5sb2coXCIyXCIsdGhpcy5jdXJyZW50UHJpY2VTb3J0KVxuXG4gICAgICB9LFxuICAgICAgc29ydFN0YXIoKXtcbiAgICAgICAgbGV0IGZsYWcgPSB0aGlzLmN1cnJlbnRTdGFyU29ydCA7XG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LnNvcnQoKGEsYik9PntcbiAgICAgICAgICByZXR1cm4gZmxhZyA9PSAxID8gYS5zdGFyIDwgYi5zdGFyIDphLnN0YXIgPiBiLnN0YXI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGFyU29ydCA9IGZsYWcgPT0gMSA/IDIgOiAxIDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlKClcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcbiAgICAgIHRoaXMuZ2V0Rm9vZExpc3QoKTtcbiAgICAgIHRoaXMuZ2V0Q2F0KCk7XG4gICAgfVxuICAgIHNlYXJjaCgpe1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3NlYXJjaFRhZydcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Rm9vZExpc3QoKXtcbiAgICAgIHZhciB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9mb29kL2dldF9mb29kXCJcbiAgICAgIHdlcHkucmVxdWVzdCh1cmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZvb2Q9Pj5cIixyZXMuZGF0YSlcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHJlcy5kYXRhLmZpbHRlcigoaXRlbSk9PntyZXR1cm4gaXRlbS5pZCA9PSB0aGlzLnNlbGVjdGVkSWR9KTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGdldENhdCgpe1xuICAgICAgdmFyIHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Zvb2QvZ2V0X2Zvb2RfY2F0XCJcbiAgICAgIHdlcHkucmVxdWVzdCh1cmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIjExXCIscmVzKVxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMubGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNMaXN0ID0gcmVzLmRhdGEgO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc2VsZWN0ZWRJZCA9IHRoaXMuc2VsZWN0ZWRJZDtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=