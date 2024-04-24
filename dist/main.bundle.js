/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
}

body {
    height: 100%;
    margin: 0;
    padding: 0;
}

.main-container {
    display: grid;
    grid-template: 150px 1fr / 1fr;
    background-color: gray;
}


/* Navigation pane design */
.nav {
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 1fr 5fr;
    font-family: 'Times New Roman';
    font-size: 32px;
    font-weight: bold;
    background-color: rgb(83, 72, 72);
    color: white;
}

.restaurant-name {
    grid-column: 1 / 2;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
}

.font {
    grid-column: 1 / 2;
    font-size: 3.5em;
    margin-top: 5px;
}

.name {
    grid-column: 2 / 3;
    font-size: 100px;
    margin: 0;
}

.restaurant-action-btns {
    grid-column: 2 / 3;
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
    margin: 20px auto;
    margin-right: 0;
}

.btns, .select-pages {
    margin: 20px;
}


.btns {
    grid-column: 1 / 2;
    display: flex;
    flex: 1;
    gap: 10px;
}

.select-pages {
    grid-column: 2 / 3;
    margin-right: 0;
    padding: 10px;
}

.pages {
    padding: 10px;
    border-radius: 10px;
    font-family: 'Times New Roman';
    font-size: 25px;
    font-weight: bold;
}

button {
    margin: 0 auto;
    padding: 10px;
    border-radius: 20px;
    border-style: none;
    box-shadow: 2px 2px 5px white;
    font-family: 'Times New Roman';
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
}

/* Restaurant content design */
.content {
    grid-row: 2 / 3;
    width: 1500px;
    height: 100vh;
    margin: 0 auto;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
}

.details {
    font-family: 'Times New Roman';
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "374a5bb0424499f14c0c.png";

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact(){
    const contactContent = document.createElement('div');
    const upperContainer = document.createElement('div');
    const message = document.createElement('h1');
    const contact = document.createElement('p');
    const emailDiv = document.createElement('div');
    const contactDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    const email = document.createElement('p');
    const emailIcon = document.createElement('i');
    const contactIcon = document.createElement('i');
    const addressIcon = document.createElement('i');
    const emailSpan = document.createElement('span');
    const address = document.createElement('p');

    message.textContent = "GET IN TOUCH";
    upperContainer.appendChild(message);

    const contactIconList = ["fa-solid", "fa-phone-volume"];
    contactIconList.forEach(icon => {
        contactIcon.classList.add(icon);
    })
    contact.textContent = 'Phone: +66611992102';
    contactDiv.appendChild(contactIcon);
    contactDiv.appendChild(contact);
    upperContainer.appendChild(contactDiv);

    const emailIconList = ["fa-solid", "fa-envelope"];
    emailIconList.forEach(icon => {
        emailIcon.classList.add(icon);
    })
    emailSpan.style.color = 'red';
    emailSpan.textContent = 'zizu@practice.com';
    email.textContent = 'Email:';
    email.appendChild(emailSpan);
    emailDiv.appendChild(emailIcon);
    emailDiv.appendChild(email);
    upperContainer.appendChild(emailDiv);

    const addressIconList = ["fa-solid", "fa-location-crosshairs"];
    addressIconList.forEach(icon => {
        addressIcon.classList.add(icon);
    })
    contact.textContent = 'Phone: +66611992102';
    address.textContent = 'Address: 18 Mahmoud Azmy Street, of 24th April Road, Tamale, Ghana.';
    addressDiv.appendChild(addressIcon);
    addressDiv.appendChild(address);
    upperContainer.appendChild(addressDiv);


    const lowerContainer = document.createElement('form');
    const lowerLeftDiv = document.createElement('div');
    const leftTextInput = document.createElement('input');
    const leftEmailInput = document.createElement('input');
    const leftTelInput = document.createElement('input');
    const lowerRightDiv = document.createElement('div');
    const rightTextArea = document.createElement('textarea');
    const lowerButton = document.createElement('button');

    leftTextInput.setAttribute('placeholder', 'Your Name:')
    leftTextInput.setAttribute('required', 'true');
    leftTextInput.style = 'font-family: "Times New Roman"; font-size: 16px; font-weight: bold; border-radius: 10px;'+
    'box-shadow: 1px 1px 3px white; border-style: none; line-height: 120%';

    leftEmailInput.setAttribute('placeholder', 'Your Email Address Here:')
    leftEmailInput.setAttribute('required', 'true');
    leftEmailInput.style = 'font-family: "Times New Roman"; font-size: 16px; font-weight: bold; border-radius: 10px;'+ 
    'box-shadow: 1px 1px 3px white; border-style: none;';

    leftTelInput.setAttribute('placeholder', 'Your Phone Number:')
    leftTelInput.setAttribute('required', 'true');
    leftTelInput.style = 'font-family: "Times New Roman"; font-size: 16px; font-weight: bold; border-radius: 10px;'+
    'box-shadow: 1px 1px 3px white; border-style: none;';

    lowerLeftDiv.appendChild(leftTextInput);
    lowerLeftDiv.appendChild(leftEmailInput);
    lowerLeftDiv.appendChild(leftTelInput);

    lowerRightDiv.appendChild(rightTextArea);

    lowerContainer.appendChild(lowerLeftDiv);
    lowerContainer.appendChild(lowerRightDiv);
    lowerButton.textContent = "SEND MESSAGE";
    lowerContainer.appendChild(lowerButton);
    
    contactContent.appendChild(upperContainer);
    contactContent.appendChild(lowerContainer);

    upperContainer.style = 'grid-row: 1/2; margin: 0 auto; font-family: "Times New Roman"; font-size: 25px; font-weight: bold;';

    lowerContainer.style = 'grid-row: 2/3; display: grid; grid-template: 1fr 50px / repeat(2, 1fr)';

    lowerLeftDiv.style = 'grid-column: 1/2; grid-row: 1/2; display: grid; grid-template: repeat(3, 1fr)/1fr; gap: 15px; margin: 10px 10px 0 10px;';

    lowerRightDiv.style = 'grid-column: 2/3;';

    rightTextArea.setAttribute('rows', 18); 
    rightTextArea.setAttribute('cols', 90);
    rightTextArea.setAttribute('placeholder', 'Write your comments here.');
    rightTextArea.style = 'margin: 10px; '

    lowerButton.style = 'grid-row: 2/3; grid-column: 2/3; padding: 10px';

    contactContent.style = "display: grid; grid-template: repeat(2, 1fr) / 1fr;" +
    "width: 1500px; height: 100vh; margin: 0 auto; background-image: url(/assets/1536017106.png);" +
    "background-position: center; background-repeat: no-repeat; background-size: cover; opacity: 0.7;";
    
    return contactContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


// import './menu';


// Create elements dynamically
const masterContainer = document.createElement('div');
   
// Navigation elements
const navContainer = document.createElement('div');
const content = document.createElement('div');
const restaurantName = document.createElement('div');
const restaurantActionBtns = document.createElement('div');
const btns = document.createElement('div');
const selectPages = document.createElement('div');
const pageLabel = document.createElement('label');
const selection = document.createElement('select');
const navIcon = document.createElement('i');
const navH1 = document.createElement('h1');

// Content elements
const divider = document.createElement('div');
const details = document.createElement('div');
const welcome = document.createElement('h1');
const introduction = document.createElement('p');
const command = document.createElement('button');

    // Append options to select element
    const optionList = ['Booking', 'Our Teams', 'Testimonials'];
    optionList.forEach(option => {
        const opt = document.createElement('option');
        opt.textContent = option;
        selection.appendChild(opt);
    })

    // Append a label and select element to the selectPages div element
    pageLabel.textContent = "Pages";
    pageLabel.addEventListener('click', () => {
        selection.focus();
    }) 
    selectPages.appendChild(pageLabel);
    selection.classList.add('pages');
    selectPages.appendChild(selection);

    // Append icons and h1 elements to restaurantName div element
    const restaurantNavIcons = ["fa-solid", "fa-utensils", "font"];
    restaurantNavIcons.forEach(icon => {
        navIcon.classList.add(icon);
    })
    restaurantName.appendChild(navIcon);
    navH1.classList.add('name');
    navH1.textContent = 'Zulka';
    restaurantName.appendChild(navH1);

    // Append buttons to btns div element
    const btnNames = ['Home', 'About', 'Service', 'Menu'];
    btnNames.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn;
        button.classList.add(btn);
        btns.appendChild(button);
    })

    // Append btns and selectPages div elements to the restaurantActionBtns parent container
    btns.classList.add('btns');
    restaurantActionBtns.appendChild(btns);
    selectPages.classList.add('select-pages');
    restaurantActionBtns.appendChild(selectPages);

    restaurantName.classList.add('restaurant-name');
    navContainer.appendChild(restaurantName);
    restaurantActionBtns.classList.add('restaurant-action-btns');
    navContainer.appendChild(restaurantActionBtns);

const createContent = function(){
    // Append elements to content container
    welcome.textContent = 'Enjoy our delicious meals';
    welcome.classList.add('welcome');
    introduction.classList.add('introduction');
    introduction.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    command.classList.add('command');
    command.textContent = "BOOK A TABLE";
    details.appendChild(welcome);
    details.appendChild(introduction);
    details.appendChild(command);
    details.classList.add('details');

    divider.appendChild(details);
    divider.classList.add('divider');
    content.appendChild(divider);

    navContainer.classList.add('nav');
    content.classList.add('content');

    
    return { content, navContainer };
}()

const contact = (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();


masterContainer.classList.add('main-container');
masterContainer.appendChild(createContent.navContainer);
masterContainer.appendChild(createContent.content);
document.body.appendChild(masterContainer);


window.onload = loadPage();


btns.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('button');
    if(clickedButton.classList.contains('Home')){
        clickedButton.style = 'box-shadow: 2px 2px 5px green';
        document.body.removeChild(masterContainer)
        document.body.appendChild(masterContainer);
        masterContainer.classList.add('main-container');
        masterContainer.appendChild(createContent.navContainer);
        masterContainer.appendChild(createContent.content);
        if(contact.parentNode === masterContainer){
            masterContainer.removeChild(contact)
        }
    }
    else if(clickedButton.classList.contains('Service')){
        clickedButton.style = 'box-shadow: 2px 2px 5px green';
    }
    else if(clickedButton.classList.contains('About')){
        clickedButton.style = 'box-shadow: 2px 2px 5px green';
        document.body.removeChild(masterContainer)
        document.body.appendChild(masterContainer);
        masterContainer.classList.add('main-container');
        masterContainer.appendChild(createContent.navContainer);
        masterContainer.appendChild(contact);
        if(createContent.content.parentNode === masterContainer){
            masterContainer.removeChild(createContent.content)
        }
    }
    else if(clickedButton.classList.contains('Menu')){
        clickedButton.style = 'box-shadow: 2px 2px 5px green';
    }
})

function loadPage(){
    masterContainer.classList.add('main-container');
    masterContainer.appendChild(createContent.navContainer);
    masterContainer.appendChild(createContent.content);
    document.body.appendChild(masterContainer);
}
})();

/******/ })()
;