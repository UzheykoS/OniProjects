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
exports.CLEAR_LOG = 'CLEAR_LOG';

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
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
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
                        _a.trys.push([1, 4, 5, 6]);
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
                        dispatch(exports.itemsAppendSuccess(updatedCellsCount === valueRange[0].length));
                        return [3 /*break*/, 6];
                    case 4:
                        ex_2 = _a.sent();
                        dispatch(exports.itemsAppendErrored(true));
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
                        spreadsheetId: config_1.LOGS_SPREADSHEET_ID,
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
exports.ProcessCheckout = function () {
    return function (dispatch, getState) {
        return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var state, check_1, log, drinksRange_1, dessertsRange_1, ex_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch(exports.itemsIsLoading(true));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        state = getState();
                        check_1 = state.check;
                        log = state.log;
                        drinksRange_1 = "RawDrinksData!A:E";
                        check_1.drinks.forEach(function (d) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var dateTime, data;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            dateTime = moment(new Date()).format('DD.MM.YYYY HH:mm');
                                            data = [[d.id, d.size, check_1.payment, check_1.type, dateTime]];
                                            return [4 /*yield*/, dispatch(exports.ProcessAppendData(config_1.SPREADSHEET_ID, drinksRange_1, data))];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        debugger;
                        dessertsRange_1 = "RawDessertsData!A:E";
                        check_1.desserts.forEach(function (d) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var dateTime, data;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            dateTime = moment(new Date()).format('DD.MM.YYYY HH:mm');
                                            data = [[d.id, d.type, d.taste, 0, d.size, check_1.payment, check_1.type, dateTime]];
                                            return [4 /*yield*/, dispatch(exports.ProcessAppendData(config_1.SPREADSHEET_ID, dessertsRange_1, data))];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        dispatch(exports.Checkout);
                        return [4 /*yield*/, exports.ProcessLog(log)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, exports.ProcessLog(JSON.stringify(check_1))];
                    case 3:
                        _a.sent();
                        dispatch(exports.ClearLog);
                        return [3 /*break*/, 6];
                    case 4:
                        ex_5 = _a.sent();
                        dispatch(exports.itemsAppendErrored(true));
                        console.log(ex_5);
                        throw Error(ex_5);
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
exports.Checkout = redux_actions_1.createAction(actionTypes_1.PROCESS_CHECKOUT);
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
exports.LogData = redux_actions_1.createAction(actionTypes_1.LOG_DATA, function (text) {
    return text;
});
exports.ClearLog = redux_actions_1.createAction(actionTypes_1.CLEAR_LOG);

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
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
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var MainPage_1 = __webpack_require__(/*! ./pages/MainPage */ "./src/pages/MainPage.tsx");
var CheckPage_1 = __webpack_require__(/*! ./pages/CheckPage */ "./src/pages/CheckPage.tsx");
var CheckoutPage_1 = __webpack_require__(/*! ./pages/CheckoutPage */ "./src/pages/CheckoutPage.tsx");
var NotFoundPage_1 = __webpack_require__(/*! ./pages/NotFoundPage */ "./src/pages/NotFoundPage.tsx");
var react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var TestComponent_1 = __webpack_require__(/*! ./components/TestComponent */ "./src/components/TestComponent.tsx");
var react_async_script_loader_1 = __webpack_require__(/*! react-async-script-loader */ "./node_modules/react-async-script-loader/lib/index.js");
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
var Header = function Header() {
    return React.createElement("header", null, React.createElement("nav", null, React.createElement("ul", null, React.createElement("li", null, React.createElement(react_router_dom_2.Link, { to: '/' }, "Home")), React.createElement("li", null, React.createElement(react_router_dom_2.Link, { to: '/test' }, "Test")))));
};
var Main = function Main() {
    return React.createElement(react_router_dom_1.Switch, null, React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: MainPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/check', component: CheckPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/checkOut', component: CheckoutPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/test', component: TestComponent_1.default }), React.createElement(react_router_dom_1.Route, { component: NotFoundPage_1.default }));
};
var App = /** @class */function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.initClient = function () {
            window['gapi'].client.init({
                apiKey: config_1.API_KEY,
                clientId: config_1.CLIENT_ID,
                discoveryDocs: config_1.DISCOVERY_DOCS,
                scope: config_1.SCOPES
            }).then(function () {
                // this.props.fetchData(SPREADSHEET_ID);
            });
        };
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
        _this.state = {
            isSignedIn: null
        };
        return _this;
    }
    App.prototype.componentWillReceiveProps = function (nextProps) {
        var isScriptLoaded = nextProps.isScriptLoaded;
        if (isScriptLoaded && !this.props.isScriptLoaded) {
            window['gapi'].load('client:auth2', this.initClient);
        }
    };
    App.prototype.render = function () {
        var isSignedIn = this.state.isSignedIn;
        return React.createElement("div", null, React.createElement(Header, null), React.createElement(Main, null), React.createElement("button", { id: "authorize_button", onClick: this.handleAuthClick, style: { display: isSignedIn ? 'none' : 'block' } }, "Authorize"), React.createElement("button", { id: "signout_button", onClick: this.handleSignoutClick, style: { display: isSignedIn ? 'block' : 'none' } }, "Sign Out"));
    };
    return App;
}(react_1.Component);
exports.default = react_async_script_loader_1.default('https://apis.google.com/js/api.js')(App);

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
        },
        logData: function logData(text) {
            return dispatch(actions_1.LogData(text));
        }
    };
};
var DessertsComponent = /** @class */function (_super) {
    __extends(DessertsComponent, _super);
    function DessertsComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            _this.props.handleClose();
            _this.props.logData('desserts->close');
        };
        _this.handleDessertSelect = function (dessert) {
            _this.setState({
                dessertType: dessert
            });
            _this.props.logData('desserts->dessertSelected->' + dessert);
        };
        _this.handleDessertTasteSelect = function (taste) {
            _this.setState({
                dessertTaste: taste
            });
            _this.props.logData('desserts->dessertTasteSelected->' + taste);
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
                            this.props.logData('desserts->dessertSizeSelected->' + size);
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
        },
        logData: function logData(text) {
            return dispatch(actions_1.LogData(text));
        }
    };
};
var DrinksComponent = /** @class */function (_super) {
    __extends(DrinksComponent, _super);
    function DrinksComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            _this.props.handleClose();
            _this.props.logData('drinks->close');
        };
        _this.handleDrinkSelect = function (drink) {
            _this.setState({
                drinkType: drink
            });
            _this.props.logData('drinks->drinkSelected->' + drink);
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
                            return [4 /*yield*/, this.props.addDrink(drinkType, drinkSize)];
                        case 1:
                            _a.sent();
                            this.props.handleClose();
                            this.props.logData('drinks->drinkSizeSelected->' + drinkSize);
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
        return React.createElement(List_1.default, { component: "nav" }, check.drinks.map(function (d, index) {
            return React.createElement(ListItem_1.default, { button: true, key: index }, React.createElement(ListItemText_1.default, { inset: true, primary: d.id + " - " + d.size }));
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
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
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
            _this.props.appendData(config_1.TEST_SPREADSHEET_ID, range, data);
        };
        _this.handleUpdateClick = function (event) {
            var data = [["Item1", "Cost", "Stocked", "Ship Date"], ["Wheel1", "$20.50", "4", "3/1/2016"], ["Door1", "$15", "2", "3/15/2016"], ["Engine1", "$100", "1", "30/20/2016"], ["Totals1", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]];
            _this.props.updateData(config_1.TEST_SPREADSHEET_ID, data);
        };
        _this.initClient = function () {
            window['gapi'].client.init({
                apiKey: config_1.API_KEY,
                clientId: config_1.CLIENT_ID,
                discoveryDocs: config_1.DISCOVERY_DOCS,
                scope: config_1.SCOPES
            }).then(function () {
                _this.props.fetchData(config_1.TEST_SPREADSHEET_ID);
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

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
exports.SCOPES = "https://www.googleapis.com/auth/spreadsheets";
exports.CLIENT_ID = '842417198767-7k42pt9ecgtu5f7oopng1oqu3a79i5i9.apps.googleusercontent.com';
exports.API_KEY = 'AIzaSyAlI5i8OOtw8aEEMS48E9pouEptq8tEg2M';
exports.TEST_SPREADSHEET_ID = '1ObMh87dNmizXbdWkH9TiqfrCfApk_rqxPGuQ_zNgJIM';
exports.LOGS_SPREADSHEET_ID = '1NPYoV9Ys52zf9V_NklQ5JdXhjppBLe0dC9T433ZY7P8';
exports.SPREADSHEET_ID = '1UBuEwqUyBIvvY1ihmEp9hb1j8m4JCpTl-a8mJ6RjUVw';

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
        },
        logData: function logData(text) {
            return dispatch(actions_1.LogData(text));
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
            _this.props.logData('checkoutPage->checkout');
        };
        _this.handlePaymentTypeChange = function (type) {
            _this.props.setPaymentType(type);
            _this.props.logData('checkoutPage->paymentTypeChanged->' + type);
        };
        _this.handleOrderTypeChange = function (type) {
            _this.props.setOrderType(type);
            _this.props.logData('checkoutPage->orderTypeChanged->' + type);
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
        createCheck: function createCheck() {
            return dispatch(actions_1.CreateCheck());
        },
        logData: function logData(text) {
            return dispatch(actions_1.LogData(text));
        }
    };
};
var MainPage = /** @class */function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onNewCheckClick = function () {
            _this.props.createCheck();
            _this.props.logData('mainPage->newCheck');
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
        id: action.payload[0],
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
    debugger;
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
}, _a[actionTypes_1.LOG_DATA] = function (state, action) {
    var text = action.payload;
    var log = state.log;
    return __assign({}, state, { log: log + ";" + text });
}, _a[actionTypes_1.CLEAR_LOG] = function (state, action) {
    return __assign({}, state, { log: '' });
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
    history: new Array(),
    log: ''
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
    Payment["Card"] = "\u041A\u0430\u0440\u0442\u0430";
    Payment["Cash"] = "\u041D\u0430\u043B\u0438\u0447\u043A\u0430";
    Payment["Other"] = "\u0414\u0440\u0443\u0433\u043E\u0435";
})(Payment = exports.Payment || (exports.Payment = {}));
var OrderType;
(function (OrderType) {
    OrderType["PreOrder"] = "\u041F\u0440\u0435\u0434\u0437\u0430\u043A\u0430\u0437";
    OrderType["Shop"] = "\u0412\u0438\u0442\u0440\u0438\u043D\u0430";
    OrderType["Other"] = "\u0414\u0440\u0443\u0433\u043E\u0435";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGVzc2VydHNDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyaW5rc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmV3T3JkZXJDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ2hlY2tQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ2hlY2tvdXRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTWFpblBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ob3RGb3VuZFBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5pdGlhbFN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2xvYmFsLnNjc3M/ZGNiZCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZGljdGlvbmFyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QWlFO0FBQ2pFLDhCQUFXO0FBQ1gsdUNBQ0o7QUFBQyxHQUoyQixtQkFBaEIsUUFBZ0IscUJBQWhCLFFBQWdCLG1CQUkzQjtBQUVELElBR0M7QUFIRCxXQUE0QjtBQUN4QixvQ0FBdUI7QUFDdkIsc0NBQ0o7QUFBQyxHQUgyQixtQkFBaEIsUUFBZ0IscUJBQWhCLFFBQWdCLG1CQUczQjtBQUVELElBSUM7QUFKRCxXQUE2QjtBQUN6QiwyQ0FBbUM7QUFDbkMsNkNBQXVDO0FBQ3ZDLG1DQUNKO0FBQUMsR0FKNEIsb0JBQWpCLFFBQWlCLHNCQUFqQixRQUFpQixvQkFJNUI7QUFFRCxJQUdDO0FBSEQsV0FBZ0M7QUFDNUIsNENBQStCO0FBQy9CLCtDQUNKO0FBQUMsR0FIK0IsdUJBQXBCLFFBQW9CLHlCQUFwQixRQUFvQix1QkFHL0IsSyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c3hcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknOyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYzsgfVxcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLWNoaWxkIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcblxcbi5hdmF0YXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyYzNlOTtcXG4gIGNvbG9yOiAjMWQ1M2EzOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0IGNvbnN0IENSRUFURV9DSEVDSyA9ICdDUkVBVEVfQ0hFQ0snO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9EUklOSyA9ICdBRERfRFJJTksnO1xyXG5leHBvcnQgY29uc3QgQUREX0RFU1NFUlQgPSAnQUREX0RFU1NFUlQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX1RZUEUgPSAnU0VUX1BBWU1FTlRfVFlQRSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfT1JERVJfVFlQRSA9ICdTRVRfT1JERVJfVFlQRSc7XHJcbmV4cG9ydCBjb25zdCBQUk9DRVNTX0NIRUNLT1VUID0gJ1BST0NFU1NfQ0hFQ0tPVVQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVMgPSAnTE9BRF9JVEVNUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lURU1TX0ZVTEZJTExFRCA9ICdMT0FEX0lURU1TX0ZVTEZJTExFRCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lURU1TX1JFSkVDVEVEID0gJ0xPQURfSVRFTVNfUkVKRUNURUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIT1dfQlVTWSA9IFwiU0hPV19CVVNZXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQVBQRU5EX0RBVEEgPSAnQVBQRU5EX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgQVBQRU5EX0RBVEFfRlVMRklMTEVEID0gJ0FQUEVORF9EQVRBX0ZVTEZJTExFRCc7XHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQV9SRUpFQ1RFRCA9ICdBUFBFTkRfREFUQV9SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEEgPSAnVVBEQVRFX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEFfRlVMRklMTEVEID0gJ1VQREFURV9EQVRBX0ZVTEZJTExFRCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQV9SRUpFQ1RFRCA9ICdVUERBVEVfREFUQV9SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0RBVEEgPSAnTE9HX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfTE9HID0gJ0NMRUFSX0xPRyc7IiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIFBST0NFU1NfQ0hFQ0tPVVQsXHJcbiAgICBBRERfRFJJTkssXHJcbiAgICBBRERfREVTU0VSVCxcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVELFxyXG4gICAgTE9HX0RBVEEsXHJcbiAgICBDTEVBUl9MT0dcclxufSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuaW1wb3J0IHsgRHJpbmtzVHlwZSwgRGVzc2VydFR5cGUsIFBheW1lbnQsIE9yZGVyVHlwZSwgQ2hlY2ssXHJcbiAgICBWYWx1ZUlucHV0T3B0aW9uLCBJbnNlcnREYXRhT3B0aW9uLCBWYWx1ZVJlbmRlck9wdGlvbiwgRGF0ZVRpbWVSZW5kZXJPcHRpb24gfSBmcm9tICcuL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgTE9HU19TUFJFQURTSEVFVF9JRCwgU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NGZXRjaERhdGEgPSAoc3ByZWFkc2hlZXRJZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgIHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiAnQTI6QjQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudmFsdWVzO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0ZldGNoRGF0YVN1Y2Nlc3MoaXRlbXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NBcHBlbmREYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZywgcmFuZ2U6IHN0cmluZywgdmFsdWVSYW5nZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENlbGxzQ291bnQgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudXBkYXRlcy51cGRhdGVkQ2VsbHM7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kU3VjY2Vzcyh1cGRhdGVkQ2VsbHNDb3VudCA9PT0gdmFsdWVSYW5nZVswXS5sZW5ndGgpKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NMb2cgPSBhc3luYyAobWVzc2FnZTogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbbWVzc2FnZSwgZGF0ZVRpbWUudG9VVENTdHJpbmcoKV1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuYXBwZW5kKHtcclxuICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogTE9HU19TUFJFQURTSEVFVF9JRCxcclxuICAgICAgICAgICAgcmFuZ2U6ICdBOkInLFxyXG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBWYWx1ZUlucHV0T3B0aW9uLlVTRVJfRU5URVJFRCxcclxuICAgICAgICAgICAgaW5zZXJ0RGF0YU9wdGlvbjogSW5zZXJ0RGF0YU9wdGlvbi5PVkVSV1JJVEUsXHJcbiAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUVcclxuICAgICAgICB9LCB7IHZhbHVlczogZGF0YSB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc1VwZGF0ZURhdGEgPSAoc3ByZWFkc2hlZXRJZDogc3RyaW5nLCB2YWx1ZVJhbmdlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogJ0E2OkQxMCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBWYWx1ZUlucHV0T3B0aW9uLlVTRVJfRU5URVJFRCxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRlVGltZVJlbmRlck9wdGlvbjogRGF0ZVRpbWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1NUUklOR1xyXG4gICAgICAgICAgICB9LCB7IHZhbHVlczogdmFsdWVSYW5nZSB9KTtcclxuICAgICAgICAgICAgLy9UT0RPOiBQcm9jZXNzIHJlc3BvbnNlIHJlc3VsdFxyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHJlc3BvbnNlLnJlc3VsdC52YWx1ZXM7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0ZldGNoRGF0YVN1Y2Nlc3MoaXRlbXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NGZXRjaERhdGFGYWtlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZUNoZWNrID0gY3JlYXRlQWN0aW9uKENSRUFURV9DSEVDSyk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0NoZWNrb3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2s6IENoZWNrID0gc3RhdGUuY2hlY2s7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbG9nIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc1JhbmdlID0gXCJSYXdEcmlua3NEYXRhIUE6RVwiO1xyXG4gICAgICAgICAgICBjaGVjay5kcmlua3MuZm9yRWFjaChhc3luYyBkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgICAgICAgICBbZC5pZCwgZC5zaXplLCBjaGVjay5wYXltZW50LCBjaGVjay50eXBlLCBkYXRlVGltZV1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YShTUFJFQURTSEVFVF9JRCwgZHJpbmtzUmFuZ2UsIGRhdGEpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0c1JhbmdlID0gXCJSYXdEZXNzZXJ0c0RhdGEhQTpFXCI7XHJcbiAgICAgICAgICAgIGNoZWNrLmRlc3NlcnRzLmZvckVhY2goYXN5bmMgZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgW2QuaWQsIGQudHlwZSwgZC50YXN0ZSwgMCwgZC5zaXplLCBjaGVjay5wYXltZW50LCBjaGVjay50eXBlLCBkYXRlVGltZV1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YShTUFJFQURTSEVFVF9JRCwgZGVzc2VydHNSYW5nZSwgZGF0YSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuIFxyXG4gICAgICAgICAgICBkaXNwYXRjaChDaGVja291dCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBQcm9jZXNzTG9nKGxvZyk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2coSlNPTi5zdHJpbmdpZnkoY2hlY2spKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goQ2xlYXJMb2cpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja291dCA9IGNyZWF0ZUFjdGlvbihQUk9DRVNTX0NIRUNLT1VUKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGREcmluayA9IGNyZWF0ZUFjdGlvbihBRERfRFJJTkssICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IFt0eXBlLCBzaXplXSk7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRGVzc2VydCA9IGNyZWF0ZUFjdGlvbihBRERfREVTU0VSVCwgKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcpID0+IFt0eXBlLCB0YXN0ZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldFBheW1lbnRUeXBlID0gY3JlYXRlQWN0aW9uKFNFVF9QQVlNRU5UX1RZUEUsICh0eXBlOiBQYXltZW50KSA9PiB0eXBlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRPcmRlclR5cGUgPSBjcmVhdGVBY3Rpb24oU0VUX09SREVSX1RZUEUsICh0eXBlOiBPcmRlclR5cGUpID0+IHR5cGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zSGFzRXJyb3JlZCA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TX1JFSkVDVEVELCAoaGFzRXJyb3JlZDogYm9vbGVhbikgPT4gaGFzRXJyb3JlZCk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNJc0xvYWRpbmcgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNUywgKGlzTG9hZGluZzogYm9vbGVhbikgPT4gaXNMb2FkaW5nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0ZldGNoRGF0YVN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNU19GVUxGSUxMRUQsIChpdGVtczogYW55W10pID0+IGl0ZW1zKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0FwcGVuZFN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oQVBQRU5EX0RBVEFfRlVMRklMTEVELCAoc3VjY2VzczogYm9vbGVhbikgPT4gc3VjY2Vzcyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNBcHBlbmRFcnJvcmVkID0gY3JlYXRlQWN0aW9uKEFQUEVORF9EQVRBX1JFSkVDVEVEKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QnVzeSA9IGNyZWF0ZUFjdGlvbihTSE9XX0JVU1ksIChpc0J1c3k6IGJvb2xlYW4pID0+IGlzQnVzeSk7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nRGF0YSA9IGNyZWF0ZUFjdGlvbihMT0dfREFUQSwgKHRleHQ6IHN0cmluZykgPT4gdGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJMb2cgPSBjcmVhdGVBY3Rpb24oQ0xFQVJfTE9HKTtcclxuIiwiaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL01haW5QYWdlJztcclxuaW1wb3J0IENoZWNrUGFnZSBmcm9tICcuL3BhZ2VzL0NoZWNrUGFnZSc7XHJcbmltcG9ydCBDaGVja291dFBhZ2UgZnJvbSAnLi9wYWdlcy9DaGVja291dFBhZ2UnO1xyXG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4vcGFnZXMvTm90Rm91bmRQYWdlJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVGVzdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudCc7XHJcbmltcG9ydCBzY3JpcHRMb2FkZXIgZnJvbSAncmVhY3QtYXN5bmMtc2NyaXB0LWxvYWRlcic7XHJcbmltcG9ydCB7IERJU0NPVkVSWV9ET0NTLCBTQ09QRVMsIENMSUVOVF9JRCwgQVBJX0tFWSwgU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nLyc+SG9tZTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdGVzdCc+VGVzdDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbilcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e01haW5QYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2snIGNvbXBvbmVudD17Q2hlY2tQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2tPdXQnIGNvbXBvbmVudD17Q2hlY2tvdXRQYWdlfSAvPlxyXG5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL3Rlc3QnIGNvbXBvbmVudD17VGVzdENvbXBvbmVudH0gLz5cclxuICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZFBhZ2V9IC8+XHJcbiAgICA8L1N3aXRjaD5cclxuKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwU3RhdGUge1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudDxhbnksIElBcHBTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTY3JpcHRMb2FkZWQgfSA9IG5leHRQcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2NyaXB0TG9hZGVkICYmICF0aGlzLnByb3BzLmlzU2NyaXB0TG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmxvYWQoJ2NsaWVudDphdXRoMicsIHRoaXMuaW5pdENsaWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFNQUkVBRFNIRUVUX0lEKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBdXRoQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2lnbm91dENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbk91dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImF1dGhvcml6ZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdub25lJyA6ICdibG9jaycgfX0+QXV0aG9yaXplPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5TaWduIE91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0TG9hZGVyKFxyXG4gICAgJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcydcclxuKShBcHApXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBZGREZXNzZXJ0LCBMb2dEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IHsgRGVzc2VydFR5cGUsIE1hY2Fyb25zRW51bSwgQ2FrZXNFbnVtLCBaZXBoeXJFbnVtIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBEZXNzZXJ0c0RpY3QgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5pbXBvcnQgeyBBZGRJY29uIH0gZnJvbSAnbWRpLXJlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZERlc3NlcnQ6ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChBZGREZXNzZXJ0KHR5cGUsIHRhc3RlLCBzaXplKSksXHJcbiAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXNzZXJ0c0NvbXBvbmVudFByb3BzIHtcclxuICBhZGREZXNzZXJ0PzogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXNzZXJ0c0NvbXBvbmVudFN0YXRlIHtcclxuICBkZXNzZXJ0VHlwZT86IERlc3NlcnRUeXBlO1xyXG4gIGRlc3NlcnRUYXN0ZT86IHN0cmluZztcclxuICBkZXNzZXJ0U2l6ZT86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgRGVzc2VydHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SURlc3NlcnRzQ29tcG9uZW50UHJvcHMsIElEZXNzZXJ0c0NvbXBvbmVudFN0YXRlPntcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRlc3NlcnRUeXBlOiBudWxsLFxyXG4gICAgICBkZXNzZXJ0VGFzdGU6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+Y2xvc2UnKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRTZWxlY3QgPSAoZGVzc2VydCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRlc3NlcnRUeXBlOiBkZXNzZXJ0XHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRTZWxlY3RlZC0+JyArIGRlc3NlcnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0ID0gKHRhc3RlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFRhc3RlOiB0YXN0ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0VGFzdGVTZWxlY3RlZC0+JyArIHRhc3RlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRTaXplU2VsZWN0ID0gYXN5bmMgKHNpemUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0U2l6ZTogc2l6ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIHNpemUpO1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFNpemVTZWxlY3RlZC0+JyArIHNpemUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGVzc2VydHMoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0S2V5cyA9IE9iamVjdC5rZXlzKERlc3NlcnRUeXBlKTtcclxuICAgIGNvbnN0IGRlc3NlcnRzID0gZGVzc2VydEtleXMubWFwKGQgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBkLFxyXG4gICAgICAgIHZhbHVlOiBEZXNzZXJ0VHlwZVtkXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydHMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRTZWxlY3QoZC52YWx1ZSl9IGtleT17ZC5pZH0gPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICBnZXRBcnJheUZyb21FbnVtKGVuOiBhbnkpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbik7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcChkID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogZCxcclxuICAgICAgICB2YWx1ZTogZW5bZF1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXJEZXNzZXJ0VGFzdGVzKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBsZXQgZGVzc2VydFRhc3RlcztcclxuICAgIHN3aXRjaCAoZGVzc2VydFR5cGUpIHtcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5DYWtlOlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oQ2FrZXNFbnVtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5NYWNhcm9uOlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oTWFjYXJvbnNFbnVtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5aZXBoeXI6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShaZXBoeXJFbnVtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydFRhc3Rlcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlfSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRGVzc2VydFNpemVzKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGRlc3NlcnRTaXplcyA9IERlc3NlcnRzRGljdFtkZXNzZXJ0VHlwZV07XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtkZXNzZXJ0U2l6ZXMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRTaXplU2VsZWN0KGQpfSBrZXk9e2R9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkfSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuPXt0cnVlfSA+XHJcbiAgICAgIDxEaWFsb2dUaXRsZSBpZD1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIj57IWRlc3NlcnRUeXBlID8gJ1NlbGVjdCBkZXNzZXJ0JyA6ICdTZWxlY3QgdGFzdGUnfTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgIHshZGVzc2VydFR5cGUgPyB0aGlzLnJlbmRlckRlc3NlcnRzKCkgOiAoIWRlc3NlcnRUYXN0ZSA/IHRoaXMucmVuZGVyRGVzc2VydFRhc3RlcygpIDogdGhpcy5yZW5kZXJEZXNzZXJ0U2l6ZXMoKSl9XHJcbiAgICA8L0RpYWxvZz47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGVzc2VydHNDb21wb25lbnQpKVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWRkRHJpbmssIExvZ0RhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgeyBEcmlua3NUeXBlLCBEcmluayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRHJpbmtzRGljdCB9IGZyb20gJy4uL3V0aWxzL2RpY3Rpb25hcmllcyc7XHJcbmltcG9ydCB7IEFkZEljb24gfSBmcm9tICdtZGktcmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZERyaW5rOiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChBZGREcmluayh0eXBlLCBzaXplKSksXHJcbiAgICAgICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEcmlua3NDb21wb25lbnRQcm9wcyB7XHJcbiAgICBhZGREcmluaz86ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDbG9zZT86ICgpID0+IHZvaWQ7XHJcbiAgICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJpbmtzQ29tcG9uZW50U3RhdGUge1xyXG4gICAgZHJpbmtUeXBlPzogRHJpbmtzVHlwZTtcclxuICAgIGRyaW5rU2l6ZT86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgRHJpbmtzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElEcmlua3NDb21wb25lbnRQcm9wcywgSURyaW5rc0NvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkcmlua1R5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIGRyaW5rU2l6ZTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkcmlua3MtPmNsb3NlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJpbmtTZWxlY3QgPSAoZHJpbmspID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZHJpbmtUeXBlOiBkcmlua1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5kcmlua1NlbGVjdGVkLT4nICsgZHJpbmspO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyaW5rU2l6ZVNlbGVjdCA9IGFzeW5jIChkcmlua1NpemUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZHJpbmtTaXplXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRHJpbmsoZHJpbmtUeXBlLCBkcmlua1NpemUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2RyaW5rcy0+ZHJpbmtTaXplU2VsZWN0ZWQtPicgKyBkcmlua1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRyaW5rcygpIHtcclxuICAgICAgICBjb25zdCBkcmlua0tleXMgPSBPYmplY3Qua2V5cyhEcmlua3NUeXBlKTtcclxuICAgICAgICBjb25zdCBkcmlua3MgPSBkcmlua0tleXMubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogRHJpbmtzVHlwZVtkXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAge2RyaW5rcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyRHJpbmtTaXplcygpIHtcclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmlua1NpemVzID0gRHJpbmtzRGljdFtkcmlua1R5cGVdO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZHJpbmtTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2l6ZVNlbGVjdChkKX0ga2V5PXtkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxEaWFsb2cgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLWRpYWxvZy10aXRsZVwiIG9wZW49e3RydWV9ID5cclxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2ltcGxlLWRpYWxvZy10aXRsZVwiPnshZHJpbmtUeXBlID8gJ1NlbGVjdCBkcmluaycgOiAnU2VsZWN0IHNpemUnfTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgIHshZHJpbmtUeXBlID8gdGhpcy5yZW5kZXJEcmlua3MoKSA6IHRoaXMucmVuZGVyRHJpbmtTaXplcygpfVxyXG4gICAgICAgIDwvRGlhbG9nPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERyaW5rc0NvbXBvbmVudCkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IERyaW5rc0NvbXBvbmVudCBmcm9tICcuL0RyaW5rc0NvbXBvbmVudCc7XHJcbmltcG9ydCBEZXNzZXJ0c0NvbXBvbmVudCBmcm9tICcuL0Rlc3NlcnRzQ29tcG9uZW50JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXdPcmRlckNvbXBvbmVudFByb3BzIHtcclxuICAgIGNoZWNrPzogQ2hlY2tcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTmV3T3JkZXJDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBzaG93RHJpbmtzPzogYm9vbGVhbjtcclxuICAgIHNob3dEZXNzZXJ0cz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIE5ld09yZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElOZXdPcmRlckNvbXBvbmVudFByb3BzLCBJTmV3T3JkZXJDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd0RyaW5rczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dEZXNzZXJ0czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRHJpbmtDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0RyaW5rczogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGVzc2VydENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RGVzc2VydHM6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNoZWNrQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICAgIHtjaGVjay5kcmlua3MubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtgJHtkLmlkfSAtICR7ZC5zaXplfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAge2NoZWNrLmRlc3NlcnRzLm1hcChkID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0gYnV0dG9uIGtleT17ZC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtgJHtkLnR5cGV9IC0gJHtkLnRhc3RlfSAtICR7ZC5zaXplfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNob3dEcmlua3MsIHNob3dEZXNzZXJ0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGNyZWF0ZSBuZXcgY2hlY2sgZmlyc3RcclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtgQ2hlY2sgIyR7Y2hlY2suaWR9YH1cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hlY2tDb250ZW50KCl9XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHRpdGxlPVwiRGVzc2VydHNcIiBvbkNsaWNrPXt0aGlzLmFkZERlc3NlcnRDbGlja30gPlxyXG4gICAgICAgICAgICAgICAgRGVzc2VydHNcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHRpdGxlPVwiRHJpbmtzXCIgb25DbGljaz17dGhpcy5hZGREcmlua0NsaWNrfT5cclxuICAgICAgICAgICAgICAgIERyaW5rc1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17Y2hlY2suZGVzc2VydHMubGVuZ3RoID09PSAwICYmIGNoZWNrLmRyaW5rcy5sZW5ndGggPT09IDB9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIHRpdGxlPVwiQ2hlY2tvdXRcIiA+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz0nL2NoZWNrT3V0Jz5DaGVjayBPdXQ8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB7c2hvd0RyaW5rcyAmJiA8RHJpbmtzQ29tcG9uZW50IGhhbmRsZUNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0RyaW5rczogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgICAgICB7c2hvd0Rlc3NlcnRzICYmIDxEZXNzZXJ0c0NvbXBvbmVudCBoYW5kbGVDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dEZXNzZXJ0czogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChOZXdPcmRlckNvbXBvbmVudClcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFByb2Nlc3NGZXRjaERhdGEsIFByb2Nlc3NBcHBlbmREYXRhLCBQcm9jZXNzVXBkYXRlRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgc2NyaXB0TG9hZGVyIGZyb20gJ3JlYWN0LWFzeW5jLXNjcmlwdC1sb2FkZXInO1xyXG5pbXBvcnQgeyBESVNDT1ZFUllfRE9DUywgU0NPUEVTLCBDTElFTlRfSUQsIEFQSV9LRVksIFRFU1RfU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcyxcclxuICAgICAgICBoYXNFcnJvcmVkOiBzdGF0ZS5oYXNFcnJvcmVkLFxyXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxyXG4gICAgICAgIGxhYmVsOiBzdGF0ZS5sYWJlbFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZXRjaERhdGE6ICh1cmwpID0+IGRpc3BhdGNoKFByb2Nlc3NGZXRjaERhdGEodXJsKSksXHJcbiAgICAgICAgYXBwZW5kRGF0YTogKHVybCwgcmFuZ2UsIGRhdGEpID0+IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKHVybCwgcmFuZ2UsIGRhdGEpKSxcclxuICAgICAgICB1cGRhdGVEYXRhOiAodXJsLCBkYXRhKSA9PiBkaXNwYXRjaChQcm9jZXNzVXBkYXRlRGF0YSh1cmwsIGRhdGEpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RDb21wb25lbnRQcm9wcyB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIGl0ZW1zPzogYW55O1xyXG4gICAgaGFzRXJyb3JlZD86IGJvb2xlYW47XHJcbiAgICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG5cclxuICAgIGlzU2NyaXB0TG9hZGVkPzogYm9vbGVhbjtcclxuICAgIGlzU2NyaXB0TG9hZFN1Y2NlZWQ/OiBib29sZWFuO1xyXG5cclxuICAgIGZldGNoRGF0YT86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGFwcGVuZERhdGE/OiAodXJsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB2b2lkO1xyXG4gICAgdXBkYXRlRGF0YT86ICh1cmw6IHN0cmluZywgZGF0YTogYW55W10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgVGVzdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJVGVzdENvbXBvbmVudFByb3BzLCBJVGVzdENvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUF1dGhDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTaWdub3V0Q2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBcHBlbmRDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbXCJJdGVtMVwiLCBcIlhMXCIsIFwiMVwiLCBcIjBcIiwgZGF0ZVRpbWUudG9VVENTdHJpbmcoKV1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gXCJSYXdEYXRhIUE6RVwiO1xyXG4gICAgICAgIHRoaXMucHJvcHMuYXBwZW5kRGF0YShURVNUX1NQUkVBRFNIRUVUX0lELCByYW5nZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbXCJJdGVtMVwiLCBcIkNvc3RcIiwgXCJTdG9ja2VkXCIsIFwiU2hpcCBEYXRlXCJdLFxyXG4gICAgICAgICAgICBbXCJXaGVlbDFcIiwgXCIkMjAuNTBcIiwgXCI0XCIsIFwiMy8xLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkRvb3IxXCIsIFwiJDE1XCIsIFwiMlwiLCBcIjMvMTUvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiRW5naW5lMVwiLCBcIiQxMDBcIiwgXCIxXCIsIFwiMzAvMjAvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiVG90YWxzMVwiLCBcIj1TVU0oQjI6QjQpXCIsIFwiPVNVTShDMjpDNClcIiwgXCI9TUFYKEQyOkQ0KVwiXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEYXRhKFRFU1RfU1BSRUFEU0hFRVRfSUQsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NjcmlwdExvYWRlZCB9ID0gbmV4dFByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JpcHRMb2FkZWQgJiYgIXRoaXMucHJvcHMuaXNTY3JpcHRMb2FkZWQpIHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnY2xpZW50OmF1dGgyJywgdGhpcy5pbml0Q2xpZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVNcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaERhdGEoVEVTVF9TUFJFQURTSEVFVF9JRCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaERhdGEoJ2h0dHA6Ly81ODI2ZWQ5NjM5MDBkNjEyMDAwMTM4YmQubW9ja2FwaS5pby9pdGVtcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGxhYmVsLCBoYXNFcnJvcmVkLCBpc0xvYWRpbmcsIGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICBpZiAoaGFzRXJyb3JlZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8cD5Tb3JyeSEgVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGl0ZW1zPC9wPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8cD5Mb2FkaW5n4oCmPC9wPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtWzBdICsgaXRlbVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICB7cmVzdWx0fVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXBwZW5kQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PkFwcGVuZCBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlVwZGF0ZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYXV0aG9yaXplX2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXV0aENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ25vbmUnIDogJ2Jsb2NrJyB9fT5BdXRob3JpemU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNpZ25vdXRfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlNpZ24gT3V0PC9idXR0b24+XHJcbiAgICAgICAgPC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY3JpcHRMb2FkZXIoXHJcbiAgICAnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzJ1xyXG4pKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlc3RDb21wb25lbnQpKVxyXG4iLCJleHBvcnQgY29uc3QgRElTQ09WRVJZX0RPQ1MgPSBbXCJodHRwczovL3NoZWV0cy5nb29nbGVhcGlzLmNvbS8kZGlzY292ZXJ5L3Jlc3Q/dmVyc2lvbj12NFwiXTtcclxuZXhwb3J0IGNvbnN0IFNDT1BFUyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHNcIjtcclxuZXhwb3J0IGNvbnN0IENMSUVOVF9JRCA9ICc4NDI0MTcxOTg3NjctN2s0MnB0OWVjZ3R1NWY3b29wbmcxb3F1M2E3OWk1aTkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5leHBvcnQgY29uc3QgQVBJX0tFWSA9ICdBSXphU3lBbEk1aThPT3R3OGFFRU1TNDhFOXBvdUVwdHE4dEVnMk0nO1xyXG5leHBvcnQgY29uc3QgVEVTVF9TUFJFQURTSEVFVF9JRCA9ICcxT2JNaDg3ZE5taXpYYmRXa0g5VGlxZnJDZkFwa19ycXhQR3VRX3pOZ0pJTSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HU19TUFJFQURTSEVFVF9JRCA9ICcxTlBZb1Y5WXM1MnpmOVZfTmtsUTVKZFhoanBwQkxlMGRDOVQ0MzNaWTdQOCc7XHJcbmV4cG9ydCBjb25zdCBTUFJFQURTSEVFVF9JRCA9ICcxVUJ1RXdxVXlCSXZ2WTFpaG1FcDloYjFqOG00SkNwVGwtYThtSjZSalVWdyc7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcclxucm9vdC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxSb3V0ZXIgPlxyXG4gICAgICAgICAgICA8QXBwIC8+XHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICA8L1Byb3ZpZGVyPixcclxuICAgIHJvb3RcclxuKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IE5ld09yZGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3T3JkZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja1BhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrUGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tQYWdlUHJvcHMsIGFueT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICBDaGVjayBQYWdlXHJcbiAgICAgICAgICA8TmV3T3JkZXJDb21wb25lbnQgLz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbihDaGVja1BhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgUGF5bWVudCwgT3JkZXJUeXBlLCBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgUHJvY2Vzc0NoZWNrb3V0LCBTZXRQYXltZW50VHlwZSwgU2V0T3JkZXJUeXBlLCBMb2dEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbmRsZUNoZWNrb3V0OiAoKSA9PiBkaXNwYXRjaChQcm9jZXNzQ2hlY2tvdXQoKSksXHJcbiAgICAgICAgc2V0UGF5bWVudFR5cGU6ICh0eXBlOiBQYXltZW50KSA9PiBkaXNwYXRjaChTZXRQYXltZW50VHlwZSh0eXBlKSksXHJcbiAgICAgICAgc2V0T3JkZXJUeXBlOiAodHlwZTogT3JkZXJUeXBlKSA9PiBkaXNwYXRjaChTZXRPcmRlclR5cGUodHlwZSkpLFxyXG4gICAgICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tvdXRQYWdlUHJvcHMge1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuICAgIGNoZWNrPzogQ2hlY2s7XHJcblxyXG4gICAgc2V0UGF5bWVudFR5cGU/OiAodHlwZTogUGF5bWVudCkgPT4gdm9pZDtcclxuICAgIHNldE9yZGVyVHlwZT86ICh0eXBlOiBPcmRlclR5cGUpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDaGVja291dD86ICgpID0+IHZvaWQ7XHJcbiAgICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgQ2hlY2tvdXRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElDaGVja291dFBhZ2VQcm9wcywgYW55PntcclxuICAgIGhhbmRsZUNoZWNrb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXQoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5jaGVja291dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlID0gKHR5cGU6IFBheW1lbnQpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldFBheW1lbnRUeXBlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5wYXltZW50VHlwZUNoYW5nZWQtPicgKyB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVPcmRlclR5cGVDaGFuZ2UgPSAodHlwZTogT3JkZXJUeXBlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRPcmRlclR5cGUodHlwZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPm9yZGVyVHlwZUNoYW5nZWQtPicgKyB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBjcmVhdGUgbmV3IGNoZWNrIGZpcnN0XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICBDaGVjayBvdXQgUGFnZVxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgUGF5bWVudCBUeXBlOlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay5wYXltZW50ID09PSBQYXltZW50LkNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVQYXltZW50VHlwZUNoYW5nZShQYXltZW50LkNhcmQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1BheW1lbnQuQ2FyZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhcmRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2sucGF5bWVudCA9PT0gUGF5bWVudC5DYXNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UoUGF5bWVudC5DYXNoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhc2gudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXNoXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgT3JkZXIgVHlwZTpcclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2sudHlwZSA9PT0gT3JkZXJUeXBlLlByZU9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlT3JkZXJUeXBlQ2hhbmdlKE9yZGVyVHlwZS5QcmVPcmRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlByZU9yZGVyLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJlIE9yZGVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnR5cGUgPT09IE9yZGVyVHlwZS5TaG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlT3JkZXJUeXBlQ2hhbmdlKE9yZGVyVHlwZS5TaG9wKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtPcmRlclR5cGUuU2hvcC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3BcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHRpdGxlPVwiQ2hlY2sgT3V0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDaGVja291dH0+XHJcbiAgICAgICAgICAgIENoZWNrIE91dFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hlY2tvdXRQYWdlKSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IENyZWF0ZUNoZWNrLCBMb2dEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IENoZWNrLCBQYXltZW50LCBPcmRlclR5cGUgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGhpc3Rvcnk6IHN0YXRlLmhpc3RvcnlcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWF0ZUNoZWNrOiAoKSA9PiBkaXNwYXRjaChDcmVhdGVDaGVjaygpKSxcclxuICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1haW5QYWdlUHJvcHMge1xyXG4gIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcblxyXG4gIGNyZWF0ZUNoZWNrPzogKCkgPT4gdm9pZDtcclxuICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SU1haW5QYWdlUHJvcHMsIGFueT57XHJcbiAgb25OZXdDaGVja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5jcmVhdGVDaGVjaygpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdtYWluUGFnZS0+bmV3Q2hlY2snKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckhpc3RvcnkoKSB7XHJcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiPlxyXG4gICAgICB7aGlzdG9yeS5tYXAoaCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtoLmlkfT5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YENoZWNrICMke2guaWR9LCBkZXNzZXJ0cyBjb3VudDogJHtoLmRlc3NlcnRzLmxlbmd0aH0sIGRyaW5rcyBjb3VudDogJHtoLmRyaW5rcy5sZW5ndGh9LCBwYXkgYnkgJHtQYXltZW50W2gucGF5bWVudF19LCBvcmRlcmVkIGluICR7T3JkZXJUeXBlW2gudHlwZV19YH0gLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICB9KX1cclxuICAgIDwvTGlzdD47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICBNYWluIFBhZ2VcclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHRpdGxlPVwiTmV3IENoZWNrXCIgb25DbGljaz17dGhpcy5vbk5ld0NoZWNrQ2xpY2t9PlxyXG4gICAgICAgIDxMaW5rIHRvPScvY2hlY2snPk5ldyBDaGVjazwvTGluaz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIEhJU1RPUllcclxuICAgICAge3RoaXMucmVuZGVySGlzdG9yeSgpfVxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoTWFpblBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb3RGb3VuZFBhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIE5vdEZvdW5kUGFnZSBleHRlbmRzIENvbXBvbmVudDxJTm90Rm91bmRQYWdlUHJvcHMsIGFueT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIE5vdCBGb3VuZFxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChOb3RGb3VuZFBhZ2UpXHJcbiIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMsIEFjdGlvbiB9IGZyb20gXCJyZWR1eC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX0lURU1TLFxyXG4gICAgTE9BRF9JVEVNU19GVUxGSUxMRUQsXHJcbiAgICBMT0FEX0lURU1TX1JFSkVDVEVELFxyXG4gICAgU0hPV19CVVNZLFxyXG4gICAgQ1JFQVRFX0NIRUNLLFxyXG4gICAgQUREX0RSSU5LLFxyXG4gICAgQUREX0RFU1NFUlQsXHJcbiAgICBQUk9DRVNTX0NIRUNLT1VULCAgICBcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVELFxyXG4gICAgTE9HX0RBVEEsXHJcbiAgICBDTEVBUl9MT0dcclxufSBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgeyBDaGVjaywgRGVzc2VydCwgRHJpbmssIFBheW1lbnQsIE9yZGVyVHlwZSB9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5cclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3N0b3JlL2luaXRpYWxTdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcclxuICAgIFtDUkVBVEVfQ0hFQ0tdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2s6IENoZWNrID0ge1xyXG4gICAgICAgICAgICBpZDogaGlzdG9yeS5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICBkZXNzZXJ0czogbmV3IEFycmF5PERlc3NlcnQ+KCksXHJcbiAgICAgICAgICAgIGRyaW5rczogbmV3IEFycmF5PERyaW5rPigpLFxyXG4gICAgICAgICAgICBpc0ZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcGF5bWVudDogUGF5bWVudC5DYXNoLFxyXG4gICAgICAgICAgICB0eXBlOiBPcmRlclR5cGUuU2hvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbQUREX0RSSU5LXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmluazogRHJpbmsgPSB7XHJcbiAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoZWNrLmRyaW5rcy5wdXNoKGRyaW5rKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfSxcclxuICAgIFtBRERfREVTU0VSVF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgZGVzc2VydDogRGVzc2VydCA9IHtcclxuICAgICAgICAgICAgaWQ6IGNoZWNrLmRlc3NlcnRzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIHR5cGU6IGFjdGlvbi5wYXlsb2FkWzBdLFxyXG4gICAgICAgICAgICB0YXN0ZTogYWN0aW9uLnBheWxvYWRbMV0sXHJcbiAgICAgICAgICAgIHNpemU6IGFjdGlvbi5wYXlsb2FkWzJdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGVjay5kZXNzZXJ0cy5wdXNoKGRlc3NlcnQpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVja1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW1BST0NFU1NfQ0hFQ0tPVVRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2ssIGhpc3RvcnkgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLmlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChjaGVjayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrOiBudWxsLFxyXG4gICAgICAgICAgICBoaXN0b3J5XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbU0VUX1BBWU1FTlRfVFlQRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2sucGF5bWVudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogey4uLmNoZWNrfSB9OyAgICAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW1NFVF9PUkRFUl9UWVBFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjaGVjay50eXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiB7Li4uY2hlY2t9IH07ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbTE9BRF9JVEVNU106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfSxcclxuICAgIFtMT0FEX0lURU1TX0ZVTEZJTExFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfUkVKRUNURURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9GVUxGSUxMRURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6ICFhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9SRUpFQ1RFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbU0hPV19CVVNZXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzQnVzeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0J1c3kgfTtcclxuICAgIH0sXHJcbiAgICBbTE9HX0RBVEFdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGNvbnN0IHsgbG9nIH0gPSBzdGF0ZTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiBgJHtsb2d9OyR7dGV4dH1gIH07XHJcbiAgICB9LFxyXG4gICAgW0NMRUFSX0xPR106IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiAnJyB9O1xyXG4gICAgfVxyXG59LCBpbml0aWFsU3RhdGUpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBBbnlBY3Rpb24sIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcic7XHJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgcm9vdFJlZHVjZXIsXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGhhc0Vycm9yZWQ6IGZhbHNlLFxyXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIGNoZWNrOiBudWxsLFxyXG4gICAgaGlzdG9yeTogbmV3IEFycmF5PENoZWNrPigpLFxyXG4gICAgbG9nOiAnJ1xyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgRHJpbmtzVHlwZSwgRGVzc2VydFR5cGUgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEcmlua3NEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PHN0cmluZz4gfSA9IHt9O1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRXNwcmVzc29dID0gWyczMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Eb3BwaW9dID0gWyc2MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9dID0gWycxMjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vTWlsa10gPSBbJzEyMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5NYWNoaWF0b10gPSBbJzkwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkNhcHB1Y2lub10gPSBbJzE3NSDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5GbGF0V2hpdGVdID0gWycxNzUg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVMYXZlbmRlcl0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5SYWZdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuUmFmQ2l0cnVzXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUdyZWVuXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUJsYWNrXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUhlcmJhbF0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TcGVhY2lhbFRlYVBlYXJMaW1lXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFPcmFuZ2VdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQ2FjYW9dID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFsnMTc1INC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWycwINC80LsnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNzZXJ0c0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8c3RyaW5nPiB9ID0ge307XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5NYWNhcm9uXSA9IFsnMSDRiNGCJywgJzYg0YjRgicsICcxMiDRiNGCJywgJzI0INGI0YInXTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLlplcGh5cl0gPSBbJzEg0YjRgicsICc4INGI0YInLCAnMTYg0YjRgiddO1xyXG5EZXNzZXJ0c0RpY3RbRGVzc2VydFR5cGUuQ2FrZV0gPSBbJzE4INGB0LwnLCAnMjIg0YHQvCddOyIsImV4cG9ydCBpbnRlcmZhY2UgRGVzc2VydCB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgdHlwZTogRGVzc2VydFR5cGUsXHJcbiAgICB0YXN0ZTogc3RyaW5nLFxyXG4gICAgc2l6ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJpbmsge1xyXG4gICAgaWQ6IERyaW5rc1R5cGUsXHJcbiAgICBzaXplOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGVjayB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgZGVzc2VydHM6IEFycmF5PERlc3NlcnQ+LFxyXG4gICAgZHJpbmtzOiBBcnJheTxEcmluaz4sXHJcbiAgICBpc0ZpbmlzaGVkOiBib29sZWFuLFxyXG4gICAgcGF5bWVudDogUGF5bWVudCxcclxuICAgIHR5cGU6IE9yZGVyVHlwZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYXltZW50IHtcclxuICAgIENhcmQgPSAn0JrQsNGA0YLQsCcsXHJcbiAgICBDYXNoID0gJ9Cd0LDQu9C40YfQutCwJyxcclxuICAgIE90aGVyID0gJ9CU0YDRg9Cz0L7QtSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3JkZXJUeXBlIHtcclxuICAgIFByZU9yZGVyID0gJ9Cf0YDQtdC00LfQsNC60LDQtycsXHJcbiAgICBTaG9wID0gJ9CS0LjRgtGA0LjQvdCwJyxcclxuICAgIE90aGVyID0gJ9CU0YDRg9Cz0L7QtSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGVzc2VydFR5cGUge1xyXG4gICAgTWFjYXJvbiA9ICfQnNCw0LrQsNGA0L7QvdGBJyxcclxuICAgIFplcGh5ciA9ICfQl9C10YTQuNGAJyxcclxuICAgIENha2UgPSAn0KLQvtGA0YInXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hY2Fyb25zRW51bSB7XHJcbiAgICBDaG9jb2xhdGUgPSBcItCo0L7QutC+0LvQsNC0XCIsXHJcbiAgICBDb2ZmZWVDYXJhbWVsID0gXCLQmtC+0YTQtSAtINCh0L7Qu9GR0L3QsNGPINCa0LDRgNCw0LzQtdC70YxcIixcclxuICAgIE1hbmdvUGFzc2lvbiA9IFwi0JzQsNC90LPQviAtINCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIExpbWVCYXNpbCA9IFwi0JvQsNC50LwgLSDQkdCw0LfQuNC70LjQulwiLFxyXG4gICAgUGlzdGFjaGlvID0gXCLQpNC40YHRgtCw0YjQutCwXCIsXHJcbiAgICBEb3JCbHVlUGVhciA9IFwi0JTQvtCxLdCR0LvRjiAtINCT0YDRg9GI0LBcIixcclxuICAgIExhdmVuZGVyQmxhY2tiZXJyeSA9IFwi0JvQsNCy0LDQvdC00LAgLSDQp9C10YDQvdC40LrQsFwiLFxyXG4gICAgQ3VycmFudCA9IFwi0KHQvNC+0YDQvtC00LjQvdCwXCIsXHJcbiAgICBTdHJhd2JlcnJ5Q2hlZXNlY2FrZSA9IFwi0JrQu9GD0LHQvdC40YfQvdGL0Lkg0KfQuNC30LrQtdC50LpcIixcclxuICAgIFBhcm1lc2FuRmlndWUgPSBcItCf0LDRgNC80LXQt9Cw0L0gLSDQmNC90LbQuNGAXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gWmVwaHlyRW51bSB7XHJcbiAgICBBcHBsZSA9IFwi0K/QsdC70L7QutC+XCIsXHJcbiAgICBDdXJyYW50ID0gXCLQodC80L7RgNC+0LTQuNC90LBcIixcclxuICAgIEFwcmljb3RQYXNzaW9uRnJ1aXQgPSBcItCQ0LHRgNC40LrQvtGBIC0g0JzQsNGA0LDQutGD0LnRj1wiLFxyXG4gICAgU3RyYXdiZXJyeUNyYW5iZXJyeSA9IFwi0JrQu9GD0LHQvdC40LrQsCAtINCa0LvRjtC60LLQsFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENha2VzRW51bSB7XHJcbiAgICBSaW8gPSBcIlJpb1wiLFxyXG4gICAgQ2Fycm90Q2FrZSA9IFwiQ2Fycm90IENha2VcIixcclxuICAgIFNvdWwgPSBcIlNvdWxcIixcclxuICAgIFBpbmsgPSBcIlBpbmtcIixcclxuICAgIEluZmluaXR5ID0gXCJJbmZpbml0eVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERyaW5rc1R5cGUge1xyXG4gICAgRXNwcmVzc28gPSBcItCt0YHQv9GA0LXRgdGB0L5cIixcclxuICAgIERvcHBpbyA9IFwi0JTQvtC/0L/QuNC+XCIsXHJcbiAgICBBbWVyaWNhbm8gPSBcItCQ0LzQtdGA0LjQutCw0L3QvlwiLFxyXG4gICAgQW1lcmljYW5vTWlsayA9IFwi0JDQvNC10YDQuNC60LDQvdC+INGBINC80L7Qu9C+0LrQvtC8XCIsXHJcbiAgICBNYWNoaWF0byA9IFwi0JzQsNC60LjQsNGC0L5cIixcclxuICAgIENhcHB1Y2lubyA9IFwi0JrQsNC/0YPRh9C40L3QvlwiLFxyXG4gICAgRmxhdFdoaXRlID0gXCLQpNC70LXRgiDQktCw0LnRglwiLFxyXG4gICAgTGF0dGUgPSBcItCb0LDRgtGC0LVcIixcclxuICAgIExhdHRlTGF2ZW5kZXIgPSBcItCb0LDRgtGC0LUg0JvQsNCy0LDQvdC00LBcIixcclxuICAgIFJhZiA9IFwi0KDQsNGEXCIsXHJcbiAgICBSYWZDaXRydXMgPSBcItCg0LDRhCDQptC40YLRgNGD0YFcIixcclxuICAgIFRlYUdyZWVuID0gXCLQp9Cw0Lkg0JfQtdC70ZHQvdGL0LlcIixcclxuICAgIFRlYUJsYWNrID0gXCLQp9Cw0Lkg0KfRkdGA0L3Ri9C5XCIsXHJcbiAgICBUZWFIZXJiYWwgPSBcItCn0LDQuSDQotGA0LDQstGP0L3QvtC5XCIsXHJcbiAgICBTcGVhY2lhbFRlYVBlYXJMaW1lID0gXCLQp9Cw0Lkg0JPRgNGD0YjQsC3Qm9Cw0LnQvFwiLFxyXG4gICAgU3BlY2lhbFRlYU9yYW5nZSA9IFwi0KfQsNC5INCQ0L/QtdC70YzRgdC40L0t0J7QsdC70LXQv9C40YXQsFwiLFxyXG4gICAgQ2FjYW8gPSBcItCa0LDQutCw0L5cIixcclxuICAgIEhvdENob2NvbGF0ZSA9IFwi0JPQsNGA0Y/Rh9C40Lkg0YjQvtC60L7Qu9Cw0LRcIixcclxuICAgIExlbW9uYWRlU3RyYXdiZXJyeSA9IFwi0JvQuNC80L7QvdCw0LQg0JrQu9GD0LHQvdC40LrQsFwiLFxyXG4gICAgTGVtb25hZGVDaXRydXMgPSBcItCb0LjQvNC+0L3QsNC0INCm0LjRgtGA0YPRgVwiLFxyXG4gICAgTGVtb25hZGVQYXNzaW9uID0gXCLQm9C40LzQvtC90LDQtCDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBJY2VMYXR0ZSA9IFwi0JDQudGBINCb0LDRgtGC0LVcIixcclxuICAgIFN5cm9wID0gXCLQodC40YDQvtC/XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVJbnB1dE9wdGlvbiB7XHJcbiAgICBJTlBVVF9WQUxVRV9PUFRJT05fVU5TUEVDSUZJRUQgPSAnSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEJyxcclxuICAgIFJBVyA9ICdSQVcnLFxyXG4gICAgVVNFUl9FTlRFUkVEID0gJ1VTRVJfRU5URVJFRCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW5zZXJ0RGF0YU9wdGlvbiB7XHJcbiAgICBPVkVSV1JJVEUgPSAnT1ZFUldSSVRFJyxcclxuICAgIElOU0VSVF9ST1dTID0gJ0lOU0VSVF9ST1dTJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBWYWx1ZVJlbmRlck9wdGlvbiB7XHJcbiAgICBGT1JNQVRURURfVkFMVUUgPSAnRk9STUFUVEVEX1ZBTFVFJyxcclxuICAgIFVORk9STUFUVEVEX1ZBTFVFID0gJ1VORk9STUFUVEVEX1ZBTFVFJyxcclxuICAgIEZPUk1VTEEgPSAnRk9STVVMQSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGF0ZVRpbWVSZW5kZXJPcHRpb24ge1xyXG4gICAgU0VSSUFMX05VTUJFUiA9ICdTRVJJQUxfTlVNQkVSJyxcclxuICAgIEZPUk1BVFRFRF9TVFJJTkcgPSAnRk9STUFUVEVEX1NUUklORydcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9