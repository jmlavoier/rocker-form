import { SET_COUNTRIES } from './constants';

import { COUNTRIES_URL } from '~/api';

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: {
    countries: countries.map((country) => country.name),
  },
});

export const fetchCountries = () => (dispatch, getState, api) => {
  api(COUNTRIES_URL).then((res) => {
    const countries = res;

    dispatch(setCountries(countries));
  }).catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
  });
};
