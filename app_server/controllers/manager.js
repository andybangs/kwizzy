module.exports.manager = function manager(req, res, next) {
  res.render('manager', {
    pageHeader: 'Game Manager',
    tableHeaders: ['Game', 'Created', ' '],
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

module.exports.newGame = function newGame(req, res, next) {
  res.render('editGame', {
    title: '',
    description: '',
    user: 'andybangs',
    url: 'new',
    created: '',
    alphabetical: false,
    suddenDeath: false,
    studyMode: false,
    timerSeconds: 300,
    data: [
      []
    ]
  });
}

module.exports.editGame = function editGame(req, res, next) {
  res.render('editGame', {
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
  });
}

module.exports.editData = function editGame(req, res, next) {
  res.render('editData', {
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
  });
}
