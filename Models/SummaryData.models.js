
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
    opd             : {type: String},
    general         : {type: Schema.Types.ObjectId},
    kegiatan         : {type: Schema.Types.ObjectId},
    belanja         : {type: Schema.Types.ObjectId},
    created         : {type: Date},
    updated         : {type: Date}
  },
  { collection      : "sysSummaryData", versionKey      : false }
);

const data = mongoose.model("sysSummary", ApbdSchema);
module.exports = data;
