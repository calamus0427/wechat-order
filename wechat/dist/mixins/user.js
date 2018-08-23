'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { service } from '../config.js'

var userMixin = function (_wepy$mixin) {
  _inherits(userMixin, _wepy$mixin);

  function userMixin() {
    _classCallCheck(this, userMixin);

    return _possibleConstructorReturn(this, (userMixin.__proto__ || Object.getPrototypeOf(userMixin)).apply(this, arguments));
  }

  _createClass(userMixin, [{
    key: 'isFunction',

    /* ============= 工具方法（mixins没法复写，就再写一遍了） ============= */
    value: function isFunction(item) {
      return typeof item === 'function';
    }

    /* ========================== 用户方法 ========================== */
    // 获取用户信息

  }, {
    key: '$getUserInfo',
    value: function $getUserInfo(callback) {
      var _this2 = this;

      // 顶级容错
      if (!this.$parent || !this.$parent.$updateGlobalData) return;
      // 取缓存信息
      var user = this.$parent.$updateGlobalData('user');
      // 不重复获取用户信息
      if (user && user.nickName) {
        this.isFunction(callback) && callback(user);
        this.$apply();
        return user;
      }
      // 首次获取用户信息
      this.$login(function () {
        // 再获取用户信息
        _this2._wxUserInfo(callback);
      });
    }

    // 进行微信登陆

  }, {
    key: '$login',
    value: function $login() {
      var _this3 = this;

      var _success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var noAutoLogin = arguments[1];

      // 先登录
      _wepy2.default.login({
        success: function success(res) {
          console.log('wepy.login.success:', res);

          // 如果不需要自动登录，就return
          if (noAutoLogin) {
            // 串行回调
            _this3.isFunction(_success) && _success(res);
            _this3.$apply();
            return;
          }

          // 根据业务接口处理:业务登陆:异步
          // this.$post({ url: service.login, data: {code: res.code} }, {
          //   success: ({code, data}) => {},
          //   fail: ({code, data}) => {}
          // })

          // ===== 以下随机示例 =====
          setTimeout(function () {
            _this3.$parent.$updateGlobalData('user', {
              session: Math.random().toString(36).substring(2),
              packages: {
                times: 0,
                quantity: 0,
                status: '未借阅'
              },
              identity: {
                collection: 20,
                type: '未订阅用户',
                mobile: '1234567890',
                address: '在那遥远的地方 有一位美丽的姑娘'
              }
            });
            // 串行回调
            _this3.isFunction(_success) && _success(res);
            _this3.$apply();
          }, 100);
        },
        fail: function fail(res) {
          console.log('wepy.login.fail:', res);
        }
      });
    }

    /* ========================= 其他方法 ========================= */
    // 获取用户公开信息（微信）

  }, {
    key: '_wxUserInfo',
    value: function _wxUserInfo(callback) {
      var _this4 = this;

      _wepy2.default.getUserInfo({
        success: function success(res) {
          console.log('wepy.getUserInfo.success:', res);
          // 缓存用户信息
          var user = _this4.$parent.$updateGlobalData('user', res.userInfo);
          _this4.isFunction(callback) && callback(user);
          _this4.$apply();
        },
        fail: function fail(res) {
          console.log('wepy.getUserInfo.fail:', res);
          // 用户拒绝授权:填充默认数据
          var user = _this4.$parent.$updateGlobalData('user', {
            nickName: '未授权',
            avatarUrl: '/images/icon/icon-avatar@2x.png'
          });

          // 串行回调
          _this4.isFunction(callback) && callback(user);
          _this4.$apply();

          // 尝试授权
          _this4._wxAuthModal(callback);
        }
      });
    }

    // 提示用户开启授权

  }, {
    key: '_wxAuthModal',
    value: function _wxAuthModal(callback) {
      var _this5 = this;

      // 先判断是否支持开启授权页的API
      wx.openSetting && wx.showModal({
        title: '授权提示',
        content: 'BookMall希望获得以下权限：\n · 获取您的公开信息（昵称、头像等）',
        confirmText: '去授权',
        cancelText: '先不授权',
        success: function success(res) {
          if (res.confirm) {
            console.log('_wxAuthModal.showModal: 用户点击确定', res);
            _this5._wxOpenSetting(callback);
          }
        }
      });
    }

    // 打开授权页

  }, {
    key: '_wxOpenSetting',
    value: function _wxOpenSetting(callback) {
      var _this6 = this;

      wx.openSetting && wx.openSetting({
        success: function success(_ref) {
          var authSetting = _ref.authSetting;

          console.log('wx.openSetting.success', authSetting);
          if (authSetting['scope.userInfo']) {
            // 用户打开设置，重新获取信息
            _this6._wxUserInfo(callback);
          }
        }
      });
    }
  }]);

  return userMixin;
}(_wepy2.default.mixin);

exports.default = userMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsidXNlck1peGluIiwiaXRlbSIsImNhbGxiYWNrIiwiJHBhcmVudCIsIiR1cGRhdGVHbG9iYWxEYXRhIiwidXNlciIsIm5pY2tOYW1lIiwiaXNGdW5jdGlvbiIsIiRhcHBseSIsIiRsb2dpbiIsIl93eFVzZXJJbmZvIiwic3VjY2VzcyIsIm5vQXV0b0xvZ2luIiwid2VweSIsImxvZ2luIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJzZXNzaW9uIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicGFja2FnZXMiLCJ0aW1lcyIsInF1YW50aXR5Iiwic3RhdHVzIiwiaWRlbnRpdHkiLCJjb2xsZWN0aW9uIiwidHlwZSIsIm1vYmlsZSIsImFkZHJlc3MiLCJmYWlsIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImF2YXRhclVybCIsIl93eEF1dGhNb2RhbCIsInd4Iiwib3BlblNldHRpbmciLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsImNhbmNlbFRleHQiLCJjb25maXJtIiwiX3d4T3BlblNldHRpbmciLCJhdXRoU2V0dGluZyIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7QUFDbkI7K0JBQ1dDLEksRUFBTTtBQUNmLGFBQU8sT0FBT0EsSUFBUCxLQUFnQixVQUF2QjtBQUNEOztBQUVEO0FBQ0E7Ozs7aUNBQ2FDLFEsRUFBVTtBQUFBOztBQUNyQjtBQUNBLFVBQUksQ0FBQyxLQUFLQyxPQUFOLElBQWlCLENBQUMsS0FBS0EsT0FBTCxDQUFhQyxpQkFBbkMsRUFBc0Q7QUFDdEQ7QUFDQSxVQUFNQyxPQUFPLEtBQUtGLE9BQUwsQ0FBYUMsaUJBQWIsQ0FBK0IsTUFBL0IsQ0FBYjtBQUNBO0FBQ0EsVUFBSUMsUUFBUUEsS0FBS0MsUUFBakIsRUFBMkI7QUFDekIs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LEVBQVM7QUFDaEIsY0FBSUEsSUFBSThCLE9BQVIsRUFBaUI7QUFDZjdCLG9CQUFRQyxHQUFSLENBQVksZ0NBQVosRUFBOENGLEdBQTlDO0FBQ0EsbUJBQUsrQixjQUFMLENBQW9CNUMsUUFBcEI7QUFDRDtBQUNGO0FBVjRCLE9BQWIsQ0FBbEI7QUFZRDs7QUFFRDs7OzttQ0FDZUEsUSxFQUFVO0FBQUE7O0FBQ3ZCb0MsU0FBR0MsV0FBSCxJQUFrQkQsR0FBR0MsV0FBSCxDQUFlO0FBQy9CNUIsaUJBQVMsdUJBQW1CO0FBQUEsY0FBakJvQyxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQzFCL0Isa0JBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQzhCLFdBQXRDO0FBQ0EsY0FBSUEsWUFBWSxnQkFBWixDQUFKLEVBQW1DO0FBQ2pDO0FBQ0EsbUJBQUtyQyxXQUFMLENBQWlCUixRQUFqQjtBQUNEO0FBQ0Y7QUFQOEIsT0FBZixDQUFsQjtBQVNEOzs7O0VBbklvQ1csZUFBS21DLEs7O2tCQUF2QmhELFMiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB1c2VyTWl4aW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcbiAgLyogPT09PT09PT09PT09PSDlt6Xlhbfmlrnms5XvvIhtaXhpbnPmsqHms5XlpI3lhpnvvIzlsLHlho3lhpnkuIDpgY3kuobvvIkgPT09PT09PT09PT09PSAqL1xuICBpc0Z1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbidcbiAgfVxuXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09IOeUqOaIt+aWueazlSA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgJGdldFVzZXJJbmZvKGNhbGxiYWNrKSB7XG4gICAgLy8g6aG257qn5a656ZSZXG4gICAgaWYgKCF0aGlzLiRwYXJlbnQgfHwgIXRoaXMuJHBhcmVudC4kdXBkYXRlR2xvYmFsRGF0YSkgcmV0dXJuXG4gICAgLy8g5Y+W57yT5a2Y5L+h5oGvXG4gICAgY29uc3QgdXNlciA9IHRoaXMuJHBhcmVudC4kdXBkYXRlR2xvYmFsRGF0YSgndXNlcicpXG4gICAgLy8g5LiN6YeN5aSN6I635Y+W55So5oi35L+h5oGvXG4gICAgaWYgKHVzZXIgJiYgdXNlci5uaWNrTmFtZSkge1xuICAgICAgdGhpcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayh1c2VyKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9XG4gICAgLy8g6aaW5qyh6I635Y+W55So5oi35L+h5oGvXG4gICAgdGhpcy4kbG9naW4oKCkgPT4ge1xuICAgICAgLy8g5YaN6I635Y+W55So5oi35L+h5oGvXG4gICAgICB0aGlzLl93eFVzZXJJbmZvKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICAvLyDov5vooYzlvq7kv6HnmbvpmYZcbiAgJGxvZ2luKHN1Y2Nlc3MgPSAoKSA9PiB7fSwgbm9BdXRvTG9naW4pIHtcbiAgICAvLyDlhYjnmbvlvZVcbiAgICB3ZXB5LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dlcHkubG9naW4uc3VjY2VzczonLCByZXMpXG5cbiAgICAgICAgLy8g5aaC5p6c5LiN6ZyA6KaB6Ieq5Yqo55m75b2V77yM5bCxcmV0dXJuXG4gICAgICAgIGlmIChub0F1dG9Mb2dpbikge1xuICAgICAgICAgIC8vIOS4suihjOWbnuiwg1xuICAgICAgICAgIHRoaXMuaXNGdW5jdGlvbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcylcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIY65Lia5Yqh55m76ZmGOuW8guatpVxuICAgICAgICAvLyB0aGlzLiRwb3N0KHsgdXJsOiBzZXJ2aWNlLmxvZ2luLCBkYXRhOiB7Y29kZTogcmVzLmNvZGV9IH0sIHtcbiAgICAgICAgLy8gICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7fSxcbiAgICAgICAgLy8gICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7fVxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vID09PT09IOS7peS4i+maj+acuuekuuS+iyA9PT09PVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEoJ3VzZXInLCB7XG4gICAgICAgICAgICBzZXNzaW9uOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiksXG4gICAgICAgICAgICBwYWNrYWdlczoge1xuICAgICAgICAgICAgICB0aW1lczogMCxcbiAgICAgICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgICAgICAgIHN0YXR1czogJ+acquWAn+mYhSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpZGVudGl0eToge1xuICAgICAgICAgICAgICBjb2xsZWN0aW9uOiAyMCxcbiAgICAgICAgICAgICAgdHlwZTogJ+acquiuoumYheeUqOaItycsXG4gICAgICAgICAgICAgIG1vYmlsZTogJzEyMzQ1Njc4OTAnLFxuICAgICAgICAgICAgICBhZGRyZXNzOiAn5Zyo6YKj6YGl6L+c55qE5Zyw5pa5IOacieS4gOS9jee+juS4veeahOWnkeWomCcsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyDkuLLooYzlm57osINcbiAgICAgICAgICB0aGlzLmlzRnVuY3Rpb24oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LCAxMDApXG4gICAgICB9LFxuICAgICAgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnd2VweS5sb2dpbi5mYWlsOicsIHJlcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PSDlhbbku5bmlrnms5UgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAvLyDojrflj5bnlKjmiLflhazlvIDkv6Hmga/vvIjlvq7kv6HvvIlcbiAgX3d4VXNlckluZm8oY2FsbGJhY2spIHtcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dlcHkuZ2V0VXNlckluZm8uc3VjY2VzczonLCByZXMpXG4gICAgICAgIC8vIOe8k+WtmOeUqOaIt+S/oeaBr1xuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy4kcGFyZW50LiR1cGRhdGVHbG9iYWxEYXRhKCd1c2VyJywgcmVzLnVzZXJJbmZvKVxuICAgICAgICB0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHVzZXIpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZXB5LmdldFVzZXJJbmZvLmZhaWw6JywgcmVzKVxuICAgICAgICAvLyDnlKjmiLfmi5Lnu53mjojmnYM65aGr5YWF6buY6K6k5pWw5o2uXG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEoJ3VzZXInLCB7XG4gICAgICAgICAgbmlja05hbWU6ICfmnKrmjojmnYMnLFxuICAgICAgICAgIGF2YXRhclVybDogJy9pbWFnZXMvaWNvbi9pY29uLWF2YXRhckAyeC5wbmcnXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g5Liy6KGM5Zue6LCDXG4gICAgICAgIHRoaXMuaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2sodXNlcilcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuXG4gICAgICAgIC8vIOWwneivleaOiOadg1xuICAgICAgICB0aGlzLl93eEF1dGhNb2RhbChjYWxsYmFjaylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8g5o+Q56S655So5oi35byA5ZCv5o6I5p2DXG4gIF93eEF1dGhNb2RhbChjYWxsYmFjaykge1xuICAgIC8vIOWFiOWIpOaWreaYr+WQpuaUr+aMgeW8gOWQr+aOiOadg+mhteeahEFQSVxuICAgIHd4Lm9wZW5TZXR0aW5nICYmIHd4LnNob3dNb2RhbCh7XG4gICAgICB0aXRsZTogJ+aOiOadg+aPkOekuicsXG4gICAgICBjb250ZW50OiAnQm9va01hbGzluIzmnJvojrflvpfku6XkuIvmnYPpmZDvvJpcXG4gwrcg6I635Y+W5oKo55qE5YWs5byA5L+h5oGv77yI5pi156ew44CB5aS05YOP562J77yJJyxcbiAgICAgIGNvbmZpcm1UZXh0OiAn5Y675o6I5p2DJyxcbiAgICAgIGNhbmNlbFRleHQ6ICflhYjkuI3mjojmnYMnLFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnX3d4QXV0aE1vZGFsLnNob3dNb2RhbDog55So5oi354K55Ye756Gu5a6aJywgcmVzKVxuICAgICAgICAgIHRoaXMuX3d4T3BlblNldHRpbmcoY2FsbGJhY2spXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8g5omT5byA5o6I5p2D6aG1XG4gIF93eE9wZW5TZXR0aW5nKGNhbGxiYWNrKSB7XG4gICAgd3gub3BlblNldHRpbmcgJiYgd3gub3BlblNldHRpbmcoe1xuICAgICAgc3VjY2VzczogKHthdXRoU2V0dGluZ30pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3d4Lm9wZW5TZXR0aW5nLnN1Y2Nlc3MnLCBhdXRoU2V0dGluZylcbiAgICAgICAgaWYgKGF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g55So5oi35omT5byA6K6+572u77yM6YeN5paw6I635Y+W5L+h5oGvXG4gICAgICAgICAgdGhpcy5fd3hVc2VySW5mbyhjYWxsYmFjaylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==