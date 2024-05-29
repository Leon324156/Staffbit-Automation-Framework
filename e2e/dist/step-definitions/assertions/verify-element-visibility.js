"use strict";

var _cucumber = require("@cucumber/cucumber");
var _webElementHelper = require("../../support/web-element-helper");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _htmlBehavior = require("../../support/html-behavior");
var _logger = require("../../logger");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? be displayed$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, negate) {
    var driver, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            driver = this.screen.driver, globalConfig = this.globalConfig;
            _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "be displayed"));
            _context2.next = 4;
            return (0, _webElementHelper.getElementLocator)(driver, elementKey, globalConfig);
          case 4:
            elementIdentifier = _context2.sent;
            _context2.next = 7;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var isElementVisible;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _htmlBehavior.elementDisplayed)(driver, elementIdentifier);
                    case 2:
                      isElementVisible = _context.sent;
                      if (!(isElementVisible === !negate)) {
                        _context.next = 7;
                        break;
                      }
                      return _context.abrupt("return", _waitForBehavior.waitForResult.PASS);
                    case 7:
                      return _context.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "be displayed \uD83E\uDDE8")
            });
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the ([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd) "([^"]*)" should( not)? be displayed$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(elementPosition, elementKey, negate) {
    var _elementPosition$matc;
    var driver, globalConfig, elementIdentifier, index;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            driver = this.screen.driver, globalConfig = this.globalConfig;
            _logger.logger.log("the ".concat(elementPosition, " ").concat(elementKey, " should ").concat(negate ? 'not ' : '', "be displayed"));
            _context4.next = 4;
            return (0, _webElementHelper.getElementLocator)(driver, elementKey, globalConfig);
          case 4:
            elementIdentifier = _context4.sent;
            index = Number((_elementPosition$matc = elementPosition.match(/\d/g)) === null || _elementPosition$matc === void 0 ? void 0 : _elementPosition$matc.join('')) - 1;
            _context4.next = 8;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var isElementVisible;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return (0, _htmlBehavior.elementDisplayedAtIndex)(driver, elementIdentifier, index);
                    case 2:
                      isElementVisible = _context3.sent;
                      if (!(isElementVisible === !negate)) {
                        _context3.next = 7;
                        break;
                      }
                      return _context3.abrupt("return", _waitForBehavior.waitForResult.PASS);
                    case 7:
                      return _context3.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\uD83E\uDDE8 Expected ".concat(elementPosition, " ").concat(elementKey, " to ").concat(negate ? 'not ' : '', "be displayed \uD83E\uDDE8")
            });
          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return function (_x4, _x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? be enabled$/, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(elementKey, negate) {
    var driver, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            driver = this.screen.driver, globalConfig = this.globalConfig;
            _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "be enabled"));
            _context6.next = 4;
            return (0, _webElementHelper.getElementLocator)(driver, elementKey, globalConfig);
          case 4:
            elementIdentifier = _context6.sent;
            _context6.next = 7;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var elementStable, isElementEnabled;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(driver, elementIdentifier);
                    case 2:
                      elementStable = _context5.sent;
                      if (!elementStable) {
                        _context5.next = 14;
                        break;
                      }
                      _context5.next = 6;
                      return (0, _htmlBehavior.elementEnabled)(driver, elementIdentifier);
                    case 6:
                      isElementEnabled = _context5.sent;
                      if (!(isElementEnabled === !negate)) {
                        _context5.next = 11;
                        break;
                      }
                      return _context5.abrupt("return", _waitForBehavior.waitForResult.PASS);
                    case 11:
                      return _context5.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                    case 12:
                      _context5.next = 15;
                      break;
                    case 14:
                      return _context5.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                    case 15:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "be displayed \uD83E\uDDE8")
            });
          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return function (_x8, _x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^I should( not)? see (\d*) "([^"]*)" displayed$/, /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(negate, count, elementKey) {
    var driver, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            driver = this.screen.driver, globalConfig = this.globalConfig;
            _logger.logger.log("I should ".concat(negate ? 'not ' : '', "see ").concat(count, " ").concat(elementKey, " displayed"));
            _context8.next = 4;
            return (0, _webElementHelper.getElementLocator)(driver, elementKey, globalConfig);
          case 4:
            elementIdentifier = _context8.sent;
            _context8.next = 7;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var elements;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return (0, _htmlBehavior.getElements)(driver, elementIdentifier);
                    case 2:
                      elements = _context7.sent;
                      if (!(Number(count) === elements.length === !negate)) {
                        _context7.next = 7;
                        break;
                      }
                      return _context7.abrupt("return", _waitForBehavior.waitForResult.PASS);
                    case 7:
                      return _context7.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\uD83E\uDDE8 Expected ".concat(count, " ").concat(elementKey, " to ").concat(negate ? 'not ' : '', "be displayed \uD83E\uDDE8")
            });
          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return function (_x11, _x12, _x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());