"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadPage = exports.navigateToPage = exports.getCurrentPageId = exports.currentPathMatchesPageId = void 0;
var _waitForBehavior = require("./wait-for-behavior");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var navigateToPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(driver, pageId, _ref) {
    var pagesConfig, hostsConfig, _process$env$UI_AUTOM, hostName, hostPath, url, pageConfigItem;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pagesConfig = _ref.pagesConfig, hostsConfig = _ref.hostsConfig;
            _process$env$UI_AUTOM = process.env.UI_AUTOMATION_HOST, hostName = _process$env$UI_AUTOM === void 0 ? 'localhost' : _process$env$UI_AUTOM;
            hostPath = hostsConfig["".concat(hostName)];
            url = new URL(hostPath);
            pageConfigItem = pagesConfig[pageId];
            url.pathname = pageConfigItem.route;
            _context.next = 8;
            return driver.get(url.href);
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function navigateToPage(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.navigateToPage = navigateToPage;
var currentPathMatchesPageId = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(driver, pageId, globalConfig) {
    var currentURL, _URL, currentPath;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return driver.getCurrentUrl();
          case 2:
            currentURL = _context2.sent;
            _URL = new URL(currentURL), currentPath = _URL.pathname;
            if (!pathMatchesPageId(currentPath, pageId, globalConfig)) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return", _waitForBehavior.waitForResult.PASS);
          case 6:
            return _context2.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function currentPathMatchesPageId(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.currentPathMatchesPageId = currentPathMatchesPageId;
var pathMatchesPageId = function pathMatchesPageId(path, pageId, _ref4) {
  var pagesConfig = _ref4.pagesConfig;
  var pageRegexString;
  try {
    pageRegexString = pagesConfig[pageId].regex;
  } catch (_unused) {
    throw Error("\uD83E\uDDE8 Unable to find the ".concat(pageId, " page mapping \uD83E\uDDE8"));
  }
  var pageRegex = new RegExp(pageRegexString);
  return pageRegex.test(path);
};
var getCurrentPageId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(driver, globalConfig) {
    var pagesConfig, currentURL, pageConfigPageIds, _URL2, currentPath, currentPageId;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            pagesConfig = globalConfig.pagesConfig;
            _context3.next = 3;
            return driver.getCurrentUrl();
          case 3:
            currentURL = _context3.sent;
            pageConfigPageIds = Object.keys(pagesConfig);
            _URL2 = new URL(currentURL), currentPath = _URL2.pathname;
            currentPageId = pageConfigPageIds.find(function (pageId) {
              return pathMatchesPageId(currentPath, pageId, globalConfig);
            });
            if (currentPageId) {
              _context3.next = 9;
              break;
            }
            throw Error("\uD83E\uDDE8 Failed to get page name from current route ".concat(currentPath, ",             possible pages: ").concat(JSON.stringify(pagesConfig), " \uD83E\uDDE8"));
          case 9:
            return _context3.abrupt("return", currentPageId);
          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getCurrentPageId(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getCurrentPageId = getCurrentPageId;
var reloadPage = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(driver) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return driver.navigate().refresh();
          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function reloadPage(_x9) {
    return _ref6.apply(this, arguments);
  };
}();
exports.reloadPage = reloadPage;