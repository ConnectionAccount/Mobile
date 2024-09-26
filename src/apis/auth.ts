import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

type IRegister = {
    username: string;
    email: string;
    phone: string;
    password: string;
}

export const register = async (payload: IRegister) => {
    const response = await httpRequest.post("/auth/register", payload)
    return response
}

export const login = async (payload: { email: string; password: string }) => {
    const response = await httpRequest.post("/auth/login", payload)
    return response;
}

export const forgot = async ({ email } : { email: string }) => {
    const response = await httpRequest.post("/auth/forgot", { email })
    return response;
}

export const changePassword = async (payload: { oldPassword: string | null, password: string }) => {
    const response = await httpRequest.post("/auth/change-password", payload)
    return response
}

export const logout = async () => await httpRequest.post("/auth/logout")