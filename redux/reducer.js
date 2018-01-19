import {handleActions} from 'redux-actions'
export const exampleInitialState = {
    count: 0,
    error: false,
    lastUpdate: 0,
    light: false,
    placeholderData: null
}
const reducer = handleActions({
    'FAILURE' (state, action){
        return {
            ...state,
            ...{ error: action.payload }
        }
    },
    'LOAD_DATA_SUCCESS' (state, action){
        console.log(action)
        return {
            ...state,
            ...{ placeholderData: action.payload }
        }
    },
    'INCREMENT' (state, action){
        return {
            ...state,
            ...{ count: state.count + 1 }
        }
    },
    'TICK_CLOCK' (state, action){
        return {
            ...state,
            ...{ lastUpdate: action.payload.ts, light: !!action.payload.light }
        }
    }
},exampleInitialState)

export default reducer
