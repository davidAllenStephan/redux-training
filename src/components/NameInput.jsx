import React from 'react'
import store from '../redux/store'

const NameInput = () => {

    const update = (name) => {
        store.dispatch({ type: 'LOG_NAME', payload: name })
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
