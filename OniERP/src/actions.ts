import { createAction, Action } from 'redux-actions';
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
  SHOW_NOTIFICATION,
  CHANGE_PROFILE,
  SET_IS_PAID,
  SET_DAILY_PERCENT,
  SELECT_STAFF,
  SET_DRINKS_COUNT,
} from './actionTypes';
import {
  DrinksType,
  DessertType,
  Payment,
  OrderType,
  Check,
  PaymentTypeEnum,
  ValueInputOption,
  InsertDataOption,
  ValueRenderOption,
  DateTimeRenderOption,
  Dessert,
  Drink,
  SaleType,
  EasterCakeEnum,
  Staff,
} from './utils/types';
import { LOGS_SPREADSHEET_ID, SPREADSHEET_ID } from './config/keys';
import * as moment from 'moment';
import {
  MACARONS_PRICE,
  ZEPHYR_PRICE,
  DATE_FORMAT,
  CHOUX_PRICE,
  CHEESECAKE_PRICE,
  CakesPricesDict,
  EasterCakesPrices,
  ICE_CREAM_PRICE,
  SORBET_PRICE,
  SMALL_CAKE_PRICE,
  DRAGEE_PRICE,
} from './utils/dictionaries';
import Helper from './utils/helper';

const BLACK_FRIDAY_DATES = [29, 30];
const BONUS_PERCENT_DRINKS = 0.02;
const BONUS_PERCENT_DESSERTS = 0.02;

export const ProcessFetchData = (spreadsheetId: string) => {
  return async (dispatch) => {
    dispatch(itemsIsLoading(true));
    try {
      const dessertsResponse = await window[
        'gapi'
      ].client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'RawDessertsData!A:K',
      });
      const drinksResponse = await window[
        'gapi'
      ].client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'RawDrinksData!A:I',
      });

      if (
        dessertsResponse.result.values.length <= 1 &&
        drinksResponse.result.values.length <= 1
      ) {
        dispatch(SetLastId(0, null));
      } else {
        let lastDessertOrderId = Math.max(
          ...dessertsResponse.result.values
            .slice(1)
            .map((d) => (d[7] ? Number(d[7]) : 0))
        );
        let lastDrinkOrderId = Math.max(
          ...drinksResponse.result.values
            .slice(1)
            .map((d) => (d[5] ? Number(d[5]) : 0))
        );
        const lastId = Math.max(lastDessertOrderId, lastDrinkOrderId) || 0;

        const lastOrder: Check = {
          id: lastId,
          desserts: [],
          drinks: [],
          isFinished: true,
          payment: Payment.Other,
          type: OrderType.Other,
          sale: SaleType.Empty,
          isPaid: true,
          date: null,
          staff: null,
        };
        let lastOrderPayment = null;
        let lastOrderType = null;
        let isPaid = null;
        let lastOrderDate = null;

        lastOrder.desserts = dessertsResponse.result.values
          .slice(1)
          .filter((v) => v[7] === lastId.toString())
          .map((d) => {
            lastOrderPayment =
              d[4] === 'Наличка'
                ? Payment.Cash
                : d[4] === 'Карта'
                ? Payment.Card
                : Payment.Terminal;
            lastOrderType =
              d[5] === 'Витрина' ? OrderType.Shop : OrderType.PreOrder;
            isPaid = d[10] === 'Да';
            lastOrderDate = moment(d[6], DATE_FORMAT);
            const dessert: Dessert = {
              type: d[0],
              taste: d[1],
              quantity: d[2],
              size: d[3],
            };
            return dessert;
          });

        lastOrder.drinks = drinksResponse.result.values
          .slice(1)
          .filter((v) => v[5] === lastId.toString())
          .map((d) => {
            lastOrderPayment =
              d[2] === 'Наличка'
                ? Payment.Cash
                : d[2] === 'Карта'
                ? Payment.Card
                : Payment.Terminal;
            lastOrderType =
              d[3] === 'Витрина' ? OrderType.Shop : OrderType.PreOrder;
            isPaid = d[8] === 'Да';
            lastOrderDate = moment(d[4], DATE_FORMAT);
            const dessert: Drink = {
              id: d[0],
              size: d[1],
            };
            return dessert;
          });
        lastOrder.payment = lastOrderPayment;
        lastOrder.type = lastOrderType;
        lastOrder.isPaid = isPaid;
        lastOrder.date = lastOrderDate;
        dispatch(SetLastId(lastId, lastOrder));
        // dispatch(itemsFetchDataSuccess([...desserts, ...drinks]));
      }
    } catch (ex) {
      dispatch(itemsHasErrored(true));
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};

export const ProcessAppendData = (
  spreadsheetId: string,
  range: string,
  valueRange: any
) => {
  return async (dispatch) => {
    dispatch(itemsIsLoading(true));
    try {
      const response = await window[
        'gapi'
      ].client.sheets.spreadsheets.values.append(
        {
          spreadsheetId: spreadsheetId,
          range: range,
          valueInputOption: ValueInputOption.USER_ENTERED,
          insertDataOption: InsertDataOption.OVERWRITE,
          includeValuesInResponse: true,
          responseValueRenderOption: ValueRenderOption.FORMATTED_VALUE,
        },
        { values: valueRange }
      );

      // const updatedCellsCount = await response.result.updates.updatedCells;
      dispatch(itemsAppendSuccess(true));
    } catch (ex) {
      dispatch(
        itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.')
      );
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};

export const ProcessLog = async (message: string) => {
  try {
    const dateTime = new Date();
    const data = [[message, dateTime.toUTCString()]];

    await window['gapi'].client.sheets.spreadsheets.values.append(
      {
        spreadsheetId: LOGS_SPREADSHEET_ID,
        range: 'A:B',
        valueInputOption: ValueInputOption.USER_ENTERED,
        insertDataOption: InsertDataOption.OVERWRITE,
        includeValuesInResponse: true,
        responseValueRenderOption: ValueRenderOption.FORMATTED_VALUE,
      },
      { values: data }
    );
  } catch (ex) {
    console.log(ex);
    throw Error(ex);
  }
};

export const ProcessUpdateData = (spreadsheetId: string, valueRange: any) => {
  return async (dispatch) => {
    dispatch(itemsIsLoading(true));
    try {
      const response = await window[
        'gapi'
      ].client.sheets.spreadsheets.values.update(
        {
          spreadsheetId: spreadsheetId,
          range: 'A6:D10',
          valueInputOption: ValueInputOption.USER_ENTERED,
          includeValuesInResponse: true,
          responseValueRenderOption: ValueRenderOption.FORMATTED_VALUE,
          responseDateTimeRenderOption: DateTimeRenderOption.FORMATTED_STRING,
        },
        { values: valueRange }
      );
      //TODO: Process response result
      const items = await response.result.values;
      dispatch(itemsFetchDataSuccess(items));
    } catch (ex) {
      dispatch(itemsHasErrored(true));
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};

export const CreateCheck = createAction(CREATE_CHECK);

export const ProcessCheckout = (callback) => {
  return async (dispatch, getState) => {
    dispatch(itemsIsLoading(true));
    try {
      const state = getState();
      let check: Check = state.check;
      const { log, currentProfile } = state;

      const drinksRange = 'RawDrinksData!A:J';
      const drinksData = [];
      check.drinks.forEach(async (d) => {
        const dateTime = moment(new Date()).format(DATE_FORMAT);
        const data = [
          d.id,
          d.size,
          check.payment,
          check.type,
          dateTime,
          check.id,
          check.sale,
          currentProfile,
          check.isPaid ? 'Да' : 'Нет',
          check.staff,
        ];
        drinksData.push(data);
      });
      if (drinksData.length) {
        await dispatch(
          ProcessAppendData(SPREADSHEET_ID, drinksRange, drinksData)
        );
      }

      const dessertsRange = 'RawDessertsData!A:L';
      const dessertsData = [];
      check.desserts.forEach(async (d) => {
        const now = new Date();
        const dateTime = moment(now).format(DATE_FORMAT);
        // const sale = BLACK_FRIDAY_DATES.indexOf(now.getDate()) > -1 ? '20 %' : check.sale;
        const data = [
          d.type,
          d.taste,
          d.quantity,
          d.size,
          check.payment,
          check.type,
          dateTime,
          check.id,
          check.sale,
          currentProfile,
          check.isPaid ? 'Да' : 'Нет',
          check.staff,
        ];
        dessertsData.push(data);
      });
      if (dessertsData.length) {
        await dispatch(
          ProcessAppendData(SPREADSHEET_ID, dessertsRange, dessertsData)
        );
      }

      if (callback) {
        // redirect after data save and before check is cleared
        callback();
      }

      dispatch(Checkout());
      await dispatch(ShowNotification(0, 'Заказ сохранён!'));

      await ProcessLog(log);
      await ProcessLog(JSON.stringify(check));
      dispatch(ClearLog());
    } catch (ex) {
      dispatch(
        itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.')
      );
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};

export const ProcessPartnersOrderSubmit = (
  partner: string,
  macQty: number,
  zepQty: number,
  buyer?: string,
  macaronsPrice?: number,
  zephyrPrice?: number,
  payment?: Payment,
  isPaid?: boolean,
  date?: moment.Moment
) => {
  return async (dispatch) => {
    dispatch(itemsIsLoading(true));
    try {
      const partnersRange = 'RawPartnersData!A:H';
      const partnersData = [
        [
          partner,
          macQty,
          zepQty,
          date
            ? date.format(DATE_FORMAT)
            : moment(new Date()).format(DATE_FORMAT),
          buyer,
          macaronsPrice,
          zephyrPrice,
          payment,
          isPaid ? 'Да' : 'Нет',
        ],
      ];
      await dispatch(
        ProcessAppendData(SPREADSHEET_ID, partnersRange, partnersData)
      );
      await ProcessLog(JSON.stringify(partnersData));
      await dispatch(ShowNotification(0, 'Заказ сохранён!'));
    } catch (ex) {
      dispatch(
        itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.')
      );
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};

export const ProcessOtherPaymentSubmit = (
  paymentType: PaymentTypeEnum,
  price: number,
  notes: string,
  payment: Payment,
  date?: moment.Moment
) => {
  return async (dispatch) => {
    dispatch(itemsIsLoading(true));
    try {
      const range = 'OtherPayments!A:F';
      const data = [
        [
          paymentType,
          price,
          notes,
          date
            ? date.format(DATE_FORMAT)
            : moment(new Date()).format(DATE_FORMAT),
          payment,
        ],
      ];
      await dispatch(ProcessAppendData(SPREADSHEET_ID, range, data));
      await ProcessLog(JSON.stringify(data));
      await dispatch(ShowNotification(0, 'Платёж сохранён!'));
    } catch (ex) {
      dispatch(
        itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.')
      );
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};

export const ProcessCashboxSubmit = (cash: number, date?: moment.Moment) => {
  return async (dispatch) => {
    dispatch(itemsIsLoading(true));
    try {
      const range = 'Finance!H:I';
      const data = [
        [
          cash,
          date
            ? date.format(DATE_FORMAT)
            : moment(new Date()).format(DATE_FORMAT),
        ],
      ];
      await dispatch(ProcessAppendData(SPREADSHEET_ID, range, data));
      await ProcessLog(JSON.stringify(data));
      await dispatch(ShowNotification(0, 'Данные сохранены!'));
    } catch (ex) {
      dispatch(
        itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.')
      );
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};

export const ProcessProductSubmit = (
  macarons: number,
  choux: number,
  zephyr: number,
  iceCream: number,
  cakes: number,
  cheesecake: number,
  notes: string,
  date?: moment.Moment
) => {
  return async (dispatch) => {
    dispatch(itemsIsLoading(true));
    try {
      const range = 'Products!A:I';
      const data = [
        [
          macarons,
          choux,
          zephyr,
          iceCream,
          cakes,
          cheesecake,
          null,
          notes,
          date
            ? date.format(DATE_FORMAT)
            : moment(new Date()).format(DATE_FORMAT),
        ],
      ];
      await dispatch(ProcessAppendData(SPREADSHEET_ID, range, data));
      await ProcessLog(JSON.stringify(data));
      await dispatch(ShowNotification(0, 'Данные сохранены!'));
    } catch (ex) {
      dispatch(
        itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.')
      );
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};

export const ProcessWriteOffSubmit = (
  macarons: number,
  choux: number,
  zephyr: number,
  iceCream: number,
  cakes: number,
  cheesecake: number,
  coffee: number,
  notes: string,
  date?: moment.Moment
) => {
  return async (dispatch) => {
    dispatch(itemsIsLoading(true));
    try {
      const range = 'Products!A:I';
      const data = [
        [
          -macarons,
          -choux,
          -zephyr,
          -iceCream,
          -cakes,
          -cheesecake,
          -coffee,
          notes,
          date
            ? date.format(DATE_FORMAT)
            : moment(new Date()).format(DATE_FORMAT),
        ],
      ];
      await dispatch(ProcessAppendData(SPREADSHEET_ID, range, data));
      await ProcessLog(JSON.stringify(data));
      await dispatch(ShowNotification(0, 'Данные сохранены!'));
    } catch (ex) {
      dispatch(
        itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.')
      );
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};

export const Checkout = createAction(PROCESS_CHECKOUT);

export const AddDrink = createAction(
  ADD_DRINK,
  (type: DrinksType | string, size: string, quantity: number) => [
    type,
    size,
    quantity,
  ]
);

export const AddDessert = createAction(
  ADD_DESSERT,
  (type: DessertType, taste: string, size: string, quantity: number) => [
    type,
    taste,
    size,
    quantity,
  ]
);

export const DeleteDrink = createAction(
  DELETE_DRINK,
  (type: DrinksType, size: string) => [type, size]
);

export const DeleteDessert = createAction(
  DELETE_DESSERT,
  (type: DessertType, taste: string, size: string) => [type, taste, size]
);

export const SetPaymentType = createAction(
  SET_PAYMENT_TYPE,
  (type: Payment) => type
);

export const SetOrderType = createAction(
  SET_ORDER_TYPE,
  (type: OrderType) => type
);

export const SelectSale = createAction(SELECT_SALE, (sale: SaleType) => sale);

export const SetIsPaid = createAction(SET_IS_PAID, (isPaid: boolean) => isPaid);

export const SelectStaff = createAction(SELECT_STAFF, (staff: Staff) => staff);

export const itemsHasErrored = createAction(
  LOAD_ITEMS_REJECTED,
  (hasErrored: boolean) => hasErrored
);

export const itemsIsLoading = createAction(
  LOAD_ITEMS,
  (isLoading: boolean) => isLoading
);

export const itemsFetchDataSuccess = createAction(
  LOAD_ITEMS_FULFILLED,
  (items: any[]) => items
);

export const itemsAppendSuccess = createAction(
  APPEND_DATA_FULFILLED,
  (success: boolean) => success
);

export const itemsAppendErrored = createAction(
  APPEND_DATA_REJECTED,
  (text: string) => text
);

export const ShowBusy = createAction(SHOW_BUSY, (isBusy: boolean) => isBusy);

export const LogData = createAction(LOG_DATA, (text: string) => text);

export const ClearLog = createAction(CLEAR_LOG);

export const Cancel = createAction(CANCEL);

export const ClearError = createAction(CLEAR_ERROR);

export const SetLastId = createAction(
  SET_LAST_ID,
  (lastId: number, lastCheck: Check) => [lastId, lastCheck]
);

export const ShowNotification = createAction(
  SHOW_NOTIFICATION,
  (type: number, message: string) => [type, message]
);

export const ChangeProfile = createAction(
  CHANGE_PROFILE,
  (profile: string) => profile
);

export const SetDailyPercent = createAction(
  SET_DAILY_PERCENT,
  (bonus: string) => bonus
);

export const SetDrinksCount = createAction(
  SET_DRINKS_COUNT,
  (count: number) => count
);

const getSale = (sale) => {
  return sale === SaleType.Staff ? 100 : parseInt(sale);
};

export const CalculateDailyPercent = () => {
  return async (dispatch, getState) => {
    dispatch(itemsIsLoading(true));
    try {
      const state = getState();
      let totalBonus = 0;

      const drinksResponse = await window[
        'gapi'
      ].client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'RawDrinksData!A:J',
      });

      const todayDrinks = drinksResponse.result.values
        .slice(1)
        .filter((v) => Helper.isToday(v[4]) && v[7] === state.currentProfile);

      const dessertsResponse = await window[
        'gapi'
      ].client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'RawDessertsData!A:J',
      });

      todayDrinks.forEach((d) => {
        totalBonus +=
          (Helper.getDrinkPrice(d[0], d[1]) *
            BONUS_PERCENT_DRINKS *
            (100 - getSale(d[6]))) /
          100;
      });

      const todayDesserts = dessertsResponse.result.values
        .slice(1)
        .filter(
          (v) =>
            [
              DessertType.Macaron,
              DessertType.Zephyr,
              DessertType.Choux,
              DessertType.Cheesecake,
              DessertType.Cake,
              DessertType.EasterCake,
              DessertType.IceCream,
              DessertType.Sorbet,
              DessertType.SmallCake,
              DessertType.Dragee,
            ].indexOf(v[0]) > -1 &&
            Helper.isToday(v[6]) &&
            v[9] === state.currentProfile &&
            v[5] === OrderType.Shop
        );

      todayDesserts.forEach((d) => {
        if (d[0] === DessertType.Macaron) {
          totalBonus +=
            (d[2] *
              MACARONS_PRICE *
              BONUS_PERCENT_DESSERTS *
              (100 - getSale(d[8]))) /
            100;
        } else if (d[0] === DessertType.Zephyr) {
          totalBonus +=
            (d[2] *
              ZEPHYR_PRICE *
              BONUS_PERCENT_DESSERTS *
              (100 - getSale(d[8]))) /
            100;
        } else if (d[0] === DessertType.Choux) {
          totalBonus +=
            (d[2] *
              CHOUX_PRICE *
              BONUS_PERCENT_DESSERTS *
              (100 - getSale(d[8]))) /
            100;
        } else if (d[0] === DessertType.Cheesecake) {
          totalBonus +=
            (d[2] *
              CHEESECAKE_PRICE *
              BONUS_PERCENT_DESSERTS *
              (100 - getSale(d[8]))) /
            100;
        } else if (d[0] === DessertType.SmallCake) {
          totalBonus +=
            (d[2] *
              SMALL_CAKE_PRICE *
              BONUS_PERCENT_DESSERTS *
              (100 - getSale(d[8]))) /
            100;
        } else if (d[0] === DessertType.Cake) {
          let cakePrice = 0;
          const cakePrices = CakesPricesDict[d[1]];
          if (cakePrices && cakePrices.length) {
            if (d[3] === '18 см') {
              cakePrice += cakePrices[0];
            } else if (d[3] === '22 см') {
              cakePrice += cakePrices[1];
            }
            totalBonus +=
              (d[2] *
                cakePrice *
                BONUS_PERCENT_DESSERTS *
                (100 - getSale(d[8]))) /
              100;
          }
        } else if (d[0] === DessertType.EasterCake) {
          let easterCakePrice = 0;
          if (d[1] === EasterCakeEnum.Small) {
            easterCakePrice += EasterCakesPrices[0];
          } else if (d[1] === EasterCakeEnum.Large) {
            easterCakePrice += EasterCakesPrices[1];
          }
          totalBonus +=
            (d[2] *
              easterCakePrice *
              BONUS_PERCENT_DESSERTS *
              (100 - getSale(d[8]))) /
            100;
        } else if (d[0] === DessertType.IceCream) {
          totalBonus +=
            (d[2] *
              ICE_CREAM_PRICE *
              BONUS_PERCENT_DESSERTS *
              (100 - getSale(d[8]))) /
            100;
        } else if (d[0] === DessertType.Sorbet) {
          totalBonus +=
            (d[2] *
              SORBET_PRICE *
              BONUS_PERCENT_DESSERTS *
              (100 - getSale(d[8]))) /
            100;
        } else if (d[0] === DessertType.Dragee) {
          totalBonus +=
            (d[2] *
              DRAGEE_PRICE *
              BONUS_PERCENT_DESSERTS *
              (100 - getSale(d[8]))) /
            100;
        }
      });

      dispatch(SetDailyPercent(totalBonus.toFixed(2)));
    } catch (ex) {
      dispatch(itemsHasErrored(true));
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};

export const CountDailyDrinks = () => {
  return async (dispatch, getState) => {
    dispatch(itemsIsLoading(true));
    try {
      const state = getState();
      const drinksResponse = await window[
        'gapi'
      ].client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'RawDrinksData!A:J',
      });

      const todayDrinks = drinksResponse.result.values
        .slice(1)
        .filter(
          (v) =>
            [
              DrinksType.Syrop,
              DrinksType.VeganMilk,
              DrinksType.Milk,
              DrinksType.Cream,
              DrinksType.Cup240,
              DrinksType.Cup355,
              DrinksType.Cup470,
              DrinksType.Seeds50,
            ].indexOf(v[0]) < 0 &&
            Helper.isToday(v[4]) &&
            v[7] === state.currentProfile
        );
      dispatch(SetDrinksCount(todayDrinks.length));
    } catch (ex) {
      dispatch(itemsHasErrored(true));
      console.log(ex);
      throw Error(ex);
    } finally {
      dispatch(itemsIsLoading(false));
    }
  };
};
