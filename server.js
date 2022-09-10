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
const handelGetNumber = require('./routes/handleGetNumber');
app.get('/square', validateNumber, handelGetNumber);

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