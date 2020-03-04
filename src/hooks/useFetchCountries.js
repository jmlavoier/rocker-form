import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { COUNTRIES_URL } from '~/api';
import { fetchCountries } from '~/store/countriesState/actions';

const useFetchCountries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [COUNTRIES_URL]);

  return countries;
};

export default useFetchCountries;
