const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

/**
 * crrea el user
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, any>} devuelve el fue correcto
 */
const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

/**
 * genera el token
 * @returns {*} el token
 */
userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

/**
 * valida el usuario para el mongo
 * @param data data de reviar
 * @returns {Joi.ValidationResult<any>} retorna si fue correcyo
 */
const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
