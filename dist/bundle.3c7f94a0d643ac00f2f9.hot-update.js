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



swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay]);

function newSwiper() {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper", {
    autoplay: {
      delay: 300
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  console.log(swiper.autoplay);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newSwiper);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a3ca0d50a447b79f7832")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.3c7f94a0d643ac00f2f9.hot-update.js.map