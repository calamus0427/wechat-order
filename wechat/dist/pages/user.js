'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _user = require('./../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

var _animeList = require('./../components/animeList.js');

var _animeList2 = _interopRequireDefault(_animeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_wepy$page) {
  _inherits(User, _wepy$page);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: 'onShow',
    value: function onShow() {
      var _this2 = this;

      // 初始化页面数据
      this.$getUserInfo(function (info) {
        var uinfo = _this2.getObject(info);
        var userInfo = _this2.getObject(_this2.userInfo);
        _this2.userInfo = Object.assign({}, userInfo, uinfo);
        _this2.initPageData();
      });
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.initPageData();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return User;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.config = {
    navigationBarTitleText: '朕的寝宫'
  };
  this.$repeat = {};
  this.$props = { "animeList": { "title": "我的追番", "xmlns:v-bind": "", "v-bind:star.sync": "star", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMoreList" } };
  this.$events = {};
  this.components = {
    animeList: _animeList2.default
  };
  this.mixins = [_base2.default, _http2.default, _user2.default];
  this.data = {
    userInfo: {
      nickName: '侍奉无上至尊之人',
      // 头像占位图
      avatarUrl: 'http://p3i10hjs7.bkt.clouddn.com/user.jpg',

      identity: {
        type: '罪域之骨终成王',
        collection: 1
      }
    }
  };
  this.computed = {
    star: function star() {
      console.log("1", this.getObject(this.getObject(this.userInfo).identity).collection);
      var title = this.getObject(this.getObject(this.userInfo).identity).collection;
      return title;
    },
    identity: function identity() {
      return this.getObject(this.getObject(this.userInfo).identity);
    },
    nickName: function nickName() {
      var info = this.getObject(this.userInfo);
      // 名称或头像不为空的，才认为是授权用户
      return info.nickName || info.avatarUrl ? info.nickName : '未授权用户';
    }
  };
  this.methods = {};
  this.events = {
    'index-emit': function indexEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this3.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(User , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsIiRnZXRVc2VySW5mbyIsImluZm8iLCJ1aW5mbyIsImdldE9iamVjdCIsInVzZXJJbmZvIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdFBhZ2VEYXRhIiwid2VweSIsInBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYW5pbWVMaXN0IiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJ1c2VyIiwiZGF0YSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiaWRlbnRpdHkiLCJ0eXBlIiwiY29sbGVjdGlvbiIsImNvbXB1dGVkIiwic3RhciIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1ldGhvZHMiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUtxQkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFvRFg7QUFBQTs7QUFDTDtBQUNELFdBQUtDLFlBQUwsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLFlBQU1DLFFBQVEsT0FBS0MsU0FBTCxDQUFlRixJQUFmLENBQWQ7QUFDQSxZQUFNRyxXQUFXLE9BQUtELFNBQUwsQ0FBZSxPQUFLQyxRQUFwQixDQUFqQjtBQUNBLGVBQUtBLFFBQUwsR0FBZ0JDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixRQUFsQixFQUE0QkYsS0FBNUIsQ0FBaEI7QUFDQSxlQUFLSyxZQUFMO0FBQ0QsT0FMRDtBQU1EOzs7d0NBQ21CO0FBQ2xCLFdBQUtBLFlBQUw7QUFDRDs7OzZCQUNRLENBRVI7Ozs7RUFsRStCQyxlQUFLQyxJOzs7OztPQUNyQ0MsTSxHQUFTO0FBQ1BDLDRCQUF3QjtBQURqQixHO09BR1ZDLE8sR0FBVSxFO09BQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxTQUFRLE1BQVQsRUFBZ0IsZ0JBQWUsRUFBL0IsRUFBa0Msb0JBQW1CLE1BQXJELEVBQTRELHVCQUFzQixTQUFsRixFQUE0RixzQkFBcUIsWUFBakgsRUFBYixFO09BQ1RDLE8sR0FBVSxFO09BQ1RDLFUsR0FBYTtBQUNSQyxlQUFVQTtBQURGLEc7T0FJVkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxFQUFhQyxjQUFiLEM7T0FFVEMsSSxHQUFPO0FBQ0xqQixjQUFVO0FBQ1JrQixnQkFBVSxVQURGO0FBRVI7QUFDQUMsaUJBQVcsMkNBSEg7O0FBS1JDLGdCQUFVO0FBQ1JDLGNBQU0sU0FERTtBQUVSQyxvQkFBWTtBQUZKO0FBTEY7QUFETCxHO09BYVBDLFEsR0FBVztBQUNUQyxRQURTLGtCQUNIO0FBQ0pDLGNBQVFDLEdBQVIsQ0FBWSxHQUFaLEVBQWdCLEtBQUszQixTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlLEtBQUtDLFFBQXBCLEVBQThCb0IsUUFBN0MsRUFBdURFLFVBQXZFO0FBQ0EsVUFBTUssUUFBUSxLQUFLNUIsU0FBTCxDQUFlLEtBQUtBLFNBQUwsQ0FBZSxLQUFLQyxRQUFwQixFQUE4Qm9CLFFBQTdDLEVBQXVERSxVQUFyRTtBQUNBLGFBQU9LLEtBQVA7QUFDRCxLQUxRO0FBTVRQLFlBTlMsc0JBTUU7QUFDVCxhQUFPLEtBQUtyQixTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlLEtBQUtDLFFBQXBCLEVBQThCb0IsUUFBN0MsQ0FBUDtBQUNELEtBUlE7QUFTVEYsWUFUUyxzQkFTRTtBQUNULFVBQU1yQixPQUFPLEtBQUtFLFNBQUwsQ0FBZSxLQUFLQyxRQUFwQixDQUFiO0FBQ0E7QUFDQSxhQUFRSCxLQUFLcUIsUUFBTCxJQUFpQnJCLEtBQUtzQixTQUF2QixHQUFvQ3RCLEtBQUtxQixRQUF6QyxHQUFvRCxPQUEzRDtBQUNEO0FBYlEsRztPQWdCWFUsTyxHQUFVLEU7T0FJVkMsTSxHQUFTO0FBQ1Asa0JBQWMscUJBQWE7QUFBQTs7QUFDekIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FOLGNBQVFDLEdBQVIsQ0FBZSxPQUFLTSxLQUFwQixpQkFBcUNGLE9BQU9HLElBQTVDLGNBQXlESCxPQUFPSSxNQUFQLENBQWNGLEtBQXZFO0FBQ0Q7QUFKTSxHOzs7a0JBOUNVckMsSSIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IHVzZXIgZnJvbSAnLi4vbWl4aW5zL3VzZXInXG4gIGltcG9ydCBhbmltZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hbmltZUxpc3QnXG5cblxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+acleeahOWvneWuqydcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImFuaW1lTGlzdFwiOntcInRpdGxlXCI6XCLmiJHnmoTov73nlapcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3Rhci5zeW5jXCI6XCJzdGFyXCIsXCJ2LWJpbmQ6bG9hZGluZy5zeW5jXCI6XCJsb2FkaW5nXCIsXCJ2LWJpbmQ6bm9Nb3JlLnN5bmNcIjpcIm5vTW9yZUxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgYW5pbWVMaXN0OmFuaW1lTGlzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwLCB1c2VyXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOiAn5L6N5aWJ5peg5LiK6Iez5bCK5LmL5Lq6JyxcbiAgICAgICAgLy8g5aS05YOP5Y2g5L2N5Zu+XG4gICAgICAgIGF2YXRhclVybDogJ2h0dHA6Ly9wM2kxMGhqczcuYmt0LmNsb3VkZG4uY29tL3VzZXIuanBnJyxcblxuICAgICAgICBpZGVudGl0eToge1xuICAgICAgICAgIHR5cGU6ICfnvarln5/kuYvpqqjnu4jmiJDnjosnLFxuICAgICAgICAgIGNvbGxlY3Rpb246IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgc3Rhcigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIjFcIix0aGlzLmdldE9iamVjdCh0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKS5pZGVudGl0eSkuY29sbGVjdGlvbilcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmdldE9iamVjdCh0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKS5pZGVudGl0eSkuY29sbGVjdGlvblxuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgICB9LFxuICAgICAgaWRlbnRpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdCh0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKS5pZGVudGl0eSlcbiAgICAgIH0sXG4gICAgICBuaWNrTmFtZSgpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuZ2V0T2JqZWN0KHRoaXMudXNlckluZm8pXG4gICAgICAgIC8vIOWQjeensOaIluWktOWDj+S4jeS4uuepuueahO+8jOaJjeiupOS4uuaYr+aOiOadg+eUqOaIt1xuICAgICAgICByZXR1cm4gKGluZm8ubmlja05hbWUgfHwgaW5mby5hdmF0YXJVcmwpID8gaW5mby5uaWNrTmFtZSA6ICfmnKrmjojmnYPnlKjmiLcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICB9XG4gICAgfVxuICAgIG9uU2hvdygpe1xuICAgICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxuICAgICAgdGhpcy4kZ2V0VXNlckluZm8oKGluZm8pID0+IHtcbiAgICAgICAgY29uc3QgdWluZm8gPSB0aGlzLmdldE9iamVjdChpbmZvKVxuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHRoaXMuZ2V0T2JqZWN0KHRoaXMudXNlckluZm8pXG4gICAgICAgIHRoaXMudXNlckluZm8gPSBPYmplY3QuYXNzaWduKHt9LCB1c2VySW5mbywgdWluZm8pXG4gICAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICAgIH0pXG4gICAgfVxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG4gIH1cbiJdfQ==