'use strict';

// Where is our schema defined?
const schema = require('./products-schema.js');
// How do we get it in here so we can run methods on it?

class Products {

  constructor() {
  }

  get(_id) {
    
    if (_id) {
      return schema.findOne({ _id });
    }
    else {
      return schema.find({});
    }
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    let newRecord = new schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
    return schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    return schema.findByIdAndDelete(_id);
  }

}

module.exports = Products;