const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const KabkoSchema = new Schema({
//     nama : {type: String},
//     foto : {type: String},
//     web  : {type: String},
// });

const PerubahanAnggaran = new Schema(
  {
    tahun    : { type: String },
    bulan    : { type: String },
    tahap    : { type: String },
    aktif    : { type: Boolean },
    tanggal  : { type: String },
    created  : { type: Date },
    updated  : { type: Date},
    
  },
  { collection: "sysPerubahanAnggaran", versionKey: false }
);

const sysAnggaran = mongoose.model("sysPerubahanAnggaran", PerubahanAnggaran);
module.exports = sysAnggaran;