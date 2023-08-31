
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
    urusan          : {type: String}, 
    program         : {type: String},
    opd             : { setda   : {type: Boolean},
                        dopd    : {type: String}
                      },
    pa              : {type: String},
    dak             : { status  : {type: Boolean},
                        jenis   : {type: String}
                      },
    keg             : {type: String},
    subkeg          : {type: String},
    belanja         : {type: String},
    nilaibelanja    : {type: String},
    rincianbelanja  : [{ type: Schema.Types.ObjectId}],
    // rincianbelanja  : [
    //                     {
    //                         urut        : {type: String},
    //                         uraian      : {type: String},
    //                         spesifikasi : {type: String},
    //                         koefisien   : {type: String},
    //                         satuan      : {type: String},
    //                         harga       : {type: String},
    //                         volume      : {type: String},
    //                         jumlah      : {type: String}
    //                     }
    // ],
    created         : {type: Date},
    updated         : {type: Date}
  },
  { collection      : "sysApbd", versionKey      : false }
);

const Apbd = mongoose.model("sysApbd", ApbdSchema);
module.exports = Apbd;
