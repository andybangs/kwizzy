module.exports.homelist = function homelist(req, res, next) {
  res.render('browser', {
    pageHeader: 'Featured Games',
    tableHeaders: ['Game', 'User', 'Created'],
    authed: true,
    games: [
      {
        title: 'Literary Novels',
        description: 'Match the title to the author',
        user: 'andybangs',
        url: 'literary-novels',
        created: 'Apr. 12, 2016',
        alphabetical: false,
        suddenDeath: false,
        studyMode: true,
        timerSeconds: 150,
        data: [
          ['Pride and Prejudice', 'Jane Austen'],
          ['1984', 'George Orwell'],
          ['The Great Gatsby', 'F. Scott Fitzgerald'],
          ['Jane Eyre', 'Charlotte Brontë'],
          ['Crime and Punishment', 'Fyodor Dostoyevsky'],
          ['Wuthering Heights', 'Emily Brontë'],
          ['Lolita', 'Vladimir Nabokov'],
          ['The Adventures of Huckleberry Finn', 'Mark Twain'],
          ['Of Mice and Men', 'John Steinbeck'],
          ['The Count of Monte Cristo', 'Alexandre Dumas'],
          ['Brave New World', 'Aldous Huxley'],
          ['One Hundred Years of Solitude', 'Gabriel Garcí­a Márquez']
        ]
      },
      {
        title: 'TV Characters',
        description: 'Match characters featured in the same show',
        url: 'tv-characters',
        user: 'andybangs',
        created: 'Mar. 14, 2016',
        alphabetical: false,
        suddenDeath: true,
        studyMode: false,
        timerSeconds: 240,
        data: [
          ['Daenerys Targaryen', 'Jon Snow', 'Tyrion Lannister'],
          ['Rory Gilmore', 'Lane Kim', 'Paris Geller'],
          ['Don Draper', 'Peggy Olson', 'Roger Sterling'],
          ['Rick Grimes', 'Daryl Dixon', 'Maggie Greene'],
          ['Kara Thrace', 'Gaius Baltar', 'Laura Roslin'],
          ['Jack Shephard', 'Kate Austen', 'Ben Linus'],
          ['Michael Bluth', 'Tobias Fünke', 'Steve Holt']
        ]
      }
    ]
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
