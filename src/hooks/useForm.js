import { useSelector, useDispatch } from 'react-redux';

import { changeField as actionChangeField, setMessages } from '~/store/formState/actions';

const useForm = (stateName, fields, { onSuccess = () => {}, onFail = () => {} } = {}) => {
  const formState = useSelector((state) => state[stateName]);
  const dispatch = useDispatch();

  const changeField = (fieldName) => ({ target }) => {
    const validationFn = fields[fieldName].validation;

    const errorMessage = validationFn(target.value);

    dispatch(actionChangeField(fieldName, target.value, errorMessage));
  };

  const onSubmit = () => {
    const errors = Object.keys(fields).reduce((err, fieldName) => {
      const errorMessage = fields[fieldName]
        .validation(formState[fieldName].value);

      return [
        ...err,
        {
          fieldName,
          errorMessage,
        },
      ];
    }, []);

    if (errors.length) {
      dispatch(setMessages(errors));
      return onFail();
    }

    return onSuccess();
  };

  return [formState, changeField, onSubmit];
};

export default useForm;
