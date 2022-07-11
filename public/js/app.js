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

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  // Get all the dropdown from document
  document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc); // Dropdown Open and Close function

  function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if (dropDown.classList.contains('click-dropdown') === true) {
      dropDown.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
          // Close the clicked dropdown
          this.parentElement.classList.remove('dropdown-open');
          this.nextElementSibling.classList.remove('dropdown-active');
        } else {
          // Close the opend dropdown
          closeDropdown(); // add the open and active class(Opening the DropDown)

          this.parentElement.classList.add('dropdown-open');
          this.nextElementSibling.classList.add('dropdown-active');
        }
      });
    }

    if (dropDown.classList.contains('hover-dropdown') === true) {
      var dropdownHover = function dropdownHover(e) {
        if (e.type == 'mouseover') {
          // Close the opend dropdowns
          closeDropdown(); // add the open and active class(Opening the DropDown)

          this.parentElement.classList.add('dropdown-open');
          this.nextElementSibling.classList.add('dropdown-active');
        } // if(e.type == 'mouseout'){
        //     // close the dropdown after user leave the list
        //     e.target.nextElementSibling.onmouseleave = closeDropdown;
        // }

      };

      dropDown.onmouseover = dropDown.onmouseout = dropdownHover;
    }
  }

  ; // Listen to the doc click

  window.addEventListener('click', function (e) {
    // Close the menu if click happen outside menu
    if (e.target.closest('.dropdown-container') === null) {
      // Close the opend dropdown
      closeDropdown();
    }
  }); // Close the openend Dropdowns

  function closeDropdown() {
    console.log('run'); // remove the open and active class from other opened Dropdown (Closing the opend DropDown)

    document.querySelectorAll('.dropdown-container').forEach(function (container) {
      container.classList.remove('dropdown-open');
    });
    document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
      menu.classList.remove('dropdown-active');
    });
  } // close the dropdown on mouse out from the dropdown list


  document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) {
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = closeDropdown;
  });
});

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

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var divHeight = document.querySelector(".bg-image").offsetHeight,
      navbar = document.querySelector("nav");
  var lastKnownScrollPosition = 0;
  window.addEventListener("resize", function (event) {
    divHeight = document.querySelector(".bg-image").offsetHeight;
    lastKnownScrollPosition = 0;
  }, true);
  document.addEventListener("scroll", function () {
    lastKnownScrollPosition = window.scrollY;

    if (divHeight > lastKnownScrollPosition) {
      navbar.style.backgroundColor = "rgba(20, 20, 20, 0.6)";
    } else if (divHeight < lastKnownScrollPosition) {
      navbar.style.backgroundColor = "rgba(20, 20, 20, 1)";
    }
  });
});

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
/******/ __webpack_require__.O(0, ["css/tailwind","css/app","/js/vendor"], () => (__webpack_exec__("./src/js/app.js"), __webpack_exec__("./src/js/fix-mix-html-builder.js"), __webpack_exec__("./src/js/phonenumber.js"), __webpack_exec__("./src/js/textarea.js"), __webpack_exec__("./src/js/navbar.js"), __webpack_exec__("./src/js/dropdown.js"), __webpack_exec__("./src/scss/app.scss"), __webpack_exec__("./src/scss/tailwind.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);