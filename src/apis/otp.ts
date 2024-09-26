import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const get = async (payload: { otpMethod: string, email: string }) => {
    const response = await httpRequest.get("/otp", payload)
    return response
}

export const verify = async (payload: { otpMethod: string, otpCode: string }) => {
    const response = await httpRequest.post("/otp/verify", payload)
    return response
}
