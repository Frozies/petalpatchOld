/*Puppeteer is a google made node library which provides api control to a headless chrome.f*/
const puppeteer = require('puppeteer');

/*Express is the backend driver for all of the website. its like the traffic lights for the flow of data*/
const express = require('express');
const app = express();

/*Express's use function takes in a request gives a response and then directs the next path, or next function to go to.*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");

    /*Getting the headers and access control from the current http address*/
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); /*NEXT :D*/
});

/*Information delivered to the "/admin" page
* stats of inventory levels and warning signs
* products that need to be delivered today
* products that dont need to be delivered today
* Google maps link to show a location of every individual recipient per product
* recipients phone number & address are the most simple but important details of delivery (aside from a smile)
* Delivery confirmation reports with timestamps. Needs to take a photo for success or give a small description of reason
* for failure.
*
*
* Critical successful florist plan -
*
* * Main screen *
* Open app and login with authentication
* Need to manage multiple driver's routes assignment
* Show a list of this weeks orders, with an emphasis on today's.
* Show stats of inventory levels warnings (dont put too much information if it's not needed)
*
* * Tools *
*
*   Product creation
*       --> Product replication (product information from telefora) - > (stripe database)
*       --> Simple select a preloaded list of holidays, themes/colors, etc.
*
*   Inventory
*       vase based inventory system
*
*   The driver and the order's data flow are entangled here.
*   Driver manipulation and order assignment
*   Order manipulation and driver assignment
*   master ledger of every order. master ledger of each driver's delivered orders.
*
*   Order screen
*   Gives access to logs & events
*   Show's all of the recipients & senders information
*   card message
*   ALL of the products (including bears, chocolate, balloons)
*   example photos,
*
*
* Critical successful delivery plan -
*
* Open app and login with authentication
* Get a list of the currently assigned (in correct delivery order too!!!) deliveries, which can be described as showing a photo of the product and giving
* important recipient information to the driver,
* With simple swipe maneuvers allow access to update the status of
* any specific order. Such as confirm, with signature, confirm with photo. or failure with description (and/or PHOTOS).
*
*
*
* * needs to be "quick"
* */
app.get('/admin/', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    /*Console Logging!*/
    console.log(req.params);
    console.log("HELLO");

    await page.goto('https://www.teleflora.com/bouquet/make-a-wish?prodID=P_TEV13-6A&skuId=TEV13-6A&zipMin='); // URL is given by the "user" (your client-side application)

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
    }))

    res.send();
    await browser.close();
})

app.listen(4000);