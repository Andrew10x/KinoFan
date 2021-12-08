import axios from 'axios';

import { API_URL } from '../constants/urls';

export const getFilm = async filmName => {
  const response = await axios.get(`${API_URL}/film/${filmName}`);
  return response.data;
};

export const getAllFilms = async () => {
  const response = await axios.get(`${API_URL}/film`);
  return response.data;
}
