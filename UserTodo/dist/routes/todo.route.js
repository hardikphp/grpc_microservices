"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _enum = require("../enum");

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _express["default"].Router().post(_enum.INTERNAL_LINKS.TODO.ADD_TODO, _controllers.todoController.addTodo).put(_enum.INTERNAL_LINKS.TODO.UPDATE_TODO, _controllers.todoController.updateTodo).get(_enum.INTERNAL_LINKS.TODO.GET_TODO, _controllers.todoController.getTodo);

exports["default"] = _default;