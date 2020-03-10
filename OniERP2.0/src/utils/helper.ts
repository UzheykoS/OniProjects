import moment from 'moment';
import { DATE_FORMAT } from './dictionaries';

export interface IBearerToken {
  AccessToken: any;
  ExpiresOn: Date;
}

export interface IOAuth2Info {
  OAuth2Authority: string;
  OAuth2ClientId: string;
  OAuth2RedirectUri: string;
  OAuth2ResourceIdentifier: string;
  OAuth2TokenService: string;
}

class Helper {
  static TokenCookieName = 'accesstokencookie_temp';

  static GUIDEmpty = '00000000-0000-0000-0000-000000000000';

  static O;

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
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  static getQueryVariable = (variable: string) => {
    let query = window.location.search.substring(1);
    if (!query && window.location.pathname.indexOf('%3F') > -1) {
      query = window.location.pathname.split('%3F')[1];
    }
    const vars = query.split('&');
    for (const item of vars) {
      const pair = item.split('=');
      if (pair[0] === variable) {
        const value = pair[1];
        return value ? decodeURI(value) : null;
      }
    }
    return false;
  };

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
    const date = moment(dateStr, DATE_FORMAT);
    const today = moment(new Date());
    return (
      date.date() === today.date() &&
      date.month() === today.month() &&
      date.year() === today.year()
    );
  }
}

export default Helper;
