import { CHANGE_FIELD } from './constants';

export const changeField = (fieldName, value, errorMessage) => ({
  type: CHANGE_FIELD,
  payload: {
    fieldName,
    value,
    errorMessage,
  },
});
