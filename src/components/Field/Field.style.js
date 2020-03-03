import styled, { css } from 'styled-components';

const validationStyle = ({ isValid = true }) => ({
  [true]: css`
    border: 1px solid ${({ theme }) => theme.getColor('blue')};

    &:focus {
      box-shadow: rgba(52, 168, 137, 0.4) 0px 0px 0px 0.2em;
    }
  `,
  [false]: css`
    border: 1px solid ${({ theme }) => theme.getColor('danger')};

    &:focus {
      box-shadow: rgba(244, 67, 54, 0.4) 0px 0px 0px 0.2em;
    }
  `,
}[isValid]);

export const Wrapper = styled.div`
  margin: 0.5em;
`;

export const Input = styled.input`
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
  font-size: 14px;
  width: 100%;
  display: inline-block;
  margin: 5px;
`;
