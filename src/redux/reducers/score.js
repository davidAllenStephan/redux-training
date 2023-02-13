import { actions } from '../actions/score'

const initialState = {
    time: 0,
    name: '',
    scores: []
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
        case actions.GET_SCORE_SUCCESS:
            return {
                ...state,
                scores: action.scores
            }
        default:
            return initialState
    }
}

export default scoreReducer