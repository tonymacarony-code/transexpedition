(self["webpackChunktransexpedition"] = self["webpackChunktransexpedition"] || []).push([["/js/app"],{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/**
* Import Alpine js
*/

window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"].start();

/***/ }),

/***/ "./src/js/fix-mix-html-builder.js":
/*!****************************************!*\
  !*** ./src/js/fix-mix-html-builder.js ***!
  \****************************************/
/***/ (() => {

/**
 * mix-html-builder temporary fix for images START
 */
document.addEventListener('DOMContentLoaded', function () {
  var pathName = document.location.pathname;
  pathName = pathName.substring(0, pathName.lastIndexOf('/') + 1);
  document.body.innerHTML = document.body.innerHTML.replace(/\/public\//g, pathName);
});
/**
 * END
 */

/***/ }),

/***/ "./src/js/phonenumber.js":
/*!*******************************!*\
  !*** ./src/js/phonenumber.js ***!
  \*******************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var phone_input = document.getElementById("myform_phone");
  phone_input.addEventListener('input', function () {
    phone_input.setCustomValidity('');
    phone_input.checkValidity();
  });
  phone_input.addEventListener('invalid', function () {
    if (phone_input.value === '') {
      phone_input.setCustomValidity('Введіть номер телефону!');
    } else {
      phone_input.setCustomValidity('Введіть номер телефону у форматі: +380123456789');
    }
  });
});

/***/ }),

/***/ "./src/js/textarea.js":
/*!****************************!*\
  !*** ./src/js/textarea.js ***!
  \****************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  function countChar(val) {
    var len = val.value.length;

    if (len >= 500) {
      val.value = val.value.substring(0, 500);
    } else {
      $('#charNum').text(500 - len);
    }
  }

  ;
  var navbar = document.querySelector('nav');
  console.log(navbar);

  window.onscroll = function () {
    // pageYOffset or scrollY
    if (window.pageYOffset >= 859) {
      navbar.classList.add('bg-opacity-100');
    } else {
      navbar.classList.remove('bg-opacity-100');
      navbar.classList.add('bg-opacity-60');
    }
  };
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/tailwind.scss":
/*!********************************!*\
  !*** ./src/scss/tailwind.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/tailwind","css/app","/js/vendor"], () => (__webpack_exec__("./src/js/app.js"), __webpack_exec__("./src/js/fix-mix-html-builder.js"), __webpack_exec__("./src/js/phonenumber.js"), __webpack_exec__("./src/js/textarea.js"), __webpack_exec__("./src/scss/app.scss"), __webpack_exec__("./src/scss/tailwind.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);