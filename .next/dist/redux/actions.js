'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.failure = failure;
exports.increment = increment;
exports.loadData = loadData;
exports.loadDataSuccess = loadDataSuccess;
exports.startClock = startClock;
exports.tickClock = tickClock;
var actionTypes = exports.actionTypes = {
    FAILURE: 'FAILURE',
    INCREMENT: 'INCREMENT',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    START_CLOCK: 'START_CLOCK',
    TICK_CLOCK: 'TICK_CLOCK'
};

function failure(error) {
    return {
        type: actionTypes.FAILURE,
        error: error
    };
}

function increment() {
    return { type: actionTypes.INCREMENT };
}

function loadData() {
    return { type: actionTypes.LOAD_DATA };
}

function loadDataSuccess(data) {
    return {
        type: actionTypes.LOAD_DATA_SUCCESS,
        data: data
    };
}

function startClock() {
    return { type: actionTypes.START_CLOCK };
}

function tickClock(isServer) {
    return {
        type: actionTypes.TICK_CLOCK,
        light: !isServer,
        ts: Date.now()
    };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L2FjdGlvbnMuanMiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJGQUlMVVJFIiwiSU5DUkVNRU5UIiwiTE9BRF9EQVRBIiwiTE9BRF9EQVRBX1NVQ0NFU1MiLCJTVEFSVF9DTE9DSyIsIlRJQ0tfQ0xPQ0siLCJmYWlsdXJlIiwiZXJyb3IiLCJ0eXBlIiwiaW5jcmVtZW50IiwibG9hZERhdGEiLCJsb2FkRGF0YVN1Y2Nlc3MiLCJkYXRhIiwic3RhcnRDbG9jayIsInRpY2tDbG9jayIsImlzU2VydmVyIiwibGlnaHQiLCJ0cyIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OztRQVNPLEFBQVM7UUFPVCxBQUFTO1FBSVQsQUFBUztRQUlULEFBQVM7UUFPVCxBQUFTO1FBSVQsQUFBUztBQW5DVCxJQUFNO2FBQWMsQUFDZCxBQUNUO2VBRnVCLEFBRVosQUFDWDtlQUh1QixBQUdaLEFBQ1g7dUJBSnVCLEFBSUosQUFDbkI7aUJBTHVCLEFBS1YsQUFDYjtnQkFORyxBQUFvQixBQU1YLEFBR2hCO0FBVDJCLEFBQ3ZCOztBQVFHLGlCQUFBLEFBQWlCLE9BQU8sQUFDM0I7O2NBQ1UsWUFESCxBQUNlLEFBQ2xCO2VBRkosQUFBTyxBQUlWO0FBSlUsQUFDSDtBQUtSOztBQUFPLHFCQUFxQixBQUN4QjtXQUFPLEVBQUUsTUFBTSxZQUFmLEFBQU8sQUFBb0IsQUFDOUI7QUFFRDs7QUFBTyxvQkFBb0IsQUFDdkI7V0FBTyxFQUFFLE1BQU0sWUFBZixBQUFPLEFBQW9CLEFBQzlCO0FBRUQ7O0FBQU8seUJBQUEsQUFBeUIsTUFBTSxBQUNsQzs7Y0FDVSxZQURILEFBQ2UsQUFDbEI7Y0FGSixBQUFPLEFBSVY7QUFKVSxBQUNIO0FBS1I7O0FBQU8sc0JBQXNCLEFBQ3pCO1dBQU8sRUFBRSxNQUFNLFlBQWYsQUFBTyxBQUFvQixBQUM5QjtBQUVEOztBQUFPLG1CQUFBLEFBQW1CLFVBQVUsQUFDaEM7O2NBQ1UsWUFESCxBQUNlLEFBQ2xCO2VBQU8sQ0FGSixBQUVLLEFBQ1I7WUFBSSxLQUhSLEFBQU8sQUFHQyxBQUFLLEFBRWhCO0FBTFUsQUFDSCIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YW5nanVuL3JlYWN0LXNlcnZlci9oZWxsby1uZXh0In0=