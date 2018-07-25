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
    }, _this.$repeat = {}, _this.$props = { "Time": { "current": "currentTime", "flag.sync": "{{chooseTimeFlag}}" } }, _this.$events = {}, _this.components = {
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
      chooseTimeFlag: false
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
      this.chooseTimeFlag = true;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGltZSIsInRpbWUiLCJkYXRhIiwibWVzc2FnZSIsImFkZHJlc3MiLCJuYW1lIiwic2V4IiwidGVsIiwiY2FudGVlIiwiZm9vZExpc3QiLCJwcmljZSIsImNob29zZVRpbWVGbGFnIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwiaW5pdFBhZ2UiLCJjb25zb2xlIiwibG9nIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJjb21wbGV0ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTLEUsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxXQUFVLGFBQVgsRUFBeUIsYUFBWSxvQkFBckMsRUFBUixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxZQUFLQztBQURHLEssUUFJVlIsTSxHQUFTLEUsUUFFVFMsSSxHQUFPO0FBQ0xDLGVBQVE7QUFDTkMsaUJBQVEsT0FERjtBQUVOQyxjQUFLLEtBRkM7QUFHTkMsYUFBSSxNQUhFO0FBSU5DLGFBQUksWUFKRTtBQUtOTixjQUFLLE1BTEM7QUFNTk8sZ0JBQU8sS0FORDtBQU9OQyxrQkFBUyxDQUFDLEVBQUNKLE1BQUssTUFBTixFQUFhSyxPQUFNLEdBQW5CLEVBQUQsRUFDQyxFQUFDTCxNQUFLLE1BQU4sRUFBYUssT0FBTSxHQUFuQixFQURELENBUEg7QUFTTkEsZUFBTTtBQVRBLE9BREg7QUFZTEMsc0JBQWU7QUFaVixLLFFBZVBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7Ozs2QkFJQSxDQUNSOzs7OEJBQ1M7QUFDUixXQUFLQyxRQUFMO0FBQ0Q7OzsrQkFDUyxDQUVUOzs7aUNBQ1c7QUFDVkMsY0FBUUMsR0FBUixDQUFZLEtBQVo7QUFDQSxXQUFLTixjQUFMLEdBQXNCLElBQXRCO0FBQ0Q7Ozs2QkFDTztBQUNOSyxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBQyxTQUFHQyxVQUFILENBQWM7QUFDWkMsYUFBSyxRQURPO0FBRVpDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWE7QUFDcEI7QUFDRCxTQUpXO0FBS1pDLGNBQU0sZ0JBQVc7QUFDZjtBQUNELFNBUFc7QUFRWkMsa0JBQVUsb0JBQVc7QUFDbkI7QUFDRDtBQVZXLE9BQWQ7QUFZRDs7OztFQW5FaUNDLGVBQUtDLEk7O2tCQUFwQmxDLE0iLCJmaWxlIjoic3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB0aW1lIGZyb20gJy4uL2NvbXBvbmVudHMvdGltZSdcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHN1Ym1pdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW11cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o+Q5Lqk6K6i5Y2VJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiVGltZVwiOntcImN1cnJlbnRcIjpcImN1cnJlbnRUaW1lXCIsXCJmbGFnLnN5bmNcIjpcInt7Y2hvb3NlVGltZUZsYWd9fVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBUaW1lOnRpbWVcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG1lc3NhZ2U6e1xuICAgICAgICBhZGRyZXNzOifopb/lronova/ku7blm60nLFxuICAgICAgICBuYW1lOiflhbDmraPpvpknLFxuICAgICAgICBzZXg6J21hbGUnLFxuICAgICAgICB0ZWw6JzAwMDAwMDAwMDAnLFxuICAgICAgICB0aW1lOifnq4vljbPpgIHlh7onLFxuICAgICAgICBjYW50ZWU6J+S4gOmjn+WggicsXG4gICAgICAgIGZvb2RMaXN0Olt7bmFtZTon57qi54On6IyE5a2QJyxwcmljZTonNyd9LFxuICAgICAgICAgICAgICAgICAge25hbWU6J+e6oueDp+iMhOWtkCcscHJpY2U6JzcnfV0sXG4gICAgICAgIHByaWNlOicxMDAnXG4gICAgICB9LFxuICAgICAgY2hvb3NlVGltZUZsYWc6ZmFsc2VcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlKClcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcblxuICAgIH1cbiAgICBjaG9vc2VUaW1lKCl7XG4gICAgICBjb25zb2xlLmxvZyhcIumAieaXtumXtFwiKVxuICAgICAgdGhpcy5jaG9vc2VUaW1lRmxhZyA9IHRydWUgO1xuICAgIH1cbiAgICBzdWJtaXQoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwi5o+Q5Lqk6K6i5Y2VXCIpXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnc3RhdHVzJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGZhaWxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGNvbXBsZXRlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=