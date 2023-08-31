
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
    subKeg          : {type: String},
    belanja         : {type: String}, 
    realisasi       : [{ type: Schema.Types.ObjectId}],
    created         : {type: Date},
    updated         : {type: Date}
  },
  { collection      : "sysApbdRealisasi", versionKey      : false }
);

const Apbd = mongoose.model("sysApbdRealisasi", ApbdSchema);
module.exports = Apbd;
