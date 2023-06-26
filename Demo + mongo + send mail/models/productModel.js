const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  MaTour: Number,
  TenTour: String,
  Gia: Number,
  Anh: String,
  description:String
},{
    collection:'products'
});

module.exports = mongoose.model('product',productSchema)
