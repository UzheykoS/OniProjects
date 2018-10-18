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
exports.push([module.i, "html, body {\n  font-family: 'Segoe UI';\n  height: 100%; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  font-size: 36px;\n  font-weight: 300; }\n\n.avatar {\n  background-color: #72c3e9;\n  color: #1d53a3; }\n\n.cardContainer {\n  margin: 16px; }\n\n.cardContainerHistory {\n  margin: 16px; }\n\n.cardRoot {\n  padding: 16px 0 16px 0 !important; }\n\n.newOrderButtonsWrapper {\n  display: flex;\n  flex-direction: row; }\n\n.newOrderButton {\n  padding: 5px;\n  width: 100%;\n  height: 100%; }\n\n.buttonsWraper {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 1rem;\n  flex-direction: column; }\n  .buttonsWraper .button {\n    margin: 1rem 0rem; }\n\n.checkoutTitle {\n  text-align: center;\n  margin: 1rem;\n  font-weight: 450; }\n\n.checkoutControlGroup {\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 2rem 1rem 2rem;\n  flex-direction: column; }\n\n.notificationClose {\n  width: 4rem;\n  height: 4rem; }\n\n.macaronAvatar {\n  margin: 10px;\n  color: black !important; }\n\n.drinkAvatar {\n  margin: 10px;\n  color: #fff !important;\n  background-color: #74482f !important; }\n\n.dessertsTastesWrapper {\n  height: calc(100% - 68px); }\n\n.dessertsTastesListWrapper {\n  height: calc(100% - 110px);\n  overflow: auto; }\n\n.buttonApplyWraper {\n  display: flex;\n  justify-content: space-evenly; }\n\n.buttonCancelWraper {\n  display: flex;\n  justify-content: space-evenly; }\n\n.drinksWrapper {\n  height: calc(100% - 68px); }\n\n.drinksListWrapper {\n  height: calc(100% - 65px);\n  overflow: auto; }\n\n.partnerSelectWrapper {\n  width: 100%;\n  padding: 1rem; }\n\n.busy-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 9999;\n  background-color: #e6e6e6;\n  opacity: 0.8; }\n  .busy-container .busy {\n    position: absolute;\n    left: 50%;\n    top: 44%;\n    margin-left: -18px; }\n\n.invisible {\n  display: none; }\n\n.historyContainer {\n  width: 100%; }\n", ""]);

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
/*! exports provided: CREATE_CHECK, ADD_DRINK, ADD_DESSERT, DELETE_DRINK, DELETE_DESSERT, SET_PAYMENT_TYPE, SET_ORDER_TYPE, PROCESS_CHECKOUT, LOAD_ITEMS, LOAD_ITEMS_FULFILLED, LOAD_ITEMS_REJECTED, SHOW_BUSY, APPEND_DATA, APPEND_DATA_FULFILLED, APPEND_DATA_REJECTED, UPDATE_DATA, UPDATE_DATA_FULFILLED, UPDATE_DATA_REJECTED, LOG_DATA, CLEAR_LOG, CANCEL, CLEAR_ERROR, SET_LAST_ID, SHOW_NOTIFICATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CHECK", function() { return CREATE_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DRINK", function() { return ADD_DRINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DESSERT", function() { return ADD_DESSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DRINK", function() { return DELETE_DRINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DESSERT", function() { return DELETE_DESSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PAYMENT_TYPE", function() { return SET_PAYMENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ORDER_TYPE", function() { return SET_ORDER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_CHECKOUT", function() { return PROCESS_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ITEMS", function() { return LOAD_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ITEMS_FULFILLED", function() { return LOAD_ITEMS_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ITEMS_REJECTED", function() { return LOAD_ITEMS_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_BUSY", function() { return SHOW_BUSY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPEND_DATA", function() { return APPEND_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPEND_DATA_FULFILLED", function() { return APPEND_DATA_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPEND_DATA_REJECTED", function() { return APPEND_DATA_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATA", function() { return UPDATE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATA_FULFILLED", function() { return UPDATE_DATA_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATA_REJECTED", function() { return UPDATE_DATA_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_DATA", function() { return LOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_LOG", function() { return CLEAR_LOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERROR", function() { return CLEAR_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LAST_ID", function() { return SET_LAST_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_NOTIFICATION", function() { return SHOW_NOTIFICATION; });
var CREATE_CHECK = 'CREATE_CHECK';
var ADD_DRINK = 'ADD_DRINK';
var ADD_DESSERT = 'ADD_DESSERT';
var DELETE_DRINK = 'DELETE_DRINK';
var DELETE_DESSERT = 'DELETE_DESSERT';
var SET_PAYMENT_TYPE = 'SET_PAYMENT_TYPE';
var SET_ORDER_TYPE = 'SET_ORDER_TYPE';
var PROCESS_CHECKOUT = 'PROCESS_CHECKOUT';
var LOAD_ITEMS = 'LOAD_ITEMS';
var LOAD_ITEMS_FULFILLED = 'LOAD_ITEMS_FULFILLED';
var LOAD_ITEMS_REJECTED = 'LOAD_ITEMS_REJECTED';
var SHOW_BUSY = "SHOW_BUSY";
var APPEND_DATA = 'APPEND_DATA';
var APPEND_DATA_FULFILLED = 'APPEND_DATA_FULFILLED';
var APPEND_DATA_REJECTED = 'APPEND_DATA_REJECTED';
var UPDATE_DATA = 'UPDATE_DATA';
var UPDATE_DATA_FULFILLED = 'UPDATE_DATA_FULFILLED';
var UPDATE_DATA_REJECTED = 'UPDATE_DATA_REJECTED';
var LOG_DATA = 'LOG_DATA';
var CLEAR_LOG = 'CLEAR_LOG';
var CANCEL = 'CANCEL';
var CLEAR_ERROR = 'CLEAR_ERROR';
var SET_LAST_ID = 'SET_LAST_ID';
var SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

/***/ }),

/***/ "./src/actions.ts":
/*!************************!*\
  !*** ./src/actions.ts ***!
  \************************/
/*! exports provided: ProcessFetchData, ProcessAppendData, ProcessLog, ProcessUpdateData, CreateCheck, ProcessCheckout, ProcessPartnersOrderSubmit, Checkout, AddDrink, AddDessert, DeleteDrink, DeleteDessert, SetPaymentType, SetOrderType, itemsHasErrored, itemsIsLoading, itemsFetchDataSuccess, itemsAppendSuccess, itemsAppendErrored, ShowBusy, LogData, ClearLog, Cancel, ClearError, SetLastId, ShowNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessFetchData", function() { return ProcessFetchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessAppendData", function() { return ProcessAppendData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessLog", function() { return ProcessLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessUpdateData", function() { return ProcessUpdateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCheck", function() { return CreateCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessCheckout", function() { return ProcessCheckout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPartnersOrderSubmit", function() { return ProcessPartnersOrderSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDrink", function() { return AddDrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDessert", function() { return AddDessert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDrink", function() { return DeleteDrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDessert", function() { return DeleteDessert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPaymentType", function() { return SetPaymentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetOrderType", function() { return SetOrderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsHasErrored", function() { return itemsHasErrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsIsLoading", function() { return itemsIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsFetchDataSuccess", function() { return itemsFetchDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsAppendSuccess", function() { return itemsAppendSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsAppendErrored", function() { return itemsAppendErrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowBusy", function() { return ShowBusy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogData", function() { return LogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearLog", function() { return ClearLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cancel", function() { return Cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearError", function() { return ClearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLastId", function() { return SetLastId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowNotification", function() { return ShowNotification; });
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./src/actionTypes.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/types */ "./src/utils/types.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined;

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





var ProcessFetchData = function ProcessFetchData(spreadsheetId) {
    return function (dispatch) {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            var dessertsResponse, drinksResponse, lastDessertOrderId, lastDrinkOrderId, lastId, lastOrder, lastOrderPayment, lastOrderType;
            return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            dispatch(itemsIsLoading(true));
                            _context.prev = 1;
                            _context.next = 4;
                            return window['gapi'].client.sheets.spreadsheets.values.get({
                                spreadsheetId: spreadsheetId,
                                range: "RawDessertsData!A:H"
                            });

                        case 4:
                            dessertsResponse = _context.sent;
                            _context.next = 7;
                            return window['gapi'].client.sheets.spreadsheets.values.get({
                                spreadsheetId: spreadsheetId,
                                range: "RawDrinksData!A:F"
                            });

                        case 7:
                            drinksResponse = _context.sent;
                            lastDessertOrderId = Math.max.apply(Math, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(dessertsResponse.result.values.slice(1).map(function (d) {
                                return d[7] ? Number(d[7]) : 0;
                            })));
                            lastDrinkOrderId = Math.max.apply(Math, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(drinksResponse.result.values.slice(1).map(function (d) {
                                return d[5] ? Number(d[5]) : 0;
                            })));
                            lastId = Math.max(lastDessertOrderId, lastDrinkOrderId);
                            lastOrder = {
                                id: lastId,
                                desserts: [],
                                drinks: [],
                                isFinished: true,
                                payment: _utils_types__WEBPACK_IMPORTED_MODULE_4__["Payment"].Other,
                                type: _utils_types__WEBPACK_IMPORTED_MODULE_4__["OrderType"].Other
                            };
                            lastOrderPayment = null;
                            lastOrderType = null;

                            lastOrder.desserts = dessertsResponse.result.values.slice(1).filter(function (v) {
                                return v[7] === lastId.toString();
                            }).map(function (d) {
                                lastOrderPayment = d[4] === 'Наличка' ? _utils_types__WEBPACK_IMPORTED_MODULE_4__["Payment"].Cash : _utils_types__WEBPACK_IMPORTED_MODULE_4__["Payment"].Card;
                                lastOrderType = d[5] === 'Витрина' ? _utils_types__WEBPACK_IMPORTED_MODULE_4__["OrderType"].Shop : _utils_types__WEBPACK_IMPORTED_MODULE_4__["OrderType"].PreOrder;
                                var dessert = {
                                    type: d[0],
                                    taste: d[1],
                                    quantity: d[2],
                                    size: d[3]
                                };
                                return dessert;
                            });
                            lastOrder.drinks = drinksResponse.result.values.slice(1).filter(function (v) {
                                return v[5] === lastId.toString();
                            }).map(function (d) {
                                lastOrderPayment = d[2] === 'Наличка' ? _utils_types__WEBPACK_IMPORTED_MODULE_4__["Payment"].Cash : _utils_types__WEBPACK_IMPORTED_MODULE_4__["Payment"].Card;
                                lastOrderType = d[3] === 'Витрина' ? _utils_types__WEBPACK_IMPORTED_MODULE_4__["OrderType"].Shop : _utils_types__WEBPACK_IMPORTED_MODULE_4__["OrderType"].PreOrder;
                                var dessert = {
                                    id: d[0],
                                    size: d[1]
                                };
                                return dessert;
                            });
                            lastOrder.payment = lastOrderPayment;
                            lastOrder.type = lastOrderType;
                            dispatch(SetLastId(lastId, lastOrder));
                            // dispatch(itemsFetchDataSuccess([...desserts, ...drinks]));
                            _context.next = 26;
                            break;

                        case 21:
                            _context.prev = 21;
                            _context.t0 = _context["catch"](1);

                            dispatch(itemsHasErrored(true));
                            console.log(_context.t0);
                            throw Error(_context.t0);

                        case 26:
                            _context.prev = 26;

                            dispatch(itemsIsLoading(false));
                            return _context.finish(26);

                        case 29:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this, [[1, 21, 26, 29]]);
        }));
    };
};
var ProcessAppendData = function ProcessAppendData(spreadsheetId, range, valueRange) {
    return function (dispatch) {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
            var response;
            return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            dispatch(itemsIsLoading(true));
                            _context2.prev = 1;
                            _context2.next = 4;
                            return window['gapi'].client.sheets.spreadsheets.values.append({
                                spreadsheetId: spreadsheetId,
                                range: range,
                                valueInputOption: _utils_types__WEBPACK_IMPORTED_MODULE_4__["ValueInputOption"].USER_ENTERED,
                                insertDataOption: _utils_types__WEBPACK_IMPORTED_MODULE_4__["InsertDataOption"].OVERWRITE,
                                includeValuesInResponse: true,
                                responseValueRenderOption: _utils_types__WEBPACK_IMPORTED_MODULE_4__["ValueRenderOption"].FORMATTED_VALUE
                            }, { values: valueRange });

                        case 4:
                            response = _context2.sent;

                            // const updatedCellsCount = await response.result.updates.updatedCells;            
                            dispatch(itemsAppendSuccess(true));
                            _context2.next = 13;
                            break;

                        case 8:
                            _context2.prev = 8;
                            _context2.t0 = _context2["catch"](1);

                            dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
                            console.log(_context2.t0);
                            throw Error(_context2.t0);

                        case 13:
                            _context2.prev = 13;

                            dispatch(itemsIsLoading(false));
                            return _context2.finish(13);

                        case 16:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[1, 8, 13, 16]]);
        }));
    };
};
var ProcessLog = function ProcessLog(message) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var dateTime, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        dateTime = new Date();
                        data = [[message, dateTime.toUTCString()]];
                        _context3.next = 5;
                        return window['gapi'].client.sheets.spreadsheets.values.append({
                            spreadsheetId: _config__WEBPACK_IMPORTED_MODULE_5__["LOGS_SPREADSHEET_ID"],
                            range: 'A:B',
                            valueInputOption: _utils_types__WEBPACK_IMPORTED_MODULE_4__["ValueInputOption"].USER_ENTERED,
                            insertDataOption: _utils_types__WEBPACK_IMPORTED_MODULE_4__["InsertDataOption"].OVERWRITE,
                            includeValuesInResponse: true,
                            responseValueRenderOption: _utils_types__WEBPACK_IMPORTED_MODULE_4__["ValueRenderOption"].FORMATTED_VALUE
                        }, { values: data });

                    case 5:
                        _context3.next = 11;
                        break;

                    case 7:
                        _context3.prev = 7;
                        _context3.t0 = _context3["catch"](0);

                        console.log(_context3.t0);
                        throw Error(_context3.t0);

                    case 11:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 7]]);
    }));
};
var ProcessUpdateData = function ProcessUpdateData(spreadsheetId, valueRange) {
    return function (dispatch) {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
            var response, items;
            return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            dispatch(itemsIsLoading(true));
                            _context4.prev = 1;
                            _context4.next = 4;
                            return window['gapi'].client.sheets.spreadsheets.values.update({
                                spreadsheetId: spreadsheetId,
                                range: 'A6:D10',
                                valueInputOption: _utils_types__WEBPACK_IMPORTED_MODULE_4__["ValueInputOption"].USER_ENTERED,
                                includeValuesInResponse: true,
                                responseValueRenderOption: _utils_types__WEBPACK_IMPORTED_MODULE_4__["ValueRenderOption"].FORMATTED_VALUE,
                                responseDateTimeRenderOption: _utils_types__WEBPACK_IMPORTED_MODULE_4__["DateTimeRenderOption"].FORMATTED_STRING
                            }, { values: valueRange });

                        case 4:
                            response = _context4.sent;
                            _context4.next = 7;
                            return response.result.values;

                        case 7:
                            items = _context4.sent;

                            dispatch(itemsFetchDataSuccess(items));
                            _context4.next = 16;
                            break;

                        case 11:
                            _context4.prev = 11;
                            _context4.t0 = _context4["catch"](1);

                            dispatch(itemsHasErrored(true));
                            console.log(_context4.t0);
                            throw Error(_context4.t0);

                        case 16:
                            _context4.prev = 16;

                            dispatch(itemsIsLoading(false));
                            return _context4.finish(16);

                        case 19:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this, [[1, 11, 16, 19]]);
        }));
    };
};
var CreateCheck = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["CREATE_CHECK"]);
var ProcessCheckout = function ProcessCheckout() {
    return function (dispatch, getState) {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
            var _this2 = this;

            var state, check, log, drinksRange, drinksData, dessertsRange, dessertsData;
            return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            dispatch(itemsIsLoading(true));
                            _context7.prev = 1;
                            state = getState();
                            check = state.check;
                            log = state.log;
                            drinksRange = "RawDrinksData!A:F";
                            drinksData = [];

                            check.drinks.forEach(function (d) {
                                return __awaiter(_this2, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
                                    var dateTime, data;
                                    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                                        while (1) {
                                            switch (_context5.prev = _context5.next) {
                                                case 0:
                                                    dateTime = moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('DD.MM.YYYY HH:mm');
                                                    data = [d.id, d.size, check.payment, check.type, dateTime, check.id];

                                                    drinksData.push(data);

                                                case 3:
                                                case "end":
                                                    return _context5.stop();
                                            }
                                        }
                                    }, _callee5, this);
                                }));
                            });

                            if (!drinksData.length) {
                                _context7.next = 11;
                                break;
                            }

                            _context7.next = 11;
                            return dispatch(ProcessAppendData(_config__WEBPACK_IMPORTED_MODULE_5__["SPREADSHEET_ID"], drinksRange, drinksData));

                        case 11:
                            dessertsRange = "RawDessertsData!A:H";
                            dessertsData = [];

                            check.desserts.forEach(function (d) {
                                return __awaiter(_this2, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
                                    var dateTime, data;
                                    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                                        while (1) {
                                            switch (_context6.prev = _context6.next) {
                                                case 0:
                                                    dateTime = moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('DD.MM.YYYY HH:mm');
                                                    data = [d.type, d.taste, d.quantity, d.size, check.payment, check.type, dateTime, check.id];

                                                    dessertsData.push(data);

                                                case 3:
                                                case "end":
                                                    return _context6.stop();
                                            }
                                        }
                                    }, _callee6, this);
                                }));
                            });

                            if (!dessertsData.length) {
                                _context7.next = 17;
                                break;
                            }

                            _context7.next = 17;
                            return dispatch(ProcessAppendData(_config__WEBPACK_IMPORTED_MODULE_5__["SPREADSHEET_ID"], dessertsRange, dessertsData));

                        case 17:
                            dispatch(Checkout());
                            _context7.next = 20;
                            return dispatch(ShowNotification(0, 'Заказ сохранён!'));

                        case 20:
                            _context7.next = 22;
                            return ProcessLog(log);

                        case 22:
                            _context7.next = 24;
                            return ProcessLog(JSON.stringify(check));

                        case 24:
                            dispatch(ClearLog());
                            _context7.next = 32;
                            break;

                        case 27:
                            _context7.prev = 27;
                            _context7.t0 = _context7["catch"](1);

                            dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
                            console.log(_context7.t0);
                            throw Error(_context7.t0);

                        case 32:
                            _context7.prev = 32;

                            dispatch(itemsIsLoading(false));
                            return _context7.finish(32);

                        case 35:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, this, [[1, 27, 32, 35]]);
        }));
    };
};
var ProcessPartnersOrderSubmit = function ProcessPartnersOrderSubmit(partner, macQty, zepQty) {
    return function (dispatch) {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
            var partnersRange, partnersData;
            return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            dispatch(itemsIsLoading(true));
                            _context8.prev = 1;
                            partnersRange = "RawPartnersData!A:D";
                            partnersData = [[partner, macQty, zepQty, moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('DD.MM.YYYY HH:mm')]];
                            _context8.next = 6;
                            return dispatch(ProcessAppendData(_config__WEBPACK_IMPORTED_MODULE_5__["SPREADSHEET_ID"], partnersRange, partnersData));

                        case 6:
                            _context8.next = 8;
                            return ProcessLog(JSON.stringify(partnersData));

                        case 8:
                            _context8.next = 10;
                            return dispatch(ShowNotification(0, 'Заказ сохранён!'));

                        case 10:
                            _context8.next = 17;
                            break;

                        case 12:
                            _context8.prev = 12;
                            _context8.t0 = _context8["catch"](1);

                            dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
                            console.log(_context8.t0);
                            throw Error(_context8.t0);

                        case 17:
                            _context8.prev = 17;

                            dispatch(itemsIsLoading(false));
                            return _context8.finish(17);

                        case 20:
                        case "end":
                            return _context8.stop();
                    }
                }
            }, _callee8, this, [[1, 12, 17, 20]]);
        }));
    };
};
var Checkout = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PROCESS_CHECKOUT"]);
var AddDrink = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["ADD_DRINK"], function (type, size) {
    return [type, size];
});
var AddDessert = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["ADD_DESSERT"], function (type, taste, size, quantity) {
    return [type, taste, size, quantity];
});
var DeleteDrink = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DELETE_DRINK"], function (type, size) {
    return [type, size];
});
var DeleteDessert = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DELETE_DESSERT"], function (type, taste, size) {
    return [type, taste, size];
});
var SetPaymentType = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_PAYMENT_TYPE"], function (type) {
    return type;
});
var SetOrderType = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_ORDER_TYPE"], function (type) {
    return type;
});
var itemsHasErrored = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["LOAD_ITEMS_REJECTED"], function (hasErrored) {
    return hasErrored;
});
var itemsIsLoading = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["LOAD_ITEMS"], function (isLoading) {
    return isLoading;
});
var itemsFetchDataSuccess = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["LOAD_ITEMS_FULFILLED"], function (items) {
    return items;
});
var itemsAppendSuccess = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["APPEND_DATA_FULFILLED"], function (success) {
    return success;
});
var itemsAppendErrored = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["APPEND_DATA_REJECTED"], function (text) {
    return text;
});
var ShowBusy = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["SHOW_BUSY"], function (isBusy) {
    return isBusy;
});
var LogData = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["LOG_DATA"], function (text) {
    return text;
});
var ClearLog = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["CLEAR_LOG"]);
var Cancel = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["CANCEL"]);
var ClearError = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["CLEAR_ERROR"]);
var SetLastId = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_LAST_ID"], function (lastId, lastCheck) {
    return [lastId, lastCheck];
});
var ShowNotification = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["SHOW_NOTIFICATION"], function (type, message) {
    return [type, message];
});

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_MainPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/MainPage */ "./src/pages/MainPage.tsx");
/* harmony import */ var _pages_CheckPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/CheckPage */ "./src/pages/CheckPage.tsx");
/* harmony import */ var _pages_CheckoutPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/CheckoutPage */ "./src/pages/CheckoutPage.tsx");
/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/NotFoundPage */ "./src/pages/NotFoundPage.tsx");
/* harmony import */ var _pages_PartnersPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/PartnersPage */ "./src/pages/PartnersPage.tsx");
/* harmony import */ var _components_TestComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/TestComponent */ "./src/components/TestComponent.tsx");
/* harmony import */ var react_async_script_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-async-script-loader */ "./node_modules/react-async-script-loader/lib/index.js");
/* harmony import */ var react_async_script_loader__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_async_script_loader__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/AppBar */ "./src/components/AppBar/index.tsx");
















var Main = function Main() {
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], { exact: true, path: '/', component: _pages_MainPage__WEBPACK_IMPORTED_MODULE_6__["default"] }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], { path: '/check', component: _pages_CheckPage__WEBPACK_IMPORTED_MODULE_7__["default"] }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], { path: '/checkOut', component: _pages_CheckoutPage__WEBPACK_IMPORTED_MODULE_8__["default"] }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], { path: '/partners', component: _pages_PartnersPage__WEBPACK_IMPORTED_MODULE_10__["default"] }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], { path: '/test', component: _components_TestComponent__WEBPACK_IMPORTED_MODULE_11__["default"] }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], { component: _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_9__["default"] }));
};

var App = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(App, _Component);

    function App(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.initClient = function () {
            // const auth2 = window['gapi'].auth2.init({
            //     client_id: CLIENT_ID,
            //     scope: SCOPES,
            //     discoveryDocs: DISCOVERY_DOCS,
            //     apiKey: API_KEY,
            // });
            // auth2.isSignedIn.listen(this.signinChanged);
            window['gapi'].client.init({
                apiKey: _config__WEBPACK_IMPORTED_MODULE_13__["API_KEY"],
                clientId: _config__WEBPACK_IMPORTED_MODULE_13__["CLIENT_ID"],
                discoveryDocs: _config__WEBPACK_IMPORTED_MODULE_13__["DISCOVERY_DOCS"],
                scope: _config__WEBPACK_IMPORTED_MODULE_13__["SCOPES"]
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

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var isScriptLoaded = nextProps.isScriptLoaded;

            if (isScriptLoaded && !this.props.isScriptLoaded) {
                window['gapi'].load('client:auth2', this.initClient);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var isSignedIn = this.state.isSignedIn;

            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_AppBar__WEBPACK_IMPORTED_MODULE_14__["default"], { title: 'ONI', isSignedIn: isSignedIn, onLoginClick: this.handleAuthClick, onLogoutClick: this.handleSignoutClick }), isSignedIn && react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Main, null));
        }
    }]);

    return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (react_async_script_loader__WEBPACK_IMPORTED_MODULE_12___default()('https://apis.google.com/js/api.js')(App));

/***/ }),

/***/ "./src/components/AppBar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/AppBar/index.tsx ***!
  \*****************************************/
/*! exports provided: AppBar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return AppBar; });
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./src/components/AppBar/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/Menu/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
















var options = [{
    title: 'Домой',
    route: '/'
}];
var ITEM_HEIGHT = 48;
var AppBar = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(AppBar, _Component);

    function AppBar(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AppBar);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (AppBar.__proto__ || Object.getPrototypeOf(AppBar)).call(this, props));

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
            var _this$props = _this.props,
                isSignedIn = _this$props.isSignedIn,
                onLoginClick = _this$props.onLoginClick,
                onLogoutClick = _this$props.onLogoutClick;

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

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AppBar, [{
        key: 'renderMenu',
        value: function renderMenu() {
            var _this2 = this;

            var anchorEl = this.state.anchorEl;

            var open = Boolean(anchorEl);
            var currentRoute = location.hash.slice(1);
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, { className: 'appbar_menuButton', color: "inherit", "aria-label": "Menu", "aria-owns": open ? 'long-menu' : null, "aria-haspopup": "true", onClick: this.handleClick }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, null)), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, { id: "long-menu", anchorEl: anchorEl, open: open, onClose: this.handleClose, PaperProps: {
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200
                    }
                } }, options.map(function (option) {
                return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12___default.a, { key: option.title, selected: option.route === currentRoute, onClick: function onClick() {
                        return _this2.handleClose(option);
                    } }, option.title);
            })));
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                isSignedIn = _props.isSignedIn;

            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'appbar_root' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, { position: "static" }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, null, this.renderMenu(), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, { variant: "title", color: "inherit", className: 'appbar_grow' }, title), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, { color: "inherit", onClick: this.handleLoginClick }, isSignedIn ? 'Выйти' : 'Войти'))));
        }
    }]);

    return AppBar;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(AppBar));

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
/*! exports provided: Busy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Busy", function() { return Busy; });
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Busy = function Busy(props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "busy-container" + (props.loading ? "" : " invisible") }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "busy" }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_spinners__WEBPACK_IMPORTED_MODULE_0__["GridLoader"], { color: '#d0006f', loading: props.loading })));
};

/***/ }),

/***/ "./src/components/DessertsComponent.tsx":
/*!**********************************************!*\
  !*** ./src/components/DessertsComponent.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./src/actions.ts");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
/* harmony import */ var _utils_dictionaries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/dictionaries */ "./src/utils/dictionaries.ts");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__);





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
















var MIX_TASTE_NAME = 'Набор';
var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        addDessert: function addDessert(type, taste, size, quantity) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["AddDessert"])(type, taste, size, quantity));
        },
        logData: function logData(text) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["LogData"])(text));
        }
    };
};

var DessertsComponent = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DessertsComponent, _Component);

    function DessertsComponent(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DessertsComponent);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (DessertsComponent.__proto__ || Object.getPrototypeOf(DessertsComponent)).call(this, props));

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
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var dessertType;
                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                dessertType = this.state.dessertType;

                                if (dessertType === _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Cake) {
                                    this.setState({
                                        dessertTaste: taste
                                    });
                                    this.props.logData('desserts->dessertTasteSelected->' + taste);
                                } else {
                                    this.handleDessertIncrease(taste);
                                }

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
        _this.handleDessertMixSelect = function (qty) {
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.handleDessertIncrease(MIX_TASTE_NAME, qty);
                                // await this.props.addDessert(dessertType, MIX_TASTE_NAME, null, qty);
                                this.props.logData('desserts->handleDessertMixSelect->' + qty);

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        };
        _this.handleDessertSizeOrQuantitySelect = function (sizeOrQty) {
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                var _state, dessertType, dessertTaste;

                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _state = this.state, dessertType = _state.dessertType, dessertTaste = _state.dessertTaste;

                                if (!(dessertType === _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Cake)) {
                                    _context3.next = 8;
                                    break;
                                }

                                _context3.next = 4;
                                return this.props.addDessert(dessertType, dessertTaste, sizeOrQty, 1);

                            case 4:
                                this.props.handleClose();
                                this.props.logData('desserts->dessertSizeSelected->' + sizeOrQty);
                                _context3.next = 12;
                                break;

                            case 8:
                                _context3.next = 10;
                                return this.props.addDessert(dessertType, dessertTaste, null, sizeOrQty);

                            case 10:
                                this.props.handleClose();
                                this.props.logData('desserts->dessertQuantitySelected->' + sizeOrQty);

                            case 12:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        };
        _this.handleFinish = function () {
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
                var _state2, dessertType, dessertQuantities, key, dessertTaste, qty;

                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _state2 = this.state, dessertType = _state2.dessertType, dessertQuantities = _state2.dessertQuantities;
                                _context4.t0 = babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(dessertQuantities);

                            case 2:
                                if ((_context4.t1 = _context4.t0()).done) {
                                    _context4.next = 11;
                                    break;
                                }

                                key = _context4.t1.value;
                                dessertTaste = key.split('/')[1];
                                qty = dessertQuantities[key];

                                if (!qty) {
                                    _context4.next = 9;
                                    break;
                                }

                                _context4.next = 9;
                                return this.props.addDessert(dessertType, dessertTaste, null, qty || 0);

                            case 9:
                                _context4.next = 2;
                                break;

                            case 11:
                                this.props.handleClose();
                                this.props.logData('desserts->handleFinish');

                            case 13:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        };
        _this.handleDessertIncrease = function (taste) {
            var qty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var _this$state = _this.state,
                dessertQuantities = _this$state.dessertQuantities,
                dessertType = _this$state.dessertType;

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
        _this.handleDessertDecrease = function (taste) {
            var qty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var _this$state2 = _this.state,
                dessertQuantities = _this$state2.dessertQuantities,
                dessertType = _this$state2.dessertType;

            var id = _this.getId(dessertType, taste);
            if (dessertQuantities[id]) {
                dessertQuantities[id] -= qty;
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

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DessertsComponent, [{
        key: 'getId',
        value: function getId(dessertType, dessertTaste) {
            return dessertType + '/' + dessertTaste;
        }
    }, {
        key: 'countTotalDessertQuantity',
        value: function countTotalDessertQuantity() {
            var _state3 = this.state,
                dessertQuantities = _state3.dessertQuantities,
                dessertType = _state3.dessertType;

            var result = 0;
            for (var key in dessertQuantities) {
                if (key.startsWith(dessertType)) {
                    result += dessertQuantities[key];
                }
            }
            return result;
        }
    }, {
        key: 'getArrayFromEnum',
        value: function getArrayFromEnum(en) {
            var keys = Object.keys(en);
            var values = keys.map(function (d) {
                return {
                    id: d,
                    value: en[d]
                };
            });
            return values;
        }
    }, {
        key: 'renderDesserts',
        value: function renderDesserts() {
            var _this2 = this;

            var dessertKeys = Object.keys(_utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"]);
            var desserts = dessertKeys.map(function (d) {
                return {
                    id: d,
                    value: _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"][d]
                };
            });
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, null, desserts.map(function (d) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, { button: true, onClick: function onClick() {
                        return _this2.handleDessertSelect(d.value);
                    }, key: d.id }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a, { className: 'macaronAvatar', style: { backgroundColor: '#dd73e2' } }, d.value.charAt(0).toUpperCase())), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, { primary: d.value }));
            }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: 'buttonApplyWraper' }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19___default.a, { variant: "contained", color: "secondary", onClick: this.handleClose }, '\u041E\u0442\u043C\u0435\u043D\u0430'))));
        }
    }, {
        key: 'renderDessertTastes',
        value: function renderDessertTastes() {
            var _this3 = this;

            var _state4 = this.state,
                dessertType = _state4.dessertType,
                dessertQuantities = _state4.dessertQuantities;

            var dessertTastes = void 0;
            var extraOptions = [];
            switch (dessertType) {
                case _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Cake:
                    dessertTastes = this.getArrayFromEnum(_utils_types__WEBPACK_IMPORTED_MODULE_14__["CakesEnum"]);
                    break;
                case _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Macaron:
                    dessertTastes = this.getArrayFromEnum(_utils_types__WEBPACK_IMPORTED_MODULE_14__["MacaronsEnum"]);
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
                case _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Zephyr:
                    dessertTastes = this.getArrayFromEnum(_utils_types__WEBPACK_IMPORTED_MODULE_14__["ZephyrEnum"]);
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
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: 'dessertsTastesWrapper' }, dessertType !== _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Cake && react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: 'buttonApplyWraper' }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19___default.a, { variant: "contained", color: "primary", title: "Check Out", onClick: this.handleFinish }, '\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C')), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, { className: 'dessertsTastesListWrapper' }, dessertTastes.map(function (d) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, { button: true, onClick: function onClick() {
                        return _this3.handleDessertTasteSelect(d.value);
                    }, key: d.id }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a, { className: 'macaronAvatar', style: { backgroundColor: dessertType === _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Macaron ? _utils_dictionaries__WEBPACK_IMPORTED_MODULE_15__["MacaronsColors"][d.value] : _utils_dictionaries__WEBPACK_IMPORTED_MODULE_15__["ZephyrColors"][d.value] } }, d.value.charAt(0).toUpperCase())), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, { primary: d.value + (dessertType !== _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Cake ? '(' + (dessertQuantities[_this3.getId(dessertType, d.value)] || 0) + ')' : '') }), dessertType !== _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Cake && react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, { "aria-label": "Add", onClick: function onClick() {
                        return _this3.handleDessertDecrease(d.value);
                    } }, '\u2014')));
            }), extraOptions.map(function (o) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, { button: true, onClick: function onClick() {
                        return _this3.handleDessertMixSelect(o.value);
                    }, key: o.value }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a, { className: 'macaronAvatar', style: { backgroundColor: '#dd73e2' } }, o.value)), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, { primary: o.title + '(' + (dessertQuantities[_this3.getId(dessertType, MIX_TASTE_NAME)] || 0) + ')' }));
            })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: 'buttonCancelWraper' }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19___default.a, { variant: "contained", color: "secondary", onClick: this.handleClose }, '\u041E\u0442\u043C\u0435\u043D\u0430')));
        }
    }, {
        key: 'renderDessertSize',
        value: function renderDessertSize() {
            var _this4 = this;

            var dessertType = this.state.dessertType;

            var dessertSizes = _utils_dictionaries__WEBPACK_IMPORTED_MODULE_15__["DessertsDict"][dessertType];
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, null, dessertSizes.map(function (d) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, { button: true, onClick: function onClick() {
                        return _this4.handleDessertSizeOrQuantitySelect(d);
                    }, key: d }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a, { className: 'avatar' }, "+")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, { primary: d }));
            }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: 'buttonApplyWraper' }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19___default.a, { variant: "contained", color: "secondary", onClick: this.handleClose }, '\u041E\u0442\u043C\u0435\u043D\u0430'))));
        }
    }, {
        key: 'render',
        value: function render() {
            var _state5 = this.state,
                dessertType = _state5.dessertType,
                dessertTaste = _state5.dessertTaste;

            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13___default.a, { onClose: this.handleClose, "aria-labelledby": "simple-dialog-title", open: true, fullScreen: true }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default.a, { id: "simple-dialog-title" }, !dessertType ? 'Выберите Десерт' : !dessertTaste ? '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u043A\u0443\u0441 (' + this.countTotalDessertQuantity() + ')' : 'Выберите размер'), !dessertType ? this.renderDesserts() : !dessertTaste ? this.renderDessertTastes() : this.renderDessertSize());
        }
    }]);

    return DessertsComponent;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(DessertsComponent));

/***/ }),

/***/ "./src/components/DrinksComponent.tsx":
/*!********************************************!*\
  !*** ./src/components/DrinksComponent.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./src/actions.ts");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
/* harmony import */ var _utils_dictionaries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/dictionaries */ "./src/utils/dictionaries.ts");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__);





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














var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        addDrink: function addDrink(type, size) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["AddDrink"])(type, size));
        },
        logData: function logData(text) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["LogData"])(text));
        }
    };
};

var DrinksComponent = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DrinksComponent, _Component);

    function DrinksComponent(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DrinksComponent);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (DrinksComponent.__proto__ || Object.getPrototypeOf(DrinksComponent)).call(this, props));

        _this.handleClose = function () {
            _this.props.handleClose();
            _this.props.logData('drinks->close');
        };
        _this.handleDrinkSelect = function (drink) {
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var drinkSizes;
                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                drinkSizes = _utils_dictionaries__WEBPACK_IMPORTED_MODULE_15__["DrinksDict"][drink];

                                if (!(drinkSizes && drinkSizes.length === 1)) {
                                    _context.next = 9;
                                    break;
                                }

                                this.setState({
                                    drinkType: drink,
                                    drinkSize: drinkSizes[0]
                                });
                                _context.next = 5;
                                return this.props.addDrink(drink, drinkSizes[0]);

                            case 5:
                                this.props.handleClose();
                                this.props.logData('drinks->drinkSelected->' + drink + '->drinkSizeSelected->' + drinkSizes[0]);
                                _context.next = 11;
                                break;

                            case 9:
                                this.setState({
                                    drinkType: drink
                                });
                                this.props.logData('drinks->drinkSelected->' + drink);

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
        _this.handleDrinkSizeSelect = function (drinkSize) {
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                var drinkType;
                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.setState({
                                    drinkSize: drinkSize
                                });
                                drinkType = this.state.drinkType;
                                _context2.next = 4;
                                return this.props.addDrink(drinkType, drinkSize);

                            case 4:
                                this.props.handleClose();
                                this.props.logData('drinks->drinkSizeSelected->' + drinkSize);

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        };
        _this.state = {
            drinkType: null,
            drinkSize: null
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DrinksComponent, [{
        key: 'renderDrinks',
        value: function renderDrinks() {
            var _this2 = this;

            var drinkKeys = Object.keys(_utils_types__WEBPACK_IMPORTED_MODULE_14__["DrinksType"]);
            var drinks = drinkKeys.map(function (d) {
                return {
                    id: d,
                    value: _utils_types__WEBPACK_IMPORTED_MODULE_14__["DrinksType"][d]
                };
            });
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: 'drinksWrapper' }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, { className: 'drinksListWrapper' }, drinks.map(function (d) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, { button: true, onClick: function onClick() {
                        return _this2.handleDrinkSelect(d.value);
                    }, key: d.id }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a, { className: 'drinkAvatar' }, d.value.charAt(0).toUpperCase())), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, { primary: d.value }));
            })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: 'buttonApplyWraper' }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, { variant: "contained", color: "secondary", onClick: this.handleClose }, '\u041E\u0442\u043C\u0435\u043D\u0430')));
        }
    }, {
        key: 'renderDrinkSizes',
        value: function renderDrinkSizes() {
            var _this3 = this;

            var drinkType = this.state.drinkType;

            var drinkSizes = _utils_dictionaries__WEBPACK_IMPORTED_MODULE_15__["DrinksDict"][drinkType];
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, null, drinkSizes.map(function (d) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, { button: true, onClick: function onClick() {
                        return _this3.handleDrinkSizeSelect(d);
                    }, key: d }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a, { className: 'drinkAvatar' }, d.charAt(0).toUpperCase())), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, { primary: d }));
            }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: 'buttonApplyWraper' }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, { variant: "contained", color: "secondary", onClick: this.handleClose }, '\u041E\u0442\u043C\u0435\u043D\u0430'))));
        }
    }, {
        key: 'render',
        value: function render() {
            var drinkType = this.state.drinkType;

            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13___default.a, { onClose: this.handleClose, "aria-labelledby": "simple-dialog-title", open: true, fullScreen: true }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default.a, { id: "simple-dialog-title" }, !drinkType ? 'Выберите напиток' : 'Выберите размер'), !drinkType ? this.renderDrinks() : this.renderDrinkSizes());
        }
    }]);

    return DrinksComponent;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(DrinksComponent));

/***/ }),

/***/ "./src/components/HistoryComponent.tsx":
/*!*********************************************!*\
  !*** ./src/components/HistoryComponent.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__);















var mapStateToProps = function mapStateToProps(state) {
    return {
        history: state.history
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

var HistoryComponent = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(HistoryComponent, _Component);

    function HistoryComponent() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HistoryComponent);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (HistoryComponent.__proto__ || Object.getPrototypeOf(HistoryComponent)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HistoryComponent, [{
        key: 'render',
        value: function render() {
            var history = this.props.history;

            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default.a, { component: "nav" }, history.sort(function (a, b) {
                return a.id > b.id ? -1 : b.id > a.id ? 1 : 0;
            }).map(function (h) {
                return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default.a, { key: h.id }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_8___default.a, { className: 'historyContainer' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_9___default.a, { expandIcon: react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12___default.a, null) }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, null, '\u0427\u0435\u043A #' + h.id)), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10___default.a, { style: { flexDirection: 'column' } }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, { variant: 'subheading' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("b", null, '\u0414\u0435\u0441\u0435\u0440\u0442\u044B')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'historyItemRow' }, h.desserts.map(function (d, index) {
                    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, { key: index, variant: 'subheading' }, d.type + ' ' + d.taste + ': ' + (d.quantity ? d.quantity : d.size));
                })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, { variant: 'subheading' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("b", null, '\u041D\u0430\u043F\u0438\u0442\u043A\u0438')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'historyItemRow' }, h.drinks.map(function (d, index) {
                    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, { key: index, variant: 'subheading' }, d.id + ': ' + d.size);
                })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'historyItemRow' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, { variant: 'subheading' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("b", null, '\u0422\u0438\u043F \u043E\u043F\u043B\u0430\u0442\u044B: '), h.payment)), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'historyItemRow' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, { variant: 'subheading' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("b", null, '\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430: '), h.type)))));
            }));
        }
    }]);

    return HistoryComponent;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(HistoryComponent));

/***/ }),

/***/ "./src/components/LargeButton/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/LargeButton/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.js */ "./src/components/LargeButton/styles.js");





var LargeButton = function LargeButton(props) {
    var classes = props.classes,
        component = props.component,
        onClick = props.onClick,
        title = props.title,
        imageUrl = props.imageUrl;

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classes.root, onClick: onClick }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2___default.a, { focusRipple: true, key: 'main', className: classes.image, component: component, focusVisibleClassName: classes.focusVisible, style: {
            width: '30'
        } }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classes.imageSrc, style: {
            backgroundImage: 'url(' + imageUrl + ')'
        } }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classes.imageBackdrop }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classes.imageButton }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", variant: "subheading", color: "inherit", className: classes.imageTitle }, title, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classes.imageMarked })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_styles_js__WEBPACK_IMPORTED_MODULE_4__["default"])(LargeButton));

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
        height: '30vh'
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DrinksComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DrinksComponent */ "./src/components/DrinksComponent.tsx");
/* harmony import */ var _DessertsComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DessertsComponent */ "./src/components/DessertsComponent.tsx");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _LargeButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LargeButton */ "./src/components/LargeButton/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../actions */ "./src/actions.ts");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.ts");






















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
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_19__["DeleteDessert"])(type, taste, size));
        },
        deleteDrink: function deleteDrink(type, size) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_19__["DeleteDrink"])(type, size));
        }
    };
};

var NewOrderComponent = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(NewOrderComponent, _Component);

    function NewOrderComponent(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NewOrderComponent);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (NewOrderComponent.__proto__ || Object.getPrototypeOf(NewOrderComponent)).call(this, props));

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

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NewOrderComponent, [{
        key: 'calculatePrice',
        value: function calculatePrice() {
            var check = this.props.check;

            return _utils_helper__WEBPACK_IMPORTED_MODULE_20__["default"].calculatePrice(check);
        }
    }, {
        key: 'renderCheckContent',
        value: function renderCheckContent() {
            var _this2 = this;

            var check = this.props.check;

            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "checkoutControlGroup" }, '\u0418\u0442\u043E\u0433\u043E: ', this.calculatePrice(), ' \u0433\u0440\u043D.'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9___default.a, { component: "nav" }, check.drinks.map(function (d, index) {
                return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10___default.a, { button: true, key: index }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, { inset: true, primary: d.id + ' - ' + d.size }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17___default.a, null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, { "aria-label": "Delete", onClick: function onClick() {
                        return _this2.handleDeleteDrink(d);
                    } }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16___default.a, null))));
            }), check.desserts.map(function (d, index) {
                return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10___default.a, { button: true, key: index }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, { inset: true, primary: d.type + ' - ' + d.taste + ' - ' + d.quantity + (d.size ? ' - ' + d.size : '') }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17___default.a, null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, { "aria-label": "Delete", onClick: function onClick() {
                        return _this2.handleDeleteDessert(d);
                    } }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16___default.a, null))));
            })));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                showDrinks = _state.showDrinks,
                showDesserts = _state.showDesserts;
            var check = this.props.check;

            if (!check) {
                return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "container" }, '\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0447\u0435\u043A');
            }
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, { gutterBottom: true, variant: "headline", component: "h2" }, '\u041D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437'), '\u0427\u0435\u043A #' + check.id, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'newOrderButtonsWrapper' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'newOrderButton' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LargeButton__WEBPACK_IMPORTED_MODULE_13__["default"], { title: 'ДЕСЕРТЫ', imageUrl: dessertsImage, onClick: this.addDessertClick })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'newOrderButton' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LargeButton__WEBPACK_IMPORTED_MODULE_13__["default"], { title: 'НАПИТКИ', imageUrl: drinksImage, onClick: this.addDrinkClick }))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, null), this.renderCheckContent(), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'buttonsWraper' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, { disabled: check.desserts.length === 0 && check.drinks.length === 0, variant: "contained", size: "large", color: "primary", onClick: this.handleNextClick }, '\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C')), showDrinks && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DrinksComponent__WEBPACK_IMPORTED_MODULE_7__["default"], { handleClose: function handleClose() {
                    return _this3.setState({ showDrinks: false });
                } }), showDesserts && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DessertsComponent__WEBPACK_IMPORTED_MODULE_8__["default"], { handleClose: function handleClose() {
                    return _this3.setState({ showDesserts: false });
                } }));
        }
    }]);

    return NewOrderComponent;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(NewOrderComponent)));

/***/ }),

/***/ "./src/components/Notification/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/Notification/index.tsx ***!
  \***********************************************/
/*! exports provided: VariantIcon, NotificationComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantIcon", function() { return VariantIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "./node_modules/@material-ui/core/SnackbarContent/index.js");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Warning */ "./node_modules/@material-ui/icons/Warning.js");
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Notification/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions */ "./src/actions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


















var mapStateToProps = function mapStateToProps(state) {
    return {
        message: state.errorMessage,
        type: state.notificationType
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        clearError: function clearError() {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["ClearError"])());
        }
    };
};
var VariantIcon;
(function (VariantIcon) {
    VariantIcon[VariantIcon["success"] = 0] = "success";
    VariantIcon[VariantIcon["warning"] = 1] = "warning";
    VariantIcon[VariantIcon["error"] = 2] = "error";
    VariantIcon[VariantIcon["info"] = 3] = "info";
})(VariantIcon || (VariantIcon = {}));
var NotificationComponent = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(NotificationComponent, _Component);

    function NotificationComponent() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NotificationComponent);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (NotificationComponent.__proto__ || Object.getPrototypeOf(NotificationComponent)).apply(this, arguments));

        _this.handleClose = function () {
            _this.props.clearError();
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NotificationComponent, [{
        key: 'getIcon',
        value: function getIcon() {
            var type = this.props.type;

            var result = null;
            switch (type) {
                case VariantIcon.success:
                    result = _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_5___default.a;
                    break;
                case VariantIcon.warning:
                    result = _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_12___default.a;
                    break;
                case VariantIcon.error:
                    result = _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6___default.a;
                    break;
                case VariantIcon.info:
                default:
                    result = _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_7___default.a;
                    break;
            }
            return result;
        }
    }, {
        key: 'getClass',
        value: function getClass() {
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
        }
    }, {
        key: 'render',
        value: function render() {
            var message = this.props.message;

            var Icon = this.getIcon();
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10___default.a, { anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                }, open: !!message, autoHideDuration: 6000, onClose: this.handleClose }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_11___default.a, { className: this.getClass(), "aria-describedby": "client-snackbar", message: react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", { id: "client-snackbar", className: 'message' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Icon, { className: classnames__WEBPACK_IMPORTED_MODULE_13___default()('icon', 'icon-variant') }), message), action: react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, { key: "close", "aria-label": "Close", color: "inherit", className: 'notificationClose', onClick: this.handleClose }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default.a, null)) }));
        }
    }]);

    return NotificationComponent;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, mapDispatchToProps)(NotificationComponent));

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions */ "./src/actions.ts");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_dictionaries__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/dictionaries */ "./src/utils/dictionaries.ts");



















var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        processPartnersOrderSubmit: function processPartnersOrderSubmit(partner, macQty, zepQty) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["ProcessPartnersOrderSubmit"])(partner, macQty, zepQty));
        }
    };
};

var PartnersComponent = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(PartnersComponent, _Component);

    function PartnersComponent(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PartnersComponent);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (PartnersComponent.__proto__ || Object.getPrototypeOf(PartnersComponent)).call(this, props));

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
            var _this$props = _this.props,
                processPartnersOrderSubmit = _this$props.processPartnersOrderSubmit,
                history = _this$props.history;
            var _this$state = _this.state,
                partner = _this$state.partner,
                macaronsQty = _this$state.macaronsQty,
                zephyrQty = _this$state.zephyrQty;

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

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PartnersComponent, [{
        key: 'getArrayFromEnum',
        value: function getArrayFromEnum(en) {
            var keys = Object.keys(en);
            var values = keys.map(function (d) {
                return {
                    id: d,
                    value: en[d]
                };
            });
            return values;
        }
    }, {
        key: 'calculateTotalPrice',
        value: function calculateTotalPrice() {
            var _state = this.state,
                partner = _state.partner,
                macaronsQty = _state.macaronsQty,
                zephyrQty = _state.zephyrQty;

            var totalPrice = 0;
            if (!partner) {
                return totalPrice;
            }
            var macaronPrice = _utils_dictionaries__WEBPACK_IMPORTED_MODULE_17__["CaffeePrices"][partner];
            totalPrice += macaronsQty * macaronPrice;
            totalPrice += _utils_dictionaries__WEBPACK_IMPORTED_MODULE_17__["ZEPHYR_PARTNERS_PRICE"] * zephyrQty;
            return totalPrice;
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                partner = _state2.partner,
                macaronsQty = _state2.macaronsQty,
                zephyrQty = _state2.zephyrQty;

            var partners = this.getArrayFromEnum(_utils_types__WEBPACK_IMPORTED_MODULE_7__["PartnersEnum"]);
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, { gutterBottom: true, variant: "headline", component: "h2" }, '\u041E\u043F\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default.a, { className: 'partnerSelectWrapper' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_11___default.a, { htmlFor: "partner-select" }, '\u041A\u043E\u0444\u0435\u0439\u043D\u044F'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13___default.a, { value: partner, onChange: this.handlePartnerSelect, inputProps: {
                    name: 'partner',
                    id: 'partner-select'
                } }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default.a, { value: "" }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("em", null, "None")), partners.map(function (p) {
                return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default.a, { key: p.id, value: p.value }, p.value);
            }))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, { label: '\u041C\u0430\u043A\u0430\u0440\u043E\u043D\u044B', value: macaronsQty, onChange: this.handleMacaronsQtyChange, type: "number", InputLabelProps: {
                    shrink: true
                }, margin: "normal", fullWidth: true, disabled: !partner, placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0430\u043A\u0430\u0440\u043E\u043D\u0441' }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, { label: '\u0417\u0435\u0444\u0438\u0440', value: zephyrQty, onChange: this.handleZephyrQtyChange, type: "number", InputLabelProps: {
                    shrink: true
                }, margin: "normal", fullWidth: true, disabled: !partner, placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0435\u0444\u0438\u0440\u0430' }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_16___default.a, null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, { label: '\u0418\u0442\u043E\u0433\u043E', value: this.calculateTotalPrice() + ' \u0433\u0440\u043D.', InputLabelProps: {
                    shrink: true
                }, margin: "normal", fullWidth: true }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'buttonsWraper' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, { disabled: !partner, variant: "contained", size: "large", color: "primary", onClick: this.handleNextClick }, '\u0413\u043E\u0442\u043E\u0432\u043E')));
        }
    }]);

    return PartnersComponent;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(PartnersComponent)));

/***/ }),

/***/ "./src/components/TestComponent.tsx":
/*!******************************************!*\
  !*** ./src/components/TestComponent.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./src/actions.ts");
/* harmony import */ var react_async_script_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-async-script-loader */ "./node_modules/react-async-script-loader/lib/index.js");
/* harmony import */ var react_async_script_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_async_script_loader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./src/config.ts");










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
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["ProcessFetchData"])(url));
        },
        appendData: function appendData(url, range, data) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["ProcessAppendData"])(url, range, data));
        },
        updateData: function updateData(url, data) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["ProcessUpdateData"])(url, data));
        }
    };
};

var TestComponent = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TestComponent, _Component);

    function TestComponent(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TestComponent);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (TestComponent.__proto__ || Object.getPrototypeOf(TestComponent)).call(this, props));

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
            _this.props.appendData(_config__WEBPACK_IMPORTED_MODULE_8__["TEST_SPREADSHEET_ID"], range, data);
        };
        _this.handleUpdateClick = function (event) {
            var data = [["Item1", "Cost", "Stocked", "Ship Date"], ["Wheel1", "$20.50", "4", "3/1/2016"], ["Door1", "$15", "2", "3/15/2016"], ["Engine1", "$100", "1", "30/20/2016"], ["Totals1", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]];
            _this.props.updateData(_config__WEBPACK_IMPORTED_MODULE_8__["TEST_SPREADSHEET_ID"], data);
        };
        _this.initClient = function () {
            window['gapi'].client.init({
                apiKey: _config__WEBPACK_IMPORTED_MODULE_8__["API_KEY"],
                clientId: _config__WEBPACK_IMPORTED_MODULE_8__["CLIENT_ID"],
                discoveryDocs: _config__WEBPACK_IMPORTED_MODULE_8__["DISCOVERY_DOCS"],
                scope: _config__WEBPACK_IMPORTED_MODULE_8__["SCOPES"]
            }).then(function () {
                _this.props.fetchData(_config__WEBPACK_IMPORTED_MODULE_8__["TEST_SPREADSHEET_ID"]);
            });
        };
        _this.state = {
            isSignedIn: null
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TestComponent, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var isScriptLoaded = nextProps.isScriptLoaded;

            if (isScriptLoaded && !this.props.isScriptLoaded) {
                window['gapi'].load('client:auth2', this.initClient);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                hasErrored = _props.hasErrored,
                isLoading = _props.isLoading,
                items = _props.items;
            var isSignedIn = this.state.isSignedIn;

            var result = void 0;
            if (hasErrored) {
                result = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, "Sorry! There was an error loading the items");
            }
            if (isLoading) {
                result = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, 'Loading\u2026');
            } else {
                result = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "container" }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "container-child" }, label)), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("ul", null, items.map(function (item, index) {
                    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", { key: index }, item[0] + item[1]);
                })));
            }
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, result, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { onClick: this.handleAppendClick, style: { display: isSignedIn ? 'block' : 'none' } }, "Append Data"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { onClick: this.handleUpdateClick, style: { display: isSignedIn ? 'block' : 'none' } }, "Update Data"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { id: "authorize_button", onClick: this.handleAuthClick, style: { display: isSignedIn ? 'none' : 'block' } }, "Authorize"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { id: "signout_button", onClick: this.handleSignoutClick, style: { display: isSignedIn ? 'block' : 'none' } }, "Sign Out"));
        }
    }]);

    return TestComponent;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (react_async_script_loader__WEBPACK_IMPORTED_MODULE_7___default()('https://apis.google.com/js/api.js')(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(TestComponent)));

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: DISCOVERY_DOCS, SCOPES, CLIENT_ID, API_KEY, TEST_SPREADSHEET_ID, LOGS_SPREADSHEET_ID, SPREADSHEET_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOVERY_DOCS", function() { return DISCOVERY_DOCS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCOPES", function() { return SCOPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_ID", function() { return CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_SPREADSHEET_ID", function() { return TEST_SPREADSHEET_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGS_SPREADSHEET_ID", function() { return LOGS_SPREADSHEET_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPREADSHEET_ID", function() { return SPREADSHEET_ID; });
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";
var CLIENT_ID = '842417198767-7k42pt9ecgtu5f7oopng1oqu3a79i5i9.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAlI5i8OOtw8aEEMS48E9pouEptq8tEg2M';
var TEST_SPREADSHEET_ID = '1ObMh87dNmizXbdWkH9TiqfrCfApk_rqxPGuQ_zNgJIM';
var LOGS_SPREADSHEET_ID = '1NPYoV9Ys52zf9V_NklQ5JdXhjppBLe0dC9T433ZY7P8';
var SPREADSHEET_ID = '1UBuEwqUyBIvvY1ihmEp9hb1j8m4JCpTl-a8mJ6RjUVw';

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/configureStore */ "./src/store/configureStore.ts");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_initialState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/initialState */ "./src/store/initialState.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app */ "./src/app.tsx");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_8__);









__webpack_require__(/*! ../public/images/favicon.png */ "./public/images/favicon.png");
// require("babel-polyfill");
var store = Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"])(_store_initialState__WEBPACK_IMPORTED_MODULE_5__["default"]);
var root = document.createElement('div');
document.body.appendChild(root);
root.style.height = "100%";
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], { store: store }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app__WEBPACK_IMPORTED_MODULE_7__["default"], null))), root);

/***/ }),

/***/ "./src/pages/CheckPage.tsx":
/*!*********************************!*\
  !*** ./src/pages/CheckPage.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_NewOrderComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NewOrderComponent */ "./src/components/NewOrderComponent.tsx");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__);










var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

var CheckPage = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CheckPage, _Component);

    function CheckPage() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CheckPage);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (CheckPage.__proto__ || Object.getPrototypeOf(CheckPage)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CheckPage, [{
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default.a, { className: 'cardContainer', raised: true }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_NewOrderComponent__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
        }
    }]);

    return CheckPage;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(CheckPage));

/***/ }),

/***/ "./src/pages/CheckoutPage.tsx":
/*!************************************!*\
  !*** ./src/pages/CheckoutPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./src/actions.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.ts");


















var mapStateToProps = function mapStateToProps(state) {
    return {
        check: state.check
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        handleCheckout: function handleCheckout() {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["ProcessCheckout"])());
        },
        setPaymentType: function setPaymentType(type) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["SetPaymentType"])(type));
        },
        setOrderType: function setOrderType(type) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["SetOrderType"])(type));
        },
        logData: function logData(text) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["LogData"])(text));
        },
        handleCancel: function handleCancel() {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["Cancel"])());
        }
    };
};

var CheckoutPage = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CheckoutPage, _Component);

    function CheckoutPage() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CheckoutPage);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (CheckoutPage.__proto__ || Object.getPrototypeOf(CheckoutPage)).apply(this, arguments));

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

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CheckoutPage, [{
        key: 'calculatePrice',
        value: function calculatePrice() {
            var check = this.props.check;

            return _utils_helper__WEBPACK_IMPORTED_MODULE_16__["default"].calculatePrice(check);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var check = this.props.check;

            if (!check) {
                return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "container" }, '\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0447\u0435\u043A');
            }
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "container" }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14___default.a, { className: 'cardContainer', raised: true }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15___default.a, null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, { gutterBottom: true, variant: "headline", component: "h2" }, '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0447\u0435\u043A\u0430'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "checkoutControlGroup" }, '\u0418\u0442\u043E\u0433\u043E: ', this.calculatePrice(), ' \u0433\u0440\u043D.'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "checkoutControlGroup" }, '\u0422\u0438\u043F \u043F\u043B\u0430\u0442\u0435\u0436\u0430:', react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12___default.a, { control: react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11___default.a, { checked: check.payment === _utils_types__WEBPACK_IMPORTED_MODULE_7__["Payment"].Card, onChange: function onChange() {
                        return _this2.handlePaymentTypeChange(_utils_types__WEBPACK_IMPORTED_MODULE_7__["Payment"].Card);
                    }, value: _utils_types__WEBPACK_IMPORTED_MODULE_7__["Payment"].Card.toString() }), label: '\u041A\u0430\u0440\u0442\u0430' }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12___default.a, { control: react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11___default.a, { checked: check.payment === _utils_types__WEBPACK_IMPORTED_MODULE_7__["Payment"].Cash, onChange: function onChange() {
                        return _this2.handlePaymentTypeChange(_utils_types__WEBPACK_IMPORTED_MODULE_7__["Payment"].Cash);
                    }, value: _utils_types__WEBPACK_IMPORTED_MODULE_7__["Payment"].Cash.toString() }), label: '\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435' })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "checkoutControlGroup" }, '\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430:', react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12___default.a, { control: react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11___default.a, { checked: check.type === _utils_types__WEBPACK_IMPORTED_MODULE_7__["OrderType"].PreOrder, onChange: function onChange() {
                        return _this2.handleOrderTypeChange(_utils_types__WEBPACK_IMPORTED_MODULE_7__["OrderType"].PreOrder);
                    }, value: _utils_types__WEBPACK_IMPORTED_MODULE_7__["OrderType"].PreOrder.toString() }), label: '\u041F\u0440\u0435\u0434\u0437\u0430\u043A\u0430\u0437' }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12___default.a, { control: react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11___default.a, { checked: check.type === _utils_types__WEBPACK_IMPORTED_MODULE_7__["OrderType"].Shop, onChange: function onChange() {
                        return _this2.handleOrderTypeChange(_utils_types__WEBPACK_IMPORTED_MODULE_7__["OrderType"].Shop);
                    }, value: _utils_types__WEBPACK_IMPORTED_MODULE_7__["OrderType"].Shop.toString() }), label: '\u0412\u0438\u0442\u0440\u0438\u043D\u0430' })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: 'buttonsWraper' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, { classes: { root: 'button' }, variant: "contained", color: "primary", title: "Check Out", onClick: this.handleCheckout }, '\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, { classes: { root: 'button' }, variant: "contained", color: "default", title: "Back", onClick: this.handleBack }, '\u041D\u0430\u0437\u0430\u0434'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, { classes: { root: 'button' }, variant: "contained", color: "secondary", title: "Cancel", onClick: this.handleCancel }, '\u041E\u0442\u043C\u0435\u043D\u0430')))));
        }
    }]);

    return CheckoutPage;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutPage)));

/***/ }),

/***/ "./src/pages/MainPage.tsx":
/*!********************************!*\
  !*** ./src/pages/MainPage.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./src/actions.ts");
/* harmony import */ var _components_LargeButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LargeButton */ "./src/components/LargeButton/index.tsx");
/* harmony import */ var _components_HistoryComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HistoryComponent */ "./src/components/HistoryComponent.tsx");
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Notification */ "./src/components/Notification/index.tsx");
/* harmony import */ var _components_Busy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Busy */ "./src/components/Busy.tsx");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../config */ "./src/config.ts");

















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
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["CreateCheck"])());
        },
        logData: function logData(text) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["LogData"])(text));
        },
        fetchData: function fetchData(url) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["ProcessFetchData"])(url));
        }
    };
};
var CkeckLink = function CkeckLink(props) {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], Object.assign({ to: "/check" }, props));
};
var PartnersLink = function PartnersLink(props) {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], Object.assign({ to: "/partners" }, props));
};

var MainPage = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(MainPage, _Component);

    function MainPage() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MainPage);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));

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

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MainPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var history = this.props.history;

            if (!history || !history.length) {
                this.props.fetchData(_config__WEBPACK_IMPORTED_MODULE_15__["SPREADSHEET_ID"]);
            }
            ;
        }
    }, {
        key: 'render',
        value: function render() {
            var isLoading = this.props.isLoading;

            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "container" }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12___default.a, { className: 'cardContainer', raised: true }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default.a, { classes: { root: 'cardRoot' } }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_LargeButton__WEBPACK_IMPORTED_MODULE_8__["default"], { title: 'РОЗНИЧНЫЙ ЗАКАЗ', component: CkeckLink, imageUrl: imageUrl, onClick: this.onNewCheckClick }))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12___default.a, { className: 'cardContainer', raised: true }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default.a, { classes: { root: 'cardRoot' } }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_LargeButton__WEBPACK_IMPORTED_MODULE_8__["default"], { title: 'ОПТОВЫЙ ЗАКАЗ', component: PartnersLink, imageUrl: partnerUrl, onClick: this.onNewPartnersCheckClick }))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12___default.a, { className: 'cardContainerHistory', raised: true }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default.a, null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, { gutterBottom: true, variant: "headline", component: "h2" }, '\u0418\u0441\u0442\u043E\u0440\u0438\u044F'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_HistoryComponent__WEBPACK_IMPORTED_MODULE_9__["default"], null))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_Notification__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_Busy__WEBPACK_IMPORTED_MODULE_11__["Busy"], { loading: isLoading }));
        }
    }]);

    return MainPage;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(MainPage));

/***/ }),

/***/ "./src/pages/NotFoundPage.tsx":
/*!************************************!*\
  !*** ./src/pages/NotFoundPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectDestructuringEmpty */ "./node_modules/babel-runtime/helpers/objectDestructuringEmpty.js");
/* harmony import */ var babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");








var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

var NotFoundPage = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NotFoundPage, _Component);

    function NotFoundPage() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, NotFoundPage);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (NotFoundPage.__proto__ || Object.getPrototypeOf(NotFoundPage)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(NotFoundPage, [{
        key: 'render',
        value: function render() {
            babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(this.props);

            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: "container" }, "Not Found");
        }
    }]);

    return NotFoundPage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(NotFoundPage));

/***/ }),

/***/ "./src/pages/PartnersPage.tsx":
/*!************************************!*\
  !*** ./src/pages/PartnersPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PartnersComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PartnersComponent */ "./src/components/PartnersComponent.tsx");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__);










var mapStateToProps = function mapStateToProps(state) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

var PartnersPage = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(PartnersPage, _Component);

    function PartnersPage() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PartnersPage);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (PartnersPage.__proto__ || Object.getPrototypeOf(PartnersPage)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PartnersPage, [{
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default.a, { className: 'cardContainer', raised: true }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_PartnersComponent__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
        }
    }]);

    return PartnersPage;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(PartnersPage));

/***/ }),

/***/ "./src/reducer.ts":
/*!************************!*\
  !*** ./src/reducer.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./src/actionTypes.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/types */ "./src/utils/types.ts");
/* harmony import */ var _store_initialState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/initialState */ "./src/store/initialState.ts");



var _handleActions;





/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["handleActions"])((_handleActions = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CREATE_CHECK"], function (state, action) {
    var lastId = state.lastId;

    var check = {
        id: lastId + 1,
        desserts: new Array(),
        drinks: new Array(),
        isFinished: false,
        payment: _utils_types__WEBPACK_IMPORTED_MODULE_4__["Payment"].Cash,
        type: _utils_types__WEBPACK_IMPORTED_MODULE_4__["OrderType"].Shop
    };
    return Object.assign({}, state, {
        check: check
    });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["ADD_DRINK"], function (state, action) {
    var check = state.check;

    var drink = {
        id: action.payload[0],
        size: action.payload[1]
    };
    check.drinks.push(drink);
    return Object.assign({}, state, {
        check: check
    });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["DELETE_DRINK"], function (state, action) {
    var check = state.check;

    var newCheck = Object.assign({}, check);
    var comparator = function comparator(_ref) {
        var id = _ref.id,
            size = _ref.size;

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
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["ADD_DESSERT"], function (state, action) {
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
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["DELETE_DESSERT"], function (state, action) {
    var check = state.check;

    var newCheck = Object.assign({}, check);
    var comparator = function comparator(_ref2) {
        var type = _ref2.type,
            taste = _ref2.taste,
            size = _ref2.size;

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
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["PROCESS_CHECKOUT"], function (state, action) {
    var check = state.check,
        history = state.history,
        lastId = state.lastId;

    check.isFinished = true;
    history.push(check);
    return Object.assign({}, state, {
        check: null,
        history: [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(history)),
        lastId: lastId + 1
    });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_PAYMENT_TYPE"], function (state, action) {
    var check = state.check;

    check.payment = action.payload;
    return Object.assign({}, state, { check: Object.assign({}, check) });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_ORDER_TYPE"], function (state, action) {
    var check = state.check;

    check.type = action.payload;
    return Object.assign({}, state, { check: Object.assign({}, check) });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["LOAD_ITEMS"], function (state, action) {
    return Object.assign({}, state, {
        isLoading: action.payload
    });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["LOAD_ITEMS_FULFILLED"], function (state, action) {
    return Object.assign({}, state, {
        items: action.payload
    });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["LOAD_ITEMS_REJECTED"], function (state, action) {
    return Object.assign({}, state, {
        hasErrored: action.payload
    });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["APPEND_DATA_FULFILLED"], function (state, action) {
    return Object.assign({}, state, {
        items: [],
        hasErrored: !action.payload
    });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["APPEND_DATA_REJECTED"], function (state, action) {
    return Object.assign({}, state, {
        hasErrored: true,
        errorMessage: action.payload,
        notificationType: 2
    });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SHOW_BUSY"], function (state, action) {
    var isBusy = action.payload;
    return Object.assign({}, state, { isBusy: isBusy });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["LOG_DATA"], function (state, action) {
    var text = action.payload;
    var log = state.log;

    return Object.assign({}, state, { log: log + ";" + text });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CLEAR_LOG"], function (state, action) {
    return Object.assign({}, state, { log: '' });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CLEAR_ERROR"], function (state, action) {
    return Object.assign({}, state, { errorMessage: '' });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CANCEL"], function (state, action) {
    return Object.assign({}, state, { check: null });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_LAST_ID"], function (state, action) {
    return Object.assign({}, state, {
        history: [action.payload[1]],
        lastId: action.payload[0]
    });
}), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SHOW_NOTIFICATION"], function (state, action) {
    return Object.assign({}, state, {
        errorMessage: action.payload[1],
        notificationType: action.payload[0]
    });
}), _handleActions), _store_initialState__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./src/store/configureStore.ts":
/*!*************************************!*\
  !*** ./src/store/configureStore.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer */ "./src/reducer.ts");



function configureStore(initialState) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
}

/***/ }),

/***/ "./src/store/initialState.ts":
/*!***********************************!*\
  !*** ./src/store/initialState.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    hasErrored: false,
    isLoading: false,
    items: [],
    check: null,
    history: new Array(),
    log: '',
    errorMessage: '',
    lastId: 0,
    notificationType: 0
});

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
/*! exports provided: DrinksDict, DessertsDict, DrinkPricesDict, CaffeePrices, CakesPricesDict, ZEPHYR_PRICE, ZEPHYR_PARTNERS_PRICE, MACARONS_PRICE, MacaronsColors, ZephyrColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksDict", function() { return DrinksDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DessertsDict", function() { return DessertsDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkPricesDict", function() { return DrinkPricesDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaffeePrices", function() { return CaffeePrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakesPricesDict", function() { return CakesPricesDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZEPHYR_PRICE", function() { return ZEPHYR_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZEPHYR_PARTNERS_PRICE", function() { return ZEPHYR_PARTNERS_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MACARONS_PRICE", function() { return MACARONS_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacaronsColors", function() { return MacaronsColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZephyrColors", function() { return ZephyrColors; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/utils/types.ts");

var DrinksDict = {};
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Cappucino] = ['175 мл', '340 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Latte] = ['250 мл', '340 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].FlatWhite] = ['175 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Raf] = ['250 мл', '340 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Americano] = ['120 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].AmericanoMilk] = ['120 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LongBlack] = ['200 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Espresso] = ['30 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Doppio] = ['60 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Machiato] = ['90 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LatteLavender] = ['250 мл', '340 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LatteCaramel] = ['250 мл', '340 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LatteOrange] = ['250 мл', '340 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Cacao] = ['250 мл', '340 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].TeaGreen] = ['400 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].TeaBlack] = ['400 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].TeaHerbal] = ['400 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].SpeacialTeaPearLime] = ['400 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].SpecialTeaOrange] = ['400 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].SpecialTeaGinger] = ['400 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].HotChocolate] = ['175 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LemonadeStrawberry] = ['400 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LemonadeCitrus] = ['400 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LemonadePassion] = ['400 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].IceLatte] = ['400 мл'];
DrinksDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Syrop] = ['0 мл'];
var DessertsDict = {};
DessertsDict[_types__WEBPACK_IMPORTED_MODULE_0__["DessertType"].Macaron] = [1, 6, 12, 24];
DessertsDict[_types__WEBPACK_IMPORTED_MODULE_0__["DessertType"].Zephyr] = [1, 8, 16];
DessertsDict[_types__WEBPACK_IMPORTED_MODULE_0__["DessertType"].Cake] = ['18 см', '22 см'];
var DrinkPricesDict = {};
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Cappucino] = [25, 40];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Latte] = [28, 35];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].FlatWhite] = [35];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Raf] = [38, 45];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Americano] = [20];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].AmericanoMilk] = [25];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LongBlack] = [30];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Espresso] = [20];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Doppio] = [30];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Machiato] = [22];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LatteLavender] = [32, 40];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LatteCaramel] = [32, 40];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LatteOrange] = [32, 40];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Cacao] = [28, 35];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].TeaGreen] = [25];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].TeaBlack] = [25];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].TeaHerbal] = [25];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].SpeacialTeaPearLime] = [35];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].SpecialTeaOrange] = [35];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].SpecialTeaGinger] = [35];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].HotChocolate] = [55];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LemonadeStrawberry] = [35];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LemonadeCitrus] = [35];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].LemonadePassion] = [35];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].IceLatte] = [40];
DrinkPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["DrinksType"].Syrop] = [5];
var CaffeePrices = {};
CaffeePrices[_types__WEBPACK_IMPORTED_MODULE_0__["PartnersEnum"].CoffeeIs] = 17;
CaffeePrices[_types__WEBPACK_IMPORTED_MODULE_0__["PartnersEnum"].FirstPoint] = 19;
CaffeePrices[_types__WEBPACK_IMPORTED_MODULE_0__["PartnersEnum"].CubaCoffee] = 19;
CaffeePrices[_types__WEBPACK_IMPORTED_MODULE_0__["PartnersEnum"].Progress] = 20;
CaffeePrices[_types__WEBPACK_IMPORTED_MODULE_0__["PartnersEnum"].KlassnaKava] = 19;
CaffeePrices[_types__WEBPACK_IMPORTED_MODULE_0__["PartnersEnum"].CoffeeAndTheCity] = 19;
CaffeePrices[_types__WEBPACK_IMPORTED_MODULE_0__["PartnersEnum"].IlMio] = 19;
CaffeePrices[_types__WEBPACK_IMPORTED_MODULE_0__["PartnersEnum"].StudioCoffee] = 20;
var CakesPricesDict = {};
CakesPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["CakesEnum"].CarrotCake] = [650, 980];
CakesPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["CakesEnum"].Pink] = [630, 970];
CakesPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["CakesEnum"].Infinity] = [640, 970];
CakesPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["CakesEnum"].Rio] = [630, 970];
CakesPricesDict[_types__WEBPACK_IMPORTED_MODULE_0__["CakesEnum"].Soul] = [620, 960];
var ZEPHYR_PRICE = 12;
var ZEPHYR_PARTNERS_PRICE = 11;
var MACARONS_PRICE = 28;
var MacaronsColors = {};
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].DorBluePear] = '#b7e4f7';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].ParmesanFigue] = '#fcf7e8';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].StrawberryCheesecake] = '#ffdddd';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].Raspberry] = '#ffa5cf';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].CherryTonko] = '#B21E27';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].Oblepiha] = '#F0C130';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].Currant] = '#bc45c6';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].LavenderBlackberry] = '#b587ff';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].MangoPassion] = '#ffdd87';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].CoffeeCaramel] = '#a87301';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].Chocolate] = '#492908';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].Pistachio] = '#85dd93';
MacaronsColors[_types__WEBPACK_IMPORTED_MODULE_0__["MacaronsEnum"].LimeBasil] = '#9ff25c';
var ZephyrColors = {};
ZephyrColors[_types__WEBPACK_IMPORTED_MODULE_0__["ZephyrEnum"].Apple] = '#fffbf2';
ZephyrColors[_types__WEBPACK_IMPORTED_MODULE_0__["ZephyrEnum"].ApricotPassionFruit] = '#ffe6bf';
ZephyrColors[_types__WEBPACK_IMPORTED_MODULE_0__["ZephyrEnum"].Currant] = '#d978еd';
ZephyrColors[_types__WEBPACK_IMPORTED_MODULE_0__["ZephyrEnum"].StrawberryCranberry] = '#f497b9';

/***/ }),

/***/ "./src/utils/helper.ts":
/*!*****************************!*\
  !*** ./src/utils/helper.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dictionaries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionaries */ "./src/utils/dictionaries.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/utils/types.ts");





var Helper = function () {
    function Helper() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Helper);
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Helper, null, [{
        key: 'calculatePrice',
        value: function calculatePrice(check) {
            var totalPrice = 0;
            check.desserts.forEach(function (d) {
                switch (d.type) {
                    case _types__WEBPACK_IMPORTED_MODULE_3__["DessertType"].Cake:
                        var cakePrices = _dictionaries__WEBPACK_IMPORTED_MODULE_2__["CakesPricesDict"][d.taste];
                        if (d.size === '18 см') {
                            totalPrice += cakePrices[0];
                        } else if (d.size === '22 см') {
                            totalPrice += cakePrices[1];
                        }
                        break;
                    case _types__WEBPACK_IMPORTED_MODULE_3__["DessertType"].Macaron:
                        totalPrice += _dictionaries__WEBPACK_IMPORTED_MODULE_2__["MACARONS_PRICE"] * d.quantity;
                        break;
                    case _types__WEBPACK_IMPORTED_MODULE_3__["DessertType"].Zephyr:
                        totalPrice += _dictionaries__WEBPACK_IMPORTED_MODULE_2__["ZEPHYR_PRICE"] * d.quantity;
                        break;
                    default:
                        break;
                }
            });
            check.drinks.forEach(function (d) {
                var prices = _dictionaries__WEBPACK_IMPORTED_MODULE_2__["DrinkPricesDict"][d.id];
                if (prices.length === 1) {
                    totalPrice += prices[0];
                } else {
                    var index = _dictionaries__WEBPACK_IMPORTED_MODULE_2__["DrinksDict"][d.id].findIndex(function (x) {
                        return x === d.size;
                    });
                    totalPrice += prices[index];
                }
            });
            return totalPrice;
        }
    }]);

    return Helper;
}();

Helper.TokenCookieName = "accesstokencookie_temp";
Helper.GUIDEmpty = "00000000-0000-0000-0000-000000000000";
Helper.guid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};
Helper.getParameterByNameFromUri = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};
Helper.getQueryVariable = function (variable) {
    var query = window.location.search.substring(1);
    if (!query && window.location.pathname.indexOf("%3F") > -1) {
        query = window.location.pathname.split("%3F")[1];
    }
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            var value = pair[1];
            return value ? decodeURI(value) : null;
        }
    }
    return false;
};
/* harmony default export */ __webpack_exports__["default"] = (Helper);

/***/ }),

/***/ "./src/utils/types.ts":
/*!****************************!*\
  !*** ./src/utils/types.ts ***!
  \****************************/
/*! exports provided: Payment, OrderType, DessertType, MacaronsEnum, ZephyrEnum, CakesEnum, DrinksType, PartnersEnum, ValueInputOption, InsertDataOption, ValueRenderOption, DateTimeRenderOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderType", function() { return OrderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DessertType", function() { return DessertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacaronsEnum", function() { return MacaronsEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZephyrEnum", function() { return ZephyrEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakesEnum", function() { return CakesEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksType", function() { return DrinksType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersEnum", function() { return PartnersEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueInputOption", function() { return ValueInputOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertDataOption", function() { return InsertDataOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueRenderOption", function() { return ValueRenderOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeRenderOption", function() { return DateTimeRenderOption; });
var Payment;
(function (Payment) {
    Payment["Card"] = "\u041A\u0430\u0440\u0442\u0430";
    Payment["Cash"] = "\u041D\u0430\u043B\u0438\u0447\u043A\u0430";
    Payment["Other"] = "\u0414\u0440\u0443\u0433\u043E\u0435";
})(Payment || (Payment = {}));
var OrderType;
(function (OrderType) {
    OrderType["PreOrder"] = "\u041F\u0440\u0435\u0434\u0437\u0430\u043A\u0430\u0437";
    OrderType["Shop"] = "\u0412\u0438\u0442\u0440\u0438\u043D\u0430";
    OrderType["Other"] = "\u0414\u0440\u0443\u0433\u043E\u0435";
})(OrderType || (OrderType = {}));
var DessertType;
(function (DessertType) {
    DessertType["Macaron"] = "\u041C\u0430\u043A\u0430\u0440\u043E\u043D\u0441";
    DessertType["Zephyr"] = "\u0417\u0435\u0444\u0438\u0440";
    DessertType["Cake"] = "\u0422\u043E\u0440\u0442";
})(DessertType || (DessertType = {}));
var MacaronsEnum;
(function (MacaronsEnum) {
    MacaronsEnum["DorBluePear"] = "\u0414\u043E\u0431-\u0411\u043B\u044E - \u0413\u0440\u0443\u0448\u0430";
    MacaronsEnum["ParmesanFigue"] = "\u041F\u0430\u0440\u043C\u0435\u0437\u0430\u043D - \u0418\u043D\u0436\u0438\u0440";
    MacaronsEnum["StrawberryCheesecake"] = "\u041A\u043B\u0443\u0431\u043D\u0438\u0447\u043D\u044B\u0439 \u0427\u0438\u0437\u043A\u0435\u0439\u043A";
    MacaronsEnum["Raspberry"] = "\u041C\u0430\u043B\u0438\u043D\u0430";
    MacaronsEnum["CherryTonko"] = "\u0412\u0438\u0448\u043D\u044F - \u0411\u043E\u0431\u044B \u0422\u043E\u043D\u043A\u043E";
    MacaronsEnum["Oblepiha"] = "\u041E\u0431\u043B\u0435\u043F\u0438\u0445\u0430";
    MacaronsEnum["Currant"] = "\u0421\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430";
    MacaronsEnum["LavenderBlackberry"] = "\u041B\u0430\u0432\u0430\u043D\u0434\u0430 - \u0427\u0435\u0440\u043D\u0438\u043A\u0430";
    MacaronsEnum["MangoPassion"] = "\u041C\u0430\u043D\u0433\u043E - \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F";
    MacaronsEnum["CoffeeCaramel"] = "\u041A\u043E\u0444\u0435 - \u0421\u043E\u043B\u0451\u043D\u0430\u044F \u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C";
    MacaronsEnum["Chocolate"] = "\u0428\u043E\u043A\u043E\u043B\u0430\u0434";
    MacaronsEnum["Pistachio"] = "\u0424\u0438\u0441\u0442\u0430\u0448\u043A\u0430";
    MacaronsEnum["LimeBasil"] = "\u041B\u0430\u0439\u043C - \u0411\u0430\u0437\u0438\u043B\u0438\u043A";
})(MacaronsEnum || (MacaronsEnum = {}));
var ZephyrEnum;
(function (ZephyrEnum) {
    ZephyrEnum["Apple"] = "\u042F\u0431\u043B\u043E\u043A\u043E";
    ZephyrEnum["ApricotPassionFruit"] = "\u0410\u0431\u0440\u0438\u043A\u043E\u0441 - \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F";
    ZephyrEnum["Currant"] = "\u0421\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430";
    ZephyrEnum["StrawberryCranberry"] = "\u041A\u043B\u0443\u0431\u043D\u0438\u043A\u0430 - \u041A\u043B\u044E\u043A\u0432\u0430";
})(ZephyrEnum || (ZephyrEnum = {}));
var CakesEnum;
(function (CakesEnum) {
    CakesEnum["Rio"] = "Rio";
    CakesEnum["CarrotCake"] = "Carrot Cake";
    CakesEnum["Soul"] = "Soul";
    CakesEnum["Pink"] = "Pink";
    CakesEnum["Infinity"] = "Infinity";
})(CakesEnum || (CakesEnum = {}));
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
})(DrinksType || (DrinksType = {}));
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
})(PartnersEnum || (PartnersEnum = {}));
var ValueInputOption;
(function (ValueInputOption) {
    ValueInputOption["INPUT_VALUE_OPTION_UNSPECIFIED"] = "INPUT_VALUE_OPTION_UNSPECIFIED";
    ValueInputOption["RAW"] = "RAW";
    ValueInputOption["USER_ENTERED"] = "USER_ENTERED";
})(ValueInputOption || (ValueInputOption = {}));
var InsertDataOption;
(function (InsertDataOption) {
    InsertDataOption["OVERWRITE"] = "OVERWRITE";
    InsertDataOption["INSERT_ROWS"] = "INSERT_ROWS";
})(InsertDataOption || (InsertDataOption = {}));
var ValueRenderOption;
(function (ValueRenderOption) {
    ValueRenderOption["FORMATTED_VALUE"] = "FORMATTED_VALUE";
    ValueRenderOption["UNFORMATTED_VALUE"] = "UNFORMATTED_VALUE";
    ValueRenderOption["FORMULA"] = "FORMULA";
})(ValueRenderOption || (ValueRenderOption = {}));
var DateTimeRenderOption;
(function (DateTimeRenderOption) {
    DateTimeRenderOption["SERIAL_NUMBER"] = "SERIAL_NUMBER";
    DateTimeRenderOption["FORMATTED_STRING"] = "FORMATTED_STRING";
})(DateTimeRenderOption || (DateTimeRenderOption = {}));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvZGVzc2VydHNfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9kcmlua3NfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL21haW5faWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9wYXJ0bmVyc19pY29uLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHBCYXIvc3R5bGVzLnNjc3M/OGFhMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXN5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EZXNzZXJ0c0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpbmtzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaXN0b3J5Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXJnZUJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24vc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2Nzcz9hNzc0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhcnRuZXJzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZXN0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrb3V0UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTm90Rm91bmRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGFydG5lcnNQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzP2RjYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RpY3Rpb25hcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNB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YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c3hcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwYmFyX3Jvb3Qge1xcbiAgZmxleC1ncm93OiAxOyB9XFxuICAuYXBwYmFyX3Jvb3QgLmFwcGJhcl9ncm93IHtcXG4gICAgZmxleC1ncm93OiAxOyB9XFxuICAuYXBwYmFyX3Jvb3QgLmFwcGJhcl9tZW51QnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7IH1cXG5cXG4uZXJyb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheSAhaW1wb3J0YW50OyB9XFxuXFxuLmluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheSAhaW1wb3J0YW50OyB9XFxuXFxuLndhcm5pbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7IH1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLmljb24tdmFyaWFudCB7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcblxcbi5tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJztcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuXFxuLmF2YXRhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJjM2U5O1xcbiAgY29sb3I6ICMxZDUzYTM7IH1cXG5cXG4uY2FyZENvbnRhaW5lciB7XFxuICBtYXJnaW46IDE2cHg7IH1cXG5cXG4uY2FyZENvbnRhaW5lckhpc3Rvcnkge1xcbiAgbWFyZ2luOiAxNnB4OyB9XFxuXFxuLmNhcmRSb290IHtcXG4gIHBhZGRpbmc6IDE2cHggMCAxNnB4IDAgIWltcG9ydGFudDsgfVxcblxcbi5uZXdPcmRlckJ1dHRvbnNXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLm5ld09yZGVyQnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmJ1dHRvbnNXcmFwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmJ1dHRvbnNXcmFwZXIgLmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMXJlbSAwcmVtOyB9XFxuXFxuLmNoZWNrb3V0VGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQ1MDsgfVxcblxcbi5jaGVja291dENvbnRyb2xHcm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAxcmVtIDJyZW0gMXJlbSAycmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5ub3RpZmljYXRpb25DbG9zZSB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTsgfVxcblxcbi5tYWNhcm9uQXZhdGFyIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyB9XFxuXFxuLmRyaW5rQXZhdGFyIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ0ODJmICFpbXBvcnRhbnQ7IH1cXG5cXG4uZGVzc2VydHNUYXN0ZXNXcmFwcGVyIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjhweCk7IH1cXG5cXG4uZGVzc2VydHNUYXN0ZXNMaXN0V3JhcHBlciB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExMHB4KTtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLmJ1dHRvbkFwcGx5V3JhcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxcblxcbi5idXR0b25DYW5jZWxXcmFwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuXFxuLmRyaW5rc1dyYXBwZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTsgfVxcblxcbi5kcmlua3NMaXN0V3JhcHBlciB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4ucGFydG5lclNlbGVjdFdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtOyB9XFxuXFxuLmJ1c3ktY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gIG9wYWNpdHk6IDAuODsgfVxcbiAgLmJ1c3ktY29udGFpbmVyIC5idXN5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNDQlO1xcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uaGlzdG9yeUNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvZGVzc2VydHNfaWNvbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1hZ2VzL2RyaW5rc19pY29uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvZmF2aWNvbi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1hZ2VzL21haW5faWNvbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1hZ2VzL3BhcnRuZXJzX2ljb24uanBnXCI7IiwiZXhwb3J0IGNvbnN0IENSRUFURV9DSEVDSyA9ICdDUkVBVEVfQ0hFQ0snO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9EUklOSyA9ICdBRERfRFJJTksnO1xyXG5leHBvcnQgY29uc3QgQUREX0RFU1NFUlQgPSAnQUREX0RFU1NFUlQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9EUklOSyA9ICdERUxFVEVfRFJJTksnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0RFU1NFUlQgPSAnREVMRVRFX0RFU1NFUlQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX1RZUEUgPSAnU0VUX1BBWU1FTlRfVFlQRSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfT1JERVJfVFlQRSA9ICdTRVRfT1JERVJfVFlQRSc7XHJcbmV4cG9ydCBjb25zdCBQUk9DRVNTX0NIRUNLT1VUID0gJ1BST0NFU1NfQ0hFQ0tPVVQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVMgPSAnTE9BRF9JVEVNUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lURU1TX0ZVTEZJTExFRCA9ICdMT0FEX0lURU1TX0ZVTEZJTExFRCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lURU1TX1JFSkVDVEVEID0gJ0xPQURfSVRFTVNfUkVKRUNURUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIT1dfQlVTWSA9IFwiU0hPV19CVVNZXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQVBQRU5EX0RBVEEgPSAnQVBQRU5EX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgQVBQRU5EX0RBVEFfRlVMRklMTEVEID0gJ0FQUEVORF9EQVRBX0ZVTEZJTExFRCc7XHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQV9SRUpFQ1RFRCA9ICdBUFBFTkRfREFUQV9SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEEgPSAnVVBEQVRFX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEFfRlVMRklMTEVEID0gJ1VQREFURV9EQVRBX0ZVTEZJTExFRCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQV9SRUpFQ1RFRCA9ICdVUERBVEVfREFUQV9SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0RBVEEgPSAnTE9HX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfTE9HID0gJ0NMRUFSX0xPRyc7XHJcbmV4cG9ydCBjb25zdCBDQU5DRUwgPSAnQ0FOQ0VMJztcclxuXHJcbmV4cG9ydCBjb25zdCBDTEVBUl9FUlJPUiA9ICdDTEVBUl9FUlJPUic7XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX0xBU1RfSUQgPSAnU0VUX0xBU1RfSUQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIT1dfTk9USUZJQ0FUSU9OID0gJ1NIT1dfTk9USUZJQ0FUSU9OJzsiLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIEFjdGlvbiB9IGZyb20gXCJyZWR1eC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX0lURU1TLFxyXG4gICAgTE9BRF9JVEVNU19GVUxGSUxMRUQsXHJcbiAgICBMT0FEX0lURU1TX1JFSkVDVEVELFxyXG4gICAgU0hPV19CVVNZLFxyXG4gICAgQ1JFQVRFX0NIRUNLLFxyXG4gICAgUFJPQ0VTU19DSEVDS09VVCxcclxuICAgIEFERF9EUklOSyxcclxuICAgIEFERF9ERVNTRVJULFxyXG4gICAgU0VUX1BBWU1FTlRfVFlQRSxcclxuICAgIFNFVF9PUkRFUl9UWVBFLFxyXG4gICAgQVBQRU5EX0RBVEFfRlVMRklMTEVELFxyXG4gICAgQVBQRU5EX0RBVEFfUkVKRUNURUQsXHJcbiAgICBMT0dfREFUQSxcclxuICAgIENMRUFSX0xPRyxcclxuICAgIENBTkNFTCxcclxuICAgIENMRUFSX0VSUk9SLFxyXG4gICAgREVMRVRFX0RSSU5LLFxyXG4gICAgREVMRVRFX0RFU1NFUlQsXHJcbiAgICBTRVRfTEFTVF9JRCxcclxuICAgIFNIT1dfTk9USUZJQ0FUSU9OXHJcbn0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgICBEcmlua3NUeXBlLCBEZXNzZXJ0VHlwZSwgUGF5bWVudCwgT3JkZXJUeXBlLCBDaGVjayxcclxuICAgIFZhbHVlSW5wdXRPcHRpb24sIEluc2VydERhdGFPcHRpb24sIFZhbHVlUmVuZGVyT3B0aW9uLCBEYXRlVGltZVJlbmRlck9wdGlvbiwgRGVzc2VydCwgRHJpbmtcclxufSBmcm9tICcuL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgTE9HU19TUFJFQURTSEVFVF9JRCwgU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NGZXRjaERhdGEgPSAoc3ByZWFkc2hlZXRJZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRzUmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuZ2V0KHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogXCJSYXdEZXNzZXJ0c0RhdGEhQTpIXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc1Jlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmdldCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IFwiUmF3RHJpbmtzRGF0YSFBOkZcIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsYXN0RGVzc2VydE9yZGVySWQgPSBNYXRoLm1heCguLi5kZXNzZXJ0c1Jlc3BvbnNlLnJlc3VsdC52YWx1ZXMuc2xpY2UoMSkubWFwKGQgPT4gZFs3XSA/IE51bWJlcihkWzddKSA6IDApKTtcclxuICAgICAgICAgICAgbGV0IGxhc3REcmlua09yZGVySWQgPSBNYXRoLm1heCguLi5kcmlua3NSZXNwb25zZS5yZXN1bHQudmFsdWVzLnNsaWNlKDEpLm1hcChkID0+IGRbNV0gPyBOdW1iZXIoZFs1XSkgOiAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IE1hdGgubWF4KGxhc3REZXNzZXJ0T3JkZXJJZCwgbGFzdERyaW5rT3JkZXJJZCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXI6IENoZWNrID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGxhc3RJZCxcclxuICAgICAgICAgICAgICAgIGRlc3NlcnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIGRyaW5rczogW10sXHJcbiAgICAgICAgICAgICAgICBpc0ZpbmlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudDogUGF5bWVudC5PdGhlcixcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9yZGVyVHlwZS5PdGhlclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgbGFzdE9yZGVyUGF5bWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBsYXN0T3JkZXJUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGxhc3RPcmRlci5kZXNzZXJ0cyA9IGRlc3NlcnRzUmVzcG9uc2UucmVzdWx0LnZhbHVlcy5zbGljZSgxKS5maWx0ZXIodiA9PiB2WzddID09PSBsYXN0SWQudG9TdHJpbmcoKSkubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGFzdE9yZGVyUGF5bWVudCA9IGRbNF0gPT09ICfQndCw0LvQuNGH0LrQsCcgPyBQYXltZW50LkNhc2ggOiBQYXltZW50LkNhcmQ7XHJcbiAgICAgICAgICAgICAgICBsYXN0T3JkZXJUeXBlID0gZFs1XSA9PT0gJ9CS0LjRgtGA0LjQvdCwJyA/IE9yZGVyVHlwZS5TaG9wIDogT3JkZXJUeXBlLlByZU9yZGVyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzc2VydDogRGVzc2VydCA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc3RlOiBkWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBkWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGRbM11cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVzc2VydDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsYXN0T3JkZXIuZHJpbmtzID0gZHJpbmtzUmVzcG9uc2UucmVzdWx0LnZhbHVlcy5zbGljZSgxKS5maWx0ZXIodiA9PiB2WzVdID09PSBsYXN0SWQudG9TdHJpbmcoKSkubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGFzdE9yZGVyUGF5bWVudCA9IGRbMl0gPT09ICfQndCw0LvQuNGH0LrQsCcgPyBQYXltZW50LkNhc2ggOiBQYXltZW50LkNhcmQ7XHJcbiAgICAgICAgICAgICAgICBsYXN0T3JkZXJUeXBlID0gZFszXSA9PT0gJ9CS0LjRgtGA0LjQvdCwJyA/IE9yZGVyVHlwZS5TaG9wIDogT3JkZXJUeXBlLlByZU9yZGVyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzc2VydDogRHJpbmsgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogZFsxXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZXNzZXJ0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGFzdE9yZGVyLnBheW1lbnQgPSBsYXN0T3JkZXJQYXltZW50O1xyXG4gICAgICAgICAgICBsYXN0T3JkZXIudHlwZSA9IGxhc3RPcmRlclR5cGU7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFNldExhc3RJZChsYXN0SWQsIGxhc3RPcmRlcikpO1xyXG4gICAgICAgICAgICAvLyBkaXNwYXRjaChpdGVtc0ZldGNoRGF0YVN1Y2Nlc3MoWy4uLmRlc3NlcnRzLCAuLi5kcmlua3NdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzQXBwZW5kRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmcsIHZhbHVlUmFuZ2U6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5hcHBlbmQoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0RGF0YU9wdGlvbjogSW5zZXJ0RGF0YU9wdGlvbi5PVkVSV1JJVEUsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlVmFsdWVzSW5SZXNwb25zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVmFsdWVSZW5kZXJPcHRpb246IFZhbHVlUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9WQUxVRVxyXG4gICAgICAgICAgICB9LCB7IHZhbHVlczogdmFsdWVSYW5nZSB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHVwZGF0ZWRDZWxsc0NvdW50ID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0LnVwZGF0ZXMudXBkYXRlZENlbGxzOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZFN1Y2Nlc3ModHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNBcHBlbmRFcnJvcmVkKCfQntGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSwg0YfRgtC+INCy0Ysg0LLQvtGI0LvQuCDQsiDRgdC40YHRgtC10LzRgy4nKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NMb2cgPSBhc3luYyAobWVzc2FnZTogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbbWVzc2FnZSwgZGF0ZVRpbWUudG9VVENTdHJpbmcoKV1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuYXBwZW5kKHtcclxuICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogTE9HU19TUFJFQURTSEVFVF9JRCxcclxuICAgICAgICAgICAgcmFuZ2U6ICdBOkInLFxyXG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBWYWx1ZUlucHV0T3B0aW9uLlVTRVJfRU5URVJFRCxcclxuICAgICAgICAgICAgaW5zZXJ0RGF0YU9wdGlvbjogSW5zZXJ0RGF0YU9wdGlvbi5PVkVSV1JJVEUsXHJcbiAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUVcclxuICAgICAgICB9LCB7IHZhbHVlczogZGF0YSB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc1VwZGF0ZURhdGEgPSAoc3ByZWFkc2hlZXRJZDogc3RyaW5nLCB2YWx1ZVJhbmdlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogJ0E2OkQxMCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBWYWx1ZUlucHV0T3B0aW9uLlVTRVJfRU5URVJFRCxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRlVGltZVJlbmRlck9wdGlvbjogRGF0ZVRpbWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1NUUklOR1xyXG4gICAgICAgICAgICB9LCB7IHZhbHVlczogdmFsdWVSYW5nZSB9KTtcclxuICAgICAgICAgICAgLy9UT0RPOiBQcm9jZXNzIHJlc3BvbnNlIHJlc3VsdFxyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHJlc3BvbnNlLnJlc3VsdC52YWx1ZXM7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyhpdGVtcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNIYXNFcnJvcmVkKHRydWUpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQ2hlY2sgPSBjcmVhdGVBY3Rpb24oQ1JFQVRFX0NIRUNLKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzQ2hlY2tvdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBjaGVjazogQ2hlY2sgPSBzdGF0ZS5jaGVjaztcclxuICAgICAgICAgICAgY29uc3QgeyBsb2cgfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzUmFuZ2UgPSBcIlJhd0RyaW5rc0RhdGEhQTpGXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc0RhdGEgPSBbXTtcclxuICAgICAgICAgICAgY2hlY2suZHJpbmtzLmZvckVhY2goYXN5bmMgZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbZC5pZCwgZC5zaXplLCBjaGVjay5wYXltZW50LCBjaGVjay50eXBlLCBkYXRlVGltZSwgY2hlY2suaWRdO1xyXG4gICAgICAgICAgICAgICAgZHJpbmtzRGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGRyaW5rc0RhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YShTUFJFQURTSEVFVF9JRCwgZHJpbmtzUmFuZ2UsIGRyaW5rc0RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydHNSYW5nZSA9IFwiUmF3RGVzc2VydHNEYXRhIUE6SFwiO1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0c0RhdGEgPSBbXTtcclxuICAgICAgICAgICAgY2hlY2suZGVzc2VydHMuZm9yRWFjaChhc3luYyBkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtkLnR5cGUsIGQudGFzdGUsIGQucXVhbnRpdHksIGQuc2l6ZSwgY2hlY2sucGF5bWVudCwgY2hlY2sudHlwZSwgZGF0ZVRpbWUsIGNoZWNrLmlkXTtcclxuICAgICAgICAgICAgICAgIGRlc3NlcnRzRGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGRlc3NlcnRzRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKFNQUkVBRFNIRUVUX0lELCBkZXNzZXJ0c1JhbmdlLCBkZXNzZXJ0c0RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goQ2hlY2tvdXQoKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFNob3dOb3RpZmljYXRpb24oMCwgJ9CX0LDQutCw0Lcg0YHQvtGF0YDQsNC90ZHQvSEnKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBQcm9jZXNzTG9nKGxvZyk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2coSlNPTi5zdHJpbmdpZnkoY2hlY2spKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goQ2xlYXJMb2coKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LLRiyDQstC+0YjQu9C4INCyINGB0LjRgdGC0LXQvNGDLicpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQgPSAocGFydG5lcjogc3RyaW5nLCBtYWNRdHk6IG51bWJlciwgemVwUXR5OiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcGFydG5lcnNSYW5nZSA9IFwiUmF3UGFydG5lcnNEYXRhIUE6RFwiO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0bmVyc0RhdGEgPSBbW3BhcnRuZXIsIG1hY1F0eSwgemVwUXR5LCBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyldXTtcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEoU1BSRUFEU0hFRVRfSUQsIHBhcnRuZXJzUmFuZ2UsIHBhcnRuZXJzRGF0YSkpO1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9jZXNzTG9nKEpTT04uc3RyaW5naWZ5KHBhcnRuZXJzRGF0YSkpO1xyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChTaG93Tm90aWZpY2F0aW9uKDAsICfQl9Cw0LrQsNC3INGB0L7RhdGA0LDQvdGR0L0hJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNBcHBlbmRFcnJvcmVkKCfQntGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSwg0YfRgtC+INCy0Ysg0LLQvtGI0LvQuCDQsiDRgdC40YHRgtC10LzRgy4nKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrb3V0ID0gY3JlYXRlQWN0aW9uKFBST0NFU1NfQ0hFQ0tPVVQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERyaW5rID0gY3JlYXRlQWN0aW9uKEFERF9EUklOSywgKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gW3R5cGUsIHNpemVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGREZXNzZXJ0ID0gY3JlYXRlQWN0aW9uKEFERF9ERVNTRVJULCAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcikgPT4gW3R5cGUsIHRhc3RlLCBzaXplLCBxdWFudGl0eV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZURyaW5rID0gY3JlYXRlQWN0aW9uKERFTEVURV9EUklOSywgKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gW3R5cGUsIHNpemVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVEZXNzZXJ0ID0gY3JlYXRlQWN0aW9uKERFTEVURV9ERVNTRVJULCAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZykgPT4gW3R5cGUsIHRhc3RlLCBzaXplXSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0UGF5bWVudFR5cGUgPSBjcmVhdGVBY3Rpb24oU0VUX1BBWU1FTlRfVFlQRSwgKHR5cGU6IFBheW1lbnQpID0+IHR5cGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldE9yZGVyVHlwZSA9IGNyZWF0ZUFjdGlvbihTRVRfT1JERVJfVFlQRSwgKHR5cGU6IE9yZGVyVHlwZSkgPT4gdHlwZSk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNIYXNFcnJvcmVkID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVNfUkVKRUNURUQsIChoYXNFcnJvcmVkOiBib29sZWFuKSA9PiBoYXNFcnJvcmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0lzTG9hZGluZyA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TLCAoaXNMb2FkaW5nOiBib29sZWFuKSA9PiBpc0xvYWRpbmcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihMT0FEX0lURU1TX0ZVTEZJTExFRCwgKGl0ZW1zOiBhbnlbXSkgPT4gaXRlbXMpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zQXBwZW5kU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihBUFBFTkRfREFUQV9GVUxGSUxMRUQsIChzdWNjZXNzOiBib29sZWFuKSA9PiBzdWNjZXNzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0FwcGVuZEVycm9yZWQgPSBjcmVhdGVBY3Rpb24oQVBQRU5EX0RBVEFfUkVKRUNURUQsICh0ZXh0OiBzdHJpbmcpID0+IHRleHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dCdXN5ID0gY3JlYXRlQWN0aW9uKFNIT1dfQlVTWSwgKGlzQnVzeTogYm9vbGVhbikgPT4gaXNCdXN5KTtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dEYXRhID0gY3JlYXRlQWN0aW9uKExPR19EQVRBLCAodGV4dDogc3RyaW5nKSA9PiB0ZXh0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGVhckxvZyA9IGNyZWF0ZUFjdGlvbihDTEVBUl9MT0cpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhbmNlbCA9IGNyZWF0ZUFjdGlvbihDQU5DRUwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsZWFyRXJyb3IgPSBjcmVhdGVBY3Rpb24oQ0xFQVJfRVJST1IpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldExhc3RJZCA9IGNyZWF0ZUFjdGlvbihTRVRfTEFTVF9JRCwgKGxhc3RJZDogbnVtYmVyLCBsYXN0Q2hlY2s6IENoZWNrKSA9PiBbbGFzdElkLCBsYXN0Q2hlY2tdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93Tm90aWZpY2F0aW9uID0gY3JlYXRlQWN0aW9uKFNIT1dfTk9USUZJQ0FUSU9OLCAodHlwZTogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpID0+IFt0eXBlLCBtZXNzYWdlXSk7XHJcbiIsImltcG9ydCB7IFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9wYWdlcy9NYWluUGFnZSc7XHJcbmltcG9ydCBDaGVja1BhZ2UgZnJvbSAnLi9wYWdlcy9DaGVja1BhZ2UnO1xyXG5pbXBvcnQgQ2hlY2tvdXRQYWdlIGZyb20gJy4vcGFnZXMvQ2hlY2tvdXRQYWdlJztcclxuaW1wb3J0IE5vdEZvdW5kUGFnZSBmcm9tICcuL3BhZ2VzL05vdEZvdW5kUGFnZSc7XHJcbmltcG9ydCBQYXJ0bmVyc1BhZ2UgZnJvbSAnLi9wYWdlcy9QYXJ0bmVyc1BhZ2UnO1xyXG5pbXBvcnQgVGVzdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudCc7XHJcbmltcG9ydCBzY3JpcHRMb2FkZXIgZnJvbSAncmVhY3QtYXN5bmMtc2NyaXB0LWxvYWRlcic7XHJcbmltcG9ydCB7IERJU0NPVkVSWV9ET0NTLCBTQ09QRVMsIENMSUVOVF9JRCwgQVBJX0tFWSwgU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnLi9jb21wb25lbnRzL0FwcEJhcic7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gKFxyXG4gICAgPFN3aXRjaD5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtNYWluUGFnZX0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL2NoZWNrJyBjb21wb25lbnQ9e0NoZWNrUGFnZX0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL2NoZWNrT3V0JyBjb21wb25lbnQ9e0NoZWNrb3V0UGFnZX0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL3BhcnRuZXJzJyBjb21wb25lbnQ9e1BhcnRuZXJzUGFnZX0gLz5cclxuXHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy90ZXN0JyBjb21wb25lbnQ9e1Rlc3RDb21wb25lbnR9IC8+XHJcbiAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmRQYWdlfSAvPlxyXG4gICAgPC9Td2l0Y2g+XHJcbilcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFByb3BzIHtcclxuICAgIGlzU2NyaXB0TG9hZGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwU3RhdGUge1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudDxJQXBwUHJvcHMsIElBcHBTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTY3JpcHRMb2FkZWQgfSA9IG5leHRQcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2NyaXB0TG9hZGVkICYmICF0aGlzLnByb3BzLmlzU2NyaXB0TG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmxvYWQoJ2NsaWVudDphdXRoMicsIHRoaXMuaW5pdENsaWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgYXV0aDIgPSB3aW5kb3dbJ2dhcGknXS5hdXRoMi5pbml0KHtcclxuICAgICAgICAvLyAgICAgY2xpZW50X2lkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgLy8gICAgIHNjb3BlOiBTQ09QRVMsXHJcbiAgICAgICAgLy8gICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgIC8vICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gYXV0aDIuaXNTaWduZWRJbi5saXN0ZW4odGhpcy5zaWduaW5DaGFuZ2VkKTtcclxuXHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmlzU2lnbmVkSW4ubGlzdGVuKHRoaXMuc2lnbmluQ2hhbmdlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNTaWduZWRJbjogd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5nZXQoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5DaGFuZ2VkID0gKGlzU2lnbmVkSW4pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogaXNTaWduZWRJblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUF1dGhDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTaWdub3V0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbk91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2lnbmVkSW4gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dbJ2dhcGknXSB8fCAhd2luZG93WydnYXBpJ10uYXV0aDIgfHwgIXdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmlzU2lnbmVkSW4uZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgdGl0bGU9eydPTkknfSBpc1NpZ25lZEluPXtpc1NpZ25lZElufSBvbkxvZ2luQ2xpY2s9e3RoaXMuaGFuZGxlQXV0aENsaWNrfSBvbkxvZ291dENsaWNrPXt0aGlzLmhhbmRsZVNpZ25vdXRDbGlja30gLz5cclxuICAgICAgICAgICAge2lzU2lnbmVkSW4gJiYgPE1haW4gLz59XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIGlkPVwiYXV0aG9yaXplX2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXV0aENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ25vbmUnIDogJ2Jsb2NrJyB9fT5BdXRob3JpemU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNpZ25vdXRfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlNpZ24gT3V0PC9idXR0b24+ICovfVxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0TG9hZGVyKFxyXG4gICAgJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcydcclxuKShBcHApO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhckNvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBvcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAn0JTQvtC80L7QuScsXHJcbiAgICAgICAgcm91dGU6ICcvJ1xyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICB0aXRsZTogJ1Rlc3QnLFxyXG4gICAgLy8gICAgIHJvdXRlOiAnL3Rlc3QnXHJcbiAgICAvLyB9XHJcbl07XHJcblxyXG5jb25zdCBJVEVNX0hFSUdIVCA9IDQ4O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwQmFyQ29tcG9uZW50UHJvcHMge1xyXG4gICAgY2xhc3Nlcz86IGFueTtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbiAgICBoaXN0b3J5PzogYW55O1xyXG5cclxuICAgIG9uTG9naW5DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgICBvbkxvZ291dENsaWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwQmFyQ29tcG9uZW50U3RhdGUge1xyXG4gICAgYW5jaG9yRWw/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBCYXIgZXh0ZW5kcyBDb21wb25lbnQ8SUFwcEJhckNvbXBvbmVudFByb3BzLCBJQXBwQmFyQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFuY2hvckVsOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IGxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb3V0ZSAhPT0gb3B0aW9uLnJvdXRlKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChvcHRpb24ucm91dGUpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgIGFuY2hvckVsOiBudWxsIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVMb2dpbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTaWduZWRJbiwgb25Mb2dpbkNsaWNrLCBvbkxvZ291dENsaWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTaWduZWRJbikge1xyXG4gICAgICAgICAgICBvbkxvZ291dENsaWNrKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvbkxvZ2luQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTWVudSgpIHtcclxuICAgICAgICBjb25zdCB7IGFuY2hvckVsIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydhcHBiYXJfbWVudUJ1dHRvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1vd25zPXtvcGVuID8gJ2xvbmctbWVudScgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvbmctbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IElURU1fSEVJR0hUICogNC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtvcHRpb24ucm91dGUgPT09IGN1cnJlbnRSb3V0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2Uob3B0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRpdGxlLCBpc1NpZ25lZEluIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FwcGJhcl9yb290J30+XHJcbiAgICAgICAgICAgICAgICA8QXBwQmFyQ29tcG9uZW50IHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1lbnUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXsnYXBwYmFyX2dyb3cnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW5DbGlja30+e2lzU2lnbmVkSW4gPyAn0JLRi9C50YLQuCcgOiAn0JLQvtC50YLQuCd9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9BcHBCYXJDb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQXBwQmFyKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBHcmlkTG9hZGVyIH0gZnJvbSAncmVhY3Qtc3Bpbm5lcnMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCdXN5UHJvcHMge1xyXG4gICAgbG9hZGluZzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnVzeTogUmVhY3QuU0ZDPElCdXN5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wiYnVzeS1jb250YWluZXJcIiArIChwcm9wcy5sb2FkaW5nID8gXCJcIiA6IFwiIGludmlzaWJsZVwiKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXN5XCI+XHJcbiAgICAgICAgICAgIDxHcmlkTG9hZGVyXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17JyNkMDAwNmYnfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17cHJvcHMubG9hZGluZ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBZGREZXNzZXJ0LCBMb2dEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IHsgRGVzc2VydFR5cGUsIE1hY2Fyb25zRW51bSwgQ2FrZXNFbnVtLCBaZXBoeXJFbnVtIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBEZXNzZXJ0c0RpY3QsIE1hY2Fyb25zQ29sb3JzLCBaZXBoeXJDb2xvcnMgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcblxyXG5jb25zdCBNSVhfVEFTVEVfTkFNRSA9ICfQndCw0LHQvtGAJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBhZGREZXNzZXJ0OiAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcikgPT4gZGlzcGF0Y2goQWRkRGVzc2VydCh0eXBlLCB0YXN0ZSwgc2l6ZSwgcXVhbnRpdHkpKSxcclxuICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlc3NlcnRzQ29tcG9uZW50UHJvcHMge1xyXG4gIGFkZERlc3NlcnQ/OiAodHlwZTogRGVzc2VydFR5cGUsIHRhc3RlOiBzdHJpbmcsIHNpemU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcikgPT4gdm9pZDtcclxuICBoYW5kbGVDbG9zZT86ICgpID0+IHZvaWQ7XHJcbiAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlc3NlcnRzQ29tcG9uZW50U3RhdGUge1xyXG4gIGRlc3NlcnRUeXBlPzogRGVzc2VydFR5cGU7XHJcbiAgZGVzc2VydFRhc3RlPzogc3RyaW5nO1xyXG4gIGRlc3NlcnRRdWFudGl0aWVzPzogeyBbaWQ6IHN0cmluZ106IG51bWJlcjsgfTtcclxufVxyXG5cclxuY2xhc3MgRGVzc2VydHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SURlc3NlcnRzQ29tcG9uZW50UHJvcHMsIElEZXNzZXJ0c0NvbXBvbmVudFN0YXRlPntcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRlc3NlcnRUeXBlOiBudWxsLFxyXG4gICAgICBkZXNzZXJ0VGFzdGU6IG51bGwsXHJcbiAgICAgIGRlc3NlcnRRdWFudGl0aWVzOiB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5jbG9zZScpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydFNlbGVjdCA9IChkZXNzZXJ0KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFR5cGU6IGRlc3NlcnRcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFNlbGVjdGVkLT4nICsgZGVzc2VydCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0VGFzdGVTZWxlY3QgPSBhc3luYyAodGFzdGUpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKGRlc3NlcnRUeXBlID09PSBEZXNzZXJ0VHlwZS5DYWtlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRlc3NlcnRUYXN0ZTogdGFzdGVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRUYXN0ZVNlbGVjdGVkLT4nICsgdGFzdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVEZXNzZXJ0SW5jcmVhc2UodGFzdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydE1peFNlbGVjdCA9IGFzeW5jIChxdHkpID0+IHtcclxuICAgIHRoaXMuaGFuZGxlRGVzc2VydEluY3JlYXNlKE1JWF9UQVNURV9OQU1FLCBxdHkpO1xyXG4gICAgLy8gYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBNSVhfVEFTVEVfTkFNRSwgbnVsbCwgcXR5KTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmhhbmRsZURlc3NlcnRNaXhTZWxlY3QtPicgKyBxdHkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydFNpemVPclF1YW50aXR5U2VsZWN0ID0gYXN5bmMgKHNpemVPclF0eSkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGlmIChkZXNzZXJ0VHlwZSA9PT0gRGVzc2VydFR5cGUuQ2FrZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERlc3NlcnQoZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSwgc2l6ZU9yUXR5LCAxKTtcclxuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0U2l6ZVNlbGVjdGVkLT4nICsgc2l6ZU9yUXR5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBudWxsLCBzaXplT3JRdHkpO1xyXG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRRdWFudGl0eVNlbGVjdGVkLT4nICsgc2l6ZU9yUXR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUZpbmlzaCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRRdWFudGl0aWVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlc3NlcnRRdWFudGl0aWVzKSB7XHJcbiAgICAgIGNvbnN0IGRlc3NlcnRUYXN0ZSA9IGtleS5zcGxpdCgnLycpWzFdO1xyXG4gICAgICBjb25zdCBxdHkgPSBkZXNzZXJ0UXVhbnRpdGllc1trZXldO1xyXG4gICAgICBpZiAocXR5KSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIG51bGwsIHF0eSB8fCAwKTtcclxuICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmhhbmRsZUZpbmlzaCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWQoZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSkge1xyXG4gICAgcmV0dXJuIGAke2Rlc3NlcnRUeXBlfS8ke2Rlc3NlcnRUYXN0ZX1gO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydEluY3JlYXNlID0gKHRhc3RlLCBxdHkgPSAxKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRRdWFudGl0aWVzLCBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQoZGVzc2VydFR5cGUsIHRhc3RlKTtcclxuICAgIGlmICghZGVzc2VydFF1YW50aXRpZXNbaWRdKSB7XHJcbiAgICAgIGRlc3NlcnRRdWFudGl0aWVzW2lkXSA9IHF0eTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc3NlcnRRdWFudGl0aWVzW2lkXSArPSBxdHk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRlc3NlcnRRdWFudGl0aWVzXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRRdHlJbmNyZWFzZS0+JyArIGlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnREZWNyZWFzZSA9ICh0YXN0ZSwgcXR5ID0gMSkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0UXVhbnRpdGllcywgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmdldElkKGRlc3NlcnRUeXBlLCB0YXN0ZSk7XHJcbiAgICBpZiAoZGVzc2VydFF1YW50aXRpZXNbaWRdKSB7XHJcbiAgICAgIGRlc3NlcnRRdWFudGl0aWVzW2lkXSAtPSBxdHk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRlc3NlcnRRdWFudGl0aWVzXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRRdHlJbmNyZWFzZS0+JyArIGlkKTtcclxuICB9XHJcblxyXG4gIGNvdW50VG90YWxEZXNzZXJ0UXVhbnRpdHkoKSB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRRdWFudGl0aWVzLCBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlc3NlcnRRdWFudGl0aWVzKSB7XHJcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChkZXNzZXJ0VHlwZSkpIHtcclxuICAgICAgICByZXN1bHQgKz0gZGVzc2VydFF1YW50aXRpZXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGdldEFycmF5RnJvbUVudW0oZW46IGFueSkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVuKTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGQgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBkLFxyXG4gICAgICAgIHZhbHVlOiBlbltkXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHZhbHVlcztcclxuICB9XHJcblxyXG4gIHJlbmRlckRlc3NlcnRzKCkge1xyXG4gICAgY29uc3QgZGVzc2VydEtleXMgPSBPYmplY3Qua2V5cyhEZXNzZXJ0VHlwZSk7XHJcbiAgICBjb25zdCBkZXNzZXJ0cyA9IGRlc3NlcnRLZXlzLm1hcChkID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogZCxcclxuICAgICAgICB2YWx1ZTogRGVzc2VydFR5cGVbZF1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtkZXNzZXJ0cy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFNlbGVjdChkLnZhbHVlKX0ga2V5PXtkLmlkfSA+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nbWFjYXJvbkF2YXRhcicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2RkNzNlMicgfX0+XHJcbiAgICAgICAgICAgICAgICB7ZC52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlfSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQXBwbHlXcmFwZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9kaXY+O1xyXG4gIH07XHJcblxyXG4gIHJlbmRlckRlc3NlcnRUYXN0ZXMoKSB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0UXVhbnRpdGllcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBsZXQgZGVzc2VydFRhc3RlcztcclxuICAgIGxldCBleHRyYU9wdGlvbnMgPSBbXTtcclxuICAgIHN3aXRjaCAoZGVzc2VydFR5cGUpIHtcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5DYWtlOlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oQ2FrZXNFbnVtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5NYWNhcm9uOlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oTWFjYXJvbnNFbnVtKTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogNixcclxuICAgICAgICAgIHRpdGxlOiAn0J3QsNCx0L7RgCDQvdCwIDYg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXh0cmFPcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IDEyLFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgMTIg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXh0cmFPcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IDI0LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgMjQg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGVzc2VydFR5cGUuWmVwaHlyOlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSB0aGlzLmdldEFycmF5RnJvbUVudW0oWmVwaHlyRW51bSk7XHJcbiAgICAgICAgZXh0cmFPcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IDgsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCA4INGI0YIuJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiAxNixcclxuICAgICAgICAgIHRpdGxlOiAn0J3QsNCx0L7RgCDQvdCwIDE2INGI0YIuJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGRlc3NlcnRUYXN0ZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdkZXNzZXJ0c1Rhc3Rlc1dyYXBwZXInPlxyXG4gICAgICB7ZGVzc2VydFR5cGUgIT09IERlc3NlcnRUeXBlLkNha2UgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkNoZWNrIE91dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmluaXNofT5cclxuICAgICAgICAgICAg0J/RgNC40LzQtdC90LjRgtGMXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPExpc3QgY2xhc3NOYW1lPSdkZXNzZXJ0c1Rhc3Rlc0xpc3RXcmFwcGVyJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkZXNzZXJ0VGFzdGVzLm1hcChkID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRUYXN0ZVNlbGVjdChkLnZhbHVlKX0ga2V5PXtkLmlkfSA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J21hY2Fyb25BdmF0YXInIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZGVzc2VydFR5cGUgPT09IERlc3NlcnRUeXBlLk1hY2Fyb24gPyBNYWNhcm9uc0NvbG9yc1tkLnZhbHVlXSA6IFplcGh5ckNvbG9yc1tkLnZhbHVlXSB9fT5cclxuICAgICAgICAgICAgICAgICAge2QudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZC52YWx1ZSArIChkZXNzZXJ0VHlwZSAhPT0gRGVzc2VydFR5cGUuQ2FrZSA/IGAoJHtkZXNzZXJ0UXVhbnRpdGllc1t0aGlzLmdldElkKGRlc3NlcnRUeXBlLCBkLnZhbHVlKV0gfHwgMH0pYCA6ICcnKX0gLz5cclxuICAgICAgICAgICAgICB7ZGVzc2VydFR5cGUgIT09IERlc3NlcnRUeXBlLkNha2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uID5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkFkZFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydERlY3JlYXNlKGQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICB7J1xcdTIwMTQnfVxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBleHRyYU9wdGlvbnMubWFwKG8gPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydE1peFNlbGVjdChvLnZhbHVlKX0ga2V5PXtvLnZhbHVlfSA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J21hY2Fyb25BdmF0YXInIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNkZDczZTInIH19PlxyXG4gICAgICAgICAgICAgICAgICB7by52YWx1ZX1cclxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtgJHtvLnRpdGxlfSgke2Rlc3NlcnRRdWFudGl0aWVzW3RoaXMuZ2V0SWQoZGVzc2VydFR5cGUsIE1JWF9UQVNURV9OQU1FKV0gfHwgMH0pYH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25DYW5jZWxXcmFwZXInPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXJEZXNzZXJ0U2l6ZSgpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBkZXNzZXJ0U2l6ZXMgPSBEZXNzZXJ0c0RpY3RbZGVzc2VydFR5cGVdO1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydFNpemVzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2l6ZU9yUXVhbnRpdHlTZWxlY3QoZCl9IGtleT17ZH0gPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZH0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIDxEaWFsb2cgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLWRpYWxvZy10aXRsZVwiIG9wZW4gZnVsbFNjcmVlbiA+XHJcbiAgICAgIDxEaWFsb2dUaXRsZSBpZD1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICB7IWRlc3NlcnRUeXBlID8gJ9CS0YvQsdC10YDQuNGC0LUg0JTQtdGB0LXRgNGCJyA6ICghZGVzc2VydFRhc3RlID8gYNCS0YvQsdC10YDQuNGC0LUg0LLQutGD0YEgKCR7dGhpcy5jb3VudFRvdGFsRGVzc2VydFF1YW50aXR5KCl9KWAgOiAn0JLRi9Cx0LXRgNC40YLQtSDRgNCw0LfQvNC10YAnKX1cclxuICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgeyFkZXNzZXJ0VHlwZSA/IHRoaXMucmVuZGVyRGVzc2VydHMoKSA6ICghZGVzc2VydFRhc3RlID8gdGhpcy5yZW5kZXJEZXNzZXJ0VGFzdGVzKCkgOiB0aGlzLnJlbmRlckRlc3NlcnRTaXplKCkpfVxyXG4gICAgPC9EaWFsb2c+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERlc3NlcnRzQ29tcG9uZW50KSlcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFkZERyaW5rLCBMb2dEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IHsgRHJpbmtzVHlwZSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRHJpbmtzRGljdCB9IGZyb20gJy4uL3V0aWxzL2RpY3Rpb25hcmllcyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGREcmluazogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gZGlzcGF0Y2goQWRkRHJpbmsodHlwZSwgc2l6ZSkpLFxyXG4gICAgICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJpbmtzQ29tcG9uZW50UHJvcHMge1xyXG4gICAgYWRkRHJpbms/OiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gICAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyaW5rc0NvbXBvbmVudFN0YXRlIHtcclxuICAgIGRyaW5rVHlwZT86IERyaW5rc1R5cGU7XHJcbiAgICBkcmlua1NpemU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIERyaW5rc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRHJpbmtzQ29tcG9uZW50UHJvcHMsIElEcmlua3NDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJpbmtUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICBkcmlua1NpemU6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5jbG9zZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyaW5rU2VsZWN0ID0gYXN5bmMgKGRyaW5rKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHJpbmtTaXplcyA9IERyaW5rc0RpY3RbZHJpbmtdO1xyXG4gICAgICAgIGlmIChkcmlua1NpemVzICYmIGRyaW5rU2l6ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZHJpbmtUeXBlOiBkcmluayxcclxuICAgICAgICAgICAgICAgIGRyaW5rU2l6ZTogZHJpbmtTaXplc1swXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRHJpbmsoZHJpbmssIGRyaW5rU2l6ZXNbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9nRGF0YShgZHJpbmtzLT5kcmlua1NlbGVjdGVkLT4ke2RyaW5rfS0+ZHJpbmtTaXplU2VsZWN0ZWQtPiR7ZHJpbmtTaXplc1swXX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRyaW5rVHlwZTogZHJpbmtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5kcmlua1NlbGVjdGVkLT4nICsgZHJpbmspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmlua1NpemVTZWxlY3QgPSBhc3luYyAoZHJpbmtTaXplKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyaW5rU2l6ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERyaW5rKGRyaW5rVHlwZSwgZHJpbmtTaXplKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkcmlua3MtPmRyaW5rU2l6ZVNlbGVjdGVkLT4nICsgZHJpbmtTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEcmlua3MoKSB7XHJcbiAgICAgICAgY29uc3QgZHJpbmtLZXlzID0gT2JqZWN0LmtleXMoRHJpbmtzVHlwZSk7XHJcbiAgICAgICAgY29uc3QgZHJpbmtzID0gZHJpbmtLZXlzLm1hcChkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IERyaW5rc1R5cGVbZF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZHJpbmtzV3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT0nZHJpbmtzTGlzdFdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAge2RyaW5rcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2RyaW5rQXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZC52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQXBwbHlXcmFwZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJEcmlua1NpemVzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGRyaW5rU2l6ZXMgPSBEcmlua3NEaWN0W2RyaW5rVHlwZV07XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtkcmlua1NpemVzLm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRHJpbmtTaXplU2VsZWN0KGQpfSBrZXk9e2R9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2RyaW5rQXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkcmlua1R5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuIGZ1bGxTY3JlZW4gPlxyXG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+eyFkcmlua1R5cGUgPyAn0JLRi9Cx0LXRgNC40YLQtSDQvdCw0L/QuNGC0L7QuicgOiAn0JLRi9Cx0LXRgNC40YLQtSDRgNCw0LfQvNC10YAnfTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgIHshZHJpbmtUeXBlID8gdGhpcy5yZW5kZXJEcmlua3MoKSA6IHRoaXMucmVuZGVyRHJpbmtTaXplcygpfVxyXG4gICAgICAgIDwvRGlhbG9nPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERyaW5rc0NvbXBvbmVudCkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IEV4cGFuc2lvblBhbmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsJztcclxuaW1wb3J0IEV4cGFuc2lvblBhbmVsU3VtbWFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbFN1bW1hcnknO1xyXG5pbXBvcnQgRXhwYW5zaW9uUGFuZWxEZXRhaWxzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsRGV0YWlscyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIaXN0b3J5Q29tcG9uZW50UHJvcHMge1xyXG4gICAgaGlzdG9yeT86IEFycmF5PENoZWNrPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGlzdG9yeUNvbXBvbmVudFN0YXRlIHtcclxufVxyXG5cclxuY2xhc3MgSGlzdG9yeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJSGlzdG9yeUNvbXBvbmVudFByb3BzLCBJSGlzdG9yeUNvbXBvbmVudFN0YXRlPntcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAgICAgICAge2hpc3Rvcnkuc29ydCgoYSwgYikgPT4gKGEuaWQgPiBiLmlkKSA/IC0xIDogKChiLmlkID4gYS5pZCkgPyAxIDogMCkpLm1hcChoID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0ga2V5PXtoLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8RXhwYW5zaW9uUGFuZWwgY2xhc3NOYW1lPSdoaXN0b3J5Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsU3VtbWFyeSBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2DQp9C10LogIyR7aC5pZH1gfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9FeHBhbnNpb25QYW5lbFN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbERldGFpbHMgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCU0LXRgdC10YDRgtGLPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpc3RvcnlJdGVtUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGguZGVzc2VydHMubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUeXBvZ3JhcGh5IGtleT17aW5kZXh9IHZhcmlhbnQ9eydzdWJoZWFkaW5nJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2QudHlwZX0gJHtkLnRhc3RlfTogJHtkLnF1YW50aXR5ID8gZC5xdWFudGl0eSA6IGQuc2l6ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCd0LDQv9C40YLQutC4PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpc3RvcnlJdGVtUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGguZHJpbmtzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VHlwb2dyYXBoeSBrZXk9e2luZGV4fSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtkLmlkfTogJHtkLnNpemV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpc3RvcnlJdGVtUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj7QotC40L8g0L7Qv9C70LDRgtGLOiA8L2I+e2gucGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+0KLQuNC/INC30LDQutCw0LfQsDogPC9iPntoLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWxEZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIaXN0b3J5Q29tcG9uZW50KTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuanMnO1xyXG5cclxuY29uc3QgTGFyZ2VCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2xhc3NlcywgY29tcG9uZW50LCBvbkNsaWNrLCB0aXRsZSwgaW1hZ2VVcmwgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgICAgICBmb2N1c1JpcHBsZVxyXG4gICAgICAgICAgICAgICAga2V5PXsnbWFpbid9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzAnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJoZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMYXJnZUJ1dHRvbik7IiwiZXhwb3J0IGRlZmF1bHQgdGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzMwdmgnXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUgIWltcG9ydGFudCcsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjpob3ZlciwgJiRmb2N1c1Zpc2libGUnOiB7XHJcbiAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICAgICAgJyYgJGltYWdlQmFja2Ryb3AnOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJiAkaW1hZ2VNYXJrZWQnOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJiAkaW1hZ2VUaXRsZSc6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCBjdXJyZW50Q29sb3InLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9jdXNWaXNpYmxlOiB7fSxcclxuICAgIGltYWdlQnV0dG9uOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICAgIGltYWdlU3JjOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciA0MCUnLFxyXG4gICAgfSxcclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgICBvcGFjaXR5OiAwLjQsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VUaXRsZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiA0fXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICsgNn1weGAsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VNYXJrZWQ6IHtcclxuICAgICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgICAgd2lkdGg6IDE4LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgYm90dG9tOiAtMixcclxuICAgICAgICBsZWZ0OiAnY2FsYyg1MCUgLSA5cHgpJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknKSxcclxuICAgIH1cclxufSk7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBDaGVjaywgRGVzc2VydCwgRHJpbmssIERlc3NlcnRUeXBlLCBEcmlua3NUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgRHJpbmtzQ29tcG9uZW50IGZyb20gJy4vRHJpbmtzQ29tcG9uZW50JztcclxuaW1wb3J0IERlc3NlcnRzQ29tcG9uZW50IGZyb20gJy4vRGVzc2VydHNDb21wb25lbnQnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IExhcmdlQnV0dG9uIGZyb20gJy4vTGFyZ2VCdXR0b24nO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCB7IERlbGV0ZURlc3NlcnQsIERlbGV0ZURyaW5rIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmNvbnN0IGRlc3NlcnRzSW1hZ2UgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL2Rlc3NlcnRzX2ljb24uanBnJyk7XHJcbmNvbnN0IGRyaW5rc0ltYWdlID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9kcmlua3NfaWNvbi5qcGcnKTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVjazogc3RhdGUuY2hlY2tcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGVsZXRlRGVzc2VydDogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcpID0+IGRpc3BhdGNoKERlbGV0ZURlc3NlcnQodHlwZSwgdGFzdGUsIHNpemUpKSxcclxuICAgICAgICBkZWxldGVEcmluazogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gZGlzcGF0Y2goRGVsZXRlRHJpbmsodHlwZSwgc2l6ZSkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTmV3T3JkZXJDb21wb25lbnRQcm9wcyB7XHJcbiAgICBjaGVjaz86IENoZWNrO1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuXHJcbiAgICBkZWxldGVEZXNzZXJ0PzogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBkZWxldGVEcmluaz86ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5ld09yZGVyQ29tcG9uZW50U3RhdGUge1xyXG4gICAgc2hvd0RyaW5rcz86IGJvb2xlYW47XHJcbiAgICBzaG93RGVzc2VydHM/OiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBOZXdPcmRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJTmV3T3JkZXJDb21wb25lbnRQcm9wcywgSU5ld09yZGVyQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dEcmlua3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93RGVzc2VydHM6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVByaWNlKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIEhlbHBlci5jYWxjdWxhdGVQcmljZShjaGVjayk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRHJpbmtDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0RyaW5rczogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGVzc2VydENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93RGVzc2VydHM6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvY2hlY2tPdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEZWxldGVEcmluayA9IChkcmluazogRHJpbmspID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZURyaW5rKGRyaW5rLmlkLCBkcmluay5zaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEZWxldGVEZXNzZXJ0ID0gKGRlc3NlcnQ6IERlc3NlcnQpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZURlc3NlcnQoZGVzc2VydC50eXBlLCBkZXNzZXJ0LnRhc3RlLCBkZXNzZXJ0LnNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNoZWNrQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dENvbnRyb2xHcm91cFwiPlxyXG4gICAgICAgICAgICAgICAg0JjRgtC+0LPQvjoge3RoaXMuY2FsY3VsYXRlUHJpY2UoKX0g0LPRgNC9LlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICB7Y2hlY2suZHJpbmtzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtgJHtkLmlkfSAtICR7ZC5zaXplfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJEZWxldGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZURyaW5rKGQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIHtjaGVjay5kZXNzZXJ0cy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YCR7ZC50eXBlfSAtICR7ZC50YXN0ZX0gLSAke2QucXVhbnRpdHl9JHtkLnNpemUgPyAoJyAtICcgKyBkLnNpemUpIDogJyd9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlRGVzc2VydChkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2hvd0RyaW5rcywgc2hvd0Rlc3NlcnRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICDQn9C+0LbQsNC70YPQudGB0YLQsCwg0YHQvtC30LTQsNC50YLQtSDRgdC90LDRh9Cw0LvQsCDRh9C10LpcclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaGVhZGxpbmVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAg0J3QvtCy0YvQuSDQt9Cw0LrQsNC3XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge2DQp9C10LogIyR7Y2hlY2suaWR9YH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uc1dyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQlNCV0KHQldCg0KLQqyd9IGltYWdlVXJsPXtkZXNzZXJ0c0ltYWdlfSBvbkNsaWNrPXt0aGlzLmFkZERlc3NlcnRDbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld09yZGVyQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQndCQ0J/QmNCi0JrQmCd9IGltYWdlVXJsPXtkcmlua3NJbWFnZX0gb25DbGljaz17dGhpcy5hZGREcmlua0NsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGVja0NvbnRlbnQoKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydidXR0b25zV3JhcGVyJ30+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NoZWNrLmRlc3NlcnRzLmxlbmd0aCA9PT0gMCAmJiBjaGVjay5kcmlua3MubGVuZ3RoID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRDbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDQn9GA0L7QtNC+0LvQttC40YLRjFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93RHJpbmtzICYmIDxEcmlua3NDb21wb25lbnQgaGFuZGxlQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93RHJpbmtzOiBmYWxzZSB9KX0gLz59XHJcbiAgICAgICAgICAgIHtzaG93RGVzc2VydHMgJiYgPERlc3NlcnRzQ29tcG9uZW50IGhhbmRsZUNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0Rlc3NlcnRzOiBmYWxzZSB9KX0gLz59XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoTmV3T3JkZXJDb21wb25lbnQpKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IEVycm9ySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3InO1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgU25hY2tiYXJDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudCc7XHJcbmltcG9ydCBXYXJuaW5nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2FybmluZyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgeyBDbGVhckVycm9yIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogc3RhdGUuZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIHR5cGU6IHN0YXRlLm5vdGlmaWNhdGlvblR5cGVcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xlYXJFcnJvcjogKCkgPT4gZGlzcGF0Y2goQ2xlYXJFcnJvcigpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFZhcmlhbnRJY29uIHtcclxuICAgIHN1Y2Nlc3MsXHJcbiAgICB3YXJuaW5nLFxyXG4gICAgZXJyb3IsXHJcbiAgICBpbmZvXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvbkNvbXBvbmVudFByb3BzIHtcclxuICAgIC8vIGNsYXNzZXM6IGFueTtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHR5cGU6IFZhcmlhbnRJY29uO1xyXG5cclxuICAgIGNsZWFyRXJyb3I/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb3RpZmljYXRpb25Db21wb25lbnRTdGF0ZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SU5vdGlmaWNhdGlvbkNvbXBvbmVudFByb3BzLCBJTm90aWZpY2F0aW9uQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgZ2V0SWNvbigpIHtcclxuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLnN1Y2Nlc3M6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBDaGVja0NpcmNsZUljb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi53YXJuaW5nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gV2FybmluZ0ljb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5lcnJvcjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IEVycm9ySWNvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLmluZm86XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBJbmZvSWNvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGFzcygpIHtcclxuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLnN1Y2Nlc3M6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi53YXJuaW5nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3dhcm5pbmcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uZXJyb3I6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnZXJyb3InO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uaW5mbzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdpbmZvJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IEljb24gPSB0aGlzLmdldEljb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb3Blbj17ISFtZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTbmFja2JhckNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuZ2V0Q2xhc3MoKX1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY2xpZW50LXNuYWNrYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjbGllbnQtc25hY2tiYXJcIiBjbGFzc05hbWU9eydtZXNzYWdlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2ljb24nLCAnaWNvbi12YXJpYW50Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J25vdGlmaWNhdGlvbkNsb3NlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTm90aWZpY2F0aW9uQ29tcG9uZW50KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IFBhcnRuZXJzRW51bSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgUHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQgfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgeyBDYWZmZWVQcmljZXMsIFpFUEhZUl9QQVJUTkVSU19QUklDRSB9IGZyb20gJy4uL3V0aWxzL2RpY3Rpb25hcmllcyc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdDogKHBhcnRuZXI6IHN0cmluZywgbWFjUXR5OiBudW1iZXIsIHplcFF0eTogbnVtYmVyKSA9PiBkaXNwYXRjaChQcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdChwYXJ0bmVyLCBtYWNRdHksIHplcFF0eSkpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFydG5lcnNDb21wb25lbnRQcm9wcyB7XHJcbiAgICBoaXN0b3J5PzogYW55O1xyXG4gICAgcHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQ/OiAocGFydG5lcjogc3RyaW5nLCBtYWNRdHk6IG51bWJlciwgemVwUXR5OiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnRuZXJzQ29tcG9uZW50U3RhdGUge1xyXG4gICAgcGFydG5lcj86IHN0cmluZztcclxuICAgIG1hY2Fyb25zUXR5PzogbnVtYmVyO1xyXG4gICAgemVwaHlyUXR5PzogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBQYXJ0bmVyc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJUGFydG5lcnNDb21wb25lbnRQcm9wcywgSVBhcnRuZXJzQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhcnRuZXI6ICcnLFxyXG4gICAgICAgICAgICBtYWNhcm9uc1F0eTogMCxcclxuICAgICAgICAgICAgemVwaHlyUXR5OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFycmF5RnJvbUVudW0oZW46IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbik7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBlbltkXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBhcnRuZXJTZWxlY3QgPSAoZXYpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJ0bmVyID0gZXYudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXJ0bmVyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1hY2Fyb25zUXR5Q2hhbmdlID0gKGV2KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1hY2Fyb25zUXR5OiBldi50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVaZXBoeXJRdHlDaGFuZ2UgPSAoZXYpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgemVwaHlyUXR5OiBldi50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBwcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdCwgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IHBhcnRuZXIsIG1hY2Fyb25zUXR5LCB6ZXBoeXJRdHl9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBwcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdChwYXJ0bmVyLCBtYWNhcm9uc1F0eSwgemVwaHlyUXR5KTtcclxuICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVUb3RhbFByaWNlKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFydG5lciwgbWFjYXJvbnNRdHksIHplcGh5clF0eSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgdG90YWxQcmljZSA9IDA7XHJcbiAgICAgICAgaWYgKCFwYXJ0bmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFByaWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWFjYXJvblByaWNlID0gQ2FmZmVlUHJpY2VzW3BhcnRuZXJdO1xyXG4gICAgICAgIHRvdGFsUHJpY2UgKz0gbWFjYXJvbnNRdHkgKiBtYWNhcm9uUHJpY2U7XHJcblxyXG4gICAgICAgIHRvdGFsUHJpY2UgKz0gWkVQSFlSX1BBUlRORVJTX1BSSUNFICogemVwaHlyUXR5O1xyXG5cclxuICAgICAgICByZXR1cm4gdG90YWxQcmljZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYXJ0bmVyLCBtYWNhcm9uc1F0eSwgemVwaHlyUXR5IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHBhcnRuZXJzID0gdGhpcy5nZXRBcnJheUZyb21FbnVtKFBhcnRuZXJzRW51bSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImhlYWRsaW5lXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgINCe0L/RgtC+0LLRi9C5INC30LDQutCw0LdcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPSdwYXJ0bmVyU2VsZWN0V3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwicGFydG5lci1zZWxlY3RcIj7QmtC+0YTQtdC50L3RjzwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFydG5lcn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXJ0bmVyU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3BhcnRuZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3BhcnRuZXItc2VsZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZW0+Tm9uZTwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRuZXJzLm1hcChwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW0ga2V5PXtwLmlkfSB2YWx1ZT17cC52YWx1ZX0+e3AudmFsdWV9PC9NZW51SXRlbT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JzQsNC60LDRgNC+0L3Ri1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWFjYXJvbnNRdHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVNYWNhcm9uc1F0eUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwYXJ0bmVyfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQvNCw0LrQsNGA0L7QvdGBXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQl9C10YTQuNGAXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt6ZXBoeXJRdHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVaZXBoeXJRdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFydG5lcn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LfQtdGE0LjRgNCwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQmNGC0L7Qs9C+XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtgJHt0aGlzLmNhbGN1bGF0ZVRvdGFsUHJpY2UoKX0g0LPRgNC9LmB9XHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYnV0dG9uc1dyYXBlcid9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFydG5lcn1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0JPQvtGC0L7QstC+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAoUGFydG5lcnNDb21wb25lbnQpKTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFByb2Nlc3NGZXRjaERhdGEsIFByb2Nlc3NBcHBlbmREYXRhLCBQcm9jZXNzVXBkYXRlRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgc2NyaXB0TG9hZGVyIGZyb20gJ3JlYWN0LWFzeW5jLXNjcmlwdC1sb2FkZXInO1xyXG5pbXBvcnQgeyBESVNDT1ZFUllfRE9DUywgU0NPUEVTLCBDTElFTlRfSUQsIEFQSV9LRVksIFRFU1RfU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcyxcclxuICAgICAgICBoYXNFcnJvcmVkOiBzdGF0ZS5oYXNFcnJvcmVkLFxyXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxyXG4gICAgICAgIGxhYmVsOiBzdGF0ZS5sYWJlbFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZXRjaERhdGE6ICh1cmwpID0+IGRpc3BhdGNoKFByb2Nlc3NGZXRjaERhdGEodXJsKSksXHJcbiAgICAgICAgYXBwZW5kRGF0YTogKHVybCwgcmFuZ2UsIGRhdGEpID0+IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKHVybCwgcmFuZ2UsIGRhdGEpKSxcclxuICAgICAgICB1cGRhdGVEYXRhOiAodXJsLCBkYXRhKSA9PiBkaXNwYXRjaChQcm9jZXNzVXBkYXRlRGF0YSh1cmwsIGRhdGEpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RDb21wb25lbnRQcm9wcyB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIGl0ZW1zPzogYW55O1xyXG4gICAgaGFzRXJyb3JlZD86IGJvb2xlYW47XHJcbiAgICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG5cclxuICAgIGlzU2NyaXB0TG9hZGVkPzogYm9vbGVhbjtcclxuICAgIGlzU2NyaXB0TG9hZFN1Y2NlZWQ/OiBib29sZWFuO1xyXG5cclxuICAgIGZldGNoRGF0YT86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGFwcGVuZERhdGE/OiAodXJsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB2b2lkO1xyXG4gICAgdXBkYXRlRGF0YT86ICh1cmw6IHN0cmluZywgZGF0YTogYW55W10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgVGVzdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJVGVzdENvbXBvbmVudFByb3BzLCBJVGVzdENvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUF1dGhDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTaWdub3V0Q2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBcHBlbmRDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbXCJJdGVtMVwiLCBcIlhMXCIsIFwiMVwiLCBcIjBcIiwgZGF0ZVRpbWUudG9VVENTdHJpbmcoKV1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gXCJSYXdEYXRhIUE6RVwiO1xyXG4gICAgICAgIHRoaXMucHJvcHMuYXBwZW5kRGF0YShURVNUX1NQUkVBRFNIRUVUX0lELCByYW5nZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICBbXCJJdGVtMVwiLCBcIkNvc3RcIiwgXCJTdG9ja2VkXCIsIFwiU2hpcCBEYXRlXCJdLFxyXG4gICAgICAgICAgICBbXCJXaGVlbDFcIiwgXCIkMjAuNTBcIiwgXCI0XCIsIFwiMy8xLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkRvb3IxXCIsIFwiJDE1XCIsIFwiMlwiLCBcIjMvMTUvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiRW5naW5lMVwiLCBcIiQxMDBcIiwgXCIxXCIsIFwiMzAvMjAvMjAxNlwiXSxcclxuICAgICAgICAgICAgW1wiVG90YWxzMVwiLCBcIj1TVU0oQjI6QjQpXCIsIFwiPVNVTShDMjpDNClcIiwgXCI9TUFYKEQyOkQ0KVwiXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEYXRhKFRFU1RfU1BSRUFEU0hFRVRfSUQsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NjcmlwdExvYWRlZCB9ID0gbmV4dFByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JpcHRMb2FkZWQgJiYgIXRoaXMucHJvcHMuaXNTY3JpcHRMb2FkZWQpIHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnY2xpZW50OmF1dGgyJywgdGhpcy5pbml0Q2xpZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVNcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaERhdGEoVEVTVF9TUFJFQURTSEVFVF9JRCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaERhdGEoJ2h0dHA6Ly81ODI2ZWQ5NjM5MDBkNjEyMDAwMTM4YmQubW9ja2FwaS5pby9pdGVtcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGxhYmVsLCBoYXNFcnJvcmVkLCBpc0xvYWRpbmcsIGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICBpZiAoaGFzRXJyb3JlZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8cD5Tb3JyeSEgVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGl0ZW1zPC9wPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8cD5Mb2FkaW5n4oCmPC9wPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtWzBdICsgaXRlbVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICB7cmVzdWx0fVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXBwZW5kQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PkFwcGVuZCBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlVwZGF0ZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYXV0aG9yaXplX2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXV0aENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ25vbmUnIDogJ2Jsb2NrJyB9fT5BdXRob3JpemU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNpZ25vdXRfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnYmxvY2snIDogJ25vbmUnIH19PlNpZ24gT3V0PC9idXR0b24+XHJcbiAgICAgICAgPC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY3JpcHRMb2FkZXIoXHJcbiAgICAnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzJ1xyXG4pKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlc3RDb21wb25lbnQpKVxyXG4iLCJleHBvcnQgY29uc3QgRElTQ09WRVJZX0RPQ1MgPSBbXCJodHRwczovL3NoZWV0cy5nb29nbGVhcGlzLmNvbS8kZGlzY292ZXJ5L3Jlc3Q/dmVyc2lvbj12NFwiXTtcclxuZXhwb3J0IGNvbnN0IFNDT1BFUyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHNcIjtcclxuZXhwb3J0IGNvbnN0IENMSUVOVF9JRCA9ICc4NDI0MTcxOTg3NjctN2s0MnB0OWVjZ3R1NWY3b29wbmcxb3F1M2E3OWk1aTkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5leHBvcnQgY29uc3QgQVBJX0tFWSA9ICdBSXphU3lBbEk1aThPT3R3OGFFRU1TNDhFOXBvdUVwdHE4dEVnMk0nO1xyXG5leHBvcnQgY29uc3QgVEVTVF9TUFJFQURTSEVFVF9JRCA9ICcxT2JNaDg3ZE5taXpYYmRXa0g5VGlxZnJDZkFwa19ycXhQR3VRX3pOZ0pJTSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HU19TUFJFQURTSEVFVF9JRCA9ICcxTlBZb1Y5WXM1MnpmOVZfTmtsUTVKZFhoanBwQkxlMGRDOVQ0MzNaWTdQOCc7XHJcbmV4cG9ydCBjb25zdCBTUFJFQURTSEVFVF9JRCA9ICcxVUJ1RXdxVXlCSXZ2WTFpaG1FcDloYjFqOG00SkNwVGwtYThtSjZSalVWdyc7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcclxucmVxdWlyZSgnLi4vcHVibGljL2ltYWdlcy9mYXZpY29uLnBuZycpO1xyXG4vLyByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XHJcbnJvb3Quc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG5yZW5kZXIoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8Um91dGVyID5cclxuICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICByb290XHJcbik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBOZXdPcmRlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgQ2hlY2tQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElDaGVja1BhZ2VQcm9wcywgYW55PntcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+ICAgICAgICAgIFxyXG4gICAgICAgICAgPE5ld09yZGVyQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoQ2hlY2tQYWdlKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IFBheW1lbnQsIE9yZGVyVHlwZSwgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IFByb2Nlc3NDaGVja291dCwgU2V0UGF5bWVudFR5cGUsIFNldE9yZGVyVHlwZSwgTG9nRGF0YSwgQ2FuY2VsIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuLi91dGlscy9oZWxwZXInO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrOiBzdGF0ZS5jaGVja1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoYW5kbGVDaGVja291dDogKCkgPT4gZGlzcGF0Y2goUHJvY2Vzc0NoZWNrb3V0KCkpLFxyXG4gICAgICAgIHNldFBheW1lbnRUeXBlOiAodHlwZTogUGF5bWVudCkgPT4gZGlzcGF0Y2goU2V0UGF5bWVudFR5cGUodHlwZSkpLFxyXG4gICAgICAgIHNldE9yZGVyVHlwZTogKHR5cGU6IE9yZGVyVHlwZSkgPT4gZGlzcGF0Y2goU2V0T3JkZXJUeXBlKHR5cGUpKSxcclxuICAgICAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKSxcclxuICAgICAgICBoYW5kbGVDYW5jZWw6ICgpID0+IGRpc3BhdGNoKENhbmNlbCgpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrb3V0UGFnZVByb3BzIHtcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcbiAgICBjaGVjaz86IENoZWNrO1xyXG5cclxuICAgIHNldFBheW1lbnRUeXBlPzogKHR5cGU6IFBheW1lbnQpID0+IHZvaWQ7XHJcbiAgICBzZXRPcmRlclR5cGU/OiAodHlwZTogT3JkZXJUeXBlKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2hlY2tvdXQ/OiAoKSA9PiB2b2lkO1xyXG4gICAgaGFuZGxlQ2FuY2VsPzogKCkgPT4gdm9pZDtcclxuICAgIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jbGFzcyBDaGVja291dFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SUNoZWNrb3V0UGFnZVByb3BzLCBhbnk+e1xyXG4gICAgaGFuZGxlQ2hlY2tvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDaGVja291dCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPmNoZWNrb3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2FuY2VsKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+Y2FuY2VsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NoZWNrJyk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPmJhY2snKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQYXltZW50VHlwZUNoYW5nZSA9ICh0eXBlOiBQYXltZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQYXltZW50VHlwZSh0eXBlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+cGF5bWVudFR5cGVDaGFuZ2VkLT4nICsgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3JkZXJUeXBlQ2hhbmdlID0gKHR5cGU6IE9yZGVyVHlwZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0T3JkZXJUeXBlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5vcmRlclR5cGVDaGFuZ2VkLT4nICsgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlUHJpY2UoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gSGVscGVyLmNhbGN1bGF0ZVByaWNlKGNoZWNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgINCf0L7QttCw0LvRg9C50YHRgtCwLCDRgdC+0LfQtNCw0LnRgtC1INGB0L3QsNGH0LDQu9CwINGH0LXQulxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImhlYWRsaW5lXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KHRgtGA0LDQvdC40YbQsCDQstGL0LHQvtGA0LAg0L/QsNGA0LDQvNC10YLRgNC+0LIg0YfQtdC60LBcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0Q29udHJvbEdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCY0YLQvtCz0L46IHt0aGlzLmNhbGN1bGF0ZVByaWNlKCl9INCz0YDQvS5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRDb250cm9sR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KLQuNC/INC/0LvQsNGC0LXQttCwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnBheW1lbnQgPT09IFBheW1lbnQuQ2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UoUGF5bWVudC5DYXJkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1BheW1lbnQuQ2FyZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCa0LDRgNGC0LBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnBheW1lbnQgPT09IFBheW1lbnQuQ2FzaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UoUGF5bWVudC5DYXNoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1BheW1lbnQuQ2FzaC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCd0LDQu9C40YfQvdGL0LVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dENvbnRyb2xHcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQotC40L8g0LfQsNC60LDQt9CwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnR5cGUgPT09IE9yZGVyVHlwZS5QcmVPcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlT3JkZXJUeXBlQ2hhbmdlKE9yZGVyVHlwZS5QcmVPcmRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtPcmRlclR5cGUuUHJlT3JkZXIudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQn9GA0LXQtNC30LDQutCw0LdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrLnR5cGUgPT09IE9yZGVyVHlwZS5TaG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVPcmRlclR5cGVDaGFuZ2UoT3JkZXJUeXBlLlNob3ApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlNob3AudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQktC40YLRgNC40L3QsFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbnNXcmFwZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc2VzPXt7IHJvb3Q6ICdidXR0b24nIH19IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0aXRsZT1cIkNoZWNrIE91dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LTQvtC70LbQuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3Nlcz17eyByb290OiAnYnV0dG9uJyB9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJkZWZhdWx0XCIgdGl0bGU9XCJCYWNrXCIgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0LDQt9Cw0LRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3Nlcz17eyByb290OiAnYnV0dG9uJyB9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hlY2tvdXRQYWdlKSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDcmVhdGVDaGVjaywgTG9nRGF0YSwgQ2xlYXJFcnJvciwgUHJvY2Vzc0ZldGNoRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IExhcmdlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24nO1xyXG5pbXBvcnQgSGlzdG9yeUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0hpc3RvcnlDb21wb25lbnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgQnVzeSB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnVzeSc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgU1BSRUFEU0hFRVRfSUQgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuY29uc3QgaW1hZ2VVcmwgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL21haW5faWNvbi5qcGcnKTtcclxuY29uc3QgcGFydG5lclVybCA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9pbWFnZXMvcGFydG5lcnNfaWNvbi5qcGcnKTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LFxyXG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmdcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWF0ZUNoZWNrOiAoKSA9PiBkaXNwYXRjaChDcmVhdGVDaGVjaygpKSxcclxuICAgIGxvZ0RhdGE6ICh0ZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKExvZ0RhdGEodGV4dCkpLFxyXG4gICAgZmV0Y2hEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChQcm9jZXNzRmV0Y2hEYXRhKHVybCkpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IENrZWNrTGluayA9IHByb3BzID0+IDxMaW5rIHRvPVwiL2NoZWNrXCIgey4uLnByb3BzfSAvPjtcclxuY29uc3QgUGFydG5lcnNMaW5rID0gcHJvcHMgPT4gPExpbmsgdG89XCIvcGFydG5lcnNcIiB7Li4ucHJvcHN9IC8+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWFpblBhZ2VQcm9wcyB7XHJcbiAgaGlzdG9yeT86IEFycmF5PENoZWNrPjtcclxuICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG5cclxuICBjcmVhdGVDaGVjaz86ICgpID0+IHZvaWQ7XHJcbiAgbG9nRGF0YT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgZmV0Y2hEYXRhPzogKHVybDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jbGFzcyBNYWluUGFnZSBleHRlbmRzIENvbXBvbmVudDxJTWFpblBhZ2VQcm9wcywgYW55PntcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICghaGlzdG9yeSB8fCAhaGlzdG9yeS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaERhdGEoU1BSRUFEU0hFRVRfSUQpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uTmV3Q2hlY2tDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuY3JlYXRlQ2hlY2soKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnbWFpblBhZ2UtPm5ld0NoZWNrJyk7XHJcbiAgfVxyXG5cclxuICBvbk5ld1BhcnRuZXJzQ2hlY2tDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuY3JlYXRlQ2hlY2soKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnbWFpblBhZ2UtPm9uTmV3UGFydG5lcnNDaGVja0NsaWNrJyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3Nlcz17eyByb290OiAnY2FyZFJvb3QnIH19PlxyXG4gICAgICAgICAgPExhcmdlQnV0dG9uIHRpdGxlPXsn0KDQntCX0J3QmNCn0J3Qq9CZINCX0JDQmtCQ0JcnfSBjb21wb25lbnQ9e0NrZWNrTGlua30gaW1hZ2VVcmw9e2ltYWdlVXJsfSBvbkNsaWNrPXt0aGlzLm9uTmV3Q2hlY2tDbGlja30gLz5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzZXM9e3sgcm9vdDogJ2NhcmRSb290JyB9fT5cclxuICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9Ce0J/QotCe0JLQq9CZINCX0JDQmtCQ0JcnfSBjb21wb25lbnQ9e1BhcnRuZXJzTGlua30gaW1hZ2VVcmw9e3BhcnRuZXJVcmx9IG9uQ2xpY2s9e3RoaXMub25OZXdQYXJ0bmVyc0NoZWNrQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVySGlzdG9yeSd9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImhlYWRsaW5lXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAg0JjRgdGC0L7RgNC40Y9cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxIaXN0b3J5Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxOb3RpZmljYXRpb25Db21wb25lbnQgLz5cclxuICAgICAgICA8QnVzeSBsb2FkaW5nPXtpc0xvYWRpbmd9IC8+XHJcbiAgICA8L2Rpdj47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gIChNYWluUGFnZSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5vdEZvdW5kUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgTm90Rm91bmRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElOb3RGb3VuZFBhZ2VQcm9wcywgYW55PntcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgTm90IEZvdW5kXHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gICAgKE5vdEZvdW5kUGFnZSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhcnRuZXJzQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvUGFydG5lcnNDb21wb25lbnQnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFydG5lcnNQYWdlUHJvcHMge1xyXG59XHJcblxyXG5jbGFzcyBQYXJ0bmVyc1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SVBhcnRuZXJzUGFnZVByb3BzLCBhbnk+e1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVyJ30gcmFpc2VkPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD4gICAgICAgICAgXHJcbiAgICAgICAgICA8UGFydG5lcnNDb21wb25lbnQgLz5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gIChQYXJ0bmVyc1BhZ2UpXHJcbiIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMsIEFjdGlvbiB9IGZyb20gXCJyZWR1eC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX0lURU1TLFxyXG4gICAgTE9BRF9JVEVNU19GVUxGSUxMRUQsXHJcbiAgICBMT0FEX0lURU1TX1JFSkVDVEVELFxyXG4gICAgU0hPV19CVVNZLFxyXG4gICAgQ1JFQVRFX0NIRUNLLFxyXG4gICAgQUREX0RSSU5LLFxyXG4gICAgQUREX0RFU1NFUlQsXHJcbiAgICBQUk9DRVNTX0NIRUNLT1VULFxyXG4gICAgU0VUX1BBWU1FTlRfVFlQRSxcclxuICAgIFNFVF9PUkRFUl9UWVBFLFxyXG4gICAgQVBQRU5EX0RBVEFfRlVMRklMTEVELFxyXG4gICAgQVBQRU5EX0RBVEFfUkVKRUNURUQsXHJcbiAgICBMT0dfREFUQSxcclxuICAgIENMRUFSX0xPRyxcclxuICAgIENBTkNFTCxcclxuICAgIENMRUFSX0VSUk9SLFxyXG4gICAgREVMRVRFX0RFU1NFUlQsXHJcbiAgICBERUxFVEVfRFJJTkssXHJcbiAgICBTRVRfTEFTVF9JRCxcclxuICAgIFNIT1dfTk9USUZJQ0FUSU9OXHJcbn0gZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHsgQ2hlY2ssIERlc3NlcnQsIERyaW5rLCBQYXltZW50LCBPcmRlclR5cGUgfSBmcm9tICcuL3V0aWxzL3R5cGVzJztcclxuXHJcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9zdG9yZS9pbml0aWFsU3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XHJcbiAgICBbQ1JFQVRFX0NIRUNLXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGxhc3RJZCB9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2s6IENoZWNrID0ge1xyXG4gICAgICAgICAgICBpZDogbGFzdElkICsgMSxcclxuICAgICAgICAgICAgZGVzc2VydHM6IG5ldyBBcnJheTxEZXNzZXJ0PigpLFxyXG4gICAgICAgICAgICBkcmlua3M6IG5ldyBBcnJheTxEcmluaz4oKSxcclxuICAgICAgICAgICAgaXNGaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBheW1lbnQ6IFBheW1lbnQuQ2FzaCxcclxuICAgICAgICAgICAgdHlwZTogT3JkZXJUeXBlLlNob3BcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVja1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBRERfRFJJTktdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGRyaW5rOiBEcmluayA9IHtcclxuICAgICAgICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkWzBdLFxyXG4gICAgICAgICAgICBzaXplOiBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hlY2suZHJpbmtzLnB1c2goZHJpbmspO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVja1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtERUxFVEVfRFJJTktdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG5ld0NoZWNrID0gey4uLmNoZWNrfTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcGFyYXRvciA9ICh7IGlkLCBzaXplIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkID09PSBhY3Rpb24ucGF5bG9hZFswXSAmJiBzaXplID09PSBhY3Rpb24ucGF5bG9hZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdDaGVjay5kcmlua3MgPSBjaGVjay5kcmlua3MuZmlsdGVyKGQgPT4gY29tcGFyYXRvcihkKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVjazogbmV3Q2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbQUREX0RFU1NFUlRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCBleGlzdGluZ0Rlc3NlcnQgPSBjaGVjay5kZXNzZXJ0cy5maW5kKChkOiBEZXNzZXJ0KSA9PlxyXG4gICAgICAgICAgICBkLnR5cGUgPT09IGFjdGlvbi5wYXlsb2FkWzBdXHJcbiAgICAgICAgICAgICYmIGQudGFzdGUgPT09IGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICYmIGQuc2l6ZSA9PT0gYWN0aW9uLnBheWxvYWRbMl0pO1xyXG5cclxuICAgICAgICBpZiAoISFleGlzdGluZ0Rlc3NlcnQpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdEZXNzZXJ0LnF1YW50aXR5ICs9IGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnQ6IERlc3NlcnQgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgICAgIHRhc3RlOiBhY3Rpb24ucGF5bG9hZFsxXSxcclxuICAgICAgICAgICAgICAgIHNpemU6IGFjdGlvbi5wYXlsb2FkWzJdLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IGFjdGlvbi5wYXlsb2FkWzNdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNoZWNrLmRlc3NlcnRzLnB1c2goZGVzc2VydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbREVMRVRFX0RFU1NFUlRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG5ld0NoZWNrID0gey4uLmNoZWNrfTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcGFyYXRvciA9ICh7IHR5cGUsIHRhc3RlLCBzaXplIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IGFjdGlvbi5wYXlsb2FkWzBdICYmIHRhc3RlID09PSBhY3Rpb24ucGF5bG9hZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkWzNdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpemUgIT09IGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0NoZWNrLmRlc3NlcnRzID0gbmV3Q2hlY2suZGVzc2VydHMuZmlsdGVyKGQgPT4gY29tcGFyYXRvcihkKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVjazogbmV3Q2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbUFJPQ0VTU19DSEVDS09VVF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjaywgaGlzdG9yeSwgbGFzdElkIH0gPSBzdGF0ZTtcclxuICAgICAgICBjaGVjay5pc0ZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICBoaXN0b3J5LnB1c2goY2hlY2spO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBjaGVjazogbnVsbCxcclxuICAgICAgICAgICAgaGlzdG9yeTogWy4uLmhpc3RvcnldLFxyXG4gICAgICAgICAgICBsYXN0SWQ6IGxhc3RJZCArIDFcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbU0VUX1BBWU1FTlRfVFlQRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2sucGF5bWVudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogeyAuLi5jaGVjayB9IH07XHJcbiAgICB9LFxyXG4gICAgW1NFVF9PUkRFUl9UWVBFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjaGVjay50eXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiB7IC4uLmNoZWNrIH0gfTtcclxuICAgIH0sXHJcbiAgICBbTE9BRF9JVEVNU106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbTE9BRF9JVEVNU19GVUxGSUxMRURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpdGVtczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbTE9BRF9JVEVNU19SRUpFQ1RFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FQUEVORF9EQVRBX0ZVTEZJTExFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgaGFzRXJyb3JlZDogIWFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FQUEVORF9EQVRBX1JFSkVDVEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaGFzRXJyb3JlZDogdHJ1ZSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVHlwZTogMlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtTSE9XX0JVU1ldOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNCdXN5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzQnVzeSB9O1xyXG4gICAgfSxcclxuICAgIFtMT0dfREFUQV06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgY29uc3QgeyBsb2cgfSA9IHN0YXRlO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2c6IGAke2xvZ307JHt0ZXh0fWAgfTtcclxuICAgIH0sXHJcbiAgICBbQ0xFQVJfTE9HXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2c6ICcnIH07XHJcbiAgICB9LFxyXG4gICAgW0NMRUFSX0VSUk9SXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvck1lc3NhZ2U6ICcnIH07XHJcbiAgICB9LFxyXG4gICAgW0NBTkNFTF06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2s6IG51bGwgfTtcclxuICAgIH0sXHJcbiAgICBbU0VUX0xBU1RfSURdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGhpc3Rvcnk6IFthY3Rpb24ucGF5bG9hZFsxXV0sXHJcbiAgICAgICAgICAgIGxhc3RJZDogYWN0aW9uLnBheWxvYWRbMF1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbU0hPV19OT1RJRklDQVRJT05dOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLnBheWxvYWRbMV0sXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblR5cGU6IGFjdGlvbi5wYXlsb2FkWzBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59LCBpbml0aWFsU3RhdGUpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBBbnlBY3Rpb24sIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcic7XHJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgcm9vdFJlZHVjZXIsXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGhhc0Vycm9yZWQ6IGZhbHNlLFxyXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIGNoZWNrOiBudWxsLFxyXG4gICAgaGlzdG9yeTogbmV3IEFycmF5PENoZWNrPigpLFxyXG4gICAgbG9nOiAnJyxcclxuICAgIGVycm9yTWVzc2FnZTogJycsXHJcbiAgICBsYXN0SWQ6IDAsXHJcbiAgICBub3RpZmljYXRpb25UeXBlOiAwXHJcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nbG9iYWwuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nbG9iYWwuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBEcmlua3NUeXBlLCBEZXNzZXJ0VHlwZSwgTWFjYXJvbnNFbnVtLCBaZXBoeXJFbnVtLCBQYXJ0bmVyc0VudW0sIENha2VzRW51bSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyaW5rc0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8c3RyaW5nPiB9ID0ge307XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5DYXBwdWNpbm9dID0gWycxNzUg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRmxhdFdoaXRlXSA9IFsnMTc1INC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlJhZl0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9dID0gWycxMjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vTWlsa10gPSBbJzEyMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Mb25nQmxhY2tdID0gWycyMDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRXNwcmVzc29dID0gWyczMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Eb3BwaW9dID0gWyc2MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5NYWNoaWF0b10gPSBbJzkwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlTGF2ZW5kZXJdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGF0dGVDYXJhbWVsXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlT3JhbmdlXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkNhY2FvXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUdyZWVuXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUJsYWNrXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlRlYUhlcmJhbF0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TcGVhY2lhbFRlYVBlYXJMaW1lXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFPcmFuZ2VdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3BlY2lhbFRlYUdpbmdlcl0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5Ib3RDaG9jb2xhdGVdID0gWycxNzUg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTGVtb25hZGVTdHJhd2JlcnJ5XSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlQ2l0cnVzXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlUGFzc2lvbl0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5JY2VMYXR0ZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TeXJvcF0gPSBbJzAg0LzQuyddO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc3NlcnRzRGljdDogeyBbaWQ6IHN0cmluZ10gOiBBcnJheTxhbnk+IH0gPSB7fTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLk1hY2Fyb25dID0gWzEsIDYsIDEyLCAyNF07XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5aZXBoeXJdID0gWzEsIDgsIDE2XTtcclxuRGVzc2VydHNEaWN0W0Rlc3NlcnRUeXBlLkNha2VdID0gWycxOCDRgdC8JywgJzIyINGB0LwnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBEcmlua1ByaWNlc0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8bnVtYmVyPiB9ID0ge307XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkNhcHB1Y2lub10gPSBbMjUsIDQwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGF0dGVdID0gWzI4LCAzNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkZsYXRXaGl0ZV0gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5SYWZdID0gWzM4LCA0NV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkFtZXJpY2Fub10gPSBbMjBdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9NaWxrXSA9IFsyNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxvbmdCbGFja10gPSBbMzBdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5Fc3ByZXNzb10gPSBbMjBdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5Eb3BwaW9dID0gWzMwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTWFjaGlhdG9dID0gWzIyXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGF0dGVMYXZlbmRlcl0gPSBbMzIsIDQwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGF0dGVDYXJhbWVsXSA9IFszMiwgNDBdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZU9yYW5nZV0gPSBbMzIsIDQwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuQ2FjYW9dID0gWzI4LCAzNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlRlYUdyZWVuXSA9IFsyNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlRlYUJsYWNrXSA9IFsyNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlRlYUhlcmJhbF0gPSBbMjVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5TcGVhY2lhbFRlYVBlYXJMaW1lXSA9IFszNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFPcmFuZ2VdID0gWzM1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3BlY2lhbFRlYUdpbmdlcl0gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5Ib3RDaG9jb2xhdGVdID0gWzU1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGVtb25hZGVTdHJhd2JlcnJ5XSA9IFszNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlQ2l0cnVzXSA9IFszNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlUGFzc2lvbl0gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5JY2VMYXR0ZV0gPSBbNDBdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5TeXJvcF0gPSBbNV07XHJcblxyXG5leHBvcnQgY29uc3QgQ2FmZmVlUHJpY2VzOiB7IFtpZDogc3RyaW5nXSA6IG51bWJlciB9ID0ge307XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uQ29mZmVlSXNdID0gMTc7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uRmlyc3RQb2ludF0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5DdWJhQ29mZmVlXSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLlByb2dyZXNzXSA9IDIwO1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLktsYXNzbmFLYXZhXSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkNvZmZlZUFuZFRoZUNpdHldID0gMTk7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uSWxNaW9dID0gMTk7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uU3R1ZGlvQ29mZmVlXSA9IDIwO1xyXG5cclxuZXhwb3J0IGNvbnN0IENha2VzUHJpY2VzRGljdDogeyBbaWQ6IHN0cmluZ10gOiBBcnJheTxudW1iZXI+IH0gPSB7fTtcclxuQ2FrZXNQcmljZXNEaWN0W0Nha2VzRW51bS5DYXJyb3RDYWtlXSA9IFs2NTAsIDk4MF07XHJcbkNha2VzUHJpY2VzRGljdFtDYWtlc0VudW0uUGlua10gPSBbNjMwLCA5NzBdO1xyXG5DYWtlc1ByaWNlc0RpY3RbQ2FrZXNFbnVtLkluZmluaXR5XSA9IFs2NDAsIDk3MF07XHJcbkNha2VzUHJpY2VzRGljdFtDYWtlc0VudW0uUmlvXSA9IFs2MzAsIDk3MF07XHJcbkNha2VzUHJpY2VzRGljdFtDYWtlc0VudW0uU291bF0gPSBbNjIwLCA5NjBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFpFUEhZUl9QUklDRSA9IDEyO1xyXG5leHBvcnQgY29uc3QgWkVQSFlSX1BBUlRORVJTX1BSSUNFID0gMTE7XHJcblxyXG5leHBvcnQgY29uc3QgTUFDQVJPTlNfUFJJQ0UgPSAyODtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWNhcm9uc0NvbG9yczogeyBbaWQ6IHN0cmluZ10gOiBzdHJpbmcgfSA9IHt9O1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uRG9yQmx1ZVBlYXJdID0gJyNiN2U0ZjcnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uUGFybWVzYW5GaWd1ZV0gPSAnI2ZjZjdlOCc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5TdHJhd2JlcnJ5Q2hlZXNlY2FrZV0gPSAnI2ZmZGRkZCc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5SYXNwYmVycnldID0gJyNmZmE1Y2YnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uQ2hlcnJ5VG9ua29dID0gJyNCMjFFMjcnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uT2JsZXBpaGFdID0gJyNGMEMxMzAnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uQ3VycmFudF0gPSAnI2JjNDVjNic7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5MYXZlbmRlckJsYWNrYmVycnldID0gJyNiNTg3ZmYnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uTWFuZ29QYXNzaW9uXSA9ICcjZmZkZDg3JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkNvZmZlZUNhcmFtZWxdID0gJyNhODczMDEnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uQ2hvY29sYXRlXSA9ICcjNDkyOTA4JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLlBpc3RhY2hpb10gPSAnIzg1ZGQ5Myc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5MaW1lQmFzaWxdID0gJyM5ZmYyNWMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFplcGh5ckNvbG9yczogeyBbaWQ6IHN0cmluZ10gOiBzdHJpbmcgfSA9IHt9O1xyXG5aZXBoeXJDb2xvcnNbWmVwaHlyRW51bS5BcHBsZV0gPSAnI2ZmZmJmMic7XHJcblplcGh5ckNvbG9yc1taZXBoeXJFbnVtLkFwcmljb3RQYXNzaW9uRnJ1aXRdID0gJyNmZmU2YmYnO1xyXG5aZXBoeXJDb2xvcnNbWmVwaHlyRW51bS5DdXJyYW50XSA9ICcjZDk3ONC1ZCc7XHJcblplcGh5ckNvbG9yc1taZXBoeXJFbnVtLlN0cmF3YmVycnlDcmFuYmVycnldID0gJyNmNDk3YjknOyIsImltcG9ydCB7IE1BQ0FST05TX1BSSUNFLCBaRVBIWVJfUFJJQ0UsIERyaW5rUHJpY2VzRGljdCwgRHJpbmtzRGljdCwgQ2FrZXNQcmljZXNEaWN0IH0gZnJvbSAnLi9kaWN0aW9uYXJpZXMnO1xyXG5pbXBvcnQgeyBEZXNzZXJ0VHlwZSAsIERlc3NlcnQsIERyaW5rIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJlYXJlclRva2VuIHtcclxuICAgIEFjY2Vzc1Rva2VuOiBhbnk7XHJcbiAgICBFeHBpcmVzT246IERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT0F1dGgySW5mbyB7XHJcbiAgICBPQXV0aDJBdXRob3JpdHk6IHN0cmluZztcclxuICAgIE9BdXRoMkNsaWVudElkOiBzdHJpbmc7XHJcbiAgICBPQXV0aDJSZWRpcmVjdFVyaTogc3RyaW5nO1xyXG4gICAgT0F1dGgyUmVzb3VyY2VJZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgICBPQXV0aDJUb2tlblNlcnZpY2U6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgSGVscGVyIHtcclxuICAgIHN0YXRpYyBUb2tlbkNvb2tpZU5hbWUgPSBcImFjY2Vzc3Rva2VuY29va2llX3RlbXBcIjtcclxuXHJcbiAgICBzdGF0aWMgR1VJREVtcHR5ID0gXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIjtcclxuXHJcbiAgICBzdGF0aWMgT1xyXG5cclxuICAgIHN0YXRpYyBndWlkID0gKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcclxuICAgICAgICAgICAgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGFyYW1ldGVyQnlOYW1lRnJvbVVyaSA9IChuYW1lLCB1cmwpID0+IHtcclxuICAgICAgICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxyXG4gICAgICAgICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG4gICAgICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XHJcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRRdWVyeVZhcmlhYmxlID0gKHZhcmlhYmxlOiBzdHJpbmcpID0+XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgaWYgKCFxdWVyeSAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihcIiUzRlwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiJTNGXCIpWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KFwiJlwiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhaXIgPSB2YXJzW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgaWYgKHBhaXJbMF0gPT0gdmFyaWFibGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhaXJbMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU/IGRlY29kZVVSSSh2YWx1ZSkgOiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjYWxjdWxhdGVQcmljZShjaGVjaykge1xyXG4gICAgICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuICAgICAgICBjaGVjay5kZXNzZXJ0cy5mb3JFYWNoKChkOiBEZXNzZXJ0KSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERlc3NlcnRUeXBlLkNha2U6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FrZVByaWNlcyA9IENha2VzUHJpY2VzRGljdFtkLnRhc3RlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZC5zaXplID09PSAnMTgg0YHQvCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBjYWtlUHJpY2VzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5zaXplID09PSAnMjIg0YHQvCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBjYWtlUHJpY2VzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRGVzc2VydFR5cGUuTWFjYXJvbjpcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IE1BQ0FST05TX1BSSUNFICogZC5xdWFudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRGVzc2VydFR5cGUuWmVwaHlyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gWkVQSFlSX1BSSUNFICogZC5xdWFudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2hlY2suZHJpbmtzLmZvckVhY2goKGQ6IERyaW5rKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlcyA9IERyaW5rUHJpY2VzRGljdFtkLmlkXTtcclxuICAgICAgICAgICAgaWYgKHByaWNlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gcHJpY2VzWzBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBEcmlua3NEaWN0W2QuaWRdLmZpbmRJbmRleCh4ID0+IHggPT09IGQuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IHByaWNlc1tpbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsUHJpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbHBlcjsiLCJleHBvcnQgaW50ZXJmYWNlIERlc3NlcnQge1xyXG4gICAgdHlwZTogRGVzc2VydFR5cGUsXHJcbiAgICB0YXN0ZTogc3RyaW5nLFxyXG4gICAgc2l6ZTogc3RyaW5nXHJcbiAgICBxdWFudGl0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyaW5rIHtcclxuICAgIGlkOiBEcmlua3NUeXBlLFxyXG4gICAgc2l6ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2sge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGRlc3NlcnRzOiBBcnJheTxEZXNzZXJ0PixcclxuICAgIGRyaW5rczogQXJyYXk8RHJpbms+LFxyXG4gICAgaXNGaW5pc2hlZDogYm9vbGVhbixcclxuICAgIHBheW1lbnQ6IFBheW1lbnQsXHJcbiAgICB0eXBlOiBPcmRlclR5cGVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGF5bWVudCB7XHJcbiAgICBDYXJkID0gJ9Ca0LDRgNGC0LAnLFxyXG4gICAgQ2FzaCA9ICfQndCw0LvQuNGH0LrQsCcsXHJcbiAgICBPdGhlciA9ICfQlNGA0YPQs9C+0LUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE9yZGVyVHlwZSB7XHJcbiAgICBQcmVPcmRlciA9ICfQn9GA0LXQtNC30LDQutCw0LcnLFxyXG4gICAgU2hvcCA9ICfQktC40YLRgNC40L3QsCcsXHJcbiAgICBPdGhlciA9ICfQlNGA0YPQs9C+0LUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERlc3NlcnRUeXBlIHtcclxuICAgIE1hY2Fyb24gPSAn0JzQsNC60LDRgNC+0L3RgScsXHJcbiAgICBaZXBoeXIgPSAn0JfQtdGE0LjRgCcsXHJcbiAgICBDYWtlID0gJ9Ci0L7RgNGCJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYWNhcm9uc0VudW0ge1xyXG4gICAgRG9yQmx1ZVBlYXIgPSBcItCU0L7QsS3QkdC70Y4gLSDQk9GA0YPRiNCwXCIsXHJcbiAgICBQYXJtZXNhbkZpZ3VlID0gXCLQn9Cw0YDQvNC10LfQsNC9IC0g0JjQvdC20LjRgFwiLFxyXG4gICAgU3RyYXdiZXJyeUNoZWVzZWNha2UgPSBcItCa0LvRg9Cx0L3QuNGH0L3Ri9C5INCn0LjQt9C60LXQudC6XCIsXHJcbiAgICBSYXNwYmVycnkgPSBcItCc0LDQu9C40L3QsFwiLFxyXG4gICAgQ2hlcnJ5VG9ua28gPSBcItCS0LjRiNC90Y8gLSDQkdC+0LHRiyDQotC+0L3QutC+XCIsXHJcbiAgICBPYmxlcGloYSA9IFwi0J7QsdC70LXQv9C40YXQsFwiLFxyXG4gICAgQ3VycmFudCA9IFwi0KHQvNC+0YDQvtC00LjQvdCwXCIsXHJcbiAgICBMYXZlbmRlckJsYWNrYmVycnkgPSBcItCb0LDQstCw0L3QtNCwIC0g0KfQtdGA0L3QuNC60LBcIixcclxuICAgIE1hbmdvUGFzc2lvbiA9IFwi0JzQsNC90LPQviAtINCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIENvZmZlZUNhcmFtZWwgPSBcItCa0L7RhNC1IC0g0KHQvtC70ZHQvdCw0Y8g0JrQsNGA0LDQvNC10LvRjFwiLFxyXG4gICAgQ2hvY29sYXRlID0gXCLQqNC+0LrQvtC70LDQtFwiLFxyXG4gICAgUGlzdGFjaGlvID0gXCLQpNC40YHRgtCw0YjQutCwXCIsXHJcbiAgICBMaW1lQmFzaWwgPSBcItCb0LDQudC8IC0g0JHQsNC30LjQu9C40LpcIiBcclxufVxyXG5cclxuZXhwb3J0IGVudW0gWmVwaHlyRW51bSB7XHJcbiAgICBBcHBsZSA9IFwi0K/QsdC70L7QutC+XCIsXHJcbiAgICBBcHJpY290UGFzc2lvbkZydWl0ID0gXCLQkNCx0YDQuNC60L7RgSAtINCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIEN1cnJhbnQgPSBcItCh0LzQvtGA0L7QtNC40L3QsFwiLCAgICBcclxuICAgIFN0cmF3YmVycnlDcmFuYmVycnkgPSBcItCa0LvRg9Cx0L3QuNC60LAgLSDQmtC70Y7QutCy0LBcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDYWtlc0VudW0ge1xyXG4gICAgUmlvID0gXCJSaW9cIixcclxuICAgIENhcnJvdENha2UgPSBcIkNhcnJvdCBDYWtlXCIsXHJcbiAgICBTb3VsID0gXCJTb3VsXCIsXHJcbiAgICBQaW5rID0gXCJQaW5rXCIsXHJcbiAgICBJbmZpbml0eSA9IFwiSW5maW5pdHlcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEcmlua3NUeXBlIHtcclxuICAgIENhcHB1Y2lubyA9IFwi0JrQsNC/0YPRh9C40L3QvlwiLFxyXG4gICAgTGF0dGUgPSBcItCb0LDRgtGC0LVcIixcclxuICAgIEZsYXRXaGl0ZSA9IFwi0KTQu9C10YIg0JLQsNC50YJcIixcclxuICAgIFJhZiA9IFwi0KDQsNGEXCIsXHJcbiAgICBBbWVyaWNhbm8gPSBcItCQ0LzQtdGA0LjQutCw0L3QvlwiLFxyXG4gICAgQW1lcmljYW5vTWlsayA9IFwi0JDQvNC10YDQuNC60LDQvdC+INGBINC80L7Qu9C+0LrQvtC8XCIsXHJcbiAgICBMb25nQmxhY2sgPSBcItCb0L7QvdCzINCx0LvRjdC6XCIsXHJcbiAgICBFc3ByZXNzbyA9IFwi0K3RgdC/0YDQtdGB0YHQvlwiLFxyXG4gICAgRG9wcGlvID0gXCLQlNC+0L/Qv9C40L5cIiwgICAgXHJcbiAgICBNYWNoaWF0byA9IFwi0JzQsNC60LjQsNGC0L5cIixcclxuICAgIExhdHRlTGF2ZW5kZXIgPSBcItCb0LDRgtGC0LUg0JvQsNCy0LDQvdC00LBcIixcclxuICAgIExhdHRlQ2FyYW1lbCA9IFwi0JvQsNGC0YLQtSDQmtCw0YDQsNC80LXQu9GMXCIsXHJcbiAgICBMYXR0ZU9yYW5nZSA9IFwi0JvQsNGC0YLQtSDQkNC/0LXQu9GM0YHQuNC9XCIsXHJcbiAgICBDYWNhbyA9IFwi0JrQsNC60LDQvlwiLFxyXG4gICAgVGVhR3JlZW4gPSBcItCn0LDQuSDQl9C10LvRkdC90YvQuVwiLFxyXG4gICAgVGVhQmxhY2sgPSBcItCn0LDQuSDQp9GR0YDQvdGL0LlcIixcclxuICAgIFRlYUhlcmJhbCA9IFwi0KfQsNC5INCi0YDQsNCy0Y/QvdC+0LlcIixcclxuICAgIFNwZWFjaWFsVGVhUGVhckxpbWUgPSBcItCn0LDQuSDQk9GA0YPRiNCwLdCb0LDQudC8XCIsXHJcbiAgICBTcGVjaWFsVGVhT3JhbmdlID0gXCLQp9Cw0Lkg0JDQv9C10LvRjNGB0LjQvS3QntCx0LvQtdC/0LjRhdCwXCIsXHJcbiAgICBTcGVjaWFsVGVhR2luZ2VyID0gXCLQp9Cw0Lkg0JzQsNC70LjQvdCwLdCY0LzQsdC40YDRjFwiLFxyXG4gICAgSG90Q2hvY29sYXRlID0gXCLQk9Cw0YDRj9GH0LjQuSDRiNC+0LrQvtC70LDQtFwiLFxyXG4gICAgTGVtb25hZGVTdHJhd2JlcnJ5ID0gXCLQm9C40LzQvtC90LDQtCDQmtC70YPQsdC90LjQutCwXCIsXHJcbiAgICBMZW1vbmFkZUNpdHJ1cyA9IFwi0JvQuNC80L7QvdCw0LQg0KbQuNGC0YDRg9GBXCIsXHJcbiAgICBMZW1vbmFkZVBhc3Npb24gPSBcItCb0LjQvNC+0L3QsNC0INCc0LDRgNCw0LrRg9C50Y9cIixcclxuICAgIEljZUxhdHRlID0gXCLQkNC50YEg0JvQsNGC0YLQtVwiLFxyXG4gICAgU3lyb3AgPSBcItCh0LjRgNC+0L9cIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYXJ0bmVyc0VudW0ge1xyXG4gICAgQ29mZmVlSXMgPSBcIkNvZmZlZSBpc1wiLFxyXG4gICAgRmlyc3RQb2ludCA9IFwiRmlyc3QgUG9pbnRcIixcclxuICAgIEN1YmFDb2ZmZWUgPSBcIkN1YmEgQ29mZmVlXCIsXHJcbiAgICBQcm9ncmVzcyA9IFwiUHJvZ3Jlc3NcIixcclxuICAgIEtsYXNzbmFLYXZhID0gXCLQmtC70LDRgdC90LAg0LrQsNCy0LBcIixcclxuICAgIENvZmZlZUFuZFRoZUNpdHkgPSBcIkNvZmZlZSBhbmQgdGhlIGNpdHlcIixcclxuICAgIElsTWlvID0gXCJJbCBNaW9cIixcclxuICAgIFN0dWRpb0NvZmZlZSA9IFwi0KHRgtGD0LTQuNGPINC60L7RhNC1XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVJbnB1dE9wdGlvbiB7XHJcbiAgICBJTlBVVF9WQUxVRV9PUFRJT05fVU5TUEVDSUZJRUQgPSAnSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEJyxcclxuICAgIFJBVyA9ICdSQVcnLFxyXG4gICAgVVNFUl9FTlRFUkVEID0gJ1VTRVJfRU5URVJFRCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW5zZXJ0RGF0YU9wdGlvbiB7XHJcbiAgICBPVkVSV1JJVEUgPSAnT1ZFUldSSVRFJyxcclxuICAgIElOU0VSVF9ST1dTID0gJ0lOU0VSVF9ST1dTJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBWYWx1ZVJlbmRlck9wdGlvbiB7XHJcbiAgICBGT1JNQVRURURfVkFMVUUgPSAnRk9STUFUVEVEX1ZBTFVFJyxcclxuICAgIFVORk9STUFUVEVEX1ZBTFVFID0gJ1VORk9STUFUVEVEX1ZBTFVFJyxcclxuICAgIEZPUk1VTEEgPSAnRk9STVVMQSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGF0ZVRpbWVSZW5kZXJPcHRpb24ge1xyXG4gICAgU0VSSUFMX05VTUJFUiA9ICdTRVJJQUxfTlVNQkVSJyxcclxuICAgIEZPUk1BVFRFRF9TVFJJTkcgPSAnRk9STUFUVEVEX1NUUklORydcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9