import styled from 'styled-components';
import { NodeDirection } from 'src/constants/node';

type NodeProps = {
  nodeColor: {
    0: string; // background color
    1: string; // root color
    2: string; // text color
  },
}

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

export const Node = styled.div<NodeProps>`
  margin: 20px;
  padding: 10px;
  background: ${({ nodeColor }) => nodeColor[0]};
  color: ${({ nodeColor }) => nodeColor[2]};
`;
