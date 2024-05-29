"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _parseEnv = require("./env/parseEnv");
var fs = _interopRequireWildcard(require("fs"));
var _tagHelper = require("./support/tag-helper");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) { if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var environment = (0, _parseEnv.env)('NODE_ENV');
_dotenv["default"].config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});
_dotenv["default"].config({
  path: "".concat((0, _parseEnv.env)('ENV_PATH')).concat(environment, ".env")
});
var hostsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('HOSTS_URLS_PATH'));
var pagesConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('PAGE_URLS_PATH'));
var emailsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('EMAILS_URLS_PATH'));
var mappingFiles = fs.readdirSync("".concat(process.cwd()).concat((0, _parseEnv.env)('PAGE_ELEMENTS_PATH')));
var getEnvList = function getEnvList() {
  var envList = Object.keys(hostsConfig);
  if (envList.length === 0) {
    throw Error("\uD83E\uDDE8 No environments mapped in your ".concat((0, _parseEnv.env)('HOSTS_URLS_PATH'), " \uD83E\uDDE8"));
  }
  return envList;
};
var pageElementMappings = mappingFiles.reduce(function (pageElementConfigAcc, file) {
  var key = file.replace('.json', '');
  var elementMappings = (0, _parseEnv.getJsonFromFile)("".concat((0, _parseEnv.env)('PAGE_ELEMENTS_PATH')).concat(file));
  return _objectSpread(_objectSpread({}, pageElementConfigAcc), {}, _defineProperty({}, key, elementMappings));
}, {});
var worldParameters = {
  hostsConfig: hostsConfig,
  pagesConfig: pagesConfig,
  emailsConfig: emailsConfig,
  pageElementMappings: pageElementMappings
};
var common = "./src/features/**/*.feature         --require-module ts-node/register         --require ./src/step-definitions/**/**/*.ts         -f json:./reports/report.json         --world-parameters ".concat(JSON.stringify(worldParameters), "         --format progress-bar         --parallel ").concat((0, _parseEnv.env)('PARALLEL'), "         --retry ").concat((0, _parseEnv.env)('RETRY'));
var dev = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'dev');
exports.dev = dev;
var smoke = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'smoke');
exports.smoke = smoke;
var regression = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'regression');
exports.regression = regression;
console.log("\uD83E\uDD52\u2728\uD83E\uDD52\u2728\uD83E\uDD52\u2728\uD83E\uDD52\u2728\uD83E\uDD52\u2728\uD83E\uDD52\u2728\uD83E\uDD52\u2728\uD83E\uDD52\u2728");