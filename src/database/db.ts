import mongoose from 'mongoose'

// const RoomsCollection = require('../models/rooms');

export default () => {

    const USER = process.env.DB_USER
    const DB_NAME = process.env.DB_NAME
    const PASS = process.env.DB_PASS
    const HOST = process.env.DB_HOST

    const CONNECTION_URL = `mongodb+srv://${USER}:${PASS}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`

    const db = mongoose.connect(CONNECTION_URL, {})

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
