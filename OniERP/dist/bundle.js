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

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/AppBar/styles.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/components/AppBar/styles.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".appbar_root {\n  flex-grow: 1; }\n  .appbar_root .appbar_grow {\n    flex-grow: 1; }\n  .appbar_root .appbar_menuButton {\n    margin-left: -12;\n    margin-right: 20; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/styles/global.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/styles/global.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Segoe UI'; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  font-size: 40px;\n  font-weight: 300;\n  height: 200px; }\n\n.avatar {\n  background-color: #72c3e9;\n  color: #1d53a3; }\n\n.cardContainer {\n  margin: 16px; }\n\n.cardRoot {\n  padding: 16px 0 16px 0 !important; }\n\n.newOrderButtonsWrapper {\n  display: flex;\n  flex-direction: row; }\n\n.newOrderButton {\n  padding: 5px;\n  width: 100%;\n  height: 100%; }\n\n.buttonsWraper {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 1rem; }\n\n.checkoutTitle {\n  text-align: center;\n  margin: 1rem;\n  font-weight: 450; }\n\n.checkoutControlGroup {\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 2rem 1rem 2rem; }\n\n.notificationClose {\n  width: 4rem;\n  height: 4rem; }\n\n.macaronAvatar {\n  margin: 10px;\n  color: black !important; }\n\n.drinkAvatar {\n  margin: 10px;\n  color: #fff !important;\n  background-color: #74482f !important; }\n\n.buttonApplyWraper {\n  display: flex;\n  justify-content: space-evenly; }\n\n.partnerSelectWrapper {\n  width: 100%;\n  padding: 1rem; }\n\n.busy-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 9999;\n  background-color: #e6e6e6;\n  opacity: 0.8; }\n  .busy-container .busy {\n    position: absolute;\n    left: 50%;\n    top: 44%;\n    margin-left: -18px; }\n\n.invisible {\n  display: none; }\n", ""]);

// exports


/***/ }),

/***/ "./public/images/desserts_icon.jpg":
/*!*****************************************!*\
  !*** ./public/images/desserts_icon.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "196b0ea77724931afc38ae39dbf0062e.jpg";

/***/ }),

/***/ "./public/images/drinks_icon.jpg":
/*!***************************************!*\
  !*** ./public/images/drinks_icon.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9feaf221f57071577915e5e2d3293b51.jpg";

/***/ }),

/***/ "./public/images/main_icon.jpg":
/*!*************************************!*\
  !*** ./public/images/main_icon.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "78f01e04cf015b2f7077d1172e2139f8.jpg";

/***/ }),

/***/ "./public/images/partners_icon.jpg":
/*!*****************************************!*\
  !*** ./public/images/partners_icon.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8446177fc57d69d70d68cdc84ebd51aa.jpg";

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
exports.DELETE_DRINK = 'DELETE_DRINK';
exports.DELETE_DESSERT = 'DELETE_DESSERT';
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
exports.CANCEL = 'CANCEL';
exports.CLEAR_ERROR = 'CLEAR_ERROR';
exports.SET_LAST_ID = 'SET_LAST_ID';

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
            var dessertsResponse, desserts, drinksResponse, drinks, lastDessertOrderId, lastDrinkOrderId, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch(exports.itemsIsLoading(true));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, window['gapi'].client.sheets.spreadsheets.values.get({
                            spreadsheetId: spreadsheetId,
                            range: "RawDessertsData!A:H"
                        })];
                    case 2:
                        dessertsResponse = _a.sent();
                        desserts = dessertsResponse.result.values.slice(1).map(function (d) {
                            var result = {
                                type: d[0],
                                taste: d[1],
                                quantity: d[2],
                                size: d[3]
                            };
                            return result;
                        });
                        return [4 /*yield*/, window['gapi'].client.sheets.spreadsheets.values.get({
                            spreadsheetId: spreadsheetId,
                            range: "RawDrinksData!A:F"
                        })];
                    case 3:
                        drinksResponse = _a.sent();
                        drinks = drinksResponse.result.values.slice(1).map(function (d) {
                            var result = {
                                id: d[0],
                                size: d[1]
                            };
                            return result;
                        });
                        lastDessertOrderId = Math.max.apply(Math, dessertsResponse.result.values.slice(1).map(function (d) {
                            return d[7] ? Number(d[7]) : 0;
                        }));
                        lastDrinkOrderId = Math.max.apply(Math, drinksResponse.result.values.slice(1).map(function (d) {
                            return d[5] ? Number(d[5]) : 0;
                        }));
                        dispatch(exports.SetLastId(Math.max(lastDessertOrderId, lastDrinkOrderId)));
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
            var response, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch(exports.itemsIsLoading(true));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
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
                        // const updatedCellsCount = await response.result.updates.updatedCells;            
                        dispatch(exports.itemsAppendSuccess(true));
                        return [3 /*break*/, 5];
                    case 3:
                        ex_2 = _a.sent();
                        dispatch(exports.itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
                        console.log(ex_2);
                        throw Error(ex_2);
                    case 4:
                        dispatch(exports.itemsIsLoading(false));
                        return [7 /*endfinally*/];
                    case 5:
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
exports.CreateCheck = redux_actions_1.createAction(actionTypes_1.CREATE_CHECK);
exports.ProcessCheckout = function () {
    return function (dispatch, getState) {
        return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var state, check_1, log, drinksRange, drinksData_1, dessertsRange, dessertsData_1, ex_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch(exports.itemsIsLoading(true));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, 9, 10]);
                        state = getState();
                        check_1 = state.check;
                        log = state.log;
                        drinksRange = "RawDrinksData!A:F";
                        drinksData_1 = [];
                        check_1.drinks.forEach(function (d) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var dateTime, data;
                                return __generator(this, function (_a) {
                                    dateTime = moment(new Date()).format('DD.MM.YYYY HH:mm');
                                    data = [d.id, d.size, check_1.payment, check_1.type, dateTime, check_1.id];
                                    drinksData_1.push(data);
                                    return [2 /*return*/];
                                });
                            });
                        });
                        if (!drinksData_1.length) return [3 /*break*/, 3];
                        return [4 /*yield*/, dispatch(exports.ProcessAppendData(config_1.SPREADSHEET_ID, drinksRange, drinksData_1))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        dessertsRange = "RawDessertsData!A:H";
                        dessertsData_1 = [];
                        check_1.desserts.forEach(function (d) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var dateTime, data;
                                return __generator(this, function (_a) {
                                    dateTime = moment(new Date()).format('DD.MM.YYYY HH:mm');
                                    data = [d.type, d.taste, d.quantity, d.size, check_1.payment, check_1.type, dateTime, check_1.id];
                                    dessertsData_1.push(data);
                                    return [2 /*return*/];
                                });
                            });
                        });
                        if (!dessertsData_1.length) return [3 /*break*/, 5];
                        return [4 /*yield*/, dispatch(exports.ProcessAppendData(config_1.SPREADSHEET_ID, dessertsRange, dessertsData_1))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        dispatch(exports.Checkout());
                        return [4 /*yield*/, exports.ProcessLog(log)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, exports.ProcessLog(JSON.stringify(check_1))];
                    case 7:
                        _a.sent();
                        dispatch(exports.ClearLog());
                        return [3 /*break*/, 10];
                    case 8:
                        ex_5 = _a.sent();
                        dispatch(exports.itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
                        console.log(ex_5);
                        throw Error(ex_5);
                    case 9:
                        dispatch(exports.itemsIsLoading(false));
                        return [7 /*endfinally*/];
                    case 10:
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
exports.DeleteDrink = redux_actions_1.createAction(actionTypes_1.DELETE_DRINK, function (type, size) {
    return [type, size];
});
exports.DeleteDessert = redux_actions_1.createAction(actionTypes_1.DELETE_DESSERT, function (type, taste, size) {
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
exports.itemsAppendErrored = redux_actions_1.createAction(actionTypes_1.APPEND_DATA_REJECTED, function (text) {
    return text;
});
exports.ShowBusy = redux_actions_1.createAction(actionTypes_1.SHOW_BUSY, function (isBusy) {
    return isBusy;
});
exports.LogData = redux_actions_1.createAction(actionTypes_1.LOG_DATA, function (text) {
    return text;
});
exports.ClearLog = redux_actions_1.createAction(actionTypes_1.CLEAR_LOG);
exports.Cancel = redux_actions_1.createAction(actionTypes_1.CANCEL);
exports.ClearError = redux_actions_1.createAction(actionTypes_1.CLEAR_ERROR);
exports.SetLastId = redux_actions_1.createAction(actionTypes_1.SET_LAST_ID);

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
var PartnersPage_1 = __webpack_require__(/*! ./pages/PartnersPage */ "./src/pages/PartnersPage.tsx");
var TestComponent_1 = __webpack_require__(/*! ./components/TestComponent */ "./src/components/TestComponent.tsx");
var react_async_script_loader_1 = __webpack_require__(/*! react-async-script-loader */ "./node_modules/react-async-script-loader/lib/index.js");
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
var AppBar_1 = __webpack_require__(/*! ./components/AppBar */ "./src/components/AppBar/index.tsx");
var Main = function Main() {
    return React.createElement(react_router_dom_1.Switch, null, React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: MainPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/check', component: CheckPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/checkOut', component: CheckoutPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/partners', component: PartnersPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/test', component: TestComponent_1.default }), React.createElement(react_router_dom_1.Route, { component: NotFoundPage_1.default }));
};
var App = /** @class */function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.initClient = function () {
            // const auth2 = window['gapi'].auth2.init({
            //     client_id: CLIENT_ID,
            //     scope: SCOPES,
            //     discoveryDocs: DISCOVERY_DOCS,
            //     apiKey: API_KEY,
            // });
            // auth2.isSignedIn.listen(this.signinChanged);
            window['gapi'].client.init({
                apiKey: config_1.API_KEY,
                clientId: config_1.CLIENT_ID,
                discoveryDocs: config_1.DISCOVERY_DOCS,
                scope: config_1.SCOPES
            }).then(function () {
                window['gapi'].auth2.getAuthInstance().isSignedIn.listen(_this.signinChanged);
                _this.setState({
                    isSignedIn: window['gapi'].auth2.getAuthInstance().isSignedIn.get()
                });
            });
        };
        _this.signinChanged = function (isSignedIn) {
            _this.setState({
                isSignedIn: isSignedIn
            });
        };
        _this.handleAuthClick = function () {
            window['gapi'].auth2.getAuthInstance().signIn();
        };
        _this.handleSignoutClick = function () {
            window['gapi'].auth2.getAuthInstance().signOut();
        };
        _this.isSignedIn = function () {
            if (!window['gapi'] || !window['gapi'].auth2 || !window['gapi'].auth2.getAuthInstance()) {
                return false;
            }
            return window['gapi'].auth2.getAuthInstance().isSignedIn.get();
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
        return React.createElement(React.Fragment, null, React.createElement(AppBar_1.default, { title: 'Главная', isSignedIn: isSignedIn, onLoginClick: this.handleAuthClick, onLogoutClick: this.handleSignoutClick }), isSignedIn && React.createElement(Main, null));
    };
    return App;
}(react_1.Component);
exports.default = react_async_script_loader_1.default('https://apis.google.com/js/api.js')(App);

/***/ }),

/***/ "./src/components/AppBar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/AppBar/index.tsx ***!
  \*****************************************/
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
var AppBar_1 = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
var Toolbar_1 = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
var Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
__webpack_require__(/*! ./styles.scss */ "./src/components/AppBar/styles.scss");
var Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
var IconButton_1 = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
var Menu_1 = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
var MenuItem_1 = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
var Menu_2 = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/Menu/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var options = [{
    title: 'Домой',
    route: '/'
}];
var ITEM_HEIGHT = 48;
var AppBar = /** @class */function (_super) {
    __extends(AppBar, _super);
    function AppBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (event) {
            _this.setState({ anchorEl: event.currentTarget });
        };
        _this.handleClose = function (option) {
            var history = _this.props.history;
            var currentRoute = location.hash.slice(1);
            if (currentRoute !== option.route) {
                history.push(option.route);
            }
            _this.setState({
                anchorEl: null
            });
        };
        _this.handleLoginClick = function () {
            var _a = _this.props,
                isSignedIn = _a.isSignedIn,
                onLoginClick = _a.onLoginClick,
                onLogoutClick = _a.onLogoutClick;
            if (isSignedIn) {
                onLogoutClick();
            } else {
                onLoginClick();
            }
        };
        _this.state = {
            anchorEl: null
        };
        return _this;
    }
    AppBar.prototype.renderMenu = function () {
        var _this = this;
        var anchorEl = this.state.anchorEl;
        var open = Boolean(anchorEl);
        var currentRoute = location.hash.slice(1);
        return React.createElement("div", null, React.createElement(IconButton_1.default, { className: 'appbar_menuButton', color: "inherit", "aria-label": "Menu", "aria-owns": open ? 'long-menu' : null, "aria-haspopup": "true", onClick: this.handleClick }, React.createElement(Menu_1.default, null)), React.createElement(Menu_2.default, { id: "long-menu", anchorEl: anchorEl, open: open, onClose: this.handleClose, PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200
                }
            } }, options.map(function (option) {
            return React.createElement(MenuItem_1.default, { key: option.title, selected: option.route === currentRoute, onClick: function onClick() {
                    return _this.handleClose(option);
                } }, option.title);
        })));
    };
    AppBar.prototype.render = function () {
        var _a = this.props,
            title = _a.title,
            isSignedIn = _a.isSignedIn;
        return React.createElement("div", { className: 'appbar_root' }, React.createElement(AppBar_1.default, { position: "static" }, React.createElement(Toolbar_1.default, null, this.renderMenu(), React.createElement(Typography_1.default, { variant: "title", color: "inherit", className: 'appbar_grow' }, title), React.createElement(Button_1.default, { color: "inherit", onClick: this.handleLoginClick }, isSignedIn ? 'Выйти' : 'Войти'))));
    };
    return AppBar;
}(react_1.Component);
exports.AppBar = AppBar;
exports.default = react_router_dom_1.withRouter(AppBar);

/***/ }),

/***/ "./src/components/AppBar/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/AppBar/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/AppBar/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Busy.tsx":
/*!*********************************!*\
  !*** ./src/components/Busy.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_spinners_1 = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
exports.Busy = function (props) {
    return React.createElement("div", { className: "busy-container" + (props.loading ? "" : " invisible") }, React.createElement("div", { className: "busy" }, React.createElement(react_spinners_1.GridLoader, { color: '#d0006f', loading: props.loading })));
};

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
var MIX_TASTE_NAME = 'Набор';
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
            return __awaiter(_this, void 0, void 0, function () {
                var dessertType;
                return __generator(this, function (_a) {
                    dessertType = this.state.dessertType;
                    if (dessertType === types_1.DessertType.Cake) {
                        this.setState({
                            dessertTaste: taste
                        });
                        this.props.logData('desserts->dessertTasteSelected->' + taste);
                    } else {
                        this.handleDessertIncrease(taste);
                    }
                    return [2 /*return*/];
                });
            });
        };
        _this.handleDessertMixSelect = function (qty) {
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.handleDessertIncrease(MIX_TASTE_NAME, qty);
                    // await this.props.addDessert(dessertType, MIX_TASTE_NAME, null, qty);
                    this.props.logData('desserts->handleDessertMixSelect->' + qty);
                    return [2 /*return*/];
                });
            });
        };
        _this.handleDessertSizeOrQuantitySelect = function (sizeOrQty) {
            return __awaiter(_this, void 0, void 0, function () {
                var _a, dessertType, dessertTaste;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.state, dessertType = _a.dessertType, dessertTaste = _a.dessertTaste;
                            if (!(dessertType === types_1.DessertType.Cake)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.props.addDessert(dessertType, dessertTaste, sizeOrQty, 1)];
                        case 1:
                            _b.sent();
                            this.props.handleClose();
                            this.props.logData('desserts->dessertSizeSelected->' + sizeOrQty);
                            return [3 /*break*/, 4];
                        case 2:
                            return [4 /*yield*/, this.props.addDessert(dessertType, dessertTaste, null, sizeOrQty)];
                        case 3:
                            _b.sent();
                            this.props.handleClose();
                            this.props.logData('desserts->dessertQuantitySelected->' + sizeOrQty);
                            _b.label = 4;
                        case 4:
                            return [2 /*return*/];
                    }
                });
            });
        };
        _this.handleFinish = function () {
            return __awaiter(_this, void 0, void 0, function () {
                var _a, dessertType, dessertQuantities, _b, _c, _i, key, dessertTaste, qty;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _a = this.state, dessertType = _a.dessertType, dessertQuantities = _a.dessertQuantities;
                            _b = [];
                            for (_c in dessertQuantities) {
                                _b.push(_c);
                            }_i = 0;
                            _d.label = 1;
                        case 1:
                            if (!(_i < _b.length)) return [3 /*break*/, 4];
                            key = _b[_i];
                            dessertTaste = key.split('/')[1];
                            qty = dessertQuantities[key];
                            return [4 /*yield*/, this.props.addDessert(dessertType, dessertTaste, null, qty || 0)];
                        case 2:
                            _d.sent();
                            _d.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            this.props.handleClose();
                            this.props.logData('desserts->handleFinish');
                            return [2 /*return*/];
                    }
                });
            });
        };
        _this.handleDessertIncrease = function (taste, qty) {
            if (qty === void 0) {
                qty = 1;
            }
            var _a = _this.state,
                dessertQuantities = _a.dessertQuantities,
                dessertType = _a.dessertType;
            var id = _this.getId(dessertType, taste);
            if (!dessertQuantities[id]) {
                dessertQuantities[id] = qty;
            } else {
                dessertQuantities[id] += qty;
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
        return dessertType + "/" + dessertTaste;
    };
    DessertsComponent.prototype.countTotalDessertQuantity = function () {
        var _a = this.state,
            dessertQuantities = _a.dessertQuantities,
            dessertType = _a.dessertType;
        var result = 0;
        for (var key in dessertQuantities) {
            if (key.startsWith(dessertType)) {
                result += dessertQuantities[key];
            }
        }
        return result;
    };
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
                }, key: d.id }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'macaronAvatar', style: { backgroundColor: '#dd73e2' } }, d.value.charAt(0).toUpperCase())), React.createElement(ListItemText_1.default, { primary: d.value }));
        }), React.createElement("div", { className: 'buttonApplyWraper' }, React.createElement(Button_1.default, { variant: "contained", color: "secondary", onClick: this.handleClose }, "\u041E\u0442\u043C\u0435\u043D\u0430"))));
    };
    ;
    DessertsComponent.prototype.renderDessertTastes = function () {
        var _this = this;
        var _a = this.state,
            dessertType = _a.dessertType,
            dessertQuantities = _a.dessertQuantities;
        var dessertTastes;
        var extraOptions = [];
        switch (dessertType) {
            case types_1.DessertType.Cake:
                dessertTastes = this.getArrayFromEnum(types_1.CakesEnum);
                break;
            case types_1.DessertType.Macaron:
                dessertTastes = this.getArrayFromEnum(types_1.MacaronsEnum);
                extraOptions.push({
                    value: 6,
                    title: 'Набор на 6 шт.'
                });
                extraOptions.push({
                    value: 12,
                    title: 'Набор на 12 шт.'
                });
                extraOptions.push({
                    value: 24,
                    title: 'Набор на 24 шт.'
                });
                break;
            case types_1.DessertType.Zephyr:
                dessertTastes = this.getArrayFromEnum(types_1.ZephyrEnum);
                extraOptions.push({
                    value: 8,
                    title: 'Набор на 8 шт.'
                });
                extraOptions.push({
                    value: 16,
                    title: 'Набор на 16 шт.'
                });
                break;
            default:
                dessertTastes = [];
                break;
        }
        ;
        return React.createElement("div", null, dessertType !== types_1.DessertType.Cake && React.createElement("div", { className: 'buttonApplyWraper' }, React.createElement(Button_1.default, { variant: "contained", color: "primary", title: "Check Out", onClick: this.handleFinish }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")), React.createElement(List_1.default, null, dessertTastes.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDessertTasteSelect(d.value);
                }, key: d.id }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'macaronAvatar', style: { backgroundColor: dessertType === types_1.DessertType.Macaron ? dictionaries_1.MacaronsColors[d.value] : dictionaries_1.ZephyrColors[d.value] } }, d.value.charAt(0).toUpperCase())), React.createElement(ListItemText_1.default, { primary: d.value + (dessertType !== types_1.DessertType.Cake ? "(" + (dessertQuantities[_this.getId(dessertType, d.value)] || 0) + ")" : '') }), dessertType !== types_1.DessertType.Cake && React.createElement(ListItemSecondaryAction_1.default, null, React.createElement(IconButton_1.default, { "aria-label": "Add", onClick: function onClick() {
                    return _this.handleDessertIncrease(d.value);
                } }, React.createElement(mdi_react_1.AddIcon, null))));
        }), extraOptions.map(function (o) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDessertMixSelect(o.value);
                }, key: o.value }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'macaronAvatar', style: { backgroundColor: '#dd73e2' } }, o.value)), React.createElement(ListItemText_1.default, { primary: o.title + "(" + (dessertQuantities[_this.getId(dessertType, MIX_TASTE_NAME)] || 0) + ")" }));
        }), React.createElement("div", { className: 'buttonApplyWraper' }, React.createElement(Button_1.default, { variant: "contained", color: "secondary", onClick: this.handleClose }, "\u041E\u0442\u043C\u0435\u043D\u0430"))));
    };
    ;
    DessertsComponent.prototype.renderDessertSize = function () {
        var _this = this;
        var dessertType = this.state.dessertType;
        var dessertSizes = dictionaries_1.DessertsDict[dessertType];
        return React.createElement("div", null, React.createElement(List_1.default, null, dessertSizes.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDessertSizeOrQuantitySelect(d);
                }, key: d }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'avatar' }, React.createElement(mdi_react_1.AddIcon, null))), React.createElement(ListItemText_1.default, { primary: d }));
        }), React.createElement("div", { className: 'buttonApplyWraper' }, React.createElement(Button_1.default, { variant: "contained", color: "secondary", onClick: this.handleClose }, "\u041E\u0442\u043C\u0435\u043D\u0430"))));
    };
    ;
    DessertsComponent.prototype.render = function () {
        var _a = this.state,
            dessertType = _a.dessertType,
            dessertTaste = _a.dessertTaste;
        return React.createElement(Dialog_1.default, { onClose: this.handleClose, "aria-labelledby": "simple-dialog-title", open: true, fullScreen: true }, React.createElement(DialogTitle_1.default, { id: "simple-dialog-title" }, !dessertType ? 'Выберите дессерт' : !dessertTaste ? "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u043A\u0443\u0441 (" + this.countTotalDessertQuantity() + ")" : 'Выберите размер'), !dessertType ? this.renderDesserts() : !dessertTaste ? this.renderDessertTastes() : this.renderDessertSize());
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
var Avatar_1 = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
var Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
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
            return __awaiter(_this, void 0, void 0, function () {
                var drinkSizes;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            drinkSizes = dictionaries_1.DrinksDict[drink];
                            if (!(drinkSizes && drinkSizes.length === 1)) return [3 /*break*/, 2];
                            this.setState({
                                drinkType: drink,
                                drinkSize: drinkSizes[0]
                            });
                            return [4 /*yield*/, this.props.addDrink(drink, drinkSizes[0])];
                        case 1:
                            _a.sent();
                            this.props.handleClose();
                            this.props.logData("drinks->drinkSelected->" + drink + "->drinkSizeSelected->" + drinkSizes[0]);
                            return [3 /*break*/, 3];
                        case 2:
                            this.setState({
                                drinkType: drink
                            });
                            this.props.logData('drinks->drinkSelected->' + drink);
                            _a.label = 3;
                        case 3:
                            return [2 /*return*/];
                    }
                });
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
                }, key: d.id }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'drinkAvatar' }, d.value.charAt(0).toUpperCase())), React.createElement(ListItemText_1.default, { primary: d.value }));
        }), React.createElement("div", { className: 'buttonApplyWraper' }, React.createElement(Button_1.default, { variant: "contained", color: "secondary", onClick: this.handleClose }, "\u041E\u0442\u043C\u0435\u043D\u0430"))));
    };
    ;
    DrinksComponent.prototype.renderDrinkSizes = function () {
        var _this = this;
        var drinkType = this.state.drinkType;
        var drinkSizes = dictionaries_1.DrinksDict[drinkType];
        return React.createElement("div", null, React.createElement(List_1.default, null, drinkSizes.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDrinkSizeSelect(d);
                }, key: d }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'drinkAvatar' }, d.charAt(0).toUpperCase())), React.createElement(ListItemText_1.default, { primary: d }));
        }), React.createElement("div", { className: 'buttonApplyWraper' }, React.createElement(Button_1.default, { variant: "contained", color: "secondary", onClick: this.handleClose }, "\u041E\u0442\u043C\u0435\u043D\u0430"))));
    };
    ;
    DrinksComponent.prototype.render = function () {
        var drinkType = this.state.drinkType;
        return React.createElement(Dialog_1.default, { onClose: this.handleClose, "aria-labelledby": "simple-dialog-title", open: true, fullScreen: true }, React.createElement(DialogTitle_1.default, { id: "simple-dialog-title" }, !drinkType ? 'Выберите напиток' : 'Выберите размер'), !drinkType ? this.renderDrinks() : this.renderDrinkSizes());
    };
    return DrinksComponent;
}(react_1.Component);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DrinksComponent);

/***/ }),

/***/ "./src/components/HistoryComponent.tsx":
/*!*********************************************!*\
  !*** ./src/components/HistoryComponent.tsx ***!
  \*********************************************/
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
var List_1 = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
var ListItem_1 = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
var ListItemText_1 = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {
        history: state.history
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};
var HistoryComponent = /** @class */function (_super) {
    __extends(HistoryComponent, _super);
    function HistoryComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HistoryComponent.prototype.render = function () {
        var history = this.props.history;
        return React.createElement(List_1.default, { component: "nav" }, history.map(function (h) {
            return React.createElement(ListItem_1.default, { key: h.id }, React.createElement(ListItemText_1.default, { inset: true, primary: "\u0427\u0435\u043A #" + h.id + ", \u0434\u0435\u0441\u0441\u0435\u0440\u0442\u044B: " + h.desserts.length + ", \u043D\u0430\u043F\u0438\u0442\u043A\u0438: " + h.drinks.length + ", \u043E\u043F\u043B\u0430\u0442\u0430: " + h.payment + ", \u0442\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430: " + h.type }));
        }));
    };
    return HistoryComponent;
}(react_1.Component);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(HistoryComponent);

/***/ }),

/***/ "./src/components/LargeButton/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/LargeButton/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
var ButtonBase_1 = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/index.js");
var Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
var styles_js_1 = __webpack_require__(/*! ./styles.js */ "./src/components/LargeButton/styles.js");
var LargeButton = function LargeButton(props) {
    var classes = props.classes,
        component = props.component,
        onClick = props.onClick,
        title = props.title,
        imageUrl = props.imageUrl;
    return React.createElement("div", { className: classes.root, onClick: onClick }, React.createElement(ButtonBase_1.default, { focusRipple: true, key: 'main', className: classes.image, component: component, focusVisibleClassName: classes.focusVisible, style: {
            width: '30'
        } }, React.createElement("span", { className: classes.imageSrc, style: {
            backgroundImage: "url(" + imageUrl + ")"
        } }), React.createElement("span", { className: classes.imageBackdrop }), React.createElement("span", { className: classes.imageButton }, React.createElement(Typography_1.default, { component: "span", variant: "subheading", color: "inherit", className: classes.imageTitle }, title, React.createElement("span", { className: classes.imageMarked })))));
};
exports.default = styles_1.withStyles(styles_js_1.default)(LargeButton);

/***/ }),

/***/ "./src/components/LargeButton/styles.js":
/*!**********************************************!*\
  !*** ./src/components/LargeButton/styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        // minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            // height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    }
}));

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
var DrinksComponent_1 = __webpack_require__(/*! ./DrinksComponent */ "./src/components/DrinksComponent.tsx");
var DessertsComponent_1 = __webpack_require__(/*! ./DessertsComponent */ "./src/components/DessertsComponent.tsx");
var List_1 = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
var ListItem_1 = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
var ListItemText_1 = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
var Divider_1 = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
var LargeButton_1 = __webpack_require__(/*! ./LargeButton */ "./src/components/LargeButton/index.tsx");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
var Delete_1 = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
var ListItemSecondaryAction_1 = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/index.js");
var IconButton_1 = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions.ts");
var dessertsImage = __webpack_require__(/*! ../../public/images/desserts_icon.jpg */ "./public/images/desserts_icon.jpg");
var drinksImage = __webpack_require__(/*! ../../public/images/drinks_icon.jpg */ "./public/images/drinks_icon.jpg");
var mapStateToProps = function mapStateToProps(state) {
    return {
        check: state.check
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        deleteDessert: function deleteDessert(type, taste, size) {
            return dispatch(actions_1.DeleteDessert(type, taste, size));
        },
        deleteDrink: function deleteDrink(type, size) {
            return dispatch(actions_1.DeleteDrink(type, size));
        }
    };
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
        _this.handleNextClick = function () {
            var history = _this.props.history;
            history.push('/checkOut');
        };
        _this.handleDeleteDrink = function (drink) {
            _this.props.deleteDrink(drink.id, drink.size);
        };
        _this.handleDeleteDessert = function (dessert) {
            _this.props.deleteDessert(dessert.type, dessert.taste, dessert.size);
        };
        _this.state = {
            showDrinks: false,
            showDesserts: false
        };
        return _this;
    }
    NewOrderComponent.prototype.renderCheckContent = function () {
        var _this = this;
        var check = this.props.check;
        return React.createElement(List_1.default, { component: "nav" }, check.drinks.map(function (d, index) {
            return React.createElement(ListItem_1.default, { button: true, key: index }, React.createElement(ListItemText_1.default, { inset: true, primary: d.id + " - " + d.size }), React.createElement(ListItemSecondaryAction_1.default, null, React.createElement(IconButton_1.default, { "aria-label": "Delete", onClick: function onClick() {
                    return _this.handleDeleteDrink(d);
                } }, React.createElement(Delete_1.default, null))));
        }), check.desserts.map(function (d, index) {
            return React.createElement(ListItem_1.default, { button: true, key: index }, React.createElement(ListItemText_1.default, { inset: true, primary: d.type + " - " + d.taste + " - " + d.quantity + (d.size ? ' - ' + d.size : '') }), React.createElement(ListItemSecondaryAction_1.default, null, React.createElement(IconButton_1.default, { "aria-label": "Delete", onClick: function onClick() {
                    return _this.handleDeleteDessert(d);
                } }, React.createElement(Delete_1.default, null))));
        }));
    };
    NewOrderComponent.prototype.render = function () {
        var _this = this;
        var _a = this.state,
            showDrinks = _a.showDrinks,
            showDesserts = _a.showDesserts;
        var check = this.props.check;
        if (!check) {
            return React.createElement("div", { className: "container" }, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0447\u0435\u043A");
        }
        return React.createElement("div", null, React.createElement(Typography_1.default, { gutterBottom: true, variant: "headline", component: "h2" }, "\u041D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), "\u0427\u0435\u043A #" + check.id, this.renderCheckContent(), React.createElement(Divider_1.default, null), React.createElement("div", { className: 'newOrderButtonsWrapper' }, React.createElement("div", { className: 'newOrderButton' }, React.createElement(LargeButton_1.default, { title: 'ДЕССЕРТЫ', imageUrl: dessertsImage, onClick: this.addDessertClick })), React.createElement("div", { className: 'newOrderButton' }, React.createElement(LargeButton_1.default, { title: 'НАПИТКИ', imageUrl: drinksImage, onClick: this.addDrinkClick }))), React.createElement("div", { className: 'buttonsWraper' }, React.createElement(Button_1.default, { disabled: check.desserts.length === 0 && check.drinks.length === 0, variant: "contained", size: "large", color: "primary", onClick: this.handleNextClick }, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C")), showDrinks && React.createElement(DrinksComponent_1.default, { handleClose: function handleClose() {
                return _this.setState({ showDrinks: false });
            } }), showDesserts && React.createElement(DessertsComponent_1.default, { handleClose: function handleClose() {
                return _this.setState({ showDesserts: false });
            } }));
    };
    return NewOrderComponent;
}(react_1.Component);
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NewOrderComponent));

/***/ }),

/***/ "./src/components/PartnersComponent.tsx":
/*!**********************************************!*\
  !*** ./src/components/PartnersComponent.tsx ***!
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
var types_1 = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
var InputLabel_1 = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
var FormControl_1 = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
var Select_1 = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
var MenuItem_1 = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
var TextField_1 = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};
var PartnersComponent = /** @class */function (_super) {
    __extends(PartnersComponent, _super);
    function PartnersComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePartnerSelect = function (ev) {
            var partner = ev.target.value;
            _this.setState({ partner: partner });
        };
        _this.handleMacaronsQtyChange = function (ev) {
            _this.setState({
                macaronsQty: ev.target.value
            });
        };
        _this.handleZephyrQtyChange = function (ev) {
            _this.setState({
                zephyrQty: ev.target.value
            });
        };
        _this.handleNextClick = function () {
            // const { history } = this.props;
            // history.push('/checkOut');
        };
        _this.state = {
            partner: '',
            macaronsQty: undefined,
            zephyrQty: undefined
        };
        return _this;
    }
    PartnersComponent.prototype.getArrayFromEnum = function (en) {
        var keys = Object.keys(en);
        var values = keys.map(function (d) {
            return {
                id: d,
                value: en[d]
            };
        });
        return values;
    };
    PartnersComponent.prototype.render = function () {
        var _a = this.state,
            partner = _a.partner,
            macaronsQty = _a.macaronsQty,
            zephyrQty = _a.zephyrQty;
        var partners = this.getArrayFromEnum(types_1.PartnersEnum);
        return React.createElement("div", null, React.createElement(Typography_1.default, { gutterBottom: true, variant: "headline", component: "h2" }, "\u041E\u043F\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), React.createElement(FormControl_1.default, { className: 'partnerSelectWrapper' }, React.createElement(InputLabel_1.default, { htmlFor: "partner-select" }, "\u041A\u043E\u0444\u0435\u0439\u043D\u044F"), React.createElement(Select_1.default, { value: partner, onChange: this.handlePartnerSelect, inputProps: {
                name: 'partner',
                id: 'partner-select'
            } }, React.createElement(MenuItem_1.default, { value: "" }, React.createElement("em", null, "None")), partners.map(function (p) {
            return React.createElement(MenuItem_1.default, { key: p.id, value: p.value }, p.value);
        }))), React.createElement(TextField_1.default, { label: "\u041C\u0430\u043A\u0430\u0440\u043E\u043D\u044B", value: macaronsQty, onChange: this.handleMacaronsQtyChange, type: "number", InputLabelProps: {
                shrink: true
            }, margin: "normal", fullWidth: true, disabled: !partner, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0430\u043A\u0430\u0440\u043E\u043D\u0441" }), React.createElement(TextField_1.default, { label: "\u0417\u0435\u0444\u0438\u0440", value: zephyrQty, onChange: this.handleZephyrQtyChange, type: "number", InputLabelProps: {
                shrink: true
            }, margin: "normal", fullWidth: true, disabled: !partner, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0435\u0444\u0438\u0440\u0430" }), React.createElement("div", { className: 'buttonsWraper' }, React.createElement(Button_1.default, { disabled: !partner, variant: "contained", size: "large", color: "primary", onClick: this.handleNextClick }, "\u0413\u043E\u0442\u043E\u0432\u043E")));
    };
    return PartnersComponent;
}(react_1.Component);
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PartnersComponent));

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
var Card_1 = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
var CardContent_1 = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
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
        return React.createElement("div", null, React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, null, React.createElement(NewOrderComponent_1.default, null))));
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
var Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
var Card_1 = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
var CardContent_1 = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
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
        },
        handleCancel: function handleCancel() {
            return dispatch(actions_1.Cancel());
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
        _this.handleCancel = function () {
            _this.props.handleCancel();
            _this.props.history.push('/');
            _this.props.logData('checkoutPage->cancel');
        };
        _this.handleBack = function () {
            _this.props.history.push('/check');
            _this.props.logData('checkoutPage->back');
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
            return React.createElement("div", { className: "container" }, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0447\u0435\u043A");
        }
        return React.createElement("div", { className: "container" }, React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, null, React.createElement(Typography_1.default, { gutterBottom: true, variant: "headline", component: "h2" }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0447\u0435\u043A\u0430"), React.createElement(Divider_1.default, null), React.createElement("div", { className: "checkoutControlGroup" }, "\u0422\u0438\u043F \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.payment === types_1.Payment.Card, onChange: function onChange() {
                    return _this.handlePaymentTypeChange(types_1.Payment.Card);
                }, value: types_1.Payment.Card.toString() }), label: "\u041A\u0430\u0440\u0442\u0430" }), React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.payment === types_1.Payment.Cash, onChange: function onChange() {
                    return _this.handlePaymentTypeChange(types_1.Payment.Cash);
                }, value: types_1.Payment.Cash.toString() }), label: "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435" })), React.createElement(Divider_1.default, null), React.createElement("div", { className: "checkoutControlGroup" }, "\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430:", React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.type === types_1.OrderType.PreOrder, onChange: function onChange() {
                    return _this.handleOrderTypeChange(types_1.OrderType.PreOrder);
                }, value: types_1.OrderType.PreOrder.toString() }), label: "\u041F\u0440\u0435\u0434\u0437\u0430\u043A\u0430\u0437" }), React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.type === types_1.OrderType.Shop, onChange: function onChange() {
                    return _this.handleOrderTypeChange(types_1.OrderType.Shop);
                }, value: types_1.OrderType.Shop.toString() }), label: "\u0412\u0438\u0442\u0440\u0438\u043D\u0430" })), React.createElement(Divider_1.default, null), React.createElement("div", { className: 'buttonsWraper' }, React.createElement(Button_1.default, { variant: "contained", color: "secondary", title: "Cancel", onClick: this.handleCancel }, "\u041E\u0442\u043C\u0435\u043D\u0430"), React.createElement(Button_1.default, { variant: "contained", color: "default", title: "Back", onClick: this.handleBack }, "\u041D\u0430\u0437\u0430\u0434"), React.createElement(Button_1.default, { variant: "contained", color: "primary", title: "Check Out", onClick: this.handleCheckout }, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C")))));
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
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions.ts");
var LargeButton_1 = __webpack_require__(/*! ../components/LargeButton */ "./src/components/LargeButton/index.tsx");
var HistoryComponent_1 = __webpack_require__(/*! ../components/HistoryComponent */ "./src/components/HistoryComponent.tsx");
var Busy_1 = __webpack_require__(/*! ../components/Busy */ "./src/components/Busy.tsx");
var Card_1 = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
var CardContent_1 = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
var Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
var Snackbar_1 = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
var IconButton_1 = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
var Close_1 = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var imageUrl = __webpack_require__(/*! ../../public/images/main_icon.jpg */ "./public/images/main_icon.jpg");
var partnerUrl = __webpack_require__(/*! ../../public/images/partners_icon.jpg */ "./public/images/partners_icon.jpg");
var mapStateToProps = function mapStateToProps(state) {
    return {
        history: state.history,
        errorMessage: state.errorMessage,
        isLoading: state.isLoading
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        createCheck: function createCheck() {
            return dispatch(actions_1.CreateCheck());
        },
        logData: function logData(text) {
            return dispatch(actions_1.LogData(text));
        },
        clearError: function clearError() {
            return dispatch(actions_1.ClearError());
        },
        fetchData: function fetchData(url) {
            return dispatch(actions_1.ProcessFetchData(url));
        }
    };
};
var CkeckLink = function CkeckLink(props) {
    return React.createElement(react_router_dom_1.Link, __assign({ to: "/check" }, props));
};
var PartnersLink = function PartnersLink(props) {
    return React.createElement(react_router_dom_1.Link, __assign({ to: "/partners" }, props));
};
var MainPage = /** @class */function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onNewCheckClick = function () {
            _this.props.createCheck();
            _this.props.logData('mainPage->newCheck');
        };
        _this.onNewPartnersCheckClick = function () {
            _this.props.createCheck();
            _this.props.logData('mainPage->onNewPartnersCheckClick');
        };
        _this.handleClose = function () {
            _this.props.clearError();
        };
        return _this;
    }
    MainPage.prototype.componentDidMount = function () {
        this.props.fetchData(config_1.SPREADSHEET_ID);
    };
    MainPage.prototype.render = function () {
        var _a = this.props,
            errorMessage = _a.errorMessage,
            isLoading = _a.isLoading;
        return React.createElement("div", { className: "container" }, React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, { classes: { root: 'cardRoot' } }, React.createElement(LargeButton_1.default, { title: 'РОЗНИЧНЫЙ ЗАКАЗ', component: CkeckLink, imageUrl: imageUrl, onClick: this.onNewCheckClick }))), React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, { classes: { root: 'cardRoot' } }, React.createElement(LargeButton_1.default, { title: 'ОПТОВЫЙ ЗАКАЗ', component: PartnersLink, imageUrl: partnerUrl, onClick: this.onNewPartnersCheckClick }))), React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, null, React.createElement(Typography_1.default, { gutterBottom: true, variant: "headline", component: "h2" }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"), React.createElement(HistoryComponent_1.default, null))), React.createElement(Snackbar_1.default, { anchorOrigin: { vertical: 'top', horizontal: 'center' }, open: !!errorMessage, ContentProps: {
                'aria-describedby': 'message-id'
            }, autoHideDuration: 6000, onClose: this.handleClose, message: React.createElement("span", { id: "message-id" }, errorMessage), action: React.createElement(IconButton_1.default, { key: "close", "aria-label": "Close", color: "inherit", className: 'notificationClose', onClick: this.handleClose }, React.createElement(Close_1.default, null)) }), React.createElement(Busy_1.Busy, { loading: isLoading }));
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

/***/ "./src/pages/PartnersPage.tsx":
/*!************************************!*\
  !*** ./src/pages/PartnersPage.tsx ***!
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
var PartnersComponent_1 = __webpack_require__(/*! ../components/PartnersComponent */ "./src/components/PartnersComponent.tsx");
var Card_1 = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
var CardContent_1 = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};
var PartnersPage = /** @class */function (_super) {
    __extends(PartnersPage, _super);
    function PartnersPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartnersPage.prototype.render = function () {
        return React.createElement("div", null, React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, null, React.createElement(PartnersComponent_1.default, null))));
    };
    return PartnersPage;
}(react_1.Component);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PartnersPage);

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
    var lastId = state.lastId;
    var check = {
        id: lastId + 1,
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
}, _a[actionTypes_1.DELETE_DRINK] = function (state, action) {
    var check = state.check;
    var newCheck = __assign({}, check);
    var comparator = function comparator(_a) {
        var id = _a.id,
            size = _a.size;
        if (id === action.payload[0] && size === action.payload[1]) {
            return false;
        }
        return true;
    };
    newCheck.drinks = check.drinks.filter(function (d) {
        return comparator(d);
    });
    return Object.assign({}, state, {
        check: newCheck
    });
}, _a[actionTypes_1.ADD_DESSERT] = function (state, action) {
    var check = state.check;
    var existingDessert = check.desserts.find(function (d) {
        return d.type === action.payload[0] && d.taste === action.payload[1] && d.size === action.payload[2];
    });
    if (!!existingDessert) {
        existingDessert.quantity += action.payload[3];
    } else {
        var dessert = {
            type: action.payload[0],
            taste: action.payload[1],
            size: action.payload[2],
            quantity: action.payload[3]
        };
        check.desserts.push(dessert);
    }
    return Object.assign({}, state, {
        check: check
    });
}, _a[actionTypes_1.DELETE_DESSERT] = function (state, action) {
    var check = state.check;
    var newCheck = __assign({}, check);
    var comparator = function comparator(_a) {
        var type = _a.type,
            taste = _a.taste,
            size = _a.size;
        if (type === action.payload[0] && taste === action.payload[1]) {
            if (action.payload[3]) {
                return size !== action.payload[3];
            } else {
                return false;
            }
        }
        return true;
    };
    newCheck.desserts = newCheck.desserts.filter(function (d) {
        return comparator(d);
    });
    return Object.assign({}, state, {
        check: newCheck
    });
}, _a[actionTypes_1.PROCESS_CHECKOUT] = function (state, action) {
    var check = state.check,
        history = state.history,
        lastId = state.lastId;
    check.isFinished = true;
    history.push(check);
    return Object.assign({}, state, {
        check: null,
        history: history.slice(),
        lastId: lastId + 1
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
        hasErrored: true,
        errorMessage: action.payload
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
}, _a[actionTypes_1.CLEAR_ERROR] = function (state, action) {
    return __assign({}, state, { errorMessage: '' });
}, _a[actionTypes_1.CANCEL] = function (state, action) {
    return __assign({}, state, { check: null });
}, _a[actionTypes_1.SET_LAST_ID] = function (state, action) {
    return __assign({}, state, { lastId: action.payload });
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
    log: '',
    errorMessage: '',
    lastId: 0
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
exports.DrinksDict[types_1.DrinksType.Cappucino] = ['175 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.Latte] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.FlatWhite] = ['175 мл'];
exports.DrinksDict[types_1.DrinksType.Raf] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.Americano] = ['120 мл'];
exports.DrinksDict[types_1.DrinksType.AmericanoMilk] = ['120 мл'];
exports.DrinksDict[types_1.DrinksType.LongBlack] = ['200 мл'];
exports.DrinksDict[types_1.DrinksType.Espresso] = ['30 мл'];
exports.DrinksDict[types_1.DrinksType.Doppio] = ['60 мл'];
exports.DrinksDict[types_1.DrinksType.Machiato] = ['90 мл'];
exports.DrinksDict[types_1.DrinksType.LatteLavender] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.LatteCaramel] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.LatteOrange] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.Cacao] = ['250 мл', '340 мл'];
exports.DrinksDict[types_1.DrinksType.TeaGreen] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.TeaBlack] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.TeaHerbal] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.SpeacialTeaPearLime] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.SpecialTeaOrange] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.SpecialTeaGinger] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.HotChocolate] = ['175 мл'];
exports.DrinksDict[types_1.DrinksType.LemonadeStrawberry] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.LemonadeCitrus] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.LemonadePassion] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.IceLatte] = ['400 мл'];
exports.DrinksDict[types_1.DrinksType.Syrop] = ['0 мл'];
exports.DessertsDict = {};
exports.DessertsDict[types_1.DessertType.Macaron] = [1, 6, 12, 24];
exports.DessertsDict[types_1.DessertType.Zephyr] = [1, 8, 16];
exports.DessertsDict[types_1.DessertType.Cake] = ['18 см', '22 см'];
exports.DrinkPricesDict = {};
exports.DrinkPricesDict[types_1.DrinksType.Cappucino] = ['25', '40'];
exports.DrinkPricesDict[types_1.DrinksType.Latte] = ['28', '35'];
exports.DrinkPricesDict[types_1.DrinksType.FlatWhite] = ['35'];
exports.DrinkPricesDict[types_1.DrinksType.Raf] = ['38', '45'];
exports.DrinkPricesDict[types_1.DrinksType.Americano] = ['20'];
exports.DrinkPricesDict[types_1.DrinksType.AmericanoMilk] = ['25'];
exports.DrinkPricesDict[types_1.DrinksType.LongBlack] = ['30'];
exports.DrinkPricesDict[types_1.DrinksType.Espresso] = ['20'];
exports.DrinkPricesDict[types_1.DrinksType.Doppio] = ['30'];
exports.DrinkPricesDict[types_1.DrinksType.Machiato] = ['22'];
exports.DrinkPricesDict[types_1.DrinksType.LatteLavender] = ['32', '40'];
exports.DrinkPricesDict[types_1.DrinksType.LatteCaramel] = ['32', '40'];
exports.DrinkPricesDict[types_1.DrinksType.LatteOrange] = ['32', '40'];
exports.DrinkPricesDict[types_1.DrinksType.Cacao] = ['28', '35'];
exports.DrinkPricesDict[types_1.DrinksType.TeaGreen] = ['25'];
exports.DrinkPricesDict[types_1.DrinksType.TeaBlack] = ['25'];
exports.DrinkPricesDict[types_1.DrinksType.TeaHerbal] = ['25'];
exports.DrinkPricesDict[types_1.DrinksType.SpeacialTeaPearLime] = ['35'];
exports.DrinkPricesDict[types_1.DrinksType.SpecialTeaOrange] = ['35'];
exports.DrinkPricesDict[types_1.DrinksType.SpecialTeaGinger] = ['35'];
exports.DrinkPricesDict[types_1.DrinksType.HotChocolate] = ['55'];
exports.DrinkPricesDict[types_1.DrinksType.LemonadeStrawberry] = ['35'];
exports.DrinkPricesDict[types_1.DrinksType.LemonadeCitrus] = ['35'];
exports.DrinkPricesDict[types_1.DrinksType.LemonadePassion] = ['35'];
exports.DrinkPricesDict[types_1.DrinksType.IceLatte] = ['40'];
exports.DrinkPricesDict[types_1.DrinksType.Syrop] = ['5'];
exports.CaffeePrices = {};
exports.CaffeePrices[types_1.PartnersEnum.CoffeeIs] = 17;
exports.CaffeePrices[types_1.PartnersEnum.FirstPoint] = 19;
exports.CaffeePrices[types_1.PartnersEnum.CubaCoffee] = 19;
exports.CaffeePrices[types_1.PartnersEnum.Progress] = 20;
exports.CaffeePrices[types_1.PartnersEnum.KlassnaKava] = 19;
exports.CaffeePrices[types_1.PartnersEnum.CoffeeAndTheCity] = 19;
exports.CaffeePrices[types_1.PartnersEnum.IlMio] = 19;
exports.CaffeePrices[types_1.PartnersEnum.StudioCoffee] = 20;
exports.ZEPHYR_PRICE = 11;
exports.MacaronsColors = {};
exports.MacaronsColors[types_1.MacaronsEnum.DorBluePear] = '#b7e4f7';
exports.MacaronsColors[types_1.MacaronsEnum.ParmesanFigue] = '#fcf7e8';
exports.MacaronsColors[types_1.MacaronsEnum.StrawberryCheesecake] = '#ffdddd';
exports.MacaronsColors[types_1.MacaronsEnum.Raspberry] = '#ffa5cf';
exports.MacaronsColors[types_1.MacaronsEnum.Currant] = '#bc45c6';
exports.MacaronsColors[types_1.MacaronsEnum.LavenderBlackberry] = '#b587ff';
exports.MacaronsColors[types_1.MacaronsEnum.MangoPassion] = '#ffdd87';
exports.MacaronsColors[types_1.MacaronsEnum.CoffeeCaramel] = '#a87301';
exports.MacaronsColors[types_1.MacaronsEnum.Chocolate] = '#492908';
exports.MacaronsColors[types_1.MacaronsEnum.Pistachio] = '#85dd93';
exports.MacaronsColors[types_1.MacaronsEnum.LimeBasil] = '#9ff25c';
exports.ZephyrColors = {};
exports.ZephyrColors[types_1.ZephyrEnum.Apple] = '#fffbf2';
exports.ZephyrColors[types_1.ZephyrEnum.ApricotPassionFruit] = '#ffe6bf';
exports.ZephyrColors[types_1.ZephyrEnum.Currant] = '#d978еd';
exports.ZephyrColors[types_1.ZephyrEnum.StrawberryCranberry] = '#f497b9';

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
    MacaronsEnum["DorBluePear"] = "\u0414\u043E\u0431-\u0411\u043B\u044E - \u0413\u0440\u0443\u0448\u0430";
    MacaronsEnum["ParmesanFigue"] = "\u041F\u0430\u0440\u043C\u0435\u0437\u0430\u043D - \u0418\u043D\u0436\u0438\u0440";
    MacaronsEnum["StrawberryCheesecake"] = "\u041A\u043B\u0443\u0431\u043D\u0438\u0447\u043D\u044B\u0439 \u0427\u0438\u0437\u043A\u0435\u0439\u043A";
    MacaronsEnum["Raspberry"] = "\u041C\u0430\u043B\u0438\u043D\u0430";
    MacaronsEnum["Currant"] = "\u0421\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430";
    MacaronsEnum["LavenderBlackberry"] = "\u041B\u0430\u0432\u0430\u043D\u0434\u0430 - \u0427\u0435\u0440\u043D\u0438\u043A\u0430";
    MacaronsEnum["MangoPassion"] = "\u041C\u0430\u043D\u0433\u043E - \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F";
    MacaronsEnum["CoffeeCaramel"] = "\u041A\u043E\u0444\u0435 - \u0421\u043E\u043B\u0451\u043D\u0430\u044F \u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C";
    MacaronsEnum["Chocolate"] = "\u0428\u043E\u043A\u043E\u043B\u0430\u0434";
    MacaronsEnum["Pistachio"] = "\u0424\u0438\u0441\u0442\u0430\u0448\u043A\u0430";
    MacaronsEnum["LimeBasil"] = "\u041B\u0430\u0439\u043C - \u0411\u0430\u0437\u0438\u043B\u0438\u043A";
})(MacaronsEnum = exports.MacaronsEnum || (exports.MacaronsEnum = {}));
var ZephyrEnum;
(function (ZephyrEnum) {
    ZephyrEnum["Apple"] = "\u042F\u0431\u043B\u043E\u043A\u043E";
    ZephyrEnum["ApricotPassionFruit"] = "\u0410\u0431\u0440\u0438\u043A\u043E\u0441 - \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F";
    ZephyrEnum["Currant"] = "\u0421\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430";
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
    DrinksType["Cappucino"] = "\u041A\u0430\u043F\u0443\u0447\u0438\u043D\u043E";
    DrinksType["Latte"] = "\u041B\u0430\u0442\u0442\u0435";
    DrinksType["FlatWhite"] = "\u0424\u043B\u0435\u0442 \u0412\u0430\u0439\u0442";
    DrinksType["Raf"] = "\u0420\u0430\u0444";
    DrinksType["Americano"] = "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u043E";
    DrinksType["AmericanoMilk"] = "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u043E \u0441 \u043C\u043E\u043B\u043E\u043A\u043E\u043C";
    DrinksType["LongBlack"] = "\u041B\u043E\u043D\u0433 \u0431\u043B\u044D\u043A";
    DrinksType["Espresso"] = "\u042D\u0441\u043F\u0440\u0435\u0441\u0441\u043E";
    DrinksType["Doppio"] = "\u0414\u043E\u043F\u043F\u0438\u043E";
    DrinksType["Machiato"] = "\u041C\u0430\u043A\u0438\u0430\u0442\u043E";
    DrinksType["LatteLavender"] = "\u041B\u0430\u0442\u0442\u0435 \u041B\u0430\u0432\u0430\u043D\u0434\u0430";
    DrinksType["LatteCaramel"] = "\u041B\u0430\u0442\u0442\u0435 \u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C";
    DrinksType["LatteOrange"] = "\u041B\u0430\u0442\u0442\u0435 \u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D";
    DrinksType["Cacao"] = "\u041A\u0430\u043A\u0430\u043E";
    DrinksType["TeaGreen"] = "\u0427\u0430\u0439 \u0417\u0435\u043B\u0451\u043D\u044B\u0439";
    DrinksType["TeaBlack"] = "\u0427\u0430\u0439 \u0427\u0451\u0440\u043D\u044B\u0439";
    DrinksType["TeaHerbal"] = "\u0427\u0430\u0439 \u0422\u0440\u0430\u0432\u044F\u043D\u043E\u0439";
    DrinksType["SpeacialTeaPearLime"] = "\u0427\u0430\u0439 \u0413\u0440\u0443\u0448\u0430-\u041B\u0430\u0439\u043C";
    DrinksType["SpecialTeaOrange"] = "\u0427\u0430\u0439 \u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D-\u041E\u0431\u043B\u0435\u043F\u0438\u0445\u0430";
    DrinksType["SpecialTeaGinger"] = "\u0427\u0430\u0439 \u041C\u0430\u043B\u0438\u043D\u0430-\u0418\u043C\u0431\u0438\u0440\u044C";
    DrinksType["HotChocolate"] = "\u0413\u0430\u0440\u044F\u0447\u0438\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434";
    DrinksType["LemonadeStrawberry"] = "\u041B\u0438\u043C\u043E\u043D\u0430\u0434 \u041A\u043B\u0443\u0431\u043D\u0438\u043A\u0430";
    DrinksType["LemonadeCitrus"] = "\u041B\u0438\u043C\u043E\u043D\u0430\u0434 \u0426\u0438\u0442\u0440\u0443\u0441";
    DrinksType["LemonadePassion"] = "\u041B\u0438\u043C\u043E\u043D\u0430\u0434 \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F";
    DrinksType["IceLatte"] = "\u0410\u0439\u0441 \u041B\u0430\u0442\u0442\u0435";
    DrinksType["Syrop"] = "\u0421\u0438\u0440\u043E\u043F";
})(DrinksType = exports.DrinksType || (exports.DrinksType = {}));
var PartnersEnum;
(function (PartnersEnum) {
    PartnersEnum["CoffeeIs"] = "Coffee is";
    PartnersEnum["FirstPoint"] = "First Point";
    PartnersEnum["CubaCoffee"] = "Cuba Coffee";
    PartnersEnum["Progress"] = "Progress";
    PartnersEnum["KlassnaKava"] = "\u041A\u043B\u0430\u0441\u043D\u0430 \u043A\u0430\u0432\u0430";
    PartnersEnum["CoffeeAndTheCity"] = "Coffee and the city";
    PartnersEnum["IlMio"] = "Il Mio";
    PartnersEnum["StudioCoffee"] = "\u0421\u0442\u0443\u0434\u0438\u044F \u043A\u043E\u0444\u0435";
})(PartnersEnum = exports.PartnersEnum || (exports.PartnersEnum = {}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9kZXNzZXJ0c19pY29uLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2RyaW5rc19pY29uLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL21haW5faWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9wYXJ0bmVyc19pY29uLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHBCYXIvc3R5bGVzLnNjc3M/OGFhMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXN5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EZXNzZXJ0c0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpbmtzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaXN0b3J5Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXJnZUJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24vc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYXJ0bmVyc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9DaGVja1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9DaGVja291dFBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1BhcnRuZXJzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwuc2Nzcz9kY2JkIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kaWN0aW9uYXJpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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Q3hCLG9DQUF1QjtBQUN2QixzQ0FDSjtBQUFDLEdBSDJCLG1CQUFoQixRQUFnQixxQkFBaEIsUUFBZ0IsbUJBRzNCO0FBRUQsSUFJQztBQUpELFdBQTZCO0FBQ3pCLDJDQUFtQztBQUNuQyw2Q0FBdUM7QUFDdkMsbUNBQ0o7QUFBQyxHQUo0QixvQkFBakIsUUFBaUIsc0JBQWpCLFFBQWlCLG9CQUk1QjtBQUVELElBR0M7QUFIRCxXQUFnQztBQUM1Qiw0Q0FBK0I7QUFDL0IsK0NBQ0o7QUFBQyxHQUgrQix1QkFBcEIsUUFBb0IseUJBQXBCLFFBQW9CLHVCQUcvQixLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hcHBiYXJfcm9vdCB7XFxuICBmbGV4LWdyb3c6IDE7IH1cXG4gIC5hcHBiYXJfcm9vdCAuYXBwYmFyX2dyb3cge1xcbiAgICBmbGV4LWdyb3c6IDE7IH1cXG4gIC5hcHBiYXJfcm9vdCAuYXBwYmFyX21lbnVCdXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogLTEyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJzsgfVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgaGVpZ2h0OiAyMDBweDsgfVxcblxcbi5hdmF0YXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyYzNlOTtcXG4gIGNvbG9yOiAjMWQ1M2EzOyB9XFxuXFxuLmNhcmRDb250YWluZXIge1xcbiAgbWFyZ2luOiAxNnB4OyB9XFxuXFxuLmNhcmRSb290IHtcXG4gIHBhZGRpbmc6IDE2cHggMCAxNnB4IDAgIWltcG9ydGFudDsgfVxcblxcbi5uZXdPcmRlckJ1dHRvbnNXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLm5ld09yZGVyQnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmJ1dHRvbnNXcmFwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luOiAxcmVtOyB9XFxuXFxuLmNoZWNrb3V0VGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQ1MDsgfVxcblxcbi5jaGVja291dENvbnRyb2xHcm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAxcmVtIDJyZW0gMXJlbSAycmVtOyB9XFxuXFxuLm5vdGlmaWNhdGlvbkNsb3NlIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtOyB9XFxuXFxuLm1hY2Fyb25BdmF0YXIge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IH1cXG5cXG4uZHJpbmtBdmF0YXIge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDQ4MmYgIWltcG9ydGFudDsgfVxcblxcbi5idXR0b25BcHBseVdyYXBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cXG5cXG4ucGFydG5lclNlbGVjdFdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtOyB9XFxuXFxuLmJ1c3ktY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gIG9wYWNpdHk6IDAuODsgfVxcbiAgLmJ1c3ktY29udGFpbmVyIC5idXN5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNDQlO1xcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxOTZiMGVhNzc3MjQ5MzFhZmMzOGFlMzlkYmYwMDYyZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5ZmVhZjIyMWY1NzA3MTU3NzkxNWU1ZTJkMzI5M2I1MS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3OGYwMWUwNGNmMDE1YjJmNzA3N2QxMTcyZTIxMzlmOC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NDQ2MTc3ZmM1N2Q2OWQ3MGQ2OGNkYzg0ZWJkNTFhYS5qcGdcIjsiLCJleHBvcnQgY29uc3QgQ1JFQVRFX0NIRUNLID0gJ0NSRUFURV9DSEVDSyc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0RSSU5LID0gJ0FERF9EUklOSyc7XHJcbmV4cG9ydCBjb25zdCBBRERfREVTU0VSVCA9ICdBRERfREVTU0VSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX0RSSU5LID0gJ0RFTEVURV9EUklOSyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfREVTU0VSVCA9ICdERUxFVEVfREVTU0VSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfVFlQRSA9ICdTRVRfUEFZTUVOVF9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFNFVF9PUkRFUl9UWVBFID0gJ1NFVF9PUkRFUl9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFBST0NFU1NfQ0hFQ0tPVVQgPSAnUFJPQ0VTU19DSEVDS09VVCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNUyA9ICdMT0FEX0lURU1TJztcclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVNfRlVMRklMTEVEID0gJ0xPQURfSVRFTVNfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVNfUkVKRUNURUQgPSAnTE9BRF9JVEVNU19SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0hPV19CVVNZID0gXCJTSE9XX0JVU1lcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQSA9ICdBUFBFTkRfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQV9GVUxGSUxMRUQgPSAnQVBQRU5EX0RBVEFfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBX1JFSkVDVEVEID0gJ0FQUEVORF9EQVRBX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQSA9ICdVUERBVEVfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQV9GVUxGSUxMRUQgPSAnVVBEQVRFX0RBVEFfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBX1JFSkVDVEVEID0gJ1VQREFURV9EQVRBX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfREFUQSA9ICdMT0dfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9MT0cgPSAnQ0xFQVJfTE9HJztcclxuZXhwb3J0IGNvbnN0IENBTkNFTCA9ICdDQU5DRUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMRUFSX0VSUk9SID0gJ0NMRUFSX0VSUk9SJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTEFTVF9JRCA9ICdTRVRfTEFTVF9JRCc7IiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIFBST0NFU1NfQ0hFQ0tPVVQsXHJcbiAgICBBRERfRFJJTkssXHJcbiAgICBBRERfREVTU0VSVCxcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVELFxyXG4gICAgTE9HX0RBVEEsXHJcbiAgICBDTEVBUl9MT0csXHJcbiAgICBDQU5DRUwsXHJcbiAgICBDTEVBUl9FUlJPUixcclxuICAgIERFTEVURV9EUklOSyxcclxuICAgIERFTEVURV9ERVNTRVJULFxyXG4gICAgU0VUX0xBU1RfSURcclxufSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuaW1wb3J0IHsgRHJpbmtzVHlwZSwgRGVzc2VydFR5cGUsIFBheW1lbnQsIE9yZGVyVHlwZSwgQ2hlY2ssXHJcbiAgICBWYWx1ZUlucHV0T3B0aW9uLCBJbnNlcnREYXRhT3B0aW9uLCBWYWx1ZVJlbmRlck9wdGlvbiwgRGF0ZVRpbWVSZW5kZXJPcHRpb24sIERlc3NlcnQsIERyaW5rIH0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IExPR1NfU1BSRUFEU0hFRVRfSUQsIFNQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzRmV0Y2hEYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0c1Jlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmdldCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IFwiUmF3RGVzc2VydHNEYXRhIUE6SFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0cyA9IGRlc3NlcnRzUmVzcG9uc2UucmVzdWx0LnZhbHVlcy5zbGljZSgxKS5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IERlc3NlcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZFswXSxcclxuICAgICAgICAgICAgICAgICAgICB0YXN0ZTogZFsxXSxcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogZFsyXSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBkWzNdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc1Jlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmdldCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IFwiUmF3RHJpbmtzRGF0YSFBOkZcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzID0gZHJpbmtzUmVzcG9uc2UucmVzdWx0LnZhbHVlcy5zbGljZSgxKS5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IERyaW5rID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGRbMV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxhc3REZXNzZXJ0T3JkZXJJZCA9IE1hdGgubWF4KC4uLmRlc3NlcnRzUmVzcG9uc2UucmVzdWx0LnZhbHVlcy5zbGljZSgxKS5tYXAoZCA9PiBkWzddID8gTnVtYmVyKGRbN10pIDogMCkpO1xyXG4gICAgICAgICAgICBsZXQgbGFzdERyaW5rT3JkZXJJZCA9IE1hdGgubWF4KC4uLmRyaW5rc1Jlc3BvbnNlLnJlc3VsdC52YWx1ZXMuc2xpY2UoMSkubWFwKGQgPT4gZFs1XSA/IE51bWJlcihkWzVdKSA6IDApKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFNldExhc3RJZChNYXRoLm1heChsYXN0RGVzc2VydE9yZGVySWQsIGxhc3REcmlua09yZGVySWQpKSk7XHJcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyhbLi4uZGVzc2VydHMsIC4uLmRyaW5rc10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NBcHBlbmREYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZywgcmFuZ2U6IHN0cmluZywgdmFsdWVSYW5nZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgdXBkYXRlZENlbGxzQ291bnQgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudXBkYXRlcy51cGRhdGVkQ2VsbHM7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kU3VjY2Vzcyh0cnVlKSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LLRiyDQstC+0YjQu9C4INCyINGB0LjRgdGC0LXQvNGDLicpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0xvZyA9IGFzeW5jIChtZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgIFttZXNzYWdlLCBkYXRlVGltZS50b1VUQ1N0cmluZygpXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5hcHBlbmQoe1xyXG4gICAgICAgICAgICBzcHJlYWRzaGVldElkOiBMT0dTX1NQUkVBRFNIRUVUX0lELFxyXG4gICAgICAgICAgICByYW5nZTogJ0E6QicsXHJcbiAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVmFsdWVSZW5kZXJPcHRpb246IFZhbHVlUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9WQUxVRVxyXG4gICAgICAgIH0sIHsgdmFsdWVzOiBkYXRhIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzVXBkYXRlRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcsIHZhbHVlUmFuZ2U6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiAnQTY6RDEwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZURhdGVUaW1lUmVuZGVyT3B0aW9uOiBEYXRlVGltZVJlbmRlck9wdGlvbi5GT1JNQVRURURfU1RSSU5HXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG4gICAgICAgICAgICAvL1RPRE86IFByb2Nlc3MgcmVzcG9uc2UgcmVzdWx0XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0LnZhbHVlcztcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNGZXRjaERhdGFTdWNjZXNzKGl0ZW1zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVDaGVjayA9IGNyZWF0ZUFjdGlvbihDUkVBVEVfQ0hFQ0spO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NDaGVja291dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGNoZWNrOiBDaGVjayA9IHN0YXRlLmNoZWNrO1xyXG4gICAgICAgICAgICBjb25zdCB7IGxvZyB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NSYW5nZSA9IFwiUmF3RHJpbmtzRGF0YSFBOkZcIjtcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBjaGVjay5kcmlua3MuZm9yRWFjaChhc3luYyBkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtkLmlkLCBkLnNpemUsIGNoZWNrLnBheW1lbnQsIGNoZWNrLnR5cGUsIGRhdGVUaW1lLCBjaGVjay5pZF07XHJcbiAgICAgICAgICAgICAgICBkcmlua3NEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZHJpbmtzRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKFNQUkVBRFNIRUVUX0lELCBkcmlua3NSYW5nZSwgZHJpbmtzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0c1JhbmdlID0gXCJSYXdEZXNzZXJ0c0RhdGEhQTpIXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5mb3JFYWNoKGFzeW5jIGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gW2QudHlwZSwgZC50YXN0ZSwgZC5xdWFudGl0eSwgZC5zaXplLCBjaGVjay5wYXltZW50LCBjaGVjay50eXBlLCBkYXRlVGltZSwgY2hlY2suaWRdO1xyXG4gICAgICAgICAgICAgICAgZGVzc2VydHNEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZGVzc2VydHNEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEoU1BSRUFEU0hFRVRfSUQsIGRlc3NlcnRzUmFuZ2UsIGRlc3NlcnRzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChDaGVja291dCgpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2cobG9nKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvY2Vzc0xvZyhKU09OLnN0cmluZ2lmeShjaGVjaykpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChDbGVhckxvZygpKTsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNBcHBlbmRFcnJvcmVkKCfQntGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSwg0YfRgtC+INCy0Ysg0LLQvtGI0LvQuCDQsiDRgdC40YHRgtC10LzRgy4nKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrb3V0ID0gY3JlYXRlQWN0aW9uKFBST0NFU1NfQ0hFQ0tPVVQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERyaW5rID0gY3JlYXRlQWN0aW9uKEFERF9EUklOSywgKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gW3R5cGUsIHNpemVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGREZXNzZXJ0ID0gY3JlYXRlQWN0aW9uKEFERF9ERVNTRVJULCAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcikgPT4gW3R5cGUsIHRhc3RlLCBzaXplLCBxdWFudGl0eV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZURyaW5rID0gY3JlYXRlQWN0aW9uKERFTEVURV9EUklOSywgKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gW3R5cGUsIHNpemVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVEZXNzZXJ0ID0gY3JlYXRlQWN0aW9uKERFTEVURV9ERVNTRVJULCAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZykgPT4gW3R5cGUsIHRhc3RlLCBzaXplXSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0UGF5bWVudFR5cGUgPSBjcmVhdGVBY3Rpb24oU0VUX1BBWU1FTlRfVFlQRSwgKHR5cGU6IFBheW1lbnQpID0+IHR5cGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldE9yZGVyVHlwZSA9IGNyZWF0ZUFjdGlvbihTRVRfT1JERVJfVFlQRSwgKHR5cGU6IE9yZGVyVHlwZSkgPT4gdHlwZSk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNIYXNFcnJvcmVkID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVNfUkVKRUNURUQsIChoYXNFcnJvcmVkOiBib29sZWFuKSA9PiBoYXNFcnJvcmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0lzTG9hZGluZyA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TLCAoaXNMb2FkaW5nOiBib29sZWFuKSA9PiBpc0xvYWRpbmcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TX0ZVTEZJTExFRCwgKGl0ZW1zOiBhbnlbXSkgPT4gaXRlbXMpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zQXBwZW5kU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihBUFBFTkRfREFUQV9GVUxGSUxMRUQsIChzdWNjZXNzOiBib29sZWFuKSA9PiBzdWNjZXNzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0FwcGVuZEVycm9yZWQgPSBjcmVhdGVBY3Rpb24oQVBQRU5EX0RBVEFfUkVKRUNURUQsICh0ZXh0OiBzdHJpbmcpID0+IHRleHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dCdXN5ID0gY3JlYXRlQWN0aW9uKFNIT1dfQlVTWSwgKGlzQnVzeTogYm9vbGVhbikgPT4gaXNCdXN5KTtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dEYXRhID0gY3JlYXRlQWN0aW9uKExPR19EQVRBLCAodGV4dDogc3RyaW5nKSA9PiB0ZXh0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGVhckxvZyA9IGNyZWF0ZUFjdGlvbihDTEVBUl9MT0cpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhbmNlbCA9IGNyZWF0ZUFjdGlvbihDQU5DRUwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsZWFyRXJyb3IgPSBjcmVhdGVBY3Rpb24oQ0xFQVJfRVJST1IpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldExhc3RJZCA9IGNyZWF0ZUFjdGlvbihTRVRfTEFTVF9JRCk7IiwiaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL01haW5QYWdlJztcclxuaW1wb3J0IENoZWNrUGFnZSBmcm9tICcuL3BhZ2VzL0NoZWNrUGFnZSc7XHJcbmltcG9ydCBDaGVja291dFBhZ2UgZnJvbSAnLi9wYWdlcy9DaGVja291dFBhZ2UnO1xyXG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4vcGFnZXMvTm90Rm91bmRQYWdlJztcclxuaW1wb3J0IFBhcnRuZXJzUGFnZSBmcm9tICcuL3BhZ2VzL1BhcnRuZXJzUGFnZSc7XHJcbmltcG9ydCBUZXN0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9UZXN0Q29tcG9uZW50JztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICcuL2NvbXBvbmVudHMvQXBwQmFyJztcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e01haW5QYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2snIGNvbXBvbmVudD17Q2hlY2tQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2tPdXQnIGNvbXBvbmVudD17Q2hlY2tvdXRQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvcGFydG5lcnMnIGNvbXBvbmVudD17UGFydG5lcnNQYWdlfSAvPlxyXG5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL3Rlc3QnIGNvbXBvbmVudD17VGVzdENvbXBvbmVudH0gLz5cclxuICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZFBhZ2V9IC8+XHJcbiAgICA8L1N3aXRjaD5cclxuKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwUHJvcHMge1xyXG4gICAgaXNTY3JpcHRMb2FkZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PElBcHBQcm9wcywgSUFwcFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NjcmlwdExvYWRlZCB9ID0gbmV4dFByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JpcHRMb2FkZWQgJiYgIXRoaXMucHJvcHMuaXNTY3JpcHRMb2FkZWQpIHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnY2xpZW50OmF1dGgyJywgdGhpcy5pbml0Q2xpZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICAvLyBjb25zdCBhdXRoMiA9IHdpbmRvd1snZ2FwaSddLmF1dGgyLmluaXQoe1xyXG4gICAgICAgIC8vICAgICBjbGllbnRfaWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAvLyAgICAgc2NvcGU6IFNDT1BFUyxcclxuICAgICAgICAvLyAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgLy8gICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBhdXRoMi5pc1NpZ25lZEluLmxpc3Rlbih0aGlzLnNpZ25pbkNoYW5nZWQpO1xyXG5cclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVNcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5saXN0ZW4odGhpcy5zaWduaW5DaGFuZ2VkKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5pc1NpZ25lZEluLmdldCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbkNoYW5nZWQgPSAoaXNTaWduZWRJbikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBpc1NpZ25lZEluXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXV0aENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNpZ25vdXRDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTaWduZWRJbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd1snZ2FwaSddIHx8ICF3aW5kb3dbJ2dhcGknXS5hdXRoMiB8fCAhd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5nZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPEFwcEJhciB0aXRsZT17J9CT0LvQsNCy0L3QsNGPJ30gaXNTaWduZWRJbj17aXNTaWduZWRJbn0gb25Mb2dpbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gb25Mb2dvdXRDbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgIHtpc1NpZ25lZEluICYmIDxNYWluIC8+fVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBpZD1cImF1dGhvcml6ZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdub25lJyA6ICdibG9jaycgfX0+QXV0aG9yaXplPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5TaWduIE91dDwvYnV0dG9uPiAqL31cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcmlwdExvYWRlcihcclxuICAgICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnXHJcbikoQXBwKTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXJDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ9CU0L7QvNC+0LknLFxyXG4gICAgICAgIHJvdXRlOiAnLydcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgdGl0bGU6ICdUZXN0JyxcclxuICAgIC8vICAgICByb3V0ZTogJy90ZXN0J1xyXG4gICAgLy8gfVxyXG5dO1xyXG5cclxuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJhckNvbXBvbmVudFByb3BzIHtcclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGlzU2lnbmVkSW4/OiBib29sZWFuO1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuXHJcbiAgICBvbkxvZ2luQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25Mb2dvdXRDbGljaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJhckNvbXBvbmVudFN0YXRlIHtcclxuICAgIGFuY2hvckVsPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQmFyIGV4dGVuZHMgQ29tcG9uZW50PElBcHBCYXJDb21wb25lbnRQcm9wcywgSUFwcEJhckNvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG4gICAgICAgIGlmIChjdXJyZW50Um91dGUgIT09IG9wdGlvbi5yb3V0ZSkge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2gob3B0aW9uLnJvdXRlKTtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbCBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlTG9naW5DbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGlzU2lnbmVkSW4sIG9uTG9naW5DbGljaywgb25Mb2dvdXRDbGljayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2lnbmVkSW4pIHtcclxuICAgICAgICAgICAgb25Mb2dvdXRDbGljaygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb25Mb2dpbkNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1lbnUoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhbmNob3JFbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlID0gbG9jYXRpb24uaGFzaC5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYXBwYmFyX21lbnVCdXR0b24nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtb3ducz17b3BlbiA/ICdsb25nLW1lbnUnIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb25nLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBJVEVNX0hFSUdIVCAqIDQuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnMubWFwKG9wdGlvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17b3B0aW9uLnJvdXRlID09PSBjdXJyZW50Um91dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKG9wdGlvbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgaXNTaWduZWRJbiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhcHBiYXJfcm9vdCd9PlxyXG4gICAgICAgICAgICAgICAgPEFwcEJhckNvbXBvbmVudCBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17J2FwcGJhcl9ncm93J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2luQ2xpY2t9Pntpc1NpZ25lZEluID8gJ9CS0YvQudGC0LgnIDogJ9CS0L7QudGC0LgnfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIDwvQXBwQmFyQ29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFwcEJhcik7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgR3JpZExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQnVzeVByb3BzIHtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1c3k6IFJlYWN0LlNGQzxJQnVzeVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImJ1c3ktY29udGFpbmVyXCIgKyAocHJvcHMubG9hZGluZyA/IFwiXCIgOiBcIiBpbnZpc2libGVcIil9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzeVwiPlxyXG4gICAgICAgICAgICA8R3JpZExvYWRlclxyXG4gICAgICAgICAgICAgICAgY29sb3I9eycjZDAwMDZmJ31cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e3Byb3BzLmxvYWRpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWRkRGVzc2VydCwgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERlc3NlcnRUeXBlLCBNYWNhcm9uc0VudW0sIENha2VzRW51bSwgWmVwaHlyRW51bSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRGVzc2VydHNEaWN0LCBNYWNhcm9uc0NvbG9ycywgWmVwaHlyQ29sb3JzIH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgQWRkSWNvbiB9IGZyb20gJ21kaS1yZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcbmNvbnN0IE1JWF9UQVNURV9OQU1FID0gJ9Cd0LDQsdC+0YAnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZERlc3NlcnQ6ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiBkaXNwYXRjaChBZGREZXNzZXJ0KHR5cGUsIHRhc3RlLCBzaXplLCBxdWFudGl0eSkpLFxyXG4gICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSlcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVzc2VydHNDb21wb25lbnRQcm9wcyB7XHJcbiAgYWRkRGVzc2VydD86ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGhhbmRsZUNsb3NlPzogKCkgPT4gdm9pZDtcclxuICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVzc2VydHNDb21wb25lbnRTdGF0ZSB7XHJcbiAgZGVzc2VydFR5cGU/OiBEZXNzZXJ0VHlwZTtcclxuICBkZXNzZXJ0VGFzdGU/OiBzdHJpbmc7XHJcbiAgZGVzc2VydFF1YW50aXRpZXM/OiB7IFtpZDogc3RyaW5nXTogbnVtYmVyOyB9O1xyXG59XHJcblxyXG5jbGFzcyBEZXNzZXJ0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRGVzc2VydHNDb21wb25lbnRQcm9wcywgSURlc3NlcnRzQ29tcG9uZW50U3RhdGU+e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGVzc2VydFR5cGU6IG51bGwsXHJcbiAgICAgIGRlc3NlcnRUYXN0ZTogbnVsbCxcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXM6IHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmNsb3NlJyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0U2VsZWN0ID0gKGRlc3NlcnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0VHlwZTogZGVzc2VydFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0U2VsZWN0ZWQtPicgKyBkZXNzZXJ0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRUYXN0ZVNlbGVjdCA9IGFzeW5jICh0YXN0ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoZGVzc2VydFR5cGUgPT09IERlc3NlcnRUeXBlLkNha2UpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGVzc2VydFRhc3RlOiB0YXN0ZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFRhc3RlU2VsZWN0ZWQtPicgKyB0YXN0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZURlc3NlcnRJbmNyZWFzZSh0YXN0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0TWl4U2VsZWN0ID0gYXN5bmMgKHF0eSkgPT4ge1xyXG4gICAgdGhpcy5oYW5kbGVEZXNzZXJ0SW5jcmVhc2UoTUlYX1RBU1RFX05BTUUsIHF0eSk7XHJcbiAgICAvLyBhd2FpdCB0aGlzLnByb3BzLmFkZERlc3NlcnQoZGVzc2VydFR5cGUsIE1JWF9UQVNURV9OQU1FLCBudWxsLCBxdHkpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+aGFuZGxlRGVzc2VydE1peFNlbGVjdC0+JyArIHF0eSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0U2l6ZU9yUXVhbnRpdHlTZWxlY3QgPSBhc3luYyAoc2l6ZU9yUXR5KSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKGRlc3NlcnRUeXBlID09PSBEZXNzZXJ0VHlwZS5DYWtlKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBzaXplT3JRdHksIDEpO1xyXG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRTaXplU2VsZWN0ZWQtPicgKyBzaXplT3JRdHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIG51bGwsIHNpemVPclF0eSk7XHJcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFF1YW50aXR5U2VsZWN0ZWQtPicgKyBzaXplT3JRdHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmluaXNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFF1YW50aXRpZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzc2VydFF1YW50aXRpZXMpIHtcclxuICAgICAgY29uc3QgZGVzc2VydFRhc3RlID0ga2V5LnNwbGl0KCcvJylbMV07XHJcbiAgICAgIGNvbnN0IHF0eSA9IGRlc3NlcnRRdWFudGl0aWVzW2tleV07XHJcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBudWxsLCBxdHkgfHwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+aGFuZGxlRmluaXNoJyk7XHJcbiAgfVxyXG5cclxuICBnZXRJZChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlKSB7XHJcbiAgICByZXR1cm4gYCR7ZGVzc2VydFR5cGV9LyR7ZGVzc2VydFRhc3RlfWA7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0SW5jcmVhc2UgPSAodGFzdGUsIHF0eSA9IDEpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgdGFzdGUpO1xyXG4gICAgaWYgKCFkZXNzZXJ0UXVhbnRpdGllc1tpZF0pIHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNbaWRdID0gcXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNbaWRdICs9IHF0eTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFF0eUluY3JlYXNlLT4nICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgY291bnRUb3RhbERlc3NlcnRRdWFudGl0eSgpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzc2VydFF1YW50aXRpZXMpIHtcclxuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGRlc3NlcnRUeXBlKSkge1xyXG4gICAgICAgIHJlc3VsdCArPSBkZXNzZXJ0UXVhbnRpdGllc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0QXJyYXlGcm9tRW51bShlbjogYW55KSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW4pO1xyXG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgdmFsdWU6IGVuW2RdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGVzc2VydHMoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0S2V5cyA9IE9iamVjdC5rZXlzKERlc3NlcnRUeXBlKTtcclxuICAgIGNvbnN0IGRlc3NlcnRzID0gZGVzc2VydEtleXMubWFwKGQgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBkLFxyXG4gICAgICAgIHZhbHVlOiBEZXNzZXJ0VHlwZVtkXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdtYWNhcm9uQXZhdGFyJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZGQ3M2UyJyB9fT5cclxuICAgICAgICAgICAgICAgIHtkLnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRGVzc2VydFRhc3RlcygpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRRdWFudGl0aWVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGxldCBkZXNzZXJ0VGFzdGVzO1xyXG4gICAgbGV0IGV4dHJhT3B0aW9ucyA9IFtdO1xyXG4gICAgc3dpdGNoIChkZXNzZXJ0VHlwZSkge1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLkNha2U6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShDYWtlc0VudW0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLk1hY2Fyb246XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShNYWNhcm9uc0VudW0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiA2LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgNiDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogMTIsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCAxMiDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogMjQsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCAyNCDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5aZXBoeXI6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShaZXBoeXJFbnVtKTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogOCxcclxuICAgICAgICAgIHRpdGxlOiAn0J3QsNCx0L7RgCDQvdCwIDgg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXh0cmFPcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IDE2LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgMTYg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAge2Rlc3NlcnRUeXBlICE9PSBEZXNzZXJ0VHlwZS5DYWtlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQXBwbHlXcmFwZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdGl0bGU9XCJDaGVjayBPdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUZpbmlzaH0+XHJcbiAgICAgICAgICAgINCf0YDQuNC80LXQvdC40YLRjFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRlc3NlcnRUYXN0ZXMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nbWFjYXJvbkF2YXRhcicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBkZXNzZXJ0VHlwZSA9PT0gRGVzc2VydFR5cGUuTWFjYXJvbiA/IE1hY2Fyb25zQ29sb3JzW2QudmFsdWVdIDogWmVwaHlyQ29sb3JzW2QudmFsdWVdIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZC52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlICsgKGRlc3NlcnRUeXBlICE9PSBEZXNzZXJ0VHlwZS5DYWtlID8gYCgke2Rlc3NlcnRRdWFudGl0aWVzW3RoaXMuZ2V0SWQoZGVzc2VydFR5cGUsIGQudmFsdWUpXSB8fCAwfSlgIDogJycpfSAvPlxyXG4gICAgICAgICAgICAgIHtkZXNzZXJ0VHlwZSAhPT0gRGVzc2VydFR5cGUuQ2FrZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQWRkXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0SW5jcmVhc2UoZC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV4dHJhT3B0aW9ucy5tYXAobyA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0TWl4U2VsZWN0KG8udmFsdWUpfSBrZXk9e28udmFsdWV9ID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nbWFjYXJvbkF2YXRhcicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2RkNzNlMicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtvLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2Ake28udGl0bGV9KCR7ZGVzc2VydFF1YW50aXRpZXNbdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgTUlYX1RBU1RFX05BTUUpXSB8fCAwfSlgfSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXJEZXNzZXJ0U2l6ZSgpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBkZXNzZXJ0U2l6ZXMgPSBEZXNzZXJ0c0RpY3RbZGVzc2VydFR5cGVdO1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydFNpemVzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2l6ZU9yUXVhbnRpdHlTZWxlY3QoZCl9IGtleT17ZH0gPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2R9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuIGZ1bGxTY3JlZW4gPlxyXG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgeyFkZXNzZXJ0VHlwZSA/ICfQktGL0LHQtdGA0LjRgtC1INC00LXRgdGB0LXRgNGCJyA6ICghZGVzc2VydFRhc3RlID8gYNCS0YvQsdC10YDQuNGC0LUg0LLQutGD0YEgKCR7dGhpcy5jb3VudFRvdGFsRGVzc2VydFF1YW50aXR5KCl9KWAgOiAn0JLRi9Cx0LXRgNC40YLQtSDRgNCw0LfQvNC10YAnKX1cclxuICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgeyFkZXNzZXJ0VHlwZSA/IHRoaXMucmVuZGVyRGVzc2VydHMoKSA6ICghZGVzc2VydFRhc3RlID8gdGhpcy5yZW5kZXJEZXNzZXJ0VGFzdGVzKCkgOiB0aGlzLnJlbmRlckRlc3NlcnRTaXplKCkpfVxyXG4gICAgPC9EaWFsb2c+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERlc3NlcnRzQ29tcG9uZW50KSlcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFkZERyaW5rLCBMb2dEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IHsgRHJpbmtzVHlwZSwgRHJpbmsgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IERyaW5rc0RpY3QgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5pbXBvcnQgeyBBZGRJY29uIH0gZnJvbSAnbWRpLXJlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZERyaW5rOiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChBZGREcmluayh0eXBlLCBzaXplKSksXHJcbiAgICAgICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEcmlua3NDb21wb25lbnRQcm9wcyB7XHJcbiAgICBhZGREcmluaz86ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDbG9zZT86ICgpID0+IHZvaWQ7XHJcbiAgICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJpbmtzQ29tcG9uZW50U3RhdGUge1xyXG4gICAgZHJpbmtUeXBlPzogRHJpbmtzVHlwZTtcclxuICAgIGRyaW5rU2l6ZT86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgRHJpbmtzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElEcmlua3NDb21wb25lbnRQcm9wcywgSURyaW5rc0NvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkcmlua1R5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIGRyaW5rU2l6ZTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkcmlua3MtPmNsb3NlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJpbmtTZWxlY3QgPSBhc3luYyAoZHJpbmspID0+IHtcclxuICAgICAgICBjb25zdCBkcmlua1NpemVzID0gRHJpbmtzRGljdFtkcmlua107XHJcbiAgICAgICAgaWYgKGRyaW5rU2l6ZXMgJiYgZHJpbmtTaXplcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkcmlua1R5cGU6IGRyaW5rLFxyXG4gICAgICAgICAgICAgICAgZHJpbmtTaXplOiBkcmlua1NpemVzWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREcmluayhkcmluaywgZHJpbmtTaXplc1swXSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKGBkcmlua3MtPmRyaW5rU2VsZWN0ZWQtPiR7ZHJpbmt9LT5kcmlua1NpemVTZWxlY3RlZC0+JHtkcmlua1NpemVzWzBdfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZHJpbmtUeXBlOiBkcmlua1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkcmlua3MtPmRyaW5rU2VsZWN0ZWQtPicgKyBkcmluayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyaW5rU2l6ZVNlbGVjdCA9IGFzeW5jIChkcmlua1NpemUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZHJpbmtTaXplXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRHJpbmsoZHJpbmtUeXBlLCBkcmlua1NpemUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2RyaW5rcy0+ZHJpbmtTaXplU2VsZWN0ZWQtPicgKyBkcmlua1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRyaW5rcygpIHtcclxuICAgICAgICBjb25zdCBkcmlua0tleXMgPSBPYmplY3Qua2V5cyhEcmlua3NUeXBlKTtcclxuICAgICAgICBjb25zdCBkcmlua3MgPSBkcmlua0tleXMubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogRHJpbmtzVHlwZVtkXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAge2RyaW5rcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2RyaW5rQXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZC52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJEcmlua1NpemVzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGRyaW5rU2l6ZXMgPSBEcmlua3NEaWN0W2RyaW5rVHlwZV07XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtkcmlua1NpemVzLm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRHJpbmtTaXplU2VsZWN0KGQpfSBrZXk9e2R9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2RyaW5rQXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkcmlua1R5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuIGZ1bGxTY3JlZW4gPlxyXG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+eyFkcmlua1R5cGUgPyAn0JLRi9Cx0LXRgNC40YLQtSDQvdCw0L/QuNGC0L7QuicgOiAn0JLRi9Cx0LXRgNC40YLQtSDRgNCw0LfQvNC10YAnfTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgIHshZHJpbmtUeXBlID8gdGhpcy5yZW5kZXJEcmlua3MoKSA6IHRoaXMucmVuZGVyRHJpbmtTaXplcygpfVxyXG4gICAgICAgIDwvRGlhbG9nPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERyaW5rc0NvbXBvbmVudCkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhpc3Rvcnk6IHN0YXRlLmhpc3RvcnlcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhpc3RvcnlDb21wb25lbnRQcm9wcyB7XHJcbiAgICBoaXN0b3J5PzogQXJyYXk8Q2hlY2s+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIaXN0b3J5Q29tcG9uZW50U3RhdGUge1xyXG59XHJcblxyXG5jbGFzcyBIaXN0b3J5Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElIaXN0b3J5Q29tcG9uZW50UHJvcHMsIElIaXN0b3J5Q29tcG9uZW50U3RhdGU+e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiPlxyXG4gICAgICAgICAgICB7aGlzdG9yeS5tYXAoaCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGtleT17aC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtg0KfQtdC6ICMke2guaWR9LCDQtNC10YHRgdC10YDRgtGLOiAke2guZGVzc2VydHMubGVuZ3RofSwg0L3QsNC/0LjRgtC60Lg6ICR7aC5kcmlua3MubGVuZ3RofSwg0L7Qv9C70LDRgtCwOiAke2gucGF5bWVudH0sINGC0LjQvyDQt9Cw0LrQsNC30LA6ICR7aC50eXBlfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIaXN0b3J5Q29tcG9uZW50KTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuanMnO1xyXG5cclxuY29uc3QgTGFyZ2VCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2xhc3NlcywgY29tcG9uZW50LCBvbkNsaWNrLCB0aXRsZSwgaW1hZ2VVcmwgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgICAgICBmb2N1c1JpcHBsZVxyXG4gICAgICAgICAgICAgICAga2V5PXsnbWFpbid9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzAnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJoZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMYXJnZUJ1dHRvbik7IiwiZXhwb3J0IGRlZmF1bHQgdGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICAvLyBtaW5XaWR0aDogMzAwLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUgIWltcG9ydGFudCcsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjpob3ZlciwgJiRmb2N1c1Zpc2libGUnOiB7XHJcbiAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICAgICAgJyYgJGltYWdlQmFja2Ryb3AnOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJiAkaW1hZ2VNYXJrZWQnOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJiAkaW1hZ2VUaXRsZSc6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCBjdXJyZW50Q29sb3InLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9jdXNWaXNpYmxlOiB7fSxcclxuICAgIGltYWdlQnV0dG9uOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICAgIGltYWdlU3JjOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciA0MCUnLFxyXG4gICAgfSxcclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgICBvcGFjaXR5OiAwLjQsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VUaXRsZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiA0fXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICsgNn1weGAsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VNYXJrZWQ6IHtcclxuICAgICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgICAgd2lkdGg6IDE4LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgYm90dG9tOiAtMixcclxuICAgICAgICBsZWZ0OiAnY2FsYyg1MCUgLSA5cHgpJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknKSxcclxuICAgIH1cclxufSk7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBDaGVjaywgRGVzc2VydCwgRHJpbmssIERlc3NlcnRUeXBlLCBEcmlua3NUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgRHJpbmtzQ29tcG9uZW50IGZyb20gJy4vRHJpbmtzQ29tcG9uZW50JztcclxuaW1wb3J0IERlc3NlcnRzQ29tcG9uZW50IGZyb20gJy4vRGVzc2VydHNDb21wb25lbnQnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IExhcmdlQnV0dG9uIGZyb20gJy4vTGFyZ2VCdXR0b24nO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCB7IERlbGV0ZURlc3NlcnQsIERlbGV0ZURyaW5rIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBkZXNzZXJ0c0ltYWdlID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9kZXNzZXJ0c19pY29uLmpwZycpO1xyXG5jb25zdCBkcmlua3NJbWFnZSA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9pbWFnZXMvZHJpbmtzX2ljb24uanBnJyk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlbGV0ZURlc3NlcnQ6ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChEZWxldGVEZXNzZXJ0KHR5cGUsIHRhc3RlLCBzaXplKSksXHJcbiAgICAgICAgZGVsZXRlRHJpbms6ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IGRpc3BhdGNoKERlbGV0ZURyaW5rKHR5cGUsIHNpemUpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5ld09yZGVyQ29tcG9uZW50UHJvcHMge1xyXG4gICAgY2hlY2s/OiBDaGVjaztcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcblxyXG4gICAgZGVsZXRlRGVzc2VydD86ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgZGVsZXRlRHJpbms/OiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXdPcmRlckNvbXBvbmVudFN0YXRlIHtcclxuICAgIHNob3dEcmlua3M/OiBib29sZWFuO1xyXG4gICAgc2hvd0Rlc3NlcnRzPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgTmV3T3JkZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SU5ld09yZGVyQ29tcG9uZW50UHJvcHMsIElOZXdPcmRlckNvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93RHJpbmtzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0Rlc3NlcnRzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGREcmlua0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RHJpbmtzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhZGREZXNzZXJ0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEZXNzZXJ0czogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBoaXN0b3J5LnB1c2goJy9jaGVja091dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURlbGV0ZURyaW5rID0gKGRyaW5rOiBEcmluaykgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlRHJpbmsoZHJpbmsuaWQsIGRyaW5rLnNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURlbGV0ZURlc3NlcnQgPSAoZGVzc2VydDogRGVzc2VydCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlRGVzc2VydChkZXNzZXJ0LnR5cGUsIGRlc3NlcnQudGFzdGUsIGRlc3NlcnQuc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2hlY2tDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAgICAgICAge2NoZWNrLmRyaW5rcy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGluc2V0IHByaW1hcnk9e2Ake2QuaWR9IC0gJHtkLnNpemV9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRGVsZXRlXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGVEcmluayhkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7Y2hlY2suZGVzc2VydHMubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtgJHtkLnR5cGV9IC0gJHtkLnRhc3RlfSAtICR7ZC5xdWFudGl0eX0ke2Quc2l6ZSA/ICgnIC0gJyArIGQuc2l6ZSkgOiAnJ31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJEZWxldGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZURlc3NlcnQoZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNob3dEcmlua3MsIHNob3dEZXNzZXJ0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAg0J/QvtC20LDQu9GD0LnRgdGC0LAsINGB0L7Qt9C00LDQudGC0LUg0YHQvdCw0YfQsNC70LAg0YfQtdC6XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImhlYWRsaW5lXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgINCd0L7QstGL0Lkg0LfQsNC60LDQt1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHtg0KfQtdC6ICMke2NoZWNrLmlkfWB9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoZWNrQ29udGVudCgpfVxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3T3JkZXJCdXR0b25zV3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3T3JkZXJCdXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9CU0JXQodCh0JXQoNCi0KsnfSBpbWFnZVVybD17ZGVzc2VydHNJbWFnZX0gb25DbGljaz17dGhpcy5hZGREZXNzZXJ0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdPcmRlckJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhcmdlQnV0dG9uIHRpdGxlPXsn0J3QkNCf0JjQotCa0JgnfSBpbWFnZVVybD17ZHJpbmtzSW1hZ2V9IG9uQ2xpY2s9e3RoaXMuYWRkRHJpbmtDbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydidXR0b25zV3JhcGVyJ30+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NoZWNrLmRlc3NlcnRzLmxlbmd0aCA9PT0gMCAmJiBjaGVjay5kcmlua3MubGVuZ3RoID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRDbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDQn9GA0L7QtNC+0LvQttC40YLRjFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93RHJpbmtzICYmIDxEcmlua3NDb21wb25lbnQgaGFuZGxlQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93RHJpbmtzOiBmYWxzZSB9KX0gLz59XHJcbiAgICAgICAgICAgIHtzaG93RGVzc2VydHMgJiYgPERlc3NlcnRzQ29tcG9uZW50IGhhbmRsZUNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0Rlc3NlcnRzOiBmYWxzZSB9KX0gLz59XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoTmV3T3JkZXJDb21wb25lbnQpKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBDaGVjaywgRGVzc2VydFR5cGUsIERyaW5rc1R5cGUsIFBhcnRuZXJzRW51bSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgRGVsZXRlRGVzc2VydCwgRGVsZXRlRHJpbmsgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0bmVyc0NvbXBvbmVudFByb3BzIHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFydG5lcnNDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBwYXJ0bmVyPzogc3RyaW5nO1xyXG4gICAgbWFjYXJvbnNRdHk/OiBudW1iZXI7XHJcbiAgICB6ZXBoeXJRdHk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIFBhcnRuZXJzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElQYXJ0bmVyc0NvbXBvbmVudFByb3BzLCBJUGFydG5lcnNDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFydG5lcjogJycsXHJcbiAgICAgICAgICAgIG1hY2Fyb25zUXR5OiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHplcGh5clF0eTogdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFycmF5RnJvbUVudW0oZW46IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbik7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBlbltkXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBhcnRuZXJTZWxlY3QgPSAoZXYpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJ0bmVyID0gZXYudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXJ0bmVyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1hY2Fyb25zUXR5Q2hhbmdlID0gKGV2KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1hY2Fyb25zUXR5OiBldi50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVaZXBoeXJRdHlDaGFuZ2UgPSAoZXYpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgemVwaHlyUXR5OiBldi50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIC8vIGhpc3RvcnkucHVzaCgnL2NoZWNrT3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFydG5lciwgbWFjYXJvbnNRdHksIHplcGh5clF0eSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBwYXJ0bmVycyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShQYXJ0bmVyc0VudW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICDQntC/0YLQvtCy0YvQuSDQt9Cw0LrQsNC3XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT0ncGFydG5lclNlbGVjdFdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInBhcnRuZXItc2VsZWN0XCI+0JrQvtGE0LXQudC90Y88L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFydG5lclNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJ0bmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdwYXJ0bmVyLXNlbGVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGVtPk5vbmU8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0bmVycy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17cC5pZH0gdmFsdWU9e3AudmFsdWV9PntwLnZhbHVlfTwvTWVudUl0ZW0+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCc0LDQutCw0YDQvtC90YtcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e21hY2Fyb25zUXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTWFjYXJvbnNRdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFydG5lcn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LzQsNC60LDRgNC+0L3RgVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JfQtdGE0LjRgFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17emVwaHlyUXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWmVwaHlyUXR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC30LXRhNC40YDQsFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYnV0dG9uc1dyYXBlcid9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFydG5lcn1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0JPQvtGC0L7QstC+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoUGFydG5lcnNDb21wb25lbnQpKTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFByb2Nlc3NGZXRjaERhdGEsIFByb2Nlc3NBcHBlbmREYXRhLCBQcm9jZXNzVXBkYXRlRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgc2NyaXB0TG9hZGVyIGZyb20gJ3JlYWN0LWFzeW5jLXNjcmlwdC1sb2FkZXInO1xyXG5pbXBvcnQgeyBESVNDT1ZFUllfRE9DUywgU0NPUEVTLCBDTElFTlRfSUQsIEFQSV9LRVksIFRFU1RfU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcyxcclxuICAgICAgICBoYXNFcnJvcmVkOiBzdGF0ZS5oYXNFcnJvcmVkLFxyXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxyXG4gICAgICAgIGxhYmVsOiBzdGF0ZS5sYWJlbFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZXRjaERhdGE6ICh1cmwpID0+IGRpc3BhdGNoKFByb2Nlc3NGZXRjaERhdGEodXJsKSksXHJcbiAgICAgICAgYXBwZW5kRGF0YTogKHVybCwgcmFuZ2UsIGRhdGEpID0+IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKHVybCwgcmFuZ2UsIGRhdGEpKSxcclxuICAgICAgICB1cGRhdGVEYXRhOiAodXJsLCBkYXRhKSA9PiBkaXNwYXRjaChQcm9jZXNzVXBkYXRlRGF0YSh1cmwsIGRhdGEpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RDb21wb25lbnRQcm9wcyB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIGl0ZW1zPzogYW55O1xyXG4gICAgaGFzRXJyb3JlZD86IGJvb2xlYW47XHJcbiAgICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG5cclxuICAgIGlzU2NyaXB0TG9hZGVkPzogYm9vbGVhbjtcclxuICAgIGlzU2NyaXB0TG9hZFN1Y2NlZWQ/OiBib29sZWFuO1xyXG5cclxuICAgIGZldGNoRGF0YT86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGFwcGVuZERhdGE/OiAodXJsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB2b2lkO1xyXG4gICAgdXBkYXRlRGF0YT86ICh1cmw6IHN0cmluZywgZGF0YTogYW55W10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgVGVzdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJVGVzdENvbXBvbmVudFByb3BzLCBJVGVzdENvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUF1dGhDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTaWdub3V0Q2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBcHBlbmRDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbXCJJdGVtMVwiLCBcIlhMXCIsIFwiMVwiLCBcIjBcIiwgZGF0ZVRpbWUudG9VVENTdHJpbmcoKV1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gXCJSYXdEYXRhIUE6RVwiO1xyXG4gICAgICAgIHRoaXMucHJvcHMuYXBwZW5kRGF0YShURVNUX1NQUkVBRFNIRUVUX0lELCByYW5nZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbXCJJdGVtMVwiLCBcIkNvc3RcIiwgXCJTdG9ja2VkXCIsIFwiU2hpcCBEYXRlXCJdLFxyXG4gICAgICAgICAgICBbXCJXaGVlbDFcIiwgXCIkMjAuNTBcIiwgXCI0XCIsIFwiMy8xLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkRvb3IxXCIsIFwiJDE1XCIsIFwiMlwiLCBcIjMvMTUvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiRW5naW5lMVwiLCBcIiQxMDBcIiwgXCIxXCIsIFwiMzAvMjAvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiVG90YWxzMVwiLCBcIj1TVU0oQjI6QjQpXCIsIFwiPVNVTShDMjpDNClcIiwgXCI9TUFYKEQyOkQ0KVwiXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEYXRhKFRFU1RfU1BSRUFEU0hFRVRfSUQsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NjcmlwdExvYWRlZCB9ID0gbmV4dFByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JpcHRMb2FkZWQgJiYgIXRoaXMucHJvcHMuaXNTY3JpcHRMb2FkZWQpIHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnY2xpZW50OmF1dGgyJywgdGhpcy5pbml0Q2xpZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVNcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaERhdGEoVEVTVF9TUFJFQURTSEVFVF9JRCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaERhdGEoJ2h0dHA6Ly81ODI2ZWQ5NjM5MDBkNjEyMDAwMTM4YmQubW9ja2FwaS5pby9pdGVtcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGxhYmVsLCBoYXNFcnJvcmVkLCBpc0xvYWRpbmcsIGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICBpZiAoaGFzRXJyb3JlZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8cD5Tb3JyeSEgVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGl0ZW1zPC9wPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8cD5Mb2FkaW5n4oCmPC9wPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtWzBdICsgaXRlbVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICB7cmVzdWx0fVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXBwZW5kQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PkFwcGVuZCBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlVwZGF0ZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYXV0aG9yaXplX2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXV0aENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ25vbmUnIDogJ2Jsb2NrJyB9fT5BdXRob3JpemU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNpZ25vdXRfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlNpZ24gT3V0PC9idXR0b24+XHJcbiAgICAgICAgPC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY3JpcHRMb2FkZXIoXHJcbiAgICAnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzJ1xyXG4pKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlc3RDb21wb25lbnQpKVxyXG4iLCJleHBvcnQgY29uc3QgRElTQ09WRVJZX0RPQ1MgPSBbXCJodHRwczovL3NoZWV0cy5nb29nbGVhcGlzLmNvbS8kZGlzY292ZXJ5L3Jlc3Q/dmVyc2lvbj12NFwiXTtcclxuZXhwb3J0IGNvbnN0IFNDT1BFUyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHNcIjtcclxuZXhwb3J0IGNvbnN0IENMSUVOVF9JRCA9ICc4NDI0MTcxOTg3NjctN2s0MnB0OWVjZ3R1NWY3b29wbmcxb3F1M2E3OWk1aTkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5leHBvcnQgY29uc3QgQVBJX0tFWSA9ICdBSXphU3lBbEk1aThPT3R3OGFFRU1TNDhFOXBvdUVwdHE4dEVnMk0nO1xyXG5leHBvcnQgY29uc3QgVEVTVF9TUFJFQURTSEVFVF9JRCA9ICcxT2JNaDg3ZE5taXpYYmRXa0g5VGlxZnJDZkFwa19ycXhQR3VRX3pOZ0pJTSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HU19TUFJFQURTSEVFVF9JRCA9ICcxTlBZb1Y5WXM1MnpmOVZfTmtsUTVKZFhoanBwQkxlMGRDOVQ0MzNaWTdQOCc7XHJcbmV4cG9ydCBjb25zdCBTUFJFQURTSEVFVF9JRCA9ICcxVUJ1RXdxVXlCSXZ2WTFpaG1FcDloYjFqOG00SkNwVGwtYThtSjZSalVWdyc7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcclxucm9vdC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxSb3V0ZXIgPlxyXG4gICAgICAgICAgICA8QXBwIC8+XHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICA8L1Byb3ZpZGVyPixcclxuICAgIHJvb3RcclxuKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IE5ld09yZGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3T3JkZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tQYWdlUHJvcHMge1xyXG59XHJcblxyXG5jbGFzcyBDaGVja1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SUNoZWNrUGFnZVByb3BzLCBhbnk+e1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVyJ30gcmFpc2VkPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD4gICAgICAgICAgXHJcbiAgICAgICAgICA8TmV3T3JkZXJDb21wb25lbnQgLz5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gIChDaGVja1BhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgUGF5bWVudCwgT3JkZXJUeXBlLCBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgUHJvY2Vzc0NoZWNrb3V0LCBTZXRQYXltZW50VHlwZSwgU2V0T3JkZXJUeXBlLCBMb2dEYXRhLCBDYW5jZWwgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrOiBzdGF0ZS5jaGVja1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoYW5kbGVDaGVja291dDogKCkgPT4gZGlzcGF0Y2goUHJvY2Vzc0NoZWNrb3V0KCkpLFxyXG4gICAgICAgIHNldFBheW1lbnRUeXBlOiAodHlwZTogUGF5bWVudCkgPT4gZGlzcGF0Y2goU2V0UGF5bWVudFR5cGUodHlwZSkpLFxyXG4gICAgICAgIHNldE9yZGVyVHlwZTogKHR5cGU6IE9yZGVyVHlwZSkgPT4gZGlzcGF0Y2goU2V0T3JkZXJUeXBlKHR5cGUpKSxcclxuICAgICAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKSxcclxuICAgICAgICBoYW5kbGVDYW5jZWw6ICgpID0+IGRpc3BhdGNoKENhbmNlbCgpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrb3V0UGFnZVByb3BzIHtcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcbiAgICBjaGVjaz86IENoZWNrO1xyXG5cclxuICAgIHNldFBheW1lbnRUeXBlPzogKHR5cGU6IFBheW1lbnQpID0+IHZvaWQ7XHJcbiAgICBzZXRPcmRlclR5cGU/OiAodHlwZTogT3JkZXJUeXBlKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2hlY2tvdXQ/OiAoKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2FuY2VsPzogKCkgPT4gdm9pZDtcclxuICAgIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jbGFzcyBDaGVja291dFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SUNoZWNrb3V0UGFnZVByb3BzLCBhbnk+e1xyXG4gICAgaGFuZGxlQ2hlY2tvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDaGVja291dCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPmNoZWNrb3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+Y2FuY2VsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NoZWNrJyk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPmJhY2snKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQYXltZW50VHlwZUNoYW5nZSA9ICh0eXBlOiBQYXltZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQYXltZW50VHlwZSh0eXBlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+cGF5bWVudFR5cGVDaGFuZ2VkLT4nICsgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3JkZXJUeXBlQ2hhbmdlID0gKHR5cGU6IE9yZGVyVHlwZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0T3JkZXJUeXBlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5vcmRlclR5cGVDaGFuZ2VkLT4nICsgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICDQn9C+0LbQsNC70YPQudGB0YLQsCwg0YHQvtC30LTQsNC50YLQtSDRgdC90LDRh9Cw0LvQsCDRh9C10LpcclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0YLRgNCw0L3QuNGG0LAg0LLRi9Cx0L7RgNCwINC/0LDRgNCw0LzQtdGC0YDQvtCyINGH0LXQutCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dENvbnRyb2xHcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQotC40L8g0L/Qu9Cw0YLQtdC20LA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2sucGF5bWVudCA9PT0gUGF5bWVudC5DYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVQYXltZW50VHlwZUNoYW5nZShQYXltZW50LkNhcmQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17UGF5bWVudC5DYXJkLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JrQsNGA0YLQsFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2sucGF5bWVudCA9PT0gUGF5bWVudC5DYXNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVQYXltZW50VHlwZUNoYW5nZShQYXltZW50LkNhc2gpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17UGF5bWVudC5DYXNoLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J3QsNC70LjRh9C90YvQtVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0Q29udHJvbEdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCi0LjQvyDQt9Cw0LrQsNC30LA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2sudHlwZSA9PT0gT3JkZXJUeXBlLlByZU9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVPcmRlclR5cGVDaGFuZ2UoT3JkZXJUeXBlLlByZU9yZGVyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09yZGVyVHlwZS5QcmVPcmRlci50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCf0YDQtdC00LfQsNC60LDQt1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2sudHlwZSA9PT0gT3JkZXJUeXBlLlNob3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuU2hvcCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtPcmRlclR5cGUuU2hvcC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCS0LjRgtGA0LjQvdCwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYnV0dG9uc1dyYXBlcid9PiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIHRpdGxlPVwiQ2FuY2VsXCIgb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cImRlZmF1bHRcIiB0aXRsZT1cIkJhY2tcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNC30LDQtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdGl0bGU9XCJDaGVjayBPdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQvtC00L7Qu9C20LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDaGVja291dFBhZ2UpKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IENyZWF0ZUNoZWNrLCBMb2dEYXRhLCBDbGVhckVycm9yLCBQcm9jZXNzRmV0Y2hEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgTGFyZ2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9MYXJnZUJ1dHRvbic7XHJcbmltcG9ydCBIaXN0b3J5Q29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvSGlzdG9yeUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1c3kgfSBmcm9tICcuLi9jb21wb25lbnRzL0J1c3knO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCB7IFNQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IGltYWdlVXJsID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9tYWluX2ljb24uanBnJyk7XHJcbmNvbnN0IHBhcnRuZXJVcmwgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL3BhcnRuZXJzX2ljb24uanBnJyk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeSxcclxuICAgIGVycm9yTWVzc2FnZTogc3RhdGUuZXJyb3JNZXNzYWdlLFxyXG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmdcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWF0ZUNoZWNrOiAoKSA9PiBkaXNwYXRjaChDcmVhdGVDaGVjaygpKSxcclxuICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpLFxyXG4gICAgY2xlYXJFcnJvcjogKCkgPT4gZGlzcGF0Y2goQ2xlYXJFcnJvcigpKSxcclxuICAgIGZldGNoRGF0YTogKHVybCkgPT4gZGlzcGF0Y2goUHJvY2Vzc0ZldGNoRGF0YSh1cmwpKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBDa2Vja0xpbmsgPSBwcm9wcyA9PiA8TGluayB0bz1cIi9jaGVja1wiIHsuLi5wcm9wc30gLz47XHJcbmNvbnN0IFBhcnRuZXJzTGluayA9IHByb3BzID0+IDxMaW5rIHRvPVwiL3BhcnRuZXJzXCIgey4uLnByb3BzfSAvPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1haW5QYWdlUHJvcHMge1xyXG4gIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG4gIGlzTG9hZGluZz86IGJvb2xlYW47XHJcblxyXG4gIGNyZWF0ZUNoZWNrPzogKCkgPT4gdm9pZDtcclxuICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxuICBjbGVhckVycm9yPzogKCkgPT4gdm9pZDtcclxuICBmZXRjaERhdGE/OiAodXJsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIE1haW5QYWdlIGV4dGVuZHMgQ29tcG9uZW50PElNYWluUGFnZVByb3BzLCBhbnk+e1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5mZXRjaERhdGEoU1BSRUFEU0hFRVRfSUQpO1xyXG4gIH1cclxuXHJcbiAgb25OZXdDaGVja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5jcmVhdGVDaGVjaygpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdtYWluUGFnZS0+bmV3Q2hlY2snKTtcclxuICB9XHJcblxyXG4gIG9uTmV3UGFydG5lcnNDaGVja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5jcmVhdGVDaGVjaygpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdtYWluUGFnZS0+b25OZXdQYXJ0bmVyc0NoZWNrQ2xpY2snKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5jbGVhckVycm9yKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGVycm9yTWVzc2FnZSwgaXNMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVyJ30gcmFpc2VkPlxyXG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc2VzPXt7IHJvb3Q6ICdjYXJkUm9vdCcgfX0+XHJcbiAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQoNCe0JfQndCY0KfQndCr0Jkg0JfQkNCa0JDQlyd9IGNvbXBvbmVudD17Q2tlY2tMaW5rfSBpbWFnZVVybD17aW1hZ2VVcmx9IG9uQ2xpY2s9e3RoaXMub25OZXdDaGVja0NsaWNrfSAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3Nlcz17eyByb290OiAnY2FyZFJvb3QnIH19PlxyXG4gICAgICAgICAgPExhcmdlQnV0dG9uIHRpdGxlPXsn0J7Qn9Ci0J7QktCr0Jkg0JfQkNCa0JDQlyd9IGNvbXBvbmVudD17UGFydG5lcnNMaW5rfSBpbWFnZVVybD17cGFydG5lclVybH0gb25DbGljaz17dGhpcy5vbk5ld1BhcnRuZXJzQ2hlY2tDbGlja30gLz5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgINCY0YHRgtC+0YDQuNGPXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SGlzdG9yeUNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdjZW50ZXInIH19XHJcbiAgICAgICAgICAgIG9wZW49eyEhZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICBDb250ZW50UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ21lc3NhZ2UtaWQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBpZD1cIm1lc3NhZ2UtaWRcIj57ZXJyb3JNZXNzYWdlfTwvc3Bhbj59XHJcbiAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdub3RpZmljYXRpb25DbG9zZSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1c3kgbG9hZGluZz17aXNMb2FkaW5nfSAvPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoTWFpblBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb3RGb3VuZFBhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIE5vdEZvdW5kUGFnZSBleHRlbmRzIENvbXBvbmVudDxJTm90Rm91bmRQYWdlUHJvcHMsIGFueT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIE5vdCBGb3VuZFxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChOb3RGb3VuZFBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYXJ0bmVyc0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRuZXJzQ29tcG9uZW50JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnRuZXJzUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgUGFydG5lcnNQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElQYXJ0bmVyc1BhZ2VQcm9wcywgYW55PntcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+ICAgICAgICAgIFxyXG4gICAgICAgICAgPFBhcnRuZXJzQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoUGFydG5lcnNQYWdlKVxyXG4iLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIEFERF9EUklOSyxcclxuICAgIEFERF9ERVNTRVJULFxyXG4gICAgUFJPQ0VTU19DSEVDS09VVCxcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVELFxyXG4gICAgTE9HX0RBVEEsXHJcbiAgICBDTEVBUl9MT0csXHJcbiAgICBDQU5DRUwsXHJcbiAgICBDTEVBUl9FUlJPUixcclxuICAgIERFTEVURV9ERVNTRVJULFxyXG4gICAgREVMRVRFX0RSSU5LLFxyXG4gICAgU0VUX0xBU1RfSURcclxufSBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgeyBDaGVjaywgRGVzc2VydCwgRHJpbmssIFBheW1lbnQsIE9yZGVyVHlwZSB9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5cclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3N0b3JlL2luaXRpYWxTdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcclxuICAgIFtDUkVBVEVfQ0hFQ0tdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbGFzdElkIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBjaGVjazogQ2hlY2sgPSB7XHJcbiAgICAgICAgICAgIGlkOiBsYXN0SWQgKyAxLFxyXG4gICAgICAgICAgICBkZXNzZXJ0czogbmV3IEFycmF5PERlc3NlcnQ+KCksXHJcbiAgICAgICAgICAgIGRyaW5rczogbmV3IEFycmF5PERyaW5rPigpLFxyXG4gICAgICAgICAgICBpc0ZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcGF5bWVudDogUGF5bWVudC5DYXNoLFxyXG4gICAgICAgICAgICB0eXBlOiBPcmRlclR5cGUuU2hvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FERF9EUklOS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgZHJpbms6IERyaW5rID0ge1xyXG4gICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgIHNpemU6IGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGVjay5kcmlua3MucHVzaChkcmluayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0RFTEVURV9EUklOS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbmV3Q2hlY2sgPSB7Li4uY2hlY2t9O1xyXG5cclxuICAgICAgICBjb25zdCBjb21wYXJhdG9yID0gKHsgaWQsIHNpemUgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWQgPT09IGFjdGlvbi5wYXlsb2FkWzBdICYmIHNpemUgPT09IGFjdGlvbi5wYXlsb2FkWzFdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0NoZWNrLmRyaW5rcyA9IGNoZWNrLmRyaW5rcy5maWx0ZXIoZCA9PiBjb21wYXJhdG9yKGQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrOiBuZXdDaGVja1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBRERfREVTU0VSVF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRGVzc2VydCA9IGNoZWNrLmRlc3NlcnRzLmZpbmQoKGQ6IERlc3NlcnQpID0+XHJcbiAgICAgICAgICAgIGQudHlwZSA9PT0gYWN0aW9uLnBheWxvYWRbMF1cclxuICAgICAgICAgICAgJiYgZC50YXN0ZSA9PT0gYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgJiYgZC5zaXplID09PSBhY3Rpb24ucGF5bG9hZFsyXSk7XHJcblxyXG4gICAgICAgIGlmICghIWV4aXN0aW5nRGVzc2VydCkge1xyXG4gICAgICAgICAgICBleGlzdGluZ0Rlc3NlcnQucXVhbnRpdHkgKz0gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydDogRGVzc2VydCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbi5wYXlsb2FkWzBdLFxyXG4gICAgICAgICAgICAgICAgdGFzdGU6IGFjdGlvbi5wYXlsb2FkWzFdLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWRbMl0sXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogYWN0aW9uLnBheWxvYWRbM11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2hlY2suZGVzc2VydHMucHVzaChkZXNzZXJ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVja1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtERUxFVEVfREVTU0VSVF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbmV3Q2hlY2sgPSB7Li4uY2hlY2t9O1xyXG5cclxuICAgICAgICBjb25zdCBjb21wYXJhdG9yID0gKHsgdHlwZSwgdGFzdGUsIHNpemUgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gYWN0aW9uLnBheWxvYWRbMF0gJiYgdGFzdGUgPT09IGFjdGlvbi5wYXlsb2FkWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbM10pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2l6ZSAhPT0gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hlY2suZGVzc2VydHMgPSBuZXdDaGVjay5kZXNzZXJ0cy5maWx0ZXIoZCA9PiBjb21wYXJhdG9yKGQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrOiBuZXdDaGVja1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtQUk9DRVNTX0NIRUNLT1VUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrLCBoaXN0b3J5LCBsYXN0SWQgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLmlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChjaGVjayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrOiBudWxsLFxyXG4gICAgICAgICAgICBoaXN0b3J5OiBbLi4uaGlzdG9yeV0sXHJcbiAgICAgICAgICAgIGxhc3RJZDogbGFzdElkICsgMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtTRVRfUEFZTUVOVF9UWVBFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjaGVjay5wYXltZW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiB7IC4uLmNoZWNrIH0gfTtcclxuICAgIH0sXHJcbiAgICBbU0VUX09SREVSX1RZUEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLnR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2s6IHsgLi4uY2hlY2sgfSB9O1xyXG4gICAgfSxcclxuICAgIFtMT0FEX0lURU1TXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtMT0FEX0lURU1TX0ZVTEZJTExFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtMT0FEX0lURU1TX1JFSkVDVEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaGFzRXJyb3JlZDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbQVBQRU5EX0RBVEFfRlVMRklMTEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiAhYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbQVBQRU5EX0RBVEFfUkVKRUNURURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1NIT1dfQlVTWV06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBpc0J1c3kgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNCdXN5IH07XHJcbiAgICB9LFxyXG4gICAgW0xPR19EQVRBXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBjb25zdCB7IGxvZyB9ID0gc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvZzogYCR7bG9nfTske3RleHR9YCB9O1xyXG4gICAgfSxcclxuICAgIFtDTEVBUl9MT0ddOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvZzogJycgfTtcclxuICAgIH0sXHJcbiAgICBbQ0xFQVJfRVJST1JdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yTWVzc2FnZTogJycgfTtcclxuICAgIH0sXHJcbiAgICBbQ0FOQ0VMXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogbnVsbCB9O1xyXG4gICAgfSxcclxuICAgIFtTRVRfTEFTVF9JRF06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbGFzdElkOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgfSxcclxufSwgaW5pdGlhbFN0YXRlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgQW55QWN0aW9uLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXInO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICBjaGVjazogbnVsbCxcclxuICAgIGhpc3Rvcnk6IG5ldyBBcnJheTxDaGVjaz4oKSxcclxuICAgIGxvZzogJycsXHJcbiAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgbGFzdElkOiAwXHJcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nbG9iYWwuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nbG9iYWwuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBEcmlua3NUeXBlLCBEZXNzZXJ0VHlwZSwgTWFjYXJvbnNFbnVtLCBaZXBoeXJFbnVtLCBQYXJ0bmVyc0VudW0gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEcmlua3NEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PHN0cmluZz4gfSA9IHt9O1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQ2FwcHVjaW5vXSA9IFsnMTc1INC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkZsYXRXaGl0ZV0gPSBbJzE3NSDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5SYWZdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vXSA9IFsnMTIwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkFtZXJpY2Fub01pbGtdID0gWycxMjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTG9uZ0JsYWNrXSA9IFsnMjAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkVzcHJlc3NvXSA9IFsnMzAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRG9wcGlvXSA9IFsnNjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTWFjaGlhdG9dID0gWyc5MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZUxhdmVuZGVyXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlQ2FyYW1lbF0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZU9yYW5nZV0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5DYWNhb10gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFHcmVlbl0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFCbGFja10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFIZXJiYWxdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3BlYWNpYWxUZWFQZWFyTGltZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TcGVjaWFsVGVhT3JhbmdlXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFHaW5nZXJdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFsnMTc1INC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWycwINC80LsnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNzZXJ0c0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8YW55PiB9ID0ge307XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5NYWNhcm9uXSA9IFsxLCA2LCAxMiwgMjRdO1xyXG5EZXNzZXJ0c0RpY3RbRGVzc2VydFR5cGUuWmVwaHlyXSA9IFsxLCA4LCAxNl07XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5DYWtlXSA9IFsnMTgg0YHQvCcsICcyMiDRgdC8J107XHJcblxyXG5leHBvcnQgY29uc3QgRHJpbmtQcmljZXNEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PHN0cmluZz4gfSA9IHt9O1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5DYXBwdWNpbm9dID0gWycyNScsICc0MCddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZV0gPSBbJzI4JywgJzM1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkZsYXRXaGl0ZV0gPSBbJzM1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlJhZl0gPSBbJzM4JywgJzQ1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkFtZXJpY2Fub10gPSBbJzIwJ107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkFtZXJpY2Fub01pbGtdID0gWycyNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5Mb25nQmxhY2tdID0gWyczMCddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5Fc3ByZXNzb10gPSBbJzIwJ107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkRvcHBpb10gPSBbJzMwJ107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLk1hY2hpYXRvXSA9IFsnMjInXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGF0dGVMYXZlbmRlcl0gPSBbJzMyJywgJzQwJ107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlQ2FyYW1lbF0gPSBbJzMyJywgJzQwJ107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlT3JhbmdlXSA9IFsnMzInLCAnNDAnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuQ2FjYW9dID0gWycyOCcsICczNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFHcmVlbl0gPSBbJzI1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlRlYUJsYWNrXSA9IFsnMjUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuVGVhSGVyYmFsXSA9IFsnMjUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3BlYWNpYWxUZWFQZWFyTGltZV0gPSBbJzM1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFPcmFuZ2VdID0gWyczNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5TcGVjaWFsVGVhR2luZ2VyXSA9IFsnMzUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFsnNTUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGVtb25hZGVTdHJhd2JlcnJ5XSA9IFsnMzUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGVtb25hZGVDaXRydXNdID0gWyczNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWyczNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5JY2VMYXR0ZV0gPSBbJzQwJ107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlN5cm9wXSA9IFsnNSddO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhZmZlZVByaWNlczogeyBbaWQ6IHN0cmluZ10gOiBudW1iZXIgfSA9IHt9O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkNvZmZlZUlzXSA9IDE3O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkZpcnN0UG9pbnRdID0gMTk7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uQ3ViYUNvZmZlZV0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5Qcm9ncmVzc10gPSAyMDtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5LbGFzc25hS2F2YV0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5Db2ZmZWVBbmRUaGVDaXR5XSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLklsTWlvXSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLlN0dWRpb0NvZmZlZV0gPSAyMDtcclxuXHJcbmV4cG9ydCBjb25zdCBaRVBIWVJfUFJJQ0UgPSAxMTtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWNhcm9uc0NvbG9yczogeyBbaWQ6IHN0cmluZ10gOiBzdHJpbmcgfSA9IHt9O1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uRG9yQmx1ZVBlYXJdID0gJyNiN2U0ZjcnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uUGFybWVzYW5GaWd1ZV0gPSAnI2ZjZjdlOCc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5TdHJhd2JlcnJ5Q2hlZXNlY2FrZV0gPSAnI2ZmZGRkZCc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5SYXNwYmVycnldID0gJyNmZmE1Y2YnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uQ3VycmFudF0gPSAnI2JjNDVjNic7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5MYXZlbmRlckJsYWNrYmVycnldID0gJyNiNTg3ZmYnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uTWFuZ29QYXNzaW9uXSA9ICcjZmZkZDg3JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkNvZmZlZUNhcmFtZWxdID0gJyNhODczMDEnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uQ2hvY29sYXRlXSA9ICcjNDkyOTA4JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLlBpc3RhY2hpb10gPSAnIzg1ZGQ5Myc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5MaW1lQmFzaWxdID0gJyM5ZmYyNWMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFplcGh5ckNvbG9yczogeyBbaWQ6IHN0cmluZ10gOiBzdHJpbmcgfSA9IHt9O1xyXG5aZXBoeXJDb2xvcnNbWmVwaHlyRW51bS5BcHBsZV0gPSAnI2ZmZmJmMic7XHJcblplcGh5ckNvbG9yc1taZXBoeXJFbnVtLkFwcmljb3RQYXNzaW9uRnJ1aXRdID0gJyNmZmU2YmYnO1xyXG5aZXBoeXJDb2xvcnNbWmVwaHlyRW51bS5DdXJyYW50XSA9ICcjZDk3ONC1ZCc7XHJcblplcGh5ckNvbG9yc1taZXBoeXJFbnVtLlN0cmF3YmVycnlDcmFuYmVycnldID0gJyNmNDk3YjknOyIsImV4cG9ydCBpbnRlcmZhY2UgRGVzc2VydCB7XHJcbiAgICB0eXBlOiBEZXNzZXJ0VHlwZSxcclxuICAgIHRhc3RlOiBzdHJpbmcsXHJcbiAgICBzaXplOiBzdHJpbmdcclxuICAgIHF1YW50aXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJpbmsge1xyXG4gICAgaWQ6IERyaW5rc1R5cGUsXHJcbiAgICBzaXplOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGVjayB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgZGVzc2VydHM6IEFycmF5PERlc3NlcnQ+LFxyXG4gICAgZHJpbmtzOiBBcnJheTxEcmluaz4sXHJcbiAgICBpc0ZpbmlzaGVkOiBib29sZWFuLFxyXG4gICAgcGF5bWVudDogUGF5bWVudCxcclxuICAgIHR5cGU6IE9yZGVyVHlwZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYXltZW50IHtcclxuICAgIENhcmQgPSAn0JrQsNGA0YLQsCcsXHJcbiAgICBDYXNoID0gJ9Cd0LDQu9C40YfQutCwJyxcclxuICAgIE90aGVyID0gJ9CU0YDRg9Cz0L7QtSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3JkZXJUeXBlIHtcclxuICAgIFByZU9yZGVyID0gJ9Cf0YDQtdC00LfQsNC60LDQtycsXHJcbiAgICBTaG9wID0gJ9CS0LjRgtGA0LjQvdCwJyxcclxuICAgIE90aGVyID0gJ9CU0YDRg9Cz0L7QtSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGVzc2VydFR5cGUge1xyXG4gICAgTWFjYXJvbiA9ICfQnNCw0LrQsNGA0L7QvdGBJyxcclxuICAgIFplcGh5ciA9ICfQl9C10YTQuNGAJyxcclxuICAgIENha2UgPSAn0KLQvtGA0YInXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hY2Fyb25zRW51bSB7XHJcbiAgICBEb3JCbHVlUGVhciA9IFwi0JTQvtCxLdCR0LvRjiAtINCT0YDRg9GI0LBcIixcclxuICAgIFBhcm1lc2FuRmlndWUgPSBcItCf0LDRgNC80LXQt9Cw0L0gLSDQmNC90LbQuNGAXCIsXHJcbiAgICBTdHJhd2JlcnJ5Q2hlZXNlY2FrZSA9IFwi0JrQu9GD0LHQvdC40YfQvdGL0Lkg0KfQuNC30LrQtdC50LpcIixcclxuICAgIFJhc3BiZXJyeSA9IFwi0JzQsNC70LjQvdCwXCIsXHJcbiAgICBDdXJyYW50ID0gXCLQodC80L7RgNC+0LTQuNC90LBcIixcclxuICAgIExhdmVuZGVyQmxhY2tiZXJyeSA9IFwi0JvQsNCy0LDQvdC00LAgLSDQp9C10YDQvdC40LrQsFwiLFxyXG4gICAgTWFuZ29QYXNzaW9uID0gXCLQnNCw0L3Qs9C+IC0g0JzQsNGA0LDQutGD0LnRj1wiLFxyXG4gICAgQ29mZmVlQ2FyYW1lbCA9IFwi0JrQvtGE0LUgLSDQodC+0LvRkdC90LDRjyDQmtCw0YDQsNC80LXQu9GMXCIsXHJcbiAgICBDaG9jb2xhdGUgPSBcItCo0L7QutC+0LvQsNC0XCIsXHJcbiAgICBQaXN0YWNoaW8gPSBcItCk0LjRgdGC0LDRiNC60LBcIixcclxuICAgIExpbWVCYXNpbCA9IFwi0JvQsNC50LwgLSDQkdCw0LfQuNC70LjQulwiIFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBaZXBoeXJFbnVtIHtcclxuICAgIEFwcGxlID0gXCLQr9Cx0LvQvtC60L5cIixcclxuICAgIEFwcmljb3RQYXNzaW9uRnJ1aXQgPSBcItCQ0LHRgNC40LrQvtGBIC0g0JzQsNGA0LDQutGD0LnRj1wiLFxyXG4gICAgQ3VycmFudCA9IFwi0KHQvNC+0YDQvtC00LjQvdCwXCIsICAgIFxyXG4gICAgU3RyYXdiZXJyeUNyYW5iZXJyeSA9IFwi0JrQu9GD0LHQvdC40LrQsCAtINCa0LvRjtC60LLQsFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENha2VzRW51bSB7XHJcbiAgICBSaW8gPSBcIlJpb1wiLFxyXG4gICAgQ2Fycm90Q2FrZSA9IFwiQ2Fycm90IENha2VcIixcclxuICAgIFNvdWwgPSBcIlNvdWxcIixcclxuICAgIFBpbmsgPSBcIlBpbmtcIixcclxuICAgIEluZmluaXR5ID0gXCJJbmZpbml0eVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERyaW5rc1R5cGUge1xyXG4gICAgQ2FwcHVjaW5vID0gXCLQmtCw0L/Rg9GH0LjQvdC+XCIsXHJcbiAgICBMYXR0ZSA9IFwi0JvQsNGC0YLQtVwiLFxyXG4gICAgRmxhdFdoaXRlID0gXCLQpNC70LXRgiDQktCw0LnRglwiLFxyXG4gICAgUmFmID0gXCLQoNCw0YRcIixcclxuICAgIEFtZXJpY2FubyA9IFwi0JDQvNC10YDQuNC60LDQvdC+XCIsXHJcbiAgICBBbWVyaWNhbm9NaWxrID0gXCLQkNC80LXRgNC40LrQsNC90L4g0YEg0LzQvtC70L7QutC+0LxcIixcclxuICAgIExvbmdCbGFjayA9IFwi0JvQvtC90LMg0LHQu9GN0LpcIixcclxuICAgIEVzcHJlc3NvID0gXCLQrdGB0L/RgNC10YHRgdC+XCIsXHJcbiAgICBEb3BwaW8gPSBcItCU0L7Qv9C/0LjQvlwiLCAgICBcclxuICAgIE1hY2hpYXRvID0gXCLQnNCw0LrQuNCw0YLQvlwiLFxyXG4gICAgTGF0dGVMYXZlbmRlciA9IFwi0JvQsNGC0YLQtSDQm9Cw0LLQsNC90LTQsFwiLFxyXG4gICAgTGF0dGVDYXJhbWVsID0gXCLQm9Cw0YLRgtC1INCa0LDRgNCw0LzQtdC70YxcIixcclxuICAgIExhdHRlT3JhbmdlID0gXCLQm9Cw0YLRgtC1INCQ0L/QtdC70YzRgdC40L1cIixcclxuICAgIENhY2FvID0gXCLQmtCw0LrQsNC+XCIsXHJcbiAgICBUZWFHcmVlbiA9IFwi0KfQsNC5INCX0LXQu9GR0L3Ri9C5XCIsXHJcbiAgICBUZWFCbGFjayA9IFwi0KfQsNC5INCn0ZHRgNC90YvQuVwiLFxyXG4gICAgVGVhSGVyYmFsID0gXCLQp9Cw0Lkg0KLRgNCw0LLRj9C90L7QuVwiLFxyXG4gICAgU3BlYWNpYWxUZWFQZWFyTGltZSA9IFwi0KfQsNC5INCT0YDRg9GI0LAt0JvQsNC50LxcIixcclxuICAgIFNwZWNpYWxUZWFPcmFuZ2UgPSBcItCn0LDQuSDQkNC/0LXQu9GM0YHQuNC9LdCe0LHQu9C10L/QuNGF0LBcIixcclxuICAgIFNwZWNpYWxUZWFHaW5nZXIgPSBcItCn0LDQuSDQnNCw0LvQuNC90LAt0JjQvNCx0LjRgNGMXCIsXHJcbiAgICBIb3RDaG9jb2xhdGUgPSBcItCT0LDRgNGP0YfQuNC5INGI0L7QutC+0LvQsNC0XCIsXHJcbiAgICBMZW1vbmFkZVN0cmF3YmVycnkgPSBcItCb0LjQvNC+0L3QsNC0INCa0LvRg9Cx0L3QuNC60LBcIixcclxuICAgIExlbW9uYWRlQ2l0cnVzID0gXCLQm9C40LzQvtC90LDQtCDQptC40YLRgNGD0YFcIixcclxuICAgIExlbW9uYWRlUGFzc2lvbiA9IFwi0JvQuNC80L7QvdCw0LQg0JzQsNGA0LDQutGD0LnRj1wiLFxyXG4gICAgSWNlTGF0dGUgPSBcItCQ0LnRgSDQm9Cw0YLRgtC1XCIsXHJcbiAgICBTeXJvcCA9IFwi0KHQuNGA0L7Qv1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBhcnRuZXJzRW51bSB7XHJcbiAgICBDb2ZmZWVJcyA9IFwiQ29mZmVlIGlzXCIsXHJcbiAgICBGaXJzdFBvaW50ID0gXCJGaXJzdCBQb2ludFwiLFxyXG4gICAgQ3ViYUNvZmZlZSA9IFwiQ3ViYSBDb2ZmZWVcIixcclxuICAgIFByb2dyZXNzID0gXCJQcm9ncmVzc1wiLFxyXG4gICAgS2xhc3NuYUthdmEgPSBcItCa0LvQsNGB0L3QsCDQutCw0LLQsFwiLFxyXG4gICAgQ29mZmVlQW5kVGhlQ2l0eSA9IFwiQ29mZmVlIGFuZCB0aGUgY2l0eVwiLFxyXG4gICAgSWxNaW8gPSBcIklsIE1pb1wiLFxyXG4gICAgU3R1ZGlvQ29mZmVlID0gXCLQodGC0YPQtNC40Y8g0LrQvtGE0LVcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBWYWx1ZUlucHV0T3B0aW9uIHtcclxuICAgIElOUFVUX1ZBTFVFX09QVElPTl9VTlNQRUNJRklFRCA9ICdJTlBVVF9WQUxVRV9PUFRJT05fVU5TUEVDSUZJRUQnLFxyXG4gICAgUkFXID0gJ1JBVycsXHJcbiAgICBVU0VSX0VOVEVSRUQgPSAnVVNFUl9FTlRFUkVEJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbnNlcnREYXRhT3B0aW9uIHtcclxuICAgIE9WRVJXUklURSA9ICdPVkVSV1JJVEUnLFxyXG4gICAgSU5TRVJUX1JPV1MgPSAnSU5TRVJUX1JPV1MnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZhbHVlUmVuZGVyT3B0aW9uIHtcclxuICAgIEZPUk1BVFRFRF9WQUxVRSA9ICdGT1JNQVRURURfVkFMVUUnLFxyXG4gICAgVU5GT1JNQVRURURfVkFMVUUgPSAnVU5GT1JNQVRURURfVkFMVUUnLFxyXG4gICAgRk9STVVMQSA9ICdGT1JNVUxBJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEYXRlVGltZVJlbmRlck9wdGlvbiB7XHJcbiAgICBTRVJJQUxfTlVNQkVSID0gJ1NFUklBTF9OVU1CRVInLFxyXG4gICAgRk9STUFUVEVEX1NUUklORyA9ICdGT1JNQVRURURfU1RSSU5HJ1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=