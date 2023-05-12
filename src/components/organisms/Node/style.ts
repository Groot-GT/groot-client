import styled from 'styled-components';
import { NodeDirection } from 'src/constants/node';
import { NodeTheme } from 'src/types/node';

export const Wrapper = styled.div<{ direction: NodeDirection }>`
  display: flex;
  align-items: center;
  justify-content: ${({ direction }) =>
          [NodeDirection.top, NodeDirection.left].includes(direction)
                  ? 'flex-end'
                  : 'flex-start'};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div``;

export const Node = styled.div<NodeTheme>`
  margin: 20px;
  padding: 10px;
  background: ${({ nodeColor }) => nodeColor.background};
  color: ${({ nodeColor }) => nodeColor.text};
`;
