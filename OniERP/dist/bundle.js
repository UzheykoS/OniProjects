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

            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_AppBar__WEBPACK_IMPORTED_MODULE_14__["default"], { title: 'Главная', isSignedIn: isSignedIn, onLoginClick: this.handleAuthClick, onLogoutClick: this.handleSignoutClick }), isSignedIn && react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Main, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvZGVzc2VydHNfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9kcmlua3NfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL21haW5faWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9wYXJ0bmVyc19pY29uLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHBCYXIvc3R5bGVzLnNjc3M/OGFhMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXN5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EZXNzZXJ0c0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpbmtzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaXN0b3J5Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXJnZUJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24vc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2Nzcz9hNzc0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhcnRuZXJzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZXN0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrb3V0UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTm90Rm91bmRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGFydG5lcnNQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzP2RjYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RpY3Rpb25hcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNB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V0FBc0I7QUFDbEIsOEJBQXNCO0FBQ3RCLDBCQUFlO0FBQ2YsOEJBQXVCO0FBQ3ZCLHdCQUFXO0FBQ1gsOEJBQXVCO0FBQ3ZCLGtDQUFxQztBQUNyQyw4QkFBdUI7QUFDdkIsNkJBQXFCO0FBQ3JCLDJCQUFpQjtBQUNqQiw2QkFBb0I7QUFDcEIsa0NBQStCO0FBQy9CLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFDOUIsMEJBQWU7QUFDZiw2QkFBd0I7QUFDeEIsNkJBQXVCO0FBQ3ZCLDhCQUEwQjtBQUMxQix3Q0FBc0M7QUFDdEMscUNBQTBDO0FBQzFDLHFDQUFzQztBQUN0QyxpQ0FBZ0M7QUFDaEMsdUNBQXVDO0FBQ3ZDLG1DQUFpQztBQUNqQyxvQ0FBb0M7QUFDcEMsNkJBQXNCO0FBQ3RCLDBCQUNKO0FBQUMsR0EzQnFCLDRCQTJCckI7QUFFRCxJQVNDO0FBVEQsV0FBd0I7QUFDcEIsK0JBQXNCO0FBQ3RCLGlDQUEwQjtBQUMxQixpQ0FBMEI7QUFDMUIsK0JBQXFCO0FBQ3JCLGtDQUEyQjtBQUMzQix1Q0FBd0M7QUFDeEMsNEJBQWdCO0FBQ2hCLG1DQUNKO0FBQUMsR0FUdUIsZ0NBU3ZCO0FBRUQsSUFJQztBQUpELFdBQTRCO0FBQ3hCLHlEQUFpRTtBQUNqRSw4QkFBVztBQUNYLHVDQUNKO0FBQUMsR0FKMkIsd0NBSTNCO0FBRUQsSUFHQztBQUhELFdBQTRCO0FBQ3hCLG9DQUF1QjtBQUN2QixzQ0FDSjtBQUFDLEdBSDJCLHdDQUczQjtBQUVELElBSUM7QUFKRCxXQUE2QjtBQUN6QiwyQ0FBbUM7QUFDbkMsNkNBQXVDO0FBQ3ZDLG1DQUNKO0FBQUMsR0FKNEIsMENBSTVCO0FBRUQsSUFHQztBQUhELFdBQWdDO0FBQzVCLDRDQUErQjtBQUMvQiwrQ0FDSjtBQUFDLEdBSCtCLGdEQUcvQixLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hcHBiYXJfcm9vdCB7XFxuICBmbGV4LWdyb3c6IDE7IH1cXG4gIC5hcHBiYXJfcm9vdCAuYXBwYmFyX2dyb3cge1xcbiAgICBmbGV4LWdyb3c6IDE7IH1cXG4gIC5hcHBiYXJfcm9vdCAuYXBwYmFyX21lbnVCdXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogLTEyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN1Y2Nlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDsgfVxcblxcbi5lcnJvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5ICFpbXBvcnRhbnQ7IH1cXG5cXG4uaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5ICFpbXBvcnRhbnQ7IH1cXG5cXG4ud2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDsgfVxcblxcbi5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjA7IH1cXG5cXG4uaWNvbi12YXJpYW50IHtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuXFxuLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG5cXG4uYXZhdGFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MmMzZTk7XFxuICBjb2xvcjogIzFkNTNhMzsgfVxcblxcbi5jYXJkQ29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTZweDsgfVxcblxcbi5jYXJkQ29udGFpbmVySGlzdG9yeSB7XFxuICBtYXJnaW46IDE2cHg7IH1cXG5cXG4uY2FyZFJvb3Qge1xcbiAgcGFkZGluZzogMTZweCAwIDE2cHggMCAhaW1wb3J0YW50OyB9XFxuXFxuLm5ld09yZGVyQnV0dG9uc1dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4ubmV3T3JkZXJCdXR0b24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uYnV0dG9uc1dyYXBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW46IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuYnV0dG9uc1dyYXBlciAuYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAxcmVtIDByZW07IH1cXG5cXG4uY2hlY2tvdXRUaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW07XFxuICBmb250LXdlaWdodDogNDUwOyB9XFxuXFxuLmNoZWNrb3V0Q29udHJvbEdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDFyZW0gMnJlbSAxcmVtIDJyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLm5vdGlmaWNhdGlvbkNsb3NlIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtOyB9XFxuXFxuLm1hY2Fyb25BdmF0YXIge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IH1cXG5cXG4uZHJpbmtBdmF0YXIge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDQ4MmYgIWltcG9ydGFudDsgfVxcblxcbi5kZXNzZXJ0c1Rhc3Rlc1dyYXBwZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTsgfVxcblxcbi5kZXNzZXJ0c1Rhc3Rlc0xpc3RXcmFwcGVyIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTEwcHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4uYnV0dG9uQXBwbHlXcmFwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuXFxuLmJ1dHRvbkNhbmNlbFdyYXBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cXG5cXG4uZHJpbmtzV3JhcHBlciB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY4cHgpOyB9XFxuXFxuLmRyaW5rc0xpc3RXcmFwcGVyIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi5wYXJ0bmVyU2VsZWN0V3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG5cXG4uYnVzeS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbiAgb3BhY2l0eTogMC44OyB9XFxuICAuYnVzeS1jb250YWluZXIgLmJ1c3kge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA0NCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDsgfVxcblxcbi5pbnZpc2libGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5oaXN0b3J5Q29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltYWdlcy9kZXNzZXJ0c19pY29uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvZHJpbmtzX2ljb24uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltYWdlcy9mYXZpY29uLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvbWFpbl9pY29uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvcGFydG5lcnNfaWNvbi5qcGdcIjsiLCJleHBvcnQgY29uc3QgQ1JFQVRFX0NIRUNLID0gJ0NSRUFURV9DSEVDSyc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0RSSU5LID0gJ0FERF9EUklOSyc7XHJcbmV4cG9ydCBjb25zdCBBRERfREVTU0VSVCA9ICdBRERfREVTU0VSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX0RSSU5LID0gJ0RFTEVURV9EUklOSyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfREVTU0VSVCA9ICdERUxFVEVfREVTU0VSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfVFlQRSA9ICdTRVRfUEFZTUVOVF9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFNFVF9PUkRFUl9UWVBFID0gJ1NFVF9PUkRFUl9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFBST0NFU1NfQ0hFQ0tPVVQgPSAnUFJPQ0VTU19DSEVDS09VVCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNUyA9ICdMT0FEX0lURU1TJztcclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVNfRlVMRklMTEVEID0gJ0xPQURfSVRFTVNfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVNfUkVKRUNURUQgPSAnTE9BRF9JVEVNU19SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0hPV19CVVNZID0gXCJTSE9XX0JVU1lcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQSA9ICdBUFBFTkRfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQV9GVUxGSUxMRUQgPSAnQVBQRU5EX0RBVEFfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBX1JFSkVDVEVEID0gJ0FQUEVORF9EQVRBX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQSA9ICdVUERBVEVfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQV9GVUxGSUxMRUQgPSAnVVBEQVRFX0RBVEFfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBX1JFSkVDVEVEID0gJ1VQREFURV9EQVRBX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfREFUQSA9ICdMT0dfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9MT0cgPSAnQ0xFQVJfTE9HJztcclxuZXhwb3J0IGNvbnN0IENBTkNFTCA9ICdDQU5DRUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMRUFSX0VSUk9SID0gJ0NMRUFSX0VSUk9SJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTEFTVF9JRCA9ICdTRVRfTEFTVF9JRCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0hPV19OT1RJRklDQVRJT04gPSAnU0hPV19OT1RJRklDQVRJT04nOyIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIExPQURfSVRFTVMsXHJcbiAgICBMT0FEX0lURU1TX0ZVTEZJTExFRCxcclxuICAgIExPQURfSVRFTVNfUkVKRUNURUQsXHJcbiAgICBTSE9XX0JVU1ksXHJcbiAgICBDUkVBVEVfQ0hFQ0ssXHJcbiAgICBQUk9DRVNTX0NIRUNLT1VULFxyXG4gICAgQUREX0RSSU5LLFxyXG4gICAgQUREX0RFU1NFUlQsXHJcbiAgICBTRVRfUEFZTUVOVF9UWVBFLFxyXG4gICAgU0VUX09SREVSX1RZUEUsXHJcbiAgICBBUFBFTkRfREFUQV9GVUxGSUxMRUQsXHJcbiAgICBBUFBFTkRfREFUQV9SRUpFQ1RFRCxcclxuICAgIExPR19EQVRBLFxyXG4gICAgQ0xFQVJfTE9HLFxyXG4gICAgQ0FOQ0VMLFxyXG4gICAgQ0xFQVJfRVJST1IsXHJcbiAgICBERUxFVEVfRFJJTkssXHJcbiAgICBERUxFVEVfREVTU0VSVCxcclxuICAgIFNFVF9MQVNUX0lELFxyXG4gICAgU0hPV19OT1RJRklDQVRJT05cclxufSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuaW1wb3J0IHtcclxuICAgIERyaW5rc1R5cGUsIERlc3NlcnRUeXBlLCBQYXltZW50LCBPcmRlclR5cGUsIENoZWNrLFxyXG4gICAgVmFsdWVJbnB1dE9wdGlvbiwgSW5zZXJ0RGF0YU9wdGlvbiwgVmFsdWVSZW5kZXJPcHRpb24sIERhdGVUaW1lUmVuZGVyT3B0aW9uLCBEZXNzZXJ0LCBEcmlua1xyXG59IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBMT0dTX1NQUkVBRFNIRUVUX0lELCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0ZldGNoRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydHNSZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiBcIlJhd0Rlc3NlcnRzRGF0YSFBOkhcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzUmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuZ2V0KHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogXCJSYXdEcmlua3NEYXRhIUE6RlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxhc3REZXNzZXJ0T3JkZXJJZCA9IE1hdGgubWF4KC4uLmRlc3NlcnRzUmVzcG9uc2UucmVzdWx0LnZhbHVlcy5zbGljZSgxKS5tYXAoZCA9PiBkWzddID8gTnVtYmVyKGRbN10pIDogMCkpO1xyXG4gICAgICAgICAgICBsZXQgbGFzdERyaW5rT3JkZXJJZCA9IE1hdGgubWF4KC4uLmRyaW5rc1Jlc3BvbnNlLnJlc3VsdC52YWx1ZXMuc2xpY2UoMSkubWFwKGQgPT4gZFs1XSA/IE51bWJlcihkWzVdKSA6IDApKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdElkID0gTWF0aC5tYXgobGFzdERlc3NlcnRPcmRlcklkLCBsYXN0RHJpbmtPcmRlcklkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlcjogQ2hlY2sgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogbGFzdElkLFxyXG4gICAgICAgICAgICAgICAgZGVzc2VydHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZHJpbmtzOiBbXSxcclxuICAgICAgICAgICAgICAgIGlzRmluaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50OiBQYXltZW50Lk90aGVyLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogT3JkZXJUeXBlLk90aGVyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBsYXN0T3JkZXJQYXltZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGxhc3RPcmRlclR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGFzdE9yZGVyLmRlc3NlcnRzID0gZGVzc2VydHNSZXNwb25zZS5yZXN1bHQudmFsdWVzLnNsaWNlKDEpLmZpbHRlcih2ID0+IHZbN10gPT09IGxhc3RJZC50b1N0cmluZygpKS5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXN0T3JkZXJQYXltZW50ID0gZFs0XSA9PT0gJ9Cd0LDQu9C40YfQutCwJyA/IFBheW1lbnQuQ2FzaCA6IFBheW1lbnQuQ2FyZDtcclxuICAgICAgICAgICAgICAgIGxhc3RPcmRlclR5cGUgPSBkWzVdID09PSAn0JLQuNGC0YDQuNC90LAnID8gT3JkZXJUeXBlLlNob3AgOiBPcmRlclR5cGUuUHJlT3JkZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEZXNzZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzdGU6IGRbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IGRbMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogZFszXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZXNzZXJ0O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxhc3RPcmRlci5kcmlua3MgPSBkcmlua3NSZXNwb25zZS5yZXN1bHQudmFsdWVzLnNsaWNlKDEpLmZpbHRlcih2ID0+IHZbNV0gPT09IGxhc3RJZC50b1N0cmluZygpKS5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXN0T3JkZXJQYXltZW50ID0gZFsyXSA9PT0gJ9Cd0LDQu9C40YfQutCwJyA/IFBheW1lbnQuQ2FzaCA6IFBheW1lbnQuQ2FyZDtcclxuICAgICAgICAgICAgICAgIGxhc3RPcmRlclR5cGUgPSBkWzNdID09PSAn0JLQuNGC0YDQuNC90LAnID8gT3JkZXJUeXBlLlNob3AgOiBPcmRlclR5cGUuUHJlT3JkZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEcmluayA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogZFswXSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBkWzFdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc3NlcnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYXN0T3JkZXIucGF5bWVudCA9IGxhc3RPcmRlclBheW1lbnQ7XHJcbiAgICAgICAgICAgIGxhc3RPcmRlci50eXBlID0gbGFzdE9yZGVyVHlwZTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goU2V0TGFzdElkKGxhc3RJZCwgbGFzdE9yZGVyKSk7XHJcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyhbLi4uZGVzc2VydHMsIC4uLmRyaW5rc10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NBcHBlbmREYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZywgcmFuZ2U6IHN0cmluZywgdmFsdWVSYW5nZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgdXBkYXRlZENlbGxzQ291bnQgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudXBkYXRlcy51cGRhdGVkQ2VsbHM7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kU3VjY2Vzcyh0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LLRiyDQstC+0YjQu9C4INCyINGB0LjRgdGC0LXQvNGDLicpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0xvZyA9IGFzeW5jIChtZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgIFttZXNzYWdlLCBkYXRlVGltZS50b1VUQ1N0cmluZygpXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5hcHBlbmQoe1xyXG4gICAgICAgICAgICBzcHJlYWRzaGVldElkOiBMT0dTX1NQUkVBRFNIRUVUX0lELFxyXG4gICAgICAgICAgICByYW5nZTogJ0E6QicsXHJcbiAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVmFsdWVSZW5kZXJPcHRpb246IFZhbHVlUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9WQUxVRVxyXG4gICAgICAgIH0sIHsgdmFsdWVzOiBkYXRhIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzVXBkYXRlRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcsIHZhbHVlUmFuZ2U6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiAnQTY6RDEwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZURhdGVUaW1lUmVuZGVyT3B0aW9uOiBEYXRlVGltZVJlbmRlck9wdGlvbi5GT1JNQVRURURfU1RSSU5HXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG4gICAgICAgICAgICAvL1RPRE86IFByb2Nlc3MgcmVzcG9uc2UgcmVzdWx0XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0LnZhbHVlcztcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNGZXRjaERhdGFTdWNjZXNzKGl0ZW1zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVDaGVjayA9IGNyZWF0ZUFjdGlvbihDUkVBVEVfQ0hFQ0spO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NDaGVja291dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGNoZWNrOiBDaGVjayA9IHN0YXRlLmNoZWNrO1xyXG4gICAgICAgICAgICBjb25zdCB7IGxvZyB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NSYW5nZSA9IFwiUmF3RHJpbmtzRGF0YSFBOkZcIjtcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBjaGVjay5kcmlua3MuZm9yRWFjaChhc3luYyBkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtkLmlkLCBkLnNpemUsIGNoZWNrLnBheW1lbnQsIGNoZWNrLnR5cGUsIGRhdGVUaW1lLCBjaGVjay5pZF07XHJcbiAgICAgICAgICAgICAgICBkcmlua3NEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZHJpbmtzRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKFNQUkVBRFNIRUVUX0lELCBkcmlua3NSYW5nZSwgZHJpbmtzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0c1JhbmdlID0gXCJSYXdEZXNzZXJ0c0RhdGEhQTpIXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5mb3JFYWNoKGFzeW5jIGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gW2QudHlwZSwgZC50YXN0ZSwgZC5xdWFudGl0eSwgZC5zaXplLCBjaGVjay5wYXltZW50LCBjaGVjay50eXBlLCBkYXRlVGltZSwgY2hlY2suaWRdO1xyXG4gICAgICAgICAgICAgICAgZGVzc2VydHNEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZGVzc2VydHNEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEoU1BSRUFEU0hFRVRfSUQsIGRlc3NlcnRzUmFuZ2UsIGRlc3NlcnRzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChDaGVja291dCgpKTtcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goU2hvd05vdGlmaWNhdGlvbigwLCAn0JfQsNC60LDQtyDRgdC+0YXRgNCw0L3RkdC9IScpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2cobG9nKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvY2Vzc0xvZyhKU09OLnN0cmluZ2lmeShjaGVjaykpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChDbGVhckxvZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kRXJyb3JlZCgn0J7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUsINGH0YLQviDQstGLINCy0L7RiNC70Lgg0LIg0YHQuNGB0YLQtdC80YMuJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdCA9IChwYXJ0bmVyOiBzdHJpbmcsIG1hY1F0eTogbnVtYmVyLCB6ZXBRdHk6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0bmVyc1JhbmdlID0gXCJSYXdQYXJ0bmVyc0RhdGEhQTpEXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRuZXJzRGF0YSA9IFtbcGFydG5lciwgbWFjUXR5LCB6ZXBRdHksIG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW0nKV1dO1xyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YShTUFJFQURTSEVFVF9JRCwgcGFydG5lcnNSYW5nZSwgcGFydG5lcnNEYXRhKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2coSlNPTi5zdHJpbmdpZnkocGFydG5lcnNEYXRhKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFNob3dOb3RpZmljYXRpb24oMCwgJ9CX0LDQutCw0Lcg0YHQvtGF0YDQsNC90ZHQvSEnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LLRiyDQstC+0YjQu9C4INCyINGB0LjRgdGC0LXQvNGDLicpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tvdXQgPSBjcmVhdGVBY3Rpb24oUFJPQ0VTU19DSEVDS09VVCk7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRHJpbmsgPSBjcmVhdGVBY3Rpb24oQUREX0RSSU5LLCAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERlc3NlcnQgPSBjcmVhdGVBY3Rpb24oQUREX0RFU1NFUlQsICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiBbdHlwZSwgdGFzdGUsIHNpemUsIHF1YW50aXR5XSk7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlRHJpbmsgPSBjcmVhdGVBY3Rpb24oREVMRVRFX0RSSU5LLCAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZURlc3NlcnQgPSBjcmVhdGVBY3Rpb24oREVMRVRFX0RFU1NFUlQsICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgdGFzdGUsIHNpemVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRQYXltZW50VHlwZSA9IGNyZWF0ZUFjdGlvbihTRVRfUEFZTUVOVF9UWVBFLCAodHlwZTogUGF5bWVudCkgPT4gdHlwZSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0T3JkZXJUeXBlID0gY3JlYXRlQWN0aW9uKFNFVF9PUkRFUl9UWVBFLCAodHlwZTogT3JkZXJUeXBlKSA9PiB0eXBlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0hhc0Vycm9yZWQgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNU19SRUpFQ1RFRCwgKGhhc0Vycm9yZWQ6IGJvb2xlYW4pID0+IGhhc0Vycm9yZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zSXNMb2FkaW5nID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVMsIChpc0xvYWRpbmc6IGJvb2xlYW4pID0+IGlzTG9hZGluZyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNGZXRjaERhdGFTdWNjZXNzID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVNfRlVMRklMTEVELCAoaXRlbXM6IGFueVtdKSA9PiBpdGVtcyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNBcHBlbmRTdWNjZXNzID0gY3JlYXRlQWN0aW9uKEFQUEVORF9EQVRBX0ZVTEZJTExFRCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHN1Y2Nlc3MpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zQXBwZW5kRXJyb3JlZCA9IGNyZWF0ZUFjdGlvbihBUFBFTkRfREFUQV9SRUpFQ1RFRCwgKHRleHQ6IHN0cmluZykgPT4gdGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0J1c3kgPSBjcmVhdGVBY3Rpb24oU0hPV19CVVNZLCAoaXNCdXN5OiBib29sZWFuKSA9PiBpc0J1c3kpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ0RhdGEgPSBjcmVhdGVBY3Rpb24oTE9HX0RBVEEsICh0ZXh0OiBzdHJpbmcpID0+IHRleHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsZWFyTG9nID0gY3JlYXRlQWN0aW9uKENMRUFSX0xPRyk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FuY2VsID0gY3JlYXRlQWN0aW9uKENBTkNFTCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJFcnJvciA9IGNyZWF0ZUFjdGlvbihDTEVBUl9FUlJPUik7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0TGFzdElkID0gY3JlYXRlQWN0aW9uKFNFVF9MQVNUX0lELCAobGFzdElkOiBudW1iZXIsIGxhc3RDaGVjazogQ2hlY2spID0+IFtsYXN0SWQsIGxhc3RDaGVja10pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dOb3RpZmljYXRpb24gPSBjcmVhdGVBY3Rpb24oU0hPV19OT1RJRklDQVRJT04sICh0eXBlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZykgPT4gW3R5cGUsIG1lc3NhZ2VdKTtcclxuIiwiaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL01haW5QYWdlJztcclxuaW1wb3J0IENoZWNrUGFnZSBmcm9tICcuL3BhZ2VzL0NoZWNrUGFnZSc7XHJcbmltcG9ydCBDaGVja291dFBhZ2UgZnJvbSAnLi9wYWdlcy9DaGVja291dFBhZ2UnO1xyXG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4vcGFnZXMvTm90Rm91bmRQYWdlJztcclxuaW1wb3J0IFBhcnRuZXJzUGFnZSBmcm9tICcuL3BhZ2VzL1BhcnRuZXJzUGFnZSc7XHJcbmltcG9ydCBUZXN0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9UZXN0Q29tcG9uZW50JztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICcuL2NvbXBvbmVudHMvQXBwQmFyJztcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e01haW5QYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2snIGNvbXBvbmVudD17Q2hlY2tQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2tPdXQnIGNvbXBvbmVudD17Q2hlY2tvdXRQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvcGFydG5lcnMnIGNvbXBvbmVudD17UGFydG5lcnNQYWdlfSAvPlxyXG5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL3Rlc3QnIGNvbXBvbmVudD17VGVzdENvbXBvbmVudH0gLz5cclxuICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZFBhZ2V9IC8+XHJcbiAgICA8L1N3aXRjaD5cclxuKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwUHJvcHMge1xyXG4gICAgaXNTY3JpcHRMb2FkZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PElBcHBQcm9wcywgSUFwcFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NjcmlwdExvYWRlZCB9ID0gbmV4dFByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JpcHRMb2FkZWQgJiYgIXRoaXMucHJvcHMuaXNTY3JpcHRMb2FkZWQpIHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnY2xpZW50OmF1dGgyJywgdGhpcy5pbml0Q2xpZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICAvLyBjb25zdCBhdXRoMiA9IHdpbmRvd1snZ2FwaSddLmF1dGgyLmluaXQoe1xyXG4gICAgICAgIC8vICAgICBjbGllbnRfaWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAvLyAgICAgc2NvcGU6IFNDT1BFUyxcclxuICAgICAgICAvLyAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgLy8gICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBhdXRoMi5pc1NpZ25lZEluLmxpc3Rlbih0aGlzLnNpZ25pbkNoYW5nZWQpO1xyXG5cclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVNcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5saXN0ZW4odGhpcy5zaWduaW5DaGFuZ2VkKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5pc1NpZ25lZEluLmdldCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbkNoYW5nZWQgPSAoaXNTaWduZWRJbikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBpc1NpZ25lZEluXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXV0aENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNpZ25vdXRDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTaWduZWRJbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd1snZ2FwaSddIHx8ICF3aW5kb3dbJ2dhcGknXS5hdXRoMiB8fCAhd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5nZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPEFwcEJhciB0aXRsZT17J9CT0LvQsNCy0L3QsNGPJ30gaXNTaWduZWRJbj17aXNTaWduZWRJbn0gb25Mb2dpbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gb25Mb2dvdXRDbGljaz17dGhpcy5oYW5kbGVTaWdub3V0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgIHtpc1NpZ25lZEluICYmIDxNYWluIC8+fVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBpZD1cImF1dGhvcml6ZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdub25lJyA6ICdibG9jaycgfX0+QXV0aG9yaXplPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5TaWduIE91dDwvYnV0dG9uPiAqL31cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcmlwdExvYWRlcihcclxuICAgICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnXHJcbikoQXBwKTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXJDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ9CU0L7QvNC+0LknLFxyXG4gICAgICAgIHJvdXRlOiAnLydcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgdGl0bGU6ICdUZXN0JyxcclxuICAgIC8vICAgICByb3V0ZTogJy90ZXN0J1xyXG4gICAgLy8gfVxyXG5dO1xyXG5cclxuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJhckNvbXBvbmVudFByb3BzIHtcclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGlzU2lnbmVkSW4/OiBib29sZWFuO1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuXHJcbiAgICBvbkxvZ2luQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25Mb2dvdXRDbGljaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJhckNvbXBvbmVudFN0YXRlIHtcclxuICAgIGFuY2hvckVsPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQmFyIGV4dGVuZHMgQ29tcG9uZW50PElBcHBCYXJDb21wb25lbnRQcm9wcywgSUFwcEJhckNvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG4gICAgICAgIGlmIChjdXJyZW50Um91dGUgIT09IG9wdGlvbi5yb3V0ZSkge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2gob3B0aW9uLnJvdXRlKTtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbCBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlTG9naW5DbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGlzU2lnbmVkSW4sIG9uTG9naW5DbGljaywgb25Mb2dvdXRDbGljayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2lnbmVkSW4pIHtcclxuICAgICAgICAgICAgb25Mb2dvdXRDbGljaygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb25Mb2dpbkNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1lbnUoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhbmNob3JFbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlID0gbG9jYXRpb24uaGFzaC5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYXBwYmFyX21lbnVCdXR0b24nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtb3ducz17b3BlbiA/ICdsb25nLW1lbnUnIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb25nLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBJVEVNX0hFSUdIVCAqIDQuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnMubWFwKG9wdGlvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17b3B0aW9uLnJvdXRlID09PSBjdXJyZW50Um91dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKG9wdGlvbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgaXNTaWduZWRJbiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhcHBiYXJfcm9vdCd9PlxyXG4gICAgICAgICAgICAgICAgPEFwcEJhckNvbXBvbmVudCBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17J2FwcGJhcl9ncm93J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2luQ2xpY2t9Pntpc1NpZ25lZEluID8gJ9CS0YvQudGC0LgnIDogJ9CS0L7QudGC0LgnfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIDwvQXBwQmFyQ29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFwcEJhcik7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgR3JpZExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQnVzeVByb3BzIHtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1c3k6IFJlYWN0LlNGQzxJQnVzeVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImJ1c3ktY29udGFpbmVyXCIgKyAocHJvcHMubG9hZGluZyA/IFwiXCIgOiBcIiBpbnZpc2libGVcIil9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzeVwiPlxyXG4gICAgICAgICAgICA8R3JpZExvYWRlclxyXG4gICAgICAgICAgICAgICAgY29sb3I9eycjZDAwMDZmJ31cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e3Byb3BzLmxvYWRpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWRkRGVzc2VydCwgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERlc3NlcnRUeXBlLCBNYWNhcm9uc0VudW0sIENha2VzRW51bSwgWmVwaHlyRW51bSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRGVzc2VydHNEaWN0LCBNYWNhcm9uc0NvbG9ycywgWmVwaHlyQ29sb3JzIH0gZnJvbSAnLi4vdXRpbHMvZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5cclxuY29uc3QgTUlYX1RBU1RFX05BTUUgPSAn0J3QsNCx0L7RgCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgYWRkRGVzc2VydDogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpID0+IGRpc3BhdGNoKEFkZERlc3NlcnQodHlwZSwgdGFzdGUsIHNpemUsIHF1YW50aXR5KSksXHJcbiAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXNzZXJ0c0NvbXBvbmVudFByb3BzIHtcclxuICBhZGREZXNzZXJ0PzogKHR5cGU6IERlc3NlcnRUeXBlLCB0YXN0ZTogc3RyaW5nLCBzaXplOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgaGFuZGxlQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXNzZXJ0c0NvbXBvbmVudFN0YXRlIHtcclxuICBkZXNzZXJ0VHlwZT86IERlc3NlcnRUeXBlO1xyXG4gIGRlc3NlcnRUYXN0ZT86IHN0cmluZztcclxuICBkZXNzZXJ0UXVhbnRpdGllcz86IHsgW2lkOiBzdHJpbmddOiBudW1iZXI7IH07XHJcbn1cclxuXHJcbmNsYXNzIERlc3NlcnRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElEZXNzZXJ0c0NvbXBvbmVudFByb3BzLCBJRGVzc2VydHNDb21wb25lbnRTdGF0ZT57XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZXNzZXJ0VHlwZTogbnVsbCxcclxuICAgICAgZGVzc2VydFRhc3RlOiBudWxsLFxyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllczoge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+Y2xvc2UnKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRTZWxlY3QgPSAoZGVzc2VydCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRlc3NlcnRUeXBlOiBkZXNzZXJ0XHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRTZWxlY3RlZC0+JyArIGRlc3NlcnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0ID0gYXN5bmMgKHRhc3RlKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGlmIChkZXNzZXJ0VHlwZSA9PT0gRGVzc2VydFR5cGUuQ2FrZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkZXNzZXJ0VGFzdGU6IHRhc3RlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0VGFzdGVTZWxlY3RlZC0+JyArIHRhc3RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRGVzc2VydEluY3JlYXNlKHRhc3RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRNaXhTZWxlY3QgPSBhc3luYyAocXR5KSA9PiB7XHJcbiAgICB0aGlzLmhhbmRsZURlc3NlcnRJbmNyZWFzZShNSVhfVEFTVEVfTkFNRSwgcXR5KTtcclxuICAgIC8vIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgTUlYX1RBU1RFX05BTUUsIG51bGwsIHF0eSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5oYW5kbGVEZXNzZXJ0TWl4U2VsZWN0LT4nICsgcXR5KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRTaXplT3JRdWFudGl0eVNlbGVjdCA9IGFzeW5jIChzaXplT3JRdHkpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoZGVzc2VydFR5cGUgPT09IERlc3NlcnRUeXBlLkNha2UpIHtcclxuICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIHNpemVPclF0eSwgMSk7XHJcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFNpemVTZWxlY3RlZC0+JyArIHNpemVPclF0eSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERlc3NlcnQoZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSwgbnVsbCwgc2l6ZU9yUXR5KTtcclxuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0UXVhbnRpdHlTZWxlY3RlZC0+JyArIHNpemVPclF0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaW5pc2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0UXVhbnRpdGllcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZXNzZXJ0UXVhbnRpdGllcykge1xyXG4gICAgICBjb25zdCBkZXNzZXJ0VGFzdGUgPSBrZXkuc3BsaXQoJy8nKVsxXTtcclxuICAgICAgY29uc3QgcXR5ID0gZGVzc2VydFF1YW50aXRpZXNba2V5XTtcclxuICAgICAgaWYgKHF0eSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBudWxsLCBxdHkgfHwgMCk7XHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5oYW5kbGVGaW5pc2gnKTtcclxuICB9XHJcblxyXG4gIGdldElkKGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUpIHtcclxuICAgIHJldHVybiBgJHtkZXNzZXJ0VHlwZX0vJHtkZXNzZXJ0VGFzdGV9YDtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRJbmNyZWFzZSA9ICh0YXN0ZSwgcXR5ID0gMSkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0UXVhbnRpdGllcywgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmdldElkKGRlc3NlcnRUeXBlLCB0YXN0ZSk7XHJcbiAgICBpZiAoIWRlc3NlcnRRdWFudGl0aWVzW2lkXSkge1xyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllc1tpZF0gPSBxdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllc1tpZF0gKz0gcXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllc1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0UXR5SW5jcmVhc2UtPicgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0RGVjcmVhc2UgPSAodGFzdGUsIHF0eSA9IDEpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgdGFzdGUpO1xyXG4gICAgaWYgKGRlc3NlcnRRdWFudGl0aWVzW2lkXSkge1xyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllc1tpZF0gLT0gcXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0UXVhbnRpdGllc1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0UXR5SW5jcmVhc2UtPicgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBjb3VudFRvdGFsRGVzc2VydFF1YW50aXR5KCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0UXVhbnRpdGllcywgZGVzc2VydFR5cGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZXNzZXJ0UXVhbnRpdGllcykge1xyXG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoZGVzc2VydFR5cGUpKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGRlc3NlcnRRdWFudGl0aWVzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRBcnJheUZyb21FbnVtKGVuOiBhbnkpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbik7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcChkID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogZCxcclxuICAgICAgICB2YWx1ZTogZW5bZF1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXJEZXNzZXJ0cygpIHtcclxuICAgIGNvbnN0IGRlc3NlcnRLZXlzID0gT2JqZWN0LmtleXMoRGVzc2VydFR5cGUpO1xyXG4gICAgY29uc3QgZGVzc2VydHMgPSBkZXNzZXJ0S2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgdmFsdWU6IERlc3NlcnRUeXBlW2RdXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7ZGVzc2VydHMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRTZWxlY3QoZC52YWx1ZSl9IGtleT17ZC5pZH0gPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J21hY2Fyb25BdmF0YXInIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNkZDczZTInIH19PlxyXG4gICAgICAgICAgICAgICAge2QudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZC52YWx1ZX0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PjtcclxuICB9O1xyXG5cclxuICByZW5kZXJEZXNzZXJ0VGFzdGVzKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFF1YW50aXRpZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgbGV0IGRlc3NlcnRUYXN0ZXM7XHJcbiAgICBsZXQgZXh0cmFPcHRpb25zID0gW107XHJcbiAgICBzd2l0Y2ggKGRlc3NlcnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgRGVzc2VydFR5cGUuQ2FrZTpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gdGhpcy5nZXRBcnJheUZyb21FbnVtKENha2VzRW51bSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGVzc2VydFR5cGUuTWFjYXJvbjpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gdGhpcy5nZXRBcnJheUZyb21FbnVtKE1hY2Fyb25zRW51bSk7XHJcbiAgICAgICAgZXh0cmFPcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IDYsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCA2INGI0YIuJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiAxMixcclxuICAgICAgICAgIHRpdGxlOiAn0J3QsNCx0L7RgCDQvdCwIDEyINGI0YIuJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiAyNCxcclxuICAgICAgICAgIHRpdGxlOiAn0J3QsNCx0L7RgCDQvdCwIDI0INGI0YIuJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLlplcGh5cjpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gdGhpcy5nZXRBcnJheUZyb21FbnVtKFplcGh5ckVudW0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiA4LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgOCDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogMTYsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCAxNiDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBkZXNzZXJ0VGFzdGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZGVzc2VydHNUYXN0ZXNXcmFwcGVyJz5cclxuICAgICAge2Rlc3NlcnRUeXBlICE9PSBEZXNzZXJ0VHlwZS5DYWtlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQXBwbHlXcmFwZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdGl0bGU9XCJDaGVjayBPdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUZpbmlzaH0+XHJcbiAgICAgICAgICAgINCf0YDQuNC80LXQvdC40YLRjFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxMaXN0IGNsYXNzTmFtZT0nZGVzc2VydHNUYXN0ZXNMaXN0V3JhcHBlcic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGVzc2VydFRhc3Rlcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0VGFzdGVTZWxlY3QoZC52YWx1ZSl9IGtleT17ZC5pZH0gPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdtYWNhcm9uQXZhdGFyJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGRlc3NlcnRUeXBlID09PSBEZXNzZXJ0VHlwZS5NYWNhcm9uID8gTWFjYXJvbnNDb2xvcnNbZC52YWx1ZV0gOiBaZXBoeXJDb2xvcnNbZC52YWx1ZV0gfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkLnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWUgKyAoZGVzc2VydFR5cGUgIT09IERlc3NlcnRUeXBlLkNha2UgPyBgKCR7ZGVzc2VydFF1YW50aXRpZXNbdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgZC52YWx1ZSldIHx8IDB9KWAgOiAnJyl9IC8+XHJcbiAgICAgICAgICAgICAge2Rlc3NlcnRUeXBlICE9PSBEZXNzZXJ0VHlwZS5DYWtlICYmIChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiA+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJBZGRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnREZWNyZWFzZShkLnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgeydcXHUyMDE0J31cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXh0cmFPcHRpb25zLm1hcChvID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRNaXhTZWxlY3Qoby52YWx1ZSl9IGtleT17by52YWx1ZX0gPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdtYWNhcm9uQXZhdGFyJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZGQ3M2UyJyB9fT5cclxuICAgICAgICAgICAgICAgICAge28udmFsdWV9XHJcbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17YCR7by50aXRsZX0oJHtkZXNzZXJ0UXVhbnRpdGllc1t0aGlzLmdldElkKGRlc3NlcnRUeXBlLCBNSVhfVEFTVEVfTkFNRSldIHx8IDB9KWB9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQ2FuY2VsV3JhcGVyJz5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRGVzc2VydFNpemUoKSB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZGVzc2VydFNpemVzID0gRGVzc2VydHNEaWN0W2Rlc3NlcnRUeXBlXTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFNpemVPclF1YW50aXR5U2VsZWN0KGQpfSBrZXk9e2R9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2R9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuIGZ1bGxTY3JlZW4gPlxyXG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgeyFkZXNzZXJ0VHlwZSA/ICfQktGL0LHQtdGA0LjRgtC1INCU0LXRgdC10YDRgicgOiAoIWRlc3NlcnRUYXN0ZSA/IGDQktGL0LHQtdGA0LjRgtC1INCy0LrRg9GBICgke3RoaXMuY291bnRUb3RhbERlc3NlcnRRdWFudGl0eSgpfSlgIDogJ9CS0YvQsdC10YDQuNGC0LUg0YDQsNC30LzQtdGAJyl9XHJcbiAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgIHshZGVzc2VydFR5cGUgPyB0aGlzLnJlbmRlckRlc3NlcnRzKCkgOiAoIWRlc3NlcnRUYXN0ZSA/IHRoaXMucmVuZGVyRGVzc2VydFRhc3RlcygpIDogdGhpcy5yZW5kZXJEZXNzZXJ0U2l6ZSgpKX1cclxuICAgIDwvRGlhbG9nPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEZXNzZXJ0c0NvbXBvbmVudCkpXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBZGREcmluaywgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERyaW5rc1R5cGUgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IERyaW5rc0RpY3QgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkRHJpbms6ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IGRpc3BhdGNoKEFkZERyaW5rKHR5cGUsIHNpemUpKSxcclxuICAgICAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyaW5rc0NvbXBvbmVudFByb3BzIHtcclxuICAgIGFkZERyaW5rPzogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGhhbmRsZUNsb3NlPzogKCkgPT4gdm9pZDtcclxuICAgIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEcmlua3NDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBkcmlua1R5cGU/OiBEcmlua3NUeXBlO1xyXG4gICAgZHJpbmtTaXplPzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBEcmlua3NDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SURyaW5rc0NvbXBvbmVudFByb3BzLCBJRHJpbmtzQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyaW5rVHlwZTogbnVsbCxcclxuICAgICAgICAgICAgZHJpbmtTaXplOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2RyaW5rcy0+Y2xvc2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmlua1NlbGVjdCA9IGFzeW5jIChkcmluaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRyaW5rU2l6ZXMgPSBEcmlua3NEaWN0W2RyaW5rXTtcclxuICAgICAgICBpZiAoZHJpbmtTaXplcyAmJiBkcmlua1NpemVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRyaW5rVHlwZTogZHJpbmssXHJcbiAgICAgICAgICAgICAgICBkcmlua1NpemU6IGRyaW5rU2l6ZXNbMF1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERyaW5rKGRyaW5rLCBkcmlua1NpemVzWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoYGRyaW5rcy0+ZHJpbmtTZWxlY3RlZC0+JHtkcmlua30tPmRyaW5rU2l6ZVNlbGVjdGVkLT4ke2RyaW5rU2l6ZXNbMF19YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkcmlua1R5cGU6IGRyaW5rXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2RyaW5rcy0+ZHJpbmtTZWxlY3RlZC0+JyArIGRyaW5rKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJpbmtTaXplU2VsZWN0ID0gYXN5bmMgKGRyaW5rU2l6ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkcmlua1NpemVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkcmlua1R5cGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREcmluayhkcmlua1R5cGUsIGRyaW5rU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5kcmlua1NpemVTZWxlY3RlZC0+JyArIGRyaW5rU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRHJpbmtzKCkge1xyXG4gICAgICAgIGNvbnN0IGRyaW5rS2V5cyA9IE9iamVjdC5rZXlzKERyaW5rc1R5cGUpO1xyXG4gICAgICAgIGNvbnN0IGRyaW5rcyA9IGRyaW5rS2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBEcmlua3NUeXBlW2RdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2RyaW5rc1dyYXBwZXInPlxyXG4gICAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9J2RyaW5rc0xpc3RXcmFwcGVyJz5cclxuICAgICAgICAgICAgICAgIHtkcmlua3MubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEcmlua1NlbGVjdChkLnZhbHVlKX0ga2V5PXtkLmlkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdkcmlua0F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyRHJpbmtTaXplcygpIHtcclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmlua1NpemVzID0gRHJpbmtzRGljdFtkcmlua1R5cGVdO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZHJpbmtTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2l6ZVNlbGVjdChkKX0ga2V5PXtkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdkcmlua0F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPERpYWxvZyBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3BlbiBmdWxsU2NyZWVuID5cclxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2ltcGxlLWRpYWxvZy10aXRsZVwiPnshZHJpbmtUeXBlID8gJ9CS0YvQsdC10YDQuNGC0LUg0L3QsNC/0LjRgtC+0LonIDogJ9CS0YvQsdC10YDQuNGC0LUg0YDQsNC30LzQtdGAJ308L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICB7IWRyaW5rVHlwZSA/IHRoaXMucmVuZGVyRHJpbmtzKCkgOiB0aGlzLnJlbmRlckRyaW5rU2l6ZXMoKX1cclxuICAgICAgICA8L0RpYWxvZz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEcmlua3NDb21wb25lbnQpKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBFeHBhbnNpb25QYW5lbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbCc7XHJcbmltcG9ydCBFeHBhbnNpb25QYW5lbFN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5JztcclxuaW1wb3J0IEV4cGFuc2lvblBhbmVsRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbERldGFpbHMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeVxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGlzdG9yeUNvbXBvbmVudFByb3BzIHtcclxuICAgIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhpc3RvcnlDb21wb25lbnRTdGF0ZSB7XHJcbn1cclxuXHJcbmNsYXNzIEhpc3RvcnlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SUhpc3RvcnlDb21wb25lbnRQcm9wcywgSUhpc3RvcnlDb21wb25lbnRTdGF0ZT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICAgIHtoaXN0b3J5LnNvcnQoKGEsIGIpID0+IChhLmlkID4gYi5pZCkgPyAtMSA6ICgoYi5pZCA+IGEuaWQpID8gMSA6IDApKS5tYXAoaCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGtleT17aC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsIGNsYXNzTmFtZT0naGlzdG9yeUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbFN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pntg0KfQtdC6ICMke2guaWR9YH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5zaW9uUGFuZWxEZXRhaWxzIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj7QlNC10YHQtdGA0YLRizwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmRlc3NlcnRzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VHlwb2dyYXBoeSBrZXk9e2luZGV4fSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtkLnR5cGV9ICR7ZC50YXN0ZX06ICR7ZC5xdWFudGl0eSA/IGQucXVhbnRpdHkgOiBkLnNpemV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj7QndCw0L/QuNGC0LrQuDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmRyaW5rcy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFR5cG9ncmFwaHkga2V5PXtpbmRleH0gdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZC5pZH06ICR7ZC5zaXplfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+0KLQuNC/INC+0L/Qu9Cw0YLRizogPC9iPntoLnBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlzdG9yeUl0ZW1Sb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9eydzdWJoZWFkaW5nJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCi0LjQvyDQt9Cw0LrQsNC30LA6IDwvYj57aC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGlzdG9yeUNvbXBvbmVudCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmpzJztcclxuXHJcbmNvbnN0IExhcmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMsIGNvbXBvbmVudCwgb25DbGljaywgdGl0bGUsIGltYWdlVXJsIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgZm9jdXNSaXBwbGVcclxuICAgICAgICAgICAgICAgIGtleT17J21haW4nfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU9e2NsYXNzZXMuZm9jdXNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMwJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3ViaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VNYXJrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGFyZ2VCdXR0b24pOyIsImV4cG9ydCBkZWZhdWx0IHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICczMHZoJ1xyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnLCAvLyBPdmVycmlkZXMgaW5saW5lLXN0eWxlXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXIsICYkZm9jdXNWaXNpYmxlJzoge1xyXG4gICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICcmICRpbWFnZUJhY2tkcm9wJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlTWFya2VkJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlVGl0bGUnOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgNDAlJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogNH1weCAke3RoZW1lLnNwYWNpbmcudW5pdCArIDZ9cHhgLFxyXG4gICAgfSxcclxuICAgIGltYWdlTWFya2VkOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLFxyXG4gICAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGJvdHRvbTogLTIsXHJcbiAgICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gOXB4KScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgQ2hlY2ssIERlc3NlcnQsIERyaW5rLCBEZXNzZXJ0VHlwZSwgRHJpbmtzVHlwZSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IERyaW5rc0NvbXBvbmVudCBmcm9tICcuL0RyaW5rc0NvbXBvbmVudCc7XHJcbmltcG9ydCBEZXNzZXJ0c0NvbXBvbmVudCBmcm9tICcuL0Rlc3NlcnRzQ29tcG9uZW50JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBMYXJnZUJ1dHRvbiBmcm9tICcuL0xhcmdlQnV0dG9uJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgeyBEZWxldGVEZXNzZXJ0LCBEZWxldGVEcmluayB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XHJcblxyXG5jb25zdCBkZXNzZXJ0c0ltYWdlID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9kZXNzZXJ0c19pY29uLmpwZycpO1xyXG5jb25zdCBkcmlua3NJbWFnZSA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9pbWFnZXMvZHJpbmtzX2ljb24uanBnJyk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlbGV0ZURlc3NlcnQ6ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChEZWxldGVEZXNzZXJ0KHR5cGUsIHRhc3RlLCBzaXplKSksXHJcbiAgICAgICAgZGVsZXRlRHJpbms6ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IGRpc3BhdGNoKERlbGV0ZURyaW5rKHR5cGUsIHNpemUpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5ld09yZGVyQ29tcG9uZW50UHJvcHMge1xyXG4gICAgY2hlY2s/OiBDaGVjaztcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcblxyXG4gICAgZGVsZXRlRGVzc2VydD86ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgZGVsZXRlRHJpbms/OiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXdPcmRlckNvbXBvbmVudFN0YXRlIHtcclxuICAgIHNob3dEcmlua3M/OiBib29sZWFuO1xyXG4gICAgc2hvd0Rlc3NlcnRzPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgTmV3T3JkZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SU5ld09yZGVyQ29tcG9uZW50UHJvcHMsIElOZXdPcmRlckNvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93RHJpbmtzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0Rlc3NlcnRzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVQcmljZSgpIHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBIZWxwZXIuY2FsY3VsYXRlUHJpY2UoY2hlY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERyaW5rQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEcmlua3M6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZERlc3NlcnRDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0Rlc3NlcnRzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnL2NoZWNrT3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVsZXRlRHJpbmsgPSAoZHJpbms6IERyaW5rKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVEcmluayhkcmluay5pZCwgZHJpbmsuc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVsZXRlRGVzc2VydCA9IChkZXNzZXJ0OiBEZXNzZXJ0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVEZXNzZXJ0KGRlc3NlcnQudHlwZSwgZGVzc2VydC50YXN0ZSwgZGVzc2VydC5zaXplKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDaGVja0NvbnRlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRDb250cm9sR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgINCY0YLQvtCz0L46IHt0aGlzLmNhbGN1bGF0ZVByaWNlKCl9INCz0YDQvS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAge2NoZWNrLmRyaW5rcy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YCR7ZC5pZH0gLSAke2Quc2l6ZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRGVsZXRlXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGVEcmluayhkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICB7Y2hlY2suZGVzc2VydHMubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGluc2V0IHByaW1hcnk9e2Ake2QudHlwZX0gLSAke2QudGFzdGV9IC0gJHtkLnF1YW50aXR5fSR7ZC5zaXplID8gKCcgLSAnICsgZC5zaXplKSA6ICcnfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJEZWxldGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZURlc3NlcnQoZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNob3dEcmlua3MsIHNob3dEZXNzZXJ0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAg0J/QvtC20LDQu9GD0LnRgdGC0LAsINGB0L7Qt9C00LDQudGC0LUg0YHQvdCw0YfQsNC70LAg0YfQtdC6XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImhlYWRsaW5lXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgINCd0L7QstGL0Lkg0LfQsNC60LDQt1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHtg0KfQtdC6ICMke2NoZWNrLmlkfWB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdPcmRlckJ1dHRvbnNXcmFwcGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdPcmRlckJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhcmdlQnV0dG9uIHRpdGxlPXsn0JTQldCh0JXQoNCi0KsnfSBpbWFnZVVybD17ZGVzc2VydHNJbWFnZX0gb25DbGljaz17dGhpcy5hZGREZXNzZXJ0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdPcmRlckJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhcmdlQnV0dG9uIHRpdGxlPXsn0J3QkNCf0JjQotCa0JgnfSBpbWFnZVVybD17ZHJpbmtzSW1hZ2V9IG9uQ2xpY2s9e3RoaXMuYWRkRHJpbmtDbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hlY2tDb250ZW50KCl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYnV0dG9uc1dyYXBlcid9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVjay5kZXNzZXJ0cy5sZW5ndGggPT09IDAgJiYgY2hlY2suZHJpbmtzLmxlbmd0aCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LTQvtC70LbQuNGC0YxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0RyaW5rcyAmJiA8RHJpbmtzQ29tcG9uZW50IGhhbmRsZUNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0RyaW5rczogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgICAgICB7c2hvd0Rlc3NlcnRzICYmIDxEZXNzZXJ0c0NvbXBvbmVudCBoYW5kbGVDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dEZXNzZXJ0czogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gICAgKE5ld09yZGVyQ29tcG9uZW50KSk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBFcnJvckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yJztcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IFNuYWNrYmFyQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhckNvbnRlbnQnO1xyXG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1dhcm5pbmcnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IHsgQ2xlYXJFcnJvciB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlLmVycm9yTWVzc2FnZSxcclxuICAgICAgICB0eXBlOiBzdGF0ZS5ub3RpZmljYXRpb25UeXBlXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyRXJyb3I6ICgpID0+IGRpc3BhdGNoKENsZWFyRXJyb3IoKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBWYXJpYW50SWNvbiB7XHJcbiAgICBzdWNjZXNzLFxyXG4gICAgd2FybmluZyxcclxuICAgIGVycm9yLFxyXG4gICAgaW5mb1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb3RpZmljYXRpb25Db21wb25lbnRQcm9wcyB7XHJcbiAgICAvLyBjbGFzc2VzOiBhbnk7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBWYXJpYW50SWNvbjtcclxuXHJcbiAgICBjbGVhckVycm9yPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uQ29tcG9uZW50U3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElOb3RpZmljYXRpb25Db21wb25lbnRQcm9wcywgSU5vdGlmaWNhdGlvbkNvbXBvbmVudFN0YXRlPntcclxuICAgIGdldEljb24oKSB7XHJcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5zdWNjZXNzOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gQ2hlY2tDaXJjbGVJY29uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24ud2FybmluZzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFdhcm5pbmdJY29uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uZXJyb3I6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBFcnJvckljb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5pbmZvOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gSW5mb0ljb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5zdWNjZXNzOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24ud2FybmluZzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICd3YXJuaW5nJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLmVycm9yOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ2Vycm9yJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLmluZm86XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnaW5mbyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBJY29uID0gdGhpcy5nZXRJY29uKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9wZW49eyEhbWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U25hY2tiYXJDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmdldENsYXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNsaWVudC1zbmFja2JhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2xpZW50LXNuYWNrYmFyXCIgY2xhc3NOYW1lPXsnbWVzc2FnZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdpY29uJywgJ2ljb24tdmFyaWFudCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdub3RpZmljYXRpb25DbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5vdGlmaWNhdGlvbkNvbXBvbmVudCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBQYXJ0bmVyc0VudW0gfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IFByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0IH0gZnJvbSAnLi4vYWN0aW9ucydcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IHsgQ2FmZmVlUHJpY2VzLCBaRVBIWVJfUEFSVE5FUlNfUFJJQ0UgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQ6IChwYXJ0bmVyOiBzdHJpbmcsIG1hY1F0eTogbnVtYmVyLCB6ZXBRdHk6IG51bWJlcikgPT4gZGlzcGF0Y2goUHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQocGFydG5lciwgbWFjUXR5LCB6ZXBRdHkpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnRuZXJzQ29tcG9uZW50UHJvcHMge1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuICAgIHByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0PzogKHBhcnRuZXI6IHN0cmluZywgbWFjUXR5OiBudW1iZXIsIHplcFF0eTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0bmVyc0NvbXBvbmVudFN0YXRlIHtcclxuICAgIHBhcnRuZXI/OiBzdHJpbmc7XHJcbiAgICBtYWNhcm9uc1F0eT86IG51bWJlcjtcclxuICAgIHplcGh5clF0eT86IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgUGFydG5lcnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SVBhcnRuZXJzQ29tcG9uZW50UHJvcHMsIElQYXJ0bmVyc0NvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYXJ0bmVyOiAnJyxcclxuICAgICAgICAgICAgbWFjYXJvbnNRdHk6IDAsXHJcbiAgICAgICAgICAgIHplcGh5clF0eTogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBcnJheUZyb21FbnVtKGVuOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW4pO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW5bZF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQYXJ0bmVyU2VsZWN0ID0gKGV2KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFydG5lciA9IGV2LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFydG5lciB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNYWNhcm9uc1F0eUNoYW5nZSA9IChldikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtYWNhcm9uc1F0eTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlWmVwaHlyUXR5Q2hhbmdlID0gKGV2KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHplcGh5clF0eTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQsIGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBwYXJ0bmVyLCBtYWNhcm9uc1F0eSwgemVwaHlyUXR5fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQocGFydG5lciwgbWFjYXJvbnNRdHksIHplcGh5clF0eSk7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlVG90YWxQcmljZSgpIHtcclxuICAgICAgICBjb25zdCB7IHBhcnRuZXIsIG1hY2Fyb25zUXR5LCB6ZXBoeXJRdHkgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG4gICAgICAgIGlmICghcGFydG5lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdG90YWxQcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hY2Fyb25QcmljZSA9IENhZmZlZVByaWNlc1twYXJ0bmVyXTtcclxuICAgICAgICB0b3RhbFByaWNlICs9IG1hY2Fyb25zUXR5ICogbWFjYXJvblByaWNlO1xyXG5cclxuICAgICAgICB0b3RhbFByaWNlICs9IFpFUEhZUl9QQVJUTkVSU19QUklDRSAqIHplcGh5clF0eTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsUHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFydG5lciwgbWFjYXJvbnNRdHksIHplcGh5clF0eSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBwYXJ0bmVycyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShQYXJ0bmVyc0VudW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICDQntC/0YLQvtCy0YvQuSDQt9Cw0LrQsNC3XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT0ncGFydG5lclNlbGVjdFdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInBhcnRuZXItc2VsZWN0XCI+0JrQvtGE0LXQudC90Y88L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFydG5lclNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJ0bmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdwYXJ0bmVyLXNlbGVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGVtPk5vbmU8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0bmVycy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17cC5pZH0gdmFsdWU9e3AudmFsdWV9PntwLnZhbHVlfTwvTWVudUl0ZW0+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCc0LDQutCw0YDQvtC90YtcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e21hY2Fyb25zUXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTWFjYXJvbnNRdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFydG5lcn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LzQsNC60LDRgNC+0L3RgVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JfQtdGE0LjRgFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17emVwaHlyUXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWmVwaHlyUXR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC30LXRhNC40YDQsFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JjRgtC+0LPQvlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YCR7dGhpcy5jYWxjdWxhdGVUb3RhbFByaWNlKCl9INCz0YDQvS5gfVxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbnNXcmFwZXInfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dENsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCT0L7RgtC+0LLQvlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gICAgKFBhcnRuZXJzQ29tcG9uZW50KSk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBQcm9jZXNzRmV0Y2hEYXRhLCBQcm9jZXNzQXBwZW5kRGF0YSwgUHJvY2Vzc1VwZGF0ZURhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBURVNUX1NQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMsXHJcbiAgICAgICAgaGFzRXJyb3JlZDogc3RhdGUuaGFzRXJyb3JlZCxcclxuICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZyxcclxuICAgICAgICBsYWJlbDogc3RhdGUubGFiZWxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChQcm9jZXNzRmV0Y2hEYXRhKHVybCkpLFxyXG4gICAgICAgIGFwcGVuZERhdGE6ICh1cmwsIHJhbmdlLCBkYXRhKSA9PiBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YSh1cmwsIHJhbmdlLCBkYXRhKSksXHJcbiAgICAgICAgdXBkYXRlRGF0YTogKHVybCwgZGF0YSkgPT4gZGlzcGF0Y2goUHJvY2Vzc1VwZGF0ZURhdGEodXJsLCBkYXRhKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50UHJvcHMge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBpdGVtcz86IGFueTtcclxuICAgIGhhc0Vycm9yZWQ/OiBib29sZWFuO1xyXG4gICAgaXNMb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgICBpc1NjcmlwdExvYWRlZD86IGJvb2xlYW47XHJcbiAgICBpc1NjcmlwdExvYWRTdWNjZWVkPzogYm9vbGVhbjtcclxuXHJcbiAgICBmZXRjaERhdGE/OiAodXJsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBhcHBlbmREYXRhPzogKHVybDogc3RyaW5nLCByYW5nZTogc3RyaW5nLCBkYXRhOiBhbnlbXSkgPT4gdm9pZDtcclxuICAgIHVwZGF0ZURhdGE/OiAodXJsOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50U3RhdGUge1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SVRlc3RDb21wb25lbnRQcm9wcywgSVRlc3RDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBdXRoQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2lnbm91dENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbk91dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXBwZW5kQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJYTFwiLCBcIjFcIiwgXCIwXCIsIGRhdGVUaW1lLnRvVVRDU3RyaW5nKCldXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCByYW5nZSA9IFwiUmF3RGF0YSFBOkVcIjtcclxuICAgICAgICB0aGlzLnByb3BzLmFwcGVuZERhdGEoVEVTVF9TUFJFQURTSEVFVF9JRCwgcmFuZ2UsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwZGF0ZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJDb3N0XCIsIFwiU3RvY2tlZFwiLCBcIlNoaXAgRGF0ZVwiXSxcclxuICAgICAgICAgICAgW1wiV2hlZWwxXCIsIFwiJDIwLjUwXCIsIFwiNFwiLCBcIjMvMS8yMDE2XCJdLFxyXG4gICAgICAgICAgICBbXCJEb29yMVwiLCBcIiQxNVwiLCBcIjJcIiwgXCIzLzE1LzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkVuZ2luZTFcIiwgXCIkMTAwXCIsIFwiMVwiLCBcIjMwLzIwLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIlRvdGFsczFcIiwgXCI9U1VNKEIyOkI0KVwiLCBcIj1TVU0oQzI6QzQpXCIsIFwiPU1BWChEMjpENClcIl1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGF0YShURVNUX1NQUkVBRFNIRUVUX0lELCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTY3JpcHRMb2FkZWQgfSA9IG5leHRQcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2NyaXB0TG9hZGVkICYmICF0aGlzLnByb3BzLmlzU2NyaXB0TG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmxvYWQoJ2NsaWVudDphdXRoMicsIHRoaXMuaW5pdENsaWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFRFU1RfU1BSRUFEU0hFRVRfSUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hEYXRhKCdodHRwOi8vNTgyNmVkOTYzOTAwZDYxMjAwMDEzOGJkLm1vY2thcGkuaW8vaXRlbXMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgaGFzRXJyb3JlZCwgaXNMb2FkaW5nLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGlzU2lnbmVkSW4gfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgaWYgKGhhc0Vycm9yZWQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPHA+U29ycnkhIFRoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBpdGVtczwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPHA+TG9hZGluZ+KApjwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVswXSArIGl0ZW1bMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8Lz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAge3Jlc3VsdH1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFwcGVuZENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5BcHBlbmQgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUNsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5VcGRhdGUgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImF1dGhvcml6ZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdub25lJyA6ICdibG9jaycgfX0+QXV0aG9yaXplPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5TaWduIE91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0TG9hZGVyKFxyXG4gICAgJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcydcclxuKShjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZXN0Q29tcG9uZW50KSlcclxuIiwiZXhwb3J0IGNvbnN0IERJU0NPVkVSWV9ET0NTID0gW1wiaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vJGRpc2NvdmVyeS9yZXN0P3ZlcnNpb249djRcIl07XHJcbmV4cG9ydCBjb25zdCBTQ09QRVMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzXCI7XHJcbmV4cG9ydCBjb25zdCBDTElFTlRfSUQgPSAnODQyNDE3MTk4NzY3LTdrNDJwdDllY2d0dTVmN29vcG5nMW9xdTNhNzlpNWk5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcclxuZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSAnQUl6YVN5QWxJNWk4T090dzhhRUVNUzQ4RTlwb3VFcHRxOHRFZzJNJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfU1BSRUFEU0hFRVRfSUQgPSAnMU9iTWg4N2RObWl6WGJkV2tIOVRpcWZyQ2ZBcGtfcnF4UEd1UV96TmdKSU0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR1NfU1BSRUFEU0hFRVRfSUQgPSAnMU5QWW9WOVlzNTJ6ZjlWX05rbFE1SmRYaGpwcEJMZTBkQzlUNDMzWlk3UDgnO1xyXG5leHBvcnQgY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVVCdUV3cVV5Qkl2dlkxaWhtRXA5aGIxajhtNEpDcFRsLWE4bUo2UmpVVncnO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5zY3NzJztcclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3N0b3JlL2luaXRpYWxTdGF0ZSc7XHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XHJcbnJlcXVpcmUoJy4uL3B1YmxpYy9pbWFnZXMvZmF2aWNvbi5wbmcnKTtcclxuLy8gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xyXG5yb290LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG5cclxucmVuZGVyKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPFJvdXRlciA+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L1JvdXRlcj5cclxuICAgIDwvUHJvdmlkZXI+LFxyXG4gICAgcm9vdFxyXG4pO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTmV3T3JkZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdPcmRlckNvbXBvbmVudCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja1BhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrUGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tQYWdlUHJvcHMsIGFueT57XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PiAgICAgICAgICBcclxuICAgICAgICAgIDxOZXdPcmRlckNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgKENoZWNrUGFnZSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBQYXltZW50LCBPcmRlclR5cGUsIENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBQcm9jZXNzQ2hlY2tvdXQsIFNldFBheW1lbnRUeXBlLCBTZXRPcmRlclR5cGUsIExvZ0RhdGEsIENhbmNlbCB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVjazogc3RhdGUuY2hlY2tcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFuZGxlQ2hlY2tvdXQ6ICgpID0+IGRpc3BhdGNoKFByb2Nlc3NDaGVja291dCgpKSxcclxuICAgICAgICBzZXRQYXltZW50VHlwZTogKHR5cGU6IFBheW1lbnQpID0+IGRpc3BhdGNoKFNldFBheW1lbnRUeXBlKHR5cGUpKSxcclxuICAgICAgICBzZXRPcmRlclR5cGU6ICh0eXBlOiBPcmRlclR5cGUpID0+IGRpc3BhdGNoKFNldE9yZGVyVHlwZSh0eXBlKSksXHJcbiAgICAgICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSksXHJcbiAgICAgICAgaGFuZGxlQ2FuY2VsOiAoKSA9PiBkaXNwYXRjaChDYW5jZWwoKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja291dFBhZ2VQcm9wcyB7XHJcbiAgICBoaXN0b3J5PzogYW55O1xyXG4gICAgY2hlY2s/OiBDaGVjaztcclxuXHJcbiAgICBzZXRQYXltZW50VHlwZT86ICh0eXBlOiBQYXltZW50KSA9PiB2b2lkO1xyXG4gICAgc2V0T3JkZXJUeXBlPzogKHR5cGU6IE9yZGVyVHlwZSkgPT4gdm9pZDtcclxuICAgIGhhbmRsZUNoZWNrb3V0PzogKCkgPT4gdm9pZDtcclxuICAgIGhhbmRsZUNhbmNlbD86ICgpID0+IHZvaWQ7XHJcbiAgICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgQ2hlY2tvdXRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElDaGVja291dFBhZ2VQcm9wcywgYW55PntcclxuICAgIGhhbmRsZUNoZWNrb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXQoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5jaGVja291dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPmNhbmNlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGVjaycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5iYWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UgPSAodHlwZTogUGF5bWVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UGF5bWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPnBheW1lbnRUeXBlQ2hhbmdlZC0+JyArIHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9yZGVyVHlwZUNoYW5nZSA9ICh0eXBlOiBPcmRlclR5cGUpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldE9yZGVyVHlwZSh0eXBlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+b3JkZXJUeXBlQ2hhbmdlZC0+JyArIHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVByaWNlKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIEhlbHBlci5jYWxjdWxhdGVQcmljZShjaGVjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICDQn9C+0LbQsNC70YPQudGB0YLQsCwg0YHQvtC30LTQsNC50YLQtSDRgdC90LDRh9Cw0LvQsCDRh9C10LpcclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0YLRgNCw0L3QuNGG0LAg0LLRi9Cx0L7RgNCwINC/0LDRgNCw0LzQtdGC0YDQvtCyINGH0LXQutCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dENvbnRyb2xHcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQmNGC0L7Qs9C+OiB7dGhpcy5jYWxjdWxhdGVQcmljZSgpfSDQs9GA0L0uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0Q29udHJvbEdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCi0LjQvyDQv9C70LDRgtC10LbQsDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay5wYXltZW50ID09PSBQYXltZW50LkNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FyZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhcmQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQmtCw0YDRgtCwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay5wYXltZW50ID09PSBQYXltZW50LkNhc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FzaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhc2gudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQndCw0LvQuNGH0L3Ri9C1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRDb250cm9sR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KLQuNC/INC30LDQutCw0LfQsDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuUHJlT3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuUHJlT3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlByZU9yZGVyLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J/RgNC10LTQt9Cw0LrQsNC3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuU2hvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlT3JkZXJUeXBlQ2hhbmdlKE9yZGVyVHlwZS5TaG9wKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09yZGVyVHlwZS5TaG9wLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JLQuNGC0YDQuNC90LBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydidXR0b25zV3JhcGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3Nlcz17eyByb290OiAnYnV0dG9uJyB9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdGl0bGU9XCJDaGVjayBPdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQvtC00L7Qu9C20LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzZXM9e3sgcm9vdDogJ2J1dHRvbicgfX0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwiZGVmYXVsdFwiIHRpdGxlPVwiQmFja1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndCw0LfQsNC0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzZXM9e3sgcm9vdDogJ2J1dHRvbicgfX0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgdGl0bGU9XCJDYW5jZWxcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0UGFnZSkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ3JlYXRlQ2hlY2ssIExvZ0RhdGEsIENsZWFyRXJyb3IsIFByb2Nlc3NGZXRjaERhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCBMYXJnZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0xhcmdlQnV0dG9uJztcclxuaW1wb3J0IEhpc3RvcnlDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9IaXN0b3J5Q29tcG9uZW50JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IEJ1c3kgfSBmcm9tICcuLi9jb21wb25lbnRzL0J1c3knO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IFNQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IGltYWdlVXJsID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9tYWluX2ljb24uanBnJyk7XHJcbmNvbnN0IHBhcnRuZXJVcmwgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL3BhcnRuZXJzX2ljb24uanBnJyk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeSxcclxuICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjcmVhdGVDaGVjazogKCkgPT4gZGlzcGF0Y2goQ3JlYXRlQ2hlY2soKSksXHJcbiAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKSxcclxuICAgIGZldGNoRGF0YTogKHVybCkgPT4gZGlzcGF0Y2goUHJvY2Vzc0ZldGNoRGF0YSh1cmwpKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBDa2Vja0xpbmsgPSBwcm9wcyA9PiA8TGluayB0bz1cIi9jaGVja1wiIHsuLi5wcm9wc30gLz47XHJcbmNvbnN0IFBhcnRuZXJzTGluayA9IHByb3BzID0+IDxMaW5rIHRvPVwiL3BhcnRuZXJzXCIgey4uLnByb3BzfSAvPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1haW5QYWdlUHJvcHMge1xyXG4gIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgY3JlYXRlQ2hlY2s/OiAoKSA9PiB2b2lkO1xyXG4gIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGZldGNoRGF0YT86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SU1haW5QYWdlUHJvcHMsIGFueT57XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAoIWhpc3RvcnkgfHwgIWhpc3RvcnkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFNQUkVBRFNIRUVUX0lEKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbk5ld0NoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNoZWNrKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ21haW5QYWdlLT5uZXdDaGVjaycpO1xyXG4gIH1cclxuXHJcbiAgb25OZXdQYXJ0bmVyc0NoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNoZWNrKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ21haW5QYWdlLT5vbk5ld1BhcnRuZXJzQ2hlY2tDbGljaycpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzZXM9e3sgcm9vdDogJ2NhcmRSb290JyB9fT5cclxuICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9Cg0J7Ql9Cd0JjQp9Cd0KvQmSDQl9CQ0JrQkNCXJ30gY29tcG9uZW50PXtDa2Vja0xpbmt9IGltYWdlVXJsPXtpbWFnZVVybH0gb25DbGljaz17dGhpcy5vbk5ld0NoZWNrQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVyJ30gcmFpc2VkPlxyXG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc2VzPXt7IHJvb3Q6ICdjYXJkUm9vdCcgfX0+XHJcbiAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQntCf0KLQntCS0KvQmSDQl9CQ0JrQkNCXJ30gY29tcG9uZW50PXtQYXJ0bmVyc0xpbmt9IGltYWdlVXJsPXtwYXJ0bmVyVXJsfSBvbkNsaWNrPXt0aGlzLm9uTmV3UGFydG5lcnNDaGVja0NsaWNrfSAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lckhpc3RvcnknfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgINCY0YHRgtC+0YDQuNGPXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SGlzdG9yeUNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Tm90aWZpY2F0aW9uQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPEJ1c3kgbG9hZGluZz17aXNMb2FkaW5nfSAvPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoTWFpblBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb3RGb3VuZFBhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIE5vdEZvdW5kUGFnZSBleHRlbmRzIENvbXBvbmVudDxJTm90Rm91bmRQYWdlUHJvcHMsIGFueT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIE5vdCBGb3VuZFxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChOb3RGb3VuZFBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYXJ0bmVyc0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRuZXJzQ29tcG9uZW50JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnRuZXJzUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgUGFydG5lcnNQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElQYXJ0bmVyc1BhZ2VQcm9wcywgYW55PntcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+ICAgICAgICAgIFxyXG4gICAgICAgICAgPFBhcnRuZXJzQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoUGFydG5lcnNQYWdlKVxyXG4iLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIEFERF9EUklOSyxcclxuICAgIEFERF9ERVNTRVJULFxyXG4gICAgUFJPQ0VTU19DSEVDS09VVCxcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVELFxyXG4gICAgTE9HX0RBVEEsXHJcbiAgICBDTEVBUl9MT0csXHJcbiAgICBDQU5DRUwsXHJcbiAgICBDTEVBUl9FUlJPUixcclxuICAgIERFTEVURV9ERVNTRVJULFxyXG4gICAgREVMRVRFX0RSSU5LLFxyXG4gICAgU0VUX0xBU1RfSUQsXHJcbiAgICBTSE9XX05PVElGSUNBVElPTlxyXG59IGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7IENoZWNrLCBEZXNzZXJ0LCBEcmluaywgUGF5bWVudCwgT3JkZXJUeXBlIH0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcblxyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xyXG4gICAgW0NSRUFURV9DSEVDS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBsYXN0SWQgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrOiBDaGVjayA9IHtcclxuICAgICAgICAgICAgaWQ6IGxhc3RJZCArIDEsXHJcbiAgICAgICAgICAgIGRlc3NlcnRzOiBuZXcgQXJyYXk8RGVzc2VydD4oKSxcclxuICAgICAgICAgICAgZHJpbmtzOiBuZXcgQXJyYXk8RHJpbms+KCksXHJcbiAgICAgICAgICAgIGlzRmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXltZW50OiBQYXltZW50LkNhc2gsXHJcbiAgICAgICAgICAgIHR5cGU6IE9yZGVyVHlwZS5TaG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbQUREX0RSSU5LXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmluazogRHJpbmsgPSB7XHJcbiAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoZWNrLmRyaW5rcy5wdXNoKGRyaW5rKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbREVMRVRFX0RSSU5LXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXdDaGVjayA9IHsuLi5jaGVja307XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSAoeyBpZCwgc2l6ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gYWN0aW9uLnBheWxvYWRbMF0gJiYgc2l6ZSA9PT0gYWN0aW9uLnBheWxvYWRbMV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3Q2hlY2suZHJpbmtzID0gY2hlY2suZHJpbmtzLmZpbHRlcihkID0+IGNvbXBhcmF0b3IoZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG5ld0NoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FERF9ERVNTRVJUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdEZXNzZXJ0ID0gY2hlY2suZGVzc2VydHMuZmluZCgoZDogRGVzc2VydCkgPT5cclxuICAgICAgICAgICAgZC50eXBlID09PSBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgICAgICAmJiBkLnRhc3RlID09PSBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAmJiBkLnNpemUgPT09IGFjdGlvbi5wYXlsb2FkWzJdKTtcclxuXHJcbiAgICAgICAgaWYgKCEhZXhpc3RpbmdEZXNzZXJ0KSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRGVzc2VydC5xdWFudGl0eSArPSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEZXNzZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgICAgICB0YXN0ZTogYWN0aW9uLnBheWxvYWRbMV0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiBhY3Rpb24ucGF5bG9hZFsyXSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5wdXNoKGRlc3NlcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0RFTEVURV9ERVNTRVJUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXdDaGVjayA9IHsuLi5jaGVja307XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSAoeyB0eXBlLCB0YXN0ZSwgc2l6ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBhY3Rpb24ucGF5bG9hZFswXSAmJiB0YXN0ZSA9PT0gYWN0aW9uLnBheWxvYWRbMV0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFszXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaXplICE9PSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGVjay5kZXNzZXJ0cyA9IG5ld0NoZWNrLmRlc3NlcnRzLmZpbHRlcihkID0+IGNvbXBhcmF0b3IoZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG5ld0NoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1BST0NFU1NfQ0hFQ0tPVVRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2ssIGhpc3RvcnksIGxhc3RJZCB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2suaXNGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKGNoZWNrKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG51bGwsXHJcbiAgICAgICAgICAgIGhpc3Rvcnk6IFsuLi5oaXN0b3J5XSxcclxuICAgICAgICAgICAgbGFzdElkOiBsYXN0SWQgKyAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1NFVF9QQVlNRU5UX1RZUEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLnBheW1lbnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2s6IHsgLi4uY2hlY2sgfSB9O1xyXG4gICAgfSxcclxuICAgIFtTRVRfT1JERVJfVFlQRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2sudHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogeyAuLi5jaGVjayB9IH07XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfRlVMRklMTEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaXRlbXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfUkVKRUNURURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9GVUxGSUxMRURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6ICFhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9SRUpFQ1RFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblR5cGU6IDJcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbU0hPV19CVVNZXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzQnVzeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0J1c3kgfTtcclxuICAgIH0sXHJcbiAgICBbTE9HX0RBVEFdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGNvbnN0IHsgbG9nIH0gPSBzdGF0ZTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiBgJHtsb2d9OyR7dGV4dH1gIH07XHJcbiAgICB9LFxyXG4gICAgW0NMRUFSX0xPR106IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiAnJyB9O1xyXG4gICAgfSxcclxuICAgIFtDTEVBUl9FUlJPUl06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3JNZXNzYWdlOiAnJyB9O1xyXG4gICAgfSxcclxuICAgIFtDQU5DRUxdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiBudWxsIH07XHJcbiAgICB9LFxyXG4gICAgW1NFVF9MQVNUX0lEXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoaXN0b3J5OiBbYWN0aW9uLnBheWxvYWRbMV1dLFxyXG4gICAgICAgICAgICBsYXN0SWQ6IGFjdGlvbi5wYXlsb2FkWzBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1NIT1dfTk9USUZJQ0FUSU9OXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkWzFdLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UeXBlOiBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSwgaW5pdGlhbFN0YXRlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgQW55QWN0aW9uLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXInO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICBjaGVjazogbnVsbCxcclxuICAgIGhpc3Rvcnk6IG5ldyBBcnJheTxDaGVjaz4oKSxcclxuICAgIGxvZzogJycsXHJcbiAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgbGFzdElkOiAwLFxyXG4gICAgbm90aWZpY2F0aW9uVHlwZTogMFxyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgRHJpbmtzVHlwZSwgRGVzc2VydFR5cGUsIE1hY2Fyb25zRW51bSwgWmVwaHlyRW51bSwgUGFydG5lcnNFbnVtLCBDYWtlc0VudW0gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEcmlua3NEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PHN0cmluZz4gfSA9IHt9O1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQ2FwcHVjaW5vXSA9IFsnMTc1INC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkZsYXRXaGl0ZV0gPSBbJzE3NSDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5SYWZdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vXSA9IFsnMTIwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkFtZXJpY2Fub01pbGtdID0gWycxMjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTG9uZ0JsYWNrXSA9IFsnMjAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkVzcHJlc3NvXSA9IFsnMzAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRG9wcGlvXSA9IFsnNjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTWFjaGlhdG9dID0gWyc5MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZUxhdmVuZGVyXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlQ2FyYW1lbF0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZU9yYW5nZV0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5DYWNhb10gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFHcmVlbl0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFCbGFja10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFIZXJiYWxdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3BlYWNpYWxUZWFQZWFyTGltZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TcGVjaWFsVGVhT3JhbmdlXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFHaW5nZXJdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFsnMTc1INC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWycwINC80LsnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNzZXJ0c0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8YW55PiB9ID0ge307XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5NYWNhcm9uXSA9IFsxLCA2LCAxMiwgMjRdO1xyXG5EZXNzZXJ0c0RpY3RbRGVzc2VydFR5cGUuWmVwaHlyXSA9IFsxLCA4LCAxNl07XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5DYWtlXSA9IFsnMTgg0YHQvCcsICcyMiDRgdC8J107XHJcblxyXG5leHBvcnQgY29uc3QgRHJpbmtQcmljZXNEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PG51bWJlcj4gfSA9IHt9O1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5DYXBwdWNpbm9dID0gWzI1LCA0MF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlXSA9IFsyOCwgMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5GbGF0V2hpdGVdID0gWzM1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuUmFmXSA9IFszOCwgNDVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9dID0gWzIwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vTWlsa10gPSBbMjVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5Mb25nQmxhY2tdID0gWzMwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuRXNwcmVzc29dID0gWzIwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuRG9wcGlvXSA9IFszMF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLk1hY2hpYXRvXSA9IFsyMl07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlTGF2ZW5kZXJdID0gWzMyLCA0MF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlQ2FyYW1lbF0gPSBbMzIsIDQwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGF0dGVPcmFuZ2VdID0gWzMyLCA0MF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkNhY2FvXSA9IFsyOCwgMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFHcmVlbl0gPSBbMjVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFCbGFja10gPSBbMjVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFIZXJiYWxdID0gWzI1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3BlYWNpYWxUZWFQZWFyTGltZV0gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5TcGVjaWFsVGVhT3JhbmdlXSA9IFszNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFHaW5nZXJdID0gWzM1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFs1NV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWzM1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWzQwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWzVdO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhZmZlZVByaWNlczogeyBbaWQ6IHN0cmluZ10gOiBudW1iZXIgfSA9IHt9O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkNvZmZlZUlzXSA9IDE3O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkZpcnN0UG9pbnRdID0gMTk7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uQ3ViYUNvZmZlZV0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5Qcm9ncmVzc10gPSAyMDtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5LbGFzc25hS2F2YV0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5Db2ZmZWVBbmRUaGVDaXR5XSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLklsTWlvXSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLlN0dWRpb0NvZmZlZV0gPSAyMDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYWtlc1ByaWNlc0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8bnVtYmVyPiB9ID0ge307XHJcbkNha2VzUHJpY2VzRGljdFtDYWtlc0VudW0uQ2Fycm90Q2FrZV0gPSBbNjUwLCA5ODBdO1xyXG5DYWtlc1ByaWNlc0RpY3RbQ2FrZXNFbnVtLlBpbmtdID0gWzYzMCwgOTcwXTtcclxuQ2FrZXNQcmljZXNEaWN0W0Nha2VzRW51bS5JbmZpbml0eV0gPSBbNjQwLCA5NzBdO1xyXG5DYWtlc1ByaWNlc0RpY3RbQ2FrZXNFbnVtLlJpb10gPSBbNjMwLCA5NzBdO1xyXG5DYWtlc1ByaWNlc0RpY3RbQ2FrZXNFbnVtLlNvdWxdID0gWzYyMCwgOTYwXTtcclxuXHJcbmV4cG9ydCBjb25zdCBaRVBIWVJfUFJJQ0UgPSAxMjtcclxuZXhwb3J0IGNvbnN0IFpFUEhZUl9QQVJUTkVSU19QUklDRSA9IDExO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BQ0FST05TX1BSSUNFID0gMjg7XHJcblxyXG5leHBvcnQgY29uc3QgTWFjYXJvbnNDb2xvcnM6IHsgW2lkOiBzdHJpbmddIDogc3RyaW5nIH0gPSB7fTtcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkRvckJsdWVQZWFyXSA9ICcjYjdlNGY3JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLlBhcm1lc2FuRmlndWVdID0gJyNmY2Y3ZTgnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uU3RyYXdiZXJyeUNoZWVzZWNha2VdID0gJyNmZmRkZGQnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uUmFzcGJlcnJ5XSA9ICcjZmZhNWNmJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkN1cnJhbnRdID0gJyNiYzQ1YzYnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uTGF2ZW5kZXJCbGFja2JlcnJ5XSA9ICcjYjU4N2ZmJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLk1hbmdvUGFzc2lvbl0gPSAnI2ZmZGQ4Nyc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5Db2ZmZWVDYXJhbWVsXSA9ICcjYTg3MzAxJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkNob2NvbGF0ZV0gPSAnIzQ5MjkwOCc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5QaXN0YWNoaW9dID0gJyM4NWRkOTMnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uTGltZUJhc2lsXSA9ICcjOWZmMjVjJztcclxuXHJcbmV4cG9ydCBjb25zdCBaZXBoeXJDb2xvcnM6IHsgW2lkOiBzdHJpbmddIDogc3RyaW5nIH0gPSB7fTtcclxuWmVwaHlyQ29sb3JzW1plcGh5ckVudW0uQXBwbGVdID0gJyNmZmZiZjInO1xyXG5aZXBoeXJDb2xvcnNbWmVwaHlyRW51bS5BcHJpY290UGFzc2lvbkZydWl0XSA9ICcjZmZlNmJmJztcclxuWmVwaHlyQ29sb3JzW1plcGh5ckVudW0uQ3VycmFudF0gPSAnI2Q5NzjQtWQnO1xyXG5aZXBoeXJDb2xvcnNbWmVwaHlyRW51bS5TdHJhd2JlcnJ5Q3JhbmJlcnJ5XSA9ICcjZjQ5N2I5JzsiLCJpbXBvcnQgeyBNQUNBUk9OU19QUklDRSwgWkVQSFlSX1BSSUNFLCBEcmlua1ByaWNlc0RpY3QsIERyaW5rc0RpY3QsIENha2VzUHJpY2VzRGljdCB9IGZyb20gJy4vZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgRGVzc2VydFR5cGUgLCBEZXNzZXJ0LCBEcmluayB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCZWFyZXJUb2tlbiB7XHJcbiAgICBBY2Nlc3NUb2tlbjogYW55O1xyXG4gICAgRXhwaXJlc09uOiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9BdXRoMkluZm8ge1xyXG4gICAgT0F1dGgyQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgICBPQXV0aDJDbGllbnRJZDogc3RyaW5nO1xyXG4gICAgT0F1dGgyUmVkaXJlY3RVcmk6IHN0cmluZztcclxuICAgIE9BdXRoMlJlc291cmNlSWRlbnRpZmllcjogc3RyaW5nO1xyXG4gICAgT0F1dGgyVG9rZW5TZXJ2aWNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIEhlbHBlciB7XHJcbiAgICBzdGF0aWMgVG9rZW5Db29raWVOYW1lID0gXCJhY2Nlc3N0b2tlbmNvb2tpZV90ZW1wXCI7XHJcblxyXG4gICAgc3RhdGljIEdVSURFbXB0eSA9IFwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCI7XHJcblxyXG4gICAgc3RhdGljIE9cclxuXHJcbiAgICBzdGF0aWMgZ3VpZCA9ICgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBzNCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXHJcbiAgICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFBhcmFtZXRlckJ5TmFtZUZyb21VcmkgPSAobmFtZSwgdXJsKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xyXG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcclxuICAgICAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgICAgICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UXVlcnlWYXJpYWJsZSA9ICh2YXJpYWJsZTogc3RyaW5nKSA9PlxyXG4gICAge1xyXG4gICAgICAgIHZhciBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGlmICghcXVlcnkgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoXCIlM0ZcIikgPiAtMSkge1xyXG4gICAgICAgICAgICBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIiUzRlwiKVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZhcnMgPSBxdWVyeS5zcGxpdChcIiZcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgIGlmIChwYWlyWzBdID09IHZhcmlhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYWlyWzFdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlPyBkZWNvZGVVUkkodmFsdWUpIDogbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2FsY3VsYXRlUHJpY2UoY2hlY2spIHtcclxuICAgICAgICBsZXQgdG90YWxQcmljZSA9IDA7XHJcbiAgICAgICAgY2hlY2suZGVzc2VydHMuZm9yRWFjaCgoZDogRGVzc2VydCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5DYWtlOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNha2VQcmljZXMgPSBDYWtlc1ByaWNlc0RpY3RbZC50YXN0ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuc2l6ZSA9PT0gJzE4INGB0LwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gY2FrZVByaWNlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQuc2l6ZSA9PT0gJzIyINGB0LwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gY2FrZVByaWNlc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERlc3NlcnRUeXBlLk1hY2Fyb246XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBNQUNBUk9OU19QUklDRSAqIGQucXVhbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERlc3NlcnRUeXBlLlplcGh5cjpcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IFpFUEhZUl9QUklDRSAqIGQucXVhbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNoZWNrLmRyaW5rcy5mb3JFYWNoKChkOiBEcmluaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmljZXMgPSBEcmlua1ByaWNlc0RpY3RbZC5pZF07XHJcbiAgICAgICAgICAgIGlmIChwcmljZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IHByaWNlc1swXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gRHJpbmtzRGljdFtkLmlkXS5maW5kSW5kZXgoeCA9PiB4ID09PSBkLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBwcmljZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbFByaWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWxwZXI7IiwiZXhwb3J0IGludGVyZmFjZSBEZXNzZXJ0IHtcclxuICAgIHR5cGU6IERlc3NlcnRUeXBlLFxyXG4gICAgdGFzdGU6IHN0cmluZyxcclxuICAgIHNpemU6IHN0cmluZ1xyXG4gICAgcXVhbnRpdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmluayB7XHJcbiAgICBpZDogRHJpbmtzVHlwZSxcclxuICAgIHNpemU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBkZXNzZXJ0czogQXJyYXk8RGVzc2VydD4sXHJcbiAgICBkcmlua3M6IEFycmF5PERyaW5rPixcclxuICAgIGlzRmluaXNoZWQ6IGJvb2xlYW4sXHJcbiAgICBwYXltZW50OiBQYXltZW50LFxyXG4gICAgdHlwZTogT3JkZXJUeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBheW1lbnQge1xyXG4gICAgQ2FyZCA9ICfQmtCw0YDRgtCwJyxcclxuICAgIENhc2ggPSAn0J3QsNC70LjRh9C60LAnLFxyXG4gICAgT3RoZXIgPSAn0JTRgNGD0LPQvtC1J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlclR5cGUge1xyXG4gICAgUHJlT3JkZXIgPSAn0J/RgNC10LTQt9Cw0LrQsNC3JyxcclxuICAgIFNob3AgPSAn0JLQuNGC0YDQuNC90LAnLFxyXG4gICAgT3RoZXIgPSAn0JTRgNGD0LPQvtC1J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEZXNzZXJ0VHlwZSB7XHJcbiAgICBNYWNhcm9uID0gJ9Cc0LDQutCw0YDQvtC90YEnLFxyXG4gICAgWmVwaHlyID0gJ9CX0LXRhNC40YAnLFxyXG4gICAgQ2FrZSA9ICfQotC+0YDRgidcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFjYXJvbnNFbnVtIHtcclxuICAgIERvckJsdWVQZWFyID0gXCLQlNC+0LEt0JHQu9GOIC0g0JPRgNGD0YjQsFwiLFxyXG4gICAgUGFybWVzYW5GaWd1ZSA9IFwi0J/QsNGA0LzQtdC30LDQvSAtINCY0L3QttC40YBcIixcclxuICAgIFN0cmF3YmVycnlDaGVlc2VjYWtlID0gXCLQmtC70YPQsdC90LjRh9C90YvQuSDQp9C40LfQutC10LnQulwiLFxyXG4gICAgUmFzcGJlcnJ5ID0gXCLQnNCw0LvQuNC90LBcIixcclxuICAgIEN1cnJhbnQgPSBcItCh0LzQvtGA0L7QtNC40L3QsFwiLFxyXG4gICAgTGF2ZW5kZXJCbGFja2JlcnJ5ID0gXCLQm9Cw0LLQsNC90LTQsCAtINCn0LXRgNC90LjQutCwXCIsXHJcbiAgICBNYW5nb1Bhc3Npb24gPSBcItCc0LDQvdCz0L4gLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBDb2ZmZWVDYXJhbWVsID0gXCLQmtC+0YTQtSAtINCh0L7Qu9GR0L3QsNGPINCa0LDRgNCw0LzQtdC70YxcIixcclxuICAgIENob2NvbGF0ZSA9IFwi0KjQvtC60L7Qu9Cw0LRcIixcclxuICAgIFBpc3RhY2hpbyA9IFwi0KTQuNGB0YLQsNGI0LrQsFwiLFxyXG4gICAgTGltZUJhc2lsID0gXCLQm9Cw0LnQvCAtINCR0LDQt9C40LvQuNC6XCIgXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFplcGh5ckVudW0ge1xyXG4gICAgQXBwbGUgPSBcItCv0LHQu9C+0LrQvlwiLFxyXG4gICAgQXByaWNvdFBhc3Npb25GcnVpdCA9IFwi0JDQsdGA0LjQutC+0YEgLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBDdXJyYW50ID0gXCLQodC80L7RgNC+0LTQuNC90LBcIiwgICAgXHJcbiAgICBTdHJhd2JlcnJ5Q3JhbmJlcnJ5ID0gXCLQmtC70YPQsdC90LjQutCwIC0g0JrQu9GO0LrQstCwXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2FrZXNFbnVtIHtcclxuICAgIFJpbyA9IFwiUmlvXCIsXHJcbiAgICBDYXJyb3RDYWtlID0gXCJDYXJyb3QgQ2FrZVwiLFxyXG4gICAgU291bCA9IFwiU291bFwiLFxyXG4gICAgUGluayA9IFwiUGlua1wiLFxyXG4gICAgSW5maW5pdHkgPSBcIkluZmluaXR5XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRHJpbmtzVHlwZSB7XHJcbiAgICBDYXBwdWNpbm8gPSBcItCa0LDQv9GD0YfQuNC90L5cIixcclxuICAgIExhdHRlID0gXCLQm9Cw0YLRgtC1XCIsXHJcbiAgICBGbGF0V2hpdGUgPSBcItCk0LvQtdGCINCS0LDQudGCXCIsXHJcbiAgICBSYWYgPSBcItCg0LDRhFwiLFxyXG4gICAgQW1lcmljYW5vID0gXCLQkNC80LXRgNC40LrQsNC90L5cIixcclxuICAgIEFtZXJpY2Fub01pbGsgPSBcItCQ0LzQtdGA0LjQutCw0L3QviDRgSDQvNC+0LvQvtC60L7QvFwiLFxyXG4gICAgTG9uZ0JsYWNrID0gXCLQm9C+0L3QsyDQsdC70Y3QulwiLFxyXG4gICAgRXNwcmVzc28gPSBcItCt0YHQv9GA0LXRgdGB0L5cIixcclxuICAgIERvcHBpbyA9IFwi0JTQvtC/0L/QuNC+XCIsICAgIFxyXG4gICAgTWFjaGlhdG8gPSBcItCc0LDQutC40LDRgtC+XCIsXHJcbiAgICBMYXR0ZUxhdmVuZGVyID0gXCLQm9Cw0YLRgtC1INCb0LDQstCw0L3QtNCwXCIsXHJcbiAgICBMYXR0ZUNhcmFtZWwgPSBcItCb0LDRgtGC0LUg0JrQsNGA0LDQvNC10LvRjFwiLFxyXG4gICAgTGF0dGVPcmFuZ2UgPSBcItCb0LDRgtGC0LUg0JDQv9C10LvRjNGB0LjQvVwiLFxyXG4gICAgQ2FjYW8gPSBcItCa0LDQutCw0L5cIixcclxuICAgIFRlYUdyZWVuID0gXCLQp9Cw0Lkg0JfQtdC70ZHQvdGL0LlcIixcclxuICAgIFRlYUJsYWNrID0gXCLQp9Cw0Lkg0KfRkdGA0L3Ri9C5XCIsXHJcbiAgICBUZWFIZXJiYWwgPSBcItCn0LDQuSDQotGA0LDQstGP0L3QvtC5XCIsXHJcbiAgICBTcGVhY2lhbFRlYVBlYXJMaW1lID0gXCLQp9Cw0Lkg0JPRgNGD0YjQsC3Qm9Cw0LnQvFwiLFxyXG4gICAgU3BlY2lhbFRlYU9yYW5nZSA9IFwi0KfQsNC5INCQ0L/QtdC70YzRgdC40L0t0J7QsdC70LXQv9C40YXQsFwiLFxyXG4gICAgU3BlY2lhbFRlYUdpbmdlciA9IFwi0KfQsNC5INCc0LDQu9C40L3QsC3QmNC80LHQuNGA0YxcIixcclxuICAgIEhvdENob2NvbGF0ZSA9IFwi0JPQsNGA0Y/Rh9C40Lkg0YjQvtC60L7Qu9Cw0LRcIixcclxuICAgIExlbW9uYWRlU3RyYXdiZXJyeSA9IFwi0JvQuNC80L7QvdCw0LQg0JrQu9GD0LHQvdC40LrQsFwiLFxyXG4gICAgTGVtb25hZGVDaXRydXMgPSBcItCb0LjQvNC+0L3QsNC0INCm0LjRgtGA0YPRgVwiLFxyXG4gICAgTGVtb25hZGVQYXNzaW9uID0gXCLQm9C40LzQvtC90LDQtCDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBJY2VMYXR0ZSA9IFwi0JDQudGBINCb0LDRgtGC0LVcIixcclxuICAgIFN5cm9wID0gXCLQodC40YDQvtC/XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGFydG5lcnNFbnVtIHtcclxuICAgIENvZmZlZUlzID0gXCJDb2ZmZWUgaXNcIixcclxuICAgIEZpcnN0UG9pbnQgPSBcIkZpcnN0IFBvaW50XCIsXHJcbiAgICBDdWJhQ29mZmVlID0gXCJDdWJhIENvZmZlZVwiLFxyXG4gICAgUHJvZ3Jlc3MgPSBcIlByb2dyZXNzXCIsXHJcbiAgICBLbGFzc25hS2F2YSA9IFwi0JrQu9Cw0YHQvdCwINC60LDQstCwXCIsXHJcbiAgICBDb2ZmZWVBbmRUaGVDaXR5ID0gXCJDb2ZmZWUgYW5kIHRoZSBjaXR5XCIsXHJcbiAgICBJbE1pbyA9IFwiSWwgTWlvXCIsXHJcbiAgICBTdHVkaW9Db2ZmZWUgPSBcItCh0YLRg9C00LjRjyDQutC+0YTQtVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZhbHVlSW5wdXRPcHRpb24ge1xyXG4gICAgSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEID0gJ0lOUFVUX1ZBTFVFX09QVElPTl9VTlNQRUNJRklFRCcsXHJcbiAgICBSQVcgPSAnUkFXJyxcclxuICAgIFVTRVJfRU5URVJFRCA9ICdVU0VSX0VOVEVSRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEluc2VydERhdGFPcHRpb24ge1xyXG4gICAgT1ZFUldSSVRFID0gJ09WRVJXUklURScsXHJcbiAgICBJTlNFUlRfUk9XUyA9ICdJTlNFUlRfUk9XUydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVSZW5kZXJPcHRpb24ge1xyXG4gICAgRk9STUFUVEVEX1ZBTFVFID0gJ0ZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBVTkZPUk1BVFRFRF9WQUxVRSA9ICdVTkZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBGT1JNVUxBID0gJ0ZPUk1VTEEnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERhdGVUaW1lUmVuZGVyT3B0aW9uIHtcclxuICAgIFNFUklBTF9OVU1CRVIgPSAnU0VSSUFMX05VTUJFUicsXHJcbiAgICBGT1JNQVRURURfU1RSSU5HID0gJ0ZPUk1BVFRFRF9TVFJJTkcnXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==