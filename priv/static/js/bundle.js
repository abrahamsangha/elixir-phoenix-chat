/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// Although ^=parent is not technically correct,
	// we need to use it in order to get IE8 support.
	'use strict';

	var phoenixHtml = function phoenixHtml() {
	  var elements = document.querySelectorAll('[data-submit^=parent]');
	  var len = elements.length;

	  for (var i = 0; i < len; ++i) {
	    elements[i].addEventListener('click', function (event) {
	      var message = this.getAttribute("data-confirm");
	      if (message === null || confirm(message)) {
	        this.parentNode.submit();
	      };
	      event.preventDefault();
	      return false;
	    }, false);
	  }
	};

	module.exports = phoenixHtml;

/***/ }
/******/ ]);