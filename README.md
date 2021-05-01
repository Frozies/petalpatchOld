# Petal Patch Website 2.0

### Description
Welcome to the new Petal Patch ECommerce App! This is a project built with node.js, express.js, and apollo federation
graphql. 

There are 7 microservices, 3 of which are the front-end application entry points for users, and the other 4 are
the backend business logic. All of which are going to be combined using Apollo Federation. Each microservice has project
specific readme in its root folder.

##Store-Front
The service starts here, the customer views the online store page, selects a product (or products) and purchases them. 
Using react, express, apollo, node, and webpack to run the front end, and launch a backend that can communicate through
the gateway to the rest of the microservices.

##Florist-Front
This is the administration side of the florist. The codebase is reflective of the storefront. The admin can use client 
to view orders for the day, edit/update orders, view sales data, assign deliveries to drivers, ask for changes to 
the storefront. Future iterations may include things such as GPS tracking for drivers, inventory systems,
detailed logs of orders (and other database changes), product creation and updating.

##Delivery-Front
This is a planned user interface for delivery drivers. After the storefront and florist front are completed, this projec
t will begin. Drivers can use a simple interface to view and update orders that are assigned to them. The orders
are assigned from the florist front, and the driver can view most information about the order, add notes, keep track of 
weather on delivery, gps tracking, time tracking, delivery counts per day, customer signatures on delivery, order 
addresses to maps quick access, and photos of orders. Updating order status such as delivered, and failed to deliver
with reasoning behind it. The driver will also have access to recipient information such as phone numbers, address, and
delivery notes if needed.

##Api-Gateway
This is the middleware using apollo federation to combine the separate graphql servers from all the microservices.

##Product-Back
Microservice that handles anything to do with products. Updating, adding, changing any product and has direct access to 
the product database.

##Inventory-Back
Microservice that handles the inventory. A vase based inventory for bouquets that links to the products which include
a vaseID. Non-bouquet based products have their own corresponding product and inventory IDs.

##Order-Back
Order handling for the storefront, and stripe. Saves all the information needed either to stripe or a private database.
This is where the new orders go to, to be distributed to communicate to the rest of the microservices.