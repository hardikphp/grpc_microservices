"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var todoSchema = new _mongoose.Schema({
  task: {
    type: String
  },
  desc: {
    type: String
  },
  assignedTo: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  addedBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  regionName: {
    type: String
  },
  isCompleted: {
    type: Boolean,
    "default": false
  },
  isActive: {
    type: Boolean,
    "default": true
  },
  isDeleted: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var todo = new _mongoose.model("Todo", todoSchema);
var _default = todo;
exports["default"] = _default;