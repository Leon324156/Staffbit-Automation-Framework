"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectElementValue = exports.scrollElementIntoViewAtIndex = exports.scrollElementIntoView = exports.inputElementValue = exports.getElements = exports.getElementWithOptions = exports.getElementValue = exports.getElementTextAtIndex = exports.getElementText = exports.getElement = exports.getAttributeText = exports.elementEnabled = exports.elementDisplayedAtIndex = exports.elementDisplayed = exports.clickElementAtIndex = exports.clickElement = exports.browserSleep = void 0;
var _seleniumWebdriver = require("selenium-webdriver");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var browserSleep = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(driver, waitSeconds) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return driver.sleep(parseInt(waitSeconds, 10) * 1000);
          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function browserSleep(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.browserSleep = browserSleep;
var getElement = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(driver, elementIdentifier) {
    var element;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return driver.findElement(_seleniumWebdriver.By.css(elementIdentifier));
          case 2:
            element = _context2.sent;
            return _context2.abrupt("return", element);
          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getElement(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getElement = getElement;
var getElements = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(driver, elementIdentifier) {
    var elements;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return driver.findElements(_seleniumWebdriver.By.css(elementIdentifier));
          case 2:
            elements = _context3.sent;
            return _context3.abrupt("return", elements);
          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getElements(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getElements = getElements;
var getElementWithOptions = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(driver, elementIdentifier, option) {
    var element;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return driver.findElement(_seleniumWebdriver.By.css("".concat(elementIdentifier, " > option[value=").concat(option, "]")));
          case 2:
            element = _context4.sent;
            return _context4.abrupt("return", element);
          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function getElementWithOptions(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getElementWithOptions = getElementWithOptions;
var elementDisplayed = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(driver, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return driver.findElement(_seleniumWebdriver.By.css(elementIdentifier));
          case 3:
            return _context5.abrupt("return", true);
          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", false);
          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));
  return function elementDisplayed(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();
exports.elementDisplayed = elementDisplayed;
var elementDisplayedAtIndex = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(driver, elementIdentifier, elementIndex) {
    var elements;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return driver.findElements(_seleniumWebdriver.By.css(elementIdentifier));
          case 3:
            elements = _context6.sent;
            _context6.next = 6;
            return elements[elementIndex].isDisplayed();
          case 6:
            return _context6.abrupt("return", true);
          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", false);
          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 9]]);
  }));
  return function elementDisplayedAtIndex(_x12, _x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}();
exports.elementDisplayedAtIndex = elementDisplayedAtIndex;
var getElementText = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(driver, elementIdentifier) {
    var element, elementText;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return getElement(driver, elementIdentifier);
          case 2:
            element = _context7.sent;
            _context7.next = 5;
            return element.getAttribute("innerText");
          case 5:
            elementText = _context7.sent;
            return _context7.abrupt("return", elementText);
          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function getElementText(_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getElementText = getElementText;
var getElementTextAtIndex = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(driver, elementIdentifier, elementIndex) {
    var elements, textAtIndex;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return getElements(driver, elementIdentifier);
          case 2:
            elements = _context8.sent;
            _context8.next = 5;
            return elements[elementIndex].getText();
          case 5:
            textAtIndex = _context8.sent;
            return _context8.abrupt("return", textAtIndex);
          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function getElementTextAtIndex(_x17, _x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getElementTextAtIndex = getElementTextAtIndex;
var clickElement = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(driver, elementIdentifier) {
    var element;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return getElement(driver, elementIdentifier);
          case 2:
            element = _context9.sent;
            _context9.next = 5;
            return element.click();
          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function clickElement(_x20, _x21) {
    return _ref9.apply(this, arguments);
  };
}();
exports.clickElement = clickElement;
var clickElementAtIndex = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(driver, elementIdentifier, elementIndex) {
    var elements;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return getElements(driver, elementIdentifier);
          case 2:
            elements = _context10.sent;
            _context10.next = 5;
            return elements[elementIndex].click();
          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return function clickElementAtIndex(_x22, _x23, _x24) {
    return _ref10.apply(this, arguments);
  };
}();
exports.clickElementAtIndex = clickElementAtIndex;
var inputElementValue = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(driver, elementIdentifier, inputValue) {
    var element;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return getElement(driver, elementIdentifier);
          case 2:
            element = _context11.sent;
            _context11.next = 5;
            return element.clear();
          case 5:
            _context11.next = 7;
            return element.sendKeys(inputValue);
          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return function inputElementValue(_x25, _x26, _x27) {
    return _ref11.apply(this, arguments);
  };
}();
exports.inputElementValue = inputElementValue;
var selectElementValue = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(driver, elementIdentifier, option) {
    var element;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return getElementWithOptions(driver, elementIdentifier, option);
          case 2:
            element = _context12.sent;
            _context12.next = 5;
            return element.click();
          case 5:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return function selectElementValue(_x28, _x29, _x30) {
    return _ref12.apply(this, arguments);
  };
}();
exports.selectElementValue = selectElementValue;
var getElementValue = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(driver, elementIdentifier) {
    var element;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return getElement(driver, elementIdentifier);
          case 2:
            element = _context13.sent;
            _context13.next = 5;
            return element.getAttribute('value');
          case 5:
            return _context13.abrupt("return", _context13.sent);
          case 6:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return function getElementValue(_x31, _x32) {
    return _ref13.apply(this, arguments);
  };
}();
exports.getElementValue = getElementValue;
var scrollElementIntoView = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(driver, elementIdentifier) {
    var element;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return getElement(driver, elementIdentifier);
          case 2:
            element = _context14.sent;
            _context14.next = 5;
            return driver.executeScript("arguments[0].scrollIntoView(false)", element);
          case 5:
            _context14.next = 7;
            return driver.sleep(1500);
          case 7:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return function scrollElementIntoView(_x33, _x34) {
    return _ref14.apply(this, arguments);
  };
}();
exports.scrollElementIntoView = scrollElementIntoView;
var scrollElementIntoViewAtIndex = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(driver, elementIdentifier, elementIndex) {
    var element;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return getElements(driver, elementIdentifier);
          case 2:
            element = _context15.sent;
            _context15.next = 5;
            return driver.executeScript("arguments[0].scrollIntoView(false)", element[elementIndex]);
          case 5:
            _context15.next = 7;
            return driver.sleep(1500);
          case 7:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return function scrollElementIntoViewAtIndex(_x35, _x36, _x37) {
    return _ref15.apply(this, arguments);
  };
}();
exports.scrollElementIntoViewAtIndex = scrollElementIntoViewAtIndex;
var elementEnabled = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(driver, elementIdentifier) {
    var element;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return getElement(driver, elementIdentifier);
          case 2:
            element = _context16.sent;
            _context16.next = 5;
            return element.isEnabled();
          case 5:
            if (_context16.sent) {
              _context16.next = 9;
              break;
            }
            return _context16.abrupt("return", false);
          case 9:
            return _context16.abrupt("return", true);
          case 10:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return function elementEnabled(_x38, _x39) {
    return _ref16.apply(this, arguments);
  };
}();
exports.elementEnabled = elementEnabled;
var retrieveTableData = function retrieveTableData(driver, elementIdentifier) {
  return new Promise(function (resolve) {
    var cell = [];
    driver.findElement(_seleniumWebdriver.By.css(elementIdentifier + " tbody")).then( /*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(rows) {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                rows.findElements(_seleniumWebdriver.By.css("tr td")).then( /*#__PURE__*/function () {
                  var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(cells) {
                    var i, cell_text;
                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                      while (1) {
                        switch (_context17.prev = _context17.next) {
                          case 0:
                            i = 0;
                          case 1:
                            if (!(i < cells.length)) {
                              _context17.next = 9;
                              break;
                            }
                            _context17.next = 4;
                            return cells[i].getText();
                          case 4:
                            cell_text = _context17.sent;
                            cell.push(cell_text);
                          case 6:
                            i++;
                            _context17.next = 1;
                            break;
                          case 9:
                            resolve(cell);
                          case 10:
                          case "end":
                            return _context17.stop();
                        }
                      }
                    }, _callee17);
                  }));
                  return function (_x41) {
                    return _ref18.apply(this, arguments);
                  };
                }());
              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));
      return function (_x40) {
        return _ref17.apply(this, arguments);
      };
    }());
  });
};
var getAttributeText = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(driver, elementIdentifier, attribute) {
    var element, attributeText;
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return getElement(driver, elementIdentifier);
          case 2:
            element = _context19.sent;
            attributeText = element.getAttribute(attribute);
            return _context19.abrupt("return", attributeText);
          case 5:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));
  return function getAttributeText(_x42, _x43, _x44) {
    return _ref19.apply(this, arguments);
  };
}();
exports.getAttributeText = getAttributeText;