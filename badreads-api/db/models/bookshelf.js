'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Bookshelf.associate = function(models) {
    // associations can be defined here
    Bookshelf.belongsTo(models.User, { foreignKey: 'userId' });
    
    const columnMap = {
      through: 'BooksOnBookshelf',
      otherKey: 'bookId',
      foreignKey: 'bookshelfId'
    }

    Bookshelf.belongsToMany(models.Book, columnMap)
  };
  return Bookshelf;
};