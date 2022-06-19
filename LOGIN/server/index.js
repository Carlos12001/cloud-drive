require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const serverFiles = require("./routes/serverFiles");
const serverDecompression = require("./routes/serverDecompression");
const prueba1 = require("./routes/prueba1");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/serverFiles", serverFiles);
app.use("/api/serverDecompression", serverDecompression);
app.use("/api/prueba1",prueba1);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
