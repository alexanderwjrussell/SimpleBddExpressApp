'use strict';

const express = require('express');
const router = express.Router();

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