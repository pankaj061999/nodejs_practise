const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");

/*********** add a new result ********/

const getuserListdata = catchAsync(async (req, res) => {
  const data = await userService.getuserListdata(filter);
  res
    .status(httpStatus.OK)
    .send({ code: httpStatus.OK, message: "success", data });
});

module.exports = {
  getuserListdata,
};
