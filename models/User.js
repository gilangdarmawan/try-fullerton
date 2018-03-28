var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  id: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  dob: {
    type: String
  },
  phone: {
    type: Number
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
}, {
  collection: 'user'
});

module.exports = mongoose.model('user', User);
