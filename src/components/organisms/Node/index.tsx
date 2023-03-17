import { useRecoilValue } from 'recoil';
import nodeState from 'src/recoil/nodeState';
import useElementPosition from 'src/hooks/useElementPosition';
import { NodeId } from 'src/types/node';
import { NodeDirection } from 'src/constants/node';
import * as s from './style';

interface NodeProps {
  nodeId: NodeId;
  direction: NodeDirection;
  parentPosition: {
    x: number;
    y: number;
  };
}

const Node = ({ nodeId, direction, parentPosition }: NodeProps) => {
  const { children } = useRecoilValue(nodeState)[nodeId];
  const { ref, position } = useElementPosition<HTMLDivElement>();

  const childrenNodes = children.map((id) => (
    <Node
      key={id}
      nodeId={id}
      direction={direction}
      parentPosition={position}
    />
  ));

  return (
    <s.Wrapper>
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
