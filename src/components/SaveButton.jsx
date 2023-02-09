import { getDatabase, ref, push } from '@firebase/database'
import { initializeApp } from 'firebase/app'
import React from 'react'
import { useSelector } from 'react-redux'

const SaveButton = () => {
    const state = useSelector((state) => state)

    const firebaseConfig = {
        databaseURL:
            'https://redux-training-c4a05-default-rtdb.firebaseio.com/',
    }
    const app = initializeApp(firebaseConfig)

    const writeUserData = () => {
        const db = getDatabase()
        const reference = ref(db, 'scores/')

        push(reference, {
            name: state.score.name,
            time: state.score.time,
        })
    }

    const scramble = () => {
        writeUserData()
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