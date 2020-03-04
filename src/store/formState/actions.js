import {
  CHANGE_FIELD,
  ERASE_FORM,
  SET_MESSAGES,
} from './constants';

export const changeField = (fieldName, value, errorMessage) => ({
  type: CHANGE_FIELD,
  payload: {
    fieldName,
    value,
    errorMessage,
  },
});

export const eraseForm = () => ({
  type: ERASE_FORM,
});

export const setMessages = (errors) => ({
  type: SET_MESSAGES,
  payload: {
    errors,
  },
});
