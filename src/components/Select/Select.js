import React from 'react';
import {
  oneOfType, string, number, func, arrayOf,
} from 'prop-types';

import { Wrapper, SelectStyled, Label } from './Select.style';

const Select = ({
  name, value, onChange, errorMessage,
  options,
}) => {
  const isValid = errorMessage === '';

  return (
    <Wrapper isValid={isValid}>
      <Label errorMessage={errorMessage}>{name}</Label>
      <SelectStyled
        name={name}
        value={value}
        onChange={onChange}
        isValid={isValid}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </SelectStyled>
    </Wrapper>
  );
};

Select.propTypes = {
  errorMessage: string,
  name: string.isRequired,
  onChange: func.isRequired,
  options: arrayOf(string),
  value: oneOfType([string, number]),
};

Select.defaultProps = {
  errorMessage: '',
  options: [],
  value: '',
};

export default Select;
