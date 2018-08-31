'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _time = require('./../components/time.js');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var submit = function (_wepy$page) {
  _inherits(submit, _wepy$page);

  function submit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, submit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = submit.__proto__ || Object.getPrototypeOf(submit)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [], _this.config = {
      navigationBarTitleText: '提交订单'
    }, _this.$repeat = {}, _this.$props = { "Time": { "current": "currentTime", "xmlns:v-bind": "", "v-bind:flag.sync": "flag", "v-bind:currentTime.sync": "choosedTime" } }, _this.$events = {}, _this.components = {
      Time: _time2.default
    }, _this.mixins = [], _this.data = {
      hospital: {
        name: '一食堂1'
      },
      message: {
        address: '西安软件园',
        name: '兰正龙',
        sex: 'male',
        tel: '0000000000',
        time: '立即送出'
      },
      foodList: [],
      sumPrice: '',
      choosedTime: '立即送出',
      flag: false
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(submit, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.message = JSON.parse(options.message);
      this.foodList = JSON.parse(options.foodList);
      this.sumPrice = JSON.parse(options.sumPrice);
      this.choosedTime = JSON.parse(options.choosedTime);
      console.log("info", options);
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      this.initPage();
    }
  }, {
    key: 'initPage',
    value: function initPage() {
      this.getHosipital();
    }
  }, {
    key: 'chooseTime',
    value: function chooseTime() {
      console.log("选时间");
      this.flag = true;
    }
  }, {
    key: 'chooseAddress',
    value: function chooseAddress() {
      var message = JSON.stringify(this.message);
      var choosedTime = JSON.stringify(this.choosedTime);
      var foodList = JSON.stringify(this.foodList);
      var sumPrice = JSON.stringify(this.sumPrice);
      wx.navigateTo({
        url: "/pages/address?message=" + message + "&choosedTime=" + choosedTime + "&sumPrice=" + sumPrice + "&foodList=" + foodList
      });
    }
  }, {
    key: 'submit',
    value: function submit() {
      var message = JSON.stringify(this.message);
      var choosedTime = JSON.stringify(this.choosedTime);
      var foodList = JSON.stringify(this.foodList);
      var sumPrice = JSON.stringify(this.sumPrice);

      console.log("submit", message);
      wx.navigateTo({
        url: "/pages/status?message=" + message + "&choosedTime=" + choosedTime + "&sumPrice=" + sumPrice + "&foodList=" + foodList
      });
    }
  }, {
    key: 'getHosipital',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "http://localhost:8080/get_info";

                _wepy2.default.request(url).then(function (res) {
                  console.log("food=>>", res.data);
                  _this2.hospital.name = res.data[0].resname;
                  _this2.$apply();
                });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getHosipital() {
        return _ref2.apply(this, arguments);
      }

      return getHosipital;
    }()
  }]);

  return submit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(submit , 'pages/submit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGltZSIsInRpbWUiLCJkYXRhIiwiaG9zcGl0YWwiLCJuYW1lIiwibWVzc2FnZSIsImFkZHJlc3MiLCJzZXgiLCJ0ZWwiLCJmb29kTGlzdCIsInN1bVByaWNlIiwiY2hvb3NlZFRpbWUiLCJmbGFnIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJpbml0UGFnZSIsImdldEhvc2lwaXRhbCIsInN0cmluZ2lmeSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJyZXF1ZXN0IiwidGhlbiIsInJlcyIsInJlc25hbWUiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUdxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVMsRSxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLFdBQVUsYUFBWCxFQUF5QixnQkFBZSxFQUF4QyxFQUEyQyxvQkFBbUIsTUFBOUQsRUFBcUUsMkJBQTBCLGFBQS9GLEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsWUFBS0M7QUFERyxLLFFBSVZSLE0sR0FBUyxFLFFBRVRTLEksR0FBTztBQUNMQyxnQkFBUztBQUNQQyxjQUFLO0FBREUsT0FESjtBQUlMQyxlQUFRO0FBQ05DLGlCQUFRLE9BREY7QUFFTkYsY0FBSyxLQUZDO0FBR05HLGFBQUksTUFIRTtBQUlOQyxhQUFJLFlBSkU7QUFLTlAsY0FBSztBQUxDLE9BSkg7QUFXTFEsZ0JBQVMsRUFYSjtBQVlMQyxnQkFBUyxFQVpKO0FBYUxDLG1CQUFZLE1BYlA7QUFjTEMsWUFBSztBQWRBLEssUUFpQlBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OzsyQkFJRkMsTyxFQUFTO0FBQ1osV0FBS1gsT0FBTCxHQUFlWSxLQUFLQyxLQUFMLENBQVdGLFFBQVFYLE9BQW5CLENBQWY7QUFDQSxXQUFLSSxRQUFMLEdBQWdCUSxLQUFLQyxLQUFMLENBQVdGLFFBQVFQLFFBQW5CLENBQWhCO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQk8sS0FBS0MsS0FBTCxDQUFXRixRQUFRTixRQUFuQixDQUFoQjtBQUNBLFdBQUtDLFdBQUwsR0FBbUJNLEtBQUtDLEtBQUwsQ0FBV0YsUUFBUUwsV0FBbkIsQ0FBbkI7QUFDQVEsY0FBUUMsR0FBUixDQUFZLE1BQVosRUFBbUJKLE9BQW5CO0FBQ0g7Ozs4QkFFUztBQUNSLFdBQUtLLFFBQUw7QUFDRDs7OytCQUVTO0FBQ1IsV0FBS0MsWUFBTDtBQUNEOzs7aUNBQ1c7QUFDVkgsY0FBUUMsR0FBUixDQUFZLEtBQVo7QUFDQSxXQUFLUixJQUFMLEdBQVksSUFBWjtBQUNEOzs7b0NBQ2M7QUFDYixVQUFJUCxVQUFVWSxLQUFLTSxTQUFMLENBQWUsS0FBS2xCLE9BQXBCLENBQWQ7QUFDQSxVQUFJTSxjQUFjTSxLQUFLTSxTQUFMLENBQWUsS0FBS1osV0FBcEIsQ0FBbEI7QUFDQSxVQUFJRixXQUFXUSxLQUFLTSxTQUFMLENBQWUsS0FBS2QsUUFBcEIsQ0FBZjtBQUNBLFVBQUlDLFdBQVdPLEtBQUtNLFNBQUwsQ0FBZSxLQUFLYixRQUFwQixDQUFmO0FBQ0FjLFNBQUdDLFVBQUgsQ0FBYztBQUNWQyxhQUFLLDRCQUE0QnJCLE9BQTVCLEdBQXNDLGVBQXRDLEdBQXdETSxXQUF4RCxHQUFxRSxZQUFyRSxHQUFvRkQsUUFBcEYsR0FBK0YsWUFBL0YsR0FBOEdEO0FBRHpHLE9BQWQ7QUFHRDs7OzZCQUNPO0FBQ04sVUFBSUosVUFBVVksS0FBS00sU0FBTCxDQUFlLEtBQUtsQixPQUFwQixDQUFkO0FBQ0EsVUFBSU0sY0FBY00sS0FBS00sU0FBTCxDQUFlLEtBQUtaLFdBQXBCLENBQWxCO0FBQ0EsVUFBSUYsV0FBV1EsS0FBS00sU0FBTCxDQUFlLEtBQUtkLFFBQXBCLENBQWY7QUFDQSxVQUFJQyxXQUFXTyxLQUFLTSxTQUFMLENBQWUsS0FBS2IsUUFBcEIsQ0FBZjs7QUFFQVMsY0FBUUMsR0FBUixDQUFZLFFBQVosRUFBcUJmLE9BQXJCO0FBQ0FtQixTQUFHQyxVQUFILENBQWM7QUFDVkMsYUFBSywyQkFBMkJyQixPQUEzQixHQUFxQyxlQUFyQyxHQUF1RE0sV0FBdkQsR0FBb0UsWUFBcEUsR0FBbUZELFFBQW5GLEdBQThGLFlBQTlGLEdBQTZHRDtBQUR4RyxPQUFkO0FBR0Q7Ozs7Ozs7Ozs7OztBQUVLaUIsbUIsR0FBTSxnQzs7QUFDVkMsK0JBQUtDLE9BQUwsQ0FBYUYsR0FBYixFQUFrQkcsSUFBbEIsQ0FBdUIsVUFBQ0MsR0FBRCxFQUFTO0FBQzlCWCwwQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBc0JVLElBQUk1QixJQUExQjtBQUNBLHlCQUFLQyxRQUFMLENBQWNDLElBQWQsR0FBcUIwQixJQUFJNUIsSUFBSixDQUFTLENBQVQsRUFBWTZCLE9BQWpDO0FBQ0EseUJBQUtDLE1BQUw7QUFDRCxpQkFKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5GZ0NMLGVBQUtNLEk7O2tCQUFwQnpDLE0iLCJmaWxlIjoic3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB0aW1lIGZyb20gJy4uL2NvbXBvbmVudHMvdGltZSdcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHN1Ym1pdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW11cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o+Q5Lqk6K6i5Y2VJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiVGltZVwiOntcImN1cnJlbnRcIjpcImN1cnJlbnRUaW1lXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmZsYWcuc3luY1wiOlwiZmxhZ1wiLFwidi1iaW5kOmN1cnJlbnRUaW1lLnN5bmNcIjpcImNob29zZWRUaW1lXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFRpbWU6dGltZVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgaG9zcGl0YWw6e1xuICAgICAgICBuYW1lOifkuIDpo5/loIIxJ1xuICAgICAgfSxcbiAgICAgIG1lc3NhZ2U6e1xuICAgICAgICBhZGRyZXNzOifopb/lronova/ku7blm60nLFxuICAgICAgICBuYW1lOiflhbDmraPpvpknLFxuICAgICAgICBzZXg6J21hbGUnLFxuICAgICAgICB0ZWw6JzAwMDAwMDAwMDAnLFxuICAgICAgICB0aW1lOifnq4vljbPpgIHlh7onXG4gICAgICB9LFxuICAgICAgZm9vZExpc3Q6W10sXG4gICAgICBzdW1QcmljZTonJyxcbiAgICAgIGNob29zZWRUaW1lOifnq4vljbPpgIHlh7onLFxuICAgICAgZmxhZzpmYWxzZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBKU09OLnBhcnNlKG9wdGlvbnMubWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSBKU09OLnBhcnNlKG9wdGlvbnMuZm9vZExpc3QpO1xuICAgICAgICB0aGlzLnN1bVByaWNlID0gSlNPTi5wYXJzZShvcHRpb25zLnN1bVByaWNlKTtcbiAgICAgICAgdGhpcy5jaG9vc2VkVGltZSA9IEpTT04ucGFyc2Uob3B0aW9ucy5jaG9vc2VkVGltZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmZvXCIsb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgIH1cblxuICAgIGluaXRQYWdlKCl7XG4gICAgICB0aGlzLmdldEhvc2lwaXRhbCgpO1xuICAgIH1cbiAgICBjaG9vc2VUaW1lKCl7XG4gICAgICBjb25zb2xlLmxvZyhcIumAieaXtumXtFwiKVxuICAgICAgdGhpcy5mbGFnID0gdHJ1ZSA7XG4gICAgfVxuICAgIGNob29zZUFkZHJlc3MoKXtcbiAgICAgIHZhciBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5tZXNzYWdlKTtcbiAgICAgIHZhciBjaG9vc2VkVGltZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY2hvb3NlZFRpbWUpIDtcbiAgICAgIHZhciBmb29kTGlzdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZm9vZExpc3QpIDtcbiAgICAgIHZhciBzdW1QcmljZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3VtUHJpY2UpIDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogXCIvcGFnZXMvYWRkcmVzcz9tZXNzYWdlPVwiICsgbWVzc2FnZSArIFwiJmNob29zZWRUaW1lPVwiICsgY2hvb3NlZFRpbWUgK1wiJnN1bVByaWNlPVwiICsgc3VtUHJpY2UgKyBcIiZmb29kTGlzdD1cIiArIGZvb2RMaXN0XG4gICAgICB9KVxuICAgIH1cbiAgICBzdWJtaXQoKXtcbiAgICAgIHZhciBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5tZXNzYWdlKTtcbiAgICAgIHZhciBjaG9vc2VkVGltZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY2hvb3NlZFRpbWUpIDtcbiAgICAgIHZhciBmb29kTGlzdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZm9vZExpc3QpIDtcbiAgICAgIHZhciBzdW1QcmljZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3VtUHJpY2UpIDtcblxuICAgICAgY29uc29sZS5sb2coXCJzdWJtaXRcIixtZXNzYWdlKVxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBcIi9wYWdlcy9zdGF0dXM/bWVzc2FnZT1cIiArIG1lc3NhZ2UgKyBcIiZjaG9vc2VkVGltZT1cIiArIGNob29zZWRUaW1lICtcIiZzdW1QcmljZT1cIiArIHN1bVByaWNlICsgXCImZm9vZExpc3Q9XCIgKyBmb29kTGlzdFxuICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0SG9zaXBpdGFsKCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZ2V0X2luZm9cIlxuICAgICAgd2VweS5yZXF1ZXN0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZm9vZD0+PlwiLHJlcy5kYXRhKVxuICAgICAgICB0aGlzLmhvc3BpdGFsLm5hbWUgPSByZXMuZGF0YVswXS5yZXNuYW1lXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19