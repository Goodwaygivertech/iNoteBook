const mongoose = require("mongoose");

const { body, validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const express = require("express");
const User = require("../modules/User");
const userfetch = require("../middelware/userfetch");
const router = express.Router();
const JWT_SECRET = "shivamharry";
// create a user here //Rout - 1

router.post(
  "/",
  [
    body("name", "hey bro enter a name plz").isString(),
    body("email", "hey plz enter valid email").isEmail(),
    body("password", "hey your pass must be greater then 5").isLength({
      min: 5,
    }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // the try catch is starting to here
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        // if user of email is match so do it below
        return res.json({ error: "hey here is a error" });
      }
      // creatinng a user document by this
      const salt = bcrypt.genSaltSync(10);

      let hashPass = bcrypt.hashSync(req.body.password, salt);

      let userdocument = await User.create({
        name: req.body.name,
        password: hashPass,
        email: req.body.email,
      });

      let data = {
        user: {
          id: userdocument.id,
        },
      };

      let jwtToken = jwt.sign(data, JWT_SECRET);

      res.json(jwtToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occurred");
    }
  }
);

// Here user is going to login. "POST" , yet login not require

router.post(
  "/login",
  [
    body("email", "hey plz enter valid email").isEmail(),
    body("password", "hey your pass must be greater then 5").isLength({
      min: 5,
    }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        res.status(400).send("here is a err in your email");
      }

      let compassword = await bcrypt.compare(password, user.password); //yha ka user uper se aaya hai line=>82
      if (!compassword) {
       return res.status(401).send("error in password plz enter correct iot");
      }

      let data = {
        user: {
          id: user.id,
        },
      };

      let jwtToken = jwt.sign(data, JWT_SECRET);

      res.json(jwtToken);
    } catch (error) {
      console.error(error, error.message);
    }
  }
);

// Here we are going to take the data of an user  "POST" rout-3

router.post("/getuser", userfetch, async (req, res) => {
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
