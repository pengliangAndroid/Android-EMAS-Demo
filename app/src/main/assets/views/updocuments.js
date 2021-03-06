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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 2:
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

/***/ 3:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fixed"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 4:
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

/***/ 5:
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

/***/ 6:
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

/***/ 7:
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

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _updocuments = __webpack_require__(79);

var _updocuments2 = _interopRequireDefault(_updocuments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_updocuments2.default.el = '#root';
new Vue(_updocuments2.default);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(80)
)

/* script */
__vue_exports__ = __webpack_require__(81)

/* template */
var __vue_template__ = __webpack_require__(82)
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
__vue_options__.__file = "E:\\东风日产\\poc\\awesome-project\\src\\views\\updocuments.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4fb7ac0e"
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

/***/ 8:
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

/***/ 80:
/***/ (function(module, exports) {

module.exports = {
  "index": {
    "backgroundColor": "#f5f5fa"
  },
  "uptext": {
    "marginLeft": "30",
    "marginTop": "18",
    "marginBottom": "22",
    "color": "#999999",
    "fontSize": "25"
  },
  "updoc": {
    "width": "750",
    "height": "300",
    "backgroundColor": "#ffffff"
  },
  "upbox": {
    "width": "690",
    "height": "240",
    "marginLeft": "30",
    "marginTop": "30",
    "backgroundColor": "#f9f9f9",
    "borderColor": "#999999",
    "borderRadius": "12",
    "borderWidth": "2",
    "borderStyle": "dashed"
  },
  "upimgcar": {
    "width": "690",
    "height": "240"
  },
  "tac": {
    "textAlign": "center"
  },
  "imgcar": {
    "width": "40",
    "height": "40",
    "marginLeft": "325",
    "marginTop": "80",
    "marginBottom": "20"
  },
  "btn": {
    "width": "690",
    "marginLeft": "30",
    "height": "100",
    "textAlign": "center",
    "fontSize": "40",
    "borderRadius": "12",
    "paddingTop": "20"
  },
  "subbtn": {
    "marginTop": "65",
    "color": "#ffffff",
    "backgroundColor": "#c3001b"
  }
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fixed = __webpack_require__(0);

var _fixed2 = _interopRequireDefault(_fixed);

var _pocheader = __webpack_require__(4);

var _pocheader2 = _interopRequireDefault(_pocheader);

var _navigator = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  components: {
    fixed: _fixed2.default,
    pocheader: _pocheader2.default
  },
  data: function data() {
    return {
      upflag: false,
      upImage: "",
      imgurl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAHPklEQVR4Xu3asWsedRzH8fsGCbhlEgouggRxqSCIg0NmB7e4NpjcxUKhi5uoUJx0MA6F9J4zg4MgcdDFVUcFBQWXCm7+AYFSXML9pIUOapOOn7fPvTtmue/lxZtPkqfV+S/+Hdjd3X16a2vro6p6veu6K13X/T7P84fTNH0VP27hB9TC3x/x+n3ff1dVO4855sY4jrcRRy70CAMJw/d9/0ZVfXPRGefn5y+cnJzcDZ+52McbSJi+7/vjqjq86IzW2vXVanUcPnOxjzeQMP0wDL90XXf1kkDurFart8NnLvbxBhKmv+T3j0eX3R7H8Ub4zMU+3kDC9AYSBnjC4w0k7GMgYQADYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI28cFCfsYSBjABWEDGAjbxwUJ+xhIGMAFYQMYCNvHBQn7GEgYwAVhAxgI2+cfC7K/v/98VT3LPnm9rquqT6rqpYveqrX2dWvt0/V6a+7bVNX9s7Oz305PT/96cOXDQIZhuNJa+/YyKO4r/b8va611Vf6kS1NsrX2wWq1u1c7OzlPb29u/dl33Iu3IJdxjIFzleZ6vVd/3b1bVl9wz1/syA0H7/ljDMNzquu499JlrfJyBsHEfLMhRVd1kn7m+1xkI27YODw+H1tod9pnre52BcG1ba3/W3t7e1ubm5t2u657hnrq+lxkI2vadh39fPDg4eLWqvqiq59DnruFxBsJDba3dq6qjcRzf94PCsI8fFIYB/vv4e9M0/fzoy35CFfbxv5qEAZ7weAMJ+xhIGMBA2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPgYSBnBB2AAGwvZxQcI+BhIGcEHYAAbC9nFBwj4GEgZwQdgABsL2cUHCPn3fH1XVzYvOaK1dX61Wx+EzF/t4AwnTHxwcvLyxsfHT485ord2vqqvjOP4RPnOxjzcQAH3f929V1Wf/PmWe52vTNH0OOHGxJxgIhH4Yhte6rnu3tfZKVX0/z/PH0zT9ADlvsWf8DafhN6LK1YSaAAAAAElFTkSuQmCC",
      imgurl1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABJ0lEQVR4Xu2bMYrCUBRFTxqbqbVwA4NaCWMnwnSuSCzHUtyAuIFZgp2FnQ7YTyGuwNZagl9wBzfgSZXuvdwk/79zQipyxwewB3rAGDglWqkSRUvNKbAt5wvgJ9FLMoAv4K9c9BxYGkAgAZ+AQOjPkr4CrgEugu4CboPOAY8EHIScBB2FZQFhKDGWC0OJ1EtNYUgYEoaEIWFIGBKGpEFxWB+gEMkaoTYwCDDBJ7AudTfAb6CHc02DO+A7ULwJJS91AEdg1IRuAj3c6gA6QD9QvAmvwFUhErjzfh3WCD0SUImpxFRiKjGVmEpMJaYSU4mpxFRiWSWWAkJZQBaQBWQBWUAWkAVkAVlAFpAFZIG3/GNk+PLH+AxYJags+XG0BfwDXWACHBIB3AFy2YJecTz8FgAAAABJRU5ErkJggg=="

    };
  },

  methods: {
    jump: function jump() {
      var _this = this;
      _this.$router.push({ path: "test" });
    },
    comfig: function comfig() {},
    upClick: function upClick() {
      var _this = this;
      weex.requireModule('event').openCameraFront(function (res) {
        // modal.alert({message:res.data});
        if (res.result === '0') {
          _this.upflag = true;
          _this.upImage = res.data;
        }
      });
    }
  }
};

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["index"]
  }, [_c('pocheader', {
    attrs: {
      "title": "上传转账凭证",
      "leftShow": true
    }
  }), _c('text', {
    staticClass: ["uptext"]
  }, [_vm._v("上传转账凭证")]), _c('div', {
    staticClass: ["updoc"]
  }, [(!_vm.upflag) ? _c('div', {
    staticClass: ["upbox"],
    on: {
      "click": _vm.upClick
    }
  }, [_c('image', {
    staticClass: ["imgcar"],
    attrs: {
      "src": _vm.imgurl
    }
  }), _c('text', {
    staticClass: ["tac"]
  }, [_vm._v("转账凭证")])]) : _vm._e(), (_vm.upflag) ? _c('div', {
    staticClass: ["upbox"],
    on: {
      "click": _vm.upClick
    }
  }, [_c('image', {
    staticClass: ["upimgcar"],
    attrs: {
      "src": _vm.upImage
    }
  })]) : _vm._e()]), _c('text', {
    staticClass: ["btn", "subbtn"],
    on: {
      "click": _vm.comfig
    }
  }, [_vm._v("提交")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });