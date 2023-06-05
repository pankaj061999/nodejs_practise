const express = require("express");
const { commonController } = require("../../controllers");

const router = express.Router();

router.route("/list").get(commonController.getHelpCenterContent);

module.exports = router;
