const express = require('express');
const router = express.Router({mergeParams: true});


const Apbd = require('../Controllers/SummaryData.Controller');

router.get('/',         Apbd.getAllApbd);
router.get('/:id',      Apbd.findApbdById);
router.post('/',        Apbd.createNewApbd);
router.patch('/:id',    Apbd.updateApbdById);
router.delete('/:id',   Apbd.deleteApbdById);

module.exports = router;