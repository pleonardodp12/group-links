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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/leonardo/Documentos/group-links/pages/[slug].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst RedirectTo = () => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {}, []);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, \"URL n\\xE3o encontrada\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"Estamos redirecionando voc\\xEA para a central de links.\"));\n};\n\nasync function getServerSideProps({\n  params,\n  res\n}) {\n  const client = prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.client(\"https://linksgroup.cdn.prismic.io/api/v2\");\n  const link = await client.getByUID('shortlink', params.slug);\n\n  if (link) {\n    res.statusCode = 301; //conteudo movido permanentemente \n\n    res.setHeader('Location', link.data.destino.url); //redireciona\n\n    res.end();\n    return;\n  }\n\n  console.log(link);\n  return {\n    props: {}\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (RedirectTo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bc2x1Z10uanM/NDYyYiJdLCJuYW1lcyI6WyJSZWRpcmVjdFRvIiwidXNlRWZmZWN0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwicmVzIiwiY2xpZW50IiwiUHJpc21pYyIsImxpbmsiLCJnZXRCeVVJRCIsInNsdWciLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwiZGF0YSIsImRlc3Rpbm8iLCJ1cmwiLCJlbmQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUN2QkMseURBQVMsQ0FBQyxNQUFNLENBRWYsQ0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtEQUZGLENBREY7QUFNRCxDQVZEOztBQVlPLGVBQWVDLGtCQUFmLENBQWtDO0FBQUVDLFFBQUY7QUFBVUM7QUFBVixDQUFsQyxFQUFrRDtBQUN2RCxRQUFNQyxNQUFNLEdBQUdDLHlEQUFPLENBQUNELE1BQVIsQ0FBZSwwQ0FBZixDQUFmO0FBQ0EsUUFBTUUsSUFBSSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQixXQUFoQixFQUE2QkwsTUFBTSxDQUFDTSxJQUFwQyxDQUFuQjs7QUFDQSxNQUFHRixJQUFILEVBQVE7QUFDTkgsT0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCLENBRE0sQ0FDZ0I7O0FBQ3RCTixPQUFHLENBQUNPLFNBQUosQ0FBYyxVQUFkLEVBQTBCSixJQUFJLENBQUNLLElBQUwsQ0FBVUMsT0FBVixDQUFrQkMsR0FBNUMsRUFGTSxDQUU0Qzs7QUFDbERWLE9BQUcsQ0FBQ1csR0FBSjtBQUNBO0FBQ0Q7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixJQUFaO0FBQ0EsU0FBTztBQUNMVyxTQUFLLEVBQUU7QUFERixHQUFQO0FBR0Q7QUFFY2xCLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcmlzbWljIGZyb20gJ3ByaXNtaWMtamF2YXNjcmlwdCc7XG5cbmNvbnN0IFJlZGlyZWN0VG8gPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VVJMIG7Do28gZW5jb250cmFkYTwvaDE+XG4gICAgICA8cD5Fc3RhbW9zIHJlZGlyZWNpb25hbmRvIHZvY8OqIHBhcmEgYSBjZW50cmFsIGRlIGxpbmtzLjwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMsIHJlcyB9KXtcbiAgY29uc3QgY2xpZW50ID0gUHJpc21pYy5jbGllbnQoXCJodHRwczovL2xpbmtzZ3JvdXAuY2RuLnByaXNtaWMuaW8vYXBpL3YyXCIpO1xuICBjb25zdCBsaW5rID0gYXdhaXQgY2xpZW50LmdldEJ5VUlEKCdzaG9ydGxpbmsnLCBwYXJhbXMuc2x1Zyk7XG4gIGlmKGxpbmspe1xuICAgIHJlcy5zdGF0dXNDb2RlID0gMzAxOyAvL2NvbnRldWRvIG1vdmlkbyBwZXJtYW5lbnRlbWVudGUgXG4gICAgcmVzLnNldEhlYWRlcignTG9jYXRpb24nLCBsaW5rLmRhdGEuZGVzdGluby51cmwpOyAvL3JlZGlyZWNpb25hXG4gICAgcmVzLmVuZCgpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zb2xlLmxvZyhsaW5rKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWRpcmVjdFRvOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

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