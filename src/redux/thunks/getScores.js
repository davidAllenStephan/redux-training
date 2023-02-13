import Connection from "../../config/Connection"
import { getScoresFetch, getScoresSuccess } from "../actions/score"
import { ref, onValue } from '@firebase/database'
const connection = new Connection()
const getScores = () => {
    return (dispatch) => {
        dispatch(getScoresFetch())
        const db = connection.getDb()
        const starCountRef = ref(db, 'scores/')
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val()
            const arrayOfObj = Object.entries(data).map((e) => ({ [e[0]]: e[1] }));
            dispatch(getScoresSuccess(arrayOfObj))
        })


    }
}

export default getScores