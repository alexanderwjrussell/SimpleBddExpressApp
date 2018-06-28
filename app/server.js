'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const healthRoutes = require('./routes/healthRoutes');
const randomNameGeneratorRoutes = require('./routes/randomNameGeneratorRoutes');

const app = express();
const port = 8084;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(healthRoutes);
app.use(randomNameGeneratorRoutes);

app.listen(port, () => {
    console.log(`simple bdd express app is listening on port:, ${port}`);
});