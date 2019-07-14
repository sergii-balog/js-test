/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tester */ \"./src/tester.js\");\n/* harmony import */ var _lab2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab2 */ \"./src/lab2.js\");\n\n\nvar tester = new _tester__WEBPACK_IMPORTED_MODULE_0__[\"Tester\"]();\ntester.test();\nvar st = new _lab2__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"]();\nconsole.log(st);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lab2.js":
/*!*********************!*\
  !*** ./src/lab2.js ***!
  \*********************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Stack\", function() { return Stack; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar _items = new WeakMap();\n\nvar Stack =\n/*#__PURE__*/\nfunction () {\n  function Stack() {\n    _classCallCheck(this, Stack);\n\n    _items.set(this, []);\n  }\n\n  _createClass(Stack, [{\n    key: \"push\",\n    value: function push(value) {\n      _items.get(this).push(value);\n    }\n  }, {\n    key: \"peek\",\n    value: function peek() {\n      if (_items.get(this).length < 1) throw new Error(\"The stack is empty\");\n      return _items.get(this)[_items.get(this).length - 1];\n    }\n  }, {\n    key: \"pop\",\n    value: function pop() {\n      if (_items.get(this).length < 1) throw new Error(\"The stack is empty\");\n      return _items.get(this).pop();\n    }\n  }, {\n    key: \"count\",\n    get: function get() {\n      return _items.get(this).length;\n    }\n  }]);\n\n  return Stack;\n}();\n\n//# sourceURL=webpack:///./src/lab2.js?");

/***/ }),

/***/ "./src/stopWatch.js":
/*!**************************!*\
  !*** ./src/stopWatch.js ***!
  \**************************/
/*! exports provided: StopWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StopWatch\", function() { return StopWatch; });\nfunction StopWatch() {\n  var running = false;\n  var startDate = null;\n  var endDate = null;\n\n  this.start = function () {\n    if (running) throw new Error(\"Stopwatch already started\");\n    running = true;\n    startDate = Date.now();\n  };\n\n  this.stop = function () {\n    if (!running) throw new Error(\"Stopwatch already stopped\");\n    running = false;\n    endDate = Date.now();\n  };\n\n  this.reset = function () {\n    running = false;\n    startDate = null;\n    endDate = null;\n  };\n\n  Object.defineProperty(this, \"duration\", {\n    get: function get() {\n      return (endDate - startDate) / 1000;\n    }\n  });\n}\n\nStopWatch.prototype.toString = function () {\n  return \"Duration is: \" + this.duration;\n};\n\n//# sourceURL=webpack:///./src/stopWatch.js?");

/***/ }),

/***/ "./src/tester.js":
/*!***********************!*\
  !*** ./src/tester.js ***!
  \***********************/
/*! exports provided: Tester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tester\", function() { return Tester; });\n/* harmony import */ var _stopWatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopWatch.js */ \"./src/stopWatch.js\");\n\nfunction Tester() {\n  var testStopWatch = function testStopWatch() {\n    var sw = new _stopWatch_js__WEBPACK_IMPORTED_MODULE_0__[\"StopWatch\"]();\n    sw.start();\n    alert(\"Module\");\n    sw.stop();\n    console.log(sw.toString());\n  };\n\n  this.test = function () {\n    testStopWatch();\n  };\n}\n\n//# sourceURL=webpack:///./src/tester.js?");

/***/ })

/******/ });