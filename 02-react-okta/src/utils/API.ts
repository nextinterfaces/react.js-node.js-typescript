import { AxiosInstance } from "axios";
import axios from "axios";

class API {
    private static _instance: API = new API();
    private _http;

    constructor() {
        if (API._instance) {
            throw new Error('Error: Singleton illegal access. Use Singleton.get()');
        }
        API._instance = this;
    }

    public static axios(): AxiosInstance {

        if (API._instance._http) {
            return API._instance._http;
        }

        const options = {
            baseURL: '//' + window.location.host,
            // timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        API._instance._http = axios.create(options);
        return API._instance._http;
    }
}

export { API };