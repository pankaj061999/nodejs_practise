const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { searchService } = require("../services");
const logger = require("../config/logger");
const rTracer = require("cls-rtracer")


/*********** add a new result ********/

const searchResult = catchAsync(async (req, res) => {
  logger.info(`Controller -> create Result :  ${rTracer.id()}`);
  console.log(`Search query =>  ${req.body}`)
  let options = {}
  options.osType = req.header("os-type");

  console.log('search header:=>>>>>>>', options)
  const data = await searchService.searchResult(req.body, options);
  res
    .status(httpStatus.OK)
    .send({ code: httpStatus.OK, message: "success", data });
});




module.exports ={
    searchResult
}