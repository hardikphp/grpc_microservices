"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var regionSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  desc: {
    type: String
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
var region = new _mongoose.model("Region", regionSchema);
var _default = region;
exports["default"] = _default;