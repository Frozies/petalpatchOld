/**
 * The order backend is a major microservice in the webapp. It retrieves requests from the storefront to place an order
 * and sends the information to Stripe, as well as the florist and driver front ends. It handles payment processing and
 * tracking of information for orders.
 * */

const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const mongoose = require('mongoose');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const queryLogger = require('./plugins/queryLogger');

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
        /*datasource*/
    }]),

    plugins: [
        queryLogger
    ]
});

//The default port should increment from 4000 (the api gateway), 4001 (Products), etc
let serverPort = process.env.PRODUCTS_PORT || 4002;

server.listen({ port: serverPort }).then(() => {
    console.log(`
    🚀  Order Server is running!
    🔉  Listening on port ${serverPort}
    📭  Query at https://studio.apollographql.com
    `);
});