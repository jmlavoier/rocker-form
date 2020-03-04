import styled from 'styled-components';

const Box = styled.div`
  padding: 0.5em;
  width: ${({ width }) => width || 'auto'}
`;

export default Box;
