"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mongodb = require("mongodb");

var MongoClient = mongodb.MongoClient;

var dbCreate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return MongoClient.connect("mongodb+srv://root:root@todo.csrq2.mongodb.net/", {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });

          case 2:
            db = _context.sent;
            return _context.abrupt("return", db);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function dbCreate() {
    return _ref.apply(this, arguments);
  };
}();

var dbConnect = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(db1, regionName) {
    var dbo;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dbo = db1.db(regionName);
            return _context2.abrupt("return", dbo);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function dbConnect(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var dbClose = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(db) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            db.close();

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function dbClose(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  dbCreate: dbCreate,
  dbConnect: dbConnect,
  dbClose: dbClose
};
exports["default"] = _default;