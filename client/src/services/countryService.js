import axios from "axios";

const API = "http://localhost:5000/api/countries";

export const getCountries = () => axios.get(API);

export const createCountry = (data) => axios.post(API, data);

export const updateCountry = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteCountry = (id) =>
  axios.delete(`${API}/${id}`);