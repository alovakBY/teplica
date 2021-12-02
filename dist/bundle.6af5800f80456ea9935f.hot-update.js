"use strict";
self["webpackHotUpdate"]("bundle",{

/***/ "./src/components/swiper.js":
/*!**********************************!*\
  !*** ./src/components/swiper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");

 // modules styles

 // configure Swiper to use modules

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);
var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c28b7fa51f766a95f0a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.6af5800f80456ea9935f.hot-update.js.map