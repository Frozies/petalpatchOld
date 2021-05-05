const {gql} = require("apollo-server");

const typeDefs = gql`
    "Simple Query to the products backend."
    type Query {
        
        "List all bouqets in the database."
        listAllBouquets: [Bouquet!]!
        listBouquet: Bouquet
    }
    
    "Bouquet product type. Includes sizes for multiple price-points. Plan to add holiday tags and other organizers."
    type Bouquet {
        id: ID!
        title: String!
        thumbnail: String
        description: String
#        sizes: [Size!]!
    }
    
    "Sizes for the bouquet product type."
    type Size {
        size:  String!
        price: Float!
    }
`;

module.exports = typeDefs;