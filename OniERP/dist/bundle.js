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
exports.push([module.i, "html, body {\n  font-family: 'Segoe UI';\n  height: 100%; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  font-size: 40px;\n  font-weight: 300; }\n\n.avatar {\n  background-color: #72c3e9;\n  color: #1d53a3; }\n\n.cardContainer {\n  margin: 16px; }\n\n.cardContainerHistory {\n  margin: 16px; }\n\n.cardRoot {\n  padding: 16px 0 16px 0 !important; }\n\n.newOrderButtonsWrapper {\n  display: flex;\n  flex-direction: row; }\n\n.newOrderButton {\n  padding: 5px;\n  width: 100%;\n  height: 100%; }\n\n.buttonsWraper {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 1rem;\n  flex-direction: column; }\n  .buttonsWraper .button {\n    margin: 1rem 0rem; }\n\n.checkoutTitle {\n  text-align: center;\n  margin: 1rem;\n  font-weight: 450; }\n\n.checkoutControlGroup {\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 2rem 1rem 2rem;\n  flex-direction: column; }\n\n.notificationClose {\n  width: 4rem;\n  height: 4rem; }\n\n.macaronAvatar {\n  margin: 10px;\n  color: black !important; }\n\n.drinkAvatar {\n  margin: 10px;\n  color: #fff !important;\n  background-color: #74482f !important; }\n\n.buttonApplyWraper {\n  display: flex;\n  justify-content: space-evenly; }\n\n.partnerSelectWrapper {\n  width: 100%;\n  padding: 1rem; }\n\n.busy-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 9999;\n  background-color: #e6e6e6;\n  opacity: 0.8; }\n  .busy-container .busy {\n    position: absolute;\n    left: 50%;\n    top: 44%;\n    margin-left: -18px; }\n\n.invisible {\n  display: none; }\n\n.historyContainer {\n  width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./public/images/desserts_icon.jpg":
/*!*****************************************!*\
  !*** ./public/images/desserts_icon.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/desserts_icon.jpg";

/***/ }),

/***/ "./public/images/drinks_icon.jpg":
/*!***************************************!*\
  !*** ./public/images/drinks_icon.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/drinks_icon.jpg";

/***/ }),

/***/ "./public/images/favicon.png":
/*!***********************************!*\
  !*** ./public/images/favicon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/favicon.png";

/***/ }),

/***/ "./public/images/main_icon.jpg":
/*!*************************************!*\
  !*** ./public/images/main_icon.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/main_icon.jpg";

/***/ }),

/***/ "./public/images/partners_icon.jpg":
/*!*****************************************!*\
  !*** ./public/images/partners_icon.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/partners_icon.jpg";

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
                        _a.trys.push([1, 9, 10, 11]);
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
                        return [4 /*yield*/, dispatch(exports.ShowNotification(0, 'Заказ сохранён!'))];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, exports.ProcessLog(log)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, exports.ProcessLog(JSON.stringify(check_1))];
                    case 8:
                        _a.sent();
                        dispatch(exports.ClearLog());
                        return [3 /*break*/, 11];
                    case 9:
                        ex_5 = _a.sent();
                        dispatch(exports.itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
                        console.log(ex_5);
                        throw Error(ex_5);
                    case 10:
                        dispatch(exports.itemsIsLoading(false));
                        return [7 /*endfinally*/];
                    case 11:
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
        width: '100%',
        height: '25vh'
    },
    image: {
        position: 'relative',
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
var Divider_1 = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
var dictionaries_1 = __webpack_require__(/*! ../utils/dictionaries */ "./src/utils/dictionaries.ts");
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
    PartnersComponent.prototype.calculateTotalPrice = function () {
        var _a = this.state,
            partner = _a.partner,
            macaronsQty = _a.macaronsQty,
            zephyrQty = _a.zephyrQty;
        var totalPrice = 0;
        if (!partner) {
            return totalPrice;
        }
        var macaronPrice = dictionaries_1.CaffeePrices[partner];
        totalPrice += macaronsQty * macaronPrice;
        totalPrice += dictionaries_1.ZEPHYR_PRICE * zephyrQty;
        return totalPrice;
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
            }, margin: "normal", fullWidth: true, disabled: !partner, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0435\u0444\u0438\u0440\u0430" }), React.createElement(Divider_1.default, null), React.createElement(TextField_1.default, { label: "\u0418\u0442\u043E\u0433\u043E", value: this.calculateTotalPrice() + " \u0433\u0440\u043D.", InputLabelProps: {
                shrink: true
            }, margin: "normal", fullWidth: true }), React.createElement("div", { className: 'buttonsWraper' }, React.createElement(Button_1.default, { disabled: !partner, variant: "contained", size: "large", color: "primary", onClick: this.handleNextClick }, "\u0413\u043E\u0442\u043E\u0432\u043E")));
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
__webpack_require__(/*! ../public/images/favicon.png */ "./public/images/favicon.png");
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
var dictionaries_1 = __webpack_require__(/*! ../utils/dictionaries */ "./src/utils/dictionaries.ts");
var types_2 = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
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
    CheckoutPage.prototype.calculatePrice = function () {
        var check = this.props.check;
        var totalPrice = 0;
        check.desserts.forEach(function (d) {
            switch (d.type) {
                case types_2.DessertType.Cake:
                    var cakePrices = dictionaries_1.CakesPricesDict[d.taste];
                    if (d.size === '18 см') {
                        totalPrice += cakePrices[0];
                    } else if (d.size === '22 см') {
                        totalPrice += cakePrices[1];
                    }
                    break;
                case types_2.DessertType.Macaron:
                    totalPrice += dictionaries_1.MACARONS_PRICE * d.quantity;
                    break;
                case types_2.DessertType.Zephyr:
                    totalPrice += dictionaries_1.ZEPHYR_PRICE * d.quantity;
                    break;
                default:
                    break;
            }
        });
        check.drinks.forEach(function (d) {
            var prices = dictionaries_1.DrinkPricesDict[d.id];
            if (prices.length === 1) {
                totalPrice += prices[0];
            } else {
                var index = dictionaries_1.DrinksDict[d.id].findIndex(function (x) {
                    return x === d.size;
                });
                totalPrice += prices[index];
            }
        });
        return totalPrice;
    };
    CheckoutPage.prototype.render = function () {
        var _this = this;
        var check = this.props.check;
        if (!check) {
            return React.createElement("div", { className: "container" }, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0447\u0435\u043A");
        }
        return React.createElement("div", { className: "container" }, React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, null, React.createElement(Typography_1.default, { gutterBottom: true, variant: "headline", component: "h2" }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0447\u0435\u043A\u0430"), React.createElement(Divider_1.default, null), React.createElement("div", { className: "checkoutControlGroup" }, "\u0418\u0442\u043E\u0433\u043E: ", this.calculatePrice(), " \u0433\u0440\u043D."), React.createElement(Divider_1.default, null), React.createElement("div", { className: "checkoutControlGroup" }, "\u0422\u0438\u043F \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.payment === types_1.Payment.Card, onChange: function onChange() {
                    return _this.handlePaymentTypeChange(types_1.Payment.Card);
                }, value: types_1.Payment.Card.toString() }), label: "\u041A\u0430\u0440\u0442\u0430" }), React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.payment === types_1.Payment.Cash, onChange: function onChange() {
                    return _this.handlePaymentTypeChange(types_1.Payment.Cash);
                }, value: types_1.Payment.Cash.toString() }), label: "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435" })), React.createElement(Divider_1.default, null), React.createElement("div", { className: "checkoutControlGroup" }, "\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430:", React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.type === types_1.OrderType.PreOrder, onChange: function onChange() {
                    return _this.handleOrderTypeChange(types_1.OrderType.PreOrder);
                }, value: types_1.OrderType.PreOrder.toString() }), label: "\u041F\u0440\u0435\u0434\u0437\u0430\u043A\u0430\u0437" }), React.createElement(FormControlLabel_1.default, { control: React.createElement(Radio_1.default, { checked: check.type === types_1.OrderType.Shop, onChange: function onChange() {
                    return _this.handleOrderTypeChange(types_1.OrderType.Shop);
                }, value: types_1.OrderType.Shop.toString() }), label: "\u0412\u0438\u0442\u0440\u0438\u043D\u0430" })), React.createElement(Divider_1.default, null), React.createElement("div", { className: 'buttonsWraper' }, React.createElement(Button_1.default, { classes: { root: 'button' }, variant: "contained", color: "primary", title: "Check Out", onClick: this.handleCheckout }, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"), React.createElement(Button_1.default, { classes: { root: 'button' }, variant: "contained", color: "default", title: "Back", onClick: this.handleBack }, "\u041D\u0430\u0437\u0430\u0434"), React.createElement(Button_1.default, { classes: { root: 'button' }, variant: "contained", color: "secondary", title: "Cancel", onClick: this.handleCancel }, "\u041E\u0442\u043C\u0435\u043D\u0430")))));
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
        return React.createElement("div", { className: "container" }, React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, { classes: { root: 'cardRoot' } }, React.createElement(LargeButton_1.default, { title: 'РОЗНИЧНЫЙ ЗАКАЗ', component: CkeckLink, imageUrl: imageUrl, onClick: this.onNewCheckClick }))), React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, { classes: { root: 'cardRoot' } }, React.createElement(LargeButton_1.default, { title: 'ОПТОВЫЙ ЗАКАЗ', component: PartnersLink, imageUrl: partnerUrl, onClick: this.onNewPartnersCheckClick }))), React.createElement(Card_1.default, { className: 'cardContainerHistory', raised: true }, React.createElement(CardContent_1.default, null, React.createElement(Typography_1.default, { gutterBottom: true, variant: "headline", component: "h2" }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"), React.createElement(HistoryComponent_1.default, null))), React.createElement(Notification_1.default, null), React.createElement(Busy_1.Busy, { loading: isLoading }));
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
exports.DrinkPricesDict[types_1.DrinksType.Cappucino] = [25, 40];
exports.DrinkPricesDict[types_1.DrinksType.Latte] = [28, 35];
exports.DrinkPricesDict[types_1.DrinksType.FlatWhite] = [35];
exports.DrinkPricesDict[types_1.DrinksType.Raf] = [38, 45];
exports.DrinkPricesDict[types_1.DrinksType.Americano] = [20];
exports.DrinkPricesDict[types_1.DrinksType.AmericanoMilk] = [25];
exports.DrinkPricesDict[types_1.DrinksType.LongBlack] = [30];
exports.DrinkPricesDict[types_1.DrinksType.Espresso] = [20];
exports.DrinkPricesDict[types_1.DrinksType.Doppio] = [30];
exports.DrinkPricesDict[types_1.DrinksType.Machiato] = [22];
exports.DrinkPricesDict[types_1.DrinksType.LatteLavender] = [32, 40];
exports.DrinkPricesDict[types_1.DrinksType.LatteCaramel] = [32, 40];
exports.DrinkPricesDict[types_1.DrinksType.LatteOrange] = [32, 40];
exports.DrinkPricesDict[types_1.DrinksType.Cacao] = [28, 35];
exports.DrinkPricesDict[types_1.DrinksType.TeaGreen] = [25];
exports.DrinkPricesDict[types_1.DrinksType.TeaBlack] = [25];
exports.DrinkPricesDict[types_1.DrinksType.TeaHerbal] = [25];
exports.DrinkPricesDict[types_1.DrinksType.SpeacialTeaPearLime] = [35];
exports.DrinkPricesDict[types_1.DrinksType.SpecialTeaOrange] = [35];
exports.DrinkPricesDict[types_1.DrinksType.SpecialTeaGinger] = [35];
exports.DrinkPricesDict[types_1.DrinksType.HotChocolate] = [55];
exports.DrinkPricesDict[types_1.DrinksType.LemonadeStrawberry] = [35];
exports.DrinkPricesDict[types_1.DrinksType.LemonadeCitrus] = [35];
exports.DrinkPricesDict[types_1.DrinksType.LemonadePassion] = [35];
exports.DrinkPricesDict[types_1.DrinksType.IceLatte] = [40];
exports.DrinkPricesDict[types_1.DrinksType.Syrop] = [5];
exports.CaffeePrices = {};
exports.CaffeePrices[types_1.PartnersEnum.CoffeeIs] = 17;
exports.CaffeePrices[types_1.PartnersEnum.FirstPoint] = 19;
exports.CaffeePrices[types_1.PartnersEnum.CubaCoffee] = 19;
exports.CaffeePrices[types_1.PartnersEnum.Progress] = 20;
exports.CaffeePrices[types_1.PartnersEnum.KlassnaKava] = 19;
exports.CaffeePrices[types_1.PartnersEnum.CoffeeAndTheCity] = 19;
exports.CaffeePrices[types_1.PartnersEnum.IlMio] = 19;
exports.CaffeePrices[types_1.PartnersEnum.StudioCoffee] = 20;
exports.CakesPricesDict = {};
exports.CakesPricesDict[types_1.CakesEnum.CarrotCake] = [650, 980];
exports.CakesPricesDict[types_1.CakesEnum.Pink] = [630, 970];
exports.CakesPricesDict[types_1.CakesEnum.Infinity] = [640, 970];
exports.CakesPricesDict[types_1.CakesEnum.Rio] = [630, 970];
exports.CakesPricesDict[types_1.CakesEnum.Soul] = [620, 960];
exports.ZEPHYR_PRICE = 11;
exports.MACARONS_PRICE = 28;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvZGVzc2VydHNfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9kcmlua3NfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL21haW5faWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9wYXJ0bmVyc19pY29uLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHBCYXIvc3R5bGVzLnNjc3M/OGFhMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXN5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EZXNzZXJ0c0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpbmtzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaXN0b3J5Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXJnZUJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24vc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2Nzcz9hNzc0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhcnRuZXJzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZXN0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrb3V0UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTm90Rm91bmRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGFydG5lcnNQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzP2RjYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RpY3Rpb25hcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFqQixRQUFpQixzQkFBakIsUUFBaUIsb0JBSTVCO0FBRUQsSUFHQztBQUhELFdBQWdDO0FBQzVCLDRDQUErQjtBQUMvQiwrQ0FDSjtBQUFDLEdBSCtCLHVCQUFwQixRQUFvQix5QkFBcEIsUUFBb0IsdUJBRy9CLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcGJhcl9yb290IHtcXG4gIGZsZXgtZ3JvdzogMTsgfVxcbiAgLmFwcGJhcl9yb290IC5hcHBiYXJfZ3JvdyB7XFxuICAgIGZsZXgtZ3JvdzogMTsgfVxcbiAgLmFwcGJhcl9yb290IC5hcHBiYXJfbWVudUJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTI7XFxuICAgIG1hcmdpbi1yaWdodDogMjA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50OyB9XFxuXFxuLmVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXkgIWltcG9ydGFudDsgfVxcblxcbi5pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXkgIWltcG9ydGFudDsgfVxcblxcbi53YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50OyB9XFxuXFxuLmljb24ge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi5pY29uLXZhcmlhbnQge1xcbiAgb3BhY2l0eTogMC45O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG5cXG4ubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSc7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcblxcbi5hdmF0YXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyYzNlOTtcXG4gIGNvbG9yOiAjMWQ1M2EzOyB9XFxuXFxuLmNhcmRDb250YWluZXIge1xcbiAgbWFyZ2luOiAxNnB4OyB9XFxuXFxuLmNhcmRDb250YWluZXJIaXN0b3J5IHtcXG4gIG1hcmdpbjogMTZweDsgfVxcblxcbi5jYXJkUm9vdCB7XFxuICBwYWRkaW5nOiAxNnB4IDAgMTZweCAwICFpbXBvcnRhbnQ7IH1cXG5cXG4ubmV3T3JkZXJCdXR0b25zV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5uZXdPcmRlckJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5idXR0b25zV3JhcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5idXR0b25zV3JhcGVyIC5idXR0b24ge1xcbiAgICBtYXJnaW46IDFyZW0gMHJlbTsgfVxcblxcbi5jaGVja291dFRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7IH1cXG5cXG4uY2hlY2tvdXRDb250cm9sR3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMXJlbSAycmVtIDFyZW0gMnJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4ubm90aWZpY2F0aW9uQ2xvc2Uge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07IH1cXG5cXG4ubWFjYXJvbkF2YXRhciB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgfVxcblxcbi5kcmlua0F2YXRhciB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NDgyZiAhaW1wb3J0YW50OyB9XFxuXFxuLmJ1dHRvbkFwcGx5V3JhcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxcblxcbi5wYXJ0bmVyU2VsZWN0V3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG5cXG4uYnVzeS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbiAgb3BhY2l0eTogMC44OyB9XFxuICAuYnVzeS1jb250YWluZXIgLmJ1c3kge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA0NCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDsgfVxcblxcbi5pbnZpc2libGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5oaXN0b3J5Q29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltYWdlcy9kZXNzZXJ0c19pY29uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvZHJpbmtzX2ljb24uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltYWdlcy9mYXZpY29uLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvbWFpbl9pY29uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvcGFydG5lcnNfaWNvbi5qcGdcIjsiLCJleHBvcnQgY29uc3QgQ1JFQVRFX0NIRUNLID0gJ0NSRUFURV9DSEVDSyc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0RSSU5LID0gJ0FERF9EUklOSyc7XHJcbmV4cG9ydCBjb25zdCBBRERfREVTU0VSVCA9ICdBRERfREVTU0VSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX0RSSU5LID0gJ0RFTEVURV9EUklOSyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfREVTU0VSVCA9ICdERUxFVEVfREVTU0VSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfVFlQRSA9ICdTRVRfUEFZTUVOVF9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFNFVF9PUkRFUl9UWVBFID0gJ1NFVF9PUkRFUl9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFBST0NFU1NfQ0hFQ0tPVVQgPSAnUFJPQ0VTU19DSEVDS09VVCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNUyA9ICdMT0FEX0lURU1TJztcclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVNfRlVMRklMTEVEID0gJ0xPQURfSVRFTVNfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVNfUkVKRUNURUQgPSAnTE9BRF9JVEVNU19SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0hPV19CVVNZID0gXCJTSE9XX0JVU1lcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQSA9ICdBUFBFTkRfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQV9GVUxGSUxMRUQgPSAnQVBQRU5EX0RBVEFfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBX1JFSkVDVEVEID0gJ0FQUEVORF9EQVRBX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQSA9ICdVUERBVEVfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQV9GVUxGSUxMRUQgPSAnVVBEQVRFX0RBVEFfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBX1JFSkVDVEVEID0gJ1VQREFURV9EQVRBX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfREFUQSA9ICdMT0dfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9MT0cgPSAnQ0xFQVJfTE9HJztcclxuZXhwb3J0IGNvbnN0IENBTkNFTCA9ICdDQU5DRUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMRUFSX0VSUk9SID0gJ0NMRUFSX0VSUk9SJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTEFTVF9JRCA9ICdTRVRfTEFTVF9JRCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0hPV19OT1RJRklDQVRJT04gPSAnU0hPV19OT1RJRklDQVRJT04nOyIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIExPQURfSVRFTVMsXHJcbiAgICBMT0FEX0lURU1TX0ZVTEZJTExFRCxcclxuICAgIExPQURfSVRFTVNfUkVKRUNURUQsXHJcbiAgICBTSE9XX0JVU1ksXHJcbiAgICBDUkVBVEVfQ0hFQ0ssXHJcbiAgICBQUk9DRVNTX0NIRUNLT1VULFxyXG4gICAgQUREX0RSSU5LLFxyXG4gICAgQUREX0RFU1NFUlQsXHJcbiAgICBTRVRfUEFZTUVOVF9UWVBFLFxyXG4gICAgU0VUX09SREVSX1RZUEUsXHJcbiAgICBBUFBFTkRfREFUQV9GVUxGSUxMRUQsXHJcbiAgICBBUFBFTkRfREFUQV9SRUpFQ1RFRCxcclxuICAgIExPR19EQVRBLFxyXG4gICAgQ0xFQVJfTE9HLFxyXG4gICAgQ0FOQ0VMLFxyXG4gICAgQ0xFQVJfRVJST1IsXHJcbiAgICBERUxFVEVfRFJJTkssXHJcbiAgICBERUxFVEVfREVTU0VSVCxcclxuICAgIFNFVF9MQVNUX0lELFxyXG4gICAgU0hPV19OT1RJRklDQVRJT05cclxufSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuaW1wb3J0IHtcclxuICAgIERyaW5rc1R5cGUsIERlc3NlcnRUeXBlLCBQYXltZW50LCBPcmRlclR5cGUsIENoZWNrLFxyXG4gICAgVmFsdWVJbnB1dE9wdGlvbiwgSW5zZXJ0RGF0YU9wdGlvbiwgVmFsdWVSZW5kZXJPcHRpb24sIERhdGVUaW1lUmVuZGVyT3B0aW9uLCBEZXNzZXJ0LCBEcmlua1xyXG59IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBMT0dTX1NQUkVBRFNIRUVUX0lELCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0ZldGNoRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydHNSZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiBcIlJhd0Rlc3NlcnRzRGF0YSFBOkhcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzUmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuZ2V0KHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogXCJSYXdEcmlua3NEYXRhIUE6RlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxhc3REZXNzZXJ0T3JkZXJJZCA9IE1hdGgubWF4KC4uLmRlc3NlcnRzUmVzcG9uc2UucmVzdWx0LnZhbHVlcy5zbGljZSgxKS5tYXAoZCA9PiBkWzddID8gTnVtYmVyKGRbN10pIDogMCkpO1xyXG4gICAgICAgICAgICBsZXQgbGFzdERyaW5rT3JkZXJJZCA9IE1hdGgubWF4KC4uLmRyaW5rc1Jlc3BvbnNlLnJlc3VsdC52YWx1ZXMuc2xpY2UoMSkubWFwKGQgPT4gZFs1XSA/IE51bWJlcihkWzVdKSA6IDApKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdElkID0gTWF0aC5tYXgobGFzdERlc3NlcnRPcmRlcklkLCBsYXN0RHJpbmtPcmRlcklkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlcjogQ2hlY2sgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogbGFzdElkLFxyXG4gICAgICAgICAgICAgICAgZGVzc2VydHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZHJpbmtzOiBbXSxcclxuICAgICAgICAgICAgICAgIGlzRmluaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50OiBQYXltZW50Lk90aGVyLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogT3JkZXJUeXBlLk90aGVyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBsYXN0T3JkZXJQYXltZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGxhc3RPcmRlclR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGFzdE9yZGVyLmRlc3NlcnRzID0gZGVzc2VydHNSZXNwb25zZS5yZXN1bHQudmFsdWVzLnNsaWNlKDEpLmZpbHRlcih2ID0+IHZbN10gPT09IGxhc3RJZC50b1N0cmluZygpKS5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXN0T3JkZXJQYXltZW50ID0gZFs0XSA9PT0gJ9Cd0LDQu9C40YfQutCwJyA/IFBheW1lbnQuQ2FzaCA6IFBheW1lbnQuQ2FyZDtcclxuICAgICAgICAgICAgICAgIGxhc3RPcmRlclR5cGUgPSBkWzVdID09PSAn0JLQuNGC0YDQuNC90LAnID8gT3JkZXJUeXBlLlNob3AgOiBPcmRlclR5cGUuUHJlT3JkZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEZXNzZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzdGU6IGRbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IGRbMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogZFszXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZXNzZXJ0O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxhc3RPcmRlci5kcmlua3MgPSBkcmlua3NSZXNwb25zZS5yZXN1bHQudmFsdWVzLnNsaWNlKDEpLmZpbHRlcih2ID0+IHZbNV0gPT09IGxhc3RJZC50b1N0cmluZygpKS5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXN0T3JkZXJQYXltZW50ID0gZFsyXSA9PT0gJ9Cd0LDQu9C40YfQutCwJyA/IFBheW1lbnQuQ2FzaCA6IFBheW1lbnQuQ2FyZDtcclxuICAgICAgICAgICAgICAgIGxhc3RPcmRlclR5cGUgPSBkWzNdID09PSAn0JLQuNGC0YDQuNC90LAnID8gT3JkZXJUeXBlLlNob3AgOiBPcmRlclR5cGUuUHJlT3JkZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEcmluayA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogZFswXSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBkWzFdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc3NlcnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYXN0T3JkZXIucGF5bWVudCA9IGxhc3RPcmRlclBheW1lbnQ7XHJcbiAgICAgICAgICAgIGxhc3RPcmRlci50eXBlID0gbGFzdE9yZGVyVHlwZTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goU2V0TGFzdElkKGxhc3RJZCwgbGFzdE9yZGVyKSk7XHJcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyhbLi4uZGVzc2VydHMsIC4uLmRyaW5rc10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NBcHBlbmREYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZywgcmFuZ2U6IHN0cmluZywgdmFsdWVSYW5nZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgdXBkYXRlZENlbGxzQ291bnQgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudXBkYXRlcy51cGRhdGVkQ2VsbHM7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kU3VjY2Vzcyh0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LLRiyDQstC+0YjQu9C4INCyINGB0LjRgdGC0LXQvNGDLicpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0xvZyA9IGFzeW5jIChtZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgIFttZXNzYWdlLCBkYXRlVGltZS50b1VUQ1N0cmluZygpXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5hcHBlbmQoe1xyXG4gICAgICAgICAgICBzcHJlYWRzaGVldElkOiBMT0dTX1NQUkVBRFNIRUVUX0lELFxyXG4gICAgICAgICAgICByYW5nZTogJ0E6QicsXHJcbiAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVmFsdWVSZW5kZXJPcHRpb246IFZhbHVlUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9WQUxVRVxyXG4gICAgICAgIH0sIHsgdmFsdWVzOiBkYXRhIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzVXBkYXRlRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcsIHZhbHVlUmFuZ2U6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiAnQTY6RDEwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZURhdGVUaW1lUmVuZGVyT3B0aW9uOiBEYXRlVGltZVJlbmRlck9wdGlvbi5GT1JNQVRURURfU1RSSU5HXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG4gICAgICAgICAgICAvL1RPRE86IFByb2Nlc3MgcmVzcG9uc2UgcmVzdWx0XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0LnZhbHVlcztcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNGZXRjaERhdGFTdWNjZXNzKGl0ZW1zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVDaGVjayA9IGNyZWF0ZUFjdGlvbihDUkVBVEVfQ0hFQ0spO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NDaGVja291dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGNoZWNrOiBDaGVjayA9IHN0YXRlLmNoZWNrO1xyXG4gICAgICAgICAgICBjb25zdCB7IGxvZyB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NSYW5nZSA9IFwiUmF3RHJpbmtzRGF0YSFBOkZcIjtcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBjaGVjay5kcmlua3MuZm9yRWFjaChhc3luYyBkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtkLmlkLCBkLnNpemUsIGNoZWNrLnBheW1lbnQsIGNoZWNrLnR5cGUsIGRhdGVUaW1lLCBjaGVjay5pZF07XHJcbiAgICAgICAgICAgICAgICBkcmlua3NEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZHJpbmtzRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKFNQUkVBRFNIRUVUX0lELCBkcmlua3NSYW5nZSwgZHJpbmtzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0c1JhbmdlID0gXCJSYXdEZXNzZXJ0c0RhdGEhQTpIXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5mb3JFYWNoKGFzeW5jIGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gW2QudHlwZSwgZC50YXN0ZSwgZC5xdWFudGl0eSwgZC5zaXplLCBjaGVjay5wYXltZW50LCBjaGVjay50eXBlLCBkYXRlVGltZSwgY2hlY2suaWRdO1xyXG4gICAgICAgICAgICAgICAgZGVzc2VydHNEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZGVzc2VydHNEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEoU1BSRUFEU0hFRVRfSUQsIGRlc3NlcnRzUmFuZ2UsIGRlc3NlcnRzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChDaGVja291dCgpKTtcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goU2hvd05vdGlmaWNhdGlvbigwLCAn0JfQsNC60LDQtyDRgdC+0YXRgNCw0L3RkdC9IScpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2cobG9nKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvY2Vzc0xvZyhKU09OLnN0cmluZ2lmeShjaGVjaykpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChDbGVhckxvZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kRXJyb3JlZCgn0J7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUsINGH0YLQviDQstGLINCy0L7RiNC70Lgg0LIg0YHQuNGB0YLQtdC80YMuJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdCA9IChwYXJ0bmVyOiBzdHJpbmcsIG1hY1F0eTogbnVtYmVyLCB6ZXBRdHk6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0bmVyc1JhbmdlID0gXCJSYXdQYXJ0bmVyc0RhdGEhQTpEXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRuZXJzRGF0YSA9IFtbcGFydG5lciwgbWFjUXR5LCB6ZXBRdHksIG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW0nKV1dO1xyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YShTUFJFQURTSEVFVF9JRCwgcGFydG5lcnNSYW5nZSwgcGFydG5lcnNEYXRhKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2coSlNPTi5zdHJpbmdpZnkocGFydG5lcnNEYXRhKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFNob3dOb3RpZmljYXRpb24oMCwgJ9CX0LDQutCw0Lcg0YHQvtGF0YDQsNC90ZHQvSEnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LLRiyDQstC+0YjQu9C4INCyINGB0LjRgdGC0LXQvNGDLicpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tvdXQgPSBjcmVhdGVBY3Rpb24oUFJPQ0VTU19DSEVDS09VVCk7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRHJpbmsgPSBjcmVhdGVBY3Rpb24oQUREX0RSSU5LLCAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERlc3NlcnQgPSBjcmVhdGVBY3Rpb24oQUREX0RFU1NFUlQsICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiBbdHlwZSwgdGFzdGUsIHNpemUsIHF1YW50aXR5XSk7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlRHJpbmsgPSBjcmVhdGVBY3Rpb24oREVMRVRFX0RSSU5LLCAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZURlc3NlcnQgPSBjcmVhdGVBY3Rpb24oREVMRVRFX0RFU1NFUlQsICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgdGFzdGUsIHNpemVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRQYXltZW50VHlwZSA9IGNyZWF0ZUFjdGlvbihTRVRfUEFZTUVOVF9UWVBFLCAodHlwZTogUGF5bWVudCkgPT4gdHlwZSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0T3JkZXJUeXBlID0gY3JlYXRlQWN0aW9uKFNFVF9PUkRFUl9UWVBFLCAodHlwZTogT3JkZXJUeXBlKSA9PiB0eXBlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0hhc0Vycm9yZWQgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNU19SRUpFQ1RFRCwgKGhhc0Vycm9yZWQ6IGJvb2xlYW4pID0+IGhhc0Vycm9yZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zSXNMb2FkaW5nID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVMsIChpc0xvYWRpbmc6IGJvb2xlYW4pID0+IGlzTG9hZGluZyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNGZXRjaERhdGFTdWNjZXNzID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVNfRlVMRklMTEVELCAoaXRlbXM6IGFueVtdKSA9PiBpdGVtcyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNBcHBlbmRTdWNjZXNzID0gY3JlYXRlQWN0aW9uKEFQUEVORF9EQVRBX0ZVTEZJTExFRCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHN1Y2Nlc3MpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zQXBwZW5kRXJyb3JlZCA9IGNyZWF0ZUFjdGlvbihBUFBFTkRfREFUQV9SRUpFQ1RFRCwgKHRleHQ6IHN0cmluZykgPT4gdGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0J1c3kgPSBjcmVhdGVBY3Rpb24oU0hPV19CVVNZLCAoaXNCdXN5OiBib29sZWFuKSA9PiBpc0J1c3kpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ0RhdGEgPSBjcmVhdGVBY3Rpb24oTE9HX0RBVEEsICh0ZXh0OiBzdHJpbmcpID0+IHRleHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsZWFyTG9nID0gY3JlYXRlQWN0aW9uKENMRUFSX0xPRyk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FuY2VsID0gY3JlYXRlQWN0aW9uKENBTkNFTCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJFcnJvciA9IGNyZWF0ZUFjdGlvbihDTEVBUl9FUlJPUik7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0TGFzdElkID0gY3JlYXRlQWN0aW9uKFNFVF9MQVNUX0lELCAobGFzdElkOiBudW1iZXIsIGxhc3RDaGVjazogQ2hlY2spID0+IFtsYXN0SWQsIGxhc3RDaGVja10pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dOb3RpZmljYXRpb24gPSBjcmVhdGVBY3Rpb24oU0hPV19OT1RJRklDQVRJT04sICh0eXBlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZykgPT4gW3R5cGUsIG1lc3NhZ2VdKTtcclxuIiwiaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL01haW5QYWdlJztcclxuaW1wb3J0IENoZWNrUGFnZSBmcm9tICcuL3BhZ2VzL0NoZWNrUGFnZSc7XHJcbmltcG9ydCBDaGVja291dFBhZ2UgZnJvbSAnLi9wYWdlcy9DaGVja291dFBhZ2UnO1xyXG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4vcGFnZXMvTm90Rm91bmRQYWdlJztcclxuaW1wb3J0IFBhcnRuZXJzUGFnZSBmcm9tICcuL3BhZ2VzL1BhcnRuZXJzUGFnZSc7XHJcbmltcG9ydCBUZXN0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9UZXN0Q29tcG9uZW50JztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICcuL2NvbXBvbmVudHMvQXBwQmFyJztcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e01haW5QYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2snIGNvbXBvbmVudD17Q2hlY2tQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2tPdXQnIGNvbXBvbmVudD17Q2hlY2tvdXRQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvcGFydG5lcnMnIGNvbXBvbmVudD17UGFydG5lcnNQYWdlfSAvPlxyXG5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL3Rlc3QnIGNvbXBvbmVudD17VGVzdENvbXBvbmVudH0gLz5cclxuICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZFBhZ2V9IC8+XHJcbiAgICA8L1N3aXRjaD5cclxuKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwUHJvcHMge1xyXG4gICAgaXNTY3JpcHRMb2FkZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PElBcHBQcm9wcywgSUFwcFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NjcmlwdExvYWRlZCB9ID0gbmV4dFByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JpcHRMb2FkZWQgJiYgIXRoaXMucHJvcHMuaXNTY3JpcHRMb2FkZWQpIHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnY2xpZW50OmF1dGgyJywgdGhpcy5pbml0Q2xpZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICAvLyBjb25zdCBhdXRoMiA9IHdpbmRvd1snZ2FwaSddLmF1dGgyLmluaXQoe1xyXG4gICAgICAgIC8vICAgICBjbGllbnRfaWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAvLyAgICAgc2NvcGU6IFNDT1BFUyxcclxuICAgICAgICAvLyAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgLy8gICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBhdXRoMi5pc1NpZ25lZEluLmxpc3Rlbih0aGlzLnNpZ25pbkNoYW5nZWQpO1xyXG5cclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVNcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5saXN0ZW4odGhpcy5zaWduaW5DaGFuZ2VkKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5pc1NpZ25lZEluLmdldCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbkNoYW5nZWQgPSAoaXNTaWduZWRJbikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBpc1NpZ25lZEluXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXV0aENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNpZ25vdXRDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTaWduZWRJbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd1snZ2FwaSddIHx8ICF3aW5kb3dbJ2dhcGknXS5hdXRoMiB8fCAhd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5nZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPEFwcEJhciB0aXRsZT17J9CT0LvQsNCy0L3QsNGPJ30gaXNTaWduZWRJbj17aXNTaWduZWRJbn0gb25Mb2dpbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gb25Mb2dvdXRDbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgIHtpc1NpZ25lZEluICYmIDxNYWluIC8+fVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBpZD1cImF1dGhvcml6ZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdub25lJyA6ICdibG9jaycgfX0+QXV0aG9yaXplPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5TaWduIE91dDwvYnV0dG9uPiAqL31cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcmlwdExvYWRlcihcclxuICAgICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnXHJcbikoQXBwKTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXJDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ9CU0L7QvNC+0LknLFxyXG4gICAgICAgIHJvdXRlOiAnLydcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgdGl0bGU6ICdUZXN0JyxcclxuICAgIC8vICAgICByb3V0ZTogJy90ZXN0J1xyXG4gICAgLy8gfVxyXG5dO1xyXG5cclxuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJhckNvbXBvbmVudFByb3BzIHtcclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGlzU2lnbmVkSW4/OiBib29sZWFuO1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuXHJcbiAgICBvbkxvZ2luQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25Mb2dvdXRDbGljaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJhckNvbXBvbmVudFN0YXRlIHtcclxuICAgIGFuY2hvckVsPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQmFyIGV4dGVuZHMgQ29tcG9uZW50PElBcHBCYXJDb21wb25lbnRQcm9wcywgSUFwcEJhckNvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG4gICAgICAgIGlmIChjdXJyZW50Um91dGUgIT09IG9wdGlvbi5yb3V0ZSkge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2gob3B0aW9uLnJvdXRlKTtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbCBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlTG9naW5DbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGlzU2lnbmVkSW4sIG9uTG9naW5DbGljaywgb25Mb2dvdXRDbGljayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2lnbmVkSW4pIHtcclxuICAgICAgICAgICAgb25Mb2dvdXRDbGljaygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb25Mb2dpbkNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1lbnUoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhbmNob3JFbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlID0gbG9jYXRpb24uaGFzaC5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYXBwYmFyX21lbnVCdXR0b24nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtb3ducz17b3BlbiA/ICdsb25nLW1lbnUnIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb25nLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBJVEVNX0hFSUdIVCAqIDQuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnMubWFwKG9wdGlvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17b3B0aW9uLnJvdXRlID09PSBjdXJyZW50Um91dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKG9wdGlvbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgaXNTaWduZWRJbiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhcHBiYXJfcm9vdCd9PlxyXG4gICAgICAgICAgICAgICAgPEFwcEJhckNvbXBvbmVudCBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17J2FwcGJhcl9ncm93J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2luQ2xpY2t9Pntpc1NpZ25lZEluID8gJ9CS0YvQudGC0LgnIDogJ9CS0L7QudGC0LgnfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIDwvQXBwQmFyQ29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFwcEJhcik7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgR3JpZExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQnVzeVByb3BzIHtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1c3k6IFJlYWN0LlNGQzxJQnVzeVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImJ1c3ktY29udGFpbmVyXCIgKyAocHJvcHMubG9hZGluZyA/IFwiXCIgOiBcIiBpbnZpc2libGVcIil9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzeVwiPlxyXG4gICAgICAgICAgICA8R3JpZExvYWRlclxyXG4gICAgICAgICAgICAgICAgY29sb3I9eycjZDAwMDZmJ31cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e3Byb3BzLmxvYWRpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWRkRGVzc2VydCwgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERlc3NlcnRUeXBlLCBNYWNhcm9uc0VudW0sIENha2VzRW51bSwgWmVwaHlyRW51bSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRGVzc2VydHNEaWN0LCBNYWNhcm9uc0NvbG9ycywgWmVwaHlyQ29sb3JzIH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgQWRkSWNvbiB9IGZyb20gJ21kaS1yZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcbmNvbnN0IE1JWF9UQVNURV9OQU1FID0gJ9Cd0LDQsdC+0YAnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZERlc3NlcnQ6ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiBkaXNwYXRjaChBZGREZXNzZXJ0KHR5cGUsIHRhc3RlLCBzaXplLCBxdWFudGl0eSkpLFxyXG4gICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSlcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVzc2VydHNDb21wb25lbnRQcm9wcyB7XHJcbiAgYWRkRGVzc2VydD86ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGhhbmRsZUNsb3NlPzogKCkgPT4gdm9pZDtcclxuICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVzc2VydHNDb21wb25lbnRTdGF0ZSB7XHJcbiAgZGVzc2VydFR5cGU/OiBEZXNzZXJ0VHlwZTtcclxuICBkZXNzZXJ0VGFzdGU/OiBzdHJpbmc7XHJcbiAgZGVzc2VydFF1YW50aXRpZXM/OiB7IFtpZDogc3RyaW5nXTogbnVtYmVyOyB9O1xyXG59XHJcblxyXG5jbGFzcyBEZXNzZXJ0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRGVzc2VydHNDb21wb25lbnRQcm9wcywgSURlc3NlcnRzQ29tcG9uZW50U3RhdGU+e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGVzc2VydFR5cGU6IG51bGwsXHJcbiAgICAgIGRlc3NlcnRUYXN0ZTogbnVsbCxcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXM6IHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmNsb3NlJyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0U2VsZWN0ID0gKGRlc3NlcnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0VHlwZTogZGVzc2VydFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0U2VsZWN0ZWQtPicgKyBkZXNzZXJ0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRUYXN0ZVNlbGVjdCA9IGFzeW5jICh0YXN0ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoZGVzc2VydFR5cGUgPT09IERlc3NlcnRUeXBlLkNha2UpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGVzc2VydFRhc3RlOiB0YXN0ZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFRhc3RlU2VsZWN0ZWQtPicgKyB0YXN0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZURlc3NlcnRJbmNyZWFzZSh0YXN0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0TWl4U2VsZWN0ID0gYXN5bmMgKHF0eSkgPT4ge1xyXG4gICAgdGhpcy5oYW5kbGVEZXNzZXJ0SW5jcmVhc2UoTUlYX1RBU1RFX05BTUUsIHF0eSk7XHJcbiAgICAvLyBhd2FpdCB0aGlzLnByb3BzLmFkZERlc3NlcnQoZGVzc2VydFR5cGUsIE1JWF9UQVNURV9OQU1FLCBudWxsLCBxdHkpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+aGFuZGxlRGVzc2VydE1peFNlbGVjdC0+JyArIHF0eSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0U2l6ZU9yUXVhbnRpdHlTZWxlY3QgPSBhc3luYyAoc2l6ZU9yUXR5KSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKGRlc3NlcnRUeXBlID09PSBEZXNzZXJ0VHlwZS5DYWtlKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBzaXplT3JRdHksIDEpO1xyXG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRTaXplU2VsZWN0ZWQtPicgKyBzaXplT3JRdHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIG51bGwsIHNpemVPclF0eSk7XHJcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFF1YW50aXR5U2VsZWN0ZWQtPicgKyBzaXplT3JRdHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmluaXNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFF1YW50aXRpZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzc2VydFF1YW50aXRpZXMpIHtcclxuICAgICAgY29uc3QgZGVzc2VydFRhc3RlID0ga2V5LnNwbGl0KCcvJylbMV07XHJcbiAgICAgIGNvbnN0IHF0eSA9IGRlc3NlcnRRdWFudGl0aWVzW2tleV07XHJcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBudWxsLCBxdHkgfHwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+aGFuZGxlRmluaXNoJyk7XHJcbiAgfVxyXG5cclxuICBnZXRJZChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlKSB7XHJcbiAgICByZXR1cm4gYCR7ZGVzc2VydFR5cGV9LyR7ZGVzc2VydFRhc3RlfWA7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0SW5jcmVhc2UgPSAodGFzdGUsIHF0eSA9IDEpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgdGFzdGUpO1xyXG4gICAgaWYgKCFkZXNzZXJ0UXVhbnRpdGllc1tpZF0pIHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNbaWRdID0gcXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNbaWRdICs9IHF0eTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFF0eUluY3JlYXNlLT4nICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgY291bnRUb3RhbERlc3NlcnRRdWFudGl0eSgpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzc2VydFF1YW50aXRpZXMpIHtcclxuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGRlc3NlcnRUeXBlKSkge1xyXG4gICAgICAgIHJlc3VsdCArPSBkZXNzZXJ0UXVhbnRpdGllc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0QXJyYXlGcm9tRW51bShlbjogYW55KSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW4pO1xyXG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgdmFsdWU6IGVuW2RdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGVzc2VydHMoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0S2V5cyA9IE9iamVjdC5rZXlzKERlc3NlcnRUeXBlKTtcclxuICAgIGNvbnN0IGRlc3NlcnRzID0gZGVzc2VydEtleXMubWFwKGQgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBkLFxyXG4gICAgICAgIHZhbHVlOiBEZXNzZXJ0VHlwZVtkXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdtYWNhcm9uQXZhdGFyJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZGQ3M2UyJyB9fT5cclxuICAgICAgICAgICAgICAgIHtkLnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRGVzc2VydFRhc3RlcygpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRRdWFudGl0aWVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGxldCBkZXNzZXJ0VGFzdGVzO1xyXG4gICAgbGV0IGV4dHJhT3B0aW9ucyA9IFtdO1xyXG4gICAgc3dpdGNoIChkZXNzZXJ0VHlwZSkge1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLkNha2U6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShDYWtlc0VudW0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLk1hY2Fyb246XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShNYWNhcm9uc0VudW0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiA2LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgNiDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogMTIsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCAxMiDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogMjQsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCAyNCDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5aZXBoeXI6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShaZXBoeXJFbnVtKTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogOCxcclxuICAgICAgICAgIHRpdGxlOiAn0J3QsNCx0L7RgCDQvdCwIDgg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXh0cmFPcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IDE2LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgMTYg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAge2Rlc3NlcnRUeXBlICE9PSBEZXNzZXJ0VHlwZS5DYWtlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQXBwbHlXcmFwZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdGl0bGU9XCJDaGVjayBPdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUZpbmlzaH0+XHJcbiAgICAgICAgICAgINCf0YDQuNC80LXQvdC40YLRjFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRlc3NlcnRUYXN0ZXMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nbWFjYXJvbkF2YXRhcicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBkZXNzZXJ0VHlwZSA9PT0gRGVzc2VydFR5cGUuTWFjYXJvbiA/IE1hY2Fyb25zQ29sb3JzW2QudmFsdWVdIDogWmVwaHlyQ29sb3JzW2QudmFsdWVdIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZC52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlICsgKGRlc3NlcnRUeXBlICE9PSBEZXNzZXJ0VHlwZS5DYWtlID8gYCgke2Rlc3NlcnRRdWFudGl0aWVzW3RoaXMuZ2V0SWQoZGVzc2VydFR5cGUsIGQudmFsdWUpXSB8fCAwfSlgIDogJycpfSAvPlxyXG4gICAgICAgICAgICAgIHtkZXNzZXJ0VHlwZSAhPT0gRGVzc2VydFR5cGUuQ2FrZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQWRkXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0SW5jcmVhc2UoZC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV4dHJhT3B0aW9ucy5tYXAobyA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0TWl4U2VsZWN0KG8udmFsdWUpfSBrZXk9e28udmFsdWV9ID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nbWFjYXJvbkF2YXRhcicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2RkNzNlMicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtvLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2Ake28udGl0bGV9KCR7ZGVzc2VydFF1YW50aXRpZXNbdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgTUlYX1RBU1RFX05BTUUpXSB8fCAwfSlgfSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXJEZXNzZXJ0U2l6ZSgpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBkZXNzZXJ0U2l6ZXMgPSBEZXNzZXJ0c0RpY3RbZGVzc2VydFR5cGVdO1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydFNpemVzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2l6ZU9yUXVhbnRpdHlTZWxlY3QoZCl9IGtleT17ZH0gPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2R9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuIGZ1bGxTY3JlZW4gPlxyXG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgeyFkZXNzZXJ0VHlwZSA/ICfQktGL0LHQtdGA0LjRgtC1INCU0LXRgdC10YDRgicgOiAoIWRlc3NlcnRUYXN0ZSA/IGDQktGL0LHQtdGA0LjRgtC1INCy0LrRg9GBICgke3RoaXMuY291bnRUb3RhbERlc3NlcnRRdWFudGl0eSgpfSlgIDogJ9CS0YvQsdC10YDQuNGC0LUg0YDQsNC30LzQtdGAJyl9XHJcbiAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgIHshZGVzc2VydFR5cGUgPyB0aGlzLnJlbmRlckRlc3NlcnRzKCkgOiAoIWRlc3NlcnRUYXN0ZSA/IHRoaXMucmVuZGVyRGVzc2VydFRhc3RlcygpIDogdGhpcy5yZW5kZXJEZXNzZXJ0U2l6ZSgpKX1cclxuICAgIDwvRGlhbG9nPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEZXNzZXJ0c0NvbXBvbmVudCkpXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBZGREcmluaywgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERyaW5rc1R5cGUsIERyaW5rIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBEcmlua3NEaWN0IH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgQWRkSWNvbiB9IGZyb20gJ21kaS1yZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGREcmluazogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gZGlzcGF0Y2goQWRkRHJpbmsodHlwZSwgc2l6ZSkpLFxyXG4gICAgICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJpbmtzQ29tcG9uZW50UHJvcHMge1xyXG4gICAgYWRkRHJpbms/OiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gICAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyaW5rc0NvbXBvbmVudFN0YXRlIHtcclxuICAgIGRyaW5rVHlwZT86IERyaW5rc1R5cGU7XHJcbiAgICBkcmlua1NpemU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIERyaW5rc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRHJpbmtzQ29tcG9uZW50UHJvcHMsIElEcmlua3NDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJpbmtUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICBkcmlua1NpemU6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5jbG9zZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyaW5rU2VsZWN0ID0gYXN5bmMgKGRyaW5rKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHJpbmtTaXplcyA9IERyaW5rc0RpY3RbZHJpbmtdO1xyXG4gICAgICAgIGlmIChkcmlua1NpemVzICYmIGRyaW5rU2l6ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZHJpbmtUeXBlOiBkcmluayxcclxuICAgICAgICAgICAgICAgIGRyaW5rU2l6ZTogZHJpbmtTaXplc1swXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRHJpbmsoZHJpbmssIGRyaW5rU2l6ZXNbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9nRGF0YShgZHJpbmtzLT5kcmlua1NlbGVjdGVkLT4ke2RyaW5rfS0+ZHJpbmtTaXplU2VsZWN0ZWQtPiR7ZHJpbmtTaXplc1swXX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRyaW5rVHlwZTogZHJpbmtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5kcmlua1NlbGVjdGVkLT4nICsgZHJpbmspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmlua1NpemVTZWxlY3QgPSBhc3luYyAoZHJpbmtTaXplKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyaW5rU2l6ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERyaW5rKGRyaW5rVHlwZSwgZHJpbmtTaXplKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkcmlua3MtPmRyaW5rU2l6ZVNlbGVjdGVkLT4nICsgZHJpbmtTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEcmlua3MoKSB7XHJcbiAgICAgICAgY29uc3QgZHJpbmtLZXlzID0gT2JqZWN0LmtleXMoRHJpbmtzVHlwZSk7XHJcbiAgICAgICAgY29uc3QgZHJpbmtzID0gZHJpbmtLZXlzLm1hcChkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IERyaW5rc1R5cGVbZF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtkcmlua3MubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEcmlua1NlbGVjdChkLnZhbHVlKX0ga2V5PXtkLmlkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdkcmlua0F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyRHJpbmtTaXplcygpIHtcclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmlua1NpemVzID0gRHJpbmtzRGljdFtkcmlua1R5cGVdO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZHJpbmtTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2l6ZVNlbGVjdChkKX0ga2V5PXtkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdkcmlua0F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPERpYWxvZyBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3BlbiBmdWxsU2NyZWVuID5cclxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2ltcGxlLWRpYWxvZy10aXRsZVwiPnshZHJpbmtUeXBlID8gJ9CS0YvQsdC10YDQuNGC0LUg0L3QsNC/0LjRgtC+0LonIDogJ9CS0YvQsdC10YDQuNGC0LUg0YDQsNC30LzQtdGAJ308L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICB7IWRyaW5rVHlwZSA/IHRoaXMucmVuZGVyRHJpbmtzKCkgOiB0aGlzLnJlbmRlckRyaW5rU2l6ZXMoKX1cclxuICAgICAgICA8L0RpYWxvZz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEcmlua3NDb21wb25lbnQpKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBFeHBhbnNpb25QYW5lbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbCc7XHJcbmltcG9ydCBFeHBhbnNpb25QYW5lbFN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5JztcclxuaW1wb3J0IEV4cGFuc2lvblBhbmVsRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbERldGFpbHMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeVxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGlzdG9yeUNvbXBvbmVudFByb3BzIHtcclxuICAgIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhpc3RvcnlDb21wb25lbnRTdGF0ZSB7XHJcbn1cclxuXHJcbmNsYXNzIEhpc3RvcnlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SUhpc3RvcnlDb21wb25lbnRQcm9wcywgSUhpc3RvcnlDb21wb25lbnRTdGF0ZT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICAgIHtoaXN0b3J5LnNvcnQoKGEsIGIpID0+IChhLmlkID4gYi5pZCkgPyAtMSA6ICgoYi5pZCA+IGEuaWQpID8gMSA6IDApKS5tYXAoaCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGtleT17aC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsIGNsYXNzTmFtZT0naGlzdG9yeUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbFN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pntg0KfQtdC6ICMke2guaWR9YH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5zaW9uUGFuZWxEZXRhaWxzIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj7QlNC10YHQtdGA0YLRizwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmRlc3NlcnRzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VHlwb2dyYXBoeSBrZXk9e2luZGV4fSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtkLnR5cGV9ICR7ZC50YXN0ZX06ICR7ZC5xdWFudGl0eSA/IGQucXVhbnRpdHkgOiBkLnNpemV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj7QndCw0L/QuNGC0LrQuDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmRyaW5rcy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFR5cG9ncmFwaHkga2V5PXtpbmRleH0gdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZC5pZH06ICR7ZC5zaXplfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+0KLQuNC/INC+0L/Qu9Cw0YLRizogPC9iPntoLnBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlzdG9yeUl0ZW1Sb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9eydzdWJoZWFkaW5nJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCi0LjQvyDQt9Cw0LrQsNC30LA6IDwvYj57aC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGlzdG9yeUNvbXBvbmVudCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmpzJztcclxuXHJcbmNvbnN0IExhcmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMsIGNvbXBvbmVudCwgb25DbGljaywgdGl0bGUsIGltYWdlVXJsIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgZm9jdXNSaXBwbGVcclxuICAgICAgICAgICAgICAgIGtleT17J21haW4nfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU9e2NsYXNzZXMuZm9jdXNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMwJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3ViaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VNYXJrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGFyZ2VCdXR0b24pOyIsImV4cG9ydCBkZWZhdWx0IHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcyNXZoJ1xyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnLCAvLyBPdmVycmlkZXMgaW5saW5lLXN0eWxlXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXIsICYkZm9jdXNWaXNpYmxlJzoge1xyXG4gICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICcmICRpbWFnZUJhY2tkcm9wJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlTWFya2VkJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlVGl0bGUnOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgNDAlJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogNH1weCAke3RoZW1lLnNwYWNpbmcudW5pdCArIDZ9cHhgLFxyXG4gICAgfSxcclxuICAgIGltYWdlTWFya2VkOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLFxyXG4gICAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGJvdHRvbTogLTIsXHJcbiAgICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gOXB4KScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgQ2hlY2ssIERlc3NlcnQsIERyaW5rLCBEZXNzZXJ0VHlwZSwgRHJpbmtzVHlwZSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IERyaW5rc0NvbXBvbmVudCBmcm9tICcuL0RyaW5rc0NvbXBvbmVudCc7XHJcbmltcG9ydCBEZXNzZXJ0c0NvbXBvbmVudCBmcm9tICcuL0Rlc3NlcnRzQ29tcG9uZW50JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBMYXJnZUJ1dHRvbiBmcm9tICcuL0xhcmdlQnV0dG9uJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgeyBEZWxldGVEZXNzZXJ0LCBEZWxldGVEcmluayB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgZGVzc2VydHNJbWFnZSA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9pbWFnZXMvZGVzc2VydHNfaWNvbi5qcGcnKTtcclxuY29uc3QgZHJpbmtzSW1hZ2UgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL2RyaW5rc19pY29uLmpwZycpO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrOiBzdGF0ZS5jaGVja1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZWxldGVEZXNzZXJ0OiAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZykgPT4gZGlzcGF0Y2goRGVsZXRlRGVzc2VydCh0eXBlLCB0YXN0ZSwgc2l6ZSkpLFxyXG4gICAgICAgIGRlbGV0ZURyaW5rOiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChEZWxldGVEcmluayh0eXBlLCBzaXplKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXdPcmRlckNvbXBvbmVudFByb3BzIHtcclxuICAgIGNoZWNrPzogQ2hlY2s7XHJcbiAgICBoaXN0b3J5PzogYW55O1xyXG5cclxuICAgIGRlbGV0ZURlc3NlcnQ/OiAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGRlbGV0ZURyaW5rPzogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTmV3T3JkZXJDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBzaG93RHJpbmtzPzogYm9vbGVhbjtcclxuICAgIHNob3dEZXNzZXJ0cz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIE5ld09yZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElOZXdPcmRlckNvbXBvbmVudFByb3BzLCBJTmV3T3JkZXJDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd0RyaW5rczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dEZXNzZXJ0czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRHJpbmtDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0RyaW5rczogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGVzc2VydENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RGVzc2VydHM6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvY2hlY2tPdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEZWxldGVEcmluayA9IChkcmluazogRHJpbmspID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZURyaW5rKGRyaW5rLmlkLCBkcmluay5zaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEZWxldGVEZXNzZXJ0ID0gKGRlc3NlcnQ6IERlc3NlcnQpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZURlc3NlcnQoZGVzc2VydC50eXBlLCBkZXNzZXJ0LnRhc3RlLCBkZXNzZXJ0LnNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNoZWNrQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICAgIHtjaGVjay5kcmlua3MubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtgJHtkLmlkfSAtICR7ZC5zaXplfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlRHJpbmsoZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAge2NoZWNrLmRlc3NlcnRzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YCR7ZC50eXBlfSAtICR7ZC50YXN0ZX0gLSAke2QucXVhbnRpdHl9JHtkLnNpemUgPyAoJyAtICcgKyBkLnNpemUpIDogJyd9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRGVsZXRlXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGVEZXNzZXJ0KGQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzaG93RHJpbmtzLCBzaG93RGVzc2VydHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgINCf0L7QttCw0LvRg9C50YHRgtCwLCDRgdC+0LfQtNCw0LnRgtC1INGB0L3QsNGH0LDQu9CwINGH0LXQulxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICDQndC+0LLRi9C5INC30LDQutCw0LdcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7YNCn0LXQuiAjJHtjaGVjay5pZH1gfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGVja0NvbnRlbnQoKX1cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uc1dyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQlNCV0KHQldCg0KLQqyd9IGltYWdlVXJsPXtkZXNzZXJ0c0ltYWdlfSBvbkNsaWNrPXt0aGlzLmFkZERlc3NlcnRDbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQndCQ0J/QmNCi0JrQmCd9IGltYWdlVXJsPXtkcmlua3NJbWFnZX0gb25DbGljaz17dGhpcy5hZGREcmlua0NsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbnNXcmFwZXInfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2suZGVzc2VydHMubGVuZ3RoID09PSAwICYmIGNoZWNrLmRyaW5rcy5sZW5ndGggPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dENsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCf0YDQvtC00L7Qu9C20LjRgtGMXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dEcmlua3MgJiYgPERyaW5rc0NvbXBvbmVudCBoYW5kbGVDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dEcmlua3M6IGZhbHNlIH0pfSAvPn1cclxuICAgICAgICAgICAge3Nob3dEZXNzZXJ0cyAmJiA8RGVzc2VydHNDb21wb25lbnQgaGFuZGxlQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93RGVzc2VydHM6IGZhbHNlIH0pfSAvPn1cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChOZXdPcmRlckNvbXBvbmVudCkpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgRXJyb3JJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvcic7XHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbyc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJDb250ZW50JztcclxuaW1wb3J0IFdhcm5pbmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYXJuaW5nJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCB7IENsZWFyRXJyb3IgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBzdGF0ZS5lcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgdHlwZTogc3RhdGUubm90aWZpY2F0aW9uVHlwZVxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhckVycm9yOiAoKSA9PiBkaXNwYXRjaChDbGVhckVycm9yKCkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVmFyaWFudEljb24ge1xyXG4gICAgc3VjY2VzcyxcclxuICAgIHdhcm5pbmcsXHJcbiAgICBlcnJvcixcclxuICAgIGluZm9cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uQ29tcG9uZW50UHJvcHMge1xyXG4gICAgLy8gY2xhc3NlczogYW55O1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgdHlwZTogVmFyaWFudEljb247XHJcblxyXG4gICAgY2xlYXJFcnJvcj86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvbkNvbXBvbmVudFN0YXRlIHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJTm90aWZpY2F0aW9uQ29tcG9uZW50UHJvcHMsIElOb3RpZmljYXRpb25Db21wb25lbnRTdGF0ZT57XHJcbiAgICBnZXRJY29uKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uc3VjY2VzczpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IENoZWNrQ2lyY2xlSWNvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLndhcm5pbmc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBXYXJuaW5nSWNvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLmVycm9yOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gRXJyb3JJY29uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uaW5mbzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IEluZm9JY29uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENsYXNzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uc3VjY2VzczpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLndhcm5pbmc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnd2FybmluZyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5lcnJvcjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdlcnJvcic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5pbmZvOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ2luZm8nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgSWNvbiA9IHRoaXMuZ2V0SWNvbigpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvcGVuPXshIW1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNuYWNrYmFyQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5nZXRDbGFzcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjbGllbnQtc25hY2tiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNsaWVudC1zbmFja2JhclwiIGNsYXNzTmFtZT17J21lc3NhZ2UnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaWNvbicsICdpY29uLXZhcmlhbnQnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbm90aWZpY2F0aW9uQ2xvc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShOb3RpZmljYXRpb25Db21wb25lbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgUGFydG5lcnNFbnVtIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBQcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdCB9IGZyb20gJy4uL2FjdGlvbnMnXHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCB7IENhZmZlZVByaWNlcywgWkVQSFlSX1BSSUNFIH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgIH07XHJcbn07XHJcblxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0OiAocGFydG5lcjogc3RyaW5nLCBtYWNRdHk6IG51bWJlciwgemVwUXR5OiBudW1iZXIpID0+IGRpc3BhdGNoKFByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0KHBhcnRuZXIsIG1hY1F0eSwgemVwUXR5KSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0bmVyc0NvbXBvbmVudFByb3BzIHtcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcbiAgICBwcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdD86IChwYXJ0bmVyOiBzdHJpbmcsIG1hY1F0eTogbnVtYmVyLCB6ZXBRdHk6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFydG5lcnNDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBwYXJ0bmVyPzogc3RyaW5nO1xyXG4gICAgbWFjYXJvbnNRdHk/OiBudW1iZXI7XHJcbiAgICB6ZXBoeXJRdHk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIFBhcnRuZXJzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElQYXJ0bmVyc0NvbXBvbmVudFByb3BzLCBJUGFydG5lcnNDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFydG5lcjogJycsXHJcbiAgICAgICAgICAgIG1hY2Fyb25zUXR5OiAwLFxyXG4gICAgICAgICAgICB6ZXBoeXJRdHk6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJyYXlGcm9tRW51bShlbjogYW55KSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVuKTtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcChkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGVuW2RdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGFydG5lclNlbGVjdCA9IChldikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRuZXIgPSBldi50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhcnRuZXIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWFjYXJvbnNRdHlDaGFuZ2UgPSAoZXYpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWFjYXJvbnNRdHk6IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVplcGh5clF0eUNoYW5nZSA9IChldikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB6ZXBoeXJRdHk6IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0LCBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgcGFydG5lciwgbWFjYXJvbnNRdHksIHplcGh5clF0eX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0KHBhcnRuZXIsIG1hY2Fyb25zUXR5LCB6ZXBoeXJRdHkpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVRvdGFsUHJpY2UoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYXJ0bmVyLCBtYWNhcm9uc1F0eSwgemVwaHlyUXR5IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuICAgICAgICBpZiAoIXBhcnRuZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYWNhcm9uUHJpY2UgPSBDYWZmZWVQcmljZXNbcGFydG5lcl07XHJcbiAgICAgICAgdG90YWxQcmljZSArPSBtYWNhcm9uc1F0eSAqIG1hY2Fyb25QcmljZTtcclxuXHJcbiAgICAgICAgdG90YWxQcmljZSArPSBaRVBIWVJfUFJJQ0UgKiB6ZXBoeXJRdHk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbFByaWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhcnRuZXIsIG1hY2Fyb25zUXR5LCB6ZXBoeXJRdHkgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcGFydG5lcnMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oUGFydG5lcnNFbnVtKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaGVhZGxpbmVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAg0J7Qv9GC0L7QstGL0Lkg0LfQsNC60LDQt1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9J3BhcnRuZXJTZWxlY3RXcmFwcGVyJz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJwYXJ0bmVyLXNlbGVjdFwiPtCa0L7RhNC10LnQvdGPPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJ0bmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhcnRuZXJTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFydG5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAncGFydG5lci1zZWxlY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT5Ob25lPC9lbT5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydG5lcnMubWFwKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSBrZXk9e3AuaWR9IHZhbHVlPXtwLnZhbHVlfT57cC52YWx1ZX08L01lbnVJdGVtPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQnNCw0LrQsNGA0L7QvdGLXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXttYWNhcm9uc1F0eX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU1hY2Fyb25zUXR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC80LDQutCw0YDQvtC90YFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCX0LXRhNC40YBcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3plcGh5clF0eX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVplcGh5clF0eUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwYXJ0bmVyfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQt9C10YTQuNGA0LBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCY0YLQvtCz0L5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Ake3RoaXMuY2FsY3VsYXRlVG90YWxQcmljZSgpfSDQs9GA0L0uYH1cclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydidXR0b25zV3JhcGVyJ30+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwYXJ0bmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRDbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDQk9C+0YLQvtCy0L5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChQYXJ0bmVyc0NvbXBvbmVudCkpO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUHJvY2Vzc0ZldGNoRGF0YSwgUHJvY2Vzc0FwcGVuZERhdGEsIFByb2Nlc3NVcGRhdGVEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBzY3JpcHRMb2FkZXIgZnJvbSAncmVhY3QtYXN5bmMtc2NyaXB0LWxvYWRlcic7XHJcbmltcG9ydCB7IERJU0NPVkVSWV9ET0NTLCBTQ09QRVMsIENMSUVOVF9JRCwgQVBJX0tFWSwgVEVTVF9TUFJFQURTSEVFVF9JRCB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLFxyXG4gICAgICAgIGhhc0Vycm9yZWQ6IHN0YXRlLmhhc0Vycm9yZWQsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmcsXHJcbiAgICAgICAgbGFiZWw6IHN0YXRlLmxhYmVsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZldGNoRGF0YTogKHVybCkgPT4gZGlzcGF0Y2goUHJvY2Vzc0ZldGNoRGF0YSh1cmwpKSxcclxuICAgICAgICBhcHBlbmREYXRhOiAodXJsLCByYW5nZSwgZGF0YSkgPT4gZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEodXJsLCByYW5nZSwgZGF0YSkpLFxyXG4gICAgICAgIHVwZGF0ZURhdGE6ICh1cmwsIGRhdGEpID0+IGRpc3BhdGNoKFByb2Nlc3NVcGRhdGVEYXRhKHVybCwgZGF0YSkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGVzdENvbXBvbmVudFByb3BzIHtcclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgaXRlbXM/OiBhbnk7XHJcbiAgICBoYXNFcnJvcmVkPzogYm9vbGVhbjtcclxuICAgIGlzTG9hZGluZz86IGJvb2xlYW47XHJcblxyXG4gICAgaXNTY3JpcHRMb2FkZWQ/OiBib29sZWFuO1xyXG4gICAgaXNTY3JpcHRMb2FkU3VjY2VlZD86IGJvb2xlYW47XHJcblxyXG4gICAgZmV0Y2hEYXRhPzogKHVybDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgYXBwZW5kRGF0YT86ICh1cmw6IHN0cmluZywgcmFuZ2U6IHN0cmluZywgZGF0YTogYW55W10pID0+IHZvaWQ7XHJcbiAgICB1cGRhdGVEYXRhPzogKHVybDogc3RyaW5nLCBkYXRhOiBhbnlbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGVzdENvbXBvbmVudFN0YXRlIHtcclxuICAgIGlzU2lnbmVkSW4/OiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBUZXN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElUZXN0Q29tcG9uZW50UHJvcHMsIElUZXN0Q29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXV0aENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbkluKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNpZ25vdXRDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25PdXQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFwcGVuZENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgIFtcIkl0ZW0xXCIsIFwiWExcIiwgXCIxXCIsIFwiMFwiLCBkYXRlVGltZS50b1VUQ1N0cmluZygpXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBcIlJhd0RhdGEhQTpFXCI7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hcHBlbmREYXRhKFRFU1RfU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVVcGRhdGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgIFtcIkl0ZW0xXCIsIFwiQ29zdFwiLCBcIlN0b2NrZWRcIiwgXCJTaGlwIERhdGVcIl0sXHJcbiAgICAgICAgICAgIFtcIldoZWVsMVwiLCBcIiQyMC41MFwiLCBcIjRcIiwgXCIzLzEvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiRG9vcjFcIiwgXCIkMTVcIiwgXCIyXCIsIFwiMy8xNS8yMDE2XCJdLFxyXG4gICAgICAgICAgICBbXCJFbmdpbmUxXCIsIFwiJDEwMFwiLCBcIjFcIiwgXCIzMC8yMC8yMDE2XCJdLFxyXG4gICAgICAgICAgICBbXCJUb3RhbHMxXCIsIFwiPVNVTShCMjpCNClcIiwgXCI9U1VNKEMyOkM0KVwiLCBcIj1NQVgoRDI6RDQpXCJdXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURhdGEoVEVTVF9TUFJFQURTSEVFVF9JRCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IGlzU2NyaXB0TG9hZGVkIH0gPSBuZXh0UHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChpc1NjcmlwdExvYWRlZCAmJiAhdGhpcy5wcm9wcy5pc1NjcmlwdExvYWRlZCkge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ2dhcGknXS5sb2FkKCdjbGllbnQ6YXV0aDInLCB0aGlzLmluaXRDbGllbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0Q2xpZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmNsaWVudC5pbml0KHtcclxuICAgICAgICAgICAgYXBpS2V5OiBBUElfS0VZLFxyXG4gICAgICAgICAgICBjbGllbnRJZDogQ0xJRU5UX0lELFxyXG4gICAgICAgICAgICBkaXNjb3ZlcnlEb2NzOiBESVNDT1ZFUllfRE9DUyxcclxuICAgICAgICAgICAgc2NvcGU6IFNDT1BFU1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoRGF0YShURVNUX1NQUkVBRFNIRUVUX0lEKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLmZldGNoRGF0YSgnaHR0cDovLzU4MjZlZDk2MzkwMGQ2MTIwMDAxMzhiZC5tb2NrYXBpLmlvL2l0ZW1zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGhhc0Vycm9yZWQsIGlzTG9hZGluZywgaXRlbXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIGlmIChoYXNFcnJvcmVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDxwPlNvcnJ5ISBUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgaXRlbXM8L3A+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDxwPkxvYWRpbmfigKY8L3A+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1bMF0gKyBpdGVtWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC8+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIHtyZXN1bHR9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBcHBlbmRDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdibG9jaycgOiAnbm9uZScgfX0+QXBwZW5kIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVVcGRhdGVDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdibG9jaycgOiAnbm9uZScgfX0+VXBkYXRlIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhdXRob3JpemVfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBdXRoQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnbm9uZScgOiAnYmxvY2snIH19PkF1dGhvcml6ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwic2lnbm91dF9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNpZ25vdXRDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdibG9jaycgOiAnbm9uZScgfX0+U2lnbiBPdXQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcmlwdExvYWRlcihcclxuICAgICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnXHJcbikoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVzdENvbXBvbmVudCkpXHJcbiIsImV4cG9ydCBjb25zdCBESVNDT1ZFUllfRE9DUyA9IFtcImh0dHBzOi8vc2hlZXRzLmdvb2dsZWFwaXMuY29tLyRkaXNjb3ZlcnkvcmVzdD92ZXJzaW9uPXY0XCJdO1xyXG5leHBvcnQgY29uc3QgU0NPUEVTID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0c1wiO1xyXG5leHBvcnQgY29uc3QgQ0xJRU5UX0lEID0gJzg0MjQxNzE5ODc2Ny03azQycHQ5ZWNndHU1Zjdvb3BuZzFvcXUzYTc5aTVpOS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSc7XHJcbmV4cG9ydCBjb25zdCBBUElfS0VZID0gJ0FJemFTeUFsSTVpOE9PdHc4YUVFTVM0OEU5cG91RXB0cTh0RWcyTSc7XHJcbmV4cG9ydCBjb25zdCBURVNUX1NQUkVBRFNIRUVUX0lEID0gJzFPYk1oODdkTm1pelhiZFdrSDlUaXFmckNmQXBrX3JxeFBHdVFfek5nSklNJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dTX1NQUkVBRFNIRUVUX0lEID0gJzFOUFlvVjlZczUyemY5Vl9Oa2xRNUpkWGhqcHBCTGUwZEM5VDQzM1pZN1A4JztcclxuZXhwb3J0IGNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFVQnVFd3FVeUJJdnZZMWlobUVwOWhiMWo4bTRKQ3BUbC1hOG1KNlJqVVZ3JztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XHJcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9zdG9yZS9pbml0aWFsU3RhdGUnO1xyXG5pbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcclxuaW1wb3J0ICd0eXBlZmFjZS1yb2JvdG8nO1xyXG5yZXF1aXJlKCcuLi9wdWJsaWMvaW1hZ2VzL2Zhdmljb24ucG5nJyk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XHJcbnJvb3Quc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG5yZW5kZXIoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8Um91dGVyID5cclxuICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICByb290XHJcbik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBOZXdPcmRlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgQ2hlY2tQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElDaGVja1BhZ2VQcm9wcywgYW55PntcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+ICAgICAgICAgIFxyXG4gICAgICAgICAgPE5ld09yZGVyQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoQ2hlY2tQYWdlKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IFBheW1lbnQsIE9yZGVyVHlwZSwgQ2hlY2ssIERlc3NlcnQsIERyaW5rIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBQcm9jZXNzQ2hlY2tvdXQsIFNldFBheW1lbnRUeXBlLCBTZXRPcmRlclR5cGUsIExvZ0RhdGEsIENhbmNlbCB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCB7IE1BQ0FST05TX1BSSUNFLCBaRVBIWVJfUFJJQ0UsIERyaW5rUHJpY2VzRGljdCwgRHJpbmtzRGljdCwgQ2FrZXNQcmljZXNEaWN0IH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgRGVzc2VydFR5cGUgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbmRsZUNoZWNrb3V0OiAoKSA9PiBkaXNwYXRjaChQcm9jZXNzQ2hlY2tvdXQoKSksXHJcbiAgICAgICAgc2V0UGF5bWVudFR5cGU6ICh0eXBlOiBQYXltZW50KSA9PiBkaXNwYXRjaChTZXRQYXltZW50VHlwZSh0eXBlKSksXHJcbiAgICAgICAgc2V0T3JkZXJUeXBlOiAodHlwZTogT3JkZXJUeXBlKSA9PiBkaXNwYXRjaChTZXRPcmRlclR5cGUodHlwZSkpLFxyXG4gICAgICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpLFxyXG4gICAgICAgIGhhbmRsZUNhbmNlbDogKCkgPT4gZGlzcGF0Y2goQ2FuY2VsKCkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tvdXRQYWdlUHJvcHMge1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuICAgIGNoZWNrPzogQ2hlY2s7XHJcblxyXG4gICAgc2V0UGF5bWVudFR5cGU/OiAodHlwZTogUGF5bWVudCkgPT4gdm9pZDtcclxuICAgIHNldE9yZGVyVHlwZT86ICh0eXBlOiBPcmRlclR5cGUpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDaGVja291dD86ICgpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDYW5jZWw/OiAoKSA9PiB2b2lkO1xyXG4gICAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrb3V0UGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tvdXRQYWdlUHJvcHMsIGFueT57XHJcbiAgICBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNoZWNrb3V0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+Y2hlY2tvdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5jYW5jZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hlY2snKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+YmFjaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlID0gKHR5cGU6IFBheW1lbnQpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldFBheW1lbnRUeXBlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5wYXltZW50VHlwZUNoYW5nZWQtPicgKyB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVPcmRlclR5cGVDaGFuZ2UgPSAodHlwZTogT3JkZXJUeXBlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRPcmRlclR5cGUodHlwZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPm9yZGVyVHlwZUNoYW5nZWQtPicgKyB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVQcmljZSgpIHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuICAgICAgICBjaGVjay5kZXNzZXJ0cy5mb3JFYWNoKChkOiBEZXNzZXJ0KSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERlc3NlcnRUeXBlLkNha2U6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FrZVByaWNlcyA9IENha2VzUHJpY2VzRGljdFtkLnRhc3RlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZC5zaXplID09PSAnMTgg0YHQvCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBjYWtlUHJpY2VzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5zaXplID09PSAnMjIg0YHQvCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBjYWtlUHJpY2VzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRGVzc2VydFR5cGUuTWFjYXJvbjpcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IE1BQ0FST05TX1BSSUNFICogZC5xdWFudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRGVzc2VydFR5cGUuWmVwaHlyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gWkVQSFlSX1BSSUNFICogZC5xdWFudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2hlY2suZHJpbmtzLmZvckVhY2goKGQ6IERyaW5rKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlcyA9IERyaW5rUHJpY2VzRGljdFtkLmlkXTtcclxuICAgICAgICAgICAgaWYgKHByaWNlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gcHJpY2VzWzBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBEcmlua3NEaWN0W2QuaWRdLmZpbmRJbmRleCh4ID0+IHggPT09IGQuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IHByaWNlc1tpbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsUHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICDQn9C+0LbQsNC70YPQudGB0YLQsCwg0YHQvtC30LTQsNC50YLQtSDRgdC90LDRh9Cw0LvQsCDRh9C10LpcclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0YLRgNCw0L3QuNGG0LAg0LLRi9Cx0L7RgNCwINC/0LDRgNCw0LzQtdGC0YDQvtCyINGH0LXQutCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dENvbnRyb2xHcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQmNGC0L7Qs9C+OiB7dGhpcy5jYWxjdWxhdGVQcmljZSgpfSDQs9GA0L0uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0Q29udHJvbEdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCi0LjQvyDQv9C70LDRgtC10LbQsDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay5wYXltZW50ID09PSBQYXltZW50LkNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FyZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhcmQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQmtCw0YDRgtCwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay5wYXltZW50ID09PSBQYXltZW50LkNhc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FzaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhc2gudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQndCw0LvQuNGH0L3Ri9C1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRDb250cm9sR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KLQuNC/INC30LDQutCw0LfQsDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuUHJlT3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuUHJlT3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlByZU9yZGVyLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J/RgNC10LTQt9Cw0LrQsNC3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuU2hvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlT3JkZXJUeXBlQ2hhbmdlKE9yZGVyVHlwZS5TaG9wKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09yZGVyVHlwZS5TaG9wLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JLQuNGC0YDQuNC90LBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydidXR0b25zV3JhcGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3Nlcz17eyByb290OiAnYnV0dG9uJyB9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdGl0bGU9XCJDaGVjayBPdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQvtC00L7Qu9C20LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzZXM9e3sgcm9vdDogJ2J1dHRvbicgfX0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwiZGVmYXVsdFwiIHRpdGxlPVwiQmFja1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndCw0LfQsNC0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzZXM9e3sgcm9vdDogJ2J1dHRvbicgfX0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgdGl0bGU9XCJDYW5jZWxcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0UGFnZSkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ3JlYXRlQ2hlY2ssIExvZ0RhdGEsIENsZWFyRXJyb3IsIFByb2Nlc3NGZXRjaERhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCBMYXJnZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0xhcmdlQnV0dG9uJztcclxuaW1wb3J0IEhpc3RvcnlDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9IaXN0b3J5Q29tcG9uZW50JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IEJ1c3kgfSBmcm9tICcuLi9jb21wb25lbnRzL0J1c3knO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IFNQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IGltYWdlVXJsID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9tYWluX2ljb24uanBnJyk7XHJcbmNvbnN0IHBhcnRuZXJVcmwgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL3BhcnRuZXJzX2ljb24uanBnJyk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeSxcclxuICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjcmVhdGVDaGVjazogKCkgPT4gZGlzcGF0Y2goQ3JlYXRlQ2hlY2soKSksXHJcbiAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKSxcclxuICAgIGZldGNoRGF0YTogKHVybCkgPT4gZGlzcGF0Y2goUHJvY2Vzc0ZldGNoRGF0YSh1cmwpKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBDa2Vja0xpbmsgPSBwcm9wcyA9PiA8TGluayB0bz1cIi9jaGVja1wiIHsuLi5wcm9wc30gLz47XHJcbmNvbnN0IFBhcnRuZXJzTGluayA9IHByb3BzID0+IDxMaW5rIHRvPVwiL3BhcnRuZXJzXCIgey4uLnByb3BzfSAvPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1haW5QYWdlUHJvcHMge1xyXG4gIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgY3JlYXRlQ2hlY2s/OiAoKSA9PiB2b2lkO1xyXG4gIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGZldGNoRGF0YT86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SU1haW5QYWdlUHJvcHMsIGFueT57XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAoIWhpc3RvcnkgfHwgIWhpc3RvcnkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFNQUkVBRFNIRUVUX0lEKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbk5ld0NoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNoZWNrKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ21haW5QYWdlLT5uZXdDaGVjaycpO1xyXG4gIH1cclxuXHJcbiAgb25OZXdQYXJ0bmVyc0NoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNoZWNrKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ21haW5QYWdlLT5vbk5ld1BhcnRuZXJzQ2hlY2tDbGljaycpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzZXM9e3sgcm9vdDogJ2NhcmRSb290JyB9fT5cclxuICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9Cg0J7Ql9Cd0JjQp9Cd0KvQmSDQl9CQ0JrQkNCXJ30gY29tcG9uZW50PXtDa2Vja0xpbmt9IGltYWdlVXJsPXtpbWFnZVVybH0gb25DbGljaz17dGhpcy5vbk5ld0NoZWNrQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVyJ30gcmFpc2VkPlxyXG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc2VzPXt7IHJvb3Q6ICdjYXJkUm9vdCcgfX0+XHJcbiAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQntCf0KLQntCS0KvQmSDQl9CQ0JrQkNCXJ30gY29tcG9uZW50PXtQYXJ0bmVyc0xpbmt9IGltYWdlVXJsPXtwYXJ0bmVyVXJsfSBvbkNsaWNrPXt0aGlzLm9uTmV3UGFydG5lcnNDaGVja0NsaWNrfSAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lckhpc3RvcnknfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgINCY0YHRgtC+0YDQuNGPXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SGlzdG9yeUNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Tm90aWZpY2F0aW9uQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPEJ1c3kgbG9hZGluZz17aXNMb2FkaW5nfSAvPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoTWFpblBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb3RGb3VuZFBhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIE5vdEZvdW5kUGFnZSBleHRlbmRzIENvbXBvbmVudDxJTm90Rm91bmRQYWdlUHJvcHMsIGFueT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIE5vdCBGb3VuZFxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChOb3RGb3VuZFBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYXJ0bmVyc0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRuZXJzQ29tcG9uZW50JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnRuZXJzUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgUGFydG5lcnNQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElQYXJ0bmVyc1BhZ2VQcm9wcywgYW55PntcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+ICAgICAgICAgIFxyXG4gICAgICAgICAgPFBhcnRuZXJzQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoUGFydG5lcnNQYWdlKVxyXG4iLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIEFERF9EUklOSyxcclxuICAgIEFERF9ERVNTRVJULFxyXG4gICAgUFJPQ0VTU19DSEVDS09VVCxcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVELFxyXG4gICAgTE9HX0RBVEEsXHJcbiAgICBDTEVBUl9MT0csXHJcbiAgICBDQU5DRUwsXHJcbiAgICBDTEVBUl9FUlJPUixcclxuICAgIERFTEVURV9ERVNTRVJULFxyXG4gICAgREVMRVRFX0RSSU5LLFxyXG4gICAgU0VUX0xBU1RfSUQsXHJcbiAgICBTSE9XX05PVElGSUNBVElPTlxyXG59IGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7IENoZWNrLCBEZXNzZXJ0LCBEcmluaywgUGF5bWVudCwgT3JkZXJUeXBlIH0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcblxyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xyXG4gICAgW0NSRUFURV9DSEVDS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBsYXN0SWQgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrOiBDaGVjayA9IHtcclxuICAgICAgICAgICAgaWQ6IGxhc3RJZCArIDEsXHJcbiAgICAgICAgICAgIGRlc3NlcnRzOiBuZXcgQXJyYXk8RGVzc2VydD4oKSxcclxuICAgICAgICAgICAgZHJpbmtzOiBuZXcgQXJyYXk8RHJpbms+KCksXHJcbiAgICAgICAgICAgIGlzRmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXltZW50OiBQYXltZW50LkNhc2gsXHJcbiAgICAgICAgICAgIHR5cGU6IE9yZGVyVHlwZS5TaG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbQUREX0RSSU5LXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmluazogRHJpbmsgPSB7XHJcbiAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoZWNrLmRyaW5rcy5wdXNoKGRyaW5rKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbREVMRVRFX0RSSU5LXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXdDaGVjayA9IHsuLi5jaGVja307XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSAoeyBpZCwgc2l6ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gYWN0aW9uLnBheWxvYWRbMF0gJiYgc2l6ZSA9PT0gYWN0aW9uLnBheWxvYWRbMV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3Q2hlY2suZHJpbmtzID0gY2hlY2suZHJpbmtzLmZpbHRlcihkID0+IGNvbXBhcmF0b3IoZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG5ld0NoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FERF9ERVNTRVJUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdEZXNzZXJ0ID0gY2hlY2suZGVzc2VydHMuZmluZCgoZDogRGVzc2VydCkgPT5cclxuICAgICAgICAgICAgZC50eXBlID09PSBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgICAgICAmJiBkLnRhc3RlID09PSBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAmJiBkLnNpemUgPT09IGFjdGlvbi5wYXlsb2FkWzJdKTtcclxuXHJcbiAgICAgICAgaWYgKCEhZXhpc3RpbmdEZXNzZXJ0KSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRGVzc2VydC5xdWFudGl0eSArPSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEZXNzZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgICAgICB0YXN0ZTogYWN0aW9uLnBheWxvYWRbMV0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiBhY3Rpb24ucGF5bG9hZFsyXSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5wdXNoKGRlc3NlcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0RFTEVURV9ERVNTRVJUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXdDaGVjayA9IHsuLi5jaGVja307XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSAoeyB0eXBlLCB0YXN0ZSwgc2l6ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBhY3Rpb24ucGF5bG9hZFswXSAmJiB0YXN0ZSA9PT0gYWN0aW9uLnBheWxvYWRbMV0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFszXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaXplICE9PSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGVjay5kZXNzZXJ0cyA9IG5ld0NoZWNrLmRlc3NlcnRzLmZpbHRlcihkID0+IGNvbXBhcmF0b3IoZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG5ld0NoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1BST0NFU1NfQ0hFQ0tPVVRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2ssIGhpc3RvcnksIGxhc3RJZCB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2suaXNGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKGNoZWNrKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG51bGwsXHJcbiAgICAgICAgICAgIGhpc3Rvcnk6IFsuLi5oaXN0b3J5XSxcclxuICAgICAgICAgICAgbGFzdElkOiBsYXN0SWQgKyAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1NFVF9QQVlNRU5UX1RZUEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLnBheW1lbnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2s6IHsgLi4uY2hlY2sgfSB9O1xyXG4gICAgfSxcclxuICAgIFtTRVRfT1JERVJfVFlQRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2sudHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogeyAuLi5jaGVjayB9IH07XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfRlVMRklMTEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaXRlbXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfUkVKRUNURURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9GVUxGSUxMRURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6ICFhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9SRUpFQ1RFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbU0hPV19CVVNZXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzQnVzeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0J1c3kgfTtcclxuICAgIH0sXHJcbiAgICBbTE9HX0RBVEFdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGNvbnN0IHsgbG9nIH0gPSBzdGF0ZTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiBgJHtsb2d9OyR7dGV4dH1gIH07XHJcbiAgICB9LFxyXG4gICAgW0NMRUFSX0xPR106IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiAnJyB9O1xyXG4gICAgfSxcclxuICAgIFtDTEVBUl9FUlJPUl06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3JNZXNzYWdlOiAnJyB9O1xyXG4gICAgfSxcclxuICAgIFtDQU5DRUxdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiBudWxsIH07XHJcbiAgICB9LFxyXG4gICAgW1NFVF9MQVNUX0lEXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoaXN0b3J5OiBbYWN0aW9uLnBheWxvYWRbMV1dLFxyXG4gICAgICAgICAgICBsYXN0SWQ6IGFjdGlvbi5wYXlsb2FkWzBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1NIT1dfTk9USUZJQ0FUSU9OXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkWzFdLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UeXBlOiBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSwgaW5pdGlhbFN0YXRlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgQW55QWN0aW9uLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXInO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICBjaGVjazogbnVsbCxcclxuICAgIGhpc3Rvcnk6IG5ldyBBcnJheTxDaGVjaz4oKSxcclxuICAgIGxvZzogJycsXHJcbiAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgbGFzdElkOiAwLFxyXG4gICAgbm90aWZpY2F0aW9uVHlwZTogMFxyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgRHJpbmtzVHlwZSwgRGVzc2VydFR5cGUsIE1hY2Fyb25zRW51bSwgWmVwaHlyRW51bSwgUGFydG5lcnNFbnVtLCBDYWtlc0VudW0gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEcmlua3NEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PHN0cmluZz4gfSA9IHt9O1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQ2FwcHVjaW5vXSA9IFsnMTc1INC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkZsYXRXaGl0ZV0gPSBbJzE3NSDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5SYWZdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vXSA9IFsnMTIwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkFtZXJpY2Fub01pbGtdID0gWycxMjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTG9uZ0JsYWNrXSA9IFsnMjAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkVzcHJlc3NvXSA9IFsnMzAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRG9wcGlvXSA9IFsnNjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTWFjaGlhdG9dID0gWyc5MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZUxhdmVuZGVyXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlQ2FyYW1lbF0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZU9yYW5nZV0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5DYWNhb10gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFHcmVlbl0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFCbGFja10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFIZXJiYWxdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3BlYWNpYWxUZWFQZWFyTGltZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TcGVjaWFsVGVhT3JhbmdlXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFHaW5nZXJdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFsnMTc1INC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWycwINC80LsnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNzZXJ0c0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8YW55PiB9ID0ge307XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5NYWNhcm9uXSA9IFsxLCA2LCAxMiwgMjRdO1xyXG5EZXNzZXJ0c0RpY3RbRGVzc2VydFR5cGUuWmVwaHlyXSA9IFsxLCA4LCAxNl07XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5DYWtlXSA9IFsnMTgg0YHQvCcsICcyMiDRgdC8J107XHJcblxyXG5leHBvcnQgY29uc3QgRHJpbmtQcmljZXNEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PG51bWJlcj4gfSA9IHt9O1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5DYXBwdWNpbm9dID0gWzI1LCA0MF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlXSA9IFsyOCwgMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5GbGF0V2hpdGVdID0gWzM1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuUmFmXSA9IFszOCwgNDVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9dID0gWzIwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vTWlsa10gPSBbMjVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5Mb25nQmxhY2tdID0gWzMwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuRXNwcmVzc29dID0gWzIwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuRG9wcGlvXSA9IFszMF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLk1hY2hpYXRvXSA9IFsyMl07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlTGF2ZW5kZXJdID0gWzMyLCA0MF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlQ2FyYW1lbF0gPSBbMzIsIDQwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGF0dGVPcmFuZ2VdID0gWzMyLCA0MF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkNhY2FvXSA9IFsyOCwgMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFHcmVlbl0gPSBbMjVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFCbGFja10gPSBbMjVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFIZXJiYWxdID0gWzI1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3BlYWNpYWxUZWFQZWFyTGltZV0gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5TcGVjaWFsVGVhT3JhbmdlXSA9IFszNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFHaW5nZXJdID0gWzM1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFs1NV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWzM1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWzQwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWzVdO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhZmZlZVByaWNlczogeyBbaWQ6IHN0cmluZ10gOiBudW1iZXIgfSA9IHt9O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkNvZmZlZUlzXSA9IDE3O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkZpcnN0UG9pbnRdID0gMTk7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uQ3ViYUNvZmZlZV0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5Qcm9ncmVzc10gPSAyMDtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5LbGFzc25hS2F2YV0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5Db2ZmZWVBbmRUaGVDaXR5XSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLklsTWlvXSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLlN0dWRpb0NvZmZlZV0gPSAyMDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYWtlc1ByaWNlc0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8bnVtYmVyPiB9ID0ge307XHJcbkNha2VzUHJpY2VzRGljdFtDYWtlc0VudW0uQ2Fycm90Q2FrZV0gPSBbNjUwLCA5ODBdO1xyXG5DYWtlc1ByaWNlc0RpY3RbQ2FrZXNFbnVtLlBpbmtdID0gWzYzMCwgOTcwXTtcclxuQ2FrZXNQcmljZXNEaWN0W0Nha2VzRW51bS5JbmZpbml0eV0gPSBbNjQwLCA5NzBdO1xyXG5DYWtlc1ByaWNlc0RpY3RbQ2FrZXNFbnVtLlJpb10gPSBbNjMwLCA5NzBdO1xyXG5DYWtlc1ByaWNlc0RpY3RbQ2FrZXNFbnVtLlNvdWxdID0gWzYyMCwgOTYwXTtcclxuXHJcbmV4cG9ydCBjb25zdCBaRVBIWVJfUFJJQ0UgPSAxMTtcclxuXHJcbmV4cG9ydCBjb25zdCBNQUNBUk9OU19QUklDRSA9IDI4O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hY2Fyb25zQ29sb3JzOiB7IFtpZDogc3RyaW5nXSA6IHN0cmluZyB9ID0ge307XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5Eb3JCbHVlUGVhcl0gPSAnI2I3ZTRmNyc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5QYXJtZXNhbkZpZ3VlXSA9ICcjZmNmN2U4JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLlN0cmF3YmVycnlDaGVlc2VjYWtlXSA9ICcjZmZkZGRkJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLlJhc3BiZXJyeV0gPSAnI2ZmYTVjZic7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5DdXJyYW50XSA9ICcjYmM0NWM2JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkxhdmVuZGVyQmxhY2tiZXJyeV0gPSAnI2I1ODdmZic7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5NYW5nb1Bhc3Npb25dID0gJyNmZmRkODcnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uQ29mZmVlQ2FyYW1lbF0gPSAnI2E4NzMwMSc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5DaG9jb2xhdGVdID0gJyM0OTI5MDgnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uUGlzdGFjaGlvXSA9ICcjODVkZDkzJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkxpbWVCYXNpbF0gPSAnIzlmZjI1Yyc7XHJcblxyXG5leHBvcnQgY29uc3QgWmVwaHlyQ29sb3JzOiB7IFtpZDogc3RyaW5nXSA6IHN0cmluZyB9ID0ge307XHJcblplcGh5ckNvbG9yc1taZXBoeXJFbnVtLkFwcGxlXSA9ICcjZmZmYmYyJztcclxuWmVwaHlyQ29sb3JzW1plcGh5ckVudW0uQXByaWNvdFBhc3Npb25GcnVpdF0gPSAnI2ZmZTZiZic7XHJcblplcGh5ckNvbG9yc1taZXBoeXJFbnVtLkN1cnJhbnRdID0gJyNkOTc40LVkJztcclxuWmVwaHlyQ29sb3JzW1plcGh5ckVudW0uU3RyYXdiZXJyeUNyYW5iZXJyeV0gPSAnI2Y0OTdiOSc7IiwiZXhwb3J0IGludGVyZmFjZSBEZXNzZXJ0IHtcclxuICAgIHR5cGU6IERlc3NlcnRUeXBlLFxyXG4gICAgdGFzdGU6IHN0cmluZyxcclxuICAgIHNpemU6IHN0cmluZ1xyXG4gICAgcXVhbnRpdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmluayB7XHJcbiAgICBpZDogRHJpbmtzVHlwZSxcclxuICAgIHNpemU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBkZXNzZXJ0czogQXJyYXk8RGVzc2VydD4sXHJcbiAgICBkcmlua3M6IEFycmF5PERyaW5rPixcclxuICAgIGlzRmluaXNoZWQ6IGJvb2xlYW4sXHJcbiAgICBwYXltZW50OiBQYXltZW50LFxyXG4gICAgdHlwZTogT3JkZXJUeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBheW1lbnQge1xyXG4gICAgQ2FyZCA9ICfQmtCw0YDRgtCwJyxcclxuICAgIENhc2ggPSAn0J3QsNC70LjRh9C60LAnLFxyXG4gICAgT3RoZXIgPSAn0JTRgNGD0LPQvtC1J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlclR5cGUge1xyXG4gICAgUHJlT3JkZXIgPSAn0J/RgNC10LTQt9Cw0LrQsNC3JyxcclxuICAgIFNob3AgPSAn0JLQuNGC0YDQuNC90LAnLFxyXG4gICAgT3RoZXIgPSAn0JTRgNGD0LPQvtC1J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEZXNzZXJ0VHlwZSB7XHJcbiAgICBNYWNhcm9uID0gJ9Cc0LDQutCw0YDQvtC90YEnLFxyXG4gICAgWmVwaHlyID0gJ9CX0LXRhNC40YAnLFxyXG4gICAgQ2FrZSA9ICfQotC+0YDRgidcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFjYXJvbnNFbnVtIHtcclxuICAgIERvckJsdWVQZWFyID0gXCLQlNC+0LEt0JHQu9GOIC0g0JPRgNGD0YjQsFwiLFxyXG4gICAgUGFybWVzYW5GaWd1ZSA9IFwi0J/QsNGA0LzQtdC30LDQvSAtINCY0L3QttC40YBcIixcclxuICAgIFN0cmF3YmVycnlDaGVlc2VjYWtlID0gXCLQmtC70YPQsdC90LjRh9C90YvQuSDQp9C40LfQutC10LnQulwiLFxyXG4gICAgUmFzcGJlcnJ5ID0gXCLQnNCw0LvQuNC90LBcIixcclxuICAgIEN1cnJhbnQgPSBcItCh0LzQvtGA0L7QtNC40L3QsFwiLFxyXG4gICAgTGF2ZW5kZXJCbGFja2JlcnJ5ID0gXCLQm9Cw0LLQsNC90LTQsCAtINCn0LXRgNC90LjQutCwXCIsXHJcbiAgICBNYW5nb1Bhc3Npb24gPSBcItCc0LDQvdCz0L4gLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBDb2ZmZWVDYXJhbWVsID0gXCLQmtC+0YTQtSAtINCh0L7Qu9GR0L3QsNGPINCa0LDRgNCw0LzQtdC70YxcIixcclxuICAgIENob2NvbGF0ZSA9IFwi0KjQvtC60L7Qu9Cw0LRcIixcclxuICAgIFBpc3RhY2hpbyA9IFwi0KTQuNGB0YLQsNGI0LrQsFwiLFxyXG4gICAgTGltZUJhc2lsID0gXCLQm9Cw0LnQvCAtINCR0LDQt9C40LvQuNC6XCIgXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFplcGh5ckVudW0ge1xyXG4gICAgQXBwbGUgPSBcItCv0LHQu9C+0LrQvlwiLFxyXG4gICAgQXByaWNvdFBhc3Npb25GcnVpdCA9IFwi0JDQsdGA0LjQutC+0YEgLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBDdXJyYW50ID0gXCLQodC80L7RgNC+0LTQuNC90LBcIiwgICAgXHJcbiAgICBTdHJhd2JlcnJ5Q3JhbmJlcnJ5ID0gXCLQmtC70YPQsdC90LjQutCwIC0g0JrQu9GO0LrQstCwXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2FrZXNFbnVtIHtcclxuICAgIFJpbyA9IFwiUmlvXCIsXHJcbiAgICBDYXJyb3RDYWtlID0gXCJDYXJyb3QgQ2FrZVwiLFxyXG4gICAgU291bCA9IFwiU291bFwiLFxyXG4gICAgUGluayA9IFwiUGlua1wiLFxyXG4gICAgSW5maW5pdHkgPSBcIkluZmluaXR5XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRHJpbmtzVHlwZSB7XHJcbiAgICBDYXBwdWNpbm8gPSBcItCa0LDQv9GD0YfQuNC90L5cIixcclxuICAgIExhdHRlID0gXCLQm9Cw0YLRgtC1XCIsXHJcbiAgICBGbGF0V2hpdGUgPSBcItCk0LvQtdGCINCS0LDQudGCXCIsXHJcbiAgICBSYWYgPSBcItCg0LDRhFwiLFxyXG4gICAgQW1lcmljYW5vID0gXCLQkNC80LXRgNC40LrQsNC90L5cIixcclxuICAgIEFtZXJpY2Fub01pbGsgPSBcItCQ0LzQtdGA0LjQutCw0L3QviDRgSDQvNC+0LvQvtC60L7QvFwiLFxyXG4gICAgTG9uZ0JsYWNrID0gXCLQm9C+0L3QsyDQsdC70Y3QulwiLFxyXG4gICAgRXNwcmVzc28gPSBcItCt0YHQv9GA0LXRgdGB0L5cIixcclxuICAgIERvcHBpbyA9IFwi0JTQvtC/0L/QuNC+XCIsICAgIFxyXG4gICAgTWFjaGlhdG8gPSBcItCc0LDQutC40LDRgtC+XCIsXHJcbiAgICBMYXR0ZUxhdmVuZGVyID0gXCLQm9Cw0YLRgtC1INCb0LDQstCw0L3QtNCwXCIsXHJcbiAgICBMYXR0ZUNhcmFtZWwgPSBcItCb0LDRgtGC0LUg0JrQsNGA0LDQvNC10LvRjFwiLFxyXG4gICAgTGF0dGVPcmFuZ2UgPSBcItCb0LDRgtGC0LUg0JDQv9C10LvRjNGB0LjQvVwiLFxyXG4gICAgQ2FjYW8gPSBcItCa0LDQutCw0L5cIixcclxuICAgIFRlYUdyZWVuID0gXCLQp9Cw0Lkg0JfQtdC70ZHQvdGL0LlcIixcclxuICAgIFRlYUJsYWNrID0gXCLQp9Cw0Lkg0KfRkdGA0L3Ri9C5XCIsXHJcbiAgICBUZWFIZXJiYWwgPSBcItCn0LDQuSDQotGA0LDQstGP0L3QvtC5XCIsXHJcbiAgICBTcGVhY2lhbFRlYVBlYXJMaW1lID0gXCLQp9Cw0Lkg0JPRgNGD0YjQsC3Qm9Cw0LnQvFwiLFxyXG4gICAgU3BlY2lhbFRlYU9yYW5nZSA9IFwi0KfQsNC5INCQ0L/QtdC70YzRgdC40L0t0J7QsdC70LXQv9C40YXQsFwiLFxyXG4gICAgU3BlY2lhbFRlYUdpbmdlciA9IFwi0KfQsNC5INCc0LDQu9C40L3QsC3QmNC80LHQuNGA0YxcIixcclxuICAgIEhvdENob2NvbGF0ZSA9IFwi0JPQsNGA0Y/Rh9C40Lkg0YjQvtC60L7Qu9Cw0LRcIixcclxuICAgIExlbW9uYWRlU3RyYXdiZXJyeSA9IFwi0JvQuNC80L7QvdCw0LQg0JrQu9GD0LHQvdC40LrQsFwiLFxyXG4gICAgTGVtb25hZGVDaXRydXMgPSBcItCb0LjQvNC+0L3QsNC0INCm0LjRgtGA0YPRgVwiLFxyXG4gICAgTGVtb25hZGVQYXNzaW9uID0gXCLQm9C40LzQvtC90LDQtCDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBJY2VMYXR0ZSA9IFwi0JDQudGBINCb0LDRgtGC0LVcIixcclxuICAgIFN5cm9wID0gXCLQodC40YDQvtC/XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGFydG5lcnNFbnVtIHtcclxuICAgIENvZmZlZUlzID0gXCJDb2ZmZWUgaXNcIixcclxuICAgIEZpcnN0UG9pbnQgPSBcIkZpcnN0IFBvaW50XCIsXHJcbiAgICBDdWJhQ29mZmVlID0gXCJDdWJhIENvZmZlZVwiLFxyXG4gICAgUHJvZ3Jlc3MgPSBcIlByb2dyZXNzXCIsXHJcbiAgICBLbGFzc25hS2F2YSA9IFwi0JrQu9Cw0YHQvdCwINC60LDQstCwXCIsXHJcbiAgICBDb2ZmZWVBbmRUaGVDaXR5ID0gXCJDb2ZmZWUgYW5kIHRoZSBjaXR5XCIsXHJcbiAgICBJbE1pbyA9IFwiSWwgTWlvXCIsXHJcbiAgICBTdHVkaW9Db2ZmZWUgPSBcItCh0YLRg9C00LjRjyDQutC+0YTQtVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZhbHVlSW5wdXRPcHRpb24ge1xyXG4gICAgSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEID0gJ0lOUFVUX1ZBTFVFX09QVElPTl9VTlNQRUNJRklFRCcsXHJcbiAgICBSQVcgPSAnUkFXJyxcclxuICAgIFVTRVJfRU5URVJFRCA9ICdVU0VSX0VOVEVSRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEluc2VydERhdGFPcHRpb24ge1xyXG4gICAgT1ZFUldSSVRFID0gJ09WRVJXUklURScsXHJcbiAgICBJTlNFUlRfUk9XUyA9ICdJTlNFUlRfUk9XUydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVSZW5kZXJPcHRpb24ge1xyXG4gICAgRk9STUFUVEVEX1ZBTFVFID0gJ0ZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBVTkZPUk1BVFRFRF9WQUxVRSA9ICdVTkZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBGT1JNVUxBID0gJ0ZPUk1VTEEnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERhdGVUaW1lUmVuZGVyT3B0aW9uIHtcclxuICAgIFNFUklBTF9OVU1CRVIgPSAnU0VSSUFMX05VTUJFUicsXHJcbiAgICBGT1JNQVRURURfU1RSSU5HID0gJ0ZPUk1BVFRFRF9TVFJJTkcnXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==