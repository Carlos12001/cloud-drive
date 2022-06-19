const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
/***
 *
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, any>}
 * Modelo del serverFile, la data que se sube al servidor
 */
const fileSchema = new mongoose.Schema({
    fileData: { type: String, required: true },
    path: { type: String, required: true },
    email: { type: String, required: true },
    compression:{type: String, required: true},
    tags: [String]
});

/**
 * genra token
 * @returns {*} token genertado
 */
fileSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this.id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

const serverFileMongo = mongoose.model("serverFileMongo", fileSchema);

/**
 * valida si fue correcto el data
 * @param data la data de revisar
 * @returns {Joi.ValidationResult<any>} si fue exitsoso
 */
const validate = (data) => {
    const schema = Joi.object({
        fileData: Joi.string().required().label("fileData"),
        path: Joi.string().required().label("path"),
        email: Joi.string().email().required().label("Email"),
        compression: Joi.string().required().label("compression")
    });
    return schema.validate(data);
};

module.exports = { serverFileMongo, validate };
