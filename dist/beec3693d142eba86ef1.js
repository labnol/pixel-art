/*

GOOGLE SPREADSHEET ART

Written by Amit Agarwal
Email: amit@labnol.org
Web: https://ctrlq.org

Published: February 21, 2018

*/
function onOpen() {
}
function onInstall() {
}
function showSidebar() {
}
function showVideo() {
}
function render() {
}(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/*

GOOGLE SPREADSHEET ART

Written by Amit Agarwal
Email: amit@labnol.org
Web: https://ctrlq.org

Published: February 21, 2018

*/


global.onOpen = _ui__WEBPACK_IMPORTED_MODULE_0__["onOpen"];
global.onInstall = _ui__WEBPACK_IMPORTED_MODULE_0__["onInstall"];
global.showSidebar = _ui__WEBPACK_IMPORTED_MODULE_0__["showSidebar"];
global.showVideo = _ui__WEBPACK_IMPORTED_MODULE_0__["showVideo"];
global.render = _render__WEBPACK_IMPORTED_MODULE_1__["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSidebar", function() { return showSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showVideo", function() { return showVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onOpen", function() { return onOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onInstall", function() { return onInstall; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var showSidebar = function showSidebar() {
  var template = HtmlService.createTemplateFromFile('canvas');
  template.userEmail = Object(_user__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var html = template.evaluate();
  html.setTitle('Pixel Art for Google Sheets');
  SpreadsheetApp.getUi().showSidebar(html);
};
var showVideo = function showVideo() {
  var html = HtmlService.createHtmlOutputFromFile('support');
  html.setWidth(575).setHeight(480).setTitle('Pixel Art 101');
  SpreadsheetApp.getUi().showModalDialog(html, 'Pixel Art');
};
var onOpen = function onOpen() {
  SpreadsheetApp.getUi().createAddonMenu().addItem('Open', 'showSidebar').addSeparator().addItem('Tutorial', 'showVideo').addToUi();
};
var onInstall = function onInstall() {
  onOpen();
  console.info('💕', Object(_user__WEBPACK_IMPORTED_MODULE_0__["default"])());
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var emailAddress = null;

var getUserEmail = function getUserEmail() {
  if (emailAddress !== null) return emailAddress;

  try {
    emailAddress = Object(_multiple__WEBPACK_IMPORTED_MODULE_0__["getEffectiveUser"])() || Object(_multiple__WEBPACK_IMPORTED_MODULE_0__["getActiveUser"])() || '';
  } catch (f) {
    emailAddress = '';
  }

  return emailAddress;
};

/* harmony default export */ __webpack_exports__["default"] = (getUserEmail);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEffectiveUser", function() { return getEffectiveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveUser", function() { return getActiveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultipleAccountIssue", function() { return isMultipleAccountIssue; });
/* harmony import */ var _backoff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


var clean = function clean() {
  var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return email.toLowerCase().trim();
};

var getEffectiveUser = function getEffectiveUser() {
  return Object(_backoff__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return clean(Session.getEffectiveUser().getEmail());
  });
};
var getActiveUser = function getActiveUser() {
  return Object(_backoff__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return clean(Session.getActiveUser().getEmail());
  });
};
var isMultipleAccountIssue = function isMultipleAccountIssue() {
  var initiator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  try {
    var currentUser = getEffectiveUser();

    if (initiator && currentUser) {
      if (initiator !== currentUser) {
        return "Please <a target=\"_blank\" href=\"https://accounts.google.com/logout\">log out</a> " + "of your Google Account ".concat(currentUser, " to use Mail Merge with ").concat(initiator);
      }
    }
  } catch (f) {// do nothing
  }

  return '';
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var MAX_RETRIES = 4;
var ONE_SECOND = 1000;

var expBackoff = function expBackoff(func) {
  for (var n = 0; n < MAX_RETRIES; n += 1) {
    try {
      return func();
    } catch (e) {
      if (n === MAX_RETRIES - 1) {
        throw e;
      }

      Utilities.sleep(Math.pow(2, n) * ONE_SECOND + Math.round(Math.random() * ONE_SECOND));
    }
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (expBackoff);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





var render = function render(email, data, mode) {
  try {
    var err = Object(_multiple__WEBPACK_IMPORTED_MODULE_3__["isMultipleAccountIssue"])(email);
    if (err) return err;
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["toast"])('Adding new sheet..');
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["sheet"])();
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["toast"])('Extracting Colors..');
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["sheet"])().getRange(1, 1, data.length, data[0].length).setValues(data).setHorizontalAlignment('center').setVerticalAlignment('center').setFontFamily('Roboto Mono').setFontSize(8);
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["flushSheet"])();
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["deleteEmptyCells"])();
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["toast"])('Adjusting rows..');
    var maxRow = Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["sheet"])().getMaxRows();

    for (var i = 1; i <= maxRow; i += 1) {
      Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["sheet"])().setRowHeight(i, 12);
    }

    for (var r = 0, rl = data.length; r < rl; r += 1) {
      for (var d = 0, dl = data[0].length; d < dl; d += 1) {
        var range = Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["sheet"])().getRange(r + 1, d + 1);

        if (mode === 'pixel') {
          if (data[r][d] !== '#ffffff') {
            range.setBackground(data[r][d]);
          }
        } else {
          var _getClosestEmoji = Object(_emoji__WEBPACK_IMPORTED_MODULE_1__["default"])(data[r][d].split('.')),
              emoji = _getClosestEmoji.emoji,
              colors = _getClosestEmoji.colors;

          range.setValue(emoji).setBackgroundRGB(colors[0], colors[1], colors[2]);
        }
      }

      if (r && r % 10 === 0) {
        Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["toast"])("Processing ".concat(r, "th row of ").concat(rl));
        Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["flushSheet"])();
        Utilities.sleep(1000);
      }
    }

    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["toast"])('Adjusting columns..');
    var maxCol = Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["sheet"])().getMaxColumns();

    for (var c = 1; c <= maxCol; c += 1) {
      Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["sheet"])().setColumnWidth(c, 12);
    }

    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["flushSheet"])();
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["toast"])('Almost there..');
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["sheet"])().getRange(1, 1, maxRow, maxCol).setFontSize(6);
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["flushSheet"])();

    if (mode === 'pixel') {
      Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["sheet"])().clear({
        contentsOnly: true
      });
    }

    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["flushSheet"])();
    Utilities.sleep(1000);
    Object(_sheet__WEBPACK_IMPORTED_MODULE_0__["toast"])('Artwork is ready!');
    return 'OK';
  } catch (f) {
    return Object(_exception__WEBPACK_IMPORTED_MODULE_2__["default"])(f);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ss", function() { return ss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flushSheet", function() { return flushSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmptyCells", function() { return deleteEmptyCells; });
/* harmony import */ var _backoff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


function ss() {
  if (typeof this.ss === 'undefined') {
    try {
      this.ss = Object(_backoff__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        return SpreadsheetApp.getActiveSpreadsheet();
      });
    } catch (f) {
      Object(_exception__WEBPACK_IMPORTED_MODULE_1__["default"])(f);
      this.ss = null;
    }
  }

  return this.ss;
}
var toast = function toast() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  try {
    if (e && ss()) {
      ss().toast(e);
    }
  } catch (f) {// Do nothing
  }
};
var flushSheet = function flushSheet() {
  try {
    SpreadsheetApp.flush();
  } catch (f) {
    Object(_exception__WEBPACK_IMPORTED_MODULE_1__["default"])(f); // Do nothing
  }
};
function sheet() {
  if (typeof this.newsheet === 'undefined') {
    try {
      this.newsheet = Object(_backoff__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        return ss().insertSheet();
      });
      ss().setActiveSheet(this.newsheet);
      flushSheet();
    } catch (f) {
      Object(_exception__WEBPACK_IMPORTED_MODULE_1__["default"])(f);
      this.newsheet = null;
    }
  }

  return this.newsheet;
}
var deleteEmptyCells = function deleteEmptyCells() {
  try {
    toast('Deleting empty rows..');
    var maxRows = sheet().getMaxRows();
    var lastRow = sheet().getLastRow();
    sheet().deleteRows(lastRow + 1, maxRows - lastRow);
    flushSheet();
    toast('Deleting empty columns..');
    var maxCols = sheet().getMaxColumns();
    var lastCol = sheet().getLastColumn();
    sheet().deleteColumns(lastCol + 1, maxCols - lastCol);
    flushSheet();
  } catch (e) {
    Object(_exception__WEBPACK_IMPORTED_MODULE_1__["default"])(e);
  }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


var exception = function exception() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    var stack = e.stack,
        _e$message = e.message,
        message = _e$message === void 0 ? '' : _e$message;
    console.error(Object(_user__WEBPACK_IMPORTED_MODULE_0__["default"])(), stack, message);
    return "Error: ".concat(message);
  } catch (ferr) {
    return 'Something went wrong. Sorry!';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (exception);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Credit: Monica Dinulescu
// Emojillate https://github.com/notwaldorf/emojillate
var emojiColorMap = [{
  color: [38, 38, 38],
  emoji: '❔'
}, {
  color: [86, 64, 19],
  emoji: '👈'
}, {
  color: [84, 92, 47],
  emoji: '👒'
}, {
  color: [59, 8, 11],
  emoji: '👣'
}, {
  color: [0, 0, 0],
  emoji: '✳'
}, {
  color: [75, 45, 23],
  emoji: '🍕'
}, {
  color: [0, 0, 0],
  emoji: '⚠'
}, {
  color: [187, 187, 187],
  emoji: '⬜'
}, {
  color: [104, 124, 146],
  emoji: '📶'
}, {
  color: [86, 68, 19],
  emoji: '🐥'
}, {
  color: [157, 164, 173],
  emoji: '🗼'
}, {
  color: [115, 88, 28],
  emoji: '💪'
}, {
  color: [112, 86, 33],
  emoji: '👋'
}, {
  color: [122, 122, 122],
  emoji: '🕖'
}, {
  color: [115, 52, 45],
  emoji: '⏰'
}, {
  color: [142, 104, 116],
  emoji: '🌸'
}, {
  color: [134, 80, 152],
  emoji: '♑'
}, {
  color: [71, 70, 61],
  emoji: '🏠'
}, {
  color: [108, 69, 31],
  emoji: '🔶'
}, {
  color: [85, 58, 57],
  emoji: '🏈'
}, {
  color: [129, 115, 55],
  emoji: '😹'
}, {
  color: [84, 84, 82],
  emoji: '👀'
}, {
  color: [156, 120, 49],
  emoji: '🙎'
}, {
  color: [50, 39, 15],
  emoji: '🎷'
}, {
  color: [92, 92, 92],
  emoji: '🔘'
}, {
  color: [91, 58, 55],
  emoji: '🎎'
}, {
  color: [47, 103, 178],
  emoji: '🚾'
}, {
  color: [12, 12, 12],
  emoji: '🔃'
}, {
  color: [114, 109, 89],
  emoji: '🍵'
}, {
  color: [93, 130, 168],
  emoji: '🗾'
}, {
  color: [106, 35, 26],
  emoji: '🍣'
}, {
  color: [112, 114, 117],
  emoji: '💾'
}, {
  color: [84, 92, 47],
  emoji: '👒'
}, {
  color: [157, 141, 79],
  emoji: '🌕'
}, {
  color: [54, 118, 145],
  emoji: '🎽'
}, {
  color: [154, 61, 96],
  emoji: '💖'
}, {
  color: [150, 118, 57],
  emoji: '💇'
}, {
  color: [160, 117, 39],
  emoji: '😘'
}, {
  color: [194, 122, 57],
  emoji: '🆚'
}, {
  color: [107, 100, 99],
  emoji: '🐚'
}, {
  color: [194, 126, 67],
  emoji: '🈚'
}, {
  color: [9, 36, 101],
  emoji: '🌀'
}, {
  color: [75, 75, 77],
  emoji: '💻'
}, {
  color: [0, 0, 0],
  emoji: '⁉'
}, {
  color: [70, 69, 70],
  emoji: '🚓'
}, {
  color: [100, 75, 23],
  emoji: '✋'
}, {
  color: [40, 64, 40],
  emoji: '🐲'
}, {
  color: [111, 104, 108],
  emoji: '📥'
}, {
  color: [110, 45, 34],
  emoji: '📮'
}, {
  color: [124, 97, 72],
  emoji: '📦'
}, {
  color: [85, 58, 57],
  emoji: '🏈'
}, {
  color: [108, 81, 36],
  emoji: '🐻'
}, {
  color: [0, 0, 0],
  emoji: '™'
}, {
  color: [180, 86, 122],
  emoji: '🈹'
}, {
  color: [45, 35, 18],
  emoji: '👢'
}, {
  color: [107, 100, 99],
  emoji: '🐚'
}, {
  color: [52, 56, 71],
  emoji: '💺'
}, {
  color: [155, 120, 28],
  emoji: '👨'
}, {
  color: [73, 59, 49],
  emoji: '🚀'
}, {
  color: [155, 120, 28],
  emoji: '👨'
}, {
  color: [145, 52, 104],
  emoji: '💗'
}, {
  color: [97, 92, 68],
  emoji: '🐝'
}, {
  color: [78, 78, 78],
  emoji: '📓'
}, {
  color: [199, 153, 35],
  emoji: '👸'
}, {
  color: [135, 80, 30],
  emoji: '🍊'
}, {
  color: [0, 13, 41],
  emoji: '💤'
}, {
  color: [0, 0, 0],
  emoji: '☺'
}, {
  color: [131, 124, 108],
  emoji: '⛅'
}, {
  color: [40, 8, 6],
  emoji: '❓'
}, {
  color: [38, 13, 13],
  emoji: '📍'
}, {
  color: [184, 139, 29],
  emoji: '👧'
}, {
  color: [0, 0, 0],
  emoji: '↖'
}, {
  color: [194, 126, 67],
  emoji: '🈚'
}, {
  color: [128, 102, 48],
  emoji: '🌟'
}, {
  color: [75, 45, 23],
  emoji: '🍕'
}, {
  color: [66, 54, 24],
  emoji: '🐺'
}, {
  color: [52, 58, 67],
  emoji: '🔦'
}, {
  color: [131, 111, 68],
  emoji: '👳'
}, {
  color: [0, 0, 0],
  emoji: '⬆'
}, {
  color: [87, 51, 19],
  emoji: '🍘'
}, {
  color: [42, 51, 48],
  emoji: '🍬'
}, {
  color: [163, 159, 160],
  emoji: '📈'
}, {
  color: [38, 38, 38],
  emoji: '❔'
}, {
  color: [124, 130, 136],
  emoji: '📂'
}, {
  color: [65, 54, 55],
  emoji: '🎌'
}, {
  color: [76, 55, 35],
  emoji: '👜'
}, {
  color: [42, 48, 55],
  emoji: '🎐'
}, {
  color: [51, 35, 15],
  emoji: '🔑'
}, {
  color: [93, 86, 74],
  emoji: '💴'
}, {
  color: [162, 126, 42],
  emoji: '😒'
}, {
  color: [176, 137, 75],
  emoji: '👪'
}, {
  color: [77, 55, 40],
  emoji: '🍠'
}, {
  color: [94, 111, 85],
  emoji: '⛺'
}, {
  color: [142, 127, 124],
  emoji: '📩'
}, {
  color: [81, 63, 43],
  emoji: '🍭'
}, {
  color: [42, 43, 47],
  emoji: '📼'
}, {
  color: [40, 106, 28],
  emoji: '🍀'
}, {
  color: [113, 105, 90],
  emoji: '🍜'
}, {
  color: [0, 0, 0],
  emoji: '⤵'
}, {
  color: [100, 121, 143],
  emoji: '🆒'
}, {
  color: [0, 0, 0],
  emoji: '♨'
}, {
  color: [171, 140, 74],
  emoji: '😤'
}, {
  color: [51, 33, 33],
  emoji: '🔻'
}, {
  color: [84, 81, 52],
  emoji: '🙇'
}, {
  color: [68, 47, 40],
  emoji: '🍫'
}, {
  color: [47, 53, 38],
  emoji: '🎍'
}, {
  color: [101, 85, 57],
  emoji: '📻'
}, {
  color: [73, 45, 45],
  emoji: '🎴'
}, {
  color: [69, 71, 77],
  emoji: '📹'
}, {
  color: [91, 79, 68],
  emoji: '🍮'
}, {
  color: [59, 109, 146],
  emoji: '🏧'
}, {
  color: [56, 84, 100],
  emoji: '💠'
}, {
  color: [0, 0, 0],
  emoji: '🈂'
}, {
  color: [94, 111, 85],
  emoji: '⛺'
}, {
  color: [120, 120, 120],
  emoji: '🕙'
}, {
  color: [95, 99, 100],
  emoji: '📱'
}, {
  color: [109, 71, 20],
  emoji: '👘'
}, {
  color: [149, 109, 32],
  emoji: '😽'
}, {
  color: [45, 36, 10],
  emoji: '🎺'
}, {
  color: [104, 23, 15],
  emoji: '🚫'
}, {
  color: [160, 52, 45],
  emoji: '🆘'
}, {
  color: [122, 122, 122],
  emoji: '🕚'
}, {
  color: [13, 13, 13],
  emoji: '🐜'
}, {
  color: [140, 93, 155],
  emoji: '♎'
}, {
  color: [71, 70, 61],
  emoji: '🏠'
}, {
  color: [14, 14, 14],
  emoji: '➗'
}, {
  color: [70, 70, 70],
  emoji: '🚽'
}, {
  color: [38, 38, 38],
  emoji: '❔'
}, {
  color: [74, 45, 9],
  emoji: '⚡'
}, {
  color: [57, 57, 57],
  emoji: '🔗'
}, {
  color: [153, 141, 147],
  emoji: '🍥'
}, {
  color: [120, 80, 37],
  emoji: '🍔'
}, {
  color: [62, 65, 61],
  emoji: '📟'
}, {
  color: [106, 105, 73],
  emoji: '👼'
}, {
  color: [131, 135, 136],
  emoji: '🏂'
}, {
  color: [115, 88, 28],
  emoji: '💪'
}, {
  color: [88, 82, 69],
  emoji: '🐑'
}, {
  color: [66, 58, 32],
  emoji: '💫'
}, {
  color: [0, 0, 0],
  emoji: '➡'
}, {
  color: [84, 78, 80],
  emoji: '🐰'
}, {
  color: [105, 58, 114],
  emoji: '💘'
}, {
  color: [130, 65, 34],
  emoji: '🍅'
}, {
  color: [157, 141, 79],
  emoji: '🌕'
}, {
  color: [39, 37, 40],
  emoji: '🚏'
}, {
  color: [0, 0, 0],
  emoji: '❄'
}, {
  color: [89, 88, 88],
  emoji: '👟'
}, {
  color: [80, 49, 47],
  emoji: '👙'
}, {
  color: [69, 100, 118],
  emoji: '💎'
}, {
  color: [42, 43, 47],
  emoji: '📼'
}, {
  color: [155, 120, 28],
  emoji: '👨'
}, {
  color: [120, 80, 37],
  emoji: '🍔'
}, {
  color: [127, 126, 109],
  emoji: '💸'
}, {
  color: [0, 0, 0],
  emoji: '↔'
}, {
  color: [0, 0, 0],
  emoji: '♦'
}, {
  color: [76, 70, 55],
  emoji: '🙏'
}, {
  color: [132, 76, 150],
  emoji: '♐'
}, {
  color: [93, 56, 4],
  emoji: '✨'
}, {
  color: [14, 80, 35],
  emoji: '🐸'
}, {
  color: [87, 35, 24],
  emoji: '👹'
}, {
  color: [40, 64, 40],
  emoji: '🐲'
}, {
  color: [19, 18, 15],
  emoji: '🔌'
}, {
  color: [140, 93, 155],
  emoji: '♎'
}, {
  color: [0, 0, 0],
  emoji: '〰'
}, {
  color: [49, 49, 49],
  emoji: '🎱'
}, {
  color: [128, 102, 48],
  emoji: '🌟'
}, {
  color: [66, 72, 70],
  emoji: '🐦'
}, {
  color: [158, 125, 49],
  emoji: '😢'
}, {
  color: [86, 64, 84],
  emoji: '🔮'
}, {
  color: [132, 121, 73],
  emoji: '🌔'
}, {
  color: [0, 0, 0],
  emoji: '✒'
}, {
  color: [120, 120, 120],
  emoji: '🕐'
}, {
  color: [71, 89, 58],
  emoji: '🐠'
}, {
  color: [162, 61, 54],
  emoji: '🆑'
}, {
  color: [71, 67, 36],
  emoji: '🚧'
}, {
  color: [9, 19, 38],
  emoji: '🔹'
}, {
  color: [56, 45, 71],
  emoji: '👾'
}, {
  color: [9, 36, 101],
  emoji: '🌀'
}, {
  color: [118, 91, 57],
  emoji: '🍪'
}, {
  color: [126, 93, 101],
  emoji: '👅'
}, {
  color: [154, 117, 47],
  emoji: '😄'
}, {
  color: [50, 48, 44],
  emoji: '🚥'
}, {
  color: [110, 45, 34],
  emoji: '📮'
}, {
  color: [90, 68, 12],
  emoji: '🌻'
}, {
  color: [59, 45, 36],
  emoji: '🎻'
}, {
  color: [0, 0, 0],
  emoji: '☺'
}, {
  color: [56, 83, 106],
  emoji: '📫'
}, {
  color: [132, 91, 43],
  emoji: '👫'
}, {
  color: [87, 81, 76],
  emoji: '⛪'
}, {
  color: [9, 9, 9],
  emoji: '➖'
}, {
  color: [69, 100, 118],
  emoji: '💎'
}, {
  color: [0, 0, 0],
  emoji: '✒'
}, {
  color: [159, 119, 73],
  emoji: '😷'
}, {
  color: [99, 73, 20],
  emoji: '✌'
}, {
  color: [54, 54, 54],
  emoji: '🎧'
}, {
  color: [14, 80, 35],
  emoji: '🐸'
}, {
  color: [0, 0, 0],
  emoji: '‼'
}, {
  color: [111, 91, 60],
  emoji: '🙈'
}, {
  color: [64, 63, 64],
  emoji: '🔊'
}, {
  color: [29, 29, 29],
  emoji: '🔝'
}, {
  color: [107, 107, 84],
  emoji: '📡'
}, {
  color: [72, 70, 64],
  emoji: '🛀'
}, {
  color: [115, 93, 21],
  emoji: '🌼'
}, {
  color: [118, 91, 57],
  emoji: '🍪'
}, {
  color: [56, 83, 106],
  emoji: '📫'
}, {
  color: [122, 116, 93],
  emoji: '😰'
}, {
  color: [0, 0, 0],
  emoji: '⁉'
}, {
  color: [41, 61, 25],
  emoji: '🌿'
}, {
  color: [121, 121, 121],
  emoji: '🕔'
}, {
  color: [134, 78, 152],
  emoji: '⛎'
}, {
  color: [9, 19, 38],
  emoji: '🔹'
}, {
  color: [47, 103, 178],
  emoji: '🚾'
}, {
  color: [30, 23, 18],
  emoji: '🔨'
}, {
  color: [139, 102, 29],
  emoji: '👎'
}, {
  color: [112, 129, 146],
  emoji: '⏬'
}, {
  color: [155, 120, 28],
  emoji: '👨'
}, {
  color: [83, 98, 99],
  emoji: '🏦'
}, {
  color: [0, 0, 0],
  emoji: '♨'
}, {
  color: [0, 0, 0],
  emoji: '✉'
}, {
  color: [90, 72, 49],
  emoji: '🔔'
}, {
  color: [108, 81, 36],
  emoji: '🐻'
}, {
  color: [95, 81, 33],
  emoji: '🌛'
}, {
  color: [163, 159, 160],
  emoji: '📈'
}, {
  color: [151, 73, 73],
  emoji: '🚨'
}, {
  color: [120, 120, 120],
  emoji: '🕕'
}, {
  color: [159, 119, 73],
  emoji: '😷'
}, {
  color: [52, 56, 71],
  emoji: '💺'
}, {
  color: [8, 27, 3],
  emoji: '🌱'
}, {
  color: [151, 73, 73],
  emoji: '🚨'
}, {
  color: [153, 153, 153],
  emoji: '📃'
}, {
  color: [76, 67, 61],
  emoji: '🎊'
}, {
  color: [38, 38, 38],
  emoji: '❔'
}, {
  color: [194, 126, 67],
  emoji: '🈚'
}, {
  color: [52, 44, 36],
  emoji: '🍢'
}, {
  color: [156, 119, 47],
  emoji: '😃'
}, {
  color: [0, 0, 0],
  emoji: '✖'
}, {
  color: [60, 134, 52],
  emoji: '💚'
}, {
  color: [0, 0, 0],
  emoji: '🅾'
}, {
  color: [164, 127, 43],
  emoji: '😔'
}, {
  color: [140, 94, 56],
  emoji: '🍤'
}, {
  color: [135, 101, 22],
  emoji: '👴'
}, {
  color: [116, 41, 34],
  emoji: '👺'
}, {
  color: [21, 52, 44],
  emoji: '🎿'
}, {
  color: [61, 61, 61],
  emoji: '🏁'
}, {
  color: [143, 117, 65],
  emoji: '😭'
}, {
  color: [67, 64, 55],
  emoji: '🍳'
}, {
  color: [109, 128, 148],
  emoji: '⏩'
}, {
  color: [101, 120, 140],
  emoji: '🔤'
}, {
  color: [50, 50, 50],
  emoji: '⌚'
}, {
  color: [111, 106, 99],
  emoji: '🍨'
}, {
  color: [76, 63, 61],
  emoji: '💼'
}, {
  color: [97, 69, 22],
  emoji: '👌'
}, {
  color: [154, 144, 132],
  emoji: '📝'
}, {
  color: [1, 1, 1],
  emoji: '🎶'
}, {
  color: [163, 177, 181],
  emoji: '🌁'
}, {
  color: [41, 41, 41],
  emoji: '🔪'
}, {
  color: [0, 0, 0],
  emoji: '✏'
}, {
  color: [76, 55, 45],
  emoji: '⌛'
}, {
  color: [173, 66, 56],
  emoji: '🈴'
}, {
  color: [28, 26, 9],
  emoji: '🐎'
}, {
  color: [119, 67, 151],
  emoji: '💜'
}, {
  color: [76, 63, 61],
  emoji: '💼'
}, {
  color: [106, 105, 73],
  emoji: '👼'
}, {
  color: [80, 80, 80],
  emoji: '🔲'
}, {
  color: [54, 54, 54],
  emoji: '🎧'
}, {
  color: [91, 44, 48],
  emoji: '🐙'
}, {
  color: [149, 144, 143],
  emoji: '🏭'
}, {
  color: [153, 119, 27],
  emoji: '👱'
}, {
  color: [176, 137, 75],
  emoji: '👪'
}, {
  color: [139, 102, 29],
  emoji: '👎'
}, {
  color: [132, 110, 71],
  emoji: '📔'
}, {
  color: [138, 62, 50],
  emoji: '📛'
}, {
  color: [58, 61, 60],
  emoji: '🚉'
}, {
  color: [57, 39, 41],
  emoji: '🍷'
}, {
  color: [56, 84, 100],
  emoji: '💠'
}, {
  color: [111, 108, 107],
  emoji: '🎲'
}, {
  color: [0, 0, 0],
  emoji: '‼'
}, {
  color: [65, 54, 55],
  emoji: '🎌'
}, {
  color: [175, 75, 66],
  emoji: '🈲'
}, {
  color: [53, 44, 26],
  emoji: '💂'
}, {
  color: [69, 38, 18],
  emoji: '⛵'
}, {
  color: [104, 123, 142],
  emoji: '🔼'
}, {
  color: [39, 99, 177],
  emoji: '🚹'
}, {
  color: [138, 110, 36],
  emoji: '😺'
}, {
  color: [62, 65, 61],
  emoji: '📟'
}, {
  color: [92, 41, 85],
  emoji: '🍇'
}, {
  color: [91, 44, 26],
  emoji: '🍓'
}, {
  color: [59, 147, 73],
  emoji: '🈯'
}, {
  color: [45, 68, 18],
  emoji: '🍃'
}, {
  color: [156, 120, 49],
  emoji: '🙎'
}, {
  color: [122, 122, 122],
  emoji: '🕖'
}, {
  color: [123, 123, 123],
  emoji: '🍚'
}, {
  color: [46, 61, 20],
  emoji: '🌾'
}, {
  color: [66, 54, 24],
  emoji: '🐺'
}, {
  color: [117, 65, 48],
  emoji: '🍄'
}, {
  color: [114, 103, 95],
  emoji: '🐶'
}, {
  color: [58, 50, 39],
  emoji: '🐡'
}, {
  color: [116, 41, 34],
  emoji: '👺'
}, {
  color: [149, 113, 44],
  emoji: '😆'
}, {
  color: [128, 102, 48],
  emoji: '🌟'
}, {
  color: [171, 140, 74],
  emoji: '😤'
}, {
  color: [100, 121, 143],
  emoji: '🆒'
}, {
  color: [94, 111, 85],
  emoji: '⛺'
}, {
  color: [107, 100, 99],
  emoji: '🐚'
}, {
  color: [163, 137, 137],
  emoji: '📅'
}, {
  color: [146, 74, 77],
  emoji: '🎯'
}, {
  color: [63, 57, 59],
  emoji: '🐘'
}, {
  color: [36, 81, 158],
  emoji: '🔵'
}, {
  color: [104, 123, 142],
  emoji: '🔢'
}, {
  color: [79, 64, 51],
  emoji: '📺'
}, {
  color: [121, 114, 114],
  emoji: '⚾'
}, {
  color: [57, 39, 41],
  emoji: '🍷'
}, {
  color: [67, 64, 55],
  emoji: '🍳'
}, {
  color: [134, 80, 152],
  emoji: '♑'
}, {
  color: [0, 0, 0],
  emoji: '▪'
}, {
  color: [71, 70, 61],
  emoji: '🏠'
}, {
  color: [66, 24, 33],
  emoji: '🌂'
}, {
  color: [107, 88, 70],
  emoji: '🍝'
}, {
  color: [125, 104, 100],
  emoji: '💌'
}, {
  color: [121, 97, 27],
  emoji: '😾'
}, {
  color: [121, 97, 27],
  emoji: '😾'
}, {
  color: [82, 54, 50],
  emoji: '🎉'
}, {
  color: [142, 110, 102],
  emoji: '🐹'
}, {
  color: [142, 112, 33],
  emoji: '😼'
}, {
  color: [77, 78, 78],
  emoji: '🔩'
}, {
  color: [0, 0, 0],
  emoji: '❇'
}, {
  color: [194, 122, 57],
  emoji: '🆚'
}, {
  color: [63, 35, 14],
  emoji: '🍩'
}, {
  color: [137, 137, 137],
  emoji: '💬'
}, {
  color: [81, 63, 43],
  emoji: '🍭'
}, {
  color: [13, 13, 13],
  emoji: '🐜'
}, {
  color: [72, 70, 64],
  emoji: '🛀'
}, {
  color: [0, 0, 0],
  emoji: '〽'
}, {
  color: [60, 58, 101],
  emoji: '🎵'
}, {
  color: [45, 53, 13],
  emoji: '🎄'
}, {
  color: [151, 73, 73],
  emoji: '🚨'
}, {
  color: [66, 58, 32],
  emoji: '💫'
}, {
  color: [91, 44, 26],
  emoji: '🍓'
}, {
  color: [70, 70, 70],
  emoji: '🚽'
}, {
  color: [35, 34, 36],
  emoji: '🎣'
}, {
  color: [0, 0, 0],
  emoji: '◼'
}, {
  color: [51, 43, 36],
  emoji: '🐗'
}, {
  color: [122, 122, 122],
  emoji: '🕒'
}, {
  color: [79, 64, 51],
  emoji: '📺'
}, {
  color: [46, 61, 20],
  emoji: '🌾'
}, {
  color: [111, 91, 60],
  emoji: '🙈'
}, {
  color: [194, 122, 57],
  emoji: '🆚'
}, {
  color: [49, 49, 49],
  emoji: '🗿'
}, {
  color: [13, 13, 13],
  emoji: '🐜'
}, {
  color: [64, 50, 22],
  emoji: '📣'
}, {
  color: [55, 55, 48],
  emoji: '🐧'
}, {
  color: [0, 0, 0],
  emoji: '🅾'
}, {
  color: [161, 115, 46],
  emoji: '🎅'
}, {
  color: [0, 0, 0],
  emoji: '©'
}, {
  color: [78, 70, 83],
  emoji: '💈'
}, {
  color: [120, 120, 120],
  emoji: '🕕'
}, {
  color: [107, 100, 99],
  emoji: '🐚'
}, {
  color: [59, 109, 146],
  emoji: '🏧'
}, {
  color: [54, 118, 145],
  emoji: '🎽'
}, {
  color: [138, 62, 50],
  emoji: '📛'
}, {
  color: [104, 84, 25],
  emoji: '🔱'
}, {
  color: [0, 0, 0],
  emoji: '㊙'
}, {
  color: [59, 69, 69],
  emoji: '💍'
}, {
  color: [79, 28, 57],
  emoji: '💕'
}, {
  color: [121, 97, 27],
  emoji: '😾'
}, {
  color: [0, 0, 0],
  emoji: '✒'
}, {
  color: [0, 0, 0],
  emoji: '↗'
}, {
  color: [129, 116, 29],
  emoji: '👷'
}, {
  color: [111, 0, 0],
  emoji: '💯'
}, {
  color: [1, 55, 23],
  emoji: '🐍'
}, {
  color: [55, 55, 48],
  emoji: '🐧'
}, {
  color: [0, 0, 0],
  emoji: '🈷'
}, {
  color: [132, 134, 136],
  emoji: '📑'
}, {
  color: [161, 115, 46],
  emoji: '🎅'
}, {
  color: [138, 32, 21],
  emoji: '💮'
}, {
  color: [87, 19, 11],
  emoji: '⭕'
}, {
  color: [163, 159, 160],
  emoji: '📈'
}, {
  color: [129, 96, 30],
  emoji: '👍'
}, {
  color: [156, 120, 49],
  emoji: '🙎'
}, {
  color: [107, 76, 18],
  emoji: '👂'
}, {
  color: [114, 87, 45],
  emoji: '🎨'
}, {
  color: [56, 45, 71],
  emoji: '👾'
}, {
  color: [118, 54, 42],
  emoji: '🔞'
}, {
  color: [84, 92, 47],
  emoji: '👒'
}, {
  color: [124, 116, 84],
  emoji: '🌓'
}, {
  color: [171, 140, 74],
  emoji: '😤'
}, {
  color: [132, 62, 100],
  emoji: '💞'
}, {
  color: [50, 50, 50],
  emoji: '⌚'
}, {
  color: [153, 119, 27],
  emoji: '👱'
}, {
  color: [55, 68, 88],
  emoji: '👕'
}, {
  color: [151, 113, 34],
  emoji: '✊'
}, {
  color: [20, 20, 20],
  emoji: '🔚'
}, {
  color: [86, 68, 19],
  emoji: '🐥'
}, {
  color: [66, 24, 33],
  emoji: '🌂'
}, {
  color: [135, 98, 105],
  emoji: '🐷'
}, {
  color: [86, 73, 49],
  emoji: '🍹'
}, {
  color: [104, 123, 142],
  emoji: '🔢'
}, {
  color: [105, 58, 114],
  emoji: '💘'
}, {
  color: [194, 126, 67],
  emoji: '🈚'
}, {
  color: [70, 59, 58],
  emoji: '🍡'
}, {
  color: [93, 86, 57],
  emoji: '📢'
}, {
  color: [153, 153, 153],
  emoji: '📃'
}, {
  color: [56, 49, 49],
  emoji: '🌷'
}, {
  color: [76, 70, 55],
  emoji: '🙏'
}, {
  color: [0, 0, 0],
  emoji: '🅰'
}, {
  color: [36, 45, 57],
  emoji: '👤'
}, {
  color: [0, 0, 0],
  emoji: '☺'
}, {
  color: [113, 131, 150],
  emoji: '🎦'
}, {
  color: [176, 137, 75],
  emoji: '👪'
}, {
  color: [138, 62, 50],
  emoji: '📛'
}, {
  color: [114, 109, 89],
  emoji: '🍵'
}, {
  color: [106, 126, 146],
  emoji: '⏪'
}, {
  color: [0, 0, 0],
  emoji: '🅱'
}, {
  color: [0, 0, 0],
  emoji: '❇'
}, {
  color: [156, 118, 60],
  emoji: '😜'
}, {
  color: [163, 126, 43],
  emoji: '😞'
}, {
  color: [0, 0, 0],
  emoji: '❇'
}, {
  color: [4, 4, 4],
  emoji: '💲'
}, {
  color: [123, 123, 123],
  emoji: '🍚'
}, {
  color: [77, 55, 20],
  emoji: '👆'
}, {
  color: [0, 0, 0],
  emoji: '☺'
}, {
  color: [89, 75, 53],
  emoji: '🐵'
}, {
  color: [158, 125, 49],
  emoji: '😢'
}, {
  color: [31, 68, 91],
  emoji: '💦'
}, {
  color: [8, 27, 3],
  emoji: '🌱'
}, {
  color: [115, 91, 44],
  emoji: '👑'
}, {
  color: [49, 38, 40],
  emoji: '💣'
}, {
  color: [86, 70, 154],
  emoji: '🈳'
}, {
  color: [0, 0, 0],
  emoji: '➡'
}, {
  color: [126, 126, 126],
  emoji: '🔳'
}, {
  color: [0, 0, 0],
  emoji: '↔'
}, {
  color: [54, 54, 54],
  emoji: '🎧'
}, {
  color: [132, 103, 64],
  emoji: '🍞'
}, {
  color: [94, 84, 55],
  emoji: '🍶'
}, {
  color: [48, 146, 63],
  emoji: '💹'
}, {
  color: [0, 0, 0],
  emoji: '↔'
}, {
  color: [126, 79, 29],
  emoji: '📙'
}, {
  color: [91, 58, 55],
  emoji: '🎎'
}, {
  color: [14, 80, 35],
  emoji: '🐸'
}, {
  color: [73, 126, 99],
  emoji: '🏊'
}, {
  color: [101, 120, 140],
  emoji: '🔤'
}, {
  color: [139, 141, 160],
  emoji: '🎡'
}, {
  color: [0, 0, 0],
  emoji: '✔'
}, {
  color: [39, 37, 40],
  emoji: '🚏'
}, {
  color: [118, 91, 57],
  emoji: '🍪'
}, {
  color: [115, 84, 31],
  emoji: '🌙'
}, {
  color: [140, 94, 56],
  emoji: '🍤'
}, {
  color: [98, 79, 53],
  emoji: '🙊'
}, {
  color: [114, 140, 45],
  emoji: '🎾'
}, {
  color: [136, 104, 36],
  emoji: '👊'
}, {
  color: [76, 55, 35],
  emoji: '👜'
}, {
  color: [122, 108, 81],
  emoji: '😱'
}, {
  color: [74, 34, 28],
  emoji: '🚗'
}, {
  color: [91, 52, 32],
  emoji: '🌰'
}, {
  color: [38, 73, 99],
  emoji: '📘'
}, {
  color: [0, 0, 0],
  emoji: '✉'
}, {
  color: [199, 153, 35],
  emoji: '👸'
}, {
  color: [109, 94, 70],
  emoji: '🚌'
}, {
  color: [101, 82, 86],
  emoji: '🍧'
}, {
  color: [95, 129, 126],
  emoji: '⛲'
}, {
  color: [102, 35, 34],
  emoji: '📕'
}, {
  color: [86, 73, 49],
  emoji: '🍹'
}, {
  color: [77, 78, 78],
  emoji: '🔩'
}, {
  color: [61, 79, 83],
  emoji: '🏪'
}, {
  color: [91, 79, 68],
  emoji: '🍮'
}, {
  color: [194, 125, 64],
  emoji: '🈶'
}, {
  color: [23, 23, 23],
  emoji: '🎥'
}, {
  color: [60, 45, 59],
  emoji: '🍆'
}, {
  color: [99, 91, 79],
  emoji: '🔏'
}, {
  color: [76, 70, 55],
  emoji: '🙏'
}, {
  color: [61, 61, 61],
  emoji: '🔍'
}, {
  color: [125, 77, 41],
  emoji: '🎁'
}, {
  color: [133, 75, 16],
  emoji: '🎃'
}, {
  color: [149, 113, 44],
  emoji: '😆'
}, {
  color: [114, 137, 161],
  emoji: '🆖'
}, {
  color: [166, 146, 122],
  emoji: '📜'
}, {
  color: [180, 86, 122],
  emoji: '🈹'
}, {
  color: [63, 57, 59],
  emoji: '🐘'
}, {
  color: [162, 126, 42],
  emoji: '😒'
}, {
  color: [130, 77, 146],
  emoji: '♊'
}, {
  color: [147, 69, 25],
  emoji: '😡'
}, {
  color: [68, 69, 42],
  emoji: '🏡'
}, {
  color: [156, 126, 51],
  emoji: '😥'
}, {
  color: [61, 61, 61],
  emoji: '🔍'
}, {
  color: [88, 76, 68],
  emoji: '🍱'
}, {
  color: [101, 120, 140],
  emoji: '🔤'
}, {
  color: [0, 0, 0],
  emoji: '♣'
}, {
  color: [104, 127, 155],
  emoji: '👔'
}, {
  color: [92, 92, 87],
  emoji: '🍲'
}, {
  color: [107, 76, 18],
  emoji: '👂'
}, {
  color: [108, 126, 144],
  emoji: '🔣'
}, {
  color: [138, 94, 46],
  emoji: '🉑'
}, {
  color: [107, 102, 108],
  emoji: '📤'
}, {
  color: [168, 76, 63],
  emoji: '🆎'
}, {
  color: [0, 0, 0],
  emoji: '↔'
}, {
  color: [161, 126, 47],
  emoji: '😲'
}, {
  color: [150, 144, 129],
  emoji: '🎂'
}, {
  color: [125, 77, 41],
  emoji: '🎁'
}, {
  color: [157, 46, 37],
  emoji: '🔴'
}, {
  color: [86, 68, 19],
  emoji: '🐥'
}, {
  color: [92, 74, 38],
  emoji: '⭐'
}, {
  color: [87, 19, 11],
  emoji: '⭕'
}, {
  color: [83, 88, 69],
  emoji: '📚'
}, {
  color: [139, 116, 113],
  emoji: '🌄'
}, {
  color: [41, 61, 25],
  emoji: '🌿'
}, {
  color: [122, 122, 122],
  emoji: '🕗'
}, {
  color: [51, 52, 9],
  emoji: '⛳'
}, {
  color: [132, 132, 132],
  emoji: '📇'
}, {
  color: [0, 0, 0],
  emoji: '♠'
}, {
  color: [29, 29, 29],
  emoji: '🔝'
}, {
  color: [166, 146, 122],
  emoji: '📜'
}, {
  color: [61, 79, 83],
  emoji: '🏪'
}, {
  color: [22, 23, 24],
  emoji: '🔫'
}, {
  color: [86, 73, 49],
  emoji: '🍹'
}, {
  color: [87, 51, 19],
  emoji: '🍘'
}, {
  color: [54, 149, 58],
  emoji: '❎'
}, {
  color: [107, 76, 18],
  emoji: '👂'
}, {
  color: [111, 26, 36],
  emoji: '🎒'
}, {
  color: [121, 121, 121],
  emoji: '🕓'
}, {
  color: [58, 23, 5],
  emoji: '💃'
}, {
  color: [153, 153, 153],
  emoji: '📃'
}, {
  color: [66, 72, 70],
  emoji: '🐦'
}, {
  color: [104, 127, 155],
  emoji: '👔'
}, {
  color: [135, 101, 22],
  emoji: '👴'
}, {
  color: [161, 108, 88],
  emoji: '💑'
}, {
  color: [135, 99, 157],
  emoji: '🆔'
}, {
  color: [0, 0, 0],
  emoji: '☺'
}, {
  color: [154, 61, 96],
  emoji: '💖'
}, {
  color: [122, 122, 122],
  emoji: '🕗'
}, {
  color: [99, 73, 20],
  emoji: '✌'
}, {
  color: [124, 116, 84],
  emoji: '🌓'
}, {
  color: [0, 0, 0],
  emoji: '↕'
}, {
  color: [175, 75, 66],
  emoji: '🈲'
}, {
  color: [99, 29, 53],
  emoji: '💓'
}, {
  color: [0, 0, 0],
  emoji: '⬆'
}, {
  color: [38, 38, 38],
  emoji: '❔'
}, {
  color: [53, 49, 45],
  emoji: '🚬'
}, {
  color: [0, 0, 0],
  emoji: '❤'
}, {
  color: [100, 76, 20],
  emoji: '👲'
}, {
  color: [35, 33, 29],
  emoji: '🎓'
}, {
  color: [70, 70, 70],
  emoji: '🚽'
}, {
  color: [106, 35, 26],
  emoji: '🍣'
}, {
  color: [79, 28, 57],
  emoji: '💕'
}, {
  color: [116, 41, 34],
  emoji: '👺'
}, {
  color: [96, 108, 129],
  emoji: '💨'
}, {
  color: [83, 98, 99],
  emoji: '🏦'
}, {
  color: [23, 23, 23],
  emoji: '🎥'
}, {
  color: [99, 121, 143],
  emoji: '🆗'
}, {
  color: [0, 0, 0],
  emoji: 'ℹ'
}, {
  color: [138, 105, 32],
  emoji: '😻'
}, {
  color: [40, 64, 117],
  emoji: '🔷'
}, {
  color: [69, 71, 77],
  emoji: '📹'
}, {
  color: [6, 70, 65],
  emoji: '👗'
}, {
  color: [158, 121, 40],
  emoji: '😌'
}, {
  color: [128, 0, 0],
  emoji: '🉐'
}, {
  color: [61, 61, 61],
  emoji: '🔍'
}, {
  color: [151, 156, 168],
  emoji: '📉'
}, {
  color: [194, 124, 65],
  emoji: '🈺'
}, {
  color: [53, 53, 53],
  emoji: '🔎'
}, {
  color: [0, 0, 0],
  emoji: '↖'
}, {
  color: [102, 35, 34],
  emoji: '📕'
}, {
  color: [170, 118, 62],
  emoji: '🌇'
}, {
  color: [69, 71, 77],
  emoji: '📹'
}, {
  color: [132, 121, 73],
  emoji: '🌔'
}, {
  color: [0, 0, 0],
  emoji: '☀'
}, {
  color: [51, 52, 9],
  emoji: '⛳'
}, {
  color: [0, 0, 0],
  emoji: '↖'
}, {
  color: [59, 50, 30],
  emoji: '🐴'
}, {
  color: [114, 140, 45],
  emoji: '🎾'
}, {
  color: [0, 0, 0],
  emoji: '◀'
}, {
  color: [74, 45, 9],
  emoji: '⚡'
}, {
  color: [111, 107, 104],
  emoji: '🃏'
}, {
  color: [0, 0, 0],
  emoji: '↘'
}, {
  color: [87, 81, 76],
  emoji: '⛪'
}, {
  color: [0, 0, 0],
  emoji: '㊗'
}, {
  color: [53, 44, 26],
  emoji: '💂'
}, {
  color: [98, 79, 53],
  emoji: '🙊'
}, {
  color: [108, 126, 144],
  emoji: '🔣'
}, {
  color: [156, 119, 40],
  emoji: '😖'
}, {
  color: [159, 119, 73],
  emoji: '😷'
}, {
  color: [0, 0, 0],
  emoji: '✒'
}, {
  color: [15, 15, 15],
  emoji: '💱'
}, {
  color: [59, 55, 54],
  emoji: '🎏'
}, {
  color: [41, 40, 91],
  emoji: '☔'
}, {
  color: [112, 105, 106],
  emoji: '🏥'
}, {
  color: [103, 89, 66],
  emoji: '🔒'
}, {
  color: [131, 124, 108],
  emoji: '⛅'
}, {
  color: [70, 70, 70],
  emoji: '🚽'
}, {
  color: [111, 26, 36],
  emoji: '🎒'
}, {
  color: [69, 71, 77],
  emoji: '📹'
}, {
  color: [108, 81, 36],
  emoji: '🐻'
}, {
  color: [56, 83, 106],
  emoji: '📫'
}, {
  color: [156, 119, 40],
  emoji: '😖'
}, {
  color: [66, 54, 24],
  emoji: '🐺'
}, {
  color: [115, 88, 28],
  emoji: '💪'
}, {
  color: [21, 52, 44],
  emoji: '🎿'
}, {
  color: [162, 126, 42],
  emoji: '😏'
}, {
  color: [9, 9, 9],
  emoji: '➖'
}, {
  color: [122, 122, 122],
  emoji: '🕖'
}, {
  color: [86, 64, 19],
  emoji: '👈'
}, {
  color: [159, 122, 47],
  emoji: '😋'
}, {
  color: [133, 139, 144],
  emoji: '🏢'
}, {
  color: [52, 44, 36],
  emoji: '🍢'
}, {
  color: [61, 22, 18],
  emoji: '📌'
}, {
  color: [115, 91, 44],
  emoji: '👑'
}, {
  color: [0, 0, 0],
  emoji: '↘'
}, {
  color: [119, 102, 92],
  emoji: '🍰'
}, {
  color: [123, 101, 45],
  emoji: '🚚'
}, {
  color: [53, 44, 26],
  emoji: '💂'
}, {
  color: [0, 0, 0],
  emoji: '☑'
}, {
  color: [0, 0, 0],
  emoji: '✖'
}, {
  color: [60, 134, 52],
  emoji: '💚'
}, {
  color: [131, 135, 136],
  emoji: '🏂'
}, {
  color: [89, 75, 53],
  emoji: '🐵'
}, {
  color: [159, 122, 47],
  emoji: '😋'
}, {
  color: [104, 123, 142],
  emoji: '🔢'
}, {
  color: [64, 50, 22],
  emoji: '📣'
}, {
  color: [0, 0, 0],
  emoji: '‼'
}, {
  color: [124, 97, 72],
  emoji: '📦'
}, {
  color: [143, 117, 65],
  emoji: '😭'
}, {
  color: [71, 89, 58],
  emoji: '🐠'
}, {
  color: [73, 45, 45],
  emoji: '🎴'
}, {
  color: [0, 0, 0],
  emoji: '↗'
}, {
  color: [0, 0, 0],
  emoji: '✖'
}, {
  color: [0, 0, 0],
  emoji: '☀'
}, {
  color: [82, 54, 50],
  emoji: '🎉'
}, {
  color: [21, 21, 21],
  emoji: '🔛'
}, {
  color: [170, 118, 62],
  emoji: '🌇'
}, {
  color: [97, 92, 68],
  emoji: '🐝'
}, {
  color: [130, 77, 146],
  emoji: '♊'
}, {
  color: [168, 76, 63],
  emoji: '🆎'
}, {
  color: [54, 43, 28],
  emoji: '🐒'
}, {
  color: [36, 45, 57],
  emoji: '👤'
}, {
  color: [4, 4, 4],
  emoji: '💲'
}, {
  color: [74, 56, 48],
  emoji: '⏳'
}, {
  color: [50, 39, 15],
  emoji: '🎷'
}, {
  color: [9, 19, 38],
  emoji: '🔹'
}, {
  color: [58, 61, 60],
  emoji: '🚉'
}, {
  color: [155, 129, 60],
  emoji: '😓'
}, {
  color: [73, 126, 99],
  emoji: '🏊'
}, {
  color: [128, 0, 0],
  emoji: '🉐'
}, {
  color: [109, 112, 123],
  emoji: '📧'
}, {
  color: [19, 18, 15],
  emoji: '🔌'
}, {
  color: [135, 80, 30],
  emoji: '🍊'
}, {
  color: [70, 44, 10],
  emoji: '🍂'
}, {
  color: [113, 131, 150],
  emoji: '🎦'
}, {
  color: [124, 116, 84],
  emoji: '🌓'
}, {
  color: [124, 121, 111],
  emoji: '📠'
}, {
  color: [61, 79, 83],
  emoji: '🏪'
}, {
  color: [121, 97, 27],
  emoji: '😾'
}, {
  color: [129, 116, 29],
  emoji: '👷'
}, {
  color: [194, 125, 64],
  emoji: '🈶'
}, {
  color: [45, 68, 18],
  emoji: '🍃'
}, {
  color: [0, 0, 0],
  emoji: '▶'
}, {
  color: [113, 114, 116],
  emoji: '🎹'
}, {
  color: [45, 36, 10],
  emoji: '🎺'
}, {
  color: [143, 117, 65],
  emoji: '😭'
}, {
  color: [31, 62, 81],
  emoji: '💧'
}, {
  color: [111, 106, 99],
  emoji: '🍨'
}, {
  color: [87, 19, 11],
  emoji: '⭕'
}, {
  color: [0, 0, 0],
  emoji: '⤴'
}, {
  color: [176, 97, 162],
  emoji: '💟'
}, {
  color: [91, 69, 107],
  emoji: '🌉'
}, {
  color: [133, 139, 144],
  emoji: '🏢'
}, {
  color: [124, 130, 136],
  emoji: '📂'
}, {
  color: [13, 13, 13],
  emoji: '➕'
}, {
  color: [166, 119, 65],
  emoji: '💁'
}, {
  color: [76, 76, 76],
  emoji: '💀'
}, {
  color: [142, 112, 50],
  emoji: '🙌'
}, {
  color: [0, 0, 0],
  emoji: '♨'
}, {
  color: [0, 0, 0],
  emoji: '↙'
}, {
  color: [132, 134, 136],
  emoji: '📑'
}, {
  color: [67, 62, 62],
  emoji: '🎳'
}, {
  color: [49, 38, 40],
  emoji: '💣'
}, {
  color: [103, 122, 141],
  emoji: '🔡'
}, {
  color: [0, 0, 0],
  emoji: '✔'
}, {
  color: [101, 117, 129],
  emoji: '📖'
}, {
  color: [38, 38, 38],
  emoji: '🎼'
}, {
  color: [112, 129, 146],
  emoji: '⏬'
}, {
  color: [105, 59, 117],
  emoji: '👿'
}, {
  color: [124, 130, 136],
  emoji: '📂'
}, {
  color: [61, 61, 61],
  emoji: '🔍'
}, {
  color: [78, 70, 83],
  emoji: '💈'
}, {
  color: [40, 64, 40],
  emoji: '🐲'
}, {
  color: [47, 103, 178],
  emoji: '🚾'
}, {
  color: [125, 77, 41],
  emoji: '🎁'
}, {
  color: [86, 68, 19],
  emoji: '🐥'
}, {
  color: [0, 0, 0],
  emoji: '㊗'
}, {
  color: [150, 118, 57],
  emoji: '💇'
}, {
  color: [187, 187, 187],
  emoji: '⬜'
}, {
  color: [72, 70, 64],
  emoji: '🛀'
}, {
  color: [15, 15, 15],
  emoji: '💱'
}, {
  color: [40, 106, 28],
  emoji: '🍀'
}, {
  color: [0, 0, 0],
  emoji: '☁'
}, {
  color: [142, 110, 102],
  emoji: '🐹'
}, {
  color: [113, 110, 94],
  emoji: '💳'
}, {
  color: [132, 132, 132],
  emoji: '📄'
}, {
  color: [91, 79, 50],
  emoji: '🍦'
}, {
  color: [74, 31, 11],
  emoji: '🌹'
}];
var closestEmoji = {};

var getClosestEmoji = function getClosestEmoji(rgba) {
  if (closestEmoji[rgba]) return closestEmoji[rgba];
  var minDistance = 10000000;
  var emoji = null;
  var colors = [];
  emojiColorMap.forEach(function (item) {
    var distance = 3 * Math.abs(item.color[0] - rgba[0]) + 4 * Math.abs(item.color[1] - rgba[1]) + 3 * Math.abs(item.color[2] - rgba[2]);

    if (distance <= minDistance) {
      minDistance = distance;
      emoji = item.emoji;
      colors = item.color;
    }
  });
  closestEmoji[rgba] = {
    emoji: emoji,
    colors: colors
  };
  return {
    emoji: emoji,
    colors: colors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getClosestEmoji);

/***/ })
/******/ ])));