var express = require('express');
var router = express.Router();

var models = require("../models");

router.get('/', function(req, res, next){
  models.User.findAll().then(function(bs){
    res.json(bs);
  });
});

router.get('/:name', function(req, res, next){
  models.Booking.findAll({
    include: [{
      model: models.User,
      where: {id: models.Sequelize.col('Booking.UserId'),
              name: req.params.name }
    }]
  }).then(function(bookings){
    res.json(bookings);
  })
});

router.get('/create/:name/:email', function(req, res, next){
  models.User.create({
    name: req.params.name,
    email: req.params.email
  }).then(function(user){
    res.json(user);
  });
});
module.exports = router
