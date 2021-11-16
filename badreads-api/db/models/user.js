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
  User.associate = function (models) {
    const columnMap1 = {
      through: 'Review',
      otherKey: 'bookId',
      foreignKey: 'userId'
    }
    User.belongsToMany(models.Book, columnMap1);

    const columnMap2 = {
      through: 'Rating',
      otherKey: 'bookId',
      foreignKey: 'userId'
    }
    User.belongsToMany(models.Book, columnMap2);
  };
  return User;
};
