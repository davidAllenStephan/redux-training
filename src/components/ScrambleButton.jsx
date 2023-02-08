import React from "react"
import { useDispatch } from 'react-redux'
import { mix } from "../redux/app/movement/movementSlice";

const ScrambleButton = () => {

    const dispatch = useDispatch()

    const scramble = () => {
        dispatch(mix())
    }

    return (
        <button style={{
            position: "absolute",
            left: 750,
            top: 700
        }} onClick={() => { scramble() }}>scamble</button>
    )

}

export default ScrambleButton