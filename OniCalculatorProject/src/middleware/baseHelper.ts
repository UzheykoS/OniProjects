import axios from 'axios';
require("babel-polyfill");

export default class BaseHelper {
    static async executeGetRequest (url: string) {
        let result = await axios.get(url);
        return result;
    }

    static async executePostRequest (url: string, data: string) {
        let result = await axios.post(url, data);
        return result;
    }

    static async executeDeleteRequest (url: string) {
        let result = await axios.delete(url);
        return result;
    }

    static async executePutRequest (url: string, data: any) {
        let result = await axios.put(url, data);
        return result;
    }
}