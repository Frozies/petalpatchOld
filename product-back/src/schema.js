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
        createOrUpdateBouquet(bouquet: inputBouquet): Bouquet
        
#        updateBouquet(id: ID): Bouquet
#        removeBouquet(id: ID): Bouquet
    }
    
    type Product {
        skuid: String!
        title: String!
        price: Float!
        photoURL: String
        description: String
        tags: [Tags]
    }

    "Bouquet product type. Includes sizes for multiple price-points. Plan to add holiday tags and other organizers."
    type Bouquet {
        products: [Product!]
    }
    type Tags {
        size: String
        colors: Colors
        occasions: Occasions
        flowers: Flowers
    }

    type Flowers {
        roses: Boolean
        carnations: Boolean
        daisys: Boolean
        lilies: Boolean
        stock: Boolean
        sunflower: Boolean
    }
    
    type Colors {
        red: Boolean
        orange: Boolean
        yellow: Boolean
        green: Boolean
        blue: Boolean
        pink: Boolean
        purple: Boolean
        white: Boolean
    }
    
    type Occasions {
        birthday: Boolean
        wedding: Boolean
        christmas: Boolean
        stpatricks: Boolean
        easter: Boolean
        mothers: Boolean
        grandparents: Boolean
        independence: Boolean
        fathers: Boolean
        memorial: Boolean
        halloween: Boolean
        thanksgiving: Boolean
        hanukkah: Boolean
        graduation: Boolean
        spring: Boolean
        anniversary: Boolean
        backToSchool: Boolean
        congratulation: Boolean
        getWell: Boolean
        imSorry: Boolean
        justBecause: Boolean
        romance: Boolean
        babies: Boolean
        religious: Boolean
        retirement: Boolean
        thankYou: Boolean
        thinkingOfYou: Boolean
        newYears: Boolean
    }
        
    #### Input Types ####

    input inputProduct {
        skuid: String!
        title: String!
        price: Float!
        photoURL: String
        description: String
        tags: [inputTags]
    }

    "Bouquet product type. Includes sizes for multiple price-points. Plan to add holiday tags and other organizers."
    input inputBouquet {
        products: [inputProduct!]
    }
    input inputTags {
        size: String
        colors: inputColors
        occasions: inputOccasions
        flowers: inputFlowers
    }

    input inputFlowers {
        roses: Boolean
        carnations: Boolean
        daisys: Boolean
        lilies: Boolean
        stock: Boolean
        sunflower: Boolean
    }

    input inputColors {
        red: Boolean
        orange: Boolean
        yellow: Boolean
        green: Boolean
        blue: Boolean
        pink: Boolean
        purple: Boolean
        white: Boolean
    }

    input inputOccasions {
        birthday: Boolean
        wedding: Boolean
        christmas: Boolean
        stpatricks: Boolean
        easter: Boolean
        mothers: Boolean
        grandparents: Boolean
        independence: Boolean
        fathers: Boolean
        memorial: Boolean
        halloween: Boolean
        thanksgiving: Boolean
        hanukkah: Boolean
        graduation: Boolean
        spring: Boolean
        anniversary: Boolean
        backToSchool: Boolean
        congratulation: Boolean
        getWell: Boolean
        imSorry: Boolean
        justBecause: Boolean
        romance: Boolean
        babies: Boolean
        religious: Boolean
        retirement: Boolean
        thankYou: Boolean
        thinkingOfYou: Boolean
        newYears: Boolean
    }
`;

module.exports = typeDefs;