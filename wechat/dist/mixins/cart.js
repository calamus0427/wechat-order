'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cartMixin = function (_wepy$mixin) {
  _inherits(cartMixin, _wepy$mixin);

  function cartMixin() {
    _classCallCheck(this, cartMixin);

    return _possibleConstructorReturn(this, (cartMixin.__proto__ || Object.getPrototypeOf(cartMixin)).apply(this, arguments));
  }

  _createClass(cartMixin, [{
    key: 'getCartList',

    /**
     * 提供购物车总列表
     * 框架耦合
     */
    value: function getCartList(callback) {
      // 容错
      if (!this.$parent || !this.$parent.globalData) return false;
      // 回调提供商品列表
      var list = this.getArray(this.$parent.$updateGlobalData('cart'));
      // 优先执行回调
      if (this.isFunction(callback)) {
        var result = callback(list);
        // 更新返回的列表
        this.isArray(result) && this.$parent.$updateGlobalData('cart', result);
      }
      return list;
    }

    /**
     * 判断商品是否一致
     * 业务耦合
     */

  }, {
    key: 'isGoodEqual',
    value: function isGoodEqual(GA, GB) {
      return GA.id == GB.id;
    }

    // 加入购物车

  }, {
    key: 'addCart',
    value: function addCart(item, callback) {
      var _this2 = this;

      var list = this.getCartList();

      // 根据用户套餐信息处理购物车数量问题
      this.$getUserInfo(function (_ref) {
        var packages = _ref.packages;

        if (_this2.isDefined(packages)) {
          // 解构: 可借数量/次数
          var quantity = packages.quantity,
              times = packages.times;
          // 如果没有可借次数

          if (!+times) {
            return _this2.isFunction(callback) && callback({ code: 4001, message: '您当前不可借阅图书，请购买订阅套餐' });
          }
          // 判断是否已超出
          if (list.length >= +quantity) {
            // 超出提示
            _this2.isFunction(callback) && callback({ code: 1001, message: '您的订阅图书的数量已达到上限，请删除某本再借阅' });
          } else {
            // 真去加车
            try {
              _this2.realAddCart(item);
              _this2.isFunction(callback) && callback({ code: 0, message: '借阅成功' });
            } catch (e) {
              _this2.isFunction(callback) && callback({ code: 9001, message: '数据异常，请重新借阅' });
            }
          }
        } else {
          _this2.isFunction(callback) && callback({ code: 9002, message: '您暂无可用套餐,请先购买套餐' });
        }
      });
    }
  }, {
    key: 'realAddCart',
    value: function realAddCart(item) {
      this.updateCart({
        arr: item,
        isRemove: false
      }, {
        getList: this.getCartList,
        isEqual: this.isGoodEqual
      });
    }

    // 从购物车移除

  }, {
    key: 'removeCart',
    value: function removeCart(item, callback) {
      this.updateCart({
        arr: item,
        isRemove: true
      }, {
        getList: this.getCartList,
        isEqual: this.isGoodEqual,
        callback: callback
      });
      this.isFunction(callback) && callback({ code: 0, message: '删除成功' });
    }

    /**
     * 更新购物车数据
     * 1、购物车维护总列表ARR与传入列表arr的关系
     * 2、对ARR只有增和减
     * 3、增减逻辑支持传入函数判断
     * 4、返回操作后的列表
     * 业务/框架无关
     */

  }, {
    key: 'updateCart',
    value: function updateCart(_ref2, _ref3) {
      var _this3 = this;

      var arr = _ref2.arr,
          isRemove = _ref2.isRemove;
      var getList = _ref3.getList,
          isEqual = _ref3.isEqual;

      // 整理数据
      var itemArr = this.isArray(arr) ? arr : [arr];

      // 循环处理
      itemArr.map(function (good) {
        // 构造数据
        var tempData = {
          good: good,
          amount: 1
        };

        _this3.isFunction(getList) && getList.bind(_this3)(function (list) {
          // 对比去重
          var existIndex = undefined;
          if (_this3.isFunction(isEqual)) {
            for (var i = list.length - 1; i >= 0; i--) {
              if (isEqual(list[i].good, tempData.good)) {
                // 取出存在的序号
                existIndex = i;
                break;
              }
            }
          }

          // 存在时，add增加数量，remove直接删除
          // 不存在时，add直接增加
          if (isRemove) {
            // remove只在存在时操作删除
            _this3.isDefined(existIndex) && list.splice(existIndex, 1);
          } else {
            // add: 存在加数量，不存在push
            _this3.isDefined(existIndex) ? list[existIndex].amount++ : list.push(tempData);
          }
          return list;
        });
      });
    }
  }]);

  return cartMixin;
}(_wepy2.default.mixin);

exports.default = cartMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydE1peGluIiwiY2FsbGJhY2siLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImxpc3QiLCJnZXRBcnJheSIsIiR1cGRhdGVHbG9iYWxEYXRhIiwiaXNGdW5jdGlvbiIsInJlc3VsdCIsImlzQXJyYXkiLCJHQSIsIkdCIiwiaWQiLCJpdGVtIiwiZ2V0Q2FydExpc3QiLCIkZ2V0VXNlckluZm8iLCJwYWNrYWdlcyIsImlzRGVmaW5lZCIsInF1YW50aXR5IiwidGltZXMiLCJjb2RlIiwibWVzc2FnZSIsImxlbmd0aCIsInJlYWxBZGRDYXJ0IiwiZSIsInVwZGF0ZUNhcnQiLCJhcnIiLCJpc1JlbW92ZSIsImdldExpc3QiLCJpc0VxdWFsIiwiaXNHb29kRXF1YWwiLCJpdGVtQXJyIiwibWFwIiwiZ29vZCIsInRlbXBEYXRhIiwiYW1vdW50IiwiYmluZCIsImV4aXN0SW5kZXgiLCJ1bmRlZmluZWQiLCJpIiwic3BsaWNlIiwicHVzaCIsIndlcHkiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7O0FBQ25COzs7O2dDQUlZQyxRLEVBQVU7QUFDcEI7QUFDQSxVQUFJLENBQUMsS0FBS0MsT0FBTixJQUFpQixDQUFDLEtBQUtBLE9BQUwsQ0FBYUMsVUFBbkMsRUFBK0MsT0FBTyxLQUFQO0FBQy9DO0FBQ0EsVUFBTUMsT0FBTyxLQUFLQyxRQUFMLENBQWMsS0FBS0gsT0FBTCxDQUFhSSxpQkFBYixDQUErQixNQUEvQixDQUFkLENBQWI7QUFDQTtBQUNBLFVBQUksS0FBS0MsVUFBTCxDQUFnQk4sUUFBaEIsQ0FBSixFQUErQjtBQUM3QixZQUFNTyxTQUFTUCxTQUFTRyxJQUFULENBQWY7QUFDQTtBQUNBLGFBQUtLLE9BQUwsQ0FBYUQsTUFBYixLQUF3QixLQUFLTixPQUFMLENBQWFJLGlCQUFiLENBQStCLE1BQS9CLEVBQXVDRSxNQUF2QyxDQUF4QjtB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QUtBLGVBQUs1QixVQUFMLENBQWdCcUIsT0FBaEIsS0FBNEJBLFFBQVFRLElBQVIsQ0FBYSxNQUFiLEVBQW1CLFVBQUNoQyxJQUFELEVBQVU7QUFDdkQ7QUFDQSxjQUFJaUMsYUFBYUMsU0FBakI7QUFDQSxjQUFJLE9BQUsvQixVQUFMLENBQWdCc0IsT0FBaEIsQ0FBSixFQUE4QjtBQUM1QixpQkFBSyxJQUFJVSxJQUFJbkMsS0FBS2tCLE1BQUwsR0FBYyxDQUEzQixFQUE4QmlCLEtBQUssQ0FBbkMsRUFBc0NBLEdBQXRDLEVBQTJDO0FBQ3pDLGtCQUFJVixRQUFRekIsS0FBS21DLENBQUwsRUFBUU4sSUFBaEIsRUFBc0JDLFNBQVNELElBQS9CLENBQUosRUFBMEM7QUFDeEM7QUFDQUksNkJBQWFFLENBQWI7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBO0FBQ0EsY0FBSVosUUFBSixFQUFjO0FBQ1o7QUFDQSxtQkFBS1YsU0FBTCxDQUFlb0IsVUFBZixLQUE4QmpDLEtBQUtvQyxNQUFMLENBQVlILFVBQVosRUFBd0IsQ0FBeEIsQ0FBOUI7QUFDRCxXQUhELE1BR087QUFDTDtBQUNBLG1CQUFLcEIsU0FBTCxDQUFlb0IsVUFBZixJQUE2QmpDLEtBQUtpQyxVQUFMLEVBQWlCRixNQUFqQixFQUE3QixHQUF5RC9CLEtBQUtxQyxJQUFMLENBQVVQLFFBQVYsQ0FBekQ7QUFDRDtBQUNELGlCQUFPOUIsSUFBUDtBQUNELFNBdkIyQixDQUE1QjtBQXdCRCxPQS9CRDtBQWdDRDs7OztFQS9Ib0NzQyxlQUFLQyxLOztrQkFBdkIzQyxTIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FydE1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XG4gIC8qKlxuICAgKiDmj5DkvpvotK3nianovabmgLvliJfooahcbiAgICog5qGG5p626ICm5ZCIXG4gICAqL1xuICBnZXRDYXJ0TGlzdChjYWxsYmFjaykge1xuICAgIC8vIOWuuemUmVxuICAgIGlmICghdGhpcy4kcGFyZW50IHx8ICF0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YSkgcmV0dXJuIGZhbHNlXG4gICAgLy8g5Zue6LCD5o+Q5L6b5ZWG5ZOB5YiX6KGoXG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0QXJyYXkodGhpcy4kcGFyZW50LiR1cGRhdGVHbG9iYWxEYXRhKCdjYXJ0JykpXG4gICAgLy8g5LyY5YWI5omn6KGM5Zue6LCDXG4gICAgaWYgKHRoaXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGxpc3QpXG4gICAgICAvLyDmm7TmlrDov5Tlm57nmoTliJfooahcbiAgICAgIHRoaXMuaXNBcnJheShyZXN1bHQpICYmIHRoaXMuJHBhcmVudC4kdXBkYXRlR2xvYmFsRGF0YSgnY2FydCcsIHJlc3VsdClcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuXG4gIC8qKlxuICAgKiDliKTmlq3llYblk4HmmK/lkKbkuIDoh7RcbiAgICog5Lia5Yqh6ICm5ZCIXG4gICAqL1xuICBpc0dvb2RFcXVhbChHQSwgR0IpIHtcbiAgICByZXR1cm4gR0EuaWQgPT0gR0IuaWRcbiAgfVxuXG4gIC8vIOWKoOWFpei0reeJqei9plxuICBhZGRDYXJ0KGl0ZW0sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0Q2FydExpc3QoKVxuXG4gICAgLy8g5qC55o2u55So5oi35aWX6aSQ5L+h5oGv5aSE55CG6LSt54mp6L2m5pWw6YeP6Zeu6aKYXG4gICAgdGhpcy4kZ2V0VXNlckluZm8oKHsgcGFja2FnZXMgfSkgPT4geyAgICAgIFxuICAgICAgaWYgKHRoaXMuaXNEZWZpbmVkKCBwYWNrYWdlcyApKSB7XG4gICAgICAgIC8vIOino+aehDog5Y+v5YCf5pWw6YePL+asoeaVsFxuICAgICAgICBjb25zdCB7cXVhbnRpdHksIHRpbWVzfSA9IHBhY2thZ2VzXG4gICAgICAgIC8vIOWmguaenOayoeacieWPr+WAn+asoeaVsFxuICAgICAgICBpZiAoISt0aW1lcykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHtjb2RlOiA0MDAxLCBtZXNzYWdlOiAn5oKo5b2T5YmN5LiN5Y+v5YCf6ZiF5Zu+5Lmm77yM6K+36LSt5Lmw6K6i6ZiF5aWX6aSQJ30pXG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yik5pat5piv5ZCm5bey6LaF5Ye6XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA+PSArcXVhbnRpdHkpIHtcbiAgICAgICAgICAvLyDotoXlh7rmj5DnpLpcbiAgICAgICAgICB0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHtjb2RlOiAxMDAxLCBtZXNzYWdlOiAn5oKo55qE6K6i6ZiF5Zu+5Lmm55qE5pWw6YeP5bey6L6+5Yiw5LiK6ZmQ77yM6K+35Yig6Zmk5p+Q5pys5YaN5YCf6ZiFJ30pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g55yf5Y675Yqg6L2mXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMucmVhbEFkZENhcnQoaXRlbSlcbiAgICAgICAgICAgIHRoaXMuaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2soe2NvZGU6IDAsIG1lc3NhZ2U6ICflgJ/pmIXmiJDlip8nfSlcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHtjb2RlOiA5MDAxLCBtZXNzYWdlOiAn5pWw5o2u5byC5bi477yM6K+36YeN5paw5YCf6ZiFJ30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHtjb2RlOiA5MDAyLCBtZXNzYWdlOiAn5oKo5pqC5peg5Y+v55So5aWX6aSQLOivt+WFiOi0reS5sOWll+mkkCd9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWFsQWRkQ2FydChpdGVtKSB7XG4gICAgdGhpcy51cGRhdGVDYXJ0KHtcbiAgICAgIGFycjogaXRlbSxcbiAgICAgIGlzUmVtb3ZlOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGdldExpc3Q6IHRoaXMuZ2V0Q2FydExpc3QsXG4gICAgICBpc0VxdWFsOiB0aGlzLmlzR29vZEVxdWFsXG4gICAgfSlcbiAgfVxuXG4gIC8vIOS7jui0reeJqei9puenu+mZpFxuICByZW1vdmVDYXJ0KGl0ZW0sIGNhbGxiYWNrKSB7XG4gICAgdGhpcy51cGRhdGVDYXJ0KHtcbiAgICAgIGFycjogaXRlbSxcbiAgICAgIGlzUmVtb3ZlOiB0cnVlXG4gICAgfSwge1xuICAgICAgZ2V0TGlzdDogdGhpcy5nZXRDYXJ0TGlzdCxcbiAgICAgIGlzRXF1YWw6IHRoaXMuaXNHb29kRXF1YWwsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICB9KVxuICAgIHRoaXMuaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2soe2NvZGU6IDAsIG1lc3NhZ2U6ICfliKDpmaTmiJDlip8nfSlcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrDotK3nianovabmlbDmja5cbiAgICogMeOAgei0reeJqei9pue7tOaKpOaAu+WIl+ihqEFSUuS4juS8oOWFpeWIl+ihqGFycueahOWFs+ezu1xuICAgKiAy44CB5a+5QVJS5Y+q5pyJ5aKe5ZKM5YePXG4gICAqIDPjgIHlop7lh4/pgLvovpHmlK/mjIHkvKDlhaXlh73mlbDliKTmlq1cbiAgICogNOOAgei/lOWbnuaTjeS9nOWQjueahOWIl+ihqFxuICAgKiDkuJrliqEv5qGG5p625peg5YWzXG4gICAqL1xuICB1cGRhdGVDYXJ0KHthcnIsIGlzUmVtb3ZlfSwge2dldExpc3QsIGlzRXF1YWx9KSB7XG4gICAgLy8g5pW055CG5pWw5o2uXG4gICAgY29uc3QgaXRlbUFyciA9IHRoaXMuaXNBcnJheShhcnIpID8gYXJyIDogW2Fycl1cblxuICAgIC8vIOW+queOr+WkhOeQhlxuICAgIGl0ZW1BcnIubWFwKChnb29kKSA9PiB7XG4gICAgICAvLyDmnoTpgKDmlbDmja5cbiAgICAgIGNvbnN0IHRlbXBEYXRhID0ge1xuICAgICAgICBnb29kOiBnb29kLFxuICAgICAgICBhbW91bnQ6IDFcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc0Z1bmN0aW9uKGdldExpc3QpICYmIGdldExpc3QuYmluZCh0aGlzKSgobGlzdCkgPT4ge1xuICAgICAgICAvLyDlr7nmr5Tljrvph41cbiAgICAgICAgbGV0IGV4aXN0SW5kZXggPSB1bmRlZmluZWRcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbihpc0VxdWFsKSkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoaXNFcXVhbChsaXN0W2ldLmdvb2QsIHRlbXBEYXRhLmdvb2QpKSB7XG4gICAgICAgICAgICAgIC8vIOWPluWHuuWtmOWcqOeahOW6j+WPt1xuICAgICAgICAgICAgICBleGlzdEluZGV4ID0gaVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWtmOWcqOaXtu+8jGFkZOWinuWKoOaVsOmHj++8jHJlbW92ZeebtOaOpeWIoOmZpFxuICAgICAgICAvLyDkuI3lrZjlnKjml7bvvIxhZGTnm7TmjqXlop7liqBcbiAgICAgICAgaWYgKGlzUmVtb3ZlKSB7XG4gICAgICAgICAgLy8gcmVtb3Zl5Y+q5Zyo5a2Y5Zyo5pe25pON5L2c5Yig6ZmkXG4gICAgICAgICAgdGhpcy5pc0RlZmluZWQoZXhpc3RJbmRleCkgJiYgbGlzdC5zcGxpY2UoZXhpc3RJbmRleCwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhZGQ6IOWtmOWcqOWKoOaVsOmHj++8jOS4jeWtmOWcqHB1c2hcbiAgICAgICAgICB0aGlzLmlzRGVmaW5lZChleGlzdEluZGV4KSA/IGxpc3RbZXhpc3RJbmRleF0uYW1vdW50KysgOiBsaXN0LnB1c2godGVtcERhdGEpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIl19