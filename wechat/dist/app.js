'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _redux = require('./npm/redux/lib/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/order', 'pages/submit', 'pages/address', 'pages/status'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#13BA84',
        navigationBarTitleText: '医院订餐服务',
        navigationBarTextStyle: '#fff'
      }
    };
    _this.globalData = {
      userInfo: null,
      code: ''
    };

    _this.use('promisify');
    _this.use('requestfix');
    //构建拦截器
    // this.intercept('request', {
    //     config (p) {
    //       p.header = this.code;
    //       return p;
    //     }
    //   });
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loginwexin();

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }, {
    key: 'loginwexin',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _wepy2.default.login().then(function (res) {
                  _this2.code = res.code;
                  _wepy2.default.getUserInfo().then(function (res) {
                    console.log(res.userInfo);
                    _this2.userInfo = res.userInfo;
                  });
                });

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loginwexin() {
        return _ref2.apply(this, arguments);
      }

      return loginwexin;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImNvZGUiLCJ1c2UiLCJsb2dpbndleGluIiwid2VweSIsImxvZ2luIiwidGhlbiIsInJlcyIsImdldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozs7O0FBdUJFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFwQmZDLE1Bb0JlLEdBcEJOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsY0FGSyxFQUdMLGVBSEssRUFJTCxjQUpLLENBREE7QUFPUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQVBELEtBb0JNO0FBQUEsVUFMZkMsVUFLZSxHQUxGO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsWUFBSztBQUZNLEtBS0U7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFdBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsWUFBVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVmE7QUFXZDs7Ozs7Ozs7OztBQUdDLHFCQUFLQyxVQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlDQywrQkFBS0MsS0FBTCxHQUFhQyxJQUFiLENBQWtCLFVBQUNDLEdBQUQsRUFBTztBQUN4Qix5QkFBS04sSUFBTCxHQUFZTSxJQUFJTixJQUFoQjtBQUNBRyxpQ0FBS0ksV0FBTCxHQUFtQkYsSUFBbkIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFPO0FBQzlCRSw0QkFBUUMsR0FBUixDQUFZSCxJQUFJUCxRQUFoQjtBQUNHLDJCQUFLQSxRQUFMLEdBQWdCTyxJQUFJUCxRQUFwQjtBQUNILG1CQUhEO0FBSUEsaUJBTkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2Q3dCSSxlQUFLTyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IHNldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcbnNldFN0b3JlKHN0b3JlKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvb3JkZXInLCBcbiAgICAgICdwYWdlcy9zdWJtaXQnLCAgICAgICAgXG4gICAgICAncGFnZXMvYWRkcmVzcycsIFxuICAgICAgJ3BhZ2VzL3N0YXR1cydcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMTNCQTg0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljLvpmaLorqLppJDmnI3liqEnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJyNmZmYnXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgICBjb2RlOicnXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAvL+aehOW7uuaLpuaIquWZqFxuICAgIC8vIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xuICAgIC8vICAgICBjb25maWcgKHApIHtcbiAgICAvLyAgICAgICBwLmhlYWRlciA9IHRoaXMuY29kZTtcbiAgICAvLyAgICAgICByZXR1cm4gcDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gIH1cblxuICBhc3luYyBvbkxhdW5jaCgpIHtcbiAgICB0aGlzLmxvZ2lud2V4aW4oKVxuICB9XG4gIFxuICBhc3luYyBsb2dpbndleGluKCl7XG4gICAgIHdlcHkubG9naW4oKS50aGVuKChyZXMpPT57XG4gICAgICB0aGlzLmNvZGUgPSByZXMuY29kZSA7XG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKCkudGhlbigocmVzKT0+e1xuICAgICAgIGNvbnNvbGUubG9nKHJlcy51c2VySW5mbylcbiAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvIDtcbiAgICAgIH0pXG4gICAgIH0pXG4gIH1cbiAgXG59XG4iXX0=