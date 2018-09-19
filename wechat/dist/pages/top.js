'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _swiper = require('./../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _ads = require('./../components/ads.js');

var _ads2 = _interopRequireDefault(_ads);

var _animeList = require('./../components/animeList.js');

var _animeList2 = _interopRequireDefault(_animeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Top = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Top, _wepy$page);

  function Top() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Top);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Top.__proto__ || Object.getPrototypeOf(Top)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '追番推荐'
    }, _this.$repeat = {}, _this.$props = { "Swiper": { "xmlns:v-bind": "", "v-bind:list.sync": "swipers", "height": "280" }, "Ads": { "ads": "欢迎加群：575180837" }, "animeList": { "v-bind:list.sync": "list", "title": "追番推荐", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMoreList" } }, _this.$events = {}, _this.components = {
      panel: _panel2.default,
      counter1: _counter2.default,
      counter2: _counter2.default,
      list: _list2.default,
      group: _group2.default,
      toast: _wepyComToast2.default,
      Swiper: _swiper2.default,
      SearchBar: _searchbar2.default,
      Ads: _ads2.default,
      animeList: _animeList2.default
    }, _this.mixins = [_test2.default], _this.data = {
      swipers: [{ image: 'http://p79mwfmry.bkt.clouddn.com/2.jpg', url: '' }, { image: 'http://p79mwfmry.bkt.clouddn.com/3.jpg', url: '' }]
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      request: function request() {
        var self = this;
        var i = 10;
        var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
        while (i--) {
          _wepy2.default.request({
            method: 'POST',
            url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
            success: function success(d) {
              self.netrst += d.data + '.';
              self.$apply();
            }
          });
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Top, [{
    key: 'onReadt',
    value: function onReadt() {
      this.initPageData();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
    }
  }, {
    key: 'initPageData',
    value: function initPageData() {
      // 处理轮播图
      this.swipers.push({ image: 'http://p79mwfmry.bkt.clouddn.com/2.jpg', url: '' });
    }
  }]);

  return Top;
}(_wepy2.default.page)) || _class);
exports.default = Top;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibW9kdWxlQSIsIlRvcCIsIm51bSIsInN0YXRlIiwiY291bnRlciIsImFzeW5jTnVtIiwic3VtTnVtIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiUGFuZWwiLCJjb3VudGVyMSIsIkNvdW50ZXIiLCJjb3VudGVyMiIsImxpc3QiLCJMaXN0IiwiZ3JvdXAiLCJHcm91cCIsInRvYXN0IiwiVG9hc3QiLCJTd2lwZXIiLCJTZWFyY2hCYXIiLCJBZHMiLCJhbmltZUxpc3QiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwic3dpcGVycyIsImltYWdlIiwidXJsIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInJlcXVlc3QiLCJzZWxmIiwiaSIsIm1hcCIsIndlcHkiLCJtZXRob2QiLCJzdWNjZXNzIiwiZCIsIm5ldHJzdCIsIiRhcHBseSIsImV2ZW50cyIsImluaXRQYWdlRGF0YSIsInB1c2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7a0JBR3lDO0FBQ1Q7QUFDUTtBQUNQOzs7QUFML0I7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFJQUEsUUFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDQyxpQkFBakMsRSxDQUEwQzs7SUFjckJDLEcsV0FacEIsd0JBQVE7QUFDUEMsS0FETyxlQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxPQUFOLENBQWNGLEdBQXJCO0FBQ0QsR0FITTtBQUlQRyxVQUpPLG9CQUlHRixLQUpILEVBSVU7QUFDZixXQUFPQSxNQUFNQyxPQUFOLENBQWNDLFFBQXJCO0FBQ0QsR0FOTTtBQU9QQyxRQVBPLGtCQU9DSCxLQVBELEVBT1E7QUFDYixXQUFPQSxNQUFNQyxPQUFOLENBQWNGLEdBQWQsR0FBb0JDLE1BQU1DLE9BQU4sQ0FBY0MsUUFBekM7QUFDRDtBQVRNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7Z0xBYUNFLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFNBQXRDLEVBQWdELFVBQVMsS0FBekQsRUFBVixFQUEwRSxPQUFNLEVBQUMsT0FBTSxnQkFBUCxFQUFoRixFQUF5RyxhQUFZLEVBQUMsb0JBQW1CLE1BQXBCLEVBQTJCLFNBQVEsTUFBbkMsRUFBMEMsdUJBQXNCLFNBQWhFLEVBQTBFLHNCQUFxQixZQUEvRixFQUFySCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxhQUFPQyxlQURDO0FBRVJDLGdCQUFVQyxpQkFGRjtBQUdSQyxnQkFBVUQsaUJBSEY7QUFJUkUsWUFBTUMsY0FKRTtBQUtSQyxhQUFPQyxlQUxDO0FBTVJDLGFBQU9DLHNCQU5DO0FBT1JDLGNBQU9BLGdCQVBDO0FBUVJDLGlCQUFVQSxtQkFSRjtBQVNSQyxXQUFJQSxhQVRJO0FBVVJDLGlCQUFVQTtBQVZGLEssUUFhVkMsTSxHQUFTLENBQUNDLGNBQUQsQyxRQUVUQyxJLEdBQU87QUFDTEMsZUFBUyxDQUNQLEVBQUNDLE9BQU8sd0NBQVIsRUFBa0RDLEtBQUssRUFBdkQsRUFETyxFQUVQLEVBQUNELE9BQU8sd0NBQVIsRUFBa0RDLEtBQUssRUFBdkQsRUFGTztBQURKLEssUUFPUEMsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0Y7QUFDTCxlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBTVhDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsSUFBSSxFQUFSO0FBQ0EsWUFBSUMsTUFBTSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLE1BQWpFLEVBQXlFLE1BQXpFLENBQVY7QUFDQSxlQUFPRCxHQUFQLEVBQVk7QUFDVkUseUJBQUtKLE9BQUwsQ0FBYTtBQUNYSyxvQkFBTyxNQURJO0FBRVhWLGlCQUFLLDREQUE0RFEsSUFBSUQsQ0FBSixDQUE1RCxHQUFxRSxLQUFyRSxHQUE2RUEsQ0FGdkU7QUFHWEkscUJBQVMsaUJBQVVDLENBQVYsRUFBYTtBQUNwQk4sbUJBQUtPLE1BQUwsSUFBZUQsRUFBRWYsSUFBRixHQUFTLEdBQXhCO0FBQ0FTLG1CQUFLUSxNQUFMO0FBQ0Q7QUFOVSxXQUFiO0FBUUQ7QUFDRjtBQWZPLEssUUFrQlZDLE0sR0FBUyxFOzs7Ozs4QkFHQTtBQUNQLFdBQUtDLFlBQUw7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSVYsT0FBTyxJQUFYO0FBQ0Q7OzttQ0FDYTtBQUNaO0FBQ0EsV0FBS1IsT0FBTCxDQUFhbUIsSUFBYixDQUFrQixFQUFDbEIsT0FBTyx3Q0FBUixFQUFpREMsS0FBSSxFQUFyRCxFQUFsQjtBQUNEOzs7O0VBakU4QlMsZUFBS1MsSTtrQkFBakJsRCxHIiwiZmlsZSI6InRvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJyAvLyBhbGlhcyBleGFtcGxlXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCcgLy8gYWxpYXNGaWVsZHMgZXhhbXBsZVxuICBpbXBvcnQgbW9kdWxlQSBmcm9tICdtb2R1bGUtYScgLy8gYWxpYXNGaWVsZHMgaWdub3JlIG1vZHVsZSBleGFtcGxlXG4gIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG4gIGltcG9ydCBTd2lwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zd2lwZXInXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXG4gIGltcG9ydCBBZHMgZnJvbSAnLi4vY29tcG9uZW50cy9hZHMnXG4gIGltcG9ydCBhbmltZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hbmltZUxpc3QnXG5cblxuXG4gIGNvbnNvbGUubG9nKCdtb2R1bGVBIGlnbm9yZWQ6ICcsIG1vZHVsZUEpIC8vID0+IG1vZHVsZUEgaWdub3JlZDoge31cblxuICBAY29ubmVjdCh7XG4gICAgbnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtXG4gICAgfSxcbiAgICBhc3luY051bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfSxcbiAgICBzdW1OdW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW0gKyBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfVxuICB9KVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i/veeVquaOqOiNkCdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN3aXBlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJzd2lwZXJzXCIsXCJoZWlnaHRcIjpcIjI4MFwifSxcIkFkc1wiOntcImFkc1wiOlwi5qyi6L+O5Yqg576k77yaNTc1MTgwODM3XCJ9LFwiYW5pbWVMaXN0XCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwidGl0bGVcIjpcIui/veeVquaOqOiNkFwiLFwidi1iaW5kOmxvYWRpbmcuc3luY1wiOlwibG9hZGluZ1wiLFwidi1iaW5kOm5vTW9yZS5zeW5jXCI6XCJub01vcmVMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgICBsaXN0OiBMaXN0LFxuICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgdG9hc3Q6IFRvYXN0LFxuICAgICAgU3dpcGVyOlN3aXBlcixcbiAgICAgIFNlYXJjaEJhcjpTZWFyY2hCYXIsXG4gICAgICBBZHM6QWRzLFxuICAgICAgYW5pbWVMaXN0OmFuaW1lTGlzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgc3dpcGVyczogW1xuICAgICAgICB7aW1hZ2U6ICdodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8yLmpwZycsIHVybDogJyd9LFxuICAgICAgICB7aW1hZ2U6ICdodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8zLmpwZycsIHVybDogJyd9XG4gICAgICBdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgcmVxdWVzdCAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgaSA9IDEwXG4gICAgICAgIGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXVxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJ1xuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cbiAgICBvblJlYWR0KCl7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpO1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB9XG4gICAgaW5pdFBhZ2VEYXRhKCl7XG4gICAgICAvLyDlpITnkIbova7mkq3lm75cbiAgICAgIHRoaXMuc3dpcGVycy5wdXNoKHtpbWFnZTogJ2h0dHA6Ly9wNzltd2ZtcnkuYmt0LmNsb3VkZG4uY29tLzIuanBnJyx1cmw6Jyd9KVxuICAgIH1cbiAgfVxuIl19