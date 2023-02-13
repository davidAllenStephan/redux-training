import { getDatabase, ref, push } from '@firebase/database'
import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const SaveButton = () => {
    const state = useSelector((state) => state)

    const writeUserData = () => {
        const db = getDatabase()
        const reference = ref(db, 'scores/')

        push(reference, {
            name: state.score.name,
            time: state.score.time,
        })
    }

    const scramble = () => {
        if (state.timer.active === false) {
            writeUserData()
            store.dispatch({ type: 'MIX' })
        }
    }

    return (
        <button
            style={{
                position: 'absolute',
                left: 850,
                top: 700,
            }}
            onClick={() => {
                scramble()
            }}
        >
            save
        </button>
    )
}

export default SaveButton
