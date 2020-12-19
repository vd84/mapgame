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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/register/index.tsx":
/*!**********************************!*\
  !*** ./pages/register/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/components/register */ \"./src/components/register/index.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_components_register__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci9pbmRleC50c3g/NTk3OSJdLCJuYW1lcyI6WyJSZWdpc3RlckluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFZUEsK0hBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVnaXN0ZXJJbmRleCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvcmVnaXN0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJJbmRleDtcblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register/index.tsx\n");

/***/ }),

/***/ "./src/components/register/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/register/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./src/components/register/register.tsx\");\n\n\nvar _jsxFileName = \"/home/douglasham/kartspel/src/components/register/index.tsx\";\n\n\n\nconst RegisterIndex = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_register__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterIndex);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWdpc3Rlci9pbmRleC50c3g/NjQwYSJdLCJuYW1lcyI6WyJSZWdpc3RlckluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBQ3hCLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBTUgsQ0FQRDs7QUFTZUEsNEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9yZWdpc3Rlci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9yZWdpc3RlcidcblxuXG5jb25zdCBSZWdpc3RlckluZGV4ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UmVnaXN0ZXI+PC9SZWdpc3Rlcj5cbiAgICAgICAgPC8+XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVySW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/register/index.tsx\n");

/***/ }),

/***/ "./src/components/register/register.tsx":
/*!**********************************************!*\
  !*** ./src/components/register/register.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _smallercomponents_textinput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../smallercomponents/textinput */ \"./src/smallercomponents/textinput/index.tsx\");\n\n\nvar _jsxFileName = \"/home/douglasham/kartspel/src/components/register/register.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst Register = () => {\n  const {\n    0: formData,\n    1: setFormdata\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    username: \"\",\n    password: \"\",\n    passwordCopy: \"\"\n  });\n  const {\n    0: submitting,\n    1: setSubmitting\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    setSubmitting(true);\n    console.log(formData);\n    setTimeout(() => {\n      setSubmitting(false);\n    }, 3000);\n  };\n\n  const handleChange = event => {\n    const value = event.target.value;\n    setFormdata(_objectSpread(_objectSpread({}, formData), {}, {\n      [event.target.name]: value\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Register Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, undefined), submitting && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Submitting...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_smallercomponents_textinput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: \"username\",\n        name: \"username\",\n        type: \"text\",\n        label: \"Enter a username\",\n        value: formData.username,\n        onChange: handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_smallercomponents_textinput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: \"password\",\n        name: \"password\",\n        type: \"password\",\n        label: \"Enter a password\",\n        value: formData.password,\n        onChange: handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_smallercomponents_textinput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: \"repassword\",\n        name: \"passwordCopy\",\n        type: \"password\",\n        label: \"Re-enter password\",\n        value: formData.passwordCopy,\n        onChange: handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        children: \"Submit form\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci50c3g/ODMzYSJdLCJuYW1lcyI6WyJSZWdpc3RlciIsImZvcm1EYXRhIiwic2V0Rm9ybWRhdGEiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwYXNzd29yZENvcHkiLCJzdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDbkIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDO0FBQ3JDQyxZQUFRLEVBQUUsRUFEMkI7QUFFckNDLFlBQVEsRUFBRSxFQUYyQjtBQUdyQ0MsZ0JBQVksRUFBRTtBQUh1QixHQUFELENBQXhDO0FBS0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCTCxzREFBUSxDQUFDLEtBQUQsQ0FBNUM7O0FBRUEsUUFBTU0sWUFBWSxHQUFHQyxLQUFLLElBQUk7QUFDMUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBSCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUVBSSxXQUFPLENBQUNDLEdBQVIsQ0FBWVosUUFBWjtBQUVBYSxjQUFVLENBQUMsTUFBTTtBQUNiTixtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFPSCxHQWJEOztBQWVBLFFBQU1PLFlBQVksR0FBSUwsS0FBRCxJQUFvRDtBQUNyRSxVQUFNTSxLQUFLLEdBQUdOLEtBQUssQ0FBQ08sTUFBTixDQUFhRCxLQUEzQjtBQUNBZCxlQUFXLGlDQUNKRCxRQURJO0FBRVAsT0FBQ1MsS0FBSyxDQUFDTyxNQUFOLENBQWFDLElBQWQsR0FBcUJGO0FBRmQsT0FBWDtBQUtILEdBUEQ7O0FBU0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVLVCxVQUFVLGlCQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhSLGVBSUk7QUFBTSxjQUFRLEVBQUVFLFlBQWhCO0FBQUEsOEJBQ0kscUVBQUMsb0VBQUQ7QUFBZ0IsVUFBRSxFQUFDLFVBQW5CO0FBQThCLFlBQUksRUFBQyxVQUFuQztBQUE4QyxZQUFJLEVBQUMsTUFBbkQ7QUFBMEQsYUFBSyxFQUFDLGtCQUFoRTtBQUFtRixhQUFLLEVBQUVSLFFBQVEsQ0FBQ0csUUFBbkc7QUFBNkcsZ0JBQVEsRUFBRVc7QUFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLHFFQUFDLG9FQUFEO0FBQWdCLFVBQUUsRUFBQyxVQUFuQjtBQUE4QixZQUFJLEVBQUMsVUFBbkM7QUFBOEMsWUFBSSxFQUFDLFVBQW5EO0FBQThELGFBQUssRUFBQyxrQkFBcEU7QUFBdUYsYUFBSyxFQUFFZCxRQUFRLENBQUNJLFFBQXZHO0FBQWlILGdCQUFRLEVBQUVVO0FBQTNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSSxxRUFBQyxvRUFBRDtBQUFnQixVQUFFLEVBQUMsWUFBbkI7QUFBZ0MsWUFBSSxFQUFDLGNBQXJDO0FBQW9ELFlBQUksRUFBQyxVQUF6RDtBQUFvRSxhQUFLLEVBQUMsbUJBQTFFO0FBQThGLGFBQUssRUFBRWQsUUFBUSxDQUFDSyxZQUE5RztBQUE0SCxnQkFBUSxFQUFFUztBQUF0STtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUEsa0JBREo7QUFlSCxDQS9DRDs7QUFpRGVmLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXh0SW5wdXRJbmRleCBmcm9tICcuLi8uLi9zbWFsbGVyY29tcG9uZW50cy90ZXh0aW5wdXQnXG5cblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtZGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgcGFzc3dvcmRDb3B5OiBcIlwiXG4gICAgfSlcbiAgICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgfSwgMzAwMCk7XG5cblxuXG5cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IHsgdGFyZ2V0OiB7IG5hbWU6IGFueTsgdmFsdWU6IGFueTsgfTsgfSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICBzZXRGb3JtZGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IHZhbHVlXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyIFBhZ2U8L2gxPlxuICAgICAgICAgICAge3N1Ym1pdHRpbmcgJiZcbiAgICAgICAgICAgICAgICA8aDE+U3VibWl0dGluZy4uLjwvaDE+fVxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dEluZGV4IGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIGxhYmVsPVwiRW50ZXIgYSB1c2VybmFtZVwiIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gPjwvVGV4dElucHV0SW5kZXg+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dEluZGV4IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIkVudGVyIGEgcGFzc3dvcmRcIiB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ID48L1RleHRJbnB1dEluZGV4PlxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRJbmRleCBpZD1cInJlcGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRDb3B5XCIgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJSZS1lbnRlciBwYXNzd29yZFwiIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZENvcHl9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ID48L1RleHRJbnB1dEluZGV4PlxuICAgICAgICAgICAgICAgIDxidXR0b24gPlN1Ym1pdCBmb3JtPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cblxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/register/register.tsx\n");

/***/ }),

/***/ "./src/smallercomponents/textinput/index.tsx":
/*!***************************************************!*\
  !*** ./src/smallercomponents/textinput/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _textinput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textinput */ \"./src/smallercomponents/textinput/textinput.tsx\");\n\n\nvar _jsxFileName = \"/home/douglasham/kartspel/src/smallercomponents/textinput/index.tsx\";\n\n\n\nconst TextInputIndex = ({\n  id,\n  label,\n  onChange,\n  value,\n  name,\n  type\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_textinput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      id: id,\n      label: label,\n      onChange: onChange,\n      value: value,\n      name: name,\n      type: type\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInputIndex);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc21hbGxlcmNvbXBvbmVudHMvdGV4dGlucHV0L2luZGV4LnRzeD81NWMwIl0sIm5hbWVzIjpbIlRleHRJbnB1dEluZGV4IiwiaWQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJuYW1lIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFFQyxJQUFGO0FBQU1DLE9BQU47QUFBYUMsVUFBYjtBQUF1QkMsT0FBdkI7QUFBOEJDLE1BQTlCO0FBQW9DQztBQUFwQyxDQUFELEtBQWdEO0FBQ25FLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsa0RBQUQ7QUFBVyxRQUFFLEVBQUVMLEVBQWY7QUFBbUIsV0FBSyxFQUFFQyxLQUExQjtBQUFpQyxjQUFRLEVBQUVDLFFBQTNDO0FBQXFELFdBQUssRUFBRUMsS0FBNUQ7QUFBbUUsVUFBSSxFQUFFQyxJQUF6RTtBQUErRSxVQUFJLEVBQUVDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQUtILENBTkQ7O0FBUWVOLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL3NtYWxsZXJjb21wb25lbnRzL3RleHRpbnB1dC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4vdGV4dGlucHV0J1xuXG5cbmNvbnN0IFRleHRJbnB1dEluZGV4ID0gKHsgaWQsIGxhYmVsLCBvbkNoYW5nZSwgdmFsdWUsIG5hbWUsIHR5cGUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VGV4dElucHV0IGlkPXtpZH0gbGFiZWw9e2xhYmVsfSBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gbmFtZT17bmFtZX0gdHlwZT17dHlwZX0+PC9UZXh0SW5wdXQ+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0SW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/smallercomponents/textinput/index.tsx\n");

/***/ }),

/***/ "./src/smallercomponents/textinput/textinput.tsx":
/*!*******************************************************!*\
  !*** ./src/smallercomponents/textinput/textinput.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/douglasham/kartspel/src/smallercomponents/textinput/textinput.tsx\";\n\n\nconst TextInput = ({\n  id,\n  label,\n  onChange,\n  value,\n  name,\n  type\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      htmlFor: name,\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      id: id,\n      type: type,\n      name: name,\n      onChange: onChange,\n      value: value\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInput);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc21hbGxlcmNvbXBvbmVudHMvdGV4dGlucHV0L3RleHRpbnB1dC50c3g/OWE2MSJdLCJuYW1lcyI6WyJUZXh0SW5wdXQiLCJpZCIsImxhYmVsIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQVlBLE1BQU1BLFNBQVMsR0FBRyxDQUFDO0FBQUVDLElBQUY7QUFBTUMsT0FBTjtBQUFhQyxVQUFiO0FBQXVCQyxPQUF2QjtBQUE4QkMsTUFBOUI7QUFBb0NDO0FBQXBDLENBQUQsS0FBdUQ7QUFDckUsc0JBQ0k7QUFBQSw0QkFDSTtBQUFPLGFBQU8sRUFBRUQsSUFBaEI7QUFBQSxnQkFBdUJIO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFPLFFBQUUsRUFBRUQsRUFBWDtBQUFlLFVBQUksRUFBRUssSUFBckI7QUFBMkIsVUFBSSxFQUFFRCxJQUFqQztBQUF1QyxjQUFRLEVBQUVGLFFBQWpEO0FBQTJELFdBQUssRUFBRUM7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBLGtCQURKO0FBTUgsQ0FQRDs7QUFTZUosd0VBQWYiLCJmaWxlIjoiLi9zcmMvc21hbGxlcmNvbXBvbmVudHMvdGV4dGlucHV0L3RleHRpbnB1dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxudHlwZSBQcm9wcyA9IFJlYWRvbmx5PHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgb25DaGFuZ2U6ICgpID0+IG51bGwsXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nXG59PlxuXG5jb25zdCBUZXh0SW5wdXQgPSAoeyBpZCwgbGFiZWwsIG9uQ2hhbmdlLCB2YWx1ZSwgbmFtZSwgdHlwZSB9OiBQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9e2lkfSB0eXBlPXt0eXBlfSBuYW1lPXtuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0+PC9pbnB1dCA+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/smallercomponents/textinput/textinput.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });