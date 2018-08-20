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

/***/ "./public/images/macaron.jpg":
/*!***********************************!*\
  !*** ./public/images/macaron.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bf2f3bee28632bc8d16d9fd0cf299c4d.jpg";

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
                                            data = [[d.id, d.type, d.taste, d.quantity, d.size, check_1.payment, check_1.type, dateTime]];
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
exports.AddDessert = redux_actions_1.createAction(actionTypes_1.ADD_DESSERT, function (type, taste, size, quantity) {
    return [type, taste, size, quantity];
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
var ListItemSecondaryAction_1 = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/index.js");
var IconButton_1 = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
var Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
var Macaron = __webpack_require__(/*! ../../public/images/macaron.jpg */ "./public/images/macaron.jpg");
var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        addDessert: function addDessert(type, taste, size, quantity) {
            return dispatch(actions_1.AddDessert(type, taste, size, quantity));
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
                            return [4 /*yield*/, this.props.addDessert(dessertType, dessertTaste, size, 0)];
                        case 1:
                            _b.sent();
                            this.props.handleClose();
                            this.props.logData('desserts->dessertSizeSelected->' + size);
                            return [2 /*return*/];
                    }
                });
            });
        };
        _this.handleFinish = function () {
            return __awaiter(_this, void 0, void 0, function () {
                var _a, dessertType, dessertTaste, dessertQuantities, dessertSize, id, qty;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.state, dessertType = _a.dessertType, dessertTaste = _a.dessertTaste, dessertQuantities = _a.dessertQuantities, dessertSize = _a.dessertSize;
                            debugger;
                            id = this.getId(dessertType, dessertTaste);
                            qty = dessertQuantities[id];
                            return [4 /*yield*/, this.props.addDessert(dessertType, dessertTaste, dessertSize, qty || 0)];
                        case 1:
                            _b.sent();
                            this.props.handleClose();
                            this.props.logData('desserts->handleFinish');
                            return [2 /*return*/];
                    }
                });
            });
        };
        _this.handleDessertIncrease = function (taste) {
            var _a = _this.state,
                dessertQuantities = _a.dessertQuantities,
                dessertType = _a.dessertType;
            var id = _this.getId(dessertType, taste);
            if (!dessertQuantities[id]) {
                dessertQuantities[id] = 1;
            } else {
                dessertQuantities[id]++;
            }
            _this.setState({
                dessertQuantities: dessertQuantities
            });
            _this.props.logData('desserts->dessertQtyIncrease->' + id);
        };
        _this.state = {
            dessertType: null,
            dessertTaste: null,
            dessertQuantities: {}
        };
        return _this;
    }
    DessertsComponent.prototype.getId = function (dessertType, dessertTaste) {
        return dessertType + "-" + dessertTaste;
    };
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
                }, key: d.id }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'avatar', src: Macaron })), React.createElement(ListItemText_1.default, { primary: d.value }));
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
        var _a = this.state,
            dessertType = _a.dessertType,
            dessertQuantities = _a.dessertQuantities;
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
        return React.createElement("div", null, React.createElement(Button_1.default, { variant: "contained", color: "primary", title: "Check Out", onClick: this.handleFinish }, "Finish"), React.createElement(List_1.default, null, dessertTastes.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDessertTasteSelect(d.value);
                }, key: d.id }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'avatar', src: Macaron })), React.createElement(ListItemText_1.default, { primary: d.value + " (" + (dessertQuantities[_this.getId(dessertType, d.value)] || 0) + ")" }), React.createElement(ListItemSecondaryAction_1.default, null, React.createElement(IconButton_1.default, { "aria-label": "Add", onClick: function onClick() {
                    return _this.handleDessertIncrease(d.value);
                } }, React.createElement(mdi_react_1.AddIcon, null))));
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
        return React.createElement(Dialog_1.default, { onClose: this.handleClose, "aria-labelledby": "simple-dialog-title", open: true }, React.createElement(DialogTitle_1.default, { id: "simple-dialog-title" }, !dessertType ? 'Select dessert' : !dessertTaste ? 'Select taste' : 'Select size'), !dessertType ? this.renderDesserts() : !dessertTaste ? this.renderDessertTastes() : this.renderDessertSizes());
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
        size: action.payload[2],
        quantity: action.payload[3]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL21hY2Fyb24uanBnIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EZXNzZXJ0c0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpbmtzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdPcmRlckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9DaGVja1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9DaGVja291dFBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwuc2Nzcz9kY2JkIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kaWN0aW9uYXJpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3Mi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YUF3QnJCO0FBRUQsSUFJQztBQUpELFdBQTRCO0FBQ3hCLHlEQUFpRTtBQUNqRSw4QkFBVztBQUNYLHVDQUNKO0FBQUMsR0FKMkIsbUJBQWhCLFFBQWdCLHFCQUFoQixRQUFnQixtQkFJM0I7QUFFRCxJQUdDO0FBSEQsV0FBNEI7QUFDeEIsb0NBQXVCO0FBQ3ZCLHNDQUNKO0FBQUMsR0FIMkIsbUJBQWhCLFFBQWdCLHFCQUFoQixRQUFnQixtQkFHM0I7QUFFRCxJQUlDO0FBSkQsV0FBNkI7QUFDekIsMkNBQW1DO0FBQ25DLDZDQUF1QztBQUN2QyxtQ0FDSjtBQUFDLEdBSjRCLG9CQUFqQixRQUFpQixzQkFBakIsUUFBaUIsb0JBSTVCO0FBRUQsSUFHQztBQUhELFdBQWdDO0FBQzVCLDRDQUErQjtBQUMvQiwrQ0FDSjtBQUFDLEdBSCtCLHVCQUFwQixRQUFvQix5QkFBcEIsUUFBb0IsdUJBRy9CLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJzsgfVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7IH1cXG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG5cXG4uYXZhdGFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MmMzZTk7XFxuICBjb2xvcjogIzFkNTNhMzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJmMmYzYmVlMjg2MzJiYzhkMTZkOWZkMGNmMjk5YzRkLmpwZ1wiOyIsImV4cG9ydCBjb25zdCBDUkVBVEVfQ0hFQ0sgPSAnQ1JFQVRFX0NIRUNLJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfRFJJTksgPSAnQUREX0RSSU5LJztcclxuZXhwb3J0IGNvbnN0IEFERF9ERVNTRVJUID0gJ0FERF9ERVNTRVJUJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9UWVBFID0gJ1NFVF9QQVlNRU5UX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgU0VUX09SREVSX1RZUEUgPSAnU0VUX09SREVSX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgUFJPQ0VTU19DSEVDS09VVCA9ICdQUk9DRVNTX0NIRUNLT1VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0lURU1TID0gJ0xPQURfSVRFTVMnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNU19GVUxGSUxMRUQgPSAnTE9BRF9JVEVNU19GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNU19SRUpFQ1RFRCA9ICdMT0FEX0lURU1TX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9XX0JVU1kgPSBcIlNIT1dfQlVTWVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBID0gJ0FQUEVORF9EQVRBJztcclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBX0ZVTEZJTExFRCA9ICdBUFBFTkRfREFUQV9GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgQVBQRU5EX0RBVEFfUkVKRUNURUQgPSAnQVBQRU5EX0RBVEFfUkVKRUNURUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBID0gJ1VQREFURV9EQVRBJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBX0ZVTEZJTExFRCA9ICdVUERBVEVfREFUQV9GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEFfUkVKRUNURUQgPSAnVVBEQVRFX0RBVEFfUkVKRUNURUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19EQVRBID0gJ0xPR19EQVRBJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0xPRyA9ICdDTEVBUl9MT0cnOyIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIExPQURfSVRFTVMsXHJcbiAgICBMT0FEX0lURU1TX0ZVTEZJTExFRCxcclxuICAgIExPQURfSVRFTVNfUkVKRUNURUQsXHJcbiAgICBTSE9XX0JVU1ksXHJcbiAgICBDUkVBVEVfQ0hFQ0ssXHJcbiAgICBQUk9DRVNTX0NIRUNLT1VULFxyXG4gICAgQUREX0RSSU5LLFxyXG4gICAgQUREX0RFU1NFUlQsXHJcbiAgICBTRVRfUEFZTUVOVF9UWVBFLFxyXG4gICAgU0VUX09SREVSX1RZUEUsXHJcbiAgICBBUFBFTkRfREFUQV9GVUxGSUxMRUQsXHJcbiAgICBBUFBFTkRfREFUQV9SRUpFQ1RFRCxcclxuICAgIExPR19EQVRBLFxyXG4gICAgQ0xFQVJfTE9HXHJcbn0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XHJcbmltcG9ydCB7IERyaW5rc1R5cGUsIERlc3NlcnRUeXBlLCBQYXltZW50LCBPcmRlclR5cGUsIENoZWNrLFxyXG4gICAgVmFsdWVJbnB1dE9wdGlvbiwgSW5zZXJ0RGF0YU9wdGlvbiwgVmFsdWVSZW5kZXJPcHRpb24sIERhdGVUaW1lUmVuZGVyT3B0aW9uIH0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IExPR1NfU1BSRUFEU0hFRVRfSUQsIFNQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzRmV0Y2hEYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0ICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuZ2V0KHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogJ0EyOkI0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0LnZhbHVlcztcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNGZXRjaERhdGFTdWNjZXNzKGl0ZW1zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzQXBwZW5kRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmcsIHZhbHVlUmFuZ2U6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5hcHBlbmQoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0RGF0YU9wdGlvbjogSW5zZXJ0RGF0YU9wdGlvbi5PVkVSV1JJVEUsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlVmFsdWVzSW5SZXNwb25zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVmFsdWVSZW5kZXJPcHRpb246IFZhbHVlUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9WQUxVRVxyXG4gICAgICAgICAgICB9LCB7IHZhbHVlczogdmFsdWVSYW5nZSB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDZWxsc0NvdW50ID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0LnVwZGF0ZXMudXBkYXRlZENlbGxzOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZFN1Y2Nlc3ModXBkYXRlZENlbGxzQ291bnQgPT09IHZhbHVlUmFuZ2VbMF0ubGVuZ3RoKSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzTG9nID0gYXN5bmMgKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW21lc3NhZ2UsIGRhdGVUaW1lLnRvVVRDU3RyaW5nKCldXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZCh7XHJcbiAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IExPR1NfU1BSRUFEU0hFRVRfSUQsXHJcbiAgICAgICAgICAgIHJhbmdlOiAnQTpCJyxcclxuICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgIGluc2VydERhdGFPcHRpb246IEluc2VydERhdGFPcHRpb24uT1ZFUldSSVRFLFxyXG4gICAgICAgICAgICBpbmNsdWRlVmFsdWVzSW5SZXNwb25zZTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFXHJcbiAgICAgICAgfSwgeyB2YWx1ZXM6IGRhdGEgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NVcGRhdGVEYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZywgdmFsdWVSYW5nZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6ICdBNjpEMTAnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlVmFsdWVzSW5SZXNwb25zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVmFsdWVSZW5kZXJPcHRpb246IFZhbHVlUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9WQUxVRSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0ZVRpbWVSZW5kZXJPcHRpb246IERhdGVUaW1lUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9TVFJJTkdcclxuICAgICAgICAgICAgfSwgeyB2YWx1ZXM6IHZhbHVlUmFuZ2UgfSk7XHJcbiAgICAgICAgICAgIC8vVE9ETzogUHJvY2VzcyByZXNwb25zZSByZXN1bHRcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudmFsdWVzO1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNGZXRjaERhdGFTdWNjZXNzKGl0ZW1zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzRmV0Y2hEYXRhRmFrZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNIYXNFcnJvcmVkKHRydWUpKTtcclxuICAgICAgICB9LCA1MDAwKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVDaGVjayA9IGNyZWF0ZUFjdGlvbihDUkVBVEVfQ0hFQ0spO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NDaGVja291dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGNoZWNrOiBDaGVjayA9IHN0YXRlLmNoZWNrO1xyXG4gICAgICAgICAgICBjb25zdCB7IGxvZyB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NSYW5nZSA9IFwiUmF3RHJpbmtzRGF0YSFBOkVcIjtcclxuICAgICAgICAgICAgY2hlY2suZHJpbmtzLmZvckVhY2goYXN5bmMgZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgW2QuaWQsIGQuc2l6ZSwgY2hlY2sucGF5bWVudCwgY2hlY2sudHlwZSwgZGF0ZVRpbWVdXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEoU1BSRUFEU0hFRVRfSUQsIGRyaW5rc1JhbmdlLCBkYXRhKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydHNSYW5nZSA9IFwiUmF3RGVzc2VydHNEYXRhIUE6RVwiO1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5mb3JFYWNoKGFzeW5jIGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFtkLmlkLCBkLnR5cGUsIGQudGFzdGUsIGQucXVhbnRpdHksIGQuc2l6ZSwgY2hlY2sucGF5bWVudCwgY2hlY2sudHlwZSwgZGF0ZVRpbWVdXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEoU1BSRUFEU0hFRVRfSUQsIGRlc3NlcnRzUmFuZ2UsIGRhdGEpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiBcclxuICAgICAgICAgICAgZGlzcGF0Y2goQ2hlY2tvdXQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXdhaXQgUHJvY2Vzc0xvZyhsb2cpO1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9jZXNzTG9nKEpTT04uc3RyaW5naWZ5KGNoZWNrKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKENsZWFyTG9nKTsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNBcHBlbmRFcnJvcmVkKHRydWUpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tvdXQgPSBjcmVhdGVBY3Rpb24oUFJPQ0VTU19DSEVDS09VVCk7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRHJpbmsgPSBjcmVhdGVBY3Rpb24oQUREX0RSSU5LLCAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERlc3NlcnQgPSBjcmVhdGVBY3Rpb24oQUREX0RFU1NFUlQsICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiBbdHlwZSwgdGFzdGUsIHNpemUsIHF1YW50aXR5XSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0UGF5bWVudFR5cGUgPSBjcmVhdGVBY3Rpb24oU0VUX1BBWU1FTlRfVFlQRSwgKHR5cGU6IFBheW1lbnQpID0+IHR5cGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldE9yZGVyVHlwZSA9IGNyZWF0ZUFjdGlvbihTRVRfT1JERVJfVFlQRSwgKHR5cGU6IE9yZGVyVHlwZSkgPT4gdHlwZSk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNIYXNFcnJvcmVkID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVNfUkVKRUNURUQsIChoYXNFcnJvcmVkOiBib29sZWFuKSA9PiBoYXNFcnJvcmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0lzTG9hZGluZyA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TLCAoaXNMb2FkaW5nOiBib29sZWFuKSA9PiBpc0xvYWRpbmcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TX0ZVTEZJTExFRCwgKGl0ZW1zOiBhbnlbXSkgPT4gaXRlbXMpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zQXBwZW5kU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihBUFBFTkRfREFUQV9GVUxGSUxMRUQsIChzdWNjZXNzOiBib29sZWFuKSA9PiBzdWNjZXNzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0FwcGVuZEVycm9yZWQgPSBjcmVhdGVBY3Rpb24oQVBQRU5EX0RBVEFfUkVKRUNURUQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dCdXN5ID0gY3JlYXRlQWN0aW9uKFNIT1dfQlVTWSwgKGlzQnVzeTogYm9vbGVhbikgPT4gaXNCdXN5KTtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dEYXRhID0gY3JlYXRlQWN0aW9uKExPR19EQVRBLCAodGV4dDogc3RyaW5nKSA9PiB0ZXh0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGVhckxvZyA9IGNyZWF0ZUFjdGlvbihDTEVBUl9MT0cpO1xyXG4iLCJpbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvTWFpblBhZ2UnO1xyXG5pbXBvcnQgQ2hlY2tQYWdlIGZyb20gJy4vcGFnZXMvQ2hlY2tQYWdlJztcclxuaW1wb3J0IENoZWNrb3V0UGFnZSBmcm9tICcuL3BhZ2VzL0NoZWNrb3V0UGFnZSc7XHJcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSAnLi9wYWdlcy9Ob3RGb3VuZFBhZ2UnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBUZXN0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9UZXN0Q29tcG9uZW50JztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvJz5Ib21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy90ZXN0Jz5UZXN0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICA8L2hlYWRlcj5cclxuKVxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IChcclxuICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17TWFpblBhZ2V9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9jaGVjaycgY29tcG9uZW50PXtDaGVja1BhZ2V9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9jaGVja091dCcgY29tcG9uZW50PXtDaGVja291dFBhZ2V9IC8+XHJcblxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvdGVzdCcgY29tcG9uZW50PXtUZXN0Q29tcG9uZW50fSAvPlxyXG4gICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kUGFnZX0gLz5cclxuICAgIDwvU3dpdGNoPlxyXG4pXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgSUFwcFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NjcmlwdExvYWRlZCB9ID0gbmV4dFByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JpcHRMb2FkZWQgJiYgIXRoaXMucHJvcHMuaXNTY3JpcHRMb2FkZWQpIHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnY2xpZW50OmF1dGgyJywgdGhpcy5pbml0Q2xpZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVNcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaERhdGEoU1BSRUFEU0hFRVRfSUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUF1dGhDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTaWdub3V0Q2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYXV0aG9yaXplX2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXV0aENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ25vbmUnIDogJ2Jsb2NrJyB9fT5BdXRob3JpemU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNpZ25vdXRfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlNpZ24gT3V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY3JpcHRMb2FkZXIoXHJcbiAgICAnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzJ1xyXG4pKEFwcClcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFkZERlc3NlcnQsIExvZ0RhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgeyBEZXNzZXJ0VHlwZSwgTWFjYXJvbnNFbnVtLCBDYWtlc0VudW0sIFplcGh5ckVudW0gfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IERlc3NlcnRzRGljdCB9IGZyb20gJy4uL3V0aWxzL2RpY3Rpb25hcmllcyc7XHJcbmltcG9ydCB7IEFkZEljb24gfSBmcm9tICdtZGktcmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmNvbnN0IE1hY2Fyb24gPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL21hY2Fyb24uanBnJyk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgYWRkRGVzc2VydDogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpID0+IGRpc3BhdGNoKEFkZERlc3NlcnQodHlwZSwgdGFzdGUsIHNpemUsIHF1YW50aXR5KSksXHJcbiAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXNzZXJ0c0NvbXBvbmVudFByb3BzIHtcclxuICBhZGREZXNzZXJ0PzogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXNzZXJ0c0NvbXBvbmVudFN0YXRlIHtcclxuICBkZXNzZXJ0VHlwZT86IERlc3NlcnRUeXBlO1xyXG4gIGRlc3NlcnRUYXN0ZT86IHN0cmluZztcclxuICBkZXNzZXJ0U2l6ZT86IHN0cmluZztcclxuICBkZXNzZXJ0UXVhbnRpdGllcz86IHsgW2lkOiBzdHJpbmddOiBudW1iZXI7IH07XHJcbn1cclxuXHJcbmNsYXNzIERlc3NlcnRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElEZXNzZXJ0c0NvbXBvbmVudFByb3BzLCBJRGVzc2VydHNDb21wb25lbnRTdGF0ZT57XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZXNzZXJ0VHlwZTogbnVsbCxcclxuICAgICAgZGVzc2VydFRhc3RlOiBudWxsLFxyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllczoge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+Y2xvc2UnKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRTZWxlY3QgPSAoZGVzc2VydCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRlc3NlcnRUeXBlOiBkZXNzZXJ0XHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRTZWxlY3RlZC0+JyArIGRlc3NlcnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0ID0gKHRhc3RlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFRhc3RlOiB0YXN0ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0VGFzdGVTZWxlY3RlZC0+JyArIHRhc3RlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRTaXplU2VsZWN0ID0gYXN5bmMgKHNpemUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0U2l6ZTogc2l6ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIHNpemUsIDApO1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFNpemVTZWxlY3RlZC0+JyArIHNpemUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmluaXNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBkZXNzZXJ0UXVhbnRpdGllcywgZGVzc2VydFNpemUgfSA9IHRoaXMuc3RhdGU7XHJcbmRlYnVnZ2VyO1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmdldElkKGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUpO1xyXG4gICAgY29uc3QgcXR5ID0gZGVzc2VydFF1YW50aXRpZXNbaWRdO1xyXG5cclxuICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBkZXNzZXJ0U2l6ZSwgcXR5IHx8IDApO1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+aGFuZGxlRmluaXNoJyk7XHJcbiAgfVxyXG5cclxuICBnZXRJZChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlKSB7XHJcbiAgICByZXR1cm4gYCR7ZGVzc2VydFR5cGV9LSR7ZGVzc2VydFRhc3RlfWA7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0SW5jcmVhc2UgPSAodGFzdGUpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgdGFzdGUpO1xyXG4gICAgaWYgKCFkZXNzZXJ0UXVhbnRpdGllc1tpZF0pIHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNbaWRdID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc3NlcnRRdWFudGl0aWVzW2lkXSsrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllc1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0UXR5SW5jcmVhc2UtPicgKyBpZCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJEZXNzZXJ0cygpIHtcclxuICAgIGNvbnN0IGRlc3NlcnRLZXlzID0gT2JqZWN0LmtleXMoRGVzc2VydFR5cGUpO1xyXG4gICAgY29uc3QgZGVzc2VydHMgPSBkZXNzZXJ0S2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgdmFsdWU6IERlc3NlcnRUeXBlW2RdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtkZXNzZXJ0cy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFNlbGVjdChkLnZhbHVlKX0ga2V5PXtkLmlkfSA+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nYXZhdGFyJyBzcmM9e01hY2Fyb259IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZC52YWx1ZX0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9kaXY+O1xyXG4gIH07XHJcblxyXG4gIGdldEFycmF5RnJvbUVudW0oZW46IGFueSkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVuKTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGQgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBkLFxyXG4gICAgICAgIHZhbHVlOiBlbltkXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHZhbHVlcztcclxuICB9XHJcblxyXG4gIHJlbmRlckRlc3NlcnRUYXN0ZXMoKSB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0UXVhbnRpdGllcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBsZXQgZGVzc2VydFRhc3RlcztcclxuICAgIHN3aXRjaCAoZGVzc2VydFR5cGUpIHtcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5DYWtlOlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oQ2FrZXNFbnVtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5NYWNhcm9uOlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oTWFjYXJvbnNFbnVtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5aZXBoeXI6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShaZXBoeXJFbnVtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkNoZWNrIE91dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmluaXNofT5cclxuICAgICAgICBGaW5pc2hcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydFRhc3Rlcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInIHNyYz17TWFjYXJvbn0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtgJHtkLnZhbHVlfSAoJHtkZXNzZXJ0UXVhbnRpdGllc1t0aGlzLmdldElkKGRlc3NlcnRUeXBlLCBkLnZhbHVlKV0gfHwgMH0pYH0gLz5cclxuICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uID5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQWRkXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0SW5jcmVhc2UoZC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXJEZXNzZXJ0U2l6ZXMoKSB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZGVzc2VydFNpemVzID0gRGVzc2VydHNEaWN0W2Rlc3NlcnRUeXBlXTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFNpemVTZWxlY3QoZCl9IGtleT17ZH0gPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2R9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIDxEaWFsb2cgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLWRpYWxvZy10aXRsZVwiIG9wZW49e3RydWV9ID5cclxuICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2ltcGxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgIHshZGVzc2VydFR5cGUgPyAnU2VsZWN0IGRlc3NlcnQnIDogKCFkZXNzZXJ0VGFzdGUgPyAnU2VsZWN0IHRhc3RlJyA6ICdTZWxlY3Qgc2l6ZScpfVxyXG4gICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICB7IWRlc3NlcnRUeXBlID8gdGhpcy5yZW5kZXJEZXNzZXJ0cygpIDogKCFkZXNzZXJ0VGFzdGUgPyB0aGlzLnJlbmRlckRlc3NlcnRUYXN0ZXMoKSA6IHRoaXMucmVuZGVyRGVzc2VydFNpemVzKCkpfVxyXG4gICAgPC9EaWFsb2c+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERlc3NlcnRzQ29tcG9uZW50KSlcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFkZERyaW5rLCBMb2dEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IHsgRHJpbmtzVHlwZSwgRHJpbmsgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IERyaW5rc0RpY3QgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5pbXBvcnQgeyBBZGRJY29uIH0gZnJvbSAnbWRpLXJlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGREcmluazogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gZGlzcGF0Y2goQWRkRHJpbmsodHlwZSwgc2l6ZSkpLFxyXG4gICAgICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJpbmtzQ29tcG9uZW50UHJvcHMge1xyXG4gICAgYWRkRHJpbms/OiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gICAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyaW5rc0NvbXBvbmVudFN0YXRlIHtcclxuICAgIGRyaW5rVHlwZT86IERyaW5rc1R5cGU7XHJcbiAgICBkcmlua1NpemU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIERyaW5rc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRHJpbmtzQ29tcG9uZW50UHJvcHMsIElEcmlua3NDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJpbmtUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICBkcmlua1NpemU6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5jbG9zZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyaW5rU2VsZWN0ID0gKGRyaW5rKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyaW5rVHlwZTogZHJpbmtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2RyaW5rcy0+ZHJpbmtTZWxlY3RlZC0+JyArIGRyaW5rKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmlua1NpemVTZWxlY3QgPSBhc3luYyAoZHJpbmtTaXplKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyaW5rU2l6ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERyaW5rKGRyaW5rVHlwZSwgZHJpbmtTaXplKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkcmlua3MtPmRyaW5rU2l6ZVNlbGVjdGVkLT4nICsgZHJpbmtTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEcmlua3MoKSB7XHJcbiAgICAgICAgY29uc3QgZHJpbmtLZXlzID0gT2JqZWN0LmtleXMoRHJpbmtzVHlwZSk7XHJcbiAgICAgICAgY29uc3QgZHJpbmtzID0gZHJpbmtLZXlzLm1hcChkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IERyaW5rc1R5cGVbZF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtkcmlua3MubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEcmlua1NlbGVjdChkLnZhbHVlKX0ga2V5PXtkLmlkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlckRyaW5rU2l6ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkcmlua1R5cGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgZHJpbmtTaXplcyA9IERyaW5rc0RpY3RbZHJpbmtUeXBlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAge2RyaW5rU2l6ZXMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEcmlua1NpemVTZWxlY3QoZCl9IGtleT17ZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkcmlua1R5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuPXt0cnVlfSA+XHJcbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIj57IWRyaW5rVHlwZSA/ICdTZWxlY3QgZHJpbmsnIDogJ1NlbGVjdCBzaXplJ308L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICB7IWRyaW5rVHlwZSA/IHRoaXMucmVuZGVyRHJpbmtzKCkgOiB0aGlzLnJlbmRlckRyaW5rU2l6ZXMoKX1cclxuICAgICAgICA8L0RpYWxvZz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEcmlua3NDb21wb25lbnQpKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBEcmlua3NDb21wb25lbnQgZnJvbSAnLi9Ecmlua3NDb21wb25lbnQnO1xyXG5pbXBvcnQgRGVzc2VydHNDb21wb25lbnQgZnJvbSAnLi9EZXNzZXJ0c0NvbXBvbmVudCc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrOiBzdGF0ZS5jaGVja1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTmV3T3JkZXJDb21wb25lbnRQcm9wcyB7XHJcbiAgICBjaGVjaz86IENoZWNrXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5ld09yZGVyQ29tcG9uZW50U3RhdGUge1xyXG4gICAgc2hvd0RyaW5rcz86IGJvb2xlYW47XHJcbiAgICBzaG93RGVzc2VydHM/OiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBOZXdPcmRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJTmV3T3JkZXJDb21wb25lbnRQcm9wcywgSU5ld09yZGVyQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dEcmlua3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93RGVzc2VydHM6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZERyaW5rQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEcmlua3M6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZERlc3NlcnRDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0Rlc3NlcnRzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDaGVja0NvbnRlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiPlxyXG4gICAgICAgICAgICB7Y2hlY2suZHJpbmtzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YCR7ZC5pZH0gLSAke2Quc2l6ZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIHtjaGVjay5kZXNzZXJ0cy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YCR7ZC50eXBlfSAtICR7ZC50YXN0ZX0gLSAke2Quc2l6ZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzaG93RHJpbmtzLCBzaG93RGVzc2VydHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBjcmVhdGUgbmV3IGNoZWNrIGZpcnN0XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7YENoZWNrICMke2NoZWNrLmlkfWB9XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoZWNrQ29udGVudCgpfVxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkRlc3NlcnRzXCIgb25DbGljaz17dGhpcy5hZGREZXNzZXJ0Q2xpY2t9ID5cclxuICAgICAgICAgICAgICAgIERlc3NlcnRzXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkRyaW5rc1wiIG9uQ2xpY2s9e3RoaXMuYWRkRHJpbmtDbGlja30+XHJcbiAgICAgICAgICAgICAgICBEcmlua3NcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2NoZWNrLmRlc3NlcnRzLmxlbmd0aCA9PT0gMCAmJiBjaGVjay5kcmlua3MubGVuZ3RoID09PSAwfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkNoZWNrb3V0XCIgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89Jy9jaGVja091dCc+Q2hlY2sgT3V0PC9MaW5rPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAge3Nob3dEcmlua3MgJiYgPERyaW5rc0NvbXBvbmVudCBoYW5kbGVDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dEcmlua3M6IGZhbHNlIH0pfSAvPn1cclxuICAgICAgICAgICAge3Nob3dEZXNzZXJ0cyAmJiA8RGVzc2VydHNDb21wb25lbnQgaGFuZGxlQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93RGVzc2VydHM6IGZhbHNlIH0pfSAvPn1cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoTmV3T3JkZXJDb21wb25lbnQpXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBQcm9jZXNzRmV0Y2hEYXRhLCBQcm9jZXNzQXBwZW5kRGF0YSwgUHJvY2Vzc1VwZGF0ZURhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBURVNUX1NQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMsXHJcbiAgICAgICAgaGFzRXJyb3JlZDogc3RhdGUuaGFzRXJyb3JlZCxcclxuICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZyxcclxuICAgICAgICBsYWJlbDogc3RhdGUubGFiZWxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChQcm9jZXNzRmV0Y2hEYXRhKHVybCkpLFxyXG4gICAgICAgIGFwcGVuZERhdGE6ICh1cmwsIHJhbmdlLCBkYXRhKSA9PiBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YSh1cmwsIHJhbmdlLCBkYXRhKSksXHJcbiAgICAgICAgdXBkYXRlRGF0YTogKHVybCwgZGF0YSkgPT4gZGlzcGF0Y2goUHJvY2Vzc1VwZGF0ZURhdGEodXJsLCBkYXRhKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50UHJvcHMge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBpdGVtcz86IGFueTtcclxuICAgIGhhc0Vycm9yZWQ/OiBib29sZWFuO1xyXG4gICAgaXNMb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgICBpc1NjcmlwdExvYWRlZD86IGJvb2xlYW47XHJcbiAgICBpc1NjcmlwdExvYWRTdWNjZWVkPzogYm9vbGVhbjtcclxuXHJcbiAgICBmZXRjaERhdGE/OiAodXJsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBhcHBlbmREYXRhPzogKHVybDogc3RyaW5nLCByYW5nZTogc3RyaW5nLCBkYXRhOiBhbnlbXSkgPT4gdm9pZDtcclxuICAgIHVwZGF0ZURhdGE/OiAodXJsOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50U3RhdGUge1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SVRlc3RDb21wb25lbnRQcm9wcywgSVRlc3RDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBdXRoQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2lnbm91dENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbk91dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXBwZW5kQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJYTFwiLCBcIjFcIiwgXCIwXCIsIGRhdGVUaW1lLnRvVVRDU3RyaW5nKCldXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCByYW5nZSA9IFwiUmF3RGF0YSFBOkVcIjtcclxuICAgICAgICB0aGlzLnByb3BzLmFwcGVuZERhdGEoVEVTVF9TUFJFQURTSEVFVF9JRCwgcmFuZ2UsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwZGF0ZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJDb3N0XCIsIFwiU3RvY2tlZFwiLCBcIlNoaXAgRGF0ZVwiXSxcclxuICAgICAgICAgICAgW1wiV2hlZWwxXCIsIFwiJDIwLjUwXCIsIFwiNFwiLCBcIjMvMS8yMDE2XCJdLFxyXG4gICAgICAgICAgICBbXCJEb29yMVwiLCBcIiQxNVwiLCBcIjJcIiwgXCIzLzE1LzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkVuZ2luZTFcIiwgXCIkMTAwXCIsIFwiMVwiLCBcIjMwLzIwLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIlRvdGFsczFcIiwgXCI9U1VNKEIyOkI0KVwiLCBcIj1TVU0oQzI6QzQpXCIsIFwiPU1BWChEMjpENClcIl1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGF0YShURVNUX1NQUkVBRFNIRUVUX0lELCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTY3JpcHRMb2FkZWQgfSA9IG5leHRQcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2NyaXB0TG9hZGVkICYmICF0aGlzLnByb3BzLmlzU2NyaXB0TG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmxvYWQoJ2NsaWVudDphdXRoMicsIHRoaXMuaW5pdENsaWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFRFU1RfU1BSRUFEU0hFRVRfSUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hEYXRhKCdodHRwOi8vNTgyNmVkOTYzOTAwZDYxMjAwMDEzOGJkLm1vY2thcGkuaW8vaXRlbXMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgaGFzRXJyb3JlZCwgaXNMb2FkaW5nLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGlzU2lnbmVkSW4gfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgaWYgKGhhc0Vycm9yZWQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPHA+U29ycnkhIFRoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBpdGVtczwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPHA+TG9hZGluZ+KApjwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVswXSArIGl0ZW1bMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8Lz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAge3Jlc3VsdH1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFwcGVuZENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5BcHBlbmQgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUNsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5VcGRhdGUgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImF1dGhvcml6ZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdub25lJyA6ICdibG9jaycgfX0+QXV0aG9yaXplPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5TaWduIE91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0TG9hZGVyKFxyXG4gICAgJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcydcclxuKShjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZXN0Q29tcG9uZW50KSlcclxuIiwiZXhwb3J0IGNvbnN0IERJU0NPVkVSWV9ET0NTID0gW1wiaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vJGRpc2NvdmVyeS9yZXN0P3ZlcnNpb249djRcIl07XHJcbmV4cG9ydCBjb25zdCBTQ09QRVMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzXCI7XHJcbmV4cG9ydCBjb25zdCBDTElFTlRfSUQgPSAnODQyNDE3MTk4NzY3LTdrNDJwdDllY2d0dTVmN29vcG5nMW9xdTNhNzlpNWk5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcclxuZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSAnQUl6YVN5QWxJNWk4T090dzhhRUVNUzQ4RTlwb3VFcHRxOHRFZzJNJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfU1BSRUFEU0hFRVRfSUQgPSAnMU9iTWg4N2RObWl6WGJkV2tIOVRpcWZyQ2ZBcGtfcnF4UEd1UV96TmdKSU0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR1NfU1BSRUFEU0hFRVRfSUQgPSAnMU5QWW9WOVlzNTJ6ZjlWX05rbFE1SmRYaGpwcEJMZTBkQzlUNDMzWlk3UDgnO1xyXG5leHBvcnQgY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVVCdUV3cVV5Qkl2dlkxaWhtRXA5aGIxajhtNEpDcFRsLWE4bUo2UmpVVncnO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5zY3NzJztcclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3N0b3JlL2luaXRpYWxTdGF0ZSc7XHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XHJcbnJvb3Quc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG5yZW5kZXIoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8Um91dGVyID5cclxuICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICByb290XHJcbik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBOZXdPcmRlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tQYWdlUHJvcHMge1xyXG59XHJcblxyXG5jbGFzcyBDaGVja1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SUNoZWNrUGFnZVByb3BzLCBhbnk+e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgQ2hlY2sgUGFnZVxyXG4gICAgICAgICAgPE5ld09yZGVyQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4oQ2hlY2tQYWdlKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IFBheW1lbnQsIE9yZGVyVHlwZSwgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IFByb2Nlc3NDaGVja291dCwgU2V0UGF5bWVudFR5cGUsIFNldE9yZGVyVHlwZSwgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrOiBzdGF0ZS5jaGVja1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoYW5kbGVDaGVja291dDogKCkgPT4gZGlzcGF0Y2goUHJvY2Vzc0NoZWNrb3V0KCkpLFxyXG4gICAgICAgIHNldFBheW1lbnRUeXBlOiAodHlwZTogUGF5bWVudCkgPT4gZGlzcGF0Y2goU2V0UGF5bWVudFR5cGUodHlwZSkpLFxyXG4gICAgICAgIHNldE9yZGVyVHlwZTogKHR5cGU6IE9yZGVyVHlwZSkgPT4gZGlzcGF0Y2goU2V0T3JkZXJUeXBlKHR5cGUpKSxcclxuICAgICAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrb3V0UGFnZVByb3BzIHtcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcbiAgICBjaGVjaz86IENoZWNrO1xyXG5cclxuICAgIHNldFBheW1lbnRUeXBlPzogKHR5cGU6IFBheW1lbnQpID0+IHZvaWQ7XHJcbiAgICBzZXRPcmRlclR5cGU/OiAodHlwZTogT3JkZXJUeXBlKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2hlY2tvdXQ/OiAoKSA9PiB2b2lkO1xyXG4gICAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrb3V0UGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tvdXRQYWdlUHJvcHMsIGFueT57XHJcbiAgICBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNoZWNrb3V0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+Y2hlY2tvdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQYXltZW50VHlwZUNoYW5nZSA9ICh0eXBlOiBQYXltZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQYXltZW50VHlwZSh0eXBlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+cGF5bWVudFR5cGVDaGFuZ2VkLT4nICsgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3JkZXJUeXBlQ2hhbmdlID0gKHR5cGU6IE9yZGVyVHlwZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0T3JkZXJUeXBlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5vcmRlclR5cGVDaGFuZ2VkLT4nICsgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgY3JlYXRlIG5ldyBjaGVjayBmaXJzdFxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgQ2hlY2sgb3V0IFBhZ2VcclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIFBheW1lbnQgVHlwZTpcclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2sucGF5bWVudCA9PT0gUGF5bWVudC5DYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UoUGF5bWVudC5DYXJkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhcmQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnBheW1lbnQgPT09IFBheW1lbnQuQ2FzaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FzaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17UGF5bWVudC5DYXNoLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FzaFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIE9yZGVyIFR5cGU6XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnR5cGUgPT09IE9yZGVyVHlwZS5QcmVPcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuUHJlT3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09yZGVyVHlwZS5QcmVPcmRlci50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByZSBPcmRlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuU2hvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuU2hvcCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlNob3AudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaG9wXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkNoZWNrIE91dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXR9PlxyXG4gICAgICAgICAgICBDaGVjayBPdXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0UGFnZSkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDcmVhdGVDaGVjaywgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDaGVjaywgUGF5bWVudCwgT3JkZXJUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjcmVhdGVDaGVjazogKCkgPT4gZGlzcGF0Y2goQ3JlYXRlQ2hlY2soKSksXHJcbiAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYWluUGFnZVByb3BzIHtcclxuICBoaXN0b3J5PzogQXJyYXk8Q2hlY2s+O1xyXG5cclxuICBjcmVhdGVDaGVjaz86ICgpID0+IHZvaWQ7XHJcbiAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIE1haW5QYWdlIGV4dGVuZHMgQ29tcG9uZW50PElNYWluUGFnZVByb3BzLCBhbnk+e1xyXG4gIG9uTmV3Q2hlY2tDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuY3JlYXRlQ2hlY2soKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnbWFpblBhZ2UtPm5ld0NoZWNrJyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJIaXN0b3J5KCkge1xyXG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAge2hpc3RvcnkubWFwKGggPT4ge1xyXG4gICAgICAgIHJldHVybiA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aC5pZH0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGluc2V0IHByaW1hcnk9e2BDaGVjayAjJHtoLmlkfSwgZGVzc2VydHMgY291bnQ6ICR7aC5kZXNzZXJ0cy5sZW5ndGh9LCBkcmlua3MgY291bnQ6ICR7aC5kcmlua3MubGVuZ3RofSwgcGF5IGJ5ICR7UGF5bWVudFtoLnBheW1lbnRdfSwgb3JkZXJlZCBpbiAke09yZGVyVHlwZVtoLnR5cGVdfWB9IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgfSl9XHJcbiAgICA8L0xpc3Q+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgTWFpbiBQYWdlXHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIk5ldyBDaGVja1wiIG9uQ2xpY2s9e3RoaXMub25OZXdDaGVja0NsaWNrfT5cclxuICAgICAgICA8TGluayB0bz0nL2NoZWNrJz5OZXcgQ2hlY2s8L0xpbms+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICBISVNUT1JZXHJcbiAgICAgIHt0aGlzLnJlbmRlckhpc3RvcnkoKX1cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgKE1haW5QYWdlKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm90Rm91bmRQYWdlUHJvcHMge1xyXG59XHJcblxyXG5jbGFzcyBOb3RGb3VuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SU5vdEZvdW5kUGFnZVByb3BzLCBhbnk+e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICBOb3QgRm91bmRcclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoTm90Rm91bmRQYWdlKVxyXG4iLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIEFERF9EUklOSyxcclxuICAgIEFERF9ERVNTRVJULFxyXG4gICAgUFJPQ0VTU19DSEVDS09VVCwgICAgXHJcbiAgICBTRVRfUEFZTUVOVF9UWVBFLFxyXG4gICAgU0VUX09SREVSX1RZUEUsXHJcbiAgICBBUFBFTkRfREFUQV9GVUxGSUxMRUQsXHJcbiAgICBBUFBFTkRfREFUQV9SRUpFQ1RFRCxcclxuICAgIExPR19EQVRBLFxyXG4gICAgQ0xFQVJfTE9HXHJcbn0gZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHsgQ2hlY2ssIERlc3NlcnQsIERyaW5rLCBQYXltZW50LCBPcmRlclR5cGUgfSBmcm9tICcuL3V0aWxzL3R5cGVzJztcclxuXHJcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9zdG9yZS9pbml0aWFsU3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XHJcbiAgICBbQ1JFQVRFX0NIRUNLXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrOiBDaGVjayA9IHtcclxuICAgICAgICAgICAgaWQ6IGhpc3RvcnkubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgZGVzc2VydHM6IG5ldyBBcnJheTxEZXNzZXJ0PigpLFxyXG4gICAgICAgICAgICBkcmlua3M6IG5ldyBBcnJheTxEcmluaz4oKSxcclxuICAgICAgICAgICAgaXNGaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBheW1lbnQ6IFBheW1lbnQuQ2FzaCxcclxuICAgICAgICAgICAgdHlwZTogT3JkZXJUeXBlLlNob3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVja1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW0FERF9EUklOS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgZHJpbms6IERyaW5rID0ge1xyXG4gICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgIHNpemU6IGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGVjay5kcmlua3MucHVzaChkcmluayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbQUREX0RFU1NFUlRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGRlc3NlcnQ6IERlc3NlcnQgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjaGVjay5kZXNzZXJ0cy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICB0eXBlOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgdGFzdGU6IGFjdGlvbi5wYXlsb2FkWzFdLFxyXG4gICAgICAgICAgICBzaXplOiBhY3Rpb24ucGF5bG9hZFsyXSxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IGFjdGlvbi5wYXlsb2FkWzNdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGVjay5kZXNzZXJ0cy5wdXNoKGRlc3NlcnQpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVja1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW1BST0NFU1NfQ0hFQ0tPVVRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2ssIGhpc3RvcnkgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLmlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChjaGVjayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrOiBudWxsLFxyXG4gICAgICAgICAgICBoaXN0b3J5XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbU0VUX1BBWU1FTlRfVFlQRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2sucGF5bWVudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogey4uLmNoZWNrfSB9OyAgICAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW1NFVF9PUkRFUl9UWVBFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjaGVjay50eXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiB7Li4uY2hlY2t9IH07ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBbTE9BRF9JVEVNU106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfSxcclxuICAgIFtMT0FEX0lURU1TX0ZVTEZJTExFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfUkVKRUNURURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9GVUxGSUxMRURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6ICFhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9SRUpFQ1RFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbU0hPV19CVVNZXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzQnVzeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0J1c3kgfTtcclxuICAgIH0sXHJcbiAgICBbTE9HX0RBVEFdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGNvbnN0IHsgbG9nIH0gPSBzdGF0ZTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiBgJHtsb2d9OyR7dGV4dH1gIH07XHJcbiAgICB9LFxyXG4gICAgW0NMRUFSX0xPR106IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiAnJyB9O1xyXG4gICAgfVxyXG59LCBpbml0aWFsU3RhdGUpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBBbnlBY3Rpb24sIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcic7XHJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgcm9vdFJlZHVjZXIsXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGhhc0Vycm9yZWQ6IGZhbHNlLFxyXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIGNoZWNrOiBudWxsLFxyXG4gICAgaGlzdG9yeTogbmV3IEFycmF5PENoZWNrPigpLFxyXG4gICAgbG9nOiAnJ1xyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgRHJpbmtzVHlwZSwgRGVzc2VydFR5cGUgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEcmlua3NEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PHN0cmluZz4gfSA9IHt9O1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRXNwcmVzc29dID0gWyczMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Eb3BwaW9dID0gWyc2MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9dID0gWycxMjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vTWlsa10gPSBbJzEyMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5NYWNoaWF0b10gPSBbJzkwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkNhcHB1Y2lub10gPSBbJzE3NSDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5GbGF0V2hpdGVdID0gWycxNzUg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVMYXZlbmRlcl0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5SYWZdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuUmFmQ2l0cnVzXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUdyZWVuXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUJsYWNrXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUhlcmJhbF0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TcGVhY2lhbFRlYVBlYXJMaW1lXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFPcmFuZ2VdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQ2FjYW9dID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFsnMTc1INC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWycwINC80LsnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNzZXJ0c0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8c3RyaW5nPiB9ID0ge307XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5NYWNhcm9uXSA9IFsnMSDRiNGCJywgJzYg0YjRgicsICcxMiDRiNGCJywgJzI0INGI0YInXTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLlplcGh5cl0gPSBbJzEg0YjRgicsICc4INGI0YInLCAnMTYg0YjRgiddO1xyXG5EZXNzZXJ0c0RpY3RbRGVzc2VydFR5cGUuQ2FrZV0gPSBbJzE4INGB0LwnLCAnMjIg0YHQvCddOyIsImV4cG9ydCBpbnRlcmZhY2UgRGVzc2VydCB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgdHlwZTogRGVzc2VydFR5cGUsXHJcbiAgICB0YXN0ZTogc3RyaW5nLFxyXG4gICAgc2l6ZTogc3RyaW5nXHJcbiAgICBxdWFudGl0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyaW5rIHtcclxuICAgIGlkOiBEcmlua3NUeXBlLFxyXG4gICAgc2l6ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2sge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGRlc3NlcnRzOiBBcnJheTxEZXNzZXJ0PixcclxuICAgIGRyaW5rczogQXJyYXk8RHJpbms+LFxyXG4gICAgaXNGaW5pc2hlZDogYm9vbGVhbixcclxuICAgIHBheW1lbnQ6IFBheW1lbnQsXHJcbiAgICB0eXBlOiBPcmRlclR5cGVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGF5bWVudCB7XHJcbiAgICBDYXJkID0gJ9Ca0LDRgNGC0LAnLFxyXG4gICAgQ2FzaCA9ICfQndCw0LvQuNGH0LrQsCcsXHJcbiAgICBPdGhlciA9ICfQlNGA0YPQs9C+0LUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE9yZGVyVHlwZSB7XHJcbiAgICBQcmVPcmRlciA9ICfQn9GA0LXQtNC30LDQutCw0LcnLFxyXG4gICAgU2hvcCA9ICfQktC40YLRgNC40L3QsCcsXHJcbiAgICBPdGhlciA9ICfQlNGA0YPQs9C+0LUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERlc3NlcnRUeXBlIHtcclxuICAgIE1hY2Fyb24gPSAn0JzQsNC60LDRgNC+0L3RgScsXHJcbiAgICBaZXBoeXIgPSAn0JfQtdGE0LjRgCcsXHJcbiAgICBDYWtlID0gJ9Ci0L7RgNGCJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYWNhcm9uc0VudW0ge1xyXG4gICAgQ2hvY29sYXRlID0gXCLQqNC+0LrQvtC70LDQtFwiLFxyXG4gICAgQ29mZmVlQ2FyYW1lbCA9IFwi0JrQvtGE0LUgLSDQodC+0LvRkdC90LDRjyDQmtCw0YDQsNC80LXQu9GMXCIsXHJcbiAgICBNYW5nb1Bhc3Npb24gPSBcItCc0LDQvdCz0L4gLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBMaW1lQmFzaWwgPSBcItCb0LDQudC8IC0g0JHQsNC30LjQu9C40LpcIixcclxuICAgIFBpc3RhY2hpbyA9IFwi0KTQuNGB0YLQsNGI0LrQsFwiLFxyXG4gICAgRG9yQmx1ZVBlYXIgPSBcItCU0L7QsS3QkdC70Y4gLSDQk9GA0YPRiNCwXCIsXHJcbiAgICBMYXZlbmRlckJsYWNrYmVycnkgPSBcItCb0LDQstCw0L3QtNCwIC0g0KfQtdGA0L3QuNC60LBcIixcclxuICAgIEN1cnJhbnQgPSBcItCh0LzQvtGA0L7QtNC40L3QsFwiLFxyXG4gICAgU3RyYXdiZXJyeUNoZWVzZWNha2UgPSBcItCa0LvRg9Cx0L3QuNGH0L3Ri9C5INCn0LjQt9C60LXQudC6XCIsXHJcbiAgICBQYXJtZXNhbkZpZ3VlID0gXCLQn9Cw0YDQvNC10LfQsNC9IC0g0JjQvdC20LjRgFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFplcGh5ckVudW0ge1xyXG4gICAgQXBwbGUgPSBcItCv0LHQu9C+0LrQvlwiLFxyXG4gICAgQ3VycmFudCA9IFwi0KHQvNC+0YDQvtC00LjQvdCwXCIsXHJcbiAgICBBcHJpY290UGFzc2lvbkZydWl0ID0gXCLQkNCx0YDQuNC60L7RgSAtINCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIFN0cmF3YmVycnlDcmFuYmVycnkgPSBcItCa0LvRg9Cx0L3QuNC60LAgLSDQmtC70Y7QutCy0LBcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDYWtlc0VudW0ge1xyXG4gICAgUmlvID0gXCJSaW9cIixcclxuICAgIENhcnJvdENha2UgPSBcIkNhcnJvdCBDYWtlXCIsXHJcbiAgICBTb3VsID0gXCJTb3VsXCIsXHJcbiAgICBQaW5rID0gXCJQaW5rXCIsXHJcbiAgICBJbmZpbml0eSA9IFwiSW5maW5pdHlcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEcmlua3NUeXBlIHtcclxuICAgIEVzcHJlc3NvID0gXCLQrdGB0L/RgNC10YHRgdC+XCIsXHJcbiAgICBEb3BwaW8gPSBcItCU0L7Qv9C/0LjQvlwiLFxyXG4gICAgQW1lcmljYW5vID0gXCLQkNC80LXRgNC40LrQsNC90L5cIixcclxuICAgIEFtZXJpY2Fub01pbGsgPSBcItCQ0LzQtdGA0LjQutCw0L3QviDRgSDQvNC+0LvQvtC60L7QvFwiLFxyXG4gICAgTWFjaGlhdG8gPSBcItCc0LDQutC40LDRgtC+XCIsXHJcbiAgICBDYXBwdWNpbm8gPSBcItCa0LDQv9GD0YfQuNC90L5cIixcclxuICAgIEZsYXRXaGl0ZSA9IFwi0KTQu9C10YIg0JLQsNC50YJcIixcclxuICAgIExhdHRlID0gXCLQm9Cw0YLRgtC1XCIsXHJcbiAgICBMYXR0ZUxhdmVuZGVyID0gXCLQm9Cw0YLRgtC1INCb0LDQstCw0L3QtNCwXCIsXHJcbiAgICBSYWYgPSBcItCg0LDRhFwiLFxyXG4gICAgUmFmQ2l0cnVzID0gXCLQoNCw0YQg0KbQuNGC0YDRg9GBXCIsXHJcbiAgICBUZWFHcmVlbiA9IFwi0KfQsNC5INCX0LXQu9GR0L3Ri9C5XCIsXHJcbiAgICBUZWFCbGFjayA9IFwi0KfQsNC5INCn0ZHRgNC90YvQuVwiLFxyXG4gICAgVGVhSGVyYmFsID0gXCLQp9Cw0Lkg0KLRgNCw0LLRj9C90L7QuVwiLFxyXG4gICAgU3BlYWNpYWxUZWFQZWFyTGltZSA9IFwi0KfQsNC5INCT0YDRg9GI0LAt0JvQsNC50LxcIixcclxuICAgIFNwZWNpYWxUZWFPcmFuZ2UgPSBcItCn0LDQuSDQkNC/0LXQu9GM0YHQuNC9LdCe0LHQu9C10L/QuNGF0LBcIixcclxuICAgIENhY2FvID0gXCLQmtCw0LrQsNC+XCIsXHJcbiAgICBIb3RDaG9jb2xhdGUgPSBcItCT0LDRgNGP0YfQuNC5INGI0L7QutC+0LvQsNC0XCIsXHJcbiAgICBMZW1vbmFkZVN0cmF3YmVycnkgPSBcItCb0LjQvNC+0L3QsNC0INCa0LvRg9Cx0L3QuNC60LBcIixcclxuICAgIExlbW9uYWRlQ2l0cnVzID0gXCLQm9C40LzQvtC90LDQtCDQptC40YLRgNGD0YFcIixcclxuICAgIExlbW9uYWRlUGFzc2lvbiA9IFwi0JvQuNC80L7QvdCw0LQg0JzQsNGA0LDQutGD0LnRj1wiLFxyXG4gICAgSWNlTGF0dGUgPSBcItCQ0LnRgSDQm9Cw0YLRgtC1XCIsXHJcbiAgICBTeXJvcCA9IFwi0KHQuNGA0L7Qv1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZhbHVlSW5wdXRPcHRpb24ge1xyXG4gICAgSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEID0gJ0lOUFVUX1ZBTFVFX09QVElPTl9VTlNQRUNJRklFRCcsXHJcbiAgICBSQVcgPSAnUkFXJyxcclxuICAgIFVTRVJfRU5URVJFRCA9ICdVU0VSX0VOVEVSRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEluc2VydERhdGFPcHRpb24ge1xyXG4gICAgT1ZFUldSSVRFID0gJ09WRVJXUklURScsXHJcbiAgICBJTlNFUlRfUk9XUyA9ICdJTlNFUlRfUk9XUydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVSZW5kZXJPcHRpb24ge1xyXG4gICAgRk9STUFUVEVEX1ZBTFVFID0gJ0ZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBVTkZPUk1BVFRFRF9WQUxVRSA9ICdVTkZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBGT1JNVUxBID0gJ0ZPUk1VTEEnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERhdGVUaW1lUmVuZGVyT3B0aW9uIHtcclxuICAgIFNFUklBTF9OVU1CRVIgPSAnU0VSSUFMX05VTUJFUicsXHJcbiAgICBGT1JNQVRURURfU1RSSU5HID0gJ0ZPUk1BVFRFRF9TVFJJTkcnXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==