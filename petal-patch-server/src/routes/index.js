var express = require('express');
var router = express.Router();

//Puppeteer is a google made node library which provides api control to a headless chrome.
const puppeteer = require('puppeteer');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  // Getting the headers and access control from the current http address
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); /*NEXT :D*/
});

 // GET home page.
router.get('/', async (req, res) => {
  res.render('index', {
    title: 'Petal Patch Backend Service'
  });
});

module.exports = router;
