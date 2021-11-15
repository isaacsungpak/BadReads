'use strict';
module.exports = (sequelize, DataTypes) => {
  const BooksOnBookshelf = sequelize.define('BooksOnBookshelf', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookshelfId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  BooksOnBookshelf.associate = function(models) {
    // associations can be defined here
  };
  return BooksOnBookshelf;
};