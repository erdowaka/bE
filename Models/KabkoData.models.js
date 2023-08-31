
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const KabkoSchema = new Schema({
//     nama : {type: String},
//     foto : {type: String},
//     web  : {type: String},
// });

const KabkoDataSchema = new Schema({
    tahun                   : {type: String},
    bulan                   : {type: String},
    anggaran                : {type: String},
    anggaranTarget          : {type: String},
    anggaranRealisasi       : {type: String},
    fisikTarget             : {type: String},
    fisikRealisasi          : {type: String},
    bankeu                  : {type: String},
    bankeuTarget            : {type: String},
    bankeuRealisasi         : {type: String},
    bankeuFisikTarget       : {type: String},
    bankeuFisikRealisasi    : {type: String},
    updated                 : {type: String}

},
{ collection: 'sysKabkoData', versionKey: false });

const Kabko = mongoose.model('sysKabkoData',KabkoDataSchema); 
module.exports = Kabko;