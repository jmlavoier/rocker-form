import { CHANGE_FIELD, ERASE_FORM } from './constants';

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
