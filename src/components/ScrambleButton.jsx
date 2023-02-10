import React from 'react'
import store from '../redux/store'

const ScrambleButton = () => {


    const scramble = () => {
        store.dispatch({ type: 'MIX' })
    }

    return (
        <button
            style={{
                position: 'absolute',
                left: 750,
                top: 700,
            }}
            onClick={() => {
                scramble()
            }}
        >
            scamble
        </button>
    )
}

export default ScrambleButton
