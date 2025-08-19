import { defineStore } from "pinia";
import { ref } from "vue";

import axios, { AxiosError } from "axios";
export const AUTH_LOGIN = "login";
export const AUTH_LOGOUT = "logout"

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    withCredentials: true,
});

export const authStore = defineStore("auth", () => {
    const token = ref<string>('')
    const login = async () => {
        // try {
        //     const { data } = await instance.post<IAuthResponse>(`/${AUTH_LOGIN}`, payload);
        //     token.value = data?.token ?? ""
        //     localStorage.setItem("token", token.value)
        //     const { id, name } = data.user;
        //     user.value = { name, id }
        //     return data;
        // } catch (error) {
        //     throw error
        // }
    }
    const logout = async () => {
        // try {
        //     const response = await instance.post<IDataLogoutResponse>(`/${AUTH_LOGOUT}`);
        //     localStorage.removeItem("token");
        //     return response.data;
        // } catch (error) {
        //     throw error
        // }
    }
    return { login, token, logout }
});