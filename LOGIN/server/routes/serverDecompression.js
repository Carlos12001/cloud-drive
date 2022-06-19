const router = require("express").Router();
const { serverFileMongo } = require("../models/serverFileMongo");

router.post("/", async (req, res) => {
    try {
        console.log(req.body);

         const file = await serverFileMongo.find({ _id : req.body.id}  );
         console.log(file);
         if (file)
             return res
                 .status(201)
                 .send({ message: "File found!" });



    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
