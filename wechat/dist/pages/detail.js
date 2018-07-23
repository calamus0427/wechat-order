'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _cart = require('./../mixins/cart.js');

var _cart2 = _interopRequireDefault(_cart);

var _user = require('./../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

var _swiper = require('./../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _screen = require('./../components/screen.js');

var _screen2 = _interopRequireDefault(_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_wepy$page) {
  _inherits(Detail, _wepy$page);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '详情'
    }, _this.$repeat = {}, _this.$props = { "Swiper": { "xmlns:v-bind": "", "v-bind:list.sync": "swipers", "height": "280" }, "Screen": { "class": "fixed-bottom" } }, _this.$events = {}, _this.components = {
      Swiper: _swiper2.default,
      Screen: _screen2.default
    }, _this.mixins = [_base2.default, _http2.default, _cart2.default, _user2.default], _this.data = {
      isEnabled: true,
      img_banner: '/images/swiper.png',
      icon_star: '/images/icon/icon-star@2x.png',
      icon_star_active: '/images/icon/icon-star-active@2x.png',
      icon_shelf: '/images/tabbars/icon-shelf@2x.png',
      swipers: [{ image: 'http://p79mwfmry.bkt.clouddn.com/2.jpg', url: '' }, { image: 'http://p79mwfmry.bkt.clouddn.com/3.jpg', url: '' }],
      anime: {
        'name': '命运石之门',
        'image': ['http://p79mwfmry.bkt.clouddn.com/%E7%9F%B3%E5%A4%B4%E9%97%A8.jpg', '', ''],
        'description': '一切都是命运石之门的选择,石头门，一切都是命运石之门的选择,石头门一切都是命运石之门的选择,石头门一切都是命运石之门的选择,石头门一切都是命运石之门的选择,石头门一切都是命运石之门的选择,石头门一切都是命运石之门的选择,石头门一切都是命运石之门的选择,石头门一切都是命运石之门的选择,石头门一切都是命运石之门的选择,石头门',
        'content': [{ 'type': 'text', 'value': '' }, { 'type': 'text', 'value': '' }, { 'type': 'image', 'value': 'http://p79mwfmry.bkt.clouddn.com/%E7%9F%B3%E5%A4%B4%E9%97%A8.jpg' }],
        'tag': ['致郁', '时间穿越', '神作'],
        'stars': '5',
        'createTime': '2013-04-20',
        'flag': '1',
        'author': '',
        'type': 'game',
        'company': '',
        'cvs': '宫野真守，花泽香菜',
        'id': '',
        'download': ''
      }
    }, _this.computed = {}, _this.methods = {
      addAnime: function addAnime() {
        console.log("isEnabled", this.isEnabled);
        this.isEnabled = this.isEnabled == false ? true : false;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Detail;
}(_wepy2.default.page);

exports.default = Detail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3dpcGVyIiwiU2NyZWVuIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjYXJ0IiwidXNlciIsImRhdGEiLCJpc0VuYWJsZWQiLCJpbWdfYmFubmVyIiwiaWNvbl9zdGFyIiwiaWNvbl9zdGFyX2FjdGl2ZSIsImljb25fc2hlbGYiLCJzd2lwZXJzIiwiaW1hZ2UiLCJ1cmwiLCJhbmltZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImFkZEFuaW1lIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFNBQXRDLEVBQWdELFVBQVMsS0FBekQsRUFBVixFQUEwRSxVQUFTLEVBQUMsU0FBUSxjQUFULEVBQW5GLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGNBQU9BLGdCQURDO0FBRVJDLGNBQU9BO0FBRkMsSyxRQUtWQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEVBQWFDLGNBQWIsRUFBbUJDLGNBQW5CLEMsUUFFVEMsSSxHQUFPO0FBQ0xDLGlCQUFVLElBREw7QUFFTEMsa0JBQVksb0JBRlA7QUFHTEMsaUJBQVcsK0JBSE47QUFJTEMsd0JBQWtCLHNDQUpiO0FBS0xDLGtCQUFZLG1DQUxQO0FBTUxDLGVBQVMsQ0FDRCxFQUFDQyxPQUFPLHdDQUFSLEVBQWtEQyxLQUFLLEVBQXZELEVBREMsRUFFRCxFQUFDRCxPQUFPLHdDQUFSLEVBQWtEQyxLQUFLLEVBQXZELEVBRkMsQ0FOSjtBQVVMQyxhQUFNO0FBQ0EsZ0JBQU8sT0FEUDtBQUVBLGlCQUFRLENBQUMsa0VBQUQsRUFBb0UsRUFBcEUsRUFBdUUsRUFBdkUsQ0FGUjtBQUdBLHVCQUFjLG1LQUhkO0FBSUEsbUJBQVUsQ0FDUixFQUFDLFFBQU8sTUFBUixFQUFlLFNBQVEsRUFBdkIsRUFEUSxFQUVWLEVBQUMsUUFBTyxNQUFSLEVBQWUsU0FBUSxFQUF2QixFQUZVLEVBR1YsRUFBQyxRQUFPLE9BQVIsRUFBZ0IsU0FBUSxrRUFBeEIsRUFIVSxDQUpWO0FBU0EsZUFBTSxDQUFDLElBQUQsRUFBTSxNQUFOLEVBQWEsSUFBYixDQVROO0FBVUEsaUJBQVEsR0FWUjtBQVdBLHNCQUFhLFlBWGI7QUFZQSxnQkFBTyxHQVpQO0FBYUEsa0JBQVMsRUFiVDtBQWNBLGdCQUFPLE1BZFA7QUFlQSxtQkFBVSxFQWZWO0FBZ0JBLGVBQU0sV0FoQk47QUFpQkEsY0FBSyxFQWpCTDtBQWtCQSxvQkFBVztBQWxCWDtBQVZELEssUUFnQ1BDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNFO0FBQ1JDLGdCQUFRQyxHQUFSLENBQVksV0FBWixFQUF3QixLQUFLYixTQUE3QjtBQUNBLGFBQUtBLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxJQUFrQixLQUFsQixHQUEwQixJQUExQixHQUFnQyxLQUFqRDtBQUNEO0FBSk8sSyxRQU9WYyxNLEdBQVMsRTs7Ozs7NkJBSUEsQ0FFUjs7OztFQS9EaUNDLGVBQUtDLEk7O2tCQUFwQi9CLE0iLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IGNhcnQgZnJvbSAnLi4vbWl4aW5zL2NhcnQnXG4gIGltcG9ydCB1c2VyIGZyb20gJy4uL21peGlucy91c2VyJ1xuICBpbXBvcnQgU3dpcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc3dpcGVyJ1xuICBpbXBvcnQgU2NyZWVuIGZyb20gJy4uL2NvbXBvbmVudHMvc2NyZWVuJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K+m5oOFJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU3dpcGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInN3aXBlcnNcIixcImhlaWdodFwiOlwiMjgwXCJ9LFwiU2NyZWVuXCI6e1wiY2xhc3NcIjpcImZpeGVkLWJvdHRvbVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTd2lwZXI6U3dpcGVyLFxuICAgICAgU2NyZWVuOlNjcmVlblxuICAgIH1cblxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwLCBjYXJ0LCB1c2VyXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlzRW5hYmxlZDp0cnVlLFxuICAgICAgaW1nX2Jhbm5lcjogJy9pbWFnZXMvc3dpcGVyLnBuZycsXG4gICAgICBpY29uX3N0YXI6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyQDJ4LnBuZycsXG4gICAgICBpY29uX3N0YXJfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2ljb24tc3Rhci1hY3RpdmVAMngucG5nJyxcbiAgICAgIGljb25fc2hlbGY6ICcvaW1hZ2VzL3RhYmJhcnMvaWNvbi1zaGVsZkAyeC5wbmcnLFxuICAgICAgc3dpcGVyczogW1xuICAgICAgICAgICAgICB7aW1hZ2U6ICdodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8yLmpwZycsIHVybDogJyd9LFxuICAgICAgICAgICAgICB7aW1hZ2U6ICdodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8zLmpwZycsIHVybDogJyd9XG4gICAgICAgICAgICBdLFxuICAgICAgYW5pbWU6e1xuICAgICAgICAgICAgJ25hbWUnOiflkb3ov5Dnn7PkuYvpl6gnLFxuICAgICAgICAgICAgJ2ltYWdlJzpbJ2h0dHA6Ly9wNzltd2ZtcnkuYmt0LmNsb3VkZG4uY29tLyVFNyU5RiVCMyVFNSVBNCVCNCVFOSU5NyVBOC5qcGcnLCcnLCcnXSxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6J+S4gOWIh+mDveaYr+WRvei/kOefs+S5i+mXqOeahOmAieaLqSznn7PlpLTpl6jvvIzkuIDliIfpg73mmK/lkb3ov5Dnn7PkuYvpl6jnmoTpgInmi6ks55+z5aS06Zeo5LiA5YiH6YO95piv5ZG96L+Q55+z5LmL6Zeo55qE6YCJ5oupLOefs+WktOmXqOS4gOWIh+mDveaYr+WRvei/kOefs+S5i+mXqOeahOmAieaLqSznn7PlpLTpl6jkuIDliIfpg73mmK/lkb3ov5Dnn7PkuYvpl6jnmoTpgInmi6ks55+z5aS06Zeo5LiA5YiH6YO95piv5ZG96L+Q55+z5LmL6Zeo55qE6YCJ5oupLOefs+WktOmXqOS4gOWIh+mDveaYr+WRvei/kOefs+S5i+mXqOeahOmAieaLqSznn7PlpLTpl6jkuIDliIfpg73mmK/lkb3ov5Dnn7PkuYvpl6jnmoTpgInmi6ks55+z5aS06Zeo5LiA5YiH6YO95piv5ZG96L+Q55+z5LmL6Zeo55qE6YCJ5oupLOefs+WktOmXqOS4gOWIh+mDveaYr+WRvei/kOefs+S5i+mXqOeahOmAieaLqSznn7PlpLTpl6gnLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOltcbiAgICAgICAgICAgICAgeyd0eXBlJzondGV4dCcsJ3ZhbHVlJzonJ30sXG4gICAgICAgICAgICB7J3R5cGUnOid0ZXh0JywndmFsdWUnOicnfSxcbiAgICAgICAgICAgIHsndHlwZSc6J2ltYWdlJywndmFsdWUnOidodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8lRTclOUYlQjMlRTUlQTQlQjQlRTklOTclQTguanBnJ31cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAndGFnJzpbJ+iHtOmDgScsJ+aXtumXtOepv+i2iicsJ+elnuS9nCddLFxuICAgICAgICAgICAgJ3N0YXJzJzonNScsXG4gICAgICAgICAgICAnY3JlYXRlVGltZSc6JzIwMTMtMDQtMjAnLFxuICAgICAgICAgICAgJ2ZsYWcnOicxJyxcbiAgICAgICAgICAgICdhdXRob3InOicnLFxuICAgICAgICAgICAgJ3R5cGUnOidnYW1lJyxcbiAgICAgICAgICAgICdjb21wYW55JzonJyxcbiAgICAgICAgICAgICdjdnMnOiflrqvph47nnJ/lrojvvIzoirHms73pppnoj5wnLFxuICAgICAgICAgICAgJ2lkJzonJyxcbiAgICAgICAgICAgICdkb3dubG9hZCc6JydcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYWRkQW5pbWUoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJpc0VuYWJsZWRcIix0aGlzLmlzRW5hYmxlZClcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSB0aGlzLmlzRW5hYmxlZCA9PSBmYWxzZSA/IHRydWUgOmZhbHNlIDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG4gIH1cbiJdfQ==