"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "regionController", {
  enumerable: true,
  get: function get() {
    return _region["default"];
  }
});
Object.defineProperty(exports, "userController", {
  enumerable: true,
  get: function get() {
    return _user["default"];
  }
});
Object.defineProperty(exports, "todoController", {
  enumerable: true,
  get: function get() {
    return _todo["default"];
  }
});
Object.defineProperty(exports, "reminderController", {
  enumerable: true,
  get: function get() {
    return _reminder["default"];
  }
});

var _region = _interopRequireDefault(require("./region.controller"));

var _user = _interopRequireDefault(require("./user.controller"));

var _todo = _interopRequireDefault(require("./todo.controller"));

var _reminder = _interopRequireDefault(require("./reminder.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }