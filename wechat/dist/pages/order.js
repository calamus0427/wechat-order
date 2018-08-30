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
      dealList: [] //deal cart data
    }, _this.computed = {}, _this.methods = {
      // 点击分类
      switchTab: function switchTab(selectedId) {
        console.log(selectedId);
        this.selectedId = selectedId;
        this.getFoodList();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzTGlzdCIsInNlbGVjdGVkSWQiLCJjaG9vc2VkTGlzdCIsImRlYWxMaXN0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwiY29uc29sZSIsImxvZyIsImdldEZvb2RMaXN0IiwiY2xvc2VMaXN0IiwiZXZlbnRzIiwiaW5pdFBhZ2UiLCJnZXRDYXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwicmVxdWVzdCIsInRoZW4iLCJyZXMiLCJmaWx0ZXIiLCJpdGVtIiwiaWQiLCIkYXBwbHkiLCJsaXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxtQkFBa0IsWUFBbkIsRUFBZ0MsY0FBYSxFQUE3QyxFQUFYLEVBQTRELFlBQVcsRUFBQyxvQkFBbUIsVUFBcEIsRUFBK0IsMEJBQXlCLGFBQXhELEVBQXNFLHVCQUFzQixnQkFBNUYsRUFBNkcsd0JBQXVCLFVBQXBJLEVBQXZFLEVBQXVOLGFBQVksRUFBQyxRQUFPLEtBQVIsRUFBYyxnQkFBZSxFQUE3QixFQUFnQywyQkFBMEIsWUFBMUQsRUFBbk8sRUFBMlMsUUFBTyxFQUFDLG9CQUFtQixVQUFwQixFQUErQiwwQkFBeUIsYUFBeEQsRUFBc0UsdUJBQXNCLGdCQUE1RixFQUE2Ryx3QkFBdUIsVUFBcEksRUFBbFQsRSxRQUNUQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsZUFBYyxXQUFmLEVBQVgsRSxRQUNUQyxVLEdBQWE7QUFDUkMsZUFBUUEsa0JBREE7QUFFUkMsaUJBQVVBLG1CQUZGO0FBR1JDLGdCQUFTQSxrQkFIRDtBQUlSQyxpQkFBVUEsbUJBSkY7QUFLUkMsWUFBS0EsY0FMRztBQU1SQyxZQUFLQTtBQU5HLEssUUFTVmQsTSxHQUFTLEUsUUFFVGUsSSxHQUFPO0FBQ0xDLFlBQUssSUFEQTtBQUVMQyxnQkFBUyxLQUZKO0FBR0xDLGtCQUFXLFlBSE47QUFJTEMsa0JBQVksRUFKUDtBQUtMQyxzQkFBZSxFQUxWO0FBTUxULGdCQUFTLEVBTko7QUFPTFUsa0JBQVcsQ0FQTjtBQVFMQyxtQkFBWSxFQVJQLEVBUVc7QUFDaEJDLGdCQUFTLEVBVEosQ0FTTztBQVRQLEssUUFZUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVO0FBQ1I7QUFDQUMsZUFGUSxxQkFFRUwsVUFGRixFQUVjO0FBQ3BCTSxnQkFBUUMsR0FBUixDQUFZUCxVQUFaO0FBQ0EsYUFBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxhQUFLUSxXQUFMO0FBQ0QsT0FOTztBQU9SQyxlQVBRLHVCQU9HO0FBQ1QsYUFBS2IsUUFBTCxHQUFnQixLQUFoQjtBQUNEO0FBVE8sSyxRQWFWYyxNLEdBQVMsRTs7Ozs7NkJBSUEsQ0FDUjs7OzhCQUNTO0FBQ1IsV0FBS0MsUUFBTDtBQUNEOzs7K0JBQ1M7QUFDUixXQUFLSCxXQUFMO0FBQ0EsV0FBS0ksTUFBTDtBQUNEOzs7NkJBQ087QUFDTkMsU0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGFBQUs7QUFESyxPQUFkO0FBR0Q7Ozs7Ozs7Ozs7OztBQUVLQSxtQixHQUFNLHFDOztBQUNWQywrQkFBS0MsT0FBTCxDQUFhRixHQUFiLEVBQWtCRyxJQUFsQixDQUF1QixVQUFDQyxHQUFELEVBQVM7QUFDOUJiLDBCQUFRQyxHQUFSLENBQVksU0FBWixFQUFzQlksSUFBSXpCLElBQTFCO0FBQ0EseUJBQUtKLFFBQUwsR0FBZ0I2QixJQUFJekIsSUFBSixDQUFTMEIsTUFBVCxDQUFnQixVQUFDQyxJQUFELEVBQVE7QUFBQywyQkFBT0EsS0FBS0MsRUFBTCxJQUFXLE9BQUt0QixVQUF2QjtBQUFrQyxtQkFBM0QsQ0FBaEI7QUFDQSx5QkFBS3VCLE1BQUw7QUFDRCxpQkFKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0lSLG1CLEdBQU0seUM7O0FBQ1ZDLCtCQUFLQyxPQUFMLENBQWFGLEdBQWIsRUFBa0JHLElBQWxCLENBQXVCLFVBQUNDLEdBQUQsRUFBUztBQUM5QmIsMEJBQVFDLEdBQVIsQ0FBWSxJQUFaLEVBQWlCWSxHQUFqQjtBQUNBLHlCQUFLckIsVUFBTCxDQUFnQjBCLElBQWhCLEdBQXVCTCxJQUFJekIsSUFBM0I7QUFDQSx5QkFBS0ssY0FBTCxHQUFzQm9CLElBQUl6QixJQUExQjtBQUNBLHlCQUFLSSxVQUFMLENBQWdCRSxVQUFoQixHQUE2QixPQUFLQSxVQUFsQztBQUNBLHlCQUFLdUIsTUFBTDtBQUNELGlCQU5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNUUrQlAsZUFBS1MsSTs7a0JBQW5CL0MsSyIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgU2lkZVRhYiBmcm9tICcuLi9jb21wb25lbnRzL3NpZGVfdGFiJ1xuICBpbXBvcnQgaW1hZ2VMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VMaXN0J1xuICBpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyJ1xuICBpbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnQnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGZvb2RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vZExpc3QnXG4gIGltcG9ydCBpY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i6aSQ5pyN5YqhJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU2lkZVRhYlwiOntcInYtYmluZDp0YWIuc3luY1wiOlwiY2F0ZWdvcmllc1wiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwiZm9vZExpc3RcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJmb29kTGlzdFwiLFwidi1iaW5kOmNob29zZUxpc3Quc3luY1wiOlwiY2hvb3NlZExpc3RcIixcInYtYmluZDpjYXRMaXN0LnN5bmNcIjpcImNhdGVnb3JpZXNMaXN0XCIsXCJ2LWJpbmQ6ZGVhbExpc3Quc3luY1wiOlwiZGVhbExpc3RcIn0sXCJTZWFyY2hCYXJcIjp7XCJ0eXBlXCI6XCJ0YWdcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwifSxcIkNhcnRcIjp7XCJ2LWJpbmQ6ZmxhZy5zeW5jXCI6XCJjYXJ0U2hvd1wiLFwidi1iaW5kOmNob29zZUxpc3Quc3luY1wiOlwiY2hvb3NlZExpc3RcIixcInYtYmluZDpjYXRMaXN0LnN5bmNcIjpcImNhdGVnb3JpZXNMaXN0XCIsXCJ2LWJpbmQ6ZGVhbExpc3Quc3luY1wiOlwiZGVhbExpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiU2lkZVRhYlwiOntcInYtb246Y2hhbmdlXCI6XCJzd2l0Y2hUYWJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFNpZGVUYWI6U2lkZVRhYixcbiAgICAgIGltYWdlTGlzdDppbWFnZUxpc3QsXG4gICAgICBmb29kTGlzdDpmb29kTGlzdCxcbiAgICAgIFNlYXJjaEJhcjpTZWFyY2hCYXIsXG4gICAgICBDYXJ0OkNhcnQsXG4gICAgICBpY29uOmljb25cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGluaXQ6dHJ1ZSxcbiAgICAgIGNhcnRTaG93OmZhbHNlLFxuICAgICAgc2VhcmNoVGV4dDon6K+36L6T5YWl5ZWG5ZOB5ZCN56ew5oiW5YiG57G7JyxcbiAgICAgIGNhdGVnb3JpZXM6IHt9LFxuICAgICAgY2F0ZWdvcmllc0xpc3Q6W10sXG4gICAgICBmb29kTGlzdDpbXSxcbiAgICAgIHNlbGVjdGVkSWQ6MSxcbiAgICAgIGNob29zZWRMaXN0OltdLCAvL+i0reeJqei9pumAieS4reeahOiPnOWTgVxuICAgICAgZGVhbExpc3Q6W10gLy9kZWFsIGNhcnQgZGF0YVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8vIOeCueWHu+WIhuexu1xuICAgICAgc3dpdGNoVGFiKHNlbGVjdGVkSWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRJZClcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gc2VsZWN0ZWRJZDtcbiAgICAgICAgdGhpcy5nZXRGb29kTGlzdCgpO1xuICAgICAgfSxcbiAgICAgIGNsb3NlTGlzdCgpe1xuICAgICAgICB0aGlzLmNhcnRTaG93ID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgdGhpcy5pbml0UGFnZSgpXG4gICAgfVxuICAgIGluaXRQYWdlKCl7XG4gICAgICB0aGlzLmdldEZvb2RMaXN0KCk7XG4gICAgICB0aGlzLmdldENhdCgpO1xuICAgIH1cbiAgICBzZWFyY2goKXtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9zZWFyY2hUYWcnXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGdldEZvb2RMaXN0KCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZm9vZC9nZXRfZm9vZFwiXG4gICAgICB3ZXB5LnJlcXVlc3QodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmb29kPT4+XCIscmVzLmRhdGEpXG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSByZXMuZGF0YS5maWx0ZXIoKGl0ZW0pPT57cmV0dXJuIGl0ZW0uaWQgPT0gdGhpcy5zZWxlY3RlZElkfSk7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9KVxuICAgIH1cbiAgICBhc3luYyBnZXRDYXQoKXtcbiAgICAgIHZhciB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9mb29kL2dldF9mb29kX2NhdFwiXG4gICAgICB3ZXB5LnJlcXVlc3QodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCIxMVwiLHJlcylcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLmxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzTGlzdCA9IHJlcy5kYXRhIDtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnNlbGVjdGVkSWQgPSB0aGlzLnNlbGVjdGVkSWQ7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19