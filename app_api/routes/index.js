var express = require('express');
var router = express.Router();
var ctrlGames = require('../controllers/games');

router.get('/games', ctrlGames.gamesList);
router.post('/games', ctrlGames.gamesCreate);
router.get('/games/:gameid', ctrlGames.gamesReadOne);
router.put('/games/:gameid', ctrlGames.gamesUpdateOne);
router.delete('/games/:gameid', ctrlGames.gamesDeleteOne);

module.exports = router;
