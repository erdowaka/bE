const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const KabkoSchema = new Schema({
//     nama : {type: String},
//     foto : {type: String},
//     web  : {type: String},
// });

const User = new Schema(
  {
    nik     : String ,
    nip     : String ,
    username: String ,
    password: String ,
    nama    : String ,
    gender  : String ,
    level   : [{String}],
    opd     : {
                setda: {type: Boolean},
            },
    aktif   : {type: Boolean},
    created : {type: Date},
    update  : {type: Date},
    contact : {
                email:{type: String},
                whatsapp : {type: String},
                telegram : {type: String},
            }
  },
  { collection: "sysUser", versionKey: false }
);

const sysUser = mongoose.model("sysUser", User);
module.exports = sysUser;