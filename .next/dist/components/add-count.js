'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _style = require('_styled-jsx@2.2.1@styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wangjun/react-server/hello-next/components/add-count.js';


var AddCount = function (_Component) {
    (0, _inherits3.default)(AddCount, _Component);

    function AddCount() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, AddCount);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AddCount.__proto__ || (0, _getPrototypeOf2.default)(AddCount)).call.apply(_ref, [this].concat(args))), _this), _this.add = function () {
            _this.props.dispatch((0, _actions.increment)());
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(AddCount, [{
        key: 'render',
        value: function render() {
            var count = this.props.count;

            return _react2.default.createElement('div', {
                className: 'jsx-2435724200',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement(_style2.default, {
                styleId: '2435724200',
                css: 'div.jsx-2435724200{padding:0 0 20px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRkLWNvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWM0QixBQUVzQixtQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL2FkZC1jb3VudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2FuZ2p1bi9yZWFjdC1zZXJ2ZXIvaGVsbG8tbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgaW5jcmVtZW50IH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcblxuY2xhc3MgQWRkQ291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGFkZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChpbmNyZW1lbnQoKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY291bnQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgQWRkQ291bnQ6IDxzcGFuPntjb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkfT5BZGQgVG8gQ291bnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBjb3VudCB9KSA9PiAoeyBjb3VudCB9KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFkZENvdW50KSJdfQ== */\n/*@ sourceURL=components/add-count.js */'
            }), _react2.default.createElement('h1', {
                className: 'jsx-2435724200',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'AddCount: ', _react2.default.createElement('span', {
                className: 'jsx-2435724200',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, count)), _react2.default.createElement('button', { onClick: this.add, className: 'jsx-2435724200',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Add To Count'));
        }
    }]);

    return AddCount;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
    var count = _ref2.count;
    return { count: count };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(AddCount);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRkLWNvdW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImluY3JlbWVudCIsIkFkZENvdW50IiwiYWRkIiwicHJvcHMiLCJkaXNwYXRjaCIsImNvdW50IiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFFVCxBQUFTOzs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7Ozs7b04sQUFDRixNQUFNLFlBQU0sQUFDUjtrQkFBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLEFBQ3ZCO0E7Ozs7O2lDQUVRO2dCQUFBLEFBQ0csUUFBVSxLQURiLEFBQ2tCLE1BRGxCLEFBQ0csQUFDUjs7bUNBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGFBQUE7eUJBQUE7cUJBQUEsQUFNSTtBQU5KLGdDQU1JLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNjLDhCQUFBLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBUGxCLEFBTUksQUFDYyxBQUVkLHlCQUFBLGNBQUEsWUFBUSxTQUFTLEtBQWpCLEFBQXNCLGdCQUF0Qjs7OEJBQUE7Z0NBQUE7QUFBQTtlQVZSLEFBQ0ksQUFTSSxBQUdYOzs7OztBLEFBcEJrQjs7QUF1QnZCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFBO1FBQUEsQUFBRyxjQUFILEFBQUc7V0FBYSxFQUFFLE9BQWxCLEFBQWdCO0FBQXhDLEFBQ0E7a0JBQWUseUJBQUEsQUFBUSxpQkFBdkIsQUFBZSxBQUF5QiIsImZpbGUiOiJhZGQtY291bnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dhbmdqdW4vcmVhY3Qtc2VydmVyL2hlbGxvLW5leHQifQ==