"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForSelectors = exports.waitForSelectorWithText = exports.waitForSelector = exports.waitForResult = exports.waitFor = void 0;
var _seleniumWebdriver = require("selenium-webdriver");
var _logger = require("../logger");
var _parseEnv = require("../env/parseEnv");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var waitForResult;
exports.waitForResult = waitForResult;
(function (waitForResult) {
  waitForResult[waitForResult["PASS"] = 1] = "PASS";
  waitForResult[waitForResult["FAIL"] = 2] = "FAIL";
  waitForResult[waitForResult["ELEMENT_NOT_AVAILABLE"] = 3] = "ELEMENT_NOT_AVAILABLE";
})(waitForResult || (exports.waitForResult = waitForResult = {}));
var waitFor = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(predicate, globalConfig, options) {
    var _ref2, _ref2$timeout, timeout, _ref2$wait, wait, _ref2$target, target, _ref2$type, type, sleep, startDate, notAvailableContext, resultAs, result, waitForErrorMsg;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = options || {}, _ref2$timeout = _ref2.timeout, timeout = _ref2$timeout === void 0 ? (0, _parseEnv.envNumber)('WAITFOR_TIMEOUT') : _ref2$timeout, _ref2$wait = _ref2.wait, wait = _ref2$wait === void 0 ? (0, _parseEnv.envNumber)('WAITFOR_POLL_WAIT') : _ref2$wait, _ref2$target = _ref2.target, target = _ref2$target === void 0 ? '' : _ref2$target, _ref2$type = _ref2.type, type = _ref2$type === void 0 ? 'element' : _ref2$type;
            sleep = function sleep(ms) {
              return new Promise(function (resolve) {
                return setTimeout(resolve, ms);
              });
            };
            startDate = new Date();
            resultAs = waitForResult.ELEMENT_NOT_AVAILABLE;
          case 4:
            if (!(new Date().getTime() - startDate.getTime() < timeout)) {
              _context.next = 16;
              break;
            }
            _context.next = 7;
            return predicate();
          case 7:
            result = _context.sent;
            if (result.result) {
              notAvailableContext = result.replace;
              resultAs = result.result;
            } else {
              resultAs = result;
            }
            if (!(resultAs === waitForResult.PASS)) {
              _context.next = 11;
              break;
            }
            return _context.abrupt("return");
          case 11:
            _context.next = 13;
            return sleep(wait);
          case 13:
            _logger.logger.log("Waiting ".concat(wait, "ms"));
            _context.next = 4;
            break;
          case 16:
            waitForErrorMsg = resultAs === waitForResult.ELEMENT_NOT_AVAILABLE ? "\uD83E\uDDE8 Timed out after ".concat(timeout, "ms waiting for the ").concat(notAvailableContext || target, " ").concat(type, " \uD83E\uDDE8") : (options === null || options === void 0 ? void 0 : options.failureMessage) || 'Test assertion failed';
            throw new Error(waitForErrorMsg);
          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function waitFor(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.waitFor = waitFor;
var waitForSelector = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(driver, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return driver.switchTo().defaultContent();
          case 3:
            _context2.next = 5;
            return driver.findElement(_seleniumWebdriver.By.css(elementIdentifier));
          case 5:
            return _context2.abrupt("return", true);
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", false);
          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function waitForSelector(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
exports.waitForSelector = waitForSelector;
var waitForSelectors = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(driver, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return driver.switchTo().defaultContent();
          case 3:
            _context3.next = 5;
            return driver.findElements(_seleniumWebdriver.By.css(elementIdentifier));
          case 5:
            return _context3.abrupt("return", true);
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", false);
          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function waitForSelectors(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
exports.waitForSelectors = waitForSelectors;
var waitForSelectorWithText = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(driver, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return driver.switchTo().defaultContent();
          case 3:
            _context4.next = 5;
            return driver.findElement(_seleniumWebdriver.By.xpath(elementIdentifier));
          case 5:
            return _context4.abrupt("return", true);
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", false);
          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function waitForSelectorWithText(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
exports.waitForSelectorWithText = waitForSelectorWithText;