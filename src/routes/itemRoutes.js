const express = require("express");
const itemController = require("../controllers/itemController");

const router = express.Router();

router.get("/", itemController.getItems);

module.exports = router;
