const mongoose = require("mongoose");

const NASchema = new mongoose.Schema({});

const NA = mongoose.model("NA", NASchema);

module.exports = NA;
