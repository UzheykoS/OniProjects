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
exports.LOG_DATA = 'LOG_DATA';

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
var LOGS_SPREADSHEET_ID = '1NPYoV9Ys52zf9V_NklQ5JdXhjppBLe0dC9T433ZY7P8';
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
exports.ProcessAppendData = function (spreadsheetId, range, valueRange) {
    return function (dispatch) {
        return __awaiter(_this, void 0, void 0, function () {
            var response, updatedCellsCount, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch(exports.itemsIsLoading(true));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 7]);
                        return [4 /*yield*/, window['gapi'].client.sheets.spreadsheets.values.append({
                            spreadsheetId: spreadsheetId,
                            range: range,
                            valueInputOption: types_1.ValueInputOption.USER_ENTERED,
                            insertDataOption: types_1.InsertDataOption.OVERWRITE,
                            includeValuesInResponse: true,
                            responseValueRenderOption: types_1.ValueRenderOption.FORMATTED_VALUE
                        }, { values: valueRange })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.result.updates.updatedCells];
                    case 3:
                        updatedCellsCount = _a.sent();
                        return [4 /*yield*/, exports.ProcessLog("TestLog")];
                    case 4:
                        _a.sent();
                        dispatch(exports.itemsAppendSuccess(updatedCellsCount === valueRange[0].length));
                        return [3 /*break*/, 7];
                    case 5:
                        ex_2 = _a.sent();
                        dispatch(exports.itemsAppendErrored(true));
                        console.log(ex_2);
                        throw Error(ex_2);
                    case 6:
                        dispatch(exports.itemsIsLoading(false));
                        return [7 /*endfinally*/];
                    case 7:
                        return [2 /*return*/];
                }
            });
        });
    };
};
exports.ProcessLog = function (message) {
    return __awaiter(_this, void 0, void 0, function () {
        var dateTime, data, ex_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2,, 3]);
                    dateTime = new Date();
                    data = [[message, dateTime.toUTCString()]];
                    return [4 /*yield*/, window['gapi'].client.sheets.spreadsheets.values.append({
                        spreadsheetId: LOGS_SPREADSHEET_ID,
                        range: 'A:B',
                        valueInputOption: types_1.ValueInputOption.USER_ENTERED,
                        insertDataOption: types_1.InsertDataOption.OVERWRITE,
                        includeValuesInResponse: true,
                        responseValueRenderOption: types_1.ValueRenderOption.FORMATTED_VALUE
                    }, { values: data })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    ex_3 = _a.sent();
                    console.log(ex_3);
                    throw Error(ex_3);
                case 3:
                    return [2 /*return*/];
            }
        });
    });
};
exports.ProcessUpdateData = function (spreadsheetId, valueRange) {
    return function (dispatch) {
        return __awaiter(_this, void 0, void 0, function () {
            var response, items, ex_4;
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
                        ex_4 = _a.sent();
                        dispatch(exports.itemsHasErrored(true));
                        console.log(ex_4);
                        throw Error(ex_4);
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
exports.itemsAppendSuccess = redux_actions_1.createAction(actionTypes_1.APPEND_DATA_FULFILLED, function (success) {
    return success;
});
exports.itemsAppendErrored = redux_actions_1.createAction(actionTypes_1.APPEND_DATA_REJECTED);
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
        appendData: function appendData(url, range, data) {
            return dispatch(actions_1.ProcessAppendData(url, range, data));
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
            var dateTime = new Date();
            var data = [["Item1", "XL", "1", "0", dateTime.toUTCString()]];
            var range = "RawData!A:E";
            _this.props.appendData(SPREADSHEET_ID, range, data);
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
}, _a[actionTypes_1.APPEND_DATA_FULFILLED] = function (state, action) {
    return Object.assign({}, state, {
        items: [],
        hasErrored: !action.payload
    });
}, _a[actionTypes_1.APPEND_DATA_REJECTED] = function (state, action) {
    return Object.assign({}, state, {
        hasErrored: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGVzc2VydHNDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyaW5rc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmV3T3JkZXJDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrb3V0UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTm90Rm91bmRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzP2RjYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RpY3Rpb25hcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FB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Q3JDLDZCQUFvQjtBQUNwQiw4QkFBc0I7QUFDdEIsOEJBQXVCO0FBQ3ZCLDBCQUFlO0FBQ2Ysa0NBQStCO0FBQy9CLHdCQUFXO0FBQ1gsOEJBQXdCO0FBQ3hCLDZCQUF3QjtBQUN4Qiw2QkFBdUI7QUFDdkIsOEJBQTBCO0FBQzFCLHdDQUFzQztBQUN0QyxxQ0FBMEM7QUFDMUMsMEJBQWU7QUFDZixpQ0FBZ0M7QUFDaEMsdUNBQXVDO0FBQ3ZDLG1DQUFpQztBQUNqQyxvQ0FBb0M7QUFDcEMsNkJBQXNCO0FBQ3RCLDBCQUNKO0FBQUMsR0F4QnFCLGFBQVYsUUFBVSxlQUFWLFFBQVUsYUF3QnJCO0FBRUQsSUFJQztBQUpELFdBQTRCO0FBQ3hCLHlEQUFpRTtBQUNqRSw4QkFBVztBQUNYLHVDQUNKO0FBQUMsR0FKMkIsbUJBQWhCLFFBQWdCLHFCQUFoQixRQUFnQixtQkFJM0I7QUFFRCxJQUdDO0FBSEQsV0FBNEI7QUFDeEIsb0NBQXVCO0FBQ3ZCLHNDQUNKO0FBQUMsR0FIMkIsbUJBQWhCLFFBQWdCLHFCQUFoQixRQUFnQixtQkFHM0I7QUFFRCxJQUlDO0FBSkQsV0FBNkI7QUFDekIsMkNBQW1DO0FBQ25DLDZDQUF1QztBQUN2QyxtQ0FDSjtBQUFDLEdBSjRCLG9CQUFqQixRQUFpQixzQkFBakIsUUFBaUIsb0JBSTVCO0FBRUQsSUFHQztBQUhELFdBQWdDO0FBQzVCLDRDQUErQjtBQUMvQiwrQ0FDSjtBQUFDLEdBSCtCLHVCQUFwQixRQUFvQix5QkFBcEIsUUFBb0IsdUJBRy9CLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJzsgfVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7IH1cXG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG5cXG4uYXZhdGFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MmMzZTk7XFxuICBjb2xvcjogIzFkNTNhMzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydCBjb25zdCBDUkVBVEVfQ0hFQ0sgPSAnQ1JFQVRFX0NIRUNLJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfRFJJTksgPSAnQUREX0RSSU5LJztcclxuZXhwb3J0IGNvbnN0IEFERF9ERVNTRVJUID0gJ0FERF9ERVNTRVJUJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9UWVBFID0gJ1NFVF9QQVlNRU5UX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgU0VUX09SREVSX1RZUEUgPSAnU0VUX09SREVSX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgUFJPQ0VTU19DSEVDS09VVCA9ICdQUk9DRVNTX0NIRUNLT1VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0lURU1TID0gJ0xPQURfSVRFTVMnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNU19GVUxGSUxMRUQgPSAnTE9BRF9JVEVNU19GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNU19SRUpFQ1RFRCA9ICdMT0FEX0lURU1TX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9XX0JVU1kgPSBcIlNIT1dfQlVTWVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBID0gJ0FQUEVORF9EQVRBJztcclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBX0ZVTEZJTExFRCA9ICdBUFBFTkRfREFUQV9GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgQVBQRU5EX0RBVEFfUkVKRUNURUQgPSAnQVBQRU5EX0RBVEFfUkVKRUNURUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBID0gJ1VQREFURV9EQVRBJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBX0ZVTEZJTExFRCA9ICdVUERBVEVfREFUQV9GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEFfUkVKRUNURUQgPSAnVVBEQVRFX0RBVEFfUkVKRUNURUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19EQVRBID0gJ0xPR19EQVRBJztcclxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIFBST0NFU1NfQ0hFQ0tPVVQsXHJcbiAgICBBRERfRFJJTkssXHJcbiAgICBBRERfREVTU0VSVCxcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVEXHJcbn0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XHJcbmltcG9ydCB7IERyaW5rc1R5cGUsIERlc3NlcnRUeXBlLCBQYXltZW50LCBPcmRlclR5cGUsIFxyXG4gICAgVmFsdWVJbnB1dE9wdGlvbiwgSW5zZXJ0RGF0YU9wdGlvbiwgVmFsdWVSZW5kZXJPcHRpb24sIERhdGVUaW1lUmVuZGVyT3B0aW9uIH0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcbmNvbnN0IExPR1NfU1BSRUFEU0hFRVRfSUQgPSAnMU5QWW9WOVlzNTJ6ZjlWX05rbFE1SmRYaGpwcEJMZTBkQzlUNDMzWlk3UDgnXHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0ZldGNoRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmdldCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6ICdBMjpCNCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHJlc3BvbnNlLnJlc3VsdC52YWx1ZXM7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyhpdGVtcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNIYXNFcnJvcmVkKHRydWUpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0FwcGVuZERhdGEgPSAoc3ByZWFkc2hlZXRJZDogc3RyaW5nLCByYW5nZTogc3RyaW5nLCB2YWx1ZVJhbmdlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuYXBwZW5kKHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBWYWx1ZUlucHV0T3B0aW9uLlVTRVJfRU5URVJFRCxcclxuICAgICAgICAgICAgICAgIGluc2VydERhdGFPcHRpb246IEluc2VydERhdGFPcHRpb24uT1ZFUldSSVRFLFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUVcclxuICAgICAgICAgICAgfSwgeyB2YWx1ZXM6IHZhbHVlUmFuZ2UgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2VsbHNDb3VudCA9IGF3YWl0IHJlc3BvbnNlLnJlc3VsdC51cGRhdGVzLnVwZGF0ZWRDZWxscztcclxuICAgICAgICAgICAgYXdhaXQgUHJvY2Vzc0xvZyhcIlRlc3RMb2dcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kU3VjY2Vzcyh1cGRhdGVkQ2VsbHNDb3VudCA9PT0gdmFsdWVSYW5nZVswXS5sZW5ndGgpKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NMb2cgPSBhc3luYyAobWVzc2FnZTogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbbWVzc2FnZSwgZGF0ZVRpbWUudG9VVENTdHJpbmcoKV1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuYXBwZW5kKHtcclxuICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogTE9HU19TUFJFQURTSEVFVF9JRCxcclxuICAgICAgICAgICAgcmFuZ2U6ICdBOkInLFxyXG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBWYWx1ZUlucHV0T3B0aW9uLlVTRVJfRU5URVJFRCxcclxuICAgICAgICAgICAgaW5zZXJ0RGF0YU9wdGlvbjogSW5zZXJ0RGF0YU9wdGlvbi5PVkVSV1JJVEUsXHJcbiAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUVcclxuICAgICAgICB9LCB7IHZhbHVlczogZGF0YSB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc1VwZGF0ZURhdGEgPSAoc3ByZWFkc2hlZXRJZDogc3RyaW5nLCB2YWx1ZVJhbmdlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogJ0E2OkQxMCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBWYWx1ZUlucHV0T3B0aW9uLlVTRVJfRU5URVJFRCxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRlVGltZVJlbmRlck9wdGlvbjogRGF0ZVRpbWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1NUUklOR1xyXG4gICAgICAgICAgICB9LCB7IHZhbHVlczogdmFsdWVSYW5nZSB9KTtcclxuICAgICAgICAgICAgLy9UT0RPOiBQcm9jZXNzIHJlc3BvbnNlIHJlc3VsdFxyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHJlc3BvbnNlLnJlc3VsdC52YWx1ZXM7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0ZldGNoRGF0YVN1Y2Nlc3MoaXRlbXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NGZXRjaERhdGFGYWtlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZUNoZWNrID0gY3JlYXRlQWN0aW9uKENSRUFURV9DSEVDSyk7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRHJpbmsgPSBjcmVhdGVBY3Rpb24oQUREX0RSSU5LLCAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERlc3NlcnQgPSBjcmVhdGVBY3Rpb24oQUREX0RFU1NFUlQsICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgdGFzdGUsIHNpemVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRQYXltZW50VHlwZSA9IGNyZWF0ZUFjdGlvbihTRVRfUEFZTUVOVF9UWVBFLCAodHlwZTogUGF5bWVudCkgPT4gdHlwZSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0T3JkZXJUeXBlID0gY3JlYXRlQWN0aW9uKFNFVF9PUkRFUl9UWVBFLCAodHlwZTogT3JkZXJUeXBlKSA9PiB0eXBlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzQ2hlY2tvdXQgPSBjcmVhdGVBY3Rpb24oUFJPQ0VTU19DSEVDS09VVCk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNIYXNFcnJvcmVkID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVNfUkVKRUNURUQsIChoYXNFcnJvcmVkOiBib29sZWFuKSA9PiBoYXNFcnJvcmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0lzTG9hZGluZyA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TLCAoaXNMb2FkaW5nOiBib29sZWFuKSA9PiBpc0xvYWRpbmcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TX0ZVTEZJTExFRCwgKGl0ZW1zOiBhbnlbXSkgPT4gaXRlbXMpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zQXBwZW5kU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihBUFBFTkRfREFUQV9GVUxGSUxMRUQsIChzdWNjZXNzOiBib29sZWFuKSA9PiBzdWNjZXNzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0FwcGVuZEVycm9yZWQgPSBjcmVhdGVBY3Rpb24oQVBQRU5EX0RBVEFfUkVKRUNURUQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dCdXN5ID0gY3JlYXRlQWN0aW9uKFNIT1dfQlVTWSwgKGlzQnVzeTogYm9vbGVhbikgPT4gaXNCdXN5KTtcclxuIiwiaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9wYWdlcy9NYWluUGFnZSc7XHJcbmltcG9ydCBDaGVja1BhZ2UgZnJvbSAnLi9wYWdlcy9DaGVja1BhZ2UnO1xyXG5pbXBvcnQgQ2hlY2tvdXRQYWdlIGZyb20gJy4vcGFnZXMvQ2hlY2tvdXRQYWdlJztcclxuaW1wb3J0IE5vdEZvdW5kUGFnZSBmcm9tICcuL3BhZ2VzL05vdEZvdW5kUGFnZSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFRlc3RDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy8nPkhvbWU8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL3Rlc3QnPlRlc3Q8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4pXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gKFxyXG4gICAgPFN3aXRjaD5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtNYWluUGFnZX0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL2NoZWNrJyBjb21wb25lbnQ9e0NoZWNrUGFnZX0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL2NoZWNrT3V0JyBjb21wb25lbnQ9e0NoZWNrb3V0UGFnZX0gLz5cclxuICAgICAgICBcclxuICAgICAgICA8Um91dGUgcGF0aD0nL3Rlc3QnIGNvbXBvbmVudD17VGVzdENvbXBvbmVudH0gLz5cclxuICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZFBhZ2V9IC8+XHJcbiAgICA8L1N3aXRjaD5cclxuKVxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPE1haW4gLz5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFkZERlc3NlcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgeyBEZXNzZXJ0VHlwZSwgRGVzc2VydCwgTWFjYXJvbnNFbnVtLCBDYWtlc0VudW0sIFplcGh5ckVudW0gfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IERlc3NlcnRzRGljdCB9IGZyb20gJy4uL3V0aWxzL2RpY3Rpb25hcmllcyc7XHJcbmltcG9ydCB7IEFkZEljb24gfSBmcm9tICdtZGktcmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgYWRkRGVzc2VydDogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcpID0+IGRpc3BhdGNoKEFkZERlc3NlcnQodHlwZSwgdGFzdGUsIHNpemUpKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXNzZXJ0c0NvbXBvbmVudFByb3BzIHtcclxuICBhZGREZXNzZXJ0PzogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXNzZXJ0c0NvbXBvbmVudFN0YXRlIHtcclxuICBkZXNzZXJ0VHlwZT86IERlc3NlcnRUeXBlO1xyXG4gIGRlc3NlcnRUYXN0ZT86IHN0cmluZztcclxuICBkZXNzZXJ0U2l6ZT86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgRGVzc2VydHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SURlc3NlcnRzQ29tcG9uZW50UHJvcHMsIElEZXNzZXJ0c0NvbXBvbmVudFN0YXRlPntcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRlc3NlcnRUeXBlOiBudWxsLFxyXG4gICAgICBkZXNzZXJ0VGFzdGU6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydFNlbGVjdCA9IChkZXNzZXJ0KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFR5cGU6IGRlc3NlcnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0ID0gKHRhc3RlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFRhc3RlOiB0YXN0ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0U2l6ZVNlbGVjdCA9IGFzeW5jIChzaXplKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFNpemU6IHNpemVcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBzaXplKTtcclxuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckRlc3NlcnRzKCkge1xyXG4gICAgY29uc3QgZGVzc2VydEtleXMgPSBPYmplY3Qua2V5cyhEZXNzZXJ0VHlwZSk7XHJcbiAgICBjb25zdCBkZXNzZXJ0cyA9IGRlc3NlcnRLZXlzLm1hcChkID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogZCxcclxuICAgICAgICB2YWx1ZTogRGVzc2VydFR5cGVbZF1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlfSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgZ2V0QXJyYXlGcm9tRW51bShlbjogYW55KSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW4pO1xyXG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgdmFsdWU6IGVuW2RdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGVzc2VydFRhc3RlcygpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgbGV0IGRlc3NlcnRUYXN0ZXM7XHJcbiAgICBzd2l0Y2ggKGRlc3NlcnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgRGVzc2VydFR5cGUuQ2FrZTpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gdGhpcy5nZXRBcnJheUZyb21FbnVtKENha2VzRW51bSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGVzc2VydFR5cGUuTWFjYXJvbjpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gdGhpcy5nZXRBcnJheUZyb21FbnVtKE1hY2Fyb25zRW51bSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGVzc2VydFR5cGUuWmVwaHlyOlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oWmVwaHlyRW51bSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRUYXN0ZXMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRUYXN0ZVNlbGVjdChkLnZhbHVlKX0ga2V5PXtkLmlkfSA+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZC52YWx1ZX0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9kaXY+O1xyXG4gIH07XHJcblxyXG4gIHJlbmRlckRlc3NlcnRTaXplcygpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBkZXNzZXJ0U2l6ZXMgPSBEZXNzZXJ0c0RpY3RbZGVzc2VydFR5cGVdO1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydFNpemVzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2l6ZVNlbGVjdChkKX0ga2V5PXtkfSA+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZH0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9kaXY+O1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gPERpYWxvZyBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3Blbj17dHJ1ZX0gPlxyXG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+eyFkZXNzZXJ0VHlwZSA/ICdTZWxlY3QgZGVzc2VydCcgOiAnU2VsZWN0IHRhc3RlJ308L0RpYWxvZ1RpdGxlPlxyXG4gICAgICB7IWRlc3NlcnRUeXBlID8gdGhpcy5yZW5kZXJEZXNzZXJ0cygpIDogKCFkZXNzZXJ0VGFzdGUgPyB0aGlzLnJlbmRlckRlc3NlcnRUYXN0ZXMoKSA6IHRoaXMucmVuZGVyRGVzc2VydFNpemVzKCkpfVxyXG4gICAgPC9EaWFsb2c+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERlc3NlcnRzQ29tcG9uZW50KSlcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFkZERyaW5rIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IHsgRHJpbmtzVHlwZSwgRHJpbmsgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IERyaW5rc0RpY3QgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5pbXBvcnQgeyBBZGRJY29uIH0gZnJvbSAnbWRpLXJlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGREcmluazogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gZGlzcGF0Y2goQWRkRHJpbmsodHlwZSwgc2l6ZSkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJpbmtzQ29tcG9uZW50UHJvcHMge1xyXG4gICAgYWRkRHJpbms/OiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEcmlua3NDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBkcmlua1R5cGU/OiBEcmlua3NUeXBlO1xyXG4gICAgZHJpbmtTaXplPzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBEcmlua3NDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SURyaW5rc0NvbXBvbmVudFByb3BzLCBJRHJpbmtzQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyaW5rVHlwZTogbnVsbCxcclxuICAgICAgICAgICAgZHJpbmtTaXplOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmlua1NlbGVjdCA9IChkcmluaykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkcmlua1R5cGU6IGRyaW5rXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJpbmtTaXplU2VsZWN0ID0gYXN5bmMgKGRyaW5rU2l6ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkcmlua1NpemVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkcmlua1R5cGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREcmluayhkcmlua1NpemUsIGRyaW5rVHlwZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRyaW5rcygpIHtcclxuICAgICAgICBjb25zdCBkcmlua0tleXMgPSBPYmplY3Qua2V5cyhEcmlua3NUeXBlKTtcclxuICAgICAgICBjb25zdCBkcmlua3MgPSBkcmlua0tleXMubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogRHJpbmtzVHlwZVtkXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAge2RyaW5rcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyRHJpbmtTaXplcygpIHtcclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmlua1NpemVzID0gRHJpbmtzRGljdFtkcmlua1R5cGVdO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZHJpbmtTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2l6ZVNlbGVjdChkKX0ga2V5PXtkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxEaWFsb2cgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLWRpYWxvZy10aXRsZVwiIG9wZW49e3RydWV9ID5cclxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2ltcGxlLWRpYWxvZy10aXRsZVwiPnshZHJpbmtUeXBlID8gJ1NlbGVjdCBkcmluaycgOiAnU2VsZWN0IHNpemUnfTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgIHshZHJpbmtUeXBlID8gdGhpcy5yZW5kZXJEcmlua3MoKSA6IHRoaXMucmVuZGVyRHJpbmtTaXplcygpfVxyXG4gICAgICAgIDwvRGlhbG9nPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERyaW5rc0NvbXBvbmVudCkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IERyaW5rc0NvbXBvbmVudCBmcm9tICcuL0RyaW5rc0NvbXBvbmVudCc7XHJcbmltcG9ydCBEZXNzZXJ0c0NvbXBvbmVudCBmcm9tICcuL0Rlc3NlcnRzQ29tcG9uZW50JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXdPcmRlckNvbXBvbmVudFByb3BzIHtcclxuICAgIGNoZWNrPzogQ2hlY2tcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTmV3T3JkZXJDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBzaG93RHJpbmtzPzogYm9vbGVhbjtcclxuICAgIHNob3dEZXNzZXJ0cz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIE5ld09yZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElOZXdPcmRlckNvbXBvbmVudFByb3BzLCBJTmV3T3JkZXJDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd0RyaW5rczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dEZXNzZXJ0czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRHJpbmtDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0RyaW5rczogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGVzc2VydENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RGVzc2VydHM6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNoZWNrQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICAgIHtjaGVjay5kcmlua3MubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtkLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGluc2V0IHByaW1hcnk9e2Ake2QudHlwZX0gLSAke2Quc2l6ZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIHtjaGVjay5kZXNzZXJ0cy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YCR7ZC50eXBlfSAtICR7ZC50YXN0ZX0gLSAke2Quc2l6ZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzaG93RHJpbmtzLCBzaG93RGVzc2VydHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBjcmVhdGUgbmV3IGNoZWNrIGZpcnN0XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7YENoZWNrICMke2NoZWNrLmlkfWB9XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoZWNrQ29udGVudCgpfVxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkRlc3NlcnRzXCIgb25DbGljaz17dGhpcy5hZGREZXNzZXJ0Q2xpY2t9ID5cclxuICAgICAgICAgICAgICAgIERlc3NlcnRzXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkRyaW5rc1wiIG9uQ2xpY2s9e3RoaXMuYWRkRHJpbmtDbGlja30+XHJcbiAgICAgICAgICAgICAgICBEcmlua3NcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2NoZWNrLmRlc3NlcnRzLmxlbmd0aCA9PT0gMCAmJiBjaGVjay5kcmlua3MubGVuZ3RoID09PSAwfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkNoZWNrb3V0XCIgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89Jy9jaGVja091dCc+Q2hlY2sgT3V0PC9MaW5rPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAge3Nob3dEcmlua3MgJiYgPERyaW5rc0NvbXBvbmVudCBoYW5kbGVDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dEcmlua3M6IGZhbHNlIH0pfSAvPn1cclxuICAgICAgICAgICAge3Nob3dEZXNzZXJ0cyAmJiA8RGVzc2VydHNDb21wb25lbnQgaGFuZGxlQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93RGVzc2VydHM6IGZhbHNlIH0pfSAvPn1cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoTmV3T3JkZXJDb21wb25lbnQpXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBQcm9jZXNzRmV0Y2hEYXRhLCBQcm9jZXNzQXBwZW5kRGF0YSwgUHJvY2Vzc1VwZGF0ZURhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuXHJcbnZhciBESVNDT1ZFUllfRE9DUyA9IFtcImh0dHBzOi8vc2hlZXRzLmdvb2dsZWFwaXMuY29tLyRkaXNjb3ZlcnkvcmVzdD92ZXJzaW9uPXY0XCJdO1xyXG52YXIgU0NPUEVTID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0c1wiO1xyXG5jb25zdCBDTElFTlRfSUQgPSAnODQyNDE3MTk4NzY3LTdrNDJwdDllY2d0dTVmN29vcG5nMW9xdTNhNzlpNWk5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcclxuY29uc3QgQVBJX0tFWSA9ICdBSXphU3lBbEk1aThPT3R3OGFFRU1TNDhFOXBvdUVwdHE4dEVnMk0nO1xyXG5jb25zdCBTUFJFQURTSEVFVF9JRCA9ICcxT2JNaDg3ZE5taXpYYmRXa0g5VGlxZnJDZkFwa19ycXhQR3VRX3pOZ0pJTSc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLFxyXG4gICAgICAgIGhhc0Vycm9yZWQ6IHN0YXRlLmhhc0Vycm9yZWQsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmcsXHJcbiAgICAgICAgbGFiZWw6IHN0YXRlLmxhYmVsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZldGNoRGF0YTogKHVybCkgPT4gZGlzcGF0Y2goUHJvY2Vzc0ZldGNoRGF0YSh1cmwpKSxcclxuICAgICAgICBhcHBlbmREYXRhOiAodXJsLCByYW5nZSwgZGF0YSkgPT4gZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEodXJsLCByYW5nZSwgZGF0YSkpLFxyXG4gICAgICAgIHVwZGF0ZURhdGE6ICh1cmwsIGRhdGEpID0+IGRpc3BhdGNoKFByb2Nlc3NVcGRhdGVEYXRhKHVybCwgZGF0YSkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGVzdENvbXBvbmVudFByb3BzIHtcclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgaXRlbXM/OiBhbnk7XHJcbiAgICBoYXNFcnJvcmVkPzogYm9vbGVhbjtcclxuICAgIGlzTG9hZGluZz86IGJvb2xlYW47XHJcblxyXG4gICAgaXNTY3JpcHRMb2FkZWQ/OiBib29sZWFuO1xyXG4gICAgaXNTY3JpcHRMb2FkU3VjY2VlZD86IGJvb2xlYW47XHJcblxyXG4gICAgZmV0Y2hEYXRhPzogKHVybDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgYXBwZW5kRGF0YT86ICh1cmw6IHN0cmluZywgcmFuZ2U6IHN0cmluZywgZGF0YTogYW55W10pID0+IHZvaWQ7XHJcbiAgICB1cGRhdGVEYXRhPzogKHVybDogc3RyaW5nLCBkYXRhOiBhbnlbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGVzdENvbXBvbmVudFN0YXRlIHtcclxuICAgIGlzU2lnbmVkSW4/OiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBUZXN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElUZXN0Q29tcG9uZW50UHJvcHMsIElUZXN0Q29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXV0aENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbkluKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNpZ25vdXRDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25PdXQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFwcGVuZENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgIFtcIkl0ZW0xXCIsIFwiWExcIiwgXCIxXCIsIFwiMFwiLCBkYXRlVGltZS50b1VUQ1N0cmluZygpXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBcIlJhd0RhdGEhQTpFXCI7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hcHBlbmREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbXCJJdGVtMVwiLCBcIkNvc3RcIiwgXCJTdG9ja2VkXCIsIFwiU2hpcCBEYXRlXCJdLFxyXG4gICAgICAgICAgICBbXCJXaGVlbDFcIiwgXCIkMjAuNTBcIiwgXCI0XCIsIFwiMy8xLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkRvb3IxXCIsIFwiJDE1XCIsIFwiMlwiLCBcIjMvMTUvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiRW5naW5lMVwiLCBcIiQxMDBcIiwgXCIxXCIsIFwiMzAvMjAvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiVG90YWxzMVwiLCBcIj1TVU0oQjI6QjQpXCIsIFwiPVNVTShDMjpDNClcIiwgXCI9TUFYKEQyOkQ0KVwiXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEYXRhKFNQUkVBRFNIRUVUX0lELCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTY3JpcHRMb2FkZWQgfSA9IG5leHRQcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2NyaXB0TG9hZGVkICYmICF0aGlzLnByb3BzLmlzU2NyaXB0TG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmxvYWQoJ2NsaWVudDphdXRoMicsIHRoaXMuaW5pdENsaWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFNQUkVBRFNIRUVUX0lEKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLmZldGNoRGF0YSgnaHR0cDovLzU4MjZlZDk2MzkwMGQ2MTIwMDAxMzhiZC5tb2NrYXBpLmlvL2l0ZW1zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGhhc0Vycm9yZWQsIGlzTG9hZGluZywgaXRlbXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIGlmIChoYXNFcnJvcmVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDxwPlNvcnJ5ISBUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgaXRlbXM8L3A+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDxwPkxvYWRpbmfigKY8L3A+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1bMF0gKyBpdGVtWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC8+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIHtyZXN1bHR9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBcHBlbmRDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdibG9jaycgOiAnbm9uZScgfX0+QXBwZW5kIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVVcGRhdGVDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdibG9jaycgOiAnbm9uZScgfX0+VXBkYXRlIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhdXRob3JpemVfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBdXRoQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnbm9uZScgOiAnYmxvY2snIH19PkF1dGhvcml6ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwic2lnbm91dF9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNpZ25vdXRDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdibG9jaycgOiAnbm9uZScgfX0+U2lnbiBPdXQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcmlwdExvYWRlcihcclxuICAgICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnXHJcbikoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVzdENvbXBvbmVudCkpXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcclxucm9vdC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxSb3V0ZXIgPlxyXG4gICAgICAgICAgICA8QXBwIC8+XHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICA8L1Byb3ZpZGVyPixcclxuICAgIHJvb3RcclxuKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IE5ld09yZGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3T3JkZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja1BhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrUGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tQYWdlUHJvcHMsIGFueT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICBDaGVjayBQYWdlXHJcbiAgICAgICAgICA8TmV3T3JkZXJDb21wb25lbnQgLz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbihDaGVja1BhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgUGF5bWVudCwgT3JkZXJUeXBlLCBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgUHJvY2Vzc0NoZWNrb3V0LCBTZXRQYXltZW50VHlwZSwgU2V0T3JkZXJUeXBlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbmRsZUNoZWNrb3V0OiAoKSA9PiBkaXNwYXRjaChQcm9jZXNzQ2hlY2tvdXQoKSksXHJcbiAgICAgICAgc2V0UGF5bWVudFR5cGU6ICh0eXBlOiBQYXltZW50KSA9PiBkaXNwYXRjaChTZXRQYXltZW50VHlwZSh0eXBlKSksXHJcbiAgICAgICAgc2V0T3JkZXJUeXBlOiAodHlwZTogT3JkZXJUeXBlKSA9PiBkaXNwYXRjaChTZXRPcmRlclR5cGUodHlwZSkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tvdXRQYWdlUHJvcHMge1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuICAgIGNoZWNrPzogQ2hlY2s7XHJcblxyXG4gICAgc2V0UGF5bWVudFR5cGU/OiAodHlwZTogUGF5bWVudCkgPT4gdm9pZDtcclxuICAgIHNldE9yZGVyVHlwZT86ICh0eXBlOiBPcmRlclR5cGUpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDaGVja291dD86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrb3V0UGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tvdXRQYWdlUHJvcHMsIGFueT57XHJcbiAgICBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNoZWNrb3V0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQYXltZW50VHlwZUNoYW5nZSA9ICh0eXBlOiBQYXltZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQYXltZW50VHlwZSh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVPcmRlclR5cGVDaGFuZ2UgPSAodHlwZTogT3JkZXJUeXBlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRPcmRlclR5cGUodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgY3JlYXRlIG5ldyBjaGVjayBmaXJzdFxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgQ2hlY2sgb3V0IFBhZ2VcclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIFBheW1lbnQgVHlwZTpcclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2sucGF5bWVudCA9PT0gUGF5bWVudC5DYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UoUGF5bWVudC5DYXJkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhcmQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnBheW1lbnQgPT09IFBheW1lbnQuQ2FzaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FzaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17UGF5bWVudC5DYXNoLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FzaFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIE9yZGVyIFR5cGU6XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnR5cGUgPT09IE9yZGVyVHlwZS5QcmVPcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuUHJlT3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09yZGVyVHlwZS5QcmVPcmRlci50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByZSBPcmRlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuU2hvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuU2hvcCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlNob3AudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaG9wXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkNoZWNrIE91dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXR9PlxyXG4gICAgICAgICAgICBDaGVjayBPdXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0UGFnZSkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDcmVhdGVDaGVjayB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDaGVjaywgUGF5bWVudCwgT3JkZXJUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjcmVhdGVDaGVjazogKHVybCkgPT4gZGlzcGF0Y2goQ3JlYXRlQ2hlY2soKSlcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWFpblBhZ2VQcm9wcyB7XHJcbiAgaGlzdG9yeT86IEFycmF5PENoZWNrPjtcclxuXHJcbiAgY3JlYXRlQ2hlY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jbGFzcyBNYWluUGFnZSBleHRlbmRzIENvbXBvbmVudDxJTWFpblBhZ2VQcm9wcywgYW55PntcclxuICBvbk5ld0NoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJIaXN0b3J5KCkge1xyXG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAge2hpc3RvcnkubWFwKGggPT4ge1xyXG4gICAgICAgIHJldHVybiA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aC5pZH0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGluc2V0IHByaW1hcnk9e2BDaGVjayAjJHtoLmlkfSwgZGVzc2VydHMgY291bnQ6ICR7aC5kZXNzZXJ0cy5sZW5ndGh9LCBkcmlua3MgY291bnQ6ICR7aC5kcmlua3MubGVuZ3RofSwgcGF5IGJ5ICR7UGF5bWVudFtoLnBheW1lbnRdfSwgb3JkZXJlZCBpbiAke09yZGVyVHlwZVtoLnR5cGVdfWB9IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgfSl9XHJcbiAgICA8L0xpc3Q+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgTWFpbiBQYWdlXHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIk5ldyBDaGVja1wiIG9uQ2xpY2s9e3RoaXMub25OZXdDaGVja0NsaWNrfT5cclxuICAgICAgICA8TGluayB0bz0nL2NoZWNrJz5OZXcgQ2hlY2s8L0xpbms+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICBISVNUT1JZXHJcbiAgICAgIHt0aGlzLnJlbmRlckhpc3RvcnkoKX1cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgKE1haW5QYWdlKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm90Rm91bmRQYWdlUHJvcHMge1xyXG59XHJcblxyXG5jbGFzcyBOb3RGb3VuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SU5vdEZvdW5kUGFnZVByb3BzLCBhbnk+e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICBOb3QgRm91bmRcclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoTm90Rm91bmRQYWdlKVxyXG4iLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIEFERF9EUklOSyxcclxuICAgIEFERF9ERVNTRVJULFxyXG4gICAgUFJPQ0VTU19DSEVDS09VVCwgICAgXHJcbiAgICBTRVRfUEFZTUVOVF9UWVBFLFxyXG4gICAgU0VUX09SREVSX1RZUEUsXHJcbiAgICBBUFBFTkRfREFUQV9GVUxGSUxMRUQsXHJcbiAgICBBUFBFTkRfREFUQV9SRUpFQ1RFRFxyXG59IGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7IENoZWNrLCBEZXNzZXJ0LCBEcmluaywgUGF5bWVudCwgT3JkZXJUeXBlIH0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcblxyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xyXG4gICAgW0NSRUFURV9DSEVDS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBjaGVjazogQ2hlY2sgPSB7XHJcbiAgICAgICAgICAgIGlkOiBoaXN0b3J5Lmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIGRlc3NlcnRzOiBuZXcgQXJyYXk8RGVzc2VydD4oKSxcclxuICAgICAgICAgICAgZHJpbmtzOiBuZXcgQXJyYXk8RHJpbms+KCksXHJcbiAgICAgICAgICAgIGlzRmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXltZW50OiBQYXltZW50LkNhc2gsXHJcbiAgICAgICAgICAgIHR5cGU6IE9yZGVyVHlwZS5TaG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfSxcclxuICAgIFtBRERfRFJJTktdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGRyaW5rOiBEcmluayA9IHtcclxuICAgICAgICAgICAgaWQ6IGNoZWNrLmRyaW5rcy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICB0eXBlOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoZWNrLmRyaW5rcy5wdXNoKGRyaW5rKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfSxcclxuICAgIFtBRERfREVTU0VSVF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgZGVzc2VydDogRGVzc2VydCA9IHtcclxuICAgICAgICAgICAgaWQ6IGNoZWNrLmRlc3NlcnRzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIHR5cGU6IGFjdGlvbi5wYXlsb2FkWzBdLFxyXG4gICAgICAgICAgICB0YXN0ZTogYWN0aW9uLnBheWxvYWRbMV0sXHJcbiAgICAgICAgICAgIHNpemU6IGFjdGlvbi5wYXlsb2FkWzJdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGVjay5kZXNzZXJ0cy5wdXNoKGRlc3NlcnQpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVja1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW1BST0NFU1NfQ0hFQ0tPVVRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2ssIGhpc3RvcnkgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLmlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChjaGVjayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrOiBudWxsLFxyXG4gICAgICAgICAgICBoaXN0b3J5XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbU0VUX1BBWU1FTlRfVFlQRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2sucGF5bWVudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogey4uLmNoZWNrfSB9OyAgICAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW1NFVF9PUkRFUl9UWVBFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjaGVjay50eXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiB7Li4uY2hlY2t9IH07ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbTE9BRF9JVEVNU106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfSxcclxuICAgIFtMT0FEX0lURU1TX0ZVTEZJTExFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfUkVKRUNURURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9GVUxGSUxMRURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6ICFhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9SRUpFQ1RFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbU0hPV19CVVNZXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzQnVzeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0J1c3kgfTtcclxuICAgIH1cclxufSwgaW5pdGlhbFN0YXRlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgQW55QWN0aW9uLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXInO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICBjaGVjazogbnVsbCxcclxuICAgIGhpc3Rvcnk6IG5ldyBBcnJheTxDaGVjaz4oKVxyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgRHJpbmtzVHlwZSwgRGVzc2VydFR5cGUgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEcmlua3NEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PHN0cmluZz4gfSA9IHt9O1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRXNwcmVzc29dID0gWyczMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Eb3BwaW9dID0gWyc2MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9dID0gWycxMjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vTWlsa10gPSBbJzEyMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5NYWNoaWF0b10gPSBbJzkwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkNhcHB1Y2lub10gPSBbJzE3NSDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5GbGF0V2hpdGVdID0gWycxNzUg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVMYXZlbmRlcl0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5SYWZdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuUmFmQ2l0cnVzXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUdyZWVuXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUJsYWNrXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUhlcmJhbF0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TcGVhY2lhbFRlYVBlYXJMaW1lXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFPcmFuZ2VdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQ2FjYW9dID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFsnMTc1INC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWycwINC80LsnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNzZXJ0c0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8c3RyaW5nPiB9ID0ge307XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5NYWNhcm9uXSA9IFsnMSDRiNGCJywgJzYg0YjRgicsICcxMiDRiNGCJywgJzI0INGI0YInXTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLlplcGh5cl0gPSBbJzEg0YjRgicsICc4INGI0YInLCAnMTYg0YjRgiddO1xyXG5EZXNzZXJ0c0RpY3RbRGVzc2VydFR5cGUuQ2FrZV0gPSBbJzE4INGB0LwnLCAnMjIg0YHQvCddOyIsImV4cG9ydCBpbnRlcmZhY2UgRGVzc2VydCB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgdHlwZTogRGVzc2VydFR5cGUsXHJcbiAgICB0YXN0ZTogc3RyaW5nLFxyXG4gICAgc2l6ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJpbmsge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIHR5cGU6IERyaW5rc1R5cGUsXHJcbiAgICBzaXplOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGVjayB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgZGVzc2VydHM6IEFycmF5PERlc3NlcnQ+LFxyXG4gICAgZHJpbmtzOiBBcnJheTxEcmluaz4sXHJcbiAgICBpc0ZpbmlzaGVkOiBib29sZWFuLFxyXG4gICAgcGF5bWVudDogUGF5bWVudCxcclxuICAgIHR5cGU6IE9yZGVyVHlwZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYXltZW50IHtcclxuICAgIENhcmQsXHJcbiAgICBDYXNoLFxyXG4gICAgT3RoZXJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3JkZXJUeXBlIHtcclxuICAgIFByZU9yZGVyLFxyXG4gICAgU2hvcCxcclxuICAgIE90aGVyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERlc3NlcnRUeXBlIHtcclxuICAgIE1hY2Fyb24gPSAn0JzQsNC60LDRgNC+0L3RgScsXHJcbiAgICBaZXBoeXIgPSAn0JfQtdGE0LjRgCcsXHJcbiAgICBDYWtlID0gJ9Ci0L7RgNGCJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYWNhcm9uc0VudW0ge1xyXG4gICAgQ2hvY29sYXRlID0gXCLQqNC+0LrQvtC70LDQtFwiLFxyXG4gICAgQ29mZmVlQ2FyYW1lbCA9IFwi0JrQvtGE0LUgLSDQodC+0LvRkdC90LDRjyDQmtCw0YDQsNC80LXQu9GMXCIsXHJcbiAgICBNYW5nb1Bhc3Npb24gPSBcItCc0LDQvdCz0L4gLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBMaW1lQmFzaWwgPSBcItCb0LDQudC8IC0g0JHQsNC30LjQu9C40LpcIixcclxuICAgIFBpc3RhY2hpbyA9IFwi0KTQuNGB0YLQsNGI0LrQsFwiLFxyXG4gICAgRG9yQmx1ZVBlYXIgPSBcItCU0L7QsS3QkdC70Y4gLSDQk9GA0YPRiNCwXCIsXHJcbiAgICBMYXZlbmRlckJsYWNrYmVycnkgPSBcItCb0LDQstCw0L3QtNCwIC0g0KfQtdGA0L3QuNC60LBcIixcclxuICAgIEN1cnJhbnQgPSBcItCh0LzQvtGA0L7QtNC40L3QsFwiLFxyXG4gICAgU3RyYXdiZXJyeUNoZWVzZWNha2UgPSBcItCa0LvRg9Cx0L3QuNGH0L3Ri9C5INCn0LjQt9C60LXQudC6XCIsXHJcbiAgICBQYXJtZXNhbkZpZ3VlID0gXCLQn9Cw0YDQvNC10LfQsNC9IC0g0JjQvdC20LjRgFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFplcGh5ckVudW0ge1xyXG4gICAgQXBwbGUgPSBcItCv0LHQu9C+0LrQvlwiLFxyXG4gICAgQ3VycmFudCA9IFwi0KHQvNC+0YDQvtC00LjQvdCwXCIsXHJcbiAgICBBcHJpY290UGFzc2lvbkZydWl0ID0gXCLQkNCx0YDQuNC60L7RgSAtINCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIFN0cmF3YmVycnlDcmFuYmVycnkgPSBcItCa0LvRg9Cx0L3QuNC60LAgLSDQmtC70Y7QutCy0LBcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDYWtlc0VudW0ge1xyXG4gICAgUmlvID0gXCJSaW9cIixcclxuICAgIENhcnJvdENha2UgPSBcIkNhcnJvdCBDYWtlXCIsXHJcbiAgICBTb3VsID0gXCJTb3VsXCIsXHJcbiAgICBQaW5rID0gXCJQaW5rXCIsXHJcbiAgICBJbmZpbml0eSA9IFwiSW5maW5pdHlcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEcmlua3NUeXBlIHtcclxuICAgIEVzcHJlc3NvID0gXCLQrdGB0L/RgNC10YHRgdC+XCIsXHJcbiAgICBEb3BwaW8gPSBcItCU0L7Qv9C/0LjQvlwiLFxyXG4gICAgQW1lcmljYW5vID0gXCLQkNC80LXRgNC40LrQsNC90L5cIixcclxuICAgIEFtZXJpY2Fub01pbGsgPSBcItCQ0LzQtdGA0LjQutCw0L3QviDRgSDQvNC+0LvQvtC60L7QvFwiLFxyXG4gICAgTWFjaGlhdG8gPSBcItCc0LDQutC40LDRgtC+XCIsXHJcbiAgICBDYXBwdWNpbm8gPSBcItCa0LDQv9GD0YfQuNC90L5cIixcclxuICAgIEZsYXRXaGl0ZSA9IFwi0KTQu9C10YIg0JLQsNC50YJcIixcclxuICAgIExhdHRlID0gXCLQm9Cw0YLRgtC1XCIsXHJcbiAgICBMYXR0ZUxhdmVuZGVyID0gXCLQm9Cw0YLRgtC1INCb0LDQstCw0L3QtNCwXCIsXHJcbiAgICBSYWYgPSBcItCg0LDRhFwiLFxyXG4gICAgUmFmQ2l0cnVzID0gXCLQoNCw0YQg0KbQuNGC0YDRg9GBXCIsXHJcbiAgICBUZWFHcmVlbiA9IFwi0KfQsNC5INCX0LXQu9GR0L3Ri9C5XCIsXHJcbiAgICBUZWFCbGFjayA9IFwi0KfQsNC5INCn0ZHRgNC90YvQuVwiLFxyXG4gICAgVGVhSGVyYmFsID0gXCLQp9Cw0Lkg0KLRgNCw0LLRj9C90L7QuVwiLFxyXG4gICAgU3BlYWNpYWxUZWFQZWFyTGltZSA9IFwi0KfQsNC5INCT0YDRg9GI0LAt0JvQsNC50LxcIixcclxuICAgIFNwZWNpYWxUZWFPcmFuZ2UgPSBcItCn0LDQuSDQkNC/0LXQu9GM0YHQuNC9LdCe0LHQu9C10L/QuNGF0LBcIixcclxuICAgIENhY2FvID0gXCLQmtCw0LrQsNC+XCIsXHJcbiAgICBIb3RDaG9jb2xhdGUgPSBcItCT0LDRgNGP0YfQuNC5INGI0L7QutC+0LvQsNC0XCIsXHJcbiAgICBMZW1vbmFkZVN0cmF3YmVycnkgPSBcItCb0LjQvNC+0L3QsNC0INCa0LvRg9Cx0L3QuNC60LBcIixcclxuICAgIExlbW9uYWRlQ2l0cnVzID0gXCLQm9C40LzQvtC90LDQtCDQptC40YLRgNGD0YFcIixcclxuICAgIExlbW9uYWRlUGFzc2lvbiA9IFwi0JvQuNC80L7QvdCw0LQg0JzQsNGA0LDQutGD0LnRj1wiLFxyXG4gICAgSWNlTGF0dGUgPSBcItCQ0LnRgSDQm9Cw0YLRgtC1XCIsXHJcbiAgICBTeXJvcCA9IFwi0KHQuNGA0L7Qv1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZhbHVlSW5wdXRPcHRpb24ge1xyXG4gICAgSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEID0gJ0lOUFVUX1ZBTFVFX09QVElPTl9VTlNQRUNJRklFRCcsXHJcbiAgICBSQVcgPSAnUkFXJyxcclxuICAgIFVTRVJfRU5URVJFRCA9ICdVU0VSX0VOVEVSRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEluc2VydERhdGFPcHRpb24ge1xyXG4gICAgT1ZFUldSSVRFID0gJ09WRVJXUklURScsXHJcbiAgICBJTlNFUlRfUk9XUyA9ICdJTlNFUlRfUk9XUydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVSZW5kZXJPcHRpb24ge1xyXG4gICAgRk9STUFUVEVEX1ZBTFVFID0gJ0ZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBVTkZPUk1BVFRFRF9WQUxVRSA9ICdVTkZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBGT1JNVUxBID0gJ0ZPUk1VTEEnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERhdGVUaW1lUmVuZGVyT3B0aW9uIHtcclxuICAgIFNFUklBTF9OVU1CRVIgPSAnU0VSSUFMX05VTUJFUicsXHJcbiAgICBGT1JNQVRURURfU1RSSU5HID0gJ0ZPUk1BVFRFRF9TVFJJTkcnXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==