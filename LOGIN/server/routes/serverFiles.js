const router = require("express").Router();
const { serverFileMongo, validate } = require("../models/serverFileMongo");
const compression = require("../data/compression");

/***
 * brinda la data del servido de mongo
 */
router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        let fileData = req.body.fileData;

        /**
         * realiza la compression del archivo
         */
        compression.compress(req.body.path, fileData, req.body.compression, (data) => {
            fileData = data;
            console.log(fileData);
        }).then(async r => {
            await new serverFileMongo({...req.body, fileData}).save();
            const fileMongo = await serverFileMongo.find({});
            res.send({file:fileMongo, message:"send" });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;