/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/styles/global.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/styles/global.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Segoe UI'; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  display: table;\n  text-align: center;\n  font-size: 40px;\n  font-weight: 300;\n  height: 200px;\n  border: 1px solid #cccccc; }\n  .container .container-child {\n    display: table-cell;\n    vertical-align: middle; }\n\n.avatar {\n  background-color: #72c3e9;\n  color: #1d53a3; }\n", ""]);

// exports


/***/ }),

/***/ "./src/actionTypes.ts":
/*!****************************!*\
  !*** ./src/actionTypes.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_CHECK = 'CREATE_CHECK';
exports.ADD_DRINK = 'ADD_DRINK';
exports.ADD_DESSERT = 'ADD_DESSERT';
exports.SET_PAYMENT_TYPE = 'SET_PAYMENT_TYPE';
exports.SET_ORDER_TYPE = 'SET_ORDER_TYPE';
exports.PROCESS_CHECKOUT = 'PROCESS_CHECKOUT';
exports.LOAD_ITEMS = 'LOAD_ITEMS';
exports.LOAD_ITEMS_FULFILLED = 'LOAD_ITEMS_FULFILLED';
exports.LOAD_ITEMS_REJECTED = 'LOAD_ITEMS_REJECTED';
exports.SHOW_BUSY = "SHOW_BUSY";
exports.APPEND_DATA = 'APPEND_DATA';
exports.APPEND_DATA_FULFILLED = 'APPEND_DATA_FULFILLED';
exports.APPEND_DATA_REJECTED = 'APPEND_DATA_REJECTED';
exports.UPDATE_DATA = 'UPDATE_DATA';
exports.UPDATE_DATA_FULFILLED = 'UPDATE_DATA_FULFILLED';
exports.UPDATE_DATA_REJECTED = 'UPDATE_DATA_REJECTED';

/***/ }),

/***/ "./src/actions.ts":
/*!************************!*\
  !*** ./src/actions.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");
var actionTypes_1 = __webpack_require__(/*! ./actionTypes */ "./src/actionTypes.ts");
var types_1 = __webpack_require__(/*! ./utils/types */ "./src/utils/types.ts");
exports.ProcessFetchData = function (spreadsheetId) {
    return function (dispatch) {
        return __awaiter(_this, void 0, void 0, function () {
            var response, items, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch(exports.itemsIsLoading(true));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, window['gapi'].client.sheets.spreadsheets.values.get({
                            spreadsheetId: spreadsheetId,
                            range: 'A2:B4'
                        })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.result.values];
                    case 3:
                        items = _a.sent();
                        dispatch(exports.itemsFetchDataSuccess(items));
                        return [3 /*break*/, 6];
                    case 4:
                        ex_1 = _a.sent();
                        dispatch(exports.itemsHasErrored(true));
                        console.log(ex_1);
                        throw Error(ex_1);
                    case 5:
                        dispatch(exports.itemsIsLoading(false));
                        return [7 /*endfinally*/];
                    case 6:
                        return [2 /*return*/];
                }
            });
        });
    };
};
exports.ProcessAppendData = function (spreadsheetId, valueRange) {
    return function (dispatch) {
        return __awaiter(_this, void 0, void 0, function () {
            var response, items, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch(exports.itemsIsLoading(true));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, window['gapi'].client.sheets.spreadsheets.values.append({
                            spreadsheetId: spreadsheetId,
                            range: 'A6:D9',
                            valueInputOption: types_1.ValueInputOption.USER_ENTERED,
                            insertDataOption: types_1.InsertDataOption.OVERWRITE,
                            includeValuesInResponse: true,
                            responseValueRenderOption: types_1.ValueRenderOption.FORMATTED_VALUE
                        }, { values: valueRange })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.result.values];
                    case 3:
                        items = _a.sent();
                        debugger;
                        dispatch(exports.itemsFetchDataSuccess(items));
                        return [3 /*break*/, 6];
                    case 4:
                        ex_2 = _a.sent();
                        dispatch(exports.itemsHasErrored(true));
                        console.log(ex_2);
                        throw Error(ex_2);
                    case 5:
                        dispatch(exports.itemsIsLoading(false));
                        return [7 /*endfinally*/];
                    case 6:
                        return [2 /*return*/];
                }
            });
        });
    };
};
exports.ProcessUpdateData = function (spreadsheetId, valueRange) {
    return function (dispatch) {
        return __awaiter(_this, void 0, void 0, function () {
            var response, items, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch(exports.itemsIsLoading(true));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, window['gapi'].client.sheets.spreadsheets.values.update({
                            spreadsheetId: spreadsheetId,
                            range: 'A6:D10',
                            valueInputOption: types_1.ValueInputOption.USER_ENTERED,
                            includeValuesInResponse: true,
                            responseValueRenderOption: types_1.ValueRenderOption.FORMATTED_VALUE,
                            responseDateTimeRenderOption: types_1.DateTimeRenderOption.FORMATTED_STRING
                        }, { values: valueRange })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.result.values];
                    case 3:
                        items = _a.sent();
                        debugger;
                        dispatch(exports.itemsFetchDataSuccess(items));
                        return [3 /*break*/, 6];
                    case 4:
                        ex_3 = _a.sent();
                        dispatch(exports.itemsHasErrored(true));
                        console.log(ex_3);
                        throw Error(ex_3);
                    case 5:
                        dispatch(exports.itemsIsLoading(false));
                        return [7 /*endfinally*/];
                    case 6:
                        return [2 /*return*/];
                }
            });
        });
    };
};
exports.ProcessFetchDataFake = function () {
    return function (dispatch) {
        setTimeout(function () {
            dispatch(exports.itemsHasErrored(true));
        }, 5000);
    };
};
exports.CreateCheck = redux_actions_1.createAction(actionTypes_1.CREATE_CHECK);
exports.AddDrink = redux_actions_1.createAction(actionTypes_1.ADD_DRINK, function (type, size) {
    return [type, size];
});
exports.AddDessert = redux_actions_1.createAction(actionTypes_1.ADD_DESSERT, function (type, taste, size) {
    return [type, taste, size];
});
exports.SetPaymentType = redux_actions_1.createAction(actionTypes_1.SET_PAYMENT_TYPE, function (type) {
    return type;
});
exports.SetOrderType = redux_actions_1.createAction(actionTypes_1.SET_ORDER_TYPE, function (type) {
    return type;
});
exports.ProcessCheckout = redux_actions_1.createAction(actionTypes_1.PROCESS_CHECKOUT);
exports.itemsHasErrored = redux_actions_1.createAction(actionTypes_1.LOAD_ITEMS_REJECTED, function (hasErrored) {
    return hasErrored;
});
exports.itemsIsLoading = redux_actions_1.createAction(actionTypes_1.LOAD_ITEMS, function (isLoading) {
    return isLoading;
});
exports.itemsFetchDataSuccess = redux_actions_1.createAction(actionTypes_1.LOAD_ITEMS_FULFILLED, function (items) {
    return items;
});
exports.ShowBusy = redux_actions_1.createAction(actionTypes_1.SHOW_BUSY, function (isBusy) {
    return isBusy;
});

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var MainPage_1 = __webpack_require__(/*! ./pages/MainPage */ "./src/pages/MainPage.tsx");
var CheckPage_1 = __webpack_require__(/*! ./pages/CheckPage */ "./src/pages/CheckPage.tsx");
var CheckoutPage_1 = __webpack_require__(/*! ./pages/CheckoutPage */ "./src/pages/CheckoutPage.tsx");
var NotFoundPage_1 = __webpack_require__(/*! ./pages/NotFoundPage */ "./src/pages/NotFoundPage.tsx");
var react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var TestComponent_1 = __webpack_require__(/*! ./components/TestComponent */ "./src/components/TestComponent.tsx");
var Header = function Header() {
    return React.createElement("header", null, React.createElement("nav", null, React.createElement("ul", null, React.createElement("li", null, React.createElement(react_router_dom_2.Link, { to: '/' }, "Home")), React.createElement("li", null, React.createElement(react_router_dom_2.Link, { to: '/test' }, "Test")))));
};
var Main = function Main() {
    return React.createElement(react_router_dom_1.Switch, null, React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: MainPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/check', component: CheckPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/checkOut', component: CheckoutPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/test', component: TestComponent_1.default }), React.createElement(react_router_dom_1.Route, { component: NotFoundPage_1.default }));
};
var App = function App() {
    return React.createElement("div", null, React.createElement(Header, null), React.createElement(Main, null));
};
exports.default = App;

/***/ }),

/***/ "./src/components/DessertsComponent.tsx":
/*!**********************************************!*\
  !*** ./src/components/DessertsComponent.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions.ts");
var List_1 = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
var ListItem_1 = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
var ListItemAvatar_1 = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/index.js");
var ListItemText_1 = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
var DialogTitle_1 = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
var Dialog_1 = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
var types_1 = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
var dictionaries_1 = __webpack_require__(/*! ../utils/dictionaries */ "./src/utils/dictionaries.ts");
var mdi_react_1 = __webpack_require__(/*! mdi-react */ "./node_modules/mdi-react/dist/index.es.js");
var Avatar_1 = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        addDessert: function addDessert(type, taste, size) {
            return dispatch(actions_1.AddDessert(type, taste, size));
        }
    };
};
var DessertsComponent = /** @class */function (_super) {
    __extends(DessertsComponent, _super);
    function DessertsComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            _this.props.handleClose();
        };
        _this.handleDessertSelect = function (dessert) {
            _this.setState({
                dessertType: dessert
            });
        };
        _this.handleDessertTasteSelect = function (taste) {
            _this.setState({
                dessertTaste: taste
            });
        };
        _this.handleDessertSizeSelect = function (size) {
            return __awaiter(_this, void 0, void 0, function () {
                var _a, dessertType, dessertTaste;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.setState({
                                dessertSize: size
                            });
                            _a = this.state, dessertType = _a.dessertType, dessertTaste = _a.dessertTaste;
                            return [4 /*yield*/, this.props.addDessert(dessertType, dessertTaste, size)];
                        case 1:
                            _b.sent();
                            this.props.handleClose();
                            return [2 /*return*/];
                    }
                });
            });
        };
        _this.state = {
            dessertType: null,
            dessertTaste: null
        };
        return _this;
    }
    DessertsComponent.prototype.renderDesserts = function () {
        var _this = this;
        var dessertKeys = Object.keys(types_1.DessertType);
        var desserts = dessertKeys.map(function (d) {
            return {
                id: d,
                value: types_1.DessertType[d]
            };
        });
        return React.createElement("div", null, React.createElement(List_1.default, null, desserts.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDessertSelect(d.value);
                }, key: d.id }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'avatar' }, React.createElement(mdi_react_1.AddIcon, null))), React.createElement(ListItemText_1.default, { primary: d.value }));
        }), React.createElement(ListItem_1.default, { button: true, onClick: this.handleClose }, React.createElement(ListItemText_1.default, { primary: "Cancel" }))));
    };
    ;
    DessertsComponent.prototype.getArrayFromEnum = function (en) {
        var keys = Object.keys(en);
        var values = keys.map(function (d) {
            return {
                id: d,
                value: en[d]
            };
        });
        return values;
    };
    DessertsComponent.prototype.renderDessertTastes = function () {
        var _this = this;
        var dessertType = this.state.dessertType;
        var dessertTastes;
        switch (dessertType) {
            case types_1.DessertType.Cake:
                dessertTastes = this.getArrayFromEnum(types_1.CakesEnum);
                break;
            case types_1.DessertType.Macaron:
                dessertTastes = this.getArrayFromEnum(types_1.MacaronsEnum);
                break;
            case types_1.DessertType.Zephyr:
                dessertTastes = this.getArrayFromEnum(types_1.ZephyrEnum);
                break;
            default:
                dessertTastes = [];
                break;
        }
        ;
        return React.createElement("div", null, React.createElement(List_1.default, null, dessertTastes.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDessertTasteSelect(d.value);
                }, key: d.id }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'avatar' }, React.createElement(mdi_react_1.AddIcon, null))), React.createElement(ListItemText_1.default, { primary: d.value }));
        }), React.createElement(ListItem_1.default, { button: true, onClick: this.handleClose }, React.createElement(ListItemText_1.default, { primary: "Cancel" }))));
    };
    ;
    DessertsComponent.prototype.renderDessertSizes = function () {
        var _this = this;
        var dessertType = this.state.dessertType;
        var dessertSizes = dictionaries_1.DessertsDict[dessertType];
        return React.createElement("div", null, React.createElement(List_1.default, null, dessertSizes.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDessertSizeSelect(d);
                }, key: d }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'avatar' }, React.createElement(mdi_react_1.AddIcon, null))), React.createElement(ListItemText_1.default, { primary: d }));
        }), React.createElement(ListItem_1.default, { button: true, onClick: this.handleClose }, React.createElement(ListItemText_1.default, { primary: "Cancel" }))));
    };
    ;
    DessertsComponent.prototype.render = function () {
        var _a = this.state,
            dessertType = _a.dessertType,
            dessertTaste = _a.dessertTaste;
        return React.createElement(Dialog_1.default, { onClose: this.handleClose, "aria-labelledby": "simple-dialog-title", open: true }, React.createElement(DialogTitle_1.default, { id: "simple-dialog-title" }, !dessertType ? 'Select dessert' : 'Select taste'), !dessertType ? this.renderDesserts() : !dessertTaste ? this.renderDessertTastes() : this.renderDessertSizes());
    };
    return DessertsComponent;
}(react_1.Component);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DessertsComponent);

/***/ }),

/***/ "./src/components/DrinksComponent.tsx":
/*!********************************************!*\
  !*** ./src/components/DrinksComponent.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions.ts");
var List_1 = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
var ListItem_1 = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
var ListItemAvatar_1 = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/index.js");
var ListItemText_1 = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
var DialogTitle_1 = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
var Dialog_1 = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
var types_1 = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
var dictionaries_1 = __webpack_require__(/*! ../utils/dictionaries */ "./src/utils/dictionaries.ts");
var mdi_react_1 = __webpack_require__(/*! mdi-react */ "./node_modules/mdi-react/dist/index.es.js");
var Avatar_1 = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        addDrink: function addDrink(type, size) {
            return dispatch(actions_1.AddDrink(type, size));
        }
    };
};
var DrinksComponent = /** @class */function (_super) {
    __extends(DrinksComponent, _super);
    function DrinksComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            _this.props.handleClose();
        };
        _this.handleDrinkSelect = function (drink) {
            _this.setState({
                drinkType: drink
            });
        };
        _this.handleDrinkSizeSelect = function (drinkSize) {
            return __awaiter(_this, void 0, void 0, function () {
                var drinkType;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.setState({
                                drinkSize: drinkSize
                            });
                            drinkType = this.state.drinkType;
                            return [4 /*yield*/, this.props.addDrink(drinkSize, drinkType)];
                        case 1:
                            _a.sent();
                            this.props.handleClose();
                            return [2 /*return*/];
                    }
                });
            });
        };
        _this.state = {
            drinkType: null,
            drinkSize: null
        };
        return _this;
    }
    DrinksComponent.prototype.renderDrinks = function () {
        var _this = this;
        var drinkKeys = Object.keys(types_1.DrinksType);
        var drinks = drinkKeys.map(function (d) {
            return {
                id: d,
                value: types_1.DrinksType[d]
            };
        });
        return React.createElement("div", null, React.createElement(List_1.default, null, drinks.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDrinkSelect(d.value);
                }, key: d.id }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'avatar' }, React.createElement(mdi_react_1.AddIcon, null))), React.createElement(ListItemText_1.default, { primary: d.value }));
        }), React.createElement(ListItem_1.default, { button: true, onClick: this.handleClose }, React.createElement(ListItemText_1.default, { primary: "Cancel" }))));
    };
    ;
    DrinksComponent.prototype.renderDrinkSizes = function () {
        var _this = this;
        var drinkType = this.state.drinkType;
        var drinkSizes = dictionaries_1.DrinksDict[drinkType];
        return React.createElement("div", null, React.createElement(List_1.default, null, drinkSizes.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDrinkSizeSelect(d);
                }, key: d }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'avatar' }, React.createElement(mdi_react_1.AddIcon, null))), React.createElement(ListItemText_1.default, { primary: d }));
        }), React.createElement(ListItem_1.default, { button: true, onClick: this.handleClose }, React.createElement(ListItemText_1.default, { primary: "Cancel" }))));
    };
    ;
    DrinksComponent.prototype.render = function () {
        var drinkType = this.state.drinkType;
        return React.createElement(Dialog_1.default, { onClose: this.handleClose, "aria-labelledby": "simple-dialog-title", open: true }, React.createElement(DialogTitle_1.default, { id: "simple-dialog-title" }, !drinkType ? 'Select drink' : 'Select size'), !drinkType ? this.renderDrinks() : this.renderDrinkSizes());
    };
    return DrinksComponent;
}(react_1.Component);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DrinksComponent);

/***/ }),

/***/ "./src/components/NewOrderComponent.tsx":
/*!**********************************************!*\
  !*** ./src/components/NewOrderComponent.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var DrinksComponent_1 = __webpack_require__(/*! ./DrinksComponent */ "./src/components/DrinksComponent.tsx");
var DessertsComponent_1 = __webpack_require__(/*! ./DessertsComponent */ "./src/components/DessertsComponent.tsx");
var List_1 = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
var ListItem_1 = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
var ListItemText_1 = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
var Divider_1 = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {
        check: state.check
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};
var NewOrderComponent = /** @class */function (_super) {
    __extends(NewOrderComponent, _super);
    function NewOrderComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.addDrinkClick = function () {
            _this.setState({
                showDrinks: true
            });
        };
        _this.addDessertClick = function () {
            _this.setState({
                showDesserts: true
            });
        };
        _this.state = {
            showDrinks: false,
            showDesserts: false
        };
        return _this;
    }
    NewOrderComponent.prototype.renderCheckContent = function () {
        var check = this.props.check;
        return React.createElement(List_1.default, { component: "nav" }, check.drinks.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, key: d.id }, React.createElement(ListItemText_1.default, { inset: true, primary: d.type + " - " + d.size }));
        }), React.createElement(Divider_1.default, null), check.desserts.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, key: d.id }, React.createElement(ListItemText_1.default, { inset: true, primary: d.type + " - " + d.taste + " - " + d.size }));
        }));
    };
    NewOrderComponent.prototype.render = function () {
        var _this = this;
        var _a = this.state,
            showDrinks = _a.showDrinks,
            showDesserts = _a.showDesserts;
        var check = this.props.check;
        if (!check) {
            return React.createElement("div", { className: "container" }, "Please create new check first");
        }
        return React.createElement("div", { className: "container" }, "Check #" + check.id, React.createElement(Divider_1.default, null), this.renderCheckContent(), React.createElement(Divider_1.default, null), React.createElement(Button_1.default, { variant: "contained", color: "primary", title: "Desserts", onClick: this.addDessertClick }, "Desserts"), React.createElement(Button_1.default, { variant: "contained", color: "primary", title: "Drinks", onClick: this.addDrinkClick }, "Drinks"), React.createElement(Divider_1.default, null), React.createElement(Button_1.default, { disabled: check.desserts.length === 0 && check.drinks.length === 0, variant: "contained", color: "secondary", title: "Checkout" }, React.createElement(react_router_dom_1.Link, { to: '/checkOut' }, "Check Out")), showDrinks && React.createElement(DrinksComponent_1.default, { handleClose: function handleClose() {
                return _this.setState({ showDrinks: false });
            } }), showDesserts && React.createElement(DessertsComponent_1.default, { handleClose: function handleClose() {
                return _this.setState({ showDesserts: false });
            } }));
    };
    return NewOrderComponent;
}(react_1.Component);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NewOrderComponent);

/***/ }),

/***/ "./src/components/TestComponent.tsx":
/*!******************************************!*\
  !*** ./src/components/TestComponent.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions.ts");
var react_async_script_loader_1 = __webpack_require__(/*! react-async-script-loader */ "./node_modules/react-async-script-loader/lib/index.js");
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";
var CLIENT_ID = '842417198767-7k42pt9ecgtu5f7oopng1oqu3a79i5i9.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAlI5i8OOtw8aEEMS48E9pouEptq8tEg2M';
var SPREADSHEET_ID = '1ObMh87dNmizXbdWkH9TiqfrCfApk_rqxPGuQ_zNgJIM';
var mapStateToProps = function mapStateToProps(state) {
    return {
        items: state.items,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        label: state.label
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchData: function fetchData(url) {
            return dispatch(actions_1.ProcessFetchData(url));
        },
        appendData: function appendData(url, data) {
            return dispatch(actions_1.ProcessAppendData(url, data));
        },
        updateData: function updateData(url, data) {
            return dispatch(actions_1.ProcessUpdateData(url, data));
        }
    };
};
var TestComponent = /** @class */function (_super) {
    __extends(TestComponent, _super);
    function TestComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAuthClick = function (event) {
            window['gapi'].auth2.getAuthInstance().signIn();
            _this.setState({
                isSignedIn: true
            });
        };
        _this.handleSignoutClick = function (event) {
            window['gapi'].auth2.getAuthInstance().signOut();
            _this.setState({
                isSignedIn: false
            });
        };
        _this.handleAppendClick = function (event) {
            var data = [["Item1", "Cost", "Stocked", "Ship Date"], ["Wheel1", "$20.50", "4", "3/1/2016"], ["Door1", "$15", "2", "3/15/2016"], ["Engine1", "$100", "1", "30/20/2016"], ["Totals1", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]];
            _this.props.appendData(SPREADSHEET_ID, data);
        };
        _this.handleUpdateClick = function (event) {
            var data = [["Item1", "Cost", "Stocked", "Ship Date"], ["Wheel1", "$20.50", "4", "3/1/2016"], ["Door1", "$15", "2", "3/15/2016"], ["Engine1", "$100", "1", "30/20/2016"], ["Totals1", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]];
            _this.props.updateData(SPREADSHEET_ID, data);
        };
        _this.initClient = function () {
            window['gapi'].client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(function () {
                _this.props.fetchData(SPREADSHEET_ID);
            });
        };
        _this.state = {
            isSignedIn: null
        };
        return _this;
    }
    TestComponent.prototype.componentWillReceiveProps = function (nextProps) {
        var isScriptLoaded = nextProps.isScriptLoaded;
        if (isScriptLoaded && !this.props.isScriptLoaded) {
            window['gapi'].load('client:auth2', this.initClient);
        }
    };
    TestComponent.prototype.componentDidMount = function () {
        // this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    };
    TestComponent.prototype.render = function () {
        var _a = this.props,
            label = _a.label,
            hasErrored = _a.hasErrored,
            isLoading = _a.isLoading,
            items = _a.items;
        var isSignedIn = this.state.isSignedIn;
        var result;
        if (hasErrored) {
            result = React.createElement("p", null, "Sorry! There was an error loading the items");
        }
        if (isLoading) {
            result = React.createElement("p", null, "Loading\u2026");
        } else {
            result = React.createElement(React.Fragment, null, React.createElement("div", { className: "container" }, React.createElement("div", { className: "container-child" }, label)), React.createElement("ul", null, items.map(function (item, index) {
                return React.createElement("li", { key: index }, item[0] + item[1]);
            })));
        }
        return React.createElement(React.Fragment, null, result, React.createElement("button", { onClick: this.handleAppendClick, style: { display: isSignedIn ? 'block' : 'none' } }, "Append Data"), React.createElement("br", null), React.createElement("button", { onClick: this.handleUpdateClick, style: { display: isSignedIn ? 'block' : 'none' } }, "Update Data"), React.createElement("br", null), React.createElement("button", { id: "authorize_button", onClick: this.handleAuthClick, style: { display: isSignedIn ? 'none' : 'block' } }, "Authorize"), React.createElement("button", { id: "signout_button", onClick: this.handleSignoutClick, style: { display: isSignedIn ? 'block' : 'none' } }, "Sign Out"));
    };
    return TestComponent;
}(react_1.Component);
exports.default = react_async_script_loader_1.default('https://apis.google.com/js/api.js')(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TestComponent));

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var configureStore_1 = __webpack_require__(/*! ./store/configureStore */ "./src/store/configureStore.ts");
__webpack_require__(/*! ./styles/global.scss */ "./src/styles/global.scss");
var initialState_1 = __webpack_require__(/*! ./store/initialState */ "./src/store/initialState.ts");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var app_1 = __webpack_require__(/*! ./app */ "./src/app.tsx");
__webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
var store = configureStore_1.default(initialState_1.default);
var root = document.createElement('div');
document.body.appendChild(root);
root.style.height = "100%";
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store }, React.createElement(react_router_dom_1.HashRouter, null, React.createElement(app_1.default, null))), root);

/***/ }),

/***/ "./src/pages/CheckPage.tsx":
/*!*********************************!*\
  !*** ./src/pages/CheckPage.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var NewOrderComponent_1 = __webpack_require__(/*! ../components/NewOrderComponent */ "./src/components/NewOrderComponent.tsx");
var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};
var CheckPage = /** @class */function (_super) {
    __extends(CheckPage, _super);
    function CheckPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckPage.prototype.render = function () {
        return React.createElement("div", { className: "container" }, "Check Page", React.createElement(NewOrderComponent_1.default, null));
    };
    return CheckPage;
}(react_1.Component);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CheckPage);

/***/ }),

/***/ "./src/pages/CheckoutPage.tsx":
/*!************************************!*\
  !*** ./src/pages/CheckoutPage.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
var types_1 = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions.ts");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var Divider_1 = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
var Radio_1 = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
var FormControlLabel_1 = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {
        check: state.check
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        handleCheckout: function handleCheckout() {
            return dispatch(actions_1.ProcessCheckout());
        },
        setPaymentType: function setPaymentType(type) {
            return dispatch(actions_1.SetPaymentType(type));
        },
        setOrderType: function setOrderType(type) {
            return dispatch(actions_1.SetOrderType(type));
        }
    };
};
var CheckoutPage = /** @class */function (_super) {
    __extends(CheckoutPage, _super);
    function CheckoutPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCheckout = function () {
            _this.props.handleCheckout();
            _this.props.history.push('/');
        };
        _this.handlePaymentTypeChange = function (type) {
            _this.props.setPaymentType(type);
        };
        _this.handleOrderTypeChange = function (type) {
            _this.props.setOrderType(type);
        };
        return _this;
    }
    CheckoutPage.prototype.render = function () {
        var _this = this;
        var check = this.props.check;
        if (!check) {
            return React.createElement("div", { className: "container" }, "Please create new check first");
        }
        return React.createElement("div", { className: "container" }, "Check out Page", React.createElement(Divider_1.default, null), React.createElement("div", null, "Payment Type:", React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.payment === types_1.Payment.Card, onChange: function onChange() {
                    return _this.handlePaymentTypeChange(types_1.Payment.Card);
                }, value: types_1.Payment.Card.toString() }), label: "Card" }), React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.payment === types_1.Payment.Cash, onChange: function onChange() {
                    return _this.handlePaymentTypeChange(types_1.Payment.Cash);
                }, value: types_1.Payment.Cash.toString() }), label: "Cash" })), React.createElement(Divider_1.default, null), React.createElement("div", null, "Order Type:", React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.type === types_1.OrderType.PreOrder, onChange: function onChange() {
                    return _this.handleOrderTypeChange(types_1.OrderType.PreOrder);
                }, value: types_1.OrderType.PreOrder.toString() }), label: "Pre Order" }), React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.type === types_1.OrderType.Shop, onChange: function onChange() {
                    return _this.handleOrderTypeChange(types_1.OrderType.Shop);
                }, value: types_1.OrderType.Shop.toString() }), label: "Shop" })), React.createElement(Divider_1.default, null), React.createElement(Button_1.default, { variant: "contained", color: "primary", title: "Check Out", onClick: this.handleCheckout }, "Check Out"));
    };
    return CheckoutPage;
}(react_1.Component);
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CheckoutPage));

/***/ }),

/***/ "./src/pages/MainPage.tsx":
/*!********************************!*\
  !*** ./src/pages/MainPage.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions.ts");
var types_1 = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
var List_1 = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
var ListItem_1 = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
var ListItemText_1 = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
var Divider_1 = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {
        history: state.history
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        createCheck: function createCheck(url) {
            return dispatch(actions_1.CreateCheck());
        }
    };
};
var MainPage = /** @class */function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onNewCheckClick = function () {
            _this.props.createCheck();
        };
        return _this;
    }
    MainPage.prototype.renderHistory = function () {
        var history = this.props.history;
        return React.createElement(List_1.default, { component: "nav" }, history.map(function (h) {
            return React.createElement(ListItem_1.default, { button: true, key: h.id }, React.createElement(ListItemText_1.default, { inset: true, primary: "Check #" + h.id + ", desserts count: " + h.desserts.length + ", drinks count: " + h.drinks.length + ", pay by " + types_1.Payment[h.payment] + ", ordered in " + types_1.OrderType[h.type] }));
        }));
    };
    MainPage.prototype.render = function () {
        var _a = this.props;
        return React.createElement("div", { className: "container" }, "Main Page", React.createElement(Divider_1.default, null), React.createElement(Button_1.default, { variant: "contained", color: "primary", title: "New Check", onClick: this.onNewCheckClick }, React.createElement(react_router_dom_1.Link, { to: '/check' }, "New Check")), React.createElement(Divider_1.default, null), "HISTORY", this.renderHistory());
    };
    return MainPage;
}(react_1.Component);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MainPage);

/***/ }),

/***/ "./src/pages/NotFoundPage.tsx":
/*!************************************!*\
  !*** ./src/pages/NotFoundPage.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};
var NotFoundPage = /** @class */function (_super) {
    __extends(NotFoundPage, _super);
    function NotFoundPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFoundPage.prototype.render = function () {
        var _a = this.props;
        return React.createElement("div", { className: "container" }, "Not Found");
    };
    return NotFoundPage;
}(react_1.Component);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NotFoundPage);

/***/ }),

/***/ "./src/reducer.ts":
/*!************************!*\
  !*** ./src/reducer.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");
var actionTypes_1 = __webpack_require__(/*! ./actionTypes */ "./src/actionTypes.ts");
var types_1 = __webpack_require__(/*! ./utils/types */ "./src/utils/types.ts");
var initialState_1 = __webpack_require__(/*! ./store/initialState */ "./src/store/initialState.ts");
exports.default = redux_actions_1.handleActions((_a = {}, _a[actionTypes_1.CREATE_CHECK] = function (state, action) {
    var history = state.history;
    var check = {
        id: history.length + 1,
        desserts: new Array(),
        drinks: new Array(),
        isFinished: false,
        payment: types_1.Payment.Cash,
        type: types_1.OrderType.Shop
    };
    return Object.assign({}, state, {
        check: check
    });
}, _a[actionTypes_1.ADD_DRINK] = function (state, action) {
    var check = state.check;
    var drink = {
        id: check.drinks.length + 1,
        type: action.payload[0],
        size: action.payload[1]
    };
    check.drinks.push(drink);
    return Object.assign({}, state, {
        check: check
    });
}, _a[actionTypes_1.ADD_DESSERT] = function (state, action) {
    var check = state.check;
    var dessert = {
        id: check.desserts.length + 1,
        type: action.payload[0],
        taste: action.payload[1],
        size: action.payload[2]
    };
    check.desserts.push(dessert);
    return Object.assign({}, state, {
        check: check
    });
}, _a[actionTypes_1.PROCESS_CHECKOUT] = function (state, action) {
    var check = state.check,
        history = state.history;
    check.isFinished = true;
    history.push(check);
    return Object.assign({}, state, {
        check: null,
        history: history
    });
}, _a[actionTypes_1.SET_PAYMENT_TYPE] = function (state, action) {
    var check = state.check;
    check.payment = action.payload;
    return __assign({}, state, { check: __assign({}, check) });
}, _a[actionTypes_1.SET_ORDER_TYPE] = function (state, action) {
    var check = state.check;
    check.type = action.payload;
    return __assign({}, state, { check: __assign({}, check) });
}, _a[actionTypes_1.LOAD_ITEMS] = function (state, action) {
    return Object.assign({}, state, {
        isLoading: action.payload
    });
}, _a[actionTypes_1.LOAD_ITEMS_FULFILLED] = function (state, action) {
    return Object.assign({}, state, {
        items: action.payload
    });
}, _a[actionTypes_1.LOAD_ITEMS_REJECTED] = function (state, action) {
    return Object.assign({}, state, {
        hasErrored: action.payload
    });
}, _a[actionTypes_1.SHOW_BUSY] = function (state, action) {
    var isBusy = action.payload;
    return __assign({}, state, { isBusy: isBusy });
}, _a), initialState_1.default);
var _a;

/***/ }),

/***/ "./src/store/configureStore.ts":
/*!*************************************!*\
  !*** ./src/store/configureStore.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var reducer_1 = __webpack_require__(/*! ../reducer */ "./src/reducer.ts");
function configureStore(initialState) {
    return redux_1.createStore(reducer_1.default, initialState, redux_1.applyMiddleware(redux_thunk_1.default));
}
exports.default = configureStore;

/***/ }),

/***/ "./src/store/initialState.ts":
/*!***********************************!*\
  !*** ./src/store/initialState.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    hasErrored: false,
    isLoading: false,
    items: [],
    check: null,
    history: new Array()
};

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./global.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/styles/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/utils/dictionaries.ts":
/*!***********************************!*\
  !*** ./src/utils/dictionaries.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ./types */ "./src/utils/types.ts");
exports.DrinksDict = {};
exports.DrinksDict[types_1.DrinksType.Espresso] = ['30 мл'];
exports.DrinksDict[types_1.DrinksType.Doppio] = ['60 мл'];
exports.DrinksDict[types_1.DrinksType.Americano] = ['120 мл'];
exports.DrinksDict[types_1.DrinksType.AmericanoMilk] = ['120 мл'];
exports.DrinksDict[types_1.DrinksType.Machiato] = ['90 мл'];
exports.DrinksDict[types_1.DrinksType.Cappucino] = ['175 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.FlatWhite] = ['175 мл'];
exports.DrinksDict[types_1.DrinksType.Latte] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.LatteLavender] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.Raf] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.RafCitrus] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.TeaGreen] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.TeaBlack] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.TeaHerbal] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.SpeacialTeaPearLime] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.SpecialTeaOrange] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.Cacao] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.HotChocolate] = ['175 мл'];
exports.DrinksDict[types_1.DrinksType.LemonadeStrawberry] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.LemonadeCitrus] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.LemonadePassion] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.IceLatte] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.Syrop] = ['0 мл'];
exports.DessertsDict = {};
exports.DessertsDict[types_1.DessertType.Macaron] = ['1 шт', '6 шт', '12 шт', '24 шт'];
exports.DessertsDict[types_1.DessertType.Zephyr] = ['1 шт', '8 шт', '16 шт'];
exports.DessertsDict[types_1.DessertType.Cake] = ['18 см', '22 см'];

/***/ }),

/***/ "./src/utils/types.ts":
/*!****************************!*\
  !*** ./src/utils/types.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Payment;
(function (Payment) {
    Payment[Payment["Card"] = 0] = "Card";
    Payment[Payment["Cash"] = 1] = "Cash";
    Payment[Payment["Other"] = 2] = "Other";
})(Payment = exports.Payment || (exports.Payment = {}));
var OrderType;
(function (OrderType) {
    OrderType[OrderType["PreOrder"] = 0] = "PreOrder";
    OrderType[OrderType["Shop"] = 1] = "Shop";
    OrderType[OrderType["Other"] = 2] = "Other";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var DessertType;
(function (DessertType) {
    DessertType["Macaron"] = "\u041C\u0430\u043A\u0430\u0440\u043E\u043D\u0441";
    DessertType["Zephyr"] = "\u0417\u0435\u0444\u0438\u0440";
    DessertType["Cake"] = "\u0422\u043E\u0440\u0442";
})(DessertType = exports.DessertType || (exports.DessertType = {}));
var MacaronsEnum;
(function (MacaronsEnum) {
    MacaronsEnum["Chocolate"] = "\u0428\u043E\u043A\u043E\u043B\u0430\u0434";
    MacaronsEnum["CoffeeCaramel"] = "\u041A\u043E\u0444\u0435 - \u0421\u043E\u043B\u0451\u043D\u0430\u044F \u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C";
    MacaronsEnum["MangoPassion"] = "\u041C\u0430\u043D\u0433\u043E - \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F";
    MacaronsEnum["LimeBasil"] = "\u041B\u0430\u0439\u043C - \u0411\u0430\u0437\u0438\u043B\u0438\u043A";
    MacaronsEnum["Pistachio"] = "\u0424\u0438\u0441\u0442\u0430\u0448\u043A\u0430";
    MacaronsEnum["DorBluePear"] = "\u0414\u043E\u0431-\u0411\u043B\u044E - \u0413\u0440\u0443\u0448\u0430";
    MacaronsEnum["LavenderBlackberry"] = "\u041B\u0430\u0432\u0430\u043D\u0434\u0430 - \u0427\u0435\u0440\u043D\u0438\u043A\u0430";
    MacaronsEnum["Currant"] = "\u0421\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430";
    MacaronsEnum["StrawberryCheesecake"] = "\u041A\u043B\u0443\u0431\u043D\u0438\u0447\u043D\u044B\u0439 \u0427\u0438\u0437\u043A\u0435\u0439\u043A";
    MacaronsEnum["ParmesanFigue"] = "\u041F\u0430\u0440\u043C\u0435\u0437\u0430\u043D - \u0418\u043D\u0436\u0438\u0440";
})(MacaronsEnum = exports.MacaronsEnum || (exports.MacaronsEnum = {}));
var ZephyrEnum;
(function (ZephyrEnum) {
    ZephyrEnum["Apple"] = "\u042F\u0431\u043B\u043E\u043A\u043E";
    ZephyrEnum["Currant"] = "\u0421\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430";
    ZephyrEnum["ApricotPassionFruit"] = "\u0410\u0431\u0440\u0438\u043A\u043E\u0441 - \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F";
    ZephyrEnum["StrawberryCranberry"] = "\u041A\u043B\u0443\u0431\u043D\u0438\u043A\u0430 - \u041A\u043B\u044E\u043A\u0432\u0430";
})(ZephyrEnum = exports.ZephyrEnum || (exports.ZephyrEnum = {}));
var CakesEnum;
(function (CakesEnum) {
    CakesEnum["Rio"] = "Rio";
    CakesEnum["CarrotCake"] = "Carrot Cake";
    CakesEnum["Soul"] = "Soul";
    CakesEnum["Pink"] = "Pink";
    CakesEnum["Infinity"] = "Infinity";
})(CakesEnum = exports.CakesEnum || (exports.CakesEnum = {}));
var DrinksType;
(function (DrinksType) {
    DrinksType["Espresso"] = "\u042D\u0441\u043F\u0440\u0435\u0441\u0441\u043E";
    DrinksType["Doppio"] = "\u0414\u043E\u043F\u043F\u0438\u043E";
    DrinksType["Americano"] = "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u043E";
    DrinksType["AmericanoMilk"] = "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u043E \u0441 \u043C\u043E\u043B\u043E\u043A\u043E\u043C";
    DrinksType["Machiato"] = "\u041C\u0430\u043A\u0438\u0430\u0442\u043E";
    DrinksType["Cappucino"] = "\u041A\u0430\u043F\u0443\u0447\u0438\u043D\u043E";
    DrinksType["FlatWhite"] = "\u0424\u043B\u0435\u0442 \u0412\u0430\u0439\u0442";
    DrinksType["Latte"] = "\u041B\u0430\u0442\u0442\u0435";
    DrinksType["LatteLavender"] = "\u041B\u0430\u0442\u0442\u0435 \u041B\u0430\u0432\u0430\u043D\u0434\u0430";
    DrinksType["Raf"] = "\u0420\u0430\u0444";
    DrinksType["RafCitrus"] = "\u0420\u0430\u0444 \u0426\u0438\u0442\u0440\u0443\u0441";
    DrinksType["TeaGreen"] = "\u0427\u0430\u0439 \u0417\u0435\u043B\u0451\u043D\u044B\u0439";
    DrinksType["TeaBlack"] = "\u0427\u0430\u0439 \u0427\u0451\u0440\u043D\u044B\u0439";
    DrinksType["TeaHerbal"] = "\u0427\u0430\u0439 \u0422\u0440\u0430\u0432\u044F\u043D\u043E\u0439";
    DrinksType["SpeacialTeaPearLime"] = "\u0427\u0430\u0439 \u0413\u0440\u0443\u0448\u0430-\u041B\u0430\u0439\u043C";
    DrinksType["SpecialTeaOrange"] = "\u0427\u0430\u0439 \u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D-\u041E\u0431\u043B\u0435\u043F\u0438\u0445\u0430";
    DrinksType["Cacao"] = "\u041A\u0430\u043A\u0430\u043E";
    DrinksType["HotChocolate"] = "\u0413\u0430\u0440\u044F\u0447\u0438\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434";
    DrinksType["LemonadeStrawberry"] = "\u041B\u0438\u043C\u043E\u043D\u0430\u0434 \u041A\u043B\u0443\u0431\u043D\u0438\u043A\u0430";
    DrinksType["LemonadeCitrus"] = "\u041B\u0438\u043C\u043E\u043D\u0430\u0434 \u0426\u0438\u0442\u0440\u0443\u0441";
    DrinksType["LemonadePassion"] = "\u041B\u0438\u043C\u043E\u043D\u0430\u0434 \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F";
    DrinksType["IceLatte"] = "\u0410\u0439\u0441 \u041B\u0430\u0442\u0442\u0435";
    DrinksType["Syrop"] = "\u0421\u0438\u0440\u043E\u043F";
})(DrinksType = exports.DrinksType || (exports.DrinksType = {}));
var ValueInputOption;
(function (ValueInputOption) {
    ValueInputOption["INPUT_VALUE_OPTION_UNSPECIFIED"] = "INPUT_VALUE_OPTION_UNSPECIFIED";
    ValueInputOption["RAW"] = "RAW";
    ValueInputOption["USER_ENTERED"] = "USER_ENTERED";
})(ValueInputOption = exports.ValueInputOption || (exports.ValueInputOption = {}));
var InsertDataOption;
(function (InsertDataOption) {
    InsertDataOption["OVERWRITE"] = "OVERWRITE";
    InsertDataOption["INSERT_ROWS"] = "INSERT_ROWS";
})(InsertDataOption = exports.InsertDataOption || (exports.InsertDataOption = {}));
var ValueRenderOption;
(function (ValueRenderOption) {
    ValueRenderOption["FORMATTED_VALUE"] = "FORMATTED_VALUE";
    ValueRenderOption["UNFORMATTED_VALUE"] = "UNFORMATTED_VALUE";
    ValueRenderOption["FORMULA"] = "FORMULA";
})(ValueRenderOption = exports.ValueRenderOption || (exports.ValueRenderOption = {}));
var DateTimeRenderOption;
(function (DateTimeRenderOption) {
    DateTimeRenderOption["SERIAL_NUMBER"] = "SERIAL_NUMBER";
    DateTimeRenderOption["FORMATTED_STRING"] = "FORMATTED_STRING";
})(DateTimeRenderOption = exports.DateTimeRenderOption || (exports.DateTimeRenderOption = {}));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGVzc2VydHNDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyaW5rc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmV3T3JkZXJDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrb3V0UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTm90Rm91bmRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzP2RjYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RpY3Rpb25hcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FB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dUJBRy9CLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJzsgfVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7IH1cXG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG5cXG4uYXZhdGFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MmMzZTk7XFxuICBjb2xvcjogIzFkNTNhMzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydCBjb25zdCBDUkVBVEVfQ0hFQ0sgPSAnQ1JFQVRFX0NIRUNLJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfRFJJTksgPSAnQUREX0RSSU5LJztcclxuZXhwb3J0IGNvbnN0IEFERF9ERVNTRVJUID0gJ0FERF9ERVNTRVJUJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9UWVBFID0gJ1NFVF9QQVlNRU5UX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgU0VUX09SREVSX1RZUEUgPSAnU0VUX09SREVSX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgUFJPQ0VTU19DSEVDS09VVCA9ICdQUk9DRVNTX0NIRUNLT1VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0lURU1TID0gJ0xPQURfSVRFTVMnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNU19GVUxGSUxMRUQgPSAnTE9BRF9JVEVNU19GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNU19SRUpFQ1RFRCA9ICdMT0FEX0lURU1TX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9XX0JVU1kgPSBcIlNIT1dfQlVTWVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBID0gJ0FQUEVORF9EQVRBJztcclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBX0ZVTEZJTExFRCA9ICdBUFBFTkRfREFUQV9GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgQVBQRU5EX0RBVEFfUkVKRUNURUQgPSAnQVBQRU5EX0RBVEFfUkVKRUNURUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBID0gJ1VQREFURV9EQVRBJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBX0ZVTEZJTExFRCA9ICdVUERBVEVfREFUQV9GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEFfUkVKRUNURUQgPSAnVVBEQVRFX0RBVEFfUkVKRUNURUQnO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIEFjdGlvbiB9IGZyb20gXCJyZWR1eC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX0lURU1TLFxyXG4gICAgTE9BRF9JVEVNU19GVUxGSUxMRUQsXHJcbiAgICBMT0FEX0lURU1TX1JFSkVDVEVELFxyXG4gICAgU0hPV19CVVNZLFxyXG4gICAgQ1JFQVRFX0NIRUNLLFxyXG4gICAgUFJPQ0VTU19DSEVDS09VVCxcclxuICAgIEFERF9EUklOSyxcclxuICAgIEFERF9ERVNTRVJULFxyXG4gICAgU0VUX1BBWU1FTlRfVFlQRSxcclxuICAgIFNFVF9PUkRFUl9UWVBFLFxyXG4gICAgQVBQRU5EX0RBVEEsXHJcbiAgICBVUERBVEVfREFUQVxyXG59IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgeyBEcmlua3NUeXBlLCBEZXNzZXJ0VHlwZSwgUGF5bWVudCwgT3JkZXJUeXBlLCBcclxuICAgIFZhbHVlSW5wdXRPcHRpb24sIEluc2VydERhdGFPcHRpb24sIFZhbHVlUmVuZGVyT3B0aW9uLCBEYXRlVGltZVJlbmRlck9wdGlvbiB9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NGZXRjaERhdGEgPSAoc3ByZWFkc2hlZXRJZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgIHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiAnQTI6QjQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudmFsdWVzO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0ZldGNoRGF0YVN1Y2Nlc3MoaXRlbXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NBcHBlbmREYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZywgdmFsdWVSYW5nZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6ICdBNjpEOScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBWYWx1ZUlucHV0T3B0aW9uLlVTRVJfRU5URVJFRCxcclxuICAgICAgICAgICAgICAgIGluc2VydERhdGFPcHRpb246IEluc2VydERhdGFPcHRpb24uT1ZFUldSSVRFLFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUVcclxuICAgICAgICAgICAgfSwgeyB2YWx1ZXM6IHZhbHVlUmFuZ2UgfSk7XHJcbiAgICAgICAgICAgIC8vVE9ETzogUHJvY2VzcyByZXNwb25zZSByZXN1bHRcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudmFsdWVzO1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNGZXRjaERhdGFTdWNjZXNzKGl0ZW1zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzVXBkYXRlRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcsIHZhbHVlUmFuZ2U6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiAnQTY6RDEwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZURhdGVUaW1lUmVuZGVyT3B0aW9uOiBEYXRlVGltZVJlbmRlck9wdGlvbi5GT1JNQVRURURfU1RSSU5HXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG4gICAgICAgICAgICAvL1RPRE86IFByb2Nlc3MgcmVzcG9uc2UgcmVzdWx0XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0LnZhbHVlcztcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyhpdGVtcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNIYXNFcnJvcmVkKHRydWUpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0ZldGNoRGF0YUZha2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQ2hlY2sgPSBjcmVhdGVBY3Rpb24oQ1JFQVRFX0NIRUNLKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGREcmluayA9IGNyZWF0ZUFjdGlvbihBRERfRFJJTkssICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IFt0eXBlLCBzaXplXSk7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRGVzc2VydCA9IGNyZWF0ZUFjdGlvbihBRERfREVTU0VSVCwgKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcpID0+IFt0eXBlLCB0YXN0ZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldFBheW1lbnRUeXBlID0gY3JlYXRlQWN0aW9uKFNFVF9QQVlNRU5UX1RZUEUsICh0eXBlOiBQYXltZW50KSA9PiB0eXBlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRPcmRlclR5cGUgPSBjcmVhdGVBY3Rpb24oU0VUX09SREVSX1RZUEUsICh0eXBlOiBPcmRlclR5cGUpID0+IHR5cGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NDaGVja291dCA9IGNyZWF0ZUFjdGlvbihQUk9DRVNTX0NIRUNLT1VUKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0hhc0Vycm9yZWQgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNU19SRUpFQ1RFRCwgKGhhc0Vycm9yZWQ6IGJvb2xlYW4pID0+IGhhc0Vycm9yZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zSXNMb2FkaW5nID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVMsIChpc0xvYWRpbmc6IGJvb2xlYW4pID0+IGlzTG9hZGluZyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNGZXRjaERhdGFTdWNjZXNzID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVNfRlVMRklMTEVELCAoaXRlbXM6IGFueVtdKSA9PiBpdGVtcyk7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0J1c3kgPSBjcmVhdGVBY3Rpb24oU0hPV19CVVNZLCAoaXNCdXN5OiBib29sZWFuKSA9PiBpc0J1c3kpO1xyXG4iLCJpbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL01haW5QYWdlJztcclxuaW1wb3J0IENoZWNrUGFnZSBmcm9tICcuL3BhZ2VzL0NoZWNrUGFnZSc7XHJcbmltcG9ydCBDaGVja291dFBhZ2UgZnJvbSAnLi9wYWdlcy9DaGVja291dFBhZ2UnO1xyXG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4vcGFnZXMvTm90Rm91bmRQYWdlJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVGVzdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudCc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nLyc+SG9tZTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdGVzdCc+VGVzdDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbilcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e01haW5QYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2snIGNvbXBvbmVudD17Q2hlY2tQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2tPdXQnIGNvbXBvbmVudD17Q2hlY2tvdXRQYWdlfSAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvdGVzdCcgY29tcG9uZW50PXtUZXN0Q29tcG9uZW50fSAvPlxyXG4gICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kUGFnZX0gLz5cclxuICAgIDwvU3dpdGNoPlxyXG4pXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8TWFpbiAvPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWRkRGVzc2VydCB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERlc3NlcnRUeXBlLCBEZXNzZXJ0LCBNYWNhcm9uc0VudW0sIENha2VzRW51bSwgWmVwaHlyRW51bSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRGVzc2VydHNEaWN0IH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgQWRkSWNvbiB9IGZyb20gJ21kaS1yZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBhZGREZXNzZXJ0OiAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZykgPT4gZGlzcGF0Y2goQWRkRGVzc2VydCh0eXBlLCB0YXN0ZSwgc2l6ZSkpXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlc3NlcnRzQ29tcG9uZW50UHJvcHMge1xyXG4gIGFkZERlc3NlcnQ/OiAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZykgPT4gdm9pZDtcclxuICBoYW5kbGVDbG9zZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlc3NlcnRzQ29tcG9uZW50U3RhdGUge1xyXG4gIGRlc3NlcnRUeXBlPzogRGVzc2VydFR5cGU7XHJcbiAgZGVzc2VydFRhc3RlPzogc3RyaW5nO1xyXG4gIGRlc3NlcnRTaXplPzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBEZXNzZXJ0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRGVzc2VydHNDb21wb25lbnRQcm9wcywgSURlc3NlcnRzQ29tcG9uZW50U3RhdGU+e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGVzc2VydFR5cGU6IG51bGwsXHJcbiAgICAgIGRlc3NlcnRUYXN0ZTogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0U2VsZWN0ID0gKGRlc3NlcnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0VHlwZTogZGVzc2VydFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0VGFzdGVTZWxlY3QgPSAodGFzdGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0VGFzdGU6IHRhc3RlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRTaXplU2VsZWN0ID0gYXN5bmMgKHNpemUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0U2l6ZTogc2l6ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIHNpemUpO1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGVzc2VydHMoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0S2V5cyA9IE9iamVjdC5rZXlzKERlc3NlcnRUeXBlKTtcclxuICAgIGNvbnN0IGRlc3NlcnRzID0gZGVzc2VydEtleXMubWFwKGQgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBkLFxyXG4gICAgICAgIHZhbHVlOiBEZXNzZXJ0VHlwZVtkXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydHMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRTZWxlY3QoZC52YWx1ZSl9IGtleT17ZC5pZH0gPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICBnZXRBcnJheUZyb21FbnVtKGVuOiBhbnkpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbik7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcChkID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogZCxcclxuICAgICAgICB2YWx1ZTogZW5bZF1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXJEZXNzZXJ0VGFzdGVzKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBsZXQgZGVzc2VydFRhc3RlcztcclxuICAgIHN3aXRjaCAoZGVzc2VydFR5cGUpIHtcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5DYWtlOlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oQ2FrZXNFbnVtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5NYWNhcm9uOlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oTWFjYXJvbnNFbnVtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5aZXBoeXI6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShaZXBoeXJFbnVtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydFRhc3Rlcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlfSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRGVzc2VydFNpemVzKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGRlc3NlcnRTaXplcyA9IERlc3NlcnRzRGljdFtkZXNzZXJ0VHlwZV07XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtkZXNzZXJ0U2l6ZXMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRTaXplU2VsZWN0KGQpfSBrZXk9e2R9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkfSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuPXt0cnVlfSA+XHJcbiAgICAgIDxEaWFsb2dUaXRsZSBpZD1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIj57IWRlc3NlcnRUeXBlID8gJ1NlbGVjdCBkZXNzZXJ0JyA6ICdTZWxlY3QgdGFzdGUnfTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgIHshZGVzc2VydFR5cGUgPyB0aGlzLnJlbmRlckRlc3NlcnRzKCkgOiAoIWRlc3NlcnRUYXN0ZSA/IHRoaXMucmVuZGVyRGVzc2VydFRhc3RlcygpIDogdGhpcy5yZW5kZXJEZXNzZXJ0U2l6ZXMoKSl9XHJcbiAgICA8L0RpYWxvZz47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGVzc2VydHNDb21wb25lbnQpKVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWRkRHJpbmsgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgeyBEcmlua3NUeXBlLCBEcmluayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRHJpbmtzRGljdCB9IGZyb20gJy4uL3V0aWxzL2RpY3Rpb25hcmllcyc7XHJcbmltcG9ydCB7IEFkZEljb24gfSBmcm9tICdtZGktcmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZERyaW5rOiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChBZGREcmluayh0eXBlLCBzaXplKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEcmlua3NDb21wb25lbnRQcm9wcyB7XHJcbiAgICBhZGREcmluaz86ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDbG9zZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyaW5rc0NvbXBvbmVudFN0YXRlIHtcclxuICAgIGRyaW5rVHlwZT86IERyaW5rc1R5cGU7XHJcbiAgICBkcmlua1NpemU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIERyaW5rc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRHJpbmtzQ29tcG9uZW50UHJvcHMsIElEcmlua3NDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJpbmtUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICBkcmlua1NpemU6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyaW5rU2VsZWN0ID0gKGRyaW5rKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyaW5rVHlwZTogZHJpbmtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmlua1NpemVTZWxlY3QgPSBhc3luYyAoZHJpbmtTaXplKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyaW5rU2l6ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERyaW5rKGRyaW5rU2l6ZSwgZHJpbmtUeXBlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRHJpbmtzKCkge1xyXG4gICAgICAgIGNvbnN0IGRyaW5rS2V5cyA9IE9iamVjdC5rZXlzKERyaW5rc1R5cGUpO1xyXG4gICAgICAgIGNvbnN0IGRyaW5rcyA9IGRyaW5rS2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBEcmlua3NUeXBlW2RdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZHJpbmtzLm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRHJpbmtTZWxlY3QoZC52YWx1ZSl9IGtleT17ZC5pZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZC52YWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJEcmlua1NpemVzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGRyaW5rU2l6ZXMgPSBEcmlua3NEaWN0W2RyaW5rVHlwZV07XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtkcmlua1NpemVzLm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRHJpbmtTaXplU2VsZWN0KGQpfSBrZXk9e2R9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPERpYWxvZyBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3Blbj17dHJ1ZX0gPlxyXG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+eyFkcmlua1R5cGUgPyAnU2VsZWN0IGRyaW5rJyA6ICdTZWxlY3Qgc2l6ZSd9PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgeyFkcmlua1R5cGUgPyB0aGlzLnJlbmRlckRyaW5rcygpIDogdGhpcy5yZW5kZXJEcmlua1NpemVzKCl9XHJcbiAgICAgICAgPC9EaWFsb2c+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRHJpbmtzQ29tcG9uZW50KSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgRHJpbmtzQ29tcG9uZW50IGZyb20gJy4vRHJpbmtzQ29tcG9uZW50JztcclxuaW1wb3J0IERlc3NlcnRzQ29tcG9uZW50IGZyb20gJy4vRGVzc2VydHNDb21wb25lbnQnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVjazogc3RhdGUuY2hlY2tcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5ld09yZGVyQ29tcG9uZW50UHJvcHMge1xyXG4gICAgY2hlY2s/OiBDaGVja1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXdPcmRlckNvbXBvbmVudFN0YXRlIHtcclxuICAgIHNob3dEcmlua3M/OiBib29sZWFuO1xyXG4gICAgc2hvd0Rlc3NlcnRzPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgTmV3T3JkZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SU5ld09yZGVyQ29tcG9uZW50UHJvcHMsIElOZXdPcmRlckNvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93RHJpbmtzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0Rlc3NlcnRzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGREcmlua0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RHJpbmtzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhZGREZXNzZXJ0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEZXNzZXJ0czogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2hlY2tDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAgICAgICAge2NoZWNrLmRyaW5rcy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YCR7ZC50eXBlfSAtICR7ZC5zaXplfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAge2NoZWNrLmRlc3NlcnRzLm1hcChkID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0gYnV0dG9uIGtleT17ZC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtgJHtkLnR5cGV9IC0gJHtkLnRhc3RlfSAtICR7ZC5zaXplfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNob3dEcmlua3MsIHNob3dEZXNzZXJ0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGNyZWF0ZSBuZXcgY2hlY2sgZmlyc3RcclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtgQ2hlY2sgIyR7Y2hlY2suaWR9YH1cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hlY2tDb250ZW50KCl9XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHRpdGxlPVwiRGVzc2VydHNcIiBvbkNsaWNrPXt0aGlzLmFkZERlc3NlcnRDbGlja30gPlxyXG4gICAgICAgICAgICAgICAgRGVzc2VydHNcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHRpdGxlPVwiRHJpbmtzXCIgb25DbGljaz17dGhpcy5hZGREcmlua0NsaWNrfT5cclxuICAgICAgICAgICAgICAgIERyaW5rc1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17Y2hlY2suZGVzc2VydHMubGVuZ3RoID09PSAwICYmIGNoZWNrLmRyaW5rcy5sZW5ndGggPT09IDB9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIHRpdGxlPVwiQ2hlY2tvdXRcIiA+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz0nL2NoZWNrT3V0Jz5DaGVjayBPdXQ8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB7c2hvd0RyaW5rcyAmJiA8RHJpbmtzQ29tcG9uZW50IGhhbmRsZUNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0RyaW5rczogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgICAgICB7c2hvd0Rlc3NlcnRzICYmIDxEZXNzZXJ0c0NvbXBvbmVudCBoYW5kbGVDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dEZXNzZXJ0czogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChOZXdPcmRlckNvbXBvbmVudClcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFByb2Nlc3NGZXRjaERhdGEsIFByb2Nlc3NBcHBlbmREYXRhLCBQcm9jZXNzVXBkYXRlRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgc2NyaXB0TG9hZGVyIGZyb20gJ3JlYWN0LWFzeW5jLXNjcmlwdC1sb2FkZXInO1xyXG5cclxudmFyIERJU0NPVkVSWV9ET0NTID0gW1wiaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vJGRpc2NvdmVyeS9yZXN0P3ZlcnNpb249djRcIl07XHJcbnZhciBTQ09QRVMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzXCI7XHJcbmNvbnN0IENMSUVOVF9JRCA9ICc4NDI0MTcxOTg3NjctN2s0MnB0OWVjZ3R1NWY3b29wbmcxb3F1M2E3OWk1aTkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5jb25zdCBBUElfS0VZID0gJ0FJemFTeUFsSTVpOE9PdHc4YUVFTVM0OEU5cG91RXB0cTh0RWcyTSc7XHJcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFPYk1oODdkTm1pelhiZFdrSDlUaXFmckNmQXBrX3JxeFBHdVFfek5nSklNJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMsXHJcbiAgICAgICAgaGFzRXJyb3JlZDogc3RhdGUuaGFzRXJyb3JlZCxcclxuICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZyxcclxuICAgICAgICBsYWJlbDogc3RhdGUubGFiZWxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChQcm9jZXNzRmV0Y2hEYXRhKHVybCkpLFxyXG4gICAgICAgIGFwcGVuZERhdGE6ICh1cmwsIGRhdGEpID0+IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKHVybCwgZGF0YSkpLFxyXG4gICAgICAgIHVwZGF0ZURhdGE6ICh1cmwsIGRhdGEpID0+IGRpc3BhdGNoKFByb2Nlc3NVcGRhdGVEYXRhKHVybCwgZGF0YSkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGVzdENvbXBvbmVudFByb3BzIHtcclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgaXRlbXM/OiBhbnk7XHJcbiAgICBoYXNFcnJvcmVkPzogYm9vbGVhbjtcclxuICAgIGlzTG9hZGluZz86IGJvb2xlYW47XHJcblxyXG4gICAgaXNTY3JpcHRMb2FkZWQ/OiBib29sZWFuO1xyXG4gICAgaXNTY3JpcHRMb2FkU3VjY2VlZD86IGJvb2xlYW47XHJcblxyXG4gICAgZmV0Y2hEYXRhPzogKHVybDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgYXBwZW5kRGF0YT86ICh1cmw6IHN0cmluZywgZGF0YTogYW55W10pID0+IHZvaWQ7XHJcbiAgICB1cGRhdGVEYXRhPzogKHVybDogc3RyaW5nLCBkYXRhOiBhbnlbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGVzdENvbXBvbmVudFN0YXRlIHtcclxuICAgIGlzU2lnbmVkSW4/OiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBUZXN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElUZXN0Q29tcG9uZW50UHJvcHMsIElUZXN0Q29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXV0aENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbkluKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNpZ25vdXRDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25PdXQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFwcGVuZENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJDb3N0XCIsIFwiU3RvY2tlZFwiLCBcIlNoaXAgRGF0ZVwiXSxcclxuICAgICAgICAgICAgW1wiV2hlZWwxXCIsIFwiJDIwLjUwXCIsIFwiNFwiLCBcIjMvMS8yMDE2XCJdLFxyXG4gICAgICAgICAgICBbXCJEb29yMVwiLCBcIiQxNVwiLCBcIjJcIiwgXCIzLzE1LzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkVuZ2luZTFcIiwgXCIkMTAwXCIsIFwiMVwiLCBcIjMwLzIwLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIlRvdGFsczFcIiwgXCI9U1VNKEIyOkI0KVwiLCBcIj1TVU0oQzI6QzQpXCIsIFwiPU1BWChEMjpENClcIl1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMucHJvcHMuYXBwZW5kRGF0YShTUFJFQURTSEVFVF9JRCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbXCJJdGVtMVwiLCBcIkNvc3RcIiwgXCJTdG9ja2VkXCIsIFwiU2hpcCBEYXRlXCJdLFxyXG4gICAgICAgICAgICBbXCJXaGVlbDFcIiwgXCIkMjAuNTBcIiwgXCI0XCIsIFwiMy8xLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkRvb3IxXCIsIFwiJDE1XCIsIFwiMlwiLCBcIjMvMTUvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiRW5naW5lMVwiLCBcIiQxMDBcIiwgXCIxXCIsIFwiMzAvMjAvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiVG90YWxzMVwiLCBcIj1TVU0oQjI6QjQpXCIsIFwiPVNVTShDMjpDNClcIiwgXCI9TUFYKEQyOkQ0KVwiXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEYXRhKFNQUkVBRFNIRUVUX0lELCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTY3JpcHRMb2FkZWQgfSA9IG5leHRQcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2NyaXB0TG9hZGVkICYmICF0aGlzLnByb3BzLmlzU2NyaXB0TG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmxvYWQoJ2NsaWVudDphdXRoMicsIHRoaXMuaW5pdENsaWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFNQUkVBRFNIRUVUX0lEKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLmZldGNoRGF0YSgnaHR0cDovLzU4MjZlZDk2MzkwMGQ2MTIwMDAxMzhiZC5tb2NrYXBpLmlvL2l0ZW1zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGhhc0Vycm9yZWQsIGlzTG9hZGluZywgaXRlbXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIGlmIChoYXNFcnJvcmVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDxwPlNvcnJ5ISBUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgaXRlbXM8L3A+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDxwPkxvYWRpbmfigKY8L3A+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1bMF0gKyBpdGVtWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC8+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIHtyZXN1bHR9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBcHBlbmRDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdibG9jaycgOiAnbm9uZScgfX0+QXBwZW5kIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVVcGRhdGVDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdibG9jaycgOiAnbm9uZScgfX0+VXBkYXRlIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhdXRob3JpemVfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBdXRoQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnbm9uZScgOiAnYmxvY2snIH19PkF1dGhvcml6ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwic2lnbm91dF9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNpZ25vdXRDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdibG9jaycgOiAnbm9uZScgfX0+U2lnbiBPdXQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcmlwdExvYWRlcihcclxuICAgICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnXHJcbikoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVzdENvbXBvbmVudCkpXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcclxucm9vdC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxSb3V0ZXIgPlxyXG4gICAgICAgICAgICA8QXBwIC8+XHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICA8L1Byb3ZpZGVyPixcclxuICAgIHJvb3RcclxuKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IE5ld09yZGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3T3JkZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja1BhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrUGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tQYWdlUHJvcHMsIGFueT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICBDaGVjayBQYWdlXHJcbiAgICAgICAgICA8TmV3T3JkZXJDb21wb25lbnQgLz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbihDaGVja1BhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgUGF5bWVudCwgT3JkZXJUeXBlLCBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgUHJvY2Vzc0NoZWNrb3V0LCBTZXRQYXltZW50VHlwZSwgU2V0T3JkZXJUeXBlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbmRsZUNoZWNrb3V0OiAoKSA9PiBkaXNwYXRjaChQcm9jZXNzQ2hlY2tvdXQoKSksXHJcbiAgICAgICAgc2V0UGF5bWVudFR5cGU6ICh0eXBlOiBQYXltZW50KSA9PiBkaXNwYXRjaChTZXRQYXltZW50VHlwZSh0eXBlKSksXHJcbiAgICAgICAgc2V0T3JkZXJUeXBlOiAodHlwZTogT3JkZXJUeXBlKSA9PiBkaXNwYXRjaChTZXRPcmRlclR5cGUodHlwZSkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tvdXRQYWdlUHJvcHMge1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuICAgIGNoZWNrPzogQ2hlY2s7XHJcblxyXG4gICAgc2V0UGF5bWVudFR5cGU/OiAodHlwZTogUGF5bWVudCkgPT4gdm9pZDtcclxuICAgIHNldE9yZGVyVHlwZT86ICh0eXBlOiBPcmRlclR5cGUpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDaGVja291dD86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrb3V0UGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tvdXRQYWdlUHJvcHMsIGFueT57XHJcbiAgICBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNoZWNrb3V0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQYXltZW50VHlwZUNoYW5nZSA9ICh0eXBlOiBQYXltZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQYXltZW50VHlwZSh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVPcmRlclR5cGVDaGFuZ2UgPSAodHlwZTogT3JkZXJUeXBlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRPcmRlclR5cGUodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgY3JlYXRlIG5ldyBjaGVjayBmaXJzdFxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgQ2hlY2sgb3V0IFBhZ2VcclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIFBheW1lbnQgVHlwZTpcclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2sucGF5bWVudCA9PT0gUGF5bWVudC5DYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UoUGF5bWVudC5DYXJkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhcmQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnBheW1lbnQgPT09IFBheW1lbnQuQ2FzaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FzaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17UGF5bWVudC5DYXNoLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FzaFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIE9yZGVyIFR5cGU6XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnR5cGUgPT09IE9yZGVyVHlwZS5QcmVPcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuUHJlT3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09yZGVyVHlwZS5QcmVPcmRlci50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByZSBPcmRlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuU2hvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuU2hvcCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlNob3AudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaG9wXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkNoZWNrIE91dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXR9PlxyXG4gICAgICAgICAgICBDaGVjayBPdXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0UGFnZSkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDcmVhdGVDaGVjayB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDaGVjaywgUGF5bWVudCwgT3JkZXJUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjcmVhdGVDaGVjazogKHVybCkgPT4gZGlzcGF0Y2goQ3JlYXRlQ2hlY2soKSlcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWFpblBhZ2VQcm9wcyB7XHJcbiAgaGlzdG9yeT86IEFycmF5PENoZWNrPjtcclxuXHJcbiAgY3JlYXRlQ2hlY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jbGFzcyBNYWluUGFnZSBleHRlbmRzIENvbXBvbmVudDxJTWFpblBhZ2VQcm9wcywgYW55PntcclxuICBvbk5ld0NoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJIaXN0b3J5KCkge1xyXG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAge2hpc3RvcnkubWFwKGggPT4ge1xyXG4gICAgICAgIHJldHVybiA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aC5pZH0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGluc2V0IHByaW1hcnk9e2BDaGVjayAjJHtoLmlkfSwgZGVzc2VydHMgY291bnQ6ICR7aC5kZXNzZXJ0cy5sZW5ndGh9LCBkcmlua3MgY291bnQ6ICR7aC5kcmlua3MubGVuZ3RofSwgcGF5IGJ5ICR7UGF5bWVudFtoLnBheW1lbnRdfSwgb3JkZXJlZCBpbiAke09yZGVyVHlwZVtoLnR5cGVdfWB9IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgfSl9XHJcbiAgICA8L0xpc3Q+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgTWFpbiBQYWdlXHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIk5ldyBDaGVja1wiIG9uQ2xpY2s9e3RoaXMub25OZXdDaGVja0NsaWNrfT5cclxuICAgICAgICA8TGluayB0bz0nL2NoZWNrJz5OZXcgQ2hlY2s8L0xpbms+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICBISVNUT1JZXHJcbiAgICAgIHt0aGlzLnJlbmRlckhpc3RvcnkoKX1cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgKE1haW5QYWdlKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm90Rm91bmRQYWdlUHJvcHMge1xyXG59XHJcblxyXG5jbGFzcyBOb3RGb3VuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SU5vdEZvdW5kUGFnZVByb3BzLCBhbnk+e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICBOb3QgRm91bmRcclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoTm90Rm91bmRQYWdlKVxyXG4iLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIEFERF9EUklOSyxcclxuICAgIEFERF9ERVNTRVJULFxyXG4gICAgUFJPQ0VTU19DSEVDS09VVCwgICAgXHJcbiAgICBTRVRfUEFZTUVOVF9UWVBFLFxyXG4gICAgU0VUX09SREVSX1RZUEVcclxufSBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgeyBDaGVjaywgRGVzc2VydCwgRHJpbmssIFBheW1lbnQsIE9yZGVyVHlwZSB9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5cclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3N0b3JlL2luaXRpYWxTdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcclxuICAgIFtDUkVBVEVfQ0hFQ0tdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2s6IENoZWNrID0ge1xyXG4gICAgICAgICAgICBpZDogaGlzdG9yeS5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICBkZXNzZXJ0czogbmV3IEFycmF5PERlc3NlcnQ+KCksXHJcbiAgICAgICAgICAgIGRyaW5rczogbmV3IEFycmF5PERyaW5rPigpLFxyXG4gICAgICAgICAgICBpc0ZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcGF5bWVudDogUGF5bWVudC5DYXNoLFxyXG4gICAgICAgICAgICB0eXBlOiBPcmRlclR5cGUuU2hvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbQUREX0RSSU5LXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmluazogRHJpbmsgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjaGVjay5kcmlua3MubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgdHlwZTogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgIHNpemU6IGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGVjay5kcmlua3MucHVzaChkcmluayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbQUREX0RFU1NFUlRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGRlc3NlcnQ6IERlc3NlcnQgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjaGVjay5kZXNzZXJ0cy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICB0eXBlOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgdGFzdGU6IGFjdGlvbi5wYXlsb2FkWzFdLFxyXG4gICAgICAgICAgICBzaXplOiBhY3Rpb24ucGF5bG9hZFsyXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hlY2suZGVzc2VydHMucHVzaChkZXNzZXJ0KTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfSxcclxuICAgIFtQUk9DRVNTX0NIRUNLT1VUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrLCBoaXN0b3J5IH0gPSBzdGF0ZTtcclxuICAgICAgICBjaGVjay5pc0ZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICBoaXN0b3J5LnB1c2goY2hlY2spO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVjazogbnVsbCxcclxuICAgICAgICAgICAgaGlzdG9yeVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW1NFVF9QQVlNRU5UX1RZUEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLnBheW1lbnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2s6IHsuLi5jaGVja30gfTsgICAgICAgICAgIFxyXG4gICAgfSxcclxuICAgIFtTRVRfT1JERVJfVFlQRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2sudHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogey4uLmNoZWNrfSB9OyAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbTE9BRF9JVEVNU19GVUxGSUxMRURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpdGVtczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfSxcclxuICAgIFtMT0FEX0lURU1TX1JFSkVDVEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaGFzRXJyb3JlZDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sICBcclxuICAgIFtTSE9XX0JVU1ldOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNCdXN5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzQnVzeSB9O1xyXG4gICAgfVxyXG59LCBpbml0aWFsU3RhdGUpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBBbnlBY3Rpb24sIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcic7XHJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgcm9vdFJlZHVjZXIsXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGhhc0Vycm9yZWQ6IGZhbHNlLFxyXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIGNoZWNrOiBudWxsLFxyXG4gICAgaGlzdG9yeTogbmV3IEFycmF5PENoZWNrPigpXHJcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nbG9iYWwuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nbG9iYWwuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBEcmlua3NUeXBlLCBEZXNzZXJ0VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyaW5rc0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8c3RyaW5nPiB9ID0ge307XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Fc3ByZXNzb10gPSBbJzMwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkRvcHBpb10gPSBbJzYwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkFtZXJpY2Fub10gPSBbJzEyMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9NaWxrXSA9IFsnMTIwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLk1hY2hpYXRvXSA9IFsnOTAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQ2FwcHVjaW5vXSA9IFsnMTc1INC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkZsYXRXaGl0ZV0gPSBbJzE3NSDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZV0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZUxhdmVuZGVyXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlJhZl0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5SYWZDaXRydXNdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuVGVhR3JlZW5dID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuVGVhQmxhY2tdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuVGVhSGVyYmFsXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWFjaWFsVGVhUGVhckxpbWVdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3BlY2lhbFRlYU9yYW5nZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5DYWNhb10gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Ib3RDaG9jb2xhdGVdID0gWycxNzUg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGVtb25hZGVTdHJhd2JlcnJ5XSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlQ2l0cnVzXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlUGFzc2lvbl0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5JY2VMYXR0ZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TeXJvcF0gPSBbJzAg0LzQuyddO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc3NlcnRzRGljdDogeyBbaWQ6IHN0cmluZ10gOiBBcnJheTxzdHJpbmc+IH0gPSB7fTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLk1hY2Fyb25dID0gWycxINGI0YInLCAnNiDRiNGCJywgJzEyINGI0YInLCAnMjQg0YjRgiddO1xyXG5EZXNzZXJ0c0RpY3RbRGVzc2VydFR5cGUuWmVwaHlyXSA9IFsnMSDRiNGCJywgJzgg0YjRgicsICcxNiDRiNGCJ107XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5DYWtlXSA9IFsnMTgg0YHQvCcsICcyMiDRgdC8J107IiwiZXhwb3J0IGludGVyZmFjZSBEZXNzZXJ0IHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICB0eXBlOiBEZXNzZXJ0VHlwZSxcclxuICAgIHRhc3RlOiBzdHJpbmcsXHJcbiAgICBzaXplOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmluayB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgdHlwZTogRHJpbmtzVHlwZSxcclxuICAgIHNpemU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBkZXNzZXJ0czogQXJyYXk8RGVzc2VydD4sXHJcbiAgICBkcmlua3M6IEFycmF5PERyaW5rPixcclxuICAgIGlzRmluaXNoZWQ6IGJvb2xlYW4sXHJcbiAgICBwYXltZW50OiBQYXltZW50LFxyXG4gICAgdHlwZTogT3JkZXJUeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBheW1lbnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENhc2gsXHJcbiAgICBPdGhlclxyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlclR5cGUge1xyXG4gICAgUHJlT3JkZXIsXHJcbiAgICBTaG9wLFxyXG4gICAgT3RoZXJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGVzc2VydFR5cGUge1xyXG4gICAgTWFjYXJvbiA9ICfQnNCw0LrQsNGA0L7QvdGBJyxcclxuICAgIFplcGh5ciA9ICfQl9C10YTQuNGAJyxcclxuICAgIENha2UgPSAn0KLQvtGA0YInXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hY2Fyb25zRW51bSB7XHJcbiAgICBDaG9jb2xhdGUgPSBcItCo0L7QutC+0LvQsNC0XCIsXHJcbiAgICBDb2ZmZWVDYXJhbWVsID0gXCLQmtC+0YTQtSAtINCh0L7Qu9GR0L3QsNGPINCa0LDRgNCw0LzQtdC70YxcIixcclxuICAgIE1hbmdvUGFzc2lvbiA9IFwi0JzQsNC90LPQviAtINCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIExpbWVCYXNpbCA9IFwi0JvQsNC50LwgLSDQkdCw0LfQuNC70LjQulwiLFxyXG4gICAgUGlzdGFjaGlvID0gXCLQpNC40YHRgtCw0YjQutCwXCIsXHJcbiAgICBEb3JCbHVlUGVhciA9IFwi0JTQvtCxLdCR0LvRjiAtINCT0YDRg9GI0LBcIixcclxuICAgIExhdmVuZGVyQmxhY2tiZXJyeSA9IFwi0JvQsNCy0LDQvdC00LAgLSDQp9C10YDQvdC40LrQsFwiLFxyXG4gICAgQ3VycmFudCA9IFwi0KHQvNC+0YDQvtC00LjQvdCwXCIsXHJcbiAgICBTdHJhd2JlcnJ5Q2hlZXNlY2FrZSA9IFwi0JrQu9GD0LHQvdC40YfQvdGL0Lkg0KfQuNC30LrQtdC50LpcIixcclxuICAgIFBhcm1lc2FuRmlndWUgPSBcItCf0LDRgNC80LXQt9Cw0L0gLSDQmNC90LbQuNGAXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gWmVwaHlyRW51bSB7XHJcbiAgICBBcHBsZSA9IFwi0K/QsdC70L7QutC+XCIsXHJcbiAgICBDdXJyYW50ID0gXCLQodC80L7RgNC+0LTQuNC90LBcIixcclxuICAgIEFwcmljb3RQYXNzaW9uRnJ1aXQgPSBcItCQ0LHRgNC40LrQvtGBIC0g0JzQsNGA0LDQutGD0LnRj1wiLFxyXG4gICAgU3RyYXdiZXJyeUNyYW5iZXJyeSA9IFwi0JrQu9GD0LHQvdC40LrQsCAtINCa0LvRjtC60LLQsFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENha2VzRW51bSB7XHJcbiAgICBSaW8gPSBcIlJpb1wiLFxyXG4gICAgQ2Fycm90Q2FrZSA9IFwiQ2Fycm90IENha2VcIixcclxuICAgIFNvdWwgPSBcIlNvdWxcIixcclxuICAgIFBpbmsgPSBcIlBpbmtcIixcclxuICAgIEluZmluaXR5ID0gXCJJbmZpbml0eVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERyaW5rc1R5cGUge1xyXG4gICAgRXNwcmVzc28gPSBcItCt0YHQv9GA0LXRgdGB0L5cIixcclxuICAgIERvcHBpbyA9IFwi0JTQvtC/0L/QuNC+XCIsXHJcbiAgICBBbWVyaWNhbm8gPSBcItCQ0LzQtdGA0LjQutCw0L3QvlwiLFxyXG4gICAgQW1lcmljYW5vTWlsayA9IFwi0JDQvNC10YDQuNC60LDQvdC+INGBINC80L7Qu9C+0LrQvtC8XCIsXHJcbiAgICBNYWNoaWF0byA9IFwi0JzQsNC60LjQsNGC0L5cIixcclxuICAgIENhcHB1Y2lubyA9IFwi0JrQsNC/0YPRh9C40L3QvlwiLFxyXG4gICAgRmxhdFdoaXRlID0gXCLQpNC70LXRgiDQktCw0LnRglwiLFxyXG4gICAgTGF0dGUgPSBcItCb0LDRgtGC0LVcIixcclxuICAgIExhdHRlTGF2ZW5kZXIgPSBcItCb0LDRgtGC0LUg0JvQsNCy0LDQvdC00LBcIixcclxuICAgIFJhZiA9IFwi0KDQsNGEXCIsXHJcbiAgICBSYWZDaXRydXMgPSBcItCg0LDRhCDQptC40YLRgNGD0YFcIixcclxuICAgIFRlYUdyZWVuID0gXCLQp9Cw0Lkg0JfQtdC70ZHQvdGL0LlcIixcclxuICAgIFRlYUJsYWNrID0gXCLQp9Cw0Lkg0KfRkdGA0L3Ri9C5XCIsXHJcbiAgICBUZWFIZXJiYWwgPSBcItCn0LDQuSDQotGA0LDQstGP0L3QvtC5XCIsXHJcbiAgICBTcGVhY2lhbFRlYVBlYXJMaW1lID0gXCLQp9Cw0Lkg0JPRgNGD0YjQsC3Qm9Cw0LnQvFwiLFxyXG4gICAgU3BlY2lhbFRlYU9yYW5nZSA9IFwi0KfQsNC5INCQ0L/QtdC70YzRgdC40L0t0J7QsdC70LXQv9C40YXQsFwiLFxyXG4gICAgQ2FjYW8gPSBcItCa0LDQutCw0L5cIixcclxuICAgIEhvdENob2NvbGF0ZSA9IFwi0JPQsNGA0Y/Rh9C40Lkg0YjQvtC60L7Qu9Cw0LRcIixcclxuICAgIExlbW9uYWRlU3RyYXdiZXJyeSA9IFwi0JvQuNC80L7QvdCw0LQg0JrQu9GD0LHQvdC40LrQsFwiLFxyXG4gICAgTGVtb25hZGVDaXRydXMgPSBcItCb0LjQvNC+0L3QsNC0INCm0LjRgtGA0YPRgVwiLFxyXG4gICAgTGVtb25hZGVQYXNzaW9uID0gXCLQm9C40LzQvtC90LDQtCDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBJY2VMYXR0ZSA9IFwi0JDQudGBINCb0LDRgtGC0LVcIixcclxuICAgIFN5cm9wID0gXCLQodC40YDQvtC/XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVJbnB1dE9wdGlvbiB7XHJcbiAgICBJTlBVVF9WQUxVRV9PUFRJT05fVU5TUEVDSUZJRUQgPSAnSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEJyxcclxuICAgIFJBVyA9ICdSQVcnLFxyXG4gICAgVVNFUl9FTlRFUkVEID0gJ1VTRVJfRU5URVJFRCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW5zZXJ0RGF0YU9wdGlvbiB7XHJcbiAgICBPVkVSV1JJVEUgPSAnT1ZFUldSSVRFJyxcclxuICAgIElOU0VSVF9ST1dTID0gJ0lOU0VSVF9ST1dTJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBWYWx1ZVJlbmRlck9wdGlvbiB7XHJcbiAgICBGT1JNQVRURURfVkFMVUUgPSAnRk9STUFUVEVEX1ZBTFVFJyxcclxuICAgIFVORk9STUFUVEVEX1ZBTFVFID0gJ1VORk9STUFUVEVEX1ZBTFVFJyxcclxuICAgIEZPUk1VTEEgPSAnRk9STVVMQSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGF0ZVRpbWVSZW5kZXJPcHRpb24ge1xyXG4gICAgU0VSSUFMX05VTUJFUiA9ICdTRVJJQUxfTlVNQkVSJyxcclxuICAgIEZPUk1BVFRFRF9TVFJJTkcgPSAnRk9STUFUVEVEX1NUUklORydcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9