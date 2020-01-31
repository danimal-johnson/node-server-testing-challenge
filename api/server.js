const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', apiRouter);

server.get('/', (req, res) => {
  res.send("Watch your local storage tokens for exciting updates!");
});

module.exports = server;
