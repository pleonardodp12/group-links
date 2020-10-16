webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/home/leonardo/Documentos/group-links/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Index = function Index(_ref) {\n  var data = _ref.data;\n  console.log('client');\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: data.corfundo,\n      color: data.cortexto\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"w-1/2 mx-auto text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"font-bold text-10x1 text-center p-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Links groups\"), __jsx(\"img\", {\n    src: data.logo.url,\n    className: \"mx-auto rounded-full shadow-2xl w-1/4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }), data.body.map(function (item) {\n    if (item.slice_type === 'secao') {\n      return __jsx(\"h2\", {\n        className: \"font-bold text-2x1 text-center p-8\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 20\n        }\n      }, item.primary.nome);\n    }\n\n    if (item.slice_type === 'link') {\n      return __jsx(\"div\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        href: item.primary.destino.url,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 17\n        }\n      }, item.primary.texto_do_botao));\n    }\n\n    if (item.slice_type === 'image') {\n      return __jsx(\"img\", {\n        src: item.primary.imagem.url,\n        alt: \"oi\",\n        className: \"mx-auto\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }\n      });\n    }\n\n    return __jsx(\"pre\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 18\n      }\n    }, JSON.stringify(item));\n    return null;\n  })));\n};\n\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwiY29yZnVuZG8iLCJjb2xvciIsImNvcnRleHRvIiwibG9nbyIsInVybCIsImJvZHkiLCJtYXAiLCJpdGVtIiwic2xpY2VfdHlwZSIsInByaW1hcnkiLCJub21lIiwiZGVzdGlubyIsInRleHRvX2RvX2JvdGFvIiwiaW1hZ2VtIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFSCxJQUFJLENBQUNJLFFBQXhCO0FBQWtDQyxXQUFLLEVBQUVMLElBQUksQ0FBQ007QUFBOUMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFLLE9BQUcsRUFBRU4sSUFBSSxDQUFDTyxJQUFMLENBQVVDLEdBQXBCO0FBQXlCLGFBQVMsRUFBQyx1Q0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0tSLElBQUksQ0FBQ1MsSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZCLFFBQUdBLElBQUksQ0FBQ0MsVUFBTCxLQUFvQixPQUF2QixFQUErQjtBQUM3QixhQUFPO0FBQ0csaUJBQVMsRUFBQyxvQ0FEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0lELElBQUksQ0FBQ0UsT0FBTCxDQUFhQyxJQUhqQixDQUFQO0FBS0Q7O0FBQ0QsUUFBR0gsSUFBSSxDQUFDQyxVQUFMLEtBQW9CLE1BQXZCLEVBQThCO0FBQzVCLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsWUFBSSxFQUFFRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUUsT0FBYixDQUFxQlAsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFvQ0csSUFBSSxDQUFDRSxPQUFMLENBQWFHLGNBQWpELENBREYsQ0FERjtBQUtEOztBQUNELFFBQUdMLElBQUksQ0FBQ0MsVUFBTCxLQUFvQixPQUF2QixFQUErQjtBQUM3QixhQUNFO0FBQUssV0FBRyxFQUFFRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUksTUFBYixDQUFvQlQsR0FBOUI7QUFBbUMsV0FBRyxFQUFDLElBQXZDO0FBQTRDLGlCQUFTLEVBQUMsU0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBR0Q7O0FBQ0QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1VLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFmLENBQU4sQ0FBUDtBQUNBLFdBQU8sSUFBUDtBQUNELEdBdEJFLENBSEwsQ0FERixDQURGO0FBZ0NELENBbENEOztLQUFNWixLOztBQWdEU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJpc21pYyBmcm9tICdwcmlzbWljLWphdmFzY3JpcHQnO1xuXG5jb25zdCBJbmRleCA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnY2xpZW50JylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZGF0YS5jb3JmdW5kbywgY29sb3I6IGRhdGEuY29ydGV4dG99fSA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTEweDEgdGV4dC1jZW50ZXIgcC04XCI+TGlua3MgZ3JvdXBzPC9oMT5cbiAgICAgICAgPGltZyBzcmM9e2RhdGEubG9nby51cmx9IGNsYXNzTmFtZT1cIm14LWF1dG8gcm91bmRlZC1mdWxsIHNoYWRvdy0yeGwgdy0xLzRcIi8+XG4gICAgICAgICAge2RhdGEuYm9keS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgaWYoaXRlbS5zbGljZV90eXBlID09PSAnc2VjYW8nKXtcbiAgICAgICAgICAgIHJldHVybiA8aDJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeDEgdGV4dC1jZW50ZXIgcC04XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaW1hcnkubm9tZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaXRlbS5zbGljZV90eXBlID09PSAnbGluaycpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLnByaW1hcnkuZGVzdGluby51cmx9PntpdGVtLnByaW1hcnkudGV4dG9fZG9fYm90YW99PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGl0ZW0uc2xpY2VfdHlwZSA9PT0gJ2ltYWdlJyl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5wcmltYXJ5LmltYWdlbS51cmx9IGFsdD1cIm9pXCIgY2xhc3NOYW1lPVwibXgtYXV0b1wiLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiA8cHJlPntKU09OLnN0cmluZ2lmeShpdGVtKX08L3ByZT5cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcbiAgY29uc29sZS5sb2coJ3NlcnZlcicpXG4gIGNvbnN0IGNsaWVudCA9IFByaXNtaWMuY2xpZW50KFwiaHR0cHM6Ly9saW5rc2dyb3VwLmNkbi5wcmlzbWljLmlvL2FwaS92MlwiKVxuICBjb25zdCBjZW50cmFsTGlua3MgPSBhd2FpdCBjbGllbnQuZ2V0U2luZ2xlKFwiY2VudHJhbGxpbmtzXCIpXG4gIGNvbnNvbGUubG9nKGNlbnRyYWxMaW5rcylcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogY2VudHJhbExpbmtzLmRhdGEsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})