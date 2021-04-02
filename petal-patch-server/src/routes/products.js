const express = require('express');
const puppeteer = require("puppeteer");
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const [productName, productID, price, productImage] = await getTelefloraProduct();

    res.render('products', {
        title: productName,
        id: productID,
        price: price,
        image: productImage.replace("/w_800,h_1000", "/w_300,h_300")
    });
});

async function getTelefloraProduct() {
    // The headless, executablePath, and args are copy and pasted to make puppeteer work with docker.
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: process.env.CHROME_BIN || null,
        args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();

    //TODO: input data
    await page.goto('https://www.teleflora.com/bouquet/make-a-wish?prodID=P_TEV13-6A&skuId=TEV13-6A&zipMin=');

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

    await browser.close();

    return [productName, productID, price, productImage];
}

module.exports = router;