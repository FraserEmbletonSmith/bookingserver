'use strict';
module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define('Booking', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Booking.hasOne(models.User);
      }
    }
  });
  return Booking;
};
