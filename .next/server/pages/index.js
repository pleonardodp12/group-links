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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/leonardo/Documentos/group-links/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Index = ({\n  data\n}) => {\n  console.log('client');\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: data.corfundo,\n      color: data.cortexto\n    },\n    className: \"w-100 h-screen\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, data.pagetitle)), __jsx(\"div\", {\n    className: \"w-1/2 mx-auto text-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"font-bold text-4xl text-center p-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"Links Leonardo Dias\"), __jsx(\"img\", {\n    src: data.logo.url,\n    className: \"mx-auto rounded-full shadow-2xl w-1/4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), data.body.map(item => {\n    if (item.slice_type === 'secao') {\n      return __jsx(\"h2\", {\n        className: \"font-bold text-2xl text-center pt-4\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 20\n        }\n      }, item.primary.nome);\n    }\n\n    if (item.slice_type === 'link') {\n      return __jsx(\"div\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        className: \"transition duration-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 inline-block\",\n        href: item.primary.destino.url,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 17\n        }\n      }, item.primary.texto_do_botao));\n    } // if(item.slice_type === 'image'){\n    //   return (\n    //     <img src={item.primary.imagem.url} alt=\"oi\" className=\"mx-auto\"/>\n    //   );\n    // }\n    // return <pre>{JSON.stringify(item)}</pre>\n\n  })), __jsx(\"footer\", {\n    className: \"text-center py-4 fixed inset-x-0 bottom-0\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, \"Projeto desenvolvido por Leonardo Dias\", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }), \"C\\xF3digo fonte dispon\\xEDvel em:\"));\n};\n\nasync function getServerSideProps() {\n  console.log('server');\n  const client = prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.client(\"https://linksgroup.cdn.prismic.io/api/v2\");\n  const centralLinks = await client.getSingle(\"centrallinks\");\n  console.log(centralLinks);\n  return {\n    props: {\n      data: centralLinks.data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb3JmdW5kbyIsImNvbG9yIiwiY29ydGV4dG8iLCJwYWdldGl0bGUiLCJsb2dvIiwidXJsIiwiYm9keSIsIm1hcCIsIml0ZW0iLCJzbGljZV90eXBlIiwicHJpbWFyeSIsIm5vbWUiLCJkZXN0aW5vIiwidGV4dG9fZG9fYm90YW8iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjbGllbnQiLCJQcmlzbWljIiwiY2VudHJhbExpbmtzIiwiZ2V0U2luZ2xlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxTQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUVILElBQUksQ0FBQ0ksUUFBeEI7QUFBa0NDLFdBQUssRUFBRUwsSUFBSSxDQUFDTTtBQUE5QyxLQUFaO0FBQXFFLGFBQVMsRUFBQyxnQkFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUU4sSUFBSSxDQUFDTyxTQUFiLENBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxvQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLEVBRUU7QUFBSyxPQUFHLEVBQUVQLElBQUksQ0FBQ1EsSUFBTCxDQUFVQyxHQUFwQjtBQUF5QixhQUFTLEVBQUMsdUNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdLVCxJQUFJLENBQUNVLElBQUwsQ0FBVUMsR0FBVixDQUFjQyxJQUFJLElBQUk7QUFDdkIsUUFBR0EsSUFBSSxDQUFDQyxVQUFMLEtBQW9CLE9BQXZCLEVBQStCO0FBQzdCLGFBQU87QUFDRyxpQkFBUyxFQUFDLHFDQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHSUQsSUFBSSxDQUFDRSxPQUFMLENBQWFDLElBSGpCLENBQVA7QUFLRDs7QUFDRCxRQUFHSCxJQUFJLENBQUNDLFVBQUwsS0FBb0IsTUFBdkIsRUFBOEI7QUFDNUIsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxpQkFBUyxFQUFDLCtHQURaO0FBRUUsWUFBSSxFQUFFRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUUsT0FBYixDQUFxQlAsR0FGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVtQ0csSUFBSSxDQUFDRSxPQUFMLENBQWFHLGNBRmhELENBREYsQ0FERjtBQVFELEtBakJzQixDQWtCdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVELEdBekJFLENBSEwsQ0FKRixFQWtDRTtBQUFRLGFBQVMsRUFBQywyQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsc0NBbENGLENBREY7QUEyQ0QsQ0E3Q0Q7O0FBK0NPLGVBQWVDLGtCQUFmLEdBQW1DO0FBQ3hDakIsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLFFBQU1pQixNQUFNLEdBQUdDLHlEQUFPLENBQUNELE1BQVIsQ0FBZSwwQ0FBZixDQUFmO0FBQ0EsUUFBTUUsWUFBWSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQixjQUFqQixDQUEzQjtBQUNBckIsU0FBTyxDQUFDQyxHQUFSLENBQVltQixZQUFaO0FBQ0EsU0FBTztBQUNMRSxTQUFLLEVBQUU7QUFDTHZCLFVBQUksRUFBRXFCLFlBQVksQ0FBQ3JCO0FBRGQ7QUFERixHQUFQO0FBS0Q7QUFFY0Qsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJpc21pYyBmcm9tICdwcmlzbWljLWphdmFzY3JpcHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgSW5kZXggPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2coJ2NsaWVudCcpXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuY29yZnVuZG8sIGNvbG9yOiBkYXRhLmNvcnRleHRvfX0gY2xhc3NOYW1lPVwidy0xMDAgaC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2RhdGEucGFnZXRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBwLThcIj5MaW5rcyBMZW9uYXJkbyBEaWFzPC9oMT5cbiAgICAgICAgPGltZyBzcmM9e2RhdGEubG9nby51cmx9IGNsYXNzTmFtZT1cIm14LWF1dG8gcm91bmRlZC1mdWxsIHNoYWRvdy0yeGwgdy0xLzRcIi8+XG4gICAgICAgICAge2RhdGEuYm9keS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgaWYoaXRlbS5zbGljZV90eXBlID09PSAnc2VjYW8nKXtcbiAgICAgICAgICAgIHJldHVybiA8aDJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1jZW50ZXIgcHQtNFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcmltYXJ5Lm5vbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGl0ZW0uc2xpY2VfdHlwZSA9PT0gJ2xpbmsnKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG0tMiBpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5wcmltYXJ5LmRlc3Rpbm8udXJsfT57aXRlbS5wcmltYXJ5LnRleHRvX2RvX2JvdGFvfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBpZihpdGVtLnNsaWNlX3R5cGUgPT09ICdpbWFnZScpe1xuICAgICAgICAgIC8vICAgcmV0dXJuIChcbiAgICAgICAgICAvLyAgICAgPGltZyBzcmM9e2l0ZW0ucHJpbWFyeS5pbWFnZW0udXJsfSBhbHQ9XCJvaVwiIGNsYXNzTmFtZT1cIm14LWF1dG9cIi8+XG4gICAgICAgICAgLy8gICApO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyByZXR1cm4gPHByZT57SlNPTi5zdHJpbmdpZnkoaXRlbSl9PC9wcmU+XG4gICAgICAgICAgXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTQgZml4ZWQgaW5zZXQteC0wIGJvdHRvbS0wXCI+XG4gICAgICAgIFByb2pldG8gZGVzZW52b2x2aWRvIHBvciBMZW9uYXJkbyBEaWFzXG4gICAgICAgIDxiciAvPlxuICAgICAgICBDw7NkaWdvIGZvbnRlIGRpc3BvbsOtdmVsIGVtOiBcbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xuICBjb25zb2xlLmxvZygnc2VydmVyJylcbiAgY29uc3QgY2xpZW50ID0gUHJpc21pYy5jbGllbnQoXCJodHRwczovL2xpbmtzZ3JvdXAuY2RuLnByaXNtaWMuaW8vYXBpL3YyXCIpXG4gIGNvbnN0IGNlbnRyYWxMaW5rcyA9IGF3YWl0IGNsaWVudC5nZXRTaW5nbGUoXCJjZW50cmFsbGlua3NcIilcbiAgY29uc29sZS5sb2coY2VudHJhbExpbmtzKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiBjZW50cmFsTGlua3MuZGF0YSxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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