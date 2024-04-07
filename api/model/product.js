const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    city : String,
    job : String,
    phone : Number,
    date : String
})

// create model
const product = mongoose.model('product',studentSchema);

module.exports = product;