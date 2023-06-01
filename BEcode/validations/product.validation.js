const Joi = require("joi");

const getProductList = {
	params: Joi.object().keys({
		_id: Joi.string().required()
	}),
}

module.exports = {
	getProductList
}

