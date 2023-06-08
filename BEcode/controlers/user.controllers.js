const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");

/*********** add a new result ********/

const getuserListdata = catchAsync(async (req, res) => {
  const data = await userService.getuserListdata();
  res
    .status(httpStatus.OK)
    .send({ code: httpStatus.OK, message: "success", data });
});

const createUserNewEntry = catchAsync(async (req, res) => {
  const data = await userService.createUserNewEntry(req.body);
  res
    .status(httpStatus.OK)
    .send({ code: httpStatus.OK, message: "success", data: { data } });
});

const getallUserList = catchAsync(async (req, res) => {
  const data = await userService.getallUserList();
  res
    .status(httpStatus.OK)
    .send({ code: httpStatus.OK, message: "success", data });
});

const deleteUser = catchAsync(async (req, res) => {
  let data = await userService.deleteUser(req.params);
  res
    .status(httpStatus.OK)
    .send({ code: httpStatus.OK, message: "success", data });
});

const updateuserData = catchAsync(async (req, res) => {
  let data = await userService.updateuserData(req.params, req.body);
  res.send(data);
});

module.exports = {
  getuserListdata,
  createUserNewEntry,
  getallUserList,
  deleteUser,
  updateuserData,
};
