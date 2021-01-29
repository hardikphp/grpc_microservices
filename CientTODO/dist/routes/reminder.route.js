"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _enum = require("../enum");

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _express["default"].Router().post(_enum.INTERNAL_LINKS.REMINDER.ADD_REMINDER, _controllers.reminderController.addReminder);

exports["default"] = _default;