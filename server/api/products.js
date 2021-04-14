const express = require('express');
const puppeteer = require("puppeteer");
const router = express.Router();
const createDOMPurify = require('dompurify');
const { JSDOM }  = require('jsdom');

const window = new JSDOM('').window;
createDOMPurify(window);

router.get('/', (async (req, res) => {
    const telefloraID = req.query.prodID;
    //TODO: Error handling

    console.log(req.query.prodID)

    if (!telefloraID){
        res.send("Input a product id in URL I.E ?prodID=P_TPL21-1A ");
    } else {
        const productURL = "https://www.teleflora.com/bouquet/?prodID=" + telefloraID;
        const products = await getTelefloraProduct(productURL);
        res.json(products);
    }
}));

async function getTelefloraProduct(dirtyUrl) {
    let cleanUrl = new URL(dirtyUrl);
    //TODO: Error handling for invalid URLs
    let products = [];

    console.log('Retrieving Teleflora Product. Launching puppeteer.');

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
    let sizeCount = await page.$$eval('#sizeRadios > li', elements => elements.length);

    for (let i=1;i<=sizeCount;i++){ // TODO: Get size range.
        let product = await getProductData(i, page);
        products.push(product);
    }

    await browser.close();
    console.log(products);
    return products;
}

async function getProductData(index, page) {
    const PRICE_SELECTOR = '#sizeRadios > li:nth-child(INDEX)';

    let priceSelector = PRICE_SELECTOR.replace("INDEX", index.toString());

    /**Retrieve Product Data*/
    //Product Name
    let productName = await page.evaluate((sel, i) => {
            return document.getElementById("skuRadio" + i).getAttribute('data-alttext').replace("Teleflora's ", "");
        }, priceSelector, index);

    // Product ID
    let productID = await page.evaluate((sel, i) => {
        return document.getElementById("skuRadio" + i).value;
    }, priceSelector, index);

    // Price of Product
    let price = await page.evaluate((sel, i) => {
        return document.getElementById("skuid-" + i).value;
    }, priceSelector, index);

    // Product Image
    let productImage = await page.evaluate((sel, i) => {
        return document.getElementById("skuRadio" + i).getAttribute('data-zoom').replace("/w_800,h_1000", "/w_1000,h_1000");
    }, priceSelector, index);

    // TODO: Get product sizing (standard, deluxe, premium)

    console.log('Returning ' + productName);

    return { productName: productName, productID: productID, price: price, productImage: productImage };
}

function submitProduct(productID){
    console.log(productID);
}

module.exports = router;

module.exports.getTelefloraProduct = async function(url) {
    return getTelefloraProduct(url);
};