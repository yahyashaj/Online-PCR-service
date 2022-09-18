const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports = {
  getAllUsers: (req, res) => {
    userModel.getAllUsers(function (err, result) {
      if (err) {
        console.log("you have an error", err);
      }
      res.json(result);
    });
  },

  createUser: async (req, res) => {
    // hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.user_password, salt);
    const params = [
      req.body.first_name,
      req.body.last_name,
      hashedPassword,
      req.body.user_phone,
    ];
    userModel.createUser(params, function (err, results) {
      if (err) console.log("you are have an error in controller", err);
      console.log("hello from controller yes yes");
    });
  },
  login: async (req, res) => {
    const params = [req.body.user_phone];

    userModel.login(params, async function (err, results) {
      if (results.length > 0) {
        const validPass = await bcrypt.compare(
          req.body.user_password,
          results[0]?.user_password
        );
        if (!validPass) {
          res.status(400).send("Invalid Password");
        } else {
          const token = jwt.sign(
            {
              id: results[0].user_id,
              role: results[0]?.role,
              labId: results[0]?.labId,
            },
            `${process.env.TOKEN_SECRET}`
          );
          res.header("auth-token", token).send(token);
        }
      } else {
        return res.status(400).send("Cannot find user");
      }
    });
  },

  verify: (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split("")[1];
      jwt.verify(token, "TOKEN_SECRET", (err, users) => {
        if (err) {
          return res.status(403).json("Token is not valid");
        }
        req.users = users;
        next;
      });
    } else {
      res.status(401).json("Token is not valid");
    }
  },
  createAppointment: (req, res) => {
    const params = [
      req.body.labId,
      req.body.date,
      req.body.place,
      req.body.first_name,
      req.body.last_name,
      req.body.number_phone,
      req.body.user_ID,
      req.body.time,
    ];
    userModel.createAppointment(params, function (err, results) {
      if (err) console.log("you are have an error in controller", err);
      console.log("hello from controller yes yes", params);
    });
  },
  userProfile: (req, res) => {
    const params = [req.params.userId];
    userModel.userProfile(params, function (err, results) {
      if (err) console.log("you are have an error in your controller", err);
      res.json(results);
    });
  },
  getUserInfo: (req, res) => {
    const params = [req.params.userId];
    userModel.userProfile(params, function (err, results) {
      if (err) console.log("you are have an error in your controller", err);
      res.json(results);
    });
  },
};
