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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(13)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\东风日产\\poc\\awesome-project\\src\\components\\pocswitch.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77a52690"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "wx-switch": {
    "position": "relative",
    "width": "115",
    "height": "64",
    "borderRadius": "64",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#BBBBBB",
    "backgroundColor": "#ffffff"
  },
  "blk": {
    "position": "absolute",
    "left": "0",
    "top": "5",
    "zIndex": 100,
    "height": "52",
    "width": "56",
    "backgroundColor": "#ffffff",
    "borderRadius": "52"
  },
  "switch-core": {
    "position": "absolute",
    "width": "110",
    "height": "60",
    "backgroundColor": "#ffffff",
    "borderRadius": "60"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(12);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _animation = weex.requireModule('animation'); //
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

exports.default = {
    name: 'pocswitch',
    mixins: [_mixins2.default],
    props: {
        value: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean
        },

        checkedColor: {
            type: String,
            default: '#c3001b'
        }
    },

    data: function data() {
        return {
            checked: false,
            blkStyle: {},
            corestyle: {}
        };
    },
    created: function created() {
        this.initStyle();
    },

    watch: {
        value: function value(newName, oldName) {
            this.checked = newName;
            this.blkAnimation(true);
            this.animation(true);
        }
    },
    mounted: function mounted() {
        this.checked = this.value;
        this.blkAnimation(true);
        this.animation(true);
    },


    methods: {
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            if (this.disabled) return;
            this.checked = !this.checked;
            this.animation();
            this.blkAnimation();
        },
        animation: function animation() {
            var isInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var el = this.$refs.switchCore;
            // 设置为0.1 解决奇怪的Y轴会覆盖点击问题
            var s = this.checked ? '0.1' : '1';
            _animation.transition(el, {
                styles: {
                    transform: 'scale(' + s + ')'
                },
                duration: isInit ? 0 : 300,
                timingFunction: 'linear',
                needLayout: false,
                delay: 0
            });
        },
        blkAnimation: function blkAnimation() {
            var _this = this;

            var isInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var el = this.$refs.blk;
            var x = this.checked ? '50px' : '0px';
            _animation.transition(el, {
                styles: {
                    transform: 'translateX(' + x + ')'
                },
                duration: isInit ? 0 : 300,
                timingFunction: 'linear',
                needLayout: false,
                delay: 0
            }, function () {
                _this.$emit('wxChange', _this.checked);
                _this.$emit('input', _this.checked);
            });
        },


        // android不支持阴影
        initStyle: function initStyle() {
            var platform = weex.config.env.platform.toLowerCase();
            if (platform === 'android') {
                this.blkStyle = {
                    'border-width': '2px',
                    'border-style': 'solid',
                    'border-color': '#BBBBBB'
                };
            } else {
                this.blkStyle = {
                    'box-shadow': '0 1px 3px rgba(0,0,0,.4)',
                    top: '5px'
                };
                if (platform === 'web') {
                    this.corestyle = {
                        width: '100px',
                        height: '60px',
                        'border-radius': '60px'
                    };
                    this.blkStyle.top = '4px';
                }
            }
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var width = weex.config.env.deviceWidth;
var height = weex.config.env.deviceHeight;
var platform = weex.config.env.platform.toLowerCase();
var appName = weex.config.env.appName;

var mixins = {
    data: function data() {
        return {
            $env: {
                isWeb: platform === 'web',
                isAndroid: platform === 'android',
                isIos: platform === 'ios'
            }
        };
    },

    methods: {
        getPageHeight: function getPageHeight() {
            if (platform === 'android') {
                return 750 / width * height;
            }
            return height;
        },
        preventDefault: function preventDefault(e) {
            e.preventDefault && e.preventDefault();
            e.stopPropagation && e.stopPropagation();
        }
    }
};

exports.default = mixins;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-switch"],
    on: {
      "click": _vm.handleClick
    }
  }, [_c('text', {
    ref: "switchCore",
    staticClass: ["switch-core"],
    style: _vm.corestyle
  }), _c('text', {
    ref: "blk",
    staticClass: ["blk"],
    style: {
      'background-color': _vm.checked ? '#C3001B' : '#BBBBBB'
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pocswitch = __webpack_require__(9);

var _pocswitch2 = _interopRequireDefault(_pocswitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pocswitch2.default.el = '#root';
new Vue(_pocswitch2.default);

/***/ })
/******/ ]);