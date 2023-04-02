import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import produce from 'immer';
import uuid from 'react-uuid';

import nodeState from 'src/recoil/nodeState';
import { NodeId } from 'src/types/node';
import { NodeDirection } from 'src/constants/node';
import useLineCreation from 'src/hooks/useLineCreation';
import Button from 'src/components/atoms/Button';
import * as s from './style';

interface NodeProps {
  nodeId: NodeId;
  direction: NodeDirection;
}

const Node = ({ nodeId, direction }: NodeProps) => {
  const [nodes, setNode] = useRecoilState(nodeState);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickAddButton = () => {
    const newNodeId = uuid();
    setNode((prevNodes) =>
      produce(prevNodes, (draft) => {
        draft[newNodeId] = { parentId: nodeId, children: [] };
        draft[nodeId].children.push(newNodeId);
        return draft;
      }),
    );
  };

  const handleClickDeleteButton = () => {
    setNode((prevNodes) =>
      produce(prevNodes, (draft) => {
        const { parentId } = draft[nodeId];
        // 부모 노드의 children 배열에서 삭제 대상 노드 ID 제거
        draft[parentId].children = draft[parentId].children.filter(
          (id) => id !== nodeId,
        );
        // 삭제 대상 노드의 자식 노드들 제거
        draft[nodeId].children.forEach((childrenId) => {
          delete draft[childrenId];
        });
        // 삭제 대상 노드 제거
        delete draft[nodeId];
        return draft;
      }),
    );
  };

  useLineCreation({ nodeId, ref });

  const childrenNodes = nodes[nodeId].children.map((id) => (
    <Node key={id} nodeId={id} direction={direction} />
  ));

  return (
    <s.Wrapper direction={direction}>
      {direction === NodeDirection.top && <s.Row>{childrenNodes}</s.Row>}
      {direction === NodeDirection.left && <s.Column>{childrenNodes}</s.Column>}
      <s.Node ref={ref}>
        {nodeId}
        <Button onClick={handleClickAddButton}>+</Button>
        <Button onClick={handleClickDeleteButton}>-</Button>
      </s.Node>
      {direction === NodeDirection.bottom && <s.Row>{childrenNodes}</s.Row>}
      {direction === NodeDirection.right && (
        <s.Column>{childrenNodes}</s.Column>
      )}
    </s.Wrapper>
  );
};

export default Node;
