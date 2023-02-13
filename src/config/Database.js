import { getDatabase } from '@firebase/database'

class Database {
    getDb = () => {
        return getDatabase()
    }
}

export default Database