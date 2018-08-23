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
        cantee: '一食堂',
        foodList: [{ name: '红烧茄子', price: '7' }, { name: '红烧茄子', price: '7' }],
        price: '100'
      },
      choosedTime: '立即送出',
      flag: false
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(submit, [{
    key: 'onLoad',
    value: function onLoad() {}
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
    key: 'submit',
    value: function submit() {
      console.log("提交订单");
      wx.navigateTo({
        url: 'status',
        success: function success(res) {
          // success
        },
        fail: function fail() {
          // fail
        },
        complete: function complete() {
          // complete
        }
      });
    }
  }]);

  return submit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(submit , 'pages/submit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGltZSIsInRpbWUiLCJkYXRhIiwibWVzc2FnZSIsImFkZHJlc3MiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiZm9vZExpc3QiLCJwcmljZSIsImNob29zZWRUaW1lIiwiZmxhZyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsImluaXRQYWdlIiwiY29uc29sZSIsImxvZyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiY29tcGxldGUiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUyxFLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsV0FBVSxhQUFYLEVBQXlCLGdCQUFlLEVBQXhDLEVBQTJDLG9CQUFtQixNQUE5RCxFQUFxRSwyQkFBMEIsYUFBL0YsRUFBUixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxZQUFLQztBQURHLEssUUFJVlIsTSxHQUFTLEUsUUFFVFMsSSxHQUFPO0FBQ0xDLGVBQVE7QUFDTkMsaUJBQVEsT0FERjtBQUVOQyxjQUFLLEtBRkM7QUFHTkMsYUFBSSxNQUhFO0FBSU5DLGFBQUksWUFKRTtBQUtOTixjQUFLLE1BTEM7QUFNTk8sZ0JBQU8sS0FORDtBQU9OQyxrQkFBUyxDQUFDLEVBQUNKLE1BQUssTUFBTixFQUFhSyxPQUFNLEdBQW5CLEVBQUQsRUFDQyxFQUFDTCxNQUFLLE1BQU4sRUFBYUssT0FBTSxHQUFuQixFQURELENBUEg7QUFTTkEsZUFBTTtBQVRBLE9BREg7QUFZTEMsbUJBQVksTUFaUDtBQWFMQyxZQUFLO0FBYkEsSyxRQWdCUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzZCQUlBLENBQ1I7Ozs4QkFDUztBQUNSLFdBQUtDLFFBQUw7QUFDRDs7OytCQUNTLENBRVQ7OztpQ0FDVztBQUNWQyxjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBLFdBQUtOLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs2QkFDTztBQUNOSyxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBQyxTQUFHQyxVQUFILENBQWM7QUFDWkMsYUFBSyxRQURPO0FBRVpDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWE7QUFDcEI7QUFDRCxTQUpXO0FBS1pDLGNBQU0sZ0JBQVc7QUFDZjtBQUNELFNBUFc7QUFRWkMsa0JBQVUsb0JBQVc7QUFDbkI7QUFDRDtBQVZXLE9BQWQ7QUFZRDs7OztFQXBFaUNDLGVBQUtDLEk7O2tCQUFwQm5DLE0iLCJmaWxlIjoic3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB0aW1lIGZyb20gJy4uL2NvbXBvbmVudHMvdGltZSdcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHN1Ym1pdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW11cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o+Q5Lqk6K6i5Y2VJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiVGltZVwiOntcImN1cnJlbnRcIjpcImN1cnJlbnRUaW1lXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmZsYWcuc3luY1wiOlwiZmxhZ1wiLFwidi1iaW5kOmN1cnJlbnRUaW1lLnN5bmNcIjpcImNob29zZWRUaW1lXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFRpbWU6dGltZVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgbWVzc2FnZTp7XG4gICAgICAgIGFkZHJlc3M6J+ilv+Wuiei9r+S7tuWbrScsXG4gICAgICAgIG5hbWU6J+WFsOato+m+mScsXG4gICAgICAgIHNleDonbWFsZScsXG4gICAgICAgIHRlbDonMDAwMDAwMDAwMCcsXG4gICAgICAgIHRpbWU6J+eri+WNs+mAgeWHuicsXG4gICAgICAgIGNhbnRlZTon5LiA6aOf5aCCJyxcbiAgICAgICAgZm9vZExpc3Q6W3tuYW1lOifnuqLng6fojITlrZAnLHByaWNlOic3J30sXG4gICAgICAgICAgICAgICAgICB7bmFtZTon57qi54On6IyE5a2QJyxwcmljZTonNyd9XSxcbiAgICAgICAgcHJpY2U6JzEwMCdcbiAgICAgIH0sXG4gICAgICBjaG9vc2VkVGltZTon56uL5Y2z6YCB5Ye6JyxcbiAgICAgIGZsYWc6ZmFsc2VcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlKClcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcblxuICAgIH1cbiAgICBjaG9vc2VUaW1lKCl7XG4gICAgICBjb25zb2xlLmxvZyhcIumAieaXtumXtFwiKVxuICAgICAgdGhpcy5mbGFnID0gdHJ1ZSA7XG4gICAgfVxuICAgIHN1Ym1pdCgpe1xuICAgICAgY29uc29sZS5sb2coXCLmj5DkuqTorqLljZVcIilcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdzdGF0dXMnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gZmFpbFxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gY29tcGxldGVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==