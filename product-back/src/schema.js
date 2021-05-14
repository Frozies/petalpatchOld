const {gql} = require("apollo-server");

const typeDefs = gql`
    "Simple Query to the products backend."
    type Query {
        "Retrieve many bouquets from the product database."
        retrieveBouquets: [Bouquet]
        retrieveBouquetBySKUID(skuid: String): Bouquet
        
#        readBouquet(id:ID): Bouquet!
#        
#        "List all bouqets in the database."
#        readAllBouquets: [Bouquet!]!
    }
    
    type Mutation {
        createOrUpdateBouquet(skuid: String!, title: String!, description: String, sizes: [InputSize!]!): Bouquet
        
#        updateBouquet(id: ID): Bouquet
#        removeBouquet(id: ID): Bouquet
    }
    
    "Bouquet product type. Includes sizes for multiple price-points. Plan to add holiday tags and other organizers."
    type Bouquet {
        "ID or SKU to be auto generated using a custom codefied format. (Ask Renee for help on format)"
        skuid: String!
        title: String!
        "Thumbnail to be auto-populated from size."
        thumbnail: String
        description: String
        sizes: [Size!]!
    }
    
    "Sizes for the bouquet product type. The photo is a string for now, will eventually be uploaded."
    type Size {
        size:  String!
        price: Float!
        photo: String
    }
    
    "Sizes for the bouquet product type. The photo is a string for now, will eventually be uploaded."
    input InputSize {
        size:  String!
        price: Float!
        photo: String
    }
`;

module.exports = typeDefs;