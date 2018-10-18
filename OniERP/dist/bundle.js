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
exports.push([module.i, "html, body {\n  font-family: 'Segoe UI';\n  height: 100%; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  font-size: 36px;\n  font-weight: 300; }\n\n.avatar {\n  background-color: #72c3e9;\n  color: #1d53a3; }\n\n.cardContainer {\n  margin: 16px; }\n\n.cardContainerHistory {\n  margin: 16px; }\n\n.cardRoot {\n  padding: 16px 0 16px 0 !important; }\n\n.newOrderButtonsWrapper {\n  display: flex;\n  flex-direction: row; }\n\n.newOrderButton {\n  padding: 5px;\n  width: 100%;\n  height: 100%; }\n\n.buttonsWraper {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 1rem;\n  flex-direction: column; }\n  .buttonsWraper .button {\n    margin: 1rem 0rem; }\n\n.checkoutTitle {\n  text-align: center;\n  margin: 1rem;\n  font-weight: 450; }\n\n.checkoutControlGroup {\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 2rem 1rem 2rem;\n  flex-direction: column; }\n\n.notificationClose {\n  width: 4rem;\n  height: 4rem; }\n\n.macaronAvatar {\n  margin: 10px;\n  color: black !important; }\n\n.drinkAvatar {\n  margin: 10px;\n  color: #fff !important;\n  background-color: #74482f !important; }\n\n.dessertsTastesWrapper {\n  height: calc(100% - 68px); }\n\n.dessertsTastesListWrapper {\n  height: calc(100% - 110px);\n  overflow: auto; }\n\n.buttonApplyWraper {\n  display: flex;\n  justify-content: space-evenly; }\n\n.buttonCancelWraper {\n  display: flex;\n  justify-content: space-evenly; }\n\n.drinksWrapper {\n  height: calc(100% - 68px); }\n\n.drinksListWrapper {\n  height: calc(100% - 65px);\n  overflow: auto; }\n\n.partnerSelectWrapper {\n  width: 100%;\n  padding: 1rem; }\n\n.busy-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 9999;\n  background-color: #e6e6e6;\n  opacity: 0.8; }\n  .busy-container .busy {\n    position: absolute;\n    left: 50%;\n    top: 44%;\n    margin-left: -18px; }\n\n.invisible {\n  display: none; }\n\n.historyContainer {\n  width: 100%; }\n\n.decreaseButton {\n  border: 1px solid grey !important; }\n", ""]);

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
        _this.handleDessertMixDecrease = function (qty) {
            _this.handleDessertDecrease(MIX_TASTE_NAME, qty);
            _this.props.logData('desserts->handleDessertMixDecrease->' + qty);
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
                    }, key: d.id }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a, { className: 'macaronAvatar', style: { backgroundColor: dessertType === _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Macaron ? _utils_dictionaries__WEBPACK_IMPORTED_MODULE_15__["MacaronsColors"][d.value] : _utils_dictionaries__WEBPACK_IMPORTED_MODULE_15__["ZephyrColors"][d.value] } }, d.value.charAt(0).toUpperCase())), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, { primary: d.value + (dessertType !== _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Cake ? '(' + (dessertQuantities[_this3.getId(dessertType, d.value)] || 0) + ')' : '') }), dessertType !== _utils_types__WEBPACK_IMPORTED_MODULE_14__["DessertType"].Cake && react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, { "aria-label": "Add", classes: { root: 'decreaseButton' }, onClick: function onClick() {
                        return _this3.handleDessertDecrease(d.value);
                    } }, '\u2014')));
            }), extraOptions.map(function (o) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, { button: true, onClick: function onClick() {
                        return _this3.handleDessertMixSelect(o.value);
                    }, key: o.value }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a, { className: 'macaronAvatar', style: { backgroundColor: '#dd73e2' } }, o.value)), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, { primary: o.title + '(' + (dessertQuantities[_this3.getId(dessertType, MIX_TASTE_NAME)] || 0) + ')' }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_17___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, { "aria-label": "Add", classes: { root: 'decreaseButton' }, onClick: function onClick() {
                        return _this3.handleDessertMixDecrease(o.value);
                    } }, '\u2014')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvZGVzc2VydHNfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9kcmlua3NfaWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL21haW5faWNvbi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9wYXJ0bmVyc19pY29uLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHBCYXIvc3R5bGVzLnNjc3M/OGFhMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXN5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EZXNzZXJ0c0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpbmtzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaXN0b3J5Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXJnZUJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFyZ2VCdXR0b24vc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld09yZGVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2Nzcz9hNzc0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhcnRuZXJzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZXN0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NoZWNrb3V0UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTm90Rm91bmRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGFydG5lcnNQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzP2RjYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RpY3Rpb25hcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNB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QUNKO0FBQUMsR0FIMkIsd0NBRzNCO0FBRUQsSUFJQztBQUpELFdBQTZCO0FBQ3pCLDJDQUFtQztBQUNuQyw2Q0FBdUM7QUFDdkMsbUNBQ0o7QUFBQyxHQUo0QiwwQ0FJNUI7QUFFRCxJQUdDO0FBSEQsV0FBZ0M7QUFDNUIsNENBQStCO0FBQy9CLCtDQUNKO0FBQUMsR0FIK0IsZ0RBRy9CLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcGJhcl9yb290IHtcXG4gIGZsZXgtZ3JvdzogMTsgfVxcbiAgLmFwcGJhcl9yb290IC5hcHBiYXJfZ3JvdyB7XFxuICAgIGZsZXgtZ3JvdzogMTsgfVxcbiAgLmFwcGJhcl9yb290IC5hcHBiYXJfbWVudUJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTI7XFxuICAgIG1hcmdpbi1yaWdodDogMjA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50OyB9XFxuXFxuLmVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXkgIWltcG9ydGFudDsgfVxcblxcbi5pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXkgIWltcG9ydGFudDsgfVxcblxcbi53YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50OyB9XFxuXFxuLmljb24ge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi5pY29uLXZhcmlhbnQge1xcbiAgb3BhY2l0eTogMC45O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG5cXG4ubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSc7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcblxcbi5hdmF0YXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyYzNlOTtcXG4gIGNvbG9yOiAjMWQ1M2EzOyB9XFxuXFxuLmNhcmRDb250YWluZXIge1xcbiAgbWFyZ2luOiAxNnB4OyB9XFxuXFxuLmNhcmRDb250YWluZXJIaXN0b3J5IHtcXG4gIG1hcmdpbjogMTZweDsgfVxcblxcbi5jYXJkUm9vdCB7XFxuICBwYWRkaW5nOiAxNnB4IDAgMTZweCAwICFpbXBvcnRhbnQ7IH1cXG5cXG4ubmV3T3JkZXJCdXR0b25zV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5uZXdPcmRlckJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5idXR0b25zV3JhcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5idXR0b25zV3JhcGVyIC5idXR0b24ge1xcbiAgICBtYXJnaW46IDFyZW0gMHJlbTsgfVxcblxcbi5jaGVja291dFRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7IH1cXG5cXG4uY2hlY2tvdXRDb250cm9sR3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMXJlbSAycmVtIDFyZW0gMnJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4ubm90aWZpY2F0aW9uQ2xvc2Uge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07IH1cXG5cXG4ubWFjYXJvbkF2YXRhciB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgfVxcblxcbi5kcmlua0F2YXRhciB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NDgyZiAhaW1wb3J0YW50OyB9XFxuXFxuLmRlc3NlcnRzVGFzdGVzV3JhcHBlciB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY4cHgpOyB9XFxuXFxuLmRlc3NlcnRzVGFzdGVzTGlzdFdyYXBwZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMTBweCk7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi5idXR0b25BcHBseVdyYXBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cXG5cXG4uYnV0dG9uQ2FuY2VsV3JhcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxcblxcbi5kcmlua3NXcmFwcGVyIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjhweCk7IH1cXG5cXG4uZHJpbmtzTGlzdFdyYXBwZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NXB4KTtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLnBhcnRuZXJTZWxlY3RXcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTsgfVxcblxcbi5idXN5LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxuICBvcGFjaXR5OiAwLjg7IH1cXG4gIC5idXN5LWNvbnRhaW5lciAuYnVzeSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDQ0JTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4OyB9XFxuXFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmhpc3RvcnlDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uZGVjcmVhc2VCdXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleSAhaW1wb3J0YW50OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltYWdlcy9kZXNzZXJ0c19pY29uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvZHJpbmtzX2ljb24uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltYWdlcy9mYXZpY29uLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvbWFpbl9pY29uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWFnZXMvcGFydG5lcnNfaWNvbi5qcGdcIjsiLCJleHBvcnQgY29uc3QgQ1JFQVRFX0NIRUNLID0gJ0NSRUFURV9DSEVDSyc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0RSSU5LID0gJ0FERF9EUklOSyc7XHJcbmV4cG9ydCBjb25zdCBBRERfREVTU0VSVCA9ICdBRERfREVTU0VSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX0RSSU5LID0gJ0RFTEVURV9EUklOSyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfREVTU0VSVCA9ICdERUxFVEVfREVTU0VSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfVFlQRSA9ICdTRVRfUEFZTUVOVF9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFNFVF9PUkRFUl9UWVBFID0gJ1NFVF9PUkRFUl9UWVBFJztcclxuZXhwb3J0IGNvbnN0IFBST0NFU1NfQ0hFQ0tPVVQgPSAnUFJPQ0VTU19DSEVDS09VVCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9JVEVNUyA9ICdMT0FEX0lURU1TJztcclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVNfRlVMRklMTEVEID0gJ0xPQURfSVRFTVNfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IExPQURfSVRFTVNfUkVKRUNURUQgPSAnTE9BRF9JVEVNU19SRUpFQ1RFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0hPV19CVVNZID0gXCJTSE9XX0JVU1lcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQSA9ICdBUFBFTkRfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBBUFBFTkRfREFUQV9GVUxGSUxMRUQgPSAnQVBQRU5EX0RBVEFfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IEFQUEVORF9EQVRBX1JFSkVDVEVEID0gJ0FQUEVORF9EQVRBX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQSA9ICdVUERBVEVfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfREFUQV9GVUxGSUxMRUQgPSAnVVBEQVRFX0RBVEFfRlVMRklMTEVEJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBX1JFSkVDVEVEID0gJ1VQREFURV9EQVRBX1JFSkVDVEVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfREFUQSA9ICdMT0dfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9MT0cgPSAnQ0xFQVJfTE9HJztcclxuZXhwb3J0IGNvbnN0IENBTkNFTCA9ICdDQU5DRUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMRUFSX0VSUk9SID0gJ0NMRUFSX0VSUk9SJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTEFTVF9JRCA9ICdTRVRfTEFTVF9JRCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0hPV19OT1RJRklDQVRJT04gPSAnU0hPV19OT1RJRklDQVRJT04nOyIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIExPQURfSVRFTVMsXHJcbiAgICBMT0FEX0lURU1TX0ZVTEZJTExFRCxcclxuICAgIExPQURfSVRFTVNfUkVKRUNURUQsXHJcbiAgICBTSE9XX0JVU1ksXHJcbiAgICBDUkVBVEVfQ0hFQ0ssXHJcbiAgICBQUk9DRVNTX0NIRUNLT1VULFxyXG4gICAgQUREX0RSSU5LLFxyXG4gICAgQUREX0RFU1NFUlQsXHJcbiAgICBTRVRfUEFZTUVOVF9UWVBFLFxyXG4gICAgU0VUX09SREVSX1RZUEUsXHJcbiAgICBBUFBFTkRfREFUQV9GVUxGSUxMRUQsXHJcbiAgICBBUFBFTkRfREFUQV9SRUpFQ1RFRCxcclxuICAgIExPR19EQVRBLFxyXG4gICAgQ0xFQVJfTE9HLFxyXG4gICAgQ0FOQ0VMLFxyXG4gICAgQ0xFQVJfRVJST1IsXHJcbiAgICBERUxFVEVfRFJJTkssXHJcbiAgICBERUxFVEVfREVTU0VSVCxcclxuICAgIFNFVF9MQVNUX0lELFxyXG4gICAgU0hPV19OT1RJRklDQVRJT05cclxufSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuaW1wb3J0IHtcclxuICAgIERyaW5rc1R5cGUsIERlc3NlcnRUeXBlLCBQYXltZW50LCBPcmRlclR5cGUsIENoZWNrLFxyXG4gICAgVmFsdWVJbnB1dE9wdGlvbiwgSW5zZXJ0RGF0YU9wdGlvbiwgVmFsdWVSZW5kZXJPcHRpb24sIERhdGVUaW1lUmVuZGVyT3B0aW9uLCBEZXNzZXJ0LCBEcmlua1xyXG59IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBMT0dTX1NQUkVBRFNIRUVUX0lELCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0ZldGNoRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydHNSZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiBcIlJhd0Rlc3NlcnRzRGF0YSFBOkhcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzUmVzcG9uc2UgPSBhd2FpdCB3aW5kb3dbJ2dhcGknXS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuZ2V0KHtcclxuICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNwcmVhZHNoZWV0SWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogXCJSYXdEcmlua3NEYXRhIUE6RlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxhc3REZXNzZXJ0T3JkZXJJZCA9IE1hdGgubWF4KC4uLmRlc3NlcnRzUmVzcG9uc2UucmVzdWx0LnZhbHVlcy5zbGljZSgxKS5tYXAoZCA9PiBkWzddID8gTnVtYmVyKGRbN10pIDogMCkpO1xyXG4gICAgICAgICAgICBsZXQgbGFzdERyaW5rT3JkZXJJZCA9IE1hdGgubWF4KC4uLmRyaW5rc1Jlc3BvbnNlLnJlc3VsdC52YWx1ZXMuc2xpY2UoMSkubWFwKGQgPT4gZFs1XSA/IE51bWJlcihkWzVdKSA6IDApKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdElkID0gTWF0aC5tYXgobGFzdERlc3NlcnRPcmRlcklkLCBsYXN0RHJpbmtPcmRlcklkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlcjogQ2hlY2sgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogbGFzdElkLFxyXG4gICAgICAgICAgICAgICAgZGVzc2VydHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZHJpbmtzOiBbXSxcclxuICAgICAgICAgICAgICAgIGlzRmluaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50OiBQYXltZW50Lk90aGVyLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogT3JkZXJUeXBlLk90aGVyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBsYXN0T3JkZXJQYXltZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGxhc3RPcmRlclR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGFzdE9yZGVyLmRlc3NlcnRzID0gZGVzc2VydHNSZXNwb25zZS5yZXN1bHQudmFsdWVzLnNsaWNlKDEpLmZpbHRlcih2ID0+IHZbN10gPT09IGxhc3RJZC50b1N0cmluZygpKS5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXN0T3JkZXJQYXltZW50ID0gZFs0XSA9PT0gJ9Cd0LDQu9C40YfQutCwJyA/IFBheW1lbnQuQ2FzaCA6IFBheW1lbnQuQ2FyZDtcclxuICAgICAgICAgICAgICAgIGxhc3RPcmRlclR5cGUgPSBkWzVdID09PSAn0JLQuNGC0YDQuNC90LAnID8gT3JkZXJUeXBlLlNob3AgOiBPcmRlclR5cGUuUHJlT3JkZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEZXNzZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzdGU6IGRbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IGRbMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogZFszXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZXNzZXJ0O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxhc3RPcmRlci5kcmlua3MgPSBkcmlua3NSZXNwb25zZS5yZXN1bHQudmFsdWVzLnNsaWNlKDEpLmZpbHRlcih2ID0+IHZbNV0gPT09IGxhc3RJZC50b1N0cmluZygpKS5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXN0T3JkZXJQYXltZW50ID0gZFsyXSA9PT0gJ9Cd0LDQu9C40YfQutCwJyA/IFBheW1lbnQuQ2FzaCA6IFBheW1lbnQuQ2FyZDtcclxuICAgICAgICAgICAgICAgIGxhc3RPcmRlclR5cGUgPSBkWzNdID09PSAn0JLQuNGC0YDQuNC90LAnID8gT3JkZXJUeXBlLlNob3AgOiBPcmRlclR5cGUuUHJlT3JkZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEcmluayA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogZFswXSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBkWzFdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc3NlcnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYXN0T3JkZXIucGF5bWVudCA9IGxhc3RPcmRlclBheW1lbnQ7XHJcbiAgICAgICAgICAgIGxhc3RPcmRlci50eXBlID0gbGFzdE9yZGVyVHlwZTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goU2V0TGFzdElkKGxhc3RJZCwgbGFzdE9yZGVyKSk7XHJcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKGl0ZW1zRmV0Y2hEYXRhU3VjY2VzcyhbLi4uZGVzc2VydHMsIC4uLmRyaW5rc10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSGFzRXJyb3JlZCh0cnVlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NBcHBlbmREYXRhID0gKHNwcmVhZHNoZWV0SWQ6IHN0cmluZywgcmFuZ2U6IHN0cmluZywgdmFsdWVSYW5nZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93WydnYXBpJ10uY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZCh7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVJbnB1dE9wdGlvbjogVmFsdWVJbnB1dE9wdGlvbi5VU0VSX0VOVEVSRUQsXHJcbiAgICAgICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVWYWx1ZXNJblJlc3BvbnNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZVJlbmRlck9wdGlvbjogVmFsdWVSZW5kZXJPcHRpb24uRk9STUFUVEVEX1ZBTFVFXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgdXBkYXRlZENlbGxzQ291bnQgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQudXBkYXRlcy51cGRhdGVkQ2VsbHM7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kU3VjY2Vzcyh0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LLRiyDQstC+0YjQu9C4INCyINGB0LjRgdGC0LXQvNGDLicpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0xvZyA9IGFzeW5jIChtZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgIFttZXNzYWdlLCBkYXRlVGltZS50b1VUQ1N0cmluZygpXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5hcHBlbmQoe1xyXG4gICAgICAgICAgICBzcHJlYWRzaGVldElkOiBMT0dTX1NQUkVBRFNIRUVUX0lELFxyXG4gICAgICAgICAgICByYW5nZTogJ0E6QicsXHJcbiAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICBpbnNlcnREYXRhT3B0aW9uOiBJbnNlcnREYXRhT3B0aW9uLk9WRVJXUklURSxcclxuICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVmFsdWVSZW5kZXJPcHRpb246IFZhbHVlUmVuZGVyT3B0aW9uLkZPUk1BVFRFRF9WQUxVRVxyXG4gICAgICAgIH0sIHsgdmFsdWVzOiBkYXRhIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzVXBkYXRlRGF0YSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcsIHZhbHVlUmFuZ2U6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvd1snZ2FwaSddLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogc3ByZWFkc2hlZXRJZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiAnQTY6RDEwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlSW5wdXRPcHRpb246IFZhbHVlSW5wdXRPcHRpb24uVVNFUl9FTlRFUkVELFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVZhbHVlc0luUmVzcG9uc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlUmVuZGVyT3B0aW9uOiBWYWx1ZVJlbmRlck9wdGlvbi5GT1JNQVRURURfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZURhdGVUaW1lUmVuZGVyT3B0aW9uOiBEYXRlVGltZVJlbmRlck9wdGlvbi5GT1JNQVRURURfU1RSSU5HXHJcbiAgICAgICAgICAgIH0sIHsgdmFsdWVzOiB2YWx1ZVJhbmdlIH0pO1xyXG4gICAgICAgICAgICAvL1RPRE86IFByb2Nlc3MgcmVzcG9uc2UgcmVzdWx0XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0LnZhbHVlcztcclxuICAgICAgICAgICAgZGlzcGF0Y2goaXRlbXNGZXRjaERhdGFTdWNjZXNzKGl0ZW1zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0hhc0Vycm9yZWQodHJ1ZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVDaGVjayA9IGNyZWF0ZUFjdGlvbihDUkVBVEVfQ0hFQ0spO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NDaGVja291dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaXRlbXNJc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGNoZWNrOiBDaGVjayA9IHN0YXRlLmNoZWNrO1xyXG4gICAgICAgICAgICBjb25zdCB7IGxvZyB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NSYW5nZSA9IFwiUmF3RHJpbmtzRGF0YSFBOkZcIjtcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBjaGVjay5kcmlua3MuZm9yRWFjaChhc3luYyBkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtkLmlkLCBkLnNpemUsIGNoZWNrLnBheW1lbnQsIGNoZWNrLnR5cGUsIGRhdGVUaW1lLCBjaGVjay5pZF07XHJcbiAgICAgICAgICAgICAgICBkcmlua3NEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZHJpbmtzRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFByb2Nlc3NBcHBlbmREYXRhKFNQUkVBRFNIRUVUX0lELCBkcmlua3NSYW5nZSwgZHJpbmtzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0c1JhbmdlID0gXCJSYXdEZXNzZXJ0c0RhdGEhQTpIXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5mb3JFYWNoKGFzeW5jIGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gW2QudHlwZSwgZC50YXN0ZSwgZC5xdWFudGl0eSwgZC5zaXplLCBjaGVjay5wYXltZW50LCBjaGVjay50eXBlLCBkYXRlVGltZSwgY2hlY2suaWRdO1xyXG4gICAgICAgICAgICAgICAgZGVzc2VydHNEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZGVzc2VydHNEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goUHJvY2Vzc0FwcGVuZERhdGEoU1BSRUFEU0hFRVRfSUQsIGRlc3NlcnRzUmFuZ2UsIGRlc3NlcnRzRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChDaGVja291dCgpKTtcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goU2hvd05vdGlmaWNhdGlvbigwLCAn0JfQsNC60LDQtyDRgdC+0YXRgNCw0L3RkdC9IScpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2cobG9nKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvY2Vzc0xvZyhKU09OLnN0cmluZ2lmeShjaGVjaykpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChDbGVhckxvZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zQXBwZW5kRXJyb3JlZCgn0J7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUsINGH0YLQviDQstGLINCy0L7RiNC70Lgg0LIg0YHQuNGB0YLQtdC80YMuJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzUGFydG5lcnNPcmRlclN1Ym1pdCA9IChwYXJ0bmVyOiBzdHJpbmcsIG1hY1F0eTogbnVtYmVyLCB6ZXBRdHk6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGl0ZW1zSXNMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0bmVyc1JhbmdlID0gXCJSYXdQYXJ0bmVyc0RhdGEhQTpEXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRuZXJzRGF0YSA9IFtbcGFydG5lciwgbWFjUXR5LCB6ZXBRdHksIG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW0nKV1dO1xyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YShTUFJFQURTSEVFVF9JRCwgcGFydG5lcnNSYW5nZSwgcGFydG5lcnNEYXRhKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb2Nlc3NMb2coSlNPTi5zdHJpbmdpZnkocGFydG5lcnNEYXRhKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKFNob3dOb3RpZmljYXRpb24oMCwgJ9CX0LDQutCw0Lcg0YHQvtGF0YDQsNC90ZHQvSEnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0FwcGVuZEVycm9yZWQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LLRiyDQstC+0YjQu9C4INCyINGB0LjRgdGC0LXQvNGDLicpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChpdGVtc0lzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tvdXQgPSBjcmVhdGVBY3Rpb24oUFJPQ0VTU19DSEVDS09VVCk7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRHJpbmsgPSBjcmVhdGVBY3Rpb24oQUREX0RSSU5LLCAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERlc3NlcnQgPSBjcmVhdGVBY3Rpb24oQUREX0RFU1NFUlQsICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiBbdHlwZSwgdGFzdGUsIHNpemUsIHF1YW50aXR5XSk7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlRHJpbmsgPSBjcmVhdGVBY3Rpb24oREVMRVRFX0RSSU5LLCAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgc2l6ZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZURlc3NlcnQgPSBjcmVhdGVBY3Rpb24oREVMRVRFX0RFU1NFUlQsICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiBbdHlwZSwgdGFzdGUsIHNpemVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRQYXltZW50VHlwZSA9IGNyZWF0ZUFjdGlvbihTRVRfUEFZTUVOVF9UWVBFLCAodHlwZTogUGF5bWVudCkgPT4gdHlwZSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0T3JkZXJUeXBlID0gY3JlYXRlQWN0aW9uKFNFVF9PUkRFUl9UWVBFLCAodHlwZTogT3JkZXJUeXBlKSA9PiB0eXBlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtc0hhc0Vycm9yZWQgPSBjcmVhdGVBY3Rpb24oTE9BRF9JVEVNU19SRUpFQ1RFRCwgKGhhc0Vycm9yZWQ6IGJvb2xlYW4pID0+IGhhc0Vycm9yZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zSXNMb2FkaW5nID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVMsIChpc0xvYWRpbmc6IGJvb2xlYW4pID0+IGlzTG9hZGluZyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNGZXRjaERhdGFTdWNjZXNzID0gY3JlYXRlQWN0aW9uKExPQURfSVRFTVNfRlVMRklMTEVELCAoaXRlbXM6IGFueVtdKSA9PiBpdGVtcyk7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXNBcHBlbmRTdWNjZXNzID0gY3JlYXRlQWN0aW9uKEFQUEVORF9EQVRBX0ZVTEZJTExFRCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHN1Y2Nlc3MpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zQXBwZW5kRXJyb3JlZCA9IGNyZWF0ZUFjdGlvbihBUFBFTkRfREFUQV9SRUpFQ1RFRCwgKHRleHQ6IHN0cmluZykgPT4gdGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0J1c3kgPSBjcmVhdGVBY3Rpb24oU0hPV19CVVNZLCAoaXNCdXN5OiBib29sZWFuKSA9PiBpc0J1c3kpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ0RhdGEgPSBjcmVhdGVBY3Rpb24oTE9HX0RBVEEsICh0ZXh0OiBzdHJpbmcpID0+IHRleHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsZWFyTG9nID0gY3JlYXRlQWN0aW9uKENMRUFSX0xPRyk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FuY2VsID0gY3JlYXRlQWN0aW9uKENBTkNFTCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJFcnJvciA9IGNyZWF0ZUFjdGlvbihDTEVBUl9FUlJPUik7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0TGFzdElkID0gY3JlYXRlQWN0aW9uKFNFVF9MQVNUX0lELCAobGFzdElkOiBudW1iZXIsIGxhc3RDaGVjazogQ2hlY2spID0+IFtsYXN0SWQsIGxhc3RDaGVja10pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dOb3RpZmljYXRpb24gPSBjcmVhdGVBY3Rpb24oU0hPV19OT1RJRklDQVRJT04sICh0eXBlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZykgPT4gW3R5cGUsIG1lc3NhZ2VdKTtcclxuIiwiaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL01haW5QYWdlJztcclxuaW1wb3J0IENoZWNrUGFnZSBmcm9tICcuL3BhZ2VzL0NoZWNrUGFnZSc7XHJcbmltcG9ydCBDaGVja291dFBhZ2UgZnJvbSAnLi9wYWdlcy9DaGVja291dFBhZ2UnO1xyXG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4vcGFnZXMvTm90Rm91bmRQYWdlJztcclxuaW1wb3J0IFBhcnRuZXJzUGFnZSBmcm9tICcuL3BhZ2VzL1BhcnRuZXJzUGFnZSc7XHJcbmltcG9ydCBUZXN0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9UZXN0Q29tcG9uZW50JztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBTUFJFQURTSEVFVF9JRCB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICcuL2NvbXBvbmVudHMvQXBwQmFyJztcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e01haW5QYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2snIGNvbXBvbmVudD17Q2hlY2tQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvY2hlY2tPdXQnIGNvbXBvbmVudD17Q2hlY2tvdXRQYWdlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvcGFydG5lcnMnIGNvbXBvbmVudD17UGFydG5lcnNQYWdlfSAvPlxyXG5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL3Rlc3QnIGNvbXBvbmVudD17VGVzdENvbXBvbmVudH0gLz5cclxuICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZFBhZ2V9IC8+XHJcbiAgICA8L1N3aXRjaD5cclxuKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwUHJvcHMge1xyXG4gICAgaXNTY3JpcHRMb2FkZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PElBcHBQcm9wcywgSUFwcFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NjcmlwdExvYWRlZCB9ID0gbmV4dFByb3BzO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JpcHRMb2FkZWQgJiYgIXRoaXMucHJvcHMuaXNTY3JpcHRMb2FkZWQpIHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10ubG9hZCgnY2xpZW50OmF1dGgyJywgdGhpcy5pbml0Q2xpZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICAvLyBjb25zdCBhdXRoMiA9IHdpbmRvd1snZ2FwaSddLmF1dGgyLmluaXQoe1xyXG4gICAgICAgIC8vICAgICBjbGllbnRfaWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAvLyAgICAgc2NvcGU6IFNDT1BFUyxcclxuICAgICAgICAvLyAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgLy8gICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBhdXRoMi5pc1NpZ25lZEluLmxpc3Rlbih0aGlzLnNpZ25pbkNoYW5nZWQpO1xyXG5cclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgZGlzY292ZXJ5RG9jczogRElTQ09WRVJZX0RPQ1MsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVNcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5saXN0ZW4odGhpcy5zaWduaW5DaGFuZ2VkKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5pc1NpZ25lZEluLmdldCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbkNoYW5nZWQgPSAoaXNTaWduZWRJbikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBpc1NpZ25lZEluXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXV0aENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1snZ2FwaSddLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNpZ25vdXRDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTaWduZWRJbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd1snZ2FwaSddIHx8ICF3aW5kb3dbJ2dhcGknXS5hdXRoMiB8fCAhd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5nZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPEFwcEJhciB0aXRsZT17J09OSSd9IGlzU2lnbmVkSW49e2lzU2lnbmVkSW59IG9uTG9naW5DbGljaz17dGhpcy5oYW5kbGVBdXRoQ2xpY2t9IG9uTG9nb3V0Q2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSAvPlxyXG4gICAgICAgICAgICB7aXNTaWduZWRJbiAmJiA8TWFpbiAvPn1cclxuICAgICAgICAgICAgey8qIDxidXR0b24gaWQ9XCJhdXRob3JpemVfYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBdXRoQ2xpY2t9IHN0eWxlPXt7IGRpc3BsYXk6IGlzU2lnbmVkSW4gPyAnbm9uZScgOiAnYmxvY2snIH19PkF1dGhvcml6ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwic2lnbm91dF9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNpZ25vdXRDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdibG9jaycgOiAnbm9uZScgfX0+U2lnbiBPdXQ8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgPC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY3JpcHRMb2FkZXIoXHJcbiAgICAnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzJ1xyXG4pKEFwcCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfQlNC+0LzQvtC5JyxcclxuICAgICAgICByb3V0ZTogJy8nXHJcbiAgICB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIHRpdGxlOiAnVGVzdCcsXHJcbiAgICAvLyAgICAgcm91dGU6ICcvdGVzdCdcclxuICAgIC8vIH1cclxuXTtcclxuXHJcbmNvbnN0IElURU1fSEVJR0hUID0gNDg7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBCYXJDb21wb25lbnRQcm9wcyB7XHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBpc1NpZ25lZEluPzogYm9vbGVhbjtcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcblxyXG4gICAgb25Mb2dpbkNsaWNrPzogKCkgPT4gdm9pZDtcclxuICAgIG9uTG9nb3V0Q2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBCYXJDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBhbmNob3JFbD86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcEJhciBleHRlbmRzIENvbXBvbmVudDxJQXBwQmFyQ29tcG9uZW50UHJvcHMsIElBcHBCYXJDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYW5jaG9yRWw6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDbG9zZSA9IChvcHRpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlID0gbG9jYXRpb24uaGFzaC5zbGljZSgxKTtcclxuICAgICAgICBpZiAoY3VycmVudFJvdXRlICE9PSBvcHRpb24ucm91dGUpIHtcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKG9wdGlvbi5yb3V0ZSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgYW5jaG9yRWw6IG51bGwgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUxvZ2luQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NpZ25lZEluLCBvbkxvZ2luQ2xpY2ssIG9uTG9nb3V0Q2xpY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChpc1NpZ25lZEluKSB7XHJcbiAgICAgICAgICAgIG9uTG9nb3V0Q2xpY2soKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9uTG9naW5DbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNZW51KCkge1xyXG4gICAgICAgIGNvbnN0IHsgYW5jaG9yRWwgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IGxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2FwcGJhcl9tZW51QnV0dG9uJ31cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZW51XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLW93bnM9e29wZW4gPyAnbG9uZy1tZW51JyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibG9uZy1tZW51XCJcclxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgIFBhcGVyUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogSVRFTV9IRUlHSFQgKiA0LjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcChvcHRpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e29wdGlvbi5yb3V0ZSA9PT0gY3VycmVudFJvdXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbG9zZShvcHRpb24pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGlzU2lnbmVkSW4gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYXBwYmFyX3Jvb3QnfT5cclxuICAgICAgICAgICAgICAgIDxBcHBCYXJDb21wb25lbnQgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWVudSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9eydhcHBiYXJfZ3Jvdyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17dGhpcy5oYW5kbGVMb2dpbkNsaWNrfT57aXNTaWduZWRJbiA/ICfQktGL0LnRgtC4JyA6ICfQktC+0LnRgtC4J308L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8L0FwcEJhckNvbXBvbmVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBcHBCYXIpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IEdyaWRMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJ1c3lQcm9wcyB7XHJcbiAgICBsb2FkaW5nOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCdXN5OiBSZWFjdC5TRkM8SUJ1c3lQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJidXN5LWNvbnRhaW5lclwiICsgKHByb3BzLmxvYWRpbmcgPyBcIlwiIDogXCIgaW52aXNpYmxlXCIpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c3lcIj5cclxuICAgICAgICAgICAgPEdyaWRMb2FkZXJcclxuICAgICAgICAgICAgICAgIGNvbG9yPXsnI2QwMDA2Zid9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtwcm9wcy5sb2FkaW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFkZERlc3NlcnQsIExvZ0RhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgeyBEZXNzZXJ0VHlwZSwgTWFjYXJvbnNFbnVtLCBDYWtlc0VudW0sIFplcGh5ckVudW0gfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IERlc3NlcnRzRGljdCwgTWFjYXJvbnNDb2xvcnMsIFplcGh5ckNvbG9ycyB9IGZyb20gJy4uL3V0aWxzL2RpY3Rpb25hcmllcyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcbmNvbnN0IE1JWF9UQVNURV9OQU1FID0gJ9Cd0LDQsdC+0YAnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZERlc3NlcnQ6ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiBkaXNwYXRjaChBZGREZXNzZXJ0KHR5cGUsIHRhc3RlLCBzaXplLCBxdWFudGl0eSkpLFxyXG4gICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSlcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVzc2VydHNDb21wb25lbnRQcm9wcyB7XHJcbiAgYWRkRGVzc2VydD86ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGhhbmRsZUNsb3NlPzogKCkgPT4gdm9pZDtcclxuICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVzc2VydHNDb21wb25lbnRTdGF0ZSB7XHJcbiAgZGVzc2VydFR5cGU/OiBEZXNzZXJ0VHlwZTtcclxuICBkZXNzZXJ0VGFzdGU/OiBzdHJpbmc7XHJcbiAgZGVzc2VydFF1YW50aXRpZXM/OiB7IFtpZDogc3RyaW5nXTogbnVtYmVyOyB9O1xyXG59XHJcblxyXG5jbGFzcyBEZXNzZXJ0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJRGVzc2VydHNDb21wb25lbnRQcm9wcywgSURlc3NlcnRzQ29tcG9uZW50U3RhdGU+e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGVzc2VydFR5cGU6IG51bGwsXHJcbiAgICAgIGRlc3NlcnRUYXN0ZTogbnVsbCxcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXM6IHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmNsb3NlJyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0U2VsZWN0ID0gKGRlc3NlcnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXNzZXJ0VHlwZTogZGVzc2VydFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2Rlc3NlcnRzLT5kZXNzZXJ0U2VsZWN0ZWQtPicgKyBkZXNzZXJ0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURlc3NlcnRUYXN0ZVNlbGVjdCA9IGFzeW5jICh0YXN0ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoZGVzc2VydFR5cGUgPT09IERlc3NlcnRUeXBlLkNha2UpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGVzc2VydFRhc3RlOiB0YXN0ZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFRhc3RlU2VsZWN0ZWQtPicgKyB0YXN0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZURlc3NlcnRJbmNyZWFzZSh0YXN0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0TWl4U2VsZWN0ID0gYXN5bmMgKHF0eSkgPT4ge1xyXG4gICAgdGhpcy5oYW5kbGVEZXNzZXJ0SW5jcmVhc2UoTUlYX1RBU1RFX05BTUUsIHF0eSk7XHJcbiAgICAvLyBhd2FpdCB0aGlzLnByb3BzLmFkZERlc3NlcnQoZGVzc2VydFR5cGUsIE1JWF9UQVNURV9OQU1FLCBudWxsLCBxdHkpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+aGFuZGxlRGVzc2VydE1peFNlbGVjdC0+JyArIHF0eSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0TWl4RGVjcmVhc2UgPSAocXR5KSA9PiB7XHJcbiAgICB0aGlzLmhhbmRsZURlc3NlcnREZWNyZWFzZShNSVhfVEFTVEVfTkFNRSwgcXR5KTtcclxuICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmhhbmRsZURlc3NlcnRNaXhEZWNyZWFzZS0+JyArIHF0eSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0U2l6ZU9yUXVhbnRpdHlTZWxlY3QgPSBhc3luYyAoc2l6ZU9yUXR5KSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKGRlc3NlcnRUeXBlID09PSBEZXNzZXJ0VHlwZS5DYWtlKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMuYWRkRGVzc2VydChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlLCBzaXplT3JRdHksIDEpO1xyXG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZGVzc2VydHMtPmRlc3NlcnRTaXplU2VsZWN0ZWQtPicgKyBzaXplT3JRdHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREZXNzZXJ0KGRlc3NlcnRUeXBlLCBkZXNzZXJ0VGFzdGUsIG51bGwsIHNpemVPclF0eSk7XHJcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFF1YW50aXR5U2VsZWN0ZWQtPicgKyBzaXplT3JRdHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmluaXNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFF1YW50aXRpZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzc2VydFF1YW50aXRpZXMpIHtcclxuICAgICAgY29uc3QgZGVzc2VydFRhc3RlID0ga2V5LnNwbGl0KCcvJylbMV07XHJcbiAgICAgIGNvbnN0IHF0eSA9IGRlc3NlcnRRdWFudGl0aWVzW2tleV07XHJcbiAgICAgIGlmIChxdHkpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERlc3NlcnQoZGVzc2VydFR5cGUsIGRlc3NlcnRUYXN0ZSwgbnVsbCwgcXR5IHx8IDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+aGFuZGxlRmluaXNoJyk7XHJcbiAgfVxyXG5cclxuICBnZXRJZChkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlKSB7XHJcbiAgICByZXR1cm4gYCR7ZGVzc2VydFR5cGV9LyR7ZGVzc2VydFRhc3RlfWA7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXNzZXJ0SW5jcmVhc2UgPSAodGFzdGUsIHF0eSA9IDEpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZChkZXNzZXJ0VHlwZSwgdGFzdGUpO1xyXG4gICAgaWYgKCFkZXNzZXJ0UXVhbnRpdGllc1tpZF0pIHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNbaWRdID0gcXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNbaWRdICs9IHF0eTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFF0eUluY3JlYXNlLT4nICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVzc2VydERlY3JlYXNlID0gKHRhc3RlLCBxdHkgPSAxKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRRdWFudGl0aWVzLCBkZXNzZXJ0VHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQoZGVzc2VydFR5cGUsIHRhc3RlKTtcclxuICAgIGlmIChkZXNzZXJ0UXVhbnRpdGllc1tpZF0pIHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNbaWRdIC09IHF0eTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzc2VydFF1YW50aXRpZXNcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdkZXNzZXJ0cy0+ZGVzc2VydFF0eUluY3JlYXNlLT4nICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgY291bnRUb3RhbERlc3NlcnRRdWFudGl0eSgpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFF1YW50aXRpZXMsIGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzc2VydFF1YW50aXRpZXMpIHtcclxuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGRlc3NlcnRUeXBlKSkge1xyXG4gICAgICAgIHJlc3VsdCArPSBkZXNzZXJ0UXVhbnRpdGllc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0QXJyYXlGcm9tRW51bShlbjogYW55KSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW4pO1xyXG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgdmFsdWU6IGVuW2RdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGVzc2VydHMoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0S2V5cyA9IE9iamVjdC5rZXlzKERlc3NlcnRUeXBlKTtcclxuICAgIGNvbnN0IGRlc3NlcnRzID0gZGVzc2VydEtleXMubWFwKGQgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBkLFxyXG4gICAgICAgIHZhbHVlOiBEZXNzZXJ0VHlwZVtkXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRzLm1hcChkID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZXNzZXJ0U2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdtYWNhcm9uQXZhdGFyJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZGQ3M2UyJyB9fT5cclxuICAgICAgICAgICAgICAgIHtkLnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2QudmFsdWV9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRGVzc2VydFRhc3RlcygpIHtcclxuICAgIGNvbnN0IHsgZGVzc2VydFR5cGUsIGRlc3NlcnRRdWFudGl0aWVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGxldCBkZXNzZXJ0VGFzdGVzO1xyXG4gICAgbGV0IGV4dHJhT3B0aW9ucyA9IFtdO1xyXG4gICAgc3dpdGNoIChkZXNzZXJ0VHlwZSkge1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLkNha2U6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShDYWtlc0VudW0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERlc3NlcnRUeXBlLk1hY2Fyb246XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShNYWNhcm9uc0VudW0pO1xyXG4gICAgICAgIGV4dHJhT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiA2LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgNiDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogMTIsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCAxMiDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogMjQsXHJcbiAgICAgICAgICB0aXRsZTogJ9Cd0LDQsdC+0YAg0L3QsCAyNCDRiNGCLidcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5aZXBoeXI6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShaZXBoeXJFbnVtKTtcclxuICAgICAgICBleHRyYU9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogOCxcclxuICAgICAgICAgIHRpdGxlOiAn0J3QsNCx0L7RgCDQvdCwIDgg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXh0cmFPcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IDE2LFxyXG4gICAgICAgICAgdGl0bGU6ICfQndCw0LHQvtGAINC90LAgMTYg0YjRgi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZGVzc2VydFRhc3RlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Rlc3NlcnRzVGFzdGVzV3JhcHBlcic+XHJcbiAgICAgIHtkZXNzZXJ0VHlwZSAhPT0gRGVzc2VydFR5cGUuQ2FrZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHRpdGxlPVwiQ2hlY2sgT3V0XCIgb25DbGljaz17dGhpcy5oYW5kbGVGaW5pc2h9PlxyXG4gICAgICAgICAgICDQn9GA0LjQvNC10L3QuNGC0YxcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8TGlzdCBjbGFzc05hbWU9J2Rlc3NlcnRzVGFzdGVzTGlzdFdyYXBwZXInPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRlc3NlcnRUYXN0ZXMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFRhc3RlU2VsZWN0KGQudmFsdWUpfSBrZXk9e2QuaWR9ID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT0nbWFjYXJvbkF2YXRhcicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBkZXNzZXJ0VHlwZSA9PT0gRGVzc2VydFR5cGUuTWFjYXJvbiA/IE1hY2Fyb25zQ29sb3JzW2QudmFsdWVdIDogWmVwaHlyQ29sb3JzW2QudmFsdWVdIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZC52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlICsgKGRlc3NlcnRUeXBlICE9PSBEZXNzZXJ0VHlwZS5DYWtlID8gYCgke2Rlc3NlcnRRdWFudGl0aWVzW3RoaXMuZ2V0SWQoZGVzc2VydFR5cGUsIGQudmFsdWUpXSB8fCAwfSlgIDogJycpfSAvPlxyXG4gICAgICAgICAgICAgIHtkZXNzZXJ0VHlwZSAhPT0gRGVzc2VydFR5cGUuQ2FrZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQWRkXCIgY2xhc3Nlcz17eyByb290OiAnZGVjcmVhc2VCdXR0b24nIH19IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydERlY3JlYXNlKGQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICB7J1xcdTIwMTQnfVxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBleHRyYU9wdGlvbnMubWFwKG8gPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydE1peFNlbGVjdChvLnZhbHVlKX0ga2V5PXtvLnZhbHVlfSA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J21hY2Fyb25BdmF0YXInIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNkZDczZTInIH19PlxyXG4gICAgICAgICAgICAgICAgICB7by52YWx1ZX1cclxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtgJHtvLnRpdGxlfSgke2Rlc3NlcnRRdWFudGl0aWVzW3RoaXMuZ2V0SWQoZGVzc2VydFR5cGUsIE1JWF9UQVNURV9OQU1FKV0gfHwgMH0pYH0gLz5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkFkZFwiIGNsYXNzZXM9e3sgcm9vdDogJ2RlY3JlYXNlQnV0dG9uJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlc3NlcnRNaXhEZWNyZWFzZShvLnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgIHsnXFx1MjAxNCd9XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25DYW5jZWxXcmFwZXInPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRGVzc2VydFNpemUoKSB7XHJcbiAgICBjb25zdCB7IGRlc3NlcnRUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZGVzc2VydFNpemVzID0gRGVzc2VydHNEaWN0W2Rlc3NlcnRUeXBlXTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge2Rlc3NlcnRTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVzc2VydFNpemVPclF1YW50aXR5U2VsZWN0KGQpfSBrZXk9e2R9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2R9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZXNzZXJ0VHlwZSwgZGVzc2VydFRhc3RlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiA8RGlhbG9nIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuIGZ1bGxTY3JlZW4gPlxyXG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgeyFkZXNzZXJ0VHlwZSA/ICfQktGL0LHQtdGA0LjRgtC1INCU0LXRgdC10YDRgicgOiAoIWRlc3NlcnRUYXN0ZSA/IGDQktGL0LHQtdGA0LjRgtC1INCy0LrRg9GBICgke3RoaXMuY291bnRUb3RhbERlc3NlcnRRdWFudGl0eSgpfSlgIDogJ9CS0YvQsdC10YDQuNGC0LUg0YDQsNC30LzQtdGAJyl9XHJcbiAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgIHshZGVzc2VydFR5cGUgPyB0aGlzLnJlbmRlckRlc3NlcnRzKCkgOiAoIWRlc3NlcnRUYXN0ZSA/IHRoaXMucmVuZGVyRGVzc2VydFRhc3RlcygpIDogdGhpcy5yZW5kZXJEZXNzZXJ0U2l6ZSgpKX1cclxuICAgIDwvRGlhbG9nPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEZXNzZXJ0c0NvbXBvbmVudCkpXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBZGREcmluaywgTG9nRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCB7IERyaW5rc1R5cGUgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IERyaW5rc0RpY3QgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkRHJpbms6ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IGRpc3BhdGNoKEFkZERyaW5rKHR5cGUsIHNpemUpKSxcclxuICAgICAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyaW5rc0NvbXBvbmVudFByb3BzIHtcclxuICAgIGFkZERyaW5rPzogKHR5cGU6IERyaW5rc1R5cGUsIHNpemU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGhhbmRsZUNsb3NlPzogKCkgPT4gdm9pZDtcclxuICAgIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEcmlua3NDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBkcmlua1R5cGU/OiBEcmlua3NUeXBlO1xyXG4gICAgZHJpbmtTaXplPzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBEcmlua3NDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SURyaW5rc0NvbXBvbmVudFByb3BzLCBJRHJpbmtzQ29tcG9uZW50U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyaW5rVHlwZTogbnVsbCxcclxuICAgICAgICAgICAgZHJpbmtTaXplOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2RyaW5rcy0+Y2xvc2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmlua1NlbGVjdCA9IGFzeW5jIChkcmluaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRyaW5rU2l6ZXMgPSBEcmlua3NEaWN0W2RyaW5rXTtcclxuICAgICAgICBpZiAoZHJpbmtTaXplcyAmJiBkcmlua1NpemVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRyaW5rVHlwZTogZHJpbmssXHJcbiAgICAgICAgICAgICAgICBkcmlua1NpemU6IGRyaW5rU2l6ZXNbMF1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmFkZERyaW5rKGRyaW5rLCBkcmlua1NpemVzWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoYGRyaW5rcy0+ZHJpbmtTZWxlY3RlZC0+JHtkcmlua30tPmRyaW5rU2l6ZVNlbGVjdGVkLT4ke2RyaW5rU2l6ZXNbMF19YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkcmlua1R5cGU6IGRyaW5rXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2RyaW5rcy0+ZHJpbmtTZWxlY3RlZC0+JyArIGRyaW5rKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJpbmtTaXplU2VsZWN0ID0gYXN5bmMgKGRyaW5rU2l6ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkcmlua1NpemVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkcmlua1R5cGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hZGREcmluayhkcmlua1R5cGUsIGRyaW5rU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnZHJpbmtzLT5kcmlua1NpemVTZWxlY3RlZC0+JyArIGRyaW5rU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRHJpbmtzKCkge1xyXG4gICAgICAgIGNvbnN0IGRyaW5rS2V5cyA9IE9iamVjdC5rZXlzKERyaW5rc1R5cGUpO1xyXG4gICAgICAgIGNvbnN0IGRyaW5rcyA9IGRyaW5rS2V5cy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBEcmlua3NUeXBlW2RdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2RyaW5rc1dyYXBwZXInPlxyXG4gICAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9J2RyaW5rc0xpc3RXcmFwcGVyJz5cclxuICAgICAgICAgICAgICAgIHtkcmlua3MubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEcmlua1NlbGVjdChkLnZhbHVlKX0ga2V5PXtkLmlkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdkcmlua0F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkLnZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkFwcGx5V3JhcGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyRHJpbmtTaXplcygpIHtcclxuICAgICAgICBjb25zdCB7IGRyaW5rVHlwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmlua1NpemVzID0gRHJpbmtzRGljdFtkcmlua1R5cGVdO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZHJpbmtTaXplcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyaW5rU2l6ZVNlbGVjdChkKX0ga2V5PXtkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdkcmlua0F2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25BcHBseVdyYXBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHJpbmtUeXBlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPERpYWxvZyBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3BlbiBmdWxsU2NyZWVuID5cclxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2ltcGxlLWRpYWxvZy10aXRsZVwiPnshZHJpbmtUeXBlID8gJ9CS0YvQsdC10YDQuNGC0LUg0L3QsNC/0LjRgtC+0LonIDogJ9CS0YvQsdC10YDQuNGC0LUg0YDQsNC30LzQtdGAJ308L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICB7IWRyaW5rVHlwZSA/IHRoaXMucmVuZGVyRHJpbmtzKCkgOiB0aGlzLnJlbmRlckRyaW5rU2l6ZXMoKX1cclxuICAgICAgICA8L0RpYWxvZz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEcmlua3NDb21wb25lbnQpKVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBFeHBhbnNpb25QYW5lbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbCc7XHJcbmltcG9ydCBFeHBhbnNpb25QYW5lbFN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5JztcclxuaW1wb3J0IEV4cGFuc2lvblBhbmVsRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbERldGFpbHMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeVxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGlzdG9yeUNvbXBvbmVudFByb3BzIHtcclxuICAgIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhpc3RvcnlDb21wb25lbnRTdGF0ZSB7XHJcbn1cclxuXHJcbmNsYXNzIEhpc3RvcnlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SUhpc3RvcnlDb21wb25lbnRQcm9wcywgSUhpc3RvcnlDb21wb25lbnRTdGF0ZT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICAgIHtoaXN0b3J5LnNvcnQoKGEsIGIpID0+IChhLmlkID4gYi5pZCkgPyAtMSA6ICgoYi5pZCA+IGEuaWQpID8gMSA6IDApKS5tYXAoaCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtIGtleT17aC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsIGNsYXNzTmFtZT0naGlzdG9yeUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbFN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pntg0KfQtdC6ICMke2guaWR9YH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5zaW9uUGFuZWxEZXRhaWxzIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj7QlNC10YHQtdGA0YLRizwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmRlc3NlcnRzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VHlwb2dyYXBoeSBrZXk9e2luZGV4fSB2YXJpYW50PXsnc3ViaGVhZGluZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtkLnR5cGV9ICR7ZC50YXN0ZX06ICR7ZC5xdWFudGl0eSA/IGQucXVhbnRpdHkgOiBkLnNpemV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj7QndCw0L/QuNGC0LrQuDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmRyaW5rcy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFR5cG9ncmFwaHkga2V5PXtpbmRleH0gdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZC5pZH06ICR7ZC5zaXplfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaXN0b3J5SXRlbVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J3N1YmhlYWRpbmcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+0KLQuNC/INC+0L/Qu9Cw0YLRizogPC9iPntoLnBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlzdG9yeUl0ZW1Sb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9eydzdWJoZWFkaW5nJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCi0LjQvyDQt9Cw0LrQsNC30LA6IDwvYj57aC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGlzdG9yeUNvbXBvbmVudCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmpzJztcclxuXHJcbmNvbnN0IExhcmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMsIGNvbXBvbmVudCwgb25DbGljaywgdGl0bGUsIGltYWdlVXJsIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgZm9jdXNSaXBwbGVcclxuICAgICAgICAgICAgICAgIGtleT17J21haW4nfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU9e2NsYXNzZXMuZm9jdXNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMwJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3ViaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VNYXJrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGFyZ2VCdXR0b24pOyIsImV4cG9ydCBkZWZhdWx0IHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICczMHZoJ1xyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnLCAvLyBPdmVycmlkZXMgaW5saW5lLXN0eWxlXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXIsICYkZm9jdXNWaXNpYmxlJzoge1xyXG4gICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICcmICRpbWFnZUJhY2tkcm9wJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlTWFya2VkJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlVGl0bGUnOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgNDAlJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogNH1weCAke3RoZW1lLnNwYWNpbmcudW5pdCArIDZ9cHhgLFxyXG4gICAgfSxcclxuICAgIGltYWdlTWFya2VkOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLFxyXG4gICAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGJvdHRvbTogLTIsXHJcbiAgICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gOXB4KScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgQ2hlY2ssIERlc3NlcnQsIERyaW5rLCBEZXNzZXJ0VHlwZSwgRHJpbmtzVHlwZSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IERyaW5rc0NvbXBvbmVudCBmcm9tICcuL0RyaW5rc0NvbXBvbmVudCc7XHJcbmltcG9ydCBEZXNzZXJ0c0NvbXBvbmVudCBmcm9tICcuL0Rlc3NlcnRzQ29tcG9uZW50JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBMYXJnZUJ1dHRvbiBmcm9tICcuL0xhcmdlQnV0dG9uJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgeyBEZWxldGVEZXNzZXJ0LCBEZWxldGVEcmluayB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XHJcblxyXG5jb25zdCBkZXNzZXJ0c0ltYWdlID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9kZXNzZXJ0c19pY29uLmpwZycpO1xyXG5jb25zdCBkcmlua3NJbWFnZSA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9pbWFnZXMvZHJpbmtzX2ljb24uanBnJyk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6IHN0YXRlLmNoZWNrXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlbGV0ZURlc3NlcnQ6ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiBkaXNwYXRjaChEZWxldGVEZXNzZXJ0KHR5cGUsIHRhc3RlLCBzaXplKSksXHJcbiAgICAgICAgZGVsZXRlRHJpbms6ICh0eXBlOiBEcmlua3NUeXBlLCBzaXplOiBzdHJpbmcpID0+IGRpc3BhdGNoKERlbGV0ZURyaW5rKHR5cGUsIHNpemUpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5ld09yZGVyQ29tcG9uZW50UHJvcHMge1xyXG4gICAgY2hlY2s/OiBDaGVjaztcclxuICAgIGhpc3Rvcnk/OiBhbnk7XHJcblxyXG4gICAgZGVsZXRlRGVzc2VydD86ICh0eXBlOiBEZXNzZXJ0VHlwZSwgdGFzdGU6IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgZGVsZXRlRHJpbms/OiAodHlwZTogRHJpbmtzVHlwZSwgc2l6ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXdPcmRlckNvbXBvbmVudFN0YXRlIHtcclxuICAgIHNob3dEcmlua3M/OiBib29sZWFuO1xyXG4gICAgc2hvd0Rlc3NlcnRzPzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgTmV3T3JkZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SU5ld09yZGVyQ29tcG9uZW50UHJvcHMsIElOZXdPcmRlckNvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93RHJpbmtzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0Rlc3NlcnRzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVQcmljZSgpIHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBIZWxwZXIuY2FsY3VsYXRlUHJpY2UoY2hlY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERyaW5rQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dEcmlua3M6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZERlc3NlcnRDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0Rlc3NlcnRzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnL2NoZWNrT3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVsZXRlRHJpbmsgPSAoZHJpbms6IERyaW5rKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVEcmluayhkcmluay5pZCwgZHJpbmsuc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVsZXRlRGVzc2VydCA9IChkZXNzZXJ0OiBEZXNzZXJ0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVEZXNzZXJ0KGRlc3NlcnQudHlwZSwgZGVzc2VydC50YXN0ZSwgZGVzc2VydC5zaXplKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDaGVja0NvbnRlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRDb250cm9sR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgINCY0YLQvtCz0L46IHt0aGlzLmNhbGN1bGF0ZVByaWNlKCl9INCz0YDQvS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAge2NoZWNrLmRyaW5rcy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaW5zZXQgcHJpbWFyeT17YCR7ZC5pZH0gLSAke2Quc2l6ZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRGVsZXRlXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGVEcmluayhkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICB7Y2hlY2suZGVzc2VydHMubWFwKChkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGluc2V0IHByaW1hcnk9e2Ake2QudHlwZX0gLSAke2QudGFzdGV9IC0gJHtkLnF1YW50aXR5fSR7ZC5zaXplID8gKCcgLSAnICsgZC5zaXplKSA6ICcnfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJEZWxldGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZURlc3NlcnQoZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNob3dEcmlua3MsIHNob3dEZXNzZXJ0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAg0J/QvtC20LDQu9GD0LnRgdGC0LAsINGB0L7Qt9C00LDQudGC0LUg0YHQvdCw0YfQsNC70LAg0YfQtdC6XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImhlYWRsaW5lXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgINCd0L7QstGL0Lkg0LfQsNC60LDQt1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHtg0KfQtdC6ICMke2NoZWNrLmlkfWB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdPcmRlckJ1dHRvbnNXcmFwcGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdPcmRlckJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhcmdlQnV0dG9uIHRpdGxlPXsn0JTQldCh0JXQoNCi0KsnfSBpbWFnZVVybD17ZGVzc2VydHNJbWFnZX0gb25DbGljaz17dGhpcy5hZGREZXNzZXJ0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdPcmRlckJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhcmdlQnV0dG9uIHRpdGxlPXsn0J3QkNCf0JjQotCa0JgnfSBpbWFnZVVybD17ZHJpbmtzSW1hZ2V9IG9uQ2xpY2s9e3RoaXMuYWRkRHJpbmtDbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hlY2tDb250ZW50KCl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYnV0dG9uc1dyYXBlcid9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVjay5kZXNzZXJ0cy5sZW5ndGggPT09IDAgJiYgY2hlY2suZHJpbmtzLmxlbmd0aCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LTQvtC70LbQuNGC0YxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0RyaW5rcyAmJiA8RHJpbmtzQ29tcG9uZW50IGhhbmRsZUNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0RyaW5rczogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgICAgICB7c2hvd0Rlc3NlcnRzICYmIDxEZXNzZXJ0c0NvbXBvbmVudCBoYW5kbGVDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dEZXNzZXJ0czogZmFsc2UgfSl9IC8+fVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gICAgKE5ld09yZGVyQ29tcG9uZW50KSk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBFcnJvckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yJztcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IFNuYWNrYmFyQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhckNvbnRlbnQnO1xyXG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1dhcm5pbmcnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IHsgQ2xlYXJFcnJvciB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlLmVycm9yTWVzc2FnZSxcclxuICAgICAgICB0eXBlOiBzdGF0ZS5ub3RpZmljYXRpb25UeXBlXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyRXJyb3I6ICgpID0+IGRpc3BhdGNoKENsZWFyRXJyb3IoKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBWYXJpYW50SWNvbiB7XHJcbiAgICBzdWNjZXNzLFxyXG4gICAgd2FybmluZyxcclxuICAgIGVycm9yLFxyXG4gICAgaW5mb1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb3RpZmljYXRpb25Db21wb25lbnRQcm9wcyB7XHJcbiAgICAvLyBjbGFzc2VzOiBhbnk7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBWYXJpYW50SWNvbjtcclxuXHJcbiAgICBjbGVhckVycm9yPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uQ29tcG9uZW50U3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElOb3RpZmljYXRpb25Db21wb25lbnRQcm9wcywgSU5vdGlmaWNhdGlvbkNvbXBvbmVudFN0YXRlPntcclxuICAgIGdldEljb24oKSB7XHJcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5zdWNjZXNzOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gQ2hlY2tDaXJjbGVJY29uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24ud2FybmluZzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFdhcm5pbmdJY29uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24uZXJyb3I6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBFcnJvckljb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5pbmZvOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gSW5mb0ljb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBWYXJpYW50SWNvbi5zdWNjZXNzOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmFyaWFudEljb24ud2FybmluZzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICd3YXJuaW5nJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLmVycm9yOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ2Vycm9yJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZhcmlhbnRJY29uLmluZm86XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnaW5mbyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBJY29uID0gdGhpcy5nZXRJY29uKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9wZW49eyEhbWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U25hY2tiYXJDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmdldENsYXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNsaWVudC1zbmFja2JhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2xpZW50LXNuYWNrYmFyXCIgY2xhc3NOYW1lPXsnbWVzc2FnZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdpY29uJywgJ2ljb24tdmFyaWFudCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdub3RpZmljYXRpb25DbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5vdGlmaWNhdGlvbkNvbXBvbmVudCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBQYXJ0bmVyc0VudW0gfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IFByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0IH0gZnJvbSAnLi4vYWN0aW9ucydcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IHsgQ2FmZmVlUHJpY2VzLCBaRVBIWVJfUEFSVE5FUlNfUFJJQ0UgfSBmcm9tICcuLi91dGlscy9kaWN0aW9uYXJpZXMnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxufTtcclxuXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQ6IChwYXJ0bmVyOiBzdHJpbmcsIG1hY1F0eTogbnVtYmVyLCB6ZXBRdHk6IG51bWJlcikgPT4gZGlzcGF0Y2goUHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQocGFydG5lciwgbWFjUXR5LCB6ZXBRdHkpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnRuZXJzQ29tcG9uZW50UHJvcHMge1xyXG4gICAgaGlzdG9yeT86IGFueTtcclxuICAgIHByb2Nlc3NQYXJ0bmVyc09yZGVyU3VibWl0PzogKHBhcnRuZXI6IHN0cmluZywgbWFjUXR5OiBudW1iZXIsIHplcFF0eTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0bmVyc0NvbXBvbmVudFN0YXRlIHtcclxuICAgIHBhcnRuZXI/OiBzdHJpbmc7XHJcbiAgICBtYWNhcm9uc1F0eT86IG51bWJlcjtcclxuICAgIHplcGh5clF0eT86IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgUGFydG5lcnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SVBhcnRuZXJzQ29tcG9uZW50UHJvcHMsIElQYXJ0bmVyc0NvbXBvbmVudFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYXJ0bmVyOiAnJyxcclxuICAgICAgICAgICAgbWFjYXJvbnNRdHk6IDAsXHJcbiAgICAgICAgICAgIHplcGh5clF0eTogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBcnJheUZyb21FbnVtKGVuOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW4pO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW5bZF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQYXJ0bmVyU2VsZWN0ID0gKGV2KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFydG5lciA9IGV2LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFydG5lciB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNYWNhcm9uc1F0eUNoYW5nZSA9IChldikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtYWNhcm9uc1F0eTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlWmVwaHlyUXR5Q2hhbmdlID0gKGV2KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHplcGh5clF0eTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQsIGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBwYXJ0bmVyLCBtYWNhcm9uc1F0eSwgemVwaHlyUXR5fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcHJvY2Vzc1BhcnRuZXJzT3JkZXJTdWJtaXQocGFydG5lciwgbWFjYXJvbnNRdHksIHplcGh5clF0eSk7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlVG90YWxQcmljZSgpIHtcclxuICAgICAgICBjb25zdCB7IHBhcnRuZXIsIG1hY2Fyb25zUXR5LCB6ZXBoeXJRdHkgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG4gICAgICAgIGlmICghcGFydG5lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdG90YWxQcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hY2Fyb25QcmljZSA9IENhZmZlZVByaWNlc1twYXJ0bmVyXTtcclxuICAgICAgICB0b3RhbFByaWNlICs9IG1hY2Fyb25zUXR5ICogbWFjYXJvblByaWNlO1xyXG5cclxuICAgICAgICB0b3RhbFByaWNlICs9IFpFUEhZUl9QQVJUTkVSU19QUklDRSAqIHplcGh5clF0eTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsUHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFydG5lciwgbWFjYXJvbnNRdHksIHplcGh5clF0eSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBwYXJ0bmVycyA9IHRoaXMuZ2V0QXJyYXlGcm9tRW51bShQYXJ0bmVyc0VudW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICDQntC/0YLQvtCy0YvQuSDQt9Cw0LrQsNC3XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT0ncGFydG5lclNlbGVjdFdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInBhcnRuZXItc2VsZWN0XCI+0JrQvtGE0LXQudC90Y88L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFydG5lclNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJ0bmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdwYXJ0bmVyLXNlbGVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGVtPk5vbmU8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0bmVycy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17cC5pZH0gdmFsdWU9e3AudmFsdWV9PntwLnZhbHVlfTwvTWVudUl0ZW0+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCc0LDQutCw0YDQvtC90YtcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e21hY2Fyb25zUXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTWFjYXJvbnNRdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFydG5lcn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LzQsNC60LDRgNC+0L3RgVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JfQtdGE0LjRgFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17emVwaHlyUXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWmVwaHlyUXR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC30LXRhNC40YDQsFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JjRgtC+0LPQvlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YCR7dGhpcy5jYWxjdWxhdGVUb3RhbFByaWNlKCl9INCz0YDQvS5gfVxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbnNXcmFwZXInfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBhcnRuZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dENsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCT0L7RgtC+0LLQvlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG4gICAgKFBhcnRuZXJzQ29tcG9uZW50KSk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBQcm9jZXNzRmV0Y2hEYXRhLCBQcm9jZXNzQXBwZW5kRGF0YSwgUHJvY2Vzc1VwZGF0ZURhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHNjcmlwdExvYWRlciBmcm9tICdyZWFjdC1hc3luYy1zY3JpcHQtbG9hZGVyJztcclxuaW1wb3J0IHsgRElTQ09WRVJZX0RPQ1MsIFNDT1BFUywgQ0xJRU5UX0lELCBBUElfS0VZLCBURVNUX1NQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMsXHJcbiAgICAgICAgaGFzRXJyb3JlZDogc3RhdGUuaGFzRXJyb3JlZCxcclxuICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZyxcclxuICAgICAgICBsYWJlbDogc3RhdGUubGFiZWxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChQcm9jZXNzRmV0Y2hEYXRhKHVybCkpLFxyXG4gICAgICAgIGFwcGVuZERhdGE6ICh1cmwsIHJhbmdlLCBkYXRhKSA9PiBkaXNwYXRjaChQcm9jZXNzQXBwZW5kRGF0YSh1cmwsIHJhbmdlLCBkYXRhKSksXHJcbiAgICAgICAgdXBkYXRlRGF0YTogKHVybCwgZGF0YSkgPT4gZGlzcGF0Y2goUHJvY2Vzc1VwZGF0ZURhdGEodXJsLCBkYXRhKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50UHJvcHMge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBpdGVtcz86IGFueTtcclxuICAgIGhhc0Vycm9yZWQ/OiBib29sZWFuO1xyXG4gICAgaXNMb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgICBpc1NjcmlwdExvYWRlZD86IGJvb2xlYW47XHJcbiAgICBpc1NjcmlwdExvYWRTdWNjZWVkPzogYm9vbGVhbjtcclxuXHJcbiAgICBmZXRjaERhdGE/OiAodXJsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBhcHBlbmREYXRhPzogKHVybDogc3RyaW5nLCByYW5nZTogc3RyaW5nLCBkYXRhOiBhbnlbXSkgPT4gdm9pZDtcclxuICAgIHVwZGF0ZURhdGE/OiAodXJsOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50U3RhdGUge1xyXG4gICAgaXNTaWduZWRJbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SVRlc3RDb21wb25lbnRQcm9wcywgSVRlc3RDb21wb25lbnRTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBdXRoQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2dhcGknXS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaWduZWRJbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2lnbm91dENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbk91dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXBwZW5kQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJYTFwiLCBcIjFcIiwgXCIwXCIsIGRhdGVUaW1lLnRvVVRDU3RyaW5nKCldXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCByYW5nZSA9IFwiUmF3RGF0YSFBOkVcIjtcclxuICAgICAgICB0aGlzLnByb3BzLmFwcGVuZERhdGEoVEVTVF9TUFJFQURTSEVFVF9JRCwgcmFuZ2UsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwZGF0ZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAgW1wiSXRlbTFcIiwgXCJDb3N0XCIsIFwiU3RvY2tlZFwiLCBcIlNoaXAgRGF0ZVwiXSxcclxuICAgICAgICAgICAgW1wiV2hlZWwxXCIsIFwiJDIwLjUwXCIsIFwiNFwiLCBcIjMvMS8yMDE2XCJdLFxyXG4gICAgICAgICAgICBbXCJEb29yMVwiLCBcIiQxNVwiLCBcIjJcIiwgXCIzLzE1LzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIkVuZ2luZTFcIiwgXCIkMTAwXCIsIFwiMVwiLCBcIjMwLzIwLzIwMTZcIl0sXHJcbiAgICAgICAgICAgIFtcIlRvdGFsczFcIiwgXCI9U1VNKEIyOkI0KVwiLCBcIj1TVU0oQzI6QzQpXCIsIFwiPU1BWChEMjpENClcIl1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGF0YShURVNUX1NQUkVBRFNIRUVUX0lELCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTY3JpcHRMb2FkZWQgfSA9IG5leHRQcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGlzU2NyaXB0TG9hZGVkICYmICF0aGlzLnByb3BzLmlzU2NyaXB0TG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snZ2FwaSddLmxvYWQoJ2NsaWVudDphdXRoMicsIHRoaXMuaW5pdENsaWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93WydnYXBpJ10uY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudElkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IERJU0NPVkVSWV9ET0NTLFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFRFU1RfU1BSRUFEU0hFRVRfSUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hEYXRhKCdodHRwOi8vNTgyNmVkOTYzOTAwZDYxMjAwMDEzOGJkLm1vY2thcGkuaW8vaXRlbXMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgaGFzRXJyb3JlZCwgaXNMb2FkaW5nLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGlzU2lnbmVkSW4gfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgaWYgKGhhc0Vycm9yZWQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPHA+U29ycnkhIFRoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBpdGVtczwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gPHA+TG9hZGluZ+KApjwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVswXSArIGl0ZW1bMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8Lz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAge3Jlc3VsdH1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFwcGVuZENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5BcHBlbmQgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUNsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5VcGRhdGUgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImF1dGhvcml6ZV9idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUF1dGhDbGlja30gc3R5bGU9e3sgZGlzcGxheTogaXNTaWduZWRJbiA/ICdub25lJyA6ICdibG9jaycgfX0+QXV0aG9yaXplPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbm91dENsaWNrfSBzdHlsZT17eyBkaXNwbGF5OiBpc1NpZ25lZEluID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5TaWduIE91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0TG9hZGVyKFxyXG4gICAgJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcydcclxuKShjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZXN0Q29tcG9uZW50KSlcclxuIiwiZXhwb3J0IGNvbnN0IERJU0NPVkVSWV9ET0NTID0gW1wiaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vJGRpc2NvdmVyeS9yZXN0P3ZlcnNpb249djRcIl07XHJcbmV4cG9ydCBjb25zdCBTQ09QRVMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzXCI7XHJcbmV4cG9ydCBjb25zdCBDTElFTlRfSUQgPSAnODQyNDE3MTk4NzY3LTdrNDJwdDllY2d0dTVmN29vcG5nMW9xdTNhNzlpNWk5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcclxuZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSAnQUl6YVN5QWxJNWk4T090dzhhRUVNUzQ4RTlwb3VFcHRxOHRFZzJNJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfU1BSRUFEU0hFRVRfSUQgPSAnMU9iTWg4N2RObWl6WGJkV2tIOVRpcWZyQ2ZBcGtfcnF4UEd1UV96TmdKSU0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR1NfU1BSRUFEU0hFRVRfSUQgPSAnMU5QWW9WOVlzNTJ6ZjlWX05rbFE1SmRYaGpwcEJMZTBkQzlUNDMzWlk3UDgnO1xyXG5leHBvcnQgY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVVCdUV3cVV5Qkl2dlkxaWhtRXA5aGIxajhtNEpDcFRsLWE4bUo2UmpVVncnO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5zY3NzJztcclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3N0b3JlL2luaXRpYWxTdGF0ZSc7XHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XHJcbnJlcXVpcmUoJy4uL3B1YmxpYy9pbWFnZXMvZmF2aWNvbi5wbmcnKTtcclxuLy8gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xyXG5yb290LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG5cclxucmVuZGVyKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPFJvdXRlciA+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L1JvdXRlcj5cclxuICAgIDwvUHJvdmlkZXI+LFxyXG4gICAgcm9vdFxyXG4pO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTmV3T3JkZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdPcmRlckNvbXBvbmVudCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja1BhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIENoZWNrUGFnZSBleHRlbmRzIENvbXBvbmVudDxJQ2hlY2tQYWdlUHJvcHMsIGFueT57XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PiAgICAgICAgICBcclxuICAgICAgICAgIDxOZXdPcmRlckNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgKENoZWNrUGFnZSlcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBQYXltZW50LCBPcmRlclR5cGUsIENoZWNrIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBQcm9jZXNzQ2hlY2tvdXQsIFNldFBheW1lbnRUeXBlLCBTZXRPcmRlclR5cGUsIExvZ0RhdGEsIENhbmNlbCB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVjazogc3RhdGUuY2hlY2tcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFuZGxlQ2hlY2tvdXQ6ICgpID0+IGRpc3BhdGNoKFByb2Nlc3NDaGVja291dCgpKSxcclxuICAgICAgICBzZXRQYXltZW50VHlwZTogKHR5cGU6IFBheW1lbnQpID0+IGRpc3BhdGNoKFNldFBheW1lbnRUeXBlKHR5cGUpKSxcclxuICAgICAgICBzZXRPcmRlclR5cGU6ICh0eXBlOiBPcmRlclR5cGUpID0+IGRpc3BhdGNoKFNldE9yZGVyVHlwZSh0eXBlKSksXHJcbiAgICAgICAgbG9nRGF0YTogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goTG9nRGF0YSh0ZXh0KSksXHJcbiAgICAgICAgaGFuZGxlQ2FuY2VsOiAoKSA9PiBkaXNwYXRjaChDYW5jZWwoKSlcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja291dFBhZ2VQcm9wcyB7XHJcbiAgICBoaXN0b3J5PzogYW55O1xyXG4gICAgY2hlY2s/OiBDaGVjaztcclxuXHJcbiAgICBzZXRQYXltZW50VHlwZT86ICh0eXBlOiBQYXltZW50KSA9PiB2b2lkO1xyXG4gICAgc2V0T3JkZXJUeXBlPzogKHR5cGU6IE9yZGVyVHlwZSkgPT4gdm9pZDtcclxuICAgIGhhbmRsZUNoZWNrb3V0PzogKCkgPT4gdm9pZDtcclxuICAgIGhhbmRsZUNhbmNlbD86ICgpID0+IHZvaWQ7XHJcbiAgICBsb2dEYXRhPzogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgQ2hlY2tvdXRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElDaGVja291dFBhZ2VQcm9wcywgYW55PntcclxuICAgIGhhbmRsZUNoZWNrb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXQoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5jaGVja291dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNhbmNlbCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPmNhbmNlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGVjaycpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9nRGF0YSgnY2hlY2tvdXRQYWdlLT5iYWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2UgPSAodHlwZTogUGF5bWVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UGF5bWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dEYXRhKCdjaGVja291dFBhZ2UtPnBheW1lbnRUeXBlQ2hhbmdlZC0+JyArIHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9yZGVyVHlwZUNoYW5nZSA9ICh0eXBlOiBPcmRlclR5cGUpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldE9yZGVyVHlwZSh0eXBlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ2NoZWNrb3V0UGFnZS0+b3JkZXJUeXBlQ2hhbmdlZC0+JyArIHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVByaWNlKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIEhlbHBlci5jYWxjdWxhdGVQcmljZShjaGVjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICDQn9C+0LbQsNC70YPQudGB0YLQsCwg0YHQvtC30LTQsNC50YLQtSDRgdC90LDRh9Cw0LvQsCDRh9C10LpcclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0YLRgNCw0L3QuNGG0LAg0LLRi9Cx0L7RgNCwINC/0LDRgNCw0LzQtdGC0YDQvtCyINGH0LXQutCwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dENvbnRyb2xHcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQmNGC0L7Qs9C+OiB7dGhpcy5jYWxjdWxhdGVQcmljZSgpfSDQs9GA0L0uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0Q29udHJvbEdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCi0LjQvyDQv9C70LDRgtC10LbQsDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay5wYXltZW50ID09PSBQYXltZW50LkNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FyZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhcmQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQmtCw0YDRgtCwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay5wYXltZW50ID09PSBQYXltZW50LkNhc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlKFBheW1lbnQuQ2FzaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50LkNhc2gudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQndCw0LvQuNGH0L3Ri9C1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRDb250cm9sR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KLQuNC/INC30LDQutCw0LfQsDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuUHJlT3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZU9yZGVyVHlwZUNoYW5nZShPcmRlclR5cGUuUHJlT3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17T3JkZXJUeXBlLlByZU9yZGVyLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J/RgNC10LTQt9Cw0LrQsNC3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVjay50eXBlID09PSBPcmRlclR5cGUuU2hvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlT3JkZXJUeXBlQ2hhbmdlKE9yZGVyVHlwZS5TaG9wKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09yZGVyVHlwZS5TaG9wLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JLQuNGC0YDQuNC90LBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydidXR0b25zV3JhcGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3Nlcz17eyByb290OiAnYnV0dG9uJyB9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdGl0bGU9XCJDaGVjayBPdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQvtC00L7Qu9C20LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzZXM9e3sgcm9vdDogJ2J1dHRvbicgfX0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwiZGVmYXVsdFwiIHRpdGxlPVwiQmFja1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndCw0LfQsNC0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzZXM9e3sgcm9vdDogJ2J1dHRvbicgfX0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgdGl0bGU9XCJDYW5jZWxcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0UGFnZSkpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ3JlYXRlQ2hlY2ssIExvZ0RhdGEsIENsZWFyRXJyb3IsIFByb2Nlc3NGZXRjaERhdGEgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCBMYXJnZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0xhcmdlQnV0dG9uJztcclxuaW1wb3J0IEhpc3RvcnlDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9IaXN0b3J5Q29tcG9uZW50JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IEJ1c3kgfSBmcm9tICcuLi9jb21wb25lbnRzL0J1c3knO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IFNQUkVBRFNIRUVUX0lEIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IGltYWdlVXJsID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2ltYWdlcy9tYWluX2ljb24uanBnJyk7XHJcbmNvbnN0IHBhcnRuZXJVcmwgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1hZ2VzL3BhcnRuZXJzX2ljb24uanBnJyk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeSxcclxuICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjcmVhdGVDaGVjazogKCkgPT4gZGlzcGF0Y2goQ3JlYXRlQ2hlY2soKSksXHJcbiAgICBsb2dEYXRhOiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChMb2dEYXRhKHRleHQpKSxcclxuICAgIGZldGNoRGF0YTogKHVybCkgPT4gZGlzcGF0Y2goUHJvY2Vzc0ZldGNoRGF0YSh1cmwpKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBDa2Vja0xpbmsgPSBwcm9wcyA9PiA8TGluayB0bz1cIi9jaGVja1wiIHsuLi5wcm9wc30gLz47XHJcbmNvbnN0IFBhcnRuZXJzTGluayA9IHByb3BzID0+IDxMaW5rIHRvPVwiL3BhcnRuZXJzXCIgey4uLnByb3BzfSAvPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1haW5QYWdlUHJvcHMge1xyXG4gIGhpc3Rvcnk/OiBBcnJheTxDaGVjaz47XHJcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgY3JlYXRlQ2hlY2s/OiAoKSA9PiB2b2lkO1xyXG4gIGxvZ0RhdGE/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGZldGNoRGF0YT86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SU1haW5QYWdlUHJvcHMsIGFueT57XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAoIWhpc3RvcnkgfHwgIWhpc3RvcnkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hEYXRhKFNQUkVBRFNIRUVUX0lEKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbk5ld0NoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNoZWNrKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ21haW5QYWdlLT5uZXdDaGVjaycpO1xyXG4gIH1cclxuXHJcbiAgb25OZXdQYXJ0bmVyc0NoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNoZWNrKCk7XHJcbiAgICB0aGlzLnByb3BzLmxvZ0RhdGEoJ21haW5QYWdlLT5vbk5ld1BhcnRuZXJzQ2hlY2tDbGljaycpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17J2NhcmRDb250YWluZXInfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzZXM9e3sgcm9vdDogJ2NhcmRSb290JyB9fT5cclxuICAgICAgICAgIDxMYXJnZUJ1dHRvbiB0aXRsZT17J9Cg0J7Ql9Cd0JjQp9Cd0KvQmSDQl9CQ0JrQkNCXJ30gY29tcG9uZW50PXtDa2Vja0xpbmt9IGltYWdlVXJsPXtpbWFnZVVybH0gb25DbGljaz17dGhpcy5vbk5ld0NoZWNrQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9eydjYXJkQ29udGFpbmVyJ30gcmFpc2VkPlxyXG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc2VzPXt7IHJvb3Q6ICdjYXJkUm9vdCcgfX0+XHJcbiAgICAgICAgICA8TGFyZ2VCdXR0b24gdGl0bGU9eyfQntCf0KLQntCS0KvQmSDQl9CQ0JrQkNCXJ30gY29tcG9uZW50PXtQYXJ0bmVyc0xpbmt9IGltYWdlVXJsPXtwYXJ0bmVyVXJsfSBvbkNsaWNrPXt0aGlzLm9uTmV3UGFydG5lcnNDaGVja0NsaWNrfSAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lckhpc3RvcnknfSByYWlzZWQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgINCY0YHRgtC+0YDQuNGPXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SGlzdG9yeUNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Tm90aWZpY2F0aW9uQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPEJ1c3kgbG9hZGluZz17aXNMb2FkaW5nfSAvPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoTWFpblBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb3RGb3VuZFBhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIE5vdEZvdW5kUGFnZSBleHRlbmRzIENvbXBvbmVudDxJTm90Rm91bmRQYWdlUHJvcHMsIGFueT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIE5vdCBGb3VuZFxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgIChOb3RGb3VuZFBhZ2UpXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYXJ0bmVyc0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRuZXJzQ29tcG9uZW50JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnRuZXJzUGFnZVByb3BzIHtcclxufVxyXG5cclxuY2xhc3MgUGFydG5lcnNQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElQYXJ0bmVyc1BhZ2VQcm9wcywgYW55PntcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXsnY2FyZENvbnRhaW5lcid9IHJhaXNlZD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+ICAgICAgICAgIFxyXG4gICAgICAgICAgPFBhcnRuZXJzQ29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAoUGFydG5lcnNQYWdlKVxyXG4iLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zLCBBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9JVEVNUyxcclxuICAgIExPQURfSVRFTVNfRlVMRklMTEVELFxyXG4gICAgTE9BRF9JVEVNU19SRUpFQ1RFRCxcclxuICAgIFNIT1dfQlVTWSxcclxuICAgIENSRUFURV9DSEVDSyxcclxuICAgIEFERF9EUklOSyxcclxuICAgIEFERF9ERVNTRVJULFxyXG4gICAgUFJPQ0VTU19DSEVDS09VVCxcclxuICAgIFNFVF9QQVlNRU5UX1RZUEUsXHJcbiAgICBTRVRfT1JERVJfVFlQRSxcclxuICAgIEFQUEVORF9EQVRBX0ZVTEZJTExFRCxcclxuICAgIEFQUEVORF9EQVRBX1JFSkVDVEVELFxyXG4gICAgTE9HX0RBVEEsXHJcbiAgICBDTEVBUl9MT0csXHJcbiAgICBDQU5DRUwsXHJcbiAgICBDTEVBUl9FUlJPUixcclxuICAgIERFTEVURV9ERVNTRVJULFxyXG4gICAgREVMRVRFX0RSSU5LLFxyXG4gICAgU0VUX0xBU1RfSUQsXHJcbiAgICBTSE9XX05PVElGSUNBVElPTlxyXG59IGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7IENoZWNrLCBEZXNzZXJ0LCBEcmluaywgUGF5bWVudCwgT3JkZXJUeXBlIH0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcblxyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vc3RvcmUvaW5pdGlhbFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xyXG4gICAgW0NSRUFURV9DSEVDS106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBsYXN0SWQgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrOiBDaGVjayA9IHtcclxuICAgICAgICAgICAgaWQ6IGxhc3RJZCArIDEsXHJcbiAgICAgICAgICAgIGRlc3NlcnRzOiBuZXcgQXJyYXk8RGVzc2VydD4oKSxcclxuICAgICAgICAgICAgZHJpbmtzOiBuZXcgQXJyYXk8RHJpbms+KCksXHJcbiAgICAgICAgICAgIGlzRmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXltZW50OiBQYXltZW50LkNhc2gsXHJcbiAgICAgICAgICAgIHR5cGU6IE9yZGVyVHlwZS5TaG9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbQUREX0RSSU5LXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBkcmluazogRHJpbmsgPSB7XHJcbiAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoZWNrLmRyaW5rcy5wdXNoKGRyaW5rKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2tcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbREVMRVRFX0RSSU5LXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXdDaGVjayA9IHsuLi5jaGVja307XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSAoeyBpZCwgc2l6ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gYWN0aW9uLnBheWxvYWRbMF0gJiYgc2l6ZSA9PT0gYWN0aW9uLnBheWxvYWRbMV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3Q2hlY2suZHJpbmtzID0gY2hlY2suZHJpbmtzLmZpbHRlcihkID0+IGNvbXBhcmF0b3IoZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG5ld0NoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0FERF9ERVNTRVJUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdEZXNzZXJ0ID0gY2hlY2suZGVzc2VydHMuZmluZCgoZDogRGVzc2VydCkgPT5cclxuICAgICAgICAgICAgZC50eXBlID09PSBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgICAgICAmJiBkLnRhc3RlID09PSBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAmJiBkLnNpemUgPT09IGFjdGlvbi5wYXlsb2FkWzJdKTtcclxuXHJcbiAgICAgICAgaWYgKCEhZXhpc3RpbmdEZXNzZXJ0KSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRGVzc2VydC5xdWFudGl0eSArPSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0OiBEZXNzZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgICAgICB0YXN0ZTogYWN0aW9uLnBheWxvYWRbMV0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiBhY3Rpb24ucGF5bG9hZFsyXSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjaGVjay5kZXNzZXJ0cy5wdXNoKGRlc3NlcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGNoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0RFTEVURV9ERVNTRVJUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoZWNrIH0gPSBzdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXdDaGVjayA9IHsuLi5jaGVja307XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSAoeyB0eXBlLCB0YXN0ZSwgc2l6ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBhY3Rpb24ucGF5bG9hZFswXSAmJiB0YXN0ZSA9PT0gYWN0aW9uLnBheWxvYWRbMV0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFszXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaXplICE9PSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGVjay5kZXNzZXJ0cyA9IG5ld0NoZWNrLmRlc3NlcnRzLmZpbHRlcihkID0+IGNvbXBhcmF0b3IoZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG5ld0NoZWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1BST0NFU1NfQ0hFQ0tPVVRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2ssIGhpc3RvcnksIGxhc3RJZCB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2suaXNGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKGNoZWNrKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgY2hlY2s6IG51bGwsXHJcbiAgICAgICAgICAgIGhpc3Rvcnk6IFsuLi5oaXN0b3J5XSxcclxuICAgICAgICAgICAgbGFzdElkOiBsYXN0SWQgKyAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1NFVF9QQVlNRU5UX1RZUEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2sgfSA9IHN0YXRlO1xyXG4gICAgICAgIGNoZWNrLnBheW1lbnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2s6IHsgLi4uY2hlY2sgfSB9O1xyXG4gICAgfSxcclxuICAgIFtTRVRfT1JERVJfVFlQRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGVjayB9ID0gc3RhdGU7XHJcbiAgICAgICAgY2hlY2sudHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVjazogeyAuLi5jaGVjayB9IH07XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfRlVMRklMTEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgaXRlbXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW0xPQURfSVRFTVNfUkVKRUNURURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoYXNFcnJvcmVkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9GVUxGSUxMRURdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6ICFhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtBUFBFTkRfREFUQV9SRUpFQ1RFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblR5cGU6IDJcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbU0hPV19CVVNZXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzQnVzeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0J1c3kgfTtcclxuICAgIH0sXHJcbiAgICBbTE9HX0RBVEFdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGNvbnN0IHsgbG9nIH0gPSBzdGF0ZTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiBgJHtsb2d9OyR7dGV4dH1gIH07XHJcbiAgICB9LFxyXG4gICAgW0NMRUFSX0xPR106IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nOiAnJyB9O1xyXG4gICAgfSxcclxuICAgIFtDTEVBUl9FUlJPUl06IChzdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3JNZXNzYWdlOiAnJyB9O1xyXG4gICAgfSxcclxuICAgIFtDQU5DRUxdOiAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrOiBudWxsIH07XHJcbiAgICB9LFxyXG4gICAgW1NFVF9MQVNUX0lEXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBoaXN0b3J5OiBbYWN0aW9uLnBheWxvYWRbMV1dLFxyXG4gICAgICAgICAgICBsYXN0SWQ6IGFjdGlvbi5wYXlsb2FkWzBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW1NIT1dfTk9USUZJQ0FUSU9OXTogKHN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkWzFdLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UeXBlOiBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSwgaW5pdGlhbFN0YXRlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgQW55QWN0aW9uLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXInO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICBjaGVjazogbnVsbCxcclxuICAgIGhpc3Rvcnk6IG5ldyBBcnJheTxDaGVjaz4oKSxcclxuICAgIGxvZzogJycsXHJcbiAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgbGFzdElkOiAwLFxyXG4gICAgbm90aWZpY2F0aW9uVHlwZTogMFxyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgRHJpbmtzVHlwZSwgRGVzc2VydFR5cGUsIE1hY2Fyb25zRW51bSwgWmVwaHlyRW51bSwgUGFydG5lcnNFbnVtLCBDYWtlc0VudW0gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEcmlua3NEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PHN0cmluZz4gfSA9IHt9O1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQ2FwcHVjaW5vXSA9IFsnMTc1INC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkZsYXRXaGl0ZV0gPSBbJzE3NSDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5SYWZdID0gWycyNTAg0LzQuycsICczNDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vXSA9IFsnMTIwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkFtZXJpY2Fub01pbGtdID0gWycxMjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTG9uZ0JsYWNrXSA9IFsnMjAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkVzcHJlc3NvXSA9IFsnMzAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuRG9wcGlvXSA9IFsnNjAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuTWFjaGlhdG9dID0gWyc5MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZUxhdmVuZGVyXSA9IFsnMjUwINC80LsnLCAnMzQwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxhdHRlQ2FyYW1lbF0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MYXR0ZU9yYW5nZV0gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5DYWNhb10gPSBbJzI1MCDQvNC7JywgJzM0MCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFHcmVlbl0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFCbGFja10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5UZWFIZXJiYWxdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3BlYWNpYWxUZWFQZWFyTGltZV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5TcGVjaWFsVGVhT3JhbmdlXSA9IFsnNDAwINC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFHaW5nZXJdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFsnMTc1INC80LsnXTtcclxuRHJpbmtzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbJzQwMCDQvNC7J107XHJcbkRyaW5rc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWyc0MDAg0LzQuyddO1xyXG5Ecmlua3NEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWycwINC80LsnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNzZXJ0c0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8YW55PiB9ID0ge307XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5NYWNhcm9uXSA9IFsxLCA2LCAxMiwgMjRdO1xyXG5EZXNzZXJ0c0RpY3RbRGVzc2VydFR5cGUuWmVwaHlyXSA9IFsxLCA4LCAxNl07XHJcbkRlc3NlcnRzRGljdFtEZXNzZXJ0VHlwZS5DYWtlXSA9IFsnMTgg0YHQvCcsICcyMiDRgdC8J107XHJcblxyXG5leHBvcnQgY29uc3QgRHJpbmtQcmljZXNEaWN0OiB7IFtpZDogc3RyaW5nXSA6IEFycmF5PG51bWJlcj4gfSA9IHt9O1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5DYXBwdWNpbm9dID0gWzI1LCA0MF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlXSA9IFsyOCwgMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5GbGF0V2hpdGVdID0gWzM1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuUmFmXSA9IFszOCwgNDVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5BbWVyaWNhbm9dID0gWzIwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuQW1lcmljYW5vTWlsa10gPSBbMjVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5Mb25nQmxhY2tdID0gWzMwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuRXNwcmVzc29dID0gWzIwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuRG9wcGlvXSA9IFszMF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLk1hY2hpYXRvXSA9IFsyMl07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlTGF2ZW5kZXJdID0gWzMyLCA0MF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxhdHRlQ2FyYW1lbF0gPSBbMzIsIDQwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuTGF0dGVPcmFuZ2VdID0gWzMyLCA0MF07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkNhY2FvXSA9IFsyOCwgMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFHcmVlbl0gPSBbMjVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFCbGFja10gPSBbMjVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5UZWFIZXJiYWxdID0gWzI1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3BlYWNpYWxUZWFQZWFyTGltZV0gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5TcGVjaWFsVGVhT3JhbmdlXSA9IFszNV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLlNwZWNpYWxUZWFHaW5nZXJdID0gWzM1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuSG90Q2hvY29sYXRlXSA9IFs1NV07XHJcbkRyaW5rUHJpY2VzRGljdFtEcmlua3NUeXBlLkxlbW9uYWRlU3RyYXdiZXJyeV0gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZUNpdHJ1c10gPSBbMzVdO1xyXG5Ecmlua1ByaWNlc0RpY3RbRHJpbmtzVHlwZS5MZW1vbmFkZVBhc3Npb25dID0gWzM1XTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuSWNlTGF0dGVdID0gWzQwXTtcclxuRHJpbmtQcmljZXNEaWN0W0RyaW5rc1R5cGUuU3lyb3BdID0gWzVdO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhZmZlZVByaWNlczogeyBbaWQ6IHN0cmluZ10gOiBudW1iZXIgfSA9IHt9O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkNvZmZlZUlzXSA9IDE3O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLkZpcnN0UG9pbnRdID0gMTk7XHJcbkNhZmZlZVByaWNlc1tQYXJ0bmVyc0VudW0uQ3ViYUNvZmZlZV0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5Qcm9ncmVzc10gPSAyMDtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5LbGFzc25hS2F2YV0gPSAxOTtcclxuQ2FmZmVlUHJpY2VzW1BhcnRuZXJzRW51bS5Db2ZmZWVBbmRUaGVDaXR5XSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLklsTWlvXSA9IDE5O1xyXG5DYWZmZWVQcmljZXNbUGFydG5lcnNFbnVtLlN0dWRpb0NvZmZlZV0gPSAyMDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYWtlc1ByaWNlc0RpY3Q6IHsgW2lkOiBzdHJpbmddIDogQXJyYXk8bnVtYmVyPiB9ID0ge307XHJcbkNha2VzUHJpY2VzRGljdFtDYWtlc0VudW0uQ2Fycm90Q2FrZV0gPSBbNjUwLCA5ODBdO1xyXG5DYWtlc1ByaWNlc0RpY3RbQ2FrZXNFbnVtLlBpbmtdID0gWzYzMCwgOTcwXTtcclxuQ2FrZXNQcmljZXNEaWN0W0Nha2VzRW51bS5JbmZpbml0eV0gPSBbNjQwLCA5NzBdO1xyXG5DYWtlc1ByaWNlc0RpY3RbQ2FrZXNFbnVtLlJpb10gPSBbNjMwLCA5NzBdO1xyXG5DYWtlc1ByaWNlc0RpY3RbQ2FrZXNFbnVtLlNvdWxdID0gWzYyMCwgOTYwXTtcclxuXHJcbmV4cG9ydCBjb25zdCBaRVBIWVJfUFJJQ0UgPSAxMjtcclxuZXhwb3J0IGNvbnN0IFpFUEhZUl9QQVJUTkVSU19QUklDRSA9IDExO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BQ0FST05TX1BSSUNFID0gMjg7XHJcblxyXG5leHBvcnQgY29uc3QgTWFjYXJvbnNDb2xvcnM6IHsgW2lkOiBzdHJpbmddIDogc3RyaW5nIH0gPSB7fTtcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkRvckJsdWVQZWFyXSA9ICcjYjdlNGY3JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLlBhcm1lc2FuRmlndWVdID0gJyNmY2Y3ZTgnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uU3RyYXdiZXJyeUNoZWVzZWNha2VdID0gJyNmZmRkZGQnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uUmFzcGJlcnJ5XSA9ICcjZmZhNWNmJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkNoZXJyeVRvbmtvXSA9ICcjQjIxRTI3JztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLk9ibGVwaWhhXSA9ICcjRjBDMTMwJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkN1cnJhbnRdID0gJyNiYzQ1YzYnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uTGF2ZW5kZXJCbGFja2JlcnJ5XSA9ICcjYjU4N2ZmJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLk1hbmdvUGFzc2lvbl0gPSAnI2ZmZGQ4Nyc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5Db2ZmZWVDYXJhbWVsXSA9ICcjYTg3MzAxJztcclxuTWFjYXJvbnNDb2xvcnNbTWFjYXJvbnNFbnVtLkNob2NvbGF0ZV0gPSAnIzQ5MjkwOCc7XHJcbk1hY2Fyb25zQ29sb3JzW01hY2Fyb25zRW51bS5QaXN0YWNoaW9dID0gJyM4NWRkOTMnO1xyXG5NYWNhcm9uc0NvbG9yc1tNYWNhcm9uc0VudW0uTGltZUJhc2lsXSA9ICcjOWZmMjVjJztcclxuXHJcbmV4cG9ydCBjb25zdCBaZXBoeXJDb2xvcnM6IHsgW2lkOiBzdHJpbmddIDogc3RyaW5nIH0gPSB7fTtcclxuWmVwaHlyQ29sb3JzW1plcGh5ckVudW0uQXBwbGVdID0gJyNmZmZiZjInO1xyXG5aZXBoeXJDb2xvcnNbWmVwaHlyRW51bS5BcHJpY290UGFzc2lvbkZydWl0XSA9ICcjZmZlNmJmJztcclxuWmVwaHlyQ29sb3JzW1plcGh5ckVudW0uQ3VycmFudF0gPSAnI2Q5NzjQtWQnO1xyXG5aZXBoeXJDb2xvcnNbWmVwaHlyRW51bS5TdHJhd2JlcnJ5Q3JhbmJlcnJ5XSA9ICcjZjQ5N2I5JzsiLCJpbXBvcnQgeyBNQUNBUk9OU19QUklDRSwgWkVQSFlSX1BSSUNFLCBEcmlua1ByaWNlc0RpY3QsIERyaW5rc0RpY3QsIENha2VzUHJpY2VzRGljdCB9IGZyb20gJy4vZGljdGlvbmFyaWVzJztcclxuaW1wb3J0IHsgRGVzc2VydFR5cGUgLCBEZXNzZXJ0LCBEcmluayB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCZWFyZXJUb2tlbiB7XHJcbiAgICBBY2Nlc3NUb2tlbjogYW55O1xyXG4gICAgRXhwaXJlc09uOiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9BdXRoMkluZm8ge1xyXG4gICAgT0F1dGgyQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgICBPQXV0aDJDbGllbnRJZDogc3RyaW5nO1xyXG4gICAgT0F1dGgyUmVkaXJlY3RVcmk6IHN0cmluZztcclxuICAgIE9BdXRoMlJlc291cmNlSWRlbnRpZmllcjogc3RyaW5nO1xyXG4gICAgT0F1dGgyVG9rZW5TZXJ2aWNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIEhlbHBlciB7XHJcbiAgICBzdGF0aWMgVG9rZW5Db29raWVOYW1lID0gXCJhY2Nlc3N0b2tlbmNvb2tpZV90ZW1wXCI7XHJcblxyXG4gICAgc3RhdGljIEdVSURFbXB0eSA9IFwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCI7XHJcblxyXG4gICAgc3RhdGljIE9cclxuXHJcbiAgICBzdGF0aWMgZ3VpZCA9ICgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBzNCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXHJcbiAgICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFBhcmFtZXRlckJ5TmFtZUZyb21VcmkgPSAobmFtZSwgdXJsKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xyXG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcclxuICAgICAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgICAgICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UXVlcnlWYXJpYWJsZSA9ICh2YXJpYWJsZTogc3RyaW5nKSA9PlxyXG4gICAge1xyXG4gICAgICAgIHZhciBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGlmICghcXVlcnkgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoXCIlM0ZcIikgPiAtMSkge1xyXG4gICAgICAgICAgICBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIiUzRlwiKVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZhcnMgPSBxdWVyeS5zcGxpdChcIiZcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgIGlmIChwYWlyWzBdID09IHZhcmlhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYWlyWzFdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlPyBkZWNvZGVVUkkodmFsdWUpIDogbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2FsY3VsYXRlUHJpY2UoY2hlY2spIHtcclxuICAgICAgICBsZXQgdG90YWxQcmljZSA9IDA7XHJcbiAgICAgICAgY2hlY2suZGVzc2VydHMuZm9yRWFjaCgoZDogRGVzc2VydCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBEZXNzZXJ0VHlwZS5DYWtlOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNha2VQcmljZXMgPSBDYWtlc1ByaWNlc0RpY3RbZC50YXN0ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuc2l6ZSA9PT0gJzE4INGB0LwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gY2FrZVByaWNlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQuc2l6ZSA9PT0gJzIyINGB0LwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gY2FrZVByaWNlc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERlc3NlcnRUeXBlLk1hY2Fyb246XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBNQUNBUk9OU19QUklDRSAqIGQucXVhbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERlc3NlcnRUeXBlLlplcGh5cjpcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IFpFUEhZUl9QUklDRSAqIGQucXVhbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNoZWNrLmRyaW5rcy5mb3JFYWNoKChkOiBEcmluaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmljZXMgPSBEcmlua1ByaWNlc0RpY3RbZC5pZF07XHJcbiAgICAgICAgICAgIGlmIChwcmljZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IHByaWNlc1swXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gRHJpbmtzRGljdFtkLmlkXS5maW5kSW5kZXgoeCA9PiB4ID09PSBkLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBwcmljZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbFByaWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWxwZXI7IiwiZXhwb3J0IGludGVyZmFjZSBEZXNzZXJ0IHtcclxuICAgIHR5cGU6IERlc3NlcnRUeXBlLFxyXG4gICAgdGFzdGU6IHN0cmluZyxcclxuICAgIHNpemU6IHN0cmluZ1xyXG4gICAgcXVhbnRpdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmluayB7XHJcbiAgICBpZDogRHJpbmtzVHlwZSxcclxuICAgIHNpemU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBkZXNzZXJ0czogQXJyYXk8RGVzc2VydD4sXHJcbiAgICBkcmlua3M6IEFycmF5PERyaW5rPixcclxuICAgIGlzRmluaXNoZWQ6IGJvb2xlYW4sXHJcbiAgICBwYXltZW50OiBQYXltZW50LFxyXG4gICAgdHlwZTogT3JkZXJUeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBheW1lbnQge1xyXG4gICAgQ2FyZCA9ICfQmtCw0YDRgtCwJyxcclxuICAgIENhc2ggPSAn0J3QsNC70LjRh9C60LAnLFxyXG4gICAgT3RoZXIgPSAn0JTRgNGD0LPQvtC1J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlclR5cGUge1xyXG4gICAgUHJlT3JkZXIgPSAn0J/RgNC10LTQt9Cw0LrQsNC3JyxcclxuICAgIFNob3AgPSAn0JLQuNGC0YDQuNC90LAnLFxyXG4gICAgT3RoZXIgPSAn0JTRgNGD0LPQvtC1J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEZXNzZXJ0VHlwZSB7XHJcbiAgICBNYWNhcm9uID0gJ9Cc0LDQutCw0YDQvtC90YEnLFxyXG4gICAgWmVwaHlyID0gJ9CX0LXRhNC40YAnLFxyXG4gICAgQ2FrZSA9ICfQotC+0YDRgidcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFjYXJvbnNFbnVtIHtcclxuICAgIERvckJsdWVQZWFyID0gXCLQlNC+0LEt0JHQu9GOIC0g0JPRgNGD0YjQsFwiLFxyXG4gICAgUGFybWVzYW5GaWd1ZSA9IFwi0J/QsNGA0LzQtdC30LDQvSAtINCY0L3QttC40YBcIixcclxuICAgIFN0cmF3YmVycnlDaGVlc2VjYWtlID0gXCLQmtC70YPQsdC90LjRh9C90YvQuSDQp9C40LfQutC10LnQulwiLFxyXG4gICAgUmFzcGJlcnJ5ID0gXCLQnNCw0LvQuNC90LBcIixcclxuICAgIENoZXJyeVRvbmtvID0gXCLQktC40YjQvdGPIC0g0JHQvtCx0Ysg0KLQvtC90LrQvlwiLFxyXG4gICAgT2JsZXBpaGEgPSBcItCe0LHQu9C10L/QuNGF0LBcIixcclxuICAgIEN1cnJhbnQgPSBcItCh0LzQvtGA0L7QtNC40L3QsFwiLFxyXG4gICAgTGF2ZW5kZXJCbGFja2JlcnJ5ID0gXCLQm9Cw0LLQsNC90LTQsCAtINCn0LXRgNC90LjQutCwXCIsXHJcbiAgICBNYW5nb1Bhc3Npb24gPSBcItCc0LDQvdCz0L4gLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBDb2ZmZWVDYXJhbWVsID0gXCLQmtC+0YTQtSAtINCh0L7Qu9GR0L3QsNGPINCa0LDRgNCw0LzQtdC70YxcIixcclxuICAgIENob2NvbGF0ZSA9IFwi0KjQvtC60L7Qu9Cw0LRcIixcclxuICAgIFBpc3RhY2hpbyA9IFwi0KTQuNGB0YLQsNGI0LrQsFwiLFxyXG4gICAgTGltZUJhc2lsID0gXCLQm9Cw0LnQvCAtINCR0LDQt9C40LvQuNC6XCIgXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFplcGh5ckVudW0ge1xyXG4gICAgQXBwbGUgPSBcItCv0LHQu9C+0LrQvlwiLFxyXG4gICAgQXByaWNvdFBhc3Npb25GcnVpdCA9IFwi0JDQsdGA0LjQutC+0YEgLSDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBDdXJyYW50ID0gXCLQodC80L7RgNC+0LTQuNC90LBcIiwgICAgXHJcbiAgICBTdHJhd2JlcnJ5Q3JhbmJlcnJ5ID0gXCLQmtC70YPQsdC90LjQutCwIC0g0JrQu9GO0LrQstCwXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2FrZXNFbnVtIHtcclxuICAgIFJpbyA9IFwiUmlvXCIsXHJcbiAgICBDYXJyb3RDYWtlID0gXCJDYXJyb3QgQ2FrZVwiLFxyXG4gICAgU291bCA9IFwiU291bFwiLFxyXG4gICAgUGluayA9IFwiUGlua1wiLFxyXG4gICAgSW5maW5pdHkgPSBcIkluZmluaXR5XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRHJpbmtzVHlwZSB7XHJcbiAgICBDYXBwdWNpbm8gPSBcItCa0LDQv9GD0YfQuNC90L5cIixcclxuICAgIExhdHRlID0gXCLQm9Cw0YLRgtC1XCIsXHJcbiAgICBGbGF0V2hpdGUgPSBcItCk0LvQtdGCINCS0LDQudGCXCIsXHJcbiAgICBSYWYgPSBcItCg0LDRhFwiLFxyXG4gICAgQW1lcmljYW5vID0gXCLQkNC80LXRgNC40LrQsNC90L5cIixcclxuICAgIEFtZXJpY2Fub01pbGsgPSBcItCQ0LzQtdGA0LjQutCw0L3QviDRgSDQvNC+0LvQvtC60L7QvFwiLFxyXG4gICAgTG9uZ0JsYWNrID0gXCLQm9C+0L3QsyDQsdC70Y3QulwiLFxyXG4gICAgRXNwcmVzc28gPSBcItCt0YHQv9GA0LXRgdGB0L5cIixcclxuICAgIERvcHBpbyA9IFwi0JTQvtC/0L/QuNC+XCIsICAgIFxyXG4gICAgTWFjaGlhdG8gPSBcItCc0LDQutC40LDRgtC+XCIsXHJcbiAgICBMYXR0ZUxhdmVuZGVyID0gXCLQm9Cw0YLRgtC1INCb0LDQstCw0L3QtNCwXCIsXHJcbiAgICBMYXR0ZUNhcmFtZWwgPSBcItCb0LDRgtGC0LUg0JrQsNGA0LDQvNC10LvRjFwiLFxyXG4gICAgTGF0dGVPcmFuZ2UgPSBcItCb0LDRgtGC0LUg0JDQv9C10LvRjNGB0LjQvVwiLFxyXG4gICAgQ2FjYW8gPSBcItCa0LDQutCw0L5cIixcclxuICAgIFRlYUdyZWVuID0gXCLQp9Cw0Lkg0JfQtdC70ZHQvdGL0LlcIixcclxuICAgIFRlYUJsYWNrID0gXCLQp9Cw0Lkg0KfRkdGA0L3Ri9C5XCIsXHJcbiAgICBUZWFIZXJiYWwgPSBcItCn0LDQuSDQotGA0LDQstGP0L3QvtC5XCIsXHJcbiAgICBTcGVhY2lhbFRlYVBlYXJMaW1lID0gXCLQp9Cw0Lkg0JPRgNGD0YjQsC3Qm9Cw0LnQvFwiLFxyXG4gICAgU3BlY2lhbFRlYU9yYW5nZSA9IFwi0KfQsNC5INCQ0L/QtdC70YzRgdC40L0t0J7QsdC70LXQv9C40YXQsFwiLFxyXG4gICAgU3BlY2lhbFRlYUdpbmdlciA9IFwi0KfQsNC5INCc0LDQu9C40L3QsC3QmNC80LHQuNGA0YxcIixcclxuICAgIEhvdENob2NvbGF0ZSA9IFwi0JPQsNGA0Y/Rh9C40Lkg0YjQvtC60L7Qu9Cw0LRcIixcclxuICAgIExlbW9uYWRlU3RyYXdiZXJyeSA9IFwi0JvQuNC80L7QvdCw0LQg0JrQu9GD0LHQvdC40LrQsFwiLFxyXG4gICAgTGVtb25hZGVDaXRydXMgPSBcItCb0LjQvNC+0L3QsNC0INCm0LjRgtGA0YPRgVwiLFxyXG4gICAgTGVtb25hZGVQYXNzaW9uID0gXCLQm9C40LzQvtC90LDQtCDQnNCw0YDQsNC60YPQudGPXCIsXHJcbiAgICBJY2VMYXR0ZSA9IFwi0JDQudGBINCb0LDRgtGC0LVcIixcclxuICAgIFN5cm9wID0gXCLQodC40YDQvtC/XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGFydG5lcnNFbnVtIHtcclxuICAgIENvZmZlZUlzID0gXCJDb2ZmZWUgaXNcIixcclxuICAgIEZpcnN0UG9pbnQgPSBcIkZpcnN0IFBvaW50XCIsXHJcbiAgICBDdWJhQ29mZmVlID0gXCJDdWJhIENvZmZlZVwiLFxyXG4gICAgUHJvZ3Jlc3MgPSBcIlByb2dyZXNzXCIsXHJcbiAgICBLbGFzc25hS2F2YSA9IFwi0JrQu9Cw0YHQvdCwINC60LDQstCwXCIsXHJcbiAgICBDb2ZmZWVBbmRUaGVDaXR5ID0gXCJDb2ZmZWUgYW5kIHRoZSBjaXR5XCIsXHJcbiAgICBJbE1pbyA9IFwiSWwgTWlvXCIsXHJcbiAgICBTdHVkaW9Db2ZmZWUgPSBcItCh0YLRg9C00LjRjyDQutC+0YTQtVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZhbHVlSW5wdXRPcHRpb24ge1xyXG4gICAgSU5QVVRfVkFMVUVfT1BUSU9OX1VOU1BFQ0lGSUVEID0gJ0lOUFVUX1ZBTFVFX09QVElPTl9VTlNQRUNJRklFRCcsXHJcbiAgICBSQVcgPSAnUkFXJyxcclxuICAgIFVTRVJfRU5URVJFRCA9ICdVU0VSX0VOVEVSRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEluc2VydERhdGFPcHRpb24ge1xyXG4gICAgT1ZFUldSSVRFID0gJ09WRVJXUklURScsXHJcbiAgICBJTlNFUlRfUk9XUyA9ICdJTlNFUlRfUk9XUydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVSZW5kZXJPcHRpb24ge1xyXG4gICAgRk9STUFUVEVEX1ZBTFVFID0gJ0ZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBVTkZPUk1BVFRFRF9WQUxVRSA9ICdVTkZPUk1BVFRFRF9WQUxVRScsXHJcbiAgICBGT1JNVUxBID0gJ0ZPUk1VTEEnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERhdGVUaW1lUmVuZGVyT3B0aW9uIHtcclxuICAgIFNFUklBTF9OVU1CRVIgPSAnU0VSSUFMX05VTUJFUicsXHJcbiAgICBGT1JNQVRURURfU1RSSU5HID0gJ0ZPUk1BVFRFRF9TVFJJTkcnXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==