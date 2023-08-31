const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const KabkoSchema = new Schema({
//     nama : {type: String},
//     foto : {type: String},
//     web  : {type: String},
// });

const Opd = new Schema(
  {
    kode          : { type: String },
    nama          : { type: String },
    aktif         : { type: Boolean },
    ttd           : {
          lokasi  : { type: String },
          an      : { type: String },
          nama    : { type: String },
          pangkat : { type: String },
          nip     : { type: String },
          foto    : { type: String },
                    },
  },
  { collection: "sysOpd", versionKey: false }
);

const sysOpd = mongoose.model("sysOpd", Opd);
module.exports = sysOpd;
