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

  // The headless, executablePath, and args are copy and pasted to make puppeteer work with docker.
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: process.env.CHROME_BIN || null,
    args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();

  // Console Logging!
  console.log("Connection opened. Getting teleflora information.");

  await page.goto('https://www.teleflora.com/bouquet/make-a-wish?prodID=P_TEV13-6A&skuId=TEV13-6A&zipMin='); // URL is given by the "user" (your petal-patch-client-side application)

  const PRICE_SELECTOR = '#sizeRadios > li:nth-child(INDEX)';

  res.set('Content-Type', 'text/html');
  let priceSelector = PRICE_SELECTOR.replace("INDEX", i=1);//TODO Replace the value for i for multiple products

  let productName = await page.evaluate((sel, i) => {
    return document.getElementById("skuRadio" + i).getAttribute('data-alttext');
  }, priceSelector, i);

  // Product ID
  let productID = await page.evaluate((sel, i) => {
    return document.getElementById("skuRadio" + i).value;
  }, priceSelector, i);

  // Price of Product
  let price = await page.evaluate((sel, i) => {
    return document.getElementById("skuid-" + i).value;
  }, priceSelector, i);

  // Product Image
  let productImage = await page.evaluate((sel, i) => {
    return document.getElementById("skuRadio" + i).getAttribute('data-zoom');
  }, priceSelector, i);

  res.write(JSON.stringify({
    name: productName,
    id: productID,
    price: price,
    image: productImage.replace("/w_800,h_1000", "/w_300,h_300"), // Image size
  }));

  res.send();
  await browser.close();
});

module.exports = router;
