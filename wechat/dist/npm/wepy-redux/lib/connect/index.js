'use strict';

exports.__esModule = true;
exports.default = connect;

var _store = require('./../store.js');

var _helpers = require('./../helpers/index.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function connect(states, actions) {
    states = (0, _helpers.mapState)(states || {});
    actions = (0, _helpers.mapActions)(actions || {});
    return function connectComponent(Component) {
        var unSubscribe = null;

        var _onLoad = Component.prototype.onLoad;
        var _onUnload = Component.prototype.onUnload;

        var onStateChange = function onStateChange() {
            var _this = this;

            var store = (0, _store.getStore)();
            var hasChanged = false;
            Object.keys(states).forEach(function (k) {
                var newV = states[k].call(_this);
                if (_this[k] !== newV) {
                    _this[k] = newV;
                    hasChanged = true;
                }
            });
            hasChanged && this.$apply();
        };
        return function (_Component) {
            _inherits(_class, _Component);

            function _class() {
                _classCallCheck(this, _class);

                var _this2 = _possibleConstructorReturn(this, _Component.call(this));

                _this2.computed = Object.assign(_this2.computed || {}, states);
                _this2.methods = Object.assign(_this2.methods || {}, actions);
                return _this2;
            }

            _class.prototype.onLoad = function onLoad() {
                var store = (0, _store.getStore)();
                unSubscribe = store.subscribe(onStateChange.bind(this));
                onStateChange.call(this);
                _onLoad && _onLoad.apply(this, arguments);
            };

            _class.prototype.onUnload = function onUnload() {
                unSubscribe && unSubscribe();
                unSubscribe = null;
                _onUnload && _onUnload.apply(this, arguments);
            };

            return _class;
        }(Component);
    };
};