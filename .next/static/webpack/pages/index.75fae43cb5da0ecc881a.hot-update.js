webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/home/leonardo/Documentos/group-links/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Index = function Index(_ref) {\n  var data = _ref.data;\n  console.log('client');\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: data.corfundo,\n      color: data.cortexto\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"w-1/2 mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"font-bold text-4x1 text-center p-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Links groups\"), __jsx(\"img\", {\n    src: data.logo.url,\n    className: \"mx-auto rounded-full\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }), __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, data.body.map(function (item) {\n    if (item.slice_type === 'secao') {\n      return __jsx(\"h2\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }\n      }, item.primary.nome);\n    }\n\n    if (item.slice_type === 'link') {\n      return __jsx(\"li\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        href: item.primary.destino.url,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 17\n        }\n      }, item.primary.texto_do_botao));\n    }\n\n    if (item.slice_type === 'image') {\n      return __jsx(\"img\", {\n        src: item.primary.imagem.url,\n        alt: \"oi\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 15\n        }\n      });\n    }\n\n    return __jsx(\"pre\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 18\n      }\n    }, JSON.stringify(item));\n    return null;\n  }))));\n};\n\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwiY29yZnVuZG8iLCJjb2xvciIsImNvcnRleHRvIiwibG9nbyIsInVybCIsImJvZHkiLCJtYXAiLCJpdGVtIiwic2xpY2VfdHlwZSIsInByaW1hcnkiLCJub21lIiwiZGVzdGlubyIsInRleHRvX2RvX2JvdGFvIiwiaW1hZ2VtIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFSCxJQUFJLENBQUNJLFFBQXhCO0FBQWtDQyxXQUFLLEVBQUVMLElBQUksQ0FBQ007QUFBOUMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsb0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUssT0FBRyxFQUFFTixJQUFJLENBQUNPLElBQUwsQ0FBVUMsR0FBcEI7QUFBeUIsYUFBUyxFQUFDLHNCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLElBQUksQ0FBQ1MsSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZCLFFBQUdBLElBQUksQ0FBQ0MsVUFBTCxLQUFvQixPQUF2QixFQUErQjtBQUM3QixhQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLElBQWxCLENBQVI7QUFDRDs7QUFDRCxRQUFHSCxJQUFJLENBQUNDLFVBQUwsS0FBb0IsTUFBdkIsRUFBOEI7QUFDNUIsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxZQUFJLEVBQUVELElBQUksQ0FBQ0UsT0FBTCxDQUFhRSxPQUFiLENBQXFCUCxHQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW9DRyxJQUFJLENBQUNFLE9BQUwsQ0FBYUcsY0FBakQsQ0FERixDQURGO0FBS0Q7O0FBQ0QsUUFBR0wsSUFBSSxDQUFDQyxVQUFMLEtBQW9CLE9BQXZCLEVBQStCO0FBQzdCLGFBQ0U7QUFBSyxXQUFHLEVBQUVELElBQUksQ0FBQ0UsT0FBTCxDQUFhSSxNQUFiLENBQW9CVCxHQUE5QjtBQUFtQyxXQUFHLEVBQUMsSUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBR0Q7O0FBQ0QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1VLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFmLENBQU4sQ0FBUDtBQUNBLFdBQU8sSUFBUDtBQUNELEdBbEJFLENBREgsQ0FIRixDQURGLENBREY7QUE4QkQsQ0FoQ0Q7O0tBQU1aLEs7O0FBOENTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcmlzbWljIGZyb20gJ3ByaXNtaWMtamF2YXNjcmlwdCc7XG5cbmNvbnN0IEluZGV4ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdjbGllbnQnKVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBkYXRhLmNvcmZ1bmRvLCBjb2xvcjogZGF0YS5jb3J0ZXh0b319ID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgbXgtYXV0b1wiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHgxIHRleHQtY2VudGVyIHAtOFwiPkxpbmtzIGdyb3VwczwvaDE+XG4gICAgICAgIDxpbWcgc3JjPXtkYXRhLmxvZ28udXJsfSBjbGFzc05hbWU9XCJteC1hdXRvIHJvdW5kZWQtZnVsbFwiLz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtkYXRhLmJvZHkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmKGl0ZW0uc2xpY2VfdHlwZSA9PT0gJ3NlY2FvJyl7XG4gICAgICAgICAgICByZXR1cm4gIDxoMj57aXRlbS5wcmltYXJ5Lm5vbWV9PC9oMj5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaXRlbS5zbGljZV90eXBlID09PSAnbGluaycpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ucHJpbWFyeS5kZXN0aW5vLnVybH0+e2l0ZW0ucHJpbWFyeS50ZXh0b19kb19ib3Rhb308L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihpdGVtLnNsaWNlX3R5cGUgPT09ICdpbWFnZScpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0ucHJpbWFyeS5pbWFnZW0udXJsfSBhbHQ9XCJvaVwiLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiA8cHJlPntKU09OLnN0cmluZ2lmeShpdGVtKX08L3ByZT5cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcbiAgY29uc29sZS5sb2coJ3NlcnZlcicpXG4gIGNvbnN0IGNsaWVudCA9IFByaXNtaWMuY2xpZW50KFwiaHR0cHM6Ly9saW5rc2dyb3VwLmNkbi5wcmlzbWljLmlvL2FwaS92MlwiKVxuICBjb25zdCBjZW50cmFsTGlua3MgPSBhd2FpdCBjbGllbnQuZ2V0U2luZ2xlKFwiY2VudHJhbGxpbmtzXCIpXG4gIGNvbnNvbGUubG9nKGNlbnRyYWxMaW5rcylcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogY2VudHJhbExpbmtzLmRhdGEsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})