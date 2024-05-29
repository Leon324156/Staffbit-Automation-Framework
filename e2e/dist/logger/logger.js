"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLogger = void 0;
var _parseEnv = require("../env/parseEnv");
var _optionsHelper = require("../support/options-helper");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DEBUG = 'debug';
var LOG = 'log';
var ERROR = 'error';
var OFF = 'off';
var LOG_LEVELS = [DEBUG, LOG, ERROR, OFF];
var getLogLevel = function getLogLevel(logLevel) {
  var dynamicLogLevelIndex = LOG_LEVELS.indexOf(logLevel);
  return LOG_LEVELS.slice(dynamicLogLevelIndex);
};
var logFuncAtLevels = function logFuncAtLevels(logLevels) {
  var logFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console;
  return function (logLevel) {
    for (var _len = arguments.length, msg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      msg[_key - 1] = arguments[_key];
    }
    if (logLevel !== OFF && logLevels.indexOf(logLevel) !== -1 && msg.length > 0) {
      logFunction[logLevel].apply(logFunction, msg);
    }
  };
};
var createLogger = function createLogger(logLevel) {
  var activeLogLevels = getLogLevel(logLevel);
  var logger = logFuncAtLevels(activeLogLevels);
  return LOG_LEVELS.reduce(function (accumulator, level) {
    return _objectSpread(_objectSpread({}, accumulator), {}, _defineProperty({}, level, function () {
      for (var _len2 = arguments.length, msg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        msg[_key2] = arguments[_key2];
      }
      return logger.apply(void 0, [level].concat(msg));
    }));
  }, {});
};
var loggerSingleton = null;
var getLogger = function getLogger() {
  if (!loggerSingleton) {
    var logLevel = (0, _parseEnv.env)('LOG_LEVEL');
    var validLogLevel = (0, _optionsHelper.stringIsOfOptions)(logLevel, LOG_LEVELS);
    loggerSingleton = createLogger(validLogLevel);
  }
  return loggerSingleton;
};
exports.getLogger = getLogger;