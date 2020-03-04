const express = require("express");
const NARouter = require("./routes/NARoutes");
const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use("/api/v1/NA", NA);

module.exports = app;
