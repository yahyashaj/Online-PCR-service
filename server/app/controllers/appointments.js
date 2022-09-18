const appoitmentModel = require("../models/appointments");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports = {
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
    appoitmentModel.createAppointment(params, function (err, results) {
      if (err) console.log("you are have an error in controller", err);
      console.log("hello from controller yes yes", params);
    });
  },
  updateStatus: (req, res) => {
    const params = [req.body.status, req.params.id];
    console.log("params ", req.params);

    appoitmentModel.updateStatus(params, function (err, results) {
      if (err) console.log("you are have an error in controller", err);
      console.log("hello from controller yes yes", params);
    });
  },
  setResult: (req, res) => {
    const params = [req.body.result, req.params.id];
    appoitmentModel.setResult(params, function (err, results) {
      if (err) console.log("you are have an error in controller", err);
      console.log("hello from controller yes yes", params);
    });
  },
};
