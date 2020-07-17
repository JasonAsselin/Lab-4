'use strict';
var express = require('express');
var router = express.Router();
var userModel = require('../models/user');

/* GET users listing. */
router.get('/users', function (req, res) {
    userModel.find({}, function (err, foundUser) {
        console.log(err);
        console.log(foundUser);
        //Passing the user to the pug file
        res.render('users', { user: foundUser });
    });
})

module.exports = router;
