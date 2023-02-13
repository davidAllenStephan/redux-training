import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import movement from './reducers/movement'
import timer from "./reducers/timer"
import score from './reducers/score'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    movement,
    timer,
    score
})


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store