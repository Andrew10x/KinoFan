import axios from 'axios';

import { API_URL } from '../constants/urls';

export const getFilm = async filmName => {
  const response = await axios.get(`${API_URL}/film/${filmName}`);
  return response.data;
};

export const getAllFilms = async () => {
  const response = await axios.get(`${API_URL}/film`);
  return response.data;
};

export const getSeats = async (film, date, time) => {
  const response = await axios.get(`${API_URL}/seat?film=${film}&date=${date}&time=${time}`);
  return response.data;
};

export const updateSeats = async array => {
  await axios.post(`${API_URL}/seat/update`, array);
};

export const updateFilm = async film => {
  await axios.post(`${API_URL}/film/update`, film);
};

export const createFilm = async film => {
  await axios.post(`${API_URL}/film`, film);
};

export const deleteFilm = async id => {
  await axios.delete(`${API_URL}/film?id=${id}`);
};
