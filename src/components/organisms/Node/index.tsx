import produce from 'immer';
import nodeState from 'src/recoil/nodeState';
import { nodeThemeSelector } from 'src/recoil/nodeThemeState';
import uuid from 'react-uuid';
import { useRecoilState, useRecoilValue } from 'recoil';
import { NodeId } from 'src/types/node';
import useNodeRef from 'src/hooks/useNodeRef';
import { NodeDirection } from 'src/constants/node';
import Button from 'src/components/atoms/Button';
import getChildrensId from 'src/utils/getChildrensId';
import * as s from './style';

interface NodeProps {
  nodeId: NodeId;
  direction: NodeDirection;
}

const Node = ({ nodeId, direction }: NodeProps) => {
  const [nodes, setNode] = useRecoilState(nodeState);
  const nodeTheme = useRecoilValue(nodeThemeSelector);
  const ref = useNodeRef(nodeId);

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
        // 부모 노드 children 배열 업데이트
        draft[parentId].children = draft[parentId].children.filter(
          (id) => id !== nodeId,
        );
        // 자식 노드 제거
        getChildrensId(nodeId, nodes).forEach((id) => {
          delete draft[id];
        });
        // 타겟 노드 제거
        delete draft[nodeId];
        return draft;
      }),
    );
  };

  const childrenNodes = nodes[nodeId].children.map((id) => (
    <Node key={id} nodeId={id} direction={direction} />
  ));

  return (
    <s.Wrapper direction={direction}>
      {direction === NodeDirection.top && <s.Row>{childrenNodes}</s.Row>}
      {direction === NodeDirection.left && <s.Column>{childrenNodes}</s.Column>}
      <s.Node nodeColor={nodeTheme} ref={ref}>
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
