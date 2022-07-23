(self["webpackChunktransexpedition"] = self["webpackChunktransexpedition"] || []).push([["/js/app"],{

/***/ "./src/js/alpine/nav.js":
/*!******************************!*\
  !*** ./src/js/alpine/nav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($el) {
  return {
    mobileMenu: false,
    html: document.querySelector('html'),
    menu: $el.querySelector('.menu'),
    init: function init() {
      this.mobileMenuItem();
    },
    hamburgerClick: function hamburgerClick() {
      this.mobileMenu = !this.mobileMenu;
      this.html.classList.toggle('overflow-hidden');
    },
    mobileMenuItem: function mobileMenuItem() {
      var menu = this.menu,
          dropMenu = menu.querySelectorAll('.menu-item-has-children');
      dropMenu.forEach(function (item) {
        item.addEventListener('click', function (e) {
          if (e.target == e.currentTarget) {
            item.classList.toggle('open');
          }
        });
      });
    }
  };
});

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var _alpine_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alpine/nav.js */ "./src/js/alpine/nav.js");
/**
 * Import Alpine js
 */


window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"].data('nav', _alpine_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"].start();

/***/ }),

/***/ "./src/js/dataform.js":
/*!****************************!*\
  !*** ./src/js/dataform.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

document.addEventListener('DOMContentLoaded', function () {
  var headerForm = document.getElementById('header-form');
  var aboutForm = document.getElementById('about-form');
  var footerForm = document.getElementById('footer-form');
  headerForm.addEventListener('submit', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var data, message, token, chat_id, url, oReq;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              data = {
                name: document.getElementsByName('popup-name')[0].value,
                phone: document.getElementsByName('popup-phone')[0].value,
                email: document.getElementsByName('popup-email')[0].value,
                comment: document.getElementsByName('popup-comment')[0].value
              };
              document.getElementById('popup-submit').setAttribute('disabled', 'disabled');
              message = "\n | \u0418\u043C\u044F: ".concat(data.name, " \n | \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(data.phone, " \n | Email: ").concat(data.email, " \n | \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: ").concat(data.comment, " \n");
              token = '5481519098:AAHfqzfVxtqlN0IJjsVrtKnu2JAzLvDg8es';
              chat_id = -1001752986825;
              url = "https://api.telegram.org/bot".concat(token, "/sendMessage?chat_id=").concat(chat_id, "&text=").concat(message);
              _context.next = 9;
              return fetch(url);

            case 9:
              oReq = _context.sent;
              document.getElementById('popup-submit').classList.add('btn-done');

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  aboutForm.addEventListener('submit', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
      var data, message, token, chat_id, url, oReq;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              data = {
                name: document.getElementsByName('popup2-name')[0].value,
                phone: document.getElementsByName('popup2-phone')[0].value,
                email: document.getElementsByName('popup2-email')[0].value,
                comment: document.getElementsByName('popup2-comment')[0].value
              };
              document.getElementById('popup2-submit').setAttribute('disabled', 'disabled');
              message = "\n | \u0418\u043C\u044F: ".concat(data.name, " \n | \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(data.phone, " \n | Email: ").concat(data.email, " \n | \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: ").concat(data.comment, " \n");
              token = '5481519098:AAHfqzfVxtqlN0IJjsVrtKnu2JAzLvDg8es';
              chat_id = -1001752986825;
              url = "https://api.telegram.org/bot".concat(token, "/sendMessage?chat_id=").concat(chat_id, "&text=").concat(message);
              _context2.next = 9;
              return fetch(url);

            case 9:
              oReq = _context2.sent;
              document.getElementById('popup-submit').classList.add('btn-done');

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  footerForm.addEventListener('submit', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(e) {
      var data, message, token, chat_id, url, oReq;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              data = {
                name: document.getElementsByName('footer-name')[0].value,
                phone: document.getElementsByName('footer-phone')[0].value,
                email: document.getElementsByName('footer-email')[0].value,
                comment: document.getElementsByName('footer-comment')[0].value
              };
              document.getElementById('footer-submit').setAttribute('disabled', 'disabled');
              message = "\n | \u0418\u043C\u044F: ".concat(data.name, " \n | \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(data.phone, " \n | Email: ").concat(data.email, " \n | \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: ").concat(data.comment, " \n");
              token = '5481519098:AAHfqzfVxtqlN0IJjsVrtKnu2JAzLvDg8es';
              chat_id = -1001752986825;
              url = "https://api.telegram.org/bot".concat(token, "/sendMessage?chat_id=").concat(chat_id, "&text=").concat(message);
              _context3.next = 9;
              return fetch(url);

            case 9:
              oReq = _context3.sent;
              document.getElementById('popup-submit').classList.add('btn-done');

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
});

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
  } // Listen to the doc click


  window.addEventListener('click', function (e) {
    // Close the menu if click happen outside menu
    if (e.target.closest('.dropdown-container') === null) {
      // Close the opend dropdown
      closeDropdown();
    }
  }); // Close the openend Dropdowns

  function closeDropdown() {
    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
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
/******/ __webpack_require__.O(0, ["css/tailwind","css/app","/js/vendor"], () => (__webpack_exec__("./src/js/app.js"), __webpack_exec__("./src/js/fix-mix-html-builder.js"), __webpack_exec__("./src/js/dataform.js"), __webpack_exec__("./src/js/navbar.js"), __webpack_exec__("./src/js/dropdown.js"), __webpack_exec__("./src/scss/app.scss"), __webpack_exec__("./src/scss/tailwind.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);