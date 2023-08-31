
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const KabkoSchema = new Schema({
//     nama : {type: String},
//     foto : {type: String},
//     web  : {type: String},
// });

const ApbdSchema = new Schema(
  {
    tahun           : {type: Date},
    bulan           : {type: Date},
    opd             : {type: String}, 
    sp2d            : {type: String},
    created         : {type: Date},
    updated         : {type: Date}
  },
  { collection      : "sysApbd", versionKey      : false }
);

const Apbd = mongoose.model("sysApbdSp2d", ApbdSchema);
module.exports = Apbd;
