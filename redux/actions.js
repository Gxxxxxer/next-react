import 'isomorphic-fetch'
import {createAction} from 'redux-actions'
export const actionTypes = {
    FAILURE: 'FAILURE',
    INCREMENT: 'INCREMENT',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    START_CLOCK: 'START_CLOCK',
    TICK_CLOCK: 'TICK_CLOCK'
}

export const failure = createAction(actionTypes.FAILURE)
export const increment = createAction(actionTypes.INCREMENT)
export const loadData = createAction(actionTypes.LOAD_DATA)
export const loadDataSuccess = createAction(actionTypes.LOAD_DATA_SUCCESS)
export const startClock = createAction(actionTypes.START_CLOCK)

export function tickClock(isServer) {
    return {
        type: actionTypes.payload.TICK_CLOCK,
        light: !isServer,
        ts: Date.now()
    }
}

export const FETCH = () => async (dispatch,getState) => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        await dispatch(loadDataSuccess(data))

    }catch(error){
        console.log(error)
    }

}
