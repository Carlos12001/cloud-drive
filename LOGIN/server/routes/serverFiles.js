const router = require("express").Router();
const { serverFileMongo, validate } = require("../models/serverFileMongo");

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await serverFileMongo.findOne({ email: req.body.email });
        if (user)
            return res
                .status(409)
                .send({ message: "serverFileMongo with given email already Exist!" });


        await new serverFileMongo({ ...req.body }).save();
        res.status(201).send({ message: "serverFileMongo created successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;