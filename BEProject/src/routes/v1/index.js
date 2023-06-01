const express = require("express");
const cmsRoute = require("./cms.route");
const config = require("../../config/config");

const router = express.Router();
const defaultRoutes = [
	{
		path: "/cms",
		route: cmsRoute
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
