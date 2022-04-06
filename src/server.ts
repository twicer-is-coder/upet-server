import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

import cors from 'cors';

import express from 'express';
import path from 'path';

import databaseInit from './database/db'
import UserRoute from './routes/users.route';

(async () => {

    try {
        await databaseInit();
    } catch (err: unknown) {
        const { message } = err as Error
        console.error("Unable To Connect To DB: ", message);
    }

    const app = express();
    const PORT = process.env.PORT || 3030;
    app.use(cors());

    app.use("/api/users", UserRoute);

    app.get('/', (req, res) => {
        res.send("Hello World!")
    })

    app.all('*', (req, res) => {
        res.status(404).json({message: "Invalid Endpoint."})
    })

    app
        .use(express.static(path.join(__dirname, 'public')))
        .listen(PORT, () => console.log(`Listening on ${PORT}`));
})();

