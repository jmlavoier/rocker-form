const api = (url) => fetch(url).then((res) => res.json());

export const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all';

export default (url) => api(url);
