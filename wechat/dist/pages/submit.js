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
    }, _this.$repeat = {}, _this.$props = { "Time": { "current": "currentTime", "xmlns:v-bind": "", "v-bind:flag.sync": "flag" } }, _this.$events = {}, _this.components = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGltZSIsInRpbWUiLCJkYXRhIiwibWVzc2FnZSIsImFkZHJlc3MiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiZm9vZExpc3QiLCJwcmljZSIsImZsYWciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJpbml0UGFnZSIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImNvbXBsZXRlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVMsRSxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLFdBQVUsYUFBWCxFQUF5QixnQkFBZSxFQUF4QyxFQUEyQyxvQkFBbUIsTUFBOUQsRUFBUixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxZQUFLQztBQURHLEssUUFJVlIsTSxHQUFTLEUsUUFFVFMsSSxHQUFPO0FBQ0xDLGVBQVE7QUFDTkMsaUJBQVEsT0FERjtBQUVOQyxjQUFLLEtBRkM7QUFHTkMsYUFBSSxNQUhFO0FBSU5DLGFBQUksWUFKRTtBQUtOTixjQUFLLE1BTEM7QUFNTk8sZ0JBQU8sS0FORDtBQU9OQyxrQkFBUyxDQUFDLEVBQUNKLE1BQUssTUFBTixFQUFhSyxPQUFNLEdBQW5CLEVBQUQsRUFDQyxFQUFDTCxNQUFLLE1BQU4sRUFBYUssT0FBTSxHQUFuQixFQURELENBUEg7QUFTTkEsZUFBTTtBQVRBLE9BREg7QUFZTEMsWUFBSztBQVpBLEssUUFlUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzZCQUlBLENBQ1I7Ozs4QkFDUztBQUNSLFdBQUtDLFFBQUw7QUFDRDs7OytCQUNTLENBRVQ7OztpQ0FDVztBQUNWQyxjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBLFdBQUtOLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs2QkFDTztBQUNOSyxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBQyxTQUFHQyxVQUFILENBQWM7QUFDWkMsYUFBSyxRQURPO0FBRVpDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWE7QUFDcEI7QUFDRCxTQUpXO0FBS1pDLGNBQU0sZ0JBQVc7QUFDZjtBQUNELFNBUFc7QUFRWkMsa0JBQVUsb0JBQVc7QUFDbkI7QUFDRDtBQVZXLE9BQWQ7QUFZRDs7OztFQW5FaUNDLGVBQUtDLEk7O2tCQUFwQmxDLE0iLCJmaWxlIjoic3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB0aW1lIGZyb20gJy4uL2NvbXBvbmVudHMvdGltZSdcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHN1Ym1pdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW11cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o+Q5Lqk6K6i5Y2VJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiVGltZVwiOntcImN1cnJlbnRcIjpcImN1cnJlbnRUaW1lXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmZsYWcuc3luY1wiOlwiZmxhZ1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBUaW1lOnRpbWVcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG1lc3NhZ2U6e1xuICAgICAgICBhZGRyZXNzOifopb/lronova/ku7blm60nLFxuICAgICAgICBuYW1lOiflhbDmraPpvpknLFxuICAgICAgICBzZXg6J21hbGUnLFxuICAgICAgICB0ZWw6JzAwMDAwMDAwMDAnLFxuICAgICAgICB0aW1lOifnq4vljbPpgIHlh7onLFxuICAgICAgICBjYW50ZWU6J+S4gOmjn+WggicsXG4gICAgICAgIGZvb2RMaXN0Olt7bmFtZTon57qi54On6IyE5a2QJyxwcmljZTonNyd9LFxuICAgICAgICAgICAgICAgICAge25hbWU6J+e6oueDp+iMhOWtkCcscHJpY2U6JzcnfV0sXG4gICAgICAgIHByaWNlOicxMDAnXG4gICAgICB9LFxuICAgICAgZmxhZzpmYWxzZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgIH1cbiAgICBpbml0UGFnZSgpe1xuXG4gICAgfVxuICAgIGNob29zZVRpbWUoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwi6YCJ5pe26Ze0XCIpXG4gICAgICB0aGlzLmZsYWcgPSB0cnVlIDtcbiAgICB9XG4gICAgc3VibWl0KCl7XG4gICAgICBjb25zb2xlLmxvZyhcIuaPkOS6pOiuouWNlVwiKVxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3N0YXR1cycsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBmYWlsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBjb21wbGV0ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19