import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const Timer = () => {
    const state = useSelector((state) => state)

    useEffect(() => {
        let interval = null
        if (state.timer.active) {
            interval = setInterval(() => {
                store.dispatch({ type: 'SET_TIME' })
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    }, [state.timer.active])

    return (
        <h3
            style={{
                color: 'white',
                letterSpacing: 5,
                position: 'absolute',
                left: 700,
            }}
        >
            <span className="digits">
                {('0' + Math.floor((state.timer.time / 60000) % 60)).slice(-2)}
                :
            </span>
            <span>
                {('0' + Math.floor((state.timer.time / 1000) % 60)).slice(-2)}.
            </span>
            <span>{('0' + ((state.timer.time / 10) % 100)).slice(-2)}</span>
        </h3>
    )
}

export default Timer
