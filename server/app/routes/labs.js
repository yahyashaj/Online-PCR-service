const express = require("express");
const router = express.Router();
const multer = require("multer");

const labs = require("../controllers/labs");
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", labs.getAllLabs);
router.get("/:labId", labs.getOneLab);
router.post("/createLab", upload.single("logo"), labs.CreateLab);
router.get("/getAllAppointments/:labId", labs.getAllAppointment);

module.exports = router;
