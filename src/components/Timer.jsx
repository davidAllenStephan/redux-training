import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTime } from '../redux/app/timer/timerSlice'

const Timer = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        let interval = null
        if (state.timer.active) {
            interval = setInterval(() => {
                dispatch(setTime())
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
                {('0' + Math.floor((state.timer.value / 60000) % 60)).slice(-2)}
                :
            </span>
            <span>
                {('0' + Math.floor((state.timer.value / 1000) % 60)).slice(-2)}.
            </span>
            <span>{('0' + ((state.timer.value / 10) % 100)).slice(-2)}</span>
        </h3>
    )
}

export default Timer
