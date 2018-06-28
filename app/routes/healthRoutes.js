'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const mongoHelper = require('../modules/mongo-helper');

const mongoUri = process.env.MONGO || 'mongodb://localhost:27017/nameDB';

const mongoConnection = mongoHelper.connect(mongoose, mongoUri);

router.get('/private/ping', (req, res) => {
    res.send('pong');
});

router.get('/health', (req, res) => {
    const result = {
        serviceName: 'simple-bdd-express-app',
        isOkay: true
    }
        res.send(result);   
});

module.exports = router;