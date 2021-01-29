"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = _interopRequireDefault(require("winston"));

var _currentDate = _interopRequireDefault(require("./currentDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("dotenv").config({
  path: ".env"
});

var todayDate = _currentDate["default"].getdate(new Date());

var LOGS_PATH = process.env.LOG_PATH;
var loggers = {
  infoLog: _winston["default"].createLogger({
    level: "info",
    format: _winston["default"].format.json(),
    transports: [new _winston["default"].transports.File({
      filename: "".concat(LOGS_PATH, "/").concat(todayDate, "_info.log")
    })]
  }),
  errorLog: _winston["default"].createLogger({
    level: "error",
    format: _winston["default"].format.json(),
    transports: [new _winston["default"].transports.File({
      filename: "".concat(LOGS_PATH, "/").concat(todayDate, "_error.log")
    })]
  })
};
var _default = loggers;
exports["default"] = _default;