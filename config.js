const dotenv = require('dotenv').config()
const PORT = process.env.PORT
module.exports = {
    port: PORT,
    dbConnectionString: process.env.MONGODB_URI,
    routes: {
      user: './Routes/User.route',
      opd: './Routes/Opd.route',
      kabko: './Routes/Kabko.route',
      opdTahun: './Routes/OpdTahun.route',
      opdSetda: './Routes/OpdSetdaTahun.route',
      apbd: './Routes/Apbd.route',
      apbdrealisasi: './Routes/ApbdRealisasi.route',
      apbdtarget: './Routes/ApbdTarget.route',
      summaryapbd: './Routes/SummaryApbd.route',
      summarydata: './Routes/SummaryData.route',
      kabkoData: './Routes/KabkoData.routes',
      perubahanAnggaran: './Routes/PerubahanAngaran.route',
      rekening: './Routes/Rekening.route'
    }
}
