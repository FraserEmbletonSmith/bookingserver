"use strict";

module.exports = function(sequelize, DataTypes){
  var Booking = sequelize.define("Booking", {
    name: DataTypes.STRING
  });
  return Booking;
};
