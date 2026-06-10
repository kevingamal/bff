const express = require("express");
const itemController = require("../controllers/itemController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, itemController.getItems);

module.exports = router;