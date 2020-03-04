import styled, { css } from 'styled-components';

const spaces = css`
  padding: 0.5em 0;
  mading: 0;
`;

export const Wrapper = styled.div`
  font-family: "Museo Sans Rounded 300";
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.div`
  background-color: #aee1ff;

  ${spaces}
`;

export const Content = styled.div`
  ${spaces}
`;

export const Footer = styled.div`
  ${spaces}
`;
