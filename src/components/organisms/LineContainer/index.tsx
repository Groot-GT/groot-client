import { useRecoilValue } from 'recoil';
import lineState from 'src/recoil/lineState';
import nodeState from 'src/recoil/nodeState';
import { NodeId, NodeRef } from 'src/types/node';
import getElementPosition from 'src/utils/getElementPosition';
import { ROOT_NODE_ID } from 'src/constants/node';
import * as s from './style';

interface LineContainerProps {
  width: number;
  height: number;
}

const LineContainer = ({ width, height }: LineContainerProps) => {
  const lineInfo = useRecoilValue(lineState);
  const nodes = useRecoilValue(nodeState);
  const lines: [NodeId, NodeRef][] = Object.entries(lineInfo);

  return (
    <s.Container viewBox={`0 0 ${width} ${height}`}>
      {lines.map(([nodeId, ref]) => {
        if (nodeId === ROOT_NODE_ID) {
          return null;
        }

        const parentRef = lineInfo[nodes[nodeId].parentId];

        const { x, y } = getElementPosition(ref);
        const { x: parentX, y: parentY } = getElementPosition(parentRef);

        return (
          <s.Line key={`${x}${y}`} x1={parentX} y1={parentY} x2={x} y2={y} />
        );
      })}
    </s.Container>
  );
};

export default LineContainer;
