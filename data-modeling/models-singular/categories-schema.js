'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, uppercase: false, enum: [] },

});



module.exports = mongoose.model('categories', categories);
