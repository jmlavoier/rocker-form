import { SET_COUNTRIES } from './constants';

const initialState = [];

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES: {
      const {
        countries,
      } = action.payload;

      return countries;
    }
    default: return state;
  }
};

export default countriesReducer;
