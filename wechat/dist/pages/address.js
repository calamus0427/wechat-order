'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var address = function (_wepy$page) {
  _inherits(address, _wepy$page);

  function address() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, address);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = address.__proto__ || Object.getPrototypeOf(address)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [], _this.config = {
      navigationBarTitleText: '新增收货地址'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      message: {
        address: '西安软件园',
        name: '兰正龙',
        sex: 'male',
        tel: '0000000000',
        cantee: '一食堂'
      },
      foodList: [],
      sumPrice: '',
      choosedTime: ''

    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(address, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.message = JSON.parse(options.message);
      this.foodList = JSON.parse(options.foodList);
      this.sumPrice = JSON.parse(options.sumPrice);
      this.choosedTime = JSON.parse(options.choosedTime);
      console.log("address", options);
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
    key: 'userNameInput',
    value: function userNameInput(e) {
      this.message.name = e.detail.value;
    }
  }, {
    key: 'userAddressInput',
    value: function userAddressInput(e) {
      this.message.address = e.detail.value;
    }
  }, {
    key: 'userPhoneInput',
    value: function userPhoneInput(e) {
      this.message.tel = e.detail.value;
    }
  }, {
    key: 'radioChange',
    value: function radioChange(e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value);
    }
  }, {
    key: 'submit',
    value: function submit() {
      var message = JSON.stringify(this.message);
      var choosedTime = JSON.stringify(this.choosedTime);
      var foodList = JSON.stringify(this.foodList);
      var sumPrice = JSON.stringify(this.sumPrice);
      console.log(choosedTime, foodList, sumPrice);

      wx.navigateTo({
        url: "/pages/submit?message=" + message + "&choosedTime=" + choosedTime + "&sumPrice=" + sumPrice + "&foodList=" + foodList
      });
    }
  }]);

  return address;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(address , 'pages/address'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MuanMiXSwibmFtZXMiOlsiYWRkcmVzcyIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1lc3NhZ2UiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiZm9vZExpc3QiLCJzdW1QcmljZSIsImNob29zZWRUaW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJpbml0UGFnZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInN0cmluZ2lmeSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUyxFLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliSCxNLEdBQVMsRSxRQUVUSSxJLEdBQU87QUFDTEMsZUFBUTtBQUNOTixpQkFBUSxPQURGO0FBRU5PLGNBQUssS0FGQztBQUdOQyxhQUFJLE1BSEU7QUFJTkMsYUFBSSxZQUpFO0FBS05DLGdCQUFPO0FBTEQsT0FESDtBQVFMQyxnQkFBUyxFQVJKO0FBU0xDLGdCQUFTLEVBVEo7QUFVTEMsbUJBQVk7O0FBVlAsSyxRQWNQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7MkJBSUZDLE8sRUFBUztBQUNaLFdBQUtYLE9BQUwsR0FBZVksS0FBS0MsS0FBTCxDQUFXRixRQUFRWCxPQUFuQixDQUFmO0FBQ0EsV0FBS0ssUUFBTCxHQUFnQk8sS0FBS0MsS0FBTCxDQUFXRixRQUFRTixRQUFuQixDQUFoQjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0JNLEtBQUtDLEtBQUwsQ0FBV0YsUUFBUUwsUUFBbkIsQ0FBaEI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CSyxLQUFLQyxLQUFMLENBQVdGLFFBQVFKLFdBQW5CLENBQW5CO0FBQ0FPLGNBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXNCSixPQUF0QjtBQUNIOzs7OEJBQ1M7QUFDUixXQUFLSyxRQUFMO0FBQ0Q7OzsrQkFDUyxDQUVUOzs7a0NBQ2FDLEMsRUFBRTtBQUNaLFdBQUtqQixPQUFMLENBQWFDLElBQWIsR0FBb0JnQixFQUFFQyxNQUFGLENBQVNDLEtBQTdCO0FBQ0g7OztxQ0FDZ0JGLEMsRUFBRTtBQUNmLFdBQUtqQixPQUFMLENBQWFOLE9BQWIsR0FBdUJ1QixFQUFFQyxNQUFGLENBQVNDLEtBQWhDO0FBRUg7OzttQ0FDY0YsQyxFQUFFO0FBQ2IsV0FBS2pCLE9BQUwsQ0FBYUcsR0FBYixHQUFtQmMsRUFBRUMsTUFBRixDQUFTQyxLQUE1QjtBQUNIOzs7Z0NBQ1dGLEMsRUFBRztBQUNiSCxjQUFRQyxHQUFSLENBQVksNEJBQVosRUFBMENFLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbkQ7QUFDRDs7OzZCQUNPO0FBQ04sVUFBSW5CLFVBQVVZLEtBQUtRLFNBQUwsQ0FBZSxLQUFLcEIsT0FBcEIsQ0FBZDtBQUNBLFVBQUlPLGNBQWNLLEtBQUtRLFNBQUwsQ0FBZSxLQUFLYixXQUFwQixDQUFsQjtBQUNBLFVBQUlGLFdBQVdPLEtBQUtRLFNBQUwsQ0FBZSxLQUFLZixRQUFwQixDQUFmO0FBQ0EsVUFBSUMsV0FBV00sS0FBS1EsU0FBTCxDQUFlLEtBQUtkLFFBQXBCLENBQWY7QUFDQVEsY0FBUUMsR0FBUixDQUFZUixXQUFaLEVBQXdCRixRQUF4QixFQUFpQ0MsUUFBakM7O0FBRUFlLFNBQUdDLFVBQUgsQ0FBYztBQUNWQyxhQUFLLDJCQUE0QnZCLE9BQTVCLEdBQXNDLGVBQXRDLEdBQXdETyxXQUF4RCxHQUFxRSxZQUFyRSxHQUFvRkQsUUFBcEYsR0FBK0YsWUFBL0YsR0FBOEdEO0FBRHpHLE9BQWQ7QUFHRDs7OztFQXpFa0NtQixlQUFLQyxJOztrQkFBckIvQixPIiwiZmlsZSI6ImFkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhZGRyZXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlrDlop7mlLbotKflnLDlnYAnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG1lc3NhZ2U6e1xuICAgICAgICBhZGRyZXNzOifopb/lronova/ku7blm60nLFxuICAgICAgICBuYW1lOiflhbDmraPpvpknLFxuICAgICAgICBzZXg6J21hbGUnLFxuICAgICAgICB0ZWw6JzAwMDAwMDAwMDAnLFxuICAgICAgICBjYW50ZWU6J+S4gOmjn+WggidcbiAgICAgIH0sXG4gICAgICBmb29kTGlzdDpbXSxcbiAgICAgIHN1bVByaWNlOicnLFxuICAgICAgY2hvb3NlZFRpbWU6JydcblxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IEpTT04ucGFyc2Uob3B0aW9ucy5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IEpTT04ucGFyc2Uob3B0aW9ucy5mb29kTGlzdCk7XG4gICAgICAgIHRoaXMuc3VtUHJpY2UgPSBKU09OLnBhcnNlKG9wdGlvbnMuc3VtUHJpY2UpO1xuICAgICAgICB0aGlzLmNob29zZWRUaW1lID0gSlNPTi5wYXJzZShvcHRpb25zLmNob29zZWRUaW1lKVxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZHJlc3NcIixvcHRpb25zKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgIH1cbiAgICBpbml0UGFnZSgpe1xuXG4gICAgfVxuICAgIHVzZXJOYW1lSW5wdXQoZSl7XG4gICAgICAgIHRoaXMubWVzc2FnZS5uYW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gICAgdXNlckFkZHJlc3NJbnB1dChlKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlLmFkZHJlc3MgPSBlLmRldGFpbC52YWx1ZVxuXG4gICAgfVxuICAgIHVzZXJQaG9uZUlucHV0KGUpe1xuICAgICAgICB0aGlzLm1lc3NhZ2UudGVsID0gZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gICAgcmFkaW9DaGFuZ2UoZSkge1xuICAgICAgY29uc29sZS5sb2coJ3JhZGlv5Y+R55SfY2hhbmdl5LqL5Lu277yM5pC65bimdmFsdWXlgLzkuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9XG4gICAgc3VibWl0KCl7XG4gICAgICB2YXIgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMubWVzc2FnZSk7XG4gICAgICB2YXIgY2hvb3NlZFRpbWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNob29zZWRUaW1lKSA7XG4gICAgICB2YXIgZm9vZExpc3QgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmZvb2RMaXN0KSA7XG4gICAgICB2YXIgc3VtUHJpY2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN1bVByaWNlKSA7XG4gICAgICBjb25zb2xlLmxvZyhjaG9vc2VkVGltZSxmb29kTGlzdCxzdW1QcmljZSlcblxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBcIi9wYWdlcy9zdWJtaXQ/bWVzc2FnZT1cIiArICBtZXNzYWdlICsgXCImY2hvb3NlZFRpbWU9XCIgKyBjaG9vc2VkVGltZSArXCImc3VtUHJpY2U9XCIgKyBzdW1QcmljZSArIFwiJmZvb2RMaXN0PVwiICsgZm9vZExpc3QgXG4gICAgICB9KVxuICAgIH1cblxuICB9XG4iXX0=