import { configureStore } from '@reduxjs/toolkit'
import movementReducer from "./movement/movementSlice"
import timerReducer from "./timer/timerSlice"

export default configureStore({
    reducer: {
        movement: movementReducer,
        timer: timerReducer
    },
})