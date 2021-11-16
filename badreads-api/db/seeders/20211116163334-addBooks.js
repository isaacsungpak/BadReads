'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Books', [{
     title: 'test book',
     authorId: 1,
     genreId: 1,
     coverPhoto: 'https://images-na.ssl-images-amazon.com/images/I/318nujF5v5L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
     createdAt: new Date(),
     updatedAt: new Date()
   }], {});
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
