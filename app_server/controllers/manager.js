module.exports.manager = function manager(req, res, next) {
  res.render('manager', {
    pageHeader: 'Game Manager',
    tableHeaders: ['Game', 'Created', ' '],
    games: [
      {
        title: 'Literary Novels',
        url: 'literary-novels',
        user: 'andybangs',
        created: 'Apr. 12, 2016'
      },
      {
        title: '80s Songs',
        url: '80s-songs',
        user: 'andybangs',
        created: 'Jan. 02, 2016'
      }
    ]
  });
}

module.exports.newGame = function newGame(req, res, next) {
  res.render('index', { title: 'New Game' });
}

module.exports.editGame = function editGame(req, res, next) {
  res.render('index', { title: 'Edit Game' });
}
