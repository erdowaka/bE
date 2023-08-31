const express = require('express');
const router = express.Router();
const opd = require('../Models/Opd.models');


router.get('/',async (req, res, next) => {
    try {
        const results = await opd.find({}).lean()
        res.send(results)
    } catch (error) {
        console.log(error.message);
        
    }
    // res.send('getting a list of all kabko');
});

router.post('/',(req, res, next) => {
    res.send('opd created');
});

router.get('/:id',(req, res, next) => {
    res.send('opd list berdasarkan id');
});

router.patch('/:id',(req, res, next) => {
    res.send('opd update');
});

router.delete('/:id',(req, res, next) => {
    res.send('opd delete');
});

module.exports = router;