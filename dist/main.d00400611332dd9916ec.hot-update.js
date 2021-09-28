"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateMercedes"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_accordeon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/accordeon */ \"./src/module/accordeon.js\");\n/* harmony import */ var _module_smoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/smoothScroll */ \"./src/module/smoothScroll.js\");\n/* harmony import */ var _module_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/tabs */ \"./src/module/tabs.js\");\n/* harmony import */ var _module_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/burger */ \"./src/module/burger.js\");\n/* harmony import */ var _module_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/modal */ \"./src/module/modal.js\");\n/* harmony import */ var _module_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/sendForm */ \"./src/module/sendForm.js\");\n\n\n\n\n\n\n(0,_module_accordeon__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_module_smoothScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_module_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_module_burger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_module_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_module_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://Mercedes/./src/index.js?");

/***/ }),

/***/ "./src/module/accordeon.js":
/*!*********************************!*\
  !*** ./src/module/accordeon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var btns = document.querySelectorAll('.feature__link'),\n      featureSub = document.querySelectorAll('.feature-sub');\n  btns.forEach(function (item, index) {\n    item.addEventListener('click', function () {\n      btns.forEach(function (btnItem, i) {\n        if (btnItem === item) {\n          btnItem.classList.toggle('feature__link_active');\n          featureSub[i].classList.toggle('hidden');\n        } else {\n          btnItem.classList.remove('feature__link_active');\n          featureSub[i].classList.add('hidden');\n        }\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://Mercedes/./src/module/accordeon.js?");

/***/ }),

/***/ "./src/module/burger.js":
/*!******************************!*\
  !*** ./src/module/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar burger = function burger() {\n  var btnMenu = document.querySelector('.humburger-menu'),\n      menuElem = document.querySelector('.menu'),\n      menuList = document.querySelectorAll('.menu-list__link');\n\n  var toggleMenu = function toggleMenu() {\n    btnMenu.classList.toggle('humburger-menu-active');\n    menuElem.classList.toggle('menu-active');\n  };\n\n  btnMenu.addEventListener('click', function () {\n    toggleMenu();\n  });\n  menuList.forEach(function (item) {\n    item.addEventListener('click', function () {\n      menuElem.classList.remove('menu-active');\n      btnMenu.classList.remove('humburger-menu-active');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack://Mercedes/./src/module/burger.js?");

/***/ }),

/***/ "./src/module/modal.js":
/*!*****************************!*\
  !*** ./src/module/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modal = function modal() {\n  var modalBtn = document.querySelectorAll('.more'),\n      modalWindow = document.querySelector('.modal');\n  modalBtn.forEach(function (item) {\n    item.addEventListener('click', function () {\n      modalWindow.classList.remove('hidden');\n    });\n  });\n  modalWindow.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('modal__close') || target.classList.contains('overlay')) {\n      modalWindow.classList.add('hidden');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://Mercedes/./src/module/modal.js?");

/***/ }),

/***/ "./src/module/sendForm.js":
/*!********************************!*\
  !*** ./src/module/sendForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var form = document.querySelectorAll('form'); //'https://jsonplaceholder.typicode.com'\n\n  form.forEach(function (item) {\n    item.addEventListener('submit', function (event) {\n      event.preventDefault();\n      var data = {};\n\n      var _iterator = _createForOfIteratorHelper(item.elements),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var _step$value = _step.value,\n              name = _step$value.name,\n              value = _step$value.value;\n\n          if (name) {\n            //исключили баттон\n            data[name] = value;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      fetch('/server.php', {\n        method: 'POST',\n        body: JSON.stringify(data)\n      }).then(function (response) {\n        if (response.status === 200 || response.status === 201) {\n          return response.json();\n        } else {\n          throw new Error(response.status);\n        }\n      }).then(function (data) {\n        alert('Данные успешно сохранены!');\n        item.reset(); //очистили инпуты\n      })[\"catch\"](function (error) {\n        alert('Ошибка отправки данных!');\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://Mercedes/./src/module/sendForm.js?");

/***/ }),

/***/ "./src/module/smoothScroll.js":
/*!************************************!*\
  !*** ./src/module/smoothScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar smoothScroll = function smoothScroll() {\n  var menuItem = document.querySelectorAll('.menu-list__link'),\n      mainScroll = document.querySelector('.main__scroll'),\n      newArray = [].concat(_toConsumableArray(menuItem), [mainScroll]);\n  newArray.forEach(function (item) {\n    item.addEventListener('click', function (event) {\n      event.preventDefault();\n      var ID = event.target.getAttribute('href').substr(1);\n      document.getElementById(ID).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://Mercedes/./src/module/smoothScroll.js?");

/***/ }),

/***/ "./src/module/tabs.js":
/*!****************************!*\
  !*** ./src/module/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar tabs = function tabs() {\n  var tabsItems = document.querySelectorAll('[data-tabs-handler]'),\n      tabsImg = document.querySelectorAll('[data-tabs-field]'),\n      sectionTitle = document.querySelectorAll('.section__title'); //design-list__item_active\n\n  var _iterator = _createForOfIteratorHelper(tabsItems),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var btn = _step.value;\n      btn.addEventListener('click', function () {\n        tabsItems.forEach(function (elem, i) {\n          elem.classList.remove('design-list__item_active');\n        });\n        btn.classList.add('design-list__item_active');\n        tabsImg.forEach(function (content) {\n          if (content.dataset.tabsField === btn.dataset.tabsHandler) {\n            content.classList.remove('hidden');\n          } else {\n            content.classList.add('hidden');\n          }\n        });\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://Mercedes/./src/module/tabs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("766bedb2deea891aeb43")
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ }
);