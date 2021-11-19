'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Ratings', [
      {
        value: 3,
        userId: 1,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 1,
        bookId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 1,
        bookId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 1,
        bookId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 1,
        bookId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1,
        userId: 1,
        bookId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 1,
        bookId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 1,
        bookId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 1,
        bookId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 1,
        bookId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1,
        userId: 1,
        bookId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 1,
        bookId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 1,
        bookId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 1,
        bookId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 1,
        bookId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 2,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 2,
        bookId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 2,
        bookId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 2,
        bookId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 2,
        bookId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1,
        userId: 2,
        bookId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 2,
        bookId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 2,
        bookId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 2,
        bookId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 2,
        bookId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1,
        userId: 2,
        bookId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 2,
        bookId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 2,
        bookId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 2,
        bookId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 2,
        bookId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 3,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 3,
        bookId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 3,
        bookId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 3,
        bookId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 3,
        bookId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1,
        userId: 3,
        bookId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 3,
        bookId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 3,
        bookId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 3,
        bookId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 3,
        bookId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1,
        userId: 3,
        bookId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 3,
        bookId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 3,
        bookId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 3,
        bookId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 3,
        bookId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 4,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 4,
        bookId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 4,
        bookId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 4,
        bookId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 4,
        bookId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1,
        userId: 4,
        bookId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 4,
        bookId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 4,
        bookId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 4,
        bookId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 4,
        bookId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1,
        userId: 4,
        bookId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 4,
        bookId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 4,
        bookId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 4,
        bookId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 4,
        bookId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 5,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 5,
        bookId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 5,
        bookId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 5,
        bookId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 5,
        bookId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1,
        userId: 5,
        bookId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 5,
        bookId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 5,
        bookId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 5,
        bookId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 5,
        bookId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1,
        userId: 5,
        bookId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 2,
        userId: 5,
        bookId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3,
        userId: 5,
        bookId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 4,
        userId: 5,
        bookId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 5,
        userId: 5,
        bookId: 15,
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
    return queryInterface.bulkDelete('Ratings', null, {});
  }
};
