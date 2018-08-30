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
    }, _this.$repeat = {}, _this.$props = { "SideTab": { "v-bind:tab.sync": "categories", "xmlns:v-on": "" }, "foodList": { "v-bind:list.sync": "foodList", "v-bind:chooseList.sync": "choosedList", "v-bind:catList.sync": "categoriesList", "v-bind:dealList.sync": "dealList" }, "SearchBar": { "type": "tag", "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText" }, "Cart": { "v-bind:flag.sync": "cartShow", "v-bind:chooseList.sync": "choosedList", "v-bind:catList.sync": "categoriesList", "v-bind:dealList.sync": "dealList" } }, _this.$events = { "SideTab": { "v-on:change": "switchTab" } }, _this.components = {
      SideTab: _side_tab2.default,
      imageList: _imageList2.default,
      foodList: _foodList2.default,
      SearchBar: _searchbar2.default,
      Cart: _cart2.default,
      icon: _icon2.default
    }, _this.mixins = [], _this.data = {
      init: true,
      cartShow: false,
      searchText: '请输入商品名称或分类',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzTGlzdCIsInNlbGVjdGVkSWQiLCJjaG9vc2VkTGlzdCIsImRlYWxMaXN0IiwiY3VycmVudFByaWNlU29ydCIsImN1cnJlbnRTdGFyU29ydCIsImNvbXB1dGVkIiwibWV0aG9kcyIsInN3aXRjaFRhYiIsImNvbnNvbGUiLCJsb2ciLCJnZXRGb29kTGlzdCIsImNsb3NlTGlzdCIsInNvcnRQcmljZSIsImZsYWciLCJzb3J0IiwiYSIsImIiLCJwcmljZSIsInNvcnRTdGFyIiwic3RhciIsImV2ZW50cyIsImluaXRQYWdlIiwiZ2V0Q2F0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2VweSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzIiwiZmlsdGVyIiwiaXRlbSIsImlkIiwiJGFwcGx5IiwibGlzdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsbUJBQWtCLFlBQW5CLEVBQWdDLGNBQWEsRUFBN0MsRUFBWCxFQUE0RCxZQUFXLEVBQUMsb0JBQW1CLFVBQXBCLEVBQStCLDBCQUF5QixhQUF4RCxFQUFzRSx1QkFBc0IsZ0JBQTVGLEVBQTZHLHdCQUF1QixVQUFwSSxFQUF2RSxFQUF1TixhQUFZLEVBQUMsUUFBTyxLQUFSLEVBQWMsZ0JBQWUsRUFBN0IsRUFBZ0MsMkJBQTBCLFlBQTFELEVBQW5PLEVBQTJTLFFBQU8sRUFBQyxvQkFBbUIsVUFBcEIsRUFBK0IsMEJBQXlCLGFBQXhELEVBQXNFLHVCQUFzQixnQkFBNUYsRUFBNkcsd0JBQXVCLFVBQXBJLEVBQWxULEUsUUFDVEMsTyxHQUFVLEVBQUMsV0FBVSxFQUFDLGVBQWMsV0FBZixFQUFYLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGVBQVFBLGtCQURBO0FBRVJDLGlCQUFVQSxtQkFGRjtBQUdSQyxnQkFBU0Esa0JBSEQ7QUFJUkMsaUJBQVVBLG1CQUpGO0FBS1JDLFlBQUtBLGNBTEc7QUFNUkMsWUFBS0E7QUFORyxLLFFBU1ZkLE0sR0FBUyxFLFFBRVRlLEksR0FBTztBQUNMQyxZQUFLLElBREE7QUFFTEMsZ0JBQVMsS0FGSjtBQUdMQyxrQkFBVyxZQUhOO0FBSUxDLGtCQUFZLEVBSlA7QUFLTEMsc0JBQWUsRUFMVjtBQU1MVCxnQkFBUyxFQU5KO0FBT0xVLGtCQUFXLENBUE47QUFRTEMsbUJBQVksRUFSUCxFQVFXO0FBQ2hCQyxnQkFBUyxFQVRKLEVBU1E7QUFDYkMsd0JBQWlCLENBVlo7QUFXTEMsdUJBQWdCO0FBWFgsSyxRQWNQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVU7QUFDUjtBQUNBQyxlQUZRLHFCQUVFUCxVQUZGLEVBRWM7QUFDcEJRLGdCQUFRQyxHQUFSLENBQVlULFVBQVo7QUFDQSxhQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGFBQUtVLFdBQUw7QUFDRCxPQU5PO0FBT1JDLGVBUFEsdUJBT0c7QUFDVCxhQUFLZixRQUFMLEdBQWdCLEtBQWhCO0FBQ0QsT0FUTztBQVVSZ0IsZUFWUSx1QkFVRztBQUNULFlBQUlDLE9BQU8sS0FBS1YsZ0JBQWhCO0FBQ0FLLGdCQUFRQyxHQUFSLENBQVksR0FBWixFQUFnQixLQUFLTixnQkFBckI7QUFDQSxhQUFLYixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY3dCLElBQWQsQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFILEVBQU87QUFDeEMsaUJBQU9ILFFBQVEsQ0FBUixHQUFZRSxFQUFFRSxLQUFGLEdBQVVELEVBQUVDLEtBQXhCLEdBQWdDRixFQUFFRSxLQUFGLEdBQVVELEVBQUVDLEtBQW5EO0FBQ0QsU0FGZSxDQUFoQjtBQUdBLGFBQUtkLGdCQUFMLEdBQXlCVSxRQUFRLENBQVQsR0FBYyxDQUFkLEdBQWtCLENBQTFDO0FBQ0FMLGdCQUFRQyxHQUFSLENBQVksR0FBWixFQUFnQixLQUFLTixnQkFBckI7QUFFRCxPQW5CTztBQW9CUmUsY0FwQlEsc0JBb0JFO0FBQ1IsWUFBSUwsT0FBTyxLQUFLVCxlQUFoQjtBQUNBLGFBQUtkLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjd0IsSUFBZCxDQUFtQixVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBTztBQUN4QyxpQkFBT0gsUUFBUSxDQUFSLEdBQVlFLEVBQUVJLElBQUYsR0FBU0gsRUFBRUcsSUFBdkIsR0FBNkJKLEVBQUVJLElBQUYsR0FBU0gsRUFBRUcsSUFBL0M7QUFDRCxTQUZlLENBQWhCO0FBR0EsYUFBS2YsZUFBTCxHQUF1QlMsUUFBUSxDQUFSLEdBQVksQ0FBWixHQUFnQixDQUF2QztBQUNEO0FBMUJPLEssUUE2QlZPLE0sR0FBUyxFOzs7Ozs2QkFJQSxDQUNSOzs7OEJBQ1M7QUFDUixXQUFLQyxRQUFMO0FBQ0Q7OzsrQkFDUztBQUNSLFdBQUtYLFdBQUw7QUFDQSxXQUFLWSxNQUFMO0FBQ0Q7Ozs2QkFDTztBQUNOQyxTQUFHQyxVQUFILENBQWM7QUFDVkMsYUFBSztBQURLLE9BQWQ7QUFHRDs7Ozs7Ozs7Ozs7O0FBRUtBLG1CLEdBQU0scUM7O0FBQ1ZDLCtCQUFLQyxPQUFMLENBQWFGLEdBQWIsRUFBa0JHLElBQWxCLENBQXVCLFVBQUNDLEdBQUQsRUFBUztBQUM5QnJCLDBCQUFRQyxHQUFSLENBQVksU0FBWixFQUFzQm9CLElBQUluQyxJQUExQjtBQUNBLHlCQUFLSixRQUFMLEdBQWdCdUMsSUFBSW5DLElBQUosQ0FBU29DLE1BQVQsQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFRO0FBQUMsMkJBQU9BLEtBQUtDLEVBQUwsSUFBVyxPQUFLaEMsVUFBdkI7QUFBa0MsbUJBQTNELENBQWhCO0FBQ0EseUJBQUtpQyxNQUFMO0FBQ0QsaUJBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9JUixtQixHQUFNLHlDOztBQUNWQywrQkFBS0MsT0FBTCxDQUFhRixHQUFiLEVBQWtCRyxJQUFsQixDQUF1QixVQUFDQyxHQUFELEVBQVM7QUFDOUJyQiwwQkFBUUMsR0FBUixDQUFZLElBQVosRUFBaUJvQixHQUFqQjtBQUNBLHlCQUFLL0IsVUFBTCxDQUFnQm9DLElBQWhCLEdBQXVCTCxJQUFJbkMsSUFBM0I7QUFDQSx5QkFBS0ssY0FBTCxHQUFzQjhCLElBQUluQyxJQUExQjtBQUNBLHlCQUFLSSxVQUFMLENBQWdCRSxVQUFoQixHQUE2QixPQUFLQSxVQUFsQztBQUNBLHlCQUFLaUMsTUFBTDtBQUNELGlCQU5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUYrQlAsZUFBS1MsSTs7a0JBQW5CekQsSyIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgU2lkZVRhYiBmcm9tICcuLi9jb21wb25lbnRzL3NpZGVfdGFiJ1xuICBpbXBvcnQgaW1hZ2VMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VMaXN0J1xuICBpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyJ1xuICBpbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnQnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGZvb2RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vZExpc3QnXG4gIGltcG9ydCBpY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i6aSQ5pyN5YqhJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU2lkZVRhYlwiOntcInYtYmluZDp0YWIuc3luY1wiOlwiY2F0ZWdvcmllc1wiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwiZm9vZExpc3RcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJmb29kTGlzdFwiLFwidi1iaW5kOmNob29zZUxpc3Quc3luY1wiOlwiY2hvb3NlZExpc3RcIixcInYtYmluZDpjYXRMaXN0LnN5bmNcIjpcImNhdGVnb3JpZXNMaXN0XCIsXCJ2LWJpbmQ6ZGVhbExpc3Quc3luY1wiOlwiZGVhbExpc3RcIn0sXCJTZWFyY2hCYXJcIjp7XCJ0eXBlXCI6XCJ0YWdcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwifSxcIkNhcnRcIjp7XCJ2LWJpbmQ6ZmxhZy5zeW5jXCI6XCJjYXJ0U2hvd1wiLFwidi1iaW5kOmNob29zZUxpc3Quc3luY1wiOlwiY2hvb3NlZExpc3RcIixcInYtYmluZDpjYXRMaXN0LnN5bmNcIjpcImNhdGVnb3JpZXNMaXN0XCIsXCJ2LWJpbmQ6ZGVhbExpc3Quc3luY1wiOlwiZGVhbExpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiU2lkZVRhYlwiOntcInYtb246Y2hhbmdlXCI6XCJzd2l0Y2hUYWJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFNpZGVUYWI6U2lkZVRhYixcbiAgICAgIGltYWdlTGlzdDppbWFnZUxpc3QsXG4gICAgICBmb29kTGlzdDpmb29kTGlzdCxcbiAgICAgIFNlYXJjaEJhcjpTZWFyY2hCYXIsXG4gICAgICBDYXJ0OkNhcnQsXG4gICAgICBpY29uOmljb25cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGluaXQ6dHJ1ZSxcbiAgICAgIGNhcnRTaG93OmZhbHNlLFxuICAgICAgc2VhcmNoVGV4dDon6K+36L6T5YWl5ZWG5ZOB5ZCN56ew5oiW5YiG57G7JyxcbiAgICAgIGNhdGVnb3JpZXM6IHt9LFxuICAgICAgY2F0ZWdvcmllc0xpc3Q6W10sXG4gICAgICBmb29kTGlzdDpbXSxcbiAgICAgIHNlbGVjdGVkSWQ6MSxcbiAgICAgIGNob29zZWRMaXN0OltdLCAvL+i0reeJqei9pumAieS4reeahOiPnOWTgVxuICAgICAgZGVhbExpc3Q6W10sIC8vZGVhbCBjYXJ0IGRhdGFcbiAgICAgIGN1cnJlbnRQcmljZVNvcnQ6MSxcbiAgICAgIGN1cnJlbnRTdGFyU29ydDoxXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8g54K55Ye75YiG57G7XG4gICAgICBzd2l0Y2hUYWIoc2VsZWN0ZWRJZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZElkKVxuICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSBzZWxlY3RlZElkO1xuICAgICAgICB0aGlzLmdldEZvb2RMaXN0KCk7XG4gICAgICB9LFxuICAgICAgY2xvc2VMaXN0KCl7XG4gICAgICAgIHRoaXMuY2FydFNob3cgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBzb3J0UHJpY2UoKXtcbiAgICAgICAgbGV0IGZsYWcgPSB0aGlzLmN1cnJlbnRQcmljZVNvcnQgO1xuICAgICAgICBjb25zb2xlLmxvZyhcIjFcIix0aGlzLmN1cnJlbnRQcmljZVNvcnQpXG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSB0aGlzLmZvb2RMaXN0LnNvcnQoKGEsYik9PntcbiAgICAgICAgICByZXR1cm4gZmxhZyA9PSAxID8gYS5wcmljZSA+IGIucHJpY2UgOiBhLnByaWNlIDwgYi5wcmljZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3VycmVudFByaWNlU29ydCA9IChmbGFnID09IDEpID8gMiA6IDEgO1xuICAgICAgICBjb25zb2xlLmxvZyhcIjJcIix0aGlzLmN1cnJlbnRQcmljZVNvcnQpXG5cbiAgICAgIH0sXG4gICAgICBzb3J0U3Rhcigpe1xuICAgICAgICBsZXQgZmxhZyA9IHRoaXMuY3VycmVudFN0YXJTb3J0IDtcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHRoaXMuZm9vZExpc3Quc29ydCgoYSxiKT0+e1xuICAgICAgICAgIHJldHVybiBmbGFnID09IDEgPyBhLnN0YXIgPCBiLnN0YXIgOmEuc3RhciA+IGIuc3RhcjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXJTb3J0ID0gZmxhZyA9PSAxID8gMiA6IDEgO1xuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgIH1cbiAgICBpbml0UGFnZSgpe1xuICAgICAgdGhpcy5nZXRGb29kTGlzdCgpO1xuICAgICAgdGhpcy5nZXRDYXQoKTtcbiAgICB9XG4gICAgc2VhcmNoKCl7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2VhcmNoVGFnJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBhc3luYyBnZXRGb29kTGlzdCgpe1xuICAgICAgdmFyIHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Zvb2QvZ2V0X2Zvb2RcIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZm9vZD0+PlwiLHJlcy5kYXRhKVxuICAgICAgICB0aGlzLmZvb2RMaXN0ID0gcmVzLmRhdGEuZmlsdGVyKChpdGVtKT0+e3JldHVybiBpdGVtLmlkID09IHRoaXMuc2VsZWN0ZWRJZH0pO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q2F0KCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZm9vZC9nZXRfZm9vZF9jYXRcIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTFcIixyZXMpXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5saXN0ID0gcmVzLmRhdGE7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc0xpc3QgPSByZXMuZGF0YSA7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zZWxlY3RlZElkID0gdGhpcy5zZWxlY3RlZElkO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==