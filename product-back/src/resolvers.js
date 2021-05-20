const productModel  = require('./productModel');
const {forEach} = require("iterall");

const resolvers = {

    /* Resolver Chains */
    Product: {
        Tags: (parent) => {
            return {
                tags: parent.tags
            }
        }
    },

    inputProduct: {
        inputTags: (parent) => {
            return {
                tags: parent.tags
            }
        }
    },

    /* Queries */
    Query: {
        /* Gets all of the products in the database. */
        getProducts: async (parent, args, datasources, info) => {
            let cursor = productModel.find().cursor();
            let array = []
            for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
                array.push(doc);
            }
            console.log(array[0].tags.flowers)
            return array;
        },

        /* Using the SKUID you can find a specific product. */
        getProductBySKUID: (parent, args, datasources, info) =>{
            let product = productModel.findOne({skuid: args.skuid});

            if (product != null) return product;

            else {
                console.log("product " + args.skuid + " does not exist.")
                return null;
            }
        },
    },

    /* Mutations */
    Mutation: {

        /* Create a new product to send to the database. Important inputs are SKUID (string), Title (string),
        and Price (float). Aditional arguments are photoURL (string), description (string), and tags. Tags come in array
        of size (string), colors [string], occasions [string], and flowers [string] */
        createProduct: async (parent, args, datasources, info) => {
            try {
                // Check if the product exists using the SKUID. Then changes the variable from the function to a boolean
                let productExists = await productModel.exists({skuid: args.product.skuid});
                productExists = productExists.valueOf();

                // If product does NOT exist then create it and return the input arguments.
                if (productExists == false) {
                    //Create mongoose model
                    await productModel.create({
                        skuid: args.product.skuid,
                        title: args.product.title,
                        price: args.product.price,
                        photoURL: args.product.photoURL,
                        description: args.product.description,
                        tags: args.product.tags,

                    }, function (err, doc) {
                        //TODO: im not sure this is the correct way to handle errors in gql
                        if (err) return handleError(err);

                        console.log("Creating new product: " + args.skuid + " - " + args.title);
                        //Return the input arguments if valid.
                        return {
                            skuid: args.product.skuid,
                            title: args.product.title,
                            price: args.product.price,
                            photoURL: args.product.photoURL,
                            description: args.product.description,
                            tags: args.product.tags,
                        }
                    });
                }

                // if product DOES exist then Update any info if its different.
                else if (productExists == true){
                    console.log("Product already exists!")

                    return {
                        skuid: args.product.skuid,
                        title: args.product.title,
                        price: args.product.price,
                        photoURL: args.product.photoURL,
                        description: args.product.description,
                        tags: args.product.tags
                    }
                }
            } catch (err) {
                console.log(err)
            }
        },

        /*Updates an already created product with its skuid. It will not create a product if it does not already
        exist in the database. Returns the updated product*/
        updateProduct: async (parent, inputProduct, datasources, info) => {
            return productModel.findOneAndUpdate({
                skuid: inputProduct.product.skuid
            }, inputProduct.product, { // The inputProduct.product retrieves the {product{skuid,price,etc}}
                new: true // retrieve sent information :D
            });
        },

        //TODO: Error Handling
        /*Removes a product in the database based on its SKUID. Will return a string with a confirmation or an error*/
        removeProduct: async (parent, inputProduct, datasources, info) => {
            return productModel.findOneAndDelete({skuid: inputProduct.skuid}).title;
        },
    },

    /* Subscriptions */
};

module.exports = resolvers;