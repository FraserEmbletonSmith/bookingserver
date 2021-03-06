var express = require('express');
var router = express.Router();

var models = require("../models");

/* GET all bookings as json. */
router.get('/', function(req, res, next) {
  models.Booking.findAll().then(function(bookings){
    res.json(bookings);
  });
});

router.get('/:name', function(req, res, next){
  models.Booking.findAll({
    where: {
      name: req.params.name
    }
  }).then(function(b){
    res.json(b);
  });
});

router.post('/book', function(req, res, next){
  var user = models.User.findAll(
    {where:{
    email: req.body.email
  }
});

  models.Booking.create({
    name: req.body.name,
    userId: user.id
  }).then(function(b){
    res.json(b);
  })
});

module.exports = router;
