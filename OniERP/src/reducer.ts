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
    SET_ORDER_TYPE,
    SELECT_SALE,
    APPEND_DATA_FULFILLED,
    APPEND_DATA_REJECTED,
    LOG_DATA,
    CLEAR_LOG,
    CANCEL,
    CLEAR_ERROR,
    DELETE_DESSERT,
    DELETE_DRINK,
    SET_LAST_ID,
    SHOW_NOTIFICATION,
    CHANGE_PROFILE,
    SET_IS_PAID,
    SET_DAILY_PERCENT
} from "./actionTypes";
import { Check, Dessert, Drink, Payment, OrderType, SaleType, ProfilesEnum } from './utils/types';

import initialState from './store/initialState';

export default handleActions({
    [CREATE_CHECK]: (state, action) => {
        const { lastId } = state;
        const check: Check = {
            id: lastId + 1,
            desserts: new Array<Dessert>(),
            drinks: new Array<Drink>(),
            isFinished: false,
            payment: Payment.Cash,
            type: OrderType.Shop,
            sale: SaleType.Empty,
            isPaid: true
        };
        return Object.assign({}, state, {
            check
        });
    },
    [ADD_DRINK]: (state, action) => {
        const { check } = state;
        const existingDrink = check.drinks.find((d: Drink) =>
            d.id === action.payload[0]
            && d.size === action.payload[1]);

        if (!!existingDrink) {
            existingDrink.quantity += action.payload[3];
        } else {
            const drink: Drink = {
                id: action.payload[0],
                size: action.payload[1]
            };
            for (let i = 0; i < action.payload[2]; i++) {
                check.drinks.push(drink);
            }
        }

        return Object.assign({}, state, {
            check
        });
    },
    [DELETE_DRINK]: (state, action) => {
        const { check } = state;
        const newCheck = { ...check };
        let index = -1;
        for (let d of newCheck.drinks) {
            index++;
            if (d.id === action.payload[0] && d.size === action.payload[1]) {
                break;
            }
        }

        if (index > -1) {
            newCheck.drinks.splice(index, 1);
        }
        return Object.assign({}, state, {
            check: newCheck
        });
    },
    [ADD_DESSERT]: (state, action) => {
        const { check } = state;

        const existingDessert = check.desserts.find((d: Dessert) =>
            d.type === action.payload[0]
            && d.taste === action.payload[1]
            && d.size === action.payload[2]);

        if (!!existingDessert) {
            existingDessert.quantity += action.payload[3];
        } else {
            const dessert: Dessert = {
                type: action.payload[0],
                taste: action.payload[1],
                size: action.payload[2],
                quantity: action.payload[3]
            };
            check.desserts.push(dessert);
        }

        return Object.assign({}, state, {
            check
        });
    },
    [DELETE_DESSERT]: (state, action) => {
        const { check } = state;
        const newCheck = { ...check };

        const comparator = ({ type, taste, size }) => {
            if (type === action.payload[0] && taste === action.payload[1]) {
                if (action.payload[3]) {
                    return size !== action.payload[3];
                } else {
                    return false;
                }

            }
            return true;
        }

        newCheck.desserts = newCheck.desserts.filter(d => comparator(d));

        return Object.assign({}, state, {
            check: newCheck
        });
    },
    [PROCESS_CHECKOUT]: (state, action) => {
        const { check, history, lastId } = state;
        check.isFinished = true;
        history.push(check);
        return Object.assign({}, state, {
            check: null,
            history: [...history],
            lastId: lastId + 1
        });
    },
    [SET_PAYMENT_TYPE]: (state, action) => {
        const { check } = state;
        check.payment = action.payload;
        return { ...state, check: { ...check } };
    },
    [SET_ORDER_TYPE]: (state, action) => {
        const { check } = state;
        check.type = action.payload;
        return { ...state, check: { ...check } };
    },
    [SELECT_SALE]: (state, action) => {
        const { check } = state;
        check.sale = action.payload;
        return { ...state, check: { ...check } };
    },
    [SET_IS_PAID]: (state, action) => {
        const { check } = state;
        check.isPaid = action.payload;
        return { ...state, check: { ...check } };
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
    [APPEND_DATA_FULFILLED]: (state, action) => {
        return Object.assign({}, state, {
            items: [],
            hasErrored: !action.payload
        });
    },
    [APPEND_DATA_REJECTED]: (state, action) => {
        return Object.assign({}, state, {
            hasErrored: true,
            errorMessage: action.payload,
            notificationType: 2
        });
    },
    [SHOW_BUSY]: (state, action: any) => {
        const isBusy = action.payload;
        return { ...state, isBusy };
    },
    [LOG_DATA]: (state, action: any) => {
        const text = action.payload;
        const { log } = state;
        return { ...state, log: `${log};${text}` };
    },
    [CLEAR_LOG]: (state, action: any) => {
        return { ...state, log: '' };
    },
    [CLEAR_ERROR]: (state, action: any) => {
        return { ...state, errorMessage: '' };
    },
    [CANCEL]: (state, action: any) => {
        return { ...state, check: null };
    },
    [SET_LAST_ID]: (state, action: any) => {
        return Object.assign({}, state, {
            history: [action.payload[1]],
            lastId: action.payload[0]
        });
    },
    [SHOW_NOTIFICATION]: (state, action: any) => {
        return Object.assign({}, state, {
            errorMessage: action.payload[1],
            notificationType: action.payload[0]
        });
    },
    [CHANGE_PROFILE]: (state, action: any) => {
        const profile = action.payload;        
        return Object.assign({}, state, {
            currentProfile: profile
        });
    },
    [SET_DAILY_PERCENT]: (state, action: any) => {
        const dailyBonus = action.payload;
        return { ...state, dailyBonus };
    },
}, initialState);
