import { useRecoilValue } from 'recoil';
import nodeState from 'src/recoil/nodeState';
import { NodeId, NodeValue } from 'src/types/node';
import { ROOT_NODE_ID } from 'src/constants/node';
import * as s from './style';

interface LineContainerProps {
  width: number;
  height: number;
}

const LineContainer = ({ width, height }: LineContainerProps) => {
  const nodeInfo = useRecoilValue(nodeState);
  const nodes: [NodeId, NodeValue][] = Object.entries(
    useRecoilValue(nodeState),
  );

  return (
    <s.Container viewBox={`0 0 ${width} ${height}`}>
      {nodes.map(([id, { parentId, position }]) => {
        if (id === ROOT_NODE_ID || !position) {
          return null;
        }

        const parentPosition = nodeInfo[parentId].position;

        if (!parentPosition) {
          return null;
        }
        const { x, y } = position;
        const { x: parentX, y: parentY } = parentPosition;

        return (
          <s.Line key={`${x}${y}`} x1={parentX} y1={parentY} x2={x} y2={y} />
        );
      })}
    </s.Container>
  );
};

export default LineContainer;
