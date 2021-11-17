'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    hashedPassword: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    emailAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {});
  // query includes {model:book, as:userReviews}
  User.associate = function (models) {
    const columnMap1 = {
      through: 'Review',
      otherKey: 'bookId',
      foreignKey: 'userId',
      as: 'userReviews'
    }
    User.belongsToMany(models.Book, columnMap1);

    const columnMap2 = {
      through: 'Rating',
      otherKey: 'bookId',
      foreignKey: 'userId',
      as: 'userRatings'
    }
    User.belongsToMany(models.Book, columnMap2);
    User.hasMany(models.Review, {foreignKey: 'userId'})
    User.hasMany(models.Rating, {foreignKey: 'userId'})
  };
  return User;
};
