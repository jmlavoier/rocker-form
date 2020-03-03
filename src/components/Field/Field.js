import React from 'react';
import {
  oneOfType, string, number, func, bool,
} from 'prop-types';

import { Wrapper, Input, Label } from './Field.style';

const Field = ({
  name, value, onChange, isValid,
  placeholder,
}) => (
  <Wrapper>
    <Label>{name}</Label>
    <Input
      name={name}
      value={value}
      onChange={onChange}
      isValid={isValid}
      placeholder={placeholder}
    />
  </Wrapper>
);

Field.propTypes = {
  value: oneOfType([string, number]),
  placeholder: oneOfType([string, number]),
  name: string.isRequired,
  onChange: func.isRequired,
  isValid: bool,
};

Field.defaultProps = {
  value: '',
  placeholder: '',
  isValid: true,
};

export default Field;
