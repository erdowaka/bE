const express = require('express');
const router = express.Router();

const PerubahanAnggaran = require('../Models/PerubahanAnggaran.models');
router.get('/',async (req, res, next) => {
    try {
        const results = await PerubahanAnggaran.find({}).lean()
        res.send(results)
    } catch (error) {
        console.log(error.message);
        
    }
    // res.send('getting a list of all kabko');
});
router.post('/',(req, res, next) => {
    res.send('user created');
});

router.get('/:id',(req, res, next) => {
    res.send('user list berdasarkan id');
});

router.patch('/:id',(req, res, next) => {
    res.send('user update');
});

router.delete('/:id',(req, res, next) => {
    res.send('user delete');
});

module.exports = router;