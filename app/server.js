'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8084;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/private/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
    console.log(`simple bdd express app is listening on port:, ${port}`);
  });