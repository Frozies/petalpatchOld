const request = require('supertest');

const app = require('../app');
const product = require('../routes/products');

describe('Testing product crud', () => {
   test('Teleflora Product Retrieval', (done) => {
       //TODO: Implement jest mock testing as .toBe only gets data that is sent as a response. (i think)

       expect(product.getTelefloraProduct('https://www.teleflora.com/bouquet/telefloras-bedazzling-beauty-bouquet?prodID=P_T21S100A&skuId=T21S100A&zipMin='))
           .toBe('Teleflora\'s Bedazzling Beauty Bouquet Bouquet,T21S100A,54.99,https://img.teleflora.com/images/o_0/l_flowers:T21S100A,pg_6/w_800,h_1000,cs_no_cmyk,c_pad/f_jpg,q_auto:eco,e_sharpen:200/flowers/T21S100A/Teleflora\'sBedazzlingBeautyBouquet');
    });
});
