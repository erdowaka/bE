
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const KabkoSchema = new Schema({
//     nama : {type: String},
//     foto : {type: String},
//     web  : {type: String},
// });


const KabkoSchema = new Schema({
    nama : {type: String},
    foto : {type: String},
    web  : {type: String},
},
{ collection: 'sysKabko', versionKey: false });

const Kabko = mongoose.model('sysKabko',KabkoSchema); 
module.exports = Kabko;