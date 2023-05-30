const moment = require("moment");
const { validate : uuidValidate,version : uuidVersion } =require( "uuid");
const { SORT_ORDER } = require("../config/constants");

const objectId = (value, helpers) => {
	if (!value.match(/^[0-9a-fA-F]{24}$/)) {
		return helpers.message("\"{{#label}}\" must be a valid mongo id");
	}
	return value;
};

const password = (value, helpers) => {
	if (value.length < 8) {
		return helpers.message("password must be at least 8 characters");
	}
	if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
		return helpers.message("password must contain at least 1 letter and 1 number");
	}
	return value;
};

const dob = (value, helpers) => {
	if (!moment(value, "YYYY-MM-DD", true).isValid()) {
		return helpers.message("Invalid dob format, It should be YYYY-MM-DD");
	}
	return value;
};

const uuidv4 = (value,helper) => {
	if(uuidValidate(value) &&  uuidVersion(value) === 4) {
		return value;
	}
	else {
		return helper.message("Not a valid uuidv4 key");
	}
};

const sortOrder = (value,helper) => {
	if(!value) return 1;
	switch(value) {
	case SORT_ORDER.ASCENDING :
		return 1;
	case SORT_ORDER.DESCENDING :
		return -1;
	default :
		return helper.message("Not a valid sortOrder");
	}
};
module.exports = {
	objectId,
	password,
	dob,
	uuidv4,
	sortOrder
};
