/**
 * TODO
 * Vase based inventory system
 * Order Status (received, Arranged, Assigned Driver, Delivered, Failed To Deliver, Assigned New Driver, success)
 * Gives access to logs & events
 * Edit Order, cancel Order
 * receive Photos, Status Updates, And Signature From Users
 * weather tracking time stamp (ex - If it's blazing hot out, don't leave roses outside on a porch.)
 * time stamps
 * internal notes/comments
 * Link to product directly with photos.
 * Simple select a preloaded list of holidays, themes/colors, etc.
 * Edit and Remove Current Products
 */


const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    "Example query"
    type Query {
        hello: String
        goodbye: String
    }

    "Products will have various fields."
    type Product {
        id: ID
        name:String
    }

    type User {
        id:ID
        name: String
    }

    ""
    type Order {
        id:ID
        orderDateTime: Date!
        deliveryDate: Date!
        recipientName: String
        recipientAddress: Address
        recipientPhone: String
        products: [Product!]!
        cardMessage: String
        specialInstructions: String
        customerName: String
        customerPhone: String
    }

    type Date {
        time: String
        day: Int
        month: Int
        year: Int
    }

    type Address {
        address: String
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

module.exports = {typeDefs, resolvers};