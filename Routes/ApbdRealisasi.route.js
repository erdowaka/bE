const express = require('express');
const router = express.Router({mergeParams: true});


const ApbdRealisasiController = require('../Controllers/ApbdRealisasi.Controller');

router.get('/', ApbdRealisasiController.getAllApbd);
router.get('/:id',ApbdRealisasiController.findApbdById);
router.post('/',ApbdRealisasiController.createNewApbd);
router.patch('/:id',ApbdRealisasiController.updateApbdById);
router.delete('/:id',ApbdRealisasiController.deleteApbdById);

module.exports = router;