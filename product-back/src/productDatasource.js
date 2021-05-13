const { MongoDataSource } = require('apollo-datasource-mongodb');


class ProductDatasource extends MongoDataSource {
    getProduct(productId) {
        return this.findOneById(productId);
    }
}

module.exports = ProductDatasource;