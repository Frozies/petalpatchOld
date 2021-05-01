require('dotenv').config(); // Allows use of environmental variables from the .env file
const express = require('express'); // Fast web framework for node js
const { ApolloServer} = require('apollo-server-express');

async function startApolloServer() {
    const { typeDefs, resolvers } = require('./api/v1/schema');

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    const app = express();
    server.applyMiddleware({ app });

    // Getting main api file and loading custom middlewares
    const middlewares = require('./middlewares.js');
    const api_v1 = require('./api/v1');

    // Custom Middleware
    app.use(middlewares.notFound);
    app.use(middlewares.errorHandler);
    app.use('/public', express.static(__dirname+'/../public/'));
    app.use('/api/v1', api_v1);


    // Basic Routing
    app.get('/robots.txt', (req, res) => res.sendFile('robots.txt', {root: __dirname}));
    app.get('*', (req, res) => {
        res.sendFile('index.html', {root: __dirname+'/../public'})
    });

    app.set('trust proxy', 1); // When using something like nginx or apache as a proxy
    app.use(express.json()); // Allows use of req.body (for json)


    let serverPort = process.env.SERVER_PORT || 4000;
    await new Promise(resolve => app.listen({ port: serverPort },resolve));
    console.log(`🚀 Server ready at http://localhost:${serverPort}${server.graphqlPath}`);
    console.log(`🚀 Client ready at http://localhost:${serverPort}`);
    return { server, app };
}


startApolloServer();