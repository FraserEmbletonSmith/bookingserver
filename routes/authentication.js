var express = require('express');
var config = require('../config/config.json')['development']
var router = express.Router();
var models = require('../models');
var User = models.User
var jwt = require('jsonwebtoken')

router.post('/login', function(req, res, next){
  User.findOne({
    where: {
      email: req.body.username
    }
  }).then(function(user){
      if (user.password!=req.body.password){
        res.json({error: "Authentication failed. Wrong password provided."});
      } else {
      var tkn = jwt.sign(user.get(), config.secret, {
        expiresIn: 10000
      });

      res.json({
        success: true,
        message: "User authenticated",
        token: tkn
      });
    }
  })
});

module.exports = router;
