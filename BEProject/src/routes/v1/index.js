const express = require("express");
const videoRoute = require("./video.route");
const userRoute = require("./user.route");
const docsRoute = require("./docs.route");
const categoryRoute = require("./category.route");
const commonRoute = require("./common.route");
const gameRoute = require("./game.route");
const cmsRoute = require("./cms.route");
const artistRoute = require("./artist.route");
const playlistRoute = require("./playlist.route");
const search = require("./search.route.js");
const support = require("./support.route.js");
const elastic = require("./elastic.route.js");


const config = require("../../config/config");

const router = express.Router();
const defaultRoutes = [
	{
		path: "/video",
		route: videoRoute
	},
	{
		path: "/user",
		route: userRoute
	},
	{
		path: "/category",
		route: categoryRoute
	},
	{
		path: "/common",
		route: commonRoute
	},
	{
		path : '/game',
		route : gameRoute	

	},
	{
		path: "/cms",
		route: cmsRoute
	},
	{
		path: "/artist",
		route: artistRoute
	},
	{
		path: "/playlist",
		route: playlistRoute
	},
	{
		path: "/search",
		route: search
	},
	{
		path: "/support",
		route: support
	},
	{
		path: "/elastic",
		route: elastic
	}
];

const devRoutes = [
	// routes available only in development mode
	{
		path: "/docs",
		route: docsRoute,
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
