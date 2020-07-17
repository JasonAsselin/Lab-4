'use strict';
var express = require('express');
var router = express.Router();
var userModel = require('../models/user');

/* GET users listing. */
router.get('/users', function (req, res) {
    userModel.find({}, function (err, users) {
        if (err) {
            res.send('Something went wrong.');
            return;
        }
        res.render("users", { users: users });
    });
})

module.exports = router;
