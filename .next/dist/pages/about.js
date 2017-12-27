'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _dynamic = require('_next@4.2.1@next/dist/lib/dynamic.js');

var _dynamic2 = _interopRequireDefault(_dynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wangjun/react-server/hello-next/pages/about.js?entry';


var DynamicComponent = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('_next@4.2.1@next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    require.ensure([], function (require) {
        var m = require('../components/hello.js');

        m.__webpackChunkName = 'components_hello_4b973d2352fac8a9d9e501de05086e72.js';
        resolve(m);
    }, 'chunks/components_hello_4b973d2352fac8a9d9e501de05086e72.js');
}) : new (require('_next@4.2.1@next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
    var weakId = require.resolveWeak('../components/hello.js');

    try {
        var weakModule = __webpack_require__(weakId);

        return resolve(weakModule);
    } catch (err) {}

    require.ensure([], function (require) {
        try {
            var m = require('../components/hello.js');

            resolve(m);
        } catch (error) {
            reject(error);
        }
    }, 'chunks/components_hello_4b973d2352fac8a9d9e501de05086e72.js');
}), {
    loading: function loading() {
        return _react2.default.createElement('p', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        }, '...');
    }
});

exports.default = function () {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement(DynamicComponent, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, 'This is the about page'));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImR5bmFtaWMiLCJEeW5hbWljQ29tcG9uZW50IiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLDJLQUFtQjtTQUFBOzswQ0FBQTt3QkFBQTs7K0JBQUE7Z0JBQUE7T0FBQTtzR0FBQTtxQ0FBQTs7UUFBQTs2Q0FBQTs7dUJBQUE7bUJBQUE7OzBDQUFBO1lBQUE7NEJBQUE7O29CQUFBO3dCQUFBO21CQUFBO0FBQUE7T0FBQTs7YUFFUixtQkFBQTsrQkFBTSxjQUFBOzswQkFBQTs0QkFBQTtBQUFBO0FBQUEsU0FBQSxFQUFOLEFBQU07QUFGdkIsQUFBeUIsQUFDckIsQUFHSjtBQUhJLEFBQ0ksQ0FGaUI7O2tCQUlWLFlBQUE7MkJBQ1gsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFESixBQUNJLEFBQ0E7QUFEQTtBQUFBLHNDQUNBLEFBQUM7O3NCQUFEO3dCQUZKLEFBRUksQUFDQTtBQURBO0FBQUEsd0JBQ0EsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSk8sQUFDWCxBQUdJO0FBSlIiLCJmaWxlIjoiYWJvdXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dhbmdqdW4vcmVhY3Qtc2VydmVyL2hlbGxvLW5leHQifQ==