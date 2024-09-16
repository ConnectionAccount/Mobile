import type { Store } from "@reduxjs/toolkit";
import qs from "qs";
import { HttpHandler } from "./http-handlers";
import { store } from "../store";

type Options = {
    method: string;
    contentType?: string;
}

type JSONobj = any;

export class HttpRequest {
    uri?: string;
    store?: Store;
    errorHandler?: (statusCode: number, error: HttpHandler) => void;

    zipCode?: number;
    latitude?: number;
    longitude?: number;
    cityName?: number;

    constructor(errorHandler?: (statusCode: number, error: HttpHandler) => void) {
        this.errorHandler = errorHandler;
    }

    async request(
        api: string,
        data: JSONobj,
        options: Options,
        header: any = {}
    ) {
        if (!this.store && !store) {
            throw new Error("No store found");
        }
        if (!this.store) {
            this.store = store;
        }
        if (!this.uri) {
            throw new Error("No uri found");
        }

        const state = this.store.getState();

        const defaultOptions: RequestInit = {
            credentials: "include",
            method: options.method,
            headers: {
                Accept : "application/json",
                "Content-Type" : "application/json; charset=utf-8",
                "zip-code" : this.zipCode,
                latitude: this.latitude,
                longitude: this.longitude,
                "city-name" : "UB",
                ...header,
            }
        };
        if (
            state.auth &&
            state.auth.device &&
            typeof state.auth.device === "string"
        ) {
            defaultOptions.headers = {
                ...defaultOptions.headers,
                device: state.auth.device,
            };
        };

        if (
            state.auth &&
            state.auth.deviceToken &&
            typeof state.auth.deviceToken === "string"
        ) {
            defaultOptions.headers = {
                ...defaultOptions.headers,
                "X-Device" : state.auth.deviceToken,
            };
        };

        if (options.contentType === "multipart/form-data") {
            defaultOptions.headers = {
                ...defaultOptions.headers,
                ["Content-Type"] : options.contentType
            };

            defaultOptions.body = data as BodyInit_;
        } else {
            defaultOptions.body = JSON.stringify(data) as BodyInit_;  
        };

        let queryString = "";

        if (options.method === "GET") {
            delete defaultOptions.body;
            queryString = `?${qs.stringify(data)}`;
        }

        try {
            const res = await fetch(
                `${this.uri}${api}${queryString}`,
                defaultOptions
            );
            const http = new HttpHandler(res.status);
            const response = await http.handle(res);
            return response;
        } catch (error) {
            if (this.errorHandler) {
                this.errorHandler((error as HttpHandler).statusCode, error as HttpHandler);
                return;
            };
        };
    };

    get(api: string, data?: JSONobj, header?: any) {
        return this.request(api, data || {}, { method: "GET" }, header);
    };

    post(api: string, data?: JSONobj, header?: any) {
        return this.request(api, data || {}, { method: "POST" }, header);
    };

    put(api: string, data?: JSONobj, header?: any) {
        return this.request(api, data || {}, { method: "PUT" }, header);
    };

    del(api: string, data?: JSONobj, header?: any) {
        return this.request(api, data || {}, { method: "DELETE" }, header);
    };

    upload(api: string, data?: JSONobj) {
        return this.request(api, data || {}, {
            method: "POST",
            contentType: "multipart/form-data"
        });
    };
}