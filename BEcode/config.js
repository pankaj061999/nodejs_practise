const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/local");

// const Joi = require("joi");

// const envVarsSchema = Joi.object()
//   .keys({
//     NODE_ENV: Joi.string().valid("development", "test").required(),
//     PORT: Joi.number().default(3000),
//     MONGODB_URL: Joi.string().required().description("Mongo DB url"),
//   })
//   .unknown();

// const { value: envVars, error } = envVarsSchema
//   .prefs({ errors: { label: "key" } })
//   .validate(process.env);

// if (error) {
//   throw new Error(`Config validation error: ${error.message}`);
// }

// module.exports = {
//   env: envVars.NODE_ENV,
//   port: envVars.PORT,
//   mongoose: {
//     url: envVars.MONGODB_URL + (envVars.NODE_ENV === "test" ? "-test" : ""),
//     options: {
//       useCreateIndex: true,
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//   },
// };
