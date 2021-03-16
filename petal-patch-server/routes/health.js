var express = require('express');
var router = express.Router();
var app = require('../app');
var http = require('http');
var die = false;

router.get('/', async (req, res) => {
    try {
        if (!die) {
            res.status(200).send('Status OKAY :D');
        } else {
            res.status(503).send('Power level\'s critical... shutting down the teleporters.');
        }

    } catch (err) {
        debug(err.stack);
        res.sendStatus(500);
    }
});

/**
 * Signal listener
 * */
function handleExit(signal) {
    die = true;
    console.log(`Received ${signal}. Close my server properly.`)
    server.close(function () {
        process.exit(0);
    });
}
process.on('SIGINT', handleExit);
process.on('SIGQUIT', handleExit);
process.on('SIGTERM', handleExit);

module.exports = router;