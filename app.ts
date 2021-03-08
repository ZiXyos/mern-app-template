import express from 'express';
import bodyParser from 'body-parser';
import config from './config';

const app = express();

app.use(

    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json())

app.get('/', (req, res) => {

    res.send('hello');
});

app.listen(config.app.port, () => {

    console.log(`Server running on port ${config.app.port} 🔥`);
});