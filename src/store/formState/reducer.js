import { CHANGE_FIELD, ERASE_FORM } from './constants';

const initialState = {
  ssn: {
    value: '',
    isValid: true,
    errorMessage: '',
  },
  email: {
    value: '',
    isValid: true,
    errorMessage: '',
  },
  phone: {
    value: '',
    isValid: true,
    errorMessage: '',
  },
  country: {
    value: '',
    isValid: true,
    errorMessage: '',
  },
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const {
        fieldName,
        value,
        isValid,
        errorMessage,
      } = action.payload;

      return {
        ...state,
        [fieldName]: {
          value,
          isValid,
          errorMessage,
        },
      };
    }

    case ERASE_FORM:
      return initialState;
    default: return state;
  }
};

export default form;
