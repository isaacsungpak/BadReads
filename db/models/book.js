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
    Book.belongsTo(models.Author, { foreignKey: 'authorId' });
    Book.belongsTo(models.Genre, { foreignKey: 'genreId' });
    const columnMap = {
      through: 'BooksOnBookshelf',
      foreignKey: 'bookId',
      otherKey: 'bookshelfId'
    }

    Book.belongsToMany(models.Bookshelf, columnMap)
    const columnMap1 = {
      through: 'Review',
      otherKey: 'userId',
      foreignKey: 'bookId',
      as: 'bookReviews'
    }
    Book.belongsToMany(models.User, columnMap1);
    const columnMap2 = {
      through: 'Rating',
      otherKey: 'userId',
      foreignKey: 'bookId',
      as: 'bookRatings'
    }
    Book.belongsToMany(models.User, columnMap2);
    Book.hasMany(models.Review, {foreignKey: 'bookId'});
    Book.hasMany(models.Rating, {foreignKey: 'bookId'});
  };
  return Book;
};
