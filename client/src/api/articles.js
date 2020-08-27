import axios from "axios";
import { func } from "prop-types";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const withToken = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "Bearer " + token,
  },
});

const create = (data) => {
    return withToken.post('/api/articles/create', data)
}

const getLatest = () => {
  return instance.get('/api/articles/')
}

export const articlesApi = {
    create,
    getLatest
};
