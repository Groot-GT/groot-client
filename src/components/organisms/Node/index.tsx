import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import nodeState from 'src/recoil/nodeState';
import lineState from 'src/recoil/lineState';
import useElementPosition from 'src/hooks/useElementPosition';
import { NodeId, NodePosition } from 'src/types/node';
import { NodeDirection } from 'src/constants/node';
import * as s from './style';

interface NodeProps {
  nodeId: NodeId;
  direction: NodeDirection;
  parentPosition: NodePosition;
}

const Node = ({ nodeId, direction, parentPosition }: NodeProps) => {
  const { children } = useRecoilValue(nodeState)[nodeId];
  const setLine = useSetRecoilState(lineState);
  const { ref, position } = useElementPosition<HTMLDivElement>();

  useEffect(() => {
    setLine((state) => {
      const newState = { ...state };
      newState[nodeId] = {
        ...position,
        parentX: parentPosition.x,
        parentY: parentPosition.y,
      };
      return newState;
    });
  }, [nodeId, parentPosition, position, setLine]);

  const childrenNodes = children.map((id) => (
    <Node
      key={id}
      nodeId={id}
      direction={direction}
      parentPosition={position}
    />
  ));

  return (
    <s.Wrapper direction={direction}>
      {direction === NodeDirection.top && <s.Row>{childrenNodes}</s.Row>}
      {direction === NodeDirection.left && <s.Column>{childrenNodes}</s.Column>}
      <s.Node ref={ref}>{nodeId}</s.Node>
      {direction === NodeDirection.bottom && <s.Row>{childrenNodes}</s.Row>}
      {direction === NodeDirection.right && (
        <s.Column>{childrenNodes}</s.Column>
      )}
    </s.Wrapper>
  );
};

export default Node;
