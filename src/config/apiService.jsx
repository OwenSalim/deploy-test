import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://6439696e1b9a7dd5c966fde8.mockapi.io/",
});

export const sheetDBAPI = axios.create({
  baseURL: "https://sheetdb.io/api/v1/8jombd5zduabl",
});
