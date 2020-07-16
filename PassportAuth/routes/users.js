'use strict';
var express = require('express');
var router = express.Router();
var userModel = require('../models/user');

/* GET users listing. */
router.get('/user', function (req, res) {
    userModel.find({}, function (err, users) {
    });
    // use userModel to return all users
    res.render('users', { users: all_users });
});

module.exports = router;
