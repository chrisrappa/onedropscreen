import express from 'express';
import config from './config';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen (config.PORT || 5000, () => {
    console.log (`Server started at PORT:${config.PORT}`)
})