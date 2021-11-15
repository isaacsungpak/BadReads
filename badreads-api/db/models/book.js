'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    coverPhoto: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {});
  Book.associate = function (models) {
    Book.belongsTo(models.Author, { foreignKey: 'bookId' });
    Book.belongsTo(models.Genre, { foreignKey: 'genreId' });
    const columnMap = {
      through: 'BooksOnBookshelf',
      foreignKey: 'bookId',
      otherKey: 'bookshelfId'
    }

    Book.belongsToMany(models.Bookshelf, columnMap)
  };
  return Book;
};