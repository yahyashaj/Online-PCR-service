const express = require("express");
const router = express.Router();
const appointments = require("../controllers/appointments");

router.post("/createAppointment", appointments.createAppointment);
router.post("/updateStatus/:id", appointments.updateStatus);
router.post("/setResult/:id", appointments.setResult);

module.exports = router;
