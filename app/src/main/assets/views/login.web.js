// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(14),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1dbb07f4",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\东风日产\\poc\\awesome-project\\src\\components\\fixed.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fixed.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dbb07f4", Component.options)
  } else {
    hotAPI.reload("data-v-1dbb07f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("485dda2c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1dbb07f4\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fixed.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1dbb07f4\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fixed.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 系统栏固定白色背景，遮住页面内容 */\n.fixed[data-v-1dbb07f4] {\n    position: fixed;\n    background-color: rgba(249, 249, 249, 0.9);\n    /* background-color: #f5f5fa; */\n    width: 750px;\n    top: 0;\n    left: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  name: 'fixed',
  data: function data() {
    return {
      Env: WXEnvironment // 获取设备环境变量
    };
  }
};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fixed",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1dbb07f4", module.exports)
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(9)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * navigator 跳转页面公共方法
 */

//  引入navigator模块
var navigator = weex.requireModule('navigator');

// 封装navigator跳转页面公共方法
var navigatorPushEvent = exports.navigatorPushEvent = function navigatorPushEvent(jumpPageName, JScallBack) {
  // const navigatorEvent = (cdnUrl) => {
  var url = '';
  // var url = 'http://60.191.59.19:10084/emas-bucket-public/app/hzBankOA-0817/' + jumpPageName + '.js'
  var picturePath = weex.config.bundleUrl;
  var arrPath = picturePath.split('/');
  // 判断设备类型
  if (weex.config.env.platform === 'iOS') {
    // iOS设备路径
    // url = weex.config.bundleUrl.split('/').slice(0,-1).join('/') + '/' + jumpPageName + '.js'
    var picPath = '';
    for (var i = 0; i < arrPath.length; i++) {
      if (i < arrPath.length - 1) {
        picPath += arrPath[i] + "/";
      }
    }
    url = picPath + jumpPageName + '.js';
  } else if (weex.config.env.platform === 'android') {
    // Android设备路径
    // url = 'LocalAssets_' + jumpPageName + '.js'
    // url = 'local:///' + jumpPageName + '.js'
    url = arrPath[0] + "/" + arrPath[1] + "/" + arrPath[2] + '/views/' + jumpPageName + '.js';
  } else {
    url = arrPath[0] + "/views/" + jumpPageName + ".html";
  }
  // var url = ''

  // cdn路径
  // const url = cdnUrl

  // 获取url，开始执行跳转
  navigator.push({
    url: url,
    animated: "true"
  }, function (event) {
    JScallBack;
  });
};

var navigatorPopEvent = exports.navigatorPopEvent = function navigatorPopEvent(JScallBack) {
  navigator.pop({ animated: "true" }, function (event) {
    JScallBack;
  });
};

var navigatorPushEventurlNo = exports.navigatorPushEventurlNo = function navigatorPushEventurlNo(urlNo, jumpPageName, JScallBack) {
  // const navigatorEvent = (cdnUrl) => {
  var url = '';
  var url = weex.config.bundleUrl.split('/').slice(0, -2).join('/') + '/' + 'hzBankOA-' + urlNo + '/' + jumpPageName + '.js';
  // var url = 'http://60.191.59.19:10084/emas-bucket-public/app/hzBankOA-' + urlNo + '/' + jumpPageName + '.js'
  navigator.push({
    url: url,
    animated: "true"
  }, function (event) {
    JScallBack;
  });
};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.21
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ("development" !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  
  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    try {
      return fn.apply(null, arguments)
    } finally {
      useMacroTask = false;    
    }
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }

      if (renderCompleted) {
        contexts.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ("development" !== 'production' && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + camelizedKey)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ("development" !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.21';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(5).setImmediate))

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(6);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(7)))

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _weexVueRender = __webpack_require__(8);

var _weexVueRender2 = _interopRequireDefault(_weexVueRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_weexVueRender2.default.init(_vue2.default);

var App = __webpack_require__(80);
new _vue2.default(_vue2.default.util.extend({ el: '#root' }, App));

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

console.log('START WEEX VUE RENDER: 0.12.32, Build 2018-10-18 11:48.');

'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}
__$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-root,\n.weex-root * {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.weex-root,\n.weex-root *,\n.weex-root *::before,\n.weex-root *::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n.weex-root a,\n.weex-root button,\n.weex-root [role=\"button\"],\n.weex-root input,\n.weex-root label,\n.weex-root select,\n.weex-root textarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\n.weex-root p,\n.weex-root ol,\n.weex-root ul,\n.weex-root dl {\n  margin: 0;\n  padding: 0;\n}\n\n.weex-root li {\n  list-style: none;\n}\n\n.weex-root figure {\n  margin: 0;\n}\n\n.weex-root textarea {\n  resize: none;\n}\n\n/* show no scroll bar. */\n::-webkit-scrollbar {\n  display: none;\n}\n", undefined);

__$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-root * {\n  border-width: 0;\n  border-color: inherit;\n  border-style: solid;\n}\n\n.weex-flex-ct {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.weex-ct {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -moz-box-flex: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -moz-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ct.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.weex-el {\n  display: block;\n  box-sizing: border-box;\n  position: relative;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -moz-box-flex: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ios-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.weex-fixed {\n  position: fixed;\n  z-index: 1;\n}\n\n.weex-sticky {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n}\n", undefined);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable */

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, true, true);

  if ((typeof extra === 'undefined' ? 'undefined' : _typeof(extra)) === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  /**
   * A flag to distinguish with other events with the same name generated
   * by another library in the same page.
   */
  event._for = 'weex';

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2) + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)));
  var translate = [x3 - scale * x1 * Math.cos(rotate) + scale * y1 * Math.sin(rotate), y3 - scale * y1 * Math.cos(rotate) - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [[scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]], [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]], [0, 0, 1]]
  };
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {

  if (Object.keys(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, false);
    docEl.addEventListener('touchend', touchendHandler, false);
    docEl.addEventListener('touchcancel', touchcancelHandler, false);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for weex
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        };
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if (Object.keys(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return;
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time = Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time) / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time) / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2) + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical ? displacementY >= 0 ? 'down' : 'up' : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing') && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if (Object.keys(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(position[0][0], position[0][1], position[1][0], position[1][1], current[0][0], current[0][1], current[1][0], current[1][1]);
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue;
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      // fire click, not tap.
      fireEvent(gesture.element, 'tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && now - gesture.lastTime < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue;
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, false);
  isInitialized = true;
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }();
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports(x) {
  return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
  if (typeof __g == 'number') {
    __g = global;
  } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.5.7' };
  if (typeof __e == 'number') {
    __e = core;
  } // eslint-disable-line no-undef
});

var _isObject = function _isObject(it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function _anObject(it) {
  if (!isObject(it)) {
    throw TypeError(it + ' is not an object!');
  }
  return it;
};

var _fails = function _fails(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function _domCreate(it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function _toPrimitive(it, S) {
  if (!isObject$2(it)) {
    return it;
  }
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) {
    return val;
  }
  if (typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))) {
    return val;
  }
  if (!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) {
    return val;
  }
  throw TypeError("Can't convert object to primitive value");
};

var anObject = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive = _toPrimitive;
var dP$1 = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) {
    try {
      return dP$1(O, P, Attributes);
    } catch (e) {/* empty */}
  }
  if ('get' in Attributes || 'set' in Attributes) {
    throw TypeError('Accessors not supported!');
  }
  if ('value' in Attributes) {
    O[P] = Attributes.value;
  }
  return O;
};

var _objectDp = {
  f: f
};

var _propertyDesc = function _propertyDesc(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var dP = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function _has(it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function _uid(key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
  var global = _global;
  var hide = _hide;
  var has = _has;
  var SRC = _uid('src');
  var TO_STRING = 'toString';
  var $toString = Function[TO_STRING];
  var TPL = ('' + $toString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) {
      has(val, 'name') || hide(val, 'name', key);
    }
    if (O[key] === val) {
      return;
    }
    if (isFunction) {
      has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    }
    if (O === global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      hide(O, key, val);
    }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
});

var _aFunction = function _aFunction(it) {
  if (typeof it != 'function') {
    throw TypeError(it + ' is not a function!');
  }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function _ctx(fn, that, length) {
  aFunction(fn);
  if (that === undefined) {
    return fn;
  }
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

var global$1 = _global;
var core = _core;
var hide = _hide;
var redefine = _redefine;
var ctx = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function $export$1(type, name, source) {
  var IS_FORCED = type & $export$1.F;
  var IS_GLOBAL = type & $export$1.G;
  var IS_STATIC = type & $export$1.S;
  var IS_PROTO = type & $export$1.P;
  var IS_BIND = type & $export$1.B;
  var target = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) {
    source = name;
  }
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) {
      redefine(target, key, out, type & $export$1.U);
    }
    // export
    if (exports[key] != out) {
      hide(exports, key, exp);
    }
    if (IS_PROTO && expProto[key] != out) {
      expProto[key] = out;
    }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1; // forced
$export$1.G = 2; // global
$export$1.S = 4; // static
$export$1.P = 8; // proto
$export$1.B = 16; // bind
$export$1.W = 32; // wrap
$export$1.U = 64; // safe
$export$1.R = 128; // real proto method for `library`
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function _cof(it) {
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function _defined(it) {
  if (it == undefined) {
    throw TypeError("Can't call method on  " + it);
  }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function _toIobject(it) {
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function _toInteger(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min = Math.min;
var _toLength = function _toLength(it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength = _toLength;
var toAbsoluteIndex = _toAbsoluteIndex;
var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject$1($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) {
      while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) {
          return true;
        }
        // Array#indexOf ignores holes, Array#includes - not
      }
    } else {
      for (; length > index; index++) {
        if (IS_INCLUDES || index in O) {
          if (O[index] === el) {
            return IS_INCLUDES || index || 0;
          }
        }
      }
    }return !IS_INCLUDES && -1;
  };
};

var _library = false;

var _shared = createCommonjsModule(function (module) {
  var core = _core;
  var global = _global;
  var SHARED = '__core-js_shared__';
  var store = global[SHARED] || (global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: core.version,
    mode: _library ? 'pure' : 'global',
    copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
  });
});

var shared = _shared('keys');
var uid = _uid;
var _sharedKey = function _sharedKey(key) {
  return shared[key] || (shared[key] = uid(key));
};

var has = _has;
var toIObject = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function _objectKeysInternal(object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) {
      has(O, key) && result.push(key);
    }
  }
  // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
  f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
  f: f$2
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function _toObject(it) {
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = _objectKeys;
var gOPS = _objectGops;
var pIE = _objectPie;
var toObject = _toObject;
var IObject = _iobject;
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  var arguments$1 = arguments;
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments$1[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) {
        T[key] = S[key];
      }
    }
  }return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', { assign: _objectAssign });

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = function (Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
      // IE < 11 cannot be shimmed
      Object.prototype !== {}[magic] ||
      // neither can any browser that actually
      // implemented __proto__ correctly
      // (all but old V8 will return here)
      { __proto__: null }.__proto__ === void 0
      // this case means null objects cannot be passed
      // through setPrototypeOf in a reliable way
      // which means here a **Sham** is needed instead
      ) {
          return;
        }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function set(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(setPrototypeOf({}, null), Object.prototype) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__');
}

var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');
  var uid = _uid;
  var _Symbol = _global.Symbol;
  var USE_SYMBOL = typeof _Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
  };

  $exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
// ES3 wrong here
var ARG = cof$1(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

var _classof = function _classof(it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof$1(O)
  // ES3 arguments fallback
  : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test = {};
test[_wks('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _redefine(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2 = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function _stringAt(TO_STRING) {
  return function (that, pos) {
    var s = String(defined$2(that));
    var i = toInteger$2(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) {
      return TO_STRING ? '' : undefined;
    }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _iterators = {};

var dP$2 = _objectDp;
var anObject$2 = _anObject;
var getKeys$1 = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$2(O);
  var keys = getKeys$1(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP$2.f(O, P = keys[i++], Properties[P]);
  }
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1 = _anObject;
var dPs = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = enumBugKeys$1.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE$1][enumBugKeys$1[i]];
  }
  return _createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else {
    result = _createDict();
  }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$1 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function _setToStringTag(it, tag, stat) {
  if (it && !has$1(it = stat ? it : it.prototype, TAG$1)) {
    def(it, TAG$1, { configurable: true, value: tag });
  }
};

var create$1 = _objectCreate;
var descriptor = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () {
  return this;
});

var _iterCreate = function _iterCreate(Constructor, NAME, next) {
  Constructor.prototype = create$1(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$2 = _has;
var toObject$1 = _toObject;
var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = toObject$1(O);
  if (has$2(O, IE_PROTO$2)) {
    return O[IE_PROTO$2];
  }
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

var LIBRARY = _library;
var $export$2 = _export;
var redefine$1 = _redefine;
var hide$1 = _hide;
var Iterators = _iterators;
var $iterCreate = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) {
      return proto[kind];
    }
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') {
        hide$1(IteratorPrototype, ITERATOR, returnThis);
      }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) {
      for (key in methods) {
        if (!(key in proto)) {
          redefine$1(proto, key, methods[key]);
        }
      }
    } else {
      $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) {
    return { value: undefined, done: true };
  }
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) {
  _hide(ArrayProto, UNSCOPABLES, {});
}
var _addToUnscopables = function _addToUnscopables(key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function _iterStep(done, value) {
  return { value: value, done: !!done };
};

var addToUnscopables = _addToUnscopables;
var step = _iterStep;
var Iterators$2 = _iterators;
var toIObject$2 = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = toIObject$2(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') {
    return step(0, index);
  }
  if (kind == 'values') {
    return step(0, O[index]);
  }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators = es6_array_iterator;
var getKeys$2 = _objectKeys;
var redefine$2 = _redefine;
var global$2 = _global;
var hide$2 = _hide;
var Iterators$1 = _iterators;
var wks = _wks;
var ITERATOR$1 = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators$1.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys$2(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global$2[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR$1]) {
      hide$2(proto, ITERATOR$1, ArrayValues);
    }
    if (!proto[TO_STRING_TAG]) {
      hide$2(proto, TO_STRING_TAG, NAME);
    }
    Iterators$1[NAME] = ArrayValues;
    if (explicit) {
      for (key in $iterators) {
        if (!proto[key]) {
          redefine$2(proto, key, $iterators[key], true);
        }
      }
    }
  }
}

var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function _iterCall(iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) {
      anObject$3(ret.call(iterator));
    }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3 = _iterators;
var ITERATOR$2 = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function _isArrayIter(it) {
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2 = _classof;
var ITERATOR$3 = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) {
    return it[ITERATOR$3] || it['@@iterator'] || Iterators$4[classof$2(it)];
  }
};

var _forOf = createCommonjsModule(function (module) {
  var ctx = _ctx;
  var call = _iterCall;
  var isArrayIter = _isArrayIter;
  var anObject = _anObject;
  var toLength = _toLength;
  var getIterFn = core_getIteratorMethod;
  var BREAK = {};
  var RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () {
      return iterable;
    } : getIterFn(iterable);
    var f = ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') {
      throw TypeError(iterable + ' is not iterable!');
    }
    // fast case for arrays with default iterator
    if (isArrayIter(iterFn)) {
      for (length = toLength(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) {
          return result;
        }
      }
    } else {
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) {
          return result;
        }
      }
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4 = _anObject;
var aFunction$2 = _aFunction;
var SPECIES = _wks('species');
var _speciesConstructor = function _speciesConstructor(O, D) {
  var C = anObject$4(O).constructor;
  var S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function _invoke(fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);
    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);
    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }return fn.apply(that, args);
};

var ctx$2 = _ctx;
var invoke = _invoke;
var html = _html;
var cel = _domCreate;
var global$4 = _global;
var process$1 = global$4.process;
var setTask = global$4.setImmediate;
var clearTask = global$4.clearImmediate;
var MessageChannel = global$4.MessageChannel;
var Dispatch = global$4.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function run() {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var arguments$1 = arguments;

    var args = [];
    var i = 1;
    while (arguments.length > i) {
      args.push(arguments$1[i++]);
    }
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process$1) == 'process') {
    defer = function defer(id) {
      process$1.nextTick(ctx$2(run, id, 1));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx$2(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$4.addEventListener && typeof postMessage == 'function' && !global$4.importScripts) {
    defer = function defer(id) {
      global$4.postMessage(id + '', '*');
    };
    global$4.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var global$5 = _global;
var macrotask = _task.set;
var Observer = global$5.MutationObserver || global$5.WebKitMutationObserver;
var process$2 = global$5.process;
var Promise$1 = global$5.Promise;
var isNode$1 = _cof(process$2) == 'process';

var _microtask = function _microtask() {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode$1 && (parent = process$2.domain)) {
      parent.exit();
    }
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) {
          notify();
        } else {
          last = undefined;
        }
        throw e;
      }
    }last = undefined;
    if (parent) {
      parent.enter();
    }
  };

  // Node.js
  if (isNode$1) {
    notify = function notify() {
      process$2.nextTick(flush);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global$5.navigator && global$5.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function notify() {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise$1.resolve(undefined);
    notify = function notify() {
      promise.then(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$5, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) {
      last.next = task;
    }
    if (!head) {
      head = task;
      notify();
    }last = task;
  };
};

// 25.4.1.5 NewPromiseCapability(C)
var aFunction$3 = _aFunction;

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) {
      throw TypeError('Bad Promise constructor');
    }
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$3(resolve);
  this.reject = aFunction$3(reject);
}

var f$3 = function f$3(C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
  f: f$3
};

var _perform = function _perform(exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var global$6 = _global;
var navigator$1 = global$6.navigator;

var _userAgent = navigator$1 && navigator$1.userAgent || '';

var anObject$5 = _anObject;
var isObject$4 = _isObject;
var newPromiseCapability$1 = _newPromiseCapability;

var _promiseResolve = function _promiseResolve(C, x) {
  anObject$5(C);
  if (isObject$4(x) && x.constructor === C) {
    return x;
  }
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var redefine$3 = _redefine;
var _redefineAll = function _redefineAll(target, src, safe) {
  for (var key in src) {
    redefine$3(target, key, src[key], safe);
  }
  return target;
};

var global$7 = _global;
var dP$3 = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1 = _wks('species');

var _setSpecies = function _setSpecies(KEY) {
  var C = global$7[KEY];
  if (DESCRIPTORS && C && !C[SPECIES$1]) {
    dP$3.f(C, SPECIES$1, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  }
};

var ITERATOR$4 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}

var _iterDetect = function _iterDetect(exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) {
    return false;
  }
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$4]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR$4] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

var LIBRARY$1 = _library;
var global$3 = _global;
var ctx$1 = _ctx;
var classof$1 = _classof;
var $export$3 = _export;
var isObject$3 = _isObject;
var aFunction$1 = _aFunction;
var anInstance = _anInstance;
var forOf = _forOf;
var speciesConstructor = _speciesConstructor;
var task = _task.set;
var microtask = _microtask();
var newPromiseCapabilityModule = _newPromiseCapability;
var perform = _perform;
var userAgent = _userAgent;
var promiseResolve = _promiseResolve;
var PROMISE = 'Promise';
var TypeError$1 = global$3.TypeError;
var process = global$3.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global$3[PROMISE];
var isNode = classof$1(process) == 'process';
var empty = function empty() {/* empty */};
var Internal;
var newGenericPromiseCapability;
var OwnPromiseCapability;
var Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {/* empty */}
}();

// helpers
var isThenable = function isThenable(it) {
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) {
    return;
  }
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) {
              onHandleUnhandled(promise);
            }
            promise._h = 1;
          }
          if (handler === true) {
            result = value;
          } else {
            if (domain) {
              domain.enter();
            }
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else {
            resolve(result);
          }
        } else {
          reject(value);
        }
      } catch (e) {
        if (domain && !exited) {
          domain.exit();
        }
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) {
      onUnhandled(promise);
    }
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global$3, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global$3.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global$3.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }promise._a = undefined;
    if (unhandled && result.e) {
      throw result.v;
    }
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global$3, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global$3.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) {
    return;
  }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) {
    promise._a = promise._c.slice();
  }
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) {
    return;
  }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) {
      throw TypeError$1("Promise can't be resolved itself");
    }
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions
    this._a = undefined; // <- checked in isUnhandled reactions
    this._s = 0; // <- state
    this._d = false; // <- done
    this._v = undefined; // <- value
    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false; // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) {
        this._a.push(reaction);
      }
      if (this._s) {
        notify(this, false);
      }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject = ctx$1($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY$1 && this === Wrapper ? $Promise : this, x);
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) {
            return;
          }
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) {
      reject(result.v);
    }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) {
      reject(result.v);
    }
    return capability.promise;
  }
});

var lib$2 = window.lib || (window.lib = {});

/**
 * Version class.
 * @class lib.env~Version
 * @param {String} v - version number.
 */
function Version(v) {
  Object.defineProperty(this, 'val', {
    value: v.toString(),
    enumerable: true
  });

  /**
   * larger than
   * @method gt
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.gt = function (v) {
    return Version.compare(this, v) > 0;
  };

  /**
   * larger than or equal to.
   * @method gte
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.gte = function (v) {
    return Version.compare(this, v) >= 0;
  };

  /**
   * less than.
   * @method lt
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.lt = function (v) {
    return Version.compare(this, v) < 0;
  };

  /**
   * less than or equal to.
   * @method lte
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.lte = function (v) {
    return Version.compare(this, v) <= 0;
  };

  /**
   * equal to.
   * @method eq
   * @param {String} v - version
   * @return {Boolean} equal to
   * @instance
   * @memberof Version
   */
  this.eq = function (v) {
    return Version.compare(this, v) === 0;
  };
}

/**
 * version number string.
 * @method toString
 * @return {String} current version number string.
 * @instance
 * @memberof Version
 */
Version.prototype.toString = function () {
  return this.val;
};

/**
 * return current version number.
 * @method valueOf
 * @return {Boolean} version number
 * @instance
 * @memberof Version
 */
Version.prototype.valueOf = function () {
  var v = this.val.split('.');
  var r = [];
  for (var i = 0; i < v.length; i++) {
    var n = parseInt(v[i], 10);
    if (isNaN(n)) {
      n = 0;
    }
    var s = n.toString();
    if (s.length < 5) {
      s = Array(6 - s.length).join('0') + s;
    }
    r.push(s);
    if (r.length === 1) {
      r.push('.');
    }
  }
  return parseFloat(r.join(''));
};

/**
 * compare two versions.
 * @method compare
 * @param {String} v1 - version1
 * @param {String} v2 - version2
 * @return {Number} 0 for equality，-1 for less than，1 for larger than.
 * @memberof Version
 */
Version.compare = function (v1, v2) {
  v1 = v1.toString().split('.');
  v2 = v2.toString().split('.');
  for (var i = 0; i < v1.length || i < v2.length; i++) {
    var n1 = parseInt(v1[i], 10);
    var n2 = parseInt(v2[i], 10);
    if (window.isNaN(n1)) {
      n1 = 0;
    }
    if (window.isNaN(n2)) {
      n2 = 0;
    }
    if (n1 < n2) {
      return -1;
    } else if (n1 > n2) {
      return 1;
    }
  }
  return 0;
};

/**
 * 解析和操作版本号
 * @method version
 * @param {string} v - 需要解析的版本号
 * @return {lib.env~Version} Verson实例
 * @memberof lib
 */
lib$2.version = function (v) {
  return new Version(v);
};

var lib$3 = window.lib || (window.lib = {});
var env$1 = lib$3.env || (lib$3.env = {});

var search = window.location.search.replace(/^\?/, '');
env$1.params = {};
if (search) {
  var params = search.split('&');
  for (var i$1 = 0; i$1 < params.length; i$1++) {
    params[i$1] = params[i$1].split('=');
    try {
      env$1.params[params[i$1][0]] = decodeURIComponent(params[i$1][1]);
    } catch (e) {
      env$1.params[params[i$1][0]] = params[i$1][1];
    }
  }
}

var lib$1 = window.lib || (window.lib = {});
var env = lib$1.env || (lib$1.env = {});

var ua = window.navigator.userAgent;
var match;

/**
 * os
 */

match = ua.match(/Windows\sPhone\s(?:OS\s)?([\d.]+)/);
if (match) {
  /**
   * @type {Object}
   * @memberof lib.env
   * @property {String} name - os name, e.g. Android/AndroidPad/iPhone/iPod/iPad/Windows Phone/unknown, etc.
   * @property {lib.env~Version} version - os version.
   * @property {Boolean} isWindowsPhone
   * @property {Boolean} isIPhone - is iPhone/iTouch
   * @property {Boolean} isIPad
   * @property {Boolean} isIOS
   * @property {Boolean} isAndroid
   * @property {Boolean} isAndroidPad
   */
  env.os = {
    name: 'Windows Phone',
    isWindowsPhone: true,
    version: match[1]
  };
} else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
  env.os = {
    version: match[1]
  };

  if (ua.match(/Mobile\s+Safari/)) {
    env.os.name = 'Android';
    env.os.isAndroid = true;
  } else {
    env.os.name = 'AndroidPad';
    env.os.isAndroidPad = true;
  }
} else if (match = ua.match(/(iPhone|iPad|iPod)/)) {
  var name = match[1];

  match = ua.match(/OS ([\d_.]+) like Mac OS X/);

  env.os = {
    name: name,
    isIPhone: name === 'iPhone' || name === 'iPod',
    isIPad: name === 'iPad',
    isIOS: true,
    version: match && match[1].split('_').join('.') || ''
  };
} else {
  env.os = {
    name: 'unknown',
    version: '0.0.0'
  };
}

if (lib$1.version) {
  env.os.version = lib$1.version(env.os.version);
}

/**
 * browser
 */

match = ua.match(/(?:UCWEB|UCBrowser\/)([\d.]+)/);

if (match) {
  /**
   * @type {Object}
   * @memberof env
   * @property {String} name - browser name，e.g. UC/QQ/Firefox/Chrome/Android/Safari/iOS Webview/Chrome Webview/IE/IEMobile/unknown, etc.
   * @property {env~Version} version - browser version.
   * @property {Boolean} isUC
   * @property {Boolean} isQQ
   * @property {Boolean} isIE
   * @property {Boolean} isIEMobile
   * @property {Boolean} isIELikeWebkit
   * @property {Boolean} isChrome
   * @property {Boolean} isAndroid
   * @property {Boolean} isSafari
   * @property {Boolean} isWebview
   */
  env.browser = {
    name: 'UC',
    isUC: true,
    version: match[1]
  };
} else if (match = ua.match(/MQQBrowser\/([\d.]+)/)) {
  env.browser = {
    name: 'QQ',
    isQQ: true,
    version: match[1]
  };
} else if (match = ua.match(/Firefox\/([\d.]+)/)) {
  env.browser = {
    name: 'Firefox',
    isFirefox: true,
    version: match[1]
  };
} else if ((match = ua.match(/MSIE\s([\d.]+)/)) || (match = ua.match(/IEMobile\/([\d.]+)/))) {
  env.browser = {
    version: match[1]
  };

  if (ua.match(/IEMobile/)) {
    env.browser.name = 'IEMobile';
    env.browser.isIEMobile = true;
  } else {
    env.browser.name = 'IE';
    env.browser.isIE = true;
  }

  if (ua.match(/Android|iPhone/)) {
    env.browser.isIELikeWebkit = true;
  }
} else if (match = ua.match(/(?:Chrome|CriOS)\/([\d.]+)/)) {
  env.browser = {
    name: 'Chrome',
    isChrome: true,
    version: match[1]
  };

  if (ua.match(/Version\/[\d+.]+\s*Chrome/)) {
    env.browser.name = 'Chrome Webview';
    env.browser.isWebview = true;
  }
} else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
  env.browser = {
    name: 'Android',
    isAndroid: true,
    version: match[1]
  };
} else if (ua.match(/iPhone|iPad|iPod/)) {
  if (ua.match(/Safari/)) {
    match = ua.match(/Version\/([\d.]+)/);
    env.browser = {
      name: 'Safari',
      isSafari: true,
      version: match && match[1] || ''
    };
  } else {
    match = ua.match(/OS ([\d_.]+) like Mac OS X/);
    env.browser = {
      name: 'iOS Webview',
      isWebview: true,
      version: match && match[1].replace(/_/g, '.') || ''
    };
  }
} else {
  env.browser = {
    name: 'unknown',
    version: '0.0.0'
  };
}

if (lib$1.version) {
  env.browser.version = lib$1.version(env.browser.version);
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

var toString$2 = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */
var OBJECT_STRING = '[object Object]';
function isPlainObject(obj) {
  return toString$2.call(obj) === OBJECT_STRING;
}

var ARRAY_STRING = '[object Array]';
function isArray(arr) {
  return toString$2.call(arr) === ARRAY_STRING;
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// 
/**
 * Mix properties into target object.
 * the rightest object's value has the highest priority.
 */
function extend(to) {
  var args = [],
      len = arguments.length - 1;
  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }if (!args || args.length <= 0) {
    return to;
  }
  args.forEach(function (from) {
    if ((typeof from === 'undefined' ? 'undefined' : _typeof(from)) !== 'object') {
      return;
    }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to;
}
/**
 * Mix truthy or '' property values into target object.
 * mostly for merging styles. (that's why '' is falsy but still should be counted in.)
 * the rightest object's value has the highest priority.
 */
function extendTruthy(to) {
  var args = [],
      len = arguments.length - 1;
  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }if (!args || args.length <= 0) {
    return to;
  }
  args.forEach(function (from) {
    if ((typeof from === 'undefined' ? 'undefined' : _typeof(from)) !== 'object') {
      return;
    }
    var i;
    for (var key in from) {
      if (((i = from[key]) || i === '' || i === 0) && i !== 'undefined') {
        to[key] = i;
      }
    }
  });
  return to;
}
/**
 * Mix specified properties into target object.
 */
function extendKeys(to, from, keys) {
  if (from === void 0) from = {};

  (keys || []).forEach(function (key) {
    from && (to[key] = from[key]);
  });
  return to;
}
/**
 * Extract specified properties from src to target object.
 */
function extractKeys(to, from, keys) {
  if (from === void 0) from = {};

  if (!from) {
    return to;
  }
  (keys || []).forEach(function (key) {
    from && (to[key] = from[key]);
    from && delete from[key];
  });
  return to;
}
/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */
function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}
/**
 * Only call the func the last time before it's not that frequently called.
 */
function debounce(func, wait) {
  var timerId;
  function later() {
    timerId = null;
    func.apply(null);
  }
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  };
}
/**
 * Only call the func the first time before a series frequently function calls happen.
 */
function depress(func, wait) {
  var timerId;

  function later() {
    timerId = null;
  }
  return function () {
    if (!timerId) {
      func.apply();
    }
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  };
}
/**
 * Only call the func every time after a wait milliseconds if it's too frequently called.
 */
function throttle(func, wait, callLastTime) {
  var last = 0;
  var lastTimer = null;
  var lastTimeDuration = wait + (wait > 25 ? wait : 25); // plus half wait time.
  return function () {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }var context = this;
    var time = new Date().getTime();
    if (time - last > wait) {
      if (callLastTime) {
        lastTimer && clearTimeout(lastTimer);
        lastTimer = setTimeout(function () {
          lastTimer = null;
          func.apply(context, args);
        }, lastTimeDuration);
      }
      func.apply(context, args);
      last = time;
    }
  };
}
// direction: 'l' | 'r', default is 'r'
// num: how many times to loop, should be a positive integer
function loopArray(arr, num, direction) {
  if (!isArray(arr)) {
    return;
  }
  var isLeft = (direction + '').toLowerCase() === 'l';
  var len = arr.length;
  num = num % len;
  if (num < 0) {
    num = -num;
    isLeft = !isLeft;
  }
  if (num === 0) {
    return arr;
  }
  var lp, rp;
  if (isLeft) {
    lp = arr.slice(0, num);
    rp = arr.slice(num);
  } else {
    lp = arr.slice(0, len - num);
    rp = arr.slice(len - num);
  }
  return rp.concat(lp);
}
/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
});
function camelizeKeys(obj) {
  var res = {};
  for (var key in obj) {
    res[camelize(key)] = obj[key];
  }
  return res;
}
/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
});
function hyphenateKeys(obj) {
  var res = {};
  for (var key in obj) {
    res[hyphenate(key)] = obj[key];
  }
  return res;
}
var vendorsReg = /webkit-|moz-|o-|ms-/;
function hyphenateStyleKeys(obj) {
  var res = {};
  for (var key in obj) {
    var hk = hyphenate(key).replace(vendorsReg, function ($0) {
      return '-' + $0;
    });
    res[hk] = obj[key];
  }
  return res;
}
function camelToKebab(name) {
  if (!name) {
    return '';
  }
  return name.replace(/([A-Z])/g, function (g, g1) {
    return "-" + g1.toLowerCase();
  });
}
function appendCss(css, cssId, replace) {
  var style = document.getElementById(cssId);
  if (style && replace) {
    style.parentNode.removeChild(style);
    style = null;
  }
  if (!style) {
    style = document.createElement('style');
    style.type = 'text/css';
    cssId && (style.id = cssId);
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.appendChild(document.createTextNode(css));
}
function nextFrame(callback) {
  var runner = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (cb) {
    return setTimeout(cb, 16);
  };
  runner(callback);
}
function toCSSText(object) {
  if (!object) {
    return;
  }
  var obj = hyphenateStyleKeys(object);
  var cssText = '';
  for (var key in obj) {
    cssText += key + ":" + obj[key] + ";";
  }
  return cssText;
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// 

/**
 * viewport priority:
 *
 * 1. meta weex-viewport (developer custom)
 * 2. setViewport(config) := config.width (private code) @deprecated
 * 3. 750 (buid time)
 *
 */
var isInited = false;
var DEFAULT_VIEWPORT_WIDTH = 750;

/**
 * get viewport width from weex-viewport meta.
 */
var envViewportWidth = parseInt(750);
var width = !isNaN(envViewportWidth) && envViewportWidth > 0 ? envViewportWidth : DEFAULT_VIEWPORT_WIDTH;

var wxViewportMeta = document.querySelector('meta[name="weex-viewport"]');
var metaWidth = wxViewportMeta && parseInt(wxViewportMeta.getAttribute('content'));
if (metaWidth && !isNaN(metaWidth) && metaWidth > 0) {
  width = metaWidth;
}

var dpr = 0;
var screenWidth = 0;
var screenHeight = 0;

var info = {
  dpr: dpr,
  scale: 0,
  rem: 0,
  deviceWidth: 0,
  deviceHeight: 0
};

/**
 * set root font-size for rem units. If already been set, just skip this.
 */
function setRootFont(width) {
  var doc = window.document;
  var rem = width / 10;
  if (!doc.documentElement) {
    return;
  }
  var rootFontSize = doc.documentElement.style.fontSize;
  if (!rootFontSize) {
    doc.documentElement.style.fontSize = rem + 'px';
    info.rem = rem;
  }
}

function setMetaViewport(width) {
  if (!wxViewportMeta) {
    wxViewportMeta = document.createElement('meta');
    wxViewportMeta.setAttribute('name', 'weex-viewport');
  } else {
    var metaWidth = parseInt(wxViewportMeta.getAttribute('content'));
    if (metaWidth === width) {
      return;
    }
  }
  wxViewportMeta.setAttribute('content', width + '');
}

/**
 * export viewport info.
 */
function init$2(viewportWidth) {
  if (viewportWidth === void 0) viewportWidth = width;

  if (!isInited) {
    isInited = true;

    var doc = window.document;
    if (!doc) {
      console.error('[vue-render] window.document is undfined.');
      return;
    }
    if (!doc.documentElement) {
      console.error('[vue-render] document.documentElement is undfined.');
      return;
    }

    dpr = info.dpr = window.devicePixelRatio;
    screenWidth = doc.documentElement.clientWidth;
    screenHeight = doc.documentElement.clientHeight;

    var resetDeviceHeight = function resetDeviceHeight() {
      screenHeight = doc.documentElement.clientHeight;
      var env = window.weex && window.weex.config.env;
      info.deviceHeight = env.deviceHeight = screenHeight * dpr;
    };

    // set root font for rem.
    setRootFont(screenWidth);
    setMetaViewport(viewportWidth);

    window.addEventListener('resize', resetDeviceHeight);

    /**
     * why not to use window.screen.width to get screenWidth ? Because in some
     * old webkit browser on android system it get the device pixel width, which
     * is the screenWidth multiply by the device pixel ratio.
     * e.g. ip6 -> get 375 for virtual screen width.
     */
    var scale = screenWidth / viewportWidth;
    /**
     * 1. if set initial/maximum/mimimum-scale some how the page will have a bounce
     * effect when user drag the page towards horizontal axis.
     * 2. Due to compatibility reasons, not to use viewport meta anymore. Just bring
     * a parameter scale into the style value processing.
     */

    // const contents = [
    //   `width=${viewportWidth}`,
    //   `initial-scale=${scale}`,
    //   `maximum-scale=${scale}`,
    //   `minimum-scale=${scale}`,
    //   `user-scalable=no`
    // ]

    // let meta = doc.querySelector('meta[name="viewport"]')
    // if (!meta) {
    //   meta = doc.createElement('meta')
    //   meta.setAttribute('name', 'viewport')
    //   document.querySelector('head').appendChild(meta)
    // }
    // meta.setAttribute('content', contents.join(','))

    extend(info, {
      scale: scale,
      deviceWidth: screenWidth * dpr,
      deviceHeight: screenHeight * dpr
    });
  }

  return info;
}

/**
 * reset viewport width and scale.
 * @return new scale.
 */

function getViewportInfo() {
  return info;
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function extend$1(to) {
  var args = [],
      len = arguments.length - 1;
  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }if (!args || args.length <= 0) {
    return to;
  }
  args.forEach(function (from) {
    if ((typeof from === 'undefined' ? 'undefined' : _typeof(from)) !== 'object') {
      return;
    }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to;
}

// if support passive event listeners.
var _supportsPassive = false;
try {
  document.createElement('div').addEventListener('test', function (_) {}, {
    get passive() {
      _supportsPassive = true;
    }
  });
} catch (e) {
  // do nothing.
}
function supportsPassive() {
  return _supportsPassive;
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createEvent(target, type, props) {
  var event = new Event(type, { bubbles: false });

  extend$1(event, props);
  //  phantomjs don't support customer event
  if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
    return event;
  }
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target
    });
  } catch (err) {
    return extend$1({}, event, { target: target });
  }
  return event;
}

/**
 * Create a bubbable Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createBubblesEvent(target, type, props) {
  var event = new Event(type, { bubbles: true });
  extend$1(event, props);
  //  phantomjs don't support customer event
  if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
    return event;
  }
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target
    });
  } catch (err) {
    return extend$1({}, event, { target: target });
  }
  return event;
}

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createCustomEvent(target, type, props) {
  // compatibility: http://caniuse.com/#search=customevent
  // const event = new CustomEvent(type)
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, false, true, {});
  // event.preventDefault()
  // event.stopPropagation()

  extend$1(event, props);

  // event.target is readonly
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target || null
    });
  } catch (err) {
    return extend$1({}, event, { target: target || null });
  }

  return event;
}

/**
 * dispatch a event on a dom element.
 * @param  {HTMLElement} dom
 * @param  {Event} event
 */
function dispatchEvent(dom, event) {
  dom.dispatchEvent(event);
}

function mapFormEvents(context) {
  var eventMap = {};['input', 'change', 'focus', 'blur'].forEach(function (type) {
    eventMap[type] = function (event) {
      if (context.$el) {
        event.value = context.$el.value;
      }
      context.$emit(type, event);
    };
  });
  return eventMap;
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var config = {
  scrollableTypes: ['scroller', 'list', 'waterfall'],
  gestureEvents: ['panstart', 'panmove', 'panend', 'swipe', 'longpress', 'tap']
};

/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */

(function (self) {
  'use strict';

  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var defineProperty = function defineProperty(object, name, value) {
    if (Object.defineProperty) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  self.WeakMap = function () {

    // ECMA-262 23.3 WeakMap Objects
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'");
      }

      defineProperty(this, '_id', genId('_WeakMap'));

      // ECMA-262 23.3.1.1 WeakMap([iterable])
      if (arguments.length > 0) {
        // Currently, WeakMap `iterable` argument is not supported
        throw new TypeError('WeakMap iterable is not supported');
      }
    }

    // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
    defineProperty(WeakMap.prototype, 'delete', function (key) {
      checkInstance(this, 'delete');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];
      if (entry && entry[0] === key) {
        delete key[this._id];
        return true;
      }

      return false;
    });

    // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
    defineProperty(WeakMap.prototype, 'get', function (key) {
      checkInstance(this, 'get');

      if (!isObject(key)) {
        return void 0;
      }

      var entry = key[this._id];
      if (entry && entry[0] === key) {
        return entry[1];
      }

      return void 0;
    });

    // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
    defineProperty(WeakMap.prototype, 'has', function (key) {
      checkInstance(this, 'has');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];
      if (entry && entry[0] === key) {
        return true;
      }

      return false;
    });

    // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
    defineProperty(WeakMap.prototype, 'set', function (key, value) {
      checkInstance(this, 'set');

      if (!isObject(key)) {
        throw new TypeError('Invalid value used as weak map key');
      }

      var entry = key[this._id];
      if (entry && entry[0] === key) {
        entry[1] = value;
        return this;
      }

      defineProperty(key, this._id, [key, value]);
      return this;
    });

    function checkInstance(x, methodName) {
      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
        throw new TypeError(methodName + ' method called on incompatible receiver ' + (typeof x === 'undefined' ? 'undefined' : _typeof(x)));
      }
    }

    function genId(prefix) {
      return prefix + '_' + rand() + '.' + rand();
    }

    function rand() {
      return Math.random().toString().substring(2);
    }

    defineProperty(WeakMap, '_polyfill', true);
    return WeakMap;
  }();

  function isObject(x) {
    return Object(x) === x;
  }
})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function getParentScroller(vm) {
  if (!vm) {
    return null;
  }
  if (vm._parentScroller) {
    return vm._parentScroller;
  }
  function _getParentScroller(parent) {
    if (!parent) {
      return;
    }
    if (config.scrollableTypes.indexOf(parent.weexType) > -1 || parent.weexType === 'slider') {
      vm._parentScroller = parent;
      return parent;
    }
    return _getParentScroller(parent.$parent);
  }
  return _getParentScroller(vm.$parent);
}

function getAllParentScrollers(vm) {
  var scroller = getParentScroller(vm);
  var scrollers = [];
  while (scroller) {
    scrollers.push(scroller);
    vm = scroller;
    scroller = getParentScroller(vm);
  }
  if (scrollers.indexOf(window) < 0) {
    scrollers.push(window);
  }
  return scrollers;
}

function horizontalBalance(rect, ctRect) {
  return rect.left < ctRect.right && rect.right > ctRect.left;
}

function verticalBalance(rect, ctRect) {
  return rect.top < ctRect.bottom && rect.bottom > ctRect.top;
}

/**
 * return a data array with two boolean value, which are:
 * 1. visible in current ct's viewport.
 * 2. visible with offset in current ct's viewport.
 */
function hasIntersection(rect, ctRect, dir, offset) {
  dir = dir || 'up';
  var isHorizontal = dir === 'left' || dir === 'right';
  var isVertical = dir === 'up' || dir === 'down';
  if (isHorizontal && !verticalBalance(rect, ctRect)) {
    return [false, false];
  }
  if (isVertical && !horizontalBalance(rect, ctRect)) {
    return [false, false];
  }
  offset = parseInt(offset || 0) * weex.config.env.scale;
  switch (dir) {
    case 'up':
      return [rect.top < ctRect.bottom && rect.bottom > ctRect.top, rect.top < ctRect.bottom + offset && rect.bottom > ctRect.top - offset];
    case 'down':
      return [rect.bottom > ctRect.top && rect.top < ctRect.bottom, rect.bottom > ctRect.top - offset && rect.top < ctRect.bottom + offset];
    case 'left':
      return [rect.left < ctRect.right && rect.right > ctRect.left, rect.left < ctRect.right + offset && rect.right > ctRect.left - offset];
    case 'right':
      return [rect.right > ctRect.left && rect.left < ctRect.right, rect.right > ctRect.left - offset && rect.left < ctRect.right + offset];
  }
}

/**
 * isElementVisible
 * @param  {HTMLElement}  el    a dom element.
 * @param  {HTMLElement}  container  optional, the container of this el.
 */
function isElementVisible(el, container, dir, offset) {
  if (!el.getBoundingClientRect) {
    return false;
  }
  var bodyRect = {
    top: 0,
    left: 0,
    bottom: window.innerHeight,
    right: window.innerWidth
  };
  var ctRect = container === window || container === document.body ? bodyRect : container ? container.getBoundingClientRect() : bodyRect;
  // if container is not visible, el is not visible too.
  if (!container || container === window || isElementVisible(container)[0]) {
    return hasIntersection(el.getBoundingClientRect(), ctRect, dir, offset);
  } else {
    return false;
  }
}

// to trigger the appear/disappear event.
function triggerEvent(elm, handlers, evt, dir) {
  var listener = handlers[evt];
  if (listener && listener.fn) {
    listener = listener.fn;
  }
  if (listener) {
    listener(createEvent(elm, evt, {
      direction: dir
    }));
  }
}

/**
 * get all event listeners. including bound handlers in all parent vnodes.
 */
function getEventHandlers(context) {
  var vnode = context.$vnode;
  var handlers = {};
  var attachedVnodes = [];
  while (vnode) {
    attachedVnodes.push(vnode);
    vnode = vnode.parent;
  }
  attachedVnodes.forEach(function (vnode) {
    var parentListeners = vnode.componentOptions && vnode.componentOptions.listeners;
    var dataOn = vnode.data && vnode.data.on;
    extend(handlers, parentListeners, dataOn);
  });
  return handlers;
}

function getAppearOffset(el) {
  return el && el.getAttribute('appear-offset');
}

function checkHandlers(handlers) {
  return [!!(handlers.appear || handlers.disappear), !!(handlers.offsetAppear || handlers.offsetDisappear)];
}

// a map to remember el's closet parent scroller
var cloesetContainerMap = new WeakMap();
/**
 * Watch element's visibility to tell whether should trigger a appear/disappear
 * event in scroll handler.
 */
function watchAppear(context, fireNow) {
  var el = context && context.$el;
  if (!el || el.nodeType !== 1) {
    return;
  }
  var appearOffset = getAppearOffset(el);

  var handlers = getEventHandlers(context);
  var checkResults = checkHandlers(handlers);
  // no appear or offsetAppear handler was bound.
  if (!checkResults[0] && !checkResults[1]) {
    return;
  }
  // listent to all parent scrollers to detect appear
  var scrollers = getAllParentScrollers(context);
  scrollers.forEach(function (scroller, index) {
    var container;
    var isWindow = false;

    if (scroller === window) {
      isWindow = true;
      container = window;
    } else if (scroller && scroller.$el) {
      container = scroller.$el;
    }

    if (index === 0) {
      cloesetContainerMap.set(el, container);
    }

    if (fireNow) {
      var visibleData = isElementVisible(el, cloesetContainerMap.get(el), null, appearOffset);
      detectAppear(context, visibleData, null);
    }

    // add current vm to the container's appear watch list.
    if (!container._watchAppearList) {
      container._watchAppearList = [];
    }
    container._watchAppearList.push(context);

    /**
     * Code below will only exec once for binding scroll handler for parent container.
     */
    if (container._scrollWatched) {
      return;
    }
    container._scrollWatched = true;

    var scrollHandler = throttle(function (event) {
      /**
       * detect scrolling direction.
       * direction only support up & down yet.
       * TODO: direction support left & right.
       */
      var scrollTop = isWindow ? window.pageYOffset : container.scrollTop;
      var preTop = container._lastScrollTop;
      container._lastScrollTop = scrollTop;
      var dir = (scrollTop < preTop ? 'down' : scrollTop > preTop ? 'up' : container._prevDirection) || null;
      container._prevDirection = dir;
      var watchAppearList = container._watchAppearList || [];
      var len = watchAppearList.length;
      for (var i = 0; i < len; i++) {
        var vm = watchAppearList[i];
        var el = vm.$el;
        var appearOffset = getAppearOffset(el);
        var visibleData = isElementVisible(el, cloesetContainerMap.get(el), dir, appearOffset);
        detectAppear(vm, visibleData, dir);
      }
    }, 25, true);
    if (scroller.weexType && scroller.weexType === 'slider') {
      scroller.$on('change', scrollHandler);
    } else {
      container.addEventListener('scroll', scrollHandler, false);
    }
    /**
     * In case the users use the body's overflow to scroll. Then the scroll
     * event would not be handled on the window object but on the body.
     */
    if (isWindow) {
      document.body.addEventListener('scroll', scrollHandler, false);
    }
  });
}

/**
 * trigger a disappear event.
 */
function triggerDisappear(context) {
  return detectAppear(context, [false, false]);
}

/**
 * decide whether to trigger a appear/disappear event.
 * @param {VueComponent} context
 * @param {boolean} visible
 * @param {string} dir
 */
function detectAppear(context, visibleData, dir, appearOffset) {
  if (dir === void 0) dir = null;

  var el = context && context.$el;
  var visible = visibleData[0];
  var offsetVisible = visibleData[1];
  if (!el) {
    return;
  }
  var handlers = getEventHandlers(context);
  /**
   * No matter it's binding appear/disappear or both of them. Always
   * should test it's visibility and change the context/._visible.
   * If neithor of them was bound, then just ignore it.
   */
  /**
   * if the component hasn't appeared for once yet, then it shouldn't trigger
   * a disappear event at all.
   */
  if (context._appearedOnce || visible) {
    if (context._visible !== visible) {
      if (!context._appearedOnce) {
        context._appearedOnce = true;
      }
      context._visible = visible;
      triggerEvent(el, handlers, visible ? 'appear' : 'disappear', dir);
    }
  }
  if (context._offsetAppearedOnce || offsetVisible) {
    if (context._offsetVisible !== offsetVisible) {
      if (!context._offsetAppearedOnce) {
        context._offsetAppearedOnce = true;
      }
      context._offsetVisible = offsetVisible;
      triggerEvent(el, handlers, offsetVisible ? 'offsetAppear' : 'offsetDisappear', dir);
    }
  }
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

function preLoadImg(src, loadCallback, errorCallback) {
  var img = new Image();
  img.onload = loadCallback ? loadCallback.bind(img) : null;
  img.onerror = errorCallback ? errorCallback.bind(img) : null;
  img.src = src;
}

function applySrc(item, src, placeholderSrc) {
  if (!src) {
    return;
  }
  function finallCb() {
    delete item._src_loading;
  }
  if (item._src_loading === src) {
    return;
  }
  /**
   * 1. apply src immediately in case javscript blocks the image loading
   *  before next tick.
   */
  item.style.backgroundImage = "url(" + (src || '') + ")";
  item.removeAttribute('img-src');
  /**
   * 2. then load the img src with Image constructor (but would not post
   *  a request again), just to trigger the load event.
   */
  item._src_loading = src;
  preLoadImg(src, function (evt) {
    item.style.backgroundImage = "url(" + (src || '') + ")";
    var ref = this;
    var naturalWidth = ref.width;
    var naturalHeight = ref.height;
    var params = {
      success: true,
      size: { naturalWidth: naturalWidth, naturalHeight: naturalHeight }
    };
    dispatchEvent(item, createEvent(item, 'load', params));
    finallCb();
  }, function (evt) {
    var params = {
      success: false,
      size: { naturalWidth: 0, naturalHeight: 0 }
    };
    dispatchEvent(item, createEvent(item, 'load', params));
    if (placeholderSrc) {
      preLoadImg(placeholderSrc, function () {
        item.style.backgroundImage = "url(" + (placeholderSrc || '') + ")";
      });
    }
    finallCb();
  });
}

function getCtScroller(el) {
  if (!el) {
    return;
  }
  var scroller = el._ptScroller;
  if (!scroller) {
    var pt = el.parentElement;
    while (pt && pt !== document.body) {
      if ((pt.className + '' || '').match(/weex-list|weex-scroller|weex-waterfall/)) {
        scroller = pt;
        break;
      }
      pt = pt.parentElement;
    }
    scroller = pt;
    el._ptScroller = pt;
  }
  return scroller;
}

function fireLazyload(el, ignoreVisibility) {
  if (Array.isArray(el)) {
    return el.forEach(function (ct) {
      return fireLazyload(ct);
    });
  }
  el = el || document.body;
  if (!el) {
    return;
  }
  var imgs = (el || document.body).querySelectorAll('[img-src]');
  if (el.getAttribute('img-src')) {
    imgs = [el];
  }
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    if (typeof ignoreVisibility === 'boolean' && ignoreVisibility) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    } else if (isElementVisible(img, getCtScroller(el))[0]) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
  }
}

/**
 * cache a throttle lazyload function for every container element
 * once for different wait times separate.
 *   the architecture of this cache:
 *      cache: {
 *        el.id: {
 *          wait: throttledFunction () { ... }
 *        }
 *      }
 */
var cache = {};
var _uid$2 = 1;
function getThrottleLazyload(wait, el) {
  if (wait === void 0) wait = 16;
  if (el === void 0) el = document.body;

  var id = +(el && el.dataset.throttleId);
  if (isNaN(id) || id <= 0) {
    id = _uid$2++;
    el && el.setAttribute('data-throttle-id', id + '');
  }

  !cache[id] && (cache[id] = {});
  var throttled = cache[id][wait] || (cache[id][wait] = throttle(fireLazyload.bind(this, el), parseFloat(wait),
  // true for callLastTime.
  // to trigger once more time after the last throttled function called with a little more delay.
  true));
  return throttled;
}

var capitalizeString_1 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = capitalizeString;
  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  module.exports = exports["default"];
});

var prefixProperty_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixProperty;

  var _capitalizeString = capitalizeString_1;

  var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function prefixProperty(prefixProperties, property, style) {
    if (prefixProperties.hasOwnProperty(property)) {
      var requiredPrefixes = prefixProperties[property];
      for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
        style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
      }
    }
  }
  module.exports = exports['default'];
});

var prefixValue_1 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixValue;
  function prefixValue(plugins, property, value, style, metaData) {
    for (var i = 0, len = plugins.length; i < len; ++i) {
      var processedValue = plugins[i](property, value, style, metaData);

      // we can stop processing if a value is returned
      // as all plugin criteria are unique
      if (processedValue) {
        return processedValue;
      }
    }
  }
  module.exports = exports["default"];
});

var addNewValuesOnly_1 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addNewValuesOnly;
  function addIfNew(list, value) {
    if (list.indexOf(value) === -1) {
      list.push(value);
    }
  }

  function addNewValuesOnly(list, values) {
    if (Array.isArray(values)) {
      for (var i = 0, len = values.length; i < len; ++i) {
        addIfNew(list, values[i]);
      }
    } else {
      addIfNew(list, values);
    }
  }
  module.exports = exports["default"];
});

var isObject_1 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isObject;
  function isObject(value) {
    return value instanceof Object && !Array.isArray(value);
  }
  module.exports = exports["default"];
});

var createPrefixer_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createPrefixer;

  var _prefixProperty = prefixProperty_1;

  var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

  var _prefixValue = prefixValue_1;

  var _prefixValue2 = _interopRequireDefault(_prefixValue);

  var _addNewValuesOnly = addNewValuesOnly_1;

  var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

  var _isObject = isObject_1;

  var _isObject2 = _interopRequireDefault(_isObject);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function createPrefixer(_ref) {
    var prefixMap = _ref.prefixMap,
        plugins = _ref.plugins;

    function prefixAll(style) {
      for (var property in style) {
        var value = style[property];

        // handle nested objects
        if ((0, _isObject2.default)(value)) {
          style[property] = prefixAll(value);
          // handle array values
        } else if (Array.isArray(value)) {
          var combinedValue = [];

          for (var i = 0, len = value.length; i < len; ++i) {
            var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
            (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
          }

          // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations
          if (combinedValue.length > 0) {
            style[property] = combinedValue;
          }
        } else {
          var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

          // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations
          if (_processedValue) {
            style[property] = _processedValue;
          }

          (0, _prefixProperty2.default)(prefixMap, property, style);
        }
      }

      return style;
    }

    return prefixAll;
  }
  module.exports = exports['default'];
});

var staticData = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var w = ["Webkit"];
  var m = ["Moz"];
  var ms = ["ms"];
  var wm = ["Webkit", "Moz"];
  var wms = ["Webkit", "ms"];
  var wmms = ["Webkit", "Moz", "ms"];

  exports.default = {
    plugins: [],
    prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "writingMode": wms, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
  };
  module.exports = exports["default"];
});

var cursor_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cursor;
  var prefixes = ['-webkit-', '-moz-', ''];

  var values = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true
  };

  function cursor(property, value) {
    if (property === 'cursor' && values.hasOwnProperty(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
});

var isPrefixedValue_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPrefixedValue;
  var regex = /-webkit-|-moz-|-ms-/;

  function isPrefixedValue(value) {
    return typeof value === 'string' && regex.test(value);
  }
  module.exports = exports['default'];
});

var crossFade_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = crossFade;

  var _isPrefixedValue = isPrefixedValue_1;

  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  // http://caniuse.com/#search=cross-fade
  var prefixes = ['-webkit-', ''];
  function crossFade(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
      });
    }
  }
  module.exports = exports['default'];
});

var filter_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = filter;

  var _isPrefixedValue = isPrefixedValue_1;

  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  // http://caniuse.com/#feat=css-filter-function
  var prefixes = ['-webkit-', ''];
  function filter(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/filter\(/g, prefix + 'filter(');
      });
    }
  }
  module.exports = exports['default'];
});

var flex_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flex;
  var values = {
    flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
    'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
  };

  function flex(property, value) {
    if (property === 'display' && values.hasOwnProperty(value)) {
      return values[value];
    }
  }
  module.exports = exports['default'];
});

var flexboxOld_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxOld;
  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
  };

  var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines'
  };

  function flexboxOld(property, value, style) {
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
  module.exports = exports['default'];
});

var gradient_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = gradient;

  var _isPrefixedValue = isPrefixedValue_1;

  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var prefixes = ['-webkit-', '-moz-', ''];

  var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

  function gradient(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
});

var imageSet_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = imageSet;

  var _isPrefixedValue = isPrefixedValue_1;

  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  // http://caniuse.com/#feat=css-image-set
  var prefixes = ['-webkit-', ''];
  function imageSet(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/image-set\(/g, prefix + 'image-set(');
      });
    }
  }
  module.exports = exports['default'];
});

var position_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = position;
  function position(property, value) {
    if (property === 'position' && value === 'sticky') {
      return ['-webkit-sticky', 'sticky'];
    }
  }
  module.exports = exports['default'];
});

var sizing_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = sizing;
  var prefixes = ['-webkit-', '-moz-', ''];

  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
  };

  function sizing(property, value) {
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
});

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache$1 = {};

function hyphenateStyleName(string) {
  return string in cache$1 ? cache$1[string] : cache$1[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
}

var index$2 = hyphenateStyleName;

var hyphenateProperty_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hyphenateProperty;

  var _hyphenateStyleName = index$2;

  var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function hyphenateProperty(property) {
    return (0, _hyphenateStyleName2.default)(property);
  }
  module.exports = exports['default'];
});

var transition_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = transition;

  var _hyphenateProperty = hyphenateProperty_1;

  var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

  var _isPrefixedValue = isPrefixedValue_1;

  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

  var _capitalizeString = capitalizeString_1;

  var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
  };

  var prefixMapping = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-'
  };

  function prefixValue(value, propertyPrefixMap) {
    if ((0, _isPrefixedValue2.default)(value)) {
      return value;
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    for (var i = 0, len = multipleValues.length; i < len; ++i) {
      var singleValue = multipleValues[i];
      var values = [singleValue];
      for (var property in propertyPrefixMap) {
        var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

        if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          var prefixes = propertyPrefixMap[property];
          for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
            // join all prefixes and create a new value
            values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
          }
        }
      }

      multipleValues[i] = values.join(',');
    }

    return multipleValues.join(',');
  }

  function transition(property, value, style, propertyPrefixMap) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
      var outputValue = prefixValue(value, propertyPrefixMap);
      // if the property is already prefixed
      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-moz-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Webkit') > -1) {
        return webkitOutput;
      }

      var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-webkit-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Moz') > -1) {
        return mozOutput;
      }

      style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
      style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
      return outputValue;
    }
  }
  module.exports = exports['default'];
});

var index$1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createPrefixer = createPrefixer_1;

  var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

  var _staticData = staticData;

  var _staticData2 = _interopRequireDefault(_staticData);

  var _cursor = cursor_1;

  var _cursor2 = _interopRequireDefault(_cursor);

  var _crossFade = crossFade_1;

  var _crossFade2 = _interopRequireDefault(_crossFade);

  var _filter = filter_1;

  var _filter2 = _interopRequireDefault(_filter);

  var _flex = flex_1;

  var _flex2 = _interopRequireDefault(_flex);

  var _flexboxOld = flexboxOld_1;

  var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

  var _gradient = gradient_1;

  var _gradient2 = _interopRequireDefault(_gradient);

  var _imageSet = imageSet_1;

  var _imageSet2 = _interopRequireDefault(_imageSet);

  var _position = position_1;

  var _position2 = _interopRequireDefault(_position);

  var _sizing = sizing_1;

  var _sizing2 = _interopRequireDefault(_sizing);

  var _transition = transition_1;

  var _transition2 = _interopRequireDefault(_transition);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

  exports.default = (0, _createPrefixer2.default)({
    prefixMap: _staticData2.default.prefixMap,
    plugins: plugins
  });
  module.exports = exports['default'];
});

var addPrefix = unwrapExports(index$1);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

var noUnitsNumberKeys = ['flex', 'opacity', 'zIndex', 'fontWeight', 'lines'];

// whether to support using 0.5px to paint 1px width border.
var _supportHairlines;
function supportHairlines() {
  if (typeof _supportHairlines === 'undefined') {
    var dpr = window.devicePixelRatio;
    if (dpr && dpr >= 2 && document.documentElement) {
      var docElm = document.documentElement;
      var testElm = document.createElement('div');
      var fakeBody = document.createElement('body');
      var beforeNode = docElm.firstElementChild || docElm.firstChild;
      testElm.style.border = '0.5px solid transparent';
      fakeBody.appendChild(testElm);
      docElm.insertBefore(fakeBody, beforeNode);
      _supportHairlines = testElm.offsetHeight === 1;
      docElm.removeChild(fakeBody);
    } else {
      _supportHairlines = false;
    }
  }
  return _supportHairlines;
}

/**
 * remove comments from a cssText.
 */
function trimComment(cssText) {
  return cssText.replace(/(?:\/\*)[\s\S]*?\*\//g, '');
}

var support$1 = null;

function supportSticky() {
  if (support$1 !== null) {
    return support$1;
  }
  var element = window.document.createElement('div');
  var elementStyle = element.style;
  elementStyle.cssText = 'position:-webkit-sticky;position:sticky;';
  support$1 = elementStyle.position.indexOf('sticky') !== -1;
  return support$1;
}

var regPercentage = /^[+-]?\d+(\.\d+)?%$/;
function isPercentage(val) {
  return regPercentage.test(val);
}

var regUnitsNum = /^([+-]?\d+(?:\.\d+)?)([p,w]x)?$/; // support units: px, wx.
function normalizeUnitsNum(val) {
  var match = val.match(regUnitsNum);
  if (!match) {
    return '';
  }
  var unit = 'px'; // px by default.
  if (match[2]) {
    unit = match[2];
  }
  return parseScale(parseFloat(match[1]), unit);
}

function getUnitScaleMap() {
  var ref = getViewportInfo();
  var scale = ref.scale;
  return {
    px: scale,
    wx: 1 // use px straight, not adaptable to screens.
  };
}

function limitScale(val, limit) {
  limit = limit || 1;
  var sign = val === 0 ? 0 : val > 0 ? 1 : -1;
  var newVal = Math.abs(val) > limit ? val : sign * limit;
  // support 1px device width.
  if (newVal === 1 && val < 1 && supportHairlines()) {
    newVal = 0.5;
  }
  return newVal;
}

function parseScale(val, unit) {
  var unitScaleMap = getUnitScaleMap();
  return limitScale(val * unitScaleMap[unit]) + 'px';
}

function normalizeString(styleKey, styleVal) {
  if (isPercentage(styleVal)) {
    return styleVal;
  }

  /**
   * 1. test if is a regular scale css. e.g. `width: 100px;`
   *  this should be a standalone number value with or without unit, otherwise
   *  it shouldn't be changed.
   */
  var unitsNum = normalizeUnitsNum(styleVal);
  if (unitsNum) {
    return unitsNum;
  }

  /**
   * 2. if a string contains multiple px values, than they should be all normalized.
   *  values should have wx or px units, otherwise they should be left unchanged.
   *  e.g.
   *    transform: translate(10px, 6px, 0)
   *    border: 2px solid red
   */
  var numReg = /([+-]?[\d.]+)([p,w]x)/ig;
  if (numReg.test(styleVal)) {
    var unitScaleMap = getUnitScaleMap();
    var val = styleVal.replace(numReg, function (m, $0, $1) {
      var res = parseFloat($0) * unitScaleMap[$1];
      return limitScale(res) + 'px';
    });
    return val;
  }

  // otherwise
  return styleVal;
}

function autoPrefix(style) {
  var prefixed = addPrefix(style);
  // flex only added WebkitFlex. Should add WebkitBoxFlex also.
  var flex = prefixed.flex;
  if (flex) {
    prefixed.WebkitBoxFlex = flex;
    prefixed.MozBoxFlex = flex;
    prefixed.MsFlex = flex;
  }
  return prefixed;
}

function normalizeNumber(styleKey, styleVal) {
  var ref = getViewportInfo();
  var scale = ref.scale;
  return styleVal * scale + 'px';
}

/**
 * normalize style to adapte to current viewport by multiply current scale.
 * @param  {object} style: should be camelCase.
 */
function normalizeStyle(style) {
  var res = {};
  for (var key in style) {
    var val = style[key];
    if (noUnitsNumberKeys.indexOf(key) > -1) {
      res[key] = val;
      continue;
    }
    switch (typeof val === 'undefined' ? 'undefined' : _typeof(val)) {
      case 'string':
        res[key] = normalizeString(key, val);
        break;
      case 'number':
        res[key] = normalizeNumber(key, val);
        break;
      default:
        res[key] = val;
        break;
    }
  }
  return res;
}

/**
 * get transformObj
 */
function getTransformObj(elm) {
  var styleObj = {};
  if (!elm) {
    return styleObj;
  }
  var transformStr = elm.style.webkitTransform || elm.style.mozTransform || elm.style.transform;
  if (transformStr && transformStr.match(/(?: *(?:translate|rotate|scale)[^(]*\([^(]+\))+/i)) {
    styleObj = transformStr.trim().replace(/, +/g, ',').split(' ').reduce(function (pre, str) {
      ['translate', 'scale', 'rotate'].forEach(function (name) {
        if (new RegExp(name, 'i').test(str)) {
          pre[name] = str;
        }
      });
      return pre;
    }, {});
  }
  return styleObj;
}

/**
 * translate a transform string from a transformObj.
 */
function getTransformStr(obj) {
  return Object.keys(obj).reduce(function (pre, key) {
    return pre + obj[key] + ' ';
  }, '');
}

/**
 * add transform style to element.
 * @param {HTMLElement} elm
 * @param {object} style: transform object, format is like this:
 *   {
 *     translate: 'translate3d(2px, 2px, 2px)',
 *     scale: 'scale(0.2)',
 *     rotate: 'rotate(30deg)'
 *   }
 * @param {boolean} replace: whether to replace all transform properties.
 */
function addTransform(elm, style, replace) {
  if (!style) {
    return;
  }
  var styleObj = {};
  if (!replace) {
    styleObj = getTransformObj(elm);
  }
  for (var key in style) {
    var val = style[key];
    if (val) {
      styleObj[key] = val;
    }
  }
  var resStr = getTransformStr(styleObj);
  elm.style.webkitTransform = resStr;
  elm.style.mozTransform = resStr;
  elm.style.transform = resStr;
}

/**
 * add translate X to the element.
 */
function addTranslateX(elm, toAdd) {
  if (!toAdd) {
    return;
  }
  var styleObj = getTransformObj(elm);
  if (!styleObj.translate) {
    styleObj.translate = 'translate3d(0px, 0px, 0px)';
  }
  styleObj.translate = styleObj.translate.replace(/[+-\d.]+[pw]x/, function ($0) {
    return parseFloat($0) + toAdd + 'px';
  });
  var resStr = getTransformStr(styleObj);
  elm.style.webkitTransform = resStr;
  elm.style.mozTransform = resStr;
  elm.style.transform = resStr;
}

/**
 * copy a transform behaviour from one element to another.
 * key could be: 'translate' | 'scale' | 'rotate'
 */
function copyTransform(from, to, key) {
  var str;
  if (!key) {
    str = from.style.webkitTransform || from.style.mozTransform || from.style.transform;
  } else {
    var fromObj = getTransformObj(from);
    if (!fromObj[key]) {
      return;
    }
    var toObj = getTransformObj(to);
    toObj[key] = fromObj[key];
    str = getTransformStr(toObj);
  }
  to.style.webkitTransform = str;
  to.style.mozTransform = str;
  to.style.transform = str;
}

/**
 * get color's r, g, b value.
 * @param {string} color support all kinds of value of color.
 */
function getRgb(color) {
  var haxReg = /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/;
  var rgbReg = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  var span = document.createElement('span');
  var body = document.body;
  span.style.cssText = "color: " + color + "; width: 0px; height: 0px;";
  body && body.appendChild(span);
  color = window.getComputedStyle(span).color + '';
  body && body.removeChild(span);

  var match;
  match = color.match(haxReg);
  if (match) {
    return {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16)
    };
  }
  match = color.match(rgbReg);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3])
    };
  }
}

/**
 * get style sheet with owner node's id
 * @param {string} id owner node id.
 */
function getStyleSheetById(id) {
  if (!id) {
    return;
  }
  var styleSheets = document.styleSheets;
  var len = styleSheets.length;
  for (var i = 0; i < len; i++) {
    var styleSheet = styleSheets[i];
    if (styleSheet.ownerNode.id === id) {
      return styleSheet;
    }
  }
}

function getChildrenTotalWidth(children) {
  var len = children.length;
  var total = 0;
  for (var i = 0; i < len; i++) {
    total += children[i].getBoundingClientRect().width;
  }
  return total;
}
/**
 * get total content width of the element.
 * @param {HTMLElement} elm
 */
function getRangeWidth(elm) {
  var children = elm.children;
  if (!children) {
    return elm.getBoundingClientRect().width;
  }
  if (!Range) {
    return getChildrenTotalWidth(children);
  }
  var range = document.createRange();
  if (!range.selectNodeContents) {
    return getChildrenTotalWidth(children);
  }
  range.selectNodeContents(elm);
  return range.getBoundingClientRect().width;
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var utils = Object.freeze({
  extend: extend,
  extendTruthy: extendTruthy,
  extendKeys: extendKeys,
  extractKeys: extractKeys,
  bind: bind,
  debounce: debounce,
  depress: depress,
  throttle: throttle,
  loopArray: loopArray,
  cached: cached,
  camelize: camelize,
  camelizeKeys: camelizeKeys,
  capitalize: capitalize,
  hyphenate: hyphenate,
  hyphenateKeys: hyphenateKeys,
  hyphenateStyleKeys: hyphenateStyleKeys,
  camelToKebab: camelToKebab,
  appendCss: appendCss,
  nextFrame: nextFrame,
  toCSSText: toCSSText,
  supportsPassive: supportsPassive,
  createEvent: createEvent,
  createBubblesEvent: createBubblesEvent,
  createCustomEvent: createCustomEvent,
  dispatchEvent: dispatchEvent,
  mapFormEvents: mapFormEvents,
  getParentScroller: getParentScroller,
  hasIntersection: hasIntersection,
  isElementVisible: isElementVisible,
  getEventHandlers: getEventHandlers,
  watchAppear: watchAppear,
  triggerDisappear: triggerDisappear,
  detectAppear: detectAppear,
  applySrc: applySrc,
  fireLazyload: fireLazyload,
  getThrottleLazyload: getThrottleLazyload,
  supportHairlines: supportHairlines,
  trimComment: trimComment,
  supportSticky: supportSticky,
  isPercentage: isPercentage,
  normalizeUnitsNum: normalizeUnitsNum,
  normalizeString: normalizeString,
  autoPrefix: autoPrefix,
  normalizeNumber: normalizeNumber,
  normalizeStyle: normalizeStyle,
  getTransformObj: getTransformObj,
  getTransformStr: getTransformStr,
  addTransform: addTransform,
  addTranslateX: addTranslateX,
  copyTransform: copyTransform,
  getRgb: getRgb,
  getStyleSheetById: getStyleSheetById,
  getRangeWidth: getRangeWidth,
  isPlainObject: isPlainObject,
  isArray: isArray
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * get WXEnvironment info.
 * @param  {object} viewportInfo: info about viewport.
 * @param  {object} envInfo: info parsed from lib.env.
 */
function initEnv(viewportInfo, envInfo) {
  var browserName = envInfo.browser ? envInfo.browser.name : navigator.appName;
  var browserVersion = envInfo.browser ? envInfo.browser.version.val : null;
  var osName = envInfo.os.name;
  if (osName.match(/(iPhone|iPad|iPod)/i)) {
    osName = 'iOS';
  } else if (osName.match(/Android/i)) {
    osName = 'android';
  }
  var osVersion = envInfo.os.version.val;
  var env = {
    platform: 'Web',
    weexVersion: '0.12.32',
    userAgent: navigator.userAgent,
    appName: browserName,
    appVersion: browserVersion,
    osName: osName,
    osVersion: osVersion,
    deviceModel: envInfo.os.name || null
  };
  /**
   * viewportInfo: scale, deviceWidth, deviceHeight. dpr
   */
  return extend(env, viewportInfo);
}

// const viewportInfo = initViewport()

// 750 by default currently
// const scale = viewportInfo.scale

// const units = {
//   REM: 12 * scale,
//   VW: viewportInfo.deviceWidth / 100,
//   VH: viewportInfo.deviceHeight / 100,
//   VMIN: Math.min(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
//   VMAX: Math.max(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
//   CM: 96 / 2.54 * scale,
//   MM: 96 / 25.4 * scale,
//   Q: 96 / 25.4 / 4 * scale,
//   IN: 96 * scale,
//   PT: 96 / 72 * scale,
//   PC: 96 / 6 * scale,
//   PX: scale
// }

// Object.freeze(units)
// Object.freeze(env)

// window.CSS_UNIT = units
window.WXEnvironment = initEnv(init$2(), window.lib.env);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* global Vue */

var weexModules = {};
var _roots = [];

var weex$4 = {
  __vue__: null,
  utils: utils,
  // units: window.CSS_UNIT,
  config: {
    env: window.WXEnvironment,
    bundleUrl: location.href
  },

  _components: {},
  _modules: weexModules,

  _meta: {
    mounted: {},
    updated: {},
    destroyed: {},
    requiredModules: {},
    apiCalled: {},
    perf: {}
  },

  document: {
    body: {}
  },

  requireModule: function requireModule(moduleName) {
    var metaMod = weex$4._meta.requiredModules;
    if (!metaMod[moduleName]) {
      metaMod[moduleName] = 0;
    }
    metaMod[moduleName]++;
    return weexModules[moduleName];
  },

  registerModule: function registerModule() {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }return (ref = this).registerApiModule.apply(ref, args);
    var ref;
  },

  support: function support(feature) {
    if (feature === void 0) feature = '';

    var match = (feature + '').match(/@(component|module)\/(\w+)(.\w+)?/);
    if (match) {
      var type = match[1];
      var mod = match[2];
      var method = match[3];
      method = method && method.replace(/^\./, '');
      switch (type) {
        case 'component':
          return typeof this._components[mod] !== 'undefined';
        case 'module':
          var module = weexModules[mod];
          return module && method ? !!module[method] : !!module;
      }
    } else {
      console.warn("[vue-render] invalid argument for weex.support: " + feature);
      return null;
    }
  },

  /**
   * Register a new vue instance in this weex instance. Put its root element into weex.document.body.children, so
   * that user can use weex.document.body to walk through all dom structures in all vue instances in the page.
   */
  registerVueInstance: function registerVueInstance(instance) {
    if (!instance instanceof Vue) {
      return;
    }
    var root = instance.$root;
    if (!root || !root.$el) {
      return;
    }
    this.document.body.children.push(root.$el);
  },

  // @deprecated
  require: function require() {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
    return (ref = this).requireModule.apply(ref, args);
    var ref;
  },

  // @deprecated
  // TODO: rename to registerModule
  registerApiModule: function registerApiModule(name, module, meta) {
    if (!weexModules[name]) {
      weexModules[name] = {};
    }
    if (!!meta && meta.mountType === 'full') {
      weexModules[name] = module;
    }
    var loop = function loop(key) {
      if (module.hasOwnProperty(key)) {
        weexModules[name][key] = function () {
          var called = weex$4._meta.apiCalled;
          if (!called[name]) {
            called[name] = {};
          }
          var calledMod = called[name];
          if (!calledMod[key]) {
            calledMod[key] = 0;
          }
          calledMod[key]++;
          return module[key].apply(weex$4, arguments);
        };
      }
    };

    for (var key in module) {
      loop(key);
    }
  },

  registerComponent: function registerComponent(name, component) {
    if (!this.__vue__) {
      return console.log('[Vue Render] Vue is not found. Please import Vue.js before register a component.');
    }
    this._components[name] = 0;
    if (component._css) {
      var css = component._css.replace(/\b[+-]?[\d.]+rem;?\b/g, function (m) {
        return parseFloat(m) * 75 * weex$4.config.env.scale + 'px';
      });
      appendCss(css, "weex-cmp-" + name);
      delete component._css;
    }
    this.__vue__.component(name, component);
  },

  // @deprecated
  getRoot: function getRoot() {},

  // @deprecated
  sender: {
    performCallback: function performCallback(callback, data, keepAlive) {
      if (typeof callback === 'function') {
        return callback(data);
      }
      return null;
    }
  },

  // @deprecated
  install: function install(module) {
    module.init(this);
  }
};

Object.defineProperty(weex$4.document.body, 'children', {
  get: function get() {
    return _roots;
  }
});['on', 'once', 'off', 'emit'].forEach(function (method) {
  weex$4[method] = function () {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }if (!this._vue) {
      this._vue = new this.__vue__();
    }
    return (ref = this._vue)["$" + method].apply(ref, args);
    var ref;
  };
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 
/**
 * @fileOverview: perf data recorder.
 */

var perf = window._weex_perf = {
  time: {}
};

var tmp = {};

function getNow() {
  var performance = window.performance;
  return performance && performance.now ? performance.now() : new Date().getTime();
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* istanbul ignore next */

var pseudoId = 0;
/**
 * get scoped class style map from stylesheets in <head>.
 */
function getHeadStyleMap() {
  var needToRemoveStyleSheetNodes = [];
  var styleSheetsArr = Array.from(document.styleSheets || []).filter(function (styleSheet) {
    return styleSheet.ownerNode.getAttribute('weex-scanned') !== '1';
  });

  var res = Array.from(styleSheetsArr).reduce(function (pre, styleSheet) {
    styleSheet.ownerNode.setAttribute('weex-scanned', 1);
    /**
     * why not using styleSheet.rules || styleSheet.cssRules to get css rules ?
     * because weex's components defined non-standard style attributes, which is
     * auto ignored when access rule.cssText.
     * another reason not to use cssRules directy:
     * @issue: https://stackoverflow.com/questions/21642277/security-error-the-operation-is-insecure-in-firefox-document-stylesheets
     */
    if (
    // css in a link. just ignore this. probably a link stylesheet.
    styleSheet.ownerNode.tagName.toLowerCase() === 'link' || !styleSheet.ownerNode.textContent
    // pseudo class styleSheet node is generated by weex. just ignore it.
    || styleSheet.ownerNode.id.match(/weex-pseudo-\d+/)) {
      return pre;
    }
    /**
     * start to analyze it's content.
     */
    var strArr = trimComment(styleSheet.ownerNode.textContent.trim()).split(/}/);
    var len = strArr.length;
    var rules = [];
    for (var i = 0; i < len; i++) {
      var str = strArr[i];
      if (!str || str.match(/^\s*$/)) {
        continue;
      }
      /**
       * should match these cases:
       * .a[data-v-xxx] { color: red; }
       * .a[data-v-xxx]:active { color: green; }
       * .a[data-v-xxx], .b[data-v-xxx] { color: red; }
       *
       * should not match these cases:
       * .a { color: red; }
       * etc.
       */
      var match = str.match(/((?:,?\s*\.[\w-]+\[data-v-\w+\](?::\w+)?)+)\s*({[^}]+)/);
      if (!match) {
        // not the vue static class styles map. so acquire no rules for this styleSheet.
        // just jump through this styleSheet and go to analyzing next.
        return pre;
      }
      var clsNms = match[1].split(',').map(function (n) {
        return n.trim();
      });
      var cssText = match[2].replace(/[{}]/g, '').trim();
      var clsNmsIdx = 0;
      var clsNmsLen = clsNms.length;
      while (clsNmsIdx < clsNmsLen) {
        rules.push({
          selectorText: clsNms[clsNmsIdx],
          cssText: cssText
        });
        clsNmsIdx++;
      }
    }
    Array.from(rules).forEach(function (rule) {
      var selector = rule.selectorText || '';
      var isPseudo = false;
      if (selector.match(/:(?:active|focus|enabled|disabled)/)) {
        isPseudo = true;
      }
      var styleObj = trimComment(rule.cssText).split(';').reduce(function (styleObj, statement) {
        statement = statement.trim();
        if (statement && statement.indexOf('/*') <= -1) {
          var resArr = statement.split(':').map(function (part) {
            return part.trim();
          });
          styleObj[resArr[0]] = resArr[1];
        }
        return styleObj;
      }, {});
      if (isPseudo) {
        var txt = Object.keys(styleObj).reduce(function (pre, cur) {
          return pre + cur + ":" + styleObj[cur] + "!important;";
        }, '');
        appendCss(selector + "{" + txt + "}", "weex-pseudo-" + pseudoId++);
      }
      var objMap = !isPseudo ? pre : pre.pseudo;
      var res = objMap[selector];
      if (!res) {
        objMap[selector] = styleObj;
      } else {
        extend(objMap[selector], styleObj);
      }
    });
    /**
     * remove this styleSheet node since it's in the styleMap already. And this style
     * should only be fetched and used from styleMap to generate the final combined
     * component style, not from the stylesheet itself.
     */
    needToRemoveStyleSheetNodes.push(styleSheet.ownerNode);
    return pre;
  }, { pseudo: {} });
  if (!window._no_remove_style_sheets) {
    needToRemoveStyleSheetNodes.forEach(function (node) {
      node.parentNode.removeChild(node);
    });
  } else {}
  return res;
}

// export function getScopeIds (context) {
//   const arr = []
//   let ctx = context
//   let scopeId
//   while (ctx) {
//     scopeId = ctx.$options._scopeId
//     scopeId && arr.push(scopeId)
//     ctx = ctx.$options.parent
//   }
//   return arr
// }

function getScopeId(vnode) {
  return vnode.context.$options._scopeId;
}

/**
 * get style in <style scoped> tags for this component.
 */
function getScopeStyle(vnode, classNames) {
  var scopeId = getScopeId(vnode);
  var style = {};
  var styleMap = weex._styleMap || {};
  var clsNmsIdx = 0;
  var clsNmsLen = classNames.length;
  while (clsNmsIdx < clsNmsLen) {
    var cls = "." + classNames[clsNmsIdx] + "[" + scopeId + "]";
    var map = styleMap[cls];
    map && extendTruthy(style, map);
    clsNmsIdx++;
  }
  return camelizeKeys(style);
}

function getStyle(vnode, extract) {
  var data = vnode.data || {};
  var staticClassNames = typeof data.staticClass === 'string' ? data.staticClass.split(' ') : data.staticClass || [];
  var classNames = typeof data.class === 'string' ? data.class.split(' ') : data.class || [];
  var clsNms = staticClassNames.concat(classNames);
  var style = normalizeStyle(getScopeStyle(vnode, clsNms));
  /**
   * cache static style and bind style.
   * cached staticStyle (including style and staticStyle) has already been normalized
   * in $processStyle. So there's no need to normalize it again.
   */
  if (!data.cached) {
    // cache staticStyle once in the beginning.
    data.cached = extendTruthy({}, data.staticStyle);
  }
  // cache binding style every time since the binding style is variable.
  extendTruthy(data.cached, data.style);
  extend(style, data.cached);
  data.staticStyle = style;
  if (extract) {
    delete data.staticStyle;
    delete data.style;
  }
  return style;
}

/**
 * get style merged with static styles, binding styles, and scoped class styles,
 * with keys in camelcase.
 */
function getComponentStyle(context, extract) {
  if (!context.$vnode) {
    return {};
  }
  var style = {};
  var vnode = context.$vnode;
  while (vnode) {
    extend(style, getStyle(vnode, extract));
    vnode = vnode.parent;
  }
  var prefixedStyle = autoPrefix(style);
  /**
   * when prefixed value is a array, it should be applied to element
   * during the next tick.
   * e.g.
   *  background-image:  linear-gradient(to top,#f5fefd,#ffffff);
   *  will generate:
   *  {
   *    backgroundImage: [
   *      "-webkit-linear-gradient(to top,#f5fefd,#ffffff)",
   *      "-moz-linear-gradient(to top,#f5fefd,#ffffff)",
   *      "linear-gradient(to top,#f5fefd,#ffffff)"]
   *  }
   */
  var loop = function loop(k) {
    if (Array.isArray(prefixedStyle[k])) {
      var vals = prefixedStyle[k];
      context.$nextTick(function () {
        var el = context.$el;
        if (el) {
          for (var i = 0; i < vals.length; i++) {
            el.style[k] = vals[i];
          }
        }
      });
      if (k !== 'position') {
        /**
         * Should not delete prefixedStyle[k] directly. Otherwise will
         * trigger issue: https://issues.apache.org/jira/projects/WEEX/issues/WEEX-97
         */
        prefixedStyle[k] = style[k];
      }
    }
  };

  for (var k in prefixedStyle) {
    loop(k);
  } /**
     * If position is 'sticky', then add it to the stickyChildren of the parent scroller.
     */
  var pos = prefixedStyle.position;
  var reg = /sticky$/;
  if (pos === 'fixed') {
    context.$nextTick(function () {
      var el = context.$el;
      if (el) {
        el.classList.add('weex-fixed');
      }
    });
  } else if (isArray(pos) && pos[0].match(reg) || (pos + '').match(reg)) {
    delete prefixedStyle.position;
    // use native sticky.
    if (supportSticky()) {
      context.$nextTick(function () {
        var el = context.$el;
        if (el) {
          el.classList.add('weex-ios-sticky');
        }
      });
    }
    // use re-implementation of sticky.
    else if (!context._stickyAdded) {
        var uid = context._uid;
        var scroller = getParentScroller(context);
        if (scroller) {
          context._stickyAdded = true;
          if (!scroller._stickyChildren) {
            scroller._stickyChildren = {};
          }
          scroller._stickyChildren[uid] = context;
        }
        context.$nextTick(function () {
          var el = context.$el;
          if (el) {
            context._initOffsetTop = el.offsetTop;
          }
        });
      }
  }

  return prefixedStyle;
}

function extractComponentStyle(context) {
  return getComponentStyle(context, true);
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * remove text nodes in the nodes array.
 * @param  {Array} nodes
 * @return {Array} nodes without text nodes.
 */
function trimTextVNodes(vnodes) {
  if (isArray(vnodes)) {
    return vnodes.filter(function (vnode) {
      return !!vnode.tag;
    });
  }
  return vnodes;
}

/**
 * get listeners from on config and v-on binding.
 * v-on binding has a priority over on config.
 * @param {vnode} vnode
 * @param {String} evt: event name.
 */
function getListeners(vnode, evt) {
  var handlers = [];
  while (vnode) {
    if (vnode.data && vnode.data.on) {
      var handler = vnode.data.on[evt];
      handler && handlers.push(handler);
    }
    if (vnode.componentOptions && vnode.componentOptions.listeners) {
      var handler$1 = vnode.componentOptions.listeners[evt];
      handler$1 && handlers.push(handler$1);
    }
    vnode = vnode.parent;
  }
  return handlers;
}

/**
 * Instead of vue's invoker, this function should check if the binding function
 * has a _weex_hook flag. If there is one, the handler should not be triggered.
 * @param {Array | Function} fns
 */
function applyFns(fns) {
  var args = [],
      len$1 = arguments.length - 1;
  while (len$1-- > 0) {
    args[len$1] = arguments[len$1 + 1];
  }if (Array.isArray(fns)) {
    var cloned = fns.slice();
    var len = cloned.length;
    for (var i = 0; i < len; i++) {
      var fn = cloned[i];
      if (fn._weex_hook) {
        continue;
      }
      fn.apply(null, args);
    }
  } else {
    if (!fns._weex_hook) {
      fns.apply(null, args);
    }
  }
}

/**
 * emit native events to enable v-on.
 * @param {VComponent} context: which one to emit a event on.
 * @param {array | object} events: extra events. You can pass in multiple arguments here.
 */
function createEventMap(context) {
  var events = [],
      len$1 = arguments.length - 1;
  while (len$1-- > 0) {
    events[len$1] = arguments[len$1 + 1];
  }var eventMap = {};
  /**
   * Bind some original type event to your specified type event handler.
   * e.g. bind 'tap' event to 'click' event listener: bindFunc('tap')('click').
   * Or bind certian event with your specified handler: bindFunc('click', someFunction)
   */
  var bindFunc = function bindFunc(originalType) {
    return function (listenTo) {
      var handler;
      var evtName = originalType || listenTo;
      if (typeof listenTo === 'function') {
        handler = listenTo;
      } else if (typeof listenTo === 'string') {
        handler = function handler(e) {
          /**
           * use '_triggered' to control actural bubbling (allow original bubbling).
           */
          if (e._triggered) {
            return;
          }
          /**
           * trigger the closest parent which has bound event handlers.
           */
          var vm = context;
          while (vm) {
            var ons = getListeners(vm._vnode || vm.$vnode, listenTo);
            var len = ons.length;
            if (len > 0) {
              var idx = 0;
              while (idx < len) {
                var on = ons[idx];
                applyFns(on.fns, e);
                idx++;
              }
              // once a parent node (or self node) has triggered the handler, then
              // it stops bubbling immediately, and a '_triggered' object is set.
              e._triggered = {
                el: vm.$el
              };
              return;
            }
            vm = vm.$parent;
          }
        };
        // flag to distinguish from user-binding listeners.
        handler._weex_hook = true;
      }
      if (!eventMap[evtName]) {
        eventMap[evtName] = [];
      }
      eventMap[evtName].push(handler);
    };
  };

  /**
   * component's extra event bindings. This is mostly for the needs of component's
   * own special behaviours. These handlers will be processed after the user's
   * corresponding event handlers.
   */
  if (events) {
    var len = events.length;
    for (var i = 0; i < len; i++) {
      var extra = events[i];
      if (isArray(extra)) {
        extra.forEach(bindFunc());
      } else if ((typeof extra === 'undefined' ? 'undefined' : _typeof(extra)) === 'object') {
        for (var key in extra) {
          bindFunc(key)(extra[key]);
        }
      }
    }
  }

  return eventMap;
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var core$1 = Object.freeze({
  getHeadStyleMap: getHeadStyleMap,
  getScopeId: getScopeId,
  getScopeStyle: getScopeStyle,
  getComponentStyle: getComponentStyle,
  extractComponentStyle: extractComponentStyle,
  trimTextVNodes: trimTextVNodes,
  applyFns: applyFns,
  createEventMap: createEventMap
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var lazyloadWatched = false;
function watchLazyload() {
  lazyloadWatched = true;['scroll',
  // 'transitionend',
  // 'webkitTransitionEnd',
  // 'animationend',
  // 'webkitAnimationEnd',
  'resize'].forEach(function (evt) {
    window.addEventListener(evt, getThrottleLazyload(25, document.body));
  });
  /**
   * In case the users use the body's overflow to scroll. Then the scroll
   * event would not be triggered on the window object but on the body.
   */
  document.body.addEventListener('scroll', getThrottleLazyload(25, document.body));
}

var warned = false;
var notePage = 'https://gist.github.com/MrRaindrop/5a805a067146609e5cfd4d64d775d693#file-weex-vue-render-config-for-vue-loader-js';
function warnProcessStyle() {
  if (!warned) {
    warned = true;
    var page = window._process_style_note_page || notePage;
    console.warn("[vue-render]: you should add vue-loader config with $processStyle to enable inline styles's " + "normalization. see " + page + " If you already did this, please ignore this message.");
  }
}

var idCnt = 0;

var base$1 = {
  beforeCreate: function beforeCreate() {
    if (!lazyloadWatched) {
      watchLazyload();
    }
  },

  updated: function updated() {
    if (this._rootId) {
      var el = this.$el;
      if (el.nodeType === 1 && el.className.indexOf('weex-root') <= -1) {
        el.classList.add('weex-root');
        el.setAttribute('data-wx-root-id', this._rootId);
      }
    }

    var tagName = this.$options && this.$options._componentTag;
    var metaUp = weex._meta.updated;
    if (!metaUp[tagName]) {
      metaUp[tagName] = 0;
    }
    metaUp[tagName]++;
    /**
     * since the updating of component may affect the layout, the lazyloading should
     * be fired.
     */
    this._fireLazyload();
  },

  mounted: function mounted() {
    var tagName = this.$options && this.$options._componentTag;
    if (typeof weex._components[tagName] !== 'undefined') {
      weex._components[tagName]++;
    }
    var metaMt = weex._meta.mounted;
    if (!metaMt[tagName]) {
      metaMt[tagName] = 0;
    }
    metaMt[tagName]++;
    if (this === this.$root) {
      var rootId = "wx-root-" + idCnt++;
      if (!weex._root) {
        weex._root = {};
      }
      weex._root[rootId] = this;
      this._rootId = rootId;
      var el = this.$el;
      if (el.nodeType !== 1) {
        return;
      }
      el.classList.add('weex-root');
      el.setAttribute('data-wx-root-id', rootId);
      this._fireLazyload(el);
    }

    // give warning for not using $processStyle in vue-loader config.
    if (!warned && !window._style_processing_added) {
      warnProcessStyle();
    }

    // bind attrs to $el.
    var i, j;
    if (this.$el && (i = j = this.$vnode) && (i = i.data) && (j = j.componentOptions)) {
      this.$el.attrs = extend({}, i.attrs, j.propsData);
    }
    watchAppear(this, true);
  },

  destroyed: function destroyed() {
    /**
     * if the destroyed element is above another panel with images inside, and the images
     * moved into the viewport, then the lazyloading should be triggered.
     */
    if (this._rootId) {
      delete weex._root[this._rootId];
      delete this._rootId;
    }
    var tagName = this.$options && this.$options._componentTag;
    if (typeof weex._components[tagName] !== 'undefined') {
      weex._components[tagName]--;
    }
    var metaDs = weex._meta.destroyed;
    if (!metaDs[tagName]) {
      metaDs[tagName] = 0;
    }
    metaDs[tagName]++;

    this._fireLazyload();
    triggerDisappear(this);
  },

  methods: {
    _fireLazyload: function _fireLazyload(el) {
      getThrottleLazyload(25, el || document.body)();
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * get a beforeCreate hook, which has a mark to identify the hook function itself.
 */
function getIdentifiedBeforeCreate() {
  var disposed = {}; // disposed components. Already scanned.
  function beforeCreate() {
    /**
     * get static class style map from document's styleSheets.
     * Weex.on will create a Vue instance. In this case we'll ignore it, since
     * it's not sure whether the scoped style has already attached to head or not.
     */
    var tagName = this.$options && this.$options._componentTag;
    /**
     * For vue-loader ^11.3.x, there's no injectStyle function. The styleSheet
     * is already injected into the head. Just scan it.
     */
    // async component.
    if (this.$vnode && this.$vnode.data && this.$vnode.data.tag === 'component' || this === this.$root && this.$options && !this._firstScanned) {
      this._firstScanned = true;
      extend(weex._styleMap, getHeadStyleMap());
    }
    /**
     * For vue-loader ^12.0, the injectStyle function is hooked. We should scan
     * style map after the injectStyle hook called.
     */
    if ((this === this.$root && this.$options || tagName && typeof weex._components[tagName] === 'undefined' && !disposed[tagName]) && !this._secondScanned) {
      disposed[tagName] = 1;
      this._secondScanned = true;
      var hooks = this.$options.beforeCreate;
      var len = hooks.length;
      var thisHookIdx = 0; // index of this hook in the hooks array.
      for (; thisHookIdx < len; thisHookIdx++) {
        if (hooks[thisHookIdx]._styleMixin) {
          break;
        }
      }
      if (thisHookIdx !== len - 1) {
        var func = hooks[len - 1];
        hooks[len - 1] = function () {
          // call the original injectStyle hook.
          func.call(this);
          // scan the new appended styleSheet.
          extend(weex._styleMap, getHeadStyleMap());
          hooks[len - 1] = func;
        };
      }
    }
  }
  beforeCreate._styleMixin = true;
  return beforeCreate;
}

var style = {
  beforeCreate: getIdentifiedBeforeCreate(),

  methods: {
    $processStyle: function $processStyle(style) {
      window._style_processing_added = true;
      if (!style) {
        return;
      }
      return normalizeStyle(camelizeKeys(style));
    },

    _getParentRect: function _getParentRect() {
      var parentElm = this.$options._parentElm;
      return parentElm && parentElm.getBoundingClientRect();
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

// input and textare has some common api and event
var findEnterKeyType = function findEnterKeyType(key) {
  var keys = ['default', 'go', 'next', 'search', 'send'];
  if (keys.indexOf(key) > -1) {
    return key;
  }
  return 'done';
};

var inputCommon = {
  methods: {
    focus: function focus() {
      this.$el && this.$el.focus();
    },
    blur: function blur() {
      this.$el && this.$el.blur();
    },

    setSelectionRange: function setSelectionRange(start, end) {
      try {
        this.$el.setSelectionRange(start, end);
      } catch (e) {}
    },

    getSelectionRange: function getSelectionRange(callback) {
      try {
        var selection = window.getSelection();
        var str = selection.toString();
        var selectionStart = this.$el.value.indexOf(str);
        var selectionEnd = selectionStart === -1 ? selectionStart : selectionStart + str.length;
        callback && callback({
          selectionStart: selectionStart,
          selectionEnd: selectionEnd
        });
      } catch (e) {
        callback && callback(new Error('[vue-render] getSelection is not supported.'));
      }
    },

    getEditSelectionRange: function getEditSelectionRange(callback) {
      return this.getSelectionRange(callback);
    },

    // support enter key event
    createKeyboardEvent: function createKeyboardEvent(events) {
      var customKeyType = this.returnKeyType;
      var self = this;
      if (this._events['return']) {
        var keyboardEvents = {
          'keyup': function keyup(ev) {
            var code = ev.keyCode;
            var key = ev.key;
            if (code === 13) {
              if (!key || key.toLowerCase() === 'tab') {
                ev.key = 'next';
              }
              var rightKeyType = findEnterKeyType(customKeyType);
              ev.returnKeyType = rightKeyType;
              ev.value = ev.target.value;
              self.$emit('return', ev);
            }
          }
        };
        events = extend(events, keyboardEvents);
      }
      return events;
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var sticky = {
  destroyed: function destroyed() {
    if (!this._stickyAdded) {
      return;
    }
    var scroller = getParentScroller(this);
    if (!scroller) {
      return;
    }
    delete scroller._stickyChildren[this._uid];
  },

  methods: {
    _addSticky: function _addSticky() {
      var el = this.$el;
      if (!el || el.nodeType === 1) {
        return;
      }
      el.classList.add('sticky');
      if (!this._placeholder) {
        this._placeholder = el.cloneNode(true);
      }
      this._placeholder.style.display = 'block';
      this._placeholder.style.width = this.$el.offsetWidth + 'px';
      this._placeholder.style.height = this.$el.offsetHeight + 'px';
      el.parentNode.insertBefore(this._placeholder, this.$el);
    },

    _removeSticky: function _removeSticky() {
      var el = this.$el;
      if (!el || el.nodeType === 1) {
        return;
      }
      el.classList.remove('sticky');
      if (this._placeholder) {
        this._placeholder.parentNode.removeChild(this._placeholder);
      }
      this._placeholder = null;
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
window.global = window;
window.weex = weex$4;

weex$4._styleMap = {};['getComponentStyle', 'extractComponentStyle', 'createEventMap', 'trimTextVNodes'].forEach(function (method) {
  weex$4[method] = core$1[method].bind(weex$4);
});

weex$4.mixins = {
  inputCommon: inputCommon
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function setVue(vue) {
  if (!vue) {
    throw new Error('[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.');
  }
  global.weex.__vue__ = vue;
  console.log("[Vue Render] install Vue " + vue.version + ".");
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var gestureEvents = config.gestureEvents;
var nativeEvents = ['click', 'touchstart', 'touchmove', 'touchend'];
var needPassive = ['touchmove'];

var events = gestureEvents.concat(nativeEvents);

/**
 * if el is a `<a>` element.
 * @param {HTMLElement} el
 */
function isANode(el) {
  return el.tagName.toLowerCase() === 'a';
}

function isInANode(el) {
  var parent = el.parentElement;
  while (parent && parent !== document.body) {
    if (parent.tagName === 'A') {
      return true;
    }
    parent = parent.parentElement;
  }
  return false;
}

/**
 * get listeners from on config and v-on binding.
 * v-on binding has a priority over on config.
 * @param {vnode} vnode
 * @param {String} evt: event name.
 */
function getListeners$1(vnode, evt) {
  var handlers = [];
  while (vnode) {
    if (vnode.data && vnode.data.on) {
      var handler = vnode.data.on[evt];
      handler && handlers.push(handler);
    }
    if (vnode.componentOptions && vnode.componentOptions.listeners) {
      var handler$1 = vnode.componentOptions.listeners[evt];
      handler$1 && handlers.push(handler$1);
    }
    vnode = vnode.parent;
  }
  return handlers;
}

var _inited$1 = false;
function _init(doc) {
  if (_inited$1) {
    return;
  }
  if (!doc) {
    return;
  }
  _inited$1 = true;
  var _sp = supportsPassive();
  events.forEach(function (evt) {
    /**
     * use capture for click handling, therefore there's a chance to handle
     * it before any other listeners binding on document or document.body.
     */
    var option = evt === 'click' ? true : needPassive.indexOf(evt) > -1 && _sp ? { passive: true } : false;
    doc.addEventListener(evt, function (e) {
      var el = e.target;
      var vm = el.__vue__;
      while (!vm && el && el !== document.body) {
        el = el.parentElement;
        vm = el && el.__vue__;
      }
      if (!vm) {
        // not a vue component.
        return;
      }
      var disposed = false;
      var evtName = e.type;

      if (evtName === 'tap' && e._for !== 'weex') {
        return;
      }

      while (vm) {
        var vnode = vm._vnode || vm.$vnode;
        var elm = vm.$el;
        var ons = getListeners$1(vnode, evtName === 'tap' ? 'click' : evtName);
        var len = ons && ons.length;

        if (len > 0) {
          if (evtName !== 'click') {
            for (var i = 0; i < len; i++) {
              var handler = ons[i];
              var newEvt = evtName === 'tap' ? createEvent(el, 'click') : e;
              newEvt._triggered = { target: elm };
              applyFns(handler.fns, newEvt);
            }
          }
          e._triggered = { target: elm };
          disposed = true;
        }

        if (isANode(elm) && (evtName === 'click' || evtName === 'tap')) {
          var href = elm.getAttribute('href');
          var voidHrefReg = /^\s*javascript\s*:\s*void\s*(?:\(\s*0\s*\)|0)\s*;?\s*$/;
          var prevent = elm.getAttribute('prevent');
          if (window._should_intercept_a_jump && window._should_intercept_a_jump(elm)) {
            // e._triggered should not be true since we left the intercepter to handle the event.
            e._triggered = false;
            disposed = true;
          } else if (href.match(voidHrefReg) || prevent === '' || prevent === 'true') {
            e._triggered = false;
            e.preventDefault();
          } else {
            e._triggered = { target: elm };
            disposed = true; // handled by default behavior for clicking on a element.
          }
        }

        /**
         * If the click handler is binding on a element inside a <a> element,
         * then should prevent default.
         */
        if (disposed && evtName === 'click' && isInANode(elm)) {
          e._triggered = { target: elm };
          e.preventDefault();
          return;
        }

        if (disposed) {
          return;
        }
        vm = vm.$parent;
      }
    }, option);
  });
}

function init$3() {
  _init(document);
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * init weex.
 * @param  {Vue$2} Vue: Vue Constructor.
 * @param  {object} options: extend weex plugins.
 *         - components.
 *         - modules.
 */
var _inited = false;
function init$1(Vue /*, options = {}*/) {
  if (_inited) {
    return;
  }
  _inited = true;

  setVue(Vue);

  Vue.prototype.$getConfig = function () {
    console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
    return weex.config;
  };

  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) {
    return htmlRegex.test(tag);
  };
  Vue.config.parsePlatformTagName = function (tag) {
    return tag.replace(htmlRegex, '');
  };

  function isWeexTag(tag) {
    return typeof weex._components[tag] !== 'undefined';
  }
  var oldGetTagNamespace = Vue.config.getTagNamespace;
  Vue.config.getTagNamespace = function (tag) {
    if (isWeexTag(tag)) {
      return;
    }
    return oldGetTagNamespace(tag);
  };

  Vue.mixin(base$1);
  Vue.mixin(style);
  Vue.mixin(sticky);

  init$3();
}

// auto init in dist mode.
if (typeof window !== 'undefined' && window.Vue) {
  init$1(window.Vue);
}

weex.init = init$1;

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../validator'

var _css = "\n.weex-a {\n  text-decoration: none;\n}\n";

function getA(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var trimTextVNodes = weex.trimTextVNodes;

  return {
    name: 'weex-a',
    props: {
      href: String
    },
    render: function render(createElement) {
      /* istanbul ignore next */
      // if ("production" === 'development') {
      //   validateStyles('a', this.$vnode.data && this.$vnode.data.staticStyle)
      // }
      return createElement('html:a', {
        attrs: {
          'weex-type': 'a',
          href: this.href
        },
        staticClass: 'weex-a weex-ct',
        staticStyle: extractComponentStyle(this)
      }, trimTextVNodes(this.$slots.default));
    },
    _css: _css
  };
}

var a = {
  init: function init(weex) {
    weex.registerComponent('a', getA(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var _css$1 = "\nbody > .weex-div {\n  min-height: 100%;\n}\n";

function getDiv(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var trimTextVNodes = weex.trimTextVNodes;

  return {
    name: 'weex-div',
    render: function render(createElement) {
      return createElement('html:div', {
        attrs: { 'weex-type': 'div' },
        staticClass: 'weex-div weex-ct',
        staticStyle: extractComponentStyle(this)
      }, trimTextVNodes(this.$slots.default));
    },
    _css: _css$1
  };
}

var div = {
  init: function init(weex) {
    var div = getDiv(weex);
    weex.registerComponent('div', div);
    weex.registerComponent('container', div);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var extractComponentStyle$1;
var createEventMap$1;
var extend$2;
var isArray$1;

var IMG_NAME_BITS = 15;

var _css$2 = "\n.weex-image, .weex-img {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n";
/**
 * 1. get sprite style if spritePosition is set.
 * 2. else get resize (stetch|cover|contain) related styles.
 */
function getCustomStyle(context, mergedStyle) {
  var spritePosition = context.spritePosition;
  if (spritePosition && !isArray$1(spritePosition)) {
    spritePosition = (spritePosition + '').split(',').map(function (val) {
      return val.replace(/[[\]]/g, '').replace(/^\s*(\S[\s\S]*?)\s*$/g, function ($0, $1) {
        return parseInt($1);
      });
    });
  }
  if (spritePosition) {
    var posX = -spritePosition[0];
    var posY = -spritePosition[1];
    var scale = weex.config.env.scale;
    var sizeScale = parseFloat(context.spriteWidth) / parseFloat(mergedStyle.width) * weex.config.env.scale;
    return {
      'background-position': posX * scale + "px " + posY * scale + "px",
      'background-size': sizeScale * 100 + "%"
    };
  }
  var stretch = '100% 100%';
  var resize = context.resize || stretch;
  var bgSize = ['cover', 'contain', stretch].indexOf(resize) > -1 ? resize : stretch;
  // compatibility: http://caniuse.com/#search=background-size
  return { 'background-size': bgSize };
}

function preProcessSrc(context, url, mergedStyle) {
  // somehow the merged style in _prerender hook is gone.
  // just return the original src.
  if (!mergedStyle || !mergedStyle.width || !mergedStyle.height) {
    return url;
  }
  var width = mergedStyle.width;
  var height = mergedStyle.height;
  return context.processImgSrc && context.processImgSrc(url, {
    width: parseFloat(width),
    height: parseFloat(height),
    quality: context.quality,
    sharpen: context.sharpen,
    original: context.original
  }) || url;
}

function download(url, callback) {
  function success() {
    callback && callback({
      success: true
    });
  }
  function fail(err) {
    callback && callback({
      success: false,
      errorDesc: err + ''
    });
  }
  try {
    var isDataUrl = false;
    var parts;
    var name;
    if (url.match(/data:image\/[^;]+;base64,/)) {
      isDataUrl = true;
      parts = url.split(',');
    }
    if (!isDataUrl) {
      name = url.replace(/\?[^?]+/, '').replace(/#[^#]+/, '').match(/([^/]+)$/);
    } else {
      name = parts[1].substr(0, IMG_NAME_BITS);
    }
    var aEl = document.createElement('a');
    aEl.href = url;
    /**
     * Not all browser support this 'download' attribute. In these browsers it'll jump
     * to the photo url page and user have to longpress the photo to save it.
     */
    aEl.download = name;
    var clickEvt = new Event('click', { bubbles: false });
    aEl.dispatchEvent(clickEvt);
    success();
  } catch (err) {
    fail(err);
  }
}

var image = {
  name: 'weex-image',
  props: {
    src: String,
    placeholder: String,
    resize: String,
    quality: String,
    sharpen: String,
    original: [String, Boolean],
    spriteSrc: String,
    spritePosition: [String, Array],
    spriteWidth: [String, Number]
  },

  updated: function updated() {
    this._fireLazyload();
  },

  mounted: function mounted() {
    this._fireLazyload();
  },

  methods: {
    save: function save(callback) {
      download(this.src, callback);
    }
  },

  render: function render(createElement) {
    var style = extractComponentStyle$1(this);
    var customStyle = getCustomStyle(this, style);
    return createElement('figure', {
      attrs: {
        'weex-type': 'image',
        'img-src': this.spriteSrc || preProcessSrc(this, this.src, style),
        'img-placeholder': preProcessSrc(this, this.placeholder, style),
        'sprite-src': this.spriteSrc,
        'sprite-position': this.spritePosition,
        'sprite-width': this.spriteWidth
      },
      on: createEventMap$1(this, ['load', 'error']),
      staticClass: 'weex-image weex-el',
      staticStyle: extend$2(style, customStyle)
    });
  },
  _css: _css$2
};

var image$1 = {
  init: function init(weex) {
    extractComponentStyle$1 = weex.extractComponentStyle;
    createEventMap$1 = weex.createEventMap;
    extend$2 = weex.utils.extend;
    isArray$1 = weex.utils.isArray;

    weex.registerComponent('image', image);
    weex.registerComponent('img', image);
    weex.registerComponent('gif', image);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileOverview Input component.
 * Support v-model only if vue version is larger than 2.2.0
 */
var extractComponentStyle$2;
var mapFormEvents$1;
var appendCss$1;

var ID_PREFIX_PLACEHOLDER_COLOR = 'wipt_plc_';
var ID_PREFIX_INPUT = 'wipt_';
var idCount = 0;

var _css$3 = "\n.weex-input, .weex-textarea {\n  font-size: 0.426667rem;\n}\n.weex-input:focus, .weex-textarea:focus {\n  outline: none;\n}\n";

function setPlaceholderColor(inputVm, placeholderColor) {
  if (!placeholderColor) {
    return;
  }
  var vendors = ['::-webkit-input-placeholder', ':-moz-placeholder', '::-moz-placeholder', ':-ms-input-placeholder', ':placeholder-shown'];
  var id = inputVm._id;
  appendCss$1(vendors.map(function (vendor, idx) {
    return "#" + ID_PREFIX_INPUT + id + vendors[idx] + "{color:" + placeholderColor + ";}";
  }).join(''), "" + ID_PREFIX_PLACEHOLDER_COLOR + id, true);
}

function processStyle(vm) {
  var styles = extractComponentStyle$2(vm);
  var phColor = styles.placeholderColor;
  if (phColor) {
    setPlaceholderColor(vm, phColor);
  }
  return styles;
}

function getInput(weex) {
  var ref = weex.mixins;
  var inputCommon = ref.inputCommon;

  return {
    name: 'weex-input',
    mixins: [inputCommon],
    props: {
      type: {
        type: String,
        default: 'text',
        validator: function validator(value) {
          return ['email', 'number', 'password', 'search', 'tel', 'text', 'url', 'date', 'datetime', 'time'].indexOf(value) !== -1;
        }
      },
      value: String,
      placeholder: String,
      disabled: {
        type: [String, Boolean],
        default: false
      },
      autofocus: {
        type: [String, Boolean],
        default: false
      },
      maxlength: [String, Number],
      returnKeyType: String
    },

    render: function render(createElement) {
      if (!this._id) {
        this._id = idCount++;
      }
      var events = mapFormEvents$1(this);
      return createElement('html:input', {
        attrs: {
          'weex-type': 'input',
          id: "" + ID_PREFIX_INPUT + this._id,
          type: this.type,
          value: this.value,
          disabled: this.disabled !== 'false' && this.disabled !== false,
          autofocus: this.autofocus !== 'false' && this.autofocus !== false,
          placeholder: this.placeholder,
          maxlength: this.maxlength,
          'returnKeyType': this.returnKeyType
        },
        domProps: {
          value: this.value
        },
        on: this.createKeyboardEvent(events),
        staticClass: 'weex-input weex-el',
        staticStyle: processStyle(this)
      });
    },
    _css: _css$3
  };
}

var input = {
  init: function init(weex) {
    extractComponentStyle$2 = weex.extractComponentStyle;
    mapFormEvents$1 = weex.utils.mapFormEvents;
    appendCss$1 = weex.utils.appendCss;

    weex.registerComponent('input', getInput(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var _css$4 = "\n.weex-switch {\n  border: 0.013333rem solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.333333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n  -moz-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n  transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  box-shadow: #64bd63 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  background-color: #A0CCA0;\n  box-shadow: #A0CCA0 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n  -moz-transition: background-color 0.4s, left 0.2s;\n  transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.533333rem;\n}\n";

function getSwitch(weex) {
  var extractComponentStyle = weex.extractComponentStyle;

  return {
    name: 'weex-switch',
    props: {
      checked: {
        type: [Boolean, String],
        default: false
      },
      disabled: {
        type: [Boolean, String],
        default: false
      }
    },
    data: function data() {
      return {
        isChecked: this.checked !== 'false' && this.checked !== false,
        isDisabled: this.disabled !== 'false' && this.disabled !== false
      };
    },
    computed: {
      wrapperClass: function wrapperClass() {
        var classArray = ['weex-switch'];
        this.isChecked && classArray.push('weex-switch-checked');
        this.isDisabled && classArray.push('weex-switch-disabled');
        return classArray.join(' ');
      }
    },
    methods: {
      toggle: function toggle() {
        // TODO: handle the events
        if (!this.isDisabled) {
          this.isChecked = !this.isChecked;
          this.$emit('change', { value: this.isChecked });
        }
      }
    },

    mounted: function mounted() {
      var this$1 = this;

      var el = this.$el;
      if (el && el.nodeType === 1) {
        if (!this._removeClickHandler) {
          var handler = function handler(evt) {
            this$1.toggle();
          };
          this._removeClickHandler = el.removeEventListener.bind(el, 'click', handler);
          el.addEventListener('click', handler);
        }
      }
    },

    beforeDestroy: function beforeDestroy() {
      var rm = this._removeClickHandler;
      if (rm) {
        rm();
        delete this._removeClickHandler;
      }
    },

    render: function render(createElement) {
      /* istanbul ignore next */
      // if ("production" === 'development') {
      //   validateStyles('switch', this.$vnode.data && this.$vnode.data.staticStyle)
      // }
      return createElement('span', {
        attrs: { 'weex-type': 'switch' },
        staticClass: this.wrapperClass,
        staticStyle: extractComponentStyle(this)
      }, [createElement('small', { staticClass: 'weex-switch-inner' })]);
    },
    _css: _css$4
  };
}

var _switch = {
  init: function init(weex) {
    weex.registerComponent('switch', getSwitch(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var DEFAULT_OFFSET_ACCURACY = 10;
var DEFAULT_LOADMORE_OFFSET = 0;

function getThrottledScroll(context) {
  var scale = weex.config.env.scale;
  if (!context._throttleScroll) {
    var wrapper = context.$refs.wrapper;
    var inner = context.$refs.inner;
    var preOffset = (context.scrollDirection === 'horizontal' ? wrapper.scrollLeft : wrapper.scrollTop) || 0;
    context._throttleScroll = weex.utils.throttle(function (evt) {
      var offset = context.scrollDirection === 'horizontal' ? wrapper.scrollLeft : wrapper.scrollTop;
      var indent = parseInt(context.offsetAccuracy) * scale;
      function triggerScroll() {
        var rect = inner.getBoundingClientRect();
        evt.contentSize = { width: rect.width, height: rect.height };
        evt.contentOffset = {
          x: wrapper.scrollLeft,
          /**
           * positive direciton for y-axis is down.
           * so should use negative operation on scrollTop.
           *
           *  (0,0)---------------> x
           *       |
           *       |
           *       |
           *       |
           *       v y
           *
           */
          y: -wrapper.scrollTop
        };
        context.$emit('scroll', evt);
      }
      if (Math.abs(offset - preOffset) >= indent) {
        triggerScroll();
        preOffset = offset;
      }
    }, 16, true);
  }
  return context._throttleScroll;
}

var scrollable$1 = {
  props: {
    loadmoreoffset: {
      type: [String, Number],
      default: DEFAULT_LOADMORE_OFFSET,
      validator: function validator(value) {
        var val = parseInt(value);
        return !isNaN(val) && val >= DEFAULT_LOADMORE_OFFSET;
      }
    },

    offsetAccuracy: {
      type: [Number, String],
      default: DEFAULT_OFFSET_ACCURACY,
      validator: function validator$1(value) {
        var val = parseInt(value);
        return !isNaN(val) && val >= DEFAULT_OFFSET_ACCURACY;
      }
    }
  },

  created: function created() {
    // should call resetLoadmore() to enable loadmore event.
    this._loadmoreReset = true;
  },

  methods: {
    updateLayout: function updateLayout() {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this._wrapperWidth = rect.width;
        this._wrapperHeight = rect.height;
      }
      var inner = this.$refs.inner;
      var children = inner && inner.children;
      if (inner) {
        var rect$1 = inner.getBoundingClientRect();
        this._innerWidth = rect$1.width;
        this._innerHeight = rect$1.height;
      }
      var loadingEl = this._loading && this._loading.$el;
      var refreshEl = this._refresh && this._refresh.$el;
      if (loadingEl) {
        this._innerHeight -= loadingEl.getBoundingClientRect().height;
      }
      if (refreshEl) {
        this._innerHeight -= refreshEl.getBoundingClientRect().height;
      }
      // inner width is always the viewport width somehow in horizontal
      // scoller, therefore the inner width should be reclaculated.
      if (this.scrollDirection === 'horizontal' && children) {
        this._innerWidth = weex.utils.getRangeWidth(inner);
      }
    },

    resetLoadmore: function resetLoadmore() {
      this._loadmoreReset = true;
    },

    /**
     * process sticky children in scrollable components.
     * current only support list and vertical scroller.
     */
    processSticky: function processSticky() {
      /**
       * current browser support 'sticky' or '-webkit-sticky', so there's no need
       * to do further more.
       */
      if (weex.utils.supportSticky()) {
        return;
      }
      // current only support list and vertical scroller.
      if (this.scrollDirection === 'horizontal') {
        return;
      }
      var stickyChildren = this._stickyChildren;
      var len = stickyChildren && stickyChildren.length || 0;
      if (len <= 0) {
        return;
      }

      var container = this.$el;
      if (!container) {
        return;
      }
      var scrollTop = container.scrollTop;

      var stickyChild;
      for (var i = 0; i < len; i++) {
        stickyChild = stickyChildren[i];
        if (stickyChild._initOffsetTop < scrollTop) {
          stickyChild._addSticky();
        } else {
          stickyChild._removeSticky();
        }
      }
    },

    handleScroll: function handleScroll(event) {
      weex.utils.getThrottleLazyload(25, this.$el, 'scroll')();
      getThrottledScroll(this)(event);

      this.processSticky();

      // fire loadmore event.
      var inner = this.$refs.inner;
      if (inner) {
        var innerLength = this.scrollDirection === 'horizontal' ? this._innerWidth : this._innerHeight;
        if (!this._innerLength) {
          this._innerLength = innerLength;
        }
        if (this._innerLength !== innerLength) {
          this._innerLength = innerLength;
          this._loadmoreReset = true;
        }
        if (this._loadmoreReset && this.reachBottom(this.loadmoreoffset)) {
          this._loadmoreReset = false;
          this.$emit('loadmore', event);
        }
      }
    },

    reachTop: function reachTop() {
      var wrapper = this.$refs.wrapper;
      return !!wrapper && wrapper.scrollTop <= 0;
    },

    reachBottom: function reachBottom(offset) {
      var wrapper = this.$refs.wrapper;
      var inner = this.$refs.inner;
      offset = parseInt(offset || 0) * weex.config.env.scale;

      if (wrapper && inner) {
        var key = this.scrollDirection === 'horizontal' ? 'width' : 'height';
        var innerLength = this["_inner" + key[0].toUpperCase() + key.substr(1)];
        var wrapperLength = this["_wrapper" + key[0].toUpperCase() + key.substr(1)];
        var scrollOffset = this.scrollDirection === 'horizontal' ? wrapper.scrollLeft : wrapper.scrollTop;
        return scrollOffset >= innerLength - wrapperLength - offset;
      }
      return false;
    },

    handleTouchStart: function handleTouchStart(event) {
      if (this._loading || this._refresh) {
        var touch = event.changedTouches[0];
        this._touchParams = {
          reachTop: this.reachTop(),
          reachBottom: this.reachBottom(),
          startTouchEvent: touch,
          startX: touch.pageX,
          startY: touch.pageY,
          timeStamp: event.timeStamp
        };
      }
    },

    handleTouchMove: function handleTouchMove(event) {
      if (!this._touchParams || !this._refresh && !this._loading) {
        return;
      }
      var inner = this.$refs.inner;
      var ref = this._touchParams;
      var startY = ref.startY;
      var reachTop = ref.reachTop;
      var reachBottom = ref.reachBottom;
      if (inner) {
        var touch = event.changedTouches[0];
        var offsetY = touch.pageY - startY;
        var dir = offsetY > 0 ? 'down' : 'up';
        this._touchParams.offsetY = offsetY;
        if (this._refresh && dir === 'down' && reachTop) {
          this._refresh.pullingDown(offsetY);
        } else if (this._loading && dir === 'up' && reachBottom) {
          this._loading.pullingUp(-offsetY);
        }
      }
    },

    handleTouchEnd: function handleTouchEnd(event) {
      if (!this._touchParams || !this._refresh && !this._loading) {
        return;
      }
      var inner = this.$refs.inner;
      var ref = this._touchParams;
      var startY = ref.startY;
      var reachTop = ref.reachTop;
      var reachBottom = ref.reachBottom;
      if (inner) {
        var touch = event.changedTouches[0];
        var offsetY = touch.pageY - startY;
        var dir = offsetY > 0 ? 'down' : 'up';
        this._touchParams.offsetY = offsetY;
        if (this._refresh && dir === 'down' && reachTop) {
          this._refresh.pullingEnd();
        } else if (this._loading && dir === 'up' && reachBottom) {
          this._loading.pullingEnd();
        }
      }
      delete this._touchParams;
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var listMixin = {
  methods: {
    handleListScroll: function handleListScroll(event) {
      this.handleScroll(event);

      if (weex.utils.supportSticky()) {
        return;
      }

      var scrollTop = this.$el.scrollTop;
      var h = this.$children.filter(function (vm) {
        return vm.$refs.header;
      });

      if (h.length <= 0) {
        return;
      }

      for (var i = 0; i < h.length; i++) {
        if (h[i].initTop < scrollTop) {
          h[i].addSticky();
        } else {
          h[i].removeSticky();
        }
      }
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function getList(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;

  return {
    name: 'weex-list',
    mixins: [scrollable$1, listMixin],
    computed: {
      wrapperClass: function wrapperClass() {
        var classArray = ['weex-list', 'weex-list-wrapper', 'weex-ct'];
        this._refresh && classArray.push('with-refresh');
        this._loading && classArray.push('with-loading');
        return classArray.join(' ');
      }
    },

    methods: {
      createChildren: function createChildren(h) {
        var slots = this.$slots.default || [];
        this._cells = slots.filter(function (vnode) {
          if (!vnode.tag || !vnode.componentOptions) {
            return false;
          }
          return true;
        });
        return [h('article', {
          ref: 'inner',
          staticClass: 'weex-list-inner weex-ct'
        }, this._cells)];
      }
    },

    render: function render(createElement) {
      var this$1 = this;

      this.weexType = 'list';

      this.$nextTick(function () {
        this$1.updateLayout();
      });

      return createElement('main', {
        ref: 'wrapper',
        attrs: { 'weex-type': 'list' },
        staticClass: this.wrapperClass,
        on: createEventMap(this, {
          scroll: this.handleListScroll,
          touchstart: this.handleTouchStart,
          touchmove: this.handleTouchMove,
          touchend: this.handleTouchEnd
        }),
        staticStyle: extractComponentStyle(this)
      }, this.createChildren(createElement));
    }
  };
}

var list$$1 = {
  init: function init(weex) {
    weex.registerComponent('list', getList(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getScroller(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;

  return {
    name: 'weex-scroller',
    mixins: [scrollable$1, listMixin],
    props: {
      scrollDirection: {
        type: [String],
        default: 'vertical',
        validator: function validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) !== -1;
        }
      },
      scrollable: {
        type: [Boolean],
        default: true
      }
    },
    computed: {
      wrapperClass: function wrapperClass() {
        var classArray = ['weex-scroller', 'weex-scroller-wrapper', 'weex-ct'];
        if (this.scrollDirection === 'horizontal') {
          classArray.push('weex-scroller-horizontal');
        } else {
          classArray.push('weex-scroller-vertical');
        }
        if (!this.scrollable) {
          classArray.push('weex-scroller-disabled');
        }
        return classArray.join(' ');
      }
    },

    methods: {
      createChildren: function createChildren(h) {
        var slots = this.$slots.default || [];
        this._cells = slots.filter(function (vnode) {
          if (!vnode.tag || !vnode.componentOptions) {
            return false;
          }
          return true;
        });
        return [h('article', {
          ref: 'inner',
          staticClass: 'weex-scroller-inner weex-ct'
        }, this._cells)];
      }
    },

    render: function render(createElement) {
      var this$1 = this;

      this.weexType = 'scroller';

      /* istanbul ignore next */
      // if ("production" === 'development') {
      //   validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle)
      // }

      this._cells = this.$slots.default || [];
      this.$nextTick(function () {
        this$1.updateLayout();
      });

      return createElement('main', {
        ref: 'wrapper',
        attrs: { 'weex-type': 'scroller' },
        on: createEventMap(this, {
          scroll: this.handleScroll,
          touchstart: this.handleTouchStart,
          touchmove: this.handleTouchMove,
          touchend: this.handleTouchEnd
        }),
        staticClass: this.wrapperClass,
        staticStyle: extractComponentStyle(this)
      }, this.createChildren(createElement));
    }
  };
}

var scroller = {
  init: function init(weex) {
    weex.registerComponent('scroller', getScroller(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND,  either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileoverview waterfall
 * NOTE: only support full screen width waterfall.
 */

var NORMAL_GAP_SIZE = 32;
var DEFAULT_COLUMN_COUNT = 1;

function getWaterfall(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;

  return {
    name: 'weex-waterfall',
    mixins: [scrollable$1],
    props: {
      /**
       * specified gap size.
       * value can be number or 'normal'. 'normal' (32px) by default.
       */
      columnGap: {
        type: [String, Number],
        default: 'normal',
        validator: function validator(val) {
          if (!val || val === 'normal') {
            return true;
          }
          val = parseInt(val);
          return !isNaN(val) && val > 0;
        }
      },
      /**
       * the maximum column counts.
       * value can be number or 'auto'. 1 by default.
       */
      columnCount: {
        type: [String, Number],
        default: DEFAULT_COLUMN_COUNT,
        validator: function validator$1(val) {
          val = parseInt(val);
          return !isNaN(val) && val > 0;
        }
      },
      /**
       * the mimimum column width.
       * value can be number or 'auto'. 'auto' by default.
       */
      columnWidth: {
        type: [String, Number],
        default: 'auto',
        validator: function validator$2(val) {
          if (!val || val === 'auto') {
            return true;
          }
          val = parseInt(val);
          return !isNaN(val) && val > 0;
        }
      }
    },

    mounted: function mounted() {
      this._nextTick();
    },

    updated: function updated() {
      this.$nextTick(this._nextTick());
    },

    methods: {
      _createChildren: function _createChildren(h, rootStyle) {
        var this$1 = this;

        var slots = this.$slots.default || [];
        this._headers = [];
        this._footers = [];
        this._others = [];
        var len = slots.length;

        for (var i = 0; i < len; i++) {
          var vnode = slots[i];
          var tag = vnode.componentOptions && vnode.componentOptions.tag;
          if (tag === 'refresh' || tag === 'loading') {
            continue;
          }
          if (tag === 'cell') {
            break;
          }
          if (tag === 'header') {
            this$1._headers.push(vnode);
          }
        }

        for (var i$1 = len - 1; i$1 >= 0; i$1--) {
          var vnode$1 = slots[i$1];
          var tag$1 = vnode$1.componentOptions && vnode$1.componentOptions.tag;
          if (tag$1 === 'refresh' || tag$1 === 'loading') {
            continue;
          }
          if (tag$1 === 'cell') {
            break;
          }
          if (tag$1 === 'header') {
            this$1._footers.push(vnode$1);
          }
        }

        this._cells = slots.filter(function (vnode) {
          if (!vnode.tag || !vnode.componentOptions) {
            return false;
          }
          var tag = vnode.componentOptions.tag;
          if (tag === 'refresh' || tag === 'loading') {
            this$1["_" + tag] = vnode;
            return false;
          }
          if (tag !== 'cell') {
            this$1._others.push(vnode);
            return false;
          }
          return true;
        });

        this._reCalc(rootStyle);
        this._genColumns(h);
        var children = [];
        this._refresh && children.push(this._refresh);
        children = children.concat(this._headers);
        // .concat(this._others)
        children.push(h('html:div', {
          ref: 'columns',
          staticClass: 'weex-waterfall-inner-columns weex-ct'
        }, this._columns));
        children.push(h('html:div', {
          ref: 'footers',
          staticClass: 'weex-waterfall-footers weex-ct'
        }, this._footers));
        this._loading && children.push(this._loading);
        return [h('article', {
          ref: 'inner',
          staticClass: 'weex-waterfall-inner weex-ct'
        }, children)];
      },

      _reCalc: function _reCalc(rootStyle) {
        /**
         * NOTE: columnGap and columnWidth can't both be auto.
         * NOTE: the formula:
         *  totalWidth = n * w + (n - 1) * gap
         * 1. if columnCount = n then calc w
         * 2. if columnWidth = w then calc n
         * 3. if columnWidth = w and columnCount = n then calc totalWidth
         *    3.1 if totalWidth < ctWidth then increase columnWidth
         *    3.2 if totalWidth > ctWidth then decrease columnCount
         */
        var width, gap, cnt, ctWidth;
        var scale = weex.config.env.scale;
        var el = this.$el;
        function getCtWidth(width, style) {
          var padding = style.padding ? parseInt(style.padding) * 2 : parseInt(style.paddingLeft || 0) + parseInt(style.paddingRight || 0);
          return width - padding;
        }
        if (el && el.nodeType === 1) {
          // already mounted
          var cstyle = window.getComputedStyle(el);
          ctWidth = getCtWidth(el.getBoundingClientRect().width, cstyle);
        } else {
          // not mounted.
          // only support full screen width for waterfall component.
          ctWidth = getCtWidth(document.documentElement.clientWidth, rootStyle);
        }

        gap = this.columnGap;
        if (gap && gap !== 'normal') {
          gap = parseInt(gap);
        } else {
          gap = NORMAL_GAP_SIZE;
        }
        gap = gap * scale;

        width = this.columnWidth;
        cnt = this.columnCount;
        if (width && width !== 'auto') {
          width = parseInt(width) * scale;
        }
        if (cnt && cnt !== 'auto') {
          cnt = parseInt(cnt);
        }

        // 0. if !columnCount && !columnWidth
        if (cnt === 'auto' && width === 'auto') {}
        // 1. if columnCount = n then calc w.
        else if (cnt !== 'auto' && width === 'auto') {
            width = (ctWidth - (cnt - 1) * gap) / cnt;
          }
          // 2. if columnWidth = w then calc n.
          else if (cnt === 'auto' && width !== 'auto') {
              cnt = (ctWidth + gap) / (width + gap);
            }
            // 3. if columnWidth = w and columnCount = n then calc totalWidth
            else if (cnt !== 'auto' && width !== 'auto') {
                var totalWidth;
                var adjustCountAndWidth = function adjustCountAndWidth() {
                  totalWidth = cnt * width + (cnt - 1) * gap;
                  if (totalWidth < ctWidth) {
                    width += (ctWidth - totalWidth) / cnt;
                  } else if (totalWidth > ctWidth && cnt > 1) {
                    cnt--;
                    adjustCountAndWidth();
                  } else if (totalWidth > ctWidth) {
                    // cnt === 1
                    width = ctWidth;
                  }
                };
                adjustCountAndWidth();
              }
        this._columnCount = cnt;
        this._columnWidth = width;
        this._columnGap = gap;
      },

      _genColumns: function _genColumns(createElement) {
        var this$1 = this;

        this._columns = [];
        var cells = this._cells;
        var columnCnt = this._columnCount;
        var len = cells.length;
        var columnCells = this._columnCells = Array(columnCnt).join('.').split('.').map(function () {
          return [];
        });
        // spread cells to the columns using simpole polling algorithm.
        for (var i = 0; i < len; i++) {
          (cells[i].data.attrs || (cells[i].data.attrs = {}))['data-cell'] = i;
          columnCells[i % columnCnt].push(cells[i]);
        }
        for (var i$1 = 0; i$1 < columnCnt; i$1++) {
          this$1._columns.push(createElement('html:div', {
            ref: "column" + i$1,
            attrs: {
              'data-column': i$1
            },
            staticClass: 'weex-ct',
            staticStyle: {
              width: this$1._columnWidth + 'px',
              marginLeft: i$1 === 0 ? 0 : this$1._columnGap + 'px'
            }
          }, columnCells[i$1]));
        }
      },

      _nextTick: function _nextTick() {
        this._reLayoutChildren();
      },

      _reLayoutChildren: function _reLayoutChildren() {
        var this$1 = this;

        /**
         * treat the shortest column bottom as the match standard.
         * whichever cell exceeded it would be rearranged.
         * 1. m = shortest column bottom.
         * 2. get all cell ids who is below m.
         * 3. calculate which cell should be in which column.
         */
        var columnCnt = this._columnCount;
        var columnDoms = [];
        var columnAppendFragments = [];
        var columnBottoms = [];
        var minBottom = Number.MAX_SAFE_INTEGER;
        var minBottomColumnIndex = 0;

        // 1. find the shortest column bottom.
        for (var i = 0; i < columnCnt; i++) {
          var columnDom = this$1._columns[i].elm;
          var lastChild = columnDom.lastElementChild;
          var bottom = lastChild ? lastChild.getBoundingClientRect().bottom : 0;
          columnDoms.push(columnDom);
          columnBottoms[i] = bottom;
          columnAppendFragments.push(document.createDocumentFragment());
          if (bottom < minBottom) {
            minBottom = bottom;
            minBottomColumnIndex = i;
          }
        }

        // 2. get all cell ids who is below m.
        var belowCellIds = [];
        var belowCells = {};
        for (var i$1 = 0; i$1 < columnCnt; i$1++) {
          if (i$1 === minBottomColumnIndex) {
            continue;
          }
          var columnDom$1 = columnDoms[i$1];
          var cellsInColumn = columnDom$1.querySelectorAll('section.weex-cell');
          var len = cellsInColumn.length;
          for (var j = len - 1; j >= 0; j--) {
            var cellDom = cellsInColumn[j];
            var cellRect = cellDom.getBoundingClientRect();
            if (cellRect.top > minBottom) {
              var id = ~~cellDom.getAttribute('data-cell');
              belowCellIds.push(id);
              belowCells[id] = { elm: cellDom, height: cellRect.height };
              columnBottoms[i$1] -= cellRect.height;
            }
          }
        }

        // 3. calculate which cell should be in which column and rearrange them
        //  in the dom tree.
        belowCellIds.sort(function (a, b) {
          return a > b;
        });
        var cellIdsLen = belowCellIds.length;
        function addToShortestColumn(belowCell) {
          // find shortest bottom.
          minBottom = Math.min.apply(Math, columnBottoms);
          minBottomColumnIndex = columnBottoms.indexOf(minBottom);
          var cellElm = belowCell.elm;
          var cellHeight = belowCell.height;
          columnAppendFragments[minBottomColumnIndex].appendChild(cellElm);
          columnBottoms[minBottomColumnIndex] += cellHeight;
        }
        for (var i$2 = 0; i$2 < cellIdsLen; i$2++) {
          addToShortestColumn(belowCells[belowCellIds[i$2]]);
        }
        for (var i$3 = 0; i$3 < columnCnt; i$3++) {
          columnDoms[i$3].appendChild(columnAppendFragments[i$3]);
        }
      }
    },

    render: function render(createElement) {
      var this$1 = this;

      this.weexType = 'waterfall';
      this._cells = this.$slots.default || [];
      this.$nextTick(function () {
        this$1.updateLayout();
      });
      var mergedStyle = extractComponentStyle(this);
      return createElement('main', {
        ref: 'wrapper',
        attrs: { 'weex-type': 'waterfall' },
        on: createEventMap(this, {
          scroll: this.handleScroll,
          touchstart: this.handleTouchStart,
          touchmove: this.handleTouchMove,
          touchend: this.handleTouchEnd
        }),
        staticClass: 'weex-waterfall weex-waterfall-wrapper weex-ct',
        staticStyle: mergedStyle
      }, this._createChildren(createElement, mergedStyle));
    }
  };
}

var waterfall = {
  init: function init(weex) {
    weex.registerComponent('waterfall', getWaterfall(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getCell(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  return {
    name: 'weex-cell',
    render: function render(createElement) {
      return createElement('section', {
        attrs: { 'weex-type': 'cell' },
        staticClass: 'weex-cell weex-ct',
        staticStyle: extractComponentStyle(this)
      }, this.$slots.default);
    }
  };
}

var cell = {
  init: function init(weex) {
    weex.registerComponent('cell', getCell(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getHeader(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var ref = weex.utils;
  var supportSticky = ref.supportSticky;

  return {
    data: function data() {
      return {
        sticky: false,
        initTop: 0,
        placeholder: null,
        supportSticky: supportSticky()
      };
    },

    mounted: function mounted() {
      this.initTop = this.$el.offsetTop;
      this.placeholder = window.document.createElement('header');
    },

    updated: function updated() {
      if (!this.sticky) {
        this.initTop = this.$el.offsetTop;
      }
    },

    methods: {
      addSticky: function addSticky() {
        this.sticky = true;
        this.placeholder.style.display = 'block';
        this.placeholder.style.width = this.$el.offsetWidth + 'px';
        this.placeholder.style.height = this.$el.offsetHeight + 'px';
        this.$el.parentNode.insertBefore(this.placeholder, this.$el);
      },

      removeSticky: function removeSticky() {
        this.sticky = false;
        try {
          this.$el.parentNode.removeChild(this.placeholder);
        } catch (e) {}
      }
    },

    render: function render(createElement) {
      /* istanbul ignore next */
      // if ("production" === 'development') {
      //   validateStyles('header', this.$vnode.data && this.$vnode.data.staticStyle)
      // }
      return createElement('html:header', {
        attrs: { 'weex-type': 'header' },
        ref: 'header',
        staticClass: 'weex-header weex-ct',
        class: { 'weex-sticky': this.sticky, 'weex-ios-sticky': this.supportSticky },
        staticStyle: extractComponentStyle(this)
      }, this.$slots.default);
    }
  };
}

var header = {
  init: function init(weex) {
    weex.registerComponent('header', getHeader(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getLoading() {
  var extractComponentStyle = weex.extractComponentStyle;

  return {
    name: 'weex-loading',
    props: {
      display: {
        type: String,
        default: 'show',
        validator: function validator(value) {
          return ['show', 'hide'].indexOf(value) !== -1;
        }
      }
    },
    data: function data() {
      return {
        height: -1,
        viewHeight: 0
      };
    },
    mounted: function mounted() {
      this.viewHeight = this.$el.offsetHeight;
      if (this.display === 'hide') {
        this.height = 0;
      } else {
        this.height = this.viewHeight;
      }
    },
    watch: {
      height: function height(val) {
        this.$el.style.height = val + "px";
      },
      display: function display(val) {
        if (val === 'hide') {
          this.height = 0;
        } else {
          this.height = this.viewHeight;
        }
      }
    },
    methods: {
      pulling: function pulling(offsetY) {
        if (offsetY === void 0) offsetY = 0;

        this.height = offsetY;
      },
      pullingUp: function pullingUp(offsetY) {
        this.$el.style.transition = "height 0s";
        this.pulling(offsetY);
      },
      pullingEnd: function pullingEnd() {
        this.$el.style.transition = "height .2s";
        if (this.height >= this.viewHeight) {
          this.pulling(this.viewHeight);
          this.$emit('loading');
        } else {
          this.pulling(0);
        }
      },
      getChildren: function getChildren() {
        var children = this.$slots.default || [];
        if (this.display === 'show') {
          return children;
        }
        return children.filter(function (vnode) {
          return vnode.componentOptions && vnode.componentOptions.tag !== 'loading-indicator';
        });
      }
    },
    render: function render(createElement) {
      this.$parent._loading = this;
      return createElement('aside', {
        ref: 'loading',
        attrs: { 'weex-type': 'loading' },
        staticClass: 'weex-loading weex-ct',
        staticStyle: extractComponentStyle(this)
      }, this.getChildren());
    }
  };
}

var loading = {
  init: function init(weex) {
    weex.registerComponent('loading', getLoading(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getRefresh(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var ref = weex.utils;
  var createEvent = ref.createEvent;

  return {
    name: 'weex-refresh',
    props: {
      display: {
        type: String,
        default: 'show',
        validator: function validator(value) {
          return ['show', 'hide'].indexOf(value) !== -1;
        }
      }
    },
    data: function data() {
      return {
        lastDy: 0,
        viewHeight: 0,
        height: -1
      };
    },
    mounted: function mounted() {
      this.viewHeight = this.$el.offsetHeight;
      if (this.display === 'hide') {
        this.height = 0;
      } else {
        this.height = this.viewHeight;
      }
    },
    watch: {
      height: function height(val) {
        this.$el.style.height = val + "px";
      },
      display: function display(val) {
        if (val === 'hide') {
          this.height = 0;
        } else {
          this.height = this.viewHeight;
        }
      }
    },
    methods: {
      pulling: function pulling(offsetY) {
        if (offsetY === void 0) offsetY = 0;

        this.height = offsetY;
        this.$emit('pullingdown', createEvent(this, 'pullingdown', {
          dy: offsetY - this.lastDy,
          pullingDistance: offsetY,
          viewHeight: this.viewHeight
        }));
        this.lastDy = offsetY;
      },
      pullingDown: function pullingDown(offsetY) {
        this.$el.style.transition = "height 0s";
        this.pulling(offsetY);
      },
      pullingEnd: function pullingEnd() {
        this.$el.style.transition = "height .2s";
        if (this.height >= this.viewHeight) {
          this.pulling(this.viewHeight);
          this.$emit('refresh');
        } else {
          this.pulling(0);
        }
      },
      getChildren: function getChildren() {
        var children = this.$slots.default || [];
        if (this.display === 'show') {
          return children;
        }
        return children.filter(function (vnode) {
          return vnode.componentOptions && vnode.componentOptions.tag !== 'loading-indicator';
        });
      }
    },
    render: function render(createElement) {
      this.$parent._refresh = this;
      return createElement('aside', {
        ref: 'refresh',
        attrs: { 'weex-type': 'refresh' },
        staticClass: 'weex-refresh weex-ct',
        staticStyle: extractComponentStyle(this)
      }, this.getChildren());
    }
  };
}

var refresh = {
  init: function init(weex) {
    weex.registerComponent('refresh', getRefresh(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var extractComponentStyle$3;
var getRgb$1;
var loopArray$1;
var getStyleSheetById$1;

var _css$5 = "\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  width: 1rem !important;\n  height: 1rem !important;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  width: 0.5em;\n  height: 0.5em;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n  -moz-animation: weex-spinner 1.1s infinite ease;\n  animation: weex-spinner 1.1s infinite ease;\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n";

function getStyleSheet(spinnerVm) {
  if (spinnerVm._styleSheet) {
    return;
  }
  spinnerVm._styleSheet = getStyleSheetById$1('weex-cmp-loading-indicator');
}

function setKeyframeColor(spinnerVm, val) {
  getStyleSheet(spinnerVm);
  var keyframeRules = computeKeyFrameRules(val);
  var rules = spinnerVm._styleSheet.rules || spinnerVm._styleSheet.cssRules;
  for (var i = 0, l = rules.length; i < l; i++) {
    var item = rules.item(i);
    if ((item.type === CSSRule.KEYFRAMES_RULE || item.type === CSSRule.WEBKIT_KEYFRAMES_RULE) && item.name === 'weex-spinner') {
      var cssRules = item.cssRules;
      for (var j = 0, m = cssRules.length; j < m; j++) {
        var keyframe = cssRules[j];
        if (keyframe.type === CSSRule.KEYFRAME_RULE || keyframe.type === CSSRule.WEBKIT_KEYFRAME_RULE) {
          keyframe.style.boxShadow = keyframeRules[j];
        }
      }
    }
  }
}

function computeKeyFrameRules(rgb) {
  if (!rgb) {
    return;
  }
  var scaleArr = ['0em -1.3em 0em 0em', '0.9em -0.9em 0 0em', '1.25em 0em 0 0em', '0.875em 0.875em 0 0em', '0em 1.25em 0 0em', '-0.9em 0.9em 0 0em', '-1.3em 0em 0 0em', '-0.9em -0.9em 0 0em'];
  var colorArr = ['1', '0.2', '0.2', '0.2', '0.2', '0.2', '0.5', '0.7'].map(function (e) {
    return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + e + ')';
  });
  var rules = [];
  var loop = function loop(i) {
    var tmpColorArr = loopArray$1(colorArr, i, 'r');
    rules.push(scaleArr.map(function (scaleStr, i) {
      return scaleStr + ' ' + tmpColorArr[i];
    }).join(', '));
  };

  for (var i = 0; i < scaleArr.length; i++) {
    loop(i);
  }return rules;
}

function processStyle$1(vm) {
  var style = extractComponentStyle$3(vm);
  var color = style.color;
  var rgb = color && getRgb$1(color);
  if (rgb) {
    setKeyframeColor(vm, rgb);
  }
  return style;
}

var loadingIndicator = {
  name: 'weex-loading-indicator',
  render: function render(createElement) {
    this.weexType = 'loading-indicator';
    return createElement('mark', {
      attrs: { 'weex-type': 'loading-indicator' },
      staticClass: 'weex-loading-indicator weex-ct',
      staticStyle: processStyle$1(this)
    });
  },
  _css: _css$5
};

var loadingIndicator$1 = {
  init: function init(weex) {
    extractComponentStyle$3 = weex.extractComponentStyle;
    getRgb$1 = weex.utils.getRgb;
    loopArray$1 = weex.utils.loopArray;
    getStyleSheetById$1 = weex.utils.getStyleSheetById;
    weex.registerComponent('loading-indicator', loadingIndicator);
  }
};

__$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\nbody > .weex-list,\nbody > .weex-scroller,\nbody > .weex-waterfall {\n  max-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-scroller-wrapper,\n.weex-waterfall-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-list-wrapper,\n.weex-waterfall-wrapper {\n  overflow-y: scroll !important;\n  overflow-x: hidden !important;\n}\n\n.weex-list-inner,\n.weex-scroller-inner,\n.weex-waterfall-inner {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-waterfall-inner-columns {\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-scroller-wrapper.weex-scroller-vertical {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.weex-scroller-wrapper.weex-scroller-disabled {\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner {\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  height: 100%;\n}\n\n.weex-cell {\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n}\n", undefined);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var modules = [list$$1, scroller, waterfall, cell, header, loading, refresh, loadingIndicator$1];

var scrollable = {
  init: function init(weex) {
    modules.forEach(function (mod) {
      weex.install(mod);
    });
  }
};

__$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-slider-wrapper {\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n\n.weex-slider-inner {\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-slider-cell {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: transparent !important;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.neighbor-cell {\n  overflow: visible !important;\n}", undefined);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var TRANSITION_TIME = 400;
var NEIGHBOR_SCALE_TIME = 100;
var MAIN_SLIDE_OPACITY = 1;
var THROTTLE_SCROLL_TIME = 25;
var INTERVAL_MINIMUM = 200;

var slideMixin = {
  created: function created() {
    this._clones = [];
    this.innerOffset = 0;
    this._indicator = null;
  },

  beforeUpdate: function beforeUpdate() {
    this._getWrapperSize();
  },

  updated: function updated() {
    var children = this.$children;
    var len = children && children.length;
    var frameCount = this.frameCount;
    if (frameCount !== this._prevFrameCount) {
      var inner = this.$refs.inner;
      if (inner) {
        inner.style.webkitTransform = 'translate3d(' + 0 + 'px, 0, 0)';
        inner.style.mozTransform = 'translate3d(' + 0 + 'px, 0, 0)';
        inner.style.transform = 'translate3d(' + 0 + 'px, 0, 0)';
      }
    }
    if (children && len > 0) {
      for (var i = 0; i < len; i++) {
        var vm = children[i];
        if (vm.$options._componentTag === 'indicator' || vm.$vnode.data.ref === 'indicator') {
          vm._watcher.get();
          break;
        }
      }
    }
    weex.utils.fireLazyload(this.$el, true);
    if (this._preIndex !== this.currentIndex) {
      this._slideTo(this.currentIndex);
    }
  },

  mounted: function mounted() {
    this._getWrapperSize();
    this._slideTo(this.currentIndex);
    weex.utils.fireLazyload(this.$el, true);
  },

  methods: {
    _getWrapperSize: function _getWrapperSize() {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this._wrapperWidth = rect.width;
        this._wrapperHeight = rect.height;
      }
    },

    _formatChildren: function _formatChildren(createElement) {
      var this$1 = this;

      var children = this.$slots.default || [];
      var indicatorVnode;
      var cells = children.filter(function (vnode) {
        if (!vnode.tag) {
          return false;
        }
        if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
          indicatorVnode = vnode;
          return false;
        }
        return true;
      }).map(function (vnode) {
        return createElement('li', {
          ref: 'cells',
          staticClass: "weex-slider-cell weex-ct" + (this$1.isNeighbor ? ' neighbor-cell' : '')
        }, [vnode]);
      });
      if (indicatorVnode) {
        indicatorVnode.data.attrs = indicatorVnode.data.attrs || {};
        indicatorVnode.data.attrs.count = cells.length;
        indicatorVnode.data.attrs.active = this.currentIndex;
        this._indicator = indicatorVnode;
      }
      return cells;
    },

    _renderSlides: function _renderSlides(createElement) {
      this._cells = this._formatChildren(createElement);
      this.frameCount = this._cells.length;
      return createElement('nav', {
        ref: 'wrapper',
        attrs: { 'weex-type': this.isNeighbor ? 'slider-neighbor' : 'slider' },
        on: weex.createEventMap(this, ['scroll', 'scrollstart', 'scrollend'], {
          touchstart: this._handleTouchStart,
          touchmove: weex.utils.throttle(weex.utils.bind(this._handleTouchMove, this), 25),
          touchend: this._handleTouchEnd,
          touchcancel: this._handleTouchCancel
        }),
        staticClass: 'weex-slider weex-slider-wrapper weex-ct',
        staticStyle: weex.extractComponentStyle(this)
      }, [createElement('ul', {
        ref: 'inner',
        staticClass: 'weex-slider-inner weex-ct'
      }, this._cells), this._indicator]);
    },

    // get standard index
    _normalizeIndex: function _normalizeIndex(index) {
      var newIndex = (index + this.frameCount) % this.frameCount;
      return Math.min(Math.max(newIndex, 0), this.frameCount - 1);
    },

    _startAutoPlay: function _startAutoPlay() {
      if (!this.autoPlay || this.autoPlay === 'false') {
        return;
      }
      if (this._autoPlayTimer) {
        clearTimeout(this._autoPlayTimer);
        this._autoPlayTimer = null;
      }
      var interval = parseInt(this.interval - TRANSITION_TIME - NEIGHBOR_SCALE_TIME);
      interval = interval > INTERVAL_MINIMUM ? interval : INTERVAL_MINIMUM;
      this._autoPlayTimer = setTimeout(weex.utils.bind(this._next, this), interval);
    },

    _stopAutoPlay: function _stopAutoPlay() {
      if (this._autoPlayTimer) {
        clearTimeout(this._autoPlayTimer);
        this._autoPlayTimer = null;
      }
    },

    _slideTo: function _slideTo(index, isTouchScroll) {
      var this$1 = this;

      if (this.frameCount <= 0) {
        return;
      }
      if (!this.infinite || this.infinite === 'false') {
        if (index === -1 || index > this.frameCount - 1) {
          this._slideTo(this.currentIndex);
          return;
        }
      }

      if (!this._preIndex && this._preIndex !== 0) {
        if (this._showNodes && this._showNodes[0]) {
          this._preIndex = this._showNodes[0].index;
        } else {
          this._preIndex = this.currentIndex;
        }
      }

      if (this._sliding) {
        return;
      }
      this._sliding = true;

      var newIndex = this._normalizeIndex(index);
      var inner = this.$refs.inner;
      var step = this._step = this.frameCount <= 1 ? 0 : this._preIndex - index;

      if (inner) {
        this._prepareNodes();
        var translate = weex.utils.getTransformObj(inner).translate;
        var match = translate && translate.match(/translate[^(]+\(([+-\d.]+)/);
        var innerX = match && match[1] || 0;
        var dist = innerX - this.innerOffset;
        this.innerOffset += step * this._wrapperWidth;
        // transform the whole slides group.
        inner.style.webkitTransition = "-webkit-transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
        inner.style.mozTransition = "transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
        inner.style.transition = "transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
        inner.style.webkitTransform = "translate3d(" + this.innerOffset + "px, 0, 0)";
        inner.style.mozTransform = "translate3d(" + this.innerOffset + "px, 0, 0)";
        inner.style.transform = "translate3d(" + this.innerOffset + "px, 0, 0)";

        // emit scroll events.
        if (!isTouchScroll) {
          this._emitScrollEvent('scrollstart');
        }
        setTimeout(function () {
          this$1._throttleEmitScroll(dist, function () {
            this$1._emitScrollEvent('scrollend');
          });
        }, THROTTLE_SCROLL_TIME);

        this._loopShowNodes(step);

        setTimeout(function () {
          if (this$1.isNeighbor) {
            this$1._setNeighbors();
          }

          setTimeout(function () {
            inner.style.webkitTransition = '';
            inner.style.mozTransition = '';
            inner.style.transition = '';
            for (var i = this$1._showStartIdx; i <= this$1._showEndIdx; i++) {
              var node = this$1._showNodes[i];
              if (!node) {
                continue;
              }
              var elm = node.firstElementChild;
              elm.style.webkitTransition = '';
              elm.style.mozTransition = '';
              elm.style.transition = '';
            }
            // clean cloned nodes and rearrange slide cells.
            this$1._rearrangeNodes(newIndex);
          }, NEIGHBOR_SCALE_TIME);
        }, TRANSITION_TIME);
      }

      if (newIndex !== this._preIndex) {
        this.$emit('change', weex.utils.createEvent(this.$el, 'change', {
          index: newIndex
        }));
      }
    },

    _clearNodesOffset: function _clearNodesOffset() {
      var this$1 = this;

      var end = this._showEndIdx;
      for (var i = this._showStartIdx; i <= end; i++) {
        var node = this$1._showNodes[i];
        node = node && node.firstElementChild;
        if (!node) {
          continue;
        }
        weex.utils.addTransform(this$1._showNodes[i].firstElementChild, {
          translate: 'translate3d(0px, 0px, 0px)'
        });
      }
    },

    _loopShowNodes: function _loopShowNodes(step) {
      var this$1 = this;

      if (!step || this.frameCount <= 1) {
        return;
      }
      var sign = step > 0 ? 1 : -1;
      var i = step <= 0 ? this._showStartIdx : this._showEndIdx;
      var end = step <= 0 ? this._showEndIdx : this._showStartIdx;
      for (; i !== end - sign; i -= sign) {
        var nextIdx = i + step;
        this$1._showNodes[nextIdx] = this$1._showNodes[i];
        this$1._showNodes[nextIdx]._showIndex = nextIdx;
        delete this$1._showNodes[i];
      }
      this._showStartIdx += step;
      this._showEndIdx += step;
    },

    _prepareNodes: function _prepareNodes() {
      // test if the next slide towards the direction exists.
      // e.g. currentIndex 0 -> 1: should prepare 4 slides: -1, 0, 1, 2
      // if not, translate a node to here, or just clone it.
      var step = this._step;
      var prevCount = this._prevFrameCount;
      var curCount = this.frameCount;
      // frameCount updated in runtime, should init again.
      if (prevCount !== curCount) {
        this._prevFrameCount = curCount;
        this._inited = false;
      }
      if (!this._inited) {
        this._initNodes();
        this._inited = true;
        this._showNodes = {};
      }
      if (curCount <= 1) {
        this._showStartIdx = this._showEndIdx = 0;
        var node = this._cells[0].elm;
        node.style.opacity = 1;
        node.style.zIndex = 99;
        node.index = 0;
        this._showNodes[0] = node;
        node._inShow = true;
        node._showIndex = 0;
        return;
      }
      var showCount = this._showCount = Math.abs(step) + 3;
      this._showStartIdx = step <= 0 ? -1 : 2 - showCount;
      this._showEndIdx = step <= 0 ? showCount - 2 : 1;
      this._clearNodesOffset();
      this._positionNodes(this._showStartIdx, this._showEndIdx, step);
    },

    _initNodes: function _initNodes() {
      var total = this.frameCount;
      var cells = this._cells;
      for (var i = 0; i < total; i++) {
        var node = cells[i].elm;
        node.index = i;
        node._inShow = false;
        node.style.zIndex = 0;
        node.style.opacity = 0;
      }
    },

    _positionNodes: function _positionNodes(begin, end, step, anim) {
      var this$1 = this;

      var cells = this._cells;
      var start = step <= 0 ? begin : end;
      var stop = step <= 0 ? end : begin;
      var sign = step <= 0 ? -1 : 1;
      var cellIndex = this._preIndex + sign;
      for (var i = start; i !== stop - sign; i = i - sign) {
        var node = cells[this$1._normalizeIndex(cellIndex)].elm;
        cellIndex = cellIndex - sign;
        this$1._positionNode(node, i);
      }
    },

    /**
     * index: position index in the showing cells' view.
     */
    _positionNode: function _positionNode(node, index) {
      var holder = this._showNodes[index];
      if (node._inShow && holder !== node) {
        if (holder) {
          this._removeClone(holder);
        }
        node = this._getClone(node.index);
      } else if (node._inShow) {
        return;
      }

      node._inShow = true;
      var translateX = index * this._wrapperWidth - this.innerOffset;
      weex.utils.addTransform(node, {
        translate: "translate3d(" + translateX + "px, 0px, 0px)"
      });
      node.style.zIndex = 99 - Math.abs(index);
      node.style.opacity = 1;
      node._showIndex = index;
      this._showNodes[index] = node;
    },

    _getClone: function _getClone(index) {
      var arr = this._clones[index];
      if (!arr) {
        this._clones[index] = arr = [];
      }
      if (arr.length <= 0) {
        var origNode = this._cells[index].elm;
        var clone = origNode.cloneNode(true);
        clone._isClone = true;
        clone._inShow = origNode._inShow;
        clone.index = origNode.index;
        clone.style.opacity = 0;
        clone.style.zIndex = 0;
        var ct = this.$refs.inner;
        ct.appendChild(clone);
        arr.push(clone);
      }
      return arr.pop();
    },

    _removeClone: function _removeClone(node) {
      var idx = node.index;
      this._hideNode(node);
      var arr = this._clones[idx];
      arr.push(node);
    },

    _hideNode: function _hideNode(node) {
      node._inShow = false;
      node.style.opacity = 0;
      node.style.zIndex = 0;
    },

    /**
     * hide nodes from begin to end in showArray.
     * if it is clone node, just move the clone node to the buffer.
     */
    _clearNodes: function _clearNodes(begin, end) {
      var this$1 = this;

      for (var i = begin; i <= end; i++) {
        var node = this$1._showNodes[i];
        if (!node) {
          return;
        }
        if (node._isClone) {
          this$1._removeClone(node);
        } else if (!node._inShow) {
          this$1._hideNode(node);
        }
        delete this$1._showNodes[i];
      }
    },

    /**
     * copy node style props (opacity and zIndex) and transform status from
     * one element to another.
     */
    _copyStyle: function _copyStyle(from, to, styles, transformExtra) {
      if (styles === void 0) styles = ['opacity', 'zIndex'];
      if (transformExtra === void 0) transformExtra = {};

      weex.utils.extendKeys(to.style, from.style, styles);
      var transObj = weex.utils.getTransformObj(from);
      for (var k in transformExtra) {
        transObj[k] = transformExtra[k];
      }
      weex.utils.addTransform(to, transObj);
      var fromInner = from.firstElementChild;
      var toInner = to.firstElementChild;
      toInner.style.opacity = fromInner.style.opacity;
      weex.utils.copyTransform(fromInner, toInner);
    },

    /**
     * replace a clone node with the original node if it's not in use.
     */
    _replaceClone: function _replaceClone(clone, pos) {
      var this$1 = this;

      var origNode = this._cells[clone.index].elm;
      if (origNode._inShow) {
        return;
      }
      var origShowIndex = origNode._showIndex;
      var styleProps = ['opacity', 'zIndex'];
      var cl;
      if (Math.abs(origShowIndex) <= 1) {
        // leave a clone to replace the origNode in the show zone(-1 ~ 1).
        cl = this._getClone(origNode.index);
        this._copyStyle(origNode, cl);
        this._showNodes[origShowIndex] = cl;
      }
      origNode._inShow = true;
      var transObj = weex.utils.getTransformObj(clone);
      transObj.translate = transObj.translate.replace(/[+-\d.]+[pw]x/, function ($0) {
        return pos * this$1._wrapperWidth - this$1.innerOffset + 'px';
      });
      this._copyStyle(clone, origNode, styleProps, transObj);
      this._removeClone(clone);
      if (!cl) {
        delete this._showNodes[origShowIndex];
      }
      this._showNodes[pos] = origNode;
      origNode._showIndex = pos;
    },

    _rearrangeNodes: function _rearrangeNodes(newIndex) {
      var this$1 = this;

      if (this.frameCount <= 1) {
        this._sliding = false;
        this.currentIndex = 0;
        return;
      }

      // clear autoPlay timer (and restart after updated hook).
      this._startAutoPlay();

      /**
       * clean nodes. replace current node with non-cloned node.
       * set current index to the new index.
       */
      var shows = this._showNodes;
      for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
        shows[i]._inShow = false;
      }
      for (var i$1 = -1; i$1 <= 1; i$1++) {
        var node = shows[i$1];
        if (!node._isClone) {
          node._inShow = true;
        } else {
          this$1._replaceClone(node, i$1);
        }
      }

      this._clearNodes(this._showStartIdx, -2);
      this._showStartIdx = -1;
      this._clearNodes(2, this._showEndIdx);
      this._showEndIdx = 1;
      this._sliding = false;

      // set current index to the new index.
      this.currentIndex = newIndex;
      this._preIndex = newIndex;
    },

    /**
     * according to the attrs: neighborScale, neighborAlpha, neighborSpace.
     * 1. apply the main cell transform effects.
     * 2. set the previous cell and the next cell's positon, scale and alpha.
     * 3. set other cells' scale and alpha.
     */
    _setNeighbors: function _setNeighbors() {
      var this$1 = this;

      for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
        var elm = this$1._showNodes[i].firstElementChild;
        elm.style.webkitTransition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
        elm.style.mozTransition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
        elm.style.transition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
        var transObj = {
          scale: "scale(" + (i === 0 ? this$1.currentItemScale : this$1.neighborScale) + ")"
        };
        var translateX = void 0;
        if (!this$1._neighborWidth) {
          this$1._neighborWidth = parseFloat(elm.style.width) || elm.getBoundingClientRect().width;
        }
        // calculate position offsets according to neighbor scales.
        if (Math.abs(i) === 1) {
          var dist = ((this$1._wrapperWidth - this$1._neighborWidth * this$1.neighborScale) / 2 + this$1.neighborSpace * weex.config.env.scale) / this$1.neighborScale;
          translateX = -i * dist;
        } else {
          // clear position offsets.
          translateX = 0;
        }
        transObj.translate = "translate3d(" + translateX + "px, 0px, 0px)";
        weex.utils.addTransform(elm, transObj);
        elm.style.opacity = i === 0 ? MAIN_SLIDE_OPACITY : this$1.neighborAlpha;
      }
    },

    _next: function _next() {
      var next = this.currentIndex + 1;
      if (this.frameCount <= 1) {
        next--;
      }
      this._slideTo(next);
    },

    _prev: function _prev() {
      var prev = this.currentIndex - 1;
      if (this.frameCount <= 1) {
        prev++;
      }
      this._slideTo(prev);
    },

    _handleTouchStart: function _handleTouchStart(event) {
      var touch = event.changedTouches[0];
      this._stopAutoPlay();
      var inner = this.$refs.inner;
      this._touchParams = {
        originalTransform: inner.style.webkitTransform || inner.style.mozTransform || inner.style.transform,
        startTouchEvent: touch,
        startX: touch.pageX,
        startY: touch.pageY,
        timeStamp: event.timeStamp
      };
    },

    _handleTouchMove: function _handleTouchMove(event) {
      var tp = this._touchParams;
      if (!tp) {
        return;
      }
      if (this._sliding) {
        return;
      }
      var ref = this._touchParams;
      var startX = ref.startX;
      var startY = ref.startY;
      var touch = event.changedTouches[0];
      var offsetX = touch.pageX - startX;
      var offsetY = touch.pageY - startY;
      tp.offsetX = offsetX;
      tp.offsetY = offsetY;
      var isV = tp.isVertical;
      if (typeof isV === 'undefined') {
        isV = tp.isVertical = Math.abs(offsetX) < Math.abs(offsetY);
        if (!isV) {
          this._emitScrollEvent('scrollstart');
        }
      }
      // vertical scroll. just ignore it.
      if (isV) {
        return;
      }
      // horizontal scroll. trigger scroll event.
      event.preventDefault();
      var inner = this.$refs.inner;
      if (inner && offsetX) {
        if (!this._nodesOffsetCleared) {
          this._nodesOffsetCleared = true;
          this._clearNodesOffset();
        }
        this._emitScrollEvent('scroll', {
          offsetXRatio: offsetX / this._wrapperWidth
        });
        inner.style.webkitTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
        inner.style.mozTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
        inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
      }
    },

    _handleTouchEnd: function _handleTouchEnd(event) {
      this._startAutoPlay();
      var tp = this._touchParams;
      if (!tp) {
        return;
      }
      var isV = tp.isVertical;
      if (typeof isV === 'undefined') {
        return;
      }
      var inner = this.$refs.inner;
      var offsetX = tp.offsetX;
      if (inner) {
        this._nodesOffsetCleared = false;
        // TODO: test the velocity if it's less than 0.2.
        var reset = Math.abs(offsetX / this._wrapperWidth) < 0.2;
        var direction = offsetX > 0 ? 1 : -1;
        var newIndex = reset ? this.currentIndex : this.currentIndex - direction;
        this._slideTo(newIndex, true);
      }
      delete this._touchParams;
    },

    _handleTouchCancel: function _handleTouchCancel(event) {
      return this._handleTouchEnd(event);
    },

    _emitScrollEvent: function _emitScrollEvent(type, data) {
      if (data === void 0) data = {};

      this.$emit(type, weex.utils.createEvent(this.$el, type, data));
    },

    _throttleEmitScroll: function _throttleEmitScroll(offset, callback) {
      var this$1 = this;

      var i = 0;
      var throttleTime = THROTTLE_SCROLL_TIME;
      var cnt = parseInt(TRANSITION_TIME / throttleTime) - 1;
      var sign = offset > 0 ? 1 : -1;
      var r = Math.abs(offset / this._wrapperWidth);
      var throttledScroll = function throttledScroll() {
        if (++i > cnt) {
          return callback && callback.call(this$1);
        }
        var ratio = this$1._step === 0 ? sign * r * (1 - i / cnt) : sign * (r + (1 - r) * i / cnt);
        this$1._emitScrollEvent('scroll', {
          offsetXRatio: ratio
        });
        setTimeout(throttledScroll, THROTTLE_SCROLL_TIME);
      };
      throttledScroll();
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../../validator'
// import indicator from './indicator'
var slider$1 = {
  mixins: [slideMixin],
  props: {
    index: {
      type: [String, Number],
      default: 0
    },
    'auto-play': {
      type: [String, Boolean],
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    },
    infinite: {
      type: [String, Boolean],
      default: true
    }
  },

  watch: {
    index: function index() {
      this.currentIndex = this._normalizeIndex(this.index);
    }
  },

  data: function data() {
    return {
      frameCount: 0,
      currentIndex: this.index
    };
  },

  beforeCreate: function beforeCreate() {
    this.weexType = 'slider';
  },

  render: function render(createElement) {
    /* istanbul ignore next */
    // if ("production" === 'development') {
    //   validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return this._renderSlides(createElement);
  }
};

var slider$2 = {
  init: function init(weex) {
    weex.registerComponent('slider', slider$1);
    weex.registerComponent('cycleslider', slider$1);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var DEFAULT_NEIGHBOR_SPACE = 20;
var DEFAULT_NEIGHBOR_ALPHA = 0.6;
var DEFAULT_NEIGHBOR_SCALE = 0.8;
var DEFAULT_CURRENT_ITEM_SCALE = 0.9;

var sliderNeighbor = {
  mixins: [slideMixin],
  props: {
    index: {
      type: [String, Number],
      default: 0
    },
    autoPlay: {
      type: [String, Boolean],
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    },
    infinite: {
      type: [String, Boolean],
      default: true
    },
    neighborSpace: {
      type: [String, Number],
      validator: function validator(val) {
        val = parseFloat(val);
        return !isNaN(val) && val > 0;
      },
      default: DEFAULT_NEIGHBOR_SPACE
    },
    neighborAlpha: {
      type: [String, Number],
      validator: function validator(val) {
        val = parseFloat(val);
        return !isNaN(val) && val >= 0 && val <= 1;
      },
      default: DEFAULT_NEIGHBOR_ALPHA
    },
    neighborScale: {
      type: [String, Number],
      validator: function validator(val) {
        val = parseFloat(val);
        return !isNaN(val) && val >= 0 && val <= 1;
      },
      default: DEFAULT_NEIGHBOR_SCALE
    },
    currentItemScale: {
      type: [String, Number],
      validator: function validator(val) {
        val = parseFloat(val);
        return !isNaN(val) && val >= 0 && val <= 1;
      },
      default: DEFAULT_CURRENT_ITEM_SCALE
    }
  },

  watch: {
    index: function index() {
      this.currentIndex = this._normalizeIndex(this.index);
    }
  },

  data: function data() {
    return {
      currentIndex: this.index,
      frameCount: 0
    };
  },

  beforeCreate: function beforeCreate() {
    this.isNeighbor = true;
    this.weexType = 'slider-neighbor';
  },

  render: function render(createElement) {
    return this._renderSlides(createElement);
  }
};

var neighbor = {
  init: function init(weex) {
    weex.registerComponent('slider-neighbor', sliderNeighbor);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var _css$6 = "\n.weex-indicator {\n  position: absolute;\n  z-index: 10;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  margin: 0;\n  padding: 0;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.266667rem;\n  height: 0.266667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.133333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}\n";

var extractComponentStyle$4;
var extend$3;
var extendKeys$1;

function getIndicatorItemStyle(spec, isActive) {
  var style = {};
  style['background-color'] = spec[isActive ? 'itemSelectedColor' : 'itemColor'];
  style['width'] = style['height'] = spec['itemSize'];
  return style;
}

function _render(context, h) {
  var children = [];
  var mergedStyle = extractComponentStyle$4(context);
  var indicatorSpecStyle = extendKeys$1({}, mergedStyle, ['itemColor', 'itemSelectedColor', 'itemSize']);
  for (var i = 0; i < Number(context.count); ++i) {
    var classNames = ['weex-indicator-item weex-el'];
    var isActive = false;
    if (i === Number(context.active)) {
      classNames.push('weex-indicator-item-active');
      isActive = true;
    }
    children.push(h('mark', {
      staticClass: classNames.join(' '),
      staticStyle: getIndicatorItemStyle(indicatorSpecStyle, isActive)
    }));
  }
  context.$nextTick(function () {
    _reLayout(this, _getVirtualRect(this, mergedStyle), _getLtbr(this, mergedStyle));
  });
  return h('nav', {
    attrs: { 'weex-type': 'indicator' },
    staticClass: 'weex-indicator weex-ct',
    staticStyle: mergedStyle
  }, children);
}

/**
 * get indicator's virtual rect (width, height), which is the .
 */
function _getVirtualRect(context, mergedStyle) {
  var ct = context._getParentRect();
  var rect = ['width', 'height'].reduce(function (pre, key) {
    var msv = mergedStyle && mergedStyle[key];
    pre[key] = msv ? parseFloat(msv) : ct[key];
    return pre;
  }, {});
  return rect;
}

/**
 * get indicator's ltbr values (without units).
 */
function _getLtbr(context, mergedStyle) {
  return ['left', 'top', 'bottom', 'right'].reduce(function (pre, key) {
    var msv = mergedStyle && mergedStyle[key];
    if (!msv && msv !== 0) {
      return pre;
    }
    pre[key] = parseFloat(msv);
    return pre;
  }, {});
}

/**
 * get indicator's rect (width, height).
 */
function _getIndicatorRect(el) {
  var width, height;
  if (el.children.length === 1) {
    var itemComputedStyle = window.getComputedStyle(el.children[0]);
    width = parseFloat(itemComputedStyle.width);
    height = parseFloat(itemComputedStyle.height);
  } else {
    var itemComputedStyle$1 = window.getComputedStyle(el.children[1]);
    var padding = parseFloat(itemComputedStyle$1.marginLeft);
    height = parseFloat(itemComputedStyle$1.height);
    width = el.children.length * (height + padding) - padding;
  }
  return { width: width, height: height };
}

/**
 * calculate and reset indicator's width, height, and ltbr.
 * @param {object} virtualRect. width and height of indicator's virtual rect box.
 * @param {object} ltbr. the user specified left, top, bottom, right pixels (without units).
 */
function _reLayout(context, virtualRect, ltbr) {
  var el = context.$el;
  var rect = _getIndicatorRect(el);
  var rectWithPx = Object.keys(rect).reduce(function (pre, key) {
    pre[key] = rect[key] + 'px';
    return pre;
  }, {});
  extend$3(el.style, rectWithPx);
  var axisMap = [{
    dir: ltbr.left || ltbr.left === 0 ? 'left' : ltbr.right || ltbr.right === 0 ? 'right' : 'left',
    scale: 'width'
  }, {
    dir: ltbr.top || ltbr.top === 0 ? 'top' : ltbr.bottom || ltbr.bottom === 0 ? 'bottom' : 'top',
    scale: 'height'
  }];
  Object.keys(axisMap).forEach(function (key) {
    var ref = axisMap[key];
    var dir = ref.dir;
    var scale = ref.scale;
    el.style[dir] = (ltbr[dir] || 0) + virtualRect[scale] / 2 - rect[scale] / 2 + 'px';
  });
}

var indicator = {
  name: 'weex-indicator',
  methods: {
    show: function show() {
      this.$el.style.visibility = 'visible';
    }
  },
  data: function data() {
    return {
      count: 0,
      active: 0
    };
  },
  render: function render(createElement) {
    var ref = this.$vnode.data.attrs || {};
    var count = ref.count;
    var active = ref.active;
    this.count = count;
    this.active = active;
    if (!this.count) {
      return;
    }
    return _render(this, createElement);
  },
  _css: _css$6
};

var indicator$1 = {
  init: function init(weex) {
    extractComponentStyle$4 = weex.extractComponentStyle;
    extend$3 = weex.utils.extend;
    extendKeys$1 = weex.utils.extendKeys;
    weex.registerComponent('indicator', indicator);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var slider = {
  init: function init(weex) {
    weex.install(slider$2);
    weex.install(neighbor);
    weex.install(indicator$1);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileOverview Impl of text component.
 *
 * Notes about the style 'height' and 'lines':
 * if the computed value of 'height' is bigger than 'lines', than the text will
 * be clipped according to the 'lines'. Otherwise, it'll be the 'height'.
 */

var _css$7 = "\n.weex-text {\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  position: relative;\n  white-space: pre-wrap;  /* not using 'pre': support auto line feed. */\n  font-size: 0.426667rem;\n  word-wrap: break-word;\n  overflow: hidden; /* it'll be clipped if the height is not high enough. */\n}\n";

/**
 * Get text special styles (lines and text-overflow).
 */
function getTextSpecStyle(ms) {
  if (ms === void 0) ms = {};

  var lines = parseInt(ms.lines) || 0;
  var overflow = ms['text-overflow'] || 'ellipsis';
  if (lines > 0) {
    return {
      overflow: 'hidden',
      'text-overflow': overflow,
      '-webkit-line-clamp': lines
    };
  }
}

function getText(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;
  var ref = weex.utils;
  var extend = ref.extend;

  return {
    name: 'weex-text',
    props: {
      lines: [Number, String],
      value: [String]
    },

    render: function render(createElement) {
      var style = extractComponentStyle(this);
      var textSpecStyle = getTextSpecStyle(style);
      return createElement('p', {
        attrs: { 'weex-type': 'text' },
        on: createEventMap(this),
        staticClass: 'weex-text weex-el',
        staticStyle: extend(style, textSpecStyle)
      }, this.$slots.default || [this.value]);
    },
    _css: _css$7
  };
}

var text = {
  init: function init(weex) {
    weex.registerComponent('text', getText(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _css$8 = "\n.weex-textarea {\n  font-size: 0.426667rem\n}\n.weex-textarea:focus {\n  outline: none;\n}\n";

function getTextarea(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;
  var ref = weex.mixins;
  var inputCommon = ref.inputCommon;
  var ref$1 = weex.utils;
  var extend = ref$1.extend;
  var mapFormEvents = ref$1.mapFormEvents;

  return {
    name: 'weex-textarea',
    mixins: [inputCommon],
    props: {
      value: String,
      placeholder: String,
      disabled: {
        type: [String, Boolean],
        default: false
      },
      autofocus: {
        type: [String, Boolean],
        default: false
      },
      rows: {
        type: [String, Number],
        default: 2
      },
      returnKeyType: String
    },

    render: function render(createElement) {
      /* istanbul ignore next */
      // if ("production" === 'development') {
      //   validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle)
      // }
      var events = extend(createEventMap(this), mapFormEvents(this));
      return createElement('html:textarea', {
        attrs: {
          'weex-type': 'textarea',
          value: this.value,
          disabled: this.disabled !== 'false' && this.disabled !== false,
          autofocus: this.autofocus !== 'false' && this.autofocus !== false,
          placeholder: this.placeholder,
          rows: this.rows,
          'return-key-type': this.returnKeyType
        },
        domProps: {
          value: this.value
        },
        on: this.createKeyboardEvent(events),
        staticClass: 'weex-textarea weex-el',
        staticStyle: extractComponentStyle(this)
      });
    },
    _css: _css$8
  };
}

var textarea = {
  init: function init(weex) {
    weex.registerComponent('textarea', getTextarea(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getVideo(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;

  return {
    name: 'weex-video',
    props: {
      src: String,
      playStatus: {
        type: String,
        default: 'pause',
        validator: function validator(value) {
          return ['play', 'pause'].indexOf(value) !== -1;
        }
      },
      autoplay: {
        type: [String, Boolean],
        default: false
      },
      autoPlay: {
        type: [String, Boolean],
        default: false
      },
      playsinline: {
        type: [String, Boolean],
        default: true
      },
      controls: {
        type: [String, Boolean],
        default: false
      }
    },

    render: function render(createElement) {
      if (this.playStatus === 'play') {
        this.$nextTick(function () {
          this.$el && this.$el.play();
        });
      } else if (this.playStatus === 'pause') {
        this.$nextTick(function () {
          this.$el && this.$el.pause();
        });
      }

      return createElement('html:video', {
        attrs: {
          'weex-type': 'video',
          autoplay: this.autoplay !== 'false' && this.autoplay !== false || this.autoPlay !== 'false' && this.autoPlay !== false,
          'webkit-playsinline': this.playsinline,
          controls: this.controls,
          src: this.src
        },
        on: createEventMap(this, ['start', 'pause', 'finish', 'fail']),
        staticClass: 'weex-video weex-el',
        staticStyle: extractComponentStyle(this)
      });
    }
  };
}

var video = {
  init: function init(weex) {
    weex.registerComponent('video', getVideo(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var _css$9 = "\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n}\n";

function getWeb(weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;
  var ref = weex.utils;
  var createEvent = ref.createEvent;

  return {
    name: 'weex-web',
    props: {
      src: String
    },
    methods: {
      // TODO: check cross-origin
      goBack: function goBack() {
        if (this.$el) {
          this.$el.contentWindow.history.back();
        }
      },
      goForward: function goForward() {
        if (this.$el) {
          this.$el.contentWindow.history.forward();
        }
      },
      reload: function reload() {
        if (this.$el) {
          this.$el.contentWindow.history.reload();
        }
      }
    },

    mounted: function mounted() {
      var this$1 = this;

      if (this.$el) {
        this.$emit('pagestart', createEvent(this.$el, 'pagestart', { url: this.src }));
        this.$el.addEventListener('load', function (event) {
          this$1.$emit('pagefinish', createEvent(this$1.$el, 'pagefinish', { url: this$1.src }));
        });
      }
    },

    render: function render(createElement) {
      /* istanbul ignore next */
      // if ("production" === 'development') {
      //   validateStyles('web', this.$vnode.data && this.$vnode.data.staticStyle)
      // }
      return createElement('iframe', {
        attrs: {
          'weex-type': 'web',
          src: this.src
        },
        on: createEventMap(this, ['error']),
        staticClass: 'weex-web weex-el',
        staticStyle: extractComponentStyle(this)
      });
    },
    _css: _css$9
  };
}

var web = {
  init: function init(weex) {
    weex.registerComponent('web', getWeb(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var components = [a, div, image$1, input, _switch, scrollable, slider, text, textarea, video, web];

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var supportGeolocation = 'geolocation' in navigator;
var errorMsg = "[h5-render]: browser doesn't support geolocation.";

var geolocation = {
  // options:
  //   - enableHighAccuracy optional, value is true or false, false by default.
  //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
  //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
  getCurrentPosition: function getCurrentPosition(successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function successCb(pos) {
      return this$1.sender.performCallback(successCbId, pos);
    };
    var errorCb = function errorCb(err) {
      return this$1.sender.performCallback(errorCbId, err);
    };
    if (supportGeolocation) {
      navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
    } else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  // options: the same with `getCurrentPosition`.
  watchPosition: function watchPosition(successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function successCb(pos) {
      return this$1.sender.performCallback(successCbId, pos, true);
    };
    var errorCb = function errorCb(err) {
      return this$1.sender.performCallback(errorCbId, err);
    };
    if (supportGeolocation) {
      var id = navigator.geolocation.watchPosition(function (pos) {
        pos.watchId = id;
        successCb(pos);
      }, errorCb, options);
    } else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  clearWatch: function clearWatch(watchId) {
    if (supportGeolocation) {
      navigator.geolocation.clearWatch(watchId);
    } else {
      console.warn(errorMsg);
    }
  }
};

var meta = {
  geolocation: [{
    name: 'getCurrentPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'watchPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'clearWatch',
    args: ['string']
  }]
};

var geolocation$1 = {
  init: function init(Weex) {
    Weex.registerApiModule('geolocation', geolocation, meta);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* global localStorage */

var supportLocalStorage = false;
try {
  supportLocalStorage = typeof localStorage !== 'undefined';
} catch (err) {
  // not support.
}

var SUCCESS = 'success';
var FAILED = 'failed';
var INVALID_PARAM = 'invalid_param';
var UNDEFINED = 'undefined';

function callFail(sender, callbackId, errorMsg) {
  sender.performCallback(callbackId, {
    result: FAILED,
    data: errorMsg || UNDEFINED
  });
}

function callNotSupportFail(sender, callbackId) {
  sender.performCallback(callbackId, {
    result: FAILED,
    data: 'localStorage is disabled or not supported.'
  });
}

var storage = {

  /**
   * When passed a key name and value, will add that key to the storage,
   * or update that key's value if it already exists.
   * @param {string} key
   * @param {string} value not null nor undifined，but 0 works.
   * @param {function} callbackId
   */
  setItem: function setItem(key, value, callbackId) {
    var sender = this.sender;
    if (!supportLocalStorage) {
      return callNotSupportFail(sender, callbackId);
    }
    if (!key || !value && value !== 0) {
      sender.performCallback(callbackId, {
        result: 'failed',
        data: INVALID_PARAM
      });
      return;
    }
    try {
      localStorage.setItem(key, value);
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: UNDEFINED
      });
    } catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      callFail(sender, callbackId);
    }
  },

  /**
   * When passed a key name, will return that key's value.
   * @param {string} key
   * @param {function} callbackId
   */
  getItem: function getItem(key, callbackId) {
    var sender = this.sender;
    if (!supportLocalStorage) {
      return callNotSupportFail(sender, callbackId);
    }
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return;
    }
    try {
      var val = localStorage.getItem(key);
      sender.performCallback(callbackId, {
        result: val ? SUCCESS : FAILED,
        data: val || UNDEFINED
      });
    } catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      callFail(sender, callbackId);
    }
  },

  /**
   *When passed a key name, will remove that key from the storage.
   * @param {string} key
   * @param {function} callbackId
   */
  removeItem: function removeItem(key, callbackId) {
    var sender = this.sender;
    if (!supportLocalStorage) {
      return callNotSupportFail(sender, callbackId);
    }
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return;
    }
    try {
      localStorage.removeItem(key);
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: UNDEFINED
      });
    } catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      callFail(sender, callbackId);
    }
  },

  /**
   * Returns an integer representing the number of data items stored in the Storage object.
   * @param {function} callbackId
   */
  length: function length(callbackId) {
    var sender = this.sender;
    if (!supportLocalStorage) {
      return callNotSupportFail(sender, callbackId);
    }
    try {
      var len = localStorage.length;
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: len
      });
    } catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      callFail(sender, callbackId);
    }
  },

  /**
   * Returns an array that contains all keys stored in Storage object.
   * @param {function} callbackId
   */
  getAllKeys: function getAllKeys(callbackId) {
    var sender = this.sender;
    if (!supportLocalStorage) {
      return callNotSupportFail(sender, callbackId);
    }
    try {
      var _arr = [];
      for (var i = 0; i < localStorage.length; i++) {
        _arr.push(localStorage.key(i));
      }
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: _arr
      });
    } catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      callFail(sender, callbackId);
    }
  }
};

var meta$1 = {
  storage: [{
    name: 'setItem',
    args: ['string', 'string', 'function']
  }, {
    name: 'getItem',
    args: ['string', 'function']
  }, {
    name: 'removeItem',
    args: ['string', 'function']
  }, {
    name: 'length',
    args: ['function']
  }, {
    name: 'getAllKeys',
    args: ['function']
  }]
};

var storage$1 = {
  init: function init(Weex) {
    Weex.registerApiModule('storage', storage, meta$1);
  }
};

typeof window === 'undefined' && (window = { ctrl: {}, lib: {} });!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function (a, b) {
  function c(a) {
    var b = {};Object.defineProperty(this, "params", { set: function set(a) {
        if ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a))) {
          for (var c in b) {
            delete b[c];
          }for (var c in a) {
            b[c] = a[c];
          }
        }
      }, get: function get() {
        return b;
      }, enumerable: !0 }), Object.defineProperty(this, "search", { set: function set(a) {
        if ("string" == typeof a) {
          0 === a.indexOf("?") && (a = a.substr(1));var c = a.split("&");for (var d in b) {
            delete b[d];
          }for (var e = 0; e < c.length; e++) {
            var f = c[e].split("=");if (void 0 !== f[1] && (f[1] = f[1].toString()), f[0]) {
              try {
                b[decodeURIComponent(f[0])] = decodeURIComponent(f[1]);
              } catch (g) {
                b[f[0]] = f[1];
              }
            }
          }
        }
      }, get: function get() {
        var a = [];for (var c in b) {
          if (void 0 !== b[c]) {
            if ("" !== b[c]) {
              try {
                a.push(encodeURIComponent(c) + "=" + encodeURIComponent(b[c]));
              } catch (d) {
                a.push(c + "=" + b[c]);
              }
            } else {
              try {
                a.push(encodeURIComponent(c));
              } catch (d) {
                a.push(c);
              }
            }
          }
        }return a.length ? "?" + a.join("&") : "";
      }, enumerable: !0 });var c;Object.defineProperty(this, "hash", { set: function set(a) {
        "string" == typeof a && (a && a.indexOf("#") < 0 && (a = "#" + a), c = a || "");
      }, get: function get() {
        return c;
      }, enumerable: !0 }), this.set = function (a) {
      a = a || "";var b;if (!(b = a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i")))) {
        throw new Error("Wrong uri scheme.");
      }this.protocol = b[1] || ("object" == (typeof location === 'undefined' ? 'undefined' : _typeof(location)) ? location.protocol : ""), this.username = b[2] || "", this.password = b[3] || "", this.hostname = this.host = b[4], this.port = b[5] || "", this.pathname = b[6] || "/", this.search = b[7] || "", this.hash = b[8] || "", this.origin = this.protocol + "//" + this.hostname;
    }, this.toString = function () {
      var a = this.protocol + "//";return this.username && (a += this.username, this.password && (a += ":" + this.password), a += "@"), a += this.host, this.port && "80" !== this.port && (a += ":" + this.port), this.pathname && (a += this.pathname), this.search && (a += this.search), this.hash && (a += this.hash), a;
    }, a && this.set(a.toString());
  }b.httpurl = function (a) {
    return new c(a);
  };
}(window, window.lib || (window.lib = {}));

var index$5 = function index$5(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$2(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var index$7 = shouldUseNative() ? Object.assign : function (target, source) {
  var arguments$1 = arguments;

  var from;
  var to = toObject$2(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments$1[s]);

    for (var key in from) {
      if (hasOwnProperty$1.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

var strictUriEncode = index$5;
var objectAssign = index$7;

function encoderForArrayFormat(opts) {
  switch (opts.arrayFormat) {
    case 'index':
      return function (key, value, index) {
        return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
      };

    case 'bracket':
      return function (key, value) {
        return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
      };

    default:
      return function (key, value) {
        return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
      };
  }
}

function parserForArrayFormat(opts) {
  var result;

  switch (opts.arrayFormat) {
    case 'index':
      return function (key, value, accumulator) {
        result = /\[(\d*)\]$/.exec(key);

        key = key.replace(/\[\d*\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case 'bracket':
      return function (key, value, accumulator) {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        } else if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };

    default:
      return function (key, value, accumulator) {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function encode(value, opts) {
  if (opts.encode) {
    return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }

  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  } else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
    return keysSorter(Object.keys(input)).sort(function (a, b) {
      return Number(a) - Number(b);
    }).map(function (key) {
      return input[key];
    });
  }

  return input;
}

var extract = function extract(str) {
  return str.split('?')[1] || '';
};

var parse = function parse(str, opts) {
  opts = objectAssign({ arrayFormat: 'none' }, opts);

  var formatter = parserForArrayFormat(opts);

  // Create an object with no prototype
  // https://github.com/sindresorhus/query-string/issues/47
  var ret = Object.create(null);

  if (typeof str !== 'string') {
    return ret;
  }

  str = str.trim().replace(/^(\?|#|&)/, '');

  if (!str) {
    return ret;
  }

  str.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    // Firefox (pre 40) decodes `%3D` to `=`
    // https://github.com/sindresorhus/query-string/pull/37
    var key = parts.shift();
    var val = parts.length > 0 ? parts.join('=') : undefined;

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : decodeURIComponent(val);

    formatter(decodeURIComponent(key), val, ret);
  });

  return Object.keys(ret).sort().reduce(function (result, key) {
    var val = ret[key];
    if (Boolean(val) && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val)) {
      // Sort object keys, not values
      result[key] = keysSorter(val);
    } else {
      result[key] = val;
    }

    return result;
  }, Object.create(null));
};

var stringify = function stringify(obj, opts) {
  var defaults = {
    encode: true,
    strict: true,
    arrayFormat: 'none'
  };

  opts = objectAssign(defaults, opts);

  var formatter = encoderForArrayFormat(opts);

  return obj ? Object.keys(obj).sort().map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key, opts);
    }

    if (Array.isArray(val)) {
      var result = [];

      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }

        result.push(formatter(key, val2, result.length));
      });

      return result.join('&');
    }

    return encode(key, opts) + '=' + encode(val, opts);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : '';
};

var index$4 = {
  extract: extract,
  parse: parse,
  stringify: stringify
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* global lib, XMLHttpRequest */
/* deps: httpurl */

var utils$1;

var jsonpCnt = 0;
var ERROR_STATE = -1;

function _jsonp(config, callback, progressCallback) {
  var cbName = config.jsonpCallbackName || 'jsonp_' + ++jsonpCnt;
  var url;

  if (!config.url) {
    console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
  }

  global[cbName] = function (cb) {
    return function (response) {
      callback({
        status: 200,
        ok: true,
        statusText: 'OK',
        data: response
      });
      delete global[cb];
    };
  }(cbName);

  var script = document.createElement('script');
  try {
    url = lib.httpurl(config.url);
  } catch (err) {
    console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: ' + config.url);
  }
  url.params.callback = cbName;
  script.type = 'text/javascript';
  script.src = url.toString();
  // script.onerror is not working on IE or safari.
  // but they are not considered here.
  script.onerror = function (cb) {
    return function (err) {
      console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
      callback({
        status: ERROR_STATE,
        ok: false,
        statusText: '',
        data: ''
      });
      delete global[cb];
    };
  }(cbName);
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(script, null);
}

function _xhr(config, callback, progressCallback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = config.type;
  xhr.open(config.method, config.url, true);

  // cors cookie support
  if (config.withCredentials === true) {
    xhr.withCredentials = true;
  }

  var headers = config.headers || {};
  for (var k in headers) {
    xhr.setRequestHeader(k, headers[k]);
  }

  xhr.onload = function (res) {
    callback({
      status: xhr.status,
      ok: xhr.status >= 200 && xhr.status < 300,
      statusText: xhr.statusText,
      data: xhr.response,
      headers: xhr.getAllResponseHeaders().split('\n').reduce(function (obj, headerStr) {
        var headerArr = headerStr.match(/(.+): (.+)/);
        if (headerArr) {
          obj[headerArr[1]] = headerArr[2];
        }
        return obj;
      }, {})
    });
  };

  if (progressCallback) {
    xhr.onprogress = function (e) {
      progressCallback({
        readyState: xhr.readyState,
        status: xhr.status,
        length: e.loaded,
        total: e.total,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders().split('\n').reduce(function (obj, headerStr) {
          var headerArr = headerStr.match(/(.+): (.+)/);
          if (headerArr) {
            obj[headerArr[1]] = headerArr[2];
          }
          return obj;
        }, {})
      });
    };
  }

  xhr.onerror = function (err) {
    console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
    callback({
      status: ERROR_STATE,
      ok: false,
      statusText: '',
      data: ''
    });
  };

  xhr.send(config.body || null);
}

var stream = {

  /**
   * sendHttp
   * @deprecated
   * Note: This API is deprecated. Please use stream.fetch instead.
   * send a http request through XHR.
   * @param  {obj} params
   *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
   *  - url: url requested
   * @param  {string} callbackId
   */
  sendHttp: function sendHttp(param, callbackId) {
    if (typeof param === 'string') {
      try {
        param = JSON.parse(param);
      } catch (e) {
        return;
      }
    }
    if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) !== 'object' || !param.url) {
      return console.error('[h5-render] invalid config or invalid config.url for sendHttp API');
    }

    var sender = this.sender;
    var method = param.method || 'GET';
    var xhr = new XMLHttpRequest();
    xhr.open(method, param.url, true);
    xhr.onload = function () {
      sender.performCallback(callbackId, this.responseText);
    };
    xhr.onerror = function (error) {
      return console.error('[h5-render] unexpected error in sendHttp API', error);
      // sender.performCallback(
      //   callbackId,
      //   new Error('unexpected error in sendHttp API')
      // )
    };
    xhr.send();
  },

  /**
   * fetch
   * use stream.fetch to request for a json file, a plain text file or
   * a arraybuffer for a file stream. (You can use Blob and FileReader
   * API implemented by most modern browsers to read a arraybuffer.)
   * @param  {object} options config options
   *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
   *   - headers {obj}
   *   - url {string}
   *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
   *   - withCredentials {boolean}
   *   - body
   *   - type {string} 'json' | 'jsonp' | 'text'
   * @param  {string} callbackId
   * @param  {string} progressCallbackId
   */
  fetch: function fetch(options, callbackId, progressCallbackId) {
    var DEFAULT_METHOD = 'GET';
    var DEFAULT_MODE = 'cors';
    var DEFAULT_TYPE = 'text';

    var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
    var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
    var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

    // const fallback = false  // fallback from 'fetch' API to XHR.
    var sender = this.sender;

    var config = utils$1.extend({}, options);

    // validate options.method
    if (typeof config.method === 'undefined') {
      config.method = DEFAULT_METHOD;
      console.warn('[h5-render] options.method for \'fetch\' API has been set to ' + 'default value \'' + config.method + '\'');
    } else if (methodOptions.indexOf((config.method + '').toUpperCase()) === -1) {
      return console.error('[h5-render] options.method \'' + config.method + '\' for \'fetch\' API should be one of ' + methodOptions + '.');
    }

    // validate options.url
    if (!config.url) {
      return console.error('[h5-render] options.url should be set for \'fetch\' API.');
    }

    // validate body content for method 'GET'.
    if (config.method.toUpperCase() === 'GET') {
      var body = config.body;
      if (utils$1.isPlainObject(body)) {
        body = index$4.stringify(body);
      }
      var url = config.url;
      var hashIdx = url.indexOf('#');
      hashIdx <= -1 && (hashIdx = url.length);
      var hash = url.substr(hashIdx);
      if (hash && hash[0] === '#') {
        hash = hash.substr(1);
      }
      url = url.substring(0, hashIdx);
      if (body) {
        url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body;
      }
      url += '#' + hash;
      config.url = url;
    }

    // validate options.mode
    if (typeof config.mode === 'undefined') {
      config.mode = DEFAULT_MODE;
    } else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.mode \'' + config.mode + '\' for \'fetch\' API should be one of ' + modeOptions + '.');
    }

    // validate options.type
    if (typeof config.type === 'undefined') {
      config.type = DEFAULT_TYPE;
      console.warn('[h5-render] options.type for \'fetch\' API has been set to ' + 'default value \'' + config.type + '\'.');
    } else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.type \'' + config.type + '\' for \'fetch\' API should be one of ' + typeOptions + '.');
    }

    // validate options.headers
    config.headers = config.headers || {};
    if (!utils$1.isPlainObject(config.headers)) {
      return console.error('[h5-render] options.headers should be a plain object');
    }

    // validate options.timeout
    config.timeout = parseInt(config.timeout, 10) || 2500;

    var _callArgs = [config, function (res) {
      sender.performCallback(callbackId, res);
    }];
    if (progressCallbackId) {
      _callArgs.push(function (res) {
        // Set 'keepAlive' to true for sending continuous callbacks
        sender.performCallback(progressCallbackId, res, true);
      });
    }

    if (config.type === 'jsonp') {
      _jsonp.apply(this, _callArgs);
    } else {
      _xhr.apply(this, _callArgs);
    }
  }

};

var meta$2 = {
  stream: [{
    name: 'sendHttp',
    args: ['object', 'function']
  }, {
    name: 'fetch',
    args: ['object', 'function', 'function']
  }]
};

var stream$1 = {
  init: function init(Weex) {
    utils$1 = Weex.utils;
    Weex.registerApiModule('stream', stream, meta$2);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**

AUCTION:
taskQueue
Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.

works in Chrome Firefox Opera. but not in Safari.
@see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility

Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.

So look out your app behavior, when downgrade to html5 render.
Any idea is welcome.
**/

var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

var clipboard = {

  getString: function getString(callbackId) {
    // not supported in html5
    console.log('clipboard.getString() is not supported now.');
  },

  setString: function setString(text) {
    // not support safari
    if (typeof text === 'string' && text !== '' && document.execCommand) {
      var tempInput = element();
      tempInput.value = text;

      tempInput.select();
      document.execCommand('copy');
      // var out = document.execCommand('copy');
      // console.log("execCommand out is " + out);
      tempInput.value = '';
      tempInput.blur();
    } else {
      console.log('only support string input now');
    }
  }

};

function element() {
  var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
  if (!tempInput) {
    tempInput = document.createElement('input');
    tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
    tempInput.style.cssText = 'height:1px;width:1px;border:none;';
    // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
    document.body.appendChild(tempInput);
  }
  return tempInput;
}

var meta$3 = {
  clipboard: [{
    name: 'getString',
    args: ['function']
  }, {
    name: 'setString',
    args: ['string']
  }]
};

var clipboard$1 = {
  init: function init(Weex) {
    Weex.registerApiModule('clipboard', clipboard, meta$3);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var event$1 = {
  /**
   * openUrl
   * @param  {string} url
   */
  openURL: function openURL(url) {
    location.href = url;
  }

};

var meta$4 = {
  event: [{
    name: 'openURL',
    args: ['string']
  }]
};

var eventModule = {
  init: function init(Weex) {
    Weex.registerApiModule('event', event$1, meta$4);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var utils$2 = {};
var endEvent;
var styleName;

var EVENT_NAME_MAP = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'mozTransitionEnd',
  OTransition: 'oTransitionEnd',
  msTransition: 'MSTransitionEnd'
};

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;
  for (var name in EVENT_NAME_MAP) {
    if (name in style) {
      endEvent = EVENT_NAME_MAP[name];
      styleName = name;
      break;
    }
  }
}

detectEvents();

function transitionOnce(vnode, config, callback) {
  var nextFrame = utils$2.nextFrame;
  var toCSSText = utils$2.toCSSText;
  var autoPrefix = utils$2.autoPrefix;
  var camelizeKeys = utils$2.camelizeKeys;
  var normalizeStyle = utils$2.normalizeStyle;
  var isArray = utils$2.isArray;

  if (isArray(vnode)) {
    vnode = vnode[0];
  }

  var duration = config.duration || 0; // ms
  var timing = config.timingFunction || 'linear';
  var delay = config.delay || 0; // ms

  // TODO: parse transition properties
  var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

  var dom = vnode.$el;
  // trigger image lazyloading by force.
  dom && weex.utils.fireLazyload(dom, true);

  var transitionEndHandler = function transitionEndHandler(event) {
    event && event.stopPropagation();
    if (endEvent) {
      dom.removeEventListener(endEvent, transitionEndHandler);
      dom.style[styleName] = '';
    }
    callback();
  };
  if (endEvent) {
    dom.style[styleName] = transitionValue;
    dom.addEventListener(endEvent, transitionEndHandler);
  }
  nextFrame(function () {
    dom.style.cssText += toCSSText(autoPrefix(normalizeStyle(camelizeKeys(config.styles))) || {});
  });
}

var animation = {
  /**
   * transition
   * @param  {String} vnode
   * @param  {Object} config
   * @param  {String} callback
   */
  transition: function transition(vnode, config, callback) {
    if (!config.styles) {
      return;
    }
    return transitionOnce(vnode, config, function () {
      callback && callback();
    });
  }
};

var animation$1 = {
  init: function init(weex) {
    var extendKeys = weex.utils.extendKeys;
    extendKeys(utils$2, weex.utils, ['nextFrame', 'toCSSText', 'autoPrefix', 'camelizeKeys', 'normalizeStyle', 'isArray']);

    weex.registerModule('animation', animation);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var utils$3 = {};

function getParentScroller$1(vnode) {
  if (!vnode) {
    return null;
  }
  var vm = vnode.$el ? vnode : vnode.elm ? vnode.componentInstance || vnode.context : null;
  if (!vm) {
    return null;
  }
  var type = vm.$el && vm.$el.getAttribute('weex-type');
  if (config.scrollableTypes.indexOf(type) > -1) {
    return vm;
  }
  return getParentScroller$1(vm.$parent);
}

function now() {
  var now = window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now;
  return now();
}

function scrollElement(dSuffix, position) {
  if (this === document.body || this === window && window.scrollTo) {
    return window.scrollTo(0, position);
  }
  this["scroll" + dSuffix] = position;
}
/**
 * self invoked function that, given a context, steps through scrolling
 * @method step
 * @param {Object} context
 */
function step$1(context) {
  // call method again on next available frame
  context.frame = window.requestAnimationFrame(step$1.bind(window, context));
  var time = now();
  var elapsed = (time - context.startTime) / 468;
  // avoid elapsed times higher than one
  elapsed = elapsed > 1 ? 1 : elapsed;
  // apply easing to elapsed time
  var value = ease(elapsed);
  var currentPosition = context.startPosition + (context.position - context.startPosition) * value;
  context.method.call(context.scrollable, context.dSuffix, currentPosition);
  // return when end points have been reached
  /**
    * NOTE: should use ~~ to parse position number into integer. Otherwise
    * this two float numbers maybe have a slicely little difference, which
    * will cause this function never to stop.
  */
  if (~~currentPosition === ~~context.position) {
    window.cancelAnimationFrame(context.frame);
    return;
  }
}
/**
 * returns result of applying ease math function to a number
 * @method ease
 * @param {Number} k
 * @returns {Number}
 */
function ease(k) {
  return 0.5 * (1 - Math.cos(Math.PI * k));
}
var dom = {
  /**
   * scrollToElement
   * @param  {Vnode | VComponent} vnode
   * @param  {Object} options {offset:Number}
   *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
   */
  scrollToElement: function scrollToElement(vnode, options) {
    var isArray = utils$3.isArray;
    if (isArray(vnode)) {
      vnode = vnode[0];
    }
    var scroller = getParentScroller$1(vnode);
    var scrollDirection = scroller && scroller.scrollDirection || 'vertical';
    var isWindow = !scroller;
    var ct = isWindow ? document.body : scroller.$el;
    var el = vnode.$el || vnode.elm;
    if (ct && el) {
      // if it's a list, then the listVnode.scrollDirection is undefined. just
      // assum it is the default value 'vertical'.
      var dSuffix = {
        horizontal: 'Left',
        vertical: 'Top'
      }[scrollDirection];
      var ctRect = ct.getBoundingClientRect();
      var elRect = el.getBoundingClientRect();
      /**
        * if it's a waterfall, and you want to scroll to a header, then just
        * scroll to the top.
      */
      if (scroller && scroller.weexType === 'waterfall' && scroller._headers && scroller._headers.indexOf(vnode.$vnode || vnode) > -1) {
        // it's in waterfall. just scroll to the top.
        elRect = ct.firstElementChild.getBoundingClientRect();
      }
      var dir = dSuffix.toLowerCase();
      var offset = (isWindow ? 0 : ct["scroll" + dSuffix]) + elRect[dir] - ctRect[dir];
      if (options) {
        offset += options.offset && options.offset * weex.config.env.scale || 0;
        // offset *= weex.config.env.scale /* adapt offset to different screen scales. */
      } else {}
      if (options && options.animated === false) {
        return scrollElement.call(ct, dSuffix, offset);
      }
      step$1({
        scrollable: ct,
        startTime: now(),
        frame: null,
        startPosition: isWindow ? window.pageYOffset : ct["scroll" + dSuffix],
        position: offset,
        method: scrollElement,
        dSuffix: dSuffix
      });
    }
  },
  /**
   * getComponentRect
   * @param {String} vnode
   * @param {Function} callback
   */
  getComponentRect: function getComponentRect(vnode, callback) {
    var isArray = utils$3.isArray;
    if (isArray(vnode)) {
      vnode = vnode[0];
    }
    var scale = window.weex.config.env.scale;
    var info = {
      result: false
    };
    var rectKeys = ['width', 'height', 'top', 'bottom', 'left', 'right'];

    function recalc(rect) {
      var res = {};
      rectKeys.forEach(function (key) {
        if (rect[key]) {
          res[key] = rect[key] / scale;
        }
      });
      return res;
    }
    if (vnode && vnode === 'viewport') {
      info.result = true;
      info.size = recalc({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        top: 0,
        left: 0,
        right: document.documentElement.clientWidth,
        bottom: document.documentElement.clientHeight
      });
      info.contentSize = recalc({
        width: document.documentElement.offsetWidth,
        height: document.documentElement.offsetHeight
      });
    } else if (vnode && vnode.$el) {
      info.result = true;
      info.size = recalc(vnode.$el.getBoundingClientRect());
      if (vnode.$refs.inner) {
        info.contentSize = recalc({
          width: vnode.$refs.inner.offsetWidth,
          height: vnode.$refs.inner.offsetHeight
        });
      } else {
        info.contentSize = recalc({
          width: vnode.$el.offsetWidth,
          height: vnode.$el.offsetHeight
        });
      }
    }
    var message = info.result ? info : {
      result: false,
      errMsg: 'Illegal parameter'
    };
    callback && callback(message);
    return message;
  },
  /**
   * for adding fontFace
   * @param {string} key fontFace
   * @param {object} styles rules
   */
  addRule: function addRule(key, styles) {
    var camelToKebab = utils$3.camelToKebab;
    var appendCss = utils$3.appendCss;
    key = camelToKebab(key);
    var stylesText = '';
    for (var k in styles) {
      if (styles.hasOwnProperty(k)) {
        stylesText += camelToKebab(k) + ':' + styles[k] + ';';
      }
    }
    var styleText = "@" + key + "{" + stylesText + "}";
    appendCss(styleText, 'dom-added-rules');
  }
};
var dom$1 = {
  init: function init(weex) {
    var extendKeys = weex.utils.extendKeys;
    extendKeys(utils$3, weex.utils, ['camelToKebab', 'appendCss', 'isArray']);
    weex.registerModule('dom', dom);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * globalEvent API:
 * @doc http://weex.apache.org/cn/references/modules/globalevent.html
 */
// track varies kinds of events and listeners.
var handlerTraker = {};

var globalEvent = {
  /**
   * addEventListener
   * NOTE: one callback can only be bound to the same event once. Bind a callback twice doesn't
   *  mean it will be called twice when the event fired once.
   * @param {string} evt - the event name to add a listener on.
   */
  addEventListener: function addEventListener(evt, callback) {
    if (!callback) {
      return;
    }
    var handlers = handlerTraker[evt];
    if (!handlers) {
      handlers = handlerTraker[evt] = [];
    }
    var len = handlers.length;
    for (var i = 0; i < len; i++) {
      if (handlers[i] === callback) {
        // this callback is already bound. no need to bind it again.
        return;
      }
    }
    handlers.push(callback);
    document.addEventListener(evt, callback);
  },

  /**
   * removeEventListener
   * NOTE: remove all the event handlers for the specified event type.
   * @param {string} evt - the event name to remove a listener from.
   */
  removeEventListener: function removeEventListener(evt) {
    var handlers = handlerTraker[evt];
    if (!handlers) {
      // evt handlers has been already removed.
      return;
    }
    handlers.forEach(function (cb) {
      return document.removeEventListener(evt, cb);
    });
    delete handlerTraker[evt];
  }
};

var globalEvent$1 = {
  init: function init(weex) {
    weex.registerModule('globalEvent', globalEvent);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var queue$1 = [];
var isProcessing = false;
var toastWin;
var TOAST_WIN_CLASS_NAME = 'weex-toast';
var TOAST_TRANSITION_DURATION = 0.4;

var DEFAULT_DURATION = 0.8;

function showToastWindow(msg, callback) {
  if (!toastWin) {
    toastWin = document.createElement('div');
    toastWin.classList.add(TOAST_WIN_CLASS_NAME);
    toastWin.classList.add('hide');
    document.body.appendChild(toastWin);
  }
  toastWin.textContent = msg;
  setTimeout(function () {
    toastWin.classList.remove('hide');
    callback && callback();
  }, 16);
}

function hideToastWindow(callback) {
  if (!toastWin) {
    return;
  }
  toastWin.classList.add('hide');
  setTimeout(function () {
    callback && callback();
  }, TOAST_TRANSITION_DURATION * 1000);
}

var _toast = {
  push: function push(msg, duration) {
    queue$1.push({
      msg: msg,
      duration: duration || DEFAULT_DURATION
    });
    this.show();
  },

  show: function show() {
    var that = this;

    // All messages had been toasted already, so remove the toast window,
    if (!queue$1.length) {
      toastWin && toastWin.parentNode.removeChild(toastWin);
      toastWin = null;
      return;
    }

    // the previous toast is not ended yet.
    if (isProcessing) {
      return;
    }
    isProcessing = true;

    var toastInfo = queue$1.shift();
    showToastWindow(toastInfo.msg, function () {
      setTimeout(function () {
        hideToastWindow(function () {
          isProcessing = false;
          that.show();
        });
      }, toastInfo.duration * 1000);
    });
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// there will be only one instance of modal.
var MODAL_WRAP_CLASS = 'weex-modal-wrap';
var MODAL_NODE_CLASS = 'weex-modal-node';

function Modal() {
  this.wrap = document.querySelector(MODAL_WRAP_CLASS);
  this.node = document.querySelector(MODAL_NODE_CLASS);
  if (!this.wrap) {
    this.createWrap();
  }
  if (!this.node) {
    this.createNode();
  }
  this.clearNode();
  this.createNodeContent();
  this.bindEvents();
}

Modal.prototype = {

  show: function show() {
    this.wrap.style.display = 'block';
    this.node.classList.remove('hide');
  },

  destroy: function destroy() {
    document.body.removeChild(this.wrap);
    document.body.removeChild(this.node);
    this.wrap = null;
    this.node = null;
  },

  createWrap: function createWrap() {
    this.wrap = document.createElement('div');
    this.wrap.className = MODAL_WRAP_CLASS;
    document.body.appendChild(this.wrap);
  },

  createNode: function createNode() {
    this.node = document.createElement('div');
    this.node.classList.add(MODAL_NODE_CLASS, 'hide');
    document.body.appendChild(this.node);
  },

  clearNode: function clearNode() {
    this.node.innerHTML = '';
  },

  createNodeContent: function createNodeContent() {

    // do nothing.
    // child classes can override this method.
  },

  bindEvents: function bindEvents() {
    this.wrap.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var CONTENT_CLASS = 'content';
var MSG_CLASS = 'content-msg';
var BUTTON_GROUP_CLASS = 'btn-group';
var BUTTON_CLASS = 'btn';

function Alert(config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  Modal.call(this);
  this.node.classList.add('weex-alert');
}

Alert.prototype = Object.create(Modal.prototype);

Alert.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS);
  this.node.appendChild(buttonGroup);
  var button = document.createElement('div');
  button.classList.add(BUTTON_CLASS, 'alert-ok');
  button.appendChild(document.createTextNode(this.okTitle));
  buttonGroup.appendChild(button);
};

Alert.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var button = this.node.querySelector('.' + BUTTON_CLASS);
  button.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback();
  }.bind(this));
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var CONTENT_CLASS$1 = 'content';
var MSG_CLASS$1 = 'content-msg';
var BUTTON_GROUP_CLASS$1 = 'btn-group';
var BUTTON_CLASS$1 = 'btn';

function Confirm(config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-confirm');
}

Confirm.prototype = Object.create(Modal.prototype);

Confirm.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$1);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$1);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
  this.node.appendChild(buttonGroup);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Confirm.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
  btnOk.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.okTitle);
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.cancelTitle);
  }.bind(this));
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var CONTENT_CLASS$2 = 'content';
var MSG_CLASS$2 = 'content-msg';
var BUTTON_GROUP_CLASS$2 = 'btn-group';
var BUTTON_CLASS$2 = 'btn';
var INPUT_WRAP_CLASS = 'input-wrap';
var INPUT_CLASS = 'input';

function Prompt(config) {
  this.msg = config.message || '';
  this.defaultMsg = config.default || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-prompt');
}

Prompt.prototype = Object.create(Modal.prototype);

Prompt.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$2);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$2);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var inputWrap = document.createElement('div');
  inputWrap.classList.add(INPUT_WRAP_CLASS);
  content.appendChild(inputWrap);
  var input = document.createElement('input');
  input.classList.add(INPUT_CLASS);
  input.type = 'text';
  input.autofocus = true;
  input.placeholder = this.defaultMsg;
  inputWrap.appendChild(input);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Prompt.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
  var that = this;
  btnOk.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.okTitle,
      data: val
    });
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.cancelTitle,
      data: val
    });
  }.bind(this));
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _css$10 = "\n.weex-toast {\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  z-index: 1999999999;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 50%;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.7;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 0.013333rem solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.weex-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.426667rem;\n  border: 0.013333rem solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n";

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// TODO: rewrite the modal styles
var modal = {

  // duration: default is 0.8 seconds.
  toast: function toast(config) {
    _toast.push(config.message, config.duration);
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - callback
  alert: function alert(config, callback) {
    config.callback = function () {
      callback && callback();
    };
    new Alert(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  confirm: function confirm(config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Confirm(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  prompt: function prompt(config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Prompt(config).show();
  }
};

var modal$1 = {
  init: function init(Weex) {
    Weex.utils.appendCss(_css$10, 'weex-mud-modal');
    Weex.registerModule('modal', modal);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Navigator module
 */
var navigatorModule = {
  push: function push(config, callback) {
    window.location.href = config.url;
    callback && callback();
  },

  pop: function pop(config, callback) {
    window.history.back();
    callback && callback();
  }
};

var navigatorModule$1 = {
  init: function init(weex) {
    weex.registerModule('navigator', navigatorModule);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Webview module
 */
var isArray$2;

var webview = {
  goBack: function goBack(vnode) {
    if (isArray$2(vnode)) {
      vnode = vnode[0];
    }
    if (vnode && typeof vnode.goBack === 'function') {
      vnode.goBack();
    }
  },
  goForward: function goForward(vnode) {
    if (isArray$2(vnode)) {
      vnode = vnode[0];
    }
    if (vnode && typeof vnode.goForward === 'function') {
      vnode.goForward();
    }
  },
  reload: function reload(vnode) {
    if (isArray$2(vnode)) {
      vnode = vnode[0];
    }
    if (vnode && typeof vnode.reload === 'function') {
      vnode.reload();
    }
  }
};

var webview$1 = {
  init: function init(weex) {
    isArray$2 = weex.utils.isArray;
    weex.registerModule('webview', webview);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * websocket module
 */
/*global WebSocket*/
var websocket$1 = function () {
  var registerListeners = ['onopen', 'onmessage', 'onerror', 'onclose'];
  var ws = {
    INSTANCE: null,
    WebSocket: function (_WebSocket) {
      function WebSocket(_x, _x2) {
        return _WebSocket.apply(this, arguments);
      }

      WebSocket.toString = function () {
        return _WebSocket.toString();
      };

      return WebSocket;
    }(function (url, protocol) {
      if (!url) {
        ws.INSTANCE = null;
        return;
      }
      if (!protocol) {
        ws.INSTANCE = new WebSocket(url);
      } else {
        ws.INSTANCE = new WebSocket(url, protocol);
      }
      return ws.INSTANCE;
    }),
    send: function send(messages) {
      ws.INSTANCE && ws.INSTANCE.send(messages);
    },
    close: function close() {
      ws.INSTANCE && ws.INSTANCE.close();
    }
  };
  var loop = function loop(i) {
    if (registerListeners.hasOwnProperty(i)) {
      Object.defineProperty(ws, registerListeners[i], {
        get: function get() {
          return ws.INSTANCE && ws.INSTANCE[registerListeners[i]];
        },
        set: function set(fn) {
          if (ws.INSTANCE) {
            ws.INSTANCE[registerListeners[i]] = fn;
          }
        }
      });
    }
  };

  for (var i in registerListeners) {
    loop(i);
  }return ws;
}();

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// TODO: rewrite the module meta
var websocket = {
  init: function init(Weex) {
    Weex.registerModule('webSocket', websocket$1, { mountType: 'full' });
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var meta$5 = {
  /**
   * setViewport
   * Changing viewport width at runtime is not supported. Please use weex-viewport meta
   * tag to specify your viewport in your html file.
   */
  setViewport: function setViewport(options) {
    console.warn("[vue-render] meta.setViewport doesn't works as expected in web platform." + " Please use <meta name=\"weex-viewport\" content=\"xxx\"> to specify your viewport width.");
  }
};

var meta$6 = {
  init: function init(weex) {
    weex.registerModule('meta', meta$5);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// modules from render/browesr (legacy modules)

// custom modules
var modules$1 = [geolocation$1, storage$1, stream$1, clipboard$1, eventModule, modal$1, websocket, animation$1, dom$1, globalEvent$1, navigatorModule$1, webview$1, meta$6];

var preInit = weex.init;

weex.init = function () {
  preInit.apply(weex, arguments);
  var plugins = components.concat(modules$1);

  plugins.forEach(function (plugin) {
    weex.install(plugin);
  });
};

if (global.Vue) {
  weex.init(global.Vue);
}

module.exports = weex;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(81)
}
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(84),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-44f5e242",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\东风日产\\poc\\awesome-project\\src\\views\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44f5e242", Component.options)
  } else {
    hotAPI.reload("data-v-44f5e242", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("9c50f55c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44f5e242\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44f5e242\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.header[data-v-44f5e242] {\r\n      width: 750px;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n      background-color: #ffffff;\r\n      padding-bottom: 20px;\r\n      padding-left: 32px;\r\n      padding-right: 32px;\r\n      border-bottom-width: 1px;\r\n      border-color: #ffffff;\r\n      border-style: solid;\n}\n.hearderimg[data-v-44f5e242] {\r\n    width: 35px;\r\n    height: 35px;\r\n    -ms-flex-pack: end;\r\n        justify-content: flex-end;\n}\n.hello[data-v-44f5e242] {\r\n    font-weight:bold;\r\n    color: #333333;\r\n    margin-top: 30px;\r\n    font-size: 50px;\r\n    padding-left: 40px;\n}\n.welcome[data-v-44f5e242] {\r\n    color: #333333;\r\n    font-size: 40px;\r\n    padding-left: 40px;\r\n    margin-bottom: 22px;\r\n    border-bottom-color: #f5f5fa;\r\n    border-top-color: #f5f5fa;\r\n    border-left-color: #f5f5fa;\r\n    border-right-color: #f5f5fa;\r\n    margin-top: 32px;\n}\n.lgimg[data-v-44f5e242] {\r\n    width: 750px;\r\n    height: 265px;\r\n    margin-bottom: 50px;\n}\n.login[data-v-44f5e242]{\r\n    width: 680px;\r\n    height: 100px;\r\n    margin-left: 35px;\r\n    border-bottom-color: #f5f5fa;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 3px;\n}\n.background[data-v-44f5e242] {\r\n    background-color: #ffffff;\r\n    height: 1250px;\n}\n.btn[data-v-44f5e242] {\r\n  color: #ffffff;\r\n  background-color: #C3001B;\r\n  width: 680px;\r\n  margin-left: 35px;\r\n  text-align: center;\r\n  font-size: 40px;\r\n  border-radius: 12px;\r\n  height: 90px;\r\n  padding-top: 15px;\n}\n.logbtn[data-v-44f5e242] {\r\n  margin-top: 75px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fixed = __webpack_require__(10);

var _fixed2 = _interopRequireDefault(_fixed);

var _navigator = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    data: function data() {
        return {
            leftIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAc9JREFUWAm1lwFOwyAUhmE7jiYex62bnsTEmXgS3Tq9jSZ6nBX5Wd/ySqF9DxnJAqXv/f8HNDCMYaVt2xv2eJVm7LEgl/fDcXdy9nu/P95TX+0a2vCAF2lbNNDhnHtG21p7ss5sttv1J55rFZg7aw7eZwlN7/PysFnvLKYEVPSif1kVIjYnj6V1d4umaX4xYowcL1AAA9oay5Ezh2fwPlsaMxVYuhwSzfANXANCYg7fAQA6pImIzRWNxggAohqBGEKbmwQohdCawycLoIUoMZ8FkEKUmosA5iDwnu9wQVSxm04uAcSoJEdpTOfOAZczRbuViwHgk4IgQNRa85DDBSTtAGFc60d+GXWf1y2MbbS7ZiwiYTD9tA9iVVPJMlUAtAQ+f5SHGSk5wEZCDG7QJHN+bPuAzo+8o8CSU1QEkDLHB4c1t/j94yifXbqcOf/XJImhWYrrSQCNsCaWQ2QBSgRLcpIAJUI0Km3uCEArQMa81mgMADSJ3DDVlmpdAKQJKbNcn0QzAEgCcyZz/XPa9u3j49ae3Bff4UpOtSmQHES4mDyuVj8++ZUEaptDFydkfPmB5+Bi0l8Yn/gOR1C1apoJmONeONKNr86jgAodsccfZeIrfInyQQkAAAAASUVORK5CYII=",
            Env: WXEnvironment, // 获取设备环境变量
            pwd: "",
            user: "",
            backIconSrc: "data:image/png;base64,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eT189prpmL/a9pyrr617fLeTZ3WOxI5yNnvHuLGp73UHempn96nvFvLbN9tztvyVKPPrIHm/81rodb5jjp7LlsB3BRTu3xX7ofF9IblfhNJ/73v3KXTuzLuaax6zOq7HrOZ493maj8CvFPB6/552e2XUzmtEr2PHGpK78/Y6dnvcn8V5XZ+tbT6Pr8b3ud5jdrf7HH/q+nb7yP/PBBTu/8zP6DcJfHWhflMK0xD4cQI/8g2+b4m+XetffD/64fbw0zXrqe+J8e887/PcPT5zbykOn14jD0bzud/X/6vX3Wareef1zudhn8BuAYX77mdAfgIECBAgQIAAAQILAuMXfC4ECiFAgAABAgQIECBAYJ+Awn2fvcwECBAgQIAAAQIElgUU7stUAgkQIECAAAECBAjsE1C477OXmQABAgQIECBAgMCygMJ9mUogAQIECBAgQIAAgX0CCvd99jITIECAAAECBAgQWBZQuC9TCSRAgAABAgQIECCwT0Dhvs9eZgIECBAgQIAAAQLLAgr3ZSqBBAgQIECAAAECBPYJKNz32ctMgAABAgQIECBAYFlA4b5MJZAAAQIECBAgQIDAPgGF+z57mQkQIECAAAECBAgsCyjcl6kEEiBAgAABAgQIENgnoHDfZy8zAQIECBAgQIAAgWUBhfsylUACBAgQIECAAAEC+wQU7vvsZSZAgAABAgQIECCwLKBwX6YSSIAAAQIECBAgQGCfgMJ9n73MBAgQIECAAAECBJYFFO7LVAIJECBAgAABAgQI7BNQuO+zl5kAAQIECBAgQIDAsoDCfZlKIAECBAgQIECAAIF9Agr3ffYyEyBAgAABAgQIEFgWULgvUwkkQIAAAQIECBAgsE9A4b7PXmYCBAgQIECAAAECywIK92UqgQQIECBAgAABAgT2CSjc99nLTIAAAQIECBAgQGBZQOG+TCWQAAECBAgQIECAwD4Bhfs+e5kJECBAgAABAgQILAso3JepBBIgQIAAAQIECBDYJ6Bw32cvMwECBAgQIECAAIFlAYX7MpVAAgQIECBAgAABAvsEFO777GUmQIAAAQIECBAgsCygcF+mEkiAAAECBAgQIEBgn4DCfZ+9zAQIECBAgAABAgSWBRTuy1QCCRAgQIAAAQIECOwTULjvs5eZAAECBAgQIECAwLKAwn2ZSiABAgQIECBAgACBfQIK9332MhMgQIAAAQIECBBYFlC4L1MJJECAAAECBAgQILBPQOG+z15mAgQIECBAgAABAssCCvdlKoEECBAgQIAAAQIE9gko3PfZy0yAAAECBAgQIEBgWUDhvkwlkAABAgQIECBAgMA+AYX7PnuZCRAgQIAAAQIECCwLKNyXqQQSIECAAAECBAgQ2CegcN9nLzMBAgQIECBAgACBZQGF+zKVQAIECBAgQIAAAQL7BBTu++xlJkCAAAECBAgQILAsoHBfphJIgAABAgQIECBAYJ+Awn2fvcwECBAgQIAAAQIElgUU7stUAgkQIECAAAECBAjsE1C477OXmQABAgQIECBAgMCywP8BcmUuD3bZXigAAAAASUVORK5CYII="
        };
    },

    components: {
        // header,
        fixed: _fixed2.default
    },
    methods: {
        onClick: function onClick() {
            console.log("退出");
        },
        login: function login() {
            var _this = this;
            if (_this.user === "") {
                modal.alert({ message: "登录名不能为空" });
                return;
            } else if (_this.pwd === "") {
                modal.alert({ message: "登录密码不能为空" });
                return;
            }
            (0, _navigator.navigatorPushEvent)("home");
        }
    }
};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "background",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('div', {
    staticClass: "header",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      paddingTop: _vm.Env.deviceModel === 'iPhone10,3' ? '116px' : _vm.Env.platform === 'iOS' ? '68px' : '28px'
    }))
  }, [_c('image', {
    staticClass: "hearderimg",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": _vm.leftIcon
    },
    on: {
      "click": _vm.onClick
    }
  })]), _vm._v(" "), _c('text', {
    staticClass: "hello",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v("您好,")]), _vm._v(" "), _c('text', {
    staticClass: "welcome",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v("欢迎登录东风日产")]), _vm._v(" "), _c('image', {
    staticClass: "lgimg",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": _vm.backIconSrc
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user),
      expression: "user"
    }],
    staticClass: "login",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "type": "text",
      "placeholder": "请输入用户名/手机",
      "maxlength": "20",
      "autofocus": true
    },
    domProps: {
      "value": (_vm.user)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.pwd),
      expression: "pwd"
    }],
    staticClass: "login",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "type": "password",
      "placeholder": "请输入密码",
      "maxlength": "16"
    },
    domProps: {
      "value": (_vm.pwd)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.pwd = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "logbtn",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('text', {
    staticClass: "btn",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44f5e242", module.exports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

/******/ });