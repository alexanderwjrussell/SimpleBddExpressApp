'use strict';

const express = require('express');
const router = express.Router();
const httpStatus = require('http-status-codes');
const mongoose = require('mongoose');
const mongoHelper = require('../modules/mongo-helper');
const mongoUri = process.env.MONGO || 'mongodb://localhost:27017/nameDB';
const mongoConnection = mongoHelper.connect(mongoose, mongoUri);

router.get('/names', (req, res) => {
    const result = {
        model: null
    }
    res.send(result);
});

router.post('/names', (req, res) => {
    let location = `mongodb://localhost:27017/nameDB?id=1`;

    res.set('location', location);

    return res.sendStatus(httpStatus.CREATED);
});

module.exports = router;