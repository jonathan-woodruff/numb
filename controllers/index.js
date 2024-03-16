/* This file contains all the callback functions that will be referenced in the routes */

const express = require("express");
const router = express.Router();
const helper = require("../helpers/helper");
const passport = require("passport");
const filename = "./data/users.json";
const bcrypt = require("bcrypt");
let users = require("../data/users.json");
const { getUser } = require('../models/database');

// Register New User:
exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getUser({ email: email });
    if (user) {
      console.log("User already exists!");
      return res.redirect("sign-in");
    }
    // Hash password before storing in local DB:
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = { ...id, username, password: hashedPassword };


    // Store new user in local DB
    await users.push(newUser);
    await helper.writeJSONFile(filename, users);


    res.redirect("sign-in");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSignUp = (req, res) => {
  res.render("sign-up");
};