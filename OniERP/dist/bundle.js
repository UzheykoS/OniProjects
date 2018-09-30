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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvZGVzc2VydHNfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9kcmlua3NfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL21haW5faWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9wYXJ0bmVyc19pY29uLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHBCYXIvc3R5bGVzLnNjc3M/OGFhMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXN5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EZXNzZXJ0c0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpbmtzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaXN0b3J5Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXJnZUJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24vc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2Nzcz9hNzc0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhcnRuZXJzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZXN0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrb3V0UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTm90Rm91bmRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGFydG5lcnNQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzP2RjYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RpY3Rpb25hcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QkFBc0I7QUFDdEIsMEJBQ0o7QUFBQyxHQTNCcUIsYUFBVixRQUFVLGVBQVYsUUFBVSxhQTJCckI7QUFFRCxJQVNDO0FBVEQsV0FBd0I7QUFDcEIsK0JBQXNCO0FBQ3RCLGlDQUEwQjtBQUMxQixpQ0FBMEI7QUFDMUIsK0JBQXFCO0FBQ3JCLGtDQUEyQjtBQUMzQix1Q0FBd0M7QUFDeEMsNEJBQWdCO0FBQ2hCLG1DQUNKO0FBQUMsR0FUdUIsZUFBWixRQUFZLGlCQUFaLFFBQVksZUFTdkI7QUFFRCxJQUlDO0FBSkQsV0FBNEI7QUFDeEIseURBQWlFO0FBQ2pFLDhCQUFXO0FBQ1gsdUNBQ0o7QUFBQyxHQUoyQixtQkFBaEIsUUFBZ0IscUJBQWhCLFFBQWdCLG1CQUkzQjtBQUVELElBR0M7QUFIRCxXQUE0QjtBQUN4QixvQ0FBdUI7QUFDdkIsc0NBQ0o7QUFBQyxHQUgyQixtQkFBaEIsUUFBZ0IscUJBQWhCLFFBQWdCLG1CQUczQjtBQUVELElBSUM7QUFKRCxXQUE2QjtBQUN6QiwyQ0FBbUM7QUFDbkMsNkNBQXVDO0FBQ3ZDLG1DQUNKO0FBQUMsR0FKNEIsb0JBQWpCLFFBQWlCLHNCQUFqQixRQUFpQixvQkFJNUI7QUFFRCxJQUdDO0FBSEQsV0FBZ0M7QUFDNUIsNENBQStCO0FBQy9CLCtDQUNKO0FBQUMsR0FIK0IsdUJBQXBCLFFBQW9CLHlCQUFwQixRQUFvQix1QkFHL0IsSyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c3hcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwYmFyX3Jvb3Qge1xcbiAgZmxleC1ncm93OiAxOyB9XFxuICAuYXBwYmFyX3Jvb3QgLmFwcGJhcl9ncm93IHtcXG4gICAgZmxleC1ncm93OiAxOyB9XFxuICAuYXBwYmFyX3Jvb3QgLmFwcGJhcl9tZW51QnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7IH1cXG5cXG4uZXJyb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheSAhaW1wb3J0YW50OyB9XFxuXFxuLmluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheSAhaW1wb3J0YW50OyB9XFxuXFxuLndhcm5pbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7IH1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLmljb24tdmFyaWFudCB7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcblxcbi5tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJztcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuXFxuLmF2YXRhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJjM2U5O1xcbiAgY29sb3I6ICMxZDUzYTM7IH1cXG5cXG4uY2FyZENvbnRhaW5lciB7XFxuICBtYXJnaW46IDE2cHg7IH1cXG5cXG4uY2FyZENvbnRhaW5lckhpc3Rvcnkge1xcbiAgbWFyZ2luOiAxNnB4OyB9XFxuXFxuLmNhcmRSb290IHtcXG4gIHBhZGRpbmc6IDE2cHggMCAxNnB4IDAgIWltcG9ydGFudDsgfVxcblxcbi5uZXdPcmRlckJ1dHRvbnNXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLm5ld09yZGVyQnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmJ1dHRvbnNXcmFwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmJ1dHRvbnNXcmFwZXIgLmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMXJlbSAwcmVtOyB9XFxuXFxuLmNoZWNrb3V0VGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQ1MDsgfVxcblxcbi5jaGVja291dENvbnRyb2xHcm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAxcmVtIDJyZW0gMXJlbSAycmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5ub3RpZmljYXRpb25DbG9zZSB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTsgfVxcblxcbi5tYWNhcm9uQXZhdGFyIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyB9XFxuXFxuLmRyaW5rQXZhdGFyIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ0ODJmICFpbXBvcnRhbnQ7IH1cXG5cXG4uYnV0dG9uQXBwbHlXcmFwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuXFxuLnBhcnRuZXJTZWxlY3RXcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTsgfVxcblxcbi5idXN5LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxuICBvcGFjaXR5OiAwLjg7IH1cXG4gIC5idXN5LWNvbnRhaW5lciAuYnVzeSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDQ0JTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4OyB9XFxuXFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmhpc3RvcnlDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1hZ2VzL2Rlc3NlcnRzX2ljb24uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltYWdlcy9kcmlua3NfaWNvbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1hZ2VzL2Zhdmljb24ucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltYWdlcy9tYWluX2ljb24uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltYWdlcy9wYXJ0bmVyc19pY29uLmpwZ1wiOyIsImV4cG9ydCBjb25zdCBDUkVBVEVfQ0hFQ0sgPSAnQ1JFQVRFX0NIRUNLJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfRFJJTksgPSAnQUREX0RSSU5LJztcclxuZXhwb3J0IGNvbnN0IEFERF9ERVNTRVJUID0gJ0FERF9ERVNTRVJUJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfRFJJTksgPSAnREVMRVRFX0RSSU5LJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9ERVNTRVJUID0gJ0RFTEVURV9ERVNTRVJUJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9UWVBFID0gJ1NFVF9QQVlNRU5UX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgU0VUX09SREVSX1RZUEUgPSAnU0VUX09SREVSX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgUFJPQ0VTU19DSEVDS09VVCA9ICdQUk9DRVNTX0NIRUNLT1VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0lURU1TID0gJ0xPQURfSVRFTVMnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNU19GVUxGSUxMRUQgPSAnTE9BRF9JVEVNU19GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNU19SRUpFQ1RFRCA9ICdMT0FEX0lURU1TX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9XX0JVU1kgPSBcIlNIT1dfQlVTWVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBID0gJ0FQUEVORF9EQVRBJztcclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBX0ZVTEZJTExFRCA9ICdBUFBFTkRfREFUQV9GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgQVBQRU5EX0RBVEFfUkVKRUNURUQgPSAnQVBQRU5EX0RBVEFfUkVKRUNURUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBID0gJ1VQREFURV9EQVRBJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBX0ZVTEZJTExFRCA9ICdVUERBVEVfREFUQV9GVUxGSUxMRUQnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEFfUkVKRUNURUQgPSAnVVBEQVRFX0RBVEFfUkVKRUNURUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19EQVRBID0gJ0xPR19EQVRBJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0xPRyA9ICdDTEVBUl9MT0cnO1xyXG5leHBvcnQgY29uc3QgQ0FOQ0VMID0gJ0NBTkNFTCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0xFQVJfRVJST1IgPSAnQ0xFQVJfRVJST1InO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9MQVNUX0lEID0gJ1NFVF9MQVNUX0lEJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9XX05PVElGSUNBVElPTiA9ICdTSE9XX05PVElGSUNBVElPTic7IiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIFBST0NFU1NfQ0hFQ0tPVVQsXHJcbiAgICBBRERfRFJJTkssXHJcbiAgICBBRERfREVTU0VSVCxcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVELFxyXG4gICAgTE9HX0RBVEEsXHJcbiAgICBDTEVBUl9MT0csXHJcbiAgICBDQU5DRUwsXHJcbiAgICBDTEVBUl9FUlJPUixcclxuICAgIERFTEVURV9EUklOSyxcclxuICAgIERFTEVURV9ERVNTRVJULFxyXG4gICAgU0VUX0xBU1RfSUQsXHJcbiAgICBTSE9XX05PVElGSUNBVElPTlxyXG59IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgRHJpbmtzVHlwZSwgRGVzc2VydFR5cGUsIFBheW1lbnQsIE9yZGVyVHlwZSwgQ2hlY2ssXHJcbiAgICBWYWx1ZUlucHV0T3B0aW9uLCBJbnNlcnREYXRhT3B0aW9uLCBWYWx1ZVJlbmRlck9wdGlvbiwgRGF0ZVRpbWVSZW5kZXJPcHRpb24sIERlc3NlcnQsIERyaW5rXHJcbn0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IExPR1NfU1BSRUFEU0hFRVRfSUQsIFNQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzRmV0Y2hEYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0c1Jlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmdldCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IFwiUmF3RGVzc2VydHNEYXRhIUE6SFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NSZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiBcIlJhd0RyaW5rc0RhdGEhQTpGXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGFzdERlc3NlcnRPcmRlcklkID0gTWF0aC5tYXgoLi4uZGVzc2VydHNSZXNwb25zZS5yZXN1bHQudmFsdWVzLnNsaWNlKDEpLm1hcChkID0+IGRbN10gPyBOdW1iZXIoZFs3XSkgOiAwKSk7XHJcbiAgICAgICAgICAgIGxldCBsYXN0RHJpbmtPcmRlcklkID0gTWF0aC5tYXgoLi4uZHJpbmtzUmVzcG9uc2UucmVzdWx0LnZhbHVlcy5zbGljZSgxKS5tYXAoZCA9PiBkWzVdID8gTnVtYmVyKGRbNV0pIDogMCkpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0SWQgPSBNYXRoLm1heChsYXN0RGVzc2VydE9yZGVySWQsIGxhc3REcmlua09yZGVySWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVyOiBDaGVjayA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBsYXN0SWQsXHJcbiAgICAgICAgICAgICAgICBkZXNzZXJ0czogW10sXHJcbiAgICAgICAgICAgICAgICBkcmlua3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgaXNGaW5pc2hlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnQ6IFBheW1lbnQuT3RoZXIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPcmRlclR5cGUuT3RoZXJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IGxhc3RPcmRlclBheW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgbGFzdE9yZGVyVHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBsYXN0T3JkZXIuZGVzc2VydHMgPSBkZXNzZXJ0c1Jlc3BvbnNlLnJlc3VsdC52YWx1ZXMuc2xpY2UoMSkuZmlsdGVyKHYgPT4gdls3XSA9PT0gbGFzdElkLnRvU3RyaW5nKCkpLm1hcChkID0+IHtcclxuICAgICAgICAgICAgICAgIGxhc3RPcmRlclBheW1lbnQgPSBkWzRdID09PSAn0J3QsNC70LjRh9C60LAnID8gUGF5bWVudC5DYXNoIDogUGF5bWVudC5DYXJkO1xyXG4gICAgICAgICAgICAgICAgbGFzdE9yZGVyVHlwZSA9IGRbNV0gPT09ICfQktC40YLRgNC40L3QsCcgPyBPcmRlclR5cGUuU2hvcCA6IE9yZGVyVHlwZS5QcmVPcmRlcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3NlcnQ6IERlc3NlcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZFswXSxcclxuICAgICAgICAgICAgICAgICAgICB0YXN0ZTogZFsxXSxcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogZFsyXSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBkWzNdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc3NlcnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGFzdE9yZGVyLmRyaW5rcyA9IGRyaW5rc1Jlc3BvbnNlLnJlc3VsdC52YWx1ZXMuc2xpY2UoMSkuZmlsdGVyKHYgPT4gdls1XSA9PT0gbGFzdElkLnRvU3RyaW5nKCkpLm1hcChkID0+IHtcclxuICAgICAgICAgICAgICAgIGxhc3RPcmRlclBheW1lbnQgPSBkWzJdID09PSAn0J3QsNC70LjRh9C60LAnID8gUGF5bWVudC5DYXNoIDogUGF5bWVudC5DYXJkO1xyXG4gICAgICAgICAgICAgICAgbGFzdE9yZGVyVHlwZSA9IGRbM10gPT09ICfQktC40YLRgNC40L3QsCcgPyBPcmRlclR5cGUuU2hvcCA6IE9yZGVyVHlwZS5QcmVPcmRlcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3NlcnQ6IERyaW5rID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGRbMV1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVzc2VydDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxhc3RPcmRlci5wYXltZW50ID0gbGFzdE9yZGVyUGF5bWVudDtcclxuICAgICAgICAgICAgbGFzdE9yZGVyLnR5cGUgPSBsYXN0T3JkZXJUeXBlO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChTZXRMYXN0SWQobGFzdElkLCBsYXN0T3JkZXIpKTtcclxuICAgICAgICAgICAgLy8gZGlzcGF0Y2goaXRlbXNGZXRjaERhdGFTdWNjZXNzKFsuLi5kZXNzZXJ0cywgLi4uZHJpbmtzXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNIYXNFcnJvcmVkKHRydWUpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0FwcGVuZERhdGEgPSAoc3ByZWFkc2hlZXRJZDogc3RyaW5nLCByYW5nZTogc3RyaW5nLCB2YWx1ZVJhbmdlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuYXBwZW5kKHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBWYWx1ZUlucHV0T3B0aW9uLlVTRVJfRU5URVJFRCxcclxuICAgICAgICAgICAgICAgIGluc2VydERhdGFPcHRpb246IEluc2VydERhdGFPcHRpb24uT1ZFUldSSVRFLFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUVcclxuICAgICAgICAgICAgfSwgeyB2YWx1ZXM6IHZhbHVlUmFuZ2UgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zdCB1cGRhdGVkQ2VsbHNDb3VudCA9IGF3YWl0IHJlc3BvbnNlLnJlc3VsdC51cGRhdGVzLnVwZGF0ZWRDZWxsczsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNBcHBlbmRTdWNjZXNzKHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kRXJyb3JlZCgn0J7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUsINGH0YLQviDQstGLINCy0L7RiNC70Lgg0LIg0YHQuNGB0YLQtdC80YMuJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzTG9nID0gYXN5bmMgKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW21lc3NhZ2UsIGRhdGVUaW1lLnRvVVRDU3RyaW5nKCldXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZCh7XHJcbiAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IExPR1NfU1BSRUFEU0hFRVRfSUQsXHJcbiAgICAgICAgICAgIHJhbmdlOiAnQTpCJyxcclxuICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgIGluc2VydERhdGFPcHRpb246IEluc2VydERhdGFPcHRpb24uT1ZFUldSSVRFLFxyXG4gICAgICAgICAgICBpbmNsdWRlVmFsdWVzSW5SZXNwb25zZTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFXHJcbiAgICAgICAgfSwgeyB2YWx1ZXM6IGRhdGEgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NVcGRhdGVEYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZywgdmFsdWVSYW5nZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6ICdBNjpEMTAnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlVmFsdWVzSW5SZXNwb25zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVmFsdWVSZW5kZXJPcHRpb246IFZhbHVlUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9WQUxVRSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0ZVRpbWVSZW5kZXJPcHRpb246IERhdGVUaW1lUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9TVFJJTkdcclxuICAgICAgICAgICAgfSwgeyB2YWx1ZXM6IHZhbHVlUmFuZ2UgfSk7XHJcbiAgICAgICAgICAgIC8vVE9ETzogUHJvY2VzcyByZXNwb25zZSByZXN1bHRcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudmFsdWVzO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0ZldGNoRGF0YVN1Y2Nlc3MoaXRlbXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZUNoZWNrID0gY3JlYXRlQWN0aW9uKENSRUFURV9DSEVDSyk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0NoZWNrb3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2s6IENoZWNrID0gc3RhdGUuY2hlY2s7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbG9nIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc1JhbmdlID0gXCJSYXdEcmlua3NEYXRhIUE6RlwiO1xyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NEYXRhID0gW107XHJcbiAgICAgICAgICAgIGNoZWNrLmRyaW5rcy5mb3JFYWNoKGFzeW5jIGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gW2QuaWQsIGQuc2l6ZSwgY2hlY2sucGF5bWVudCwgY2hlY2sudHlwZSwgZGF0ZVRpbWUsIGNoZWNrLmlkXTtcclxuICAgICAgICAgICAgICAgIGRyaW5rc0RhdGEucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChkcmlua3NEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEoU1BSRUFEU0hFRVRfSUQsIGRyaW5rc1JhbmdlLCBkcmlua3NEYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRzUmFuZ2UgPSBcIlJhd0Rlc3NlcnRzRGF0YSFBOkhcIjtcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydHNEYXRhID0gW107XHJcbiAgICAgICAgICAgIGNoZWNrLmRlc3NlcnRzLmZvckVhY2goYXN5bmMgZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbZC50eXBlLCBkLnRhc3RlLCBkLnF1YW50aXR5LCBkLnNpemUsIGNoZWNrLnBheW1lbnQsIGNoZWNrLnR5cGUsIGRhdGVUaW1lLCBjaGVjay5pZF07XHJcbiAgICAgICAgICAgICAgICBkZXNzZXJ0c0RhdGEucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChkZXNzZXJ0c0RhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YShTUFJFQURTSEVFVF9JRCwgZGVzc2VydHNSYW5nZSwgZGVzc2VydHNEYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKENoZWNrb3V0KCkpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgUHJvY2Vzc0xvZyhsb2cpO1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9jZXNzTG9nKEpTT04uc3RyaW5naWZ5KGNoZWNrKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKENsZWFyTG9nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNBcHBlbmRFcnJvcmVkKCfQntGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSwg0YfRgtC+INCy0Ysg0LLQvtGI0LvQuCDQsiDRgdC40YHRgtC10LzRgy4nKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0ID0gKHBhcnRuZXI6IHN0cmluZywgbWFjUXR5OiBudW1iZXIsIHplcFF0eTogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRuZXJzUmFuZ2UgPSBcIlJhd1BhcnRuZXJzRGF0YSFBOkRcIjtcclxuICAgICAgICAgICAgY29uc3QgcGFydG5lcnNEYXRhID0gW1twYXJ0bmVyLCBtYWNRdHksIHplcFF0eSwgbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpXV07XHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKFNQUkVBRFNIRUVUX0lELCBwYXJ0bmVyc1JhbmdlLCBwYXJ0bmVyc0RhdGEpKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvY2Vzc0xvZyhKU09OLnN0cmluZ2lmeShwYXJ0bmVyc0RhdGEpKTtcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goU2hvd05vdGlmaWNhdGlvbigwLCAn0JfQsNC60LDQtyDRgdC+0YXRgNCw0L3RkdC9IScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kRXJyb3JlZCgn0J7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUsINGH0YLQviDQstGLINCy0L7RiNC70Lgg0LIg0YHQuNGB0YLQtdC80YMuJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja291dCA9IGNyZWF0ZUFjdGlvbihQUk9DRVNTX0NIRUNLT1VUKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGREcmluayA9IGNyZWF0ZUFjdGlvbihBRERfRFJJTkssICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IFt0eXBlLCBzaXplXSk7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRGVzc2VydCA9IGNyZWF0ZUFjdGlvbihBRERfREVTU0VSVCwgKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpID0+IFt0eXBlLCB0YXN0ZSwgc2l6ZSwgcXVhbnRpdHldKTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVEcmluayA9IGNyZWF0ZUFjdGlvbihERUxFVEVfRFJJTkssICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IFt0eXBlLCBzaXplXSk7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlRGVzc2VydCA9IGNyZWF0ZUFjdGlvbihERUxFVEVfREVTU0VSVCwgKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcpID0+IFt0eXBlLCB0YXN0ZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldFBheW1lbnRUeXBlID0gY3JlYXRlQWN0aW9uKFNFVF9QQVlNRU5UX1RZUEUsICh0eXBlOiBQYXltZW50KSA9PiB0eXBlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRPcmRlclR5cGUgPSBjcmVhdGVBY3Rpb24oU0VUX09SREVSX1RZUEUsICh0eXBlOiBPcmRlclR5cGUpID0+IHR5cGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zSGFzRXJyb3JlZCA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TX1JFSkVDVEVELCAoaGFzRXJyb3JlZDogYm9vbGVhbikgPT4gaGFzRXJyb3JlZCk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNJc0xvYWRpbmcgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNUywgKGlzTG9hZGluZzogYm9vbGVhbikgPT4gaXNMb2FkaW5nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0ZldGNoRGF0YVN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNU19GVUxGSUxMRUQsIChpdGVtczogYW55W10pID0+IGl0ZW1zKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0FwcGVuZFN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oQVBQRU5EX0RBVEFfRlVMRklMTEVELCAoc3VjY2VzczogYm9vbGVhbikgPT4gc3VjY2Vzcyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNBcHBlbmRFcnJvcmVkID0gY3JlYXRlQWN0aW9uKEFQUEVORF9EQVRBX1JFSkVDVEVELCAodGV4dDogc3RyaW5nKSA9PiB0ZXh0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QnVzeSA9IGNyZWF0ZUFjdGlvbihTSE9XX0JVU1ksIChpc0J1c3k6IGJvb2xlYW4pID0+IGlzQnVzeSk7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nRGF0YSA9IGNyZWF0ZUFjdGlvbihMT0dfREFUQSwgKHRleHQ6IHN0cmluZykgPT4gdGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJMb2cgPSBjcmVhdGVBY3Rpb24oQ0xFQVJfTE9HKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYW5jZWwgPSBjcmVhdGVBY3Rpb24oQ0FOQ0VMKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGVhckVycm9yID0gY3JlYXRlQWN0aW9uKENMRUFSX0VSUk9SKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRMYXN0SWQgPSBjcmVhdGVBY3Rpb24oU0VUX0xBU1RfSUQsIChsYXN0SWQ6IG51bWJlciwgbGFzdENoZWNrOiBDaGVjaykgPT4gW2xhc3RJZCwgbGFzdENoZWNrXSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd05vdGlmaWNhdGlvbiA9IGNyZWF0ZUFjdGlvbihTSE9XX05PVElGSUNBVElPTiwgKHR5cGU6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKSA9PiBbdHlwZSwgbWVzc2FnZV0pO1xyXG4iLCJpbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvTWFpblBhZ2UnO1xyXG5pbXBvcnQgQ2hlY2tQYWdlIGZyb20gJy4vcGFnZXMvQ2hlY2tQYWdlJztcclxuaW1wb3J0IENoZWNrb3V0UGFnZSBmcm9tICcuL3BhZ2VzL0NoZWNrb3V0UGFnZSc7XHJcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSAnLi9wYWdlcy9Ob3RGb3VuZFBhZ2UnO1xyXG5pbXBvcnQgUGFydG5lcnNQYWdlIGZyb20gJy4vcGFnZXMvUGFydG5lcnNQYWdlJztcclxuaW1wb3J0IFRlc3RDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQnO1xyXG5pbXBvcnQgc2NyaXB0TG9hZGVyIGZyb20gJ3JlYWN0LWFzeW5jLXNjcmlwdC1sb2FkZXInO1xyXG5pbXBvcnQgeyBESVNDT1ZFUllfRE9DUywgU0NPUEVTLCBDTElFTlRfSUQsIEFQSV9LRVksIFNQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJy4vY29tcG9uZW50cy9BcHBCYXInO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IChcclxuICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17TWFpblBhZ2V9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9jaGVjaycgY29tcG9uZW50PXtDaGVja1BhZ2V9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9jaGVja091dCcgY29tcG9uZW50PXtDaGVja291dFBhZ2V9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9wYXJ0bmVycycgY29tcG9uZW50PXtQYXJ0bmVyc1BhZ2V9IC8+XHJcblxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvdGVzdCcgY29tcG9uZW50PXtUZXN0Q29tcG9uZW50fSAvPlxyXG4gICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kUGFnZX0gLz5cclxuICAgIDwvU3dpdGNoPlxyXG4pXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBQcm9wcyB7XHJcbiAgICBpc1NjcmlwdExvYWRlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFN0YXRlIHtcclxuICAgIGlzU2lnbmVkSW4/OiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQ8SUFwcFByb3BzLCBJQXBwU3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IGlzU2NyaXB0TG9hZGVkIH0gPSBuZXh0UHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChpc1NjcmlwdExvYWRlZCAmJiAhdGhpcy5wcm9wcy5pc1NjcmlwdExvYWRlZCkge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ2dhcGknXS5sb2FkKCdjbGllbnQ6YXV0aDInLCB0aGlzLmluaXRDbGllbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0Q2xpZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IGF1dGgyID0gd2luZG93WydnYXBpJ10uYXV0aDIuaW5pdCh7XHJcbiAgICAgICAgLy8gICAgIGNsaWVudF9pZDogQ0xJRU5UX0lELFxyXG4gICAgICAgIC8vICAgICBzY29wZTogU0NPUEVTLFxyXG4gICAgICAgIC8vICAgICBkaXNjb3ZlcnlEb2NzOiBESVNDT1ZFUllfRE9DUyxcclxuICAgICAgICAvLyAgICAgYXBpS2V5OiBBUElfS0VZLFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIGF1dGgyLmlzU2lnbmVkSW4ubGlzdGVuKHRoaXMuc2lnbmluQ2hhbmdlZCk7XHJcblxyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmNsaWVudC5pbml0KHtcclxuICAgICAgICAgICAgYXBpS2V5OiBBUElfS0VZLFxyXG4gICAgICAgICAgICBjbGllbnRJZDogQ0xJRU5UX0lELFxyXG4gICAgICAgICAgICBkaXNjb3ZlcnlEb2NzOiBESVNDT1ZFUllfRE9DUyxcclxuICAgICAgICAgICAgc2NvcGU6IFNDT1BFU1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5pc1NpZ25lZEluLmxpc3Rlbih0aGlzLnNpZ25pbkNoYW5nZWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzU2lnbmVkSW46IHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmlzU2lnbmVkSW4uZ2V0KClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbmluQ2hhbmdlZCA9IChpc1NpZ25lZEluKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IGlzU2lnbmVkSW5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBdXRoQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbkluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2lnbm91dENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25PdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1NpZ25lZEluID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93WydnYXBpJ10gfHwgIXdpbmRvd1snZ2FwaSddLmF1dGgyIHx8ICF3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5pc1NpZ25lZEluLmdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlzU2lnbmVkSW4gfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICA8QXBwQmFyIHRpdGxlPXsn0JPQu9Cw0LLQvdCw0Y8nfSBpc1NpZ25lZEluPXtpc1NpZ25lZElufSBvbkxvZ2luQ2xpY2s9e3RoaXMuaGFuZGxlQXV0aENsaWNrfSBvbkxvZ291dENsaWNrPXt0aGlzLmhhbmRsZVNpZ25vdXRDbGlja30gLz5cclxuICAgICAgICAgICAge2lzU2lnbmVkSW4gJiYgPE1haW4gLz59XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIGlkPVwiYXV0aG9yaXplX2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXV0aENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ25vbmUnIDogJ2Jsb2NrJyB9fT5BdXRob3JpemU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNpZ25vdXRfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlNpZ24gT3V0PC9idXR0b24+ICovfVxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0TG9hZGVyKFxyXG4gICAgJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcydcclxuKShBcHApO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhckNvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBvcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAn0JTQvtC80L7QuScsXHJcbiAgICAgICAgcm91dGU6ICcvJ1xyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICB0aXRsZTogJ1Rlc3QnLFxyXG4gICAgLy8gICAgIHJvdXRlOiAnL3Rlc3QnXHJcbiAgICAvLyB9XHJcbl07XHJcblxyXG5jb25zdCBJVEVNX0hFSUdIVCA9IDQ4O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwQmFyQ29tcG9uZW50UHJvcHMge1xyXG4gICAgY2xhc3Nlcz86IGFueTtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbiAgICBoaXN0b3J5PzogYW55O1xyXG5cclxuICAgIG9uTG9naW5DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgICBvbkxvZ291dENsaWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwQmFyQ29tcG9uZW50U3RhdGUge1xyXG4gICAgYW5jaG9yRWw/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBCYXIgZXh0ZW5kcyBDb21wb25lbnQ8SUFwcEJhckNvbXBvbmVudFByb3BzLCBJQXBwQmFyQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFuY2hvckVsOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IGxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb3V0ZSAhPT0gb3B0aW9uLnJvdXRlKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChvcHRpb24ucm91dGUpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgIGFuY2hvckVsOiBudWxsIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVMb2dpbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTaWduZWRJbiwgb25Mb2dpbkNsaWNrLCBvbkxvZ291dENsaWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTaWduZWRJbikge1xyXG4gICAgICAgICAgICBvbkxvZ291dENsaWNrKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvbkxvZ2luQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTWVudSgpIHtcclxuICAgICAgICBjb25zdCB7IGFuY2hvckVsIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydhcHBiYXJfbWVudUJ1dHRvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1vd25zPXtvcGVuID8gJ2xvbmctbWVudScgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvbmctbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IElURU1fSEVJR0hUICogNC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtvcHRpb24ucm91dGUgPT09IGN1cnJlbnRSb3V0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2Uob3B0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRpdGxlLCBpc1NpZ25lZEluIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FwcGJhcl9yb290J30+XHJcbiAgICAgICAgICAgICAgICA8QXBwQmFyQ29tcG9uZW50IHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1lbnUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXsnYXBwYmFyX2dyb3cnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW5DbGlja30+e2lzU2lnbmVkSW4gPyAn0JLRi9C50YLQuCcgOiAn0JLQvtC50YLQuCd9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9BcHBCYXJDb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQXBwQmFyKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBHcmlkTG9hZGVyIH0gZnJvbSAncmVhY3Qtc3Bpbm5lcnMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCdXN5UHJvcHMge1xyXG4gICAgbG9hZGluZzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnVzeTogUmVhY3QuU0ZDPElCdXN5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wiYnVzeS1jb250YWluZXJcIiArIChwcm9wcy5sb2FkaW5nID8gXCJcIiA6IFwiIGludmlzaWJsZVwiKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXN5XCI+XHJcbiAgICAgICAgICAgIDxHcmlkTG9hZGVyXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17JyNkMDAwNmYnfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17cHJvcHMubG9hZGluZ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBZGREZXNzZXJ0LCBMb2dEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IHsgRGVzc2VydFR5cGUsIE1hY2Fyb25zRW51bSwgQ2FrZXNFbnVtLCBaZXBoeXJFbnVtIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBEZXNzZXJ0c0RpY3QsIE1hY2Fyb25zQ29sb3JzLCBaZXBoeXJDb2xvcnMgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5pbXBvcnQgeyBBZGRJY29uIH0gZnJvbSAnbWRpLXJlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5cclxuY29uc3QgTUlYX1RBU1RFX05BTUUgPSAn0J3QsNCx0L7RgCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgYWRkRGVzc2VydDogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpID0+IGRpc3BhdGNoKEFkZERlc3NlcnQodHlwZSwgdGFzdGUsIHNpemUsIHF1YW50aXR5KSksXHJcbiAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXNzZXJ0c0NvbXBvbmVudFByb3BzIHtcclxuICBhZGREZXNzZXJ0PzogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXNzZXJ0c0NvbXBvbmVudFN0YXRlIHtcclxuICBkZXNzZXJ0VHlwZT86IERlc3NlcnRUeXBlO1xyXG4gIGRlc3NlcnRUYXN0ZT86IHN0cmluZztcclxuICBkZXNzZXJ0UXVhbnRpdGllcz86IHsgW2lkOiBzdHJpbmddOiBudW1iZXI7IH07XHJcbn1cclxuXHJcbmNsYXNzIERlc3NlcnRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElEZXNzZXJ0c0NvbXBvbmVudFByb3BzLCBJRGVzc2VydHNDb21wb25lbnRTdGF0ZT57XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZXNzZXJ0VHlwZTogbnVsbCxcclxuICAgICAgZGVzc2VydFRhc3RlOiBudWxsLFxyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllczoge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+Y2xvc2UnKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRTZWxlY3QgPSAoZGVzc2VydCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRlc3NlcnRUeXBlOiBkZXNzZXJ0XHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRTZWxlY3RlZC0+JyArIGRlc3NlcnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0ID0gYXN5bmMgKHRhc3RlKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGlmIChkZXNzZXJ0VHlwZSA9PT0gRGVzc2VydFR5cGUuQ2FrZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkZXNzZXJ0VGFzdGU6IHRhc3RlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0VGFzdGVTZWxlY3RlZC0+JyArIHRhc3RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRGVzc2VydEluY3JlYXNlKHRhc3RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRNaXhTZWxlY3QgPSBhc3luYyAocXR5KSA9PiB7XHJcbiAgICB0aGlzLmhhbmRsZURlc3NlcnRJbmNyZWFzZShNSVhfVEFTVEVfTkFNRSwgcXR5KTtcclxuICAgIC8vIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgTUlYX1RBU1RFX05BTUUsIG51bGwsIHF0eSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5oYW5kbGVEZXNzZXJ0TWl4U2VsZWN0LT4nICsgcXR5KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRTaXplT3JRdWFudGl0eVNlbGVjdCA9IGFzeW5jIChzaXplT3JRdHkpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoZGVzc2VydFR5cGUgPT09IERlc3NlcnRUeXBlLkNha2UpIHtcclxuICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIHNpemVPclF0eSwgMSk7XHJcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFNpemVTZWxlY3RlZC0+JyArIHNpemVPclF0eSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERlc3NlcnQoZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSwgbnVsbCwgc2l6ZU9yUXR5KTtcclxuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0UXVhbnRpdHlTZWxlY3RlZC0+JyArIHNpemVPclF0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaW5pc2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0UXVhbnRpdGllcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZXNzZXJ0UXVhbnRpdGllcykge1xyXG4gICAgICBjb25zdCBkZXNzZXJ0VGFzdGUgPSBrZXkuc3BsaXQoJy8nKVsxXTtcclxuICAgICAgY29uc3QgcXR5ID0gZGVzc2VydFF1YW50aXRpZXNba2V5XTtcclxuICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIG51bGwsIHF0eSB8fCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5oYW5kbGVGaW5pc2gnKTtcclxuICB9XHJcblxyXG4gIGdldElkKGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUpIHtcclxuICAgIHJldHVybiBgJHtkZXNzZXJ0VHlwZX0vJHtkZXNzZXJ0VGFzdGV9YDtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRJbmNyZWFzZSA9ICh0YXN0ZSwgcXR5ID0gMSkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0UXVhbnRpdGllcywgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmdldElkKGRlc3NlcnRUeXBlLCB0YXN0ZSk7XHJcbiAgICBpZiAoIWRlc3NlcnRRdWFudGl0aWVzW2lkXSkge1xyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllc1tpZF0gPSBxdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllc1tpZF0gKz0gcXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllc1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0UXR5SW5jcmVhc2UtPicgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBjb3VudFRvdGFsRGVzc2VydFF1YW50aXR5KCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0UXVhbnRpdGllcywgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZXNzZXJ0UXVhbnRpdGllcykge1xyXG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoZGVzc2VydFR5cGUpKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGRlc3NlcnRRdWFudGl0aWVzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRBcnJheUZyb21FbnVtKGVuOiBhbnkpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbik7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcChkID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogZCxcclxuICAgICAgICB2YWx1ZTogZW5bZF1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXJEZXNzZXJ0cygpIHtcclxuICAgIGNvbnN0IGRlc3NlcnRLZXlzID0gT2JqZWN0LmtleXMoRGVzc2VydFR5cGUpO1xyXG4gICAgY29uc3QgZGVzc2VydHMgPSBkZXNzZXJ0S2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgdmFsdWU6IERlc3NlcnRUeXBlW2RdXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydHMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRTZWxlY3QoZC52YWx1ZSl9IGtleT17ZC5pZH0gPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J21hY2Fyb25BdmF0YXInIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNkZDczZTInIH19PlxyXG4gICAgICAgICAgICAgICAge2QudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZC52YWx1ZX0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXJEZXNzZXJ0VGFzdGVzKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFF1YW50aXRpZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgbGV0IGRlc3NlcnRUYXN0ZXM7XHJcbiAgICBsZXQgZXh0cmFPcHRpb25zID0gW107XHJcbiAgICBzd2l0Y2ggKGRlc3NlcnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgRGVzc2VydFR5cGUuQ2FrZTpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gdGhpcy5nZXRBcnJheUZyb21FbnVtKENha2VzRW51bSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGVzc2VydFR5cGUuTWFjYXJvbjpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gdGhpcy5nZXRBcnJheUZyb21FbnVtKE1hY2Fyb25zRW51bSk7XHJcbiAgICAgICAgZXh0cmFPcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IDYsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCA2INGI0YIuJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiAxMixcclxuICAgICAgICAgIHRpdGxlOiAn0J3QsNCx0L7RgCDQvdCwIDEyINGI0YIuJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiAyNCxcclxuICAgICAgICAgIHRpdGxlOiAn0J3QsNCx0L7RgCDQvdCwIDI0INGI0YIuJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLlplcGh5cjpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gdGhpcy5nZXRBcnJheUZyb21FbnVtKFplcGh5ckVudW0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiA4LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgOCDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogMTYsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCAxNiDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICB7ZGVzc2VydFR5cGUgIT09IERlc3NlcnRUeXBlLkNha2UgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkNoZWNrIE91dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmluaXNofT5cclxuICAgICAgICAgICAg0J/RgNC40LzQtdC90LjRgtGMXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGVzc2VydFRhc3Rlcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0VGFzdGVTZWxlY3QoZC52YWx1ZSl9IGtleT17ZC5pZH0gPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdtYWNhcm9uQXZhdGFyJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGRlc3NlcnRUeXBlID09PSBEZXNzZXJ0VHlwZS5NYWNhcm9uID8gTWFjYXJvbnNDb2xvcnNbZC52YWx1ZV0gOiBaZXBoeXJDb2xvcnNbZC52YWx1ZV0gfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkLnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWUgKyAoZGVzc2VydFR5cGUgIT09IERlc3NlcnRUeXBlLkNha2UgPyBgKCR7ZGVzc2VydFF1YW50aXRpZXNbdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgZC52YWx1ZSldIHx8IDB9KWAgOiAnJyl9IC8+XHJcbiAgICAgICAgICAgICAge2Rlc3NlcnRUeXBlICE9PSBEZXNzZXJ0VHlwZS5DYWtlICYmIChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiA+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJBZGRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRJbmNyZWFzZShkLnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXh0cmFPcHRpb25zLm1hcChvID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRNaXhTZWxlY3Qoby52YWx1ZSl9IGtleT17by52YWx1ZX0gPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdtYWNhcm9uQXZhdGFyJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZGQ3M2UyJyB9fT5cclxuICAgICAgICAgICAgICAgICAge28udmFsdWV9XHJcbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17YCR7by50aXRsZX0oJHtkZXNzZXJ0UXVhbnRpdGllc1t0aGlzLmdldElkKGRlc3NlcnRUeXBlLCBNSVhfVEFTVEVfTkFNRSldIHx8IDB9KWB9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQXBwbHlXcmFwZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9kaXY+O1xyXG4gIH07XHJcblxyXG4gIHJlbmRlckRlc3NlcnRTaXplKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGRlc3NlcnRTaXplcyA9IERlc3NlcnRzRGljdFtkZXNzZXJ0VHlwZV07XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtkZXNzZXJ0U2l6ZXMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRTaXplT3JRdWFudGl0eVNlbGVjdChkKX0ga2V5PXtkfSA+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZH0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIDxEaWFsb2cgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLWRpYWxvZy10aXRsZVwiIG9wZW4gZnVsbFNjcmVlbiA+XHJcbiAgICAgIDxEaWFsb2dUaXRsZSBpZD1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICB7IWRlc3NlcnRUeXBlID8gJ9CS0YvQsdC10YDQuNGC0LUg0JTQtdGB0LXRgNGCJyA6ICghZGVzc2VydFRhc3RlID8gYNCS0YvQsdC10YDQuNGC0LUg0LLQutGD0YEgKCR7dGhpcy5jb3VudFRvdGFsRGVzc2VydFF1YW50aXR5KCl9KWAgOiAn0JLRi9Cx0LXRgNC40YLQtSDRgNCw0LfQvNC10YAnKX1cclxuICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgeyFkZXNzZXJ0VHlwZSA/IHRoaXMucmVuZGVyRGVzc2VydHMoKSA6ICghZGVzc2VydFRhc3RlID8gdGhpcy5yZW5kZXJEZXNzZXJ0VGFzdGVzKCkgOiB0aGlzLnJlbmRlckRlc3NlcnRTaXplKCkpfVxyXG4gICAgPC9EaWFsb2c+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERlc3NlcnRzQ29tcG9uZW50KSlcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFkZERyaW5rLCBMb2dEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IHsgRHJpbmtzVHlwZSwgRHJpbmsgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IERyaW5rc0RpY3QgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5pbXBvcnQgeyBBZGRJY29uIH0gZnJvbSAnbWRpLXJlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZERyaW5rOiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChBZGREcmluayh0eXBlLCBzaXplKSksXHJcbiAgICAgICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEcmlua3NDb21wb25lbnRQcm9wcyB7XHJcbiAgICBhZGREcmluaz86ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDbG9zZT86ICgpID0+IHZvaWQ7XHJcbiAgICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJpbmtzQ29tcG9uZW50U3RhdGUge1xyXG4gICAgZHJpbmtUeXBlPzogRHJpbmtzVHlwZTtcclxuICAgIGRyaW5rU2l6ZT86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgRHJpbmtzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElEcmlua3NDb21wb25lbnRQcm9wcywgSURyaW5rc0NvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkcmlua1R5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIGRyaW5rU2l6ZTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkcmlua3MtPmNsb3NlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJpbmtTZWxlY3QgPSBhc3luYyAoZHJpbmspID0+IHtcclxuICAgICAgICBjb25zdCBkcmlua1NpemVzID0gRHJpbmtzRGljdFtkcmlua107XHJcbiAgICAgICAgaWYgKGRyaW5rU2l6ZXMgJiYgZHJpbmtTaXplcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkcmlua1R5cGU6IGRyaW5rLFxyXG4gICAgICAgICAgICAgICAgZHJpbmtTaXplOiBkcmlua1NpemVzWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREcmluayhkcmluaywgZHJpbmtTaXplc1swXSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKGBkcmlua3MtPmRyaW5rU2VsZWN0ZWQtPiR7ZHJpbmt9LT5kcmlua1NpemVTZWxlY3RlZC0+JHtkcmlua1NpemVzWzBdfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZHJpbmtUeXBlOiBkcmlua1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkcmlua3MtPmRyaW5rU2VsZWN0ZWQtPicgKyBkcmluayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyaW5rU2l6ZVNlbGVjdCA9IGFzeW5jIChkcmlua1NpemUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZHJpbmtTaXplXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRHJpbmsoZHJpbmtUeXBlLCBkcmlua1NpemUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2RyaW5rcy0+ZHJpbmtTaXplU2VsZWN0ZWQtPicgKyBkcmlua1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRyaW5rcygpIHtcclxuICAgICAgICBjb25zdCBkcmlua0tleXMgPSBPYmplY3Qua2V5cyhEcmlua3NUeXBlKTtcclxuICAgICAgICBjb25zdCBkcmlua3MgPSBkcmlua0tleXMubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogRHJpbmtzVHlwZVtkXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAge2RyaW5rcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2RyaW5rQXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZC52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJEcmlua1NpemVzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGRyaW5rU2l6ZXMgPSBEcmlua3NEaWN0W2RyaW5rVHlwZV07XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtkcmlua1NpemVzLm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRHJpbmtTaXplU2VsZWN0KGQpfSBrZXk9e2R9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2RyaW5rQXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkcmlua1R5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuIGZ1bGxTY3JlZW4gPlxyXG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+eyFkcmlua1R5cGUgPyAn0JLRi9Cx0LXRgNC40YLQtSDQvdCw0L/QuNGC0L7QuicgOiAn0JLRi9Cx0LXRgNC40YLQtSDRgNCw0LfQvNC10YAnfTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgIHshZHJpbmtUeXBlID8gdGhpcy5yZW5kZXJEcmlua3MoKSA6IHRoaXMucmVuZGVyRHJpbmtTaXplcygpfVxyXG4gICAgICAgIDwvRGlhbG9nPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERyaW5rc0NvbXBvbmVudCkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IEV4cGFuc2lvblBhbmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsJztcclxuaW1wb3J0IEV4cGFuc2lvblBhbmVsU3VtbWFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbFN1bW1hcnknO1xyXG5pbXBvcnQgRXhwYW5zaW9uUGFuZWxEZXRhaWxzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsRGV0YWlscyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIaXN0b3J5Q29tcG9uZW50UHJvcHMge1xyXG4gICAgaGlzdG9yeT86IEFycmF5PENoZWNrPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGlzdG9yeUNvbXBvbmVudFN0YXRlIHtcclxufVxyXG5cclxuY2xhc3MgSGlzdG9yeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJSGlzdG9yeUNvbXBvbmVudFByb3BzLCBJSGlzdG9yeUNvbXBvbmVudFN0YXRlPntcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAgICAgICAge2hpc3Rvcnkuc29ydCgoYSwgYikgPT4gKGEuaWQgPiBiLmlkKSA/IC0xIDogKChiLmlkID4gYS5pZCkgPyAxIDogMCkpLm1hcChoID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0ga2V5PXtoLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8RXhwYW5zaW9uUGFuZWwgY2xhc3NOYW1lPSdoaXN0b3J5Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsU3VtbWFyeSBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2DQp9C10LogIyR7aC5pZH1gfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9FeHBhbnNpb25QYW5lbFN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbERldGFpbHMgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCU0LXRgdC10YDRgtGLPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpc3RvcnlJdGVtUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGguZGVzc2VydHMubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUeXBvZ3JhcGh5IGtleT17aW5kZXh9IHZhcmlhbnQ9eydzdWJoZWFkaW5nJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2QudHlwZX0gJHtkLnRhc3RlfTogJHtkLnF1YW50aXR5ID8gZC5xdWFudGl0eSA6IGQuc2l6ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCd0LDQv9C40YLQutC4PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpc3RvcnlJdGVtUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGguZHJpbmtzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VHlwb2dyYXBoeSBrZXk9e2luZGV4fSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtkLmlkfTogJHtkLnNpemV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpc3RvcnlJdGVtUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj7QotC40L8g0L7Qv9C70LDRgtGLOiA8L2I+e2gucGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+0KLQuNC/INC30LDQutCw0LfQsDogPC9iPntoLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWxEZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIaXN0b3J5Q29tcG9uZW50KTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuanMnO1xyXG5cclxuY29uc3QgTGFyZ2VCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2xhc3NlcywgY29tcG9uZW50LCBvbkNsaWNrLCB0aXRsZSwgaW1hZ2VVcmwgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgICAgICBmb2N1c1JpcHBsZVxyXG4gICAgICAgICAgICAgICAga2V5PXsnbWFpbid9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzAnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJoZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMYXJnZUJ1dHRvbik7IiwiZXhwb3J0IGRlZmF1bHQgdGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzI1dmgnXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUgIWltcG9ydGFudCcsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjpob3ZlciwgJiRmb2N1c1Zpc2libGUnOiB7XHJcbiAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICAgICAgJyYgJGltYWdlQmFja2Ryb3AnOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJiAkaW1hZ2VNYXJrZWQnOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJiAkaW1hZ2VUaXRsZSc6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCBjdXJyZW50Q29sb3InLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9jdXNWaXNpYmxlOiB7fSxcclxuICAgIGltYWdlQnV0dG9uOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICAgIGltYWdlU3JjOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciA0MCUnLFxyXG4gICAgfSxcclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgICBvcGFjaXR5OiAwLjQsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VUaXRsZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiA0fXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICsgNn1weGAsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VNYXJrZWQ6IHtcclxuICAgICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgICAgd2lkdGg6IDE4LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgYm90dG9tOiAtMixcclxuICAgICAgICBsZWZ0OiAnY2FsYyg1MCUgLSA5cHgpJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknKSxcclxuICAgIH1cclxufSk7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBDaGVjaywgRGVzc2VydCwgRHJpbmssIERlc3NlcnRUeXBlLCBEcmlua3NUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgRHJpbmtzQ29tcG9uZW50IGZyb20gJy4vRHJpbmtzQ29tcG9uZW50JztcclxuaW1wb3J0IERlc3NlcnRzQ29tcG9uZW50IGZyb20gJy4vRGVzc2VydHNDb21wb25lbnQnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IExhcmdlQnV0dG9uIGZyb20gJy4vTGFyZ2VCdXR0b24nO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCB7IERlbGV0ZURlc3NlcnQsIERlbGV0ZURyaW5rIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBkZXNzZXJ0c0ltYWdlID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9kZXNzZXJ0c19pY29uLmpwZycpO1xyXG5jb25zdCBkcmlua3NJbWFnZSA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9pbWFnZXMvZHJpbmtzX2ljb24uanBnJyk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlbGV0ZURlc3NlcnQ6ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChEZWxldGVEZXNzZXJ0KHR5cGUsIHRhc3RlLCBzaXplKSksXHJcbiAgICAgICAgZGVsZXRlRHJpbms6ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IGRpc3BhdGNoKERlbGV0ZURyaW5rKHR5cGUsIHNpemUpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5ld09yZGVyQ29tcG9uZW50UHJvcHMge1xyXG4gICAgY2hlY2s/OiBDaGVjaztcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcblxyXG4gICAgZGVsZXRlRGVzc2VydD86ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgZGVsZXRlRHJpbms/OiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXdPcmRlckNvbXBvbmVudFN0YXRlIHtcclxuICAgIHNob3dEcmlua3M/OiBib29sZWFuO1xyXG4gICAgc2hvd0Rlc3NlcnRzPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgTmV3T3JkZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SU5ld09yZGVyQ29tcG9uZW50UHJvcHMsIElOZXdPcmRlckNvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93RHJpbmtzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0Rlc3NlcnRzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGREcmlua0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RHJpbmtzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhZGREZXNzZXJ0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEZXNzZXJ0czogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBoaXN0b3J5LnB1c2goJy9jaGVja091dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURlbGV0ZURyaW5rID0gKGRyaW5rOiBEcmluaykgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlRHJpbmsoZHJpbmsuaWQsIGRyaW5rLnNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURlbGV0ZURlc3NlcnQgPSAoZGVzc2VydDogRGVzc2VydCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlRGVzc2VydChkZXNzZXJ0LnR5cGUsIGRlc3NlcnQudGFzdGUsIGRlc3NlcnQuc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2hlY2tDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAgICAgICAge2NoZWNrLmRyaW5rcy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGluc2V0IHByaW1hcnk9e2Ake2QuaWR9IC0gJHtkLnNpemV9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRGVsZXRlXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGVEcmluayhkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7Y2hlY2suZGVzc2VydHMubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtgJHtkLnR5cGV9IC0gJHtkLnRhc3RlfSAtICR7ZC5xdWFudGl0eX0ke2Quc2l6ZSA/ICgnIC0gJyArIGQuc2l6ZSkgOiAnJ31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJEZWxldGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZURlc3NlcnQoZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNob3dEcmlua3MsIHNob3dEZXNzZXJ0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAg0J/QvtC20LDQu9GD0LnRgdGC0LAsINGB0L7Qt9C00LDQudGC0LUg0YHQvdCw0YfQsNC70LAg0YfQtdC6XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImhlYWRsaW5lXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgINCd0L7QstGL0Lkg0LfQsNC60LDQt1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHtg0KfQtdC6ICMke2NoZWNrLmlkfWB9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoZWNrQ29udGVudCgpfVxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3T3JkZXJCdXR0b25zV3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3T3JkZXJCdXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9CU0JXQodCV0KDQotCrJ30gaW1hZ2VVcmw9e2Rlc3NlcnRzSW1hZ2V9IG9uQ2xpY2s9e3RoaXMuYWRkRGVzc2VydENsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3T3JkZXJCdXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9Cd0JDQn9CY0KLQmtCYJ30gaW1hZ2VVcmw9e2RyaW5rc0ltYWdlfSBvbkNsaWNrPXt0aGlzLmFkZERyaW5rQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYnV0dG9uc1dyYXBlcid9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVjay5kZXNzZXJ0cy5sZW5ndGggPT09IDAgJiYgY2hlY2suZHJpbmtzLmxlbmd0aCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LTQvtC70LbQuNGC0YxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0RyaW5rcyAmJiA8RHJpbmtzQ29tcG9uZW50IGhhbmRsZUNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0RyaW5rczogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgICAgICB7c2hvd0Rlc3NlcnRzICYmIDxEZXNzZXJ0c0NvbXBvbmVudCBoYW5kbGVDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dEZXNzZXJ0czogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gICAgKE5ld09yZGVyQ29tcG9uZW50KSk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBFcnJvckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yJztcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IFNuYWNrYmFyQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhckNvbnRlbnQnO1xyXG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1dhcm5pbmcnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IHsgQ2xlYXJFcnJvciB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlLmVycm9yTWVzc2FnZSxcclxuICAgICAgICB0eXBlOiBzdGF0ZS5ub3RpZmljYXRpb25UeXBlXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyRXJyb3I6ICgpID0+IGRpc3BhdGNoKENsZWFyRXJyb3IoKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBWYXJpYW50SWNvbiB7XHJcbiAgICBzdWNjZXNzLFxyXG4gICAgd2FybmluZyxcclxuICAgIGVycm9yLFxyXG4gICAgaW5mb1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb3RpZmljYXRpb25Db21wb25lbnRQcm9wcyB7XHJcbiAgICAvLyBjbGFzc2VzOiBhbnk7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBWYXJpYW50SWNvbjtcclxuXHJcbiAgICBjbGVhckVycm9yPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uQ29tcG9uZW50U3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElOb3RpZmljYXRpb25Db21wb25lbnRQcm9wcywgSU5vdGlmaWNhdGlvbkNvbXBvbmVudFN0YXRlPntcclxuICAgIGdldEljb24oKSB7XHJcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5zdWNjZXNzOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gQ2hlY2tDaXJjbGVJY29uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24ud2FybmluZzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFdhcm5pbmdJY29uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uZXJyb3I6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBFcnJvckljb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5pbmZvOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gSW5mb0ljb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5zdWNjZXNzOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24ud2FybmluZzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICd3YXJuaW5nJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLmVycm9yOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ2Vycm9yJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLmluZm86XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnaW5mbyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBJY29uID0gdGhpcy5nZXRJY29uKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9wZW49eyEhbWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U25hY2tiYXJDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmdldENsYXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNsaWVudC1zbmFja2JhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2xpZW50LXNuYWNrYmFyXCIgY2xhc3NOYW1lPXsnbWVzc2FnZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdpY29uJywgJ2ljb24tdmFyaWFudCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdub3RpZmljYXRpb25DbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5vdGlmaWNhdGlvbkNvbXBvbmVudCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBQYXJ0bmVyc0VudW0gfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IFByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0IH0gZnJvbSAnLi4vYWN0aW9ucydcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQ6IChwYXJ0bmVyOiBzdHJpbmcsIG1hY1F0eTogbnVtYmVyLCB6ZXBRdHk6IG51bWJlcikgPT4gZGlzcGF0Y2goUHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQocGFydG5lciwgbWFjUXR5LCB6ZXBRdHkpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnRuZXJzQ29tcG9uZW50UHJvcHMge1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuICAgIHByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0PzogKHBhcnRuZXI6IHN0cmluZywgbWFjUXR5OiBudW1iZXIsIHplcFF0eTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0bmVyc0NvbXBvbmVudFN0YXRlIHtcclxuICAgIHBhcnRuZXI/OiBzdHJpbmc7XHJcbiAgICBtYWNhcm9uc1F0eT86IG51bWJlcjtcclxuICAgIHplcGh5clF0eT86IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgUGFydG5lcnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SVBhcnRuZXJzQ29tcG9uZW50UHJvcHMsIElQYXJ0bmVyc0NvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYXJ0bmVyOiAnJyxcclxuICAgICAgICAgICAgbWFjYXJvbnNRdHk6IDAsXHJcbiAgICAgICAgICAgIHplcGh5clF0eTogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBcnJheUZyb21FbnVtKGVuOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW4pO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW5bZF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQYXJ0bmVyU2VsZWN0ID0gKGV2KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFydG5lciA9IGV2LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFydG5lciB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNYWNhcm9uc1F0eUNoYW5nZSA9IChldikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtYWNhcm9uc1F0eTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlWmVwaHlyUXR5Q2hhbmdlID0gKGV2KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHplcGh5clF0eTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQsIGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBwYXJ0bmVyLCBtYWNhcm9uc1F0eSwgemVwaHlyUXR5fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQocGFydG5lciwgbWFjYXJvbnNRdHksIHplcGh5clF0eSk7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFydG5lciwgbWFjYXJvbnNRdHksIHplcGh5clF0eSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBwYXJ0bmVycyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShQYXJ0bmVyc0VudW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICDQntC/0YLQvtCy0YvQuSDQt9Cw0LrQsNC3XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT0ncGFydG5lclNlbGVjdFdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInBhcnRuZXItc2VsZWN0XCI+0JrQvtGE0LXQudC90Y88L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFydG5lclNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJ0bmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdwYXJ0bmVyLXNlbGVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGVtPk5vbmU8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0bmVycy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17cC5pZH0gdmFsdWU9e3AudmFsdWV9PntwLnZhbHVlfTwvTWVudUl0ZW0+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCc0LDQutCw0YDQvtC90YtcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e21hY2Fyb25zUXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTWFjYXJvbnNRdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFydG5lcn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LzQsNC60LDRgNC+0L3RgVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JfQtdGE0LjRgFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17emVwaHlyUXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWmVwaHlyUXR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC30LXRhNC40YDQsFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYnV0dG9uc1dyYXBlcid9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFydG5lcn1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0JPQvtGC0L7QstC+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoUGFydG5lcnNDb21wb25lbnQpKTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFByb2Nlc3NGZXRjaERhdGEsIFByb2Nlc3NBcHBlbmREYXRhLCBQcm9jZXNzVXBkYXRlRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgc2NyaXB0TG9hZGVyIGZyb20gJ3JlYWN0LWFzeW5jLXNjcmlwdC1sb2FkZXInO1xyXG5pbXBvcnQgeyBESVNDT1ZFUllfRE9DUywgU0NPUEVTLCBDTElFTlRfSUQsIEFQSV9LRVksIFRFU1RfU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcyxcclxuICAgICAgICBoYXNFcnJvcmVkOiBzdGF0ZS5oYXNFcnJvcmVkLFxyXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxyXG4gICAgICAgIGxhYmVsOiBzdGF0ZS5sYWJlbFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZXRjaERhdGE6ICh1cmwpID0+IGRpc3BhdGNoKFByb2Nlc3NGZXRjaERhdGEodXJsKSksXHJcbiAgICAgICAgYXBwZW5kRGF0YTogKHVybCwgcmFuZ2UsIGRhdGEpID0+IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKHVybCwgcmFuZ2UsIGRhdGEpKSxcclxuICAgICAgICB1cGRhdGVEYXRhOiAodXJsLCBkYXRhKSA9PiBkaXNwYXRjaChQcm9jZXNzVXBkYXRlRGF0YSh1cmwsIGRhdGEpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RDb21wb25lbnRQcm9wcyB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIGl0ZW1zPzogYW55O1xyXG4gICAgaGFzRXJyb3JlZD86IGJvb2xlYW47XHJcbiAgICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG5cclxuICAgIGlzU2NyaXB0TG9hZGVkPzogYm9vbGVhbjtcclxuICAgIGlzU2NyaXB0TG9hZFN1Y2NlZWQ/OiBib29sZWFuO1xyXG5cclxuICAgIGZldGNoRGF0YT86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGFwcGVuZERhdGE/OiAodXJsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB2b2lkO1xyXG4gICAgdXBkYXRlRGF0YT86ICh1cmw6IHN0cmluZywgZGF0YTogYW55W10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgVGVzdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJVGVzdENvbXBvbmVudFByb3BzLCBJVGVzdENvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUF1dGhDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTaWdub3V0Q2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBcHBlbmRDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbXCJJdGVtMVwiLCBcIlhMXCIsIFwiMVwiLCBcIjBcIiwgZGF0ZVRpbWUudG9VVENTdHJpbmcoKV1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gXCJSYXdEYXRhIUE6RVwiO1xyXG4gICAgICAgIHRoaXMucHJvcHMuYXBwZW5kRGF0YShURVNUX1NQUkVBRFNIRUVUX0lELCByYW5nZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbXCJJdGVtMVwiLCBcIkNvc3RcIiwgXCJTdG9ja2VkXCIsIFwiU2hpcCBEYXRlXCJdLFxyXG4gICAgICAgICAgICBbXCJXaGVlbDFcIiwgXCIkMjAuNTBcIiwgXCI0XCIsIFwiMy8xLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkRvb3IxXCIsIFwiJDE1XCIsIFwiMlwiLCBcIjMvMTUvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiRW5naW5lMVwiLCBcIiQxMDBcIiwgXCIxXCIsIFwiMzAvMjAvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiVG90YWxzMVwiLCBcIj1TVU0oQjI6QjQpXCIsIFwiPVNVTShDMjpDNClcIiwgXCI9TUFYKEQyOkQ0KVwiXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEYXRhKFRFU1RfU1BSRUFEU0hFRVRfSUQsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NjcmlwdExvYWRlZCB9ID0gbmV4dFByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JpcHRMb2FkZWQgJiYgIXRoaXMucHJvcHMuaXNTY3JpcHRMb2FkZWQpIHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnY2xpZW50OmF1dGgyJywgdGhpcy5pbml0Q2xpZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVNcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaERhdGEoVEVTVF9TUFJFQURTSEVFVF9JRCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaERhdGEoJ2h0dHA6Ly81ODI2ZWQ5NjM5MDBkNjEyMDAwMTM4YmQubW9ja2FwaS5pby9pdGVtcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGxhYmVsLCBoYXNFcnJvcmVkLCBpc0xvYWRpbmcsIGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICBpZiAoaGFzRXJyb3JlZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8cD5Tb3JyeSEgVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGl0ZW1zPC9wPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8cD5Mb2FkaW5n4oCmPC9wPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtWzBdICsgaXRlbVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICB7cmVzdWx0fVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXBwZW5kQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PkFwcGVuZCBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlVwZGF0ZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYXV0aG9yaXplX2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXV0aENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ25vbmUnIDogJ2Jsb2NrJyB9fT5BdXRob3JpemU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNpZ25vdXRfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlNpZ24gT3V0PC9idXR0b24+XHJcbiAgICAgICAgPC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY3JpcHRMb2FkZXIoXHJcbiAgICAnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzJ1xyXG4pKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlc3RDb21wb25lbnQpKVxyXG4iLCJleHBvcnQgY29uc3QgRElTQ09WRVJZX0RPQ1MgPSBbXCJodHRwczovL3NoZWV0cy5nb29nbGVhcGlzLmNvbS8kZGlzY292ZXJ5L3Jlc3Q/dmVyc2lvbj12NFwiXTtcclxuZXhwb3J0IGNvbnN0IFNDT1BFUyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHNcIjtcclxuZXhwb3J0IGNvbnN0IENMSUVOVF9JRCA9ICc4NDI0MTcxOTg3NjctN2s0MnB0OWVjZ3R1NWY3b29wbmcxb3F1M2E3OWk1aTkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5leHBvcnQgY29uc3QgQVBJX0tFWSA9ICdBSXphU3lBbEk1aThPT3R3OGFFRU1TNDhFOXBvdUVwdHE4dEVnMk0nO1xyXG5leHBvcnQgY29uc3QgVEVTVF9TUFJFQURTSEVFVF9JRCA9ICcxT2JNaDg3ZE5taXpYYmRXa0g5VGlxZnJDZkFwa19ycXhQR3VRX3pOZ0pJTSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HU19TUFJFQURTSEVFVF9JRCA9ICcxTlBZb1Y5WXM1MnpmOVZfTmtsUTVKZFhoanBwQkxlMGRDOVQ0MzNaWTdQOCc7XHJcbmV4cG9ydCBjb25zdCBTUFJFQURTSEVFVF9JRCA9ICcxVUJ1RXdxVXlCSXZ2WTFpaG1FcDloYjFqOG00SkNwVGwtYThtSjZSalVWdyc7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcclxucmVxdWlyZSgnLi4vcHVibGljL2ltYWdlcy9mYXZpY29uLnBuZycpO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xyXG5yb290LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG5cclxucmVuZGVyKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPFJvdXRlciA+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L1JvdXRlcj5cclxuICAgIDwvUHJvdmlkZXI+LFxyXG4gICAgcm9vdFxyXG4pO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTmV3T3JkZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdPcmRlckNvbXBvbmVudCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja1BhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrUGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tQYWdlUHJvcHMsIGFueT57XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PiAgICAgICAgICBcclxuICAgICAgICAgIDxOZXdPcmRlckNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgKENoZWNrUGFnZSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBQYXltZW50LCBPcmRlclR5cGUsIENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBQcm9jZXNzQ2hlY2tvdXQsIFNldFBheW1lbnRUeXBlLCBTZXRPcmRlclR5cGUsIExvZ0RhdGEsIENhbmNlbCB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbmRsZUNoZWNrb3V0OiAoKSA9PiBkaXNwYXRjaChQcm9jZXNzQ2hlY2tvdXQoKSksXHJcbiAgICAgICAgc2V0UGF5bWVudFR5cGU6ICh0eXBlOiBQYXltZW50KSA9PiBkaXNwYXRjaChTZXRQYXltZW50VHlwZSh0eXBlKSksXHJcbiAgICAgICAgc2V0T3JkZXJUeXBlOiAodHlwZTogT3JkZXJUeXBlKSA9PiBkaXNwYXRjaChTZXRPcmRlclR5cGUodHlwZSkpLFxyXG4gICAgICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpLFxyXG4gICAgICAgIGhhbmRsZUNhbmNlbDogKCkgPT4gZGlzcGF0Y2goQ2FuY2VsKCkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tvdXRQYWdlUHJvcHMge1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuICAgIGNoZWNrPzogQ2hlY2s7XHJcblxyXG4gICAgc2V0UGF5bWVudFR5cGU/OiAodHlwZTogUGF5bWVudCkgPT4gdm9pZDtcclxuICAgIHNldE9yZGVyVHlwZT86ICh0eXBlOiBPcmRlclR5cGUpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDaGVja291dD86ICgpID0+IHZvaWQ7XHJcbiAgICBoYW5kbGVDYW5jZWw/OiAoKSA9PiB2b2lkO1xyXG4gICAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrb3V0UGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tvdXRQYWdlUHJvcHMsIGFueT57XHJcbiAgICBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNoZWNrb3V0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+Y2hlY2tvdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5jYW5jZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hlY2snKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+YmFjaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlID0gKHR5cGU6IFBheW1lbnQpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldFBheW1lbnRUeXBlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5wYXltZW50VHlwZUNoYW5nZWQtPicgKyB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVPcmRlclR5cGVDaGFuZ2UgPSAodHlwZTogT3JkZXJUeXBlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRPcmRlclR5cGUodHlwZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPm9yZGVyVHlwZUNoYW5nZWQtPicgKyB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgINCf0L7QttCw0LvRg9C50YHRgtCwLCDRgdC+0LfQtNCw0LnRgtC1INGB0L3QsNGH0LDQu9CwINGH0LXQulxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImhlYWRsaW5lXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KHRgtGA0LDQvdC40YbQsCDQstGL0LHQvtGA0LAg0L/QsNGA0LDQvNC10YLRgNC+0LIg0YfQtdC60LBcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0Q29udHJvbEdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCi0LjQvyDQv9C70LDRgtC10LbQsDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay5wYXltZW50ID09PSBQYXltZW50LkNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FyZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhcmQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQmtCw0YDRgtCwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay5wYXltZW50ID09PSBQYXltZW50LkNhc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FzaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhc2gudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQndCw0LvQuNGH0L3Ri9C1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRDb250cm9sR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KLQuNC/INC30LDQutCw0LfQsDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuUHJlT3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuUHJlT3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlByZU9yZGVyLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J/RgNC10LTQt9Cw0LrQsNC3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuU2hvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlT3JkZXJUeXBlQ2hhbmdlKE9yZGVyVHlwZS5TaG9wKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09yZGVyVHlwZS5TaG9wLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JLQuNGC0YDQuNC90LBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydidXR0b25zV3JhcGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3Nlcz17eyByb290OiAnYnV0dG9uJyB9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdGl0bGU9XCJDaGVjayBPdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQvtC00L7Qu9C20LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzZXM9e3sgcm9vdDogJ2J1dHRvbicgfX0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwiZGVmYXVsdFwiIHRpdGxlPVwiQmFja1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndCw0LfQsNC0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzZXM9e3sgcm9vdDogJ2J1dHRvbicgfX0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgdGl0bGU9XCJDYW5jZWxcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0UGFnZSkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ3JlYXRlQ2hlY2ssIExvZ0RhdGEsIENsZWFyRXJyb3IsIFByb2Nlc3NGZXRjaERhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCBMYXJnZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0xhcmdlQnV0dG9uJztcclxuaW1wb3J0IEhpc3RvcnlDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9IaXN0b3J5Q29tcG9uZW50JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IEJ1c3kgfSBmcm9tICcuLi9jb21wb25lbnRzL0J1c3knO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IFNQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IGltYWdlVXJsID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9tYWluX2ljb24uanBnJyk7XHJcbmNvbnN0IHBhcnRuZXJVcmwgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL3BhcnRuZXJzX2ljb24uanBnJyk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeSxcclxuICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjcmVhdGVDaGVjazogKCkgPT4gZGlzcGF0Y2goQ3JlYXRlQ2hlY2soKSksXHJcbiAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKSxcclxuICAgIGZldGNoRGF0YTogKHVybCkgPT4gZGlzcGF0Y2goUHJvY2Vzc0ZldGNoRGF0YSh1cmwpKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBDa2Vja0xpbmsgPSBwcm9wcyA9PiA8TGluayB0bz1cIi9jaGVja1wiIHsuLi5wcm9wc30gLz47XHJcbmNvbnN0IFBhcnRuZXJzTGluayA9IHByb3BzID0+IDxMaW5rIHRvPVwiL3BhcnRuZXJzXCIgey4uLnByb3BzfSAvPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1haW5QYWdlUHJvcHMge1xyXG4gIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgY3JlYXRlQ2hlY2s/OiAoKSA9PiB2b2lkO1xyXG4gIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGZldGNoRGF0YT86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SU1haW5QYWdlUHJvcHMsIGFueT57XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAoIWhpc3RvcnkgfHwgIWhpc3RvcnkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFNQUkVBRFNIRUVUX0lEKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbk5ld0NoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNoZWNrKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ21haW5QYWdlLT5uZXdDaGVjaycpO1xyXG4gIH1cclxuXHJcbiAgb25OZXdQYXJ0bmVyc0NoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNoZWNrKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ21haW5QYWdlLT5vbk5ld1BhcnRuZXJzQ2hlY2tDbGljaycpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzZXM9e3sgcm9vdDogJ2NhcmRSb290JyB9fT5cclxuICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9Cg0J7Ql9Cd0JjQp9Cd0KvQmSDQl9CQ0JrQkNCXJ30gY29tcG9uZW50PXtDa2Vja0xpbmt9IGltYWdlVXJsPXtpbWFnZVVybH0gb25DbGljaz17dGhpcy5vbk5ld0NoZWNrQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVyJ30gcmFpc2VkPlxyXG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc2VzPXt7IHJvb3Q6ICdjYXJkUm9vdCcgfX0+XHJcbiAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQntCf0KLQntCS0KvQmSDQl9CQ0JrQkNCXJ30gY29tcG9uZW50PXtQYXJ0bmVyc0xpbmt9IGltYWdlVXJsPXtwYXJ0bmVyVXJsfSBvbkNsaWNrPXt0aGlzLm9uTmV3UGFydG5lcnNDaGVja0NsaWNrfSAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lckhpc3RvcnknfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgINCY0YHRgtC+0YDQuNGPXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SGlzdG9yeUNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Tm90aWZpY2F0aW9uQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPEJ1c3kgbG9hZGluZz17aXNMb2FkaW5nfSAvPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoTWFpblBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb3RGb3VuZFBhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIE5vdEZvdW5kUGFnZSBleHRlbmRzIENvbXBvbmVudDxJTm90Rm91bmRQYWdlUHJvcHMsIGFueT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIE5vdCBGb3VuZFxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChOb3RGb3VuZFBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYXJ0bmVyc0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRuZXJzQ29tcG9uZW50JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnRuZXJzUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgUGFydG5lcnNQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElQYXJ0bmVyc1BhZ2VQcm9wcywgYW55PntcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+ICAgICAgICAgIFxyXG4gICAgICAgICAgPFBhcnRuZXJzQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoUGFydG5lcnNQYWdlKVxyXG4iLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIEFERF9EUklOSyxcclxuICAgIEFERF9ERVNTRVJULFxyXG4gICAgUFJPQ0VTU19DSEVDS09VVCxcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVELFxyXG4gICAgTE9HX0RBVEEsXHJcbiAgICBDTEVBUl9MT0csXHJcbiAgICBDQU5DRUwsXHJcbiAgICBDTEVBUl9FUlJPUixcclxuICAgIERFTEVURV9ERVNTRVJULFxyXG4gICAgREVMRVRFX0RSSU5LLFxyXG4gICAgU0VUX0xBU1RfSUQsXHJcbiAgICBTSE9XX05PVElGSUNBVElPTlxyXG59IGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7IENoZWNrLCBEZXNzZXJ0LCBEcmluaywgUGF5bWVudCwgT3JkZXJUeXBlIH0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcblxyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xyXG4gICAgW0NSRUFURV9DSEVDS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBsYXN0SWQgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrOiBDaGVjayA9IHtcclxuICAgICAgICAgICAgaWQ6IGxhc3RJZCArIDEsXHJcbiAgICAgICAgICAgIGRlc3NlcnRzOiBuZXcgQXJyYXk8RGVzc2VydD4oKSxcclxuICAgICAgICAgICAgZHJpbmtzOiBuZXcgQXJyYXk8RHJpbms+KCksXHJcbiAgICAgICAgICAgIGlzRmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXltZW50OiBQYXltZW50LkNhc2gsXHJcbiAgICAgICAgICAgIHR5cGU6IE9yZGVyVHlwZS5TaG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbQUREX0RSSU5LXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmluazogRHJpbmsgPSB7XHJcbiAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoZWNrLmRyaW5rcy5wdXNoKGRyaW5rKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbREVMRVRFX0RSSU5LXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXdDaGVjayA9IHsuLi5jaGVja307XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSAoeyBpZCwgc2l6ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gYWN0aW9uLnBheWxvYWRbMF0gJiYgc2l6ZSA9PT0gYWN0aW9uLnBheWxvYWRbMV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3Q2hlY2suZHJpbmtzID0gY2hlY2suZHJpbmtzLmZpbHRlcihkID0+IGNvbXBhcmF0b3IoZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG5ld0NoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FERF9ERVNTRVJUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdEZXNzZXJ0ID0gY2hlY2suZGVzc2VydHMuZmluZCgoZDogRGVzc2VydCkgPT5cclxuICAgICAgICAgICAgZC50eXBlID09PSBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgICAgICAmJiBkLnRhc3RlID09PSBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAmJiBkLnNpemUgPT09IGFjdGlvbi5wYXlsb2FkWzJdKTtcclxuXHJcbiAgICAgICAgaWYgKCEhZXhpc3RpbmdEZXNzZXJ0KSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRGVzc2VydC5xdWFudGl0eSArPSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEZXNzZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgICAgICB0YXN0ZTogYWN0aW9uLnBheWxvYWRbMV0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiBhY3Rpb24ucGF5bG9hZFsyXSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5wdXNoKGRlc3NlcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0RFTEVURV9ERVNTRVJUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXdDaGVjayA9IHsuLi5jaGVja307XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSAoeyB0eXBlLCB0YXN0ZSwgc2l6ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBhY3Rpb24ucGF5bG9hZFswXSAmJiB0YXN0ZSA9PT0gYWN0aW9uLnBheWxvYWRbMV0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFszXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaXplICE9PSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGVjay5kZXNzZXJ0cyA9IG5ld0NoZWNrLmRlc3NlcnRzLmZpbHRlcihkID0+IGNvbXBhcmF0b3IoZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG5ld0NoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1BST0NFU1NfQ0hFQ0tPVVRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2ssIGhpc3RvcnksIGxhc3RJZCB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2suaXNGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKGNoZWNrKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG51bGwsXHJcbiAgICAgICAgICAgIGhpc3Rvcnk6IFsuLi5oaXN0b3J5XSxcclxuICAgICAgICAgICAgbGFzdElkOiBsYXN0SWQgKyAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1NFVF9QQVlNRU5UX1RZUEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLnBheW1lbnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2s6IHsgLi4uY2hlY2sgfSB9O1xyXG4gICAgfSxcclxuICAgIFtTRVRfT1JERVJfVFlQRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2sudHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogeyAuLi5jaGVjayB9IH07XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfRlVMRklMTEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaXRlbXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfUkVKRUNURURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9GVUxGSUxMRURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6ICFhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9SRUpFQ1RFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbU0hPV19CVVNZXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzQnVzeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0J1c3kgfTtcclxuICAgIH0sXHJcbiAgICBbTE9HX0RBVEFdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGNvbnN0IHsgbG9nIH0gPSBzdGF0ZTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiBgJHtsb2d9OyR7dGV4dH1gIH07XHJcbiAgICB9LFxyXG4gICAgW0NMRUFSX0xPR106IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiAnJyB9O1xyXG4gICAgfSxcclxuICAgIFtDTEVBUl9FUlJPUl06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3JNZXNzYWdlOiAnJyB9O1xyXG4gICAgfSxcclxuICAgIFtDQU5DRUxdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiBudWxsIH07XHJcbiAgICB9LFxyXG4gICAgW1NFVF9MQVNUX0lEXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoaXN0b3J5OiBbYWN0aW9uLnBheWxvYWRbMV1dLFxyXG4gICAgICAgICAgICBsYXN0SWQ6IGFjdGlvbi5wYXlsb2FkWzBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1NIT1dfTk9USUZJQ0FUSU9OXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkWzFdLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UeXBlOiBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSwgaW5pdGlhbFN0YXRlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgQW55QWN0aW9uLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXInO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICBjaGVjazogbnVsbCxcclxuICAgIGhpc3Rvcnk6IG5ldyBBcnJheTxDaGVjaz4oKSxcclxuICAgIGxvZzogJycsXHJcbiAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgbGFzdElkOiAwLFxyXG4gICAgbm90aWZpY2F0aW9uVHlwZTogMFxyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgRHJpbmtzVHlwZSwgRGVzc2VydFR5cGUsIE1hY2Fyb25zRW51bSwgWmVwaHlyRW51bSwgUGFydG5lcnNFbnVtIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgRHJpbmtzRGljdDogeyBbaWQ6IHN0cmluZ10gOiBBcnJheTxzdHJpbmc+IH0gPSB7fTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkNhcHB1Y2lub10gPSBbJzE3NSDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZV0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5GbGF0V2hpdGVdID0gWycxNzUg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuUmFmXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkFtZXJpY2Fub10gPSBbJzEyMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9NaWxrXSA9IFsnMTIwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxvbmdCbGFja10gPSBbJzIwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Fc3ByZXNzb10gPSBbJzMwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkRvcHBpb10gPSBbJzYwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLk1hY2hpYXRvXSA9IFsnOTAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVMYXZlbmRlcl0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZUNhcmFtZWxdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVPcmFuZ2VdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQ2FjYW9dID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuVGVhR3JlZW5dID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuVGVhQmxhY2tdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuVGVhSGVyYmFsXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWFjaWFsVGVhUGVhckxpbWVdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3BlY2lhbFRlYU9yYW5nZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TcGVjaWFsVGVhR2luZ2VyXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkhvdENob2NvbGF0ZV0gPSBbJzE3NSDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVN0cmF3YmVycnldID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGVtb25hZGVDaXRydXNdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGVtb25hZGVQYXNzaW9uXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkljZUxhdHRlXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlN5cm9wXSA9IFsnMCDQvNC7J107XHJcblxyXG5leHBvcnQgY29uc3QgRGVzc2VydHNEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PGFueT4gfSA9IHt9O1xyXG5EZXNzZXJ0c0RpY3RbRGVzc2VydFR5cGUuTWFjYXJvbl0gPSBbMSwgNiwgMTIsIDI0XTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLlplcGh5cl0gPSBbMSwgOCwgMTZdO1xyXG5EZXNzZXJ0c0RpY3RbRGVzc2VydFR5cGUuQ2FrZV0gPSBbJzE4INGB0LwnLCAnMjIg0YHQvCddO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyaW5rUHJpY2VzRGljdDogeyBbaWQ6IHN0cmluZ10gOiBBcnJheTxzdHJpbmc+IH0gPSB7fTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuQ2FwcHVjaW5vXSA9IFsnMjUnLCAnNDAnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGF0dGVdID0gWycyOCcsICczNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5GbGF0V2hpdGVdID0gWyczNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5SYWZdID0gWyczOCcsICc0NSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9dID0gWycyMCddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9NaWxrXSA9IFsnMjUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTG9uZ0JsYWNrXSA9IFsnMzAnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuRXNwcmVzc29dID0gWycyMCddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5Eb3BwaW9dID0gWyczMCddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5NYWNoaWF0b10gPSBbJzIyJ107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlTGF2ZW5kZXJdID0gWyczMicsICc0MCddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZUNhcmFtZWxdID0gWyczMicsICc0MCddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZU9yYW5nZV0gPSBbJzMyJywgJzQwJ107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkNhY2FvXSA9IFsnMjgnLCAnMzUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuVGVhR3JlZW5dID0gWycyNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFCbGFja10gPSBbJzI1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlRlYUhlcmJhbF0gPSBbJzI1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlNwZWFjaWFsVGVhUGVhckxpbWVdID0gWyczNSddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5TcGVjaWFsVGVhT3JhbmdlXSA9IFsnMzUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3BlY2lhbFRlYUdpbmdlcl0gPSBbJzM1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkhvdENob2NvbGF0ZV0gPSBbJzU1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbJzM1J107XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlQ2l0cnVzXSA9IFsnMzUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGVtb25hZGVQYXNzaW9uXSA9IFsnMzUnXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWyc0MCddO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5TeXJvcF0gPSBbJzUnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYWZmZWVQcmljZXM6IHsgW2lkOiBzdHJpbmddIDogbnVtYmVyIH0gPSB7fTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5Db2ZmZWVJc10gPSAxNztcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5GaXJzdFBvaW50XSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkN1YmFDb2ZmZWVdID0gMTk7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uUHJvZ3Jlc3NdID0gMjA7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uS2xhc3NuYUthdmFdID0gMTk7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uQ29mZmVlQW5kVGhlQ2l0eV0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5JbE1pb10gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5TdHVkaW9Db2ZmZWVdID0gMjA7XHJcblxyXG5leHBvcnQgY29uc3QgWkVQSFlSX1BSSUNFID0gMTE7XHJcblxyXG5leHBvcnQgY29uc3QgTWFjYXJvbnNDb2xvcnM6IHsgW2lkOiBzdHJpbmddIDogc3RyaW5nIH0gPSB7fTtcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkRvckJsdWVQZWFyXSA9ICcjYjdlNGY3JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLlBhcm1lc2FuRmlndWVdID0gJyNmY2Y3ZTgnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uU3RyYXdiZXJyeUNoZWVzZWNha2VdID0gJyNmZmRkZGQnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uUmFzcGJlcnJ5XSA9ICcjZmZhNWNmJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkN1cnJhbnRdID0gJyNiYzQ1YzYnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uTGF2ZW5kZXJCbGFja2JlcnJ5XSA9ICcjYjU4N2ZmJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLk1hbmdvUGFzc2lvbl0gPSAnI2ZmZGQ4Nyc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5Db2ZmZWVDYXJhbWVsXSA9ICcjYTg3MzAxJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkNob2NvbGF0ZV0gPSAnIzQ5MjkwOCc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5QaXN0YWNoaW9dID0gJyM4NWRkOTMnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uTGltZUJhc2lsXSA9ICcjOWZmMjVjJztcclxuXHJcbmV4cG9ydCBjb25zdCBaZXBoeXJDb2xvcnM6IHsgW2lkOiBzdHJpbmddIDogc3RyaW5nIH0gPSB7fTtcclxuWmVwaHlyQ29sb3JzW1plcGh5ckVudW0uQXBwbGVdID0gJyNmZmZiZjInO1xyXG5aZXBoeXJDb2xvcnNbWmVwaHlyRW51bS5BcHJpY290UGFzc2lvbkZydWl0XSA9ICcjZmZlNmJmJztcclxuWmVwaHlyQ29sb3JzW1plcGh5ckVudW0uQ3VycmFudF0gPSAnI2Q5NzjQtWQnO1xyXG5aZXBoeXJDb2xvcnNbWmVwaHlyRW51bS5TdHJhd2JlcnJ5Q3JhbmJlcnJ5XSA9ICcjZjQ5N2I5JzsiLCJleHBvcnQgaW50ZXJmYWNlIERlc3NlcnQge1xyXG4gICAgdHlwZTogRGVzc2VydFR5cGUsXHJcbiAgICB0YXN0ZTogc3RyaW5nLFxyXG4gICAgc2l6ZTogc3RyaW5nXHJcbiAgICBxdWFudGl0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyaW5rIHtcclxuICAgIGlkOiBEcmlua3NUeXBlLFxyXG4gICAgc2l6ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2sge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGRlc3NlcnRzOiBBcnJheTxEZXNzZXJ0PixcclxuICAgIGRyaW5rczogQXJyYXk8RHJpbms+LFxyXG4gICAgaXNGaW5pc2hlZDogYm9vbGVhbixcclxuICAgIHBheW1lbnQ6IFBheW1lbnQsXHJcbiAgICB0eXBlOiBPcmRlclR5cGVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGF5bWVudCB7XHJcbiAgICBDYXJkID0gJ9Ca0LDRgNGC0LAnLFxyXG4gICAgQ2FzaCA9ICfQndCw0LvQuNGH0LrQsCcsXHJcbiAgICBPdGhlciA9ICfQlNGA0YPQs9C+0LUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE9yZGVyVHlwZSB7XHJcbiAgICBQcmVPcmRlciA9ICfQn9GA0LXQtNC30LDQutCw0LcnLFxyXG4gICAgU2hvcCA9ICfQktC40YLRgNC40L3QsCcsXHJcbiAgICBPdGhlciA9ICfQlNGA0YPQs9C+0LUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERlc3NlcnRUeXBlIHtcclxuICAgIE1hY2Fyb24gPSAn0JzQsNC60LDRgNC+0L3RgScsXHJcbiAgICBaZXBoeXIgPSAn0JfQtdGE0LjRgCcsXHJcbiAgICBDYWtlID0gJ9Ci0L7RgNGCJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYWNhcm9uc0VudW0ge1xyXG4gICAgRG9yQmx1ZVBlYXIgPSBcItCU0L7QsS3QkdC70Y4gLSDQk9GA0YPRiNCwXCIsXHJcbiAgICBQYXJtZXNhbkZpZ3VlID0gXCLQn9Cw0YDQvNC10LfQsNC9IC0g0JjQvdC20LjRgFwiLFxyXG4gICAgU3RyYXdiZXJyeUNoZWVzZWNha2UgPSBcItCa0LvRg9Cx0L3QuNGH0L3Ri9C5INCn0LjQt9C60LXQudC6XCIsXHJcbiAgICBSYXNwYmVycnkgPSBcItCc0LDQu9C40L3QsFwiLFxyXG4gICAgQ3VycmFudCA9IFwi0KHQvNC+0YDQvtC00LjQvdCwXCIsXHJcbiAgICBMYXZlbmRlckJsYWNrYmVycnkgPSBcItCb0LDQstCw0L3QtNCwIC0g0KfQtdGA0L3QuNC60LBcIixcclxuICAgIE1hbmdvUGFzc2lvbiA9IFwi0JzQsNC90LPQviAtINCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIENvZmZlZUNhcmFtZWwgPSBcItCa0L7RhNC1IC0g0KHQvtC70ZHQvdCw0Y8g0JrQsNGA0LDQvNC10LvRjFwiLFxyXG4gICAgQ2hvY29sYXRlID0gXCLQqNC+0LrQvtC70LDQtFwiLFxyXG4gICAgUGlzdGFjaGlvID0gXCLQpNC40YHRgtCw0YjQutCwXCIsXHJcbiAgICBMaW1lQmFzaWwgPSBcItCb0LDQudC8IC0g0JHQsNC30LjQu9C40LpcIiBcclxufVxyXG5cclxuZXhwb3J0IGVudW0gWmVwaHlyRW51bSB7XHJcbiAgICBBcHBsZSA9IFwi0K/QsdC70L7QutC+XCIsXHJcbiAgICBBcHJpY290UGFzc2lvbkZydWl0ID0gXCLQkNCx0YDQuNC60L7RgSAtINCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIEN1cnJhbnQgPSBcItCh0LzQvtGA0L7QtNC40L3QsFwiLCAgICBcclxuICAgIFN0cmF3YmVycnlDcmFuYmVycnkgPSBcItCa0LvRg9Cx0L3QuNC60LAgLSDQmtC70Y7QutCy0LBcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDYWtlc0VudW0ge1xyXG4gICAgUmlvID0gXCJSaW9cIixcclxuICAgIENhcnJvdENha2UgPSBcIkNhcnJvdCBDYWtlXCIsXHJcbiAgICBTb3VsID0gXCJTb3VsXCIsXHJcbiAgICBQaW5rID0gXCJQaW5rXCIsXHJcbiAgICBJbmZpbml0eSA9IFwiSW5maW5pdHlcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEcmlua3NUeXBlIHtcclxuICAgIENhcHB1Y2lubyA9IFwi0JrQsNC/0YPRh9C40L3QvlwiLFxyXG4gICAgTGF0dGUgPSBcItCb0LDRgtGC0LVcIixcclxuICAgIEZsYXRXaGl0ZSA9IFwi0KTQu9C10YIg0JLQsNC50YJcIixcclxuICAgIFJhZiA9IFwi0KDQsNGEXCIsXHJcbiAgICBBbWVyaWNhbm8gPSBcItCQ0LzQtdGA0LjQutCw0L3QvlwiLFxyXG4gICAgQW1lcmljYW5vTWlsayA9IFwi0JDQvNC10YDQuNC60LDQvdC+INGBINC80L7Qu9C+0LrQvtC8XCIsXHJcbiAgICBMb25nQmxhY2sgPSBcItCb0L7QvdCzINCx0LvRjdC6XCIsXHJcbiAgICBFc3ByZXNzbyA9IFwi0K3RgdC/0YDQtdGB0YHQvlwiLFxyXG4gICAgRG9wcGlvID0gXCLQlNC+0L/Qv9C40L5cIiwgICAgXHJcbiAgICBNYWNoaWF0byA9IFwi0JzQsNC60LjQsNGC0L5cIixcclxuICAgIExhdHRlTGF2ZW5kZXIgPSBcItCb0LDRgtGC0LUg0JvQsNCy0LDQvdC00LBcIixcclxuICAgIExhdHRlQ2FyYW1lbCA9IFwi0JvQsNGC0YLQtSDQmtCw0YDQsNC80LXQu9GMXCIsXHJcbiAgICBMYXR0ZU9yYW5nZSA9IFwi0JvQsNGC0YLQtSDQkNC/0LXQu9GM0YHQuNC9XCIsXHJcbiAgICBDYWNhbyA9IFwi0JrQsNC60LDQvlwiLFxyXG4gICAgVGVhR3JlZW4gPSBcItCn0LDQuSDQl9C10LvRkdC90YvQuVwiLFxyXG4gICAgVGVhQmxhY2sgPSBcItCn0LDQuSDQp9GR0YDQvdGL0LlcIixcclxuICAgIFRlYUhlcmJhbCA9IFwi0KfQsNC5INCi0YDQsNCy0Y/QvdC+0LlcIixcclxuICAgIFNwZWFjaWFsVGVhUGVhckxpbWUgPSBcItCn0LDQuSDQk9GA0YPRiNCwLdCb0LDQudC8XCIsXHJcbiAgICBTcGVjaWFsVGVhT3JhbmdlID0gXCLQp9Cw0Lkg0JDQv9C10LvRjNGB0LjQvS3QntCx0LvQtdC/0LjRhdCwXCIsXHJcbiAgICBTcGVjaWFsVGVhR2luZ2VyID0gXCLQp9Cw0Lkg0JzQsNC70LjQvdCwLdCY0LzQsdC40YDRjFwiLFxyXG4gICAgSG90Q2hvY29sYXRlID0gXCLQk9Cw0YDRj9GH0LjQuSDRiNC+0LrQvtC70LDQtFwiLFxyXG4gICAgTGVtb25hZGVTdHJhd2JlcnJ5ID0gXCLQm9C40LzQvtC90LDQtCDQmtC70YPQsdC90LjQutCwXCIsXHJcbiAgICBMZW1vbmFkZUNpdHJ1cyA9IFwi0JvQuNC80L7QvdCw0LQg0KbQuNGC0YDRg9GBXCIsXHJcbiAgICBMZW1vbmFkZVBhc3Npb24gPSBcItCb0LjQvNC+0L3QsNC0INCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIEljZUxhdHRlID0gXCLQkNC50YEg0JvQsNGC0YLQtVwiLFxyXG4gICAgU3lyb3AgPSBcItCh0LjRgNC+0L9cIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYXJ0bmVyc0VudW0ge1xyXG4gICAgQ29mZmVlSXMgPSBcIkNvZmZlZSBpc1wiLFxyXG4gICAgRmlyc3RQb2ludCA9IFwiRmlyc3QgUG9pbnRcIixcclxuICAgIEN1YmFDb2ZmZWUgPSBcIkN1YmEgQ29mZmVlXCIsXHJcbiAgICBQcm9ncmVzcyA9IFwiUHJvZ3Jlc3NcIixcclxuICAgIEtsYXNzbmFLYXZhID0gXCLQmtC70LDRgdC90LAg0LrQsNCy0LBcIixcclxuICAgIENvZmZlZUFuZFRoZUNpdHkgPSBcIkNvZmZlZSBhbmQgdGhlIGNpdHlcIixcclxuICAgIElsTWlvID0gXCJJbCBNaW9cIixcclxuICAgIFN0dWRpb0NvZmZlZSA9IFwi0KHRgtGD0LTQuNGPINC60L7RhNC1XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVJbnB1dE9wdGlvbiB7XHJcbiAgICBJTlBVVF9WQUxVRV9PUFRJT05fVU5TUEVDSUZJRUQgPSAnSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEJyxcclxuICAgIFJBVyA9ICdSQVcnLFxyXG4gICAgVVNFUl9FTlRFUkVEID0gJ1VTRVJfRU5URVJFRCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW5zZXJ0RGF0YU9wdGlvbiB7XHJcbiAgICBPVkVSV1JJVEUgPSAnT1ZFUldSSVRFJyxcclxuICAgIElOU0VSVF9ST1dTID0gJ0lOU0VSVF9ST1dTJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBWYWx1ZVJlbmRlck9wdGlvbiB7XHJcbiAgICBGT1JNQVRURURfVkFMVUUgPSAnRk9STUFUVEVEX1ZBTFVFJyxcclxuICAgIFVORk9STUFUVEVEX1ZBTFVFID0gJ1VORk9STUFUVEVEX1ZBTFVFJyxcclxuICAgIEZPUk1VTEEgPSAnRk9STVVMQSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGF0ZVRpbWVSZW5kZXJPcHRpb24ge1xyXG4gICAgU0VSSUFMX05VTUJFUiA9ICdTRVJJQUxfTlVNQkVSJyxcclxuICAgIEZPUk1BVFRFRF9TVFJJTkcgPSAnRk9STUFUVEVEX1NUUklORydcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9