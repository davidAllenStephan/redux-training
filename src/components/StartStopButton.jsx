import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { clearTime, setActive } from "../redux/app/timer/timerSlice";
import { mix } from "../redux/app/movement/movementSlice";

const StartStopButton = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const start = () => {
        dispatch(setActive())
        dispatch(clearTime())
        dispatch(mix())
    }

    return (
        <button style={{
            position: "absolute",
            left: 700,
            top: 700
        }} onClick={() => { start() }}>{state.timer.active ? "stop" : "start"}</button>
    )

}

export default StartStopButton