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
      this.message.sex = e.detail.value;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MuanMiXSwibmFtZXMiOlsiYWRkcmVzcyIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1lc3NhZ2UiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiZm9vZExpc3QiLCJzdW1QcmljZSIsImNob29zZWRUaW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJpbml0UGFnZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInN0cmluZ2lmeSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUyxFLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliSCxNLEdBQVMsRSxRQUVUSSxJLEdBQU87QUFDTEMsZUFBUTtBQUNOTixpQkFBUSxPQURGO0FBRU5PLGNBQUssS0FGQztBQUdOQyxhQUFJLE1BSEU7QUFJTkMsYUFBSSxZQUpFO0FBS05DLGdCQUFPO0FBTEQsT0FESDtBQVFMQyxnQkFBUyxFQVJKO0FBU0xDLGdCQUFTLEVBVEo7QUFVTEMsbUJBQVk7O0FBVlAsSyxRQWNQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7MkJBSUZDLE8sRUFBUztBQUNaLFdBQUtYLE9BQUwsR0FBZVksS0FBS0MsS0FBTCxDQUFXRixRQUFRWCxPQUFuQixDQUFmO0FBQ0EsV0FBS0ssUUFBTCxHQUFnQk8sS0FBS0MsS0FBTCxDQUFXRixRQUFRTixRQUFuQixDQUFoQjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0JNLEtBQUtDLEtBQUwsQ0FBV0YsUUFBUUwsUUFBbkIsQ0FBaEI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CSyxLQUFLQyxLQUFMLENBQVdGLFFBQVFKLFdBQW5CLENBQW5CO0FBQ0FPLGNBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXNCSixPQUF0QjtBQUNIOzs7OEJBQ1M7QUFDUixXQUFLSyxRQUFMO0FBQ0Q7OzsrQkFDUyxDQUVUOzs7a0NBQ2FDLEMsRUFBRTtBQUNaLFdBQUtqQixPQUFMLENBQWFDLElBQWIsR0FBb0JnQixFQUFFQyxNQUFGLENBQVNDLEtBQTdCO0FBQ0g7OztxQ0FDZ0JGLEMsRUFBRTtBQUNmLFdBQUtqQixPQUFMLENBQWFOLE9BQWIsR0FBdUJ1QixFQUFFQyxNQUFGLENBQVNDLEtBQWhDO0FBRUg7OzttQ0FDY0YsQyxFQUFFO0FBQ2IsV0FBS2pCLE9BQUwsQ0FBYUcsR0FBYixHQUFtQmMsRUFBRUMsTUFBRixDQUFTQyxLQUE1QjtBQUNIOzs7Z0NBQ1dGLEMsRUFBRztBQUNiSCxjQUFRQyxHQUFSLENBQVksNEJBQVosRUFBMENFLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbkQ7QUFDRSxXQUFLbkIsT0FBTCxDQUFhRSxHQUFiLEdBQW1CZSxFQUFFQyxNQUFGLENBQVNDLEtBQTVCO0FBRUg7Ozs2QkFDTztBQUNOLFVBQUluQixVQUFVWSxLQUFLUSxTQUFMLENBQWUsS0FBS3BCLE9BQXBCLENBQWQ7QUFDQSxVQUFJTyxjQUFjSyxLQUFLUSxTQUFMLENBQWUsS0FBS2IsV0FBcEIsQ0FBbEI7QUFDQSxVQUFJRixXQUFXTyxLQUFLUSxTQUFMLENBQWUsS0FBS2YsUUFBcEIsQ0FBZjtBQUNBLFVBQUlDLFdBQVdNLEtBQUtRLFNBQUwsQ0FBZSxLQUFLZCxRQUFwQixDQUFmO0FBQ0FRLGNBQVFDLEdBQVIsQ0FBWVIsV0FBWixFQUF3QkYsUUFBeEIsRUFBaUNDLFFBQWpDOztBQUVBZSxTQUFHQyxVQUFILENBQWM7QUFDVkMsYUFBSywyQkFBNEJ2QixPQUE1QixHQUFzQyxlQUF0QyxHQUF3RE8sV0FBeEQsR0FBcUUsWUFBckUsR0FBb0ZELFFBQXBGLEdBQStGLFlBQS9GLEdBQThHRDtBQUR6RyxPQUFkO0FBR0Q7Ozs7RUEzRWtDbUIsZUFBS0MsSTs7a0JBQXJCL0IsTyIsImZpbGUiOiJhZGRyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWRkcmVzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW11cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paw5aKe5pS26LSn5Zyw5Z2AJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBtZXNzYWdlOntcbiAgICAgICAgYWRkcmVzczon6KW/5a6J6L2v5Lu25ZutJyxcbiAgICAgICAgbmFtZTon5YWw5q2j6b6ZJyxcbiAgICAgICAgc2V4OidtYWxlJyxcbiAgICAgICAgdGVsOicwMDAwMDAwMDAwJyxcbiAgICAgICAgY2FudGVlOifkuIDpo5/loIInXG4gICAgICB9LFxuICAgICAgZm9vZExpc3Q6W10sXG4gICAgICBzdW1QcmljZTonJyxcbiAgICAgIGNob29zZWRUaW1lOicnXG5cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBKU09OLnBhcnNlKG9wdGlvbnMubWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZm9vZExpc3QgPSBKU09OLnBhcnNlKG9wdGlvbnMuZm9vZExpc3QpO1xuICAgICAgICB0aGlzLnN1bVByaWNlID0gSlNPTi5wYXJzZShvcHRpb25zLnN1bVByaWNlKTtcbiAgICAgICAgdGhpcy5jaG9vc2VkVGltZSA9IEpTT04ucGFyc2Uob3B0aW9ucy5jaG9vc2VkVGltZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRyZXNzXCIsb3B0aW9ucyk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlKClcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcblxuICAgIH1cbiAgICB1c2VyTmFtZUlucHV0KGUpe1xuICAgICAgICB0aGlzLm1lc3NhZ2UubmFtZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfVxuICAgIHVzZXJBZGRyZXNzSW5wdXQoZSl7XG4gICAgICAgIHRoaXMubWVzc2FnZS5hZGRyZXNzID0gZS5kZXRhaWwudmFsdWVcblxuICAgIH1cbiAgICB1c2VyUGhvbmVJbnB1dChlKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlLnRlbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfVxuICAgIHJhZGlvQ2hhbmdlKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyYWRpb+WPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIHRoaXMubWVzc2FnZS5zZXggPSBlLmRldGFpbC52YWx1ZVxuXG4gICAgfVxuICAgIHN1Ym1pdCgpe1xuICAgICAgdmFyIG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm1lc3NhZ2UpO1xuICAgICAgdmFyIGNob29zZWRUaW1lID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jaG9vc2VkVGltZSkgO1xuICAgICAgdmFyIGZvb2RMaXN0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5mb29kTGlzdCkgO1xuICAgICAgdmFyIHN1bVByaWNlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zdW1QcmljZSkgO1xuICAgICAgY29uc29sZS5sb2coY2hvb3NlZFRpbWUsZm9vZExpc3Qsc3VtUHJpY2UpXG5cbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogXCIvcGFnZXMvc3VibWl0P21lc3NhZ2U9XCIgKyAgbWVzc2FnZSArIFwiJmNob29zZWRUaW1lPVwiICsgY2hvb3NlZFRpbWUgK1wiJnN1bVByaWNlPVwiICsgc3VtUHJpY2UgKyBcIiZmb29kTGlzdD1cIiArIGZvb2RMaXN0IFxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuIl19