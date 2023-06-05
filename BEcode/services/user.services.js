const product = require("../modal/product");

const getuserListdata = async () => {
  let data = await product.find();
  return data;
};

module.exports = {
  getuserListdata,
};
