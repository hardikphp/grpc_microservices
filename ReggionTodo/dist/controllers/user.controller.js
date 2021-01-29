"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../utils");

var _mongoServices = require("../mongoServices");

var _crudService = require("../crudService");

var _models = require("../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ObjectID = require("mongodb").ObjectID;

var client = require("../../client");

var addUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, body, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _crudService.crud.dbCreate();

          case 2:
            db = _context2.sent;

            try {
              body = req.body, data = null;
              client.insert(body, /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, saveuser) {
                  var dbconnect;
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
                          return _crudService.crud.dbConnect(db, saveuser.regionName);

                        case 4:
                          dbconnect = _context.sent;
                          _context.next = 7;
                          return dbconnect.collection("User").insertOne(saveuser);

                        case 7:
                          data = _context.sent;
                          data && res.status(200).send({
                            success: true,
                            message: "User Added SuccessFully"
                          });

                        case 9:
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

  return function addUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateUser = /*#__PURE__*/function () {
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
              client.UpdateUser(body, /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err, updateUSer) {
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
                          return _crudService.crud.dbConnect(db, updateUSer.regionName);

                        case 4:
                          dbconnect = _context3.sent;
                          _context3.next = 7;
                          return dbconnect.collection("User").updateOne({
                            _id: new ObjectID(id)
                          }, {
                            $set: body
                          });

                        case 7:
                          data = _context3.sent;
                          data && res.status(200).send({
                            success: true,
                            message: "User Update SuccessFully"
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

  return function updateUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var getUser = /*#__PURE__*/function () {
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
              client.GetAllUser(null, /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(err, data) {
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
                          findData = dbconnect.collection("User");
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

                return function (_x11, _x12) {
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

  return function getUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var removeUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var db, query, body, id, data, dbconnect;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _crudService.crud.dbCreate();

          case 2:
            db = _context7.sent;
            _context7.prev = 3;
            query = req.query, body = req.body, id = query.id, data = null;
            _context7.next = 7;
            return _crudService.crud.dbConnect(db, body.regionName);

          case 7:
            dbconnect = _context7.sent;
            _context7.next = 10;
            return dbconnect.collection("User").deleteOne({
              _id: new ObjectID(id)
            });

          case 10:
            data = _context7.sent;

            if (data) {
              _context7.next = 13;
              break;
            }

            throw new Error("User Not Found");

          case 13:
            data && res.status(200).send({
              success: true,
              message: "User Remove SuccessFully"
            });
            _context7.next = 19;
            break;

          case 16:
            _context7.prev = 16;
            _context7.t0 = _context7["catch"](3);
            res.status(400).send({
              success: false,
              message: _context7.t0.message
            });

          case 19:
            _context7.next = 21;
            return _crudService.crud.dbClose(db);

          case 21:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 16]]);
  }));

  return function removeUser(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}(); // var mongodb = require("mongodb");
// var MongoClient = mongodb.MongoClient;
// const dbCreate = async (regionName, body) => {
//   var db = await MongoClient.connect(
//     `mongodb+srv://root:root@todo.csrq2.mongodb.net/`,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   );
//   var dbo = db.db(regionName);
//   let data = await dbo.collection("User").insertOne(body);
//   db.close();
//   return data.result.n;
// };


var _default = {
  addUser: addUser,
  updateUser: updateUser,
  getUser: getUser,
  removeUser: removeUser
};
exports["default"] = _default;