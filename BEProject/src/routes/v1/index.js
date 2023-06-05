const express = require("express");
const commonroutes = require("./common.route");
const config = require("../../config/config");

const router = express.Router();
const defaultRoutes = [
  {
    path: "/cms",
    route: commonroutes,
  },
];

defaultRoutes.forEach((route) => {
  if (route.middleware) router.use(route.path, route.middleware, route.route);
  else router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
