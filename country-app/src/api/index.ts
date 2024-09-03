import axios from 'axios';
import { Country } from '../interfaces/Country';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async (): Promise<Country[]> => {
  const response = await axios.get<Country[]>(`${BASE_URL}/all`);
  return response.data;
};

export const fetchCountriesByRegion = async (region: string): Promise<Country[]> => {
  const response = await axios.get<Country[]>(`${BASE_URL}/region/${region}`);
  return response.data;
};
