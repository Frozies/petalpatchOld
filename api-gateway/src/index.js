const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

require('dotenv').config(); // Allows use of environmental variables from the .env file

const gateway = new ApolloGateway();

const server = new ApolloServer({
    gateway,
    // Subscriptions are not currently supported in Apollo Federation
    subscriptions: false
});

server.listen().then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {console.error(err)});

