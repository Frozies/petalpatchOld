# Petal Patch Website 2.0

## Description
Welcome to the new Petal Patch ECommerce App!

## Setup
```
npm install             # To get things goind (download all neccessary packages)
```
* Use the `.env` file to hide any information (like API keys) from the repository
* Rename `.npmignore` to `.gitignore`
* Add any file or folder to `.gitignore` to have it not uploaded to the repository
* Don't forget to add `.env` in the `.gitignore` file

## Avaliable npm scripts

```
npm run start           # Start the node js server
npm run dev             # Start the node js server with nodemon
npm run build           # Start webpack (build the bundle js file)
npm run killNodeWin     # Kill all node processes in Windows
npm run killNodeLinux   # Kill all node processes in Linux and Mac Os
```



## Critical successful florist plan

#### Main screen
Open app and login with authentication
Need to manage multiple drivers routes assignment
Show a list of this weeks orders, with an emphasis on today's.
Show stats of inventory levels warnings (don't put too much information if it's not needed)
Activities Log (Ie New Orders, Products Added, Deliveries)

### Tools

##### Product creation
* Product replication (product information from telefora) - > (stripe database)
* Simple select a preloaded list of holidays, themes/colors, etc.
* Edit and Remove Current Products

##### Inventory
* Vase based inventory system


##### Order screen
* Gives access to logs & events 
* Order Status (received, Arranged, Assigned Driver, Delivered, Failed To Deliver, Assigned New Driver, success)
* Show's all the recipients & senders information
  card message
* All the products (including bears, chocolate, balloons)
* Link to product directly with photos.
* Print button, with automatic email to printer and business email.
* Edit Order, cancel Order
* receive Photos, Status Updates, And Signature From Users


### Critical successful delivery plan

* Open app and login with authentication
* Get a list of the currently assigned (in correct delivery order too!!!) deliveries, which can be described as showing
  a photo of the product and giving important recipient information to the driver,
* With simple swipe maneuvers allow access to update the status of any specific order. Such as confirm, with signature,
  confirm with a photo. or failure with description (and/or PHOTOS).
* design todo
  - photos of orders
  - recipient signature
  - weather tracking time stamp (ex - If it's blazing hot out, don't leave roses outside on a porch.)
  - time stamps
  - internal notes/comments
  

## Databases

##### Product data

##### Users
* Drivers
* Designers
* Admins

##### Orders

# Critical Path Customer
Checkout Stripe

# Todo
* Github Actions CI/CD
* Testing With Jest
* Go Through Dependencies
* Design Api Getters And Setters
* Documentation Revamp

Information delivered to the "/admin" page
stats of inventory levels and warning signs
Products that need to be delivered today
products that don't need to be delivered today
Google maps link to show a location of every individual recipient per product
Recipients phone number & address are simplest but important details of delivery (aside from a smile)
Delivery confirmation reports with timestamps. Needs to take a photo for success or give a small description of reason
for failure.

I am going to start following https://12factor.net/