import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

import express from 'express';
import path from 'path';

import databaseInit from './database/db'
import UserRoute from './routes/users.route';

databaseInit();

const app = express();
const PORT = process.env.PORT || 3030;

app.use("/api/users", UserRoute);

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app
    .use(express.static(path.join(__dirname, 'public')))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));