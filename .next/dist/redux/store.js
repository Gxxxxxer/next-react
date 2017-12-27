'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configureStore = configureStore;
exports.withReduxSaga = withReduxSaga;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = require('next-redux-saga');

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _saga = require('./saga');

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();

function configureStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _reducer.exampleInitialState;

    var store = (0, _redux.createStore)(_reducer2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(sagaMiddleware)));

    store.sagaTask = sagaMiddleware.run(_saga2.default);
    return store;
}

function withReduxSaga(BaseComponent) {
    return (0, _nextReduxWrapper2.default)(configureStore)((0, _nextReduxSaga2.default)(BaseComponent));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsIndpdGhSZWR1eCIsIm5leHRSZWR1eFNhZ2EiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInJvb3RSZWR1Y2VyIiwiZXhhbXBsZUluaXRpYWxTdGF0ZSIsInJvb3RTYWdhIiwic2FnYU1pZGRsZXdhcmUiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsInN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJ3aXRoUmVkdXhTYWdhIiwiQmFzZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXTyxBQUFTO1FBV1QsQUFBUzs7QUF0QmhCLEFBQVMsQUFBYTs7QUFDdEIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTzs7Ozs7O0FBRVAsSUFBTSxpQkFBTixBQUF1QixBQUV2Qjs7QUFBTywwQkFBNEQ7UUFBcEMsQUFBb0MsOEVBQXJCLEFBQXFCLEFBQy9EOztRQUFNLFFBQVEsQUFDViwyQ0FEVSxBQUVWLGNBQ0EsaURBQW9CLDRCQUh4QixBQUFjLEFBR1YsQUFBb0IsQUFBZ0IsQUFHeEM7O1VBQUEsQUFBTSxXQUFXLGVBQWpCLEFBQWlCLEFBQWUsQUFBSSxBQUNwQztXQUFBLEFBQU8sQUFDVjtBQUVEOztBQUFPLHVCQUFBLEFBQXVCLGVBQWUsQUFDekM7V0FBTyxnQ0FBQSxBQUFVLGdCQUFnQiw2QkFBakMsQUFBTyxBQUEwQixBQUFjLEFBQ2xEIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YW5nanVuL3JlYWN0LXNlcnZlci9oZWxsby1uZXh0In0=