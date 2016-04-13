var express = require('express');
var router = express.Router();
var indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.homelist);
router.get('/signup', indexCtrl.signup);
router.get('/login', indexCtrl.login);

module.exports = router;
