import styled from 'styled-components';

export const Background = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

export const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Node = styled.div`
  padding: 10px;
  background: chartreuse;
`;
