import { HttpHandler } from "./http-handlers";
import { HttpRequest as BaseHttpRequest } from "./http-request";
import { DeviceEventEmitter } from "react-native";

export class HttpRequest extends BaseHttpRequest {
    uri = "http://localhost:3000/";
    errorHandler = (statusCode: number, error: HttpHandler) => {
        DeviceEventEmitter.emit("http.handler.error", {
            error,
            statusCode,
        });
    };
};