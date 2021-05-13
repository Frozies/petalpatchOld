const {MockList} = require("apollo-server");
const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
    size: 'string',
    price: 'number',
    photo: 'string'
});

const productSchema = new mongoose.Schema({
    id: 'string',
    title: 'string',
    thumbnail: 'string',
    description: 'string',
    sizes: [sizeSchema]
});

const BouquetModel = mongoose.model('Product', productSchema);

const resolvers = {
    Query: {

    },

    Mutation: {
        createBouquet: (parent, args, datasources, info) => { // TODO: Use datasource?

            BouquetModel.create({
                id: args.id,
                title: args.title,
                thumbnail: args.thumbnail,
                description: args.description,
                sizes: args.sizes
            }, function (err, small) {
                if (err) return handleError(err);
            });

            console.log("_________SENT ARGUMENT___________")
            console.log(args)
            console.log("_________END OF ARGUMENT_________")

            return {
                id: args.id,
                title: args.title,
                thumbnail: args.thumbnail,
                description: args.description,
                sizes: args.sizes
            };
            // return true;
        },
    }
};

module.exports = resolvers;