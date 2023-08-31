// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/monev3',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(()=>{
//         console.log('database connection established');
// })

// const User = require('./Routes/User.route');
// const Opd = require('./Routes/Opd.route');
// const Kabko = require('./Routes/Kabko.route');
// const OpdTahun = require('./Routes/OpdTahun.route');
// const OpdSetda = require('./Routes/OpdSetdaTahun.route');
// const Apbd = require('./Routes/Apbd.route');
// const KabkoData = require('./Routes/KabkoData.routes');
// const PerubahanAnggaran = require('./Routes/PerubahanAngaran.route');
// const Rekening = require('./Routes/Rekening.route');



// app.use('/user', User);
// app.use('/opd', Opd);
// app.use('/opdtahun', OpdTahun);
// app.use('/opdsetdatahun', OpdSetda);
// app.use('/apbd',    Apbd);
// app.use('/kabko',   Kabko);
// app.use('/kabkodata', KabkoData);
// app.use('/anggaran', PerubahanAnggaran);
// app.use('/rekening', Rekening);



// app.all('/', (req, res) => {});

// app.use((req,res,next)=>{
//     const err = new Error("Not Found");
//     err.status = 404;
//     next(err);
// });

// //error handling
// const errorHandler = (err, req, res, next) => {
//     res.status(err.status || 500);
//     res.send({
//         error: {
//             status: err.status || 500,
//             message: err.message
//         }
//     });
// };

// app.use(errorHandler);
// // app.use((err, req, res, next)=>{
// //     res.status(err.status|| 500);
// //     res.send({
// //         error: {
// //             status : err.status || 500,
// //             message: err.message
// //         }
// //     })
// // });

// app.listen(5252,()=>{
//     console.log('listening on 5252');
// });
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('database connection established');
}).catch((err) => {
  console.error('database connection error:', err);
})

for (const [routeName, routePath] of Object.entries(config.routes)) {
  const route = require(routePath);
  app.use('/api/v1/' + routeName, route);
}

app.all('/api/v1/', (req, res) => {});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(bodyParser.json());
//error handling
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      }
    });
  };
  
  app.use(errorHandler);
  
  app.listen(config.port, () => {
    console.log('listening on ' + config.port);
  });
  