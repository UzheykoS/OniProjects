import {
  ValueInputOption,
  InsertDataOption,
  ValueRenderOption,
} from '../utils/types';
import { SPREADSHEET_ID } from '../config/keys';

export interface ISpreadsheetResponse {
  result: {
    value: Array<any>;
  };
}

export const getRawDessertsData = (): Promise<ISpreadsheetResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await (window as any).gapi.client.sheets.spreadsheets.values.get(
        {
          spreadsheetId: SPREADSHEET_ID,
          range: 'RawDessertsData!A:K',
        }
      );
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

export const getRawDrinksData = (): Promise<ISpreadsheetResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await (window as any).gapi.client.sheets.spreadsheets.values.get(
        {
          spreadsheetId: SPREADSHEET_ID,
          range: 'RawDrinksData!A:I',
        }
      );
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

export const appendData = async (range: string, valueRange: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      await (window as any).gapi.client.sheets.spreadsheets.values.append(
        {
          spreadsheetId: SPREADSHEET_ID,
          range,
          valueInputOption: ValueInputOption.USER_ENTERED,
          insertDataOption: InsertDataOption.OVERWRITE,
          includeValuesInResponse: true,
          responseValueRenderOption: ValueRenderOption.FORMATTED_VALUE,
        },
        { values: valueRange }
      );
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
