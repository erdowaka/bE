
const express = require('express');
const router = express.Router({mergeParams: true});


const ApbdSp2dController = require('../Controllers/ApbdSp2d.Controller');

router.get('/',         ApbdSp2dController.getAllApbd);
router.get('/:id',      ApbdSp2dController.findApbdById);
router.post('/',        ApbdSp2dController.createNewApbd);
router.patch('/:id',    ApbdSp2dController.updateApbdById);
router.delete('/:id',   ApbdSp2dController.deleteApbdById);

module.exports = router;