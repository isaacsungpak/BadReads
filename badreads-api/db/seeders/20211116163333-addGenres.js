'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Genres', [
     {
     name: ' Biography',
     createdAt: new Date(),
     updatedAt: new Date()   
    },
     {
     name: 'Romance',
     createdAt: new Date(),
     updatedAt: new Date()   
    },
     {
     name: 'Fantasy',
     createdAt: new Date(),
     updatedAt: new Date()   
    },
     {
     name: 'Adult',
     createdAt: new Date(),
     updatedAt: new Date()   
    },
     {
     name: 'Horror',
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
   return queryInterface.bulkDelete('Genres', null, {});
  }
};
