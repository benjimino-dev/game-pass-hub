const express = require('express');
const gamesRouter = require('./routes/gamesRouter');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const errorController = require('./controllers/errorController');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/games', gamesRouter);

app.use(errorController);

module.exports = app;
