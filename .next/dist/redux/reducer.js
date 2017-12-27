'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exampleInitialState = undefined;

var _extends2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleInitialState = exports.exampleInitialState = {
    count: 0,
    error: false,
    lastUpdate: 0,
    light: false,
    placeholderData: null
};

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
    var action = arguments[1];

    switch (action.type) {
        case _actions.actionTypes.FAILURE:
            return (0, _extends3.default)({}, state, { error: action.error });

        case _actions.actionTypes.INCREMENT:
            return (0, _extends3.default)({}, state, { count: state.count + 1 });

        case _actions.actionTypes.LOAD_DATA_SUCCESS:
            return (0, _extends3.default)({}, state, { placeholderData: action.data });

        case _actions.actionTypes.TICK_CLOCK:
            return (0, _extends3.default)({}, state, { lastUpdate: action.ts, light: !!action.light });

        default:
            return state;
    }
}

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3JlZHVjZXIuanMiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJleGFtcGxlSW5pdGlhbFN0YXRlIiwiY291bnQiLCJlcnJvciIsImxhc3RVcGRhdGUiLCJsaWdodCIsInBsYWNlaG9sZGVyRGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJGQUlMVVJFIiwiSU5DUkVNRU5UIiwiTE9BRF9EQVRBX1NVQ0NFU1MiLCJkYXRhIiwiVElDS19DTE9DSyIsInRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFFVDs7OztBQUFPLElBQU07V0FBc0IsQUFDeEIsQUFDUDtXQUYrQixBQUV4QixBQUNQO2dCQUgrQixBQUduQixBQUNaO1dBSitCLEFBSXhCLEFBQ1A7cUJBTEcsQUFBNEIsQUFLZDtBQUxjLEFBQy9COztBQU9KLFNBQUEsQUFBUyxVQUE2QztRQUFyQyxBQUFxQyw0RUFBN0IsQUFBNkI7UUFBUixBQUFRLG1CQUNsRDs7WUFBUSxPQUFSLEFBQWUsQUFDWDthQUFLLHFCQUFMLEFBQWlCLEFBQ2I7OENBQUEsQUFDTyxPQUNBLEVBQUUsT0FBTyxPQUZoQixBQUVPLEFBQWdCLEFBRzNCOzthQUFLLHFCQUFMLEFBQWlCLEFBQ2I7OENBQUEsQUFDTyxPQUNBLEVBQUUsT0FBTyxNQUFBLEFBQU0sUUFGdEIsQUFFTyxBQUF1QixBQUdsQzs7YUFBSyxxQkFBTCxBQUFpQixBQUNiOzhDQUFBLEFBQ08sT0FDQSxFQUFFLGlCQUFpQixPQUYxQixBQUVPLEFBQTBCLEFBR3JDOzthQUFLLHFCQUFMLEFBQWlCLEFBQ2I7OENBQUEsQUFDTyxPQUNBLEVBQUUsWUFBWSxPQUFkLEFBQXFCLElBQUksT0FBTyxDQUFDLENBQUMsT0FGekMsQUFFTyxBQUF5QyxBQUdwRDs7QUFDSTttQkExQlIsQUEwQlEsQUFBTyxBQUVsQjs7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YW5nanVuL3JlYWN0LXNlcnZlci9oZWxsby1uZXh0In0=