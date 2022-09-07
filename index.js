'use strict';

const server = require('./server');

require('dotenv').config();

const PORT = process.env.PORT || 4001;
server.start(PORT);