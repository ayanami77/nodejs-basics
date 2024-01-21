const express = require("express");
const controller = require("../controllers/user.controller");

const router = express.Router();

router.get("/", (req, res) => controller.get(req, res));

module.exports = router;
