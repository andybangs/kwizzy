module.exports.homelist = function homelist(req, res, next) {
  res.render('homelist', {
    pageHeader: 'Featured Games',
    tableHeaders: ['Game', 'User', 'Created'],
    games: [
      {
        title: 'Literary Novels',
        url: 'literary-novels',
        user: 'andybangs',
        created: 'Apr. 12, 2016'
      },
      {
        title: 'TV Show Characters',
        url: 'tv-show-characters',
        user: 'charbangs',
        created: 'Mar. 14, 2016'
      },
      {
        title: 'States and Capitals',
        url: 'states-and-capitals',
        user: 'bmoney',
        created: 'Mar. 09, 2016'
      },
      {
        title: '80s Songs',
        url: '80s-songs',
        user: 'andybangs',
        created: 'Jan. 02, 2016'
      }
    ],
    authed: true
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
