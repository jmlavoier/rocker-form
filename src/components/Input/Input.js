/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  oneOfType, string, number, func,
} from 'prop-types';

import { Wrapper, InputStyled, Label } from './Input.style';

const Input = ({
  name, value, onChange, errorMessage,
  ...props
}) => {
  const isValid = errorMessage === '';

  return (
    <Wrapper isValid={isValid}>
      <Label errorMessage={errorMessage}>{name}</Label>
      <InputStyled
        name={name}
        value={value}
        onChange={onChange}
        isValid={isValid}
        {...props}
      />
    </Wrapper>
  );
};

Input.propTypes = {
  value: oneOfType([string, number]),
  placeholder: oneOfType([string, number]),
  name: string.isRequired,
  onChange: func.isRequired,
  errorMessage: string,
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  errorMessage: '',
};

export default Input;
