'use strict';
module.exports = (sequelize, DataTypes) => {
  var Destination = sequelize.define('Destination', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    city: DataTypes.STRING,
    description: DataTypes.TEXT,
    maps: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Destination.associate = function(models) {
      Destination.hasMany(models.Guide)
  };
  return Destination
};
