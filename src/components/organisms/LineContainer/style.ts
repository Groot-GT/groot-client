import styled from 'styled-components';

export const Container = styled.svg`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Line = styled.line`
  stroke: black;
`;
