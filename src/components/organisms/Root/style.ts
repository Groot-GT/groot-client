import styled from 'styled-components';
import { NodeTheme } from 'src/types/node';

export const Background = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  top: 0;
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

export const Node = styled.div<NodeTheme>`
  padding: 10px;
  height: fit-content;
  background: chartreuse;
  background: ${({ nodeColor }) => nodeColor.root};
  color: ${({ nodeColor }) => nodeColor.text};
`;
