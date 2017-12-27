'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('_next@4.2.1@next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _addCount = require('./add-count');

var _addCount2 = _interopRequireDefault(_addCount);

var _clock = require('./clock');

var _clock2 = _interopRequireDefault(_clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wangjun/react-server/hello-next/components/page.js';


function Page(_ref) {
    var error = _ref.error,
        lastUpdate = _ref.lastUpdate,
        light = _ref.light,
        linkTo = _ref.linkTo,
        placeholderData = _ref.placeholderData,
        title = _ref.title;

    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, title), _react2.default.createElement(_clock2.default, { lastUpdate: lastUpdate, light: light, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }), _react2.default.createElement(_addCount2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('nav', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_link2.default, { href: linkTo, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'Navigate'))), placeholderData && _react2.default.createElement('pre', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('code', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, (0, _stringify2.default)(placeholderData, null, 2))), error && _react2.default.createElement('p', { style: { color: 'red' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, 'Error: ', error.message));
}

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Page);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiY29ubmVjdCIsIkFkZENvdW50IiwiQ2xvY2siLCJQYWdlIiwiZXJyb3IiLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJsaW5rVG8iLCJwbGFjZWhvbGRlckRhdGEiLCJ0aXRsZSIsImNvbG9yIiwibWVzc2FnZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxTQUFBLEFBQVMsV0FBbUU7UUFBNUQsQUFBNEQsYUFBNUQsQUFBNEQ7UUFBckQsQUFBcUQsa0JBQXJELEFBQXFEO1FBQXpDLEFBQXlDLGFBQXpDLEFBQXlDO1FBQWxDLEFBQWtDLGNBQWxDLEFBQWtDO1FBQTFCLEFBQTBCLHVCQUExQixBQUEwQjtRQUFULEFBQVMsYUFBVCxBQUFTLEFBQ3hFOzsyQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0s7QUFETDtBQUFBLE9BREosQUFDSSxBQUdBLHdCQUFBLEFBQUMsaUNBQU0sWUFBUCxBQUFtQixZQUFZLE9BQS9CLEFBQXNDO3NCQUF0Qzt3QkFKSixBQUlJLEFBQ0E7QUFEQTt3QkFDQSxBQUFDOztzQkFBRDt3QkFMSixBQUtJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUMsZ0NBQUssTUFBTixBQUFZO3NCQUFaO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FSWixBQU1JLEFBQ0ksQUFDSSxBQUdQLGtEQUNHLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSztBQURMO0FBQUEsZ0NBQ0ssQUFBZSxpQkFBZixBQUFnQyxNQWRqRCxBQVlRLEFBQ0ksQUFDSyxBQUFzQyxBQUdsRCwrQkFDRyxjQUFBLE9BQUcsT0FBTyxFQUFFLE9BQVosQUFBVSxBQUFTO3NCQUFuQjt3QkFBQTtBQUFBO0tBQUEsRUFDWSxpQkFwQnhCLEFBQ0ksQUFrQlEsQUFDa0IsQUFJakM7QUFFRDs7MkNBQXVCLGlCQUFBO1dBQUEsQUFBUztBQUFqQixDQUFBLEVBQWYsQUFBZSxBQUF3QiIsImZpbGUiOiJwYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YW5nanVuL3JlYWN0LXNlcnZlci9oZWxsby1uZXh0In0=