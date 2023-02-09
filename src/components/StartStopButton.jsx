import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearTime, setActive } from '../redux/app/timer/timerSlice'
import { mix } from '../redux/app/movement/movementSlice'
import { setTime } from '../redux/app/score/scoreSlice'

const StartStopButton = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const startstop = () => {
        if (!state.timer.active) {
            dispatch(mix())
        }
        dispatch(setActive())
        dispatch(clearTime())
    }

    return (
        <button
            style={{
                position: 'absolute',
                left: 700,
                top: 700,
            }}
            onClick={() => {
                startstop()
            }}
        >
            {state.timer.active ? 'stop' : 'start'}
        </button>
    )
}

export default StartStopButton
