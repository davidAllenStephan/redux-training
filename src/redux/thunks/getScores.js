import { getScoresFetch, getScoresSuccess } from "../actions/score"
import { ref, onValue } from '@firebase/database'
import store from "../store"
import Database from "../../config/Database"
const database = new Database()
const getScores = () => {
    return () => {
        store.dispatch(getScoresFetch())
        const db = database.getDb()
        const starCountRef = ref(db, 'scores/')
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val()
            const arrayOfObj = Object.entries(data).map((e) => ({ [e[0]]: e[1] }));
            store.dispatch(getScoresSuccess(arrayOfObj))
        })
    }
}

export default getScores