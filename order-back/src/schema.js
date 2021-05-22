const {gql} = require("apollo-server");

const typeDefs = gql`
    "Simple Query to the products backend."
    type Query {
#        retrieveOrderByID(id:ID): Order
        createCustomer(email: String): String
    }
    
#    type Mutation {
#       
#    }
    
#    type Order {
#        id: ID,
#        customer:Customer,
#        recipient: Recipient,
#        deliveryDate: Date
#        products: [Product!]!
#        totalCost: Float
#        #special instructions
#        
#    }
#    
#    type Customer {
#        name: String
#        #payment
#        #stripe information
#        #account information?
#    }
#    
#    type Recipient {
#        name: String
#        #Addresss
#        #phone
#    }

    type stripeItem {
        object: String
        amount: Int
        currency: String
        description: String
        parent: String
        quantity: Int
        itemType: String
    }
    
    type stripeOrder {
        id: String
        object: String
        amount: Int
        amount_returned: Int
#        application: null
#        application_fee: null
        charge: String
        created: Int
        currency: String
#        customer: Customer
        email: String,
        items: [stripeItem]
        livemode: Boolean
#        metadata: [metadata]
        
    }
`;

module.exports = typeDefs;