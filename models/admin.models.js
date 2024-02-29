const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  drinkName: {
    type: String,
    required: true,
  },
  manufacturerCompany: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  quantityAvailable: {
    type: String,
    required: true,
  }
},
{
    versionKey: false,
    _id: true,
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;
