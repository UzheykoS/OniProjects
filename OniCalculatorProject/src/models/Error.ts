
export default class Error {
    Status: number;
    StatusText: string; 

    constructor(status: number, statusText: string) {
        this.Status = status;
        this.StatusText = statusText;
    }
}