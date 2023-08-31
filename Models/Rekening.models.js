const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const KabkoSchema = new Schema({
//     nama : {type: String},
//     foto : {type: String},
//     web  : {type: String},
// });

const Rekening = new Schema(
  {
    kode    : { type: String },
    nama    : { type: String },
  },
  { collection: "sysRekening", versionKey: false }
);

const rekening = mongoose.model("sysRekening", Rekening);
module.exports = rekening;