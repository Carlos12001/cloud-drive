require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const serverFiles = require("./routes/serverFiles")

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/serverFiles", serverFiles);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

const compression = require("./data/compression");

compression.compress("hellow.txt",
    "\n" +
    "\n" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate pharetra lacus, ac pulvinar sapien aliquam at. Nunc sollicitudin dictum hendrerit. Duis convallis luctus ullamcorper. Phasellus sit amet tellus ac tellus varius tincidunt vel vitae diam. Mauris et bibendum nulla. Phasellus congue eros eget gravida vehicula. Morbi et turpis orci. Sed lorem justo, convallis vitae facilisis ut, congue quis neque. Cras eget convallis massa. Mauris a enim nulla. Nulla gravida erat diam, in luctus orci laoreet consectetur", "lz78", (data) => {
        console.log(data.toString());
    });