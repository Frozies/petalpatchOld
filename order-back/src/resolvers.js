const mongoose = require("mongoose");
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51IOt2hBbZhNgCcyBCvXFGW2gTrdUE9df0pRExEpSwyBtzX2ZPcaUJVDhIawskqHzrzYcZ8Fu2yZSwW9RsMQa3MAw006FWHFfr5');
//TODO Remove the hard coded key. check if the  env file is a string


const orderSchema = new mongoose.Schema({
//TODO
});

const resolvers = {
    Query: {
        /*TODO: convert this to a mutation*/
        createCustomer: () => {
            return stripe.customers.create({
                email: 'customer@example.com',
            })
                .then(customer => customer.id) //Returns this ID to the request
                .catch(error => console.error(error));
        }
        //    Need an api header somehow put into the function....
        },

    Mutation: {

    },
};

module.exports = resolvers;