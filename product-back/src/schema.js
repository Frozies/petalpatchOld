const {gql} = require("apollo-server");

const typeDefs = gql`
    type Query {

        #todo: Add a range to getProducts [0,50] so it only returns 50 products at a time or [x,y]
        "Gets all of the products in the database."
        getProducts: [Product]
        
        "Using the SKUID you can find a specific product."
        getProductBySKUID(skuid: String): Product
    }
    
    type Mutation {
        """Create a new product to send to the database. Important inputs are SKUID (string), Title (string), 
        and Price (float). Aditional arguments are photoURL (string), description (string), and tags. Tags come in array
        of size (string), colors [string], occasions [string], and flowers [string]"""
        createProduct(product: inputProduct): Product
        
        """Updates an already created product with its skuid. It will not create a product if it does not already
        exist in the database. Returns the updated product"""
        updateProduct(product: inputProduct): Boolean
        
        #TODO: Remove products based on mongoose ID.
        """Removes a product in the database based on its SKUID. Will return a string with a confirmation or an error"""
        remoteProduct(skuid: String): String
    }
    
    "The root product type. The important arguments are skuid, title, and price."
    type Product {
        skuid: String!
        title: String!
        price: Float!
        photoURL: String
        description: String
        tags: Tags
    }
    
    """Tags are an addon to the root product type. Colors, occasions, and flowers are all string arrays; these will be 
    automatically input by aditional microservices which create them."""
    type Tags {
        size: String
        colors: [String]
        occasions: [String]
        flowers: [String]
    }
        
    #### Input Types ####

    """The inputProduct type is a duplicate of the Product type. It is used in the createProduct mutation to send new 
    products to the database."""
    input inputProduct {
        skuid: String!
        title: String
        price: Float
        photoURL: String
        description: String
        tags: inputTags
    }
    
    """The inputTags type is a duplicate of the Tags type. It is used in the createProduct mutation to send new products
    to the database."""
    input inputTags {
        size: String
        colors: [String]
        occasions: [String]
        flowers: [String]
    }
`;

module.exports = typeDefs;