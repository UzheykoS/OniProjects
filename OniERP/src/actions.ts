import { createAction, Action } from "redux-actions";
import {
    LOAD_ITEMS,
    LOAD_ITEMS_FULFILLED,
    LOAD_ITEMS_REJECTED,
    SHOW_BUSY,
    CREATE_CHECK,
    PROCESS_CHECKOUT,
    ADD_DRINK,
    ADD_DESSERT,
    SET_PAYMENT_TYPE,
    SET_ORDER_TYPE,
    SELECT_SALE,
    APPEND_DATA_FULFILLED,
    APPEND_DATA_REJECTED,
    LOG_DATA,
    CLEAR_LOG,
    CANCEL,
    CLEAR_ERROR,
    DELETE_DRINK,
    DELETE_DESSERT,
    SET_LAST_ID,
    SHOW_NOTIFICATION
} from './actionTypes';
import {
    DrinksType, DessertType, Payment, OrderType, Check, PaymentTypeEnum,
    ValueInputOption, InsertDataOption, ValueRenderOption, DateTimeRenderOption, Dessert, Drink, SaleType
} from './utils/types';
import { LOGS_SPREADSHEET_ID, SPREADSHEET_ID } from './config/keys';
import * as moment from 'moment';
const BLACK_FRIDAY_DATES = [23, 24];

export const ProcessFetchData = (spreadsheetId: string) => {
    return async (dispatch) => {
        dispatch(itemsIsLoading(true));
        try {
            const dessertsResponse = await window['gapi'].client.sheets.spreadsheets.values.get({
                spreadsheetId: spreadsheetId,
                range: "RawDessertsData!A:H"
            });
            const drinksResponse = await window['gapi'].client.sheets.spreadsheets.values.get({
                spreadsheetId: spreadsheetId,
                range: "RawDrinksData!A:F"
            });

            let lastDessertOrderId = Math.max(...dessertsResponse.result.values.slice(1).map(d => d[7] ? Number(d[7]) : 0));
            let lastDrinkOrderId = Math.max(...drinksResponse.result.values.slice(1).map(d => d[5] ? Number(d[5]) : 0));
            const lastId = Math.max(lastDessertOrderId, lastDrinkOrderId);

            const lastOrder: Check = {
                id: lastId,
                desserts: [],
                drinks: [],
                isFinished: true,
                payment: Payment.Other,
                type: OrderType.Other,
                sale: SaleType.Empty
            };
            let lastOrderPayment = null;
            let lastOrderType = null;

            lastOrder.desserts = dessertsResponse.result.values.slice(1).filter(v => v[7] === lastId.toString()).map(d => {
                lastOrderPayment = d[4] === 'Наличка' ? Payment.Cash : Payment.Card;
                lastOrderType = d[5] === 'Витрина' ? OrderType.Shop : OrderType.PreOrder;
                const dessert: Dessert = {
                    type: d[0],
                    taste: d[1],
                    quantity: d[2],
                    size: d[3]
                };
                return dessert;
            });

            lastOrder.drinks = drinksResponse.result.values.slice(1).filter(v => v[5] === lastId.toString()).map(d => {
                lastOrderPayment = d[2] === 'Наличка' ? Payment.Cash : Payment.Card;
                lastOrderType = d[3] === 'Витрина' ? OrderType.Shop : OrderType.PreOrder;
                const dessert: Drink = {
                    id: d[0],
                    size: d[1]
                };
                return dessert;
            });
            lastOrder.payment = lastOrderPayment;
            lastOrder.type = lastOrderType;
            dispatch(SetLastId(lastId, lastOrder));
            // dispatch(itemsFetchDataSuccess([...desserts, ...drinks]));
        }
        catch (ex) {
            dispatch(itemsHasErrored(true));
            console.log(ex);
            throw Error(ex);
        }
        finally {
            dispatch(itemsIsLoading(false));
        }
    };
};

export const ProcessAppendData = (spreadsheetId: string, range: string, valueRange: any) => {
    return async (dispatch) => {
        dispatch(itemsIsLoading(true));
        try {
            const response = await window['gapi'].client.sheets.spreadsheets.values.append({
                spreadsheetId: spreadsheetId,
                range: range,
                valueInputOption: ValueInputOption.USER_ENTERED,
                insertDataOption: InsertDataOption.OVERWRITE,
                includeValuesInResponse: true,
                responseValueRenderOption: ValueRenderOption.FORMATTED_VALUE
            }, { values: valueRange });

            // const updatedCellsCount = await response.result.updates.updatedCells;            
            dispatch(itemsAppendSuccess(true));
        }
        catch (ex) {
            dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
            console.log(ex);
            throw Error(ex);
        }
        finally {
            dispatch(itemsIsLoading(false));
        }
    };
};

export const ProcessLog = async (message: string) => {
    try {
        const dateTime = new Date();
        const data = [
            [message, dateTime.toUTCString()]
        ];

        await window['gapi'].client.sheets.spreadsheets.values.append({
            spreadsheetId: LOGS_SPREADSHEET_ID,
            range: 'A:B',
            valueInputOption: ValueInputOption.USER_ENTERED,
            insertDataOption: InsertDataOption.OVERWRITE,
            includeValuesInResponse: true,
            responseValueRenderOption: ValueRenderOption.FORMATTED_VALUE
        }, { values: data });
    }
    catch (ex) {
        console.log(ex);
        throw Error(ex);
    }
};

export const ProcessUpdateData = (spreadsheetId: string, valueRange: any) => {
    return async (dispatch) => {
        dispatch(itemsIsLoading(true));
        try {
            const response = await window['gapi'].client.sheets.spreadsheets.values.update({
                spreadsheetId: spreadsheetId,
                range: 'A6:D10',
                valueInputOption: ValueInputOption.USER_ENTERED,
                includeValuesInResponse: true,
                responseValueRenderOption: ValueRenderOption.FORMATTED_VALUE,
                responseDateTimeRenderOption: DateTimeRenderOption.FORMATTED_STRING
            }, { values: valueRange });
            //TODO: Process response result
            const items = await response.result.values;
            dispatch(itemsFetchDataSuccess(items));
        }
        catch (ex) {
            dispatch(itemsHasErrored(true));
            console.log(ex);
            throw Error(ex);
        }
        finally {
            dispatch(itemsIsLoading(false));
        }
    };
};

export const CreateCheck = createAction(CREATE_CHECK);

export const ProcessCheckout = () => {
    return async (dispatch, getState) => {
        dispatch(itemsIsLoading(true));
        try {
            const state = getState();
            let check: Check = state.check;
            const { log } = state;

            const drinksRange = "RawDrinksData!A:G";
            const drinksData = [];
            check.drinks.forEach(async d => {
                const dateTime = moment(new Date()).format('DD.MM.YYYY HH:mm');
                const data = [d.id, d.size, check.payment, check.type, dateTime, check.id, check.sale];
                drinksData.push(data);
            });
            if (drinksData.length) {
                await dispatch(ProcessAppendData(SPREADSHEET_ID, drinksRange, drinksData));
            }

            const dessertsRange = "RawDessertsData!A:I";
            const dessertsData = [];
            check.desserts.forEach(async d => {
                const now = new Date();
                const dateTime = moment(now).format('DD.MM.YYYY HH:mm');
                const sale = BLACK_FRIDAY_DATES.indexOf(now.getDate()) > -1 ? '20 %' : check.sale;
                const data = [d.type, d.taste, d.quantity, d.size, check.payment, check.type, dateTime, check.id, sale];
                dessertsData.push(data);
            });
            if (dessertsData.length) {
                await dispatch(ProcessAppendData(SPREADSHEET_ID, dessertsRange, dessertsData));
            }

            dispatch(Checkout());
            await dispatch(ShowNotification(0, 'Заказ сохранён!'));
            
            await ProcessLog(log);
            await ProcessLog(JSON.stringify(check));
            dispatch(ClearLog());
        }
        catch (ex) {
            dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
            console.log(ex);
            throw Error(ex);
        }
        finally {
            dispatch(itemsIsLoading(false));
        }
    };
};

export const ProcessPartnersOrderSubmit = (partner: string, macQty: number, zepQty: number, buyer?: string, macaronsPrice?: number, zephyrPrice?: number) => {
    return async (dispatch) => {
        dispatch(itemsIsLoading(true));
        try {
            const partnersRange = "RawPartnersData!A:G";
            const partnersData = [[partner, macQty, zepQty, moment(new Date()).format('DD.MM.YYYY HH:mm'), buyer, macaronsPrice, zephyrPrice]];
            await dispatch(ProcessAppendData(SPREADSHEET_ID, partnersRange, partnersData));
            await ProcessLog(JSON.stringify(partnersData));
            await dispatch(ShowNotification(0, 'Заказ сохранён!'));
        }
        catch (ex) {
            dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
            console.log(ex);
            throw Error(ex);
        }
        finally {
            dispatch(itemsIsLoading(false));
        }
    };
};

export const ProcessOtherPaymentSubmit = (paymentType: PaymentTypeEnum, price: number, notes: string) => {
    return async (dispatch) => {
        dispatch(itemsIsLoading(true));
        try {
            const range = "OtherPayments!A:D";
            const data = [[paymentType, price, notes, moment(new Date()).format('DD.MM.YYYY HH:mm')]];
            await dispatch(ProcessAppendData(SPREADSHEET_ID, range, data));
            await ProcessLog(JSON.stringify(data));
            await dispatch(ShowNotification(0, 'Платёж сохранён!'));
        }
        catch (ex) {
            dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
            console.log(ex);
            throw Error(ex);
        }
        finally {
            dispatch(itemsIsLoading(false));
        }
    };
};

export const Checkout = createAction(PROCESS_CHECKOUT);

export const AddDrink = createAction(ADD_DRINK, (type: DrinksType, size: string) => [type, size]);

export const AddDessert = createAction(ADD_DESSERT, (type: DessertType, taste: string, size: string, quantity: number) => [type, taste, size, quantity]);

export const DeleteDrink = createAction(DELETE_DRINK, (type: DrinksType, size: string) => [type, size]);

export const DeleteDessert = createAction(DELETE_DESSERT, (type: DessertType, taste: string, size: string) => [type, taste, size]);

export const SetPaymentType = createAction(SET_PAYMENT_TYPE, (type: Payment) => type);

export const SetOrderType = createAction(SET_ORDER_TYPE, (type: OrderType) => type);

export const SelectSale = createAction(SELECT_SALE, (sale: SaleType) => sale);

export const itemsHasErrored = createAction(LOAD_ITEMS_REJECTED, (hasErrored: boolean) => hasErrored);

export const itemsIsLoading = createAction(LOAD_ITEMS, (isLoading: boolean) => isLoading);

export const itemsFetchDataSuccess = createAction(LOAD_ITEMS_FULFILLED, (items: any[]) => items);

export const itemsAppendSuccess = createAction(APPEND_DATA_FULFILLED, (success: boolean) => success);

export const itemsAppendErrored = createAction(APPEND_DATA_REJECTED, (text: string) => text);

export const ShowBusy = createAction(SHOW_BUSY, (isBusy: boolean) => isBusy);

export const LogData = createAction(LOG_DATA, (text: string) => text);

export const ClearLog = createAction(CLEAR_LOG);

export const Cancel = createAction(CANCEL);

export const ClearError = createAction(CLEAR_ERROR);

export const SetLastId = createAction(SET_LAST_ID, (lastId: number, lastCheck: Check) => [lastId, lastCheck]);

export const ShowNotification = createAction(SHOW_NOTIFICATION, (type: number, message: string) => [type, message]);
