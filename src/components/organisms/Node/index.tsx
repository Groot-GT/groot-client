import { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import produce from 'immer';
import uuid from 'react-uuid';

import nodeState from 'src/recoil/nodeState';
import lineState from 'src/recoil/lineState';
import { NodeId, NodeRef } from 'src/types/node';
import { NodeDirection } from 'src/constants/node';
import Button from 'src/components/atoms/Button';
import * as s from './style';

interface NodeProps {
  nodeId: NodeId;
  direction: NodeDirection;
  parentRef: NodeRef;
}

const Node = ({ nodeId, direction, parentRef }: NodeProps) => {
  const [nodes, setNode] = useRecoilState(nodeState);
  const setLine = useSetRecoilState(lineState);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickAddButton = () => {
    const newNodeId = uuid();
    setNode((prevNodes) =>
      produce(prevNodes, (draft) => {
        draft[newNodeId] = { children: [] };
        draft[nodeId].children.push(newNodeId);
        return draft;
      }),
    );
  };

  useEffect(() => {
    setLine((prevLines) => {
      const newLines = { ...prevLines };
      newLines[nodeId] = { ref, parentRef };
      return newLines;
    });
  }, [nodeId, parentRef, ref, setLine]);

  const childrenNodes = nodes[nodeId].children.map((id) => (
    <Node key={id} nodeId={id} direction={direction} parentRef={ref} />
  ));

  return (
    <s.Wrapper direction={direction}>
      {direction === NodeDirection.top && <s.Row>{childrenNodes}</s.Row>}
      {direction === NodeDirection.left && <s.Column>{childrenNodes}</s.Column>}
      <s.Node ref={ref}>
        {nodeId}
        <Button onClick={handleClickAddButton}>+</Button>
      </s.Node>
      {direction === NodeDirection.bottom && <s.Row>{childrenNodes}</s.Row>}
      {direction === NodeDirection.right && (
        <s.Column>{childrenNodes}</s.Column>
      )}
    </s.Wrapper>
  );
};

export default Node;
