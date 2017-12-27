'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('_babel-runtime@6.26.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

require('isomorphic-fetch');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(runClockSaga),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(loadDataSaga),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

_es6Promise2.default.polyfill();

function runClockSaga() {
    return _regenerator2.default.wrap(function runClockSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.take)(_actions.actionTypes.START_CLOCK);

                case 2:
                    if (!true) {
                        _context.next = 9;
                        break;
                    }

                    _context.next = 5;
                    return (0, _effects.put)((0, _actions.tickClock)(false));

                case 5:
                    _context.next = 7;
                    return (0, _effects.call)(_reduxSaga.delay, 800);

                case 7:
                    _context.next = 2;
                    break;

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function loadDataSaga() {
    var res, data;
    return _regenerator2.default.wrap(function loadDataSaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return fetch('https://jsonplaceholder.typicode.com/users');

                case 3:
                    res = _context2.sent;
                    _context2.next = 6;
                    return res.json();

                case 6:
                    data = _context2.sent;
                    _context2.next = 9;
                    return (0, _effects.put)((0, _actions.loadDataSuccess)(data));

                case 9:
                    _context2.next = 15;
                    break;

                case 11:
                    _context2.prev = 11;
                    _context2.t0 = _context2['catch'](0);
                    _context2.next = 15;
                    return (0, _effects.put)((0, _actions.failure)(_context2.t0));

                case 15:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this, [[0, 11]]);
}

function rootSaga() {
    return _regenerator2.default.wrap(function rootSaga$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return (0, _effects.all)([(0, _effects.call)(runClockSaga), (0, _effects.takeLatest)(_actions.actionTypes.LOAD_DATA, loadDataSaga)]);

                case 2:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}

exports.default = rootSaga;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3NhZ2EuanMiXSwibmFtZXMiOlsicnVuQ2xvY2tTYWdhIiwibG9hZERhdGFTYWdhIiwicm9vdFNhZ2EiLCJkZWxheSIsImFsbCIsImNhbGwiLCJwdXQiLCJ0YWtlIiwidGFrZUxhdGVzdCIsImVzNnByb21pc2UiLCJhY3Rpb25UeXBlcyIsImZhaWx1cmUiLCJsb2FkRGF0YVN1Y2Nlc3MiLCJ0aWNrQ2xvY2siLCJwb2x5ZmlsbCIsIlNUQVJUX0NMT0NLIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsIkxPQURfREFUQSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFLLEFBQU0sQUFBSyxBQUFNOztBQUMvQixBQUFPOzs7O0FBQ1A7O0FBRUEsQUFBUyxBQUFhLEFBQVMsQUFBaUI7Ozs7c0RBSXRDLEE7dURBUUEsQTt1RCxBQVVBOztBQXBCVixxQkFBQSxBQUFXOztBQUVYLFNBQUEsQUFBVSxlQUFWO3VFQUFBO2tCQUFBOzZDQUFBO3FCQUFBO29DQUFBOzJCQUNVLG1CQUFLLHFCQURmLEFBQ1UsQUFBaUI7O3FCQUQzQjt5QkFBQSxBQUVXLE1BRlg7d0NBQUE7QUFBQTtBQUFBOztvQ0FBQTsyQkFHYyxrQkFBSSx3QkFIbEIsQUFHYyxBQUFJLEFBQVU7O3FCQUg1QjtvQ0FBQTsyQkFJYyxBQUFLLHFDQUpuQixBQUljLEFBQVk7O3FCQUoxQjtvQ0FBQTtBQUFBOztxQkFBQTtxQkFBQTtvQ0FBQTs7QUFBQTtnQkFBQTs7O0FBUUEsU0FBQSxBQUFVLGVBQVY7YUFBQTt3RUFBQTtrQkFBQTsrQ0FBQTtxQkFBQTtxQ0FBQTtxQ0FBQTsyQkFFMEIsTUFGMUIsQUFFMEIsQUFBTTs7cUJBQWxCO0FBRmQsb0NBQUE7cUNBQUE7MkJBRzJCLElBSDNCLEFBRzJCLEFBQUk7O3FCQUFqQjtBQUhkLHFDQUFBO3FDQUFBOzJCQUljLGtCQUFJLDhCQUpsQixBQUljLEFBQUksQUFBZ0I7O3FCQUpsQztxQ0FBQTtBQUFBOztxQkFBQTtxQ0FBQTtzREFBQTtxQ0FBQTsyQkFNYyxrQkFBSSxnQ0FObEIsQUFNYzs7cUJBTmQ7cUJBQUE7cUNBQUE7O0FBQUE7NEJBQUE7OztBQVVBLFNBQUEsQUFBVSxXQUFWO29FQUFBO2tCQUFBOytDQUFBO3FCQUFBO3FDQUFBOzJCQUNVLGtCQUFJLENBQ04sbUJBRE0sQUFDTixBQUFLLGVBQ0wseUJBQVcscUJBQVgsQUFBdUIsV0FIL0IsQUFDVSxBQUFJLEFBRU4sQUFBa0M7O3FCQUgxQztxQkFBQTtxQ0FBQTs7QUFBQTtpQkFBQTtBQU9BOztrQkFBQSxBQUFlIiwiZmlsZSI6InNhZ2EuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dhbmdqdW4vcmVhY3Qtc2VydmVyL2hlbGxvLW5leHQifQ==