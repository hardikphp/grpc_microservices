"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../utils");

var _mongoServices = require("../mongoServices");

var _client = _interopRequireDefault(require("../../client"));

var _crudService = require("../crudService");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ObjectID = require("mongodb").ObjectID;

var addTodo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, body, data, todoId, AssignTo;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _crudService.crud.dbCreate();

          case 2:
            db = _context2.sent;

            try {
              body = req.body, data = null, todoId = null, AssignTo = null;
              body = _objectSpread(_objectSpread({}, body), {}, {
                isCompleted: false
              });

              _client["default"].CreateTodo(body, /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, saveTodo) {
                  var dbconnect, newTodo, reminderBody;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!err) {
                            _context.next = 2;
                            break;
                          }

                          throw err;

                        case 2:
                          _context.next = 4;
                          return _crudService.crud.dbConnect(db, saveTodo.regionName);

                        case 4:
                          dbconnect = _context.sent;
                          AssignTo = saveTodo.assignedTo.split(",");
                          newTodo = _objectSpread(_objectSpread({}, saveTodo), {}, {
                            assignedTo: AssignTo
                          });
                          _context.next = 9;
                          return dbconnect.collection("Todo").insertOne(newTodo);

                        case 9:
                          data = _context.sent;
                          todoId = data.insertedId;
                          reminderBody = {
                            DateTime: body.DateTime,
                            Todo: todoId,
                            notifyTo: AssignTo,
                            isSent: false
                          };
                          _context.next = 14;
                          return dbconnect.collection("Reminder").insertOne(reminderBody);

                        case 14:
                          data = _context.sent;
                          data && res.status(200).send({
                            success: true,
                            message: "Todo Add SuccessFully"
                          });

                        case 16:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }());
            } catch (error) {
              (0, _utils.errorLogger)(error.message, req.originalUrl);
              res.status(400).send({
                success: false,
                message: error.message
              });
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addTodo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateTodo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var db, query, body, id, data;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _crudService.crud.dbCreate();

          case 2:
            db = _context4.sent;

            try {
              query = req.query, body = req.body, id = query.id, data = null;

              _client["default"].UpdateUser(body, /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err, updateTodo) {
                  var dbconnect;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!err) {
                            _context3.next = 2;
                            break;
                          }

                          throw err;

                        case 2:
                          _context3.next = 4;
                          return _crudService.crud.dbConnect(db, updateTodo.regionName);

                        case 4:
                          dbconnect = _context3.sent;
                          _context3.next = 7;
                          return dbconnect.collection("Todo").updateOne({
                            _id: new ObjectID(id)
                          }, {
                            $set: body
                          });

                        case 7:
                          data = _context3.sent;
                          data && res.status(200).send({
                            success: true,
                            message: "Todo Completed"
                          });

                        case 9:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }());
            } catch (error) {
              res.status(400).send({
                success: false,
                message: error.message
              });
            }

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateTodo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var getTodo = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var db, query, regionName;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _crudService.crud.dbCreate();

          case 2:
            db = _context6.sent;

            try {
              query = req.query, regionName = query.regionName;

              _client["default"].GetAllTodo(null, /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(err) {
                  var dbconnect, findData;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          if (!err) {
                            _context5.next = 2;
                            break;
                          }

                          throw err;

                        case 2:
                          _context5.next = 4;
                          return _crudService.crud.dbConnect(db, regionName);

                        case 4:
                          dbconnect = _context5.sent;
                          findData = dbconnect.collection("Todo");
                          findData.find({}).toArray().then(function (result) {
                            if (!result || result.length <= 0) throw new Error("No data found");
                            result && res.status(200).send({
                              success: true,
                              result: result
                            });
                            db.close();
                          })["catch"](function (error) {
                            res.status(400).send({
                              success: false,
                              message: error.message
                            });
                            db.close();
                          });

                        case 7:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref6.apply(this, arguments);
                };
              }());
            } catch (error) {
              res.status(400).send({
                success: false,
                message: error.message
              });
            }

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getTodo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = {
  addTodo: addTodo,
  updateTodo: updateTodo,
  getTodo: getTodo
};
exports["default"] = _default;