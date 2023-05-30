const express = require("express");
const validate = require("../../middlewares/validate");
const { commonValidation } = require("../../validations");
const { commonController } = require("../../controllers");
const { OptionalUser, VerifyUser } = require("../../middlewares/api.middleware");
const constants = require("../../config/constants");

const router = express.Router();


router
	.route("/help-center-content")
	.get(commonController.getHelpCenterContent)

router
	.route("/language")
	.get(commonController.getLanguages)

router
	.route("/banner")
	.get(OptionalUser, commonController.getBanners)


router
	.route("/app-config")
	.get(commonController.getAppConfig)

router
	.route("/upload-media")
	.post(VerifyUser, validate(commonValidation.uploadMedia), commonController.initiateMediaUpload)

module.exports = router;
