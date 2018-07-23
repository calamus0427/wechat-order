'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

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
      pages: ['pages/address', 'pages/submit', 'pages/status', 'pages/order'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#13BA84',
        navigationBarTitleText: '医院订餐服务',
        navigationBarTextStyle: '#fff'
      },
      tabBar: {
        color: '#AEADAD',
        selectedColor: '#FF5577',
        backgroundColor: '#fff',
        borderStyle: 'black',
        "list": [{
          pagePath: 'pages/order',
          selectedIconPath: './images/tabbars/active.jpg',
          iconPath: './images/tabbars/icon-mark@2x.png',
          text: '订餐服务'
        }, {
          pagePath: 'pages/address',
          selectedIconPath: './images/tabbars/active.jpg',
          iconPath: './images/tabbars/icon-shelf@2x.png',
          text: '新增收货地址'
        }, {
          pagePath: 'pages/status',
          selectedIconPath: './images/tabbars/active.jpg',
          iconPath: './images/tabbars/icon-smile@2x.png',
          text: '订餐成功'
        }, {
          pagePath: 'pages/submit',
          selectedIconPath: './images/tabbars/active.jpg',
          iconPath: './images/tabbars/icon-smile@2x.png',
          text: '提交订单'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclN0eWxlIiwicGFnZVBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiaWNvblBhdGgiLCJ0ZXh0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJ3ZXB5IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7Ozs7QUFrREUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQS9DZkMsTUErQ2UsR0EvQ047QUFDUEMsYUFBTyxDQUNMLGVBREssRUFFTCxjQUZLLEVBR0wsY0FISyxFQUlMLGFBSkssQ0FEQTtBQU9QQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BUEQ7QUFhUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyx5QkFBaUIsTUFIWDtBQUlOQyxxQkFBYSxPQUpQO0FBS0osZ0JBQVEsQ0FBQztBQUNUQyxvQkFBVSxhQUREO0FBRVRDLDRCQUFrQiw2QkFGVDtBQUdUQyxvQkFBVSxtQ0FIRDtBQUlUQyxnQkFBTTtBQUpHLFNBQUQsRUFLUjtBQUNBSCxvQkFBVSxlQURWO0FBRUFDLDRCQUFrQiw2QkFGbEI7QUFHQUMsb0JBQVUsb0NBSFY7QUFJQUMsZ0JBQU07QUFKTixTQUxRLEVBVVA7QUFDREgsb0JBQVUsY0FEVDtBQUVEQyw0QkFBa0IsNkJBRmpCO0FBR0RDLG9CQUFVLG9DQUhUO0FBSURDLGdCQUFNO0FBSkwsU0FWTyxFQWVSO0FBQ0FILG9CQUFVLGNBRFY7QUFFQUMsNEJBQWtCLDZCQUZsQjtBQUdBQyxvQkFBVSxvQ0FIVjtBQUlBQyxnQkFBTTtBQUpOLFNBZlE7QUFMSjtBQWJELEtBK0NNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7Ozs7K0JBRVU7QUFDVCxXQUFLQyxTQUFMO0FBQ0Q7OzswQkFFTUMsQyxFQUFHO0FBQ1IsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVRyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtkLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNEYyxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkosZUFBS2QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJpQixJQUFJakIsUUFBL0I7QUFDQVksZ0JBQU1BLEdBQUdLLElBQUlqQixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUFqRjBCYyxlQUFLSSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxuc2V0U3RvcmUoc3RvcmUpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9hZGRyZXNzJyxcbiAgICAgICdwYWdlcy9zdWJtaXQnLFxuICAgICAgJ3BhZ2VzL3N0YXR1cycsXG4gICAgICAncGFnZXMvb3JkZXInXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzEzQkE4NCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yy76Zmi6K6i6aSQ5pyN5YqhJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICcjZmZmJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyNBRUFEQUQnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyNGRjU1NzcnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXJTdHlsZTogJ2JsYWNrJyxcbiAgICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvb3JkZXInLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9hY3RpdmUuanBnJyxcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tbWFya0AyeC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6K6i6aSQ5pyN5YqhJ1xuICAgICAgfSx7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvYWRkcmVzcycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2FjdGl2ZS5qcGcnLFxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1zaGVsZkAyeC5wbmcnLFxuICAgICAgICB0ZXh0OiAn5paw5aKe5pS26LSn5Zyw5Z2AJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3N0YXR1cycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2FjdGl2ZS5qcGcnLFxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1zbWlsZUAyeC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6K6i6aSQ5oiQ5YqfJ1xuICAgICAgfSx7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc3VibWl0JyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvYWN0aXZlLmpwZycsXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9pY29uLXNtaWxlQDJ4LnBuZycsXG4gICAgICAgIHRleHQ6ICfmj5DkuqTorqLljZUnXG4gICAgICB9XG4gICAgICAgIF1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIHRoaXMudGVzdEFzeW5jKClcbiAgfVxuXG4gIHNsZWVwIChzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgIH0sIHMgKiAxMDAwKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19