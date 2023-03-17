import styled from 'styled-components';
import { NodeDirection } from 'src/constants/node';

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

export const Node = styled.div`
  margin: 10px;
  padding: 10px;
  background: aquamarine;
`;
