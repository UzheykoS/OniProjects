export const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
export const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

export const LOGS_SPREADSHEET_ID = '1NPYoV9Ys52zf9V_NklQ5JdXhjppBLe0dC9T433ZY7P8';
export const SPREADSHEET_ID = '1UBuEwqUyBIvvY1ihmEp9hb1j8m4JCpTl-a8mJ6RjUVw';
export const TEST_SPREADSHEET_ID = '1ObMh87dNmizXbdWkH9TiqfrCfApk_rqxPGuQ_zNgJIM';

const environment = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development';
let CLIENT_ID = '';
let API_KEY = '';
if (environment === "production") {
    const prod = require('./prod');
    CLIENT_ID = prod.CLIENT_ID;
    API_KEY = prod.API_KEY;
}
else {
    const dev = require('./dev');
    CLIENT_ID = dev.CLIENT_ID;
    API_KEY = dev.API_KEY;
}

export { CLIENT_ID, API_KEY };