module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/leonardo/Documentos/group-links/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Index = ({\n  data\n}) => {\n  console.log('client');\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: data.corfundo,\n      color: data.cortexto\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Links groups\"), __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, data.body.map(item => {\n    if (item.slice_type === 'secao') {\n      return __jsx(\"h2\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 19\n        }\n      }, item.primary.nome);\n    }\n\n    if (item.slice_type === 'link') {\n      return __jsx(\"li\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        href: item.primary.destino.url,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 15\n        }\n      }, item.primary.texto_do_botao));\n    }\n\n    return null;\n  })), __jsx(\"pre\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, JSON.stringify(data, null, 2)));\n};\n\nasync function getServerSideProps() {\n  console.log('server');\n  const client = prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.client(\"https://linksgroup.cdn.prismic.io/api/v2\");\n  const centralLinks = await client.getSingle(\"centrallinks\");\n  console.log(centralLinks);\n  return {\n    props: {\n      data: centralLinks.data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb3JmdW5kbyIsImNvbG9yIiwiY29ydGV4dG8iLCJib2R5IiwibWFwIiwiaXRlbSIsInNsaWNlX3R5cGUiLCJwcmltYXJ5Iiwibm9tZSIsImRlc3Rpbm8iLCJ1cmwiLCJ0ZXh0b19kb19ib3RhbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjbGllbnQiLCJQcmlzbWljIiwiY2VudHJhbExpbmtzIiwiZ2V0U2luZ2xlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUMxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRUgsSUFBSSxDQUFDSSxRQUF4QjtBQUFrQ0MsV0FBSyxFQUFFTCxJQUFJLENBQUNNO0FBQTlDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLElBQUksQ0FBQ08sSUFBTCxDQUFVQyxHQUFWLENBQWNDLElBQUksSUFBSTtBQUN2QixRQUFHQSxJQUFJLENBQUNDLFVBQUwsS0FBb0IsT0FBdkIsRUFBK0I7QUFDN0IsYUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtELElBQUksQ0FBQ0UsT0FBTCxDQUFhQyxJQUFsQixDQUFSO0FBQ0Q7O0FBQ0QsUUFBR0gsSUFBSSxDQUFDQyxVQUFMLEtBQW9CLE1BQXZCLEVBQThCO0FBQzVCLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsWUFBSSxFQUFFRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUUsT0FBYixDQUFxQkMsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFvQ0wsSUFBSSxDQUFDRSxPQUFMLENBQWFJLGNBQWpELENBREYsQ0FERjtBQUtDOztBQUNELFdBQU8sSUFBUDtBQUNELEdBWkEsQ0FESCxDQUZGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUMsSUFBSSxDQUFDQyxTQUFMLENBQWVqQixJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCLENBQU4sQ0FqQkYsQ0FERjtBQXNCRCxDQXhCRDs7QUEwQk8sZUFBZWtCLGtCQUFmLEdBQW1DO0FBQ3hDakIsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLFFBQU1pQixNQUFNLEdBQUdDLHlEQUFPLENBQUNELE1BQVIsQ0FBZSwwQ0FBZixDQUFmO0FBQ0EsUUFBTUUsWUFBWSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQixjQUFqQixDQUEzQjtBQUNBckIsU0FBTyxDQUFDQyxHQUFSLENBQVltQixZQUFaO0FBQ0EsU0FBTztBQUNMRSxTQUFLLEVBQUU7QUFDTHZCLFVBQUksRUFBRXFCLFlBQVksQ0FBQ3JCO0FBRGQ7QUFERixHQUFQO0FBS0Q7QUFFY0Qsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJpc21pYyBmcm9tICdwcmlzbWljLWphdmFzY3JpcHQnO1xuXG5jb25zdCBJbmRleCA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnY2xpZW50JylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZGF0YS5jb3JmdW5kbywgY29sb3I6IGRhdGEuY29ydGV4dG99fT5cbiAgICAgIDxoMT5MaW5rcyBncm91cHM8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YS5ib2R5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgaWYoaXRlbS5zbGljZV90eXBlID09PSAnc2VjYW8nKXtcbiAgICAgICAgICByZXR1cm4gIDxoMj57aXRlbS5wcmltYXJ5Lm5vbWV9PC9oMj5cbiAgICAgICAgfVxuICAgICAgICBpZihpdGVtLnNsaWNlX3R5cGUgPT09ICdsaW5rJyl7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5wcmltYXJ5LmRlc3Rpbm8udXJsfT57aXRlbS5wcmltYXJ5LnRleHRvX2RvX2JvdGFvfTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMil9PC9wcmU+XG4gICAgPC9kaXY+XG4gICAgXG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XG4gIGNvbnNvbGUubG9nKCdzZXJ2ZXInKVxuICBjb25zdCBjbGllbnQgPSBQcmlzbWljLmNsaWVudChcImh0dHBzOi8vbGlua3Nncm91cC5jZG4ucHJpc21pYy5pby9hcGkvdjJcIilcbiAgY29uc3QgY2VudHJhbExpbmtzID0gYXdhaXQgY2xpZW50LmdldFNpbmdsZShcImNlbnRyYWxsaW5rc1wiKVxuICBjb25zb2xlLmxvZyhjZW50cmFsTGlua3MpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6IGNlbnRyYWxMaW5rcy5kYXRhLFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLWphdmFzY3JpcHRcIj83OGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InByaXNtaWMtamF2YXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-javascript\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });