'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('_babel-runtime@6.26.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../redux/actions');

var _store = require('../redux/store');

var _page = require('../components/page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wangjun/react-server/hello-next/pages/reduxTest.js?entry';


var Counter = function (_React$Component) {
    (0, _inherits3.default)(Counter, _React$Component);

    function Counter() {
        (0, _classCallCheck3.default)(this, Counter);

        return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));
    }

    (0, _createClass3.default)(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch((0, _actions.startClock)());
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_page2.default, { title: 'Index Page', linkTo: '/other', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            });
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var store = _ref.store;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                store.dispatch((0, _actions.increment)());
                                if (!store.getState().placeholderData) {
                                    store.dispatch((0, _actions.loadData)());
                                }

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Counter;
}(_react2.default.Component);

exports.default = (0, _store.withReduxSaga)(Counter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZHV4VGVzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImluY3JlbWVudCIsImxvYWREYXRhIiwic3RhcnRDbG9jayIsIndpdGhSZWR1eFNhZ2EiLCJQYWdlIiwiQ291bnRlciIsInByb3BzIiwiZGlzcGF0Y2giLCJzdG9yZSIsImdldFN0YXRlIiwicGxhY2Vob2xkZXJEYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQVMsQUFBVyxBQUFVOztBQUM5QixBQUFTOztBQUNULEFBQU87Ozs7Ozs7OztJQUVELEE7Ozs7Ozs7Ozs7OzRDQVFrQixBQUNoQjtpQkFBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLEFBQ3ZCOzs7O2lDQUVRLEFBQ0w7bUNBQU8sQUFBQyxnQ0FBSyxPQUFOLEFBQVksY0FBYSxRQUF6QixBQUFnQzs4QkFBaEM7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7Ozs7O29CLEFBWm9CLGEsQUFBQTs7OztpQ0FDM0I7c0NBQUEsQUFBTSxTQUFOLEFBQWUsQUFDZjtvQ0FBSSxDQUFDLE1BQUEsQUFBTSxXQUFYLEFBQXNCLGlCQUFpQixBQUNuQzswQ0FBQSxBQUFNLFNBQU4sQUFBZSxBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFMYSxnQkFBTSxBLEFBaUI1Qjs7a0JBQWUsMEJBQWYsQUFBZSxBQUFjIiwiZmlsZSI6InJlZHV4VGVzdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2FuZ2p1bi9yZWFjdC1zZXJ2ZXIvaGVsbG8tbmV4dCJ9