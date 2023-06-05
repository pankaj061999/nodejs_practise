const express = require("express");
const httpStatus = require("http-status");
require("../../config");
const Product = require("../../modal/product");
const app = express();

app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  const result = await data.save();
  resp
    .status(httpStatus.OK)
    .send({ code: httpStatus.OK, message: "success", result });
});

app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp
    .status(httpStatus.OK)
    .send({ code: httpStatus.OK, message: "success", data });
  // resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  let data = await Product.deleteOne(req.params);
  resp
    .status(httpStatus.OK)
    .send({ code: httpStatus.OK, message: "success", data });
});

app.put("/update/:_id", async (req, resp) => {
  let data = await Product.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

// whemn we want to update based on id
app.put("/updateid/:_id", async (req, resp) => {
  let data = await Product.findByIdAndUpdate(req.params._id, {
    $set: req.body,
  });
  resp.send(data);
});

app.listen(3003);

// const express = require("express");
// const taskroute = require("./task.router");

// const router = express.Router();
// const defaultRoutes = [
//   {
//     path: "/cms",
//     route: taskroute,
//   },
// ];

// defaultRoutes.forEach((route) => {
//   if (route.middleware) router.use(route.path, route.middleware, route.route);
//   else router.use(route.path, route.route);
// });

// module.exports = router;
