const mongoose = require("mongoose");
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const orderSchema = new mongoose.Schema({

});

const resolvers = {
    Query: {
        createCustomer: () => {
            return stripe.customers.create({
                email: 'customer@example.com',
            })
                .then(customer => console.log(customer.id))
                .catch(error => console.error(error));
            }
        },

    Mutation: {

    },
};

module.exports = resolvers;