const express = require('express');
const puppeteer = require("puppeteer");
const router = express.Router();
const createDOMPurify = require('dompurify');
const { JSDOM }  = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);


/* GET users listing. */
router.get('/', async function(req, res) {
    const productURL = 'https://www.teleflora.com/bouquet/telefloras-bedazzling-beauty-bouquet?prodID=P_T21S100A&skuId=T21S100A&zipMin=';
    const [productName, productID, price, productImage] = await getTelefloraProduct(productURL);

    res.render('products', {
        title: productName,
        id: productID,
        price: price,
        image: productImage.replace("/w_800,h_1000", "/w_300,h_300")
    });
});

async function getTelefloraProduct(url) {
    console.log('Retrieving Teleflora Prouduct. Launching puppeteer.');
    // The headless, executablePath, and args are copy and pasted to make puppeteer work with docker.
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: process.env.CHROME_BIN || null,
        args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();

    //TODO: Check if URL, Check if Teleflora URL, Check if Valid Product.
    const cleanUrl = DOMPurify.sanitize(url).toString();
    console.log('Dirty URL: ' + url);
    console.log('Clean URL: ' + cleanUrl);
    if (url == cleanUrl) {
        console.log('URLs match!');
    } else {
        console.log('URLs DO NOT MATCH');
    }

    await page.goto(cleanUrl);

    console.log('Iterating over product');
    // Iterator for the multiple tiers of products.
    const PRICE_SELECTOR = '#sizeRadios > li:nth-child(INDEX)';
    let priceSelector = PRICE_SELECTOR.replace("INDEX", i=1);//TODO Replace the value for i for multiple products

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

    console.log('Closing headless and returning product ' + productName);

    await browser.close();
    return [productName, productID, price, productImage];
}

module.exports = router;