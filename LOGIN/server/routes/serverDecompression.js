const router = require("express").Router();
const { serverFileMongo } = require("../models/serverFileMongo");
/***
 * realiza la ruta de la decompression del archivo alamcenado en la nube
 */
router.post("/", async (req, res) => {
    try {
        console.log(req.body);

         const file = await serverFileMongo.find({ _id : req.body.id}  );
         console.log(file);
         if (file) {
             res.send({data: file, message: "File found!"});
             console.log("File sended");
         }

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
