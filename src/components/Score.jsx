import { getDatabase, ref, onValue } from '@firebase/database'
import { initializeApp } from 'firebase/app'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Score = () => {
    const state = useSelector((state) => state)
    const [scores, setScores] = useState([{ name: "name", time: 1000 }, { name: "name2", time: 11203 }])

    const firebaseConfig = {
        databaseURL:
            'https://redux-training-c4a05-default-rtdb.firebaseio.com/',
    }
    const app = initializeApp(firebaseConfig)

    const getUserData = async () => {
        const db = getDatabase()
        const starCountRef = ref(db, 'scores/')
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val()
            const arrayOfObj = Object.entries(data).map((e) => ({ [e[0]]: e[1] }));
            setScores(arrayOfObj)
        })
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div
            style={{
                position: 'absolute',
                left: 1200,
                top: 20,
            }}
        >
            {scores.map(score => {
                const time = Object.values(score)[0].time
                return (<div style={{ display: "flex", gap: 20 }}><h3>{Object.values(score)[0].name}</h3> <h3>
                    <span >
                        {('0' + Math.floor((time / 60000) % 60)).slice(-2)}
                        :
                    </span>
                    <span>
                        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}.
                    </span>
                    <span>{('0' + ((time / 10) % 100)).slice(-2)}</span></h3></div>)
            })}
        </div >
    )
}

export default Score
