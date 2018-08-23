'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var httpMixin = function (_wepy$mixin) {
  _inherits(httpMixin, _wepy$mixin);

  function httpMixin() {
    _classCallCheck(this, httpMixin);

    return _possibleConstructorReturn(this, (httpMixin.__proto__ || Object.getPrototypeOf(httpMixin)).apply(this, arguments));
  }

  _createClass(httpMixin, [{
    key: '$get',

    /* =================== [$get 发起GET请求] =================== */
    value: function $get(_ref, _ref2) {
      var _ref$url = _ref.url,
          url = _ref$url === undefined ? '' : _ref$url,
          _ref$headers = _ref.headers,
          headers = _ref$headers === undefined ? {} : _ref$headers,
          _ref$data = _ref.data,
          data = _ref$data === undefined ? {} : _ref$data;
      var _ref2$success = _ref2.success,
          success = _ref2$success === undefined ? function () {} : _ref2$success,
          _ref2$fail = _ref2.fail,
          fail = _ref2$fail === undefined ? function () {} : _ref2$fail,
          _ref2$complete = _ref2.complete,
          complete = _ref2$complete === undefined ? function () {} : _ref2$complete;

      var methods = 'GET';
      this.$ajax({ url: url, headers: headers, methods: methods, data: data }, { success: success, fail: fail, complete: complete });
    }

    /* =================== [$post 发起POST请求] =================== */

  }, {
    key: '$post',
    value: function $post(_ref3, _ref4) {
      var _ref3$url = _ref3.url,
          url = _ref3$url === undefined ? '' : _ref3$url,
          _ref3$headers = _ref3.headers,
          headers = _ref3$headers === undefined ? {} : _ref3$headers,
          _ref3$data = _ref3.data,
          data = _ref3$data === undefined ? {} : _ref3$data;
      var _ref4$success = _ref4.success,
          success = _ref4$success === undefined ? function () {} : _ref4$success,
          _ref4$fail = _ref4.fail,
          fail = _ref4$fail === undefined ? function () {} : _ref4$fail,
          _ref4$complete = _ref4.complete,
          complete = _ref4$complete === undefined ? function () {} : _ref4$complete;

      var methods = 'POST';
      this.$ajax({ url: url, headers: headers, methods: methods, data: data }, { success: success, fail: fail, complete: complete });
    }

    /**
     * [ajax 统一请求方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */

  }, {
    key: '$ajax',
    value: function $ajax(_ref5, _ref6) {
      var _this2 = this;

      var _ref5$url = _ref5.url,
          url = _ref5$url === undefined ? '' : _ref5$url,
          _ref5$headers = _ref5.headers,
          headers = _ref5$headers === undefined ? {} : _ref5$headers,
          _ref5$methods = _ref5.methods,
          methods = _ref5$methods === undefined ? 'GET' : _ref5$methods,
          _ref5$data = _ref5.data,
          data = _ref5$data === undefined ? {} : _ref5$data;

      var _ref6$success = _ref6.success,
          _success = _ref6$success === undefined ? function () {} : _ref6$success,
          _ref6$fail = _ref6.fail,
          _fail = _ref6$fail === undefined ? function () {} : _ref6$fail,
          _ref6$complete = _ref6.complete,
          _complete = _ref6$complete === undefined ? function () {} : _ref6$complete;

      // 增强体验：加载中
      wx.showNavigationBarLoading();

      // 构造请求体
      var request = {
        url: url,
        method: ['GET', 'POST'].indexOf(methods) > -1 ? methods : 'GET',
        header: Object.assign({
          // set something global
        }, headers),
        data: Object.assign({
          // set something global
        }, data)

        // 控制台调试日志
      };console.table(request);

      // 发起请求
      _wepy2.default.request(Object.assign(request, {
        success: function success(_ref7) {
          var statusCode = _ref7.statusCode,
              data = _ref7.data;

          // 控制台调试日志
          console.log('[SUCCESS]', statusCode, (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? data : data.toString().substring(0, 100));

          // 状态码正常 & 确认有数据
          if (0 === +data.code && data.data) {
            // 成功回调
            return setTimeout(function () {
              _this2.isFunction(_success) && _success(_extends({ statusCode: statusCode }, data));
              _this2.$apply();
            });
          }

          // 失败回调：其他情况
          return setTimeout(function () {
            _this2.isFunction(_fail) && _fail(_extends({ statusCode: statusCode }, data));
            _this2.$apply();
          });
        },
        fail: function fail(_ref8) {
          var statusCode = _ref8.statusCode,
              data = _ref8.data;

          // 控制台调试日志
          console.log('[FAIL]', statusCode, data);
          // 失败回调
          return setTimeout(function () {
            _this2.isFunction(_fail) && _fail(_extends({ statusCode: statusCode }, data));
            _this2.$apply();
          });
        },
        complete: function complete(res) {
          // 控制台调试日志
          console.log('[COMPLETE]', res);
          // 隐藏加载提示
          wx.hideNavigationBarLoading();
          // 停止下拉状态
          wx.stopPullDownRefresh();
          // 完成回调
          return function () {
            _this2.isFunction(_complete) && _complete(res);
            _this2.$apply();
          }();
        }
      }));
    }
  }]);

  return httpMixin;
}(_wepy2.default.mixin);

exports.default = httpMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuanMiXSwibmFtZXMiOlsiaHR0cE1peGluIiwidXJsIiwiaGVhZGVycyIsImRhdGEiLCJzdWNjZXNzIiwiZmFpbCIsImNvbXBsZXRlIiwibWV0aG9kcyIsIiRhamF4Iiwid3giLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwiaW5kZXhPZiIsImhlYWRlciIsIk9iamVjdCIsImFzc2lnbiIsImNvbnNvbGUiLCJ0YWJsZSIsIndlcHkiLCJzdGF0dXNDb2RlIiwibG9nIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJjb2RlIiwic2V0VGltZW91dCIsImlzRnVuY3Rpb24iLCIkYXBwbHkiLCJyZXMiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7QUFDbkI7c0NBSUU7QUFBQSwwQkFGQ0MsR0FFRDtBQUFBLFVBRkNBLEdBRUQsNEJBRk8sRUFFUDtBQUFBLDhCQUZXQyxPQUVYO0FBQUEsVUFGV0EsT0FFWCxnQ0FGcUIsRUFFckI7QUFBQSwyQkFGeUJDLElBRXpCO0FBQUEsVUFGeUJBLElBRXpCLDZCQUZnQyxFQUVoQztBQUFBLGdDQURDQyxPQUNEO0FBQUEsVUFEQ0EsT0FDRCxpQ0FEVyxZQUFNLENBQUUsQ0FDbkI7QUFBQSw2QkFEcUJDLElBQ3JCO0FBQUEsVUFEcUJBLElBQ3JCLDhCQUQ0QixZQUFNLENBQUUsQ0FDcEM7QUFBQSxpQ0FEc0NDLFFBQ3RDO0FBQUEsVUFEc0NBLFFBQ3RDLGtDQURpRCxZQUFNLENBQUUsQ0FDekQ7O0FBQ0EsVUFBTUMsVUFBVSxLQUFoQjtBQUNBLFdBQUtDLEtBQUwsQ0FDRSxFQUFDUCxRQUFELEVBQU1DLGdCQUFOLEVBQWVLLGdCQUFmLEVBQXdCSixVQUF4QixFQURGLEVBRUUsRUFBQ0MsZ0JBQUQsRUFBVUMsVUFBVixF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QUFOLElBQXFCakIsSUFBckIsRUFBekI7QUFDQSxtQkFBS3dCLE1BQUw7QUFDRCxXQUhNLENBQVA7QUFJRCxTQW5CaUM7QUFvQmxDdEIsY0FBTSxxQkFBMEI7QUFBQSxjQUF2QmUsVUFBdUIsU0FBdkJBLFVBQXVCO0FBQUEsY0FBWGpCLElBQVcsU0FBWEEsSUFBVzs7QUFDOUI7QUFDQWMsa0JBQVFJLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRCxVQUF0QixFQUFrQ2pCLElBQWxDO0FBQ0E7QUFDQSxpQkFBT3NCLFdBQVcsWUFBTTtBQUN0QixtQkFBS0MsVUFBTCxDQUFnQnJCLEtBQWhCLEtBQXlCQSxpQkFBTWUsc0JBQU4sSUFBcUJqQixJQUFyQixFQUF6QjtBQUNBLG1CQUFLd0IsTUFBTDtBQUNELFdBSE0sQ0FBUDtBQUlELFNBNUJpQztBQTZCbENyQixrQkFBVSxrQkFBQ3NCLEdBQUQsRUFBUztBQUNqQjtBQUNBWCxrQkFBUUksR0FBUixDQUFZLFlBQVosRUFBMEJPLEdBQTFCO0FBQ0E7QUFDQW5CLGFBQUdvQix3QkFBSDtBQUNBO0FBQ0FwQixhQUFHcUIsbUJBQUg7QUFDQTtBQUNBLGlCQUFRLFlBQU07QUFDWixtQkFBS0osVUFBTCxDQUFnQnBCLFNBQWhCLEtBQTZCQSxVQUFTc0IsR0FBVCxDQUE3QjtBQUNBLG1CQUFLRCxNQUFMO0FBQ0QsV0FITSxFQUFQO0FBSUQ7QUF6Q2lDLE9BQXZCLENBQWI7QUEyQ0Q7Ozs7RUFoR29DUixlQUFLWSxLOztrQkFBdkIvQixTIiwiZmlsZSI6Imh0dHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBodHRwTWl4aW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcbiAgLyogPT09PT09PT09PT09PT09PT09PSBbJGdldCDlj5HotbdHRVTor7fmsYJdID09PT09PT09PT09PT09PT09PT0gKi9cbiAgJGdldChcbiAgICB7dXJsID0gJycsIGhlYWRlcnMgPSB7fSwgZGF0YSA9IHt9IH0sIFxuICAgIHtzdWNjZXNzID0gKCkgPT4ge30sIGZhaWwgPSAoKSA9PiB7fSwgY29tcGxldGUgPSAoKSA9PiB7fSB9XG4gICkge1xuICAgIGNvbnN0IG1ldGhvZHMgPSAnR0VUJ1xuICAgIHRoaXMuJGFqYXgoXG4gICAgICB7dXJsLCBoZWFkZXJzLCBtZXRob2RzLCBkYXRhfSwgXG4gICAgICB7c3VjY2VzcywgZmFpbCwgY29tcGxldGUgfVxuICAgIClcbiAgfVxuXG4gIC8qID09PT09PT09PT09PT09PT09PT0gWyRwb3N0IOWPkei1t1BPU1Tor7fmsYJdID09PT09PT09PT09PT09PT09PT0gKi9cbiAgJHBvc3QoXG4gICAge3VybCA9ICcnLCBoZWFkZXJzID0ge30sIGRhdGEgPSB7fSB9LCBcbiAgICB7c3VjY2VzcyA9ICgpID0+IHt9LCBmYWlsID0gKCkgPT4ge30sIGNvbXBsZXRlID0gKCkgPT4ge30gfVxuICApIHtcbiAgICBjb25zdCBtZXRob2RzID0gJ1BPU1QnXG4gICAgdGhpcy4kYWpheChcbiAgICAgIHt1cmwsIGhlYWRlcnMsIG1ldGhvZHMsIGRhdGF9LCBcbiAgICAgIHtzdWNjZXNzLCBmYWlsLCBjb21wbGV0ZSB9XG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFthamF4IOe7n+S4gOivt+axguaWueazlV1cbiAgICogQHBhcmFtICB7W3R5cGVdfSAgaXRlbSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgJGFqYXgoXG4gICAge3VybCA9ICcnLCBoZWFkZXJzID0ge30sIG1ldGhvZHMgPSAnR0VUJywgZGF0YSA9IHt9IH0sIFxuICAgIHtzdWNjZXNzID0gKCkgPT4ge30sIGZhaWwgPSAoKSA9PiB7fSwgY29tcGxldGUgPSAoKSA9PiB7fSB9XG4gICkge1xuICAgIC8vIOWinuW8uuS9k+mqjO+8muWKoOi9veS4rVxuICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG5cbiAgICAvLyDmnoTpgKDor7fmsYLkvZNcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kOiBbJ0dFVCcsICdQT1NUJ10uaW5kZXhPZihtZXRob2RzKSA+IC0xID8gbWV0aG9kcyA6ICdHRVQnLFxuICAgICAgaGVhZGVyOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgLy8gc2V0IHNvbWV0aGluZyBnbG9iYWxcbiAgICAgIH0sIGhlYWRlcnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vIHNldCBzb21ldGhpbmcgZ2xvYmFsXG4gICAgICB9LCBkYXRhKVxuICAgIH1cblxuICAgIC8vIOaOp+WItuWPsOiwg+ivleaXpeW/l1xuICAgIGNvbnNvbGUudGFibGUocmVxdWVzdClcblxuICAgIC8vIOWPkei1t+ivt+axglxuICAgIHdlcHkucmVxdWVzdChPYmplY3QuYXNzaWduKHJlcXVlc3QsIHtcbiAgICAgIHN1Y2Nlc3M6ICh7IHN0YXR1c0NvZGUsIGRhdGEgfSkgPT4ge1xuICAgICAgICAvLyDmjqfliLblj7DosIPor5Xml6Xlv5dcbiAgICAgICAgY29uc29sZS5sb2coJ1tTVUNDRVNTXScsIHN0YXR1c0NvZGUsIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyA/IGRhdGEgOiBkYXRhLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwMCkpXG5cbiAgICAgICAgLy8g54q25oCB56CB5q2j5bi4ICYg56Gu6K6k5pyJ5pWw5o2uXG4gICAgICAgIGlmICgwID09PSArZGF0YS5jb2RlICYmIGRhdGEuZGF0YSkge1xuICAgICAgICAgIC8vIOaIkOWKn+Wbnuiwg1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNGdW5jdGlvbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtzdGF0dXNDb2RlLCAuLi5kYXRhfSlcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aSx6LSl5Zue6LCD77ya5YW25LuW5oOF5Ya1XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRnVuY3Rpb24oZmFpbCkgJiYgZmFpbCh7c3RhdHVzQ29kZSwgLi4uZGF0YX0pXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6ICh7IHN0YXR1c0NvZGUsIGRhdGEgfSkgPT4ge1xuICAgICAgICAvLyDmjqfliLblj7DosIPor5Xml6Xlv5dcbiAgICAgICAgY29uc29sZS5sb2coJ1tGQUlMXScsIHN0YXR1c0NvZGUsIGRhdGEpXG4gICAgICAgIC8vIOWksei0peWbnuiwg1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0Z1bmN0aW9uKGZhaWwpICYmIGZhaWwoe3N0YXR1c0NvZGUsIC4uLmRhdGF9KVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKHJlcykgPT4ge1xuICAgICAgICAvLyDmjqfliLblj7DosIPor5Xml6Xlv5dcbiAgICAgICAgY29uc29sZS5sb2coJ1tDT01QTEVURV0nLCByZXMpXG4gICAgICAgIC8vIOmakOiXj+WKoOi9veaPkOekulxuICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgICAvLyDlgZzmraLkuIvmi4nnirbmgIFcbiAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICAgIC8vIOWujOaIkOWbnuiwg1xuICAgICAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRnVuY3Rpb24oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcylcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0pKClcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxufVxuXG4iXX0=