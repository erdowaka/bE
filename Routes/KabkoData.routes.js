const express = require('express');
const router = express.Router();

const KabkotaData = require('../Models/KabkoData.models');


router.get('/',async (req, res, next) => {
    try {
        const results = await KabkotaData.find({},null,{limit : 1000}).lean()
        res.send(results)
    } catch (error) {
        console.log(error.message);
        
    }
    // res.send('getting a list of all kabko');
});

router.post('/',async (req, res, next) => {

    try {
        const Kabko = new Kabkota(req.body);
        const result = await Kabko.save();
        res.send(result)
        
    } catch (error) {
        console.log(error.message);
    }
    

    // console.log(req.body);
    // const kabko = new Kabko({
    //     // _id: req.body.randomUUID(),
    //     nama: req.body.nama,
    //     foto: req.body.foto,
    //     web: req.body.web
    // })
    // kabko.save()
    //     .then(result => {
    //         console.log(result);
    //         res.send(result);
    //     })
    //     .catch(err => {
    //         console.log(err.message);
    //     });
    
});

router.get('/:id',(req, res, next) => {
    res.send('kabko list berdasarkan id');
});

router.patch('/:id',(req, res, next) => {
    res.send('kabko update');
});

router.delete('/:id',(req, res, next) => {
    res.send('kabko delete');
});

module.exports = router;