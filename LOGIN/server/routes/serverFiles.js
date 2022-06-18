const router = require("express").Router();
const { serverFileMongo, validate } = require("../models/serverFileMongo");

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        let dataFile;
        await new serverFileMongo({ ...req.body }).save();
        res.status(201).send({ message: "serverFileMongo created successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;