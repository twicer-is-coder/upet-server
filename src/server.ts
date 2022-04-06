import express from 'express';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));