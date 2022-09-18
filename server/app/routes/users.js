const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
router.get("/", userController.getAllUsers);
router.post("/signUp", userController.createUser);
router.post("/login", userController.login);
router.get("/userProfile/:userId", userController.userProfile);
router.get("/userInfo/:userId", userController.getUserInfo);

module.exports = router;
