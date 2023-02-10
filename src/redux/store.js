import { combineReducers, createStore } from '@reduxjs/toolkit'
import movement from './reducers/movement'
import timer from "./reducers/timer"
import score from './reducers/score'

const rootReducer = combineReducers({
    movement,
    timer,
    score
})


const store = createStore(rootReducer, {})

export default store