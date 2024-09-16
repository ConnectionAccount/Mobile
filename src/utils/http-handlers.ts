type ErrorMessage = {
    code: string;
    error: string;
    message: string;
}

export class HttpHandler {
    statusCode: number;
    code?: string;
    error?: string;
    message?: string;
    payload?: any

    constructor(statusCode: number, errorMessage?: ErrorMessage) {
        const { code, error, message, ...rest } = errorMessage || {};
        this.statusCode = statusCode;
        this.code = code;
        this.error = error;
        this.message = message;
        this.payload = rest;
    }

    async handle(res: Response) {
        let data;

        try {
            data = await res.json();
        } catch (error) {
            console.log(error)
            throw error;
        }

        switch (this.statusCode) {
            case 200:
            case 304:
                return data;
            default: throw new HttpHandler(this.statusCode, data) as ErrorMessage;
        }
    }
}