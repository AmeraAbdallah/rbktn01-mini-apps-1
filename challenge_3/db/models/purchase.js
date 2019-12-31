const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const purchaseSchema = new Schema({ 
    name: String,
    email: String,
    password: String,
    address1: String,
    address2: String,
    state: String,
    zipCode: String,
    phoneNumber: String,
    creditCardNumber: String,
    expiryDate: String,
    cvv: String,
    billingZipCode: String
 });

 
 var Purchase = mongoose.model('Purchase', purchaseSchema);

 module.exports = Purchase;