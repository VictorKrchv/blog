import axios from "axios";

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

const deleteData = (id) => {
  return withToken.delete(`/api/articles/delete/${id}`)
}


const getLatest = () => {
  return instance.get('/api/articles/')
}

const getById = (id) => {
  return instance.get(`/api/articles/${id}`)
} 

export const articlesApi = {
    create,
    deleteData,
    getLatest,
    getById
};
