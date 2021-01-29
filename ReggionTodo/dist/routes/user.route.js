"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _enum = require("../enum");

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _express["default"].Router().post(_enum.INTERNAL_LINKS.USER.ADD_USER, _controllers.userController.addUser).put(_enum.INTERNAL_LINKS.USER.UPDATE_USER, _controllers.userController.updateUser).get(_enum.INTERNAL_LINKS.USER.GET_USER, _controllers.userController.getUser)["delete"](_enum.INTERNAL_LINKS.USER.REMOVE_USER, _controllers.userController.removeUser);

exports["default"] = _default;