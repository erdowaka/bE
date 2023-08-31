const express = require('express');
const router = express.Router({mergeParams: true});


const ApbdTargetController = require('../Controllers/ApbdTarget.Controller');

router.get('/',         ApbdTargetController.getAllApbd);
router.get('/:id',      ApbdTargetController.findApbdById);
router.post('/',        ApbdTargetController.createNewApbd);
router.patch('/:id',    ApbdTargetController.updateApbdById);
router.delete('/:id',   ApbdTargetController.deleteApbdById);

module.exports = router;