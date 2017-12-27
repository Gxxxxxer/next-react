'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('_styled-jsx@2.2.1@styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wangjun/react-server/hello-next/components/clock.js';


var pad = function pad(n) {
    return n < 10 ? '0' + n : n;
};

var format = function format(t) {
    var hours = t.getUTCHours();
    var minutes = t.getUTCMinutes();
    var seconds = t.getUTCSeconds();
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
};

function Clock(_ref) {
    var lastUpdate = _ref.lastUpdate,
        light = _ref.light;

    return _react2.default.createElement('div', {
        className: 'jsx-3283757383' + ' ' + ((light ? 'light' : '') || ''),
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, format(new Date(lastUpdate)), _react2.default.createElement(_style2.default, {
        styleId: '3283757383',
        css: 'div.jsx-3283757383{padding:15px;display:inline-block;color:#82FA58;font:50px menlo,monaco,monospace;background-color:#000;}.light.jsx-3283757383{background-color:#999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXdCLEFBRWdCLEFBT1MsYUFORCxTQU1FLFlBTFQsY0FDcUIsaUNBQ2Isc0JBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9jbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2FuZ2p1bi9yZWFjdC1zZXJ2ZXIvaGVsbG8tbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgcGFkID0gbiA9PiAobiA8IDEwID8gYDAke259YCA6IG4pXG5cbmNvbnN0IGZvcm1hdCA9IHQgPT4ge1xuICAgIGNvbnN0IGhvdXJzID0gdC5nZXRVVENIb3VycygpXG4gICAgY29uc3QgbWludXRlcyA9IHQuZ2V0VVRDTWludXRlcygpXG4gICAgY29uc3Qgc2Vjb25kcyA9IHQuZ2V0VVRDU2Vjb25kcygpXG4gICAgcmV0dXJuIGAke3BhZChob3Vycyl9OiR7cGFkKG1pbnV0ZXMpfToke3BhZChzZWNvbmRzKX1gXG59XG5cbmZ1bmN0aW9uIENsb2NrKHsgbGFzdFVwZGF0ZSwgbGlnaHQgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsaWdodCA/ICdsaWdodCcgOiAnJ30+XG4gICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKGxhc3RVcGRhdGUpKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBjb2xvcjogIzgyRkE1ODtcbiAgICAgICAgICBmb250OiA1MHB4IG1lbmxvLCBtb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5saWdodCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsb2NrXG4iXX0= */\n/*@ sourceURL=components/clock.js */'
    }));
}

exports.default = Clock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2xvY2suanMiXSwibmFtZXMiOlsiUmVhY3QiLCJwYWQiLCJuIiwiZm9ybWF0IiwiaG91cnMiLCJ0IiwiZ2V0VVRDSG91cnMiLCJtaW51dGVzIiwiZ2V0VVRDTWludXRlcyIsInNlY29uZHMiLCJnZXRVVENTZWNvbmRzIiwiQ2xvY2siLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxNQUFNLFNBQU4sQUFBTSxPQUFBO1dBQU0sSUFBQSxBQUFJLFdBQUosQUFBYSxJQUFuQixBQUF5QjtBQUFyQzs7QUFFQSxJQUFNLFNBQVMsU0FBVCxBQUFTLFVBQUssQUFDaEI7UUFBTSxRQUFRLEVBQWQsQUFBYyxBQUFFLEFBQ2hCO1FBQU0sVUFBVSxFQUFoQixBQUFnQixBQUFFLEFBQ2xCO1FBQU0sVUFBVSxFQUFoQixBQUFnQixBQUFFLEFBQ2xCO1dBQVUsSUFBVixBQUFVLEFBQUksZUFBVSxJQUF4QixBQUF3QixBQUFJLGlCQUFZLElBQXhDLEFBQXdDLEFBQUksQUFDL0M7QUFMRDs7QUFPQSxTQUFBLEFBQVMsWUFBNkI7UUFBckIsQUFBcUIsa0JBQXJCLEFBQXFCO1FBQVQsQUFBUyxhQUFULEFBQVMsQUFDbEM7OzJCQUNJLGNBQUE7OENBQWdCLFFBQUEsQUFBUSxVQUF4QixBQUFrQyxPQUFsQzs7c0JBQUE7d0JBQUEsQUFDSztBQURMO0FBQUEsS0FBQSxTQUNZLElBQUEsQUFBSSxLQURoQixBQUNLLEFBQU8sQUFBUztpQkFEckI7YUFESixBQUNJLEFBZ0JQO0FBaEJPO0FBa0JSOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNsb2NrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YW5nanVuL3JlYWN0LXNlcnZlci9oZWxsby1uZXh0In0=