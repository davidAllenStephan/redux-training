import React, { useEffect, useState } from 'react'
import getScores from '../redux/thunks/getScores'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const Score = () => {
    const state = useSelector((state) => state)
    const [scores, setScores] = useState([])
    const [isRan, setIsRan] = useState(false)
    const getUserData = async () => {
        store.dispatch(getScores())
    }
    useEffect(() => {
        getUserData()
    }, [])
    useEffect(() => {
        setScores(state.score.scores)
        setIsRan(true)
    }, [state.score.scores])

    return (
        <div
            style={{
                position: 'absolute',
                left: 1200,
                top: 20,
            }}
        >
            {scores.map((score, index) => {
                const time = Object.values(score)[0].time
                return (
                    <div key={index} style={{ display: 'flex', gap: 20 }}>
                        <h3>{Object.values(score)[0].name}</h3>{' '}
                        <h3>
                            <span>
                                {('0' + Math.floor((time / 60000) % 60)).slice(
                                    -2
                                )}
                                :
                            </span>
                            <span>
                                {('0' + Math.floor((time / 1000) % 60)).slice(
                                    -2
                                )}
                                .
                            </span>
                            <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
                        </h3>
                    </div>
                )
            })}
        </div >
    )
}

export default Score
