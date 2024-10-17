/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./index.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: Arial, sans-serif;\\n}\\n\\nbody {\\n  background-color: #f5f5f5;\\n  font-size: 15px;\\n  font-family: Helvetica, Arial, sans-serif;\\n  font-weight: 400;\\n  line-height: 20px;\\n  display: flex;\\n  height: 100vh;\\n}\\n\\n.chat-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  width: 100vw;\\n  background-color: #fff;\\n}\\n\\n.chat-header {\\n  background-color: #9c27b0;\\n  padding: 10px;\\n  color: white;\\n}\\n\\n.chat-body-footer {\\n  display: flex;\\n  flex-grow: 1;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n  overflow-y: auto;\\n}\\n\\n.chat-header-content {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\n.avatar {\\n  width: 40px;\\n  height: 40px;\\n  border-radius: 50%;\\n}\\n\\n.chat-user-info {\\n  flex-grow: 1;\\n  margin-left: 10px;\\n}\\n\\n.user-name {\\n  font-size: 16px;\\n  margin-bottom: 5px;\\n}\\n\\n.last-seen {\\n  font-size: 12px;\\n}\\n\\n.option-button {\\n  background-color: transparent;\\n  border: none;\\n  color: white;\\n  font-size: 14px;\\n  cursor: pointer;\\n}\\n\\n.chat-body {\\n  padding: 10px;\\n  overflow-y: auto;\\n  scrollbar-width: none;\\n}\\n\\n.message {\\n  margin-bottom: 15px;\\n  display: flex;\\n  flex-direction: column;\\n  overflow-wrap: break-word;\\n  word-break: break-word;\\n  padding: 8px 8px 2px 8px;\\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.4);\\n}\\n\\n.message-received-container {\\n  display: flex;\\n  justify-content: flex-start;\\n}\\n\\n.message-received {\\n  align-items: flex-end;\\n  background-color: #f0f0f0;\\n  border-radius: 10px 10px 10px 2px;\\n}\\n\\n.message-send-container {\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.message-send {\\n  align-items: flex-start;\\n  background-color: #e1bee7;\\n  border-radius: 10px 10px 2px 10px;\\n}\\n\\n.timestamp {\\n  font-size: 10px;\\n  color: gray;\\n  align-self: flex-end;\\n}\\n\\n.message-send .timestamp::after {\\n  content: \\\"done_all\\\";\\n  font-family: \\\"Material Symbols Outlined\\\";\\n  font-size: 17px;\\n  margin-left: 5px;\\n  vertical-align: middle;\\n  color: #8C1AF6;\\n}\\n\\n.image-message {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n}\\n\\n.image {\\n  width: 300px;\\n  border-radius: 5px;\\n}\\n\\n.chat-footer {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: flex-end;\\n  padding: 8px;\\n  border-top: 1px solid #ddd;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-grow: 1;\\n}\\n\\n.message-input {\\n  flex-grow: 1;\\n  margin: 8px;\\n  border: none;\\n  resize: none; \\n  overflow-y: hidden; \\n  scrollbar-width: none;\\n  font-size: inherit;\\n  line-height: 1;\\n}\\n\\ntextarea:focus {\\n  outline: none;\\n}\\n\\n.material-symbols-outlined {\\n  margin: 5px;\\n  cursor: pointer;\\n  font-variation-settings: \\\"FILL\\\" 0, \\\"wght\\\" 400, \\\"GRAD\\\" 0, \\\"opsz\\\" 24;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./index.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/chatItem.css":
/*!********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/chatItem.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".chat-list {\\n\\toverflow-y: auto;\\n\\tscrollbar-width: none;\\n}\\n\\n.chat-item {\\n\\tcursor: pointer;\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\tpadding: 10px 0;\\n\\tborder-bottom: 1px solid #ccc;\\n}\\n\\n.avatar-conteiner {\\n\\tmargin: auto 15px;\\n}\\n\\n.chat-message {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tgap: 5px;\\n\\tflex-grow: 1;\\n\\tpadding-left: 10px;\\n}\\n\\n.chat-message p {\\n\\tcolor: gray;\\n}\\n\\n.chat-name {\\n\\tfont-weight: bold;\\n}\\n\\n.chat-details {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tjustify-content: space-between;\\n\\talign-items: flex-end;\\n\\tmargin: auto 15px;\\n}\\n\\n.chat-time {\\n\\tfont-size: 12px;\\n\\tcolor: gray;\\n\\tmargin-right: 3px;\\n}\\n\\n.unread-count {\\n\\tbackground-color: #8c1af6;\\n\\tcolor: white;\\n\\tpadding: 2px 5px;\\n\\tborder-radius: 10px;\\n}\\n\\n.chat-symbol {\\n\\tmargin: 0;\\n\\tcursor: default;\\n\\tcolor: #8c1af6;\\n}\\n\\n.taged-unread-count {\\n\\tbackground-color: rgb(236, 191, 67);\\n\\tcolor: black;\\n\\tpadding: 2px 5px;\\n\\tborder-radius: 10px;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n}\\n\\n.taged-unread-count::before {\\n\\tcontent: \\\"alternate_email\\\";\\n\\tfont-family: \\\"Material Symbols Outlined\\\";\\n\\tmargin-right: 2px;\\n\\tfont-weight: bold;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/chatItem.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/floatingButton.css":
/*!**************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/floatingButton.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".floating-btn {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tposition: fixed;\\n\\tright: 20px;\\n\\tbottom: 20px;\\n\\tbackground-color: yellow;\\n\\tborder: none;\\n\\tborder-radius: 50%;\\n\\twidth: 60px;\\n\\theight: 60px;\\n\\tfont-size: 36px;\\n\\tcursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/floatingButton.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/header.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/header.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".chats-header {\\n\\tbackground-color: #9c27b0;\\n\\tpadding: 10px;\\n\\tcolor: white;\\n}\\n\\n.chat-header-content {\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n}\\n\\n.chats-title {\\n\\theight: 45px;\\n\\talign-content: center;\\n\\tflex-grow: 1;\\n\\tmargin-left: 30px;\\n\\tfont-size: 18px;\\n}\\n\\n.chat-header-list {\\n\\tdisplay: flex;\\n\\tflex-grow: 1;\\n\\tflex-direction: column;\\n\\tjustify-content: flex-start;\\n\\toverflow-y: auto;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/header.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./chats.js":
/*!******************!*\
  !*** ./chats.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header.js */ \"./components/Header.js\");\n/* harmony import */ var _components_ChatItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ChatItem.js */ \"./components/ChatItem.js\");\n/* harmony import */ var _components_FloatingButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FloatingButton.js */ \"./components/FloatingButton.js\");\n/* harmony import */ var _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/avatar.jpg */ \"./img/avatar.jpg\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var currentUrl = window.location.pathname;\n  if (currentUrl.includes(\"chats.html\")) {\n    document.getElementsByClassName(\"chats-header\")[0].innerHTML = Object(_components_Header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    var chatData = [{\n      avatar: _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      name: \"Дженнифер Эшли\",\n      message: \"Ты куда пропал?\",\n      time: \"15:52\",\n      unread: null,\n      tag: false,\n      read: true\n    }, {\n      avatar: _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      name: \"Общество целых бокалов\",\n      message: \"Ребят, без меня сегодня :(\",\n      time: \"15:52\",\n      unread: 93,\n      tag: false,\n      read: false\n    }, {\n      avatar: _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      name: \"Антон Иванов\",\n      message: \"Тоха, ты где?\",\n      time: \"15:52\",\n      unread: null,\n      tag: true,\n      read: true\n    }, {\n      avatar: _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      name: \"Серёга (должен 2000Р)\",\n      message: \"Серёг, это Петя. Где бабло моё?\",\n      time: \"15:52\",\n      unread: 46,\n      tag: true,\n      read: false\n    }, {\n      avatar: _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      name: \"Общество разбитых бокалов\",\n      message: \"Петька, ты с нами сегодня?\",\n      time: \"15:52\",\n      unread: null,\n      tag: false,\n      read: true\n    }, {\n      avatar: _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      name: \"Сэм с Нижнего\",\n      message: \"img_12-12-09\",\n      time: \"15:52\",\n      unread: null,\n      tag: false,\n      read: false\n    }, {\n      avatar: _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      name: \"Айрат работа\",\n      message: \"Айрат, во сколько приедешь?\",\n      time: \"15:52\",\n      unread: null,\n      tag: false,\n      read: true\n    }, {\n      avatar: _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      name: \"Кеша армия\",\n      message: \"Кеша, задолбал тупить\",\n      time: \"15:52\",\n      unread: 61,\n      tag: false,\n      read: false\n    }];\n    var chatList = document.getElementsByClassName(\"chat-list\")[0];\n    chatData.forEach(function (chat, index) {\n      var chatItemHTML = Object(_components_ChatItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(chat);\n      chatList.innerHTML += chatItemHTML;\n    });\n    var chatItems = document.querySelectorAll(\".chat-item\");\n    chatItems.forEach(function (chatItem) {\n      chatItem.addEventListener(\"click\", function () {\n        window.location.href = \"./index.html\";\n      });\n    });\n    document.getElementsByClassName(\"floating-button\")[0].innerHTML = Object(_components_FloatingButton_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    document.querySelector(\".floating-btn\").addEventListener(\"click\", function () {\n      alert(\"Создать новый чат\");\n    });\n  }\n});\n\n//# sourceURL=webpack:///./chats.js?");

/***/ }),

/***/ "./components/ChatItem.js":
/*!********************************!*\
  !*** ./components/ChatItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_chatItem_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/chatItem.css */ \"./styles/chatItem.css\");\n/* harmony import */ var _styles_chatItem_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_chatItem_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ChatItem = function ChatItem(_ref) {\n  var avatar = _ref.avatar,\n    name = _ref.name,\n    message = _ref.message,\n    time = _ref.time,\n    unread = _ref.unread,\n    read = _ref.read,\n    tag = _ref.tag;\n  return \"\\n        <div class=\\\"chat-item\\\">\\n            <div class=\\\"avatar-conteiner\\\">\\n                <img class=\\\"avatar\\\" src=\\\"\".concat(avatar, \"\\\" alt=\\\"avatar\\\">\\n            </div>\\n            <div class=\\\"chat-message\\\">\\n                <span class=\\\"chat-name\\\">\").concat(name, \"</span>\\n                <p>\").concat(message, \"</p>\\n            </div>\\n            <div class=\\\"chat-details\\\">\\n                <span class=\\\"chat-time\\\">\").concat(time, \"</span>\\n                \").concat(unread ? \"<span class=\".concat(tag ? \"taged-unread-count\" : \"unread-count\", \">\").concat(unread, \"</span>\") : \"\".concat(read ? \"<span class=\\\"material-symbols-outlined chat-symbol\\\">done_all</span>\" : \"<span class=\\\"material-symbols-outlined chat-symbol\\\">check</span>\"), \"\\n            </div>\\n        </div>\\n    \");\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatItem);\n\n//# sourceURL=webpack:///./components/ChatItem.js?");

/***/ }),

/***/ "./components/FloatingButton.js":
/*!**************************************!*\
  !*** ./components/FloatingButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_floatingButton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/floatingButton.css */ \"./styles/floatingButton.css\");\n/* harmony import */ var _styles_floatingButton_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_floatingButton_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar FloatingButton = function FloatingButton() {\n  return \"\\n        <span class=\\\"material-symbols-outlined floating-btn\\\">\\n            edit\\n        </span>\\n    \";\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FloatingButton);\n\n//# sourceURL=webpack:///./components/FloatingButton.js?");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/header.css */ \"./styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Header = function Header() {\n  return \"\\n        <div class=\\\"chat-header-content\\\">\\n            <span class=\\\"material-symbols-outlined\\\">\\n                menu\\n            </span>\\n            <h3 class=\\\"chats-title\\\">Messenger</h3>\\n            <span class=\\\"material-symbols-outlined\\\">\\n                search\\n            </span>\\n        </div>\\n    \";\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./components/Header.js?");

/***/ }),

/***/ "./img/avatar.jpg":
/*!************************!*\
  !*** ./img/avatar.jpg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/img/avatar.jpg\");\n\n//# sourceURL=webpack:///./img/avatar.jpg?");

/***/ }),

/***/ "./img/img.png":
/*!*********************!*\
  !*** ./img/img.png ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/img/img.png\");\n\n//# sourceURL=webpack:///./img/img.png?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"../node_modules/css-loader/dist/cjs.js!./index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/avatar.jpg */ \"./img/avatar.jpg\");\n/* harmony import */ var _img_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/img.png */ \"./img/img.png\");\n/* harmony import */ var _chats_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats.js */ \"./chats.js\");\n\n\n\n\nvar form = document.querySelector(\"form\");\nvar messageInput = document.getElementsByClassName(\"message-input\")[0];\nvar messagesContainer = document.getElementsByClassName(\"chat-body\")[0];\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var currentUrl = window.location.pathname;\n  if (currentUrl.includes(\"index.html\")) {\n    var handleSubmit = function handleSubmit(event) {\n      event.preventDefault();\n      if (messageInput.value.trim() === \"\") return;\n      var message = {\n        sender: \"User\",\n        text: messageInput.value.trim(),\n        time: new Date().toLocaleTimeString([], {\n          hour: \"2-digit\",\n          minute: \"2-digit\"\n        })\n      };\n      appendMessage(message);\n      messagesState.push(message);\n      messageInput.value = \"\";\n    };\n    var handleKeyPress = function handleKeyPress(event) {\n      if (event.keyCode === 13) {\n        if (event.shiftKey) {\n          messageInput.value += \"\\n\";\n          messageInput.dispatchEvent(new Event(\"input\"));\n          event.preventDefault();\n        } else {\n          event.preventDefault();\n          form.dispatchEvent(new Event(\"submit\"));\n          messageInput.dispatchEvent(new Event(\"input\"));\n        }\n      }\n    };\n    var saveMessagesToLocalStorage = function saveMessagesToLocalStorage() {\n      localStorage.setItem(\"chatMessages\", JSON.stringify(messagesState));\n    };\n    var loadMessages = function loadMessages() {\n      messagesState = JSON.parse(localStorage.getItem(\"chatMessages\")) || [];\n      messagesState.forEach(function (message) {\n        appendMessage(message);\n      });\n    };\n    var appendMessage = function appendMessage(message) {\n      var messageSendContainer = document.createElement(\"div\");\n      messageSendContainer.classList.add(\"message-send-container\");\n      var messageDiv = document.createElement(\"div\");\n      messageDiv.classList.add(\"message\", \"message-send\");\n      messageDiv.innerText = \"\".concat(message.text);\n      var messageTime = document.createElement(\"p\");\n      messageTime.classList.add(\"timestamp\");\n      messageTime.innerText = \"\".concat(message.time);\n      messageDiv.appendChild(messageTime);\n      messageSendContainer.appendChild(messageDiv);\n      messagesContainer.appendChild(messageSendContainer);\n      messagesContainer.scrollTop = messagesContainer.scrollHeight;\n    };\n    document.getElementsByClassName(\"avatar\")[0].src = _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    document.getElementsByClassName(\"image\")[0].src = _img_img_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    var messagesState = [];\n    window.addEventListener(\"load\", function () {\n      loadMessages();\n    });\n    messageInput.addEventListener(\"input\", function () {\n      var lineHeight = parseInt(window.getComputedStyle(this).lineHeight);\n      var maxRows = 5;\n      this.rows = 1;\n      var currentRows = Math.floor(this.scrollHeight / lineHeight);\n      if (currentRows < maxRows) {\n        this.rows = currentRows;\n        messagesContainer.scrollTop = messagesContainer.scrollHeight;\n      } else {\n        this.rows = maxRows;\n        this.style.overflowY = \"auto\";\n      }\n    });\n    form.addEventListener(\"submit\", handleSubmit);\n    form.addEventListener(\"keypress\", handleKeyPress);\n    window.addEventListener(\"beforeunload\", saveMessagesToLocalStorage);\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./styles/chatItem.css":
/*!*****************************!*\
  !*** ./styles/chatItem.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./chatItem.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/chatItem.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/chatItem.css?");

/***/ }),

/***/ "./styles/floatingButton.css":
/*!***********************************!*\
  !*** ./styles/floatingButton.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./floatingButton.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/floatingButton.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/floatingButton.css?");

/***/ }),

/***/ "./styles/header.css":
/*!***************************!*\
  !*** ./styles/header.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./header.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/header.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/header.css?");

/***/ })

/******/ });