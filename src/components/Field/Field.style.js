import styled, { css } from 'styled-components';

const getColor = (color) => ({ theme }) => theme.getColor(color);

const validationStyle = ({ isValid = true }) => {
  const colors = {
    [true]: {
      border: getColor('blue'),
      boxShadow: 'rgba(52, 168, 137, 0.4) 0px 0px 0px 0.2em',
    },
    [false]: {
      border: getColor('danger'),
      boxShadow: 'rgba(244, 67, 54, 0.4) 0px 0px 0px 0.2em;',
    },
  };

  return css`
    border: 1px solid ${colors[isValid].border};

    &:focus {
      box-shadow: ${colors[isValid].boxShadow};
    }
  `;
};

export const Wrapper = styled.div`
  margin: 0.5em 0;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.getColor('text')};
  background-color: transparent;
  ${validationStyle}
  border-radius: 0.2rem;
  padding: 0.5em 0.75em;
  font-size: 18px;
  outline: 0px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.getColor('text')};
  font-size: 18px;
  width: 100%;
  display: inline-block;
  margin: 0.5em 0;
`;
