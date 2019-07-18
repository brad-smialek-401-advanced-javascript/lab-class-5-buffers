const Products = require('../../models-singular/products.js');
let products = new Products();

const supergoose = require('../supergoose.js');

describe('Products Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new product', () => {
    let obj = { name: 'chair', description: 'recliner' };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a product', () => {
    let obj = { name: 'chair', description: 'recliner' };
    return products.create(obj)
      .then(record => {
        // console.log(record);
        return products.get(record._id)
          .then(product => {
            console.log(product);
            Object.keys(obj).forEach(key => {
              expect(product[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a product', () => {
    let obj = { name: 'chair', description: 'recliner' };
    return products.create(obj)
      .then(record => {
        // console.log(record);
        return products.get(record._id)
          .then(product => {
            console.log(product);
            Object.keys(obj).forEach(key => {
              expect(product[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can get() all product', () => {
    let obj = { name: 'chair', description: 'recliner' };
    return products.create(obj)
      .then(record => {
        // console.log(record);
        return products.get(record._id)
          .then(product => {
            console.log(product);
            Object.keys(obj).forEach(key => {
              expect(product[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can delete() a product', () => {
    let obj = { name: 'chair', description: 'recliner' };
    return products.create(obj)
      .then(record => {
        // console.log(record);
        return products.get(record._id)
          .then(product => {
            console.log(product);
            Object.keys(obj).forEach(key => {
              expect(product[key]).toEqual(obj[key]);
            });
          });
      });
  });

});