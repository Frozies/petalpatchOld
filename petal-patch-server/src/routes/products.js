const express = require('express');
const puppeteer = require("puppeteer");
const router = express.Router();
const createDOMPurify = require('dompurify');
const { JSDOM }  = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);


/* GET users listing. */
router.get('/', async function(req, res) {
    // const productURL = 'https://www.teleflora.com/bouquet/telefloras-bedazzling-beauty-bouquet?prodID=P_T21S100A&skuId=T21S100A&zipMin=';
    const productURL = 'http://www.teleflora.com/'; // Error: Evaluation failed: TypeError: Cannot read property 'getAttribute' of null
    // const productURL = 'https://www.youtube.com'; // Error: Evaluation failed: TypeError: Cannot read property 'getAttribute' of null

    const [productName, productID, price, productImage] = await getTelefloraProduct(productURL);
    if (productName != "Error") {
        res.render('products', {
            title: productName,
            id: productID,
            price: price,
            image: productImage.replace("/w_800,h_1000", "/w_300,h_300")
        });
    } else {
        res.render('products', {
            title: "Error",
            id: null,
            price: null,
            image: null
        });
    }
});

async function getTelefloraProduct(dirtyUrl) {
    const products = [];
    let cleanUrl = sanitizeUrl(dirtyUrl);

    console.log('Retrieving Teleflora Prouduct. Launching puppeteer.');

    // The headless, executablePath, and args are copy and pasted to make puppeteer work with docker.
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: process.env.CHROME_BIN || null,
        args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();

    await page.goto(cleanUrl);

    console.log('Iterating over product');
    // Iterator for the multiple tiers of products.
    const PRICE_SELECTOR = '#sizeRadios > li:nth-child(INDEX)';
    let priceSelector = PRICE_SELECTOR.replace("INDEX", i=3);//TODO Replace the value for i for multiple products

   try {
       /**Retrieve Product Data*/
           //Product Name
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
   } catch (err) {
       console.log("Error handling user supplied URL.");
       console.log(err);
       console.log("End of Error.")
       return ["Error", "Null", "Null"];
    }

    console.log('Closing headless and returning product ' + productName);

    await browser.close();
    console.log('Data: ' + [productName, productID, price, productImage]);


    return [productName, productID, price, productImage];
}

function sanitizeUrl(dirtyUrl) {
    const cleanUrl = DOMPurify.sanitize(dirtyUrl).toString();

    const getHostname = (url) => {
        return new URL(url).hostname;
    }

    console.log('Clean URL: ' + cleanUrl);
    if (dirtyUrl === cleanUrl) {
        console.log('URLs match!');
    } else {
        console.log('URLs DO NOT MATCH');
    }

    console.log("Hostname: " + getHostname(cleanUrl));

    if (getHostname(cleanUrl) == "www.teleflora.com"){
        return cleanUrl;
    } else {
        return null;
    }
}

module.exports = router;

module.exports.getTelefloraProduct = async function(url) {
    return getTelefloraProduct(url);
};