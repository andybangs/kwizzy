var express = require('express');
var router = express.Router();
var managerCtrl = require('../controllers/manager');

router.get('/', managerCtrl.manager);
router.get('/new', managerCtrl.newGame);
router.get('/:game', managerCtrl.editGame);

module.exports = router;
