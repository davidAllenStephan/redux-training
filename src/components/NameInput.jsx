import React from 'react'
import { useDispatch } from 'react-redux'
import { setName } from '../redux/app/score/scoreSlice'

const NameInput = () => {
    const dispatch = useDispatch()

    const update = (name) => {
        dispatch(setName(name))
    }

    return (
        <input
            style={{
                position: 'absolute',
                left: 900,
                top: 700,
                width: 50,
            }}
            onChange={(e) => {
                update(e.target.value)
            }}
        ></input>
    )
}

export default NameInput
