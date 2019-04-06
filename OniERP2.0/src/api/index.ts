import { ValueInputOption, InsertDataOption, ValueRenderOption } from "../utils/types";
import { SPREADSHEET_ID } from "../config/keys";

export interface ISpreadsheetResponse {
  result: {
    value: Array<any>;
  }
}

export const getRawDessertsData = async (): Promise<ISpreadsheetResponse | null> => {
  const w = (window as any);
  const client = w && w.gapi && w.gapi.client;
  if (!client) {
    return null;
  }
  return await client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "RawDessertsData!A:K"
  });
}


export const getRawDrinksData = async (): Promise<ISpreadsheetResponse> => {
  return await (window as any).client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "RawDrinksData!A:I"
  });
}

export const appendData = async (range: string, valueRange: any) => {
  return await (window as any).client.sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range,
    valueInputOption: ValueInputOption.USER_ENTERED,
    insertDataOption: InsertDataOption.OVERWRITE,
    includeValuesInResponse: true,
    responseValueRenderOption: ValueRenderOption.FORMATTED_VALUE
  }, { values: valueRange });
}
