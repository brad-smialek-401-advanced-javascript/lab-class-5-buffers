'use strict';

const mongoose = require('mongoose');
const Categories = require('./models-singular/categories.js')

// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

let categories = new Categories();


// Do some work

const doDataStuff = async () => {

  let sampleCategory = {
    name: 'furniture',
    description: 'chair',
    
  };

  let newCategory = await categories.create(sampleCategory);
  console.log('Category Created', newCategory);


  let allCategories = await categories.get()
  console.log('All Categories', allCategories);

  let oneCategory = await categories.get('5d12a3c0e27a289b9bd5eca4');
  console.log('One Category', oneCategory);

  // Disconnect 
  mongoose.disconnect();

};

doDataStuff();


