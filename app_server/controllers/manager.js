var request = require('request');
var apiOptions = {server : 'http://localhost:3000'};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://fathomless-brook-32755.herokuapp.com/';
}

function renderEditGame(req, res, responseBody) {
  res.render('editGame', responseBody);
}

function renderEditData(req, res, responseBody) {
  res.render('editData', responseBody);
}

module.exports.newGame = function newGame(req, res) {
  renderEditGame(req, res, {
    title: '',
    description: '',
    user: 'andybangs',
    alphabetical: false,
    suddenDeath: false,
    studyMode: false,
    timerSeconds: 300,
    data: [
      []
    ]
  });
}

module.exports.doAddGame = function doAddGame(req, res) {
  var path = '/api/games';

  var postdata = {
    title: req.body.title,
    description: req.body.description,
    alphabetical: req.body.alphabetical ? true : false,
    suddenDeath: req.body.suddenDeath ? true : false,
    studyMode: req.body.studyMode ? true : false,
  };

  var requestOptions = {
    url: apiOptions.server + path,
    method: 'POST',
    json: postdata
  };

  if (!postdata.title) {
    res.redirect('/manager/new/game');
  } else {
    request(
      requestOptions,
      function(err, response, body) {
        if (response.statusCode === 201) {
          res.redirect('/');
        } else {
          console.log(body);
        }
      }
    );
  }
}

module.exports.newData = function newData(req, res) {
  renderEditData(req, res, {
    title: '',
    description: '',
    user: 'andybangs',
    alphabetical: false,
    suddenDeath: false,
    studyMode: false,
    timerSeconds: 300,
    data: [
      []
    ]
  });
}

module.exports.editGame = function editGame(req, res) {
  var path = '/api/games/' + req.params.gameid;
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };

  request(requestOptions, function(err, response, body) {
    renderEditGame(req, res, body);
  });
}

module.exports.editData = function editGame(req, res) {
  var path = '/api/games/' + req.params.gameid;
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };

  request(requestOptions, function(err, response, body) {
    renderEditData(req, res, body);
  });
}

module.exports.doEditGame = function(req, res){
  var path = '/api/games/' + req.params.gameid;

  var postdata = {
    title: req.body.title,
    description: req.body.description,
    alphabetical: req.body.alphabetical ? true : false,
    suddenDeath: req.body.suddenDeath ? true : false,
    studyMode: req.body.studyMode ? true : false
  };

  var requestOptions = {
    url: apiOptions.server + path,
    method: 'POST',
    json: postdata
  };

  if (!postdata.title) {
    res.redirect('/manager/' + req.params.gameid + '/game');
  } else {
    request(
      requestOptions,
      function(err, response, body) {
        if (response.statusCode === 200) {
          res.redirect('/');
        } else {
          console.log(response.statusCode);
        }
      }
    );
  }
};
