/* This file will import the functions from /controllers/index.js and define all the routes */

const express = require('express');
const router = express.Router();

const { 
    createUser,
    getSignUp
} = require('../controllers/index'); 

router.post("/sign-up", createUser);

router.get("/sign-up", getSignUp);

module.exports = router;