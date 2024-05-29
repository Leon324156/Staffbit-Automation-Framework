"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _cucumber = require("@cucumber/cucumber");
var fs = _interopRequireWildcard(require("fs"));
var _parseEnv = require("../../env/parseEnv");
var _logger = require("../../logger");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) { if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } } return n["default"] = e, t && t.set(e, n), n; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(0, _cucumber.setDefaultTimeout)((0, _parseEnv.envNumber)('SCRIPT_TIMEOUT'));
(0, _cucumber.Before)( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(scenario) {
    var ready;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _logger.logger.log("\uD83E\uDD52 Running cucumber scenario ".concat(scenario.pickle.name));
            _context.next = 3;
            return this.init();
          case 3:
            ready = _context.sent;
            return _context.abrupt("return", ready);
          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.After)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(scenario) {
    var _scenario$result,
      _this = this;
    var driver, scenarioStatus;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            driver = this.screen.driver;
            scenarioStatus = (_scenario$result = scenario.result) === null || _scenario$result === void 0 ? void 0 : _scenario$result.status;
            if (scenarioStatus === 'FAILED') {
              driver.takeScreenshot().then(function (image) {
                _this.attach(image, 'image/png');
                fs.mkdirSync((0, _parseEnv.env)('SCREENSHOT_PATH'));
                fs.writeFileSync("".concat((0, _parseEnv.env)('SCREENSHOT_PATH')).concat(scenario.pickle.name, ".png"), image, 'base64');
              });
            }
            _context2.next = 5;
            return driver.quit();
          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}());