// const config = require("./config/config");
// const logger = require("./config/logger");
// const http = require("http");
// const app = require("./app");
// const mongoose = require("mongoose");
// if (process.env.REDIS_ENV == 'production') {
// 	const newrelic = require("newrelic");
// }

// let server = http.createServer(app);
// mongoose.set('useFindAndModify', false);
// mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
// 	logger.info("Connected to MongoDB");
// 	server.listen(config.port, () => {
// 		logger.info(`Listening to port ${config.port}`);
// 	});
// });

// const exitHandler = () => {
// 	if (server) {
// 		server.close(() => {
// 			logger.info("Server closed");
// 			process.exit(1);
// 		});
// 	} else {
// 		process.exit(1);
// 	}
// };

// const unexpectedErrorHandler = (error) => {
// 	logger.error(error.message);
// 	logger.error(error.stack);
// };

// process.on("uncaughtException", function (error) {
// 	logger.error(error.message);
// 	logger.error(error.stack);
// 	// emailService.sendVerificationEmail("Fantiger:: Unexpected Error", "vinay.singh@fantiger.com", `Timestamp:: ${(new Date).toUTCString()} <br>Message:: ${error.message},<br> Stack: ${error.stack}`);
// 	exitHandler();
// });
// process.on("unhandledRejection", unexpectedErrorHandler);

// process.on("SIGTERM", () => {
// 	logger.info("SIGTERM received");
// 	if (server) {
// 		server.close();
// 	}
// });
