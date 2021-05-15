const {gql} = require("apollo-server");

const typeDefs = gql`
    "Simple Query to the products backend."
    type Query {
        retrieveOrderByID(id:ID): Order
    }
    
#    type Mutation {
#       
#    }
    
    type Order {
        id: ID,
        customer:Customer,
        recipient: Recipient,
        #delivery Date
        #products array
        #special instructions
        
    }
    
    #extend bouquet with card message?
    
    type Customer {
        name: String
        #payment
        #stripe information
        #account information?
    }
    
    type Recipient {
        name: String
        #Addresss
        #phone
    }
`;

module.exports = typeDefs;