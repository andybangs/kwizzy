var express = require('express');
var router = express.Router();
var indexCtrl = require('../controllers/index');
var managerCtrl = require('../controllers/manager');

router.get('/', indexCtrl.managerlist);

router.get('/new/game', managerCtrl.newGame);
router.post('/new/game', managerCtrl.doAddGame);
router.get('/new/data', managerCtrl.newData);

router.get('/:gameid/game', managerCtrl.editGame);
router.post('/:gameid/game', managerCtrl.doEditGame);
router.get('/:gameid/data', managerCtrl.editData);

module.exports = router;
