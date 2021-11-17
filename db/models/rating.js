'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Rating.associate = function (models) {
    Rating.belongsTo(models.User, {foreignKey: 'userId'})
    Rating.belongsTo(models.Book, {foreignKey: 'bookId'})

  };
  return Rating;
};
