'use strict';

exports.__esModule = true;
exports.mapActions = exports.mapState = undefined;

var _store = require('./../store.js');

var mapState = exports.mapState = function mapState(states) {
    var res = {};
    normalizeMap(states).forEach(function (_ref) {
        var key = _ref.key,
            val = _ref.val;

        res[key] = function mappedState() {
            var store = (0, _store.getStore)();
            var state = store.getState();
            return typeof val === 'function' ? val.call(this, state) : state[val];
        };
    });
    return res;
};

var mapActions = exports.mapActions = function mapActions(actions) {
    var res = {};
    normalizeMap(actions).forEach(function (_ref2) {
        var key = _ref2.key,
            val = _ref2.val;

        res[key] = function mappedAction() {
            var store = (0, _store.getStore)();
            var dispatchParam = void 0;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (typeof val === 'string') {
                dispatchParam = {
                    type: val,

                    payload: args.length > 1 ? args : args[0]
                };
            } else {
                dispatchParam = typeof val === 'function' ? val.apply(store, args) : val;
            }
            return store.dispatch.call(store, dispatchParam);
        };
    });
    return res;
};

function normalizeMap(map) {
    return Array.isArray(map) ? map.map(function (key) {
        return { key: key, val: key };
    }) : Object.keys(map).map(function (key) {
        return { key: key, val: map[key] };
    });
}