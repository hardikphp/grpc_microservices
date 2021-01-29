"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var errorLogger = function errorLogger(error, requestURL) {
  var errorObj = {
    message: error,
    currentTime: new Date().toLocaleString(),
    requestURL: requestURL
  };

  _logger["default"].errorLog.error(errorObj);
};

var _default = errorLogger;
exports["default"] = _default;