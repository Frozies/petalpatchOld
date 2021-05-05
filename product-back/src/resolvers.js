const {MockList} = require("apollo-server");

const resolvers = {
    Query: {
        listBouquet(){
            return {
                title: 'test',
                id: 'test_id'
            }
        }
    }

    // Query: {
    //     listAllBouquets: {MockList([6,9])},
    //     listBouquet: {MockList([1,1])}
    // },
    //
    // Bouquet: () => ({
    //     id: () => 'TEV56-3A',
    //     title: () => 'Blush Life Bouquet',
    //     thumbnail: () => 'https://img.teleflora.com/images/o_0/l_flowers:TEV56-3C,pg_6/w_800,h_1000,cs_no_cmyk,c_pad/f_jpg,q_auto:eco,e_sharpen:200/flowers/TEV56-3C/BlushLifeBouquetPM',
    //     description: () => 'Put a spring in their step with this beautifully blushing bouquet of hot pink roses, soft peach lilies and fresh green hydrangea. Arranged in a graceful vase tied with a charming bow, it\'s a chic treat for any occasion!',
    //     sizes: () => [
    //         {
    //             size: () => 'Standard',
    //             price: () => 74.99
    //         },
    //         {
    //             size: () => 'Deluxe',
    //             price: () => 89.99
    //         },
    //         {
    //             size: () => 'Premium',
    //             price: () => 99.99
    //         }
    //     ]
    // })
};

module.exports = resolvers;