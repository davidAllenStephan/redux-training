import { getDatabase, ref, onValue } from '@firebase/database'
import React, { useEffect, useState } from 'react'

const Score = () => {
    const [scores, setScores] = useState([{ name: "name", time: 1000 }, { name: "name2", time: 11203 }])

    const sortScores = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (i !== j && Object.values(arr[i])[0].time < Object.values(arr[j])[0].time) {
                    const temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
    }

    const getUserData = async () => {
        const db = getDatabase()
        const starCountRef = ref(db, 'scores/')
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val()
            const arrayOfObj = Object.entries(data).map((e) => ({ [e[0]]: e[1] }));
            sortScores(arrayOfObj)
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
