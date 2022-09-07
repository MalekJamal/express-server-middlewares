'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.status(200).send("Middleware Server");
});

const validateNumber = require('./middlewares/validate-number');
app.get('/square', validateNumber(4), (req, res) => {
    const num = req.query;
    res.status(200).json({ num: num * num });
});

// errors handler
const serverErrorHandler = require('./error-handlers/500');
const notFoundPages = require('./error-handlers/400');
app.use(serverErrorHandler);
app.use('*', notFoundPages);


function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Server Running on Port: ${PORT}!`);
    });
}


module.exports = { start: start, app: app };