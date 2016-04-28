var request = require('request');
var apiOptions = {server : 'http://localhost:3000'};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://fathomless-brook-32755.herokuapp.com/';
}

function renderHomelist(req, res, responseBody) {
  var message;

  if (!(responseBody instanceof Array)) {
    message = 'API lookup error';
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = 'No games found';
    }
  }

  res.render('browser', {
    pageHeader: 'Featured Games',
    tableHeaders: ['Game', 'User', 'Created'],
    authed: true,
    games: responseBody,
    message: message
  });
}

function renderManagerlist(req, res, responseBody) {
  var message;

  if (!(responseBody instanceof Array)) {
    message = 'API lookup error';
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = 'No games found';
    }
  }

  res.render('manager', {
    pageHeader: 'Game Manager',
    tableHeaders: ['Game', 'Created', ' '],
    authed: true,
    games: responseBody,
    message: message
  });
}

module.exports.homelist = function homelist(req, res) {
  var path = '/api/games';
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };

  request(requestOptions, function(err, response, body) {
    renderHomelist(req, res, body);
  });
}

module.exports.managerlist = function managerlist(req, res) {
  var path = '/api/games';
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };

  request(requestOptions, function(err, response, body) {
    renderManagerlist(req, res, body);
  });
}

module.exports.signup = function signup(req, res, next) {
  res.render('auth', {
    header: 'Join kwizzy today.',
    action: 'Sign up',
    secondaryHeader: 'Already have an account?',
    secondaryAction: 'Login',
    secondaryUrl: 'login'
  });
}

module.exports.login = function login(req, res, next) {
  res.render('auth', {
    header: 'Login',
    action: 'Login',
    secondaryHeader: 'New to kwizzy?',
    secondaryAction: 'Sign up',
    secondaryUrl: 'signup'
  });
}
