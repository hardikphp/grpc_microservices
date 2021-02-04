"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "regionService", {
  enumerable: true,
  get: function get() {
    return _region["default"];
  }
});
Object.defineProperty(exports, "userService", {
  enumerable: true,
  get: function get() {
    return _user["default"];
  }
});
Object.defineProperty(exports, "todoService", {
  enumerable: true,
  get: function get() {
    return _todo["default"];
  }
});
Object.defineProperty(exports, "reminderService", {
  enumerable: true,
  get: function get() {
    return _reminder["default"];
  }
});

var _region = _interopRequireDefault(require("./region.services"));

var _user = _interopRequireDefault(require("./user.services"));

var _todo = _interopRequireDefault(require("./todo.service"));

var _reminder = _interopRequireDefault(require("./reminder.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }