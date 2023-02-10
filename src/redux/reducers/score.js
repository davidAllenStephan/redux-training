import { actions } from '../actions/score'

const initialState = {
    time: 0,
    name: ''
}

const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOG_TIME:
            return {
                ...state,
                time: action.payload.time
            }
        case actions.LOG_NAME:
            return {
                ...state,
                name: action.payload.name
            }
        default:
            return initialState
    }
}

export default scoreReducer