'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {});
  Author.associate = function(models) {
    Author.hasMany(models.Book, { foreignKey: 'authorId' });
  };
  return Author;
};