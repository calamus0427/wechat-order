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

exports.default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsIiRnZXRVc2VySW5mbyIsImluZm8iLCJ1aW5mbyIsImdldE9iamVjdCIsInVzZXJJbmZvIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdFBhZ2VEYXRhIiwid2VweSIsInBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYW5pbWVMaXN0IiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJ1c2VyIiwiZGF0YSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiaWRlbnRpdHkiLCJ0eXBlIiwiY29sbGVjdGlvbiIsImNvbXB1dGVkIiwic3RhciIsInRpdGxlIiwibWV0aG9kcyIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUtxQkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFtRFg7QUFBQTs7QUFDTDtBQUNELFdBQUtDLFlBQUwsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLFlBQU1DLFFBQVEsT0FBS0MsU0FBTCxDQUFlRixJQUFmLENBQWQ7QUFDQSxZQUFNRyxXQUFXLE9BQUtELFNBQUwsQ0FBZSxPQUFLQyxRQUFwQixDQUFqQjtBQUNBLGVBQUtBLFFBQUwsR0FBZ0JDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixRQUFsQixFQUE0QkYsS0FBNUIsQ0FBaEI7QUFDQSxlQUFLSyxZQUFMO0FBQ0QsT0FMRDtBQU1EOzs7d0NBQ21CO0FBQ2xCLFdBQUtBLFlBQUw7QUFDRDs7OzZCQUNRLENBRVI7Ozs7RUFqRStCQyxlQUFLQyxJOzs7OztPQUNyQ0MsTSxHQUFTO0FBQ1BDLDRCQUF3QjtBQURqQixHO09BR1ZDLE8sR0FBVSxFO09BQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxTQUFRLE1BQVQsRUFBZ0IsZ0JBQWUsRUFBL0IsRUFBa0Msb0JBQW1CLE1BQXJELEVBQTRELHVCQUFzQixTQUFsRixFQUE0RixzQkFBcUIsWUFBakgsRUFBYixFO09BQ1RDLE8sR0FBVSxFO09BQ1RDLFUsR0FBYTtBQUNSQyxlQUFVQTtBQURGLEc7T0FJVkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxFQUFhQyxjQUFiLEM7T0FFVEMsSSxHQUFPO0FBQ0xqQixjQUFVO0FBQ1JrQixnQkFBVSxVQURGO0FBRVI7QUFDQUMsaUJBQVcsMkNBSEg7O0FBS1JDLGdCQUFVO0FBQ1JDLGNBQU0sU0FERTtBQUVSQyxvQkFBWTtBQUZKO0FBTEY7QUFETCxHO09BYVBDLFEsR0FBVztBQUNUQyxRQURTLGtCQUNIO0FBQ0osVUFBTUMsUUFBUSxLQUFLMUIsU0FBTCxDQUFlLEtBQUtBLFNBQUwsQ0FBZSxLQUFLQyxRQUFwQixFQUE4Qm9CLFFBQTdDLEVBQXVERSxVQUFyRTtBQUNBLGFBQU9HLEtBQVA7QUFDRCxLQUpRO0FBS1RMLFlBTFMsc0JBS0U7QUFDVCxhQUFPLEtBQUtyQixTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlLEtBQUtDLFFBQXBCLEVBQThCb0IsUUFBN0MsQ0FBUDtBQUNELEtBUFE7QUFRVEYsWUFSUyxzQkFRRTtBQUNULFVBQU1yQixPQUFPLEtBQUtFLFNBQUwsQ0FBZSxLQUFLQyxRQUFwQixDQUFiO0FBQ0E7QUFDQSxhQUFRSCxLQUFLcUIsUUFBTCxJQUFpQnJCLEtBQUtzQixTQUF2QixHQUFvQ3RCLEtBQUtxQixRQUF6QyxHQUFvRCxPQUEzRDtBQUNEO0FBWlEsRztPQWVYUSxPLEdBQVUsRTtPQUlWQyxNLEdBQVM7QUFDUCxrQkFBYyxxQkFBYTtBQUFBOztBQUN6QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQUMsY0FBUUMsR0FBUixDQUFlLE9BQUtDLEtBQXBCLGlCQUFxQ0osT0FBT0ssSUFBNUMsY0FBeURMLE9BQU9NLE1BQVAsQ0FBY0YsS0FBdkU7QUFDRDtBQUpNLEc7OztrQkE3Q1VyQyxJIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuICBpbXBvcnQgdXNlciBmcm9tICcuLi9taXhpbnMvdXNlcidcbiAgaW1wb3J0IGFuaW1lTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2FuaW1lTGlzdCdcblxuXG5cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pyV55qE5a+d5a6rJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYW5pbWVMaXN0XCI6e1widGl0bGVcIjpcIuaIkeeahOi/veeVqlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdGFyLnN5bmNcIjpcInN0YXJcIixcInYtYmluZDpsb2FkaW5nLnN5bmNcIjpcImxvYWRpbmdcIixcInYtYmluZDpub01vcmUuc3luY1wiOlwibm9Nb3JlTGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBhbmltZUxpc3Q6YW5pbWVMaXN0XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHAsIHVzZXJdXG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfkvo3lpYnml6DkuIroh7PlsIrkuYvkuronLFxuICAgICAgICAvLyDlpLTlg4/ljaDkvY3lm75cbiAgICAgICAgYXZhdGFyVXJsOiAnaHR0cDovL3AzaTEwaGpzNy5ia3QuY2xvdWRkbi5jb20vdXNlci5qcGcnLFxuXG4gICAgICAgIGlkZW50aXR5OiB7XG4gICAgICAgICAgdHlwZTogJ+e9quWfn+S5i+mqqOe7iOaIkOeOiycsXG4gICAgICAgICAgY29sbGVjdGlvbjogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBzdGFyKCl7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRPYmplY3QodGhpcy5nZXRPYmplY3QodGhpcy51c2VySW5mbykuaWRlbnRpdHkpLmNvbGxlY3Rpb25cbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgICAgfSxcbiAgICAgIGlkZW50aXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QodGhpcy5nZXRPYmplY3QodGhpcy51c2VySW5mbykuaWRlbnRpdHkpXG4gICAgICB9LFxuICAgICAgbmlja05hbWUoKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKVxuICAgICAgICAvLyDlkI3np7DmiJblpLTlg4/kuI3kuLrnqbrnmoTvvIzmiY3orqTkuLrmmK/mjojmnYPnlKjmiLdcbiAgICAgICAgcmV0dXJuIChpbmZvLm5pY2tOYW1lIHx8IGluZm8uYXZhdGFyVXJsKSA/IGluZm8ubmlja05hbWUgOiAn5pyq5o6I5p2D55So5oi3J1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cbiAgICBvblNob3coKXtcbiAgICAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICAgIHRoaXMuJGdldFVzZXJJbmZvKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHVpbmZvID0gdGhpcy5nZXRPYmplY3QoaW5mbylcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSB0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKVxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgdXNlckluZm8sIHVpbmZvKVxuICAgICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgICB9KVxuICAgIH1cbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuICB9XG4iXX0=