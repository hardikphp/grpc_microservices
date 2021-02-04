"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addTodo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var newTodo, saveTodo;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newTodo = {}, saveTodo = null;
            newTodo = new _models.todoModel(data);
            _context.next = 4;
            return newTodo.save();

          case 4:
            saveTodo = _context.sent;
            return _context.abrupt("return", saveTodo);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addTodo(_x) {
    return _ref.apply(this, arguments);
  };
}();

var updateTodo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id, update) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _models.todoModel.findOneAndUpdate({
              _id: id
            }, update);

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateTodo(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var findTodo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _models.todoModel.find({
              isActive: true,
              isDeleted: false
            }, {
              addedBy: 1,
              assignedTo: 1,
              task: 1,
              desc: 1
            });

          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function findTodo() {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  addTodo: addTodo,
  updateTodo: updateTodo,
  findTodo: findTodo
};
exports["default"] = _default;