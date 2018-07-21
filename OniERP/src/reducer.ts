import { handleActions, Action } from "redux-actions";
import {
    LOAD_ITEMS,
    LOAD_ITEMS_FULFILLED,
    LOAD_ITEMS_REJECTED,
    SHOW_BUSY,
    CREATE_CHECK,
    ADD_DRINK,
    ADD_DESSERT,
    PROCESS_CHECKOUT,    
    SET_PAYMENT_TYPE,
    SET_ORDER_TYPE
} from "./actionTypes";
import { Check, Dessert, Drink, Payment, OrderType } from './utils/types';

import initialState from './store/initialState';

export default handleActions({
    [CREATE_CHECK]: (state, action) => {
        const { history } = state;
        const check: Check = {
            id: history.length + 1,
            desserts: new Array<Dessert>(),
            drinks: new Array<Drink>(),
            isFinished: false,
            payment: Payment.Cash,
            type: OrderType.Shop
        };
        return Object.assign({}, state, {
            check
        });        
    },
    [ADD_DRINK]: (state, action) => {
        const { check } = state;
        const drink: Drink = {
            id: check.drinks.length + 1,
            type: action.payload[0],
            size: action.payload[1]
        };
        check.drinks.push(drink);
        return Object.assign({}, state, {
            check
        });        
    },
    [ADD_DESSERT]: (state, action) => {
        const { check } = state;
        const dessert: Dessert = {
            id: check.desserts.length + 1,
            type: action.payload[0],
            taste: action.payload[1],
            size: action.payload[2]
        };
        check.desserts.push(dessert);
        return Object.assign({}, state, {
            check
        });        
    },
    [PROCESS_CHECKOUT]: (state, action) => {
        const { check, history } = state;
        check.isFinished = true;
        history.push(check);
        return Object.assign({}, state, {
            check: null,
            history
        });        
    },
    [SET_PAYMENT_TYPE]: (state, action) => {
        const { check } = state;
        check.payment = action.payload;
        return { ...state, check: {...check} };           
    },
    [SET_ORDER_TYPE]: (state, action) => {
        const { check } = state;
        check.type = action.payload;
        return { ...state, check: {...check} };        
    },
    [LOAD_ITEMS]: (state, action) => {
        return Object.assign({}, state, {
            isLoading: action.payload
        });        
    },
    [LOAD_ITEMS_FULFILLED]: (state, action) => {
        return Object.assign({}, state, {
            items: action.payload
        });        
    },
    [LOAD_ITEMS_REJECTED]: (state, action) => {
        return Object.assign({}, state, {
            hasErrored: action.payload
        });
    },  
    [SHOW_BUSY]: (state, action: any) => {
        const isBusy = action.payload;
        return { ...state, isBusy };
    }
}, initialState);
