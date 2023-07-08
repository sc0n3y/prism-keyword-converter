"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateprism_kw_converter"]("main",{

/***/ "./src/components/Converter.tsx":
/*!**************************************!*\
  !*** ./src/components/Converter.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csvtojson */ \"./node_modules/csvtojson/browser/browser.js\");\n/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/styled.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\nvar ConverterContainer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    gap: '1rem',\n    marginTop: '2rem',\n    padding: '1rem',\n    border: '1px solid #ddd',\n    borderRadius: '4px',\n    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',\n    maxWidth: '600px',\n    backgroundColor: '#fff',\n    backgroundImage: 'url(\"banner.jpg\")',\n});\nvar Converter = function () {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), csvInput = _a[0], setCsvInput = _a[1];\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), convertedKeywords = _b[0], setConvertedKeywords = _b[1];\n    var convertKeywords = function () { return __awaiter(void 0, void 0, void 0, function () {\n        var keywords, converted, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, csvtojson__WEBPACK_IMPORTED_MODULE_1___default()().fromString(csvInput)];\n                case 1:\n                    keywords = _a.sent();\n                    converted = keywords.map(function (keyword) {\n                        var convertedValues = Object.values(keyword).map(function (value) {\n                            if (value.startsWith('-')) {\n                                // Preserve \"-\" prefix in the output\n                                return value;\n                            }\n                            else {\n                                // Append \"+\" prefix for other values\n                                return \"+\".concat(value);\n                            }\n                        });\n                        var trimmedKeywords = convertedValues.map(function (value) { return value.trim(); });\n                        return \"(\".concat(trimmedKeywords.join(', '), \")\");\n                        ;\n                    });\n                    setConvertedKeywords(converted.join('\\n'));\n                    return [3 /*break*/, 3];\n                case 2:\n                    error_1 = _a.sent();\n                    console.error('Error converting keywords:', error_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n    var handleInputChange = function (e) {\n        setCsvInput(e.target.value);\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ConverterContainer, null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { variant: \"h3\", component: \"h1\", align: \"center\" }, \"PrismAIO Shopify CSV Keyword Converter\"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { minRows: 10, cols: 50, value: csvInput, onChange: handleInputChange, placeholder: \"nike,dunk,low,sb,-be,-true\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { variant: \"contained\", onClick: convertKeywords }, \"Convert\"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { variant: \"h4\", component: \"h2\" }, \"Converted Keywords:\"),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { minRows: 10, cols: 50, value: convertedKeywords, readOnly: true }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Converter);\n\n\n//# sourceURL=webpack://prism-kw-converter/./src/components/Converter.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ccaa4b1fc2dd6a97241")
/******/ })();
/******/ 
/******/ }
);