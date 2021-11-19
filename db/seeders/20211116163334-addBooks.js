'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Books', [
      {
        title: 'First Step 2 Forever',
        authorId: 1,
        genreId: 1,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1281579549i/8752457.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'A Shore Thing',
        authorId: 2,
        genreId: 2,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1294516860i/10031701.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Miles to Go',
        authorId: 3,
        genreId: 1,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442105085i/6263078.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Confessions of an Heiress',
        authorId: 4,
        genreId: 1,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348567636i/87564.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Your Heiress Diary: Confess it All to Me',
        authorId: 4,
        genreId: 1,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1326911611i/965672.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Twilight',
        authorId: 5,
        genreId: 3,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361039443i/41865.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'New Moon',
        authorId: 5,
        genreId: 3,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630592760i/49041.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Breaking Dawn',
        authorId: 5,
        genreId: 3,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361039438i/1162543.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Eclipse',
        authorId: 5,
        genreId: 3,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361038355i/428263.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fifty Shades of Grey',
        authorId: 6,
        genreId: 4,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327189927i/11477648.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'We Got Zombies On The Lawn Again, Ma',
        authorId: 7,
        genreId: 5,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1440691001i/20578084.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Kissing the Coronavirus',
        authorId: 8,
        genreId: 4,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595188074i/54594933.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Second Wave',
        authorId: 8,
        genreId: 4,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607530823i/56232253.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Kardashian Konfidential',
        authorId: 9,
        genreId: 1,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1440170543i/8472837.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hooking Up With Tila Tequila',
        authorId: 10,
        genreId: 1,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347572785i/4347036.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Da Vinci Code',
        authorId: 11,
        genreId: 6,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'American Prince',
        authorId: 12,
        genreId: 2,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1487883111i/32734331.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Impervious',
        authorId: 13,
        genreId: 3,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1394036728i/20986914.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dianetics: The Modern Science of Mental Health',
        authorId: 14,
        genreId: 7,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1298460184i/179166.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Handbook for Mortals',
        authorId: 15,
        genreId: 3,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1501565762i/35800325.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Behind the Bell',
        authorId: 16,
        genreId: 1,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1349057755i/6684320.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'iDrakula',
        authorId: 17,
        genreId: 5,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320992735i/7724969.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Books', null, {});
  }
};
