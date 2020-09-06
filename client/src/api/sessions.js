import axios from "axios";
import {$token} from "../features/common/token"



const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const withToken = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "Bearer " + $token.getState(),
  },
});

export const loginUser = (loginData) =>
  instance.post("/api/auth/login", loginData);

export const registerUser = (registerData) =>
  instance.post("/api/auth/register", registerData);

export const getCurrentAccount = () => withToken.get("/api/auth/me");
