require('dotenv').config();
const express = require('express');
const app = express();
const connection = require("./db");
const cors = require("cors");

function extracted() {
    const songRoutes = require("./routes/songs")
    return songRoutes;
}

const songRoutes = extracted();
//database conect
connection()

//
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/songs", songRoutes)

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listen on port ${port}...`))