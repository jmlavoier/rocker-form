import { useSelector, useDispatch } from 'react-redux';

import { changeField as actionChangeField } from '~/store/formState/actions';

const useForm = (stateName, fields) => {
  const formState = useSelector((state) => state[stateName]);
  const dispatch = useDispatch();

  const changeField = (fieldName) => ({ target }) => {
    const validationFn = fields[fieldName].validation;

    const errorMessage = validationFn(target.value);

    dispatch(actionChangeField(fieldName, target.value, errorMessage));
  };

  return [formState, changeField];
};

export default useForm;
