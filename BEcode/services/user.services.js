const product = require("../modal/product");

const getuserListdata = async () => {
  let data = await product.find();
  return data;
};

const getallUserList = async () => {
  let data = await product.find();
  return data;
};

const createUserNewEntry = async (reqbody) => {
  const data = new product(reqbody);
  const result = await data.save();
  return result;
};

const deleteUser = async (Id) => {
  const data = await product.deleteOne(Id);
  return data;
};

const updateuserData = async (Id, reqbody) => {
  let data = await product.findByIdAndUpdate(Id, {
    $set: reqbody,
  });
  return data;
};

module.exports = {
  getuserListdata,
  getallUserList,
  createUserNewEntry,
  deleteUser,
  updateuserData,
};
