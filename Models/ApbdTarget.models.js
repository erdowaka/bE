
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
    perubahan       : {type: String},
    subKeg          : {type: String}, 
    paguSubKeg      : {type: String},
    belanja         : {type: String},
    nilai           : {type: String},
    target          : { aliranKas  : {type: String},
                        aliranKasSd: {type: String},
                        fisik      : {type: String}
                      },
    created         : {type: Date},
    updated         : {type: Date}
  },
  { collection      : "sysApbdTarget", versionKey      : false }
);

const Apbd = mongoose.model("sysApbdTarget", ApbdSchema);
module.exports = Apbd;
