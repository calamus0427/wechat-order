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
                url = "http://yapi.demo.qunar.com/mock/16780/get_info";

                _wepy2.default.request({ url: url, method: 'POST' }).then(function (res) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGltZSIsInRpbWUiLCJkYXRhIiwiaG9zcGl0YWwiLCJuYW1lIiwibWVzc2FnZSIsImFkZHJlc3MiLCJzZXgiLCJ0ZWwiLCJmb29kTGlzdCIsInN1bVByaWNlIiwiY2hvb3NlZFRpbWUiLCJmbGFnIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsImluaXRQYWdlIiwiZ2V0SG9zaXBpdGFsIiwic3RyaW5naWZ5Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2VweSIsInJlcXVlc3QiLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwicmVzbmFtZSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUyxFLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsV0FBVSxhQUFYLEVBQXlCLGdCQUFlLEVBQXhDLEVBQTJDLG9CQUFtQixNQUE5RCxFQUFxRSwyQkFBMEIsYUFBL0YsRUFBUixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxZQUFLQztBQURHLEssUUFJVlIsTSxHQUFTLEUsUUFFVFMsSSxHQUFPO0FBQ0xDLGdCQUFTO0FBQ1BDLGNBQUs7QUFERSxPQURKO0FBSUxDLGVBQVE7QUFDTkMsaUJBQVEsT0FERjtBQUVORixjQUFLLEtBRkM7QUFHTkcsYUFBSSxNQUhFO0FBSU5DLGFBQUksWUFKRTtBQUtOUCxjQUFLO0FBTEMsT0FKSDtBQVdMUSxnQkFBUyxFQVhKO0FBWUxDLGdCQUFTLEVBWko7QUFhTEMsbUJBQVksTUFiUDtBQWNMQyxZQUFLO0FBZEEsSyxRQWlCUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzJCQUlGQyxPLEVBQVM7QUFDWixXQUFLWCxPQUFMLEdBQWVZLEtBQUtDLEtBQUwsQ0FBV0YsUUFBUVgsT0FBbkIsQ0FBZjtBQUNBLFdBQUtJLFFBQUwsR0FBZ0JRLEtBQUtDLEtBQUwsQ0FBV0YsUUFBUVAsUUFBbkIsQ0FBaEI7QUFDQSxXQUFLQyxRQUFMLEdBQWdCTyxLQUFLQyxLQUFMLENBQVdGLFFBQVFOLFFBQW5CLENBQWhCO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQk0sS0FBS0MsS0FBTCxDQUFXRixRQUFRTCxXQUFuQixDQUFuQjtBQUNIOzs7OEJBRVM7QUFDUixXQUFLUSxRQUFMO0FBQ0Q7OzsrQkFFUztBQUNSLFdBQUtDLFlBQUw7QUFDRDs7O2lDQUNXO0FBQ1YsV0FBS1IsSUFBTCxHQUFZLElBQVo7QUFDRDs7O29DQUNjO0FBQ2IsVUFBSVAsVUFBVVksS0FBS0ksU0FBTCxDQUFlLEtBQUtoQixPQUFwQixDQUFkO0FBQ0EsVUFBSU0sY0FBY00sS0FBS0ksU0FBTCxDQUFlLEtBQUtWLFdBQXBCLENBQWxCO0FBQ0EsVUFBSUYsV0FBV1EsS0FBS0ksU0FBTCxDQUFlLEtBQUtaLFFBQXBCLENBQWY7QUFDQSxVQUFJQyxXQUFXTyxLQUFLSSxTQUFMLENBQWUsS0FBS1gsUUFBcEIsQ0FBZjtBQUNBWSxTQUFHQyxVQUFILENBQWM7QUFDVkMsYUFBSyw0QkFBNEJuQixPQUE1QixHQUFzQyxlQUF0QyxHQUF3RE0sV0FBeEQsR0FBcUUsWUFBckUsR0FBb0ZELFFBQXBGLEdBQStGLFlBQS9GLEdBQThHRDtBQUR6RyxPQUFkO0FBR0Q7Ozs2QkFDTztBQUNOLFVBQUlKLFVBQVVZLEtBQUtJLFNBQUwsQ0FBZSxLQUFLaEIsT0FBcEIsQ0FBZDtBQUNBLFVBQUlNLGNBQWNNLEtBQUtJLFNBQUwsQ0FBZSxLQUFLVixXQUFwQixDQUFsQjtBQUNBLFVBQUlGLFdBQVdRLEtBQUtJLFNBQUwsQ0FBZSxLQUFLWixRQUFwQixDQUFmO0FBQ0EsVUFBSUMsV0FBV08sS0FBS0ksU0FBTCxDQUFlLEtBQUtYLFFBQXBCLENBQWY7O0FBRUFZLFNBQUdDLFVBQUgsQ0FBYztBQUNWQyxhQUFLLDJCQUEyQm5CLE9BQTNCLEdBQXFDLGVBQXJDLEdBQXVETSxXQUF2RCxHQUFvRSxZQUFwRSxHQUFtRkQsUUFBbkYsR0FBOEYsWUFBOUYsR0FBNkdEO0FBRHhHLE9BQWQ7QUFHRDs7Ozs7Ozs7Ozs7O0FBRUtlLG1CLEdBQU0sZ0Q7O0FBQ1ZDLCtCQUFLQyxPQUFMLENBQWEsRUFBQ0YsS0FBSUEsR0FBTCxFQUFTRyxRQUFRLE1BQWpCLEVBQWIsRUFBdUNDLElBQXZDLENBQTRDLFVBQUNDLEdBQUQsRUFBUztBQUNuRCx5QkFBSzFCLFFBQUwsQ0FBY0MsSUFBZCxHQUFxQnlCLElBQUkzQixJQUFKLENBQVMsQ0FBVCxFQUFZNEIsT0FBakM7QUFDQSx5QkFBS0MsTUFBTDtBQUNELGlCQUhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEZnQ04sZUFBS08sSTs7a0JBQXBCeEMsTSIsImZpbGUiOiJzdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHRpbWUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3VibWl0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmj5DkuqTorqLljZUnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJUaW1lXCI6e1wiY3VycmVudFwiOlwiY3VycmVudFRpbWVcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZmxhZy5zeW5jXCI6XCJmbGFnXCIsXCJ2LWJpbmQ6Y3VycmVudFRpbWUuc3luY1wiOlwiY2hvb3NlZFRpbWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgVGltZTp0aW1lXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBob3NwaXRhbDp7XG4gICAgICAgIG5hbWU6J+S4gOmjn+WggjEnXG4gICAgICB9LFxuICAgICAgbWVzc2FnZTp7XG4gICAgICAgIGFkZHJlc3M6J+ilv+Wuiei9r+S7tuWbrScsXG4gICAgICAgIG5hbWU6J+WFsOato+m+mScsXG4gICAgICAgIHNleDonbWFsZScsXG4gICAgICAgIHRlbDonMDAwMDAwMDAwMCcsXG4gICAgICAgIHRpbWU6J+eri+WNs+mAgeWHuidcbiAgICAgIH0sXG4gICAgICBmb29kTGlzdDpbXSxcbiAgICAgIHN1bVByaWNlOicnLFxuICAgICAgY2hvb3NlZFRpbWU6J+eri+WNs+mAgeWHuicsXG4gICAgICBmbGFnOmZhbHNlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IEpTT04ucGFyc2Uob3B0aW9ucy5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IEpTT04ucGFyc2Uob3B0aW9ucy5mb29kTGlzdCk7XG4gICAgICAgIHRoaXMuc3VtUHJpY2UgPSBKU09OLnBhcnNlKG9wdGlvbnMuc3VtUHJpY2UpO1xuICAgICAgICB0aGlzLmNob29zZWRUaW1lID0gSlNPTi5wYXJzZShvcHRpb25zLmNob29zZWRUaW1lKVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlKClcbiAgICB9XG5cbiAgICBpbml0UGFnZSgpe1xuICAgICAgdGhpcy5nZXRIb3NpcGl0YWwoKTtcbiAgICB9XG4gICAgY2hvb3NlVGltZSgpe1xuICAgICAgdGhpcy5mbGFnID0gdHJ1ZSA7XG4gICAgfVxuICAgIGNob29zZUFkZHJlc3MoKXtcbiAgICAgIHZhciBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5tZXNzYWdlKTtcbiAgICAgIHZhciBjaG9vc2VkVGltZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY2hvb3NlZFRpbWUpIDtcbiAgICAgIHZhciBmb29kTGlzdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZm9vZExpc3QpIDtcbiAgICAgIHZhciBzdW1QcmljZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3VtUHJpY2UpIDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogXCIvcGFnZXMvYWRkcmVzcz9tZXNzYWdlPVwiICsgbWVzc2FnZSArIFwiJmNob29zZWRUaW1lPVwiICsgY2hvb3NlZFRpbWUgK1wiJnN1bVByaWNlPVwiICsgc3VtUHJpY2UgKyBcIiZmb29kTGlzdD1cIiArIGZvb2RMaXN0XG4gICAgICB9KVxuICAgIH1cbiAgICBzdWJtaXQoKXtcbiAgICAgIHZhciBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5tZXNzYWdlKTtcbiAgICAgIHZhciBjaG9vc2VkVGltZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY2hvb3NlZFRpbWUpIDtcbiAgICAgIHZhciBmb29kTGlzdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZm9vZExpc3QpIDtcbiAgICAgIHZhciBzdW1QcmljZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3VtUHJpY2UpIDtcblxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBcIi9wYWdlcy9zdGF0dXM/bWVzc2FnZT1cIiArIG1lc3NhZ2UgKyBcIiZjaG9vc2VkVGltZT1cIiArIGNob29zZWRUaW1lICtcIiZzdW1QcmljZT1cIiArIHN1bVByaWNlICsgXCImZm9vZExpc3Q9XCIgKyBmb29kTGlzdFxuICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0SG9zaXBpdGFsKCl7XG4gICAgICB2YXIgdXJsID0gXCJodHRwOi8veWFwaS5kZW1vLnF1bmFyLmNvbS9tb2NrLzE2NzgwL2dldF9pbmZvXCJcbiAgICAgIHdlcHkucmVxdWVzdCh7dXJsOnVybCxtZXRob2Q6ICdQT1NUJ30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmhvc3BpdGFsLm5hbWUgPSByZXMuZGF0YVswXS5yZXNuYW1lXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19