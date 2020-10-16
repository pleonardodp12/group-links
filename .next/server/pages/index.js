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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/leonardo/Documentos/group-links/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Index = ({\n  data\n}) => {\n  console.log('client');\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: data.corfundo,\n      color: data.cortexto\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"w-1/2 mx-auto text-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"font-bold text-4xl text-center p-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Links groups\"), __jsx(\"img\", {\n    src: data.logo.url,\n    className: \"mx-auto rounded-full shadow-2xl w-1/4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }), data.body.map(item => {\n    if (item.slice_type === 'secao') {\n      return __jsx(\"h2\", {\n        className: \"font-bold text-2xl text-center pt-4\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 20\n        }\n      }, item.primary.nome);\n    }\n\n    if (item.slice_type === 'link') {\n      return __jsx(\"div\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 inline-block\",\n        href: item.primary.destino.url,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 17\n        }\n      }, item.primary.texto_do_botao));\n    }\n\n    if (item.slice_type === 'image') {\n      return __jsx(\"img\", {\n        src: item.primary.imagem.url,\n        alt: \"oi\",\n        className: \"mx-auto\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 15\n        }\n      });\n    }\n\n    return __jsx(\"pre\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 18\n      }\n    }, JSON.stringify(item));\n    return null;\n  })), __jsx(\"footer\", {\n    className: \"text-center py-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \"Projeto desenvolvido por Leonardo Dias\", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }), \"C\\xF3digo fonte dispon\\xEDvel em:\"));\n};\n\nasync function getServerSideProps() {\n  console.log('server');\n  const client = prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.client(\"https://linksgroup.cdn.prismic.io/api/v2\");\n  const centralLinks = await client.getSingle(\"centrallinks\");\n  console.log(centralLinks);\n  return {\n    props: {\n      data: centralLinks.data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb3JmdW5kbyIsImNvbG9yIiwiY29ydGV4dG8iLCJsb2dvIiwidXJsIiwiYm9keSIsIm1hcCIsIml0ZW0iLCJzbGljZV90eXBlIiwicHJpbWFyeSIsIm5vbWUiLCJkZXN0aW5vIiwidGV4dG9fZG9fYm90YW8iLCJpbWFnZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY2xpZW50IiwiUHJpc21pYyIsImNlbnRyYWxMaW5rcyIsImdldFNpbmdsZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxTQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUVILElBQUksQ0FBQ0ksUUFBeEI7QUFBa0NDLFdBQUssRUFBRUwsSUFBSSxDQUFDTTtBQUE5QyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsb0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUssT0FBRyxFQUFFTixJQUFJLENBQUNPLElBQUwsQ0FBVUMsR0FBcEI7QUFBeUIsYUFBUyxFQUFDLHVDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHS1IsSUFBSSxDQUFDUyxJQUFMLENBQVVDLEdBQVYsQ0FBY0MsSUFBSSxJQUFJO0FBQ3ZCLFFBQUdBLElBQUksQ0FBQ0MsVUFBTCxLQUFvQixPQUF2QixFQUErQjtBQUM3QixhQUFPO0FBQ0csaUJBQVMsRUFBQyxxQ0FEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0lELElBQUksQ0FBQ0UsT0FBTCxDQUFhQyxJQUhqQixDQUFQO0FBS0Q7O0FBQ0QsUUFBR0gsSUFBSSxDQUFDQyxVQUFMLEtBQW9CLE1BQXZCLEVBQThCO0FBQzVCLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsaUJBQVMsRUFBQyx1RkFEWjtBQUVFLFlBQUksRUFBRUQsSUFBSSxDQUFDRSxPQUFMLENBQWFFLE9BQWIsQ0FBcUJQLEdBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFbUNHLElBQUksQ0FBQ0UsT0FBTCxDQUFhRyxjQUZoRCxDQURGLENBREY7QUFRRDs7QUFDRCxRQUFHTCxJQUFJLENBQUNDLFVBQUwsS0FBb0IsT0FBdkIsRUFBK0I7QUFDN0IsYUFDRTtBQUFLLFdBQUcsRUFBRUQsSUFBSSxDQUFDRSxPQUFMLENBQWFJLE1BQWIsQ0FBb0JULEdBQTlCO0FBQW1DLFdBQUcsRUFBQyxJQUF2QztBQUE0QyxpQkFBUyxFQUFDLFNBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUdEOztBQUNELFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNVSxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsSUFBZixDQUFOLENBQVA7QUFDQSxXQUFPLElBQVA7QUFDRCxHQXpCRSxDQUhMLENBREYsRUErQkU7QUFBUSxhQUFTLEVBQUMsa0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLHNDQS9CRixDQURGO0FBd0NELENBMUNEOztBQTRDTyxlQUFlUyxrQkFBZixHQUFtQztBQUN4Q25CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxRQUFNbUIsTUFBTSxHQUFHQyx5REFBTyxDQUFDRCxNQUFSLENBQWUsMENBQWYsQ0FBZjtBQUNBLFFBQU1FLFlBQVksR0FBRyxNQUFNRixNQUFNLENBQUNHLFNBQVAsQ0FBaUIsY0FBakIsQ0FBM0I7QUFDQXZCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZcUIsWUFBWjtBQUNBLFNBQU87QUFDTEUsU0FBSyxFQUFFO0FBQ0x6QixVQUFJLEVBQUV1QixZQUFZLENBQUN2QjtBQURkO0FBREYsR0FBUDtBQUtEO0FBRWNELG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByaXNtaWMgZnJvbSAncHJpc21pYy1qYXZhc2NyaXB0JztcblxuY29uc3QgSW5kZXggPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2coJ2NsaWVudCcpXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuY29yZnVuZG8sIGNvbG9yOiBkYXRhLmNvcnRleHRvfX0gPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGwgdGV4dC1jZW50ZXIgcC04XCI+TGlua3MgZ3JvdXBzPC9oMT5cbiAgICAgICAgPGltZyBzcmM9e2RhdGEubG9nby51cmx9IGNsYXNzTmFtZT1cIm14LWF1dG8gcm91bmRlZC1mdWxsIHNoYWRvdy0yeGwgdy0xLzRcIi8+XG4gICAgICAgICAge2RhdGEuYm9keS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgaWYoaXRlbS5zbGljZV90eXBlID09PSAnc2VjYW8nKXtcbiAgICAgICAgICAgIHJldHVybiA8aDJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1jZW50ZXIgcHQtNFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcmltYXJ5Lm5vbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGl0ZW0uc2xpY2VfdHlwZSA9PT0gJ2xpbmsnKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG0tMiBpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5wcmltYXJ5LmRlc3Rpbm8udXJsfT57aXRlbS5wcmltYXJ5LnRleHRvX2RvX2JvdGFvfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihpdGVtLnNsaWNlX3R5cGUgPT09ICdpbWFnZScpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0ucHJpbWFyeS5pbWFnZW0udXJsfSBhbHQ9XCJvaVwiIGNsYXNzTmFtZT1cIm14LWF1dG9cIi8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gPHByZT57SlNPTi5zdHJpbmdpZnkoaXRlbSl9PC9wcmU+XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTRcIj5cbiAgICAgICAgUHJvamV0byBkZXNlbnZvbHZpZG8gcG9yIExlb25hcmRvIERpYXNcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEPDs2RpZ28gZm9udGUgZGlzcG9uw612ZWwgZW06IFxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICAgXG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XG4gIGNvbnNvbGUubG9nKCdzZXJ2ZXInKVxuICBjb25zdCBjbGllbnQgPSBQcmlzbWljLmNsaWVudChcImh0dHBzOi8vbGlua3Nncm91cC5jZG4ucHJpc21pYy5pby9hcGkvdjJcIilcbiAgY29uc3QgY2VudHJhbExpbmtzID0gYXdhaXQgY2xpZW50LmdldFNpbmdsZShcImNlbnRyYWxsaW5rc1wiKVxuICBjb25zb2xlLmxvZyhjZW50cmFsTGlua3MpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6IGNlbnRyYWxMaW5rcy5kYXRhLFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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