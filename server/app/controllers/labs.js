const labModels = require("../models/labs");
module.exports = {
  getAllLabs: (req, res) => {
    labModels.getAllLabs(function (err, result) {
      (err) => {
        console.log("ops you have an error", err);
      };
      res.json(result);
    });
  },
  getOneLab: (req, res) => {
    var params = [req.params.labId];
    labModels.getOneLab(params, function (err, result) {
      (err) => {
        console.log("ops you have an error", err);
      };
      res.json(result);
    });
  },
  getAllAppointment: (req, res) => {
    const params = [req.params.labId];
    console.log("hello from controller", params);
    labModels.getAllAppointment(params, function (err, results) {
      if (err) console.log("you are have an error in your controller", err);
      res.json(results);
    });
  },
  CreateLab: (req, res) => {
    const image = req.file;
    console.log("image", image);
    const params = [
      req.body.lab_name,
      req.body.url,
      req.body.description,
      req.body.phone,
      req.body.working_hours,
      req.body.location,
      req.body.locationMap,
      req.body.costOfTest,
    ];
    console.log(req.body);
    labModels.CreateLab(params, function (err, results) {
      if (err) console.log("you are have an error in your controller", err);
      res.json(results);
    });
  },
};
