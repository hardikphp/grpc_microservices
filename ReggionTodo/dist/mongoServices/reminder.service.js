"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addReminder = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var newReminder, saveReminder;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newReminder = {}, saveReminder = null;
            newReminder = new _models.reminderModel(data);
            _context.next = 4;
            return newReminder.save();

          case 4:
            saveReminder = _context.sent;
            return _context.abrupt("return", saveReminder);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addReminder(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  addReminder: addReminder
};
exports["default"] = _default;