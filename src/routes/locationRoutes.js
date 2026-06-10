const express = require("express");
const locationController = require("../controllers/locationController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, locationController.getLocations);

module.exports = router;