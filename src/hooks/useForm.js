/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';

import {
  changeField as actionChangeField,
  setMessages,
  eraseForm,
} from '~/store/formState/actions';

const useForm = (stateName, fields) => {
  const formState = useSelector((state) => state[stateName]);
  const dispatch = useDispatch();

  const changeField = (fieldName) => ({ target }) => {
    const validationFn = fields[fieldName].validation;

    const errorMessage = validationFn(target.value);

    dispatch(actionChangeField(fieldName, target.value, errorMessage));
  };

  const onSubmit = () => {
    const fieldsArray = Object.keys(fields).reduce((accFields, fieldName) => {
      const errorMessage = fields[fieldName]
        .validation(formState[fieldName].value);

      return [
        ...accFields,
        {
          fieldName,
          errorMessage,
        },
      ];
    }, []);

    const isValid = fieldsArray.every((field) => field.errorMessage === '');

    if (isValid) {
      console.log('Success!');
      return dispatch(eraseForm());
    }

    return dispatch(setMessages(fieldsArray));
  };

  return [formState, changeField, onSubmit];
};

export default useForm;
