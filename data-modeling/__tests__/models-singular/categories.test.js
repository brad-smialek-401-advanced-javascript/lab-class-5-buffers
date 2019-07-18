const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let obj = { name: 'chair', description: 'recliner' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a category', () => {
    let obj = { name: 'chair', description: 'recliner' };
    return categories.create(obj)
      .then(record => {
        // console.log(record);
        return categories.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a categories', () => {
    let obj = { name: 'chair', description: 'recliner' };
    return categories.create(obj)
      .then(record => {
        // console.log(record);
        return categories.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can get() all categories', () => {
    let obj = { name: 'chair', description: 'recliner' };
    return categories.create(obj)
      .then(record => {
        // console.log(record);
        return categories.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can delete() a category', () => {
    let obj = { name: 'chair', description: 'recliner' };
    return categories.create(obj)
      .then(record => {
        // console.log(record);
        return categories.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });

});