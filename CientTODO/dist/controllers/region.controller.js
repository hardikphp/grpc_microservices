"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoServices = require("../mongoServices");

var _crudService = require("../crudService");

var _client = require("../../client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addRegion = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, body, data, regionData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _crudService.crud.dbCreate();

          case 2:
            db = _context2.sent;

            try {
              body = req.body, data = null, regionData = null;

              _client.client.CreateRegion(body, /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, saveRegion) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          console.log("Calling client");

                          if (!err) {
                            _context.next = 3;
                            break;
                          }

                          throw err;

                        case 3:
                          _context.next = 5;
                          return _crudService.crud.dbConnect(db, saveRegion.name);

                        case 5:
                          regionData = _context.sent;
                          _context.next = 8;
                          return _mongoServices.regionService.insertOne(saveRegion);

                        case 8:
                          data = _context.sent;
                          data && res.status(200).send({
                            success: true,
                            message: "Region Add SuccessFully"
                          });

                        case 10:
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
              res.status(400).send({
                success: false,
                message: error.message
              });
            } // await crud.dbClose(db);


          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addRegion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateRegion = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var query, body, id, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            query = req.query, body = req.body, id = query.id, data = null;
            _context3.next = 4;
            return _mongoServices.regionService.updateRegion(id, body);

          case 4:
            data = _context3.sent;
            data && res.status(200).send({
              success: true,
              message: "Region Update SuccessFully"
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(400).send({
              success: false,
              message: _context3.t0.message
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function updateRegion(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var getRegion = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            try {
              _client.client1.GetAllRegion(null, /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(err) {
                  var data;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          console.log("Calling client1");

                          if (!err) {
                            _context4.next = 3;
                            break;
                          }

                          throw err;

                        case 3:
                          _context4.next = 5;
                          return _mongoServices.regionService.findRegion();

                        case 5:
                          data = _context4.sent;
                          data && res.status(200).send({
                            success: true,
                            data: data
                          });

                        case 7:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x9) {
                  return _ref5.apply(this, arguments);
                };
              }());
            } catch (error) {
              res.status(400).send({
                success: false,
                message: error.message
              });
            }

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getRegion(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // var mongodb = require("mongodb");
// var MongoClient = mongodb.MongoClient;
// const dbCreate = async (regionName) => {
//   MongoClient.connect(
//     `mongodb+srv://root:root@todo.csrq2.mongodb.net/`,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     function (err, client) {
//       const collection = client.db(regionName); //.collection("test-collection1");
//       /*collection
//         .insertOne({ id: 1 })
//         .then((result) => console.log(result))
//         .catch((err) => console.log(err));*/
//       //client.close();
//     }
//   );
// };


var _default = {
  addRegion: addRegion,
  updateRegion: updateRegion,
  getRegion: getRegion
};
exports["default"] = _default;