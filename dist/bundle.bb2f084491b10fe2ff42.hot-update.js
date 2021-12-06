"use strict";
self["webpackHotUpdate"]("bundle",{

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function modal() {
  var callbackBtn = document.querySelector(".header__callback-callback");
  console.log(callbackBtn);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! font-awesome/scss/font-awesome.scss */ "./node_modules/font-awesome/scss/font-awesome.scss");
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/swiper */ "./src/components/swiper.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ "./src/components/modal.js");




document.addEventListener("DOMContentLoaded", function () {
  (0,_components_swiper__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c95bc18d9cffea776e78")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.bb2f084491b10fe2ff42.hot-update.js.map