import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const StartStopButton = () => {
    const state = useSelector((state) => state)

    const startstop = () => {
        store.dispatch({ type: 'MIX' })
        store.dispatch({ type: 'SET_ACTIVE' })
        store.dispatch({ type: 'CLEAR_TIME' })
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
