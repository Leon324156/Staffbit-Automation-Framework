"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScenarioWorld = void 0;
var _seleniumWebdriver = require("selenium-webdriver");
var _cucumber = require("@cucumber/cucumber");
var _parseEnv = require("../../env/parseEnv");
var _optionsHelper = require("../../support/options-helper");
var _firefox = _interopRequireDefault(require("selenium-webdriver/firefox"));
var _chrome = require("selenium-webdriver/chrome");
var _logger = require("../../logger");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ScenarioWorld = /*#__PURE__*/function (_World) {
  _inherits(ScenarioWorld, _World);
  var _super = _createSuper(ScenarioWorld);
  function ScenarioWorld(options) {
    var _this;
    _classCallCheck(this, ScenarioWorld);
    _this = _super.call(this, options);
    _defineProperty(_assertThisInitialized(_this), "globalConfig", void 0);
    _defineProperty(_assertThisInitialized(_this), "globalVariables", void 0);
    _defineProperty(_assertThisInitialized(_this), "screen", void 0);
    _defineProperty(_assertThisInitialized(_this), "browserDimensions", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {
                width: (0, _parseEnv.envNumber)('BROWSER_WIDTH'),
                height: (0, _parseEnv.envNumber)('BROWSER_HEIGHT')
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    _defineProperty(_assertThisInitialized(_this), "newBrowser", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var automationBrowser, automationBrowsers, validAutomationBrowser;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              automationBrowser = (0, _parseEnv.env)('UI_AUTOMATION_BROWSER');
              automationBrowsers = ['chrome', 'firefox', 'safari'];
              validAutomationBrowser = (0, _optionsHelper.stringIsOfOptions)(automationBrowser, automationBrowsers);
              return _context2.abrupt("return", validAutomationBrowser);
            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    _defineProperty(_assertThisInitialized(_this), "browserBuilder", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(browser) {
        var builder, chromeBrowserOptions, firefoxBrowserOptions;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _logger.logger.log("\uD83D\uDDA5 Executing on ".concat(browser, " browser \uD83D\uDDA5"));
                builder = new _seleniumWebdriver.Builder();
                _context3.t0 = browser;
                _context3.next = _context3.t0 === "chrome" ? 5 : _context3.t0 === "firefox" ? 9 : 14;
                break;
              case 5:
                chromeBrowserOptions = new _chrome.Options();
                chromeBrowserOptions.addArguments((0, _parseEnv.env)('BROWSER_ARGUMENTS'));
                return _context3.abrupt("return", builder.forBrowser(browser).withCapabilities(chromeBrowserOptions));
              case 9:
                firefoxBrowserOptions = new _firefox["default"].Options();
                firefoxBrowserOptions.addArguments((0, _parseEnv.env)('BROWSER_ARGUMENTS'));
                firefoxBrowserOptions.set("acceptInsecureCerts", true);
                return _context3.abrupt("return", builder.forBrowser(browser).setFirefoxOptions(firefoxBrowserOptions));
              case 14:
                return _context3.abrupt("return", builder.forBrowser(browser));
              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
    _this.globalConfig = options.parameters;
    _this.globalVariables = {};
    return _this;
  }
  _createClass(ScenarioWorld, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var browser, browserBuilder, browserDimensions, driver;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.newBrowser();
              case 2:
                browser = _context4.sent;
                _context4.next = 5;
                return this.browserBuilder(browser);
              case 5:
                browserBuilder = _context4.sent;
                _context4.next = 8;
                return this.browserDimensions();
              case 8:
                browserDimensions = _context4.sent;
                driver = browserBuilder.build();
                _context4.next = 12;
                return driver.manage().window().setRect(browserDimensions);
              case 12:
                this.screen = {
                  driver: driver
                };
                return _context4.abrupt("return", this.screen);
              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }]);
  return ScenarioWorld;
}(_cucumber.World);
exports.ScenarioWorld = ScenarioWorld;
(0, _cucumber.setWorldConstructor)(ScenarioWorld);