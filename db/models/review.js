'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewHeader: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    reviewBody: {
      type: DataTypes.TEXT,
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
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};