import {
  CHANGE_FIELD,
  ERASE_FORM,
  SET_MESSAGES,
} from './constants';

const initialState = {
  ssn: {
    value: '',
    errorMessage: '',
  },
  email: {
    value: '',
    errorMessage: '',
  },
  phone: {
    value: '',
    errorMessage: '',
  },
  country: {
    value: '',
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

    case SET_MESSAGES: {
      const { errors } = action.payload;

      return {
        ...state,
        ...errors.reduce((acc, curr) => ({
          ...acc,
          [curr.fieldName]: {
            value: state[curr.fieldName].value,
            errorMessage: curr.errorMessage,
          },
        }), {}),
      };
    }

    case ERASE_FORM:
      return initialState;

    default: return state;
  }
};

export default form;
