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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "E:\\东风日产\\poc\\awesome-project\\src\\components\\fixed.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-68a43898"
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "fixed": {
    "position": "fixed",
    "backgroundColor": "rgba(249,249,249,0.9)",
    "width": "750",
    "top": 0,
    "left": 0
  }
}

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fixed"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "E:\\东风日产\\poc\\awesome-project\\src\\components\\pocheader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4ebf4391"
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff",
    "paddingBottom": "20",
    "paddingLeft": "32",
    "paddingRight": "32",
    "borderBottomWidth": "1",
    "borderColor": "#ffffff",
    "borderStyle": "solid"
  },
  "leftIcon": {
    "width": "40",
    "height": "40"
  },
  "title": {
    "fontSize": "34",
    "color": "rgb(17,17,17)",
    "textAlign": "center",
    "fontFamily": "PingFangSC-Medium"
  },
  "left": {
    "width": "120",
    "height": "40",
    "justifyContent": "flex-end"
  },
  "pop": {
    "width": "120",
    "height": "40",
    "justifyContent": "flex-end"
  },
  "right": {
    "width": "120",
    "height": "40",
    "justifyContent": "flex-end",
    "alignItems": "flex-end"
  },
  "popIcon": {
    "width": "21",
    "height": "36"
  },
  "rightTxt": {
    "lines": 1,
    "fontSize": "30",
    "textAlign": "right",
    "fontFamily": "PingFangSC-Medium"
  }
}

/***/ }),
/* 6 */
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

var navigator = weex.requireModule('navigator');

exports.default = {
  name: 'oaHeader',
  data: function data() {
    return {
      Env: WXEnvironment, // 获取设备环境变量
      popIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAABmMXGeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QTExREM0MjREMUIxMUU4OEY4OEY2NDBGOTMyMzY0NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QzZEMjY1RTREMUYxMUU4OEY4OEY2NDBGOTMyMzY0NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBMTFEQzQwNEQxQjExRTg4Rjg4RjY0MEY5MzIzNjQ2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBMTFEQzQxNEQxQjExRTg4Rjg4RjY0MEY5MzIzNjQ2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uGGeXQAAAmhJREFUSEullsuLjWEcx5+ZE8WCXFZnWLvt3akxFAqFUu7EyZIZMwv/gQwTK52IYcFGUeRSLNxjyYYdZSWXDcrE8fn+nvc53nN9b5/69M7vXXzn6Xmf3+85PbVazTVTrVajv1IzGc/iTjzfqzcFmYq38AhOw8GiobPxEa63ynOjSOgcfIJLrPJcwT15QxfiS5xvlecM7seJPKHLUCvss8ozjENoXz1r6EZ8iDOtcu4PHsBRqyKyhO7FmzjFKud+4Ra8bFWMtKGDOI6TrHLuG67FO1Y1kRTag6fwtFWeT7gan1vVhm6hJbyEx63yvMPl+NaqDnQKDV2yzyrPK1yFH63qQkvv0/czeNxGrShwH7fiT6sSaFgpgaFL4oHXcDOmChT1UALn8dDmL7IXHk2eXfjbqpRYKIGLeTzFuaojTuBRbJ2NCZTK5fI6nvdwur1x7i8exnNW5UArvY762kJdsg0vWpWTdkdqInrmRqG6ArRCob7W+dQIy01vpVLRGVyDX+3N/07SOMtF/fBzAjR4H2B8To5hfU6mpaGjosOv4AX2wqMr4hCm3ut2bTqLh9p0qb3w3MXtmL1NBXv8hccA6uwGNqAmvv5hIu2OlNCKNNWvWuXRyh+jtqgrnUKF+l2jTx8roI/5AuN73kK3UKEN11UyYpUnTLL4njeQFBrQlXIQNReE9la/TLTXLaQNFWoI7XNz9+22KkaWUKGjpqn23Sp/u+pjHrMqImuoeIa6TXWrBvST5yTq9s0VKt7gCnxvlUcfUyOzlDdUfMCV+Noqj34CjRcJFZ+xHzUvAjuKhoofuAkvICfDjf0Djb6D75MHfhwAAAAASUVORK5CYII=',
      right_icon: this.rightIcon,
      right_txt: this.rightTxt,
      left: this.leftShow,
      left_icon: this.leftIcon
    };
  },

  props: {
    leftShow: { // 左边是否需要pop箭头（不需要时为false)
      type: Boolean,
      default: false
    },
    leftIcon: { // 左边图标路径（空的时候不显示）
      type: String,
      default: ''
    },
    iconLeftWidth: {
      type: Number,
      default: 40
    },
    iconLeftHeight: {
      type: Number,
      default: 40
    },
    title: { // 中间标题文本
      type: String,
      required: true
    },
    iconWidth: { // 右边图标宽度
      type: Number,
      default: 0
    },
    iconHeight: { // 右边图标高度
      type: Number,
      default: 0
    },
    rightIcon: { // 右边图标图片路径（空的时候不显示）
      type: String,
      default: ''
    },
    rightTxt: { // 右边字体文本（空的时候不显示）
      type: String,
      default: ''
    },
    txtColor: { // 右边字体文本颜色
      type: String,
      default: 'rgb(17,17,17)'
    }
  },
  methods: {
    // 向父组件传递方法
    clickEventLeft: function clickEventLeft() {
      //第一个参数名为调用的方法名，第二个参数为需要传递的参数
      this.$emit('clickEventLeft', 'childParam');
    },
    clickEvent: function clickEvent() {
      //第一个参数名为调用的方法名，第二个参数为需要传递的参数
      this.$emit('clickEvent', 'childParam');
    },

    // pop返回
    pop: function pop() {
      navigator.pop({ animated: 'true' }, function (event) {});
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"],
    style: {
      paddingTop: _vm.Env.deviceModel === 'iPhone10,3' ? '116px' : _vm.Env.platform === 'iOS' ? '68px' : '28px'
    }
  }, [(_vm.left) ? _c('div', {
    staticClass: ["pop"],
    on: {
      "click": _vm.pop
    }
  }, [_c('image', {
    staticClass: ["popIcon"],
    attrs: {
      "src": _vm.popIcon
    }
  })]) : _vm._e(), (!_vm.left & !_vm.left_icon) ? _c('text', {
    staticClass: ["left"]
  }) : _vm._e(), (_vm.left_icon) ? _c('div', {
    staticClass: ["left"],
    on: {
      "click": _vm.clickEventLeft
    }
  }, [_c('image', {
    staticClass: ["leftIcon"],
    style: {
      'width': _vm.iconLeftWidth,
      'height': _vm.iconLeftHeight
    },
    attrs: {
      "src": _vm.leftIcon
    }
  })]) : _vm._e(), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.right_icon) ? _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.clickEvent
    }
  }, [_c('image', {
    style: {
      'width': _vm.iconWidth,
      'height': _vm.iconHeight
    },
    attrs: {
      "src": _vm.rightIcon
    }
  })]) : _vm._e(), (_vm.right_txt) ? _c('text', {
    staticClass: ["right", "rightTxt"],
    style: {
      'color': _vm.txtColor
    },
    on: {
      "click": _vm.clickEvent
    }
  }, [_vm._v(_vm._s(_vm.rightTxt))]) : _vm._e(), (!_vm.right_icon & !_vm.right_txt) ? _c('text', {
    staticClass: ["right"]
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */
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
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _applybuycar = __webpack_require__(28);

var _applybuycar2 = _interopRequireDefault(_applybuycar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_applybuycar2.default.el = '#root';
new Vue(_applybuycar2.default);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(32)
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
__vue_options__.__file = "E:\\东风日产\\poc\\awesome-project\\src\\views\\applybuycar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-24c11710"
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
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  "baccomm": {
    "backgroundColor": "#f5f5fa"
  },
  "info": {
    "marginTop": "20",
    "marginBottom": "20",
    "marginLeft": "30",
    "color": "#999999",
    "fontSize": "24",
    "width": "600"
  },
  "query-title": {
    "width": "750"
  },
  "query-subtitle": {
    "width": "750",
    "height": "92",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgba(0,0,0,0.08)",
    "paddingRight": "42",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "query-name": {
    "fontFamily": "PingFangSC-Regular",
    "fontSize": "32",
    "color": "#333333",
    "marginLeft": "30",
    "marginTop": "30",
    "marginBottom": "30"
  },
  "query-number": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "number": {
    "fontFamily::textarea-placeholde": "PingFangSC-Regular",
    "fontSize::textarea-placeholde": "28",
    "color::textarea-placeholde": "#cccccc",
    "width": "520",
    "height": "50",
    "fontFamily": "PingFangSC-Regular",
    "fontSize": "28",
    "color": "#333333",
    "paddingTop": "5"
  },
  "qicon": {
    "width": "22",
    "height": "32",
    "marginLeft": "16"
  },
  "qicon1": {
    "width": "32",
    "height": "32"
  },
  "red": {
    "color": "#c3001b",
    "fontSize": "32",
    "position": "absolute",
    "left": "160",
    "top": "35"
  },
  "handle": {
    "width": "16",
    "height": "28"
  },
  "mt5": {
    "marginTop": "5"
  },
  "cardtab": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "flexDirection": "row"
  },
  "cardBox": {
    "width": "330",
    "height": "250",
    "borderColor": "#ffffff",
    "borderRadius": "12",
    "borderBottomWidth": "2",
    "borderBottomStyle": "dashed",
    "borderBottomColor": "#999999",
    "borderTopWidth": "2",
    "borderTopStyle": "dashed",
    "borderTopColor": "#999999",
    "borderLeftWidth": "2",
    "borderLeftStyle": "dashed",
    "borderLeftColor": "#999999",
    "borderRightWidth": "2",
    "borderRightStyle": "dashed",
    "borderRightColor": "#999999",
    "backgroundColor": "#f5f5fa",
    "marginTop": "40",
    "marginBottom": "40",
    "marginLeft": "30"
  },
  "cardImg": {
    "width": "330",
    "height": "250"
  },
  "btn": {
    "width": "690",
    "marginLeft": "30",
    "height": "100",
    "textAlign": "center",
    "fontSize": "40",
    "fontFamily": "PingFangSC-Medium",
    "borderColor": "#ffffff",
    "borderRadius": "12",
    "paddingTop": "25"
  },
  "subbtn": {
    "marginTop": "50",
    "color": "#ffffff",
    "backgroundColor": "#c3001b"
  },
  "backbtn": {
    "marginTop": "30",
    "marginBottom": "50",
    "color": "#c3001b",
    "backgroundColor": "#ffffff",
    "borderColor": "#c3001b",
    "borderStyle": "solid",
    "borderWidth": "2"
  },
  "pr15": {
    "marginTop": "15",
    "marginRight": "15",
    "marginBottom": "15",
    "marginLeft": "15",
    "color": "#c3001b",
    "borderColor": "#BBBBBB",
    "borderStyle": "solid",
    "borderWidth": "2"
  },
  "sex": {
    "width": "400"
  },
  "tar": {
    "textAlign": "right"
  },
  "tac": {
    "textAlign": "center"
  },
  "mt20": {
    "marginTop": "20"
  },
  "add": {
    "marginLeft": "140",
    "marginTop": "70",
    "width": "50",
    "height": "50",
    "marginBottom": "20"
  },
  "gray": {
    "color": "#999999"
  },
  "checkbox": {
    "flexDirection": "row",
    "marginTop": "20",
    "marginLeft": "30"
  },
  "agree": {
    "color": "#999999",
    "fontSize": "28",
    "paddingLeft": "8",
    "paddingTop": "2"
  },
  "checkimg": {
    "width": "40",
    "height": "40"
  },
  "data": {
    "paddingRight": "20"
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fixed = __webpack_require__(0);

var _fixed2 = _interopRequireDefault(_fixed);

var _pocheader = __webpack_require__(4);

var _pocheader2 = _interopRequireDefault(_pocheader);

var _pocswitch = __webpack_require__(9);

var _pocswitch2 = _interopRequireDefault(_pocswitch);

var _navigator = __webpack_require__(8);

var _image = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var picker = weex.requireModule('picker'); //
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

var modal = weex.requireModule('modal');
exports.default = {
  data: function data() {
    return {
      switchflag: false,
      cardImgFlagF: false,
      cardImgFlagZ: false,
      sex: "男",
      appleDate: "请选择申请日期",
      cardImgZ: "",
      cardImgF: "",
      uncheck: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAM1JREFUWAntl7EJwzAQRX0iGsJkiDSuhcB7ZIY0ITOENJkhRZYQAuE6TYYIGkIg+R+oNOkkN3cgMLa4d/cqfxpQ3vtjzvmBR4sz4rSsiOZBKXWd5/lHDC+lfIjoqbV+GWP4QrNalmVMKZ3BvIA5kXPujWm+mObejLrRGIvfYP2k8M3y5ht3mr6qTDvAQGlK+tOc2Wxg15IBxIAYEANiQAyIATEgBsSAGGADkeNS73/zyow8QOCs1nuAygwHTqkcTpHVht7hFOyJePM94/kKaudadN9W5CUAAAAASUVORK5CYII=",
      checked: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAitJREFUWAntVzFIW1EUPe8n0VppJx1EgxQEoR0KRehgDNFsUhcnC6WD4KBTKYirqxTEpXQQHCpoaaFLqUsIhiSCgggODkJLKSKB6iZKaNr/eo9GkIf/Jf/jVyheePDfu/fdc97hkHAVJLLZbLvrum/kMyWrTVaYUZLmOcdxJtPp9L4iuNZ6Uyk1F4vF3ieTSRaEFvl8vq1SqbwUzFeC2aMymcySsNkWNjOhoV7SWB4+Jao/diSX4ssvqQn1qIqZgiigQ0WyNCc2FbjRuCXw/yqwjq77a+h4UctgoSigMe38QXnZhV4soGPKRiJqSwbNFTHPn/VBWYcNiHy09blyBQqIjwrgawX1W8EZfoqfP66NQBHxPgX9joAaajyBvYINnLkrU2ADnQ803M8aukH6zvZhb6EWeF0E1hCf2EJXq61ZEd33Kvj7RWpaRPqvCYxN2uov5qwKENyF+/YE5VUvEnQ8cPxBXv5IwHeA5ucK0+5FENu3lUATGj+xKZt7kaDjJX/q+BgiQwnsHtkAzZyVwBN8O7iLO/1eJPw63gTn3kqABV4kgjie/cyoSYAXTBLHKOeCON4E574uAiwkCYXGgTOj6YdyRMev+HE8+5hRNwFe7MX3X+eeOCPSPOLH8SY4974I8MK5EhFEn/l1PO+bEejPiEqYjYLufSsQFMjr3i0BKlDiuOQlUVjnVcwSCeQ4q4UF5NW3ipmLckrlcCqzGq57OBXsHkWGNzme/wO3YuCBJjmiNQAAAABJRU5ErkJggg==",
      backIconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAM1JREFUWAntl7EJwzAQRX0iGsJkiDSuhcB7ZIY0ITOENJkhRZYQAuE6TYYIGkIg+R+oNOkkN3cgMLa4d/cqfxpQ3vtjzvmBR4sz4rSsiOZBKXWd5/lHDC+lfIjoqbV+GWP4QrNalmVMKZ3BvIA5kXPujWm+mObejLrRGIvfYP2k8M3y5ht3mr6qTDvAQGlK+tOc2Wxg15IBxIAYEANiQAyIATEgBsSAGGADkeNS73/zyow8QOCs1nuAygwHTqkcTpHVht7hFOyJePM94/kKaudadN9W5CUAAAAASUVORK5CYII=",
      checkflag: false,
      imgurl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABJ0lEQVR4Xu2bMYrCUBRFTxqbqbVwA4NaCWMnwnSuSCzHUtyAuIFZgp2FnQ7YTyGuwNZagl9wBzfgSZXuvdwk/79zQipyxwewB3rAGDglWqkSRUvNKbAt5wvgJ9FLMoAv4K9c9BxYGkAgAZ+AQOjPkr4CrgEugu4CboPOAY8EHIScBB2FZQFhKDGWC0OJ1EtNYUgYEoaEIWFIGBKGpEFxWB+gEMkaoTYwCDDBJ7AudTfAb6CHc02DO+A7ULwJJS91AEdg1IRuAj3c6gA6QD9QvAmvwFUhErjzfh3WCD0SUImpxFRiKjGVmEpMJaYSU4mpxFRiWSWWAkJZQBaQBWQBWUAWkAVkAVlAFpAFZIG3/GNk+PLH+AxYJags+XG0BfwDXWACHBIB3AFy2YJecTz8FgAAAABJRU5ErkJggg==",
      productName: "",
      jobNo: "",
      productNo: ""
    };
  },

  components: {
    pocheader: _pocheader2.default,
    pocswitch: _pocswitch2.default
  },
  methods: {
    switchChange: function switchChange(value) {
      var _this = this;
      _this.switchflag = value;
      console.log(value);
    },
    check: function check() {
      var _this = this;
      var checkflag = _this.checkflag;
      if (checkflag) {
        _this.checkflag = false;
        _this.backIconSrc = _this.uncheck;
      } else {
        _this.checkflag = true;
        _this.backIconSrc = _this.checked;
      }
    },
    comfig: function comfig() {
      var _this = this;
      // _this.$router.push({ path:"updocuments"})
      (0, _navigator.navigatorPushEvent)("updocuments");
    },
    uploadZ: function uploadZ() {
      var _this = this;
      // _this.cardImgZ = _this.testimage;
      // _this.cardImgFlagZ = true;
      // console.log(_this.cardImgZ);
      // return;
      weex.requireModule('event').openCameraFront(function (res) {
        // modal.alert({message:res.data});
        if (res.result === '0') {
          _this.cardImgFlagZ = true;
          _this.cardImgZ = "data:image/png;base64," + res.data;
        }
      });
    },
    uploadF: function uploadF() {
      var _this = this;
      weex.requireModule('event').openCameraFront(function (res) {
        // modal.alert({message:res.data});
        if (res.result === '0') {
          _this.cardImgFlagF = true;
          _this.cardImgF = "data:image/png;base64," + res.data;
        }
      });
    },
    pickerSex: function pickerSex() {
      var _this = this;
      picker.pick({
        items: ["男", "女"],
        height: "500px"
      }, function (ret) {
        var result = ret.result;
        if (result == "success") {
          _this.checkSex(ret.data);
        }
      });
    },
    pickerDate: function pickerDate() {
      var _this = this;
      picker.pickDate({
        value: "2019-01-09"
      }, function (ret) {
        var result = ret.result;
        if (result == "success") {
          console.log(ret);
          // _this.checkSex(ret.data)
          _this.appleDate = ret.data;
        }
      });
    },
    checkSex: function checkSex(value) {
      var _this = this;
      var sexList = [{ key: "0", text: "男" }, { key: "1", text: "女" }];
      for (var index = 0; index < sexList.length; index++) {
        var element = sexList[index];
        if (value == element.key) {
          _this.sex = element.text;
        }
      }
    },
    back: function back() {
      navigator.pop({ animated: 'true' }, function (event) {});
    },
    onchange: function onchange() {},
    oninput: function oninput() {},
    matchData: function matchData() {},
    matchDropDownData: function matchDropDownData() {}
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
                                                                            value: true
});
var image = "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";

exports.default = image;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["baccomm"]
  }, [_c('pocheader', {
    attrs: {
      "title": "员工申请购车",
      "leftShow": true
    }
  }), _c('scroller', [_c('text', {
    staticClass: ["info"]
  }, [_vm._v("员工信息")]), _c('div', [_c('div', {
    staticClass: ["query-title"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["query-subtitle"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("性别")]), _c('div', {
    staticClass: ["query-number"]
  }, [_c('text', {
    staticClass: ["number", "tar"],
    on: {
      "click": _vm.pickerSex
    }
  }, [_vm._v(_vm._s(_vm.sex))])]), _c('image', {
    staticClass: ["handle"],
    attrs: {
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAAXNSR0IArs4c6QAAAL5JREFUOBGt1d0JwyAUhuHYCzfIFN1ByBBdovt0iqwgFNwhU2QDb6yfkIAkx/NDvQnBvI9eiJmmf40Y4zulNGu9BwLEpZRPzvmrRRrgvV+dc1tFnlrEHVvGyoiBAKvoEkLYj3nqeQL4wIJ0gAW5AFrkFtAgJCBFhoAEYQEOEQEjRAxQSDvKmLQO8Q6oUyoCqBi7ZoFRzAJcPAQkMQlI41tAE18AbdwBlvgErDGAdpTrZfrSXqaIu2H9sXSI5eUHt+QYsYQlTsQAAAAASUVORK5CYII="
    }
  })]), _c('div', {
    staticClass: ["query-subtitle"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("工号")]), _c('div', {
    staticClass: ["query-number"]
  }, [_c('input', {
    staticClass: ["number", "tar"],
    attrs: {
      "type": "text",
      "placeholder": "请输入您的工号",
      "maxlength": "20",
      "value": (_vm.jobNo)
    },
    on: {
      "input": function($event) {
        _vm.jobNo = $event.target.attr.value
      }
    }
  })])]), _c('div', {
    staticClass: ["query-subtitle"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("部门")]), _c('div', {
    staticClass: ["query-number"]
  }, [_c('input', {
    staticClass: ["number", "tar"],
    attrs: {
      "type": "text",
      "maxlength": "40",
      "placeholder": "请输入您所在的部门",
      "value": (_vm.productNo)
    },
    on: {
      "input": function($event) {
        _vm.productNo = $event.target.attr.value
      }
    }
  })])]), _c('div', {
    staticClass: ["query-subtitle"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("职务")]), _c('div', {
    staticClass: ["query-number"]
  }, [_c('input', {
    staticClass: ["number", "tar"],
    attrs: {
      "type": "text",
      "maxlength": "40",
      "placeholder": "请输入您的职务",
      "value": (_vm.productName)
    },
    on: {
      "input": function($event) {
        _vm.productName = $event.target.attr.value
      }
    }
  })])]), _c('div', {
    staticClass: ["query-subtitle"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("身份证号")]), _c('div', {
    staticClass: ["query-number"]
  }, [_c('input', {
    staticClass: ["number", "tar"],
    attrs: {
      "type": "text",
      "maxlength": "40",
      "placeholder": "请输入您的身份证号",
      "value": (_vm.productName)
    },
    on: {
      "input": function($event) {
        _vm.productName = $event.target.attr.value
      }
    }
  })])]), _c('div', {
    staticClass: ["query-subtitle", "arr"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("入职日期")]), _c('div', {
    staticClass: ["query-number"],
    on: {
      "click": _vm.pickerDate
    }
  }, [_c('text', {
    staticClass: ["number", "tar", "data"]
  }, [_vm._v(_vm._s(_vm.appleDate))])]), _c('image', {
    staticClass: ["handle"],
    attrs: {
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAAXNSR0IArs4c6QAAAL5JREFUOBGt1d0JwyAUhuHYCzfIFN1ByBBdovt0iqwgFNwhU2QDb6yfkIAkx/NDvQnBvI9eiJmmf40Y4zulNGu9BwLEpZRPzvmrRRrgvV+dc1tFnlrEHVvGyoiBAKvoEkLYj3nqeQL4wIJ0gAW5AFrkFtAgJCBFhoAEYQEOEQEjRAxQSDvKmLQO8Q6oUyoCqBi7ZoFRzAJcPAQkMQlI41tAE18AbdwBlvgErDGAdpTrZfrSXqaIu2H9sXSI5eUHt+QYsYQlTsQAAAAASUVORK5CYII="
    }
  })]), _c('div', {
    staticClass: ["query-subtitle", "arr"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("申请日期")]), _c('div', {
    staticClass: ["query-number"],
    on: {
      "click": _vm.pickerDate
    }
  }, [_c('text', {
    staticClass: ["number", "tar", "data"]
  }, [_vm._v(_vm._s(_vm.appleDate))])]), _c('image', {
    staticClass: ["handle"],
    attrs: {
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAAXNSR0IArs4c6QAAAL5JREFUOBGt1d0JwyAUhuHYCzfIFN1ByBBdovt0iqwgFNwhU2QDb6yfkIAkx/NDvQnBvI9eiJmmf40Y4zulNGu9BwLEpZRPzvmrRRrgvV+dc1tFnlrEHVvGyoiBAKvoEkLYj3nqeQL4wIJ0gAW5AFrkFtAgJCBFhoAEYQEOEQEjRAxQSDvKmLQO8Q6oUyoCqBi7ZoFRzAJcPAQkMQlI41tAE18AbdwBlvgErDGAdpTrZfrSXqaIu2H9sXSI5eUHt+QYsYQlTsQAAAAASUVORK5CYII="
    }
  })]), _c('div', {
    staticClass: ["query-subtitle", "mt20"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("联系电话")]), _c('text', {
    staticClass: ["red"]
  }, [_vm._v("*")]), _c('div', {
    staticClass: ["query-number"]
  }, [_c('input', {
    staticClass: ["number", "tar"],
    attrs: {
      "type": "text",
      "maxlength": "40",
      "placeholder": "请输入您的联系电话",
      "value": (_vm.productName)
    },
    on: {
      "input": function($event) {
        _vm.productName = $event.target.attr.value
      }
    }
  })])]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v("申请人意见")]), _c('div', {
    staticClass: ["query-subtitle"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("是否是直系亲属")]), _c('div', {
    staticClass: ["query-number"]
  }, [_c('pocswitch', {
    on: {
      "wxChange": _vm.switchChange
    }
  })], 1)]), _c('div', {
    staticClass: ["query-subtitle"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("联系人姓名")]), _c('div', {
    staticClass: ["query-number"]
  }, [_c('input', {
    staticClass: ["number", "tar"],
    attrs: {
      "type": "text",
      "maxlength": "40",
      "placeholder": "请输入联系人姓名",
      "value": (_vm.productName)
    },
    on: {
      "input": function($event) {
        _vm.productName = $event.target.attr.value
      }
    }
  })])]), _c('div', {
    staticClass: ["query-subtitle"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("联系人电话")]), _c('div', {
    staticClass: ["query-number"]
  }, [_c('input', {
    staticClass: ["number", "tar"],
    attrs: {
      "type": "tel",
      "maxlength": "40",
      "placeholder": "请输入联系人电话",
      "value": (_vm.productName)
    },
    on: {
      "input": function($event) {
        _vm.productName = $event.target.attr.value
      }
    }
  })])])]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v("上传证件照片")]), _c('div', {
    staticClass: ["cardtab"]
  }, [(!_vm.cardImgFlagZ) ? _c('div', {
    staticClass: ["cardBox"],
    on: {
      "click": _vm.uploadZ
    }
  }, [_c('image', {
    staticClass: ["add"],
    attrs: {
      "src": _vm.imgurl
    }
  }), _c('text', {
    staticClass: ["cardtx", "tac"]
  }, [_vm._v("身份证正面照")]), _c('text', {
    staticClass: ["tac", "gray"]
  }, [_vm._v("380*235")])]) : _vm._e(), (_vm.cardImgFlagZ) ? _c('div', {
    staticClass: ["cardBox"],
    on: {
      "click": _vm.uploadZ
    }
  }, [_c('image', {
    staticClass: ["cardImg"],
    attrs: {
      "src": _vm.cardImgZ
    }
  })]) : _vm._e(), (!_vm.cardImgFlagF) ? _c('div', {
    staticClass: ["cardBox"],
    on: {
      "click": _vm.uploadF
    }
  }, [_c('image', {
    staticClass: ["add"],
    attrs: {
      "src": _vm.imgurl
    }
  }), _c('text', {
    staticClass: ["cardtx", "tac"]
  }, [_vm._v("身份证反面照")]), _c('text', {
    staticClass: ["tac", "gray"]
  }, [_vm._v("380*235")])]) : _vm._e(), (_vm.cardImgFlagF) ? _c('div', {
    staticClass: ["cardBox"],
    on: {
      "click": _vm.uploadF
    }
  }, [_c('image', {
    staticClass: ["cardImg"],
    attrs: {
      "src": _vm.cardImgF
    }
  })]) : _vm._e()]), _c('div', {
    staticClass: ["checkbox"]
  }, [_c('image', {
    staticClass: ["checkimg"],
    attrs: {
      "src": _vm.backIconSrc
    },
    on: {
      "click": _vm.check
    }
  }), _c('text', {
    staticClass: ["agree"]
  }, [_vm._v("我同意按公司OA发布")])])]), _c('text', {
    staticClass: ["btn", "subbtn"],
    on: {
      "click": _vm.comfig
    }
  }, [_vm._v("提交申请")]), _c('text', {
    staticClass: ["btn", "backbtn"],
    on: {
      "click": _vm.back
    }
  }, [_vm._v("上一步")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["query-subtitle"]
  }, [_c('text', {
    staticClass: ["query-name"]
  }, [_vm._v("姓名")]), _c('div', {
    staticClass: ["query-number"]
  }, [_c('input', {
    staticClass: ["number", "tar"],
    attrs: {
      "type": "text",
      "maxlength": "40",
      "placeholder": "请输入您的姓名"
    }
  })])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);