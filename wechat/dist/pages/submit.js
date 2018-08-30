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
      message: {
        address: '西安软件园',
        name: '兰正龙',
        sex: 'male',
        tel: '0000000000',
        time: '立即送出',
        cantee: '一食堂'
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
    value: function initPage() {}
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
  }]);

  return submit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(submit , 'pages/submit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGltZSIsInRpbWUiLCJkYXRhIiwibWVzc2FnZSIsImFkZHJlc3MiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiZm9vZExpc3QiLCJzdW1QcmljZSIsImNob29zZWRUaW1lIiwiZmxhZyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIm9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiaW5pdFBhZ2UiLCJzdHJpbmdpZnkiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUyxFLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsV0FBVSxhQUFYLEVBQXlCLGdCQUFlLEVBQXhDLEVBQTJDLG9CQUFtQixNQUE5RCxFQUFxRSwyQkFBMEIsYUFBL0YsRUFBUixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxZQUFLQztBQURHLEssUUFJVlIsTSxHQUFTLEUsUUFFVFMsSSxHQUFPO0FBQ0xDLGVBQVE7QUFDTkMsaUJBQVEsT0FERjtBQUVOQyxjQUFLLEtBRkM7QUFHTkMsYUFBSSxNQUhFO0FBSU5DLGFBQUksWUFKRTtBQUtOTixjQUFLLE1BTEM7QUFNTk8sZ0JBQU87QUFORCxPQURIO0FBU0xDLGdCQUFTLEVBVEo7QUFVTEMsZ0JBQVMsRUFWSjtBQVdMQyxtQkFBWSxNQVhQO0FBWUxDLFlBQUs7QUFaQSxLLFFBZVBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OzsyQkFJRkMsTyxFQUFTO0FBQ1osV0FBS2IsT0FBTCxHQUFlYyxLQUFLQyxLQUFMLENBQVdGLFFBQVFiLE9BQW5CLENBQWY7QUFDQSxXQUFLTSxRQUFMLEdBQWdCUSxLQUFLQyxLQUFMLENBQVdGLFFBQVFQLFFBQW5CLENBQWhCO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQk8sS0FBS0MsS0FBTCxDQUFXRixRQUFRTixRQUFuQixDQUFoQjtBQUNBLFdBQUtDLFdBQUwsR0FBbUJNLEtBQUtDLEtBQUwsQ0FBV0YsUUFBUUwsV0FBbkIsQ0FBbkI7QUFDQVEsY0FBUUMsR0FBUixDQUFZLE1BQVosRUFBbUJKLE9BQW5CO0FBQ0g7Ozs4QkFFUztBQUNSLFdBQUtLLFFBQUw7QUFDRDs7OytCQUVTLENBRVQ7OztpQ0FDVztBQUNWRixjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBLFdBQUtSLElBQUwsR0FBWSxJQUFaO0FBQ0Q7OztvQ0FDYztBQUNiLFVBQUlULFVBQVVjLEtBQUtLLFNBQUwsQ0FBZSxLQUFLbkIsT0FBcEIsQ0FBZDtBQUNBLFVBQUlRLGNBQWNNLEtBQUtLLFNBQUwsQ0FBZSxLQUFLWCxXQUFwQixDQUFsQjtBQUNBLFVBQUlGLFdBQVdRLEtBQUtLLFNBQUwsQ0FBZSxLQUFLYixRQUFwQixDQUFmO0FBQ0EsVUFBSUMsV0FBV08sS0FBS0ssU0FBTCxDQUFlLEtBQUtaLFFBQXBCLENBQWY7QUFDQWEsU0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGFBQUssNEJBQTRCdEIsT0FBNUIsR0FBc0MsZUFBdEMsR0FBd0RRLFdBQXhELEdBQXFFLFlBQXJFLEdBQW9GRCxRQUFwRixHQUErRixZQUEvRixHQUE4R0Q7QUFEekcsT0FBZDtBQUdEOzs7NkJBQ087QUFDTixVQUFJTixVQUFVYyxLQUFLSyxTQUFMLENBQWUsS0FBS25CLE9BQXBCLENBQWQ7QUFDQSxVQUFJUSxjQUFjTSxLQUFLSyxTQUFMLENBQWUsS0FBS1gsV0FBcEIsQ0FBbEI7QUFDQSxVQUFJRixXQUFXUSxLQUFLSyxTQUFMLENBQWUsS0FBS2IsUUFBcEIsQ0FBZjtBQUNBLFVBQUlDLFdBQVdPLEtBQUtLLFNBQUwsQ0FBZSxLQUFLWixRQUFwQixDQUFmOztBQUVBUyxjQUFRQyxHQUFSLENBQVksUUFBWixFQUFxQmpCLE9BQXJCO0FBQ0FvQixTQUFHQyxVQUFILENBQWM7QUFDVkMsYUFBSywyQkFBMkJ0QixPQUEzQixHQUFxQyxlQUFyQyxHQUF1RFEsV0FBdkQsR0FBb0UsWUFBcEUsR0FBbUZELFFBQW5GLEdBQThGLFlBQTlGLEdBQTZHRDtBQUR4RyxPQUFkO0FBR0Q7Ozs7RUE5RWlDaUIsZUFBS0MsSTs7a0JBQXBCbkMsTSIsImZpbGUiOiJzdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHRpbWUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lJ1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3VibWl0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmj5DkuqTorqLljZUnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJUaW1lXCI6e1wiY3VycmVudFwiOlwiY3VycmVudFRpbWVcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZmxhZy5zeW5jXCI6XCJmbGFnXCIsXCJ2LWJpbmQ6Y3VycmVudFRpbWUuc3luY1wiOlwiY2hvb3NlZFRpbWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgVGltZTp0aW1lXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBtZXNzYWdlOntcbiAgICAgICAgYWRkcmVzczon6KW/5a6J6L2v5Lu25ZutJyxcbiAgICAgICAgbmFtZTon5YWw5q2j6b6ZJyxcbiAgICAgICAgc2V4OidtYWxlJyxcbiAgICAgICAgdGVsOicwMDAwMDAwMDAwJyxcbiAgICAgICAgdGltZTon56uL5Y2z6YCB5Ye6JyxcbiAgICAgICAgY2FudGVlOifkuIDpo5/loIInXG4gICAgICB9LFxuICAgICAgZm9vZExpc3Q6W10sXG4gICAgICBzdW1QcmljZTonJyxcbiAgICAgIGNob29zZWRUaW1lOifnq4vljbPpgIHlh7onLFxuICAgICAgZmxhZzpmYWxzZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBKU09OLnBhcnNlKG9wdGlvbnMubWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSBKU09OLnBhcnNlKG9wdGlvbnMuZm9vZExpc3QpO1xuICAgICAgICB0aGlzLnN1bVByaWNlID0gSlNPTi5wYXJzZShvcHRpb25zLnN1bVByaWNlKTtcbiAgICAgICAgdGhpcy5jaG9vc2VkVGltZSA9IEpTT04ucGFyc2Uob3B0aW9ucy5jaG9vc2VkVGltZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmZvXCIsb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgIH1cblxuICAgIGluaXRQYWdlKCl7XG5cbiAgICB9XG4gICAgY2hvb3NlVGltZSgpe1xuICAgICAgY29uc29sZS5sb2coXCLpgInml7bpl7RcIilcbiAgICAgIHRoaXMuZmxhZyA9IHRydWUgO1xuICAgIH1cbiAgICBjaG9vc2VBZGRyZXNzKCl7XG4gICAgICB2YXIgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMubWVzc2FnZSk7XG4gICAgICB2YXIgY2hvb3NlZFRpbWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNob29zZWRUaW1lKSA7XG4gICAgICB2YXIgZm9vZExpc3QgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmZvb2RMaXN0KSA7XG4gICAgICB2YXIgc3VtUHJpY2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN1bVByaWNlKSA7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2FkZHJlc3M/bWVzc2FnZT1cIiArIG1lc3NhZ2UgKyBcIiZjaG9vc2VkVGltZT1cIiArIGNob29zZWRUaW1lICtcIiZzdW1QcmljZT1cIiArIHN1bVByaWNlICsgXCImZm9vZExpc3Q9XCIgKyBmb29kTGlzdFxuICAgICAgfSlcbiAgICB9XG4gICAgc3VibWl0KCl7XG4gICAgICB2YXIgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMubWVzc2FnZSk7XG4gICAgICB2YXIgY2hvb3NlZFRpbWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNob29zZWRUaW1lKSA7XG4gICAgICB2YXIgZm9vZExpc3QgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmZvb2RMaXN0KSA7XG4gICAgICB2YXIgc3VtUHJpY2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN1bVByaWNlKSA7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0XCIsbWVzc2FnZSlcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogXCIvcGFnZXMvc3RhdHVzP21lc3NhZ2U9XCIgKyBtZXNzYWdlICsgXCImY2hvb3NlZFRpbWU9XCIgKyBjaG9vc2VkVGltZSArXCImc3VtUHJpY2U9XCIgKyBzdW1QcmljZSArIFwiJmZvb2RMaXN0PVwiICsgZm9vZExpc3RcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=