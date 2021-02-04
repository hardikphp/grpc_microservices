"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var reminderSchema = new _mongoose.Schema({
  date: {
    type: Date
  },
  todo: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Todo"
  },
  notifyTo: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  isSent: [{
    type: Boolean,
    "default": false
  }]
});
var reminder = new _mongoose.model("Reminder", reminderSchema);
var _default = reminder;
exports["default"] = _default;