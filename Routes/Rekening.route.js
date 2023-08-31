const express = require('express');
const router = express.Router({mergeParams: true});


const RekeningController = require('../Controllers/Rekening.Controller');

router.get('/',         RekeningController.getAllRekening);
router.get('/:id',      RekeningController.findRekeningById);
router.post('/',        RekeningController.createNewRekening);
router.patch('/:id',    RekeningController.updateRekeningById);
router.delete('/:id',   RekeningController.deleteRekeningById);

module.exports = router;