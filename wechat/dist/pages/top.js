'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Top , 'pages/top'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibW9kdWxlQSIsIlRvcCIsIm51bSIsInN0YXRlIiwiY291bnRlciIsImFzeW5jTnVtIiwic3VtTnVtIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiUGFuZWwiLCJjb3VudGVyMSIsIkNvdW50ZXIiLCJjb3VudGVyMiIsImxpc3QiLCJMaXN0IiwiZ3JvdXAiLCJHcm91cCIsInRvYXN0IiwiVG9hc3QiLCJTd2lwZXIiLCJTZWFyY2hCYXIiLCJBZHMiLCJhbmltZUxpc3QiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwic3dpcGVycyIsImltYWdlIiwidXJsIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInJlcXVlc3QiLCJzZWxmIiwiaSIsIm1hcCIsIndlcHkiLCJzdWNjZXNzIiwiZCIsIm5ldHJzdCIsIiRhcHBseSIsImV2ZW50cyIsImluaXRQYWdlRGF0YSIsInB1c2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7a0JBR3lDO0FBQ1Q7QUFDUTtBQUNQOzs7QUFML0I7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFJQUEsUUFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDQyxpQkFBakMsRSxDQUEwQzs7SUFjckJDLEcsV0FacEIsd0JBQVE7QUFDUEMsS0FETyxlQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxPQUFOLENBQWNGLEdBQXJCO0FBQ0QsR0FITTtBQUlQRyxVQUpPLG9CQUlHRixLQUpILEVBSVU7QUFDZixXQUFPQSxNQUFNQyxPQUFOLENBQWNDLFFBQXJCO0FBQ0QsR0FOTTtBQU9QQyxRQVBPLGtCQU9DSCxLQVBELEVBT1E7QUFDYixXQUFPQSxNQUFNQyxPQUFOLENBQWNGLEdBQWQsR0FBb0JDLE1BQU1DLE9BQU4sQ0FBY0MsUUFBekM7QUFDRDtBQVRNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7Z0xBYUNFLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFNBQXRDLEVBQWdELFVBQVMsS0FBekQsRUFBVixFQUEwRSxPQUFNLEVBQUMsT0FBTSxnQkFBUCxFQUFoRixFQUF5RyxhQUFZLEVBQUMsb0JBQW1CLE1BQXBCLEVBQTJCLFNBQVEsTUFBbkMsRUFBMEMsdUJBQXNCLFNBQWhFLEVBQTBFLHNCQUFxQixZQUEvRixFQUFySCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxhQUFPQyxlQURDO0FBRVJDLGdCQUFVQyxpQkFGRjtBQUdSQyxnQkFBVUQsaUJBSEY7QUFJUkUsWUFBTUMsY0FKRTtBQUtSQyxhQUFPQyxlQUxDO0FBTVJDLGFBQU9DLHNCQU5DO0FBT1JDLGNBQU9BLGdCQVBDO0FBUVJDLGlCQUFVQSxtQkFSRjtBQVNSQyxXQUFJQSxhQVRJO0FBVVJDLGlCQUFVQTtBQVZGLEssUUFhVkMsTSxHQUFTLENBQUNDLGNBQUQsQyxRQUVUQyxJLEdBQU87QUFDTEMsZUFBUyxDQUNQLEVBQUNDLE9BQU8sd0NBQVIsRUFBa0RDLEtBQUssRUFBdkQsRUFETyxFQUVQLEVBQUNELE9BQU8sd0NBQVIsRUFBa0RDLEtBQUssRUFBdkQsRUFGTztBQURKLEssUUFPUEMsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0Y7QUFDTCxlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBTVhDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsSUFBSSxFQUFSO0FBQ0EsWUFBSUMsTUFBTSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLE1BQWpFLEVBQXlFLE1BQXpFLENBQVY7QUFDQSxlQUFPRCxHQUFQLEVBQVk7QUFDVkUseUJBQUtKLE9BQUwsQ0FBYTtBQUNYTCxpQkFBSyw0REFBNERRLElBQUlELENBQUosQ0FBNUQsR0FBcUUsS0FBckUsR0FBNkVBLENBRHZFO0FBRVhHLHFCQUFTLGlCQUFVQyxDQUFWLEVBQWE7QUFDcEJMLG1CQUFLTSxNQUFMLElBQWVELEVBQUVkLElBQUYsR0FBUyxHQUF4QjtBQUNBUyxtQkFBS08sTUFBTDtBQUNEO0FBTFUsV0FBYjtBQU9EO0FBQ0Y7QUFkTyxLLFFBaUJWQyxNLEdBQVMsRTs7Ozs7OEJBR0E7QUFDUCxXQUFLQyxZQUFMO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlULE9BQU8sSUFBWDtBQUNEOzs7bUNBQ2E7QUFDWjtBQUNBLFdBQUtSLE9BQUwsQ0FBYWtCLElBQWIsQ0FBa0IsRUFBQ2pCLE9BQU8sd0NBQVIsRUFBaURDLEtBQUksRUFBckQsRUFBbEI7QUFDRDs7OztFQWhFOEJTLGVBQUtRLEk7a0JBQWpCakQsRyIsImZpbGUiOiJ0b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCBQYW5lbCBmcm9tICdAL2NvbXBvbmVudHMvcGFuZWwnIC8vIGFsaWFzIGV4YW1wbGVcbiAgaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcicgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnIC8vIGFsaWFzRmllbGRzIGV4YW1wbGVcbiAgaW1wb3J0IG1vZHVsZUEgZnJvbSAnbW9kdWxlLWEnIC8vIGFsaWFzRmllbGRzIGlnbm9yZSBtb2R1bGUgZXhhbXBsZVxuICBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICBpbXBvcnQgU3dpcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc3dpcGVyJ1xuICBpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyJ1xuICBpbXBvcnQgQWRzIGZyb20gJy4uL2NvbXBvbmVudHMvYWRzJ1xuICBpbXBvcnQgYW5pbWVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvYW5pbWVMaXN0J1xuXG5cblxuICBjb25zb2xlLmxvZygnbW9kdWxlQSBpZ25vcmVkOiAnLCBtb2R1bGVBKSAvLyA9PiBtb2R1bGVBIGlnbm9yZWQ6IHt9XG5cbiAgQGNvbm5lY3Qoe1xuICAgIG51bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bVxuICAgIH0sXG4gICAgYXN5bmNOdW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5hc3luY051bVxuICAgIH0sXG4gICAgc3VtTnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtICsgc3RhdGUuY291bnRlci5hc3luY051bVxuICAgIH1cbiAgfSlcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb3AgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfov73nlarmjqjojZAnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTd2lwZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwic3dpcGVyc1wiLFwiaGVpZ2h0XCI6XCIyODBcIn0sXCJBZHNcIjp7XCJhZHNcIjpcIuasoui/juWKoOe+pO+8mjU3NTE4MDgzN1wifSxcImFuaW1lTGlzdFwiOntcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIixcInRpdGxlXCI6XCLov73nlarmjqjojZBcIixcInYtYmluZDpsb2FkaW5nLnN5bmNcIjpcImxvYWRpbmdcIixcInYtYmluZDpub01vcmUuc3luY1wiOlwibm9Nb3JlTGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWwsXG4gICAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgbGlzdDogTGlzdCxcbiAgICAgIGdyb3VwOiBHcm91cCxcbiAgICAgIHRvYXN0OiBUb2FzdCxcbiAgICAgIFN3aXBlcjpTd2lwZXIsXG4gICAgICBTZWFyY2hCYXI6U2VhcmNoQmFyLFxuICAgICAgQWRzOkFkcyxcbiAgICAgIGFuaW1lTGlzdDphbmltZUxpc3RcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHN3aXBlcnM6IFtcbiAgICAgICAge2ltYWdlOiAnaHR0cDovL3A3OW13Zm1yeS5ia3QuY2xvdWRkbi5jb20vMi5qcGcnLCB1cmw6ICcnfSxcbiAgICAgICAge2ltYWdlOiAnaHR0cDovL3A3OW13Zm1yeS5ia3QuY2xvdWRkbi5jb20vMy5qcGcnLCB1cmw6ICcnfVxuICAgICAgXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHJlcXVlc3QgKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGkgPSAxMFxuICAgICAgICBsZXQgbWFwID0gWydNQT09JywgJ01Rbz0nLCAnTWc9PScsICdNdz09JywgJ05BPT0nLCAnTlE9PScsICdOZz09JywgJ053PT0nLCAnT0E9PScsICdPUT09J11cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJ1xuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cbiAgICBvblJlYWR0KCl7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpO1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB9XG4gICAgaW5pdFBhZ2VEYXRhKCl7XG4gICAgICAvLyDlpITnkIbova7mkq3lm75cbiAgICAgIHRoaXMuc3dpcGVycy5wdXNoKHtpbWFnZTogJ2h0dHA6Ly9wNzltd2ZtcnkuYmt0LmNsb3VkZG4uY29tLzIuanBnJyx1cmw6Jyd9KVxuICAgIH1cbiAgfVxuIl19