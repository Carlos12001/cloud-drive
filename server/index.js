require('dotenv').config();
const express = require('express');
const app = express();
const connection = require("./db");
const cors = require("cors");
const songRoutes = require("./routes/songs")
//database conect
connection()

//
app.use(express.json());
app.use(cors())

//Routes
app.use("/api/songs", songRoutes)

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listen on port ${port}...`))