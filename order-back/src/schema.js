const {gql} = require("apollo-server");

const typeDefs = gql`
    "Simple Query to the products backend."
    type Query {
        
    }
    
    type Mutation {
       
    }
`;

module.exports = typeDefs;