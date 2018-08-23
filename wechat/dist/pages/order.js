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
                url = "http://yapi.demo.qunar.com/mock/16780/get_food";

                _wepy2.default.request(url).then(function (res) {
                  _this2.foodList = res.data.list[0].food;
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
                url = "http://yapi.demo.qunar.com/mock/16780/get_food_tag";

                _wepy2.default.request(url).then(function (res) {
                  console.log("11", res);
                  _this3.categories = res.data;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRMaXN0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2VsZWN0ZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUxpc3QiLCJldmVudHMiLCJpbml0UGFnZSIsImdldEZvb2RMaXN0IiwiZ2V0Q2F0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2VweSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzIiwibGlzdCIsImZvb2QiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLG1CQUFrQixZQUFuQixFQUFnQyxjQUFhLEVBQTdDLEVBQVgsRUFBNEQsWUFBVyxFQUFDLG9CQUFtQixVQUFwQixFQUErQiwwQkFBeUIsU0FBeEQsRUFBdkUsRUFBMEksYUFBWSxFQUFDLFFBQU8sS0FBUixFQUFjLGdCQUFlLEVBQTdCLEVBQWdDLDJCQUEwQixZQUExRCxFQUF0SixFQUE4TixRQUFPLEVBQUMsb0JBQW1CLFVBQXBCLEVBQStCLG9CQUFtQixTQUFsRCxFQUFyTyxFLFFBQ1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxlQUFjLFdBQWYsRUFBWCxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxlQUFRQSxrQkFEQTtBQUVSQyxpQkFBVUEsbUJBRkY7QUFHUkMsZ0JBQVNBLGtCQUhEO0FBSVJDLGlCQUFVQSxtQkFKRjtBQUtSQyxZQUFLQSxjQUxHO0FBTVJDLFlBQUtBO0FBTkcsSyxRQVNWZCxNLEdBQVMsRSxRQUVUZSxJLEdBQU87QUFDTEMsWUFBSyxJQURBO0FBRUxDLGdCQUFTLEtBRko7QUFHTEMsa0JBQVcsYUFITjtBQUlMQyxrQkFBWSxFQUpQO0FBS0xSLGdCQUFTLEVBTEo7QUFNTFMsZUFBUTtBQU5ILEssUUFTUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVO0FBQ1I7QUFDQUMsZUFGUSxxQkFFRUMsVUFGRixFQUVjO0FBQ3BCQyxnQkFBUUMsR0FBUixDQUFZRixVQUFaO0FBQ0E7QUFDQTtBQUNELE9BTk87QUFPZEcsZUFQYyx1QkFPSDtBQUNILGFBQUtWLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDtBQVRPLEssUUFhVlcsTSxHQUFTLEU7Ozs7OzZCQUlBLENBQ1I7Ozs4QkFDUztBQUNSLFdBQUtDLFFBQUw7QUFDRDs7OytCQUNTO0FBQ1IsV0FBS0MsV0FBTDtBQUNBLFdBQUtDLE1BQUw7QUFDRDs7OzZCQUNPO0FBQ05DLFNBQUdDLFVBQUgsQ0FBYztBQUNWQyxhQUFLO0FBREssT0FBZDtBQUdEOzs7Ozs7Ozs7Ozs7QUFFS0EsbUIsR0FBTSxnRDs7QUFDVkMsK0JBQUtDLE9BQUwsQ0FBYUYsR0FBYixFQUFrQkcsSUFBbEIsQ0FBdUIsVUFBQ0MsR0FBRCxFQUFTO0FBQzlCLHlCQUFLM0IsUUFBTCxHQUFnQjJCLElBQUl2QixJQUFKLENBQVN3QixJQUFULENBQWMsQ0FBZCxFQUFpQkMsSUFBakM7QUFDQSx5QkFBS0MsTUFBTDtBQUNELGlCQUhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNSVAsbUIsR0FBTSxvRDs7QUFDVkMsK0JBQUtDLE9BQUwsQ0FBYUYsR0FBYixFQUFrQkcsSUFBbEIsQ0FBdUIsVUFBQ0MsR0FBRCxFQUFTO0FBQzlCYiwwQkFBUUMsR0FBUixDQUFZLElBQVosRUFBaUJZLEdBQWpCO0FBQ0EseUJBQUtuQixVQUFMLEdBQWtCbUIsSUFBSXZCLElBQXRCO0FBQ0EseUJBQUswQixNQUFMO0FBQ0QsaUJBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4RStCTixlQUFLTyxJOztrQkFBbkIzQyxLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBTaWRlVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZV90YWInXG4gIGltcG9ydCBpbWFnZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZUxpc3QnXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXG4gIGltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2FydCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgZm9vZExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb29kTGlzdCdcbiAgaW1wb3J0IGljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLppJDmnI3liqEnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTaWRlVGFiXCI6e1widi1iaW5kOnRhYi5zeW5jXCI6XCJjYXRlZ29yaWVzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJmb29kTGlzdFwiOntcInYtYmluZDpsaXN0LnN5bmNcIjpcImZvb2RMaXN0XCIsXCJ2LWJpbmQ6Y2hvb3NlTGlzdC5zeW5jXCI6XCJjYXRMaXN0XCJ9LFwiU2VhcmNoQmFyXCI6e1widHlwZVwiOlwidGFnXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlaG9sZGVyLm9uY2VcIjpcInNlYXJjaFRleHRcIn0sXCJDYXJ0XCI6e1widi1iaW5kOmZsYWcuc3luY1wiOlwiY2FydFNob3dcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImNhdExpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiU2lkZVRhYlwiOntcInYtb246Y2hhbmdlXCI6XCJzd2l0Y2hUYWJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFNpZGVUYWI6U2lkZVRhYixcbiAgICAgIGltYWdlTGlzdDppbWFnZUxpc3QsXG4gICAgICBmb29kTGlzdDpmb29kTGlzdCxcbiAgICAgIFNlYXJjaEJhcjpTZWFyY2hCYXIsXG4gICAgICBDYXJ0OkNhcnQsXG4gICAgICBpY29uOmljb25cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGluaXQ6dHJ1ZSxcbiAgICAgIGNhcnRTaG93OmZhbHNlLFxuICAgICAgc2VhcmNoVGV4dDon6K+36L6T5YWl5ZWG5a625oiW6ICF5ZWG5ZOB5ZCN56ewJyxcbiAgICAgIGNhdGVnb3JpZXM6IHt9LFxuICAgICAgZm9vZExpc3Q6W10sXG4gICAgICBjYXRMaXN0OltdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8g54K55Ye75YiG57G7XG4gICAgICBzd2l0Y2hUYWIoc2VsZWN0ZWRJZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZElkKVxuICAgICAgICAvLyB0aGlzLnRhYi5jYXRlZ29yeUlkID0gc2VsZWN0ZWRJZDtcbiAgICAgICAgLy8gdGhpcy5yZWxvYWQoKTtcbiAgICAgIH0sXG5jbG9zZUxpc3QoKXtcbiAgICAgICAgdGhpcy5jYXJ0U2hvdyA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgIH1cbiAgICBpbml0UGFnZSgpe1xuICAgICAgdGhpcy5nZXRGb29kTGlzdCgpO1xuICAgICAgdGhpcy5nZXRDYXQoKTtcbiAgICB9XG4gICAgc2VhcmNoKCl7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2VhcmNoVGFnJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBhc3luYyBnZXRGb29kTGlzdCgpe1xuICAgICAgdmFyIHVybCA9IFwiaHR0cDovL3lhcGkuZGVtby5xdW5hci5jb20vbW9jay8xNjc4MC9nZXRfZm9vZFwiXG4gICAgICB3ZXB5LnJlcXVlc3QodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IHJlcy5kYXRhLmxpc3RbMF0uZm9vZDtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGdldENhdCgpe1xuICAgICAgdmFyIHVybCA9IFwiaHR0cDovL3lhcGkuZGVtby5xdW5hci5jb20vbW9jay8xNjc4MC9nZXRfZm9vZF90YWdcIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTFcIixyZXMpXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==