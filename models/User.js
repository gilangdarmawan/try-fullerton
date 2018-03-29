var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  acc_owner: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  dob: {
    type: Date
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  acc_type: {
    type: String
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  security_question: {
    type: String
  },
  confirm_security_question: {
    type: String
  },
  security_answer: {
    type: String
  },
  confirm_security_answer: {
    type: String
  },
  education: {
    type: String
  },
  trading_experience: {
    type: String
  },
  trading_frequency: {
    type: String
  },
  purpose_of_trading: {
    type: String
  },
  annual_gross_income: {
    type: String
  },
  net_worth: {
    type: String
  },
  income_source: {
    type: String
  },
  public_position: {
    type: String
  },
  family_public_position: {
    type: String
  },
  pref_language: {
    type: String
  }
}, {
  collection: 'user'
});

module.exports = mongoose.model('user', User);