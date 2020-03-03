import styled from 'styled-components';
import { node } from 'prop-types';

const getColor = (color) => ({ theme }) => theme.getColor(color);

const Button = styled.button`
  border: 0;
  width: 100%;
  padding: 0.5em 0.75em;
  border-radius: 5px;
  font-size: 22px;
  color: ${getColor('white')};
  background-color: ${getColor('primary')};
`;

Button.propTypes = {
  children: node.isRequired,
};

export default Button;
