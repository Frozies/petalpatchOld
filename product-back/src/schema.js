const {gql} = require("apollo-server");

const typeDefs = gql`
    "Products will have various fields."
    type Query {
        listAllBouquets: [Product!]!
    }
    
    type Product {
        id: ID!
        title: String!
        thumbnail: String
        description: String
        sizes: [Size]
    }
    
    type Size {
        size:  String
        price: Float
    }
`;

module.exports = typeDefs;