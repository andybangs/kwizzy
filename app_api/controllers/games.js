var mongoose = require('mongoose');
var Game = mongoose.model('Game');

function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
};

function buildData(dataArr) {
  return dataArr.split(',')
}

module.exports.gamesList = function (req, res) {
  Game
    .find()
    .exec(function(err, games) {
      if (!games) {
        sendJSONresponse(res, 404, {"message": "no games found"});
        return;
      } else if (err) {
        console.log(err);
        sendJSONresponse(res, 404, err);
        return;
      }
      console.log(games);
      sendJSONresponse(res, 200, games);
    })
};

module.exports.gamesCreate = function(req, res) {
  Game.create({
    title: req.body.title,
    description: req.body.description,
    user: req.body.user,
    alphabetical: req.body.alphabetical,
    suddenDeath: req.body.suddenDeath,
    studyMode: req.body.studyMode,
    created: Date.now(),
    data: req.body.data ? buildData(req.body.data) : []
  }, function(err, game) {
    if (err) {
      console.log(err);
      sendJSONresponse(res, 400, err);
    } else {
      console.log(game);
      sendJSONresponse(res, 201, game);
    }
  });
};

module.exports.gamesReadOne = function (req, res) {
  if (req.params && req.params.gameid) {
    Game
      .findById(req.params.gameid)
      .exec(function(err, game) {
        if (!game) {
          sendJSONresponse(res, 404, {"message": "gameid not found"});
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(game);
        sendJSONresponse(res, 200, game);
      })
  } else {
    console.log('No gameid specified');
    sendJSONresponse(res, 404, {"message": "No gameid in request"});
  }
};

module.exports.gamesUpdateOne = function(req, res) {
  if (!req.params.gameid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, gameid is required"
    });
    return;
  }
  Game
    .findById(req.params.gameid)
    .select('-user -data')
    .exec(
      function(err, game) {
        if (!game) {
          sendJSONresponse(res, 404, {
            "message": "gameid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
        game.title = req.body.title;
        game.description = req.body.description;
        game.alphabetical = req.body.alphabetical;
        game.suddenDeath = req.body.suddenDeath;
        game.studyMode = req.body.studyMode;
        // game.data = buildData(req.body.data);

        game.save(function(err, game) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, game);
          }
        });
      }
  );
};

module.exports.gamesDeleteOne = function(req, res) {
  var gameid = req.params.gameid;
  if (gameid) {
    Game
      .findByIdAndRemove(gameid)
      .exec(
        function(err, game) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("Game id " + gameid + " deleted");
          sendJSONresponse(res, 204, null);
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "No gameid"
    });
  }
};
