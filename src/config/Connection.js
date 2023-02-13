import { getDatabase } from '@firebase/database'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    databaseURL: 'https://redux-training-c4a05-default-rtdb.firebaseio.com/'
}

class Connection {

    constructor() {
        initializeApp(firebaseConfig)
    }

    getDb = () => {
        return getDatabase()
    }


}

export default Connection