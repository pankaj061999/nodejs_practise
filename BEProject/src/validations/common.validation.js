const Joi = require("joi");
const { objectId, sortOrder } = require("./custom.validation");

const uploadMedia = {
	body: Joi.object().keys({
        contentType: Joi.string().required()
	}),
};


module.exports = {
	uploadMedia,
};
