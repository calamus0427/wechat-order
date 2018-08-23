'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncInc = undefined;

var _counter = require('./../types/counter.js');

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var asyncInc = exports.asyncInc = (0, _reduxActions.createAction)(_counter.ASYNC_INCREMENT, function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(1);
    }, 1000);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiYXN5bmNJbmMiLCJBU1lOQ19JTkNSRU1FTlQiLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFTyxJQUFNQSw4QkFBVyxnQ0FBYUMsd0JBQWIsRUFBOEIsWUFBTTtBQUMxRCxTQUFPLElBQUlDLE9BQUosQ0FBWSxtQkFBVztBQUM1QkMsZUFBVyxZQUFNO0FBQ2ZDLGNBQVEsQ0FBUjtBQUNELEtBRkQsRUFFRyxJQUZIO0FBR0QsR0FKTSxDQUFQO0FBS0QsQ0FOdUIsQ0FBakIiLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFTWU5DX0lOQ1JFTUVOVCB9IGZyb20gJy4uL3R5cGVzL2NvdW50ZXInXG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgYXN5bmNJbmMgPSBjcmVhdGVBY3Rpb24oQVNZTkNfSU5DUkVNRU5ULCAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoMSlcbiAgICB9LCAxMDAwKVxuICB9KVxufSkiXX0=