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
    }, _this.components = {}, _this.mixins = [], _this.data = {
      message: {
        address: '西安软件园',
        name: '兰正龙',
        sex: 'male',
        tel: '0000000000',
        time: '立即送出',
        cantee: '一食堂',
        foodList: [{ name: '红烧茄子', price: '7' }, { name: '红烧茄子', price: '7' }],
        price: '100'
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJtZXNzYWdlIiwiYWRkcmVzcyIsIm5hbWUiLCJzZXgiLCJ0ZWwiLCJ0aW1lIiwiY2FudGVlIiwiZm9vZExpc3QiLCJwcmljZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsImluaXRQYWdlIiwiY29uc29sZSIsImxvZyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiY29tcGxldGUiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVMsRSxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkgsTSxHQUFTLEUsUUFFVEksSSxHQUFPO0FBQ0xDLGVBQVE7QUFDTkMsaUJBQVEsT0FERjtBQUVOQyxjQUFLLEtBRkM7QUFHTkMsYUFBSSxNQUhFO0FBSU5DLGFBQUksWUFKRTtBQUtOQyxjQUFLLE1BTEM7QUFNTkMsZ0JBQU8sS0FORDtBQU9OQyxrQkFBUyxDQUFDLEVBQUNMLE1BQUssTUFBTixFQUFhTSxPQUFNLEdBQW5CLEVBQUQsRUFDQyxFQUFDTixNQUFLLE1BQU4sRUFBYU0sT0FBTSxHQUFuQixFQURELENBUEg7QUFTTkEsZUFBTTtBQVRBO0FBREgsSyxRQWNQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7NkJBSUEsQ0FDUjs7OzhCQUNTO0FBQ1IsV0FBS0MsUUFBTDtBQUNEOzs7K0JBQ1MsQ0FFVDs7O2lDQUNXO0FBQ1ZDLGNBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0Q7Ozs2QkFDTztBQUNORCxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBQyxTQUFHQyxVQUFILENBQWM7QUFDWkMsYUFBSyxRQURPO0FBRVpDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWE7QUFDcEI7QUFDRCxTQUpXO0FBS1pDLGNBQU0sZ0JBQVc7QUFDZjtBQUNELFNBUFc7QUFRWkMsa0JBQVUsb0JBQVc7QUFDbkI7QUFDRDtBQVZXLE9BQWQ7QUFZRDs7OztFQTlEaUNDLGVBQUtDLEk7O2tCQUFwQjdCLE0iLCJmaWxlIjoic3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3VibWl0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmj5DkuqTorqLljZUnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG1lc3NhZ2U6e1xuICAgICAgICBhZGRyZXNzOifopb/lronova/ku7blm60nLFxuICAgICAgICBuYW1lOiflhbDmraPpvpknLFxuICAgICAgICBzZXg6J21hbGUnLFxuICAgICAgICB0ZWw6JzAwMDAwMDAwMDAnLFxuICAgICAgICB0aW1lOifnq4vljbPpgIHlh7onLFxuICAgICAgICBjYW50ZWU6J+S4gOmjn+WggicsXG4gICAgICAgIGZvb2RMaXN0Olt7bmFtZTon57qi54On6IyE5a2QJyxwcmljZTonNyd9LFxuICAgICAgICAgICAgICAgICAge25hbWU6J+e6oueDp+iMhOWtkCcscHJpY2U6JzcnfV0sXG4gICAgICAgIHByaWNlOicxMDAnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgdGhpcy5pbml0UGFnZSgpXG4gICAgfVxuICAgIGluaXRQYWdlKCl7XG5cbiAgICB9XG4gICAgY2hvb3NlVGltZSgpe1xuICAgICAgY29uc29sZS5sb2coXCLpgInml7bpl7RcIilcbiAgICB9XG4gICAgc3VibWl0KCl7XG4gICAgICBjb25zb2xlLmxvZyhcIuaPkOS6pOiuouWNlVwiKVxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3N0YXR1cycsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBmYWlsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBjb21wbGV0ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19