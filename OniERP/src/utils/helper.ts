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
} from './dictionaries';
import { DessertType, Dessert, Drink, Check, SaleType, EasterCakeEnum } from './types';

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
    let totalPrice = 0;
    check.desserts.forEach((d: Dessert) => {
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
        case DessertType.EasterCake:
          if (d.taste === EasterCakeEnum.Small) {
            totalPrice += EasterCakesPrices[0] * d.quantity;
          } else if (d.taste === EasterCakeEnum.Large) {
            totalPrice += EasterCakesPrices[1] * d.quantity;
          }
          break;
        default:
          break;
      }
    });

    check.drinks.forEach((d: Drink) => {
      const prices = DrinkPricesDict[d.id];
      if (prices.length === 1) {
        totalPrice += prices[0];
      } else {
        const index = DrinksDict[d.id].findIndex(x => x === d.size);
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
        const index = DrinksDict[d.id].findIndex(x => x === d.size);
        totalDrinksPrice += prices[index];
      }
    });

    const sale = 20;
    return (totalDessertsPrice * (100 - sale)) / 100 + totalDrinksPrice;
  }

  static getArrayFromEnum(en: any) {
    const keys = Object.keys(en);
    const values = keys.map(d => {
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
}

export default Helper;
