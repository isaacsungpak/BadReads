'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  }, {});
  Genre.associate = function (models) {
    Genre.hasMany(models.Book, { foreignKey: 'genreId' });
  };
  return Genre;
};