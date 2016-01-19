var express = require('express');
var router = express.Router();

var models = require("../models");

/* GET all bookings as json. */
router.get('/', function(req, res, next) {
  models.Booking.findAll().then(function(bookings){
    res.json(bookings);
  })
});

module.exports = router;
