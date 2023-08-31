const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const KabkoSchema = new Schema({
//     nama : {type: String},
//     foto : {type: String},
//     web  : {type: String},
// });

const Opd = new Schema(
  {
    kode      : { type: String },
    nama      : { type: String },
    tahun     : { type: Date },
    ttd       : {
          lokasi  : { type: String },
          an      : { type: String },
          nama    : { type: String },
          pangkat : { type: String },
          nip     : { type: String },
          foto    : { type: String },
      },
  },
  { collection: "sysOpdTahun", 
    versionKey: false 
  }
);

const sysOpdTahun = mongoose.model("sysOpdTahun", Opd);
module.exports = sysOpdTahun;