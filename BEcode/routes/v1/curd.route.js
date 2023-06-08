const express = require("express");
const httpStatus = require("http-status");
const {
  createUserNewEntry,
  getallUserList,
  deleteUser,
  updateuserData,
} = require("../../controlers/user.controllers");
require("../../config/config");

const router = express.Router();
console.log("jjbjb")
router.route("/create").post(createUserNewEntry);

router.route("/list").get(getallUserList);

router.route("/delete/:_id").delete(deleteUser);

router.route("/update/:_id").put(updateuserData);

module.exports = router;
