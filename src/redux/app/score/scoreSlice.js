import { createSlice } from '@reduxjs/toolkit'

export const scoreSlice = createSlice({

    name: 'timer',
    initialState: {
        time: 0,
        name: ""
    },
    reducers: {
        setTime: (state, time) => {
            state.time = time .payload
        },
        setName: (state, name) => {
            state.name = name.payload
        }
    },
})

export const { setName, setTime } = scoreSlice.actions

export default scoreSlice.reducer