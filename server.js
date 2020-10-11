const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.APP_PORT || 8080;
app.use(cors());
app.use(bodyParser.json());

const connectDb = require('./config/mongodb');
connectDb();

const playerRouter = require('./routes/player');
const monsterRouter = require('./routes/monster');

app.use('/players', playerRouter);
app.use('/monsters', monsterRouter);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

module.exports = app;