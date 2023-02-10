import { actions } from '../actions/movement'

import { moveUp } from '../../util/movement/moveUp'
import { moveDown } from '../../util/movement/moveDown'
import { moveRight } from '../../util/movement/moveRight'
import { moveLeft } from '../../util/movement/moveLeft'

import { getMixedArr } from '../../util/getMixedArr'

const initialState = {
    value: getMixedArr(24),
}

const movementReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.MOVE_UP:
            return {
                ...state,
                value: moveUp(action.payload, state.value)
            }
        case actions.MOVE_DOWN:
            return {
                ...state,
                value: moveDown(action.payload, state.value)
            }
        case actions.MOVE_RIGHT:
            return {
                ...state,
                value: moveRight(action.payload, state.value)
            }
        case actions.MOVE_LEFT:
            return {
                ...state,
                value: moveLeft(action.payload, state.value)
            }
        case actions.MIX:
            return {
                ...state,
                value: getMixedArr(24)
            }
        default:
            return state
    }
}

export default movementReducer