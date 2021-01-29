"use strict";

var _mongoose = require("mongoose");

// We need to define the URL
var DATABASE_NAME = process.env.DATABASE_NAME;
var CONNECTION_URL = process.env.CONNECTION_URL + DATABASE_NAME;
(0, _mongoose.set)("useCreateIndex", true); //for making use of findOneAndUpdate else it will not work

(0, _mongoose.set)("useFindAndModify", false); //Connection establishment

(0, _mongoose.connect)(CONNECTION_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
var db = _mongoose.connection; //listener

db.on("error", function () {
  console.error("Error occured in db connection");
});
db.on("open", function () {
  console.log("DB Connection with ".concat(DATABASE_NAME, " established successfully"));
});