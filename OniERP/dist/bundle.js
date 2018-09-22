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
exports.push([module.i, "body {\n  font-family: 'Segoe UI'; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  font-size: 40px;\n  font-weight: 300;\n  height: 200px; }\n\n.avatar {\n  background-color: #72c3e9;\n  color: #1d53a3; }\n\n.cardContainer {\n  margin: 16px; }\n\n.cardRoot {\n  padding: 16px 0 16px 0 !important; }\n\n.newOrderButtonsWrapper {\n  display: flex;\n  flex-direction: row; }\n\n.newOrderButton {\n  padding: 5px;\n  width: 100%;\n  height: 100%; }\n\n.buttonsWraper {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 1rem; }\n\n.checkoutTitle {\n  text-align: center;\n  margin: 1rem;\n  font-weight: 450; }\n\n.checkoutControlGroup {\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 2rem 1rem 2rem; }\n\n.notificationClose {\n  width: 4rem;\n  height: 4rem; }\n\n.macaronAvatar {\n  margin: 10px;\n  color: #fff !important;\n  background-color: #dd73e2 !important; }\n\n.drinkAvatar {\n  margin: 10px;\n  color: #fff !important;\n  background-color: #74482f !important; }\n\n.buttonApplyWraper {\n  display: flex;\n  justify-content: space-evenly; }\n", ""]);

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
exports.CANCEL = 'CANCEL';
exports.CLEAR_ERROR = 'CLEAR_ERROR';

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
                        drinksRange = "RawDrinksData!A:E";
                        drinksData_1 = [];
                        check_1.drinks.forEach(function (d) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var dateTime, data;
                                return __generator(this, function (_a) {
                                    dateTime = moment(new Date()).format('DD.MM.YYYY HH:mm');
                                    data = [d.id, d.size, check_1.payment, check_1.type, dateTime];
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
                        dessertsRange = "RawDessertsData!A:E";
                        dessertsData_1 = [];
                        check_1.desserts.forEach(function (d) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var dateTime, data;
                                return __generator(this, function (_a) {
                                    dateTime = moment(new Date()).format('DD.MM.YYYY HH:mm');
                                    data = [d.type, d.taste, d.quantity, d.size, check_1.payment, check_1.type, dateTime];
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
var TestComponent_1 = __webpack_require__(/*! ./components/TestComponent */ "./src/components/TestComponent.tsx");
var react_async_script_loader_1 = __webpack_require__(/*! react-async-script-loader */ "./node_modules/react-async-script-loader/lib/index.js");
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
var AppBar_1 = __webpack_require__(/*! ./components/AppBar */ "./src/components/AppBar/index.tsx");
var Main = function Main() {
    return React.createElement(react_router_dom_1.Switch, null, React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: MainPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/check', component: CheckPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/checkOut', component: CheckoutPage_1.default }), React.createElement(react_router_dom_1.Route, { path: '/test', component: TestComponent_1.default }), React.createElement(react_router_dom_1.Route, { component: NotFoundPage_1.default }));
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
                // this.props.fetchData(SPREADSHEET_ID);
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
        return React.createElement(React.Fragment, null, React.createElement(AppBar_1.default, { title: 'Главная', isSignedIn: isSignedIn, onLoginClick: this.handleAuthClick, onLogoutClick: this.handleSignoutClick }), React.createElement(Main, null));
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
}, {
    title: 'Test',
    route: '/test'
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
                }, key: d.id }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'macaronAvatar' }, d.value.charAt(0).toUpperCase())), React.createElement(ListItemText_1.default, { primary: d.value }));
        }), React.createElement("div", { className: 'buttonApplyWraper' }, React.createElement(Button_1.default, { variant: "contained", color: "secondary", onClick: this.handleClose }, "\u041E\u0442\u043C\u0435\u043D\u0430"))));
    };
    ;
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
        return React.createElement("div", null, dessertType !== types_1.DessertType.Cake && React.createElement("div", { className: 'buttonApplyWraper' }, React.createElement(Button_1.default, { variant: "contained", color: "primary", title: "Check Out", onClick: this.handleFinish }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")), React.createElement(List_1.default, null, dessertTastes.map(function (d) {
            return React.createElement(ListItem_1.default, { button: true, onClick: function onClick() {
                    return _this.handleDessertTasteSelect(d.value);
                }, key: d.id }, React.createElement(ListItemAvatar_1.default, null, React.createElement(Avatar_1.default, { className: 'macaronAvatar' }, d.value.charAt(0).toUpperCase())), React.createElement(ListItemText_1.default, { primary: d.value + (dessertType !== types_1.DessertType.Cake ? "(" + (dessertQuantities[_this.getId(dessertType, d.value)] || 0) + ")" : '') }), dessertType !== types_1.DessertType.Cake && React.createElement(ListItemSecondaryAction_1.default, null, React.createElement(IconButton_1.default, { "aria-label": "Add", onClick: function onClick() {
                    return _this.handleDessertIncrease(d.value);
                } }, React.createElement(mdi_react_1.AddIcon, null))));
        }), React.createElement("div", { className: 'buttonApplyWraper' }, React.createElement(Button_1.default, { variant: "contained", color: "secondary", onClick: this.handleClose }, "\u041E\u0442\u043C\u0435\u043D\u0430"))));
    };
    ;
    DessertsComponent.prototype.renderDessertSizeOrQuantity = function () {
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
        return React.createElement(Dialog_1.default, { onClose: this.handleClose, "aria-labelledby": "simple-dialog-title", open: true, fullScreen: true }, React.createElement(DialogTitle_1.default, { id: "simple-dialog-title" }, !dessertType ? 'Выберите дессерт' : !dessertTaste ? "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u043A\u0443\u0441 (" + this.countTotalDessertQuantity() + ")" : 'Выберите вкус'), !dessertType ? this.renderDesserts() : !dessertTaste ? this.renderDessertTastes() : this.renderDessertSizeOrQuantity());
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
var dessertsImage = __webpack_require__(/*! ../../public/images/desserts_icon.jpg */ "./public/images/desserts_icon.jpg");
var drinksImage = __webpack_require__(/*! ../../public/images/drinks_icon.jpg */ "./public/images/drinks_icon.jpg");
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
        _this.handleNextClick = function () {
            var history = _this.props.history;
            history.push('/checkOut');
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
        }), check.desserts.map(function (d, index) {
            return React.createElement(ListItem_1.default, { button: true, key: index }, React.createElement(ListItemText_1.default, { inset: true, primary: d.type + " - " + d.taste + " - " + d.quantity + (d.size ? ' - ' + d.size : '') }));
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
        return React.createElement("div", null, React.createElement(Typography_1.default, { gutterBottom: true, variant: "headline", component: "h2" }, "\u041D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), "\u0427\u0435\u043A #" + check.id, this.renderCheckContent(), React.createElement(Divider_1.default, null), React.createElement("div", { className: 'newOrderButtonsWrapper' }, React.createElement("div", { className: 'newOrderButton' }, React.createElement(LargeButton_1.default, { title: 'Дессерты', imageUrl: dessertsImage, onClick: this.addDessertClick })), React.createElement("div", { className: 'newOrderButton' }, React.createElement(LargeButton_1.default, { title: 'Напитки', imageUrl: drinksImage, onClick: this.addDrinkClick }))), React.createElement("div", { className: 'buttonsWraper' }, React.createElement(Button_1.default, { disabled: check.desserts.length === 0 && check.drinks.length === 0, variant: "contained", size: "large", color: "primary", onClick: this.handleNextClick }, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C")), showDrinks && React.createElement(DrinksComponent_1.default, { handleClose: function handleClose() {
                return _this.setState({ showDrinks: false });
            } }), showDesserts && React.createElement(DessertsComponent_1.default, { handleClose: function handleClose() {
                return _this.setState({ showDesserts: false });
            } }));
    };
    return NewOrderComponent;
}(react_1.Component);
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NewOrderComponent));

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
var Card_1 = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
var CardContent_1 = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
var Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
var Snackbar_1 = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
var IconButton_1 = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
var Close_1 = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
var imageUrl = __webpack_require__(/*! ../../public/images/main_icon.jpg */ "./public/images/main_icon.jpg");
var mapStateToProps = function mapStateToProps(state) {
    return {
        history: state.history,
        errorMessage: state.errorMessage
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
        }
    };
};
var CkeckLink = function CkeckLink(props) {
    return React.createElement(react_router_dom_1.Link, __assign({ to: "/check" }, props));
};
var MainPage = /** @class */function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onNewCheckClick = function () {
            _this.props.createCheck();
            _this.props.logData('mainPage->newCheck');
        };
        _this.handleClose = function () {
            _this.props.clearError();
        };
        return _this;
    }
    MainPage.prototype.render = function () {
        var errorMessage = this.props.errorMessage;
        return React.createElement("div", { className: "container" }, React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, { classes: { root: 'cardRoot' } }, React.createElement(LargeButton_1.default, { title: 'СОЗДАТЬ ЗАКАЗ', component: CkeckLink, imageUrl: imageUrl, onClick: this.onNewCheckClick }))), React.createElement(Card_1.default, { className: 'cardContainer', raised: true }, React.createElement(CardContent_1.default, null, React.createElement(Typography_1.default, { gutterBottom: true, variant: "headline", component: "h2" }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"), React.createElement(HistoryComponent_1.default, null))), React.createElement(Snackbar_1.default, { anchorOrigin: { vertical: 'top', horizontal: 'center' }, open: !!errorMessage, ContentProps: {
                'aria-describedby': 'message-id'
            }, autoHideDuration: 6000, onClose: this.handleClose, message: React.createElement("span", { id: "message-id" }, errorMessage), action: React.createElement(IconButton_1.default, { key: "close", "aria-label": "Close", color: "inherit", className: 'notificationClose', onClick: this.handleClose }, React.createElement(Close_1.default, null)) }));
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
}, _a[actionTypes_1.PROCESS_CHECKOUT] = function (state, action) {
    var check = state.check,
        history = state.history;
    check.isFinished = true;
    history.push(check);
    return Object.assign({}, state, {
        check: null,
        history: history.slice()
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
    errorMessage: ''
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
exports.DessertsDict[types_1.DessertType.Macaron] = [1, 6, 12, 24];
exports.DessertsDict[types_1.DessertType.Zephyr] = [1, 8, 16];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9kZXNzZXJ0c19pY29uLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2RyaW5rc19pY29uLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL21haW5faWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcEJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL3N0eWxlcy5zY3NzPzhhYTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGVzc2VydHNDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyaW5rc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGlzdG9yeUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xhcmdlQnV0dG9uL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdPcmRlckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9DaGVja1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9DaGVja291dFBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwuc2Nzcz9kY2JkIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kaWN0aW9uYXJpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FB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QWdCLHFCQUFoQixRQUFnQixtQkFHM0I7QUFFRCxJQUlDO0FBSkQsV0FBNkI7QUFDekIsMkNBQW1DO0FBQ25DLDZDQUF1QztBQUN2QyxtQ0FDSjtBQUFDLEdBSjRCLG9CQUFqQixRQUFpQixzQkFBakIsUUFBaUIsb0JBSTVCO0FBRUQsSUFHQztBQUhELFdBQWdDO0FBQzVCLDRDQUErQjtBQUMvQiwrQ0FDSjtBQUFDLEdBSCtCLHVCQUFwQixRQUFvQix5QkFBcEIsUUFBb0IsdUJBRy9CLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcGJhcl9yb290IHtcXG4gIGZsZXgtZ3JvdzogMTsgfVxcbiAgLmFwcGJhcl9yb290IC5hcHBiYXJfZ3JvdyB7XFxuICAgIGZsZXgtZ3JvdzogMTsgfVxcbiAgLmFwcGJhcl9yb290IC5hcHBiYXJfbWVudUJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTI7XFxuICAgIG1hcmdpbi1yaWdodDogMjA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknOyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBoZWlnaHQ6IDIwMHB4OyB9XFxuXFxuLmF2YXRhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJjM2U5O1xcbiAgY29sb3I6ICMxZDUzYTM7IH1cXG5cXG4uY2FyZENvbnRhaW5lciB7XFxuICBtYXJnaW46IDE2cHg7IH1cXG5cXG4uY2FyZFJvb3Qge1xcbiAgcGFkZGluZzogMTZweCAwIDE2cHggMCAhaW1wb3J0YW50OyB9XFxuXFxuLm5ld09yZGVyQnV0dG9uc1dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4ubmV3T3JkZXJCdXR0b24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uYnV0dG9uc1dyYXBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW46IDFyZW07IH1cXG5cXG4uY2hlY2tvdXRUaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW07XFxuICBmb250LXdlaWdodDogNDUwOyB9XFxuXFxuLmNoZWNrb3V0Q29udHJvbEdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDFyZW0gMnJlbSAxcmVtIDJyZW07IH1cXG5cXG4ubm90aWZpY2F0aW9uQ2xvc2Uge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07IH1cXG5cXG4ubWFjYXJvbkF2YXRhciB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNzNlMiAhaW1wb3J0YW50OyB9XFxuXFxuLmRyaW5rQXZhdGFyIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ0ODJmICFpbXBvcnRhbnQ7IH1cXG5cXG4uYnV0dG9uQXBwbHlXcmFwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTk2YjBlYTc3NzI0OTMxYWZjMzhhZTM5ZGJmMDA2MmUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWZlYWYyMjFmNTcwNzE1Nzc5MTVlNWUyZDMyOTNiNTEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzhmMDFlMDRjZjAxNWIyZjcwNzdkMTE3MmUyMTM5ZjguanBnXCI7IiwiZXhwb3J0IGNvbnN0IENSRUFURV9DSEVDSyA9ICdDUkVBVEVfQ0hFQ0snO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9EUklOSyA9ICdBRERfRFJJTksnO1xyXG5leHBvcnQgY29uc3QgQUREX0RFU1NFUlQgPSAnQUREX0RFU1NFUlQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX1RZUEUgPSAnU0VUX1BBWU1FTlRfVFlQRSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfT1JERVJfVFlQRSA9ICdTRVRfT1JERVJfVFlQRSc7XHJcbmV4cG9ydCBjb25zdCBQUk9DRVNTX0NIRUNLT1VUID0gJ1BST0NFU1NfQ0hFQ0tPVVQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVMgPSAnTE9BRF9JVEVNUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lURU1TX0ZVTEZJTExFRCA9ICdMT0FEX0lURU1TX0ZVTEZJTExFRCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lURU1TX1JFSkVDVEVEID0gJ0xPQURfSVRFTVNfUkVKRUNURUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIT1dfQlVTWSA9IFwiU0hPV19CVVNZXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQVBQRU5EX0RBVEEgPSAnQVBQRU5EX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgQVBQRU5EX0RBVEFfRlVMRklMTEVEID0gJ0FQUEVORF9EQVRBX0ZVTEZJTExFRCc7XHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQV9SRUpFQ1RFRCA9ICdBUFBFTkRfREFUQV9SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEEgPSAnVVBEQVRFX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEFfRlVMRklMTEVEID0gJ1VQREFURV9EQVRBX0ZVTEZJTExFRCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQV9SRUpFQ1RFRCA9ICdVUERBVEVfREFUQV9SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0RBVEEgPSAnTE9HX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfTE9HID0gJ0NMRUFSX0xPRyc7XHJcbmV4cG9ydCBjb25zdCBDQU5DRUwgPSAnQ0FOQ0VMJztcclxuXHJcbmV4cG9ydCBjb25zdCBDTEVBUl9FUlJPUiA9ICdDTEVBUl9FUlJPUic7IiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIFBST0NFU1NfQ0hFQ0tPVVQsXHJcbiAgICBBRERfRFJJTkssXHJcbiAgICBBRERfREVTU0VSVCxcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVELFxyXG4gICAgTE9HX0RBVEEsXHJcbiAgICBDTEVBUl9MT0csXHJcbiAgICBDQU5DRUwsXHJcbiAgICBDTEVBUl9FUlJPUlxyXG59IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgeyBEcmlua3NUeXBlLCBEZXNzZXJ0VHlwZSwgUGF5bWVudCwgT3JkZXJUeXBlLCBDaGVjayxcclxuICAgIFZhbHVlSW5wdXRPcHRpb24sIEluc2VydERhdGFPcHRpb24sIFZhbHVlUmVuZGVyT3B0aW9uLCBEYXRlVGltZVJlbmRlck9wdGlvbiB9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBMT0dTX1NQUkVBRFNIRUVUX0lELCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0ZldGNoRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmdldCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6ICdBMjpCNCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHJlc3BvbnNlLnJlc3VsdC52YWx1ZXM7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyhpdGVtcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNIYXNFcnJvcmVkKHRydWUpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0FwcGVuZERhdGEgPSAoc3ByZWFkc2hlZXRJZDogc3RyaW5nLCByYW5nZTogc3RyaW5nLCB2YWx1ZVJhbmdlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuYXBwZW5kKHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBWYWx1ZUlucHV0T3B0aW9uLlVTRVJfRU5URVJFRCxcclxuICAgICAgICAgICAgICAgIGluc2VydERhdGFPcHRpb246IEluc2VydERhdGFPcHRpb24uT1ZFUldSSVRFLFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUVcclxuICAgICAgICAgICAgfSwgeyB2YWx1ZXM6IHZhbHVlUmFuZ2UgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zdCB1cGRhdGVkQ2VsbHNDb3VudCA9IGF3YWl0IHJlc3BvbnNlLnJlc3VsdC51cGRhdGVzLnVwZGF0ZWRDZWxsczsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNBcHBlbmRTdWNjZXNzKHRydWUpKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kRXJyb3JlZCgn0J7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUsINGH0YLQviDQstGLINCy0L7RiNC70Lgg0LIg0YHQuNGB0YLQtdC80YMuJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzTG9nID0gYXN5bmMgKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW21lc3NhZ2UsIGRhdGVUaW1lLnRvVVRDU3RyaW5nKCldXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZCh7XHJcbiAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IExPR1NfU1BSRUFEU0hFRVRfSUQsXHJcbiAgICAgICAgICAgIHJhbmdlOiAnQTpCJyxcclxuICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgIGluc2VydERhdGFPcHRpb246IEluc2VydERhdGFPcHRpb24uT1ZFUldSSVRFLFxyXG4gICAgICAgICAgICBpbmNsdWRlVmFsdWVzSW5SZXNwb25zZTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFXHJcbiAgICAgICAgfSwgeyB2YWx1ZXM6IGRhdGEgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NVcGRhdGVEYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZywgdmFsdWVSYW5nZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6ICdBNjpEMTAnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlVmFsdWVzSW5SZXNwb25zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVmFsdWVSZW5kZXJPcHRpb246IFZhbHVlUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9WQUxVRSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0ZVRpbWVSZW5kZXJPcHRpb246IERhdGVUaW1lUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9TVFJJTkdcclxuICAgICAgICAgICAgfSwgeyB2YWx1ZXM6IHZhbHVlUmFuZ2UgfSk7XHJcbiAgICAgICAgICAgIC8vVE9ETzogUHJvY2VzcyByZXNwb25zZSByZXN1bHRcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudmFsdWVzO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0ZldGNoRGF0YVN1Y2Nlc3MoaXRlbXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZUNoZWNrID0gY3JlYXRlQWN0aW9uKENSRUFURV9DSEVDSyk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0NoZWNrb3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2s6IENoZWNrID0gc3RhdGUuY2hlY2s7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbG9nIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc1JhbmdlID0gXCJSYXdEcmlua3NEYXRhIUE6RVwiO1xyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NEYXRhID0gW107XHJcbiAgICAgICAgICAgIGNoZWNrLmRyaW5rcy5mb3JFYWNoKGFzeW5jIGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gW2QuaWQsIGQuc2l6ZSwgY2hlY2sucGF5bWVudCwgY2hlY2sudHlwZSwgZGF0ZVRpbWVdO1xyXG4gICAgICAgICAgICAgICAgZHJpbmtzRGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGRyaW5rc0RhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YShTUFJFQURTSEVFVF9JRCwgZHJpbmtzUmFuZ2UsIGRyaW5rc0RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydHNSYW5nZSA9IFwiUmF3RGVzc2VydHNEYXRhIUE6RVwiO1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0c0RhdGEgPSBbXTtcclxuICAgICAgICAgICAgY2hlY2suZGVzc2VydHMuZm9yRWFjaChhc3luYyBkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtkLnR5cGUsIGQudGFzdGUsIGQucXVhbnRpdHksIGQuc2l6ZSwgY2hlY2sucGF5bWVudCwgY2hlY2sudHlwZSwgZGF0ZVRpbWVdO1xyXG4gICAgICAgICAgICAgICAgZGVzc2VydHNEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZGVzc2VydHNEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEoU1BSRUFEU0hFRVRfSUQsIGRlc3NlcnRzUmFuZ2UsIGRlc3NlcnRzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChDaGVja291dCgpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2cobG9nKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvY2Vzc0xvZyhKU09OLnN0cmluZ2lmeShjaGVjaykpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChDbGVhckxvZygpKTsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNBcHBlbmRFcnJvcmVkKCfQntGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSwg0YfRgtC+INCy0Ysg0LLQvtGI0LvQuCDQsiDRgdC40YHRgtC10LzRgy4nKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrb3V0ID0gY3JlYXRlQWN0aW9uKFBST0NFU1NfQ0hFQ0tPVVQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERyaW5rID0gY3JlYXRlQWN0aW9uKEFERF9EUklOSywgKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gW3R5cGUsIHNpemVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGREZXNzZXJ0ID0gY3JlYXRlQWN0aW9uKEFERF9ERVNTRVJULCAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcikgPT4gW3R5cGUsIHRhc3RlLCBzaXplLCBxdWFudGl0eV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldFBheW1lbnRUeXBlID0gY3JlYXRlQWN0aW9uKFNFVF9QQVlNRU5UX1RZUEUsICh0eXBlOiBQYXltZW50KSA9PiB0eXBlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRPcmRlclR5cGUgPSBjcmVhdGVBY3Rpb24oU0VUX09SREVSX1RZUEUsICh0eXBlOiBPcmRlclR5cGUpID0+IHR5cGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zSGFzRXJyb3JlZCA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TX1JFSkVDVEVELCAoaGFzRXJyb3JlZDogYm9vbGVhbikgPT4gaGFzRXJyb3JlZCk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNJc0xvYWRpbmcgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNUywgKGlzTG9hZGluZzogYm9vbGVhbikgPT4gaXNMb2FkaW5nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0ZldGNoRGF0YVN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNU19GVUxGSUxMRUQsIChpdGVtczogYW55W10pID0+IGl0ZW1zKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0FwcGVuZFN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oQVBQRU5EX0RBVEFfRlVMRklMTEVELCAoc3VjY2VzczogYm9vbGVhbikgPT4gc3VjY2Vzcyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNBcHBlbmRFcnJvcmVkID0gY3JlYXRlQWN0aW9uKEFQUEVORF9EQVRBX1JFSkVDVEVELCAodGV4dDogc3RyaW5nKSA9PiB0ZXh0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QnVzeSA9IGNyZWF0ZUFjdGlvbihTSE9XX0JVU1ksIChpc0J1c3k6IGJvb2xlYW4pID0+IGlzQnVzeSk7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nRGF0YSA9IGNyZWF0ZUFjdGlvbihMT0dfREFUQSwgKHRleHQ6IHN0cmluZykgPT4gdGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJMb2cgPSBjcmVhdGVBY3Rpb24oQ0xFQVJfTE9HKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYW5jZWwgPSBjcmVhdGVBY3Rpb24oQ0FOQ0VMKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGVhckVycm9yID0gY3JlYXRlQWN0aW9uKENMRUFSX0VSUk9SKTsiLCJpbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvTWFpblBhZ2UnO1xyXG5pbXBvcnQgQ2hlY2tQYWdlIGZyb20gJy4vcGFnZXMvQ2hlY2tQYWdlJztcclxuaW1wb3J0IENoZWNrb3V0UGFnZSBmcm9tICcuL3BhZ2VzL0NoZWNrb3V0UGFnZSc7XHJcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSAnLi9wYWdlcy9Ob3RGb3VuZFBhZ2UnO1xyXG5pbXBvcnQgVGVzdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudCc7XHJcbmltcG9ydCBzY3JpcHRMb2FkZXIgZnJvbSAncmVhY3QtYXN5bmMtc2NyaXB0LWxvYWRlcic7XHJcbmltcG9ydCB7IERJU0NPVkVSWV9ET0NTLCBTQ09QRVMsIENMSUVOVF9JRCwgQVBJX0tFWSwgU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnLi9jb21wb25lbnRzL0FwcEJhcic7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gKFxyXG4gICAgPFN3aXRjaD5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtNYWluUGFnZX0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL2NoZWNrJyBjb21wb25lbnQ9e0NoZWNrUGFnZX0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL2NoZWNrT3V0JyBjb21wb25lbnQ9e0NoZWNrb3V0UGFnZX0gLz5cclxuXHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy90ZXN0JyBjb21wb25lbnQ9e1Rlc3RDb21wb25lbnR9IC8+XHJcbiAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmRQYWdlfSAvPlxyXG4gICAgPC9Td2l0Y2g+XHJcbilcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFByb3BzIHtcclxuICAgIGlzU2NyaXB0TG9hZGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwU3RhdGUge1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudDxJQXBwUHJvcHMsIElBcHBTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTY3JpcHRMb2FkZWQgfSA9IG5leHRQcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2NyaXB0TG9hZGVkICYmICF0aGlzLnByb3BzLmlzU2NyaXB0TG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmxvYWQoJ2NsaWVudDphdXRoMicsIHRoaXMuaW5pdENsaWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgYXV0aDIgPSB3aW5kb3dbJ2dhcGknXS5hdXRoMi5pbml0KHtcclxuICAgICAgICAvLyAgICAgY2xpZW50X2lkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgLy8gICAgIHNjb3BlOiBTQ09QRVMsXHJcbiAgICAgICAgLy8gICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgIC8vICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gYXV0aDIuaXNTaWduZWRJbi5saXN0ZW4odGhpcy5zaWduaW5DaGFuZ2VkKTtcclxuXHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmlzU2lnbmVkSW4ubGlzdGVuKHRoaXMuc2lnbmluQ2hhbmdlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNTaWduZWRJbjogd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5nZXQoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaERhdGEoU1BSRUFEU0hFRVRfSUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbkNoYW5nZWQgPSAoaXNTaWduZWRJbikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBpc1NpZ25lZEluXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXV0aENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNpZ25vdXRDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTaWduZWRJbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd1snZ2FwaSddIHx8ICF3aW5kb3dbJ2dhcGknXS5hdXRoMiB8fCAhd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5nZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPEFwcEJhciB0aXRsZT17J9CT0LvQsNCy0L3QsNGPJ30gaXNTaWduZWRJbj17aXNTaWduZWRJbn0gb25Mb2dpbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gb25Mb2dvdXRDbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIGlkPVwiYXV0aG9yaXplX2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXV0aENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ25vbmUnIDogJ2Jsb2NrJyB9fT5BdXRob3JpemU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNpZ25vdXRfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlNpZ24gT3V0PC9idXR0b24+ICovfVxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0TG9hZGVyKFxyXG4gICAgJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcydcclxuKShBcHApO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhckNvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBvcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAn0JTQvtC80L7QuScsXHJcbiAgICAgICAgcm91dGU6ICcvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1Rlc3QnLFxyXG4gICAgICAgIHJvdXRlOiAnL3Rlc3QnXHJcbiAgICB9XHJcbl07XHJcblxyXG5jb25zdCBJVEVNX0hFSUdIVCA9IDQ4O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwQmFyQ29tcG9uZW50UHJvcHMge1xyXG4gICAgY2xhc3Nlcz86IGFueTtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbiAgICBoaXN0b3J5PzogYW55O1xyXG5cclxuICAgIG9uTG9naW5DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgICBvbkxvZ291dENsaWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwQmFyQ29tcG9uZW50U3RhdGUge1xyXG4gICAgYW5jaG9yRWw/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBCYXIgZXh0ZW5kcyBDb21wb25lbnQ8SUFwcEJhckNvbXBvbmVudFByb3BzLCBJQXBwQmFyQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFuY2hvckVsOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IGxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb3V0ZSAhPT0gb3B0aW9uLnJvdXRlKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChvcHRpb24ucm91dGUpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgIGFuY2hvckVsOiBudWxsIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVMb2dpbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTaWduZWRJbiwgb25Mb2dpbkNsaWNrLCBvbkxvZ291dENsaWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTaWduZWRJbikge1xyXG4gICAgICAgICAgICBvbkxvZ291dENsaWNrKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvbkxvZ2luQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTWVudSgpIHtcclxuICAgICAgICBjb25zdCB7IGFuY2hvckVsIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydhcHBiYXJfbWVudUJ1dHRvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1vd25zPXtvcGVuID8gJ2xvbmctbWVudScgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvbmctbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IElURU1fSEVJR0hUICogNC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtvcHRpb24ucm91dGUgPT09IGN1cnJlbnRSb3V0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2Uob3B0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRpdGxlLCBpc1NpZ25lZEluIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FwcGJhcl9yb290J30+XHJcbiAgICAgICAgICAgICAgICA8QXBwQmFyQ29tcG9uZW50IHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1lbnUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXsnYXBwYmFyX2dyb3cnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW5DbGlja30+e2lzU2lnbmVkSW4gPyAn0JLRi9C50YLQuCcgOiAn0JLQvtC50YLQuCd9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9BcHBCYXJDb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQXBwQmFyKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWRkRGVzc2VydCwgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERlc3NlcnRUeXBlLCBNYWNhcm9uc0VudW0sIENha2VzRW51bSwgWmVwaHlyRW51bSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRGVzc2VydHNEaWN0IH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgQWRkSWNvbiB9IGZyb20gJ21kaS1yZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBhZGREZXNzZXJ0OiAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcikgPT4gZGlzcGF0Y2goQWRkRGVzc2VydCh0eXBlLCB0YXN0ZSwgc2l6ZSwgcXVhbnRpdHkpKSxcclxuICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlc3NlcnRzQ29tcG9uZW50UHJvcHMge1xyXG4gIGFkZERlc3NlcnQ/OiAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcikgPT4gdm9pZDtcclxuICBoYW5kbGVDbG9zZT86ICgpID0+IHZvaWQ7XHJcbiAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlc3NlcnRzQ29tcG9uZW50U3RhdGUge1xyXG4gIGRlc3NlcnRUeXBlPzogRGVzc2VydFR5cGU7XHJcbiAgZGVzc2VydFRhc3RlPzogc3RyaW5nO1xyXG4gIGRlc3NlcnRRdWFudGl0aWVzPzogeyBbaWQ6IHN0cmluZ106IG51bWJlcjsgfTtcclxufVxyXG5cclxuY2xhc3MgRGVzc2VydHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SURlc3NlcnRzQ29tcG9uZW50UHJvcHMsIElEZXNzZXJ0c0NvbXBvbmVudFN0YXRlPntcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRlc3NlcnRUeXBlOiBudWxsLFxyXG4gICAgICBkZXNzZXJ0VGFzdGU6IG51bGwsXHJcbiAgICAgIGRlc3NlcnRRdWFudGl0aWVzOiB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5jbG9zZScpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydFNlbGVjdCA9IChkZXNzZXJ0KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFR5cGU6IGRlc3NlcnRcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFNlbGVjdGVkLT4nICsgZGVzc2VydCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0VGFzdGVTZWxlY3QgPSAodGFzdGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0VGFzdGU6IHRhc3RlXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRUYXN0ZVNlbGVjdGVkLT4nICsgdGFzdGUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydFNpemVPclF1YW50aXR5U2VsZWN0ID0gYXN5bmMgKHNpemVPclF0eSkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGlmIChkZXNzZXJ0VHlwZSA9PT0gRGVzc2VydFR5cGUuQ2FrZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERlc3NlcnQoZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSwgc2l6ZU9yUXR5LCAxKTtcclxuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0U2l6ZVNlbGVjdGVkLT4nICsgc2l6ZU9yUXR5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBudWxsLCBzaXplT3JRdHkpO1xyXG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRRdWFudGl0eVNlbGVjdGVkLT4nICsgc2l6ZU9yUXR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUZpbmlzaCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRRdWFudGl0aWVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlc3NlcnRRdWFudGl0aWVzKSB7XHJcbiAgICAgIGNvbnN0IGRlc3NlcnRUYXN0ZSA9IGtleS5zcGxpdCgnLycpWzFdO1xyXG4gICAgICBjb25zdCBxdHkgPSBkZXNzZXJ0UXVhbnRpdGllc1trZXldO1xyXG4gICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERlc3NlcnQoZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSwgbnVsbCwgcXR5IHx8IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmhhbmRsZUZpbmlzaCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWQoZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSkge1xyXG4gICAgcmV0dXJuIGAke2Rlc3NlcnRUeXBlfS8ke2Rlc3NlcnRUYXN0ZX1gO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydEluY3JlYXNlID0gKHRhc3RlKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRRdWFudGl0aWVzLCBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQoZGVzc2VydFR5cGUsIHRhc3RlKTtcclxuICAgIGlmICghZGVzc2VydFF1YW50aXRpZXNbaWRdKSB7XHJcbiAgICAgIGRlc3NlcnRRdWFudGl0aWVzW2lkXSA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllc1tpZF0rKztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFF0eUluY3JlYXNlLT4nICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgY291bnRUb3RhbERlc3NlcnRRdWFudGl0eSgpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzc2VydFF1YW50aXRpZXMpIHtcclxuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGRlc3NlcnRUeXBlKSkge1xyXG4gICAgICAgIHJlc3VsdCArPSBkZXNzZXJ0UXVhbnRpdGllc1trZXldO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0QXJyYXlGcm9tRW51bShlbjogYW55KSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW4pO1xyXG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgdmFsdWU6IGVuW2RdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGVzc2VydHMoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0S2V5cyA9IE9iamVjdC5rZXlzKERlc3NlcnRUeXBlKTtcclxuICAgIGNvbnN0IGRlc3NlcnRzID0gZGVzc2VydEtleXMubWFwKGQgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBkLFxyXG4gICAgICAgIHZhbHVlOiBEZXNzZXJ0VHlwZVtkXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdtYWNhcm9uQXZhdGFyJz5cclxuICAgICAgICAgICAgICAgIHtkLnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRGVzc2VydFRhc3RlcygpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRRdWFudGl0aWVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGxldCBkZXNzZXJ0VGFzdGVzO1xyXG4gICAgc3dpdGNoIChkZXNzZXJ0VHlwZSkge1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLkNha2U6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShDYWtlc0VudW0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLk1hY2Fyb246XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShNYWNhcm9uc0VudW0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLlplcGh5cjpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gdGhpcy5nZXRBcnJheUZyb21FbnVtKFplcGh5ckVudW0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIHtkZXNzZXJ0VHlwZSAhPT0gRGVzc2VydFR5cGUuQ2FrZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHRpdGxlPVwiQ2hlY2sgT3V0XCIgb25DbGljaz17dGhpcy5oYW5kbGVGaW5pc2h9PlxyXG4gICAgICAgICAgICDQn9GA0LjQvNC10L3QuNGC0YxcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydFRhc3Rlcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdtYWNhcm9uQXZhdGFyJz5cclxuICAgICAgICAgICAgICAgIHtkLnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWUgKyAoZGVzc2VydFR5cGUgIT09IERlc3NlcnRUeXBlLkNha2UgPyBgKCR7ZGVzc2VydFF1YW50aXRpZXNbdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgZC52YWx1ZSldIHx8IDB9KWAgOiAnJyl9IC8+XHJcbiAgICAgICAgICAgIHtkZXNzZXJ0VHlwZSAhPT0gRGVzc2VydFR5cGUuQ2FrZSAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uID5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJBZGRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRJbmNyZWFzZShkLnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXJEZXNzZXJ0U2l6ZU9yUXVhbnRpdHkoKSB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZGVzc2VydFNpemVzID0gRGVzc2VydHNEaWN0W2Rlc3NlcnRUeXBlXTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFNpemVPclF1YW50aXR5U2VsZWN0KGQpfSBrZXk9e2R9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkfSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQXBwbHlXcmFwZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9kaXY+O1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gPERpYWxvZyBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3BlbiBmdWxsU2NyZWVuID5cclxuICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2ltcGxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgIHshZGVzc2VydFR5cGUgPyAn0JLRi9Cx0LXRgNC40YLQtSDQtNC10YHRgdC10YDRgicgOiAoIWRlc3NlcnRUYXN0ZSA/IGDQktGL0LHQtdGA0LjRgtC1INCy0LrRg9GBICgke3RoaXMuY291bnRUb3RhbERlc3NlcnRRdWFudGl0eSgpfSlgIDogJ9CS0YvQsdC10YDQuNGC0LUg0LLQutGD0YEnKX1cclxuICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgeyFkZXNzZXJ0VHlwZSA/IHRoaXMucmVuZGVyRGVzc2VydHMoKSA6ICghZGVzc2VydFRhc3RlID8gdGhpcy5yZW5kZXJEZXNzZXJ0VGFzdGVzKCkgOiB0aGlzLnJlbmRlckRlc3NlcnRTaXplT3JRdWFudGl0eSgpKX1cclxuICAgIDwvRGlhbG9nPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEZXNzZXJ0c0NvbXBvbmVudCkpXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBZGREcmluaywgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERyaW5rc1R5cGUsIERyaW5rIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBEcmlua3NEaWN0IH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgQWRkSWNvbiB9IGZyb20gJ21kaS1yZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGREcmluazogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gZGlzcGF0Y2goQWRkRHJpbmsodHlwZSwgc2l6ZSkpLFxyXG4gICAgICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJpbmtzQ29tcG9uZW50UHJvcHMge1xyXG4gICAgYWRkRHJpbms/OiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gICAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyaW5rc0NvbXBvbmVudFN0YXRlIHtcclxuICAgIGRyaW5rVHlwZT86IERyaW5rc1R5cGU7XHJcbiAgICBkcmlua1NpemU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIERyaW5rc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRHJpbmtzQ29tcG9uZW50UHJvcHMsIElEcmlua3NDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJpbmtUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICBkcmlua1NpemU6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5jbG9zZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyaW5rU2VsZWN0ID0gYXN5bmMgKGRyaW5rKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHJpbmtTaXplcyA9IERyaW5rc0RpY3RbZHJpbmtdO1xyXG4gICAgICAgIGlmIChkcmlua1NpemVzICYmIGRyaW5rU2l6ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZHJpbmtUeXBlOiBkcmluayxcclxuICAgICAgICAgICAgICAgIGRyaW5rU2l6ZTogZHJpbmtTaXplc1swXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRHJpbmsoZHJpbmssIGRyaW5rU2l6ZXNbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9nRGF0YShgZHJpbmtzLT5kcmlua1NlbGVjdGVkLT4ke2RyaW5rfS0+ZHJpbmtTaXplU2VsZWN0ZWQtPiR7ZHJpbmtTaXplc1swXX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRyaW5rVHlwZTogZHJpbmtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5kcmlua1NlbGVjdGVkLT4nICsgZHJpbmspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmlua1NpemVTZWxlY3QgPSBhc3luYyAoZHJpbmtTaXplKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyaW5rU2l6ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERyaW5rKGRyaW5rVHlwZSwgZHJpbmtTaXplKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkcmlua3MtPmRyaW5rU2l6ZVNlbGVjdGVkLT4nICsgZHJpbmtTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEcmlua3MoKSB7XHJcbiAgICAgICAgY29uc3QgZHJpbmtLZXlzID0gT2JqZWN0LmtleXMoRHJpbmtzVHlwZSk7XHJcbiAgICAgICAgY29uc3QgZHJpbmtzID0gZHJpbmtLZXlzLm1hcChkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IERyaW5rc1R5cGVbZF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtkcmlua3MubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEcmlua1NlbGVjdChkLnZhbHVlKX0ga2V5PXtkLmlkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdkcmlua0F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyRHJpbmtTaXplcygpIHtcclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmlua1NpemVzID0gRHJpbmtzRGljdFtkcmlua1R5cGVdO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZHJpbmtTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2l6ZVNlbGVjdChkKX0ga2V5PXtkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdkcmlua0F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPERpYWxvZyBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3BlbiBmdWxsU2NyZWVuID5cclxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2ltcGxlLWRpYWxvZy10aXRsZVwiPnshZHJpbmtUeXBlID8gJ9CS0YvQsdC10YDQuNGC0LUg0L3QsNC/0LjRgtC+0LonIDogJ9CS0YvQsdC10YDQuNGC0LUg0YDQsNC30LzQtdGAJ308L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICB7IWRyaW5rVHlwZSA/IHRoaXMucmVuZGVyRHJpbmtzKCkgOiB0aGlzLnJlbmRlckRyaW5rU2l6ZXMoKX1cclxuICAgICAgICA8L0RpYWxvZz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEcmlua3NDb21wb25lbnQpKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIaXN0b3J5Q29tcG9uZW50UHJvcHMge1xyXG4gICAgaGlzdG9yeT86IEFycmF5PENoZWNrPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGlzdG9yeUNvbXBvbmVudFN0YXRlIHtcclxufVxyXG5cclxuY2xhc3MgSGlzdG9yeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJSGlzdG9yeUNvbXBvbmVudFByb3BzLCBJSGlzdG9yeUNvbXBvbmVudFN0YXRlPntcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAgICAgICAge2hpc3RvcnkubWFwKGggPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBrZXk9e2guaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YNCn0LXQuiAjJHtoLmlkfSwg0LTQtdGB0YHQtdGA0YLRizogJHtoLmRlc3NlcnRzLmxlbmd0aH0sINC90LDQv9C40YLQutC4OiAke2guZHJpbmtzLmxlbmd0aH0sINC+0L/Qu9Cw0YLQsDogJHtoLnBheW1lbnR9LCDRgtC40L8g0LfQsNC60LDQt9CwOiAke2gudHlwZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGlzdG9yeUNvbXBvbmVudCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmpzJztcclxuXHJcbmNvbnN0IExhcmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMsIGNvbXBvbmVudCwgb25DbGljaywgdGl0bGUsIGltYWdlVXJsIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgZm9jdXNSaXBwbGVcclxuICAgICAgICAgICAgICAgIGtleT17J21haW4nfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU9e2NsYXNzZXMuZm9jdXNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMwJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3ViaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VNYXJrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGFyZ2VCdXR0b24pOyIsImV4cG9ydCBkZWZhdWx0IHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgLy8gbWluV2lkdGg6IDMwMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnLCAvLyBPdmVycmlkZXMgaW5saW5lLXN0eWxlXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXIsICYkZm9jdXNWaXNpYmxlJzoge1xyXG4gICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICcmICRpbWFnZUJhY2tkcm9wJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlTWFya2VkJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlVGl0bGUnOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgNDAlJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogNH1weCAke3RoZW1lLnNwYWNpbmcudW5pdCArIDZ9cHhgLFxyXG4gICAgfSxcclxuICAgIGltYWdlTWFya2VkOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLFxyXG4gICAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGJvdHRvbTogLTIsXHJcbiAgICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gOXB4KScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IERyaW5rc0NvbXBvbmVudCBmcm9tICcuL0RyaW5rc0NvbXBvbmVudCc7XHJcbmltcG9ydCBEZXNzZXJ0c0NvbXBvbmVudCBmcm9tICcuL0Rlc3NlcnRzQ29tcG9uZW50JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBMYXJnZUJ1dHRvbiBmcm9tICcuL0xhcmdlQnV0dG9uJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuXHJcbmNvbnN0IGRlc3NlcnRzSW1hZ2UgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL2Rlc3NlcnRzX2ljb24uanBnJyk7XHJcbmNvbnN0IGRyaW5rc0ltYWdlID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9kcmlua3NfaWNvbi5qcGcnKTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVjazogc3RhdGUuY2hlY2tcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5ld09yZGVyQ29tcG9uZW50UHJvcHMge1xyXG4gICAgY2hlY2s/OiBDaGVjaztcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5ld09yZGVyQ29tcG9uZW50U3RhdGUge1xyXG4gICAgc2hvd0RyaW5rcz86IGJvb2xlYW47XHJcbiAgICBzaG93RGVzc2VydHM/OiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBOZXdPcmRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJTmV3T3JkZXJDb21wb25lbnRQcm9wcywgSU5ld09yZGVyQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dEcmlua3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93RGVzc2VydHM6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZERyaW5rQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEcmlua3M6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZERlc3NlcnRDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0Rlc3NlcnRzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnL2NoZWNrT3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2hlY2tDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAgICAgICAge2NoZWNrLmRyaW5rcy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGluc2V0IHByaW1hcnk9e2Ake2QuaWR9IC0gJHtkLnNpemV9YH0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7Y2hlY2suZGVzc2VydHMubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtgJHtkLnR5cGV9IC0gJHtkLnRhc3RlfSAtICR7ZC5xdWFudGl0eX0ke2Quc2l6ZSA/ICgnIC0gJyArIGQuc2l6ZSkgOiAnJ31gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzaG93RHJpbmtzLCBzaG93RGVzc2VydHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgINCf0L7QttCw0LvRg9C50YHRgtCwLCDRgdC+0LfQtNCw0LnRgtC1INGB0L3QsNGH0LDQu9CwINGH0LXQulxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICDQndC+0LLRi9C5INC30LDQutCw0LdcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7YNCn0LXQuiAjJHtjaGVjay5pZH1gfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGVja0NvbnRlbnQoKX1cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uc1dyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQlNC10YHRgdC10YDRgtGLJ30gaW1hZ2VVcmw9e2Rlc3NlcnRzSW1hZ2V9IG9uQ2xpY2s9e3RoaXMuYWRkRGVzc2VydENsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3T3JkZXJCdXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9Cd0LDQv9C40YLQutC4J30gaW1hZ2VVcmw9e2RyaW5rc0ltYWdlfSBvbkNsaWNrPXt0aGlzLmFkZERyaW5rQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYnV0dG9uc1dyYXBlcid9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVjay5kZXNzZXJ0cy5sZW5ndGggPT09IDAgJiYgY2hlY2suZHJpbmtzLmxlbmd0aCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LTQvtC70LbQuNGC0YxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0RyaW5rcyAmJiA8RHJpbmtzQ29tcG9uZW50IGhhbmRsZUNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0RyaW5rczogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgICAgICB7c2hvd0Rlc3NlcnRzICYmIDxEZXNzZXJ0c0NvbXBvbmVudCBoYW5kbGVDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dEZXNzZXJ0czogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gICAgKE5ld09yZGVyQ29tcG9uZW50KSk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBQcm9jZXNzRmV0Y2hEYXRhLCBQcm9jZXNzQXBwZW5kRGF0YSwgUHJvY2Vzc1VwZGF0ZURhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBURVNUX1NQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMsXHJcbiAgICAgICAgaGFzRXJyb3JlZDogc3RhdGUuaGFzRXJyb3JlZCxcclxuICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZyxcclxuICAgICAgICBsYWJlbDogc3RhdGUubGFiZWxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChQcm9jZXNzRmV0Y2hEYXRhKHVybCkpLFxyXG4gICAgICAgIGFwcGVuZERhdGE6ICh1cmwsIHJhbmdlLCBkYXRhKSA9PiBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YSh1cmwsIHJhbmdlLCBkYXRhKSksXHJcbiAgICAgICAgdXBkYXRlRGF0YTogKHVybCwgZGF0YSkgPT4gZGlzcGF0Y2goUHJvY2Vzc1VwZGF0ZURhdGEodXJsLCBkYXRhKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50UHJvcHMge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBpdGVtcz86IGFueTtcclxuICAgIGhhc0Vycm9yZWQ/OiBib29sZWFuO1xyXG4gICAgaXNMb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgICBpc1NjcmlwdExvYWRlZD86IGJvb2xlYW47XHJcbiAgICBpc1NjcmlwdExvYWRTdWNjZWVkPzogYm9vbGVhbjtcclxuXHJcbiAgICBmZXRjaERhdGE/OiAodXJsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBhcHBlbmREYXRhPzogKHVybDogc3RyaW5nLCByYW5nZTogc3RyaW5nLCBkYXRhOiBhbnlbXSkgPT4gdm9pZDtcclxuICAgIHVwZGF0ZURhdGE/OiAodXJsOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50U3RhdGUge1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SVRlc3RDb21wb25lbnRQcm9wcywgSVRlc3RDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBdXRoQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2lnbm91dENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbk91dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXBwZW5kQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJYTFwiLCBcIjFcIiwgXCIwXCIsIGRhdGVUaW1lLnRvVVRDU3RyaW5nKCldXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCByYW5nZSA9IFwiUmF3RGF0YSFBOkVcIjtcclxuICAgICAgICB0aGlzLnByb3BzLmFwcGVuZERhdGEoVEVTVF9TUFJFQURTSEVFVF9JRCwgcmFuZ2UsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwZGF0ZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJDb3N0XCIsIFwiU3RvY2tlZFwiLCBcIlNoaXAgRGF0ZVwiXSxcclxuICAgICAgICAgICAgW1wiV2hlZWwxXCIsIFwiJDIwLjUwXCIsIFwiNFwiLCBcIjMvMS8yMDE2XCJdLFxyXG4gICAgICAgICAgICBbXCJEb29yMVwiLCBcIiQxNVwiLCBcIjJcIiwgXCIzLzE1LzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkVuZ2luZTFcIiwgXCIkMTAwXCIsIFwiMVwiLCBcIjMwLzIwLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIlRvdGFsczFcIiwgXCI9U1VNKEIyOkI0KVwiLCBcIj1TVU0oQzI6QzQpXCIsIFwiPU1BWChEMjpENClcIl1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGF0YShURVNUX1NQUkVBRFNIRUVUX0lELCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTY3JpcHRMb2FkZWQgfSA9IG5leHRQcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2NyaXB0TG9hZGVkICYmICF0aGlzLnByb3BzLmlzU2NyaXB0TG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmxvYWQoJ2NsaWVudDphdXRoMicsIHRoaXMuaW5pdENsaWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFRFU1RfU1BSRUFEU0hFRVRfSUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hEYXRhKCdodHRwOi8vNTgyNmVkOTYzOTAwZDYxMjAwMDEzOGJkLm1vY2thcGkuaW8vaXRlbXMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgaGFzRXJyb3JlZCwgaXNMb2FkaW5nLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGlzU2lnbmVkSW4gfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgaWYgKGhhc0Vycm9yZWQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPHA+U29ycnkhIFRoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBpdGVtczwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPHA+TG9hZGluZ+KApjwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVswXSArIGl0ZW1bMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8Lz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAge3Jlc3VsdH1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFwcGVuZENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5BcHBlbmQgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUNsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5VcGRhdGUgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImF1dGhvcml6ZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdub25lJyA6ICdibG9jaycgfX0+QXV0aG9yaXplPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5TaWduIE91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0TG9hZGVyKFxyXG4gICAgJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcydcclxuKShjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZXN0Q29tcG9uZW50KSlcclxuIiwiZXhwb3J0IGNvbnN0IERJU0NPVkVSWV9ET0NTID0gW1wiaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vJGRpc2NvdmVyeS9yZXN0P3ZlcnNpb249djRcIl07XHJcbmV4cG9ydCBjb25zdCBTQ09QRVMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzXCI7XHJcbmV4cG9ydCBjb25zdCBDTElFTlRfSUQgPSAnODQyNDE3MTk4NzY3LTdrNDJwdDllY2d0dTVmN29vcG5nMW9xdTNhNzlpNWk5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcclxuZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSAnQUl6YVN5QWxJNWk4T090dzhhRUVNUzQ4RTlwb3VFcHRxOHRFZzJNJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfU1BSRUFEU0hFRVRfSUQgPSAnMU9iTWg4N2RObWl6WGJkV2tIOVRpcWZyQ2ZBcGtfcnF4UEd1UV96TmdKSU0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR1NfU1BSRUFEU0hFRVRfSUQgPSAnMU5QWW9WOVlzNTJ6ZjlWX05rbFE1SmRYaGpwcEJMZTBkQzlUNDMzWlk3UDgnO1xyXG5leHBvcnQgY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVVCdUV3cVV5Qkl2dlkxaWhtRXA5aGIxajhtNEpDcFRsLWE4bUo2UmpVVncnO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5zY3NzJztcclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3N0b3JlL2luaXRpYWxTdGF0ZSc7XHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XHJcbnJvb3Quc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG5yZW5kZXIoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8Um91dGVyID5cclxuICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICByb290XHJcbik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBOZXdPcmRlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgQ2hlY2tQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElDaGVja1BhZ2VQcm9wcywgYW55PntcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+ICAgICAgICAgIFxyXG4gICAgICAgICAgPE5ld09yZGVyQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoQ2hlY2tQYWdlKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IFBheW1lbnQsIE9yZGVyVHlwZSwgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IFByb2Nlc3NDaGVja291dCwgU2V0UGF5bWVudFR5cGUsIFNldE9yZGVyVHlwZSwgTG9nRGF0YSwgQ2FuY2VsIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVjazogc3RhdGUuY2hlY2tcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFuZGxlQ2hlY2tvdXQ6ICgpID0+IGRpc3BhdGNoKFByb2Nlc3NDaGVja291dCgpKSxcclxuICAgICAgICBzZXRQYXltZW50VHlwZTogKHR5cGU6IFBheW1lbnQpID0+IGRpc3BhdGNoKFNldFBheW1lbnRUeXBlKHR5cGUpKSxcclxuICAgICAgICBzZXRPcmRlclR5cGU6ICh0eXBlOiBPcmRlclR5cGUpID0+IGRpc3BhdGNoKFNldE9yZGVyVHlwZSh0eXBlKSksXHJcbiAgICAgICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSksXHJcbiAgICAgICAgaGFuZGxlQ2FuY2VsOiAoKSA9PiBkaXNwYXRjaChDYW5jZWwoKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja291dFBhZ2VQcm9wcyB7XHJcbiAgICBoaXN0b3J5PzogYW55O1xyXG4gICAgY2hlY2s/OiBDaGVjaztcclxuXHJcbiAgICBzZXRQYXltZW50VHlwZT86ICh0eXBlOiBQYXltZW50KSA9PiB2b2lkO1xyXG4gICAgc2V0T3JkZXJUeXBlPzogKHR5cGU6IE9yZGVyVHlwZSkgPT4gdm9pZDtcclxuICAgIGhhbmRsZUNoZWNrb3V0PzogKCkgPT4gdm9pZDtcclxuICAgIGhhbmRsZUNhbmNlbD86ICgpID0+IHZvaWQ7XHJcbiAgICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgQ2hlY2tvdXRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElDaGVja291dFBhZ2VQcm9wcywgYW55PntcclxuICAgIGhhbmRsZUNoZWNrb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXQoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5jaGVja291dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPmNhbmNlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGVjaycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5iYWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UgPSAodHlwZTogUGF5bWVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UGF5bWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPnBheW1lbnRUeXBlQ2hhbmdlZC0+JyArIHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9yZGVyVHlwZUNoYW5nZSA9ICh0eXBlOiBPcmRlclR5cGUpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldE9yZGVyVHlwZSh0eXBlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+b3JkZXJUeXBlQ2hhbmdlZC0+JyArIHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAg0J/QvtC20LDQu9GD0LnRgdGC0LAsINGB0L7Qt9C00LDQudGC0LUg0YHQvdCw0YfQsNC70LAg0YfQtdC6XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVyJ30gcmFpc2VkPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaGVhZGxpbmVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQodGC0YDQsNC90LjRhtCwINCy0YvQsdC+0YDQsCDQv9Cw0YDQsNC80LXRgtGA0L7QsiDRh9C10LrQsFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRDb250cm9sR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KLQuNC/INC/0LvQsNGC0LXQttCwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnBheW1lbnQgPT09IFBheW1lbnQuQ2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UoUGF5bWVudC5DYXJkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1BheW1lbnQuQ2FyZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCa0LDRgNGC0LBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnBheW1lbnQgPT09IFBheW1lbnQuQ2FzaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UoUGF5bWVudC5DYXNoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1BheW1lbnQuQ2FzaC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCd0LDQu9C40YfQvdGL0LVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dENvbnRyb2xHcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQotC40L8g0LfQsNC60LDQt9CwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnR5cGUgPT09IE9yZGVyVHlwZS5QcmVPcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlT3JkZXJUeXBlQ2hhbmdlKE9yZGVyVHlwZS5QcmVPcmRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtPcmRlclR5cGUuUHJlT3JkZXIudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQn9GA0LXQtNC30LDQutCw0LdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnR5cGUgPT09IE9yZGVyVHlwZS5TaG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVPcmRlclR5cGVDaGFuZ2UoT3JkZXJUeXBlLlNob3ApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlNob3AudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQktC40YLRgNC40L3QsFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbnNXcmFwZXInfT4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJkZWZhdWx0XCIgdGl0bGU9XCJCYWNrXCIgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0LDQt9Cw0LRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHRpdGxlPVwiQ2hlY2sgT3V0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDaGVja291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0L7QtNC+0LvQttC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hlY2tvdXRQYWdlKSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDcmVhdGVDaGVjaywgTG9nRGF0YSwgQ2xlYXJFcnJvciB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IExhcmdlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24nO1xyXG5pbXBvcnQgSGlzdG9yeUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0hpc3RvcnlDb21wb25lbnQnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcblxyXG5jb25zdCBpbWFnZVVybCA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9pbWFnZXMvbWFpbl9pY29uLmpwZycpO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGhpc3Rvcnk6IHN0YXRlLmhpc3RvcnksXHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0YXRlLmVycm9yTWVzc2FnZVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY3JlYXRlQ2hlY2s6ICgpID0+IGRpc3BhdGNoKENyZWF0ZUNoZWNrKCkpLFxyXG4gICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSksXHJcbiAgICBjbGVhckVycm9yOiAoKSA9PiBkaXNwYXRjaChDbGVhckVycm9yKCkpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IENrZWNrTGluayA9IHByb3BzID0+IDxMaW5rIHRvPVwiL2NoZWNrXCIgey4uLnByb3BzfSAvPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1haW5QYWdlUHJvcHMge1xyXG4gIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG5cclxuICBjcmVhdGVDaGVjaz86ICgpID0+IHZvaWQ7XHJcbiAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgY2xlYXJFcnJvcj86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIE1haW5QYWdlIGV4dGVuZHMgQ29tcG9uZW50PElNYWluUGFnZVByb3BzLCBhbnk+e1xyXG4gIG9uTmV3Q2hlY2tDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuY3JlYXRlQ2hlY2soKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnbWFpblBhZ2UtPm5ld0NoZWNrJyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuY2xlYXJFcnJvcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBlcnJvck1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzZXM9e3sgcm9vdDogJ2NhcmRSb290JyB9fT5cclxuICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9Ch0J7Ql9CU0JDQotCsINCX0JDQmtCQ0JcnfSBjb21wb25lbnQ9e0NrZWNrTGlua30gaW1hZ2VVcmw9e2ltYWdlVXJsfSBvbkNsaWNrPXt0aGlzLm9uTmV3Q2hlY2tDbGlja30gLz5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgINCY0YHRgtC+0YDQuNGPXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SGlzdG9yeUNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdjZW50ZXInIH19XHJcbiAgICAgICAgICAgIG9wZW49eyEhZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICBDb250ZW50UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ21lc3NhZ2UtaWQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBpZD1cIm1lc3NhZ2UtaWRcIj57ZXJyb3JNZXNzYWdlfTwvc3Bhbj59XHJcbiAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdub3RpZmljYXRpb25DbG9zZSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICA8L2Rpdj47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gIChNYWluUGFnZSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5vdEZvdW5kUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgTm90Rm91bmRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElOb3RGb3VuZFBhZ2VQcm9wcywgYW55PntcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgTm90IEZvdW5kXHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gICAgKE5vdEZvdW5kUGFnZSlcclxuIiwiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucywgQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIExPQURfSVRFTVMsXHJcbiAgICBMT0FEX0lURU1TX0ZVTEZJTExFRCxcclxuICAgIExPQURfSVRFTVNfUkVKRUNURUQsXHJcbiAgICBTSE9XX0JVU1ksXHJcbiAgICBDUkVBVEVfQ0hFQ0ssXHJcbiAgICBBRERfRFJJTkssXHJcbiAgICBBRERfREVTU0VSVCxcclxuICAgIFBST0NFU1NfQ0hFQ0tPVVQsXHJcbiAgICBTRVRfUEFZTUVOVF9UWVBFLFxyXG4gICAgU0VUX09SREVSX1RZUEUsXHJcbiAgICBBUFBFTkRfREFUQV9GVUxGSUxMRUQsXHJcbiAgICBBUFBFTkRfREFUQV9SRUpFQ1RFRCxcclxuICAgIExPR19EQVRBLFxyXG4gICAgQ0xFQVJfTE9HLFxyXG4gICAgQ0FOQ0VMLFxyXG4gICAgQ0xFQVJfRVJST1JcclxufSBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgeyBDaGVjaywgRGVzc2VydCwgRHJpbmssIFBheW1lbnQsIE9yZGVyVHlwZSB9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5cclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3N0b3JlL2luaXRpYWxTdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcclxuICAgIFtDUkVBVEVfQ0hFQ0tdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2s6IENoZWNrID0ge1xyXG4gICAgICAgICAgICBpZDogaGlzdG9yeS5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICBkZXNzZXJ0czogbmV3IEFycmF5PERlc3NlcnQ+KCksXHJcbiAgICAgICAgICAgIGRyaW5rczogbmV3IEFycmF5PERyaW5rPigpLFxyXG4gICAgICAgICAgICBpc0ZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcGF5bWVudDogUGF5bWVudC5DYXNoLFxyXG4gICAgICAgICAgICB0eXBlOiBPcmRlclR5cGUuU2hvcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FERF9EUklOS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgZHJpbms6IERyaW5rID0ge1xyXG4gICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgIHNpemU6IGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGVjay5kcmlua3MucHVzaChkcmluayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FERF9ERVNTRVJUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdEZXNzZXJ0ID0gY2hlY2suZGVzc2VydHMuZmluZCgoZDogRGVzc2VydCkgPT5cclxuICAgICAgICAgICAgZC50eXBlID09PSBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgICAgICAmJiBkLnRhc3RlID09PSBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAmJiBkLnNpemUgPT09IGFjdGlvbi5wYXlsb2FkWzJdKTtcclxuXHJcbiAgICAgICAgaWYgKCEhZXhpc3RpbmdEZXNzZXJ0KSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRGVzc2VydC5xdWFudGl0eSArPSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEZXNzZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgICAgICB0YXN0ZTogYWN0aW9uLnBheWxvYWRbMV0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiBhY3Rpb24ucGF5bG9hZFsyXSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5wdXNoKGRlc3NlcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1BST0NFU1NfQ0hFQ0tPVVRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2ssIGhpc3RvcnkgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLmlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChjaGVjayk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrOiBudWxsLFxyXG4gICAgICAgICAgICBoaXN0b3J5OiBbLi4uaGlzdG9yeV1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbU0VUX1BBWU1FTlRfVFlQRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2sucGF5bWVudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogeyAuLi5jaGVjayB9IH07XHJcbiAgICB9LFxyXG4gICAgW1NFVF9PUkRFUl9UWVBFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjaGVjay50eXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiB7IC4uLmNoZWNrIH0gfTtcclxuICAgIH0sXHJcbiAgICBbTE9BRF9JVEVNU106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbTE9BRF9JVEVNU19GVUxGSUxMRURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpdGVtczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbTE9BRF9JVEVNU19SRUpFQ1RFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FQUEVORF9EQVRBX0ZVTEZJTExFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgaGFzRXJyb3JlZDogIWFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FQUEVORF9EQVRBX1JFSkVDVEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaGFzRXJyb3JlZDogdHJ1ZSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtTSE9XX0JVU1ldOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNCdXN5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzQnVzeSB9O1xyXG4gICAgfSxcclxuICAgIFtMT0dfREFUQV06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgY29uc3QgeyBsb2cgfSA9IHN0YXRlO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2c6IGAke2xvZ307JHt0ZXh0fWAgfTtcclxuICAgIH0sXHJcbiAgICBbQ0xFQVJfTE9HXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2c6ICcnIH07XHJcbiAgICB9LFxyXG4gICAgW0NMRUFSX0VSUk9SXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvck1lc3NhZ2U6ICcnIH07XHJcbiAgICB9LFxyXG4gICAgW0NBTkNFTF06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2s6IG51bGwgfTtcclxuICAgIH1cclxufSwgaW5pdGlhbFN0YXRlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgQW55QWN0aW9uLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXInO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICBjaGVjazogbnVsbCxcclxuICAgIGhpc3Rvcnk6IG5ldyBBcnJheTxDaGVjaz4oKSxcclxuICAgIGxvZzogJycsXHJcbiAgICBlcnJvck1lc3NhZ2U6ICcnXHJcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nbG9iYWwuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nbG9iYWwuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBEcmlua3NUeXBlLCBEZXNzZXJ0VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyaW5rc0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8c3RyaW5nPiB9ID0ge307XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Fc3ByZXNzb10gPSBbJzMwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkRvcHBpb10gPSBbJzYwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkFtZXJpY2Fub10gPSBbJzEyMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9NaWxrXSA9IFsnMTIwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLk1hY2hpYXRvXSA9IFsnOTAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQ2FwcHVjaW5vXSA9IFsnMTc1INC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkZsYXRXaGl0ZV0gPSBbJzE3NSDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZV0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZUxhdmVuZGVyXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlJhZl0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5SYWZDaXRydXNdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuVGVhR3JlZW5dID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuVGVhQmxhY2tdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuVGVhSGVyYmFsXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWFjaWFsVGVhUGVhckxpbWVdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3BlY2lhbFRlYU9yYW5nZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5DYWNhb10gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Ib3RDaG9jb2xhdGVdID0gWycxNzUg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGVtb25hZGVTdHJhd2JlcnJ5XSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlQ2l0cnVzXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlUGFzc2lvbl0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5JY2VMYXR0ZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TeXJvcF0gPSBbJzAg0LzQuyddO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc3NlcnRzRGljdDogeyBbaWQ6IHN0cmluZ10gOiBBcnJheTxhbnk+IH0gPSB7fTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLk1hY2Fyb25dID0gWzEsIDYsIDEyLCAyNF07XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5aZXBoeXJdID0gWzEsIDgsIDE2XTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLkNha2VdID0gWycxOCDRgdC8JywgJzIyINGB0LwnXTsiLCJleHBvcnQgaW50ZXJmYWNlIERlc3NlcnQge1xyXG4gICAgdHlwZTogRGVzc2VydFR5cGUsXHJcbiAgICB0YXN0ZTogc3RyaW5nLFxyXG4gICAgc2l6ZTogc3RyaW5nXHJcbiAgICBxdWFudGl0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyaW5rIHtcclxuICAgIGlkOiBEcmlua3NUeXBlLFxyXG4gICAgc2l6ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2sge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGRlc3NlcnRzOiBBcnJheTxEZXNzZXJ0PixcclxuICAgIGRyaW5rczogQXJyYXk8RHJpbms+LFxyXG4gICAgaXNGaW5pc2hlZDogYm9vbGVhbixcclxuICAgIHBheW1lbnQ6IFBheW1lbnQsXHJcbiAgICB0eXBlOiBPcmRlclR5cGVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGF5bWVudCB7XHJcbiAgICBDYXJkID0gJ9Ca0LDRgNGC0LAnLFxyXG4gICAgQ2FzaCA9ICfQndCw0LvQuNGH0LrQsCcsXHJcbiAgICBPdGhlciA9ICfQlNGA0YPQs9C+0LUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE9yZGVyVHlwZSB7XHJcbiAgICBQcmVPcmRlciA9ICfQn9GA0LXQtNC30LDQutCw0LcnLFxyXG4gICAgU2hvcCA9ICfQktC40YLRgNC40L3QsCcsXHJcbiAgICBPdGhlciA9ICfQlNGA0YPQs9C+0LUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERlc3NlcnRUeXBlIHtcclxuICAgIE1hY2Fyb24gPSAn0JzQsNC60LDRgNC+0L3RgScsXHJcbiAgICBaZXBoeXIgPSAn0JfQtdGE0LjRgCcsXHJcbiAgICBDYWtlID0gJ9Ci0L7RgNGCJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYWNhcm9uc0VudW0ge1xyXG4gICAgQ2hvY29sYXRlID0gXCLQqNC+0LrQvtC70LDQtFwiLFxyXG4gICAgQ29mZmVlQ2FyYW1lbCA9IFwi0JrQvtGE0LUgLSDQodC+0LvRkdC90LDRjyDQmtCw0YDQsNC80LXQu9GMXCIsXHJcbiAgICBNYW5nb1Bhc3Npb24gPSBcItCc0LDQvdCz0L4gLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBMaW1lQmFzaWwgPSBcItCb0LDQudC8IC0g0JHQsNC30LjQu9C40LpcIixcclxuICAgIFBpc3RhY2hpbyA9IFwi0KTQuNGB0YLQsNGI0LrQsFwiLFxyXG4gICAgRG9yQmx1ZVBlYXIgPSBcItCU0L7QsS3QkdC70Y4gLSDQk9GA0YPRiNCwXCIsXHJcbiAgICBMYXZlbmRlckJsYWNrYmVycnkgPSBcItCb0LDQstCw0L3QtNCwIC0g0KfQtdGA0L3QuNC60LBcIixcclxuICAgIEN1cnJhbnQgPSBcItCh0LzQvtGA0L7QtNC40L3QsFwiLFxyXG4gICAgU3RyYXdiZXJyeUNoZWVzZWNha2UgPSBcItCa0LvRg9Cx0L3QuNGH0L3Ri9C5INCn0LjQt9C60LXQudC6XCIsXHJcbiAgICBQYXJtZXNhbkZpZ3VlID0gXCLQn9Cw0YDQvNC10LfQsNC9IC0g0JjQvdC20LjRgFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFplcGh5ckVudW0ge1xyXG4gICAgQXBwbGUgPSBcItCv0LHQu9C+0LrQvlwiLFxyXG4gICAgQ3VycmFudCA9IFwi0KHQvNC+0YDQvtC00LjQvdCwXCIsXHJcbiAgICBBcHJpY290UGFzc2lvbkZydWl0ID0gXCLQkNCx0YDQuNC60L7RgSAtINCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIFN0cmF3YmVycnlDcmFuYmVycnkgPSBcItCa0LvRg9Cx0L3QuNC60LAgLSDQmtC70Y7QutCy0LBcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDYWtlc0VudW0ge1xyXG4gICAgUmlvID0gXCJSaW9cIixcclxuICAgIENhcnJvdENha2UgPSBcIkNhcnJvdCBDYWtlXCIsXHJcbiAgICBTb3VsID0gXCJTb3VsXCIsXHJcbiAgICBQaW5rID0gXCJQaW5rXCIsXHJcbiAgICBJbmZpbml0eSA9IFwiSW5maW5pdHlcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEcmlua3NUeXBlIHtcclxuICAgIEVzcHJlc3NvID0gXCLQrdGB0L/RgNC10YHRgdC+XCIsXHJcbiAgICBEb3BwaW8gPSBcItCU0L7Qv9C/0LjQvlwiLFxyXG4gICAgQW1lcmljYW5vID0gXCLQkNC80LXRgNC40LrQsNC90L5cIixcclxuICAgIEFtZXJpY2Fub01pbGsgPSBcItCQ0LzQtdGA0LjQutCw0L3QviDRgSDQvNC+0LvQvtC60L7QvFwiLFxyXG4gICAgTWFjaGlhdG8gPSBcItCc0LDQutC40LDRgtC+XCIsXHJcbiAgICBDYXBwdWNpbm8gPSBcItCa0LDQv9GD0YfQuNC90L5cIixcclxuICAgIEZsYXRXaGl0ZSA9IFwi0KTQu9C10YIg0JLQsNC50YJcIixcclxuICAgIExhdHRlID0gXCLQm9Cw0YLRgtC1XCIsXHJcbiAgICBMYXR0ZUxhdmVuZGVyID0gXCLQm9Cw0YLRgtC1INCb0LDQstCw0L3QtNCwXCIsXHJcbiAgICBSYWYgPSBcItCg0LDRhFwiLFxyXG4gICAgUmFmQ2l0cnVzID0gXCLQoNCw0YQg0KbQuNGC0YDRg9GBXCIsXHJcbiAgICBUZWFHcmVlbiA9IFwi0KfQsNC5INCX0LXQu9GR0L3Ri9C5XCIsXHJcbiAgICBUZWFCbGFjayA9IFwi0KfQsNC5INCn0ZHRgNC90YvQuVwiLFxyXG4gICAgVGVhSGVyYmFsID0gXCLQp9Cw0Lkg0KLRgNCw0LLRj9C90L7QuVwiLFxyXG4gICAgU3BlYWNpYWxUZWFQZWFyTGltZSA9IFwi0KfQsNC5INCT0YDRg9GI0LAt0JvQsNC50LxcIixcclxuICAgIFNwZWNpYWxUZWFPcmFuZ2UgPSBcItCn0LDQuSDQkNC/0LXQu9GM0YHQuNC9LdCe0LHQu9C10L/QuNGF0LBcIixcclxuICAgIENhY2FvID0gXCLQmtCw0LrQsNC+XCIsXHJcbiAgICBIb3RDaG9jb2xhdGUgPSBcItCT0LDRgNGP0YfQuNC5INGI0L7QutC+0LvQsNC0XCIsXHJcbiAgICBMZW1vbmFkZVN0cmF3YmVycnkgPSBcItCb0LjQvNC+0L3QsNC0INCa0LvRg9Cx0L3QuNC60LBcIixcclxuICAgIExlbW9uYWRlQ2l0cnVzID0gXCLQm9C40LzQvtC90LDQtCDQptC40YLRgNGD0YFcIixcclxuICAgIExlbW9uYWRlUGFzc2lvbiA9IFwi0JvQuNC80L7QvdCw0LQg0JzQsNGA0LDQutGD0LnRj1wiLFxyXG4gICAgSWNlTGF0dGUgPSBcItCQ0LnRgSDQm9Cw0YLRgtC1XCIsXHJcbiAgICBTeXJvcCA9IFwi0KHQuNGA0L7Qv1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZhbHVlSW5wdXRPcHRpb24ge1xyXG4gICAgSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEID0gJ0lOUFVUX1ZBTFVFX09QVElPTl9VTlNQRUNJRklFRCcsXHJcbiAgICBSQVcgPSAnUkFXJyxcclxuICAgIFVTRVJfRU5URVJFRCA9ICdVU0VSX0VOVEVSRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEluc2VydERhdGFPcHRpb24ge1xyXG4gICAgT1ZFUldSSVRFID0gJ09WRVJXUklURScsXHJcbiAgICBJTlNFUlRfUk9XUyA9ICdJTlNFUlRfUk9XUydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVSZW5kZXJPcHRpb24ge1xyXG4gICAgRk9STUFUVEVEX1ZBTFVFID0gJ0ZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBVTkZPUk1BVFRFRF9WQUxVRSA9ICdVTkZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBGT1JNVUxBID0gJ0ZPUk1VTEEnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERhdGVUaW1lUmVuZGVyT3B0aW9uIHtcclxuICAgIFNFUklBTF9OVU1CRVIgPSAnU0VSSUFMX05VTUJFUicsXHJcbiAgICBGT1JNQVRURURfU1RSSU5HID0gJ0ZPUk1BVFRFRF9TVFJJTkcnXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==