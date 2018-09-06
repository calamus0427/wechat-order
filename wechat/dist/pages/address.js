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

      wx.navigateTo({
        url: "/pages/submit?message=" + message + "&choosedTime=" + choosedTime + "&sumPrice=" + sumPrice + "&foodList=" + foodList
      });
    }
  }]);

  return address;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(address , 'pages/address'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MuanMiXSwibmFtZXMiOlsiYWRkcmVzcyIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1lc3NhZ2UiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiZm9vZExpc3QiLCJzdW1QcmljZSIsImNob29zZWRUaW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsImluaXRQYWdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInN0cmluZ2lmeSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUyxFLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliSCxNLEdBQVMsRSxRQUVUSSxJLEdBQU87QUFDTEMsZUFBUTtBQUNOTixpQkFBUSxPQURGO0FBRU5PLGNBQUssS0FGQztBQUdOQyxhQUFJLE1BSEU7QUFJTkMsYUFBSSxZQUpFO0FBS05DLGdCQUFPO0FBTEQsT0FESDtBQVFMQyxnQkFBUyxFQVJKO0FBU0xDLGdCQUFTLEVBVEo7QUFVTEMsbUJBQVk7O0FBVlAsSyxRQWNQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7MkJBSUZDLE8sRUFBUztBQUNaLFdBQUtYLE9BQUwsR0FBZVksS0FBS0MsS0FBTCxDQUFXRixRQUFRWCxPQUFuQixDQUFmO0FBQ0EsV0FBS0ssUUFBTCxHQUFnQk8sS0FBS0MsS0FBTCxDQUFXRixRQUFRTixRQUFuQixDQUFoQjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0JNLEtBQUtDLEtBQUwsQ0FBV0YsUUFBUUwsUUFBbkIsQ0FBaEI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CSyxLQUFLQyxLQUFMLENBQVdGLFFBQVFKLFdBQW5CLENBQW5CO0FBQ0g7Ozs4QkFDUztBQUNSLFdBQUtPLFFBQUw7QUFDRDs7OytCQUNTLENBRVQ7OztrQ0FDYUMsQyxFQUFFO0FBQ1osV0FBS2YsT0FBTCxDQUFhQyxJQUFiLEdBQW9CYyxFQUFFQyxNQUFGLENBQVNDLEtBQTdCO0FBQ0g7OztxQ0FDZ0JGLEMsRUFBRTtBQUNmLFdBQUtmLE9BQUwsQ0FBYU4sT0FBYixHQUF1QnFCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBaEM7QUFFSDs7O21DQUNjRixDLEVBQUU7QUFDYixXQUFLZixPQUFMLENBQWFHLEdBQWIsR0FBbUJZLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUI7QUFDSDs7O2dDQUNXRixDLEVBQUc7QUFDYkcsY0FBUUMsR0FBUixDQUFZLDRCQUFaLEVBQTBDSixFQUFFQyxNQUFGLENBQVNDLEtBQW5EO0FBQ0UsV0FBS2pCLE9BQUwsQ0FBYUUsR0FBYixHQUFtQmEsRUFBRUMsTUFBRixDQUFTQyxLQUE1QjtBQUVIOzs7NkJBQ087QUFDTixVQUFJakIsVUFBVVksS0FBS1EsU0FBTCxDQUFlLEtBQUtwQixPQUFwQixDQUFkO0FBQ0EsVUFBSU8sY0FBY0ssS0FBS1EsU0FBTCxDQUFlLEtBQUtiLFdBQXBCLENBQWxCO0FBQ0EsVUFBSUYsV0FBV08sS0FBS1EsU0FBTCxDQUFlLEtBQUtmLFFBQXBCLENBQWY7QUFDQSxVQUFJQyxXQUFXTSxLQUFLUSxTQUFMLENBQWUsS0FBS2QsUUFBcEIsQ0FBZjs7QUFFQWUsU0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGFBQUssMkJBQTRCdkIsT0FBNUIsR0FBc0MsZUFBdEMsR0FBd0RPLFdBQXhELEdBQXFFLFlBQXJFLEdBQW9GRCxRQUFwRixHQUErRixZQUEvRixHQUE4R0Q7QUFEekcsT0FBZDtBQUdEOzs7O0VBekVrQ21CLGVBQUtDLEk7O2tCQUFyQi9CLE8iLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGFkZHJlc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtdXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOWinuaUtui0p+WcsOWdgCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgbWVzc2FnZTp7XG4gICAgICAgIGFkZHJlc3M6J+ilv+Wuiei9r+S7tuWbrScsXG4gICAgICAgIG5hbWU6J+WFsOato+m+mScsXG4gICAgICAgIHNleDonbWFsZScsXG4gICAgICAgIHRlbDonMDAwMDAwMDAwMCcsXG4gICAgICAgIGNhbnRlZTon5LiA6aOf5aCCJ1xuICAgICAgfSxcbiAgICAgIGZvb2RMaXN0OltdLFxuICAgICAgc3VtUHJpY2U6JycsXG4gICAgICBjaG9vc2VkVGltZTonJ1xuXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gSlNPTi5wYXJzZShvcHRpb25zLm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZvb2RMaXN0ID0gSlNPTi5wYXJzZShvcHRpb25zLmZvb2RMaXN0KTtcbiAgICAgICAgdGhpcy5zdW1QcmljZSA9IEpTT04ucGFyc2Uob3B0aW9ucy5zdW1QcmljZSk7XG4gICAgICAgIHRoaXMuY2hvb3NlZFRpbWUgPSBKU09OLnBhcnNlKG9wdGlvbnMuY2hvb3NlZFRpbWUpXG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlKClcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcblxuICAgIH1cbiAgICB1c2VyTmFtZUlucHV0KGUpe1xuICAgICAgICB0aGlzLm1lc3NhZ2UubmFtZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfVxuICAgIHVzZXJBZGRyZXNzSW5wdXQoZSl7XG4gICAgICAgIHRoaXMubWVzc2FnZS5hZGRyZXNzID0gZS5kZXRhaWwudmFsdWVcblxuICAgIH1cbiAgICB1c2VyUGhvbmVJbnB1dChlKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlLnRlbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfVxuICAgIHJhZGlvQ2hhbmdlKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyYWRpb+WPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIHRoaXMubWVzc2FnZS5zZXggPSBlLmRldGFpbC52YWx1ZVxuXG4gICAgfVxuICAgIHN1Ym1pdCgpe1xuICAgICAgdmFyIG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm1lc3NhZ2UpO1xuICAgICAgdmFyIGNob29zZWRUaW1lID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jaG9vc2VkVGltZSkgO1xuICAgICAgdmFyIGZvb2RMaXN0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5mb29kTGlzdCkgO1xuICAgICAgdmFyIHN1bVByaWNlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zdW1QcmljZSkgO1xuXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3N1Ym1pdD9tZXNzYWdlPVwiICsgIG1lc3NhZ2UgKyBcIiZjaG9vc2VkVGltZT1cIiArIGNob29zZWRUaW1lICtcIiZzdW1QcmljZT1cIiArIHN1bVByaWNlICsgXCImZm9vZExpc3Q9XCIgKyBmb29kTGlzdCBcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cbiJdfQ==