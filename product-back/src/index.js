/**
* Lets define the products backend. This is the main microservice for the creation, supplying, editing, and deletion of
 * products. Inventory is NOT included in this program, but may be added slowly until it is migrated.
* */

const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const mongoose = require('mongoose');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const queryLogger = require('./plugins/queryLogger');
const productDatasource = require('./productDatasource');

require('dotenv').config(); // Allows use of environmental variables from the .env file

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB connected successfully')
});

const server = new ApolloServer({
    schema: buildFederatedSchema([{
        typeDefs,
        resolvers,
        /*cache,*/
        dataSources: () => {
            products: new ProductDatasource(db.collection('users'));
        }
    }]),

    plugins: [
        queryLogger
    ]
});

//The default port should increment from 4000 (the api gateway), 4001 (Products), etc
let serverPort = process.env.PRODUCTS_PORT || 4001;

server.listen({ port: serverPort }).then(() => {
    console.log(`
    🚀  Products Server is running!
    🔉  Listening on port ${serverPort}
    📭  Query at https://studio.apollographql.com
    `);
});