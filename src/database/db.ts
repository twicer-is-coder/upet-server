import mongoose from 'mongoose'

export default () => {


    const MONGO_URL = process.env.MONGO_URL as string

    console.log("Connection URL: ", MONGO_URL)
    const db = mongoose.connect(MONGO_URL)
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
