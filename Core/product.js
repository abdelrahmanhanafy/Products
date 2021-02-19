const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  size: {
    type: String,
    required: true,
    enum: ['3Y', '4Y', '5-6Y', '7-8Y','9-10Y'],
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be greater than zero'],
  },
  category:{
    type:String,
    required: true,
    enum: ['NEW', 'TOYS', 'HOME & STATIONERY',  'FANCY DRESS','FASHION' ,'GIFTS' ,'CHARACTERS' ,'DISNEY+'],
  },
  price:{
    type: Number,
    required: true,
  }
});

schema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.__v;
  },
});

const model = mongoose.model('Products', schema);

module.exports = model;
