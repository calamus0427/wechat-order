'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseMixin = function (_wepy$mixin) {
  _inherits(baseMixin, _wepy$mixin);

  function baseMixin() {
    _classCallCheck(this, baseMixin);

    return _possibleConstructorReturn(this, (baseMixin.__proto__ || Object.getPrototypeOf(baseMixin)).apply(this, arguments));
  }

  _createClass(baseMixin, [{
    key: 'noop',

    /**
     * [公共方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */
    value: function noop() {
      return null;
    }
  }, {
    key: 'hasOwn',
    value: function hasOwn(obj, type) {
      return Object.prototype.hasOwnProperty.call(obj, type);
    }

    /**
     * [isXXX 基础方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */

  }, {
    key: 'isUndefined',
    value: function isUndefined(item) {
      return typeof item === 'undefined';
    }
  }, {
    key: 'isDefined',
    value: function isDefined(item) {
      return !this.isUndefined(item);
    }
  }, {
    key: 'isString',
    value: function isString(item) {
      return typeof item === 'string';
    }
  }, {
    key: 'isNumber',
    value: function isNumber(item) {
      return typeof item === 'number';
    }
  }, {
    key: 'isArray',
    value: function isArray(item) {
      return Object.prototype.toString.apply(item) === '[object Array]';
    }
  }, {
    key: 'isObject',
    value: function isObject(item) {
      return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !this.isArray(item);
    }
  }, {
    key: 'isFunction',
    value: function isFunction(item) {
      return typeof item === 'function';
    }

    /**
     * [getXXX 增强方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */

  }, {
    key: 'getString',
    value: function getString(item, defaultStr) {
      if (this.isString(item)) return item.trim();
      if (this.isNumber(item)) return ('' + item).trim();
      return defaultStr || '';
    }
  }, {
    key: 'getNumber',
    value: function getNumber(item, defaultNum) {
      var matches = this.getString(item).match(/\d+/);
      return this.isNumber(matches && +matches[0]) ? +matches[0] : defaultNum;
    }
  }, {
    key: 'getArray',
    value: function getArray(item, defaultArr) {
      return this.isArray(item) ? item : defaultArr || [];
    }
  }, {
    key: 'getObject',
    value: function getObject(item, defaultObj) {
      return this.isObject(item) ? item : defaultObj || {};
    }
  }, {
    key: 'getFunction',
    value: function getFunction(item) {
      return this.isFunction(item) ? item : noop;
    }

    /**
     * [JSON方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */

  }, {
    key: '$json',
    value: function $json(item) {
      var str = { type: Object.prototype.toString.call(item) };
      try {
        str = JSON.stringify(item);
      } catch (e) {
        str.error = e && e.stack || '';
      }
      return this.isString(str) ? str : this.$json(str);
    }
  }, {
    key: '$parse',
    value: function $parse(item) {
      var obj = { type: Object.prototype.toString.call(item) };
      try {
        obj = JSON.parse(item);
      } catch (e) {
        obj.error = e && e.stack || '';
      }
      return this.isObject(obj) ? obj : this.$parse(obj);
    }

    /**
     * [功能方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */

  }, {
    key: 'isPhone',
    value: function isPhone(str) {
      return (/^1\d{10}$/.test(str)
      );
    }
  }, {
    key: '$alert',
    value: function $alert() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '标题';
      var item2 = arguments[1];

      var param = this.isObject(item) ? Object.assign({
        // 首参数为obj
        title: 'title', content: 'content'
      }, item) : this.isString(item) ? this.isString(item2) ? {
        // 俩参数均为字符串
        title: item, content: item2
      } : {
        // 只有首参为字符串
        title: '', content: item
      } : {
        // 尝试转换字符串
        title: item.toString ? item.toString() : '参数异常'
      };
      wx.showModal(Object.assign({
        showCancel: false
      }, param));
    }
  }]);

  return baseMixin;
}(_wepy2.default.mixin);

exports.default = baseMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsiYmFzZU1peGluIiwib2JqIiwidHlwZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIml0ZW0iLCJpc1VuZGVmaW5lZCIsInRvU3RyaW5nIiwiYXBwbHkiLCJpc0FycmF5IiwiZGVmYXVsdFN0ciIsImlzU3RyaW5nIiwidHJpbSIsImlzTnVtYmVyIiwiZGVmYXVsdE51bSIsIm1hdGNoZXMiLCJnZXRTdHJpbmciLCJtYXRjaCIsImRlZmF1bHRBcnIiLCJkZWZhdWx0T2JqIiwiaXNPYmplY3QiLCJpc0Z1bmN0aW9uIiwibm9vcCIsInN0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiZXJyb3IiLCJzdGFjayIsIiRqc29uIiwicGFyc2UiLCIkcGFyc2UiLCJ0ZXN0IiwiaXRlbTIiLCJwYXJhbSIsImFzc2lnbiIsInRpdGxlIiwiY29udGVudCIsInd4Iiwic2hvd01vZGFsIiwic2hvd0NhbmNlbCIsIndlcHkiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7QUFDbkI7Ozs7OzJCQUtPO0FBQ0wsYUFBTyxJQUFQO0FBQ0Q7OzsyQkFDTUMsRyxFQUFLQyxJLEVBQU07QUFDaEIsYUFBT0MsT0FBT0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxHQUFyQyxFQUEwQ0MsSUFBMUMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7OztnQ0FLWUssSSxFQUFNO0FBQ2hCLGFBQU8sT0FBT0EsSUFBUCxLQUFnQixXQUF2QjtBQUNEOzs7OEJBQ1NBLEksRUFBTTtBQUNkLGFBQU8sQ0FBQyxLQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDQUFSO0FBQ0Q7Ozs2QkFDUUEsSSxFQUFNO0FBQ2IsYUFBTyxPQUFPQSxJQUFQLEtBQWdCLFFBQXZCO0FBQ0Q7Ozs2QkFDUUEsSSxFQUFNO0FBQ2IsYUFBTyxPQUFPQSxJQUFQLEtB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UCxDQUFjO0FBQ2hEO0FBQ0FDLGVBQU8sT0FGeUMsRUFFaENDLFNBQVM7QUFGdUIsT0FBZCxFQUdqQ2hDLElBSGlDLENBQXRCLEdBR0gsS0FBS00sUUFBTCxDQUFjTixJQUFkLElBQXNCLEtBQUtNLFFBQUwsQ0FBY3NCLEtBQWQsSUFBdUI7QUFDdEQ7QUFDQUcsZUFBTy9CLElBRitDLEVBRXpDZ0MsU0FBU0o7QUFGZ0MsT0FBdkIsR0FHN0I7QUFDRjtBQUNBRyxlQUFPLEVBRkwsRUFFU0MsU0FBU2hDO0FBRmxCLE9BSE8sR0FNUDtBQUNGO0FBQ0ErQixlQUFPL0IsS0FBS0UsUUFBTCxHQUFnQkYsS0FBS0UsUUFBTCxFQUFoQixHQUFrQztBQUZ2QyxPQVRKO0FBYUErQixTQUFHQyxTQUFILENBQWF0QyxPQUFPa0MsTUFBUCxDQUFjO0FBQ3pCSyxvQkFBWTtBQURhLE9BQWQsRUFFVk4sS0FGVSxDQUFiO0FBR0Q7Ozs7RUFqSG9DTyxlQUFLQyxLOztrQkFBdkI1QyxTIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBiYXNlTWl4aW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcbiAgLyoqXG4gICAqIFvlhazlhbHmlrnms5VdXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIGl0ZW0gW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIG5vb3AoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaGFzT3duKG9iaiwgdHlwZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCB0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbaXNYWFgg5Z+656GA5pa55rOVXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBpdGVtIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBpc1VuZGVmaW5lZChpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAndW5kZWZpbmVkJztcbiAgfVxuICBpc0RlZmluZWQoaXRlbSkge1xuICAgIHJldHVybiAhdGhpcy5pc1VuZGVmaW5lZChpdGVtKTtcbiAgfVxuICBpc1N0cmluZyhpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJztcbiAgfVxuICBpc051bWJlcihpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnbnVtYmVyJztcbiAgfVxuICBpc0FycmF5KGl0ZW0pIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShpdGVtKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuICBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhdGhpcy5pc0FycmF5KGl0ZW0pO1xuICB9XG4gIGlzRnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBbZ2V0WFhYIOWinuW8uuaWueazlV1cbiAgICogQHBhcmFtICB7W3R5cGVdfSAgaXRlbSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZ2V0U3RyaW5nKGl0ZW0sIGRlZmF1bHRTdHIpIHtcbiAgICBpZiAodGhpcy5pc1N0cmluZyhpdGVtKSkgcmV0dXJuIGl0ZW0udHJpbSgpO1xuICAgIGlmICh0aGlzLmlzTnVtYmVyKGl0ZW0pKSByZXR1cm4gYCR7aXRlbX1gLnRyaW0oKTtcbiAgICByZXR1cm4gZGVmYXVsdFN0ciB8fCAnJztcbiAgfVxuICBnZXROdW1iZXIoaXRlbSwgZGVmYXVsdE51bSkge1xuICAgIHZhciBtYXRjaGVzID0gdGhpcy5nZXRTdHJpbmcoaXRlbSkubWF0Y2goL1xcZCsvKTtcbiAgICByZXR1cm4gdGhpcy5pc051bWJlcihtYXRjaGVzICYmICttYXRjaGVzWzBdKSA/ICttYXRjaGVzWzBdIDogZGVmYXVsdE51bTtcbiAgfVxuICBnZXRBcnJheShpdGVtLCBkZWZhdWx0QXJyKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNBcnJheShpdGVtKSA/IGl0ZW0gOiAoZGVmYXVsdEFyciB8fCBbXSk7XG4gIH1cbiAgZ2V0T2JqZWN0KGl0ZW0sIGRlZmF1bHRPYmopIHtcbiAgICByZXR1cm4gdGhpcy5pc09iamVjdChpdGVtKSA/IGl0ZW0gOiAoZGVmYXVsdE9iaiB8fCB7fSk7XG4gIH1cbiAgZ2V0RnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLmlzRnVuY3Rpb24oaXRlbSkgPyBpdGVtIDogbm9vcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBbSlNPTuaWueazlV1cbiAgICogQHBhcmFtICB7W3R5cGVdfSAgaXRlbSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgJGpzb24oaXRlbSkge1xuICAgIGxldCBzdHIgPSB7dHlwZTogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pfVxuICAgIHRyeSB7XG4gICAgICBzdHIgPSBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHN0ci5lcnJvciA9IGUgJiYgZS5zdGFjayB8fCAnJ1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc1N0cmluZyhzdHIpID8gc3RyIDogdGhpcy4kanNvbihzdHIpXG4gIH1cbiAgJHBhcnNlKGl0ZW0pIHtcbiAgICBsZXQgb2JqID0ge3R5cGU6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKX1cbiAgICB0cnkge1xuICAgICAgb2JqID0gSlNPTi5wYXJzZShpdGVtKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG9iai5lcnJvciA9IGUgJiYgZS5zdGFjayB8fCAnJ1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc09iamVjdChvYmopID8gb2JqIDogdGhpcy4kcGFyc2Uob2JqKVxuICB9XG5cbiAgLyoqXG4gICAqIFvlip/og73mlrnms5VdXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIGl0ZW0gW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGlzUGhvbmUoc3RyKSB7XG4gICAgcmV0dXJuIC9eMVxcZHsxMH0kLy50ZXN0KHN0cilcbiAgfVxuICAkYWxlcnQoaXRlbSA9ICfmoIfpopgnLCBpdGVtMikge1xuICAgIGNvbnN0IHBhcmFtID0gdGhpcy5pc09iamVjdChpdGVtKSA/IE9iamVjdC5hc3NpZ24oe1xuICAgICAgLy8g6aaW5Y+C5pWw5Li6b2JqXG4gICAgICB0aXRsZTogJ3RpdGxlJywgY29udGVudDogJ2NvbnRlbnQnXG4gICAgfSwgaXRlbSkgOiB0aGlzLmlzU3RyaW5nKGl0ZW0pID8gdGhpcy5pc1N0cmluZyhpdGVtMikgPyB7XG4gICAgICAvLyDkv6nlj4LmlbDlnYfkuLrlrZfnrKbkuLJcbiAgICAgIHRpdGxlOiBpdGVtLCBjb250ZW50OiBpdGVtMlxuICAgIH0gOiB7XG4gICAgICAvLyDlj6rmnInpppblj4LkuLrlrZfnrKbkuLJcbiAgICAgIHRpdGxlOiAnJywgY29udGVudDogaXRlbVxuICAgIH0gOiB7XG4gICAgICAvLyDlsJ3or5XovazmjaLlrZfnrKbkuLJcbiAgICAgIHRpdGxlOiBpdGVtLnRvU3RyaW5nID8gaXRlbS50b1N0cmluZygpIDogJ+WPguaVsOW8guW4uCdcbiAgICB9XG4gICAgd3guc2hvd01vZGFsKE9iamVjdC5hc3NpZ24oe1xuICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICB9LCBwYXJhbSkpXG4gIH1cbn1cbiJdfQ==