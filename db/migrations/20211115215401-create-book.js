'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      authorId: {
        allowNull: false,
        references: {model : "Authors" },
        type: Sequelize.INTEGER
      },
      summary: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      genreId: {
        allowNull: false,
        references: {model : "Genres" },
        type: Sequelize.INTEGER
      },
      coverPhoto: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};
