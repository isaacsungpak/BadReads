'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkInsert('Users', [
       {
       username: 'testUser',
       firstName: 'firstName',
       lastName: 'lastName',
       emailAddress: 'test@email.com',
       hashedPassword: 'hashedPassword',
       createdAt: new Date(),
       updatedAt: new Date()
     },
       {
       username: 'maresalt',
       firstName: 'Sharon',
       lastName: 'Louis',
       emailAddress: 'maresalt@mail.com',
       hashedPassword: 'password1A!',
       createdAt: new Date(),
       updatedAt: new Date()
     },
       {
       username: 'feemile',
       firstName: 'Jessica',
       lastName: 'Nicoletta',
       emailAddress: 'feemile@mail.com',
       hashedPassword: 'password1A!',
       createdAt: new Date(),
       updatedAt: new Date()
     },
       {
       username: 'highrain',
       firstName: 'firstName',
       lastName: 'lastName',
       emailAddress: 'highrain@mail.com',
       hashedPassword: 'password1A!',
       createdAt: new Date(),
       updatedAt: new Date()
     },
       {
       username: 'nosytropical',
       firstName: 'Barker',
       lastName: 'Humphrey',
       emailAddress: 'nosytropical@gmail.com',
       hashedPassword: 'password1A!',
       createdAt: new Date(),
       updatedAt: new Date()
     },
       {
       username: 'moreoverrolls',
       firstName: 'Fred',
       lastName: 'Jennings',
       emailAddress: 'moreoverrolls@gmail.com',
       hashedPassword: 'password1A!',
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
   return queryInterface.bulkDelete('Users', null, {});
  }
};
