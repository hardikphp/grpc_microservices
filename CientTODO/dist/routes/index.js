"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "regionRoute", {
  enumerable: true,
  get: function get() {
    return _region["default"];
  }
});
Object.defineProperty(exports, "userRoute", {
  enumerable: true,
  get: function get() {
    return _user["default"];
  }
});
Object.defineProperty(exports, "todoRoute", {
  enumerable: true,
  get: function get() {
    return _todo["default"];
  }
});
Object.defineProperty(exports, "reminderRoute", {
  enumerable: true,
  get: function get() {
    return _reminder["default"];
  }
});

var _region = _interopRequireDefault(require("./region.route"));

var _user = _interopRequireDefault(require("./user.route"));

var _todo = _interopRequireDefault(require("./todo.route"));

var _reminder = _interopRequireDefault(require("./reminder.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }