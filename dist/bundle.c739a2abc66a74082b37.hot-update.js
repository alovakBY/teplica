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
  var callbackBtn = document.querySelectorAll(".header__callback-callback");
  var modal = document.querySelector(".modal");
  var modalCloseBtn = document.querySelector(".modal__close");
  document.body.addEventListener("click", function (e) {
    if (!e.target.closest(".header__callback-callback")) return;
    modal.classList.add("modalActive");
    document.body.classList.add("bodyActiv");
  });
  modalCloseBtn.addEventListener("click", function () {
    modal.classList.remove("modalActive");
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("14fe71e9cea1b43ad098")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.c739a2abc66a74082b37.hot-update.js.map