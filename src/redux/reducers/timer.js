import { actions } from '../actions/timer'

const initialState = {
    time: 0,
    active: false
}

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_TIME:
            return {
                ...state,
                time: state.time + 10
            }
        case actions.CLEAR_TIME:
            return {
                ...state,
                time: 0
            }
        case actions.SET_ACTIVE:
            return {
                ...state,
                active: !state.active
            }
        default:
            return state
    }
}

export default timerReducer