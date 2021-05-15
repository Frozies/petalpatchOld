const {MockList} = require("apollo-server");
const mongoose = require("mongoose");

//TODO: move schemas to another file. Change Models to copy the gql schemas.

const sizeSchema = new mongoose.Schema({
    size: 'string',
    price: 'number',
    photo: 'string'
});

const productSchema = new mongoose.Schema({
    skuid: 'string',
    title: 'string',
    thumbnail: 'string',
    description: 'string',
    sizes: [sizeSchema]
});

const BouquetModel = mongoose.model('Product', productSchema);

const resolvers = {
    Query: {
        retrieveBouquets: async (parent, args, datasources, info) => {
            let cursor = BouquetModel.find().cursor();
            let array = []
            for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
                array.push(doc);
            }
            return array;
        },

        retrieveBouquetBySKUID: (parent, args, datasources, info) =>{
            let bouquet = BouquetModel.findOne({skuid: args.skuid});

            if (bouquet != null) return bouquet;

            else {
                console.log("Bouquet " + args.skuid + " does not exist.")
                return null;
            }
        }
    },

    Mutation: {
        createOrUpdateBouquet: async (parent, args, datasources, info) => {

            // Check if the bouq exists using the SKUID. Then changes the variable from the function to a boolean
            let bouqExists = await BouquetModel.exists({skuid: args.skuid});
            bouqExists = bouqExists.valueOf();

            // If bouquet does NOT exist then create it and return doc.
            if (bouqExists == false) {
                //Create
                await BouquetModel.create({
                    skuid: args.skuid,
                    title: args.title,
                    thumbnail: args.thumbnail,
                    description: args.description,
                    sizes: args.sizes
                }, function (err, doc) {
                    if (err) return handleError(err);

                    console.log("Creating new product: " + args.skuid + " - " + args.title);
                    //Return document
                    return {
                        skuid: args.skuid,
                        title: args.title,
                        thumbnail: args.thumbnail,
                        description: args.description,
                        sizes: args.sizes
                    }
                });
            }

            // if bouquet DOES exist then Update any info if its different. //TODO: Update if exists
            else if (bouqExists == true){
                console.log("Bouquet already exists!")

                return {
                    skuid: args.skuid,
                    title: args.title,
                    thumbnail: args.thumbnail,
                    description: args.description,
                    sizes: args.sizes
                }
            }

            //RETURN HERE
        }
    }
};

module.exports = resolvers;