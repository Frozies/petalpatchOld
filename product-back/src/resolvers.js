const {MockList} = require("apollo-server");
const mongoose = require("mongoose");

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
        }
    },

    Mutation: {
        createBouquet: (parent, args, datasources, info) => {
            BouquetModel.create({
                skuid: args.id,
                title: args.title,
                thumbnail: args.thumbnail,
                description: args.description,
                sizes: args.sizes
            }, function (err, small) {
                if (err) return handleError(err);
            });

            return {
                skuid: args.id,
                title: args.title,
                thumbnail: args.thumbnail,
                description: args.description,
                sizes: args.sizes
            };
        },
    }
};

module.exports = resolvers;