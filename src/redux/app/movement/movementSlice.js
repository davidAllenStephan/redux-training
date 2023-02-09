import { createSlice } from '@reduxjs/toolkit'

const getMixedArr = (SIZE) => {
    const mixedArr = []
    for (let i = 0; i < SIZE; i++) {
        mixedArr[i] = { pos: i, value: i };
    }
    for (let i = 0; i < SIZE; i++) {
        const pos = Math.floor(Math.random() * 24);
        const temp = mixedArr[i].value
        mixedArr[i].value = mixedArr[pos].value
        mixedArr[pos].value = temp
    }
    for (let i = 0; i < SIZE; i++) {
        if (mixedArr[i].value === 23) {
            const temp = mixedArr[i].value
            mixedArr[i].value = mixedArr[23].value
            mixedArr[23].value = temp
        }
        else if (mixedArr[i].value === 19) {
            const temp = mixedArr[i].value
            mixedArr[i].value = mixedArr[19].value
            mixedArr[19].value = temp
        }
        else if (mixedArr[i].value === 18) {
            const temp = mixedArr[i].value
            mixedArr[i].value = mixedArr[18].value
            mixedArr[18].value = temp
        }
    }
    return mixedArr
}

export const movementSlice = createSlice({

    name: 'movement',
    initialState: {
        value: getMixedArr(24),
    },
    reducers: {
        moveUp: (state, props) => {
            const { pos, diffy } = { ...props.payload }
            for (let i = 0; i < diffy; i++) {
                state.value[(pos - 1) - (i * 5)].pos -= 5
            }
            state.value.sort((a, b) => a.pos - b.pos)
        },
        moveDown: (state, props) => {
            const { pos, diffy } = { ...props.payload }
            for (let i = 0; i < diffy; i++) {
                state.value[pos + (i * 5)].pos += 5
            }
            state.value.sort((a, b) => a.pos - b.pos)
        },
        moveRight: (state, props) => {
            const { pos, diffx } = { ...props.payload }
            for (let i = 0; i < diffx; i++) {
                state.value[pos + i].pos += 1
            }
            state.value.sort((a, b) => a.pos - b.pos)
        },
        moveLeft: (state, props) => {
            const { pos, diffx } = { ...props.payload }
            for (let i = 0; i < diffx; i++) {
                state.value[(pos - i) - 1].pos -= 1
            }
            state.value.sort((a, b) => a.pos - b.pos)
        },
        mix: (state) => {
            state.value = getMixedArr(24)
        }
    },
})

export const { moveUp, moveDown, moveRight, moveLeft, mix } = movementSlice.actions

export default movementSlice.reducer