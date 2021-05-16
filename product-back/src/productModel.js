const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
    size: 'string',
    colors: ['string'],
    occasions: ['string'],
    flowers: ['string'],
});

const productSchema = new mongoose.Schema({
    skuid: 'string',
    title: 'string',
    price: 'number',
    photoURL: 'string',
    description: 'string',
    tags: tagsSchema
});

const productModel = mongoose.model('Product', productSchema);

module.exports = { productModel };