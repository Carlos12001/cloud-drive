const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const fileSchema = new mongoose.Schema({
    fileData: { type: String, required: true },
    path: { type: String, required: true },
    email: { type: String, required: true },
    compression:{type: String, required: true},
    tags: [String]
});

fileSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this.id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

const serverFileMongo = mongoose.model("serverFileMongo", fileSchema);

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
