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

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/Notification/styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/components/Notification/styles.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".success {\n  background-color: green !important; }\n\n.error {\n  background-color: darkslategray !important; }\n\n.info {\n  background-color: darkslategray !important; }\n\n.warning {\n  background-color: orange !important; }\n\n.icon {\n  font-size: 20; }\n\n.icon-variant {\n  opacity: 0.9;\n  margin-right: 8px; }\n\n.message {\n  display: flex;\n  align-items: center; }\n", ""]);

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
exports.push([module.i, "body {\n  font-family: 'Segoe UI'; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  font-size: 40px;\n  font-weight: 300;\n  height: 200px; }\n\n.avatar {\n  background-color: #72c3e9;\n  color: #1d53a3; }\n\n.cardContainer {\n  margin: 16px; }\n\n.cardRoot {\n  padding: 16px 0 16px 0 !important; }\n\n.newOrderButtonsWrapper {\n  display: flex;\n  flex-direction: row; }\n\n.newOrderButton {\n  padding: 5px;\n  width: 100%;\n  height: 100%; }\n\n.buttonsWraper {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 1rem; }\n\n.checkoutTitle {\n  text-align: center;\n  margin: 1rem;\n  font-weight: 450; }\n\n.checkoutControlGroup {\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 2rem 1rem 2rem; }\n\n.notificationClose {\n  width: 4rem;\n  height: 4rem; }\n\n.macaronAvatar {\n  margin: 10px;\n  color: black !important; }\n\n.drinkAvatar {\n  margin: 10px;\n  color: #fff !important;\n  background-color: #74482f !important; }\n\n.buttonApplyWraper {\n  display: flex;\n  justify-content: space-evenly; }\n\n.partnerSelectWrapper {\n  width: 100%;\n  padding: 1rem; }\n\n.busy-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 9999;\n  background-color: #e6e6e6;\n  opacity: 0.8; }\n  .busy-container .busy {\n    position: absolute;\n    left: 50%;\n    top: 44%;\n    margin-left: -18px; }\n\n.invisible {\n  display: none; }\n\n.historyContainer {\n  width: 100%; }\n", ""]);

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
exports.SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

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
            var dessertsResponse, drinksResponse, lastDessertOrderId, lastDrinkOrderId, lastId_1, lastOrder, lastOrderPayment_1, lastOrderType_1, ex_1;
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
                        return [4 /*yield*/, window['gapi'].client.sheets.spreadsheets.values.get({
                            spreadsheetId: spreadsheetId,
                            range: "RawDrinksData!A:F"
                        })];
                    case 3:
                        drinksResponse = _a.sent();
                        lastDessertOrderId = Math.max.apply(Math, dessertsResponse.result.values.slice(1).map(function (d) {
                            return d[7] ? Number(d[7]) : 0;
                        }));
                        lastDrinkOrderId = Math.max.apply(Math, drinksResponse.result.values.slice(1).map(function (d) {
                            return d[5] ? Number(d[5]) : 0;
                        }));
                        lastId_1 = Math.max(lastDessertOrderId, lastDrinkOrderId);
                        lastOrder = {
                            id: lastId_1,
                            desserts: [],
                            drinks: [],
                            isFinished: true,
                            payment: types_1.Payment.Other,
                            type: types_1.OrderType.Other
                        };
                        lastOrderPayment_1 = null;
                        lastOrderType_1 = null;
                        lastOrder.desserts = dessertsResponse.result.values.slice(1).filter(function (v) {
                            return v[7] === lastId_1.toString();
                        }).map(function (d) {
                            lastOrderPayment_1 = d[4] === 'Наличка' ? types_1.Payment.Cash : types_1.Payment.Card;
                            lastOrderType_1 = d[5] === 'Витрина' ? types_1.OrderType.Shop : types_1.OrderType.PreOrder;
                            var dessert = {
                                type: d[0],
                                taste: d[1],
                                quantity: d[2],
                                size: d[3]
                            };
                            return dessert;
                        });
                        lastOrder.drinks = drinksResponse.result.values.slice(1).filter(function (v) {
                            return v[5] === lastId_1.toString();
                        }).map(function (d) {
                            lastOrderPayment_1 = d[2] === 'Наличка' ? types_1.Payment.Cash : types_1.Payment.Card;
                            lastOrderType_1 = d[3] === 'Витрина' ? types_1.OrderType.Shop : types_1.OrderType.PreOrder;
                            var dessert = {
                                id: d[0],
                                size: d[1]
                            };
                            return dessert;
                        });
                        lastOrder.payment = lastOrderPayment_1;
                        lastOrder.type = lastOrderType_1;
                        dispatch(exports.SetLastId(lastId_1, lastOrder));
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
exports.ProcessPartnersOrderSubmit = function (partner, macQty, zepQty) {
    return function (dispatch) {
        return __awaiter(_this, void 0, void 0, function () {
            var partnersRange, partnersData, ex_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch(exports.itemsIsLoading(true));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 7]);
                        partnersRange = "RawPartnersData!A:D";
                        partnersData = [[partner, macQty, zepQty, moment(new Date()).format('DD.MM.YYYY HH:mm')]];
                        return [4 /*yield*/, dispatch(exports.ProcessAppendData(config_1.SPREADSHEET_ID, partnersRange, partnersData))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, exports.ProcessLog(JSON.stringify(partnersData))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, dispatch(exports.ShowNotification(0, 'Заказ сохранён!'))];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        ex_6 = _a.sent();
                        dispatch(exports.itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
                        console.log(ex_6);
                        throw Error(ex_6);
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
exports.SetLastId = redux_actions_1.createAction(actionTypes_1.SET_LAST_ID, function (lastId, lastCheck) {
    return [lastId, lastCheck];
});
exports.ShowNotification = redux_actions_1.createAction(actionTypes_1.SHOW_NOTIFICATION, function (type, message) {
    return [type, message];
});

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
        return React.createElement(Dialog_1.default, { onClose: this.handleClose, "aria-labelledby": "simple-dialog-title", open: true, fullScreen: true }, React.createElement(DialogTitle_1.default, { id: "simple-dialog-title" }, !dessertType ? 'Выберите Десерт' : !dessertTaste ? "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u043A\u0443\u0441 (" + this.countTotalDessertQuantity() + ")" : 'Выберите размер'), !dessertType ? this.renderDesserts() : !dessertTaste ? this.renderDessertTastes() : this.renderDessertSize());
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
var ExpansionPanel_1 = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/ExpansionPanel/index.js");
var ExpansionPanelSummary_1 = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/ExpansionPanelSummary/index.js");
var ExpansionPanelDetails_1 = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/ExpansionPanelDetails/index.js");
var Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
var ExpandMore_1 = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
var Divider_1 = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
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
        return React.createElement(List_1.default, { component: "nav" }, history.sort(function (a, b) {
            return a.id > b.id ? -1 : b.id > a.id ? 1 : 0;
        }).map(function (h) {
            return React.createElement(ListItem_1.default, { key: h.id }, React.createElement(ExpansionPanel_1.default, { className: 'historyContainer' }, React.createElement(ExpansionPanelSummary_1.default, { expandIcon: React.createElement(ExpandMore_1.default, null) }, React.createElement(Typography_1.default, null, "\u0427\u0435\u043A #" + h.id)), React.createElement(ExpansionPanelDetails_1.default, { style: { flexDirection: 'column' } }, React.createElement(Typography_1.default, { variant: 'subheading' }, React.createElement("b", null, "\u0414\u0435\u0441\u0435\u0440\u0442\u044B")), React.createElement("div", { className: 'historyItemRow' }, h.desserts.map(function (d, index) {
                return React.createElement(Typography_1.default, { key: index, variant: 'subheading' }, d.type + " " + d.taste + ": " + (d.quantity ? d.quantity : d.size));
            })), React.createElement(Divider_1.default, null), React.createElement(Typography_1.default, { variant: 'subheading' }, React.createElement("b", null, "\u041D\u0430\u043F\u0438\u0442\u043A\u0438")), React.createElement("div", { className: 'historyItemRow' }, h.drinks.map(function (d, index) {
                return React.createElement(Typography_1.default, { key: index, variant: 'subheading' }, d.id + ": " + d.size);
            })), React.createElement(Divider_1.default, null), React.createElement("div", { className: 'historyItemRow' }, React.createElement(Typography_1.default, { variant: 'subheading' }, React.createElement("b", null, "\u0422\u0438\u043F \u043E\u043F\u043B\u0430\u0442\u044B: "), h.payment)), React.createElement("div", { className: 'historyItemRow' }, React.createElement(Typography_1.default, { variant: 'subheading' }, React.createElement("b", null, "\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430: "), h.type)))));
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
        return React.createElement("div", null, React.createElement(Typography_1.default, { gutterBottom: true, variant: "headline", component: "h2" }, "\u041D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), "\u0427\u0435\u043A #" + check.id, this.renderCheckContent(), React.createElement(Divider_1.default, null), React.createElement("div", { className: 'newOrderButtonsWrapper' }, React.createElement("div", { className: 'newOrderButton' }, React.createElement(LargeButton_1.default, { title: 'ДЕСЕРТЫ', imageUrl: dessertsImage, onClick: this.addDessertClick })), React.createElement("div", { className: 'newOrderButton' }, React.createElement(LargeButton_1.default, { title: 'НАПИТКИ', imageUrl: drinksImage, onClick: this.addDrinkClick }))), React.createElement("div", { className: 'buttonsWraper' }, React.createElement(Button_1.default, { disabled: check.desserts.length === 0 && check.drinks.length === 0, variant: "contained", size: "large", color: "primary", onClick: this.handleNextClick }, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C")), showDrinks && React.createElement(DrinksComponent_1.default, { handleClose: function handleClose() {
                return _this.setState({ showDrinks: false });
            } }), showDesserts && React.createElement(DessertsComponent_1.default, { handleClose: function handleClose() {
                return _this.setState({ showDesserts: false });
            } }));
    };
    return NewOrderComponent;
}(react_1.Component);
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NewOrderComponent));

/***/ }),

/***/ "./src/components/Notification/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/Notification/index.tsx ***!
  \***********************************************/
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
var CheckCircle_1 = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
var Error_1 = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
var Info_1 = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
var Close_1 = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
var IconButton_1 = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
var Snackbar_1 = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
var SnackbarContent_1 = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "./node_modules/@material-ui/core/SnackbarContent/index.js");
var Warning_1 = __webpack_require__(/*! @material-ui/icons/Warning */ "./node_modules/@material-ui/icons/Warning.js");
var classnames_1 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
__webpack_require__(/*! ./styles.scss */ "./src/components/Notification/styles.scss");
var actions_1 = __webpack_require__(/*! ../../actions */ "./src/actions.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {
        message: state.errorMessage,
        type: state.notificationType
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        clearError: function clearError() {
            return dispatch(actions_1.ClearError());
        }
    };
};
var VariantIcon;
(function (VariantIcon) {
    VariantIcon[VariantIcon["success"] = 0] = "success";
    VariantIcon[VariantIcon["warning"] = 1] = "warning";
    VariantIcon[VariantIcon["error"] = 2] = "error";
    VariantIcon[VariantIcon["info"] = 3] = "info";
})(VariantIcon = exports.VariantIcon || (exports.VariantIcon = {}));
var NotificationComponent = /** @class */function (_super) {
    __extends(NotificationComponent, _super);
    function NotificationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClose = function () {
            _this.props.clearError();
        };
        return _this;
    }
    NotificationComponent.prototype.getIcon = function () {
        var type = this.props.type;
        var result = null;
        switch (type) {
            case VariantIcon.success:
                result = CheckCircle_1.default;
                break;
            case VariantIcon.warning:
                result = Warning_1.default;
                break;
            case VariantIcon.error:
                result = Error_1.default;
                break;
            case VariantIcon.info:
            default:
                result = Info_1.default;
                break;
        }
        return result;
    };
    NotificationComponent.prototype.getClass = function () {
        var type = this.props.type;
        var result = null;
        switch (type) {
            case VariantIcon.success:
                result = 'success';
                break;
            case VariantIcon.warning:
                result = 'warning';
                break;
            case VariantIcon.error:
                result = 'error';
                break;
            case VariantIcon.info:
            default:
                result = 'info';
                break;
        }
        return result;
    };
    NotificationComponent.prototype.render = function () {
        var message = this.props.message;
        var Icon = this.getIcon();
        return React.createElement(Snackbar_1.default, { anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            }, open: !!message, autoHideDuration: 6000, onClose: this.handleClose }, React.createElement(SnackbarContent_1.default, { className: this.getClass(), "aria-describedby": "client-snackbar", message: React.createElement("span", { id: "client-snackbar", className: 'message' }, React.createElement(Icon, { className: classnames_1.default('icon', 'icon-variant') }), message), action: React.createElement(IconButton_1.default, { key: "close", "aria-label": "Close", color: "inherit", className: 'notificationClose', onClick: this.handleClose }, React.createElement(Close_1.default, null)) }));
    };
    return NotificationComponent;
}(react_1.Component);
exports.NotificationComponent = NotificationComponent;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NotificationComponent);

/***/ }),

/***/ "./src/components/Notification/styles.scss":
/*!*************************************************!*\
  !*** ./src/components/Notification/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/Notification/styles.scss");

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
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions.ts");
var InputLabel_1 = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
var FormControl_1 = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
var Select_1 = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
var MenuItem_1 = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
var TextField_1 = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        processPartnersOrderSubmit: function processPartnersOrderSubmit(partner, macQty, zepQty) {
            return dispatch(actions_1.ProcessPartnersOrderSubmit(partner, macQty, zepQty));
        }
    };
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
            var _a = _this.props,
                processPartnersOrderSubmit = _a.processPartnersOrderSubmit,
                history = _a.history;
            var _b = _this.state,
                partner = _b.partner,
                macaronsQty = _b.macaronsQty,
                zephyrQty = _b.zephyrQty;
            processPartnersOrderSubmit(partner, macaronsQty, zephyrQty);
            history.push('/');
        };
        _this.state = {
            partner: '',
            macaronsQty: 0,
            zephyrQty: 0
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
var Notification_1 = __webpack_require__(/*! ../components/Notification */ "./src/components/Notification/index.tsx");
var Busy_1 = __webpack_require__(/*! ../components/Busy */ "./src/components/Busy.tsx");
var Card_1 = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
var CardContent_1 = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
var Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var imageUrl = __webpack_require__(/*! ../../public/images/main_icon.jpg */ "./public/images/main_icon.jpg");
var partnerUrl = __webpack_require__(/*! ../../public/images/partners_icon.jpg */ "./public/images/partners_icon.jpg");
var mapStateToProps = function mapStateToProps(state) {
    return {
        history: state.history,
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
        return _this;
    }
    MainPage.prototype.componentDidMount = function () {
        var history = this.props.history;
        if (!history || !history.length) {
            this.props.fetchData(config_1.SPREADSHEET_ID);
        }
        ;
    };
    MainPage.prototype.render = function () {
        var isLoading = this.props.isLoading;
        return React.createElement("div", { className: "container" }, React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, { classes: { root: 'cardRoot' } }, React.createElement(LargeButton_1.default, { title: 'РОЗНИЧНЫЙ ЗАКАЗ', component: CkeckLink, imageUrl: imageUrl, onClick: this.onNewCheckClick }))), React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, { classes: { root: 'cardRoot' } }, React.createElement(LargeButton_1.default, { title: 'ОПТОВЫЙ ЗАКАЗ', component: PartnersLink, imageUrl: partnerUrl, onClick: this.onNewPartnersCheckClick }))), React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, null, React.createElement(Typography_1.default, { gutterBottom: true, variant: "headline", component: "h2" }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"), React.createElement(HistoryComponent_1.default, null))), React.createElement(Notification_1.default, null), React.createElement(Busy_1.Busy, { loading: isLoading }));
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
    return Object.assign({}, state, {
        history: [action.payload[1]],
        lastId: action.payload[0]
    });
}, _a[actionTypes_1.SHOW_NOTIFICATION] = function (state, action) {
    return Object.assign({}, state, {
        errorMessage: action.payload[1],
        notificationType: action.payload[0]
    });
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
    lastId: 0,
    notificationType: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvZGVzc2VydHNfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9kcmlua3NfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9tYWluX2ljb24uanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvcGFydG5lcnNfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcEJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL3N0eWxlcy5zY3NzPzhhYTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnVzeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGVzc2VydHNDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyaW5rc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGlzdG9yeUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xhcmdlQnV0dG9uL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdPcmRlckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vc3R5bGVzLnNjc3M/YTc3NCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYXJ0bmVyc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9DaGVja1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9DaGVja291dFBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1BhcnRuZXJzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwuc2Nzcz9kY2JkIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kaWN0aW9uYXJpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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SjtBQUFDLEdBVHVCLGVBQVosUUFBWSxpQkFBWixRQUFZLGVBU3ZCO0FBRUQsSUFJQztBQUpELFdBQTRCO0FBQ3hCLHlEQUFpRTtBQUNqRSw4QkFBVztBQUNYLHVDQUNKO0FBQUMsR0FKMkIsbUJBQWhCLFFBQWdCLHFCQUFoQixRQUFnQixtQkFJM0I7QUFFRCxJQUdDO0FBSEQsV0FBNEI7QUFDeEIsb0NBQXVCO0FBQ3ZCLHNDQUNKO0FBQUMsR0FIMkIsbUJBQWhCLFFBQWdCLHFCQUFoQixRQUFnQixtQkFHM0I7QUFFRCxJQUlDO0FBSkQsV0FBNkI7QUFDekIsMkNBQW1DO0FBQ25DLDZDQUF1QztBQUN2QyxtQ0FDSjtBQUFDLEdBSjRCLG9CQUFqQixRQUFpQixzQkFBakIsUUFBaUIsb0JBSTVCO0FBRUQsSUFHQztBQUhELFdBQWdDO0FBQzVCLDRDQUErQjtBQUMvQiwrQ0FDSjtBQUFDLEdBSCtCLHVCQUFwQixRQUFvQix5QkFBcEIsUUFBb0IsdUJBRy9CLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcGJhcl9yb290IHtcXG4gIGZsZXgtZ3JvdzogMTsgfVxcbiAgLmFwcGJhcl9yb290IC5hcHBiYXJfZ3JvdyB7XFxuICAgIGZsZXgtZ3JvdzogMTsgfVxcbiAgLmFwcGJhcl9yb290IC5hcHBiYXJfbWVudUJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTI7XFxuICAgIG1hcmdpbi1yaWdodDogMjA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50OyB9XFxuXFxuLmVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXkgIWltcG9ydGFudDsgfVxcblxcbi5pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXkgIWltcG9ydGFudDsgfVxcblxcbi53YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50OyB9XFxuXFxuLmljb24ge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi5pY29uLXZhcmlhbnQge1xcbiAgb3BhY2l0eTogMC45O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG5cXG4ubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSc7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGhlaWdodDogMjAwcHg7IH1cXG5cXG4uYXZhdGFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MmMzZTk7XFxuICBjb2xvcjogIzFkNTNhMzsgfVxcblxcbi5jYXJkQ29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTZweDsgfVxcblxcbi5jYXJkUm9vdCB7XFxuICBwYWRkaW5nOiAxNnB4IDAgMTZweCAwICFpbXBvcnRhbnQ7IH1cXG5cXG4ubmV3T3JkZXJCdXR0b25zV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5uZXdPcmRlckJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5idXR0b25zV3JhcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbjogMXJlbTsgfVxcblxcbi5jaGVja291dFRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7IH1cXG5cXG4uY2hlY2tvdXRDb250cm9sR3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMXJlbSAycmVtIDFyZW0gMnJlbTsgfVxcblxcbi5ub3RpZmljYXRpb25DbG9zZSB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTsgfVxcblxcbi5tYWNhcm9uQXZhdGFyIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyB9XFxuXFxuLmRyaW5rQXZhdGFyIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ0ODJmICFpbXBvcnRhbnQ7IH1cXG5cXG4uYnV0dG9uQXBwbHlXcmFwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuXFxuLnBhcnRuZXJTZWxlY3RXcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTsgfVxcblxcbi5idXN5LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxuICBvcGFjaXR5OiAwLjg7IH1cXG4gIC5idXN5LWNvbnRhaW5lciAuYnVzeSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDQ0JTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4OyB9XFxuXFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmhpc3RvcnlDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxOTZiMGVhNzc3MjQ5MzFhZmMzOGFlMzlkYmYwMDYyZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5ZmVhZjIyMWY1NzA3MTU3NzkxNWU1ZTJkMzI5M2I1MS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3OGYwMWUwNGNmMDE1YjJmNzA3N2QxMTcyZTIxMzlmOC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NDQ2MTc3ZmM1N2Q2OWQ3MGQ2OGNkYzg0ZWJkNTFhYS5qcGdcIjsiLCJleHBvcnQgY29uc3QgQ1JFQVRFX0NIRUNLID0gJ0NSRUFURV9DSEVDSyc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0RSSU5LID0gJ0FERF9EUklOSyc7XHJcbmV4cG9ydCBjb25zdCBBRERfREVTU0VSVCA9ICdBRERfREVTU0VSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX0RSSU5LID0gJ0RFTEVURV9EUklOSyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfREVTU0VSVCA9ICdERUxFVEVfREVTU0VSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfVFlQRSA9ICdTRVRfUEFZTUVOVF9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFNFVF9PUkRFUl9UWVBFID0gJ1NFVF9PUkRFUl9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFBST0NFU1NfQ0hFQ0tPVVQgPSAnUFJPQ0VTU19DSEVDS09VVCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNUyA9ICdMT0FEX0lURU1TJztcclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVNfRlVMRklMTEVEID0gJ0xPQURfSVRFTVNfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVNfUkVKRUNURUQgPSAnTE9BRF9JVEVNU19SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0hPV19CVVNZID0gXCJTSE9XX0JVU1lcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQSA9ICdBUFBFTkRfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQV9GVUxGSUxMRUQgPSAnQVBQRU5EX0RBVEFfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBX1JFSkVDVEVEID0gJ0FQUEVORF9EQVRBX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQSA9ICdVUERBVEVfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQV9GVUxGSUxMRUQgPSAnVVBEQVRFX0RBVEFfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBX1JFSkVDVEVEID0gJ1VQREFURV9EQVRBX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfREFUQSA9ICdMT0dfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9MT0cgPSAnQ0xFQVJfTE9HJztcclxuZXhwb3J0IGNvbnN0IENBTkNFTCA9ICdDQU5DRUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMRUFSX0VSUk9SID0gJ0NMRUFSX0VSUk9SJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTEFTVF9JRCA9ICdTRVRfTEFTVF9JRCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0hPV19OT1RJRklDQVRJT04gPSAnU0hPV19OT1RJRklDQVRJT04nOyIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIExPQURfSVRFTVMsXHJcbiAgICBMT0FEX0lURU1TX0ZVTEZJTExFRCxcclxuICAgIExPQURfSVRFTVNfUkVKRUNURUQsXHJcbiAgICBTSE9XX0JVU1ksXHJcbiAgICBDUkVBVEVfQ0hFQ0ssXHJcbiAgICBQUk9DRVNTX0NIRUNLT1VULFxyXG4gICAgQUREX0RSSU5LLFxyXG4gICAgQUREX0RFU1NFUlQsXHJcbiAgICBTRVRfUEFZTUVOVF9UWVBFLFxyXG4gICAgU0VUX09SREVSX1RZUEUsXHJcbiAgICBBUFBFTkRfREFUQV9GVUxGSUxMRUQsXHJcbiAgICBBUFBFTkRfREFUQV9SRUpFQ1RFRCxcclxuICAgIExPR19EQVRBLFxyXG4gICAgQ0xFQVJfTE9HLFxyXG4gICAgQ0FOQ0VMLFxyXG4gICAgQ0xFQVJfRVJST1IsXHJcbiAgICBERUxFVEVfRFJJTkssXHJcbiAgICBERUxFVEVfREVTU0VSVCxcclxuICAgIFNFVF9MQVNUX0lELFxyXG4gICAgU0hPV19OT1RJRklDQVRJT05cclxufSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuaW1wb3J0IHtcclxuICAgIERyaW5rc1R5cGUsIERlc3NlcnRUeXBlLCBQYXltZW50LCBPcmRlclR5cGUsIENoZWNrLFxyXG4gICAgVmFsdWVJbnB1dE9wdGlvbiwgSW5zZXJ0RGF0YU9wdGlvbiwgVmFsdWVSZW5kZXJPcHRpb24sIERhdGVUaW1lUmVuZGVyT3B0aW9uLCBEZXNzZXJ0LCBEcmlua1xyXG59IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBMT0dTX1NQUkVBRFNIRUVUX0lELCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0ZldGNoRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydHNSZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiBcIlJhd0Rlc3NlcnRzRGF0YSFBOkhcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzUmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuZ2V0KHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogXCJSYXdEcmlua3NEYXRhIUE6RlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxhc3REZXNzZXJ0T3JkZXJJZCA9IE1hdGgubWF4KC4uLmRlc3NlcnRzUmVzcG9uc2UucmVzdWx0LnZhbHVlcy5zbGljZSgxKS5tYXAoZCA9PiBkWzddID8gTnVtYmVyKGRbN10pIDogMCkpO1xyXG4gICAgICAgICAgICBsZXQgbGFzdERyaW5rT3JkZXJJZCA9IE1hdGgubWF4KC4uLmRyaW5rc1Jlc3BvbnNlLnJlc3VsdC52YWx1ZXMuc2xpY2UoMSkubWFwKGQgPT4gZFs1XSA/IE51bWJlcihkWzVdKSA6IDApKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdElkID0gTWF0aC5tYXgobGFzdERlc3NlcnRPcmRlcklkLCBsYXN0RHJpbmtPcmRlcklkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlcjogQ2hlY2sgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogbGFzdElkLFxyXG4gICAgICAgICAgICAgICAgZGVzc2VydHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZHJpbmtzOiBbXSxcclxuICAgICAgICAgICAgICAgIGlzRmluaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50OiBQYXltZW50Lk90aGVyLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogT3JkZXJUeXBlLk90aGVyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBsYXN0T3JkZXJQYXltZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGxhc3RPcmRlclR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGFzdE9yZGVyLmRlc3NlcnRzID0gZGVzc2VydHNSZXNwb25zZS5yZXN1bHQudmFsdWVzLnNsaWNlKDEpLmZpbHRlcih2ID0+IHZbN10gPT09IGxhc3RJZC50b1N0cmluZygpKS5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXN0T3JkZXJQYXltZW50ID0gZFs0XSA9PT0gJ9Cd0LDQu9C40YfQutCwJyA/IFBheW1lbnQuQ2FzaCA6IFBheW1lbnQuQ2FyZDtcclxuICAgICAgICAgICAgICAgIGxhc3RPcmRlclR5cGUgPSBkWzVdID09PSAn0JLQuNGC0YDQuNC90LAnID8gT3JkZXJUeXBlLlNob3AgOiBPcmRlclR5cGUuUHJlT3JkZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEZXNzZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzdGU6IGRbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IGRbMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogZFszXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZXNzZXJ0O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxhc3RPcmRlci5kcmlua3MgPSBkcmlua3NSZXNwb25zZS5yZXN1bHQudmFsdWVzLnNsaWNlKDEpLmZpbHRlcih2ID0+IHZbNV0gPT09IGxhc3RJZC50b1N0cmluZygpKS5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXN0T3JkZXJQYXltZW50ID0gZFsyXSA9PT0gJ9Cd0LDQu9C40YfQutCwJyA/IFBheW1lbnQuQ2FzaCA6IFBheW1lbnQuQ2FyZDtcclxuICAgICAgICAgICAgICAgIGxhc3RPcmRlclR5cGUgPSBkWzNdID09PSAn0JLQuNGC0YDQuNC90LAnID8gT3JkZXJUeXBlLlNob3AgOiBPcmRlclR5cGUuUHJlT3JkZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEcmluayA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogZFswXSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBkWzFdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc3NlcnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYXN0T3JkZXIucGF5bWVudCA9IGxhc3RPcmRlclBheW1lbnQ7XHJcbiAgICAgICAgICAgIGxhc3RPcmRlci50eXBlID0gbGFzdE9yZGVyVHlwZTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goU2V0TGFzdElkKGxhc3RJZCwgbGFzdE9yZGVyKSk7XHJcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyhbLi4uZGVzc2VydHMsIC4uLmRyaW5rc10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NBcHBlbmREYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZywgcmFuZ2U6IHN0cmluZywgdmFsdWVSYW5nZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgdXBkYXRlZENlbGxzQ291bnQgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudXBkYXRlcy51cGRhdGVkQ2VsbHM7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kU3VjY2Vzcyh0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LLRiyDQstC+0YjQu9C4INCyINGB0LjRgdGC0LXQvNGDLicpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0xvZyA9IGFzeW5jIChtZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgIFttZXNzYWdlLCBkYXRlVGltZS50b1VUQ1N0cmluZygpXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5hcHBlbmQoe1xyXG4gICAgICAgICAgICBzcHJlYWRzaGVldElkOiBMT0dTX1NQUkVBRFNIRUVUX0lELFxyXG4gICAgICAgICAgICByYW5nZTogJ0E6QicsXHJcbiAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVmFsdWVSZW5kZXJPcHRpb246IFZhbHVlUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9WQUxVRVxyXG4gICAgICAgIH0sIHsgdmFsdWVzOiBkYXRhIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzVXBkYXRlRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcsIHZhbHVlUmFuZ2U6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiAnQTY6RDEwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZURhdGVUaW1lUmVuZGVyT3B0aW9uOiBEYXRlVGltZVJlbmRlck9wdGlvbi5GT1JNQVRURURfU1RSSU5HXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG4gICAgICAgICAgICAvL1RPRE86IFByb2Nlc3MgcmVzcG9uc2UgcmVzdWx0XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0LnZhbHVlcztcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNGZXRjaERhdGFTdWNjZXNzKGl0ZW1zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVDaGVjayA9IGNyZWF0ZUFjdGlvbihDUkVBVEVfQ0hFQ0spO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NDaGVja291dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGNoZWNrOiBDaGVjayA9IHN0YXRlLmNoZWNrO1xyXG4gICAgICAgICAgICBjb25zdCB7IGxvZyB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NSYW5nZSA9IFwiUmF3RHJpbmtzRGF0YSFBOkZcIjtcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBjaGVjay5kcmlua3MuZm9yRWFjaChhc3luYyBkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtkLmlkLCBkLnNpemUsIGNoZWNrLnBheW1lbnQsIGNoZWNrLnR5cGUsIGRhdGVUaW1lLCBjaGVjay5pZF07XHJcbiAgICAgICAgICAgICAgICBkcmlua3NEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZHJpbmtzRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKFNQUkVBRFNIRUVUX0lELCBkcmlua3NSYW5nZSwgZHJpbmtzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0c1JhbmdlID0gXCJSYXdEZXNzZXJ0c0RhdGEhQTpIXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5mb3JFYWNoKGFzeW5jIGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gW2QudHlwZSwgZC50YXN0ZSwgZC5xdWFudGl0eSwgZC5zaXplLCBjaGVjay5wYXltZW50LCBjaGVjay50eXBlLCBkYXRlVGltZSwgY2hlY2suaWRdO1xyXG4gICAgICAgICAgICAgICAgZGVzc2VydHNEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZGVzc2VydHNEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEoU1BSRUFEU0hFRVRfSUQsIGRlc3NlcnRzUmFuZ2UsIGRlc3NlcnRzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChDaGVja291dCgpKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2cobG9nKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvY2Vzc0xvZyhKU09OLnN0cmluZ2lmeShjaGVjaykpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChDbGVhckxvZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kRXJyb3JlZCgn0J7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUsINGH0YLQviDQstGLINCy0L7RiNC70Lgg0LIg0YHQuNGB0YLQtdC80YMuJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdCA9IChwYXJ0bmVyOiBzdHJpbmcsIG1hY1F0eTogbnVtYmVyLCB6ZXBRdHk6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0bmVyc1JhbmdlID0gXCJSYXdQYXJ0bmVyc0RhdGEhQTpEXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRuZXJzRGF0YSA9IFtbcGFydG5lciwgbWFjUXR5LCB6ZXBRdHksIG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW0nKV1dO1xyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YShTUFJFQURTSEVFVF9JRCwgcGFydG5lcnNSYW5nZSwgcGFydG5lcnNEYXRhKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2coSlNPTi5zdHJpbmdpZnkocGFydG5lcnNEYXRhKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFNob3dOb3RpZmljYXRpb24oMCwgJ9CX0LDQutCw0Lcg0YHQvtGF0YDQsNC90ZHQvSEnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LLRiyDQstC+0YjQu9C4INCyINGB0LjRgdGC0LXQvNGDLicpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tvdXQgPSBjcmVhdGVBY3Rpb24oUFJPQ0VTU19DSEVDS09VVCk7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRHJpbmsgPSBjcmVhdGVBY3Rpb24oQUREX0RSSU5LLCAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERlc3NlcnQgPSBjcmVhdGVBY3Rpb24oQUREX0RFU1NFUlQsICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiBbdHlwZSwgdGFzdGUsIHNpemUsIHF1YW50aXR5XSk7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlRHJpbmsgPSBjcmVhdGVBY3Rpb24oREVMRVRFX0RSSU5LLCAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZURlc3NlcnQgPSBjcmVhdGVBY3Rpb24oREVMRVRFX0RFU1NFUlQsICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgdGFzdGUsIHNpemVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRQYXltZW50VHlwZSA9IGNyZWF0ZUFjdGlvbihTRVRfUEFZTUVOVF9UWVBFLCAodHlwZTogUGF5bWVudCkgPT4gdHlwZSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0T3JkZXJUeXBlID0gY3JlYXRlQWN0aW9uKFNFVF9PUkRFUl9UWVBFLCAodHlwZTogT3JkZXJUeXBlKSA9PiB0eXBlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0hhc0Vycm9yZWQgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNU19SRUpFQ1RFRCwgKGhhc0Vycm9yZWQ6IGJvb2xlYW4pID0+IGhhc0Vycm9yZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zSXNMb2FkaW5nID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVMsIChpc0xvYWRpbmc6IGJvb2xlYW4pID0+IGlzTG9hZGluZyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNGZXRjaERhdGFTdWNjZXNzID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVNfRlVMRklMTEVELCAoaXRlbXM6IGFueVtdKSA9PiBpdGVtcyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNBcHBlbmRTdWNjZXNzID0gY3JlYXRlQWN0aW9uKEFQUEVORF9EQVRBX0ZVTEZJTExFRCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHN1Y2Nlc3MpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zQXBwZW5kRXJyb3JlZCA9IGNyZWF0ZUFjdGlvbihBUFBFTkRfREFUQV9SRUpFQ1RFRCwgKHRleHQ6IHN0cmluZykgPT4gdGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0J1c3kgPSBjcmVhdGVBY3Rpb24oU0hPV19CVVNZLCAoaXNCdXN5OiBib29sZWFuKSA9PiBpc0J1c3kpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ0RhdGEgPSBjcmVhdGVBY3Rpb24oTE9HX0RBVEEsICh0ZXh0OiBzdHJpbmcpID0+IHRleHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsZWFyTG9nID0gY3JlYXRlQWN0aW9uKENMRUFSX0xPRyk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FuY2VsID0gY3JlYXRlQWN0aW9uKENBTkNFTCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJFcnJvciA9IGNyZWF0ZUFjdGlvbihDTEVBUl9FUlJPUik7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0TGFzdElkID0gY3JlYXRlQWN0aW9uKFNFVF9MQVNUX0lELCAobGFzdElkOiBudW1iZXIsIGxhc3RDaGVjazogQ2hlY2spID0+IFtsYXN0SWQsIGxhc3RDaGVja10pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dOb3RpZmljYXRpb24gPSBjcmVhdGVBY3Rpb24oU0hPV19OT1RJRklDQVRJT04sICh0eXBlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZykgPT4gW3R5cGUsIG1lc3NhZ2VdKTtcclxuIiwiaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL01haW5QYWdlJztcclxuaW1wb3J0IENoZWNrUGFnZSBmcm9tICcuL3BhZ2VzL0NoZWNrUGFnZSc7XHJcbmltcG9ydCBDaGVja291dFBhZ2UgZnJvbSAnLi9wYWdlcy9DaGVja291dFBhZ2UnO1xyXG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4vcGFnZXMvTm90Rm91bmRQYWdlJztcclxuaW1wb3J0IFBhcnRuZXJzUGFnZSBmcm9tICcuL3BhZ2VzL1BhcnRuZXJzUGFnZSc7XHJcbmltcG9ydCBUZXN0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9UZXN0Q29tcG9uZW50JztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICcuL2NvbXBvbmVudHMvQXBwQmFyJztcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e01haW5QYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2snIGNvbXBvbmVudD17Q2hlY2tQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2tPdXQnIGNvbXBvbmVudD17Q2hlY2tvdXRQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvcGFydG5lcnMnIGNvbXBvbmVudD17UGFydG5lcnNQYWdlfSAvPlxyXG5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL3Rlc3QnIGNvbXBvbmVudD17VGVzdENvbXBvbmVudH0gLz5cclxuICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZFBhZ2V9IC8+XHJcbiAgICA8L1N3aXRjaD5cclxuKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwUHJvcHMge1xyXG4gICAgaXNTY3JpcHRMb2FkZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PElBcHBQcm9wcywgSUFwcFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NjcmlwdExvYWRlZCB9ID0gbmV4dFByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JpcHRMb2FkZWQgJiYgIXRoaXMucHJvcHMuaXNTY3JpcHRMb2FkZWQpIHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnY2xpZW50OmF1dGgyJywgdGhpcy5pbml0Q2xpZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICAvLyBjb25zdCBhdXRoMiA9IHdpbmRvd1snZ2FwaSddLmF1dGgyLmluaXQoe1xyXG4gICAgICAgIC8vICAgICBjbGllbnRfaWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAvLyAgICAgc2NvcGU6IFNDT1BFUyxcclxuICAgICAgICAvLyAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgLy8gICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBhdXRoMi5pc1NpZ25lZEluLmxpc3Rlbih0aGlzLnNpZ25pbkNoYW5nZWQpO1xyXG5cclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVNcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5saXN0ZW4odGhpcy5zaWduaW5DaGFuZ2VkKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5pc1NpZ25lZEluLmdldCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbkNoYW5nZWQgPSAoaXNTaWduZWRJbikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBpc1NpZ25lZEluXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXV0aENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNpZ25vdXRDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTaWduZWRJbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd1snZ2FwaSddIHx8ICF3aW5kb3dbJ2dhcGknXS5hdXRoMiB8fCAhd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5nZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPEFwcEJhciB0aXRsZT17J9CT0LvQsNCy0L3QsNGPJ30gaXNTaWduZWRJbj17aXNTaWduZWRJbn0gb25Mb2dpbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gb25Mb2dvdXRDbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgIHtpc1NpZ25lZEluICYmIDxNYWluIC8+fVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBpZD1cImF1dGhvcml6ZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdub25lJyA6ICdibG9jaycgfX0+QXV0aG9yaXplPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5TaWduIE91dDwvYnV0dG9uPiAqL31cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcmlwdExvYWRlcihcclxuICAgICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnXHJcbikoQXBwKTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXJDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ9CU0L7QvNC+0LknLFxyXG4gICAgICAgIHJvdXRlOiAnLydcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgdGl0bGU6ICdUZXN0JyxcclxuICAgIC8vICAgICByb3V0ZTogJy90ZXN0J1xyXG4gICAgLy8gfVxyXG5dO1xyXG5cclxuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJhckNvbXBvbmVudFByb3BzIHtcclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGlzU2lnbmVkSW4/OiBib29sZWFuO1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuXHJcbiAgICBvbkxvZ2luQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25Mb2dvdXRDbGljaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJhckNvbXBvbmVudFN0YXRlIHtcclxuICAgIGFuY2hvckVsPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQmFyIGV4dGVuZHMgQ29tcG9uZW50PElBcHBCYXJDb21wb25lbnRQcm9wcywgSUFwcEJhckNvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG4gICAgICAgIGlmIChjdXJyZW50Um91dGUgIT09IG9wdGlvbi5yb3V0ZSkge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2gob3B0aW9uLnJvdXRlKTtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbCBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlTG9naW5DbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGlzU2lnbmVkSW4sIG9uTG9naW5DbGljaywgb25Mb2dvdXRDbGljayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2lnbmVkSW4pIHtcclxuICAgICAgICAgICAgb25Mb2dvdXRDbGljaygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb25Mb2dpbkNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1lbnUoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhbmNob3JFbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlID0gbG9jYXRpb24uaGFzaC5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYXBwYmFyX21lbnVCdXR0b24nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtb3ducz17b3BlbiA/ICdsb25nLW1lbnUnIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb25nLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBJVEVNX0hFSUdIVCAqIDQuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnMubWFwKG9wdGlvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17b3B0aW9uLnJvdXRlID09PSBjdXJyZW50Um91dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKG9wdGlvbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgaXNTaWduZWRJbiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhcHBiYXJfcm9vdCd9PlxyXG4gICAgICAgICAgICAgICAgPEFwcEJhckNvbXBvbmVudCBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17J2FwcGJhcl9ncm93J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2luQ2xpY2t9Pntpc1NpZ25lZEluID8gJ9CS0YvQudGC0LgnIDogJ9CS0L7QudGC0LgnfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIDwvQXBwQmFyQ29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFwcEJhcik7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgR3JpZExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQnVzeVByb3BzIHtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1c3k6IFJlYWN0LlNGQzxJQnVzeVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImJ1c3ktY29udGFpbmVyXCIgKyAocHJvcHMubG9hZGluZyA/IFwiXCIgOiBcIiBpbnZpc2libGVcIil9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzeVwiPlxyXG4gICAgICAgICAgICA8R3JpZExvYWRlclxyXG4gICAgICAgICAgICAgICAgY29sb3I9eycjZDAwMDZmJ31cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e3Byb3BzLmxvYWRpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWRkRGVzc2VydCwgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERlc3NlcnRUeXBlLCBNYWNhcm9uc0VudW0sIENha2VzRW51bSwgWmVwaHlyRW51bSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRGVzc2VydHNEaWN0LCBNYWNhcm9uc0NvbG9ycywgWmVwaHlyQ29sb3JzIH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgQWRkSWNvbiB9IGZyb20gJ21kaS1yZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcbmNvbnN0IE1JWF9UQVNURV9OQU1FID0gJ9Cd0LDQsdC+0YAnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZERlc3NlcnQ6ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiBkaXNwYXRjaChBZGREZXNzZXJ0KHR5cGUsIHRhc3RlLCBzaXplLCBxdWFudGl0eSkpLFxyXG4gICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSlcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVzc2VydHNDb21wb25lbnRQcm9wcyB7XHJcbiAgYWRkRGVzc2VydD86ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGhhbmRsZUNsb3NlPzogKCkgPT4gdm9pZDtcclxuICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVzc2VydHNDb21wb25lbnRTdGF0ZSB7XHJcbiAgZGVzc2VydFR5cGU/OiBEZXNzZXJ0VHlwZTtcclxuICBkZXNzZXJ0VGFzdGU/OiBzdHJpbmc7XHJcbiAgZGVzc2VydFF1YW50aXRpZXM/OiB7IFtpZDogc3RyaW5nXTogbnVtYmVyOyB9O1xyXG59XHJcblxyXG5jbGFzcyBEZXNzZXJ0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRGVzc2VydHNDb21wb25lbnRQcm9wcywgSURlc3NlcnRzQ29tcG9uZW50U3RhdGU+e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGVzc2VydFR5cGU6IG51bGwsXHJcbiAgICAgIGRlc3NlcnRUYXN0ZTogbnVsbCxcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXM6IHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmNsb3NlJyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0U2VsZWN0ID0gKGRlc3NlcnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0VHlwZTogZGVzc2VydFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0U2VsZWN0ZWQtPicgKyBkZXNzZXJ0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRUYXN0ZVNlbGVjdCA9IGFzeW5jICh0YXN0ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoZGVzc2VydFR5cGUgPT09IERlc3NlcnRUeXBlLkNha2UpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGVzc2VydFRhc3RlOiB0YXN0ZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFRhc3RlU2VsZWN0ZWQtPicgKyB0YXN0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZURlc3NlcnRJbmNyZWFzZSh0YXN0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0TWl4U2VsZWN0ID0gYXN5bmMgKHF0eSkgPT4ge1xyXG4gICAgdGhpcy5oYW5kbGVEZXNzZXJ0SW5jcmVhc2UoTUlYX1RBU1RFX05BTUUsIHF0eSk7XHJcbiAgICAvLyBhd2FpdCB0aGlzLnByb3BzLmFkZERlc3NlcnQoZGVzc2VydFR5cGUsIE1JWF9UQVNURV9OQU1FLCBudWxsLCBxdHkpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+aGFuZGxlRGVzc2VydE1peFNlbGVjdC0+JyArIHF0eSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0U2l6ZU9yUXVhbnRpdHlTZWxlY3QgPSBhc3luYyAoc2l6ZU9yUXR5KSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKGRlc3NlcnRUeXBlID09PSBEZXNzZXJ0VHlwZS5DYWtlKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBzaXplT3JRdHksIDEpO1xyXG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRTaXplU2VsZWN0ZWQtPicgKyBzaXplT3JRdHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIG51bGwsIHNpemVPclF0eSk7XHJcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFF1YW50aXR5U2VsZWN0ZWQtPicgKyBzaXplT3JRdHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmluaXNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFF1YW50aXRpZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzc2VydFF1YW50aXRpZXMpIHtcclxuICAgICAgY29uc3QgZGVzc2VydFRhc3RlID0ga2V5LnNwbGl0KCcvJylbMV07XHJcbiAgICAgIGNvbnN0IHF0eSA9IGRlc3NlcnRRdWFudGl0aWVzW2tleV07XHJcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBudWxsLCBxdHkgfHwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+aGFuZGxlRmluaXNoJyk7XHJcbiAgfVxyXG5cclxuICBnZXRJZChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlKSB7XHJcbiAgICByZXR1cm4gYCR7ZGVzc2VydFR5cGV9LyR7ZGVzc2VydFRhc3RlfWA7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0SW5jcmVhc2UgPSAodGFzdGUsIHF0eSA9IDEpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgdGFzdGUpO1xyXG4gICAgaWYgKCFkZXNzZXJ0UXVhbnRpdGllc1tpZF0pIHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNbaWRdID0gcXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNbaWRdICs9IHF0eTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFF0eUluY3JlYXNlLT4nICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgY291bnRUb3RhbERlc3NlcnRRdWFudGl0eSgpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzc2VydFF1YW50aXRpZXMpIHtcclxuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGRlc3NlcnRUeXBlKSkge1xyXG4gICAgICAgIHJlc3VsdCArPSBkZXNzZXJ0UXVhbnRpdGllc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0QXJyYXlGcm9tRW51bShlbjogYW55KSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW4pO1xyXG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgdmFsdWU6IGVuW2RdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGVzc2VydHMoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0S2V5cyA9IE9iamVjdC5rZXlzKERlc3NlcnRUeXBlKTtcclxuICAgIGNvbnN0IGRlc3NlcnRzID0gZGVzc2VydEtleXMubWFwKGQgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBkLFxyXG4gICAgICAgIHZhbHVlOiBEZXNzZXJ0VHlwZVtkXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdtYWNhcm9uQXZhdGFyJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZGQ3M2UyJyB9fT5cclxuICAgICAgICAgICAgICAgIHtkLnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRGVzc2VydFRhc3RlcygpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRRdWFudGl0aWVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGxldCBkZXNzZXJ0VGFzdGVzO1xyXG4gICAgbGV0IGV4dHJhT3B0aW9ucyA9IFtdO1xyXG4gICAgc3dpdGNoIChkZXNzZXJ0VHlwZSkge1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLkNha2U6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShDYWtlc0VudW0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLk1hY2Fyb246XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShNYWNhcm9uc0VudW0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiA2LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgNiDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogMTIsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCAxMiDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogMjQsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCAyNCDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5aZXBoeXI6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShaZXBoeXJFbnVtKTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogOCxcclxuICAgICAgICAgIHRpdGxlOiAn0J3QsNCx0L7RgCDQvdCwIDgg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXh0cmFPcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IDE2LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgMTYg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAge2Rlc3NlcnRUeXBlICE9PSBEZXNzZXJ0VHlwZS5DYWtlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQXBwbHlXcmFwZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdGl0bGU9XCJDaGVjayBPdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUZpbmlzaH0+XHJcbiAgICAgICAgICAgINCf0YDQuNC80LXQvdC40YLRjFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRlc3NlcnRUYXN0ZXMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nbWFjYXJvbkF2YXRhcicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBkZXNzZXJ0VHlwZSA9PT0gRGVzc2VydFR5cGUuTWFjYXJvbiA/IE1hY2Fyb25zQ29sb3JzW2QudmFsdWVdIDogWmVwaHlyQ29sb3JzW2QudmFsdWVdIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZC52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlICsgKGRlc3NlcnRUeXBlICE9PSBEZXNzZXJ0VHlwZS5DYWtlID8gYCgke2Rlc3NlcnRRdWFudGl0aWVzW3RoaXMuZ2V0SWQoZGVzc2VydFR5cGUsIGQudmFsdWUpXSB8fCAwfSlgIDogJycpfSAvPlxyXG4gICAgICAgICAgICAgIHtkZXNzZXJ0VHlwZSAhPT0gRGVzc2VydFR5cGUuQ2FrZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQWRkXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0SW5jcmVhc2UoZC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV4dHJhT3B0aW9ucy5tYXAobyA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0TWl4U2VsZWN0KG8udmFsdWUpfSBrZXk9e28udmFsdWV9ID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nbWFjYXJvbkF2YXRhcicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2RkNzNlMicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtvLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2Ake28udGl0bGV9KCR7ZGVzc2VydFF1YW50aXRpZXNbdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgTUlYX1RBU1RFX05BTUUpXSB8fCAwfSlgfSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXJEZXNzZXJ0U2l6ZSgpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBkZXNzZXJ0U2l6ZXMgPSBEZXNzZXJ0c0RpY3RbZGVzc2VydFR5cGVdO1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydFNpemVzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2l6ZU9yUXVhbnRpdHlTZWxlY3QoZCl9IGtleT17ZH0gPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2R9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuIGZ1bGxTY3JlZW4gPlxyXG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgeyFkZXNzZXJ0VHlwZSA/ICfQktGL0LHQtdGA0LjRgtC1INCU0LXRgdC10YDRgicgOiAoIWRlc3NlcnRUYXN0ZSA/IGDQktGL0LHQtdGA0LjRgtC1INCy0LrRg9GBICgke3RoaXMuY291bnRUb3RhbERlc3NlcnRRdWFudGl0eSgpfSlgIDogJ9CS0YvQsdC10YDQuNGC0LUg0YDQsNC30LzQtdGAJyl9XHJcbiAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgIHshZGVzc2VydFR5cGUgPyB0aGlzLnJlbmRlckRlc3NlcnRzKCkgOiAoIWRlc3NlcnRUYXN0ZSA/IHRoaXMucmVuZGVyRGVzc2VydFRhc3RlcygpIDogdGhpcy5yZW5kZXJEZXNzZXJ0U2l6ZSgpKX1cclxuICAgIDwvRGlhbG9nPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEZXNzZXJ0c0NvbXBvbmVudCkpXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBZGREcmluaywgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERyaW5rc1R5cGUsIERyaW5rIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBEcmlua3NEaWN0IH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgQWRkSWNvbiB9IGZyb20gJ21kaS1yZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGREcmluazogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gZGlzcGF0Y2goQWRkRHJpbmsodHlwZSwgc2l6ZSkpLFxyXG4gICAgICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJpbmtzQ29tcG9uZW50UHJvcHMge1xyXG4gICAgYWRkRHJpbms/OiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gICAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyaW5rc0NvbXBvbmVudFN0YXRlIHtcclxuICAgIGRyaW5rVHlwZT86IERyaW5rc1R5cGU7XHJcbiAgICBkcmlua1NpemU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIERyaW5rc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRHJpbmtzQ29tcG9uZW50UHJvcHMsIElEcmlua3NDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJpbmtUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICBkcmlua1NpemU6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5jbG9zZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyaW5rU2VsZWN0ID0gYXN5bmMgKGRyaW5rKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHJpbmtTaXplcyA9IERyaW5rc0RpY3RbZHJpbmtdO1xyXG4gICAgICAgIGlmIChkcmlua1NpemVzICYmIGRyaW5rU2l6ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZHJpbmtUeXBlOiBkcmluayxcclxuICAgICAgICAgICAgICAgIGRyaW5rU2l6ZTogZHJpbmtTaXplc1swXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRHJpbmsoZHJpbmssIGRyaW5rU2l6ZXNbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9nRGF0YShgZHJpbmtzLT5kcmlua1NlbGVjdGVkLT4ke2RyaW5rfS0+ZHJpbmtTaXplU2VsZWN0ZWQtPiR7ZHJpbmtTaXplc1swXX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRyaW5rVHlwZTogZHJpbmtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5kcmlua1NlbGVjdGVkLT4nICsgZHJpbmspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmlua1NpemVTZWxlY3QgPSBhc3luYyAoZHJpbmtTaXplKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyaW5rU2l6ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERyaW5rKGRyaW5rVHlwZSwgZHJpbmtTaXplKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkcmlua3MtPmRyaW5rU2l6ZVNlbGVjdGVkLT4nICsgZHJpbmtTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEcmlua3MoKSB7XHJcbiAgICAgICAgY29uc3QgZHJpbmtLZXlzID0gT2JqZWN0LmtleXMoRHJpbmtzVHlwZSk7XHJcbiAgICAgICAgY29uc3QgZHJpbmtzID0gZHJpbmtLZXlzLm1hcChkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IERyaW5rc1R5cGVbZF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtkcmlua3MubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEcmlua1NlbGVjdChkLnZhbHVlKX0ga2V5PXtkLmlkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdkcmlua0F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyRHJpbmtTaXplcygpIHtcclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmlua1NpemVzID0gRHJpbmtzRGljdFtkcmlua1R5cGVdO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZHJpbmtTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2l6ZVNlbGVjdChkKX0ga2V5PXtkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdkcmlua0F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPERpYWxvZyBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3BlbiBmdWxsU2NyZWVuID5cclxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2ltcGxlLWRpYWxvZy10aXRsZVwiPnshZHJpbmtUeXBlID8gJ9CS0YvQsdC10YDQuNGC0LUg0L3QsNC/0LjRgtC+0LonIDogJ9CS0YvQsdC10YDQuNGC0LUg0YDQsNC30LzQtdGAJ308L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICB7IWRyaW5rVHlwZSA/IHRoaXMucmVuZGVyRHJpbmtzKCkgOiB0aGlzLnJlbmRlckRyaW5rU2l6ZXMoKX1cclxuICAgICAgICA8L0RpYWxvZz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEcmlua3NDb21wb25lbnQpKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBFeHBhbnNpb25QYW5lbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbCc7XHJcbmltcG9ydCBFeHBhbnNpb25QYW5lbFN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5JztcclxuaW1wb3J0IEV4cGFuc2lvblBhbmVsRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbERldGFpbHMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeVxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGlzdG9yeUNvbXBvbmVudFByb3BzIHtcclxuICAgIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhpc3RvcnlDb21wb25lbnRTdGF0ZSB7XHJcbn1cclxuXHJcbmNsYXNzIEhpc3RvcnlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SUhpc3RvcnlDb21wb25lbnRQcm9wcywgSUhpc3RvcnlDb21wb25lbnRTdGF0ZT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICAgIHtoaXN0b3J5LnNvcnQoKGEsIGIpID0+IChhLmlkID4gYi5pZCkgPyAtMSA6ICgoYi5pZCA+IGEuaWQpID8gMSA6IDApKS5tYXAoaCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGtleT17aC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsIGNsYXNzTmFtZT0naGlzdG9yeUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbFN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pntg0KfQtdC6ICMke2guaWR9YH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5zaW9uUGFuZWxEZXRhaWxzIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj7QlNC10YHQtdGA0YLRizwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmRlc3NlcnRzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VHlwb2dyYXBoeSBrZXk9e2luZGV4fSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtkLnR5cGV9ICR7ZC50YXN0ZX06ICR7ZC5xdWFudGl0eSA/IGQucXVhbnRpdHkgOiBkLnNpemV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj7QndCw0L/QuNGC0LrQuDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmRyaW5rcy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFR5cG9ncmFwaHkga2V5PXtpbmRleH0gdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZC5pZH06ICR7ZC5zaXplfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+0KLQuNC/INC+0L/Qu9Cw0YLRizogPC9iPntoLnBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlzdG9yeUl0ZW1Sb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9eydzdWJoZWFkaW5nJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCi0LjQvyDQt9Cw0LrQsNC30LA6IDwvYj57aC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGlzdG9yeUNvbXBvbmVudCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmpzJztcclxuXHJcbmNvbnN0IExhcmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMsIGNvbXBvbmVudCwgb25DbGljaywgdGl0bGUsIGltYWdlVXJsIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgZm9jdXNSaXBwbGVcclxuICAgICAgICAgICAgICAgIGtleT17J21haW4nfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU9e2NsYXNzZXMuZm9jdXNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMwJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3ViaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VNYXJrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGFyZ2VCdXR0b24pOyIsImV4cG9ydCBkZWZhdWx0IHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgLy8gbWluV2lkdGg6IDMwMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnLCAvLyBPdmVycmlkZXMgaW5saW5lLXN0eWxlXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXIsICYkZm9jdXNWaXNpYmxlJzoge1xyXG4gICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICcmICRpbWFnZUJhY2tkcm9wJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlTWFya2VkJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlVGl0bGUnOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgNDAlJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogNH1weCAke3RoZW1lLnNwYWNpbmcudW5pdCArIDZ9cHhgLFxyXG4gICAgfSxcclxuICAgIGltYWdlTWFya2VkOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLFxyXG4gICAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGJvdHRvbTogLTIsXHJcbiAgICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gOXB4KScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgQ2hlY2ssIERlc3NlcnQsIERyaW5rLCBEZXNzZXJ0VHlwZSwgRHJpbmtzVHlwZSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IERyaW5rc0NvbXBvbmVudCBmcm9tICcuL0RyaW5rc0NvbXBvbmVudCc7XHJcbmltcG9ydCBEZXNzZXJ0c0NvbXBvbmVudCBmcm9tICcuL0Rlc3NlcnRzQ29tcG9uZW50JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBMYXJnZUJ1dHRvbiBmcm9tICcuL0xhcmdlQnV0dG9uJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgeyBEZWxldGVEZXNzZXJ0LCBEZWxldGVEcmluayB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgZGVzc2VydHNJbWFnZSA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9pbWFnZXMvZGVzc2VydHNfaWNvbi5qcGcnKTtcclxuY29uc3QgZHJpbmtzSW1hZ2UgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL2RyaW5rc19pY29uLmpwZycpO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrOiBzdGF0ZS5jaGVja1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZWxldGVEZXNzZXJ0OiAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZykgPT4gZGlzcGF0Y2goRGVsZXRlRGVzc2VydCh0eXBlLCB0YXN0ZSwgc2l6ZSkpLFxyXG4gICAgICAgIGRlbGV0ZURyaW5rOiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChEZWxldGVEcmluayh0eXBlLCBzaXplKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXdPcmRlckNvbXBvbmVudFByb3BzIHtcclxuICAgIGNoZWNrPzogQ2hlY2s7XHJcbiAgICBoaXN0b3J5PzogYW55O1xyXG5cclxuICAgIGRlbGV0ZURlc3NlcnQ/OiAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGRlbGV0ZURyaW5rPzogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTmV3T3JkZXJDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBzaG93RHJpbmtzPzogYm9vbGVhbjtcclxuICAgIHNob3dEZXNzZXJ0cz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIE5ld09yZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElOZXdPcmRlckNvbXBvbmVudFByb3BzLCBJTmV3T3JkZXJDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd0RyaW5rczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dEZXNzZXJ0czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRHJpbmtDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0RyaW5rczogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGVzc2VydENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RGVzc2VydHM6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvY2hlY2tPdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEZWxldGVEcmluayA9IChkcmluazogRHJpbmspID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZURyaW5rKGRyaW5rLmlkLCBkcmluay5zaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEZWxldGVEZXNzZXJ0ID0gKGRlc3NlcnQ6IERlc3NlcnQpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZURlc3NlcnQoZGVzc2VydC50eXBlLCBkZXNzZXJ0LnRhc3RlLCBkZXNzZXJ0LnNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNoZWNrQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICAgIHtjaGVjay5kcmlua3MubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtgJHtkLmlkfSAtICR7ZC5zaXplfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlRHJpbmsoZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAge2NoZWNrLmRlc3NlcnRzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YCR7ZC50eXBlfSAtICR7ZC50YXN0ZX0gLSAke2QucXVhbnRpdHl9JHtkLnNpemUgPyAoJyAtICcgKyBkLnNpemUpIDogJyd9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRGVsZXRlXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGVEZXNzZXJ0KGQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzaG93RHJpbmtzLCBzaG93RGVzc2VydHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgINCf0L7QttCw0LvRg9C50YHRgtCwLCDRgdC+0LfQtNCw0LnRgtC1INGB0L3QsNGH0LDQu9CwINGH0LXQulxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICDQndC+0LLRi9C5INC30LDQutCw0LdcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7YNCn0LXQuiAjJHtjaGVjay5pZH1gfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGVja0NvbnRlbnQoKX1cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uc1dyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQlNCV0KHQldCg0KLQqyd9IGltYWdlVXJsPXtkZXNzZXJ0c0ltYWdlfSBvbkNsaWNrPXt0aGlzLmFkZERlc3NlcnRDbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQndCQ0J/QmNCi0JrQmCd9IGltYWdlVXJsPXtkcmlua3NJbWFnZX0gb25DbGljaz17dGhpcy5hZGREcmlua0NsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbnNXcmFwZXInfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2suZGVzc2VydHMubGVuZ3RoID09PSAwICYmIGNoZWNrLmRyaW5rcy5sZW5ndGggPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dENsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCf0YDQvtC00L7Qu9C20LjRgtGMXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dEcmlua3MgJiYgPERyaW5rc0NvbXBvbmVudCBoYW5kbGVDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dEcmlua3M6IGZhbHNlIH0pfSAvPn1cclxuICAgICAgICAgICAge3Nob3dEZXNzZXJ0cyAmJiA8RGVzc2VydHNDb21wb25lbnQgaGFuZGxlQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93RGVzc2VydHM6IGZhbHNlIH0pfSAvPn1cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChOZXdPcmRlckNvbXBvbmVudCkpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgRXJyb3JJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvcic7XHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbyc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJDb250ZW50JztcclxuaW1wb3J0IFdhcm5pbmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYXJuaW5nJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCB7IENsZWFyRXJyb3IgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBzdGF0ZS5lcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgdHlwZTogc3RhdGUubm90aWZpY2F0aW9uVHlwZVxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhckVycm9yOiAoKSA9PiBkaXNwYXRjaChDbGVhckVycm9yKCkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVmFyaWFudEljb24ge1xyXG4gICAgc3VjY2VzcyxcclxuICAgIHdhcm5pbmcsXHJcbiAgICBlcnJvcixcclxuICAgIGluZm9cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uQ29tcG9uZW50UHJvcHMge1xyXG4gICAgLy8gY2xhc3NlczogYW55O1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgdHlwZTogVmFyaWFudEljb247XHJcblxyXG4gICAgY2xlYXJFcnJvcj86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvbkNvbXBvbmVudFN0YXRlIHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJTm90aWZpY2F0aW9uQ29tcG9uZW50UHJvcHMsIElOb3RpZmljYXRpb25Db21wb25lbnRTdGF0ZT57XHJcbiAgICBnZXRJY29uKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uc3VjY2VzczpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IENoZWNrQ2lyY2xlSWNvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLndhcm5pbmc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBXYXJuaW5nSWNvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLmVycm9yOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gRXJyb3JJY29uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uaW5mbzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IEluZm9JY29uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENsYXNzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uc3VjY2VzczpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLndhcm5pbmc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnd2FybmluZyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5lcnJvcjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdlcnJvcic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5pbmZvOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ2luZm8nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgSWNvbiA9IHRoaXMuZ2V0SWNvbigpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvcGVuPXshIW1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNuYWNrYmFyQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5nZXRDbGFzcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjbGllbnQtc25hY2tiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNsaWVudC1zbmFja2JhclwiIGNsYXNzTmFtZT17J21lc3NhZ2UnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaWNvbicsICdpY29uLXZhcmlhbnQnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbm90aWZpY2F0aW9uQ2xvc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShOb3RpZmljYXRpb25Db21wb25lbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgUGFydG5lcnNFbnVtIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBQcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdCB9IGZyb20gJy4uL2FjdGlvbnMnXHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgIH07XHJcbn07XHJcblxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0OiAocGFydG5lcjogc3RyaW5nLCBtYWNRdHk6IG51bWJlciwgemVwUXR5OiBudW1iZXIpID0+IGRpc3BhdGNoKFByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0KHBhcnRuZXIsIG1hY1F0eSwgemVwUXR5KSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0bmVyc0NvbXBvbmVudFByb3BzIHtcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcbiAgICBwcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdD86IChwYXJ0bmVyOiBzdHJpbmcsIG1hY1F0eTogbnVtYmVyLCB6ZXBRdHk6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFydG5lcnNDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBwYXJ0bmVyPzogc3RyaW5nO1xyXG4gICAgbWFjYXJvbnNRdHk/OiBudW1iZXI7XHJcbiAgICB6ZXBoeXJRdHk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIFBhcnRuZXJzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElQYXJ0bmVyc0NvbXBvbmVudFByb3BzLCBJUGFydG5lcnNDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFydG5lcjogJycsXHJcbiAgICAgICAgICAgIG1hY2Fyb25zUXR5OiAwLFxyXG4gICAgICAgICAgICB6ZXBoeXJRdHk6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJyYXlGcm9tRW51bShlbjogYW55KSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVuKTtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcChkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGVuW2RdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGFydG5lclNlbGVjdCA9IChldikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRuZXIgPSBldi50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhcnRuZXIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWFjYXJvbnNRdHlDaGFuZ2UgPSAoZXYpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWFjYXJvbnNRdHk6IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVplcGh5clF0eUNoYW5nZSA9IChldikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB6ZXBoeXJRdHk6IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0LCBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgcGFydG5lciwgbWFjYXJvbnNRdHksIHplcGh5clF0eX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0KHBhcnRuZXIsIG1hY2Fyb25zUXR5LCB6ZXBoeXJRdHkpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhcnRuZXIsIG1hY2Fyb25zUXR5LCB6ZXBoeXJRdHkgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcGFydG5lcnMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oUGFydG5lcnNFbnVtKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaGVhZGxpbmVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAg0J7Qv9GC0L7QstGL0Lkg0LfQsNC60LDQt1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9J3BhcnRuZXJTZWxlY3RXcmFwcGVyJz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJwYXJ0bmVyLXNlbGVjdFwiPtCa0L7RhNC10LnQvdGPPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJ0bmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhcnRuZXJTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFydG5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAncGFydG5lci1zZWxlY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT5Ob25lPC9lbT5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydG5lcnMubWFwKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSBrZXk9e3AuaWR9IHZhbHVlPXtwLnZhbHVlfT57cC52YWx1ZX08L01lbnVJdGVtPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQnNCw0LrQsNGA0L7QvdGLXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXttYWNhcm9uc1F0eX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU1hY2Fyb25zUXR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC80LDQutCw0YDQvtC90YFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCX0LXRhNC40YBcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3plcGh5clF0eX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVplcGh5clF0eUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwYXJ0bmVyfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQt9C10YTQuNGA0LBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbnNXcmFwZXInfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dENsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCT0L7RgtC+0LLQvlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gICAgKFBhcnRuZXJzQ29tcG9uZW50KSk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBQcm9jZXNzRmV0Y2hEYXRhLCBQcm9jZXNzQXBwZW5kRGF0YSwgUHJvY2Vzc1VwZGF0ZURhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBURVNUX1NQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMsXHJcbiAgICAgICAgaGFzRXJyb3JlZDogc3RhdGUuaGFzRXJyb3JlZCxcclxuICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZyxcclxuICAgICAgICBsYWJlbDogc3RhdGUubGFiZWxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChQcm9jZXNzRmV0Y2hEYXRhKHVybCkpLFxyXG4gICAgICAgIGFwcGVuZERhdGE6ICh1cmwsIHJhbmdlLCBkYXRhKSA9PiBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YSh1cmwsIHJhbmdlLCBkYXRhKSksXHJcbiAgICAgICAgdXBkYXRlRGF0YTogKHVybCwgZGF0YSkgPT4gZGlzcGF0Y2goUHJvY2Vzc1VwZGF0ZURhdGEodXJsLCBkYXRhKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50UHJvcHMge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBpdGVtcz86IGFueTtcclxuICAgIGhhc0Vycm9yZWQ/OiBib29sZWFuO1xyXG4gICAgaXNMb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgICBpc1NjcmlwdExvYWRlZD86IGJvb2xlYW47XHJcbiAgICBpc1NjcmlwdExvYWRTdWNjZWVkPzogYm9vbGVhbjtcclxuXHJcbiAgICBmZXRjaERhdGE/OiAodXJsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBhcHBlbmREYXRhPzogKHVybDogc3RyaW5nLCByYW5nZTogc3RyaW5nLCBkYXRhOiBhbnlbXSkgPT4gdm9pZDtcclxuICAgIHVwZGF0ZURhdGE/OiAodXJsOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50U3RhdGUge1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SVRlc3RDb21wb25lbnRQcm9wcywgSVRlc3RDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBdXRoQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2lnbm91dENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbk91dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXBwZW5kQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJYTFwiLCBcIjFcIiwgXCIwXCIsIGRhdGVUaW1lLnRvVVRDU3RyaW5nKCldXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCByYW5nZSA9IFwiUmF3RGF0YSFBOkVcIjtcclxuICAgICAgICB0aGlzLnByb3BzLmFwcGVuZERhdGEoVEVTVF9TUFJFQURTSEVFVF9JRCwgcmFuZ2UsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwZGF0ZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJDb3N0XCIsIFwiU3RvY2tlZFwiLCBcIlNoaXAgRGF0ZVwiXSxcclxuICAgICAgICAgICAgW1wiV2hlZWwxXCIsIFwiJDIwLjUwXCIsIFwiNFwiLCBcIjMvMS8yMDE2XCJdLFxyXG4gICAgICAgICAgICBbXCJEb29yMVwiLCBcIiQxNVwiLCBcIjJcIiwgXCIzLzE1LzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkVuZ2luZTFcIiwgXCIkMTAwXCIsIFwiMVwiLCBcIjMwLzIwLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIlRvdGFsczFcIiwgXCI9U1VNKEIyOkI0KVwiLCBcIj1TVU0oQzI6QzQpXCIsIFwiPU1BWChEMjpENClcIl1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGF0YShURVNUX1NQUkVBRFNIRUVUX0lELCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTY3JpcHRMb2FkZWQgfSA9IG5leHRQcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2NyaXB0TG9hZGVkICYmICF0aGlzLnByb3BzLmlzU2NyaXB0TG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmxvYWQoJ2NsaWVudDphdXRoMicsIHRoaXMuaW5pdENsaWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFRFU1RfU1BSRUFEU0hFRVRfSUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hEYXRhKCdodHRwOi8vNTgyNmVkOTYzOTAwZDYxMjAwMDEzOGJkLm1vY2thcGkuaW8vaXRlbXMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgaGFzRXJyb3JlZCwgaXNMb2FkaW5nLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGlzU2lnbmVkSW4gfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgaWYgKGhhc0Vycm9yZWQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPHA+U29ycnkhIFRoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBpdGVtczwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPHA+TG9hZGluZ+KApjwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVswXSArIGl0ZW1bMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8Lz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAge3Jlc3VsdH1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFwcGVuZENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5BcHBlbmQgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUNsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5VcGRhdGUgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImF1dGhvcml6ZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdub25lJyA6ICdibG9jaycgfX0+QXV0aG9yaXplPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5TaWduIE91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0TG9hZGVyKFxyXG4gICAgJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcydcclxuKShjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZXN0Q29tcG9uZW50KSlcclxuIiwiZXhwb3J0IGNvbnN0IERJU0NPVkVSWV9ET0NTID0gW1wiaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vJGRpc2NvdmVyeS9yZXN0P3ZlcnNpb249djRcIl07XHJcbmV4cG9ydCBjb25zdCBTQ09QRVMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzXCI7XHJcbmV4cG9ydCBjb25zdCBDTElFTlRfSUQgPSAnODQyNDE3MTk4NzY3LTdrNDJwdDllY2d0dTVmN29vcG5nMW9xdTNhNzlpNWk5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcclxuZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSAnQUl6YVN5QWxJNWk4T090dzhhRUVNUzQ4RTlwb3VFcHRxOHRFZzJNJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfU1BSRUFEU0hFRVRfSUQgPSAnMU9iTWg4N2RObWl6WGJkV2tIOVRpcWZyQ2ZBcGtfcnF4UEd1UV96TmdKSU0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR1NfU1BSRUFEU0hFRVRfSUQgPSAnMU5QWW9WOVlzNTJ6ZjlWX05rbFE1SmRYaGpwcEJMZTBkQzlUNDMzWlk3UDgnO1xyXG5leHBvcnQgY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVVCdUV3cVV5Qkl2dlkxaWhtRXA5aGIxajhtNEpDcFRsLWE4bUo2UmpVVncnO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5zY3NzJztcclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3N0b3JlL2luaXRpYWxTdGF0ZSc7XHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XHJcbnJvb3Quc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG5yZW5kZXIoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8Um91dGVyID5cclxuICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICByb290XHJcbik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBOZXdPcmRlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgQ2hlY2tQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElDaGVja1BhZ2VQcm9wcywgYW55PntcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+ICAgICAgICAgIFxyXG4gICAgICAgICAgPE5ld09yZGVyQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoQ2hlY2tQYWdlKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IFBheW1lbnQsIE9yZGVyVHlwZSwgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IFByb2Nlc3NDaGVja291dCwgU2V0UGF5bWVudFR5cGUsIFNldE9yZGVyVHlwZSwgTG9nRGF0YSwgQ2FuY2VsIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVjazogc3RhdGUuY2hlY2tcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFuZGxlQ2hlY2tvdXQ6ICgpID0+IGRpc3BhdGNoKFByb2Nlc3NDaGVja291dCgpKSxcclxuICAgICAgICBzZXRQYXltZW50VHlwZTogKHR5cGU6IFBheW1lbnQpID0+IGRpc3BhdGNoKFNldFBheW1lbnRUeXBlKHR5cGUpKSxcclxuICAgICAgICBzZXRPcmRlclR5cGU6ICh0eXBlOiBPcmRlclR5cGUpID0+IGRpc3BhdGNoKFNldE9yZGVyVHlwZSh0eXBlKSksXHJcbiAgICAgICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSksXHJcbiAgICAgICAgaGFuZGxlQ2FuY2VsOiAoKSA9PiBkaXNwYXRjaChDYW5jZWwoKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja291dFBhZ2VQcm9wcyB7XHJcbiAgICBoaXN0b3J5PzogYW55O1xyXG4gICAgY2hlY2s/OiBDaGVjaztcclxuXHJcbiAgICBzZXRQYXltZW50VHlwZT86ICh0eXBlOiBQYXltZW50KSA9PiB2b2lkO1xyXG4gICAgc2V0T3JkZXJUeXBlPzogKHR5cGU6IE9yZGVyVHlwZSkgPT4gdm9pZDtcclxuICAgIGhhbmRsZUNoZWNrb3V0PzogKCkgPT4gdm9pZDtcclxuICAgIGhhbmRsZUNhbmNlbD86ICgpID0+IHZvaWQ7XHJcbiAgICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgQ2hlY2tvdXRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElDaGVja291dFBhZ2VQcm9wcywgYW55PntcclxuICAgIGhhbmRsZUNoZWNrb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXQoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5jaGVja291dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPmNhbmNlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGVjaycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5iYWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UgPSAodHlwZTogUGF5bWVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UGF5bWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPnBheW1lbnRUeXBlQ2hhbmdlZC0+JyArIHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9yZGVyVHlwZUNoYW5nZSA9ICh0eXBlOiBPcmRlclR5cGUpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldE9yZGVyVHlwZSh0eXBlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+b3JkZXJUeXBlQ2hhbmdlZC0+JyArIHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAg0J/QvtC20LDQu9GD0LnRgdGC0LAsINGB0L7Qt9C00LDQudGC0LUg0YHQvdCw0YfQsNC70LAg0YfQtdC6XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVyJ30gcmFpc2VkPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaGVhZGxpbmVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQodGC0YDQsNC90LjRhtCwINCy0YvQsdC+0YDQsCDQv9Cw0YDQsNC80LXRgtGA0L7QsiDRh9C10LrQsFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRDb250cm9sR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KLQuNC/INC/0LvQsNGC0LXQttCwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnBheW1lbnQgPT09IFBheW1lbnQuQ2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UoUGF5bWVudC5DYXJkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1BheW1lbnQuQ2FyZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCa0LDRgNGC0LBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnBheW1lbnQgPT09IFBheW1lbnQuQ2FzaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UoUGF5bWVudC5DYXNoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1BheW1lbnQuQ2FzaC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCd0LDQu9C40YfQvdGL0LVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dENvbnRyb2xHcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQotC40L8g0LfQsNC60LDQt9CwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnR5cGUgPT09IE9yZGVyVHlwZS5QcmVPcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlT3JkZXJUeXBlQ2hhbmdlKE9yZGVyVHlwZS5QcmVPcmRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtPcmRlclR5cGUuUHJlT3JkZXIudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQn9GA0LXQtNC30LDQutCw0LdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnR5cGUgPT09IE9yZGVyVHlwZS5TaG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVPcmRlclR5cGVDaGFuZ2UoT3JkZXJUeXBlLlNob3ApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlNob3AudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQktC40YLRgNC40L3QsFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbnNXcmFwZXInfT4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJkZWZhdWx0XCIgdGl0bGU9XCJCYWNrXCIgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0LDQt9Cw0LRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHRpdGxlPVwiQ2hlY2sgT3V0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDaGVja291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0L7QtNC+0LvQttC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hlY2tvdXRQYWdlKSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDcmVhdGVDaGVjaywgTG9nRGF0YSwgQ2xlYXJFcnJvciwgUHJvY2Vzc0ZldGNoRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IExhcmdlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24nO1xyXG5pbXBvcnQgSGlzdG9yeUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0hpc3RvcnlDb21wb25lbnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgQnVzeSB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnVzeSc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuY29uc3QgaW1hZ2VVcmwgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL21haW5faWNvbi5qcGcnKTtcclxuY29uc3QgcGFydG5lclVybCA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9pbWFnZXMvcGFydG5lcnNfaWNvbi5qcGcnKTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LFxyXG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmdcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWF0ZUNoZWNrOiAoKSA9PiBkaXNwYXRjaChDcmVhdGVDaGVjaygpKSxcclxuICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpLFxyXG4gICAgZmV0Y2hEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChQcm9jZXNzRmV0Y2hEYXRhKHVybCkpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IENrZWNrTGluayA9IHByb3BzID0+IDxMaW5rIHRvPVwiL2NoZWNrXCIgey4uLnByb3BzfSAvPjtcclxuY29uc3QgUGFydG5lcnNMaW5rID0gcHJvcHMgPT4gPExpbmsgdG89XCIvcGFydG5lcnNcIiB7Li4ucHJvcHN9IC8+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWFpblBhZ2VQcm9wcyB7XHJcbiAgaGlzdG9yeT86IEFycmF5PENoZWNrPjtcclxuICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG5cclxuICBjcmVhdGVDaGVjaz86ICgpID0+IHZvaWQ7XHJcbiAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgZmV0Y2hEYXRhPzogKHVybDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jbGFzcyBNYWluUGFnZSBleHRlbmRzIENvbXBvbmVudDxJTWFpblBhZ2VQcm9wcywgYW55PntcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICghaGlzdG9yeSB8fCAhaGlzdG9yeS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaERhdGEoU1BSRUFEU0hFRVRfSUQpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uTmV3Q2hlY2tDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuY3JlYXRlQ2hlY2soKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnbWFpblBhZ2UtPm5ld0NoZWNrJyk7XHJcbiAgfVxyXG5cclxuICBvbk5ld1BhcnRuZXJzQ2hlY2tDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuY3JlYXRlQ2hlY2soKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnbWFpblBhZ2UtPm9uTmV3UGFydG5lcnNDaGVja0NsaWNrJyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3Nlcz17eyByb290OiAnY2FyZFJvb3QnIH19PlxyXG4gICAgICAgICAgPExhcmdlQnV0dG9uIHRpdGxlPXsn0KDQntCX0J3QmNCn0J3Qq9CZINCX0JDQmtCQ0JcnfSBjb21wb25lbnQ9e0NrZWNrTGlua30gaW1hZ2VVcmw9e2ltYWdlVXJsfSBvbkNsaWNrPXt0aGlzLm9uTmV3Q2hlY2tDbGlja30gLz5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzZXM9e3sgcm9vdDogJ2NhcmRSb290JyB9fT5cclxuICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9Ce0J/QotCe0JLQq9CZINCX0JDQmtCQ0JcnfSBjb21wb25lbnQ9e1BhcnRuZXJzTGlua30gaW1hZ2VVcmw9e3BhcnRuZXJVcmx9IG9uQ2xpY2s9e3RoaXMub25OZXdQYXJ0bmVyc0NoZWNrQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVyJ30gcmFpc2VkPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaGVhZGxpbmVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICDQmNGB0YLQvtGA0LjRj1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEhpc3RvcnlDb21wb25lbnQgLz5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbkNvbXBvbmVudCAvPlxyXG4gICAgICAgIDxCdXN5IGxvYWRpbmc9e2lzTG9hZGluZ30gLz5cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgKE1haW5QYWdlKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm90Rm91bmRQYWdlUHJvcHMge1xyXG59XHJcblxyXG5jbGFzcyBOb3RGb3VuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SU5vdEZvdW5kUGFnZVByb3BzLCBhbnk+e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICBOb3QgRm91bmRcclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoTm90Rm91bmRQYWdlKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFydG5lcnNDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9QYXJ0bmVyc0NvbXBvbmVudCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0bmVyc1BhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIFBhcnRuZXJzUGFnZSBleHRlbmRzIENvbXBvbmVudDxJUGFydG5lcnNQYWdlUHJvcHMsIGFueT57XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PiAgICAgICAgICBcclxuICAgICAgICAgIDxQYXJ0bmVyc0NvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgKFBhcnRuZXJzUGFnZSlcclxuIiwiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucywgQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIExPQURfSVRFTVMsXHJcbiAgICBMT0FEX0lURU1TX0ZVTEZJTExFRCxcclxuICAgIExPQURfSVRFTVNfUkVKRUNURUQsXHJcbiAgICBTSE9XX0JVU1ksXHJcbiAgICBDUkVBVEVfQ0hFQ0ssXHJcbiAgICBBRERfRFJJTkssXHJcbiAgICBBRERfREVTU0VSVCxcclxuICAgIFBST0NFU1NfQ0hFQ0tPVVQsXHJcbiAgICBTRVRfUEFZTUVOVF9UWVBFLFxyXG4gICAgU0VUX09SREVSX1RZUEUsXHJcbiAgICBBUFBFTkRfREFUQV9GVUxGSUxMRUQsXHJcbiAgICBBUFBFTkRfREFUQV9SRUpFQ1RFRCxcclxuICAgIExPR19EQVRBLFxyXG4gICAgQ0xFQVJfTE9HLFxyXG4gICAgQ0FOQ0VMLFxyXG4gICAgQ0xFQVJfRVJST1IsXHJcbiAgICBERUxFVEVfREVTU0VSVCxcclxuICAgIERFTEVURV9EUklOSyxcclxuICAgIFNFVF9MQVNUX0lELFxyXG4gICAgU0hPV19OT1RJRklDQVRJT05cclxufSBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgeyBDaGVjaywgRGVzc2VydCwgRHJpbmssIFBheW1lbnQsIE9yZGVyVHlwZSB9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5cclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3N0b3JlL2luaXRpYWxTdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcclxuICAgIFtDUkVBVEVfQ0hFQ0tdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbGFzdElkIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBjaGVjazogQ2hlY2sgPSB7XHJcbiAgICAgICAgICAgIGlkOiBsYXN0SWQgKyAxLFxyXG4gICAgICAgICAgICBkZXNzZXJ0czogbmV3IEFycmF5PERlc3NlcnQ+KCksXHJcbiAgICAgICAgICAgIGRyaW5rczogbmV3IEFycmF5PERyaW5rPigpLFxyXG4gICAgICAgICAgICBpc0ZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcGF5bWVudDogUGF5bWVudC5DYXNoLFxyXG4gICAgICAgICAgICB0eXBlOiBPcmRlclR5cGUuU2hvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FERF9EUklOS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgZHJpbms6IERyaW5rID0ge1xyXG4gICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgIHNpemU6IGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGVjay5kcmlua3MucHVzaChkcmluayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0RFTEVURV9EUklOS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbmV3Q2hlY2sgPSB7Li4uY2hlY2t9O1xyXG5cclxuICAgICAgICBjb25zdCBjb21wYXJhdG9yID0gKHsgaWQsIHNpemUgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWQgPT09IGFjdGlvbi5wYXlsb2FkWzBdICYmIHNpemUgPT09IGFjdGlvbi5wYXlsb2FkWzFdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0NoZWNrLmRyaW5rcyA9IGNoZWNrLmRyaW5rcy5maWx0ZXIoZCA9PiBjb21wYXJhdG9yKGQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrOiBuZXdDaGVja1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBRERfREVTU0VSVF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRGVzc2VydCA9IGNoZWNrLmRlc3NlcnRzLmZpbmQoKGQ6IERlc3NlcnQpID0+XHJcbiAgICAgICAgICAgIGQudHlwZSA9PT0gYWN0aW9uLnBheWxvYWRbMF1cclxuICAgICAgICAgICAgJiYgZC50YXN0ZSA9PT0gYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgJiYgZC5zaXplID09PSBhY3Rpb24ucGF5bG9hZFsyXSk7XHJcblxyXG4gICAgICAgIGlmICghIWV4aXN0aW5nRGVzc2VydCkge1xyXG4gICAgICAgICAgICBleGlzdGluZ0Rlc3NlcnQucXVhbnRpdHkgKz0gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydDogRGVzc2VydCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbi5wYXlsb2FkWzBdLFxyXG4gICAgICAgICAgICAgICAgdGFzdGU6IGFjdGlvbi5wYXlsb2FkWzFdLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWRbMl0sXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogYWN0aW9uLnBheWxvYWRbM11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2hlY2suZGVzc2VydHMucHVzaChkZXNzZXJ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVja1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtERUxFVEVfREVTU0VSVF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbmV3Q2hlY2sgPSB7Li4uY2hlY2t9O1xyXG5cclxuICAgICAgICBjb25zdCBjb21wYXJhdG9yID0gKHsgdHlwZSwgdGFzdGUsIHNpemUgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gYWN0aW9uLnBheWxvYWRbMF0gJiYgdGFzdGUgPT09IGFjdGlvbi5wYXlsb2FkWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbM10pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2l6ZSAhPT0gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hlY2suZGVzc2VydHMgPSBuZXdDaGVjay5kZXNzZXJ0cy5maWx0ZXIoZCA9PiBjb21wYXJhdG9yKGQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrOiBuZXdDaGVja1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtQUk9DRVNTX0NIRUNLT1VUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrLCBoaXN0b3J5LCBsYXN0SWQgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLmlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChjaGVjayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrOiBudWxsLFxyXG4gICAgICAgICAgICBoaXN0b3J5OiBbLi4uaGlzdG9yeV0sXHJcbiAgICAgICAgICAgIGxhc3RJZDogbGFzdElkICsgMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtTRVRfUEFZTUVOVF9UWVBFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjaGVjay5wYXltZW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiB7IC4uLmNoZWNrIH0gfTtcclxuICAgIH0sXHJcbiAgICBbU0VUX09SREVSX1RZUEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLnR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2s6IHsgLi4uY2hlY2sgfSB9O1xyXG4gICAgfSxcclxuICAgIFtMT0FEX0lURU1TXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtMT0FEX0lURU1TX0ZVTEZJTExFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtMT0FEX0lURU1TX1JFSkVDVEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaGFzRXJyb3JlZDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbQVBQRU5EX0RBVEFfRlVMRklMTEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiAhYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbQVBQRU5EX0RBVEFfUkVKRUNURURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1NIT1dfQlVTWV06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBpc0J1c3kgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNCdXN5IH07XHJcbiAgICB9LFxyXG4gICAgW0xPR19EQVRBXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBjb25zdCB7IGxvZyB9ID0gc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvZzogYCR7bG9nfTske3RleHR9YCB9O1xyXG4gICAgfSxcclxuICAgIFtDTEVBUl9MT0ddOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvZzogJycgfTtcclxuICAgIH0sXHJcbiAgICBbQ0xFQVJfRVJST1JdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yTWVzc2FnZTogJycgfTtcclxuICAgIH0sXHJcbiAgICBbQ0FOQ0VMXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogbnVsbCB9O1xyXG4gICAgfSxcclxuICAgIFtTRVRfTEFTVF9JRF06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaGlzdG9yeTogW2FjdGlvbi5wYXlsb2FkWzFdXSxcclxuICAgICAgICAgICAgbGFzdElkOiBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtTSE9XX05PVElGSUNBVElPTl06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBhY3Rpb24ucGF5bG9hZFsxXSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVHlwZTogYWN0aW9uLnBheWxvYWRbMF1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0sIGluaXRpYWxTdGF0ZSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIEFueUFjdGlvbiwgU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2VyJztcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgICAgICByb290UmVkdWNlcixcclxuICAgICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaGFzRXJyb3JlZDogZmFsc2UsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgY2hlY2s6IG51bGwsXHJcbiAgICBoaXN0b3J5OiBuZXcgQXJyYXk8Q2hlY2s+KCksXHJcbiAgICBsb2c6ICcnLFxyXG4gICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgIGxhc3RJZDogMCxcclxuICAgIG5vdGlmaWNhdGlvblR5cGU6IDBcclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nbG9iYWwuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IERyaW5rc1R5cGUsIERlc3NlcnRUeXBlLCBNYWNhcm9uc0VudW0sIFplcGh5ckVudW0sIFBhcnRuZXJzRW51bSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyaW5rc0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8c3RyaW5nPiB9ID0ge307XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5DYXBwdWNpbm9dID0gWycxNzUg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRmxhdFdoaXRlXSA9IFsnMTc1INC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlJhZl0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9dID0gWycxMjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vTWlsa10gPSBbJzEyMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Mb25nQmxhY2tdID0gWycyMDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRXNwcmVzc29dID0gWyczMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Eb3BwaW9dID0gWyc2MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5NYWNoaWF0b10gPSBbJzkwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlTGF2ZW5kZXJdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVDYXJhbWVsXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlT3JhbmdlXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkNhY2FvXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUdyZWVuXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUJsYWNrXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUhlcmJhbF0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TcGVhY2lhbFRlYVBlYXJMaW1lXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFPcmFuZ2VdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3BlY2lhbFRlYUdpbmdlcl0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Ib3RDaG9jb2xhdGVdID0gWycxNzUg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGVtb25hZGVTdHJhd2JlcnJ5XSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlQ2l0cnVzXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlUGFzc2lvbl0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5JY2VMYXR0ZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TeXJvcF0gPSBbJzAg0LzQuyddO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc3NlcnRzRGljdDogeyBbaWQ6IHN0cmluZ10gOiBBcnJheTxhbnk+IH0gPSB7fTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLk1hY2Fyb25dID0gWzEsIDYsIDEyLCAyNF07XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5aZXBoeXJdID0gWzEsIDgsIDE2XTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLkNha2VdID0gWycxOCDRgdC8JywgJzIyINGB0LwnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBEcmlua1ByaWNlc0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8c3RyaW5nPiB9ID0ge307XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkNhcHB1Y2lub10gPSBbJzI1JywgJzQwJ107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlXSA9IFsnMjgnLCAnMzUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuRmxhdFdoaXRlXSA9IFsnMzUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuUmFmXSA9IFsnMzgnLCAnNDUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vXSA9IFsnMjAnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vTWlsa10gPSBbJzI1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxvbmdCbGFja10gPSBbJzMwJ107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkVzcHJlc3NvXSA9IFsnMjAnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuRG9wcGlvXSA9IFsnMzAnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTWFjaGlhdG9dID0gWycyMiddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZUxhdmVuZGVyXSA9IFsnMzInLCAnNDAnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGF0dGVDYXJhbWVsXSA9IFsnMzInLCAnNDAnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGF0dGVPcmFuZ2VdID0gWyczMicsICc0MCddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5DYWNhb10gPSBbJzI4JywgJzM1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlRlYUdyZWVuXSA9IFsnMjUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuVGVhQmxhY2tdID0gWycyNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFIZXJiYWxdID0gWycyNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5TcGVhY2lhbFRlYVBlYXJMaW1lXSA9IFsnMzUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3BlY2lhbFRlYU9yYW5nZV0gPSBbJzM1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFHaW5nZXJdID0gWyczNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5Ib3RDaG9jb2xhdGVdID0gWyc1NSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVN0cmF3YmVycnldID0gWyczNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbJzM1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlUGFzc2lvbl0gPSBbJzM1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkljZUxhdHRlXSA9IFsnNDAnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWyc1J107XHJcblxyXG5leHBvcnQgY29uc3QgQ2FmZmVlUHJpY2VzOiB7IFtpZDogc3RyaW5nXSA6IG51bWJlciB9ID0ge307XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uQ29mZmVlSXNdID0gMTc7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uRmlyc3RQb2ludF0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5DdWJhQ29mZmVlXSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLlByb2dyZXNzXSA9IDIwO1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLktsYXNzbmFLYXZhXSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkNvZmZlZUFuZFRoZUNpdHldID0gMTk7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uSWxNaW9dID0gMTk7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uU3R1ZGlvQ29mZmVlXSA9IDIwO1xyXG5cclxuZXhwb3J0IGNvbnN0IFpFUEhZUl9QUklDRSA9IDExO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hY2Fyb25zQ29sb3JzOiB7IFtpZDogc3RyaW5nXSA6IHN0cmluZyB9ID0ge307XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5Eb3JCbHVlUGVhcl0gPSAnI2I3ZTRmNyc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5QYXJtZXNhbkZpZ3VlXSA9ICcjZmNmN2U4JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLlN0cmF3YmVycnlDaGVlc2VjYWtlXSA9ICcjZmZkZGRkJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLlJhc3BiZXJyeV0gPSAnI2ZmYTVjZic7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5DdXJyYW50XSA9ICcjYmM0NWM2JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkxhdmVuZGVyQmxhY2tiZXJyeV0gPSAnI2I1ODdmZic7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5NYW5nb1Bhc3Npb25dID0gJyNmZmRkODcnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uQ29mZmVlQ2FyYW1lbF0gPSAnI2E4NzMwMSc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5DaG9jb2xhdGVdID0gJyM0OTI5MDgnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uUGlzdGFjaGlvXSA9ICcjODVkZDkzJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkxpbWVCYXNpbF0gPSAnIzlmZjI1Yyc7XHJcblxyXG5leHBvcnQgY29uc3QgWmVwaHlyQ29sb3JzOiB7IFtpZDogc3RyaW5nXSA6IHN0cmluZyB9ID0ge307XHJcblplcGh5ckNvbG9yc1taZXBoeXJFbnVtLkFwcGxlXSA9ICcjZmZmYmYyJztcclxuWmVwaHlyQ29sb3JzW1plcGh5ckVudW0uQXByaWNvdFBhc3Npb25GcnVpdF0gPSAnI2ZmZTZiZic7XHJcblplcGh5ckNvbG9yc1taZXBoeXJFbnVtLkN1cnJhbnRdID0gJyNkOTc40LVkJztcclxuWmVwaHlyQ29sb3JzW1plcGh5ckVudW0uU3RyYXdiZXJyeUNyYW5iZXJyeV0gPSAnI2Y0OTdiOSc7IiwiZXhwb3J0IGludGVyZmFjZSBEZXNzZXJ0IHtcclxuICAgIHR5cGU6IERlc3NlcnRUeXBlLFxyXG4gICAgdGFzdGU6IHN0cmluZyxcclxuICAgIHNpemU6IHN0cmluZ1xyXG4gICAgcXVhbnRpdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmluayB7XHJcbiAgICBpZDogRHJpbmtzVHlwZSxcclxuICAgIHNpemU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBkZXNzZXJ0czogQXJyYXk8RGVzc2VydD4sXHJcbiAgICBkcmlua3M6IEFycmF5PERyaW5rPixcclxuICAgIGlzRmluaXNoZWQ6IGJvb2xlYW4sXHJcbiAgICBwYXltZW50OiBQYXltZW50LFxyXG4gICAgdHlwZTogT3JkZXJUeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBheW1lbnQge1xyXG4gICAgQ2FyZCA9ICfQmtCw0YDRgtCwJyxcclxuICAgIENhc2ggPSAn0J3QsNC70LjRh9C60LAnLFxyXG4gICAgT3RoZXIgPSAn0JTRgNGD0LPQvtC1J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlclR5cGUge1xyXG4gICAgUHJlT3JkZXIgPSAn0J/RgNC10LTQt9Cw0LrQsNC3JyxcclxuICAgIFNob3AgPSAn0JLQuNGC0YDQuNC90LAnLFxyXG4gICAgT3RoZXIgPSAn0JTRgNGD0LPQvtC1J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEZXNzZXJ0VHlwZSB7XHJcbiAgICBNYWNhcm9uID0gJ9Cc0LDQutCw0YDQvtC90YEnLFxyXG4gICAgWmVwaHlyID0gJ9CX0LXRhNC40YAnLFxyXG4gICAgQ2FrZSA9ICfQotC+0YDRgidcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFjYXJvbnNFbnVtIHtcclxuICAgIERvckJsdWVQZWFyID0gXCLQlNC+0LEt0JHQu9GOIC0g0JPRgNGD0YjQsFwiLFxyXG4gICAgUGFybWVzYW5GaWd1ZSA9IFwi0J/QsNGA0LzQtdC30LDQvSAtINCY0L3QttC40YBcIixcclxuICAgIFN0cmF3YmVycnlDaGVlc2VjYWtlID0gXCLQmtC70YPQsdC90LjRh9C90YvQuSDQp9C40LfQutC10LnQulwiLFxyXG4gICAgUmFzcGJlcnJ5ID0gXCLQnNCw0LvQuNC90LBcIixcclxuICAgIEN1cnJhbnQgPSBcItCh0LzQvtGA0L7QtNC40L3QsFwiLFxyXG4gICAgTGF2ZW5kZXJCbGFja2JlcnJ5ID0gXCLQm9Cw0LLQsNC90LTQsCAtINCn0LXRgNC90LjQutCwXCIsXHJcbiAgICBNYW5nb1Bhc3Npb24gPSBcItCc0LDQvdCz0L4gLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBDb2ZmZWVDYXJhbWVsID0gXCLQmtC+0YTQtSAtINCh0L7Qu9GR0L3QsNGPINCa0LDRgNCw0LzQtdC70YxcIixcclxuICAgIENob2NvbGF0ZSA9IFwi0KjQvtC60L7Qu9Cw0LRcIixcclxuICAgIFBpc3RhY2hpbyA9IFwi0KTQuNGB0YLQsNGI0LrQsFwiLFxyXG4gICAgTGltZUJhc2lsID0gXCLQm9Cw0LnQvCAtINCR0LDQt9C40LvQuNC6XCIgXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFplcGh5ckVudW0ge1xyXG4gICAgQXBwbGUgPSBcItCv0LHQu9C+0LrQvlwiLFxyXG4gICAgQXByaWNvdFBhc3Npb25GcnVpdCA9IFwi0JDQsdGA0LjQutC+0YEgLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBDdXJyYW50ID0gXCLQodC80L7RgNC+0LTQuNC90LBcIiwgICAgXHJcbiAgICBTdHJhd2JlcnJ5Q3JhbmJlcnJ5ID0gXCLQmtC70YPQsdC90LjQutCwIC0g0JrQu9GO0LrQstCwXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2FrZXNFbnVtIHtcclxuICAgIFJpbyA9IFwiUmlvXCIsXHJcbiAgICBDYXJyb3RDYWtlID0gXCJDYXJyb3QgQ2FrZVwiLFxyXG4gICAgU291bCA9IFwiU291bFwiLFxyXG4gICAgUGluayA9IFwiUGlua1wiLFxyXG4gICAgSW5maW5pdHkgPSBcIkluZmluaXR5XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRHJpbmtzVHlwZSB7XHJcbiAgICBDYXBwdWNpbm8gPSBcItCa0LDQv9GD0YfQuNC90L5cIixcclxuICAgIExhdHRlID0gXCLQm9Cw0YLRgtC1XCIsXHJcbiAgICBGbGF0V2hpdGUgPSBcItCk0LvQtdGCINCS0LDQudGCXCIsXHJcbiAgICBSYWYgPSBcItCg0LDRhFwiLFxyXG4gICAgQW1lcmljYW5vID0gXCLQkNC80LXRgNC40LrQsNC90L5cIixcclxuICAgIEFtZXJpY2Fub01pbGsgPSBcItCQ0LzQtdGA0LjQutCw0L3QviDRgSDQvNC+0LvQvtC60L7QvFwiLFxyXG4gICAgTG9uZ0JsYWNrID0gXCLQm9C+0L3QsyDQsdC70Y3QulwiLFxyXG4gICAgRXNwcmVzc28gPSBcItCt0YHQv9GA0LXRgdGB0L5cIixcclxuICAgIERvcHBpbyA9IFwi0JTQvtC/0L/QuNC+XCIsICAgIFxyXG4gICAgTWFjaGlhdG8gPSBcItCc0LDQutC40LDRgtC+XCIsXHJcbiAgICBMYXR0ZUxhdmVuZGVyID0gXCLQm9Cw0YLRgtC1INCb0LDQstCw0L3QtNCwXCIsXHJcbiAgICBMYXR0ZUNhcmFtZWwgPSBcItCb0LDRgtGC0LUg0JrQsNGA0LDQvNC10LvRjFwiLFxyXG4gICAgTGF0dGVPcmFuZ2UgPSBcItCb0LDRgtGC0LUg0JDQv9C10LvRjNGB0LjQvVwiLFxyXG4gICAgQ2FjYW8gPSBcItCa0LDQutCw0L5cIixcclxuICAgIFRlYUdyZWVuID0gXCLQp9Cw0Lkg0JfQtdC70ZHQvdGL0LlcIixcclxuICAgIFRlYUJsYWNrID0gXCLQp9Cw0Lkg0KfRkdGA0L3Ri9C5XCIsXHJcbiAgICBUZWFIZXJiYWwgPSBcItCn0LDQuSDQotGA0LDQstGP0L3QvtC5XCIsXHJcbiAgICBTcGVhY2lhbFRlYVBlYXJMaW1lID0gXCLQp9Cw0Lkg0JPRgNGD0YjQsC3Qm9Cw0LnQvFwiLFxyXG4gICAgU3BlY2lhbFRlYU9yYW5nZSA9IFwi0KfQsNC5INCQ0L/QtdC70YzRgdC40L0t0J7QsdC70LXQv9C40YXQsFwiLFxyXG4gICAgU3BlY2lhbFRlYUdpbmdlciA9IFwi0KfQsNC5INCc0LDQu9C40L3QsC3QmNC80LHQuNGA0YxcIixcclxuICAgIEhvdENob2NvbGF0ZSA9IFwi0JPQsNGA0Y/Rh9C40Lkg0YjQvtC60L7Qu9Cw0LRcIixcclxuICAgIExlbW9uYWRlU3RyYXdiZXJyeSA9IFwi0JvQuNC80L7QvdCw0LQg0JrQu9GD0LHQvdC40LrQsFwiLFxyXG4gICAgTGVtb25hZGVDaXRydXMgPSBcItCb0LjQvNC+0L3QsNC0INCm0LjRgtGA0YPRgVwiLFxyXG4gICAgTGVtb25hZGVQYXNzaW9uID0gXCLQm9C40LzQvtC90LDQtCDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBJY2VMYXR0ZSA9IFwi0JDQudGBINCb0LDRgtGC0LVcIixcclxuICAgIFN5cm9wID0gXCLQodC40YDQvtC/XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGFydG5lcnNFbnVtIHtcclxuICAgIENvZmZlZUlzID0gXCJDb2ZmZWUgaXNcIixcclxuICAgIEZpcnN0UG9pbnQgPSBcIkZpcnN0IFBvaW50XCIsXHJcbiAgICBDdWJhQ29mZmVlID0gXCJDdWJhIENvZmZlZVwiLFxyXG4gICAgUHJvZ3Jlc3MgPSBcIlByb2dyZXNzXCIsXHJcbiAgICBLbGFzc25hS2F2YSA9IFwi0JrQu9Cw0YHQvdCwINC60LDQstCwXCIsXHJcbiAgICBDb2ZmZWVBbmRUaGVDaXR5ID0gXCJDb2ZmZWUgYW5kIHRoZSBjaXR5XCIsXHJcbiAgICBJbE1pbyA9IFwiSWwgTWlvXCIsXHJcbiAgICBTdHVkaW9Db2ZmZWUgPSBcItCh0YLRg9C00LjRjyDQutC+0YTQtVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZhbHVlSW5wdXRPcHRpb24ge1xyXG4gICAgSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEID0gJ0lOUFVUX1ZBTFVFX09QVElPTl9VTlNQRUNJRklFRCcsXHJcbiAgICBSQVcgPSAnUkFXJyxcclxuICAgIFVTRVJfRU5URVJFRCA9ICdVU0VSX0VOVEVSRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEluc2VydERhdGFPcHRpb24ge1xyXG4gICAgT1ZFUldSSVRFID0gJ09WRVJXUklURScsXHJcbiAgICBJTlNFUlRfUk9XUyA9ICdJTlNFUlRfUk9XUydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVSZW5kZXJPcHRpb24ge1xyXG4gICAgRk9STUFUVEVEX1ZBTFVFID0gJ0ZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBVTkZPUk1BVFRFRF9WQUxVRSA9ICdVTkZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBGT1JNVUxBID0gJ0ZPUk1VTEEnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERhdGVUaW1lUmVuZGVyT3B0aW9uIHtcclxuICAgIFNFUklBTF9OVU1CRVIgPSAnU0VSSUFMX05VTUJFUicsXHJcbiAgICBGT1JNQVRURURfU1RSSU5HID0gJ0ZPUk1BVFRFRF9TVFJJTkcnXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==