import { types, getRoot, flow, Instance, getSnapshot, cast } from 'mobx-state-tree';
import RootStore from './root.store';
import { getRawDessertsData, getRawDrinksData, appendData } from '../api';
import RouterStore from './router.store';
import DateType from './custom-types/DateType';
import {
  DessertType,
  Payment,
  OrderType,
  PaymentTypeEnum,
  ProfilesEnum,
  IDrink,
  SaleType,
  DrinksType,
} from '../utils/types';
import moment from 'moment';
import {
  MACARONS_PRICE,
  ZEPHYR_PRICE,
  DATE_FORMAT,
  CHOUX_PRICE,
  CHEESECAKE_PRICE,
  CakesPricesDict,
  DrinkPricesDict,
  DrinksDict,
} from '../utils/dictionaries';
import Helper from '../utils/helper';

const BLACK_FRIDAY_DATES = [23, 24];
const BONUS_PERCENT = 0.02;

interface IPartnersCheckout {
  partner: string;
  macQty: number;
  zepQty: number;
  buyer?: string;
  macaronsPrice?: number;
  zephyrPrice?: number;
  payment?: Payment;
  isPaid?: boolean;
}

interface IOtherPayment {
  paymentType: PaymentTypeEnum;
  price: number;
  notes: string;
  payment: Payment;
}

interface ICashboxSubmit {
  cash: number;
  notes: string;
  date?: moment.Moment;
}

const DessertModel = types.model('DessertModel', {
  type: types.maybe(
    types.enumeration('DessertType', [
      'Макаронс',
      'Зефир',
      'Торт',
      'Шу',
      'Чизкейк',
    ])
  ),
  taste: '',
  size: '',
  quantity: 0,
});

const DrinkModel = types.model('DrinkModel', {
  id: types.maybe(
    types.enumeration('DrinkType', [
      'Какао',
      'Американо',
      'Американо с молоком',
      'Капучино',
      'Флет Вайт',
      'Раф',
      'Латте',
      'Латте Лаванда',
      'Латте Карамель',
      'Латте Апельсин',
      'Эспрессо',
      'Доппио',
      'Лонг блэк',
      'Макиато',
      'Чай Зелёный',
      'Чай Чёрный',
      'Чай Травяной',
      'Чай Груша-Лайм',
      'Чай Апельсин-Облепиха',
      'Чай Малина-Имбирь',
      'Горячий шоколад',
      'Лимонад Клубника',
      'Лимонад Цитрус',
      'Лимонад Маракуйя',
      'Айс Латте',
      'Сироп',
    ])
  ),
  size: '',
  quantity: 0,
});

const CheckModel = types.model('CheckModel', {
  id: 0,
  desserts: types.optional(types.array(DessertModel), []),
  drinks: types.optional(types.array(DrinkModel), []),
  isFinished: false,
  payment: types.maybe(
    types.enumeration('PaymentType', ['Карта', 'Наличка', 'Другое'])
  ),
  type: types.maybe(
    types.enumeration('OrderType', ['Предзаказ', 'Витрина', 'Другое'])
  ),
  sale: types.maybe(
    types.enumeration('SaleType', ['0 %', '10 %', '20 %', '40 %', '100 %'])
  ),
  isPaid: false,
  date: DateType,
});

const AppStore = types
  .model('AppStore', {
    hasErrored: false,
    isLoading: false,
    items: types.optional(types.array(types.string), []),
    check: types.maybeNull(CheckModel),
    history: types.optional(types.array(CheckModel), []),
    errorMessage: '',
    lastId: 0,
    notificationType: 0,
    currentProfile: ProfilesEnum.Alina,
    dailyBonus: '--'
  })
  .views(self => ({
    get totalPrice() {
      const check = getSnapshot(self.check!)!;
      let totalPrice = 0;
      check.desserts.forEach(d => {
        switch (d.type) {
          case DessertType.Cake:
            const cakePrices = CakesPricesDict[d.taste];
            if (d.size === '18 см') {
              totalPrice += cakePrices[0];
            } else if (d.size === '22 см') {
              totalPrice += cakePrices[1];
            }
            break;
          case DessertType.Macaron:
            totalPrice += MACARONS_PRICE * d.quantity;
            break;
          case DessertType.Zephyr:
            totalPrice += ZEPHYR_PRICE * d.quantity;
            break;
          case DessertType.Choux:
            totalPrice += CHOUX_PRICE * d.quantity;
            break;
          case DessertType.Cheesecake:
            totalPrice += CHEESECAKE_PRICE * d.quantity;
            break;
          default:
            break;
        }
      });

      check.drinks.forEach(d => {
        const prices = DrinkPricesDict[d.id!];
        if (prices.length === 1) {
          totalPrice += prices[0];
        } else {
          const index = DrinksDict[d.id!].findIndex(x => x === d.size);
          totalPrice += prices[index];
        }
      });

      let sale = 0;
      switch (check.sale) {
        case SaleType.Full:
          sale = 100;
          break;
        case SaleType.Ten:
          sale = 10;
          break;
        case SaleType.Twenty:
          sale = 20;
          break;
        case SaleType.Fourty:
          sale = 40;
          break;
        case SaleType.Empty:
        default:
          break;
      }

      return (totalPrice * (100 - sale)) / 100;
    },
    get blackFridayPrice() {
      const check = getSnapshot(self.check!)!;
      let totalDessertsPrice = 0;
      check.desserts.forEach(d => {
        switch (d.type) {
          case DessertType.Cake:
            const cakePrices = CakesPricesDict[d.taste];
            if (d.size === '18 см') {
              totalDessertsPrice += cakePrices[0];
            } else if (d.size === '22 см') {
              totalDessertsPrice += cakePrices[1];
            }
            break;
          case DessertType.Macaron:
            totalDessertsPrice += MACARONS_PRICE * d.quantity;
            break;
          case DessertType.Zephyr:
            totalDessertsPrice += ZEPHYR_PRICE * d.quantity;
            break;
          default:
            break;
        }
      });

      let totalDrinksPrice = 0;
      check.drinks.forEach(d => {
        const prices = DrinkPricesDict[d.id!];
        if (prices.length === 1) {
          totalDrinksPrice += prices[0];
        } else {
          const index = DrinksDict[d.id!].findIndex(x => x === d.size);
          totalDrinksPrice += prices[index];
        }
      });

      const sale = 20;
      return (totalDessertsPrice * (100 - sale)) / 100 + totalDrinksPrice;
    },
  }))
  .actions(self => {
    const init = flow(function*() {
      try {
        const { result: desserts } = yield getRawDessertsData();
        const { result: drinks } = yield getRawDrinksData();

        const lastDessertOrderId = Math.max(
          ...desserts.values.slice(1).map(d => (d[7] ? Number(d[7]) : 0))
        );
        const lastDrinkOrderId = Math.max(
          ...drinks.values.slice(1).map(d => (d[5] ? Number(d[5]) : 0))
        );
        const lastId = Math.max(lastDessertOrderId, lastDrinkOrderId) || 0;

        const lastOrder = {
          id: lastId,
          desserts: [],
          drinks: [],
          isFinished: true,
          payment: Payment.Other,
          type: OrderType.Other,
          sale: SaleType.Empty,
          isPaid: true,
          date: moment(new Date()),
        };
        let lastOrderPayment;
        let lastOrderType;
        let isPaid = false;
        let lastOrderDate;

        lastOrder.desserts = desserts.values
          .slice(1)
          .filter(v => v[7] === lastId.toString())
          .map(d => {
            lastOrderPayment = d[4] === 'Наличка' ? Payment.Cash : Payment.Card;
            lastOrderType =
              d[5] === 'Витрина' ? OrderType.Shop : OrderType.PreOrder;
            isPaid = d[10] === 'Да';
            lastOrderDate = moment(d[6], DATE_FORMAT);
            const dessert = {
              type: d[0],
              taste: d[1],
              quantity: d[2],
              size: d[3],
            };
            return dessert;
          });

        lastOrder.drinks = drinks.values
          .slice(1)
          .filter(v => v[5] === lastId.toString())
          .map(d => {
            lastOrderPayment = d[2] === 'Наличка' ? Payment.Cash : Payment.Card;
            lastOrderType =
              d[3] === 'Витрина' ? OrderType.Shop : OrderType.PreOrder;
            isPaid = d[8] === 'Да';
            lastOrderDate = moment(d[4], DATE_FORMAT);
            const dessert: IDrink = {
              id: d[0],
              size: d[1],
            };
            return dessert;
          });
        lastOrder.payment = lastOrderPayment;
        lastOrder.type = lastOrderType;
        lastOrder.isPaid = isPaid;
        lastOrder.date = lastOrderDate;

        self.history.push(lastOrder);
      } catch (e) {}
    });

    const save = flow(function*(range: string, valueRange: any) {
      try {
        return yield appendData(range, valueRange);
      } catch (e) {}
    });

    const checkout = flow(function*() {
      if (!self.check) {
        return;
      }
      try {
        const check = getSnapshot(self.check)!;

        const drinksRange = 'RawDrinksData!A:I';
        const drinksData: Array<Array<string | number | undefined>> = [];
        check.drinks.forEach(async d => {
          const dateTime = moment(new Date()).format(DATE_FORMAT);
          const data = [
            d.id,
            d.size,
            check.payment,
            check.type,
            dateTime,
            check.id,
            check.sale,
            self.currentProfile,
            check.isPaid ? 'Да' : 'Нет',
          ];
          drinksData.push(data);
        });
        if (drinksData.length) {
          yield save(drinksRange, drinksData);
        }

        const dessertsRange = 'RawDessertsData!A:K';
        const dessertsData: Array<Array<string | number | undefined>> = [];
        check.desserts.forEach(async d => {
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
            self.currentProfile,
            check.isPaid ? 'Да' : 'Нет',
          ];
          dessertsData.push(data);
        });
        if (dessertsData.length) {
          yield save(dessertsRange, dessertsData);
        }

        // redirect after data save and before check is cleared

        check.isFinished = true;
        self.history.push(check);
        self.check = null;
        self.lastId++;

        // await dispatch(ShowNotification(0, 'Заказ сохранён!'));
      } catch (e) {
        // dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
        // console.log(ex);
      }
    });

    const partnersCheckout = flow(function*({
      partner,
      macQty,
      zepQty,
      buyer,
      macaronsPrice,
      zephyrPrice,
      payment,
      isPaid,
    }: IPartnersCheckout) {
      if (!self.check) {
        return;
      }
      try {
        const partnersRange = 'RawPartnersData!A:H';
        const partnersData = [
          [
            partner,
            macQty,
            zepQty,
            moment(new Date()).format(DATE_FORMAT),
            buyer,
            macaronsPrice,
            zephyrPrice,
            payment,
            isPaid ? 'Да' : 'Нет',
          ],
        ];
        yield save(partnersRange, partnersData);
        // await dispatch(ShowNotification(0, 'Заказ сохранён!'));
      } catch (e) {
        // dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
        // console.log(ex);
      }
    });

    const otherPayment = flow(function*({
      paymentType,
      price,
      notes,
      payment,
    }: IOtherPayment) {
      if (!self.check) {
        return;
      }
      try {
        const range = 'OtherPayments!A:F';
        const data = [
          [
            paymentType,
            price,
            notes,
            moment(new Date()).format(DATE_FORMAT),
            payment,
          ],
        ];
        yield save(range, data);
        // await dispatch(ShowNotification(0, 'Платёж сохранён!'));
      } catch (e) {
        // dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
        // console.log(ex);
      }
    });

    const cashboxSubmit = flow(function*({
      cash,
      notes,
      date,
    }: ICashboxSubmit) {
      if (!self.check) {
        return;
      }
      try {
        const range = 'Finance!H:J';
        const data = [
          [
            cash,
            notes,
            date
              ? date.format(DATE_FORMAT)
              : moment(new Date()).format(DATE_FORMAT),
          ],
        ];
        yield save(range, data);
        // await dispatch(ShowNotification(0, 'Данные сохранены!'));
      } catch (e) {
        // dispatch(itemsAppendErrored('Ошибка. Проверьте, что вы вошли в систему.'));
        // console.log(ex);
      }
    });

    const createCheck = () => {
      self.check = {
        id: self.lastId++,
        desserts: cast([]),
        drinks: cast([]),
        isFinished: false,
        payment: 'Наличка',
        type: 'Витрина',
        sale: '0 %',
        isPaid: false,
        date: moment(new Date()),
      };
    };

    const cancel = () => {
      self.check = null;
    };

    const addDrink = ({
      type,
      size,
      quantity,
    }: {
      type: DrinksType;
      size: string;
      quantity: number;
    }) => {
      const check = getSnapshot(self.check!)!;
      const existingDrink = check.drinks.find(
        d => d.id === type && d.size === size
      );

      if (!!existingDrink) {
        // TODO: check and probably fix
        existingDrink.quantity += quantity;
      } else {
        const drink = {
          id: type,
          size,
          quantity: 1,
        };
        for (let i = 0; i < quantity; i++) {
          self.check!.drinks.push(drink);
        }
      }
    };

    const deleteDrink = ({
      type,
      size,
    }: {
      type: DrinksType;
      size: string;
    }) => {
      const check = getSnapshot(self.check!)!;

      const newCheck = { ...check };
      let index = -1;
      for (const d of newCheck.drinks) {
        index++;
        if (d.id === type && d.size === size) {
          break;
        }
      }

      if (index > -1) {
        newCheck.drinks.splice(index, 1);
      }

      self.check = cast(newCheck);
    };

    const addDessert = ({
      type,
      size,
      quantity,
      taste,
    }: {
      type: DessertType;
      taste: string;
      size: string | null;
      quantity: number;
    }) => {
      const check = getSnapshot(self.check!)!;
      const newCheck = { ...check };

      const existingDessert = newCheck.desserts.find(
        d => d.type === type && d.taste === taste && d.size === size
      );

      if (!!existingDessert) {
        existingDessert.quantity += quantity;
      } else {
        newCheck.desserts.push({
          type,
          taste,
          size: size || '',
          quantity,
        });
      }

      self.check = cast(newCheck);
    };

    const deleteDessert = ({
      type: checkType,
      size: checkSize,
      taste: checkTaste,
    }: {
      type: DessertType;
      taste: string;
      size: string;
    }) => {
      const check = getSnapshot(self.check!)!;

      const newCheck = { ...check };

      const comparator = ({ type, taste, size }) => {
        if (type === checkType && taste === checkTaste) {
          if (checkSize) {
            return size !== checkSize;
          } else {
            return false;
          }
        }
        return true;
      };

      newCheck.desserts = newCheck.desserts.filter(d => comparator(d));

      self.check = cast(newCheck);
    };

    const getDailyBonus = flow(function*() {
      const { result } = yield getRawDessertsData();
      let totalBonus = 0;

      const todayDesserts = result.values
        .slice(1)
        .filter(
          v =>
            [
              DessertType.Macaron,
              DessertType.Zephyr,
              DessertType.Choux,
              DessertType.Cheesecake,
            ].indexOf(v[0]) > -1 &&
            Helper.isToday(v[6]) &&
            v[9] === self.currentProfile
        );

      todayDesserts.forEach(d => {
        if (d[0] === DessertType.Macaron) {
          totalBonus +=
            (d[2] * MACARONS_PRICE * BONUS_PERCENT * (100 - parseInt(d[8], 10))) /
            100;
        } else if (d[0] === DessertType.Zephyr) {
          totalBonus +=
            (d[2] * ZEPHYR_PRICE * BONUS_PERCENT * (100 - parseInt(d[8], 10))) /
            100;
        } else if (d[0] === DessertType.Choux) {
          totalBonus +=
            (d[2] * CHOUX_PRICE * BONUS_PERCENT * (100 - parseInt(d[8], 10))) / 100;
        } else if (d[0] === DessertType.Cheesecake) {
          totalBonus +=
            (d[2] * CHEESECAKE_PRICE * BONUS_PERCENT * (100 - parseInt(d[8], 10))) /
            100;
        }
      });
      self.dailyBonus = totalBonus.toFixed(2).toString();
    });

    return {
      init,
      checkout,
      partnersCheckout,
      otherPayment,
      cashboxSubmit,
      createCheck,
      cancel,
      addDrink,
      deleteDrink,
      addDessert,
      deleteDessert,
      getDailyBonus
    };
  });

export default AppStore;
