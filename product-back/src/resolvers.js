const { productModel } = require('./productModel');

const resolvers = {
    Query: {
        retrieveProducts: async (parent, args, datasources, info) => {
            let cursor = productModel.find().cursor();
            let array = []
            for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
                array.push(doc);
            }
            return array;
        },

        retrieveProductBySKUID: (parent, args, datasources, info) =>{
            let product = productModel.findOne({skuid: args.skuid});

            if (product != null) return product;

            else {
                console.log("product " + args.skuid + " does not exist.")
                return null;
            }
        }
    },

    Mutation: {
        createOrUpdateProduct: async (parent, args, datasources, info) => {

            // Check if the product exists using the SKUID. Then changes the variable from the function to a boolean
            let productExists = await productModel.exists({skuid: args.skuid});
            productExists = productExists.valueOf();

            // If product does NOT exist then create it and return doc.
            if (productExists == false) {
                //Create
                await ProductModel.create({
                    skuid: args.skuid,
                    title: args.title,
                    price: args.price,
                    photoURL: args.photoURL,
                    description: args.description,
                    tags: args.tags,

                }, function (err, doc) {
                    if (err) return handleError(err);

                    console.log("Creating new product: " + args.skuid + " - " + args.title);
                    //Return document
                    return {
                        skuid: args.skuid,
                        title: args.title,
                        price: args.price,
                        photoURL: args.photoURL,
                        description: args.description,
                        tags: args.tags,
                    }
                });
            }

            // if product DOES exist then Update any info if its different. //TODO: Update if exists
            else if (productExists == true){
                console.log("Product already exists!")

                return {
                    skuid: args.skuid,
                    title: args.title,
                    price: args.price,
                    photoURL: args.photoURL,
                    description: args.description,
                    tags: args.tags,
                }
            }

            //RETURN HERE
        }
    }
};

module.exports = resolvers;