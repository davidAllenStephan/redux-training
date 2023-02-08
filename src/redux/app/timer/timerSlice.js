import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({

    name: 'timer',
    initialState: {
        value: 0,
        active: false
    },
    reducers: {
        setTime: (state) => {
            state.value += 10
        },
        clearTime: (state) => {
            state.value = 0;
        },
        setActive: (state) => {
            state.active = !state.active
        }
    },
})

export const { setTime, clearTime, setActive } = timerSlice.actions

export default timerSlice.reducer