import * as moment from 'moment';
import {
  DATE_FORMAT,
  MACARONS_PRICE,
  ZEPHYR_PRICE,
  CHOUX_PRICE,
  CHEESECAKE_PRICE,
  DrinkPricesDict,
  DrinksDict,
  CakesPricesDict,
  EasterCakesPrices,
  ICE_CREAM_PRICE,
  SORBET_PRICE,
  SMALL_CAKE_PRICE,
  DRAGEE_PRICE,
} from './dictionaries';
import {
  DessertType,
  Dessert,
  Drink,
  Check,
  SaleType,
  EasterCakeEnum,
  OrderType,
  DrinksType,
  MIX_MACARONS_6,
  MIX_MACARONS_12,
  MIX_MACARONS_24,
  SPECIAL_MIX_MACARONS_2,
} from './types';

export interface BearerToken {
  AccessToken: any;
  ExpiresOn: Date;
}

export interface OAuth2Info {
  OAuth2Authority: string;
  OAuth2ClientId: string;
  OAuth2RedirectUri: string;
  OAuth2ResourceIdentifier: string;
  OAuth2TokenService: string;
}

class Helper {
  static TokenCookieName = 'accesstokencookie_temp';

  static GUIDEmpty = '00000000-0000-0000-0000-000000000000';

  static guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  };

  static getParameterByNameFromUri = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  static getQueryVariable = (variable: string) => {
    var query = window.location.search.substring(1);
    if (!query && window.location.pathname.indexOf('%3F') > -1) {
      query = window.location.pathname.split('%3F')[1];
    }
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] == variable) {
        var value = pair[1];
        return value ? decodeURI(value) : null;
      }
    }
    return false;
  };

  static calculatePrice(check: Check) {
    let totalDrinksPrice = 0;
    let totalDessertsPrice = 0;

    let drinkSale = 0;
    let dessertSale = 0;

    switch (check.sale) {
      case SaleType.Full:
        drinkSale = 100;
        dessertSale = 100;
        break;
      case SaleType.Five:
        drinkSale = 5;
        dessertSale = 5;
        break;
      case SaleType.Ten:
        drinkSale = 10;
        dessertSale = 10;
        break;
      case SaleType.Twenty:
        drinkSale = 20;
        dessertSale = 20;
        break;
      case SaleType.Fifty:
        drinkSale = 50;
        dessertSale = 50;
        break;
      case SaleType.Staff:
        drinkSale = 70;
        dessertSale = 40;
        break;
      case SaleType.NewYear2020:
        drinkSale = 0;
        dessertSale = 0;
        break;
      case SaleType.Empty:
      default:
        break;
    }

    check.desserts.forEach((d: Dessert) => {
      switch (d.type) {
        case DessertType.Cake:
          const cakePrices = CakesPricesDict[d.taste];
          if (d.size === '18 см') {
            totalDessertsPrice += cakePrices[0] * d.quantity;
          } else if (d.size === '22 см') {
            totalDessertsPrice += cakePrices[1] * d.quantity;
          }
          break;
        case DessertType.Macaron:
          if (
            check.sale === SaleType.NewYear2020 &&
            d.taste == MIX_MACARONS_6
          ) {
            totalDessertsPrice += (165 * d.quantity) / 6;
          } else if (
            check.sale === SaleType.NewYear2020 &&
            d.taste == MIX_MACARONS_12
          ) {
            totalDessertsPrice += (330 * d.quantity) / 12;
          } else if (
            check.sale === SaleType.NewYear2020 &&
            d.taste == MIX_MACARONS_24
          ) {
            totalDessertsPrice += (660 * d.quantity) / 24;
          } else {
            totalDessertsPrice += MACARONS_PRICE * d.quantity;
          }
          break;
        case DessertType.Zephyr:
          totalDessertsPrice += ZEPHYR_PRICE * d.quantity;
          break;
        case DessertType.Choux:
          totalDessertsPrice += CHOUX_PRICE * d.quantity;
          break;
        case DessertType.Cheesecake:
          totalDessertsPrice += CHEESECAKE_PRICE * d.quantity;
          break;
        case DessertType.SmallCake:
          totalDessertsPrice += SMALL_CAKE_PRICE * d.quantity;
          break;
        case DessertType.EasterCake:
          if (d.taste === EasterCakeEnum.Small) {
            totalDessertsPrice += EasterCakesPrices[0] * d.quantity;
          } else if (d.taste === EasterCakeEnum.Large) {
            totalDessertsPrice += EasterCakesPrices[1] * d.quantity;
          }
          break;
        case DessertType.IceCream:
          totalDessertsPrice += ICE_CREAM_PRICE * d.quantity;
          break;
        case DessertType.Sorbet:
          totalDessertsPrice += SORBET_PRICE * d.quantity;
          break;
        case DessertType.Dragee:
          totalDessertsPrice += DRAGEE_PRICE * d.quantity;
          break;
        default:
          break;
      }
    });

    totalDessertsPrice = (totalDessertsPrice * (100 - dessertSale)) / 100;

    check.drinks.forEach((d: Drink) => {
      const prices = DrinkPricesDict[d.id];
      if (prices.length === 1) {
        totalDrinksPrice += prices[0];
      } else {
        const index = DrinksDict[d.id].findIndex((x) => x === d.size);
        totalDrinksPrice += prices[index];
      }
    });

    totalDrinksPrice = (totalDrinksPrice * (100 - drinkSale)) / 100;

    return totalDessertsPrice + totalDrinksPrice;
  }

  static calculateBlackFridayPrice(check: Check) {
    let totalDessertsPrice = 0;
    check.desserts.forEach((d: Dessert) => {
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
        case DessertType.Choux:
          totalDessertsPrice += CHOUX_PRICE * d.quantity;
          break;
        case DessertType.Cheesecake:
          totalDessertsPrice += CHEESECAKE_PRICE * d.quantity;
          break;
        case DessertType.Dragee:
          totalDessertsPrice += DRAGEE_PRICE * d.quantity;
          break;
        default:
          break;
      }
    });

    let totalDrinksPrice = 0;
    check.drinks.forEach((d: Drink) => {
      const prices = DrinkPricesDict[d.id];
      if (prices.length === 1) {
        totalDrinksPrice += prices[0];
      } else {
        const index = DrinksDict[d.id].findIndex((x) => x === d.size);
        totalDrinksPrice += prices[index];
      }
    });

    const sale = 20;
    return (totalDessertsPrice * (100 - sale)) / 100 + totalDrinksPrice;
  }

  static getArrayFromEnum(en: any) {
    const keys = Object.keys(en);
    const values = keys.map((d) => {
      return {
        id: d,
        value: en[d],
      };
    });
    return values;
  }

  static isToday(dateStr: string) {
    var date = moment(dateStr, DATE_FORMAT);
    var today = moment(new Date());
    return (
      date.date() == today.date() &&
      date.month() == today.month() &&
      date.year() == today.year()
    );
  }

  static getDrinkPrice(drinkType: DrinksType, drinkSize: string) {
    if (drinkType === DrinksType.StojoCup) {
      return 0;
    }
    const prices = DrinkPricesDict[drinkType];
    if (prices.length === 1) {
      return prices[0];
    } else {
      const index = DrinksDict[drinkType].findIndex((x) => x === drinkSize);
      return prices[index];
    }
  }
}

export default Helper;
