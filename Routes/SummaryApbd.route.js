const express = require('express');
const router = express.Router({mergeParams: true});

const Apbd = require('../Controllers/SummaryApbd.Controller');

router.get('/',         Apbd.getAllSummary);
router.get('/:id',      Apbd.findSummaryById);
router.post('/',        Apbd.createNewSummary);
router.patch('/:id',    Apbd.updateSummaryById);
router.delete('/:id',   Apbd.deleteSummaryById);

module.exports = router;