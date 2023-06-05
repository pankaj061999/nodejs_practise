const express = require("express");
const { userController } = require("../../controlers");

const router = express.Router();

router.route("/list").get(userController.getuserListdata);

// router.route("/upload-media").post(userController.initiateMediaUpload);

module.exports = router;
