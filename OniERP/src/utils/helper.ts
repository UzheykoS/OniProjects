import { MACARONS_PRICE, ZEPHYR_PRICE, DrinkPricesDict, DrinksDict, CakesPricesDict } from './dictionaries';
import { DessertType, Dessert, Drink, Check, SaleType } from './types';

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
    static TokenCookieName = "accesstokencookie_temp";

    static GUIDEmpty = "00000000-0000-0000-0000-000000000000";

    static O

    static guid = () => {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    static getParameterByNameFromUri = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    static getQueryVariable = (variable: string) => {
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
        return (false);
    }

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

        return totalPrice * (100 - sale) / 100;
    }

    static getArrayFromEnum(en: any) {
        const keys = Object.keys(en);
        const values = keys.map(d => {
            return {
                id: d,
                value: en[d]
            }
        })
        return values;
    }
}

export default Helper;