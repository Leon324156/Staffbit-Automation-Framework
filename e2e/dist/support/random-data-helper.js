"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomPassword = exports.randomInputTypes = exports.randomEmail = exports.getRandomData = void 0;
var _faker = _interopRequireDefault(require("@faker-js/faker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var randomInputTypes = ['email', 'password'];
exports.randomInputTypes = randomInputTypes;
var getRandomData = function getRandomData(randomInputType) {
  switch (randomInputType) {
    case 'email':
      return randomEmail();
    case 'password':
      return randomPassword();
    default:
      return '';
  }
};
exports.getRandomData = getRandomData;
var randomEmail = function randomEmail() {
  return _faker["default"].internet.exampleEmail();
};
exports.randomEmail = randomEmail;
var randomPassword = function randomPassword() {
  return _faker["default"].internet.password();
};
exports.randomPassword = randomPassword;