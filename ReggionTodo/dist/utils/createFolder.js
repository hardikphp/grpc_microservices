"use strict";

var _fs = require("fs");

require("dotenv").config({
  path: ".env"
});

var FILE_PATH = process.env.FILE_PATH;
var LOG_PATH = process.env.LOG_PATH;
var checkFolder = (0, _fs.existsSync)(FILE_PATH);
var logFolder = (0, _fs.existsSync)(LOG_PATH);

if (!checkFolder) {
  (0, _fs.mkdirSync)(FILE_PATH || "uploads");
}

if (!logFolder) {
  (0, _fs.mkdirSync)(LOG_PATH || "logs");
}