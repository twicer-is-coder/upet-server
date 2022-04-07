import mongoose from 'mongoose'

export default () => {

    const MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME
    const MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD
    const HOST = process.env.DB_HOST
    
    const db = mongoose.connect(`mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${HOST}`)
    
    mongoose.connection.on('connected', () => {
        console.log('\x1b[36m%s\x1b[0m', 'DB Connected')
    })

    mongoose.connection.on('reconnected', () => {
        console.log('DB Reconnected')
    })

    mongoose.connection.on('error', error => {
        console.log('DB Connection Error', error)
        mongoose.disconnect()
    })

    mongoose.connection.on('disconnected', () => {
        console.log('DB Disconnected')
    })

    return db
}
