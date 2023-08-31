const express = require('express');
const router = express.Router({mergeParams: true});


const ApbdController = require('../Controllers/Apbd.Controller');

router.get('/', ApbdController.getAllApbd);
router.get('/:id',ApbdController.findApbdById);
router.post('/',ApbdController.createNewApbd);
router.patch('/:id',ApbdController.updateApbdById);
router.delete('/:id',ApbdController.deleteApbdById);

module.exports = router;