import { configureStore } from '@reduxjs/toolkit'
import movementReducer from "./movement/movementSlice"
import timerReducer from "./timer/timerSlice"
import scoreReducer from './score/scoreSlice'

export default configureStore({
    reducer: {
        movement: movementReducer,
        timer: timerReducer,
        score: scoreReducer
    },
})