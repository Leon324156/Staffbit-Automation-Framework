"use strict";

var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../support/wait-for-behavior");
var _webElementHelper = require("../support/web-element-helper");
var _htmlBehavior = require("../support/html-behavior");
var _randomDataHelper = require("../support/random-data-helper");
var _inputHelper = require("../support/input-helper");
var _logger = require("../logger");
var _optionsHelper = require("../support/options-helper");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(0, _cucumber.Then)(/^I fill in the "([^"]*)" input with "([^"]*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, inputValue) {
    var driver, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            driver = this.screen.driver, globalConfig = this.globalConfig;
            _logger.logger.log("I fill in the ".concat(elementKey, " input with ").concat(inputValue));
            _context2.next = 4;
            return (0, _webElementHelper.getElementLocator)(driver, elementKey, globalConfig);
          case 4:
            elementIdentifier = _context2.sent;
            _context2.next = 7;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var elementStable, parsedInput;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(driver, elementIdentifier);
                    case 2:
                      elementStable = _context.sent;
                      if (!elementStable) {
                        _context.next = 8;
                        break;
                      }
                      parsedInput = (0, _inputHelper.parseInput)(inputValue, globalConfig);
                      _context.next = 7;
                      return (0, _htmlBehavior.inputElementValue)(driver, elementIdentifier, parsedInput);
                    case 7:
                      return _context.abrupt("return", _waitForBehavior.waitForResult.PASS);
                    case 8:
                      return _context.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), globalConfig, {
              target: elementKey
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
(0, _cucumber.Then)(/^I fill in the "([^"]*)" input with random "([^"]*)"$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(elementKey, randomInputType) {
    var driver, globalConfig, elementIdentifier, validRandomInputType;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            driver = this.screen.driver, globalConfig = this.globalConfig;
            _logger.logger.log("I fill in the ".concat(elementKey, " input with random ").concat(randomInputType));
            _context4.next = 4;
            return (0, _webElementHelper.getElementLocator)(driver, elementKey, globalConfig);
          case 4:
            elementIdentifier = _context4.sent;
            validRandomInputType = (0, _optionsHelper.stringIsOfOptions)(randomInputType, _randomDataHelper.randomInputTypes);
            _context4.next = 8;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var elementStable, randomContent;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(driver, elementIdentifier);
                    case 2:
                      elementStable = _context3.sent;
                      if (!elementStable) {
                        _context3.next = 8;
                        break;
                      }
                      randomContent = (0, _randomDataHelper.getRandomData)(validRandomInputType);
                      _context3.next = 7;
                      return (0, _htmlBehavior.inputElementValue)(driver, elementIdentifier, randomContent);
                    case 7:
                      return _context3.abrupt("return", _waitForBehavior.waitForResult.PASS);
                    case 8:
                      return _context3.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })), globalConfig, {
              target: elementKey
            });
          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return function (_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());