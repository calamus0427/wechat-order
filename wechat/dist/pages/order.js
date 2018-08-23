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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2lkZVRhYiIsImltYWdlTGlzdCIsImZvb2RMaXN0IiwiU2VhcmNoQmFyIiwiQ2FydCIsImljb24iLCJkYXRhIiwiaW5pdCIsImNhcnRTaG93Iiwic2VhcmNoVGV4dCIsImNhdGVnb3JpZXMiLCJjYXRMaXN0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2VsZWN0ZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJpbml0UGFnZSIsImdldEZvb2RMaXN0IiwiZ2V0Q2F0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2VweSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzIiwibGlzdCIsImZvb2QiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLG1CQUFrQixZQUFuQixFQUFnQyxjQUFhLEVBQTdDLEVBQVgsRUFBNEQsWUFBVyxFQUFDLG9CQUFtQixVQUFwQixFQUErQiwwQkFBeUIsU0FBeEQsRUFBdkUsRUFBMEksYUFBWSxFQUFDLFFBQU8sS0FBUixFQUFjLGdCQUFlLEVBQTdCLEVBQWdDLDJCQUEwQixZQUExRCxFQUF0SixFQUE4TixRQUFPLEVBQUMsb0JBQW1CLFVBQXBCLEVBQStCLG9CQUFtQixTQUFsRCxFQUFyTyxFLFFBQ1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxlQUFjLFdBQWYsRUFBWCxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxlQUFRQSxrQkFEQTtBQUVSQyxpQkFBVUEsbUJBRkY7QUFHUkMsZ0JBQVNBLGtCQUhEO0FBSVJDLGlCQUFVQSxtQkFKRjtBQUtSQyxZQUFLQSxjQUxHO0FBTVJDLFlBQUtBO0FBTkcsSyxRQVNWZCxNLEdBQVMsRSxRQUVUZSxJLEdBQU87QUFDTEMsWUFBSyxJQURBO0FBRUxDLGdCQUFTLEtBRko7QUFHTEMsa0JBQVcsYUFITjtBQUlMQyxrQkFBWSxFQUpQO0FBS0xSLGdCQUFTLEVBTEo7QUFNTFMsZUFBUTtBQU5ILEssUUFTUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVO0FBQ1I7QUFDQUMsZUFGUSxxQkFFRUMsVUFGRixFQUVjO0FBQ3BCQyxnQkFBUUMsR0FBUixDQUFZRixVQUFaO0FBQ0E7QUFDQTtBQUNEO0FBTk8sSyxRQVVWRyxNLEdBQVMsRTs7Ozs7NkJBSUEsQ0FDUjs7OzhCQUNTO0FBQ1IsV0FBS0MsUUFBTDtBQUNEOzs7K0JBQ1M7QUFDUixXQUFLQyxXQUFMO0FBQ0EsV0FBS0MsTUFBTDtBQUNEOzs7NkJBQ087QUFDTkMsU0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGFBQUs7QUFESyxPQUFkO0FBR0Q7Ozs7Ozs7Ozs7OztBQUVLQSxtQixHQUFNLGdEOztBQUNWQywrQkFBS0MsT0FBTCxDQUFhRixHQUFiLEVBQWtCRyxJQUFsQixDQUF1QixVQUFDQyxHQUFELEVBQVM7QUFDOUIseUJBQUsxQixRQUFMLEdBQWdCMEIsSUFBSXRCLElBQUosQ0FBU3VCLElBQVQsQ0FBYyxDQUFkLEVBQWlCQyxJQUFqQztBQUNBLHlCQUFLQyxNQUFMO0FBQ0QsaUJBSEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1JUCxtQixHQUFNLG9EOztBQUNWQywrQkFBS0MsT0FBTCxDQUFhRixHQUFiLEVBQWtCRyxJQUFsQixDQUF1QixVQUFDQyxHQUFELEVBQVM7QUFDOUJaLDBCQUFRQyxHQUFSLENBQVksSUFBWixFQUFpQlcsR0FBakI7QUFDQSx5QkFBS2xCLFVBQUwsR0FBa0JrQixJQUFJdEIsSUFBdEI7QUFDQSx5QkFBS3lCLE1BQUw7QUFDRCxpQkFKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJFK0JOLGVBQUtPLEk7O2tCQUFuQjFDLEsiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFNpZGVUYWIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlX3RhYidcbiAgaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlTGlzdCdcbiAgaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcbiAgaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJ0J1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBmb29kTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb2RMaXN0J1xuICBpbXBvcnQgaWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXG5cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBvcmRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuoumkkOacjeWKoSdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlNpZGVUYWJcIjp7XCJ2LWJpbmQ6dGFiLnN5bmNcIjpcImNhdGVnb3JpZXNcIixcInhtbG5zOnYtb25cIjpcIlwifSxcImZvb2RMaXN0XCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwiZm9vZExpc3RcIixcInYtYmluZDpjaG9vc2VMaXN0LnN5bmNcIjpcImNhdExpc3RcIn0sXCJTZWFyY2hCYXJcIjp7XCJ0eXBlXCI6XCJ0YWdcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwifSxcIkNhcnRcIjp7XCJ2LWJpbmQ6ZmxhZy5zeW5jXCI6XCJjYXJ0U2hvd1wiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiY2F0TGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJTaWRlVGFiXCI6e1widi1vbjpjaGFuZ2VcIjpcInN3aXRjaFRhYlwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2lkZVRhYjpTaWRlVGFiLFxuICAgICAgaW1hZ2VMaXN0OmltYWdlTGlzdCxcbiAgICAgIGZvb2RMaXN0OmZvb2RMaXN0LFxuICAgICAgU2VhcmNoQmFyOlNlYXJjaEJhcixcbiAgICAgIENhcnQ6Q2FydCxcbiAgICAgIGljb246aWNvblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5pdDp0cnVlLFxuICAgICAgY2FydFNob3c6ZmFsc2UsXG4gICAgICBzZWFyY2hUZXh0Oifor7fovpPlhaXllYblrrbmiJbogIXllYblk4HlkI3np7AnLFxuICAgICAgY2F0ZWdvcmllczoge30sXG4gICAgICBmb29kTGlzdDpbXSxcbiAgICAgIGNhdExpc3Q6W11cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvLyDngrnlh7vliIbnsbtcbiAgICAgIHN3aXRjaFRhYihzZWxlY3RlZElkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkSWQpXG4gICAgICAgIC8vIHRoaXMudGFiLmNhdGVnb3J5SWQgPSBzZWxlY3RlZElkO1xuICAgICAgICAvLyB0aGlzLnJlbG9hZCgpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgdGhpcy5pbml0UGFnZSgpXG4gICAgfVxuICAgIGluaXRQYWdlKCl7XG4gICAgICB0aGlzLmdldEZvb2RMaXN0KCk7XG4gICAgICB0aGlzLmdldENhdCgpO1xuICAgIH1cbiAgICBzZWFyY2goKXtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9zZWFyY2hUYWcnXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGdldEZvb2RMaXN0KCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8veWFwaS5kZW1vLnF1bmFyLmNvbS9tb2NrLzE2NzgwL2dldF9mb29kXCJcbiAgICAgIHdlcHkucmVxdWVzdCh1cmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmZvb2RMaXN0ID0gcmVzLmRhdGEubGlzdFswXS5mb29kO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q2F0KCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8veWFwaS5kZW1vLnF1bmFyLmNvbS9tb2NrLzE2NzgwL2dldF9mb29kX3RhZ1wiXG4gICAgICB3ZXB5LnJlcXVlc3QodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCIxMVwiLHJlcylcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGE7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19